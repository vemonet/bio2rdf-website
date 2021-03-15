import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Container, Paper, CircularProgress, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Button, Card } from "@material-ui/core";
import DeviceHubIcon from '@material-ui/icons/DeviceHub';

import axios from 'axios';
// Import jquery datatables.net
import 'datatables.net-dt/css/jquery.dataTables.min.css'
const $ = require('jquery');
$.DataTable = require('datatables.net');

import Yasgui from "@triply/yasgui";
import "@triply/yasgui/build/yasgui.min.css";

import { Graph, drawLine } from "perfect-graph";
import { ApplicationProvider } from 'unitx-ui';

import CytoscapeComponent from 'react-cytoscapejs';
import Cytoscape from 'cytoscape';
import Cola from 'cytoscape-cola';

import LinkDescribe from '../components/LinkDescribe';
import About from './About';
import Config from "../components/Config";

// @ts-ignore 
import SparqlQueries from '../../assets/queries.rq';

Cytoscape.use(Cola);

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    // textAlign: 'center',
  },
  paperSearch: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '30%',
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    width: '50%',
    fontSize: '14px',
    flex: 1,
  },
  link: {
    textDecoration: 'none',
    textTransform: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
  paperPadding: {
    padding: theme.spacing(2, 2),
    margin: theme.spacing(2, 0),
  },
  paperQuery: {
    padding: theme.spacing(2, 2),
    margin: theme.spacing(2, 0),
    "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
  },
  cardSubtitle: {
    fontSize: 14,
    marginTop: 8,
  },
  loadSpinner: {
    padding: theme.spacing(10, 10)
  },
}))

