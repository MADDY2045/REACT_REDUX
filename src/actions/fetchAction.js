import axios from "axios";

export const fetchUserData = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
    dispatch({ type: "FETCH_USER", payload: data });
    console.log(data);
  });
};
