import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem('posts');
        if (savedPosts) {
            return JSON.parse(savedPosts);
        } else {
            return [];
        }
    });

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
                localStorage.setItem('posts', JSON.stringify(response.data));
            })
            .catch(error => console.error(error));
    }, []);

    console.log(posts);

    return (
        <AppContext.Provider value={{ posts }}>
            {children}
        </AppContext.Provider>
    );
};