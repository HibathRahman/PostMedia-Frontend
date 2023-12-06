import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Editpost = ({
  posts,
  handleEdit,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
}) => {
  const { id } = useParams();
  const post = posts.find((ele) => ele._id.toString() === id);
  console.log(post, "editpost");

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="NewPost">
      {post && (
        <>
          <h2>Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()} className="newPostForm">
            <label htmlFor="postTitle">Title :</label>
            <input
              type="text"
              id="postTitle"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <label htmlFor="postBody">Post :</label>
            <textarea
              type="text"
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            ></textarea>
            <button type="submit" onClick={() => handleEdit(post._id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!post && (
        <>
          <h2>Post Not Found</h2>
          <Link to="/">
            <p>please visit Homepage</p>
          </Link>
        </>
      )}
    </main>
  );
};

export default Editpost;
