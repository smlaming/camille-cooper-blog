import React, { Fragment, useEffect, useState } from "react";
import { Button, Box, Divider } from "@material-ui/core";
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
import PublicIcon from '@material-ui/icons/Public';

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

    {/* <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="/About" style={{marginLeft: "80px", 
        marginTop: "30px", 
         }}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography className={classes.title} component="h2" variant="h5">
                History
              </Typography>          
              <Typography style={{textAlign: "left", marginLeft: 22, fontFamily: "Inter", marginBottom: 7, marginTop: 7,
            display:"flex", alignItems:"center", flexWrap:"wrap"}} variant="subtitle1" color="textSecondary">
                <PublicIcon style={{marginRight: 5}}></PublicIcon>best of both worlds
                <FilterHdrIcon style={{marginLeft: 25, marginRight:5}}></FilterHdrIcon> Nature Lover
                <LocationCityIcon style={{marginLeft: 25, marginRight:5}}> </LocationCityIcon>City Girl
              </Typography>
              <Typography className={classes.description} variant="subtitle1" paragraph>
              Camille's Corner started back in the summer of 2019 when Camille first moved to NYC for an internship. Sitting behind a screen all day in the middle of a giant concrete jungle made her long for the proper outdoors. Hopelessly stuck between being drawn to the culture of cities and the allure of Mother Nature....
              </Typography>
              <Link variant="subtitle1" href="/About" style={{color: "black", 
              marginLeft:20, marginBottom:20,fontFamily: "inter", fontWeight:"bold", float:"left"}}>
              —  FIND OUT MORE
              </Link>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
      
    </Grid> */}

    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="/Blog" style={{marginLeft: "80px", 
        marginTop: "30px", 
         }}>
        <Card className={classes.card2}>
          <div className={classes.cardDetails}>
              
      
            <CardContent>
              <Typography className={classes.title} component="h2" variant="h5">
                Latest Blog Post
              </Typography>
            
             <img style={{width:200, float:"left", marginLeft:20, marginBottom: 20 , marginRight: 30, marginTop: 10}} src="https://i.pinimg.com/564x/9e/e0/5a/9ee05aa459a61e1c5fbdf4626207f4a5.jpg"/>
             <Typography style={{textAlign: "left", marginLeft: 20, fontFamily: "Inter"}} variant="subtitle1" color="textSecondary">
                June 10th, 2021
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

    {/* <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="/About" style={{marginLeft: "80px", 
        marginTop: "30px", 
         }}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography className={classes.title} component="h2" variant="h5">
                Store
              </Typography>          
              <Typography style={{textAlign: "left", marginLeft: 22, fontFamily: "Inter", marginBottom: 7, marginTop: 7,
            display:"flex", alignItems:"center", flexWrap:"wrap"}} variant="subtitle1" color="textSecondary">
              </Typography>
              <Typography className={classes.description} variant="subtitle1" paragraph>
              Tori Gerbig, chief executive officer and founder of Pink Lily, praised the “power of Camille's influence, reach and engagement” and said she was certain “her community and the over two million women who shop Pink Lily” will be attracted to the collection.
               My goal with this collaboration was to create something for everyone at an affordable price point.                   
              </Typography>
              <Link variant="subtitle1" href="/Store" style={{color: "black", 
              marginLeft:20, marginBottom:20,fontFamily: "inter", fontWeight:"bold", float:"left"}}>
              —  GO TO STORE
              </Link>
            </CardContent>
          </div>
        </Card>
      </CardActionArea> */}
      
    {/* </Grid> */}
    <Grid item xs={12}  style={{marginLeft: "80px", marginRight:"10px", marginTop:"20px",marginBottom:"20px"}}>
          <Paper className={classes.paper}>
          <Typography className={classes.title} component="h2" variant="h5" style={{textAlign: "center"}}>
               <div style={{paddingTop:20, paddingBottom:25}}>New Arrivals</div> 
              </Typography>
              

              <Grid container spacing={3}>
        <Grid item xs>
        <Typography className={classes.title2} component="h2" variant="h5" style={{textAlign: "center"}}>
                Floral Bucket Hat
              </Typography>
              <img style={{width:"240px"}} src="https://cdn.shopify.com/s/files/1/2576/1948/products/2015_Bucket_Hat_Floral-01_1024x1024.png?v=1534389802"></img>
              <Typography className={classes.description} variant="subtitle1" paragraph style={{textAlign: "center"}}>
              Price: 24.99
              </Typography>
        </Grid>
        <Grid item xs>

          <Typography className={classes.title2} component="h2" variant="h5" style={{textAlign: "center"}}>
                Lotion Sunscreen
              </Typography>
              <img style={{width:"240px"}} src="https://www.aveeno.com/sites/aveeno_us_2/files/product-images/3ave_381371194605_ph_sunscreen_spf60_body_lotion_3oz_00000.png"></img>
              <Typography className={classes.description} variant="subtitle1" paragraph style={{textAlign: "center"}}>
              Price: 7.99
              </Typography>
        </Grid>
        <Grid item xs>
        <Typography className={classes.title2} component="h2" variant="h5" style={{textAlign: "center"}}>
                Red Towel
              </Typography>
              <img style={{width:"240px"}} src="https://d19kq6msjbswuw.cloudfront.net/api/file/NiumstaTDCzc57JQkoRg/convert?w=1000"></img>
              <Typography className={classes.description} variant="subtitle1" paragraph style={{textAlign: "center"}}>
              Price: 19.99
              </Typography>
        </Grid>
      </Grid>
      <div style={{paddingBottom:25,}}>
              <Link variant="subtitle1" href="/Store" style={{color: "black", 
             paddingTop:20,  fontFamily: "inter", fontWeight:"bold"}}>
              —  GO TO STORE
              </Link></div>
          </Paper>
        </Grid>

    </Grid>
          </div>
      )
  }

