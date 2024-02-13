import { PostContextProvider } from "../context/PostContext";
import PostDetailSection from "../sections/posts/details";
import PostString from "../sections/posts/details/post-string";
import PostTags from "../sections/posts/details/post-tags";

const PostDetail = () => {
  return (
    <PostContextProvider>
      <PostDetailSection />
      <PostTags />
      <PostString />
    </PostContextProvider>
  );
};

export default PostDetail;
