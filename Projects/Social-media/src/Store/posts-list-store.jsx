import { useState, createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  selectedTab: [],
  setSelectedTab: () => {},
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostListContext = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );
  const addPost = () => {};

  const deletePost = (deleting_post) => {
    console.log("hi");
  };

  return (
    <PostListContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        addPost,
        deletePost,
        postList,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hi friends i am going to mumbai for my veacation",
    reactions: 0,
    userID: "user_9",
    tags: ["vacation", "Munbai", "Enjoying"],
  },

  {
    id: "9",
    title: "Pass ho gai",
    body: "4 sal kay bade pass without pack Karan ",
    reactions: 15,
    userID: "user_9",
    tags: ["Graduatin", "Enjoying"],
  },
];

export { PostListProvider };
