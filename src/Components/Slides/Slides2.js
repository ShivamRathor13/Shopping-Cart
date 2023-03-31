import SimpleImageSlider from "react-simple-image-slider";
import React from "react";

const images = [
  { url: "/Images/Slide/slide3.jpg" },
  { url: "/Images/Slide/R.png"},
  { url: "/Images/Slide/R2.jpeg" },
  { url: "/Images/Slide/slide4.jpg" },
];

const  Slides2= () => {
  return (
    <div className="slidecontainer2">
      <SimpleImageSlider
        width={853}
        height={420}
        style={String}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}
export default Slides2;