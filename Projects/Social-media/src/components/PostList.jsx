import { Post } from "./Post";
import { useContext } from "react";
import {PostListContext} from "../Store/posts-list-store"
import { Welcome } from "./WelcomeMessage";


export const PostList = () => {
  const {postList,addInitialPost} = useContext(PostListContext);

  const handleGetPostsClick=()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data=>{
      addInitialPost(data.posts);
    });
  }

  return (

  <>

  { postList.length === 0 && (<Welcome handleGetPosts={handleGetPostsClick} ></Welcome>)}

     <div className="Posts_Grid">
    {postList.map((post)=>  (<Post 
    key={post.id} 
    posttitle= {post.title}
    postbody={post.body}
    posttags={post.tags}
    postID= {post.id}
    
     />))}
    
   </div>

   </>
  );
};