import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((ele) => (
        <Post key={ele._id} post={ele} />
      ))}
    </>
  );
};

export default Feed;
