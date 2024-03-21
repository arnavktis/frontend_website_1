import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Header() {
  // Capitalized the function name to follow convention
  const [menuOpen, setMenuOpen] = useState(false);
  const [crossOpen, setCrossOpen] = useState(false);
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

          <nav id="navbar" className="navbar">
            <div className="menu" onClick={() =>{setMenuOpen(!menuOpen); setCrossOpen(!crossOpen);}}>
              <span className={menuOpen ? "hide" : ""}></span>
              <span className={menuOpen ? "hide" : ""}></span>
              <span className={menuOpen ? "hide" : ""}></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
              {crossOpen && (<li className="cross" onClick={() =>{setMenuOpen(!menuOpen); setCrossOpen(!crossOpen);}}>
                <a >X</a>
              </li>)}
              <li onClick={() =>{setMenuOpen(!menuOpen); setCrossOpen(!crossOpen);}}>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li onClick={() =>{setMenuOpen(!menuOpen); setCrossOpen(!crossOpen);}}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() =>{setMenuOpen(!menuOpen); setCrossOpen(!crossOpen);}}>
                <Link to="/equipment">Equipment</Link>
              </li>
              <li onClick={() =>{setMenuOpen(!menuOpen); setCrossOpen(!crossOpen);}}>
                <Link to="/product">Products</Link>
              </li>
              <li onClick={() =>{setMenuOpen(!menuOpen); setCrossOpen(!crossOpen);}}>
                <a href="/contact">Contact</a>
              </li>{" "}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
