import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const PostDetail = () => {
    const { postId } = useParams();
    const { posts } = useContext(AppContext);
        console.log(posts);
    const post = posts.find(post => post.id === parseInt(postId));

    return post ? (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default PostDetail;