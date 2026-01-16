import { useContext } from "react";
import { PostList } from "./PostList";
import { CreatePost } from "./CreatePost";
import { DeletedPost } from "./deletePost";
import {PostListContext} from '../Store/posts-list-store'


export const HomepageDisplayer =()=>{


const {selectedTab} = useContext(PostListContext);


const pagerendrig = () =>{
  
   if(selectedTab === "Home"){
      return <PostList />
   }
   else if (selectedTab === "Createpost"){
      return <CreatePost />
   }
   else{
     return <DeletedPost />
   }
    

}



 
  return (

    <>

      {pagerendrig()}

    </>
  );
};