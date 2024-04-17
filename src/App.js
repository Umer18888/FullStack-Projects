import React from 'react';
import img from './img.png';
import img2 from './img2.png';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import vimage1 from './vImage-1.jpg';
import vimage2 from './vImage-2.jpg';
import vimage3 from './vImage-3.jpg';
import './App.css';

function App() {
  return (
    <>
    <section className="Section-1">
      <div >
        <img src={img} alt="img" className="smaller-image" />
        <h1 className="heading-1"> WEB MAGNETISM  </h1>
        <p className="paragraph-1">Transforming Businesses with unique Web design and <br /> strategic digital marketing for impactful online visibility.</p>
        <button className="button-1">Get a Proposal</button>

        {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg> */}

        </div>
      </section>
      <section>
      
      <div className="Section-2">
      {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg> */}
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
      </section>
      <section>
      <div className="Section-3">
        <h2>An Integrated Team for unique Web design and strategic digital marketing </h2>
        <p>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean <br /> aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam <br /> accumsan vestibulum in sit m accumsan.</p>
        <img src={img2} alt="img" className="image-2" />
      </div>
      </section>
      <section>
      <div className="Section-4">
        <h2>Why Choose Us</h2>
      </div>
      </section>
      <section className='Section-5'>
      <div className="text-container">
          <h2 className="heading-5"> Our bespoke website <br></br> include the fllowing</h2>
          <p className="paragraph-5">Lorem ipsum dolor sit amet consectetur. Blandit sodales <br></br> lacus vulputate aenean aliquam accumsan vestibulum in sit <br></br> Blandit sodales lacus vulputate aenean aliquam accumsa</p>
        </div>
      </section>
      <section className="Section-6">
        <h1 className="Service-heading"> Overview of Services</h1>
      <div class="row">
  <div className="column">
    <img src={vimage1} alt="img" className="VerticalImages"/>
    <h2>Bespoke Web Design</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </p>
    <button className="Service-Button">Bespoke Web Design</button>
  </div>
  <div className="column">
    <img src={vimage2} alt="img" className="VerticalImages" />
    <h2>App Development</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat  </p>
    <button className="Service-Button">App Development</button>
  </div>
  <div className="column">
    <img src={vimage3} alt="img" className="VerticalImages" />
    <h2>Digital Marketing</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </p>
    <button className="Service-Button">Digital Marketing</button>
  </div>
  </div>
      </section>

  <div className="logo-div">

  </div>
    </>


  );
}

export default App;
