import React from "react";
import { usePostContext } from "../../../context/PostContext";

const PostString = () => {
  const { post } = usePostContext();
  return <div>{JSON.stringify(post, null, 2)}</div>;
};

export default PostString;
