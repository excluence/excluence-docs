"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},o="Introduction",i={unversionedId:"intro",id:"intro",title:"Introduction",description:"Welcome to Excluence API, a powerful tool that allows developers to query Flow blockchain events data using SQL. This Getting Started guide will help you quickly get up to speed with using the Excluence API and make your first queries to access blockchain event data.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API Endpoints",permalink:"/docs/api-endpoints"}},d={},s=[{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What makes Excluence unique?",id:"what-makes-excluence-unique",level:3},{value:"Important information regarding the database",id:"important-information-regarding-the-database",level:3},{value:"Event Table",id:"event-table",level:2},{value:"How does the query work?",id:"how-does-the-query-work",level:2},{value:"Request Query",id:"request-query",level:5},{value:"Generated SQL from above query",id:"generated-sql-from-above-query",level:5},{value:"Response",id:"response",level:5}],c={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Welcome to Excluence API, a powerful tool that allows developers to query Flow blockchain events data using SQL. This ",(0,r.kt)("strong",{parentName:"p"},"Getting Started")," guide will help you quickly get up to speed with using the ",(0,r.kt)("strong",{parentName:"p"},"Excluence API")," and make your first queries to access blockchain event data. "),(0,r.kt)("p",null,"Whether you're a seasoned blockchain developer or just starting, this documentation will provide the necessary information to interact with the API effectively."),(0,r.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"The Excluence API acts as a middleware between your application and the Flow blockchain. The best part? No need to embark on the arduous journey of creating your event indexer from scratch! With Excluence API's mesmerizing SQL queries, you can effortlessly summon the precise data you desire directly from our indexer."),(0,r.kt)("p",null,"Embrace the magic of abstraction as it weaves its charm, streamlining the entire process for you. Bid farewell to the worries of blockchain-specific intricacies! Now, you can focus wholeheartedly on crafting your extraordinary application, making it shine brighter than the stars."),(0,r.kt)("h3",{id:"what-makes-excluence-unique"},"What makes Excluence unique?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User-defined queries"),": In the realm of blockchain data, you've likely encountered indexers and other providers like, in Ethereum ecosystem Etherscan, Moralis from Ethereum, and the innovative The Graph protocol. While these sources serve well for general-purpose applications, they do come with a catch \u2013 their queries are limited and predefined. So, when you're dreaming up an application that demands custom queries, they may leave you wanting more.",(0,r.kt)("br",null),(0,r.kt)("br",null),"We've opened the gates to an immense trove of historical events from the blockchain, granting you direct access. And the best part? You can effortlessly query this treasure trove using simple SQL, unlocking boundless possibilities for your application!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ParcelQL"),": We're thrilled to introduce you to the magic of ParcelQL \u2013 our very own JSON SQL solution. With ParcelQL, developers like you can now write SQL queries in JSON format, effortlessly fetching data directly from our database. ")),(0,r.kt)("h3",{id:"important-information-regarding-the-database"},"Important information regarding the database"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Information Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database Engine"),(0,r.kt)("td",{parentName:"tr",align:null},"PostgreSQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name of Table"),(0,r.kt)("td",{parentName:"tr",align:null},"flow_events")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NOTE"),": Data types ",(0,r.kt)("inlineCode",{parentName:"li"},"UInt64"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"UFix64")," or bigger will stored as string in the database, when constructing a query the developer must typecast them in the expected data type. This behavior comes into effect due to limitations of JS and FCL decoder. ")),(0,r.kt)("h2",{id:"event-table"},"Event Table"),(0,r.kt)("p",null,"The structure of the table in the database."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"REST API Return Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The address where the vent emitting contract is stored with ",(0,r.kt)("inlineCode",{parentName:"td"},"0x")," prefix."),(0,r.kt)("td",{parentName:"tr",align:null},"0x1d7e57aa55817448")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contractName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the contract emitting event"),(0,r.kt)("td",{parentName:"tr",align:null},"NonFungibleToken")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contract"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Flow defined complete address of the contract"),(0,r.kt)("td",{parentName:"tr",align:null},"A.1d7e57aa55817448.NonFungibleToken")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Flow defined complete name of the event"),(0,r.kt)("td",{parentName:"tr",align:null},"A.1d7e57aa55817448.NonFungibleToken.Deposit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the event"),(0,r.kt)("td",{parentName:"tr",align:null},"Deposit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp of the block in which the event was emitted"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-07-23T00:00:00.000Z")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.flow.com/tooling/fcl-js/api#getcollection"},"collectionId")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection ID of the transaction"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.flow.com/tooling/fcl-js/api#gettransaction"},"transactionId")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction ID of the event"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.flow.com/tooling/fcl-js/api#event-object"},"eventIndex")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Index of the event within the transaction"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.flow.com/tooling/fcl-js/api#blockobject"},"blockId")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the block"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.flow.com/tooling/fcl-js/api#blockobject"},"blockHeight")),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The height of the block"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload"),(0,r.kt)("td",{parentName:"tr",align:null},"jsonb"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"The data emitted from the event"),(0,r.kt)("td",{parentName:"tr",align:null},'{"id": "43023628", "to": "0xe1f2a091f7bb5245"}')))),(0,r.kt)("h2",{id:"how-does-the-query-work"},"How does the query work?"),(0,r.kt)("p",null,"We want to shed some light on our choice of PostgreSQL as the underlying database for handling unstructured data payloads. The decision was made based on its commendable query performance, often surpassing that of MongoDB when working with the json data type."),(0,r.kt)("p",null,"But that's not all! PostgreSQL's prowess truly shines when it comes to performant time-series queries, making it an excellent choice for clients seeking efficient handling of such queries."),(0,r.kt)("p",null,"For reading more about how PostgreSQL Json queries work read on ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/functions-json.html"},"PostgreSQL Json Functions"),"."),(0,r.kt)("p",null,"To understand better, let's have a look on simple query, how you can get all deposited ",(0,r.kt)("inlineCode",{parentName:"p"},"A.1e3c78c6d580273b.LNVCT.Deposit")," on address ",(0,r.kt)("inlineCode",{parentName:"p"},"0x12a6f076d0752584"),"."),(0,r.kt)("h5",{id:"request-query"},"Request Query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "query",\n  "table": "flow_events",\n  "columns": [\n      {\n        "column": "*"\n      }\n    ],\n    "filter": {\n      "and": [\n        {\n          "column": "event",\n          "operator": "=",\n          "value": "A.1e3c78c6d580273b.LNVCT.Deposit"\n        },\n        {\n          "column": ["payload", "to"],\n          "operator": "=",\n          "value": "0x12a6f076d0752584"\n        }\n      ]\n    } \n}\n')),(0,r.kt)("h5",{id:"generated-sql-from-above-query"},"Generated SQL from above query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from `flow_events` where ((`event` = 'A.1e3c78c6d580273b.LNVCT.Deposit') AND ((`payload`->>'to') = '0x12a6f076d0752584'));\n")),(0,r.kt)("h5",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "address": "0x1e3c78c6d580273b",\n      "contractName": "LNVCT",\n      "contract": "A.1e3c78c6d580273b.LNVCT",\n      "event": "A.1e3c78c6d580273b.LNVCT.Deposit",\n      "eventName": "Deposit",\n      "timestamp": "2023-07-23T14:51:09.914Z",\n      "collectionId": "c6e05c34ca759cbfcae350103aacb3433c9781768bc93c79fe5ae6b3c037e416",\n      "transactionId": "00bfdaab6e079fe323dc2a611533e4a48cc8349dc1dd6fc9faadc326796c34bf",\n      "eventIndex": "1",\n      "blockId": "906fc8a3c035f5c78c5f0858a2fd853e85ae686cd511f461a0e0fde4ab401294",\n      "blockHeight": "57301597",\n      "payload": {\n        "id": "75605919924289537",\n        "to": "0x12a6f076d0752584"\n      }\n    },\n    {\n      "address": "0x1e3c78c6d580273b",\n      "contractName": "LNVCT",\n      "contract": "A.1e3c78c6d580273b.LNVCT",\n      "event": "A.1e3c78c6d580273b.LNVCT.Deposit",\n      "eventName": "Deposit",\n      "timestamp": "2023-07-23T14:51:11.424Z",\n      "collectionId": "90cd78e2dcce7f388f8da12e6a4ef5b6acd9348810bcff2c17a7949992e955c2",\n      "transactionId": "9558f1d8eb9331ffd138dc20f1550decf7671229056de1aab314661ce2596c72",\n      "eventIndex": "1",\n      "blockId": "080ad08cb548ea1f38ff6f9a80b1d947874e699f8c6d4adac89c6862afe1b8ca",\n      "blockHeight": "57301598",\n      "payload": {\n        "id": "75595680722255873",\n        "to": "0x12a6f076d0752584"\n      }\n    },\n    ...\n  ]\n}\n')),(0,r.kt)("p",null,"This was just a simple query without much manipulation, but in complex queries like latest deposits or total deposit amount calculation can also be performed. To learn how to write complex SQL queries using ",(0,r.kt)("strong",{parentName:"p"},"ParcelQL")," move to this ",(0,r.kt)("a",{parentName:"p",href:"/docs/parcelQL/intro"},"page"),"."))}p.isMDXComponent=!0}}]);