import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React, {  useState, useEffect} from "react";
import { Link, } from "react-router-dom";
import {Box} from '@material-ui/core';
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import AddPost from "./addpost"


const useStyles = makeStyles((theme) => ({
  darkblue: {
      color: "#2f2c7a",
      fontFamily: 'Playfair Display',
      fontSize: 38,
      fontWeight: "bold",
      paddingTop: 10,
      paddingBottom: 15
  },
  title: {
    color: "black",
    fontFamily: 'Playfair Display',
    // fontFamily: 'Inter',
    fontSize: 34
},
blurb: {
    color: "black",
    fontFamily: 'Inter',
    fontSize: 22},
descriptext: {
    fontFamily: 'Inter',
    fontSize: 20,
},
datetext: {
    fontFamily: 'Inter',
    fontSize: 17
},
conttext :{
    color: "#2f2c7a",
    fontFamily: 'Montserrat',
    fontSize: 17,
    textAlign: "left"
},
thecolor :{
    color: "#2f2c7a",
},button: {
    backgroundColor: "#c4d5c4",
    color: "#2f2c7a",
    height: 50,
    width:190,
    fontWeight: "bold",
    marginTop: 30
},
}));

export default function BlogList() {
  const classes = useStyles();
  const [blog, setBlog] = useState([]);
  const { isAdmin } = useContext(UserContext);

//   const Loading = () =>{
//     if (blog.length === 0) {
//         fetch("http://localhost:8000/blog/get")
//         .then((res)=> res.json())
//         .then((res)=> {
//           setBlog(res);
//           console.log(res)
//         }
//         )
//   }
// }
useEffect(() => {
    fetch("http://localhost:8000/blog/get")
        .then((res)=> res.json())
        .then((res)=> {
          setBlog(res);
          console.log(res)
        }
        )
}, []);


  return (
<div style={{paddingTop: "1%"}}>
{/* <h2 style={{marginLeft: 800}}> {Loading()}</h2> */}
<h1 className={classes.title} >THE BLOG </h1>
<div className={classes.blurb}>A blog following the journeys of the spontaneous digital nomad and social influencer, Camille.</div>
{isAdmin ? <AddPost
setBlog={setBlog}
></AddPost> : ""}
{blog.map((post)=>(
    <Box display="flex" alignItems="center" justifyContent="center" 
    height={300} width={1200}  m={1} 
    style={{marginLeft:450, borderBottom: "solid", borderColor: "#c4d5c4", borderBottomWidth: "thin"}}>
        <img style={{marginLeft:30, marginBottom:10, width:190, marginRight:35}} src={post.photo}></img>
        <div display="block" position="absolute" justifyContent="flex-start" >
        <div className={classes.datetext} style={{ float:"left", marginRight: 800, marginLeft: 8}}>{post.date}</div> 
        {/* <Box display="relative"><div className={classes.thecolor} style={{float: "right"}}><Eye></Eye>239</div>
        <div style={{clear:"both"}}></div>
        <div className={classes.thecolor} style={{float: "right"}}><Heart></Heart>49</div>
        <div style={{clear:"both"}}></div>
        <div className={classes.thecolor} style={{float: "right"}}><Comment></Comment>11</div></Box> */}
        <div style={{fontSize:14, float:"left", marginLeft:5}}><div className={classes.darkblue}>{post.title}</div></div>
        <Box width={900} textAlign="left" float="left"><div className={classes.descriptext} style={{ float:"left", marginLeft: 5}}>{post.description}</div></Box>
        <Button style={{float:"left", marginTop:3, size: 5}} button component={Link}
        to={{
               pathname: "/BlogPost",
                state: { postID: post.id },
             }} ><div className={classes.conttext} >Read More ›</div></Button>
        
        </div>
        
    </Box>
))}
</div>
  );
}
