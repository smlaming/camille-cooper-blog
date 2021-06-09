import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Instagram, Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: "#c4d5c4",
    color: "#29335c",

  },
  tumblr: {
    color: "#29335c",
    fontFamily: "Helevetica",
    fontWeight: "bold",
    fontSize: 28
  },
  toolbarTitle: {
    flex: 4,
    padding: 17,
    marginTop: 11,
    // fontFamily: 'Lobster Two',
    fontFamily: "Playfair Display",
    fontSize: 48,
    fontWeight: "bold"
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
      <div style={{ position: "fixed", width: "100%", top: 0, zIndex: 1 }}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.toolbar}
            href="https://www.instagram.com/"
            target="_blank"
            style={{ marginLeft: 30 }}>
            <Instagram />
          </IconButton>
          <IconButton
            className={classes.toolbar}
            href="https://www.twitter.com/camilles_corner"
            target="_blank"
            style={{ marginLeft: 10 }}>
            <Twitter />
          </IconButton>
          <IconButton
            className={classes.tumblr}
            href="https://www.tumblr.com/"
            target="_blank"
            style={{ marginLeft: 10 }}>
            t
        </IconButton>
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
            style={{ marginRight: 10 }}
            size="small">
            Account
        </Button>
          <IconButton
            className={classes.toolbar}
            button component={Link}
            to="/ShoppingCart"
            style={{ marginRight: 30 }}>
            <ShoppingCartIcon />
          </IconButton>
          {/* <Button 
            className={classes.toolbar}
            button component={Link}
            to="/ShoppingCart" 
            style={{marginRight:10}} 
            size="small">
          Cart
        </Button> */}
        </Toolbar>
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs
                TabIndicatorProps={{ style: { background: '#29335c' } }}
                className={classes.toolbar}
                centered
                value={location.pathname}>
                {sections.map((section) => (
                  <Tab
                    fontWeight="bold"
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
