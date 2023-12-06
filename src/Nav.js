import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleClickLink = (color) => {
    setActiveLink(color);
  };
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search </label>
        <input
          type="text"
          id="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className=".nav-list">
        <li className={activeLink === "home" ? "active" : ""}>
          <Link to="/" onClick={() => handleClickLink("home")}>
            HOME
          </Link>
        </li>
        <li className={activeLink === "newpost" ? "active" : ""}>
          <Link to="/post" onClick={() => handleClickLink("newpost")}>
            NEW POST
          </Link>
        </li>
        <li className={activeLink === "about" ? "active" : ""}>
          <Link to="/about" onClick={() => handleClickLink("about")}>
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
