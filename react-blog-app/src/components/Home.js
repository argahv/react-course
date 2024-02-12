import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Home = () => {
    const { posts } = useContext(AppContext);

    return (
        <div>
            Home
            {posts.map(post => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <h2>{post.title}</h2>
                </Link>
            ))}
        </div>
    );
};

export default Home;