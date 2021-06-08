import React, { useState, useContext } from 'react';
import DiscussionBoard from 'react-discussion-board';
import 'react-discussion-board/dist/index.css';

const Forum = () => {

    var allPosts = [
        {
            profileImage: 'https://www.pngkit.com/png/full/796-7963534_individuals-person-icon-circle-png.png',
            name: "David",
            content: 'This is a great website!',
            date: new Date('07 Jun 2020 15:00:00 EST')
        }
    ]

    const [posts, setPosts] = useState(allPosts)

    const submitPost = (text) => {
        const curDate = new Date()
        setPosts([
            ...posts,
            {
                profileImage:
                'https://www.pngkit.com/png/full/796-7963534_individuals-person-icon-circle-png.png',
                name: "",
                content: text,
                date: curDate
            }
        ])
    }

    return (
        <div>
            <DiscussionBoard posts={posts} onSubmit={submitPost} />
        </div>
    )
    }

    export default Forum;

