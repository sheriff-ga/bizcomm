import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './BizCom-logo.png';
import img3 from './img3.jpg';

const Services = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const handleAlert = () => {
    alert('Opps, we are working on our social media pages at the moment. kindly stay tuned.');
  }

  return (
    <div className={`landing ${isNavOpen ? 'is-nav-open' : ''}`}>
      {/* Header */}
      <header id="header" className="alt">
        <h1>
          <a href="/bizcomm">
            <img src={logo} alt="BizCom Logo" />
          </a>
        </h1>
        <a href="#nav" className="close" onClick={handleNavToggle}>
          Menu
        </a>
      </header>

      {/* Navigation */}
      <nav id="nav" className={`close ${isNavOpen ? 'visible' : ''}`}>
        <ul className="links">
          <li><a><Link to="/bizcomm" style={{textDecoration : "none"}}>Home</Link></a></li>
          <li><a><Link to="/bizcomm/about" style={{textDecoration : "none"}}>About US</Link></a></li>
          <li><a ><Link to="/bizcomm/services" style={{textDecoration : "none"}}>Services</Link></a></li>
        </ul>
        <a href="#nav" className="close" onClick={handleNavToggle}></a>
      </nav>

      {/* Main Content */}
      <section id="main" className="wrapper">
        <div className="container">
          <header className="major special">
            <br /> <br />
            <h2>Services</h2>
            <p>Welcome to BizCom InfoTech Limited - Your Premier Partner for Comprehensive IT Solutions!</p>
          </header>

        

          <div id="about-img">
            <img src={img3} alt="" width="100%" height="100%" />
          </div>

          <br /> <br /> <br /> <br />

          <p>
            At BizCom, we take pride in offering a diverse range of cutting-edge IT services tailored to meet the dynamic
            needs of businesses and individuals. With a steadfast commitment to excellence, our extensive portfolio
            encompasses a wide spectrum of business activities, ensuring that we are your one-stop destination for all
            things IT.
          </p>

          <h3>Our Core Services:</h3>

          {/* Services */}
          <p>
            <strong>1. Networking and Structure Cabling Solutions:</strong>
            <br />
            We specialize in providing robust networking and structured cabling solutions, ensuring seamless connectivity
            for your business operations.
          </p>

          <p>
            <strong>2. Service Level Agreement (SLA) Provision:</strong>
            <br />
            Tailored SLAs designed to meet the specific requirements of companies, guaranteeing reliable and prompt
            support when you need it most.
          </p>

          <p>
            <strong>3. Security CCTV Cameras:</strong>
            <br />
            From sales and installation to maintenance, we deliver comprehensive solutions for your security CCTV camera
            needs, enhancing your surveillance infrastructure.
          </p>

          <p>
            <strong>4. Desktop PC Hardware and Software Support:</strong>
            <br />
            Sales, installation, and maintenance of desktop PC hardware and software support to keep your systems running
            efficiently.
          </p>

          <p>
            <strong>5. Network Design and Implementation:</strong>
            <br />
            Expertise in designing and implementing diverse networks, including LAN, WAN, and wireless solutions such as
            Mikrotik Radio and Power Station Radio.
          </p>

          <p>
            <strong>6. Computer Systems and Accessories:</strong>
            <br />
            Sales, installation, and services of a wide range of computer systems and accessories, including laptops,
            desktop computers, printers, scanners, and more.
          </p>

          <p>
            <strong>7. Printers Ink and Toner Cartridge Supply:</strong>
            <br />
            Reliable supply of original printers ink and toner cartridges at affordable prices, ensuring the smooth
            operation of your printing devices.
          </p>

          <p>
            <strong>8. Sharp Photocopy Machine Supply and Maintenance:</strong>
            <br />
            Supply and maintenance of Sharp Photocopy machines to meet your copying needs efficiently.
          </p>

          <p>
            <strong>9. Database Management Systems:</strong>
            <br />
            Expertise in developing and managing robust database systems, providing secure and efficient data management
            solutions.
          </p>

          <p>
            <strong>10. Software and Hardware Sales and Maintenance:</strong>
            <br />
            Sales and maintenance of original software and hardware, including Microsoft OEM products, to keep your IT
            infrastructure up-to-date.
          </p>

          <p>
            <strong>11. Web Design, Maintenance, and Hosting:</strong>
            <br />
            Creative and functional web design, coupled with reliable maintenance and hosting services for a strong online
            presence.
          </p>

          <p>
            <strong>12. Application Programmed Development:</strong>
            <br />
            Customized application development to address your unique business requirements.
          </p>

          <p>
            <strong>13. Technical Support, Maintenance & Repair:</strong>
            <br />
            Responsive technical support, maintenance, and repair services to ensure the continuous operation of your IT
            systems.
          </p>

          <p>
            <strong>14. IT Consultancy and Project Management:</strong>
            <br />
            Strategic IT consultancy and project management services to guide your business towards technological
            excellence.
          </p>

          <p>
            <strong>15. Comprehensive Maintenance for Organizations:</strong>
            <br />
            Offering comprehensive and preventive maintenance services to Corporate Organizations, Government entities, and
            Individuals.
          </p>

          {/* Conclusion */}
          <p>
            At BizCom, we blend expertise with innovation to deliver unparalleled IT solutions. Whether you are a
            corporate entity, government organization, or an individual, our commitment is to provide reliable,
            efficient, and cost-effective services that elevate your IT experience. Partner with us for a transformative
            journey into the realm of cutting-edge technology. Your success is our priority, and at BizCom, we make IT
            happen!
          </p>

          <h4>Seamlessly integrating innovation into your digital landscape – BizCom InfoTech Limited, your trusted partner
            in technology!</h4>
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

export default Services;
