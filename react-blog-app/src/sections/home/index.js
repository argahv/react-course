import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";

const Posts = () => {
  return (
    <div>
      <Link to={"/posts"}>Click Here!</Link>
      {[
        {
          title: "post1",
          id: 1,
        },
        {
          title: "post2",
          id: 2,
        },
      ].map((post) => (
        <Link to={`/posts/${post.id}`}>
          <h2 key={post.title}>{post.title}</h2>
        </Link>
      ))}
      <Button
        onClick={() => {
          console.log("button clicked");
        }}
        name="button-test"
        test="test"
        style={{
          border: "1px solid blue",
          background: "none",
          color: "black",
        }}
      >
        This is a button
      </Button>
    </div>
  );
};

export default Posts;
