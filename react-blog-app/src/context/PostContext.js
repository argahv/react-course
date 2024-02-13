import { createContext, useContext, useState } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [post, setPost] = useState({
    title: "",
  });

  const contextValue = {
    post,
    setPost,
  };

  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostContext);
};
