import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions/fetchPosts";
import { setPostsPerPageAction } from "../actions/pagination";
import Posts from "./Posts";
import Pagination from "./Pagination";

const Home = () => {
  const { posts, loading } = useSelector((state) => state.postsFetchReducer);
  const { currentPage, postsPerPage } = useSelector(
    (state) => state.setCurrentPageReducer
  );
  const dispatch = useDispatch();

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    posts && posts.length > 0 && posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <div class="input-group mb-3 col-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">
            View Per Page
          </label>
        </div>
        <select
          class="custom-select"
          id="inputGroupSelect01"
          onChange={(e) => dispatch(setPostsPerPageAction(e.target.value))}
          value={postsPerPage}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} />
    </div>
  );
};

export default connect()(Home);
