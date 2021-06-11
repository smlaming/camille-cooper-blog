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
import pic from "./home/background2.png"
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
<Grid item xs={12} md={12}>
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
              Camille is a recent college graduate from UVA currently traveling from city to city exploring what urban life offers while taking advantage of any opportunity to get back to the
              great outdoors. Educated as a chemical engineer, Camille threw that into the wind to pursue software development and adventure. 
              Exclusively working for new start-ups as a freelancer, she has been able to have extended stays in NYC, Denver, SF, Seattle, and Barcelona. S
              he hopes to go next to Austin or London, but, in truth, with her, you never know where she'll be next. Known to be spontaneous and indecisive, 
              Camille chose this life because it allows her to explore every option that life provides. She loves being a digital nomad because each new city brings new stories and 
              opportunities. She never realized that documenting this way of life would garner such a large following for which she is grateful every day. Her goal is to promote 
              adventures and positivity. One day she hopes to go to every national park.
              <p>Her hobbies include hiking, climbing, yoga, snowboarding, and anything with music.</p>
              <p>She is a Virgo Libra cusp.</p>
              <p>Best parts of nature: trees, mountains, and rivers</p>
              <p>Best parts of cities: music and rooftops</p>
              </Typography>
              
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
      

      <Grid item xs={12} md={12}>
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
              Camille's Corner started back in the summer of 2019 when Camille first moved to NYC for an internship. 
              Sitting behind a screen all day in the middle of a giant concrete jungle made her long for the proper outdoors. 
              Hopelessly stuck between being drawn to the culture of cities and the allure of Mother Nature, Camille decided to bridge the two worlds through adventure and discovery, 
              adopting a digital nomad life that took her across the country. The name of the blog comes from the corner in her room 
              where Camille hung up tapestries that depicted beautiful landscapes juxtaposed against her Soho apartment. 
              <p>The goal of Camille's Corner is to show others that in every city, nature offers an escape, and no one has to choose only one world.</p>
              </Typography>
              
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
      
    </Grid>


    </Grid>

    </Grid>
          </div>
      )
  }

