import React from "react";
import { Link } from "react-router-dom";

export default function Pagination(props) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalComments/props.commentPerPage); i++) {
    pageNumbers.push(i)
  }
  console.log(props.currentPage, "hell", props.hasNextPage);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link" to="#!" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </Link>
          </li>
          {pageNumbers.map(pageNumber => {
            return (
            <li key={pageNumber} className="page-item" onClick={() => props.paginate(pageNumber)}>
              <Link className="page-link" to="#!">
                {pageNumber}
              </Link>
            </li>
            )
          })}
          
          <li className="page-item">
            <Link className="page-link" to="#!" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
