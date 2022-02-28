import React, { useState } from "react";
import ResultCard from "./ResultCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
    if (e.target.value) {
      fetch(
        `https://openlibrary.org/search.json?title=${e.target.value}&limit=25`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.docs);
          } else {
            setResults([]);
          }
        });
    } else {
      setResults([]);
    }
  }
  return (
    <section className="add-page">
      <div class="hero">
        <div className="add-page-header">
          <h1>Over 1.4 million books</h1>
          <form>
            <label forhtml="serachbar" className="sr-only">
              Book title
            </label>
            <input
              id="searchbar"
              type="text"
              placeholder="Search for a book by title"
              value={query}
              onChange={onChange}
            />
          </form>
        </div>
      </div>
      <div className="container">
        {results.length > 0 ? (
          <ul className="results">
            {results.map((book) => (
              <li key={book.key}>
                <ResultCard book={book} />
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="no-books">Let's start searching!</h2>
        )}
      </div>
    </section>
  );
};

export default Add;
