import React, { Component } from 'react';
// TODO: which one to keep?
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
//import ReactDOM from 'react-dom';

import './App.css';
import TriplestoreContext from './TriplestoreContext';
import NavBar from './components/navbar';
import GraphsOverviewComponent from './components/GraphsOverview';
import DeployYasguiComponent from './components/DeployYasgui';
import DeployComunicaComponent from './components/DeployComunica';
import DeploySwaggerApi from './components/DeploySwaggerApi';
import DeployFilebrowser from './components/DeployFilebrowser';
import DescribeComponent from './components/describe';
import Settings from './components/Settings';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
// import blueGrey from '@material-ui/core/colors/blueGrey';
// import orange from '@material-ui/core/colors/orange';

// Change theme color and typography here
const theme = createMuiTheme({
  palette: {
    primary: { light: '#eceff1', main: blue[700], dark: blue[900] },
    // Same color as Angular into-the-graph: blue[700] / #1976d2
    // primary: { light: blue[50], main: blue[600], dark: blue[900] },
    secondary: { light: '#fafafa', main: '#fafafa', dark: grey[600] }
  },
  typography: {
    "fontFamily": "\"Open Sans\", \"Roboto\", \"Arial\"",
    "fontSize": 16,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

// Routing happens here
class App extends Component {
  
  constructor(props) {
    super(props);

    // Update the triplestore config
    this.setTriplestore = (triplestore_config) => {
      this.setState( { triplestore: { 
        sparql_endpoint: triplestore_config.sparql_endpoint,
        graphs_overview: triplestore_config.graphs_overview,
        openapi_url: triplestore_config.openapi_url,
        comunica_url: triplestore_config.comunica_url,
        filebrowser_url: triplestore_config.filebrowser_url,
        search_query: triplestore_config.search_query
       } 
      })
    };

    // Default settings
    this.state = {
      triplestore: { 
        sparql_endpoint: 'http://graphdb.dumontierlab.com/repositories/trek', 
        graphs_overview: 'hcls',
        openapi_url: '',
        comunica_url: 'http://query.linkeddatafragments.org/',
        filebrowser_url: '',
        search_query: "SELECT ?foundUri ?foundLabel WHERE {?foundUri ?p ?foundLabel . VALUES ?p {<http://www.w3.org/2000/01/rdf-schema#label> <https://w3id.org/biolink/vocab/name>} . FILTER(isLiteral(?foundLabel)) FILTER contains(?foundLabel, '$TEXT_TO_SEARCH')} LIMIT 5"
      },
      setTriplestore: this.setTriplestore,
    };
  }

  render() {
    return (
      <TriplestoreContext.Provider value={this.state}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
          <div style={{width: '100%', height: '100%', fontFamily: 'Open Sans'}}>
            <NavBar />
            <Switch>
              <Route exact path='/' component={GraphsOverviewComponent} />
              <Route exact path='/sparql' component={DeployYasguiComponent} />
              <Route exact path='/describe' component={DescribeComponent} />
              <Route exact path='/archives' component={DeployComunicaComponent} />
              <Route exact path='/api' component={DeploySwaggerApi} />
              <Route exact path='/download' component={DeployFilebrowser} />
              <Route exact path='/settings' component={Settings} />
            </Switch>
          </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </TriplestoreContext.Provider>
    );
  }
}
export default (App);