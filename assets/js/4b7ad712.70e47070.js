"use strict";(self.webpackChunkopenapi_wfeng=self.webpackChunkopenapi_wfeng||[]).push([[520],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),o=n(2389),i=n(9443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9521),u=n(6010),p="tabItem_vU9c";function c(e){var t,n,a,o=e.lazy,i=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=k[0])?void 0:a.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),N=g.tabGroupChoices,y=g.setTabGroupChoices,w=(0,r.useState)(v),T=w[0],j=w[1],C=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var q=N[m];null!=q&&q!==T&&f.some((function(e){return e.value===q}))&&j(q)}var E=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==T&&(x(t),j(a),null!=m&&y(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},h)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":T===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:E,onClick:E},null!=n?n:t)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},2487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(6396),l=n(8215),s=["components"],u={sidebar_position:4},p="Configuring endpoints",c={unversionedId:"endpoints-config",id:"endpoints-config",isDocsHomePage:!1,title:"Configuring endpoints",description:"Now that we know how to declare paths and what operations are allowed, let's take a look on configuration.",source:"@site/course/endpoints-config.md",sourceDirName:".",slug:"/endpoints-config",permalink:"/openapi-course/course/endpoints-config",editUrl:"https://github.com/xeeija/openapi-course/edit/main/course/endpoints-config.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Endpoints",permalink:"/openapi-course/course/endpoints"},next:{title:"Security",permalink:"/openapi-course/course/security"}},d=[{value:"Parameter Object",id:"parameter-object",children:[],level:3},{value:"Request Body Object",id:"request-body-object",children:[],level:3},{value:"Responses Object",id:"responses-object",children:[],level:3}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-endpoints"},"Configuring endpoints"),(0,o.kt)("p",null,"Now that we know how to declare paths and what operations are allowed, let's take a look on configuration.\nThere are some objects that define certain parts of an operation:\n",(0,o.kt)("strong",{parentName:"p"},"parameters"),", ",(0,o.kt)("strong",{parentName:"p"},"request body")," and ",(0,o.kt)("strong",{parentName:"p"},"response")," are explained in more detail below."),(0,o.kt)("h3",{id:"parameter-object"},"Parameter Object"),(0,o.kt)("p",null,"Desribes one parameter of an operation.\nA parameter must be unique, specifically the combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"location"),"."),(0,o.kt)("p",null,'There are five locatios (like "types"):'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"path"),": parameter in the path, used with templating,\nin ",(0,o.kt)("inlineCode",{parentName:"li"},"/food/{name}"),", the parameter is ",(0,o.kt)("inlineCode",{parentName:"li"},"name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"query"),": Query parameters after the path (after ",(0,o.kt)("inlineCode",{parentName:"li"},"?"),"),\nin ",(0,o.kt)("inlineCode",{parentName:"li"},"/products?page=42")," the parameter is ",(0,o.kt)("inlineCode",{parentName:"li"},"page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"header"),": custom headers that are expected"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cookie"),": pass cookies to the API")),(0,o.kt)("p",null,"Parameters have the fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": Required, case sensitive name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"in"),": Required, type of the parameter, (path, query, header, cookie)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"required"),": Whether the parameter is mandatory, if ",(0,o.kt)("inlineCode",{parentName:"li"},"in"),' is "path", then this is required and true'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"description"),": description of the parameter"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"schema"),": defines the data type of the parameter")),(0,o.kt)("h3",{id:"request-body-object"},"Request Body Object"),(0,o.kt)("p",null,"This object represents the request body (payload) of a request.\nOperations that have a payload are POST, PUT and PATCH.\nFor other operations, the request body can be omitted because it is not used."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"description"),": description of the body"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content"),': content type of the body (MIME type, "Media type")')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," field is also an object, that has the MIME type as key and a schema and optional examples as value.\nBinary content may omit the schema and provide an empty object instead (",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,o.kt)("p",null,"For example:"),(0,o.kt)(i.Z,{groupId:"openapi-language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"description: food to create\ncontent: \n  application/json:\n    schema:\n      $ref: '#/components/schemas/Food'\n"))),(0,o.kt)(l.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "description": "food to create",\n  "content": {\n    "application/json": {\n      "schema": {\n        "type": "string"\n      }\n    }\n  }\n}\n')))),(0,o.kt)("h3",{id:"responses-object"},"Responses Object"),(0,o.kt)("p",null,"This object is a list of expected responses, based on HTTP status code."),(0,o.kt)("p",null,"It should cover success and known errors, but may not cover all possible status codes.\nAt least one response is required and this should be the success response (200).\nThe field ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," can be used as default response when no other status code matches."),(0,o.kt)("p",null,"The status code can be entered either as a number, eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"200: ...")," or as a string, eg. ",(0,o.kt)("inlineCode",{parentName:"p"},'"200": ...')," in YAML, because keys are always strings in YAML.\nIn JSON keys need quotes anyway."),(0,o.kt)("p",null,"A response has the fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"description"),": Required, short description"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"headers"),": list of headers with the response"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content"),": content type of response")),(0,o.kt)("p",null,"For example:"),(0,o.kt)(i.Z,{groupId:"openapi-language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"200:\n  description: OK\n  content:\n    application/json:\n      schema:\n        $ref: '#/components/schemas/Food'\n"))),(0,o.kt)(l.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "200": {\n    "description": "OK",\n    "content": {\n      "application/json": {\n        "schema": {\n          "$ref": "#/components/schemas/Food"\n        }\n      }\n    }\n  }\n}\n')))))}h.isMDXComponent=!0}}]);