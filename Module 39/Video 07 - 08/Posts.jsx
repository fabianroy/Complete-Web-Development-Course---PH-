import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post.jsx";

export default function posts() {

    const [post, setPost] =useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])

    return (
        <div className="">
            <h3>Posts: {post.length}</h3>
            {
                post.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}
