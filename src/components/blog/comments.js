import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React, {  useState, useEffect} from "react";
import {TextField} from '@material-ui/core';
import axios from "axios"
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import Eye from "@material-ui/icons/RemoveRedEye"
import Heart from "@material-ui/icons/Favorite"
import Comment from "@material-ui/icons/Comment"
import firebase from "../../firebase/firebase";
import HeartOpen from "@material-ui/icons/FavoriteBorder"
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
    descriptext: {
        fontFamily: 'Inter',
        fontSize: 22,
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
    datetext: {
        fontFamily: 'Inter',
        fontSize: 15,
        marginTop: 10,
        color: "grey"
    },
  }));

export default function Comments({theID}) {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const { firstName, isLoggedIn, photo , user} = useContext(UserContext);
  const [newComment, setNewComment] = useState("")
  const allInputs = { imgUrl: '' }
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)
  const storage = firebase.storage()
  const [like, setLike] = useState(false);
  const [numLikes, setNumLikes] = useState(Math.floor(Math.random() * 500))
  const [views, setViews] = useState(Math.floor(Math.random() * 3000))
//   const Loading = () =>{
//     if (post.length === 0) {
//         axios.get("http://localhost:8000/blog/get/comments", {params : {id:theID}})
//         .then((res)=> {
//           setPost(res.data);
//           console.log(res)
//         }
//         )
//   }
// }

useEffect(() => {
    axios.get("http://localhost:8000/blog/get/comments", {params : {id:theID}})
        .then((res)=> {
          setPost(res.data);
          console.log(res)
        }
        )
}, []);

useEffect(() => {
    if (user) {
        storage.ref('images').child(user.uid).getDownloadURL()
            .then(fireBaseUrl => {
                setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                console.log(fireBaseUrl);
            })
        console.log("here")
    }
}, []);

const handleChange = (e) => {
    setNewComment(e.target.value);
  };

const photoExist = (pic) =>{
    if (imageAsUrl.imgUrl !== ""){
        return imageAsUrl.imgUrl
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
    const curDate = new Date();

    const theComment = {
        name: firstName,
        photo: photoExist(photo),
        comment: newComment,
        id: theID,
        date: curDate.toLocaleDateString() + " @ " + curDate.toLocaleTimeString(('en-US'), { hour: '2-digit', minute: '2-digit' })
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

const toggleLike = ()=>{
    setLike(!like)
}


  return (
<div >
{/* <h2 style={{marginLeft: 800}}> {Loading()}</h2> */}
<pre className={classes.descriptext} 
        style={{textAlign: "justify", marginRight: "400px", marginLeft: "400px",
        borderBottom: "solid", borderBottomColor: "#c4d5c4", borderBottomWidth: "thin", whiteSpace:"pre-line"}}>
            <div className={classes.thecolor} style={{marginBottom:20, display:"flex", alignItems:"center", flexWrap:"wrap"}}>
            <Eye style={{ marginRight:10}}></Eye> {views}
            <Comment style={{marginLeft:60,marginRight:10}}></Comment>{post.length}
            {like ? 
            <span   style={{marginLeft:50, marginRight:3}}><IconButton className={classes.thecolor}  onClick={toggleLike}
            ><Heart ></Heart></IconButton> {numLikes} </span>
            : 
            <span style={{marginLeft:50, marginRight:3}}><IconButton onClick={toggleLike} className={classes.thecolor} 
            ><HeartOpen></HeartOpen></IconButton> {numLikes-1}</span>}</div></pre>   
             
            <div style={{textAlign: "justify", marginRight: "400px", marginLeft: "400px", marginBottom:60
        }} className={classes.darkblue}>Comments  ({post.length})</div>
{isLoggedIn ? <div> 
    <div  style={{float: "left", marginLeft: "400px", borderRadius: "50%", overflow:"hidden",marginTop:25, marginRight:20}}>
            {/* <img style={{width: 80}} src={photoExist(photo)}></img> */}
            {imageAsUrl.imgUrl !== "" ? <img  style={{width: 80}} src={imageAsUrl.imgUrl} alt="image tag" /> : 
            <img className={classes.img} style={{width: 80}}  src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"} alt="image tag" />}</div>
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
        <div style={{textAlign: "justify", marginRight: "400px", marginLeft: "500px"}}><span className={classes.title} style={{marginRight:10}}>{each.name}</span>
        <span className={classes.datetext}>{each.date}</span></div>
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
