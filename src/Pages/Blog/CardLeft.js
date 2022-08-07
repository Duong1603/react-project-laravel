import React from 'react'

const CardLeft = ({ postList }) => {
  return (
    <div className="row">
      {postList.map((post, index) => {
        return (
          <div className="col-sm-6 py-3" key={index}>
            <div className="card-blog">
              <div className="header">
                <div className="post-category">
                  <a href="#">{post.nameCategory}</a>
                </div>
                <a href="blog-details" className="post-thumb">
                  <img src={'/assets/img/blog/' + post.image} alt="" />
                </a>
              </div>
              <div className="body">
                <h5 className="post-title">
                  <a href="blog-details.html">
                    {post.title}
                  </a>
                </h5>
                <div className="site-info">
                  <div className="avatar mr-2">
                    <div className="avatar-img">
                      <img src="/assets/img/person/person_1.jpg" alt="" />
                    </div>
                    <span>Roger Adams</span>
                  </div>
                  <span className="mai-time" /> 1 week ago
                </div>
              </div>
            </div>
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
