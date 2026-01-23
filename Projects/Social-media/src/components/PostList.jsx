import { Post } from "./Post";
import { useContext, useEffect,useState } from "react";
import { PostListContext } from "../Store/posts-list-store";
import { Welcome } from "./WelcomeMessage";
import { LoadingSpinner } from "./LoadingSpineer";

export const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);
  const [fetching ,setfetching]= useState(false);

  
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;

  setfetching(true);

  fetch("https://dummyjson.com/posts", { signal })
    .then(res => res.json())
    .then(data => {
      addInitialPost(data.posts);
      setfetching(false);
    })
    .catch(err => {
      if (err.name !== "AbortError") {
        console.error(err);
        setfetching(false);
      }
    });

  return () => {
    controller.abort();
  };
}, []);


  

  return (
    <>
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && <Welcome></Welcome>}
      <div className="Posts_Grid">
        {!fetching && postList.map((post) => (
          <Post
            key={post.id}
            posttitle={post.title}
            postbody={post.body}
            posttags={post.tags}
            postID={post.id}
          />
        ))}
      </div>
    </>
  );
};