import { createContext } from "react";
import { useState } from "react";
export const PostListContext = createContext({
  selectedTab: [],
  setSelectedTab: () => {},
});

const PostListProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export { PostListProvider };