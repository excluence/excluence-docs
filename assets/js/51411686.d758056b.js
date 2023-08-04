"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),p=i,y=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:3},a="Security, Constraints & Limitationss",s={unversionedId:"security-constraints-limits",id:"security-constraints-limits",title:"Security, Constraints & Limitationss",description:"Row Limit",source:"@site/docs/security-constraints-limits.md",sourceDirName:".",slug:"/security-constraints-limits",permalink:"/excluence-docs/docs/security-constraints-limits",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"API Endpoints",permalink:"/excluence-docs/docs/api-endpoints"},next:{title:"ParcelQL",permalink:"/excluence-docs/docs/category/parcelql"}},l={},c=[{value:"Row Limit",id:"row-limit",level:3},{value:"Access control",id:"access-control",level:3},{value:"Automatic timeout",id:"automatic-timeout",level:3},{value:"Rate limit",id:"rate-limit",level:3},{value:"Limited data",id:"limited-data",level:3}],u={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security-constraints--limitationss"},"Security, Constraints & Limitationss"),(0,i.kt)("h3",{id:"row-limit"},"Row Limit"),(0,i.kt)("p",null,"Currently, each query will return a maximum of 100 rows. We want to ensure a smooth experience for everyone, so while you're welcome to provide offset and limit values in your queries, please note that any limit value exceeding 100 will be automatically enforced to return a maximum of 100 rows."),(0,i.kt)("h3",{id:"access-control"},"Access control"),(0,i.kt)("p",null,"In order to ensure data security and integrity, we want to highlight a critical aspect of our setup. When running queries on the backend, the PostgresSQL user operates as a read-only user. This means that the user is granted read-only access solely to the ",(0,i.kt)("inlineCode",{parentName:"p"},"flow_events")," table."),(0,i.kt)("h3",{id:"automatic-timeout"},"Automatic timeout"),(0,i.kt)("p",null,"Our ACL (Access Control List) rules on the Postgres side ensure that any attempt to execute a writable SQL injection query will be thwarted."),(0,i.kt)("p",null,"Additionally, while our backend already employs prepared statements for enhanced security, we've implemented an extra layer of defense against potential SQL Injection attacks. In cases where an SQL Injection attempt aims to perform heavy queries and potentially overload the system, an automatic timeout of 8 seconds will be enforced, all queries will be subjected to a set timeout of ",(0,i.kt)("inlineCode",{parentName:"p"},"8 seconds")," to produce results. If a query exceeds this time limit, it will be automatically terminated to maintain system stability."),(0,i.kt)("h3",{id:"rate-limit"},"Rate limit"),(0,i.kt)("p",null,"For the smooth operation of our API and to ensure fair usage for all developers, we have set a rate limit on the API endpoint. Each client is allowed a maximum of ",(0,i.kt)("inlineCode",{parentName:"p"},"10 queries per minute"),"."),(0,i.kt)("h3",{id:"limited-data"},"Limited data"),(0,i.kt)("p",null,"Currently the API is in prototyping stage and we only have indexed limited amount of data."))}d.isMDXComponent=!0}}]);