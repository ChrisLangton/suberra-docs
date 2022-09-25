"use strict";(self.webpackChunksuberra_docs=self.webpackChunksuberra_docs||[]).push([[491],{3905:(e,n,a)=>{a.d(n,{Zo:()=>b,kt:()=>p});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},b=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=d(a),p=r,f=l["".concat(s,".").concat(p)]||l[p]||u[p]||o;return a?t.createElement(f,i(i({ref:n},b),{},{components:a})):t.createElement(f,i({ref:n},b))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}l.displayName="MDXCreateElement"},3988:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const o={title:"Webhooks",description:"Webhooks"},i=void 0,c={unversionedId:"integration/webhooks",id:"integration/webhooks",title:"Webhooks",description:"Webhooks",source:"@site/docs/4_integration/webhooks.mdx",sourceDirName:"4_integration",slug:"/integration/webhooks",permalink:"/docs/integration/webhooks",draft:!1,editUrl:"https://github.com/suberra/suberra-docs/docs/4_integration/webhooks.mdx",tags:[],version:"current",frontMatter:{title:"Webhooks",description:"Webhooks"},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/integration/getting_started"},next:{title:"Javascript SDK",permalink:"/docs/integration/sdk"}},s={},d=[{value:"What are Webhooks?",id:"what-are-webhooks",level:2},{value:"Subscriber Lifecycle",id:"subscriber-lifecycle",level:2},{value:"New Subscriber",id:"new-subscriber",level:3},{value:"SubscriberRemoved",id:"subscriberremoved",level:3},{value:"SubscriberCancelled",id:"subscribercancelled",level:3}],b={toc:d};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},b,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-are-webhooks"},"What are Webhooks?"),(0,r.kt)("p",null,"Webhooks are a lightweight one-way communication medium for Suberra to inform merchants of actions taken by their subscribers - such as when there is a new subscriber or when there is a lapse in payments.\nThey allow merchants to handle payment events without having to constantly poll an endpoint."),(0,r.kt)("h2",{id:"subscriber-lifecycle"},"Subscriber Lifecycle"),(0,r.kt)("h3",{id:"new-subscriber"},"New Subscriber"),(0,r.kt)("p",null,"Fired when a user subscribes to a plan or undos their cancellation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "8d309b28-d8c4-4684-9e80-6056d57e61b6", // UUID\n    "event": "NewSubscriber",\n    "timestamp": 1633513173, // epoch time\n    "txhash": "53a19fb483b17358bea358ffc772b03164be1c44384e4a3ef0cd13568f7a202c",\n    "subscription_contract": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", // Your NFT Subscription Contract address\n    "product_id": "fd56f0d4-66b9-4779-9de0-2874346802b1", // uuid of product in our backend\n    "chain_id": "137", // chainid of evm networks\n    "chain_name": "polygon", // see https://github.com/DefiLlama/chainlist/blob/main/constants/chainIds.js\n    "data": {\n        "user_address": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", // EOA address\n    "email": "abc@suberra.io", // User\'s email address, will be null if doesn\'t exist \n        "tokenAddress" : "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", // USDC\'s contract address\n        "denom": "usdc",\n        "amount" : 10.00 // aka $10 USDC\n    }\n}\n\n// re-subscribes aka undo cancellation \n{\n  "id": "8d309b28-d8c4-4684-9e80-6056d57e61b6",\n  "event": "NewSubscriber",\n  "timestamp": 1643908174245,\n  "txhash": "53a19fb483b17358bea358ffc772b03164be1c44384e4a3ef0cd13568f7a202c",\n  "subscription_contract": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",  // Your NFT Subscription Contract address\n  "product_id": "fd56f0d4-66b9-4779-9de0-2874346802b1", //uuid of product in our backend\n  "chain_id": "137", // chainid of evm networks\n  "chain_name": "polygon", // see https://github.com/DefiLlama/chainlist/blob/main/constants/chainIds.js\n  "data": {\n    "user_address": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",\n    "email": "abc@suberra.io",\n    "additional_info": "undo_cancellation"\n    // no token information because there was no charge\n  }\n}\n')),(0,r.kt)("h3",{id:"subscriberremoved"},"SubscriberRemoved"),(0,r.kt)("p",null,"Fired when a subscriber is removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id":"8d309b28-d8c4-4684-9e80-6056d57e61b6",\n   "event":"SubscriberRemoved",\n   "timestamp":1633513173,\n   "txhash": "53a19fb483b17358bea358ffc772b03164be1c44384e4a3ef0cd13568f7a202c",\n   "subscription_contract":"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",\n   "product_id": "fd56f0d4-66b9-4779-9de0-2874346802b1", // uuid of product in our backend\n   "chain_id": "137", // chainid of evm networks\n   "chain_name": "polygon", // see https://github.com/DefiLlama/chainlist/blob/main/constants/chainIds.js\n   "data":{\n      "user_address":"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",\n      "email": "abc@suberra.io",\n   }\n}\n')),(0,r.kt)("h3",{id:"subscribercancelled"},"SubscriberCancelled"),(0,r.kt)("p",null,"Fired when a subscriber unsubscribes on their own accord."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id":"8d309b28-d8c4-4684-9e80-6056d57e61b6",\n   "event":"SubscriberCancelled",\n   "timestamp":1633513173,\n   "txhash":"53a19fb483b17358bea358ffc772b03164be1c44384e4a3ef0cd13568f7a202c",\n   "subscription_contract":"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",\n   "product_id": "fd56f0d4-66b9-4779-9de0-2874346802b1", // uuid of product in our backend\n   "chain_id": "137", // chainid of evm networks\n   "chain_name": "polygon", // see https://github.com/DefiLlama/chainlist/blob/main/constants/chainIds.js\n   "data":{\n      "user_address":"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",\n      "email": "abc@suberra.io",\n   }\n}\n\n')))}u.isMDXComponent=!0}}]);