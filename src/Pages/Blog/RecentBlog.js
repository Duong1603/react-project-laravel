import React from 'react'

export default function RecentBlog() {
  return (
    <div className="sidebar-block">
      <h3 className="sidebar-title">Recent Blog</h3>
      <div className="blog-item">
        <a className="post-thumb" href>
          <img src="../assets/img/blog/blog_1.jpg" alt="" />
        </a>
        <div className="content">
          <h5 className="post-title">
            <a href="#">Even the all-powerful Pointing has no control</a>
          </h5>
          <div className="meta">
            <a href="#">
              <span className="mai-calendar" /> July 12, 2018
            </a>
            <a href="#">
              <span className="mai-person" /> Admin
            </a>
            <a href="#">
              <span className="mai-chatbubbles" /> 19
            </a>
          </div>
        </div>
      </div>
      <div className="blog-item">
        <a className="post-thumb" href>
          <img src="../assets/img/blog/blog_2.jpg" alt="" />
        </a>
        <div className="content">
          <h5 className="post-title">
            <a href="#">Even the all-powerful Pointing has no control</a>
          </h5>
          <div className="meta">
            <a href="#">
              <span className="mai-calendar" /> July 12, 2018
            </a>
            <a href="#">
              <span className="mai-person" /> Admin
            </a>
            <a href="#">
              <span className="mai-chatbubbles" /> 19
            </a>
          </div>
        </div>
      </div>
      <div className="blog-item">
        <a className="post-thumb" href>
          <img src="../assets/img/blog/blog_3.jpg" alt="" />
        </a>
        <div className="content">
          <h5 className="post-title">
            <a href="#">Even the all-powerful Pointing has no control</a>
          </h5>
          <div className="meta">
            <a href="#">
              <span className="mai-calendar" /> July 12, 2018
            </a>
            <a href="#">
              <span className="mai-person" /> Admin
            </a>
            <a href="#">
              <span className="mai-chatbubbles" /> 19
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
