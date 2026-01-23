export const Welcome = ({handleGetPosts}) => {
  return (
    <center>
      <h1>There is no post for now</h1>
      <button type="button" className="btn btn-info"
       onClick={handleGetPosts}>
        Get Post from server
      </button>
    </center>
  );
};
