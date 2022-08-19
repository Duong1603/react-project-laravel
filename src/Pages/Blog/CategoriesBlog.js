import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import Paragraph from "./Paragraph";
import RecentBlog from "./RecentBlog";
// import TagBlog from "./TagBlog";
import CardLeft from "./CardLeft";
import { getBlogs, searchType } from "../../Services/Api/callApi";
export default function CategoriesBlog() {
  const [data, setData] = useState({
    isLoaded: false,
    postList: [],
    cateList: [],
  });
  const [totalPost, setTotalPost] = useState();
  const { id } = useParams();
  const [titleSK, setTitleSK] = useState();
  useEffect(() => {
    getData(id);
  }, [id]);
  const getData = async (id) => {
    getBlogs(id).then(
      axios.spread((res1, res2) => {
        const postList = res1.data;
        const cateList = res2.data.data;
        setData({ postList, cateList, isLoaded: true });
        handleSumPost(cateList);
      })
    );
  };
  const handleSumPost = (cateList)=>{
    var result = cateList.reduce(function (acc, category ) { return acc + category.total; }, 0);
    setTotalPost(result);
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    searchType(titleSK).then((res) => {
      const postList = res.data.data;
      setData({ ...data, postList, isLoaded: true });
    });
  };
  return (
    <div className="row">
      <div className="col-lg-8">
        {data.isLoaded && <CardLeft postList={data.postList} />}
      </div>
      <div className="col-lg-4">
        <div className="sidebar">
          <div className="sidebar-block search">
            <h3 className="sidebar-title">Search</h3>
            <form onSubmit={handleSearch} className="search-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a keyword and hit enter"
                  name="search"
                  id="inputPassword"
                  onChange={(e) => setTitleSK(e.target.value)}
                />
                <button type="submit" className="btn">
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
              <Link to={"/search/category"}>
                All <span>{totalPost}</span>
              </Link>
            </li>
            {data.cateList.map((category, index) => {
              return (
                <li key={index}>
                  <Link to={`/search/category/${category.id}`}>
                    {category.name}
                    <span>{category.total}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <RecentBlog></RecentBlog> */}
        {/* <TagBlog></TagBlog> */}
        {/* <Paragraph></Paragraph> */}
      </div>
    </div>
  );
}
