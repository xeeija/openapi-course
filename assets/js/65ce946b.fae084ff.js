"use strict";(self.webpackChunkopenapi_wfeng=self.webpackChunkopenapi_wfeng||[]).push([[124],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(r),m=i,y=f["".concat(u,".").concat(m)]||f[m]||l[m]||o;return r?n.createElement(y,c(c({ref:t},s),{},{components:r})):n.createElement(y,c({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3926:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),c=["components"],a={sidebar_position:5},u="Security",p={unversionedId:"security",id:"security",isDocsHomePage:!1,title:"Security",description:"TODO intro to security (auth etc)",source:"@site/course/security.md",sourceDirName:".",slug:"/security",permalink:"/openapi-course/course/security",editUrl:"https://github.com/xeeija/openapi-wfeng/edit/main/course/security.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Configuring endpoints",permalink:"/openapi-course/course/endpoints-config"},next:{title:"Conclusion",permalink:"/openapi-course/course/openapi/conclusion"}},s=[{value:"Security Scheme Object",id:"security-scheme-object",children:[],level:3}],l={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"security"},"Security"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TODO")," intro to security (auth etc)"),(0,o.kt)("h3",{id:"security-scheme-object"},"Security Scheme Object"),(0,o.kt)("p",null,"Defines a security mechanism for operations"),(0,o.kt)("p",null,"Supported are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTTP authentication"),(0,o.kt)("li",{parentName:"ul"},"API key"),(0,o.kt)("li",{parentName:"ul"},"mutual TLS (with client certificate)"),(0,o.kt)("li",{parentName:"ul"},"OAuth2")),(0,o.kt)("p",null,"It has the fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type"),": required, type of security scheme"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"description"))),(0,o.kt)("p",null,"There are a variety of other fields depending on the type to further configure the respective authentication or securtiy scheme.\nFor example, if the API key method is used, the following fields specify how the API key is sent, in this case in the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-API-KEY")," header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type: apiKey\nname: X-API-KEY\nin: header\n")),(0,o.kt)("p",null,"For details see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#security-scheme-object"},"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#security-scheme-object")))}f.isMDXComponent=!0}}]);