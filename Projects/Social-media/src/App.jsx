import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DiAndroid } from "react-icons/di";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/sidebar";
import { CreatePost } from "./components/CreatePost";
import { PostList } from "./components/PostList";
import { useState } from "react";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
 

  return (
    <div className="app-container">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="inner-component">
        <Header />
        {/* <DiAndroid /> */}

        {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
