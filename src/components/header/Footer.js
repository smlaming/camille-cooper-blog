import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Instagram, Twitter } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Route } from "react-router-dom";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    bottomPush: {
      position: "absolute",
      bottom: 0,
    //   textAlign: "center",
      paddingBottom: 40,
      paddingTop: 25,
    //   height: 40,
      background: "#c4d5c4",
      width: "100%",
      left:0,
      right: 0,
      color: "#29335c",
    },
  }));

  export default function Footer (){
    const classes = useStyles();

      return(
          <div>
              <div
          className={classes.bottomPush}
          style={{ textAlign:"left", height:"max-content", width: "100%"}}
        >
            <Typography style={{marginLeft:110, marginRight: 50, marginTop: 14, display: "inline", float:"left", width: "28%" , fontFamily: "Inter" }}>
            <span style={{ fontFamily: "Playfair Display", fontSize:30}}>Camille's Corner</span><br />
            <span>Powered by Team 5</span><br />
           <span >© 2021 All Rights Reserved </span> <br/>
          </Typography>
          <Typography style={{ marginLeft: 90, marginTop: 45, display: "inline", float:"left", width: "28%" , fontFamily: "Inter" , fontSize:20 }}>
           <span style={{marginRight:15}} ><Link style={{color: "#29335c"}}  >POLICIES</Link></span> •  
           <span style={{marginRight:15, marginLeft:15}} ><Link style={{color: "#29335c"}} href="/About" >ABOUT</Link></span>•
           <span style={{marginRight:15, marginLeft:15}} ><Link style={{color: "#29335c"}}  >CONTACT</Link></span> •  
           <span style={{marginRight:15, marginLeft:15}} ><Link style={{color: "#29335c"}}  >FAQ</Link></span>
           
          </Typography>
          <Typography style={{  marginTop: 28, display: "inline", float:"right", width: "27%"  , fontFamily: "Inter"  }}>
          <IconButton
            href="https://www.tumblr.com/"
            target="_blank"
            style={{ marginLeft: 10,color: "#29335c", float:"right", marginRight: 120, fontFamily: "Helevetica", fontWeight:"bold", fontSize: 29 }}>
            t
        </IconButton>
        <IconButton
            href="https://www.instagram.com/"
            target="_blank"
            style={{marginLeft: 10,color: "#29335c" , float:"right", marginTop:9}}>
            <Instagram />
          </IconButton>
          <IconButton
            href="https://www.twitter.com/camilles_corner"
            target="_blank"
            style={{ marginLeft: 10,color: "#29335c" , float:"right", marginTop:9}}>
            <Twitter />
          </IconButton>
          </Typography>
        </div>
          </div>
      )
  }