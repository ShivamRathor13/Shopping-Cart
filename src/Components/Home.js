import React from "react";
import "./style.css"
import Slides from "./Slides/Slides";
import Footer from "./Footer";
import Deal from "./Deal";
import Slides2 from "./Slides/Slides2";
// import Nav1 from "./Nav1";



const Home = () => {
  return (
<>
 
  <Slides/>
  <Slides2/>
  <Deal/>
  <Footer/>
  </>
  )
}

export default Home;