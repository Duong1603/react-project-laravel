import React from 'react'
import CategoriesBlog from './CategoriesBlog';
import Paragraph from './Paragraph';
import RecentBlog from './RecentBlog';
import SearchBlog from './SearchBlog';
import TagBlog from './TagBlog';

export default function Cardleft() {
  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <SearchBlog></SearchBlog>
        <CategoriesBlog></CategoriesBlog>
        <RecentBlog></RecentBlog>
        <TagBlog></TagBlog>
        <Paragraph></Paragraph>
      </div>
    </div>
  );
}
