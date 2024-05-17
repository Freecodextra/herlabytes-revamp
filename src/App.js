import React from "react";
import Navbar from "./components/navbar/navbar";
import "./index.css";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/not-found/NotFound";
import CaseStudies from "./pages/case-studies/CaseStudies";
import Service from "./pages/services/Service";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import CaseStudy from "./pages/case-study/CaseStudy";
import { Career } from "./pages/career/Career";
import About from "./pages/about/About";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/case-studies" element={<CaseStudies />}/>
        <Route  path="/case-studies/:id" element={<CaseStudy />}/>
        <Route  path="/services" element={<Service />}/>
        <Route  path="/contact" element={<Contact />}/>
        <Route  path="/blog" element={<Blog />}/>
        <Route  path="/career" element={<Career />}/>
        <Route  path="/about" element={<About />}/>
        <Route  path="/*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </>
  );
};
export default App;
