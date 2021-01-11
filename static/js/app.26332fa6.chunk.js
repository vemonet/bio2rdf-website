(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{559:function(e,t,a){"use strict";a.d(t,"a",(function(){return ve}));var r=a(50),n=a.n(r),o=a(0),i=a.n(o),l=a(12),c=a(73),s=a(59),p=a(558),u=a(1161),d=(a(832),a(61)),m=a.n(d),g=a(1147),h=a(1156),b=a(1157),f=a(1154),E=a(1104),v=a(1167),y=a(1150),w=a(1105),_=a(1155),O=a(1158),S=a(513),x=a.n(S),L=a(386),j=a.n(L),k=a(511),I=a.n(k),T=a(512),N=a.n(T),P=a(31),q=a.n(P),R=a(1152),C=a(1151),D=a(1168),A=(a(1164),a(1163)),U=i.a.createContext(),B=a(1166),M=a(1153),W=a(1162),F=a(510),H=a.n(F);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=Object(g.a)((function(e){return{settingsForm:{width:"90%","& .MuiFormControl-root":{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"& .MuiFormHelperText-root":{marginTop:e.spacing(0),marginBottom:e.spacing(1)}},saveButton:{textTransform:"none",margin:e.spacing(2,2)},fullWidth:{width:"100%"},normalFont:{fontSize:"14px"},smallerFont:{fontSize:"12px"},alignLeft:{textAlign:"left"},paperPadding:{padding:e.spacing(1,1),margin:e.spacing(1,1)},marginBottom:{marginBottom:e.spacing(1)},paperTitle:{fontWeight:300,marginBottom:e.spacing(1)}}}));function V(){var e=Q(),t=i.a.useState({solid_webid:"",search_text:"",describe_uri:"",describe_endpoint:"",metadata_endpoint:"",open:!1,dialogOpen:!1,sparql_endpoint_autocomplete:"",metadata_endpoint_autocomplete:"",search_query_autocomplete:"",search_query:"",custom_search_query:""}),a=n()(t,2),r=a[0],o=a[1],l=i.a.useRef(r),c=i.a.useCallback((function(e){l.current=z(z({},l.current),e),o(l.current)}),[o]),s=i.a.useContext(U),p=n()(s,2),u=p[0],d=p[1];function m(e){console.log("Update state "),e&&e.target&&(e.target.value&&0!==e.target.value?c({sparql_endpoint_autocomplete:e.target.value}):c({sparql_endpoint_autocomplete:e.target.innerText}))}function g(e){console.log("Update state "),e&&e.target&&(e.target.value&&0!==e.target.value?c({sparql_endpoint_autocomplete:e.target.value}):c({sparql_endpoint_autocomplete:e.target.innerText}))}function h(e){var t="";e&&e.target&&(t=e.target.value&&0!==e.target.value?e.target.value:e.target.innerText);var a="";a="Optimized search in Virtuoso"===t?E:"Optimized search in Ontotext GraphDB"===t?b:"Define a custom search query"===t?r.custom_search_query:v,c({search_query:a,search_query_autocomplete:t})}var b="PREFIX luc: <http://www.ontotext.com/owlim/lucene#>\nSELECT ?foundUri ?foundLabel {\n    ?foundLabel luc:searchIndex '$TEXT_TO_SEARCH*' ;\n    luc:score ?score .\n    ?foundUri ?p ?foundLabel .\n} ORDER BY ?score LIMIT 200",E="SELECT ?foundUri ?foundLabel WHERE {\n    ?foundUri <http://www.w3.org/2000/01/rdf-schema#label> ?foundLabel .\n    ?foundLabel bif:contains '$TEXT_TO_SEARCH' .\n} LIMIT 200",v="SELECT ?foundUri ?foundLabel WHERE {\n    ?foundUri ?p ?foundLabel .\n    VALUES ?p {<http://www.w3.org/2000/01/rdf-schema#label> <https://w3id.org/biolink/vocab/name>} .\n    FILTER(isLiteral(?foundLabel))\n    FILTER contains(?foundLabel, '$TEXT_TO_SEARCH')\n} LIMIT 5";return i.a.useEffect((function(){var e=localStorage.getItem("intothegraphSettings");if(e){var t=JSON.parse(e);c({describe_endpoint:t.sparql_endpoint,search_query:t.search_query,search_query_autocomplete:t.search_query_autocomplete})}}),[]),i.a.createElement(C.a,{className:"mainContainer"},i.a.createElement("form",{onSubmit:function(e){!function(e){c({open:!0}),console.log("context before change, and sparql endpoint autocomplete value"),console.log(u),console.log(r.sparql_endpoint_autocomplete),d(r.sparql_endpoint_autocomplete),console.log("Context after setContext"),console.log(u);var t={sparql_endpoint:r.sparql_endpoint_autocomplete,metadata_endpoint:r.metadata_endpoint_autocomplete,search_query:r.search_query,search_query_autocomplete:r.search_query_autocomplete};localStorage.setItem("intothegraphSettings",JSON.stringify(t))}()}},i.a.createElement(B.a,{className:e.settingsForm,style:{width:"60ch",textAlign:"left"}},i.a.createElement(R.a,{variant:"h5",className:e.paperTitle,style:{textAlign:"center"}},"Settings"),i.a.createElement(M.a,{style:{textAlign:"center"}},"Stored in a cookie \ud83c\udf6a"),i.a.createElement(R.a,{variant:"body1"},"\ud83d\udd17 SPARQL endpoint URL"),i.a.createElement(A.a,{onChange:m,onInputChange:m,id:"autocomplete-sparql-endpoint",options:["https://graphdb.dumontierlab.com/repositories/trek","https://graphdb.dumontierlab.com/repositories/bio2vec","https://graphdb.dumontierlab.com/repositories/ncats-red-kg","https://graphdb.dumontierlab.com/repositories/bio2rdf-ammar","https://bio2rdf.org/sparql","http://dbpedia.org/sparql","http://rdf.disgenet.org/sparql/","http://rdf.pathwaycommons.org/sparql/","https://stars-app.renci.org/uberongraph/sparql","http://w3id.org/FAIR_COVID19/sparql/","https://graphdb.dumontierlab.com/repositories/covid-kg","https://graphdb.dumontierlab.com/repositories/geoeconomics","https://data.gesis.org/claimskg/sparql","http://opencitations.net/index/sparql","http://opencitations.net/sparql","https://joinup.ec.europa.eu/sparql/","http://data.europa.eu/euodp/sparqlep","http://publications.europa.eu/webapi/rdf/sparql","http://digital-agenda-data.eu/data/sparql","http://data.persee.fr/sparql","http://lod.openlinksw.com/sparql","http://data.doremus.org/sparql","http://data.allie.dbcls.jp/sparql/","http://sparql.southgreen.fr","https://sparql.nextprot.org","http://localhost:7200/repositories/demo","http://localhost:8890/sparql","http://localhost:8082/bigdata/sparql"],freeSolo:!0,includeInputInList:!0,ListboxProps:{className:e.alignLeft},renderInput:function(e){return i.a.createElement(W.a,q()({},e,{label:"SPARQL endpoint URL",variant:"outlined"}))}}),i.a.createElement(R.a,{variant:"body1"},"\ud83c\udff7\ufe0f Metadata endpoint URL"),i.a.createElement(A.a,{onChange:g,onInputChange:g,id:"autocomplete-metadata-endpoint",options:["https://graphdb.dumontierlab.com/repositories/trek"],freeSolo:!0,includeInputInList:!0,ListboxProps:{className:e.alignLeft},renderInput:function(e){return i.a.createElement(W.a,q()({},e,{label:"Metadata endpoint URL",variant:"outlined"}))}}),i.a.createElement(R.a,{variant:"body1"},"\ud83d\udd0e Search query"),i.a.createElement(A.a,{onChange:h,onInputChange:h,id:"autocomplete-search-query",options:["Generic search query","Optimized search in Virtuoso","Optimized search in Ontotext GraphDB","Define a custom search query"],freeSolo:!1,ListboxProps:{className:e.alignLeft},renderInput:function(e){return i.a.createElement(W.a,q()({},e,{label:"Search query",variant:"outlined"}))}}),i.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary"},i.a.createElement(H.a,null),"\xa0Save settings"),i.a.createElement(D.a,{open:r.open,onClose:function(e,t){c({open:!1})},autoHideDuration:3e3}))))}function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=Object(g.a)((function(e){return{menuButton:{color:e.palette.common.white,margin:e.spacing(1,1)},solidButton:{backgroundColor:e.palette.primary.main,color:"#fff",borderRadius:"6px",padding:"7px 14px","&:hover":{backgroundColor:e.palette.primary.dark,cursor:"pointer"}},linkButton:{textTransform:"none",textDecoration:"none"},linkLogo:{alignItems:"center",display:"flex"},paperPadding:{padding:e.spacing(2,2),margin:e.spacing(2,2)},paperSearch:{padding:"2px 4px",display:"flex",alignItems:"center",width:"40%"},searchInput:{marginLeft:e.spacing(1),width:"50%",fontSize:"14px",flex:1},iconButton:{padding:5}}}));function Y(){var e=J(),t=i.a.useState({solid_webid:"",search_text:"",describe_uri:"",describe_endpoint:""}),a=n()(t,2),r=a[0],o=a[1],l=i.a.useState(!1),p=n()(l,2),u=p[0],d=p[1],m=i.a.useState(null),g=n()(m,2),S=g[0],L=g[1],k=i.a.useRef(r),T=i.a.useCallback((function(e){k.current=$($({},k.current),e),o(k.current)}),[o]),P=Object(s.e)();return i.a.createElement(h.a,{title:"",position:"static"},i.a.createElement(b.a,{variant:"dense"},i.a.createElement(c.b,{to:"/",className:e.linkButton},i.a.createElement(O.a,{title:"Into the Graph homepage"},i.a.createElement(f.a,{className:e.menuButton},i.a.createElement(I.a,null),"\xa0Into the graph"))),i.a.createElement(c.b,{to:"/describe?uri=http://bio2rdf.org/clinicaltrials:NCT00209495",className:e.linkButton},i.a.createElement(O.a,{title:"Describe an URI in a SPARQL endpoint"},i.a.createElement(f.a,{className:e.menuButton},i.a.createElement(j.a,null),"\xa0Describe URI"))),i.a.createElement("div",{className:"flexGrow"}),i.a.createElement(E.a,{component:"form",className:e.paperSearch,onSubmit:function(e){e.preventDefault(),P.push("/describe?uri="+r.search_text)}},i.a.createElement(v.a,{className:e.searchInput,placeholder:"Search",onChange:function(e){T({search_text:e.target.value})},inputProps:{"aria-label":"search"}}),i.a.createElement(y.a,{type:"submit",className:e.iconButton,"aria-label":"search"},i.a.createElement(j.a,null))),i.a.createElement(O.a,{title:"Application settings"},i.a.createElement(f.a,{className:e.menuButton,onClick:function(e){console.log("Click button!"),L(S?null:e.currentTarget),d((function(e){return!e}))}},i.a.createElement(N.a,null))),i.a.createElement(w.a,{open:u,anchorEl:S},i.a.createElement(_.a,{onClickAway:function(){d(!1),L(S?null:S),console.log("Click away!")}},i.a.createElement(E.a,{elevation:4,className:e.paperPadding},i.a.createElement(V,null)))),i.a.createElement(O.a,{title:"Go to https://github.com/MaastrichtU-IDS/into-the-graph"},i.a.createElement(f.a,{className:e.menuButton,target:"_blank",href:"https://github.com/MaastrichtU-IDS/into-the-graph",rel:"noopener noreferrer"},i.a.createElement(x.a,null)))))}var K=Object(g.a)((function(e){return{darkLink:{textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.light,textDecoration:"none"}},whiteLink:{textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.dark,textDecoration:"none"}},footer:{padding:e.spacing(2),marginTop:"auto",color:"white",backgroundColor:e.palette.primary.main}}}));function Z(){var e=K();return i.a.createElement(R.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",i.a.createElement("a",{className:e.darkLink,target:"_blank",rel:"noopener noreferrer",href:"https://maastrichtuniversity.nl/ids"},"Institute of Data Science at Maastricht University")," ","2020.")}function ee(){var e=K();return i.a.createElement("footer",{className:e.footer},i.a.createElement(C.a,{maxWidth:"md",style:{textAlign:"center"}},i.a.createElement(R.a,{variant:"body2"},"This website is licensed under the\xa0",i.a.createElement("a",{className:e.whiteLink,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/MaastrichtU-IDS/into-the-graph/blob/main/LICENSE"},"MIT license"),i.a.createElement("br",null),"License of the displayed data is defined by the SPARQL endpoint provider"),i.a.createElement(Z,null)))}var te=a(139);function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ne=Object(g.a)((function(e){return{margin:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},paperSearch:{padding:"2px 4px",display:"flex",alignItems:"center",width:"30%"},searchInput:{marginLeft:e.spacing(1),width:"50%",fontSize:"14px",flex:1},link:{textDecoration:"none",textTransform:"none",color:e.palette.primary.main,"&:hover":{color:e.palette.secondary.main,textDecoration:"none"}},paperPadding:{padding:e.spacing(2,2),margin:e.spacing(2,2)},cardSubtitle:{fontSize:14,marginTop:8},pos:{}}}));function oe(){var e=ne(),t=Object(te.a)(),a=i.a.useState({webid:"",projects_list:[],search:"",repositories_hash:{},category_pie:{}}),r=n()(a,2),o=r[0],l=r[1],s=i.a.useRef(o);i.a.useCallback((function(e){s.current=re(re({},s.current),e),l(s.current)}),[l]);return i.a.useEffect((function(){}),[]),i.a.createElement(C.a,{className:"mainContainer"},i.a.createElement(R.a,{variant:"h4",className:e.margin,style:{marginBottom:t.spacing(4)}},"\ud83e\udded Into the Graph"),i.a.createElement(E.a,{elevation:4,className:e.paperPadding},i.a.createElement(R.a,{variant:"body1",className:e.margin},"Provide the ",i.a.createElement("b",null,"URI to describe"),", and the ",i.a.createElement("b",null,"SPARQL endpoint")," queried in the URL parameters, such as:"),i.a.createElement(R.a,{variant:"h5",className:e.margin},i.a.createElement(c.b,{to:{pathname:"/describe",search:"?uri=http://bio2rdf.org/clinicaltrials:NCT00209495&endpoint=https://bio2rdf.org/sparql"},className:e.link},"/describe?uri=http://bio2rdf.org/clinicaltrials:NCT00209495&endpoint=https://bio2rdf.org/sparql"))),i.a.createElement(R.a,{variant:"body1",className:e.margin,style:{textAlign:"left",marginTop:t.spacing(5)}},i.a.createElement("b",null,"Into the Graph")," provides a simple RDF web browser that just need a SPARQL endpoint URL to resolve URIs, and explore the available linked data."),i.a.createElement(R.a,{variant:"body1",className:e.margin,style:{textAlign:"left"}},"This linked data browser features:",i.a.createElement("br",null),"\ud83d\udd0e A web-based UI to browse any SPARQL endpoints content easily",i.a.createElement("br",null),"\ud83d\udd78\ufe0f Native support for graphs (nquads)",i.a.createElement("br",null),"\ud83c\udfd7\ufe0f Work in progress: visualize and browse concepts using ",i.a.createElement("a",{href:"https://perfectgraph-5c619.web.app",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("code",null,"perfect-graph")),i.a.createElement("br",null),"\ud83d\udea7 Work in progress: insights about the content of the triplestore and its different graphs, using precomputed HCLS descriptives statistics"),i.a.createElement(R.a,{variant:"body1",className:e.margin,style:{textAlign:"left"}},"Other relevant libraries:"),i.a.createElement("ul",{style:{textAlign:"left"}},i.a.createElement("li",null,i.a.createElement(R.a,{variant:"body1"},i.a.createElement("a",{href:"https://github.com/micheldumontier/torres-api-platform/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"TORRES API platform")," to store HCLS descriptive metadata for your dataset")),i.a.createElement("li",null,i.a.createElement(R.a,{variant:"body1"},i.a.createElement("a",{href:"https://github.com/MaastrichtU-IDS/fair-metadata",className:e.link,target:"_blank",rel:"noopener noreferrer"},"FAIR metadata")," python lib: to generate HCLS descriptive metadata for your dataset")),i.a.createElement("li",null,i.a.createElement(R.a,{variant:"body1"},i.a.createElement("a",{href:"https://github.com/MaastrichtU-IDS/d2s-project-template/tree/master/datasets/preppi",className:e.link,target:"_blank",rel:"noopener noreferrer"},"Data2Services workflows")," to generate RDF knowledge graphs from structured data using RML (RDF Mapping Language)"))))}var ie=a(1159),le=a(1160),ce=a(387),se=a.n(ce),pe=(a(855),a(340)),ue=a(11),de=Object(g.a)((function(e){return{uriLink:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)","& :hover":{color:e.palette.primary.main},overflowWrap:"break-word"}}}));function me(e){var t=de(),a={rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",owl:"http://www.w3.org/2002/07/owl#",skos:"http://www.w3.org/2004/02/skos/core#",dc:"http://purl.org/dc/elements/1.1/",dct:"http://purl.org/dc/terms/",dctypes:"http://purl.org/dc/dcmitype/",bl:"https://w3id.org/biolink/vocab/",biolink:"http://w3id.org/biolink/vocab/",d2s:"https://w3id.org/d2s/",omop:"http://api.ohdsi.org/WebAPI/vocabulary/concept/",cohd:"https://w3id.org/trek/cohd/",bio2rdf:"http://bio2rdf.org/",dbo:"http://dbpedia.org/ontology/",dbp:"http://dbpedia.org/property/",wd:"http://www.wikidata.org/entity/",wdt:"http://www.wikidata.org/prop/direct/",foaf:"http://xmlns.com/foaf/0.1/",idot:"http://identifiers.org/idot/",dcat:"http://www.w3.org/ns/dcat#",void:"http://rdfs.org/ns/void#","void-ext":"http://ldf.fi/void-ext#",obo:"http://purl.obolibrary.org/obo/",ncit:"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#",xsd:"http://www.w3.org/2001/XMLSchema#",schema:"http://schema.org/",cito:"http://purl.org/spar/cito/",prov:"http://www.w3.org/ns/prov#",pav:"http://purl.org/pav/",pplan:"http://purl.org/net/p-plan#",np:"http://www.nanopub.org/nschema#",npx:"http://purl.org/nanopub/x/"};return/^(?:node[0-9]+)|((https?|ftp):.*)$/.test(e.uri)?i.a.createElement(c.b,{to:{pathname:"/describe",search:"?uri="+e.uri},className:t.uriLink},i.a.createElement(R.a,{variant:e.variant,className:e.passClass,style:{overflowWrap:"break-word"}},function(e){for(var t in a)if(e.startsWith(a[t]))return e.replace(a[t],t+":");return e}(e.uri))):i.a.createElement(R.a,{variant:e.variant,className:e.passClass,style:{textAlign:"left",overflowWrap:"break-word"}},e.uri)}function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function he(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be=a(421);be.DataTable=a(863);var fe=Object(g.a)((function(e){return{margin:{marginTop:e.spacing(2),marginBottom:e.spacing(2),textAlign:"center"},link:{textDecoration:"none",textTransform:"none",color:e.palette.primary.main,"&:hover":{color:e.palette.secondary.main,textDecoration:"none"}},fullWidth:{width:"100%"},normalFont:{fontSize:"14px"},smallerFont:{fontSize:"12px"},alignLeft:{textAlign:"left"},paperPadding:{padding:e.spacing(2,2)},paperTitle:{fontWeight:300,marginBottom:e.spacing(1)},loadSpinner:{padding:e.spacing(10,10)},datatable_text:{wordBreak:"break-word"}}}));function Ee(){var e=fe(),t=Object(te.a)(),a=i.a.useState({describe_uri:"",describe_endpoint:"",describe_results:[],search_results:[],graph_data:{nodes:[],edges:[]},isLoading:!0,requestError:!1}),r=n()(a,2),o=r[0],l=r[1],c=i.a.useRef(o),p=i.a.useCallback((function(e){c.current=he(he({},c.current),e),l(c.current)}),[l]),u=Object(s.f)();return i.a.useEffect((function(){p({describe_results:{}}),p({search_results:{}}),p({isLoading:!0});var e=new URLSearchParams(u.search+u.hash),t=e.get("uri"),a=e.get("endpoint");if(!a){var r=localStorage.getItem("intothegraphSettings");if(r)a=JSON.parse(r).sparql_endpoint}t||(t="http://bio2rdf.org/clinicaltrials:NCT00209495"),a||(a="https://bio2rdf.org/sparql"),p({describe_uri:t}),p({describe_endpoint:a}),/^(?:node[0-9]+)|((https?|ftp):.*)$/.test(t)?se.a.get(a+"?query="+function(e){var t;return t=e.startsWith("node")?"SELECT DISTINCT ?subject ?predicate ?object ?graph WHERE {\n          GRAPH ?graph {\n            "+(e="_:"+e)+" ?predicate ?object .\n          }\n        } LIMIT 1000":"SELECT DISTINCT ?subject ?predicate ?object ?graph WHERE {\n        {\n          SELECT * {\n            GRAPH ?graph {\n              "+(e="<"+e+">")+" ?predicate ?object .\n              BIND("+e+" AS ?subject)\n            }\n          } LIMIT 1000\n        } UNION {\n          SELECT * {\n            GRAPH ?graph {\n              ?subject ?predicate "+e+" .\n              BIND("+e+" AS ?object)\n            }\n          } LIMIT 1000\n        } UNION {\n          SELECT * {\n            GRAPH ?graph {\n              ?subject "+e+" ?object .\n              BIND("+e+" AS ?predicate)\n            }\n          } LIMIT 1000\n        } UNION {\n          "+("SELECT * {\n        GRAPH "+e+" {\n          ?subject ?predicate ?object .\n          BIND("+e+" AS ?graph)\n        }\n      } LIMIT 1000")+"\n        }\n      }",encodeURIComponent(t)}(t)).then((function(e){var t=e.data.results.bindings;console.log(t),p({describe_results:t}),p({isLoading:!1}),be("#datatableRef").DataTable({autoWidth:!1});var a={},r=[],n=1;t.forEach((function(e){e.subject.value in a||(a[e.subject.value]={id:e.subject.value,position:{x:100*n,y:400*n},data:{uri:e.subject.value,color:"red"}},n+=1),e.object.value in a||(a[e.object.value]={id:e.object.value,position:{x:80*n,y:40*n},data:{uri:e.object.value,color:"green"}},n+=1);var t=e.subject.value+e.predicate.value+e.object.value;r.push({id:t,source:e.subject.value,target:e.object.value,data:{uri:e.predicate.value,color:"green"}}),console.log("Graph nodes and edges"),console.log(a),console.log(r)}));var o=Object.keys(a).map((function(e){return a[e]}));p({graph_data:{nodes:o,edges:r}})})):se.a.get(a+"?query="+function(e){var t="",a=localStorage.getItem("intothegraphSettings");return a&&(t=JSON.parse(a).search_query),t||(t='SELECT ?foundUri ?foundLabel WHERE {\n        ?foundUri ?p ?foundLabel .\n        VALUES ?p {<http://www.w3.org/2000/01/rdf-schema#label> <https://w3id.org/biolink/vocab/name>} .\n        FILTER(isLiteral(?foundLabel))\n        FILTER contains(?foundLabel, "$TEXT_TO_SEARCH")\n        } LIMIT 5'.replace("$TEXT_TO_SEARCH",e)),encodeURIComponent(t)}(t)).then((function(e){var t=e.data.results.bindings;p({search_results:t}),p({isLoading:!1})})).catch((function(e){console.log(e),p({requestError:!0}),p({isLoading:!1})}))}),[u]),i.a.createElement(C.a,{className:"mainContainer"},i.a.createElement(R.a,{variant:"body2",className:e.margin},o.describe_endpoint),i.a.createElement(R.a,{variant:"h5",className:e.margin},o.describe_uri),o.isLoading&&i.a.createElement(ie.a,{className:e.loadSpinner}),o.describe_results.length>0&&i.a.createElement(E.a,{elevation:4,className:e.paperPadding},i.a.createElement("table",{id:"datatableRef",style:{wordBreak:"break-all"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Subject"),i.a.createElement("th",null,"Predicate"),i.a.createElement("th",null,"Object"),i.a.createElement("th",null,"Graph"))),i.a.createElement("tbody",null,o.describe_results.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,i.a.createElement(me,{variant:"body2",uri:e.subject.value})),i.a.createElement("td",null,i.a.createElement(me,{variant:"body2",uri:e.predicate.value})),i.a.createElement("td",null,i.a.createElement(me,{variant:"body2",uri:e.object.value})),i.a.createElement("td",null,i.a.createElement(me,{variant:"body2",uri:e.graph.value})))}))))),o.search_results.length>0&&i.a.createElement(E.a,{elevation:4,className:e.paperPadding},o.search_results.map((function(t,a){return i.a.createElement(le.a,{container:!0,spacing:2,alignItems:"center",key:a},i.a.createElement(le.a,{item:!0,xs:6},i.a.createElement(E.a,{className:e.paperPadding},i.a.createElement(me,{variant:"body2",uri:t.foundUri.value}))),i.a.createElement(le.a,{item:!0,xs:6},i.a.createElement(R.a,{variant:"body2"},t.foundLabel.value)))}))),o.requestError&&i.a.createElement(E.a,{elevation:2,className:e.paperPadding},i.a.createElement(R.a,{variant:"body2"},"The request to the SPARQL endpoint failed, try to ",i.a.createElement("a",{href:"",className:e.link},"reload the page \u267b\ufe0f"),i.a.createElement("br",null),"Or\xa0",i.a.createElement("a",{href:"https://addons.mozilla.org/fr/firefox/addon/cors-everywhere/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"enable CORS requests")," in your browser.")),!o.requestError&&!o.isLoading&&o.describe_results.length<1&&!o.search_results.length&&i.a.createElement(E.a,{elevation:2,className:e.paperPadding},i.a.createElement(R.a,{variant:"body2"},"We could not find a match for your URI in the SPARQL endpoint.")),!o.requestError&&!o.isLoading&&o.search_results.length<1&&!o.describe_results.length&&i.a.createElement(E.a,{elevation:2,className:e.paperPadding},i.a.createElement(R.a,{variant:"body2"},"We could not find a match for your search in the SPARQL endpoint.")),i.a.createElement(R.a,{variant:"h5",className:e.margin,style:{marginTop:t.spacing(6)}},"Perfect Graph visualization"),i.a.createElement(E.a,{elevation:4,className:e.paperPadding},i.a.createElement(ue.a,null,i.a.createElement(pe.a,{style:{width:"100%",height:800},nodes:o.graph_data.nodes,edges:o.graph_data.edges,renderNode:function(e){var t=e.item.data;return i.a.createElement(pe.a.View,{style:{width:100,height:100,backgroundColor:t.color}},i.a.createElement(pe.a.Text,{style:{fontSize:16}},t.uri))}}))))}function ve(){var e=i.a.useState("https://bio2rdf.org/sparql"),t=n()(e,2),a=t[0],r=t[1],o=Object(p.a)({palette:{primary:{light:"#63a4ff",main:"#1976d2",dark:"#004ba0"},secondary:{light:"#ffa040",main:"#ff6f00",dark:"#c43e00"}},typography:{fontFamily:'"Open Sans", "Roboto", "Arial"',fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});return i.a.createElement(U.Provider,{value:[a,r]},i.a.createElement(u.a,{theme:o},i.a.createElement(c.a,{basename:"/into-the-graph/"},i.a.createElement(l.a,{style:{height:"100%",backgroundColor:"#eceff1"}},i.a.createElement(Y,null),i.a.createElement(s.a,{exact:!0,path:"/",component:oe}),i.a.createElement(s.a,{path:"/describe",component:Ee}),i.a.createElement(ee,null)))))}},821:function(e,t,a){a(822),a(823),e.exports=a(1103)},822:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/into-the-graph/expo-service-worker.js",{scope:"/into-the-graph/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},832:function(e,t,a){var r=a(410),n=a(833);"string"===typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);e.exports=n.locals||{}},833:function(e,t,a){(t=a(411)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]),t.push([e.i,'.flexGrow {\n  flex-grow: 1; \n}\n\n.mainContainer {\n  margin-top: 30px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n/* a {\n  text-transform: none;\n  text-decoration: none\n} */\n\npre, code {\n  font-family: monospace, monospace;\n  border-radius: 6px;\n  padding: 2px;\n  color: white;\n  background-color: #455a64;\n  /* background-color: #1976d2; */\n}\n  \n/* @import url("https://fonts.googleapis.com/icon?family=Material+Icons");\nbody {\n  margin: 0;\n  padding: 0;\n  text-align: center; } */\n',""]),e.exports=t}},[[821,1,2]]]);
//# sourceMappingURL=app.26332fa6.chunk.js.map