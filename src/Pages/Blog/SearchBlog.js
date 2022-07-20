import React from 'react'

export default function SearchBlog() {
  return (
    <div className="sidebar-block">
      <h3 className="sidebar-title">Search</h3>
      <form action="#" className="search-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type a keyword and hit enter"
          />
          <button type="submit" className="btn">
            <span className="icon mai-search" />
          </button>
        </div>
      </form>
    </div>
  );
}
