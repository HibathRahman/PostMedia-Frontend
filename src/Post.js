import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Post = ({ post }) => {
  const dateString = post.createdAt;
  const formattedDate = format(new Date(dateString), "MMMM d, yyyy");

  return (
    <article className="post">
      <Link to={`post/${post._id}`}>
        <h2 className="postTitle">{post.title}</h2>
        <p className="postDate">Creadted At : {formattedDate.toUpperCase()}</p>
        <p className="postBody">
          {post.body.length <= 100
            ? post.body
            : `${post.body.slice(0, 100)}...`}
        </p>
      </Link>
    </article>
  );
};

export default Post;
