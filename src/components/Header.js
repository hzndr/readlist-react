import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

const Header = () => {
  const { readlist, read } = useContext(GlobalContext);
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              <i class="fas fa-bookmark"></i>Readlist
            </Link>
          </div>
          <nav className="nav-links">
            <ul>
              <li>
                <Link to="/">ReadList ({readlist.length})</Link>
              </li>
              <li>
                <Link to="/read">Read ({read.length})</Link>
              </li>
              <li>
                <Link to="/add" className="btn">
                  <span aria-hidden="true">+ </span>Add Book
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
