import React from "react";
import BookControls from "./BookControls";

const BookCard = ({ book, type }) => {
  return (
    <article className="book-card">
      <div className="book-card-content">
        <h2>{book.title}</h2>
        <p>{book.author_name}</p>
        <p>
          First published:{" "}
          <time datetime={book.first_publish_year}>
            {book.first_publish_year}
          </time>
        </p>
      </div>
      <BookControls type={type} book={book} />
    </article>
  );
};

export default BookCard;
