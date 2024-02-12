import React from "react";
import { useParams } from "react-router-dom";
import PostDetailSection from "../sections/posts/details";

const PostDetail = () => {
  const { id } = useParams();

  // const [post, setPost] = React.useState(null);
  // const [state2,setstate2] = React.useState(null);

  //call for post

  //call of state2

  console.log("params", id);
  return (
    <>
      <h1>{id}</h1>
      <PostDetailSection />
      {/* <PostDetailSection state2={state2} /> */}
    </>
  );
};

export default PostDetail;
