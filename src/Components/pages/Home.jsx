import React, { useState } from 'react';
import { Link } from "react-router-dom";
import  logo  from "./BizCom-logo.png";
import img1 from "./img1.jpg"
import img2 from "./img2.jpeg"


const Home = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const handleAlert = () => {
    alert('Opps, we are working on our social media pages at the moment. kindly stay tuned.');
  }

  return (
    <div className={`landing ${isNavOpen ? 'is-nav-open' : ''}`}>
        <header id="header" className="alt">
          <h1><a href="/bizcomm"><img src={logo} alt="BizCom Logo"/></a></h1>
          <a href="#nav" className="close" onClick={handleNavToggle}>Menu</a>
        </header>

      <nav id="nav" className={`close ${isNavOpen ? 'visible' : ''}`}>
        <ul className="links">
          <li><a><Link to="/bizcomm" style={{textDecoration : "none"}}>Home</Link></a></li>
          <li><a><Link to="/bizcomm/about" style={{textDecoration : "none"}}>About US</Link></a></li>
          <li><a ><Link to="/bizcomm/services" style={{textDecoration : "none"}}>Services</Link></a></li>
        </ul>
        <a href="#nav" className="close" onClick={handleNavToggle}></a>
      </nav>

      <section id="banner">
        {/* <i className="icon fa-laptop"></i> */}
        <h2>BizCom InfoTech Limited</h2>
        <p style={{ textTransform: 'none' }}> Seamlessly Integrating Innovation into Your Digital Landscape.</p> <br />
        <p>We are an Information Technology company based in Osun state, <br />
        visit/contact us today and let us help you!</p>
        <ul className="actions">
          <li><a href="#contact-us" className="button big special">Contact Us</a></li>
        </ul>
      </section>

      {/* One */}
      <section id="one" className="wrapper style1">
        <div className="inner">
          <article className="feature left">
            <span className="image">
              <img src={img1} alt="Image 1" width="500" height="400" />
              </span>
            <div className="content">
              <h2>About US</h2>
              <p>BizCom, a company established by a team of experienced, dedicated and young professionals to deliver quality service to our customers timely and at competitive prices...</p>
              <ul className="actions">
                <li><a href="/bizcomm/about" className="button alt">More</a></li>
              </ul>
            </div>
          </article>
          <article className="feature right">
            <span className="image"><img src={img2} alt="image 2" width="600" height="500" /></span>
            <div className="content">
              <h2>Our Founder</h2>
              <p>Meet Adebayo Azeez, the innovative mind behind the undisputable technological web services being rendered BizCom InfoTech.  <br />After imparting knowledge for nearly two decades at the University of Ilesa, this seasoned lecturer possesses a wealth of expertise and is ready to offer additional valuable services to the global community.</p>
              <ul className="actions">
                <li><a href="/bizcomm/services" className="button alt">More</a></li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Two */}
      <section id="two" className="wrapper special">
        <div className="inner">
          <header className="major narrow">
            <h2>Services</h2>
          </header>
          <p id="pServices">At BizCom, our unwavering dedication to excellence defines our commitment to delivering superior services. 
              With nearly unparalleled expertise gained over years of service, 
              we take pride in extending our offerings to meet the diverse needs of our valued clientele. <br /> <br />
              Click on the button or any of the texts below to see more on our services.</p>
          <div className="">
            {/* Add your image grid elements here */}
            {/* <a href="#" className="image"><img src={img1} alt="" width="299" height="200" /></a>
            <a href="#" className="image"><img src={img1} alt="" width="299" height="200" /></a>
            <a href="#" className="image"><img src={img1} alt="" width="299" height="200" /></a>
            <a href="#" className="image"><img src={img1} alt="" width="299" height="200" /></a> */}
            <a href="/bizcomm/services" style={{textDecoration : "none", color : "#1d2227"}}>1. Web Design, Maintenance, and Hosting</a> <br /> <br />
            <a href="/bizcomm/services" style={{textDecoration : "none", color : "#1d2227"}}>2. Networking and Structure Cabling Solutions</a> <br /> <br />
            <a href="/bizcomm/services" style={{textDecoration : "none", color : "#1d2227"}}>3. Computer Systems and Accessories</a> <br /> <br />
            <a href="/bizcomm/services" style={{textDecoration : "none", color : "#1d2227"}}>4. Network Design and Implementation</a> <br /> <br />
            <a href="/bizcomm/services" style={{textDecoration : "none", color : "#1d2227"}}>5. Software and Hardware Sales and Maintenance</a> <br /> <br /> <br />
          </div>
          <ul className="actions">
            <li><a href="/bizcomm/services" className="button big alt">More</a></li>
          </ul>
        </div>
      </section>

      {/* Three */}
      {/* <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major narrow">
            <h2>Magna sed consequat tempus</h2>
            <p>Ipsum dolor tempus commodo turpis adipiscing Tempor placerat sed amet accumsan</p>
          </header>
          <ul className="actions">
            <li><a href="#" className="button big alt">Magna feugiat</a></li>
          </ul>
        </div>
      </section> */}

      {/* Four */}
      <section id="contact-us" className="wrapper style2 special">
        <div className="inner">
          <header className="major narrow">
            <h2>Get in touch</h2>
            <p>Reach out to us today!</p>
          </header>
          {/* <form action="#" method="POST">
            <div className="container 75%">
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input name="name" placeholder="Name" type="text" />
                </div>
                <div className="6u$ 12u$(xsmall)">
                  <input name="email" placeholder="Email" type="email" />
                </div>
                <div className="12u$">
                  <textarea name="message" placeholder="Message" rows="4"></textarea>
                </div>
              </div>
            </div> */}  <br /> <br />
            <ul className="actions">
              <a href="mailto:azeezjeleeladebayo@gmail.com"> <li><input type="submit" className="special" value="Send a mail!" href=""/></li></a>
              {/* <li><input type="reset" className="alt" value="Reset" /></li> */}
            </ul>
          {/* </form>  */}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li><a onClick={handleAlert} className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a onClick={handleAlert} className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a onClick={handleAlert} className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a onClick={handleAlert} className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;

