import React from 'react'
import { Link } from 'react-router-dom';
export default function CategoriesBlog() {
  return (
    <div className="sidebar-block">
      <h3 className="sidebar-title">Categories</h3>
      <ul className="categories">
        <li>
          <Link to="/blogs">All<span>120</span></Link>
        </li>
        <li>
          <Link to={`/search/${4}`} >Food <span>12</span></Link>
        </li>
        <li>
          <a href="#">
            <Link to={`/search/${3}`}>Dish <span>12</span></Link>
          </a>
        </li>
        <li>
          <a href="#">
            Drinks <span>42</span>
          </a>
        </li>
        <li>
          <a href="#">
            Ocassion <span>14</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
