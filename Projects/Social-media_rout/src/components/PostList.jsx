import { Post } from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../Store/posts-list-store";
import { Welcome } from "./WelcomeMessage";
import { LoadingSpinner } from "./LoadingSpineer";

export const PostList = () => {
  const { postList,fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Welcome></Welcome>}
      <div className="Posts_Grid">
        {!fetching &&
          postList.map((post) => (
            <Post key={post.id} post={post} />
          ))}
      </div>
    </>
  );
};