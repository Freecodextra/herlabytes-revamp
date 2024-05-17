import Hero from "../components/hero/Hero";
import PictureSec from "../components/picture-group/PictureSec";
import Brands from "../components/brands/Brands";
import Services from "../components/services/Services";
import Solutions from "../components/solutions/Solutions";
import Case from "../components/case-studies/Case";
import Idea from "../components/idea/Idea";
import Blog from "../components/blog/Blog";
import Testimonial from "../components/testimonial/Testimonial";
const Home = () => {
  return (
    <>
      <Hero />
      <PictureSec />
      <Brands />
      <Services />
      <Solutions />
      <Case />
      <Idea />
      <Blog />
      <Testimonial />
    </>
  );
};

export default Home;