export default function Homepage() {
  const classes = useStyles();
  const theme = useTheme();
  
  const [state, setState] = React.useState({
    isLoading: true,
    sparql_queries: [],
    yasgui: {},
    search: '',
    get_all_graphs_results: [],
    hcls_overview_results: [],
    entities_relations_overview_results: [],
    graph_data: {nodes: [], edges: []},
    cytoscape_elements: [],
  });

  // Avoid conflict when async calls
  const stateRef = React.useRef(state);
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);

  function displayTableCell(stringToDisplay: any) {
    if (stringToDisplay) {
      return stringToDisplay.value;
    } else {
      return 'Not computed';
    }
  }


  // Run at start of the page
  React.useEffect(() => {

    let describe_endpoint = Config.sparql_endpoint;
    let sparql_queries: any = []

    // Get SPARQL queries
    fetch(SparqlQueries)
      .then((r) => r.text())
      .then(text  => {
        console.log("SparqlQueries");
        // console.log(text);
        const queries_array = text.split('---')
        queries_array.forEach((query_string: any) => {
          // console.log(query_string);
          // yaml_string = "\n".join([row.lstrip('#+') for row in sparql_query.split('\n') if row.startswith('#+')])
          let query_summary;
          let query_params: any = [];
          let query_no_comments = query_string;
          // Parse basic grlc/BASIL metadata in SPARQL queries
          query_string.split('\n').forEach((line: any) => {
            if (line.startsWith('#+ summary: ')) {
              query_summary = line.replace('#+ summary: ', '')
            }
            if (line.startsWith('#+ ')) {
              // Handle params line
              query_no_comments = query_no_comments.replace(line + '\n', '')
              query_params.push(line.replace('#+ ', ''))
            }
          })
          sparql_queries.push({
            'summary': query_summary,
            'params': query_params.join('\n'),
            'query': query_no_comments.trim(),
            'full_query': query_string.trim(),
            // 'tags': query_summary
          })
        })
        console.log(sparql_queries);
        updateState( { sparql_queries: sparql_queries } );
      }) 

    Yasgui.defaults.requestConfig.endpoint = describe_endpoint;
    // @ts-ignore If endpoint and query provided
    let yasgui: any = new Yasgui(document.getElementById('yasguiDiv'), {
      requestConfig: { endpoint: describe_endpoint },
      copyEndpointOnNewTab: true,
    });
    updateState( { yasgui: yasgui } );
    // yasgui.addTab(
    //   true, // set as active tab
    //   { ...Yasgui.Tab.getDefaults(), yasqe: { value: props.query }}
    // );

    axios.get(describe_endpoint + `?query=` + encodeURIComponent(get_all_graphs_query))
      .then((res: any) => {
        console.log('after get all graphs');
        console.log(res);
        if (res.data.results){
          updateState( { get_all_graphs_results: res.data.results.bindings } );
          // updateState({ graphsLoading: false });
          // $(this.refs.graphsOverview).DataTable();
          $('#datatableAllGraphs').DataTable({
            "autoWidth": false
          });
        }
      })
      .catch((error: any) => {
        console.log('Query to get all graphs failed');
        console.log(error);
      });

    axios.get(describe_endpoint + `?query=` + encodeURIComponent(hcls_overview_query))
      .then((res: any) => {
        if (res.data.results){
          updateState( { hcls_overview_results: res.data.results.bindings } );
          // updateState({ graphsLoading: false });
          // $(this.refs.graphsOverview).DataTable();
          $('#datatableHclsOverview').DataTable({
            "autoWidth": false
          });
        }
      })
      .catch((error: any) => {
        console.log('Query to get HCLS stats overview failed');
        console.log(error);
      });

    axios.get(describe_endpoint + `?query=` + encodeURIComponent(entities_relations_query))
      .then((res: any) => {
        if (res.data.results){
          updateState( { entities_relations_overview_results: res.data.results.bindings } );
          // updateState({ graphsLoading: false });
          // $(this.refs.graphsOverview).DataTable();
          $('#datatableEntitiesRelationOverview').DataTable({
            "autoWidth": false
          });

          let graph_nodes: any = {}
          let graph_edges: any = {}
          let cytoscape_elements: any = []
          let node_count = 1;
          let edge_count = 0;
          const edge_max = 100;

          // Prepare perfect graph and cytoscape data
          res.data.results.bindings.forEach((result_row: any) => {
            let subject_count = 1;
            if (result_row.subjectCount) {
              subject_count = result_row.subjectCount.value;
            }
            // Add subject node to hash if not present
            if (!(result_row.subject.value in graph_nodes)) {
              // If not already in array
              graph_nodes[result_row.subject.value] = {
                id: result_row.subject.value,
                position: { x: node_count * 80, y: node_count * 100 },
                data: { uri: result_row.subject.value, color: 'red', size: subject_count },
              };
              // cytoscape_elements.push({ data: { 
              //   id: result_row.subject.value, 
              //   label: result_row.subject.value, 
              //   size: result_row.subjectCount.value
              // } })
              node_count += 1;
            } else {
              graph_nodes[result_row.subject.value].data.size += subject_count;
            }

            let object_count = 1;
            if (result_row.objectCount) {
              object_count = result_row.objectCount.value;
            }
            // Add object node
            if (result_row.object) {
              if (!(result_row.object.value in graph_nodes)) {
                // If not already in array
                graph_nodes[result_row.object.value] = {
                  id: result_row.object.value,
                  position: { x: node_count * 80, y: node_count * 40 },
                  data: { uri: result_row.object.value, color: 'green', size: object_count },
                };
                // cytoscape_elements.push({ data: { 
                //   id: result_row.object.value, 
                //   label: result_row.object.value,
                //   size: result_row.objectCount.value
                // } })
                node_count += 1;
              } else {
                graph_nodes[result_row.object.value].data.size += object_count;
              }
            }

            // Add edge between the 2 nodes
            if (result_row.object && edge_count < edge_max) {
              const edge_id = result_row.subject.value + result_row.predicate.value + result_row.object.value;
              if (!(edge_id in graph_edges)) {
                if (!(result_row.object.value === result_row.subject.value)) {
                  // Prevents link to itself (too confusing currently)
                  graph_edges[edge_id] = {
                    id: edge_id,
                    source: result_row.subject.value,
                    target: result_row.object.value,
                    data: { uri: result_row.predicate.value, color: 'green' }
                  };
                  cytoscape_elements.push({ data: { 
                    source: result_row.subject.value, 
                    target: result_row.object.value, 
                    label: result_row.predicate.value 
                  } })
                }
                edge_count += 1
              }
            }
          })

        // Convert graph nodes and edges objects to arrays
        const graph_nodes_array = Object.keys(graph_nodes).map(function(node_id){
          cytoscape_elements.push({ data: { 
            id: node_id, 
            label: node_id, 
            size: graph_nodes[node_id].data.size
          } })
          return graph_nodes[node_id];
        });
        const graph_edges_array = Object.keys(graph_edges).map(function(edge_id){
          // cytoscape_elements.push({ data: { 
          //   source: graph_edges[edge_id].source, 
          //   target: graph_edges[edge_id].target, 
          //   label: graph_edges[edge_id].data.uri 
          // } })
          return graph_edges[edge_id];
        });

        console.log('Graph nodes and edges data');
        console.log(graph_nodes_array);
        console.log(graph_edges);


        updateState({
          graph_data: { nodes: graph_nodes_array, edges: graph_edges_array },
          cytoscape_elements: cytoscape_elements,
          isLoading: false
        })
        }
      })
      .catch((error: any) => {
        console.log('Query to get all HCLS entities-relations infos FAILED:');
        console.log(error);
      });


  }, [])  
  // This useless array needs to be added for React to understand he needs to use the state inside...

  // }, [solid_webid])
  // Trying out the SOLID webId hook

  const get_all_graphs_query = `SELECT DISTINCT ?graph WHERE { GRAPH ?graph {?s ?p ?o} }`;

  // TODO: For Bio2RDF documented queries fails
  // https://github.com/bio2rdf/bio2rdf-scripts/wiki/Bio2RDF-Dataset-Summary-Statistics

  // Change Cytoscape layout
  // https://js.cytoscape.org/#layouts

  const cytoscape_layout = {
    name: 'cola',
    nodeSpacing: 400,
    edgeLengthVal: 1500,
    animate: false,
    randomize: false,
    maxSimulationTime: 1500
  }
  // const cytoscape_layout = { 
  //   name: 'concentric',
  //   minNodeSpacing: 200
  // };
  // const cytoscape_layout = { name: 'breadthfirst' };
  // const cytoscape_layout = {
  //   name: 'cose',
  //   animate: 'end',
  //   fit: true,
  //   componentSpacing: 1000,
  //   nodeOverlap: 10,
  //   nodeRepulsion: function( node: any ){ return 4092; },
  //   idealEdgeLength: function( edge: any ){ return 300; },
  // };

  function loadSparqlQuery(query_string: any) {
    const yasgui: any = state.yasgui
    yasgui.addTab(
      true, // set as active tab
      { ...Yasgui.Tab.getDefaults(), yasqe: { value: query_string }}
    )
    updateState({ yasgui: yasgui })
  }

  return(
    <Container className='mainContainer'>

      <About />

      {/* Display YASGUI */}
      <Paper elevation={4} className={classes.paperPadding} style={{ textAlign: 'left', marginTop: theme.spacing(4) }}>
        <div id="yasguiDiv"></div>
      </Paper>

      <Typography variant="h5" style={{ textAlign: 'center', marginTop: theme.spacing(6), marginBottom: theme.spacing(2) }} >
        SPARQL queries for Bio2RDF
      </Typography>
      {state.sparql_queries.map((query: any, key: number) => {
        // return <Tooltip title={displayDescription(row.name, row.description)} key={key}>
        return <div key={key} onClick={ () => { loadSparqlQuery(query.query) }}>
            <Paper elevation={2} className={classes.paperQuery} style={{ cursor: 'pointer', textAlign: 'center' }}>
              {/* <Button variant="contained" color="primary" onClick={ () => { console.log('test!!') }}>
                Run query
              </Button> */}
              <Typography variant="body1" >
                {query.summary}
              </Typography>
            </Paper>
          </div>
        {/* </Tooltip>; */}
      })}

      {/* Display a datatable with subject, predicate, object, graph retrieved */}
      {Object.keys(state.get_all_graphs_results).length > 0 && (<>
        <Typography variant="h5" className={classes.margin} style={{ marginTop: theme.spacing(6) }}>
          Graphs overview
        </Typography>
        <Paper elevation={4} className={classes.paperPadding}>
          <table id='datatableAllGraphs' style={{ wordBreak: 'break-all' }}>
            <thead>
              <tr>
                <th>Graphs</th>
              </tr>
            </thead>
            <tbody>
              {/* Iterate Describe query results array */}
              {state.get_all_graphs_results.map((row: any, key: number) => {
                // return <Tooltip title={displayDescription(row.name, row.description)} key={key}>
                return <tr key={key}>
                    <td><LinkDescribe variant='body2' uri={row.graph.value}/></td>
                  </tr>
                {/* </Tooltip>; */}
              })}
            </tbody>
          </table>
        </Paper>
        </>)}

        {Object.keys(state.hcls_overview_results).length > 0 && (<>
        <Typography variant="h5" className={classes.margin} style={{ marginTop: theme.spacing(6) }}>
          Endpoint <b>descriptive metadata</b> (<a href={Config.sparql_endpoint} className={classes.link}>HCLS</a>)
        </Typography>
        <Paper elevation={4} className={classes.paperPadding}>
          <table id='datatableHclsOverview' style={{ wordBreak: 'break-all' }}>
            <thead>
              <tr>
                <th>Graph</th>
                <th>Date generated</th>
                <th># of triples</th>
                <th># of entities</th>
                <th># of properties</th>
                <th># of classes</th>
              </tr>
            </thead>
            <tbody>
              {/* Iterate Describe query results array */}
              {state.hcls_overview_results.map((row: any, key: number) => {
                // return <Tooltip title={displayDescription(row.name, row.description)} key={key}>
                return <tr key={key}>
                    <td><LinkDescribe variant='body2' uri={row.graph.value}/></td>
                    <td><Typography variant="body2">{displayTableCell(row.dateGenerated)}</Typography></td>
                    <td><Typography variant="body2">{displayTableCell(row.statements)}</Typography></td>
                    <td><Typography variant="body2">{displayTableCell(row.entities)}</Typography></td>
                    <td><Typography variant="body2">{displayTableCell(row.properties)}</Typography></td>
                    <td><Typography variant="body2">{displayTableCell(row.classes)}</Typography></td>
                  </tr>
                {/* </Tooltip>; */}
              })}
            </tbody>
          </table>
        </Paper>
        </>)}

        <Paper elevation={4} className={classes.paperPadding}>
          {state.isLoading && (
            <CircularProgress className={classes.loadSpinner} />
          )}

          {state.graph_data.nodes.length > 0 && (<>
            <Typography variant="h5" className={classes.margin} style={{ marginTop: theme.spacing(6) }}>
              <b>Entities-relations</b> metadata (<a href={Config.sparql_endpoint} className={classes.link}>HCLS</a>)
            </Typography>
            <Typography variant="body1" className={classes.margin} style={{ marginTop: theme.spacing(6) }}>
              <a href='https://perfectgraph-5c619.web.app/' className={classes.link} target='_blank' rel="noopener noreferrer">
                <b>Perfect Graph</b>
              </a> visualization
            </Typography>
            <Paper elevation={4} className={classes.paperPadding}>
              <ApplicationProvider>
                <Graph
                  style={{ width: '100%', height: 800 }}
                  // @ts-ignore
                  config={{ layout: Graph.Layouts.euler }}
                  nodes={state.graph_data.nodes}
                  edges={state.graph_data.edges}
                  // nodes={[
                  //   {
                  //     id: '1',
                  //     position: { x: 10, y: 10 },
                  //     data: { city: 'Amsterdam', color: 'red' },
                  //   },
                  //   {
                  //     id: '2',
                  //     position: { x: 300, y: 10 },
                  //     data: { city: 'Maastricht', color: 'blue' },
                  //   },
                  // ]}
                  // edges={[
                  //   { id: '51', source: '1', target: '2' },
                  // ]}
                  // drawLine={({ graphics, to, from }) => {
                  //   drawLine({
                  //     graphics,
                  //     to,
                  //     from,
                  //     directed: true
                  //     // type: 'bezier'
                  //   })
                  // }} 
                  renderNode={({ item: { data } }: any) => (
                    <Graph.View
                      style={{ width: 100, height: 100, backgroundColor: data.color }}
                    >
                      <Graph.Text style={{ fontSize: 16 }}>
                        {data.uri.substring(data.uri.lastIndexOf('/') + 1)}
                      </Graph.Text>
                      {/* <LinkDescribe variant='body2' uri={data.uri}/> */}
                    </Graph.View>
                  )}
                />
              </ApplicationProvider>
            </Paper>
          </> )}

          {state.graph_data.nodes.length > 0 && (<>
            <Typography variant="body1" className={classes.margin} style={{ marginTop: theme.spacing(6) }}>
              <a href='https://github.com/plotly/react-cytoscapejs' className={classes.link} target='_blank' rel="noopener noreferrer">
                <b>Cytoscape JS</b>
              </a> visualization
            </Typography>
            <Paper elevation={4} className={classes.paperPadding} style={{ height: '80vh', textAlign: 'left' }}>
              <CytoscapeComponent elements={state.cytoscape_elements} layout={cytoscape_layout}
                style={{ width: '100%', height: '100%',  }} 
                stylesheet={[
                  {
                    selector: 'edge',
                    style: {
                      'label': 'data(label)',
                      'color': '#546e7a', // Grey
                      'text-wrap': 'wrap',
                      'font-size': '18px',
                      'text-opacity': 0.9,
                      'target-arrow-shape': 'triangle',
                      // 'line-color': '#ccc',
                      // 'target-arrow-color': '#ccc',
                      // Control multi edge on 2 nodes:
                      'curve-style': 'bezier',
                      'control-point-step-size': 300,
                    }
                  },
                  {
                    selector: 'node',
                    style: {
                      'label': 'data(label)',
                      'text-wrap': 'wrap',
                      'font-size': '30px',
                      // width: 15,
                      // 'width': 'data(size)',
                      // 'height': 'data(size)',
                      // shape: 'rectangle'
                    }
                  }
                ]}
              />
            </Paper>
          </> )}

          {Object.keys(state.entities_relations_overview_results).length > 0 && (<>
            <Typography variant="body1" className={classes.margin} style={{ marginTop: theme.spacing(6) }}>
              <a href='https://datatables.net' className={classes.link} target='_blank' rel="noopener noreferrer">
                Datatable
              </a>
            </Typography>
            <Paper elevation={4} className={classes.paperPadding}>
              <table id='datatableEntitiesRelationOverview' style={{ wordBreak: 'break-all' }}>
                <thead>
                  <tr>
                    <th>Graph</th>
                    <th># of instance of subject</th>
                    <th>Subject class</th>
                    <th>Have relation</th>
                    <th>With Object class</th>
                    <th># of instance of object</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Iterate Describe query results array */}
                  {state.entities_relations_overview_results.map((row: any, key: number) => {
                    return <tr key={key}>
                        <td><LinkDescribe uri={row.graph.value} variant='body2'/></td>
                        <td><Typography variant="body2">{displayTableCell(row.subjectCount)}</Typography></td>
                        <td><LinkDescribe uri={row.subject.value} variant='body2'/></td>
                        <td><LinkDescribe uri={row.predicate.value} variant='body2'/></td>
                        {row.object && (
                          <td><LinkDescribe uri={row.object.value} variant='body2'/></td>
                        )}
                        {!row.object && (
                          <td><Typography variant="body2">Not found</Typography></td>
                        )}
                        <td><Typography variant="body2">{displayTableCell(row.objectCount)}</Typography></td>
                      </tr>
                  })}
                </tbody>
              </table>
            </Paper>
          </>)}

        </Paper>

    </Container>
  )

}

