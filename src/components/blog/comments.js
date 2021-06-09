import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React, {  useState} from "react";
import {TextField} from '@material-ui/core';
import axios from "axios"
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import Eye from "@material-ui/icons/RemoveRedEye"
import Heart from "@material-ui/icons/Favorite"
import Comment from "@material-ui/icons/ChatBubble"

const useStyles = makeStyles((theme) => ({
    descriptext: {
        fontFamily: 'Lato',
        fontSize: 25,
    },
    title: {
        fontFamily: 'Lato',
        fontSize: 25,
        fontWeight: "bold",
        color: "#2f2c7a",
    },
    button: {
        backgroundColor: "#c4d5c4",
        color: "#2f2c7a",
        height: 50,
        marginTop:20,
        width:100,
        marginLeft:20
    },
    thecolor :{
        color: "#2f2c7a",
        fontSize: 18,
        alignItems: "flex-end"
    },
    darkblue: {
        color: "#2f2c7a",
        fontFamily: 'Playfair Display',
        fontSize: 50,
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10
    },
  }));

export default function Comments({theID}) {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const { firstName, isLoggedIn, photo } = useContext(UserContext);
  const [newComment, setNewComment] = useState("")

  const Loading = () =>{
    if (post.length === 0) {
        axios.get("http://localhost:8000/blog/get/comments", {params : {id:theID}})
        .then((res)=> {
          setPost(res.data);
          console.log(res)
        }
        )
  }
}

const handleChange = (e) => {
    setNewComment(e.target.value);
  };

const photoExist = (pic) =>{
    if (photo !== undefined ){
        return photo
    } else {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
    }
}

const updateData = () =>{
    axios.get("http://localhost:8000/blog/get/comments", {params : {id:theID}})
        .then((res)=> {
          setPost(res.data);
          console.log(res)
        }
    )
}

const AddComment = ()=> {
    const theComment = {
        name: firstName,
        photo: photoExist(photo),
        comment: newComment,
        id: theID
    }
    axios.post("http://localhost:8000/blog/addcomment", theComment)
  .then(response => {
      console.log(response);
  })
  .catch(error => {
      console.log(error)
  })
  updateData();
  updateData();
  setNewComment("")
  updateData();
}


  return (
<div >
<h2 style={{marginLeft: 800}}> {Loading()}</h2>
<pre className={classes.descriptext} 
        style={{textAlign: "justify", marginRight: "400px", marginLeft: "400px",
        borderBottom: "solid", borderBottomColor: "#c4d5c4", borderBottomWidth: "thin",
         content:"\a", whiteSpace:"pre-line"}}>
            <div className={classes.thecolor} style={{marginBottom:20}}>
            <Eye style={{ marginRight:3}}></Eye> 2130
            <Heart style={{marginLeft:50, marginRight:3}}></Heart> 314
            <Comment style={{marginLeft:50,marginRight:4}}></Comment>{post.length}</div></pre>    
            <div style={{textAlign: "justify", marginRight: "400px", marginLeft: "400px", marginBottom:60
        }} className={classes.darkblue}>Comments</div>
{isLoggedIn ? <div> 
    <div  style={{float: "left", marginLeft: "400px", borderRadius: "50%", overflow:"hidden",marginTop:25, marginRight:20}}>
            <img style={{width: 80}} src={photoExist(photo)}></img></div>
<div className={classes.title}  style={{textAlign: "justify", marginRight: "400px", marginLeft: "500px"}}>{firstName}</div>
<div style={{display:"flex",textAlign: "justify", marginLeft: "400px", marginBottom:40}}>
    <TextField multiline rows={2} variant="outlined" onChange={handleChange} value={newComment}
style={{width:1050, fontSize: 30, marginBottom:20, marginTop:10}} placeholder="Write a comment.."></TextField>
<Button onClick={AddComment} className={classes.button}>Post</Button></div></div> :
<div>
<img style={{float: "left", marginLeft: "400px",  paddingRight: 25, width:80}} 
src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"></img>
<div style={{display:"flex",textAlign: "justify", marginLeft: "400px", marginBottom:40}}>
    <TextField multiline rows={3} disabled
style={{width:1050, fontSize: 30, marginBottom:20}} label="Please sign in to leave a comment"></TextField>
<Button disabled className={classes.button}>Post</Button></div></div>}

{post.map((each)=>(
    <div>
        <div  style={{float: "left", marginLeft: "400px", borderRadius: "50%", overflow:"hidden"}}>
            <img style={{width: 80}} src={each.photo}></img></div>
        <div className={classes.title}  style={{textAlign: "justify", marginRight: "400px", marginLeft: "500px"}}>{each.name}</div>
        <pre className={classes.descriptext} 
        style={{textAlign: "justify", marginRight: "400px", marginLeft: "500px"}}>
        <div style={{marginBottom:20}}>{each.comment}</div>
        </pre>    
        <div style={{borderBottom: "solid", borderBottomColor: "#c4d5c4", borderBottomWidth: "thin",
        textAlign: "justify", marginRight: "400px", marginLeft: "400px", marginBottom:40}}></div>
        </div>
))}
</div>
  );
}
