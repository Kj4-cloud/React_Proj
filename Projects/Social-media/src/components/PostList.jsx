import { Post } from "./Post";
import { useContext } from "react";
import {PostListContext} from "../Store/posts-list-store"


export const PostList = () => {
  const {postList} = useContext(PostListContext)
  return (
     <div className="Posts_Grid">
    {postList.map((post)=>  (<Post 
    key={post.id} 
    posttitle= {post.title}
    postbody={post.body}
    posttags={post.tags}
    postID= {post.id}
    
     />))}
    
   </div>
  );
};