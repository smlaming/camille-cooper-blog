import React, { useState, useEffect } from 'react';
import DiscussionBoard from 'react-discussion-board';
import axios from 'axios';
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import 'react-discussion-board/dist/index.css';

const Forum = () => {

    const { firstName, lastName } = useContext(UserContext);

    const [myPosts, setMyPosts] = useState([]);
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
        axios.post("http://localhost:8000/add_post", {
            content: text,
            date: curDate.toString().substr(0,10) + " at" + curDate.toString().substr(15,9),
            name: "",
            profileImage: "https://www.pngkit.com/png/full/796-7963534_individuals-person-icon-circle-png.png"
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <h1 style={{marginBottom:10}}>Forum</h1>
            <DiscussionBoard posts={myPosts} onSubmit={submitPost} />
        </div>
    )
}

    export default Forum;

