import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  readlist: localStorage.getItem("readlist")
    ? JSON.parse(localStorage.getItem("readlist"))
    : [],
  read: localStorage.getItem("read")
    ? JSON.parse(localStorage.getItem("read"))
    : [],
};

//create context
export const GlobalContext = createContext(initialState);
// provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("readlist", JSON.stringify(state.readlist));
    localStorage.setItem("read", JSON.stringify(state.read));
  }, [state]);

  //actions
  const addBookToReadlist = (book) => {
    dispatch({ type: "ADD_BOOK_TO_READLIST", payload: book });
  };
  const removeBookFromReadlist = (key) => {
    dispatch({ type: "REMOVE_BOOK_FROM_READLIST", payload: key });
  };
  const addBookToRead = (book) => {
    dispatch({ type: "ADD_BOOK_TO_READ", payload: book });
  };
  const moveBookToReadlist = (book) => {
    dispatch({ type: "MOVE_BOOK_TO_READLIST", payload: book });
  };
  const removeBookFromRead = (key) => {
    dispatch({ type: "REMOVE_BOOK_FROM_READ", payload: key });
  };

  return (
    <GlobalContext.Provider
      value={{
        readlist: state.readlist,
        read: state.read,
        addBookToReadlist,
        removeBookFromReadlist,
        addBookToRead,
        moveBookToReadlist,
        removeBookFromRead,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
