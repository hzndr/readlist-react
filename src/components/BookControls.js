import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const BookControls = ({ book, type }) => {
  const {
    removeBookFromReadlist,
    addBookToRead,
    moveBookToReadlist,
    removeBookFromRead,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "readlist" && (
        <React.Fragment>
          <button
            type="button"
            className="btn ctrl-btn"
            onClick={() => addBookToRead(book)}
          >
            Move to Read
          </button>
          <button
            type="button"
            className="btn ctrl-btn"
            onClick={() => removeBookFromReadlist(book.key)}
          >
            Delete
          </button>
        </React.Fragment>
      )}
      {type === "read" && (
        <React.Fragment>
          <button
            type="button"
            className="btn ctrl-btn"
            onClick={() => moveBookToReadlist(book)}
          >
            Move to Readlist
          </button>
          <button
            type="button"
            className="btn ctrl-btn"
            onClick={() => removeBookFromRead(book.key)}
          >
            Delete
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default BookControls;
