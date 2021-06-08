import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React, { Fragment } from "react";
import { Route, Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  toolbar: {
      backgroundColor: "#c4d5c4",
      color: "#29335c"
  },
  toolbarTitle: {
    flex: 4,
    padding: 17,
    marginTop: 11,
    fontFamily: 'Lobster Two',
    fontSize: 48,
    fontWeight: "medium"
  },
}));

export default function Header() {
  const classes = useStyles();

  const sections = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/About' },
    { title: 'Blog', url: '/Blog' },
    { title: 'Forum', url: '/Forum' },
    { title: 'Store', url: '/Store' },
  ];

  
  

  return (
    <React.Fragment>
        <div style={{position:"fixed", width:"100%", top:0}}>
      <Toolbar className={classes.toolbar}>
      <Button style={{marginLeft:80}} size="small">  
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Camille's Corner
        </Typography>
        <Button 
            className={classes.toolbar}
            button component={Link}
            to="/Account" 
            style={{marginRight:10}} 
            size="small">
          Account
        </Button>
        <IconButton 
        className={classes.toolbar}
        button component={Link}
        to="/ShoppingCart" 
        style={{marginRight:30}}>
          <ShoppingCartIcon />
        </IconButton> 
      </Toolbar>
      <Route 
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs 
              TabIndicatorProps={{style: {background:'#29335c'}}}
              className={classes.toolbar}
              centered
              value={location.pathname}>
              {sections.map((section) => (
          <Tab 
            label={section.title}
            value={section.url}
            button component={Link}
            to={section.url}
          >
          </Tab>
        ))}
              </Tabs>
            </Fragment>
          )}
        />
        <Divider></Divider>
        </div>
    </React.Fragment>
  );
}
