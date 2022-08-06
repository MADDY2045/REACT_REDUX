export const pagination = (pageNumber) => (dispatch) => {
  dispatch({
    type: "SET_CURRENT_PAGE",
    payload: pageNumber,
  });
};

export const setPostsPerPageAction = (pages) => (dispatch) => {
  dispatch({
    type: "SET_POSTS_PER_PAGE",
    payload: pages,
  });
};
