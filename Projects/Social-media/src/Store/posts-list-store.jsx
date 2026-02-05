import { useState, createContext, useReducer,useEffect } from "react";

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

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
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


  const [fetching, setfetching] = useState(false);
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
    <PostListContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        addPost,
        deletePost,
        postList,
        dispatchPostList,
        addInitialPost,
        fetching
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export { PostListProvider };