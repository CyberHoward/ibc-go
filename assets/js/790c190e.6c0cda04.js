"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7050],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,u=d["".concat(c,".").concat(k)]||d[k]||m[k]||i;return t?n.createElement(u,o(o({ref:a},p),{},{components:t})):n.createElement(u,o({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=k;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},42187:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const i={title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/middleware/callbacks/integration"},o="Integration",l={unversionedId:"middleware/callbacks/integration",id:"version-v7.3.x/middleware/callbacks/integration",title:"Integration",description:"Learn how to integrate the callbacks middleware with IBC applications. The following document is intended for developers building on top of the Cosmos SDK and only applies for Cosmos SDK chains.",source:"@site/versioned_docs/version-v7.3.x/04-middleware/02-callbacks/02-integration.md",sourceDirName:"04-middleware/02-callbacks",slug:"/middleware/callbacks/integration",permalink:"/v7.3.x/middleware/callbacks/integration",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:2,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/middleware/callbacks/integration"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/v7.3.x/middleware/callbacks/overview"},next:{title:"Interfaces",permalink:"/v7.3.x/middleware/callbacks/interfaces"}},c={},s=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",level:2},{value:"Configuring an application stack with the callbacks middleware",id:"configuring-an-application-stack-with-the-callbacks-middleware",level:2},{value:"Transfer",id:"transfer",level:3},{value:"Interchain Accounts Controller",id:"interchain-accounts-controller",level:3}],p={toc:s},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration"},"Integration"),(0,r.kt)("p",null,"Learn how to integrate the callbacks middleware with IBC applications. The following document is intended for developers building on top of the Cosmos SDK and only applies for Cosmos SDK chains. {synopsis}"),(0,r.kt)("p",null,"The callbacks middleware is a minimal and stateless implementation of the IBC middleware interface. It does not have a keeper, nor does it store any state. It simply routes IBC middleware messages to the appropriate callback function, which is implemented by the secondary application. Therefore, it doesn't need to be registered as a module, nor does it need to be added to the module manager. It only needs to be added to the IBC application stack."),(0,r.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v7.3.x/ibc/middleware/develop"},"IBC middleware development")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v7.3.x/ibc/middleware/integration"},"IBC middleware integration"))),(0,r.kt)("p",null,"The callbacks middleware, as the name suggests, plays the role of an IBC middleware and as such must be configured by chain developers to route and handle IBC messages correctly.\nFor Cosmos SDK chains this setup is done via the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/app.go")," file, where modules are constructed and configured in order to bootstrap the blockchain application."),(0,r.kt)("h2",{id:"configuring-an-application-stack-with-the-callbacks-middleware"},"Configuring an application stack with the callbacks middleware"),(0,r.kt)("p",null,"As mentioned in ",(0,r.kt)("a",{parentName:"p",href:"/v7.3.x/ibc/middleware/develop"},"IBC middleware development")," an application stack may be composed of many or no middlewares that nest a base application.\nThese layers form the complete set of application logic that enable developers to build composable and flexible IBC application stacks.\nFor example, an application stack may just be a single base application like ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer"),", however, the same application stack composed with ",(0,r.kt)("inlineCode",{parentName:"p"},"29-fee")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"callbacks")," will nest the ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," base application twice by wrapping it with the Fee Middleware module and then callbacks middleware."),(0,r.kt)("p",null,"The callbacks middleware also ",(0,r.kt)("strong",{parentName:"p"},"requires")," a secondary application that will receive the callbacks to implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/callbacks/types/expected_keepers.go#L11-L83"},(0,r.kt)("inlineCode",{parentName:"a"},"ContractKeeper")),". Since the wasm module does not yet support the callbacks middleware, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mockContractKeeper")," module in the examples below. You should replace this with a module that implements ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractKeeper"),"."),(0,r.kt)("h3",{id:"transfer"},"Transfer"),(0,r.kt)("p",null,"See below for an example of how to create an application stack using ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"29-fee"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"callbacks"),". Feel free to omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"29-fee")," middleware if you do not want to use it.\nThe following ",(0,r.kt)("inlineCode",{parentName:"p"},"transferStack")," is configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/app.go")," and added to the IBC ",(0,r.kt)("inlineCode",{parentName:"p"},"Router"),".\nThe in-line comments describe the execution flow of packets between the application stack and IBC core."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Create Transfer Stack\n// SendPacket, since it is originating from the application to core IBC:\n// transferKeeper.SendPacket -> callbacks.SendPacket -> fee.SendPacket -> channel.SendPacket\n\n// RecvPacket, message that originates from core IBC and goes down to app, the flow is the other way\n// channel.RecvPacket -> callbacks.OnRecvPacket -> fee.OnRecvPacket -> transfer.OnRecvPacket\n\n// transfer stack contains (from top to bottom):\n// - IBC Callbacks Middleware\n// - IBC Fee Middleware\n// - Transfer\n\n// create IBC module from bottom to top of stack\nvar transferStack porttypes.IBCModule\ntransferStack = transfer.NewIBCModule(app.TransferKeeper)\ntransferStack = ibcfee.NewIBCMiddleware(transferStack, app.IBCFeeKeeper)\n// maxCallbackGas is a hard-coded value that is passed to the callbacks middleware\ntransferStack = ibccallbacks.NewIBCMiddleware(transferStack, app.IBCFeeKeeper, app.MockContractKeeper, maxCallbackGas)\n// Since the callbacks middleware itself is an ics4wrapper, it needs to be passed to the transfer keeper\napp.TransferKeeper.WithICS4Wrapper(transferStack.(porttypes.ICS4Wrapper))\n\n// Add transfer stack to IBC Router\nibcRouter.AddRoute(ibctransfertypes.ModuleName, transferStack)\n")),(0,r.kt)("p",null,"::: warning\nThe usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"WithICS4Wrapper")," after ",(0,r.kt)("inlineCode",{parentName:"p"},"transferStack"),"'s configuration is critical! It allows the callbacks middleware to do ",(0,r.kt)("inlineCode",{parentName:"p"},"SendPacket")," callbacks and asynchronous ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceivePacket")," callbacks. You must do this regardless of whether you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"29-fee")," middleware or not.\n:::"),(0,r.kt)("h3",{id:"interchain-accounts-controller"},"Interchain Accounts Controller"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Create Interchain Accounts Stack\n// SendPacket, since it is originating from the application to core IBC:\n// icaControllerKeeper.SendTx -> callbacks.SendPacket -> fee.SendPacket -> channel.SendPacket\n\nvar icaControllerStack porttypes.IBCModule\nicaControllerStack = icacontroller.NewIBCMiddleware(nil, app.ICAControllerKeeper)\nicaControllerStack = ibcfee.NewIBCMiddleware(icaControllerStack, app.IBCFeeKeeper)\n// maxCallbackGas is a hard-coded value that is passed to the callbacks middleware\nicaControllerStack = ibccallbacks.NewIBCMiddleware(icaControllerStack, app.IBCFeeKeeper, app.MockContractKeeper, maxCallbackGas)\n// Since the callbacks middleware itself is an ics4wrapper, it needs to be passed to the ica controller keeper\napp.ICAControllerKeeper.WithICS4Wrapper(icaControllerStack.(porttypes.ICS4Wrapper))\n\n// RecvPacket, message that originates from core IBC and goes down to app, the flow is:\n// channel.RecvPacket -> callbacks.OnRecvPacket -> fee.OnRecvPacket -> icaHost.OnRecvPacket\n\nvar icaHostStack porttypes.IBCModule\nicaHostStack = icahost.NewIBCModule(app.ICAHostKeeper)\nicaHostStack = ibcfee.NewIBCMiddleware(icaHostStack, app.IBCFeeKeeper)\n\n// Add ICA host and controller to IBC router ibcRouter.\nAddRoute(icacontrollertypes.SubModuleName, icaControllerStack).\nAddRoute(icahosttypes.SubModuleName, icaHostStack).\n")),(0,r.kt)("p",null,"::: warning\nThe usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"WithICS4Wrapper")," here is also critical!\n:::"))}m.isMDXComponent=!0}}]);