import { useContext } from "react";
import { PostList } from "./PostList";
import { CreatePost } from "./CreatePost";
import { Other } from "./Other";
import { PostListContext } from "../Store/posts-list-store";

export const HomepageDisplayer = () => {
  const { selectedTab } = useContext(PostListContext);

  const pagerendrig = () => {
    if (selectedTab === "Home") {
      return <PostList />;
    } else if (selectedTab === "Createpost") {
      return <CreatePost />;
    } else {
      return <Other />;
    }
  };

  return <>{pagerendrig()}</>;
};
