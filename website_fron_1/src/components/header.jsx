import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Header() {
  // Capitalized the function name to follow convention
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            {" "}
            {/* Changed href to "/" */}
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>
            J.N. Engineering
            </h1>
          </a>

          {/* <i className="mobile-nav-toggle mobile-nav-show bi bi-list" onClick={() =>{setMenuOpen(!menuOpen)}}></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i> */}
          {/* <div className="mobile-nav-toggle mobile-nav-show bi bi-list" onClick={() =>{setMenuOpen(!menuOpen)}}>
            <console className="log">print</console>
          </div> */}


          <nav id="navbar" className="navbar">
            <div className="menu" onClick={() =>{setMenuOpen(!menuOpen);}}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blog">Blog</Link></li> */}
              <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>{" "}
              {/* Example of valid href */}
            </ul>
          </nav>
          {/* .navbar */}
        </div>
      </header>
    </div>
  );
}

export default Header; // Capitalized the component name to follow convention
