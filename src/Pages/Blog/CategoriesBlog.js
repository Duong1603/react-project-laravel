import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Cardleft from './Cardleft';
import Paragraph from './Paragraph';
import RecentBlog from './RecentBlog';
import TagBlog from './TagBlog';

export default function CategoriesBlog() {
  const [data, setData] = useState({
    isLoaded: false,
    postList: [],
    cateList: []
  })
  const { id } = useParams();
  const [titleSK, setTitleSK] = useState();
  useEffect(() => {
    getData();
  }, [id]);
  const getData = async () => {
    var res = await axios.get(`http://127.0.0.1:8000/api/posts/search?${id ? `cateId=${id}` : ""}`);
    const postList = await res.data.data;
    res = await axios.get('http://127.0.0.1:8000/api/categories');
    const cateList = res.data;
    setData({ postList, cateList, isLoaded: true });
  }
  // console.log(data);
  const handleSearch = async (e) => {
    e.preventDefault()
    const res = await axios.get(`http://127.0.0.1:8000/api/posts/search?title=${titleSK}`);
    // console.log(res.data);
    const postList = await res.data.data;
    setData({ ...data, postList, isLoaded: true });
    console.log(postList);
}

  return (
    <div className='row'>
      <div className="col-lg-8">
        {data.isLoaded && <Cardleft postList={data.postList} />}
      </div>

      <div className="col-lg-4">
        <div className="sidebar">
          <div className="sidebar-block">
            <h3 className="sidebar-title">Search</h3>
            <form onSubmit={handleSearch} className="search-form" >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a keyword and hit enter"
                  name="title"
                  id="inputPassword"
                onChange={(e) => setTitleSK(e.target.value)}
                />
                <button type="submit" className="btn" >
                  <span className="icon mai-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="sidebar-block">
          <h3 className="sidebar-title">Categories</h3>
          <ul className="categories">
            <li>
              <Link to={'/search/category'} >All <span>100</span></Link>
            </li>
            {data.cateList.map((category, index) => {
              return (
                <li key={index}>
                  <Link to={`/search/category/${category.id}`}>
                    {category.name}
                    <span>{category.total}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <RecentBlog></RecentBlog>
        <TagBlog></TagBlog>
        <Paragraph></Paragraph>
      </div>
    </div>
  );
}

