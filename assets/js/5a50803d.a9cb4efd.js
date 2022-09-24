"use strict";(self.webpackChunksuberra_docs=self.webpackChunksuberra_docs||[]).push([[640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={title:"What is Suberra",description:"What is Suberra"},i=void 0,s={unversionedId:"overview/what_is_suberra",id:"overview/what_is_suberra",title:"What is Suberra",description:"What is Suberra",source:"@site/docs/0_overview/what_is_suberra.mdx",sourceDirName:"0_overview",slug:"/overview/what_is_suberra",permalink:"/suberra-docs/docs/overview/what_is_suberra",draft:!1,editUrl:"https://github.com/suberra/suberra-docs/docs/0_overview/what_is_suberra.mdx",tags:[],version:"current",frontMatter:{title:"What is Suberra",description:"What is Suberra"},sidebar:"docs",previous:{title:"Introduction",permalink:"/suberra-docs/docs/"},next:{title:"What is Suberra",permalink:"/suberra-docs/docs/overview/what_is_suberra"}},c={},l=[{value:"Problem with Crypto Commerce",id:"problem-with-crypto-commerce",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"problem-with-crypto-commerce"},"Problem with Crypto Commerce"),(0,n.kt)("p",null,"It is difficult for merchants to accept crypto payments. Here are some reasons why:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bad user experience for customers: Customers require gas tokens such as ETH to pay transaction fees. They may get deterred away during periods of peak activity."),(0,n.kt)("li",{parentName:"ul"},"Not composable with current payment systems: Difficult to integrate with existing systems as blockchain payments have a different payments flow than credit cards."),(0,n.kt)("li",{parentName:"ul"},"Too many networks and wallets: There are more than 100 wallets and centralised exchanges that the users can pay from. It is also difficult to collect payments from different networks such as Avalanche, Polygon, Ethereum and Ethereum L2."),(0,n.kt)("li",{parentName:"ul"},"Limited payment logic: Unlike the established payment logic that is created by Stripe, there's no easy way to replicate these. For example, if you would want to send a payment receipt upon receiving funds on the Avalanche network, merchants have to DIY the service."),(0,n.kt)("li",{parentName:"ul"},"Difficult to reconcile payments: After receiving the payments, it is hard to tell which payment is for what purpose and tag it for easy revenue recognition."),(0,n.kt)("li",{parentName:"ul"},"Lack of essential merchant features: Features like discount code, trial period implementations and invoice generation capabilities are essential for merchants to grow their business.")),(0,n.kt)("p",null,"These reasons make it difficult for Web 3.0 users to accomplish simple functions which are taken for granted in the Web 2.0 world - such as subscriptions (Shopify/Netflix/Patreon), disbursement of salary and automated dollar cost averaging strategies among many others.\nSuberra is a one-stop shop for Merchants seeking to adopt Web 3.0 payments without concerning themselves of the many difficulties laid out above."),(0,n.kt)("admonition",{title:"get started",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To know and understand how you can use Web3Auth, hop over to ",(0,n.kt)("a",{parentName:"p",href:"/quick-start"},"Quick Start")," and get started!")))}p.isMDXComponent=!0}}]);