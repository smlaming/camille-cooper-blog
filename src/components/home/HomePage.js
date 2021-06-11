import React, { Fragment, useEffect, useState } from "react";
import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
// import pic from "./background.png"
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import pic from "./background2.png"
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import LocationCityIcon from '@material-ui/icons/LocationCity';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: "relative",
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "100%",
      justifyContent: "center",
      // marginLeft: 70,
      paddingTop:100,

    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
  
    },
    card: {
        display: 'flex',
        marginRight: "120px"
      },
      card2: {
        display: 'flex',
        marginRight: "90px", 
        marginTop: "30px", 
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 160,
      },
      title:{
        fontFamily: "PlayFair Display", 
        fontSize:40, 
        color: "#29335c",
        textAlign: "left",
        marginLeft: 20,
        marginBottom: 10
      },
      title2:{
        fontFamily: "PlayFair Display", 
        fontSize:30, 
        color: "#29335c",
        textAlign: "left",
        marginLeft: 20,
        marginBottom: 10,
        fontWeight: "bold"
      },
      description:{
        fontFamily: "Inter", 
        fontSize:22, 
        textAlign: "left",
        marginLeft: 20
      },

  }));
  
  export default function HomePage() {
    const classes = useStyles();

      return (
          <div >
        <img src={pic} style={{width:"100%"}}></img>
        {/* <Box boxShadow={2} style={{width: 700 ,  marginLeft: "100px"}}>
        <h1 style={{textAlign: "justify",  whiteSpace:"pre-line", fontFamily: "PlayFair Display", fontSize:40, color: "#29335c"}}>Bio</h1>
        <Typography style={{textAlign: "justify", marginRight: "100px", marginLeft: "100px", marginTop:"20px", whiteSpace:"pre-line", fontFamily: "Inter", fontSize:20,lineHeight: 2.5,}}
        > Camille is a recent college graduate from UVA currently traveling from city to city exploring what urban life offers while taking advantage of any opportunity to get back to the great outdoors. </Typography>
</Box> */}
<Grid container spacing={1}>
<Grid item xs={12} md={6}>
      <CardActionArea component="a" href="/About" style={{marginLeft: "80px", 
        marginTop: "30px", 
         }}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography className={classes.title} component="h2" variant="h5">
                Biography
              </Typography>          
              <Typography style={{textAlign: "left", marginLeft: 22, fontFamily: "Inter", marginBottom: 7, marginTop: 7,
            display:"flex", alignItems:"center", flexWrap:"wrap"}} variant="subtitle1" color="textSecondary">
                <WbSunnyIcon style={{marginRight: 5}}></WbSunnyIcon>Virgo Libra Cusp
                <FilterHdrIcon style={{marginLeft: 25, marginRight:5}}></FilterHdrIcon> Nature Lover
                <LocationCityIcon style={{marginLeft: 25, marginRight:5}}> </LocationCityIcon>City Girl
              </Typography>
              <Typography className={classes.description} variant="subtitle1" paragraph>
              Camille is a recent college graduate from UVA currently traveling from city to city exploring what urban life offers while taking advantage of any opportunity to get back to the great outdoors.
              She recently began gaining popularity on social media, since then she has grown a fanbase....
              </Typography>
              <Link variant="subtitle1" href="/About" style={{color: "black", 
              marginLeft:20, marginBottom:20,fontFamily: "inter", fontWeight:"bold", float:"left"}}>
              —  FIND OUT MORE
              </Link>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
      
    </Grid>
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="/Blog">
        <Card className={classes.card2}>
          <div className={classes.cardDetails}>
              
      
            <CardContent>
              <Typography className={classes.title} component="h2" variant="h5">
                Latest Blog Post
              </Typography>
            
             <img style={{width:200, float:"left", marginLeft:20, marginBottom: 20 , marginRight: 30, marginTop: 10}} src="https://i.pinimg.com/564x/9e/e0/5a/9ee05aa459a61e1c5fbdf4626207f4a5.jpg"/>
             <Typography style={{textAlign: "left", marginLeft: 20, fontFamily: "Inter"}} variant="subtitle1" color="textSecondary">
                June 8th, 2021
              </Typography>
              <Typography className={classes.title2} component="h2" variant="h5">
                Collection Dropping Soon!
              </Typography>
              <Typography className={classes.description} variant="subtitle1" paragraph>
              Check out the latest collection dropping this Friday. There's so many different styles at affordable prices. I know you're going to love the bucket hats,
              I can't wait to share it with you all!
              </Typography>
              <Link variant="subtitle1" href="/Blog"  style={{color: "black", 
              marginLeft:20, marginBottom:20,fontFamily: "inter", fontWeight:"bold", float:"left"}}>
              —  GO TO BLOG
              </Link>
            </CardContent>
          </div>
          
        </Card>
      </CardActionArea>
      
    </Grid>
    </Grid>
          </div>
      )
  }

