import React from "react";

const Newpost = ({
  handleSubmit,
  postTitle,
  setpostTitle,
  postBody,
  setpostBody,
}) => {
  return (
    <main className="NewPost">
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title :</label>
        <input
          type="text"
          id="title"
          required
          placeholder="New Title"
          value={postTitle}
          onChange={(e) => setpostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post :</label>
        <textarea
          type="text"
          id="postBody"
          required
          value={postBody}
          placeholder="New Post"
          onChange={(e) => setpostBody(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Newpost;
