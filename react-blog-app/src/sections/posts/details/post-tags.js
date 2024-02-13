import React from "react";
import { usePostContext } from "../../../context/PostContext";

const PostTags = () => {
  const { post } = usePostContext();

  return (
    <div>
      <ul>
        {post?.tags?.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostTags;
