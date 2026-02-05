import { Post } from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../Store/posts-list-store";
import { Welcome } from "./WelcomeMessage";
import { LoadingSpinner } from "./LoadingSpineer";
import { useLoaderData } from "react-router-dom";
 export const PostList = () => {

  const postList = useLoaderData();

  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      { postList.length === 0 && <Welcome></Welcome>}
      <div className="Posts_Grid">
        {postList.map((post) => (
            <Post key={post.id} post={post} />
          ))}
      </div>
    </>
  );
};

export const postLoader = () =>{
 return  fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        return data.posts
      });
}