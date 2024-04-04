import React from 'react';
import img from './img.png';
import img2 from './img2.png';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import './App.css';

function App() {
  return (
    <>
      <div className="nav-bar">
        <img src={img} alt="img" className="smaller-image" />
        <h1 className="heading-1"> WEB MAGNETISM  </h1>
        <p className="paragraph-1">Transforming Businesses with unique Web design and <br /> strategic digital marketing for impactful online visibility.</p>
        <button className="button-1">Get a Proposal</button>
      </div>
      <div className="section-2-container">
        <div className="text-container">
          <h2 className="heading-2"> Welcome to Web Magnetism </h2>
          <p className="paragraph-2">Your hub for bespoke web design and digital marketing success. We seamlessly merge creativity and SEO expertise to craft visually stunning websites that magnetize audiences.
            Our digital marketing, from SEO mastery to impactful campaigns, ensures your brand's resonance online. At Web Magnetism, we're not just designers; we're digital architects, sculpting unique online experiences that elevate your brand.
            Navigate the digital landscape with confidence – choose Web Magnetism for tailored web design and strategic digital marketing, where innovation meets results for a compelling online journey.</p>
        </div>
        <div className="images-container">
          <img src={pic1} alt="pic1" className="section-2-image1" />
          <img src={pic2} alt="pic2" className="section-2-image2" />
        </div>
      </div>
      <div className="Section-3">
        <h2>An Integrated Team for unique Web design and strategic digital marketing </h2>
        <p>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean <br /> aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam <br /> accumsan vestibulum in sit m accumsan.</p>
        <img src={img2} alt="img" className="image-2" />
      </div>
      <div className="Section-4">
        <h2>Why Choose Us</h2>
      </div>
    </>
  );
}

export default App;
