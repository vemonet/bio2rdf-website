(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{101:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(40),i=a(23),c=a(5),l=a(100),s=a(189),p=(a(112),a(182)),u=a(184),d=a(185),m=a(191),g=a(190),h=a(78),b=a.n(h),f=a(77),E=a.n(f),y=a(72),v=a.n(y),L=Object(p.a)((function(e){return{menuButton:{color:e.palette.common.white},solidButton:{backgroundColor:e.palette.primary.main,color:"#fff",borderRadius:"6px",padding:"7px 14px","&:hover":{backgroundColor:e.palette.primary.dark,cursor:"pointer"}},linkButton:{textTransform:"none",textDecoration:"none"},linkLogo:{alignItems:"center",display:"flex"}}}));function x(){var e=L();return r.a.createElement(u.a,{title:"",position:"static"},r.a.createElement(d.a,{variant:"dense"},r.a.createElement(i.b,{to:"/",className:e.linkLogo},r.a.createElement(g.a,{title:"Into the Graph homepage"},r.a.createElement("img",{src:v.a,style:{height:"2em",width:"2em",marginRight:"10px"},alt:"Logo"}))),r.a.createElement(i.b,{to:"/describe",className:e.linkButton},r.a.createElement(g.a,{title:"Describe an URI in a SPARQL endpoint"},r.a.createElement(m.a,{className:e.menuButton},r.a.createElement(E.a,null),"\xa0Describe URI"))),r.a.createElement("div",{className:"flexGrow"}),r.a.createElement(g.a,{title:"Go to https://github.com/MaastrichtU-IDS/into-the-graph"},r.a.createElement(m.a,{className:e.menuButton,target:"_blank",href:"https://github.com/MaastrichtU-IDS/into-the-graph",rel:"noopener noreferrer"},r.a.createElement(b.a,null)))))}var I=a(186),w=a(187),O=Object(p.a)((function(e){return{darkLink:{textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.light,textDecoration:"none"}},whiteLink:{textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.dark,textDecoration:"none"}},footer:{padding:e.spacing(2),marginTop:"auto",color:"white",backgroundColor:e.palette.primary.main}}}));function S(){var e=O();return r.a.createElement(I.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement("a",{className:e.darkLink,target:"_blank",rel:"noopener noreferrer",href:"https://maastrichtuniversity.nl/ids"},"Institute of Data Science at Maastricht University")," ","2020.")}function j(){var e=O();return r.a.createElement("footer",{className:e.footer},r.a.createElement(w.a,{maxWidth:"md",style:{textAlign:"center"}},r.a.createElement(I.a,{variant:"body2"},"This website is licensed under the\xa0",r.a.createElement("a",{className:e.whiteLink,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/MaastrichtU-IDS/into-the-graph/blob/main/LICENSE"},"MIT license")),r.a.createElement(S,null)))}var k=a(27),R=a.n(k),T=a(47),D=a.n(T),P=a(160),A=a(188);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){R()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=Object(p.a)((function(e){return{paperSearch:{padding:"2px 4px",display:"flex",alignItems:"center",width:"30%"},searchInput:{marginLeft:e.spacing(1),width:"50%",fontSize:"14px",flex:1},link:{textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.main,textDecoration:"none"}},paperPadding:{padding:e.spacing(2,2),margin:e.spacing(2,2)},cardSubtitle:{fontSize:14,marginTop:8},pos:{}}}));function U(){var e=_(),t=r.a.useState({webid:"",projects_list:[],search:"",repositories_hash:{},category_pie:{}}),a=D()(t,2),n=a[0],o=a[1],i=r.a.useRef(n);r.a.useCallback((function(e){i.current=N(N({},i.current),e),o(i.current)}),[o]),Object(A.a)();return r.a.useEffect((function(){}),[]),r.a.createElement(w.a,{className:"mainContainer"},r.a.createElement(I.a,{variant:"h4",style:{textAlign:"center",marginBottom:"15px"}},"\ud83e\udded Into the Graph"),r.a.createElement(P.a,{elevation:4,className:e.paperPadding},r.a.createElement(I.a,{variant:"body1",style:{textAlign:"center",marginBottom:"20px",marginTop:"15px"}},"Provide the URI to describe and the SPARQL endpoint queried, such as:"),r.a.createElement(I.a,{variant:"h5",style:{textAlign:"center",marginBottom:"20px"}},r.a.createElement("a",{href:"/describe?uri=http://bio2rdf.org/clinicaltrials:NCT00209495&endpoint=https://bio2rdf.org/sparql"},"/describe?uri=http://bio2rdf.org/clinicaltrials:NCT00209495&endpoint=https://bio2rdf.org/sparql"))),r.a.createElement(I.a,{variant:"body1",style:{textAlign:"left",marginBottom:"20px"}},r.a.createElement("b",null,"Into the Graph")," provides a simple RDF web browser that just need a SPARQL endpoint URL to resolve URIs, and explore the available linked data."),r.a.createElement(I.a,{variant:"body1",style:{textAlign:"left",marginBottom:"10px"}},"This linked data browser features:",r.a.createElement("br",null),"\ud83d\udd0e A web-based UI to browse any SPARQL endpoints content easily",r.a.createElement("br",null),"\ud83d\udd78\ufe0f Native support for graphs (nquads)",r.a.createElement("br",null),"\ud83c\udfd7\ufe0f Work in progress: visualize and browse concepts using ",r.a.createElement("a",{href:"https://perfectgraph-5c619.web.app",target:"_blank"},r.a.createElement("code",null,"perfect-graph")),r.a.createElement("br",null),"\ud83c\udfd7\ufe0f Work in progress: insights about the content of the triplestore and its different graphs, using precomputed HCLS descriptives statistics"),r.a.createElement(I.a,{variant:"body1",style:{textAlign:"left"}},"Other relevant libraries:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/micheldumontier/torres-api-platform/"},"TORRES API platform")," to store HCLS descriptive metadata for your dataset"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/MaastrichtU-IDS/fair-metadata"},"FAIR metadata")," python lib: to generate HCLS descriptive metadata for your dataset"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/MaastrichtU-IDS/d2s-project-template/tree/master/datasets/preppi"},"Data2Services workflows")," to generate RDF knowledge graphs from structured data using RML (RDF Mapping Language)")))}var M=a(53),B=a.n(M);a(140);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach((function(t){R()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F=a(70);F.DataTable=a(148);var G=Object(p.a)((function(e){return{fullWidth:{width:"100%"},normalFont:{fontSize:"14px"},smallerFont:{fontSize:"12px"},alignLeft:{textAlign:"left"},paperPadding:{padding:e.spacing(2,2)},paperTitle:{fontWeight:300,marginBottom:e.spacing(1)}}}));function q(){var e=G(),t=Object(c.e)(),a=r.a.useState({describe_uri:"",describe_endpoint:"",describe_results:[],search_results:[],isLoading:!0,requestError:!1}),n=D()(a,2),o=n[0],i=n[1],l=r.a.useRef(o),s=r.a.useCallback((function(e){l.current=H(H({},l.current),e),i(l.current)}),[i]);function p(e){var t;e.startsWith("node")?t="SELECT DISTINCT ?subject ?predicate ?object ?graph WHERE {\n          GRAPH ?graph {\n            "+(e="_:"+e)+" ?predicate ?object .\n          }\n        } LIMIT 1000":t="SELECT DISTINCT ?subject ?predicate ?object ?graph WHERE {\n        {\n          SELECT * {\n            GRAPH ?graph {\n              "+(e="<"+e+">")+" ?predicate ?object .\n              BIND("+e+" AS ?subject)\n            }\n          } LIMIT 1000\n        } UNION {\n          SELECT * {\n            GRAPH ?graph {\n              ?subject ?predicate "+e+" .\n              BIND("+e+" AS ?object)\n            }\n          } LIMIT 1000\n        } UNION {\n          SELECT * {\n            GRAPH ?graph {\n              ?subject "+e+" ?object .\n              BIND("+e+" AS ?predicate)\n            }\n          } LIMIT 1000\n        } UNION {\n          "+("SELECT * {\n        GRAPH "+e+" {\n          ?subject ?predicate ?object .\n          BIND("+e+" AS ?graph)\n        }\n      } LIMIT 1000")+"\n        }\n      }";return encodeURIComponent(t)}return r.a.useEffect((function(){var e=new URLSearchParams(t.search+t.hash),a=e.get("uri"),n=e.get("endpoint");a||(a="http://bio2rdf.org/clinicaltrials:NCT00209495"),n||(n="https://bio2rdf.org/sparql"),s({describe_uri:a}),s({describe_endpoint:n}),console.log("describe_endpoint"),console.log(n),/^(?:node[0-9]+)|((https?|ftp):.*)$/.test(a)?(console.log(p(a)),B.a.get(n+"?query="+p(a)).then((function(e){var t=e.data.results.bindings;console.log(t),s({describe_results:t}),s({isLoading:!1}),F("#datatableRef").DataTable()}))):B.a.get(n+"?query="+function(e){var t="";return t=""===e?"SELECT ?foundUri ?foundLabel WHERE {\n        ?foundUri a ?type ; ?p ?foundLabel .\n        VALUES ?p {<http://www.w3.org/2000/01/rdf-schema#label> <https://w3id.org/biolink/vocab/name>} .\n        FILTER(isLiteral(?foundLabel))\n        FILTER(isIRI(?foundUri))\n        } LIMIT 20":'SELECT ?foundUri ?foundLabel WHERE {\n        ?foundUri ?p ?foundLabel .\n        VALUES ?p {<http://www.w3.org/2000/01/rdf-schema#label> <https://w3id.org/biolink/vocab/name>} .\n        FILTER(isLiteral(?foundLabel))\n        FILTER contains(?foundLabel, "$TEXT_TO_SEARCH")\n        } LIMIT 5'.replace("$TEXT_TO_SEARCH",e),encodeURIComponent(t)}(a)).then((function(e){var t=e.data.results.bindings;s({search_results:t}),s({isLoading:!1})})).catch((function(e){console.log(e),s({requestError:!0}),s({isLoading:!1})}))}),[t]),r.a.createElement(w.a,{className:"mainContainer"},r.a.createElement(I.a,{variant:"body2",style:{textAlign:"center",marginBottom:"20px"}},o.describe_endpoint),r.a.createElement(I.a,{variant:"h5",style:{textAlign:"center",marginBottom:"20px"}},o.describe_uri),o.describe_results.length>0&&r.a.createElement(P.a,{elevation:4,className:e.paperPadding},r.a.createElement("table",{id:"datatableRef"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Subject"),r.a.createElement("th",null,"Predicate"),r.a.createElement("th",null,"Object"),r.a.createElement("th",null,"Graph"))),r.a.createElement("tbody",null,o.describe_results.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(I.a,{variant:"body2"},e.subject.value)),r.a.createElement("td",null,r.a.createElement(I.a,{variant:"body2"},e.predicate.value)),r.a.createElement("td",null,r.a.createElement(I.a,{variant:"body2"},e.object.value)),r.a.createElement("td",null,r.a.createElement(I.a,{variant:"body2"},e.graph.value)))}))))))}var z=Object(l.a)({palette:{primary:{light:"#63a4ff",main:"#1976d2",dark:"#004ba0"},secondary:{light:"#4caf50",main:"#087f23",dark:"#00600f"}},typography:{fontFamily:'"Open Sans", "Roboto", "Arial"',fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});t.a=function(){return r.a.createElement(s.a,{theme:z},r.a.createElement(i.a,{basename:"/into-the-graph/"},r.a.createElement(o.a,{style:{height:"100%",backgroundColor:"#eceff1"}},r.a.createElement(x,null),r.a.createElement(c.a,{exact:!0,path:"/",component:U}),r.a.createElement(c.a,{path:"/describe",component:q}),r.a.createElement(j,null))))}},104:function(e,t,a){a(105),a(106),e.exports=a(157)},105:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/into-the-graph/expo-service-worker.js",{scope:"/into-the-graph/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},112:function(e,t,a){var n=a(59),r=a(113);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},113:function(e,t,a){(t=a(60)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]),t.push([e.i,'.flexGrow {\n  flex-grow: 1; \n}\n\n.mainContainer {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\npre, code {\n  font-family: monospace, monospace;\n  border-radius: 6px;\n  padding: 2px;\n  color: white;\n  background-color: #455a64;\n  /* background-color: #1976d2; */\n}\n  \n/* @import url("https://fonts.googleapis.com/icon?family=Material+Icons");\nbody {\n  margin: 0;\n  padding: 0;\n  text-align: center; } */\n',""]),e.exports=t},72:function(e,t,a){e.exports=a.p+"static/media/icon.72626586.png"}},[[104,1,2]]]);
//# sourceMappingURL=app.cb6e4d96.chunk.js.map