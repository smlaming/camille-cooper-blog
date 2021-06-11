import React, { useState, useEffect } from 'react';
import DiscussionBoard from 'react-discussion-board';
import axios from 'axios';
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import firebase from "../firebase/firebase";
import 'react-discussion-board/dist/index.css';
import Box from "@material-ui/core/Box"

const Forum = () => {

    const { user, firstName } = useContext(UserContext);
    const [myPosts, setMyPosts] = useState([]);

    const storage = firebase.storage();

    useEffect(() => {
        console.log(firstName);
        axios.get("http://localhost:8000/all_posts").then(function(data) {
            setMyPosts(data.data);
            console.log(data.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const submitPost = (text) => {

        const curDate = new Date();
        var profURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png";
        console.log(user);
        if (user) {
            storage.ref('images').child(user.uid).getDownloadURL()
                .then(fireBaseUrl => {
                    console.log(fireBaseUrl);
                    profURL = fireBaseUrl;
                })
                .then(() => {
                    console.log("line 39");
                    axios.post("http://localhost:8000/add_post", {
                        content: text,
                        date: curDate.toLocaleDateString() + " @ " + curDate.toLocaleTimeString(('en-US'), { hour: '2-digit', minute: '2-digit' }),
                        name: firstName === undefined ? "" : "by " + firstName,
                        profileImage: profURL
                    })
                    .catch(err => {
                        console.log(err);
                    });
                })
        }

    }

    return (
      <div >
        <div style={{marginTop:"190px"}}>
        <h1 style={{fontFamily: "Playfair Display", fontSize: 35}}>Welcome to the Forum!</h1>
        <div style={{fontFamily: "Inter", fontSize:20}}>Feel free to chat with the community ☺ </div></div>
        <div style={{marginRight:"600px", marginLeft:"600px",  marginTop:"40px"}}>
          <Box boxShadow={2}>
            <DiscussionBoard posts={myPosts} onSubmit={submitPost} firstName={firstName === undefined ? "" : "by " + firstName} />
            </Box>
        </div>
        </div>
    )
}

    export default Forum;

