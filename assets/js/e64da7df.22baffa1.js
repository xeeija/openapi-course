"use strict";(self.webpackChunkopenapi_wfeng=self.webpackChunkopenapi_wfeng||[]).push([[808],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},8691:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905));n(2389),n(9443);n(2822);var l=["components"],o={sidebar_position:1},p="Format, Datatypes",s={unversionedId:"format",id:"format",isDocsHomePage:!1,title:"Format, Datatypes",description:"First, lets go over some basic definitions.",source:"@site/course/format.md",sourceDirName:".",slug:"/format",permalink:"/openapi-course/course/format",editUrl:"https://github.com/xeeija/openapi-wfeng/edit/main/course/format.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/openapi-course/course/intro"},next:{title:"Schema Basics",permalink:"/openapi-course/course/schema-basics"}},m=[{value:"Format",id:"format",children:[],level:2},{value:"Data Types",id:"data-types",children:[],level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"format-datatypes"},"Format, Datatypes"),(0,i.kt)("p",null,"First, lets go over some basic definitions."),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("p",null,"The OpenAPI (formerly Swagger) specification is basically a JSON or YAML document.\nA YAML version of >= 1.2 is required, as with this version, every JSON document is also a valid YAML document."),(0,i.kt)("p",null,"It can be either a single file or divided into multiple files.\nWhen using multiple files, the ",(0,i.kt)("inlineCode",{parentName:"p"},"$ref")," key is used to reference another file (see Reference Object/Schema Object)",(0,i.kt)("br",{parentName:"p"}),"\n","It can be named anything, but the recommended name is ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi.json")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi.yaml"),"."),(0,i.kt)("p",null,"Field names are usually case sensitive, unless it's stated otherwise."),(0,i.kt)("p",null,"There are two types of fields in the specification:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fixed fields"),", which have a name, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"version")," and   "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Patterned fields"),", which are defined with a regex pattern and must be unique, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"^x-"),' which means "must start with ',(0,i.kt)("inlineCode",{parentName:"li"},"x-"),'".')),(0,i.kt)("p",null,"HTTP methods (as we call them), like GET or POST, are called operations in the specification."),(0,i.kt)("p",null,"Most objects have a field like a ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"summary"),", that is displayed in documentation.\nAltough these are optional, they should be used for documentation purposes.  "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Formatting")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," fields usually support Rich Text formatting like Markdown.\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"#TODO")," JSON vs YAML?"),(0,i.kt)("h2",{id:"data-types"},"Data Types"),(0,i.kt)("p",null,"Data types in the OAS are used to indicate a type, but are not strictly required in the schema.\nData types are based on the JSON data types."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},'A JSON "null" value')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},'A "true" or "false" value, from the JSON "true" or "false" value')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},'An arbitrary-precision, base-10 decimal number value, from the JSON "number" value')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'A string of Unicode code points, from the JSON "string" value')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},'An ordered list of instances, from the JSON "array" value')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},'An unordered set of properties mapping a string to an instance, from the JSON "object" value')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"integer*"),(0,i.kt)("td",{parentName:"tr",align:null},'JSON "number" value without fraction (*not in JSON types, but OpenAPI)')))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Source: ",(0,i.kt)("a",{parentName:"em",href:"https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-4.2.1"},"https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-4.2.1"))),(0,i.kt)("p",null,"There is also an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," property, to further sepcify types.\nThe JSON Schema Validation (which is the base for OpenAPIs formats) already defines various formats, eg.:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"date"),(0,i.kt)("li",{parentName:"ul"},"time"),(0,i.kt)("li",{parentName:"ul"},"email"),(0,i.kt)("li",{parentName:"ul"},"hostname"),(0,i.kt)("li",{parentName:"ul"},"IP addess  "),(0,i.kt)("li",{parentName:"ul"},"etc.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"See ",(0,i.kt)("a",{parentName:"em",href:"https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-7.3"},"https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-7.3"))),(0,i.kt)("p",null,"Additionally, OpenAPI's specified formats are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Format"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"int32"),(0,i.kt)("td",{parentName:"tr",align:null},"signed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"int64"),(0,i.kt)("td",{parentName:"tr",align:null},"signed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"double"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"Input should be hidden by UI")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Source: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#data-types"},"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#data-types"))))}d.isMDXComponent=!0}}]);