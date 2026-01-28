import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import { PostListProvider } from "../src/Store/posts-list-store";
import { RouterProvider, createBrowserRouter,useLoaderData } from "react-router-dom";
import { CreatePost } from "./components/CreatePost.jsx";
import { PostList,postLoader } from "./components/PostList.jsx";
import { Other } from "./components/Other.jsx";
import {createPostAction} from "./components/CreatePost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <PostList />, loader : postLoader },
      { path: "/createpost", element: <CreatePost /> , action : createPostAction
       },
      {path:"other",element:<Other/>}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostListProvider>
      <RouterProvider router={router} />
    </PostListProvider>
  </StrictMode>,
);
