import React from "react";
import { connect, useDispatch } from "react-redux";
import { pagination } from "../actions/pagination";

const Pagination = ({ totalPosts, postsPerPage }) => {
  const dispatch = useDispatch();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <div
              onClick={() => dispatch(pagination(number))}
              className="page-link"
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default connect()(Pagination);
