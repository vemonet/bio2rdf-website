import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Container, Box, Button, Chip, Tooltip, Grid, Paper, CircularProgress, Card, CardContent, CardHeader, Collapse, CardActions, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import { IconButton, InputBase } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CodeIcon from '@material-ui/icons/Code';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import SendIcon from '@material-ui/icons/Send';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import GavelIcon from '@material-ui/icons/Gavel';
import OpenAPIIcon from '@material-ui/icons/Adjust';
import RmlIcon from '@material-ui/icons/AllInclusive';
import R2rmlIcon from '@material-ui/icons/Storage';
import NanopubIcon from '@material-ui/icons/Chat';
import DatasetIcon from '@material-ui/icons/Archive';
import CsvwIcon from '@material-ui/icons/List';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExploreIcon from '@material-ui/icons/Explore';
import BookIcon from '@material-ui/icons/Book';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
// @ts-ignore
import iconImage from '../../assets/icon.png';

// import { FormControl, TextField, Input, InputLabel, FormHelperText, Select } from '@material-ui/core';
// import GetAppIcon from '@material-ui/icons/GetApp';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import MenuItem from '@material-ui/core/MenuItem';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
// import { Graph } from "perfect-graph";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
}))


export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  
  const [state, setState] = React.useState({
    show_info_card: false,
  });
  const stateRef = React.useRef(state);

  // Avoid conflict when async calls
  // Can be done with another lib (cf. Turgay)
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);

  return(
    // <Card style={{textAlign: 'left' }}>
    <Card>
        <CardHeader
          action={
            <IconButton style={{fontSize: '16px'}}
              onClick={() => { updateState({ show_info_card: !state.show_info_card}) }}
              name='show_info_card'
              aria-expanded={state.show_info_card}
              aria-label="show about"
            >
              About&nbsp;
              {!state.show_info_card &&
                <ExpandMoreIcon />
              }
              {state.show_info_card &&
                <ExpandLessIcon />
              }
            </IconButton>
          }
          title="Bio2RDF"
          subheader={"Linked Data for the Life Sciences"}
        />


        <Collapse in={state.show_info_card} timeout="auto" unmountOnExit>
          <CardContent style={{ textAlign: 'left' }}>

            {/* <Paper elevation={4} className={classes.paperPadding}> */}
            <Typography variant="body1">
              Bio2RDF is an open-source project that uses Semantic Web technologies to build and provide the largest network of Linked Data for the Life Sciences. Bio2RDF defines a set of simple conventions to create RDF(S) compatible Linked Data from a diverse set of heterogeneously formatted sources obtained from multiple data providers. 
            </Typography>

            {/* <Typography variant="body1">
              <a href='https://github.com/micheldumontier/torres-api-platform/' className={classes.link} target='_blank' rel="noopener noreferrer">TORRES API platform</a> to store HCLS descriptive metadata for your dataset
            </Typography> */}

            {/* <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MenuBookIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  A web-based UI to browse any SPARQL endpoints content easily
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DeviceHubIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  Native support for graphs (nquads)
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ExploreIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText> 
                  Work in progress: visualize and browse concepts using <a href='https://perfectgraph-5c619.web.app' target='_blank' rel="noopener noreferrer"><code>perfect-graph</code></a>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ExploreIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText> 
                  Work in progress: insights about the content of the triplestore and its different graphs, using precomputed HCLS descriptives statistics
                </ListItemText>
              </ListItem>
            </List> */}

          </CardContent>
        </Collapse>
      </Card>
  )
}