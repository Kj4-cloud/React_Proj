import { MdDelete } from "react-icons/md";
import {PostListContext} from '../Store/posts-list-store'
import { useContext } from "react";



export const Post = ({ posttitle, postbody, posttags ,postID }) => {
 
  const {deletePost} = useContext(PostListContext)


  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <span className="position-absolute top-0  start-100 translate-middle
         badge rounded-pill bg-danger delete_button"  onClick={() => {deletePost(postID)}}>
          <MdDelete />
        </span>

        <h5 className="card-title">{posttitle}</h5>
        <p className="post_body">{postbody}</p>
        {posttags.map((post) => (
          <button
            key={post}
            type="button"
            className="btn btn-primary   tags_button  "
          >
            #{post}
          </button>
        ))}

        <div className="alert alert-success alert_reaction" role="alert">
          A simple success alert—check it out!
        </div>
      </div>
    </div>
  );
};
