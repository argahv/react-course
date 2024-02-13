import { useEffect, useState } from "react";
import Posts from "../sections/home";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // call for posts
  const fetchPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    setPosts(data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return <Posts posts={posts} />;
};

export default Home;
