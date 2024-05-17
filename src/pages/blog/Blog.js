import "./blog.css"
import blogIcon from "../../images/blog.png"
import blog1 from "../../images/blog-1.png";
import blog2 from "../../images/blog-2.png";
import blog3 from "../../images/blog-3.png";
import blog4 from "../../images/blog-4.png";
import blog5 from "../../images/blog-5.png";
import blog6 from "../../images/blog-6.png";
import { Post } from "../../components/blog/Blog";
import { CallToAction } from "../../components/testimonial/Testimonial";
import podcastImg from "../../images/podcast-img.png";
import podcastPlay from "../../images/podcast-play.png";
import { useState } from "react";
const Blog = () => {
  const posts = [
    {image: blog1, optional: true, postDate: "27th December 2022", readTime: 2, head: "Recommendations for improving your business's visibility", body: "During the Herlabytes meeting, colleagues discussed the significance of establishing a business that's publicly visible and easily recognizable. This is crucial for the growth of your business and..."},
    {image: blog2, optional: true, postDate: "27th December 2022", readTime: 2, head: "Herlabyte's modules shape the future of the tech ecosystem", body: "During the Herlabyte staff's podcast session, they listened to episodes from the 'Modules by Herlabytes' podcast. Promoting our podcast on Anchor.fm was just as easy as..."},
    {image: blog3, optional: true, postDate: "27th December 2022", readTime: 2, head: "Embracing a Hybrid Work Environment", body: "During the Herlabytes boardroom meeting, it was discussed how COVID-19 has affected various aspects of our lives, such as communication methods, caregiving, education of children..."},
    {image: blog4, optional: true, postDate: "27th December 2022", readTime: 2, head: "Roles of a Product Designer", body: "The role of a product designer is to create and develop products that are visually appealing, functional, and user-friendly. Product designers work on a wide range of products, from consumer goods to digital interfaces,..."},
    {image: blog5, optional: true, postDate: "27th December 2022", readTime: 2, head: "Tips To Improve Your Business Visibility", body: "Improving your business visibility is crucial to attracting customers and growing your business. Here are some tips to help you increase your business visibility..."},
    {image: blog6, optional: true, postDate: "27th December 2022", readTime: 2, head: "The Underlying Strategy for Launching a Digital Product", body: "Launching a digital product requires a thoughtful and strategic approach. Here are some key strategies to consider: Identify your target audience: Before launching your product you need to identify your target audience..."},
  ]
  const [blog, setBlog] = useState(true);
  return (
    <div className="blog page">
      <div className="blog-head">
        <img src={blogIcon} alt="blog" />
        <h4 className="head">
          Where individuals with technical skills come to develop and advance
          their abilities.
        </h4>
        <p className="blog-text">
          Access a diverse collection of resources authored by a team of
          accomplished technology professionals at Herlabytes.
        </p>
        <p className="blog-text">
          Stay in the loop with all our new posts by subscribing to our blog."
        </p>
        <button>Subscribe</button>
        <ul>
          <li className={blog && "active"} onClick={()=> setBlog(true)}>Blog</li>
          <li className={!blog && "active"} onClick={()=> setBlog(false)}>Podcast</li>
        </ul>
      </div>
      {blog && 
      <div className="blog-body">
      {
          posts.map((post, index)=> {
            return <Post {...post} />
          })
        }
      </div>
      }
      {
        !blog &&
        <div className="podcast">
        <div className="podcast-head">
          <h4>Tech gists by Herlabytes</h4>
          <p>
            Herlabytes' Tech Gists take you on an exciting journey through the
            world of technology. With every episode, we delve into various
            subjects and occurrences that impact and captivate all corners of
            the tech community.
          </p>
        </div>
        <div className="podcast-menu">
          <p><span>Hosted by:</span> Herlabytes Technologies</p>
          <p><span>Guest speaker:</span> Ademorin Ajepe</p>
        </div>
        <div className="podcast-listen">
          <div className="image">
            <img src={podcastImg} alt="podcast" />
          </div>
          <div className="podcast-body">
          <div className="text">
            <h2>Listen on Anchor</h2>
            <p>Tech gists at Herlabytes is an expedition of the tech ecosystem.</p>
          </div>
          <div className="line"></div>
          <div className="play">
          <img src={podcastPlay} alt="podcast-play" />
          <span>Listen Now</span>
          </div>
          </div>
      </div>
    </div>
      }
      <div className="testimonial c-to-c">
        <CallToAction />
      </div>
    </div>
  );
}

export default Blog