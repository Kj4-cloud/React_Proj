import { useContext, useRef } from "react";
import { PostListContext } from "../Store/posts-list-store";
import { useNavigate, Form, redirect } from "react-router-dom";

export const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3  ">
        <label htmlFor="userId" className="form-label">
          Enter Your UserId
        </label>
        <input
          name="userId"
          type="text"
          className="form-control"
          id="title"
          placeholder=" Your User Id"
        />
      </div>

      <div className="mb-3  ">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you ?"
        />
      </div>

      <div className="mb-3  ">
        <label htmlFor="content" className="form-label">
          Post Content
        </label>
        <textarea
          name="body"
          rows={4}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us about you..."
        />
      </div>

      <div className="mb-3  ">
        <label htmlFor="title" className="form-label">
          Numbers of reactions
        </label>
        <input
          name="reactions"
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many peoples reacted to your post"
        />
      </div>

      <div className="mb-3  ">
        <label htmlFor="title" className="form-label">
          Enter Your hastages
        </label>
        <input
          name="tags"
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter your usind spaceTags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // addPost(post);
    });
  return redirect("/");
}