import axios from "axios";

export const fetchPosts = () => (dispatch) => {
  dispatch({ type: "LOAD_POSTS" });
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(({ data }) => {
      dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
      console.log(data);
    })
    .catch(() => dispatch({ type: "FETCH_POSTS_ERROR" }));
};
