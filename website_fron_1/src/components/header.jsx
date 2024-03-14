import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() { // Capitalized the function name to follow convention
  return (
    <div className="header">
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

          <a href="/" className="logo d-flex align-items-center"> {/* Changed href to "/" */}
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>UpConstruction<span>.</span></h1>
          </a>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="/" className="active">Home</a></li> {/* Changed href to "/" */}
              <li><a href="/about">About</a></li> {/* Example of valid href */}
              <li><a href="/services">Services</a></li> {/* Example of valid href */}
              <li><a href="/projects">Projects</a></li> {/* Example of valid href */}
              <li><a href="/blog">Blog</a></li> {/* Example of valid href */}
              <li className="dropdown">
                <a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className="dropdown">
                    <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="/contact">Contact</a></li> {/* Example of valid href */}
            </ul>
          </nav>{/* .navbar */}
        </div>
      </header>

    </div>
  );
}

export default Header; // Capitalized the component name to follow convention
