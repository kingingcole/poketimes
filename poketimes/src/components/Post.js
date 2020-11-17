import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'

const Post = (props) => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        let id = props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            setPost(res.data)
        })
    }, [])

    const postToRender = post ? (
        <div className="post">
            <h4 className="center">{post.title}</h4>
            <p>{post.body}</p>
        </div>
    ) : (
        <div className="center">Loading post...</div>
    )

    return (
        <div className="container">
            { postToRender }
        </div>
    ) 
}

export default Post