import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Postpage from "./Postpage";
import Newpost from "./Newpost";
import Missing from "./Missing";
import Home from "./Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Editpost from "./Editpost";
import axios from "axios";

 const API_URL = "https://postmedia-4xz1.onrender.com/posts"

const App = () => {
  const [posts, setposts] = useState([]);
  let [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setpostTitle] = useState("");
  const [postBody, setpostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const navigate = useNavigate();

  const fetchdata = async () => {
    setLoading(true);

    try {
      const res = await axios.get(API_URL);
      setposts(res.data);
      setLoading(false);
    } catch (err) {
      if (err.res) {
        console.log(err.res.data);
        console.log(err.res.status);
        console.log(err.res.headers);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchdata();
    }, 4000);
  }, []);

  // search
  // when change time only
  useEffect(() => {
    const filterResult = posts.filter((ele) =>
      ele.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filterResult.reverse());
  }, [posts, search]);

  // POST
  //   if we fetch data , use async await and try catch
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newPost = { title: postTitle, body: postBody };
      await axios.post(API_URL, newPost);
      setpostTitle("");
      setpostBody("");
      navigate("/");
      fetchdata();
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(err.message);
      }
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      navigate("/");
      fetchdata();
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT
  const handleEdit = async (id) => {
    try {
      const updatedPost = { title: editTitle, body: editBody };
      await axios.put(`${API_URL}/${id}`, updatedPost);
      setEditTitle("");
      setEditBody("");
      navigate("/");
      fetchdata();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Header />
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              posts={searchResult}
              loading={loading}
              // posts={posts}
            />
          }
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/post"
          element={
            <Newpost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setpostTitle={setpostTitle}
              postBody={postBody}
              setpostBody={setpostBody}
            />
          }
        />

        <Route
          path="/post/:id"
          element={<Postpage posts={posts} handleDelete={handleDelete} />}
        />

        <Route
          path="/edit/:id"
          element={
            <Editpost
              posts={posts}
              handleEdit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
            />
          }
        />
        <Route path="/*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
