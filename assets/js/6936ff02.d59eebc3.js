"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),h=r,u=f["".concat(s,".").concat(h)]||f[h]||d[h]||o;return n?i.createElement(u,a(a({ref:t},p),{},{components:n})):i.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={title:"State Verification",sidebar_label:"State Verification",sidebar_position:5,slug:"/ibc/light-clients/localhost/state-verification"},a="State verification",l={unversionedId:"light-clients/localhost/state-verification",id:"version-v7.3.x/light-clients/localhost/state-verification",title:"State Verification",description:"The localhost client handles state verification through the ClientState interface methods VerifyMembership and VerifyNonMembership by performing read-only operations directly on the core IBC store.",source:"@site/versioned_docs/version-v7.3.x/03-light-clients/03-localhost/05-state-verification.md",sourceDirName:"03-light-clients/03-localhost",slug:"/ibc/light-clients/localhost/state-verification",permalink:"/v7.3.x/ibc/light-clients/localhost/state-verification",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:5,frontMatter:{title:"State Verification",sidebar_label:"State Verification",sidebar_position:5,slug:"/ibc/light-clients/localhost/state-verification"},sidebar:"defaultSidebar",previous:{title:"Connection",permalink:"/v7.3.x/ibc/light-clients/localhost/connection"},next:{title:"Overview",permalink:"/v7.3.x/middleware/ics29-fee/overview"}},s={},c=[],p={toc:c},f="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"state-verification"},"State verification"),(0,r.kt)("p",null,"The localhost client handles state verification through the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientState")," interface methods ",(0,r.kt)("inlineCode",{parentName:"p"},"VerifyMembership")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"VerifyNonMembership")," by performing read-only operations directly on the core IBC store."),(0,r.kt)("p",null,"When verifying channel state in handshakes or processing packets the ",(0,r.kt)("inlineCode",{parentName:"p"},"09-localhost")," client can simply compare bytes stored under the standardized key paths defined by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements"},"ICS-24"),"."),(0,r.kt)("p",null,"For existence proofs via ",(0,r.kt)("inlineCode",{parentName:"p"},"VerifyMembership")," the 09-localhost client will retrieve the value stored under the provided key path and compare it against the value provided by the caller. In contrast, non-existence proofs via ",(0,r.kt)("inlineCode",{parentName:"p"},"VerifyNonMembership")," assert the absence of a value at the provided key path."),(0,r.kt)("p",null,"Relayers are expected to provide a sentinel proof when sending IBC messages. Submission of nil or empty proofs is disallowed in core IBC messaging.\nThe 09-localhost light client module defines a ",(0,r.kt)("inlineCode",{parentName:"p"},"SentinelProof")," as a single byte. Localhost client state verification will fail if the sentintel proof value is not provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var SentinelProof = []byte{0x01}\n")))}d.isMDXComponent=!0}}]);