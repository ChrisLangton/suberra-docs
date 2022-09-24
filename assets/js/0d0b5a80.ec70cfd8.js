"use strict";(self.webpackChunksuberra_docs=self.webpackChunksuberra_docs||[]).push([[948],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),b=n,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return t?a.createElement(m,l(l({ref:r},c),{},{components:t})):a.createElement(m,l({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>l});var a=t(7294),n=t(6010);const o="tabItem_Ymn6";function l(e){let{children:r,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>b});var a=t(7462),n=t(7294),o=t(6010),l=t(2389),i=t(7392),s=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var r;const{lazy:t,block:l,defaultValue:d,values:b,groupId:m,className:v}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=b??f.map((e=>{let{props:{value:r,label:t,attributes:a}}=e;return{value:r,label:t,attributes:a}})),h=(0,i.l)(y,((e,r)=>e.value===r.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(r=f.find((e=>e.props.default)))?void 0:r.props.value)??f[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[O,S]=(0,n.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==O&&y.some((r=>r.value===e))&&S(e)}const P=e=>{const r=e.currentTarget,t=T.indexOf(r),a=y[t].value;a!==O&&(j(r),S(a),null!=m&&w(m,String(a)))},E=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;t=T[r]??T[0];break}case"ArrowLeft":{const r=T.indexOf(e.currentTarget)-1;t=T[r]??T[T.length-1];break}}null==(r=t)||r.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},y.map((e=>{let{value:r,label:t,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===r?0:-1,"aria-selected":O===r,key:r,ref:e=>T.push(e),onKeyDown:E,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===r})}),t??r)}))),t?(0,n.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==O})))))}function b(e){const r=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(r)},e))}},34:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=t(7462),n=(t(7294),t(3905)),o=t(5488),l=t(5162);const i={title:"Javascript SDK",description:"Javascript SDK"},s="Install",u={unversionedId:"integration/sdk",id:"integration/sdk",title:"Javascript SDK",description:"Javascript SDK",source:"@site/docs/4_integration/sdk.mdx",sourceDirName:"4_integration",slug:"/integration/sdk",permalink:"/suberra-docs/docs/integration/sdk",draft:!1,editUrl:"https://github.com/suberra/suberra-docs/docs/4_integration/sdk.mdx",tags:[],version:"current",frontMatter:{title:"Javascript SDK",description:"Javascript SDK"},sidebar:"docs",previous:{title:"Webhooks",permalink:"/suberra-docs/docs/integration/webhooks"},next:{title:"Cookie Policy",permalink:"/suberra-docs/docs/legal/cookie_policy"}},c={},p=[{value:"Importing",id:"importing",level:2},{value:"Suberra Core",id:"suberra-core",level:3},{value:"Suberra Product",id:"suberra-product",level:3}],d={toc:p};function b(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"install"},"Install"),(0,n.kt)("p",null,"Install Suberra's Javascript SDK in your project root directory"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"yarn",label:"yarn",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"yarn add @suberra/suberra.js \n"))),(0,n.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install @suberra/suberra.js \n")))),(0,n.kt)("h2",{id:"importing"},"Importing"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { SuberraCore, SuberraProduct } from '@suberra/suberra.js';\n")),(0,n.kt)("h3",{id:"suberra-core"},"Suberra Core"),(0,n.kt)("p",null,"Suberra core contains the common methods for suberra products. You can instantiate a Core instance by:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const SuberraCore = new SuberraCore(jsonRpcProvider, ethCallProvider, periodicAllowanceContract, initialised);\n")),(0,n.kt)("h3",{id:"suberra-product"},"Suberra Product"),(0,n.kt)("p",null,"Suberra product contains the methods for a specific product. You can instantiate a Product instance by:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"const SuberraProduct = new SuberraProduct(ethCallProvider, subscriptionContract);\n")))}b.isMDXComponent=!0}}]);