import React from 'react'

export default function CategoriesBlog() {
  return (
    <div className="sidebar-block">
      <h3 className="sidebar-title">Categories</h3>
      <ul className="categories">
        <li>
          <a href="#">
            Food <span>12</span>
          </a>
        </li>
        <li>
          <a href="#">
            Dish <span>22</span>
          </a>
        </li>
        <li>
          <a href="#">
            Desserts <span>37</span>
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
