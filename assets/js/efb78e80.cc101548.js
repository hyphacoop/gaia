"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[253],{5680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>h});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),l=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=l(e.components);return r.createElement(p.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),g=n,h=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return t?r.createElement(h,i(i({ref:a},c),{},{components:t})):r.createElement(h,i({ref:a},c))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4412:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(8168),n=(t(6540),t(5680));const o={title:"Parameter Changes",order:4},i=void 0,s={unversionedId:"governance/proposal-types/param-change",id:"governance/proposal-types/param-change",title:"Parameter Changes",description:"This documentation aims to provide guidelines for creating and assessing parameter-change proposals.",source:"@site/docs/governance/proposal-types/param-change.md",sourceDirName:"governance/proposal-types",slug:"/governance/proposal-types/param-change",permalink:"/main/governance/proposal-types/param-change",draft:!1,tags:[],version:"current",frontMatter:{title:"Parameter Changes",order:4},sidebar:"tutorialSidebar",previous:{title:"Community Pool Spend",permalink:"/main/governance/proposal-types/community-pool-spend"},next:{title:"Software Upgrade",permalink:"/main/governance/proposal-types/software-upgrade"}},p={},l=[{value:"What parameters can be changed?",id:"what-parameters-can-be-changed",level:2},{value:"What are the current parameter values?",id:"what-are-the-current-parameter-values",level:2},{value:"Why create a parameter change proposal?",id:"why-create-a-parameter-change-proposal",level:2},{value:"Risks in parameter change proposals",id:"risks-in-parameter-change-proposals",level:2}],c={toc:l},m="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This documentation aims to provide guidelines for creating and assessing parameter-change proposals."),(0,n.yg)("p",null,"Drafting and submitting a parameter-change governance proposal involves two kinds of risk: losing proposal deposit amounts and the potential to alter the function of the Cosmos Hub network in an undesirable way. "),(0,n.yg)("h2",{id:"what-parameters-can-be-changed"},"What parameters can be changed?"),(0,n.yg)("p",null,"The complete parameters of the Cosmos Hub are split up into different modules, each of which has its own set of parameters. Most parameters can be updated by submitting a governance proposal."),(0,n.yg)("p",null,"List of modules whose parameters can be changed via governance:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"x/auth"),(0,n.yg)("li",{parentName:"ul"},"x/bank"),(0,n.yg)("li",{parentName:"ul"},"x/distribution"),(0,n.yg)("li",{parentName:"ul"},"x/evidence"),(0,n.yg)("li",{parentName:"ul"},"x/feegrant"),(0,n.yg)("li",{parentName:"ul"},"x/gov"),(0,n.yg)("li",{parentName:"ul"},"x/mint"),(0,n.yg)("li",{parentName:"ul"},"x/slashing"),(0,n.yg)("li",{parentName:"ul"},"x/staking"),(0,n.yg)("li",{parentName:"ul"},"ibc-go/transfer"),(0,n.yg)("li",{parentName:"ul"},"interchain-security/provider")),(0,n.yg)("p",null,"Each cosmos-sdk module uses ",(0,n.yg)("inlineCode",{parentName:"p"},"MsgUpdateParams")," for providing parameter changes. You can learn more about it in the cosmos-sdk documentation of each module (e.g. ",(0,n.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.47/build/modules/staking#msgupdateparams"},"https://docs.cosmos.network/v0.47/build/modules/staking#msgupdateparams"),")"),(0,n.yg)("h2",{id:"what-are-the-current-parameter-values"},"What are the current parameter values?"),(0,n.yg)("p",null,"There are ways to query the current settings for each module's parameter(s). Some can be queried with the command line program ",(0,n.yg)("a",{parentName:"p",href:"../../getting-started/installation"},(0,n.yg)("inlineCode",{parentName:"a"},"gaiad")),"."),(0,n.yg)("p",null,"You can begin by using the command ",(0,n.yg)("inlineCode",{parentName:"p"},"gaiad q [module] -h")," to get help about the subcommands for the module you want to query. For example, ",(0,n.yg)("inlineCode",{parentName:"p"},"gaiad q staking params")," returns the settings of relevant parameters:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"bond_denom: uatom\nhistorical_entries: 10000\nmax_entries: 7\nmax_validators: 180\nunbonding_time: 1814400s\n")),(0,n.yg)("p",null,"If a parameter-change proposal is successful, the change takes effect immediately upon completion of the voting period."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note:")," You cannot currently query the ",(0,n.yg)("inlineCode",{parentName:"p"},"bank")," module's parameter, which is ",(0,n.yg)("inlineCode",{parentName:"p"},"sendenabled"),". You also cannot query the ",(0,n.yg)("inlineCode",{parentName:"p"},"crisis")," module's parameters."),(0,n.yg)("h2",{id:"why-create-a-parameter-change-proposal"},"Why create a parameter change proposal?"),(0,n.yg)("p",null,"Parameters are what govern many aspects of the chain's behaviour. As circumstances and attitudes change, sometimes you might want to change a parameter to bring the chain's behaviour in line with community opinion. For example, the Cosmos Hub launched with 100 active validators and there have been 4 proposals to date that have increased the ",(0,n.yg)("inlineCode",{parentName:"p"},"MaxValidators")," parameter. At the time of writing, the active set contains 180 validators."),(0,n.yg)("p",null,"The Cosmos Hub has been viewed as a slow-moving, highly secure chain and that is reflected in some of its other parameters, such as a 21 day unbonding period and 14 day voting period. These are quite long compared to other chains in the Cosmos Ecosystem"),(0,n.yg)("h2",{id:"risks-in-parameter-change-proposals"},"Risks in parameter change proposals"),(0,n.yg)("p",null,"Because parameters dictate some of the ways in which the chain operates, changing them can have an impact beyond what is immediately obvious. "),(0,n.yg)("p",null,"For example, reducing the unbonding period might seem like the only effect is in how quickly delegators can liquidate their assets. It might also have a much greater impact on the overall security of the network that would be hard to realize at first glance."),(0,n.yg)("p",null,"This is one of the reasons that having a thorough discussion before going on-chain is so important - talking through the impacts of a proposal is a great way to avoid unintended effects."))}u.isMDXComponent=!0}}]);