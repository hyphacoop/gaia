"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[1361],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=i,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||r;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(8168),i=(t(6540),t(5680));const r={title:"Quick Start - Join Mainnet",sidebar_position:3},o=void 0,s={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quick Start - Join Mainnet",description:"Bootstrap a  cosmoshub-4 mainnet node",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/main/getting-started/quickstart",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Quick Start - Join Mainnet",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installing Gaia",permalink:"/main/getting-started/installation"},next:{title:"System requirements",permalink:"/main/getting-started/system-requirements"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Sync Options",id:"sync-options",level:3},{value:"State Sync",id:"state-sync",level:4},{value:"Quick Sync",id:"quick-sync",level:4},{value:"Create Gaia Home &amp; Config",id:"create-gaia-home--config",level:5},{value:"Start Quicksync Download",id:"start-quicksync-download",level:5},{value:"Default",id:"default",level:6},{value:"Pruned",id:"pruned",level:6},{value:"Archive",id:"archive",level:6},{value:"Unzip",id:"unzip",level:5},{value:"Copy Address Book Quicksync",id:"copy-address-book-quicksync",level:5},{value:"Start Gaia",id:"start-gaia",level:5}],p={toc:l},u="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Bootstrap a  ",(0,i.yg)("inlineCode",{parentName:"strong"},"cosmoshub-4")," mainnet node")),(0,i.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"Note"),": Make sure the ",(0,i.yg)("a",{parentName:"p",href:"/main/getting-started/installation"},"Gaia CLI is installed"),".")),(0,i.yg)("h3",{id:"sync-options"},"Sync Options"),(0,i.yg)("p",null,"To quickly get started, node operators can choose to sync via State Sync or by downloading a snapshot from Quicksync. State Sync works by replaying larger chunks of application state directly rather than replaying individual blocks or consensus rounds. Quicksync is a service provided courtesy of ChainLayer, and offers historical state of the chain available for download every 24 hours. For more advanced information on setting up a node, see the Sync Options section of the full ",(0,i.yg)("a",{parentName:"p",href:"/main/hub-tutorials/join-mainnet"},"Joining Mainnet Tutorial")),(0,i.yg)("h4",{id:"state-sync"},"State Sync"),(0,i.yg)("p",null,"To enable state sync, visit an ",(0,i.yg)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/blocks"},"explorer")," to get a recent block height and corresponding hash. A node operator can choose any height/hash in the current bonding period, but as the recommended snapshot period is 1000 blocks, it is advised to choose something close to current height - 1000. Set these parameters in the code snippet below ",(0,i.yg)("inlineCode",{parentName:"p"},"<BLOCK_HEIGHT>")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"<BLOCK_HASH>")),(0,i.yg)("p",null,"For reference, the list of ",(0,i.yg)("inlineCode",{parentName:"p"},"rpc_servers")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"persistent")," peers can be found in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/chain-registry/blob/master/cosmoshub/chain.json"},"cosmos hub chain-registry repo"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# Build gaiad binary and initialize chain\ncd $HOME\ngit clone -b v18.0.0 https://github.com/cosmos/gaia --depth=1\ncd gaiad\nmake install\ngaiad init CUSTOM_MONIKER --chain-id cosmoshub-4\n\n#Set minimum gas price & peers\nsed -i'' 's/minimum-gas-prices = \"\"/minimum-gas-prices = \"0.0025uatom\"/' $HOME/.gaia/config/app.toml\nsed -i'' 's/persistent_peers = \"\"/persistent_peers = '\"\\\"$(curl -s https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/chain.json | jq -r '[foreach .peers.seeds[] as $item (\"\"; \"\\($item.id)@\\($item.address)\")] | join(\",\")')\\\"\"'/' $HOME/.gaia/config/config.toml\n\n# Configure State sync\nsed -i'' 's/enable = false/enable = true/' $HOME/.gaia/config/config.toml\nsed -i'' 's/trust_height = 0/trust_height = <BLOCK_HEIGHT>/' $HOME/.gaia/config/config.toml\nsed -i'' 's/trust_hash = \"\"/trust_hash = \"<BLOCK_HASH>\"/' $HOME/.gaia/config/config.toml\nsed -i'' 's/rpc_servers = \"\"/rpc_servers = \"https:\\/\\/cosmos-rpc.polkachu.com:443,https:\\/\\/rpc-cosmoshub-ia.cosmosia.notional.ventures:443,https:\\/\\/rpc.cosmos.network:443\"/' $HOME/.gaia/config/config.toml\n\n#Start Gaia\ngaiad start --x-crisis-skip-assert-invariants\n")),(0,i.yg)("h4",{id:"quick-sync"},"Quick Sync"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note"),": Make sure to set the ",(0,i.yg)("inlineCode",{parentName:"p"},"--home")," flag when initializing and starting ",(0,i.yg)("inlineCode",{parentName:"p"},"gaiad")," if mounting quicksync data externally."),(0,i.yg)("h5",{id:"create-gaia-home--config"},"Create Gaia Home & Config"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir $HOME/.gaia/config -p\n")),(0,i.yg)("h5",{id:"start-quicksync-download"},"Start Quicksync Download"),(0,i.yg)("p",null,"Node Operators can decide how much of historical state they want to preserve by choosing between ",(0,i.yg)("inlineCode",{parentName:"p"},"Pruned"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Default"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"Archive"),". See the ",(0,i.yg)("a",{parentName:"p",href:"https://quicksync.io/networks/cosmos.html"},"Quicksync.io downloads")," for up-to-date snapshot sizes."),(0,i.yg)("h6",{id:"default"},"Default"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash="},"sudo apt-get install wget liblz4-tool aria2 jq -y\n\nexport URL=`curl -L https://quicksync.io/cosmos.json|jq -r '.[] |select(.file==\"cosmoshub-4-default\")|.url'`\n\necho $URL\n\ncd $HOME/.gaia\n\naria2c -x5 $URL\n")),(0,i.yg)("h6",{id:"pruned"},"Pruned"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash="},"sudo apt-get install wget liblz4-tool aria2 jq -y\n\nexport URL=`curl -L https://quicksync.io/cosmos.json|jq -r '.[] |select(.file==\"cosmoshub-4-pruned\")|.url'`\n\necho $URL\n\ncd $HOME/.gaia\n\naria2c -x5 $URL\n")),(0,i.yg)("h6",{id:"archive"},"Archive"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash="},"sudo apt-get install wget liblz4-tool aria2 jq -y\n\nexport URL=`curl -L https://quicksync.io/cosmos.json|jq -r '.[] |select(.file==\"cosmoshub-4-archive\")|.url'`\n\necho $URL\n\ncd $HOME/.gaia\n\naria2c -x5 $URL\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"The download logs should look like the following")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"01/11 07:48:17 [NOTICE] Downloading 1 item(s)\n[#7cca5a 484MiB/271GiB(0%) CN:5 DL:108MiB ETA:42m41s]\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Completed Download Process:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"[#7cca5a 271GiB/271GiB(99%) CN:1 DL:77MiB]\n01/11 08:32:19 [NOTICE] Download complete: /mnt/quicksync_01/cosmoshub-4-pruned.20220111.0310.tar.lz4\n\nDownload Results:\ngid   |stat|avg speed  |path/URI\n======+====+===========+=======================================================\n7cca5a|OK  |   105MiB/s|/mnt/quicksync_01/cosmoshub-4-pruned.20220111.0310.tar.lz4\n\nStatus Legend:\n(OK):download completed.\n")),(0,i.yg)("h5",{id:"unzip"},"Unzip"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"lz4 -c -d `basename $URL` | tar xf -\n")),(0,i.yg)("h5",{id:"copy-address-book-quicksync"},"Copy Address Book Quicksync"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"curl https://quicksync.io/addrbook.cosmos.json > $HOME/.gaia/config/addrbook.json\n")),(0,i.yg)("h5",{id:"start-gaia"},"Start Gaia"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad start --x-crisis-skip-assert-invariants\n\n")))}g.isMDXComponent=!0}}]);