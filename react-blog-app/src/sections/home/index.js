import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {posts.map((post) => (
        <div
          style={{
            flex: "0 0 30%", // Each item will take up approximately 1/3 of the container width
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "10px",
            marginBottom: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
            margin: "1%",
          }}
        >
          <Link
            to={`/posts/${post.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2 key={post.title}>{post.title}</h2>
            <p style={{ color: "grey" }} key={post.body}>
              {post.body}
            </p>
          </Link>
        </div>
      ))}
      {/* <Button
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
      </Button> */}
    </div>
  );
};

export default Posts;