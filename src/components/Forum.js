import React, { useState, useEffect } from 'react';
import DiscussionBoard from 'react-discussion-board';
import axios from 'axios';
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import 'react-discussion-board/dist/index.css';

const Forum = () => {

    const { firstName, photo } = useContext(UserContext);

    const photoExist = (pic) =>{
        if (photo !== undefined ){
            return photo
        } else {
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
        }
    }

    const [myPosts, setMyPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/all_posts").then(function(data) {
            setMyPosts(data.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const submitPost = (text) => {
        const curDate = new Date();
        axios.post("http://localhost:8000/add_post", {
            content: text,
            date: curDate.toString().substr(0,10) + " at" + curDate.toString().substr(15,9),
            name: firstName === undefined ? "" : "by " + firstName,
            profileImage: photoExist(photo)
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <DiscussionBoard posts={myPosts} onSubmit={submitPost} firstName={firstName === undefined ? "" : "by " + firstName} />
        </div>
    )
}

    export default Forum;