const hcls_overview_query = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dctypes: <http://purl.org/dc/dcmitype/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT DISTINCT ?graph ?name ?description ?homepage ?dateGenerated ?statements ?entities ?properties ?classes
WHERE {
  GRAPH ?metadataGraph {
    ?graph a void:Dataset .
    OPTIONAL {
      ?dataset a dctypes:Dataset ;
        dct:title ?name ;
        dct:description ?description ;
        foaf:page ?homepage .
      ?version dct:isVersionOf ?dataset ;
        dcat:distribution ?graph .
    }
    OPTIONAL {
      ?graph void:triples ?statements ;
        void:entities ?entities ;
        void:properties ?properties .
    }
    OPTIONAL {
      ?graph dct:created ?dateGenerated .
    }
    OPTIONAL {
      ?graph void:classPartition [
        void:class rdfs:Class ;
        void:distinctSubjects ?classes
      ] .
    }
  }
} ORDER BY DESC(?statements)`;

const entities_relations_query = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX bl: <http://w3id.org/biolink/vocab/>
PREFIX dctypes: <http://purl.org/dc/dcmitype/>
PREFIX idot: <http://identifiers.org/idot/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX void-ext: <http://ldf.fi/void-ext#>
SELECT DISTINCT ?metadataGraph ?graph ?subjectCount ?subject ?predicate ?objectCount ?object
WHERE {
  GRAPH ?metadataGraph {
    # ?graph a void:Dataset .
    ?graph void:propertyPartition [
      void:property ?predicate ;
      void:classPartition [
        void:class ?subject ;
        void:distinctSubjects ?subjectCount ;
      ];
      void-ext:objectClassPartition [
      void:class ?object ;
      void:distinctObjects ?objectCount ;
      ]
    ] .
    }
  } ORDER BY DESC(?subjectCount)`;