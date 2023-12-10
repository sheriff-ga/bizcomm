// <!DOCTYPE HTML>
// <html>
// 	<head>
// 		<title>About us</title>
// 		<meta charset="utf-8"><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
// 		<meta name="viewport" content="width=device-width, initial-scale=1"><!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
// 		<link rel="stylesheet" href="/assets/css/main.css"><!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]--><!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
// 	</head>
	
// 	<body>

// 		<!-- Header -->
// 			<header id="header"><h1><a href="index.html">Bizcom-Logo</a></h1>
// 				<a href="#nav">Menu</a>
// 			</header><!-- Nav --><nav id="nav"><ul class="links"><li><a href="index.html">Home</a></li>
// 					<li><a href="about.html">About US</a></li>
// 					<li><a href="elements.html">Elements</a></li>
// 				</ul></nav><!-- Main --><section id="main" class="wrapper"><div class="container">

// 					<header class="major special"><h2>About US</h2>
// 						<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
// 					</header><a href="#" class="image fit"><img src="/images/pic11.jpg" alt="" width="1680" height="658"></a>
// 					<h3>About</h3>
// 					<p>Vis accumsan feugiat adipiscing nisl amet adipiscing accumsan blandit accumsan sapien blandit ac amet faucibus aliquet placerat commodo. Interdum ante aliquet commodo accumsan vis phasellus adipiscing. Ornare a in lacinia. Vestibulum accumsan ac metus massa tempor. Accumsan in lacinia ornare massa amet. Ac interdum ac non praesent. Cubilia lacinia interdum massa faucibus blandit nullam. Accumsan phasellus nunc integer. Accumsan euismod nunc adipiscing lacinia erat ut sit. Arcu amet. Id massa aliquet arcu accumsan lorem amet accumsan.</p>
// 					<h3>The Mission</h3>
// 					<p>Amet nibh adipiscing adipiscing. Commodo ante vis placerat interdum massa massa primis. Tempus condimentum tempus non ac varius cubilia adipiscing placerat lorem turpis at. Aliquet lorem porttitor interdum. Amet lacus. Aliquam lobortis faucibus blandit ac phasellus. In amet magna non interdum volutpat porttitor metus a ante ac neque. Nisi turpis. Commodo col. Interdum adipiscing mollis ut aliquam id ante adipiscing commodo integer arcu amet Ac interdum ac non praesent. Cubilia lacinia interdum massa faucibus blandit nullam. Accumsan phasellus nunc integer. Accumsan euismod nunc adipiscing lacinia erat ut sit. Arcu amet. Id massa aliquet arcu accumsan lorem amet accumsan commodo odio cubilia ac eu interdum placerat placerat arcu commodo lobortis adipiscing semper ornare pellentesque.</p>
// 					<h3>The Vision</h3>
// 					<p>Amet nibh adipiscing adipiscing. Commodo ante vis placerat interdum massa massa primis. Tempus condimentum tempus non ac varius cubilia adipiscing placerat lorem turpis at. Aliquet lorem porttitor interdum. Amet lacus. Aliquam lobortis faucibus blandit ac phasellus. In amet magna non interdum volutpat porttitor metus a ante ac neque. Nisi turpis. Commodo col. Interdum adipiscing mollis ut aliquam id ante adipiscing commodo integer arcu amet blandit adipiscing arcu ante.</p>

// 				</div>
// 			</section><!-- Footer --><footer id="footer"><div class="inner">
// 					<ul class="icons"><li><a href="#" class="icon fa-facebook">
// 							<span class="label">Facebook</span>
// 						</a></li>
// 						<li><a href="#" class="icon fa-twitter">
// 							<span class="label">Twitter</span>
// 						</a></li>
// 						<li><a href="#" class="icon fa-instagram">
// 							<span class="label">Instagram</span>
// 						</a></li>
// 						<li><a href="#" class="icon fa-linkedin">
// 							<span class="label">LinkedIn</span>
// 						</a></li>
// 					</ul></div>
// 			</footer><div class="copyright">
// 			Made with: <a href="https://templated.co/">TEMPLATED</a>
// 		</div>
// 		<!-- Scripts -->
// 			<script src="/assets/js/jquery.min.js"></script><script src="/assets/js/skel.min.js"></script><script src="/assets/js/util.js"></script><!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]--><script src="/assets/js/main.js"></script></body></html>

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import  logo  from "./BizCom-logo.png";
import img3 from "./img3.jpg"
import img2 from "./img2.jpeg"


