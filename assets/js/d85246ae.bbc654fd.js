"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Governance Proposals",sidebar_label:"Governance Proposals",sidebar_position:6,slug:"/ibc/proposals"},r="Governance Proposals",l={unversionedId:"ibc/proposals",id:"version-v5.3.x/ibc/proposals",title:"Governance Proposals",description:"In uncommon situations, a highly valued client may become frozen due to uncontrollable",source:"@site/versioned_docs/version-v5.3.x/01-ibc/06-proposals.md",sourceDirName:"01-ibc",slug:"/ibc/proposals",permalink:"/v5.3.x/ibc/proposals",draft:!1,tags:[],version:"v5.3.x",sidebarPosition:6,frontMatter:{title:"Governance Proposals",sidebar_label:"Governance Proposals",sidebar_position:6,slug:"/ibc/proposals"},sidebar:"defaultSidebar",previous:{title:"Genesis Restart Upgrades",permalink:"/v5.3.x/ibc/upgrades/genesis-restart"},next:{title:"Relayer",permalink:"/v5.3.x/ibc/relayer"}},s={},c=[{value:"How to recover an expired client with a governance proposal",id:"how-to-recover-an-expired-client-with-a-governance-proposal",level:2},{value:"Preconditions",id:"preconditions",level:3},{value:"Steps",id:"steps",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Important considerations",id:"important-considerations",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"governance-proposals"},"Governance Proposals"),(0,i.kt)("p",null,"In uncommon situations, a highly valued client may become frozen due to uncontrollable\ncircumstances. A highly valued client might have hundreds of channels being actively used.\nSome of those channels might have a significant amount of locked tokens used for ICS 20."),(0,i.kt)("p",null,"If the one third of the validator set of the chain the client represents decides to collude,\nthey can sign off on two valid but conflicting headers each signed by the other one third\nof the honest validator set. The light client can now be updated with two valid, but conflicting\nheaders at the same height. The light client cannot know which header is trustworthy and therefore\nevidence of such misbehaviour is likely to be submitted resulting in a frozen light client."),(0,i.kt)("p",null,'Frozen light clients cannot be updated under any circumstance except via a governance proposal.\nSince a quorum of validators can sign arbitrary state roots which may not be valid executions\nof the state machine, a governance proposal has been added to ease the complexity of unfreezing\nor updating clients which have become "stuck". Without this mechanism, validator sets would need\nto construct a state root to unfreeze the client. Unfreezing clients, re-enables all of the channels\nbuilt upon that client. This may result in recovery of otherwise lost funds.'),(0,i.kt)("p",null,"Tendermint light clients may become expired if the trusting period has passed since their\nlast update. This may occur if relayers stop submitting headers to update the clients."),(0,i.kt)("p",null,"An unplanned upgrade by the counterparty chain may also result in expired clients. If the counterparty\nchain undergoes an unplanned upgrade, there may be no commitment to that upgrade signed by the validator\nset before the chain-id changes. In this situation, the validator set of the last valid update for the\nlight client is never expected to produce another valid header since the chain-id has changed, which will\nultimately lead the on-chain light client to become expired."),(0,i.kt)("p",null,'In the case that a highly valued light client is frozen, expired, or rendered non-updateable, a\ngovernance proposal may be submitted to update this client, known as the subject client. The\nproposal includes the client identifier for the subject and the client identifier for a substitute\nclient. Light client implementations may implement custom updating logic, but in most cases,\nthe subject will be updated to the latest consensus state of the substitute client, if the proposal passes.\nThe substitute client is used as a "stand in" while the subject is on trial. It is best practice to create\na substitute client ',(0,i.kt)("em",{parentName:"p"},"after")," the subject has become frozen to avoid the substitute from also becoming frozen.\nAn active substitute client allows headers to be submitted during the voting period to prevent accidental expiry\nonce the proposal passes."),(0,i.kt)("h2",{id:"how-to-recover-an-expired-client-with-a-governance-proposal"},"How to recover an expired client with a governance proposal"),(0,i.kt)("p",null,"See also the relevant documentation: ",(0,i.kt)("a",{parentName:"p",href:"/architecture/adr-026-ibc-client-recovery-mechanisms"},"ADR-026, IBC client recovery mechanisms")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Who is this information for?"),"\nAlthough technically anyone can submit the governance proposal to recover an expired client, often it will be ",(0,i.kt)("strong",{parentName:"p"},"relayer operators")," (at least coordinating the submission).")),(0,i.kt)("h3",{id:"preconditions"},"Preconditions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The chain is updated with ibc-go >= v1.1.0."),(0,i.kt)("li",{parentName:"ul"},"There exists an active client (with a known client identifier) for the same counterparty chain as the expired client."),(0,i.kt)("li",{parentName:"ul"},"The governance deposit.")),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"step-1"},"Step 1"),(0,i.kt)("p",null,"Check if the client is attached to the expected ",(0,i.kt)("inlineCode",{parentName:"p"},"chain-id"),". For example, for an expired Tendermint client representing the Akash chain the client state looks like this on querying the client state:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"{\n  client_id: 07-tendermint-146\n  client_state:\n  '@type': /ibc.lightclients.tendermint.v1.ClientState\n  allow_update_after_expiry: true\n  allow_update_after_misbehaviour: true\n  chain_id: akashnet-2\n}\n")),(0,i.kt)("p",null,"The client is attached to the expected Akash ",(0,i.kt)("inlineCode",{parentName:"p"},"chain-id"),". Note that although the parameters (",(0,i.kt)("inlineCode",{parentName:"p"},"allow_update_after_expiry")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_update_after_misbehaviour"),") exist to signal intent, these parameters have been deprecated and will not enforce any checks on the revival of client. See ADR-026 for more context on this deprecation."),(0,i.kt)("h3",{id:"step-2"},"Step 2"),(0,i.kt)("p",null,"If the chain has been updated to ibc-go >= v1.1.0, anyone can submit the governance proposal to recover the client by executing this via CLI."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that the Cosmos SDK has updated how governance proposals are submitted in SDK v0.46, now requiring to pass a .json proposal file")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"From SDK v0.46.x onwards"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"<binary> tx gov submit-proposal [path-to-proposal-json]\n")),(0,i.kt)("p",{parentName:"li"},"where ",(0,i.kt)("inlineCode",{parentName:"p"},"proposal.json")," contains:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "@type": "/ibc.core.client.v1.ClientUpdateProposal",\n      "title": "title_string",\n      "description": "description_string",\n      "subject_client_id": "expired_client_id_string",\n      "substitute_client_id": "active_client_id_string"\n    }\n  ],\n  "metadata": "<metadata>",\n  "deposit": "10stake"\n}\n')),(0,i.kt)("p",{parentName:"li"},"Alternatively there's a legacy command (that is no longer recommended though):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"<binary> tx gov submit-legacy-proposal update-client <expired-client-id> <active-client-id>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Until SDK v0.45.x"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"<binary> tx gov submit-proposal update-client <expired-client-id> <active-client-id>\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<expired-client-id>")," identifier is the proposed client to be updated. This client must be either frozen or expired."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<active-client-id>")," represents a substitute client. It carries all the state for the client which may be updated. It must have identical client and chain parameters to the client which may be updated (except for latest height, frozen height, and chain ID). It should be continually updated during the voting period."),(0,i.kt)("p",null,"After this, all that remains is deciding who funds the governance deposit and ensuring the governance proposal passes. If it does, the client on trial will be updated to the latest state of the substitute."),(0,i.kt)("h2",{id:"important-considerations"},"Important considerations"),(0,i.kt)("p",null,"Please note that from v1.0.0 of ibc-go it will not be allowed for transactions to go to expired clients anymore, so please update to at least this version to prevent similar issues in the future."),(0,i.kt)("p",null,"Please also note that if the client on the other end of the transaction is also expired, that client will also need to update. This process updates only one client."))}h.isMDXComponent=!0}}]);