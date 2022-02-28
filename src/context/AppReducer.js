export default (state, action) => {
  switch (action.type) {
    case "ADD_BOOK_TO_READLIST":
      return {
        ...state,
        readlist: [action.payload, ...state.readlist],
      };
    case "REMOVE_BOOK_FROM_READLIST":
      return {
        ...state,
        readlist: state.readlist.filter((book) => book.key !== action.payload),
      };
    case "ADD_BOOK_TO_READ":
      return {
        ...state,
        readlist: state.readlist.filter(
          (book) => book.key !== action.payload.key
        ),
        read: [action.payload, ...state.read],
      };
    case "MOVE_BOOK_TO_READLIST":
      return {
        ...state,
        read: state.read.filter((book) => book.key !== action.payload.key),
        readlist: [action.payload, ...state.readlist],
      };
    case "REMOVE_BOOK_FROM_READ":
      return {
        ...state,
        read: state.read.filter((book) => book.key !== action.payload),
      };
    default:
      return state;
  }
};
