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
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import pic from "./images/camille5.jpeg"
import pic2 from "./images/camille4.jpeg"
import pic3 from "./images/camille6.jpeg"
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
        marginBottom: 10,
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
        lineHeight: 2,
      },
      quote:{
        color: "#29335C",
        fontFamily: 'Lato',
        fontSize: 35,
        lineHeight: 2.5,
      }
  }));
  
  export default function HomePage() {
    const classes = useStyles();

      return (
          <div >
            <h1 style={{fontFamily: "Playfair Display", fontSize: 35, marginTop:190, 
          }}>━━━━━━━━━━━━━━━━ ABOUT ME ━━━━━━━━━━━━━━━━</h1>
    
        <img src={pic} style={{width:"25%",float: "left", marginLeft: "300px", marginTop:"110px", border: "solid", borderColor:"#c4d5c4", borderWidth:"thick"}}></img>
        <div  justifyContent="flex-start" >
        <Typography className={classes.title} component="h2" variant="h5" style={{marginTop:"60px", marginLeft:"1660px"}}>
                My Life
              </Typography>     
        <div className={classes.description} 
        style={{textAlign: "justify", marginRight: "350px", marginLeft: "900px", marginTop:"20px", whiteSpace:"pre-line", }}>
           <p> Camille is a recent college graduate from UVA currently traveling from city to city exploring what urban life offers while taking advantage of any opportunity to get back to the
              great outdoors. </p>
              Educated as a chemical engineer, Camille threw that into the wind to pursue software development and adventure. 
              Exclusively working for new start-ups as a freelancer, she has been able to have extended stays in NYC, Denver, SF, Seattle, and Barcelona. 
              
              <p>She hopes to go next to Austin or London, but, in truth, with her, you never know where she'll be next. Known to be spontaneous and indecisive, 
              Camille chose this life because it allows her to explore every option that life provides. </p>
              She loves being a digital nomad because each new city brings new stories and 
              opportunities. She never realized that documenting this way of life would garner such a large following for which she is grateful every day. Her goal is to promote 
              adventures and positivity. One day she hopes to go to every national park.</div>    
        {/* <div className={classes.quote} 
        style={{textAlign: "justify", marginRight: "400px", marginLeft: "400px", marginTop:"50px",border: "solid", borderColor: "#c4d5c4"}}
        ><div style={{marginLeft:20, marginRight:20}}>"{post.data.quote}"</div></div>   */}
           
        </div>
        
        <Typography className={classes.title} component="h2" variant="h5" style={{marginTop:"60px", marginLeft:"300px"}}>
                History of Camille's Corner
              </Typography>  

              <Grid container spacing={3}>
        <Grid item xs={7} className={classes.description} style={{paddingLeft:"320px"}}>
          
          <p> Camille's Corner started back in the summer of 2019 when Camille first moved to NYC for an internship. 
              Sitting behind a screen all day in the middle of a giant concrete jungle made her long for the proper outdoors. 
              </p>
              Hopelessly stuck between being drawn to the culture of cities and the allure of Mother Nature, Camille decided to bridge the two worlds through adventure and discovery, 
              adopting a digital nomad life that took her across the country. 
              
              <p>The name of the blog comes from the corner in her room 
              where Camille hung up tapestries that depicted beautiful landscapes juxtaposed against her Soho apartment.   </p>
          
        </Grid>
        <Grid item xs={5}>
        <img src={pic2} style={{width:"40%",float: "right", marginRight: "350px", marginTop:"10px", border: "solid", borderColor:"#c4d5c4", borderWidth:"thick"}}></img>
        </Grid>
        </Grid>

        <div className={classes.quote} 
        style={{textAlign: "justify", marginRight: "400px", marginLeft: "340px",backgroundColor: "#29335C", border:"solid", borderColor:"#29335C", marginTop:40,boxShadow:10, borderWidth:"thin",}}
        > <div style={{marginLeft:35, marginTop:30}}>
          <Card style={{backgroundColor: "#c4d5c4"}}>
            <div style={{marginLeft:30, marginRight:30, color:"#29335C"}}>"The goal of Camille's Corner is to show others that in every city, 
          nature offers an escape, and no one has to choose only one world."</div></Card></div> </div>

        <h1 style={{fontFamily: "Playfair Display", fontSize: 35, marginTop:100, 
          }}>━━━━━━━━━━━━━━━━ FUN FACTS ━━━━━━━━━━━━━━━━</h1>
              
              <Grid container spacing={3} style={{paddingLeft:"300px", paddingRight:"300px"}}>
        <Grid item xs={12}>
          <div className={classes.description} style={{textAlign:"center"}}>
            Camille is a ... <span style={{fontFamily: "Playfair Display", fontSize:30}}>Virgo Libra Cusp</span>
          </div>
        </Grid>
  
        <Grid item xs>
          <div className={classes.paper}>
          <Typography className={classes.title} component="h2" variant="h5" style={{textAlign:"center", paddingLeft:"90px"}}>
                Best parts of...
              </Typography>         
              <Typography className={classes.description} variant="subtitle1" paragraph style={{textAlign:"left", marginLeft:180, marginTop:20}}>
              
              <span style={{fontWeight: "bold"}}>NATURE:</span>  <br></br>
              <div>trees, mountains, and rivers</div>
              <br></br>
              <span style={{fontWeight: "bold"}}>CITIES:</span>  <br></br>
              music, rooftops 
              </Typography>   
          </div>
        </Grid>
        <Grid item xs>
          <Typography className={classes.title} component="h2" variant="h5" style={{textAlign:"center"}}>
          <img src={pic3} style={{width:"70%",border: "solid", borderColor:"#c4d5c4", borderWidth:"thick"}}></img>
              </Typography>         
        </Grid>
        <Grid item xs>
          <div className={classes.paper}>
          <Typography className={classes.title} component="h2" variant="h5" style={{textAlign:"center", paddingRight:"100px"}}>
                Hobbies
              </Typography>       
              <Typography className={classes.description} variant="subtitle1" paragraph style={{textAlign:"center", paddingRight:"100px"}}>
              
              HIKING <br></br>
              CLIMBING <br></br>
              YOGA <br></br>
              SNOWBOARDING <br></br>
              MUSIC
              </Typography>   
          </div>
        </Grid>
      </Grid>
      
          </div>
      )
  }

