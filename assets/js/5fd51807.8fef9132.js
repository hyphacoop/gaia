"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[6331],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>h});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,h=d["".concat(l,".").concat(c)]||d[c]||g[c]||o;return t?a.createElement(h,i(i({ref:n},s),{},{components:t})):a.createElement(h,i({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=t(8168),r=(t(6540),t(5680));const o={title:"Upgrading the Chain",order:6},i=void 0,p={unversionedId:"hub-tutorials/live-upgrade-tutorial",id:"hub-tutorials/live-upgrade-tutorial",title:"Upgrading the Chain",description:"This document demonstrates how a live upgrade can be performed on-chain through a",source:"@site/docs/hub-tutorials/live-upgrade-tutorial.md",sourceDirName:"hub-tutorials",slug:"/hub-tutorials/live-upgrade-tutorial",permalink:"/main/hub-tutorials/live-upgrade-tutorial",draft:!1,tags:[],version:"current",frontMatter:{title:"Upgrading the Chain",order:6},sidebar:"tutorialSidebar",previous:{title:"Joining Testnet",permalink:"/main/hub-tutorials/join-testnet"},next:{title:"Upgrading Your Node",permalink:"/main/hub-tutorials/upgrade-node"}},l={},u=[],s={toc:u},d="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This document demonstrates how a live upgrade can be performed on-chain through a\ngovernance process."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start the network and trigger upgrade"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# start a gaia application full-node\n$ gaiad start\n\n# set up the cli config\n$ gaiad config chain-id testing\n\n# create an upgrade governance proposal\n$ gaiad tx gov submit-proposal  <path-to-proposal-json> --from <name-or-key>\n\nWhere proposal json file contains MsgSoftwareUpgrade e.g.\n`{\n    "messages": [\n     {\n      "@type": "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",\n      "authority":"cosmos10d07y265gmmuvt4z0w9aw880jnsr700j6zn9kn" ,\n      "plan": {\n       "name": "plan name",\n       "height": "1000" ,\n       "info": "proposal info" ,\n       "upgraded_client_state": null\n      }\n     }\n    ],\n    "metadata": "ipfs://CID",\n    "deposit": "10000000stake",\n    "title": "proposal title",\n    "summary": "proposal summary"\n}`\n\n')))),(0,r.yg)("h1",{id:"once-the-proposal-passes-you-can-query-the-pending-plan"},"once the proposal passes you can query the pending plan"),(0,r.yg)("p",null,"   $ gaiad query upgrade plan"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'\n2. Performing an upgrade\n\nAssuming the proposal passes the chain will stop at given upgrade height.\n\nYou can stop and start the original binary all you want, but **it will refuse to\nrun after the upgrade height**.\n\nWe need a new binary with the upgrade handler installed. The logs should look\nsomething like:\n\n```bash\nE[2019-11-05|12:44:18.913] UPGRADE "<plan-name>" NEEDED at height: <desired-upgrade-height>:       module=main\nE[2019-11-05|12:44:18.914] CONSENSUS FAILURE!!!\n...\n')),(0,r.yg)("p",null,"   Note that the process will hang indefinitely (doesn't exit to avoid restart loops). So, you must\nmanually kill the process and replace it with a new binary. Do so now with ",(0,r.yg)("inlineCode",{parentName:"p"},"Ctrl+C")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"killall gaiad"),"."),(0,r.yg)("p",null,"   In ",(0,r.yg)("inlineCode",{parentName:"p"},"gaia/app/app.go"),", after ",(0,r.yg)("inlineCode",{parentName:"p"},"upgrade.Keeper")," is initialized and set in the app, set the\ncorresponding upgrade ",(0,r.yg)("inlineCode",{parentName:"p"},"Handler")," with the correct ",(0,r.yg)("inlineCode",{parentName:"p"},"<plan-name>"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'    app.upgradeKeeper.SetUpgradeHandler("<plan-name>", func(ctx sdk.Context, plan upgrade.Plan) {\n        // custom logic after the network upgrade has been executed\n    })\n')),(0,r.yg)("p",null,"   Note that we panic on any error - this would cause the upgrade to fail if the\nmigration could not be run, and no node would advance - allowing a manual recovery.\nIf we ignored the errors, then we would proceed with an incomplete upgrade and\nhave a very difficult time every recovering the proper state."),(0,r.yg)("p",null,"   Now, compile the new binary and run the upgraded code to complete the upgrade:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# create a new binary of gaia with the added upgrade handler\n$ make install\n\n# Restart the chain using the new binary. You should see the chain resume from\n# the upgrade height:\n# `I[2019-11-05|12:48:15.184] applying upgrade <plan-name> at height: <desired-upgrade-height>      module=main`\n$ gaiad start\n\n# verify there is no pending plan\n$ gaiad query upgrade plan\n\n# verify you can query the block header of the completed upgrade\n$ gaiad query upgrade applied <plan-name>\n")))}g.isMDXComponent=!0}}]);