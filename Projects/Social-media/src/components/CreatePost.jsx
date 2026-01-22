import { useContext, useRef } from "react";
import { PostListContext } from "../Store/posts-list-store";
export const CreatePost = () => {

  const { addPost } = useContext(PostListContext);
  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const Userid = userId.current.value;
    const Title = postTitle.current.value;
    const Body = postBody.current.value;
    const Reactions = reactions.current.value;
    const Tags = tags.current.value.split("");

    addPost(Userid, Title, Body, Reactions, Tags);
    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit} >
      <div className="mb-3  ">
        <label htmlFor="userId" className="form-label">
          Enter Your UserId
        </label>
        <input
          ref={userId}
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
          ref={postTitle}
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
          ref={postBody}
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
          ref={reactions}
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
          ref={tags}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter your usind spaceTags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};