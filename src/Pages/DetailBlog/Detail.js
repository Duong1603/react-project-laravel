import React from 'react'
import Form from '../../Components/Form/Form';
export default function Detail() {
  const lb = {
    form_name: "Get in touch",
    name1: "Name",
    name2: "Email",
    name3: "Subject",
    name4: "Detail more your problem",
  };
  return (
    <div class="container">
      <div className="">
        <article className="blog-details">
          <div className="post-thumb">
            <img src="../assets/img/blog/blog_1.jpg" alt="" />
          </div>
          <h2 className="post-title h1">
            List of Countries without Coronavirus case
          </h2>
          <div className="post-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet est vel orci luctus sollicitudin. Duis eleifend vestibulum
              justo, varius semper lacus condimentum dictum. Donec pulvinar a
              magna ut malesuada. In posuere felis diam, vel sodales metus
              accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros
              leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit
              amet imperdiet ante. Nulla id tellus auctor, dictum libero a,
              malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent
              dapibus tempus erat quis aliquet. Donec ac purus id sapien
              condimentum feugiat.
            </p>
            <p>
              Praesent vel mi bibendum, finibus leo ac, condimentum arcu.
              Pellentesque sem ex, tristique sit amet suscipit in, mattis
              imperdiet enim. Integer tempus justo nec velit fringilla, eget
              eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris
              eu turpis eget tortor ultricies elementum. Phasellus vel placerat
              orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae
              vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis,
              quis vulputate
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
