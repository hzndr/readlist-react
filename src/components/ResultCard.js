import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ book }) => {
  const { addBookToReadlist, addBookToRead, readlist, read } =
    useContext(GlobalContext);
  let storedBook = readlist.find((item) => item.key === book.key);
  let storedBookRead = read.find((item) => item.key === book.key);
  const readlistDisabled = storedBook ? true : storedBookRead ? true : false;
  const readDisabled = storedBookRead ? true : false;
  return (
    <article class="result-card">
      <div class="result-card-content">
        <h2>{book.title}</h2>
        <p>{book.author_name}</p>
        <p>
          First published:{" "}
          <time datetime={book.first_publish_year}>
            {book.first_publish_year}
          </time>
        </p>
      </div>
      <div className="result-card-controls">
        <button
          type="button"
          className="btn"
          disabled={readlistDisabled}
          onClick={() => addBookToReadlist(book)}
        >
          Add to Readlist
        </button>
        <button
          type="button"
          className="btn"
          disabled={readDisabled}
          onClick={() => addBookToRead(book)}
        >
          Add to Read
        </button>
      </div>
    </article>
  );
};

export default ResultCard;
