import React, { useState, useEffect } from 'react';
import DiscussionBoard from 'react-discussion-board';
import axios from 'axios';
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import firebase from "../firebase/firebase";
import 'react-discussion-board/dist/index.css';

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
                        date: curDate.toString().substr(0,10) + " at" + curDate.toString().substr(15,9),
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
        <div>
            <DiscussionBoard posts={myPosts} onSubmit={submitPost} firstName={firstName === undefined ? "" : "by " + firstName} />
        </div>
    )
}

    export default Forum;

