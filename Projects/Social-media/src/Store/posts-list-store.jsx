import { useState, createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  selectedTab: [],
  setSelectedTab: () => {},
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  dispatchPostList:()=>{},
  addInitialPost:()=>{},
};
 
export const PostListContext = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } 

  else if(action.type === "ADD_POST"){
      newPostList = [action.payload, ...currPostList];
  }

  else{
    if(action.type === "ADD_INITIAL_POSTS"){
        newPostList = action.payload.posts
    }
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [postList, dispatchPostList] = useReducer(
    postListReducer,[],
  );
  const addPost = (Userid, Title, Body, Reactions, Tags, ID_Random) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now() + Math.random(),
        title: Title,
        body: Body,
        reactions: Reactions,
        userID: Userid,
        tags: Tags,
      },
    });
  };


    const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
            posts
      },
    });
  };



  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        addPost,
        deletePost,
        postList,
        dispatchPostList,
        addInitialPost
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export { PostListProvider };