import React from "react";
import { Link, useParams } from "react-router-dom";

const Postpage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  //  we want , clciking id
  const post = posts.find((ele) => ele._id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.createdAt}</p>
            <p className="postBody">{post.body}</p>
            <button
              className="deleteButton "
              onClick={() => handleDelete(post._id)}
            >
              Delete Post
            </button>
            <Link to={`/edit/${post._id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
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
      </article>
    </main>
  );
};

export default Postpage;
