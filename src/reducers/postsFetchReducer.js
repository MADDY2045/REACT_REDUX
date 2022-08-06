const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const initialCurrentPage = { currentPage: 1, postsPerPage: 10 };

export const postsFetchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_POSTS":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case "FETCH_POSTS_ERROR":
      return {
        ...state,
        loading: false,
        error: "Something Went Wrong",
      };
    default:
      return state;
  }
};

export const setCurrentPageReducer = (state = initialCurrentPage, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_POSTS_PER_PAGE":
      return {
        ...state,
        postsPerPage: action.payload,
      };
    default:
      return state;
  }
};
