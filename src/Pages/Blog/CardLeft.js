import React from 'react'
import { Link } from 'react-router-dom';
const CardLeft = ({ postList }) => {
  return (
    <div className="row CardLeft">
      {postList.map((post, index) => {
        return (
          <div className="col-md-4 py-3" key={index}>
            <Link to={`/blogs/${post.id}`}>
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="#">{post.nameCategory}</a>
                  </div>
                  <img src={'/assets/img/blog/' + post.image} alt="" />
                </div>
                <div className="body">
                  <h5 className="post-title">
                    {post.title}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
      <div className="col-12 my-5">
        <nav aria-label="Page Navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">
                1 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default CardLeft;
