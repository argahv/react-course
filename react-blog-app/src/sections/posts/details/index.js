import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../../../context/PostContext";

const PostDetailSection = () => {
  const { id } = useParams();
  const { setPost, post } = usePostContext();

  const fetchPost = useCallback(async () => {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const post = await res.json();
    setPost(post);
  }, [id, setPost]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);
  console.log("post", post);
  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post?.body}</p>
      </div>
    </>
  );
};

export default PostDetailSection;