const AboutPage = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div className={`landing ${isNavOpen ? 'is-nav-open' : ''}`}>
        <header id="header" className="alt">
          <h1><a href="Home"><img src={logo} alt="BizCom Logo"/></a></h1>
          <a href="#nav" className="close" onClick={handleNavToggle}>Menu</a>
        </header>

      <nav id="nav" className={`close ${isNavOpen ? 'visible' : ''}`}>
        <ul className="links">
          <li><a><Link to="/Home">Home</Link></a></li>
          <li><a><Link to="/about">About US</Link></a></li>
          <li><a href="elements.html"><Link to="/Services">Services</Link></a></li>
        </ul>
        <a href="#nav" className="close" onClick={handleNavToggle}></a>
      </nav>

        {/* Main */}
        <section id="main" className="wrapper">
          <div className="container">
            <header className="major special">
              <br /> <br />

              <h2>About US</h2>
              <p>
                Welcome to BizCom InfoTech Limited - Your Gateway to Seamless Innovation in the Digital Landscape!
              </p>
            </header>

            <div id='about-img'>
              <img
                src={img3}
                alt=""
                width="100%"
                height="100%"
              />
            </div>

<br /> <br /> <br /> <br />
            <h3>Our Journey:</h3>
            <p>
            Established by a dynamic team of seasoned professionals, 
            BizCom has evolved into a market leader by blending years 
            of collective experience with a youthful and innovative approach. 
            Since our inception, we have been unwavering in our commitment to delivering 
            top-notch services that cater to the diverse needs of our clients. 
            Our journey is a testament to our dedication to excellence and our relentless 
            pursuit of customer satisfaction. <br /> <br />

            At BizCom, experience is not just a number; 
            it is a foundation upon which we build success stories. 
            With a cumulative wealth of experience, our team brings a nuanced
             understanding of the ever-changing landscape of Information Technology. 
             This extensive experience empowers us to foresee challenges, adapt swiftly 
             to industry trends, and provide solutions that stand the test of time.
            </p>

            <h3>The Mission</h3>
            <p>
              At BizCom InfoTech Limited, our mission is to empower businesses by
               seamlessly integrating cutting-edge technology into their operations. 
               We are dedicated to providing innovative, reliable, and customized IT 
               solutions that propel our clients towards sustainable growth. 
               Our mission is grounded in a commitment to excellence, timely delivery, 
               and fostering long-term partnerships with our clients. We strive to be a catalyst 
               for positive change in the digital landscape, driving efficiency, productivity, 
               and success for businesses across diverse industries.
            </p>

            <h3>The Vision</h3>
            <p>
              Our vision at BizCom InfoTech Limited is to be a global leader in Information Technology, 
              recognized for our unwavering commitment to innovation, quality, and customer satisfaction. 
              We aspire to create a digital ecosystem where businesses thrive through seamless integration 
              of technology, setting new benchmarks for excellence in the industry. 
              By staying at the forefront of emerging technologies, we aim to be the preferred partner 
              for businesses seeking transformative and future-ready IT solutions. Our vision propels us 
              to continually evolve, adapt, and contribute meaningfully to the success of our clients in 
              an ever-changing digital landscape.
            </p>

            <h3>Quality Service, Timely Delivery:</h3>
            <p>BizCom is synonymous with quality service delivered promptly. 
              Timeliness is not just a goal; it is a commitment we uphold. 
              We understand the value of time in the fast-paced digital world, 
              and our streamlined processes ensure that our solutions are not only 
              top-notch but also delivered within the stipulated timelines.</p>

            <h3>Competitive Prices, Unmatched Value:</h3>
            <p>Our commitment to excellence does not come at a hefty price. 
              At BizCom, we believe in providing competitive prices without 
              compromising on the quality of our services. We understand the 
              importance of delivering value to our clients, and our pricing reflects 
              our dedication to making cutting-edge technology accessible to businesses of all sizes.</p>

            <h3>Customer-Centric Philosophy:</h3>
            <p>At the core of our ethos is a customer-centric philosophy. 
              Your success is our success, and we go the extra mile to ensure that 
              our solutions contribute positively to your business goals. 
              We pride ourselves on building lasting relationships with our clients, 
              fostering an environment of trust and collaboration.</p>

            <h3>Visit/Contact Us Today:</h3>
            <p>Embark on a transformative journey with BizCom InfoTech Limited. 
              Visit or contact us today, and let our team of experienced, dedicated, 
              and young professionals help you navigate the digital landscape with confidence. 
              Discover the BizCom advantage - where innovation meets excellence, and your success is our priority.</p>

            <h4>Seamlessly integrating innovation into your digital landscape – BizCom InfoTech Limited, your trusted partner in technology!</h4>

          </div>
        </section>

        {/* Footer */}
        <footer id="footer">
          <div className="inner">
            <ul className="icons">
              <li>
                <a href="#" className="icon fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-linkedin">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
  );
};

export default AboutPage;
