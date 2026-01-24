import { MdDelete } from "react-icons/md";
import { PostListContext } from "../Store/posts-list-store";
import { useContext } from "react";

export const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  if (!post) return null;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0  start-100 translate-middle
         badge rounded-pill bg-danger delete_button"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          <MdDelete />
        </span>

        <h5 className="card-title">{post.title}</h5>
        <p className="post_body">{post.body}</p>
        {post.tags?.map((tag) => (
          <button
            key={tag}
            type="button"
            className="btn btn-primary   tags_button  "
          >
            #{tag}
          </button>
        ))}

        <div className="alert alert-success alert_reaction" role="alert">
          A simple success alert—check it out!
        </div>
      </div>
    </div>
  );
};
