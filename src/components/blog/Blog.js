import React from "react";
import blog1 from "../../images/blog-1.png";
import blog2 from "../../images/blog-2.png";
import blog3 from "../../images/blog-3.png";
import time from "../../images/time.png";
import postIcon from "../../images/post-logo.png";
import "./blog.css";
import { useNavigate } from "react-router-dom";
function Blog() {
  const posts = [
    {image: blog1, optional: false, postDate: "27th December 2022", readTime: 2, head: "Recommendations for improving your business's visibility", body: "During the Herlabytes meeting, colleagues discussed the significance of establishing a business that's publicly visible and easily recognizable. This is crucial for the growth of your business and..."},
    {image: blog2, optional: false, postDate: "27th December 2022", readTime: 2, head: "Herlabyte's modules shape the future of the tech ecosystem", body: "During the Herlabyte staff's podcast session, they listened to episodes from the 'Modules by Herlabytes' podcast. Promoting our podcast on Anchor.fm was just as easy as..."},
    {image: blog3, optional: false, postDate: "27th December 2022", readTime: 2, head: "Embracing a Hybrid Work Environment", body: "During the Herlabytes boardroom meeting, it was discussed how COVID-19 has affected various aspects of our lives, such as communication methods, caregiving, education of children..."},
  ]
  const navigate = useNavigate();
  return (
    <div className="blog">
      <div className="blog-head">
        <h4>Our Blog</h4>
        <p>
          Discover our extensive library of expert knowledge, covering
          everything from skill development to achieving business growth.
        </p>
      </div>
      <div className="blog-body">
        {
          posts.map((post, index)=> {
            return <Post {...post} />
          })
        }
      </div>
      <div className="blog-footer center">
        <button onClick={()=> navigate("/blog")}>Check out our blog</button>
      </div>
    </div>
  );
}
export const Post = ({image, optional, postDate, readTime, head, body})=> {
  return (
    <div className="post">
          <div className="image">
            <img src={image} alt="blog3" />
          </div>
          {optional && <div className="optional center">
            <img src={postIcon} alt="icon" />
            <span>Herlabytes</span>
            <span>{postDate}</span>
          </div> }
          <div className="text">
            <h6>{head}</h6>
            <p>{body}
            </p>
          </div>
          <div className="time">
            <img src={time} alt="time" />
            <span>{readTime} minutes read</span>
          </div>
        </div>
  )
}

export default Blog;
