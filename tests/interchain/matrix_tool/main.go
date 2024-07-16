//go:build version_tool
// +build version_tool

package main

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"slices"
	"strconv"
	"strings"

	"github.com/google/go-github/v62/github"
	"github.com/tidwall/gjson"
	"golang.org/x/mod/semver"
)

func GetPreviousMajorMinor(ctx context.Context, testVersion string) (previousMajor string, previousMinor string, upgradeName string, err error) {
	org, ok := os.LookupEnv("GITHUB_REPOSITORY_OWNER")
	if !ok {
		org = "cosmos"
	}
	client := github.NewClient(nil)
	releaes, _, err := client.Repositories.ListReleases(ctx, org, "gaia", nil)
	if err != nil {
		err = fmt.Errorf("ListReleases failed: %w", err)
		return
	}
	upgradeName = semver.Major(testVersion)
	testMajor, err := strconv.Atoi(upgradeName[1:])
	if err != nil {
		err = fmt.Errorf("failed to parse major version: %w", err)
		return
	}
	semvers := make([]string, 0, len(releaes))
	for _, release := range releaes {
		semvers = append(semvers, release.GetTagName())
	}
	slices.SortFunc(semvers,
		func(i, j string) int {
			// Sort in descending order
			return semver.Compare(j, i)
		})
	for _, v := range semvers {
		if !semver.IsValid(v) {
			continue
		}
		var major int
		major, err = strconv.Atoi(semver.Major(v)[1:])
		if err != nil {
			err = fmt.Errorf("failed to parse major version: %w", err)
			return
		}
		if previousMinor == "" && major == testMajor && semver.Compare(v, testVersion) < 0 {
			previousMinor = v
			continue
		} else if major == testMajor-1 {
			previousMajor = v
			return
		}
	}
	err = fmt.Errorf("failed to find previous major version")
	return
}

func GetSemverForBranch() (string, error) {
	mod, err := exec.Command("go", "mod", "edit", "-json").Output()
	if err != nil {
		return "", fmt.Errorf("go mod edit -json failed: %w\n", err)
	}
	module := gjson.GetBytes(mod, "Module.Path").String()
	parts := strings.Split(module, "/")
	major := parts[len(parts)-1]
	return fmt.Sprintf("%s.999.0", major), nil
}

func GetTestList() ([]string, error) {
	retval := []string{}
	out, err := exec.Command("go", "test", "-list=.", "./tests/interchain/...").Output()
	if err != nil {
		return nil, fmt.Errorf("go test -list failed: %w\n", err)
	}
	lines := strings.Split(string(out), "\n")
	for _, line := range lines {
		if strings.HasPrefix(line, "Test") {
			retval = append(retval, line)
		}
	}
	return retval, nil
}

func main() {
	ctx := context.Background()
	if len(os.Args) != 2 {
		fmt.Fprintf(os.Stderr, "Usage: %s <version>\n", os.Args[0])
		return
	}
	if _, err := os.Stat("go.mod"); err != nil {
		fmt.Fprintf(os.Stderr, "go.mod not found: %v\nRun me from the root of the gaia repo!\n", err)
		return
	}
	testTag := os.Args[1]
	testVersion := testTag
	if !semver.IsValid(testVersion) {
		var err error
		testVersion, err = GetSemverForBranch()
		if err != nil {
			fmt.Fprint(os.Stderr, err)
			return
		}
	}
	previousMajor, previousMinor, upgradeName, err := GetPreviousMajorMinor(ctx, testVersion)
	if err != nil {
		fmt.Fprint(os.Stderr, err)
		return
	}
	tests, err := GetTestList()
	if err != nil {
		fmt.Fprint(os.Stderr, err)
		return
	}
	previous := []string{previousMajor}
	if previousMinor != "" {
		previous = append(previous, previousMinor)
	}
	matrix := map[string][]string{
		// It needs to be versionOrBranch so it matches the docker image that was pushed
		"test_version":     {testTag},
		"previous_version": previous,
		"test_name":        tests,
		"upgrade_name":     {upgradeName},
	}
	marshaled, err := json.Marshal(matrix)
	if err != nil {
		fmt.Fprint(os.Stderr, err)
		return
	}
	fmt.Println(string(marshaled))
}
