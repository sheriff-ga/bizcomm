// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './Components/pages/about';
// import Home from "./Components/pages/Home"
// // import Services from "./Components/pages/services"
// // import Services from "./Components/pages/services"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="Home" element={<Home />} />
//       </Routes>
//       {/* <Routes>
//         <Route path="Services" element={<Services />} />
//       </Routes> */}
//       <Routes>
//         <Route path="About" element={<About />} />
//       </Routes>
//     </ Router>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/pages/about';
import Home from "./Components/pages/Home";
import Services from "./Components/pages/services"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/bizcomm" element={<App />} />
        <Route path="/bizcomm/Home" element={<Home />} />
        <Route path="/bizcomm/About" element={<About />} />
        <Route path="/bizcomm/Services" element={<Services />} />

      </Routes>
    </Router>
  </React.StrictMode>
);


