import React from "react";
import Feed from "./Feed";
import RiseLoader from "react-spinners/RiseLoader";

const Home = ({ posts, loading }) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <RiseLoader
          color={"#36d7b7"}
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loader"
        />
      )}
    </main>
  );
};

export default Home;
