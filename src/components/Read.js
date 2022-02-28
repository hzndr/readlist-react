import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import BookCard from "./BookCard";

const Read = () => {
  const { read } = useContext(GlobalContext);
  return (
    <section className="book-page">
      <div className="container">
        <div className="header">
          <h1>Read Books</h1>
          <span className="count-pill">
            {read.length} {read.length === 1 ? "Book" : "Books"}
          </span>
        </div>
        {read.length > 0 ? (
          <ul className="book-grid">
            {read.map((book) => (
              <li key={book.key}>
                <BookCard book={book} type="read" />
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

export default Read;
