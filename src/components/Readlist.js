import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import BookCard from "./BookCard";

const Readlist = () => {
  const { readlist } = useContext(GlobalContext);
  return (
    <section className="book-page">
      <div className="container">
        <div className="header">
          <h1>My Readlist</h1>
          <span className="count-pill">
            {readlist.length} {readlist.length === 1 ? "Book" : "Books"}
          </span>
        </div>
        {readlist.length > 0 ? (
          <ul className="book-grid">
            {readlist.map((book) => (
              <li key={book.key}>
                <BookCard book={book} type="readlist" />
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="no-books">No books in your list, add some!</h2>
        )}
      </div>
    </section>
  );
};

export default Readlist;
