import React, { useEffect, useState } from "react";
import Form from '../../Components/Form/Form';
import {DetailsBlogs} from '../../Services/Api/callApi'
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const lb = {
    form_name: "Get in touch",
    name1: "Name",
    name2: "Email",
    name3: "Subject",
    name4: "Detail more your problem",
  };
  let {id} = useParams();
    const [posts, setPosts] = useState({});

    useEffect(() => {
      DetailsBlogs(id).then(res=>setPosts(res.data.data)).catch(err=>console.log(err))
    }, []);
    console.log(posts);
  return (
    <div class="container">
      <div className="">
        <article className="blog-details">
          <div className="post-thumb">
            <img style={{width: '100%', height: 'auto', objectFit: 'cover'}} src={posts.image} alt="" />
          </div>
          <h2 className="post-title h1">
          {posts.title}
          </h2>
          <div className="post-content">
            <p>
            {posts.content}
            </p>
          </div>
          <div className="post-tags row">
            <textarea className="textarea col p-3" placeholder="Enter comment................" id="comment" rows={5} name="coronavirus"></textarea>
            <button type='submit' className='btn btn-primary'>Comment</button>
          </div>
        </article>{" "}
        {/* .blog-details */}
        {/* <Form lb={lb}></Form> */}
      </div>
    </div>
  );
}
