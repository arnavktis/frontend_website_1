import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Header() {
  // Capitalized the function name to follow convention
  const [menuOpen, setMenuOpen] = useState(false);
  const [crossOpen, setCrossOpen] = useState(false);
  const [tabNum, setTabNum] = useState(1);
    const getTabNum = (option) => {
        setTabNum(option);
    };
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
            <div className="menu" onClick={() =>{setMenuOpen(true); setCrossOpen(true);}}>
              <span className={menuOpen ? "hide" : ""}></span>
              <span className={menuOpen ? "hide" : ""}></span>
              <span className={menuOpen ? "hide" : ""}></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
              {crossOpen && (<li className="cross" onClick={() =>{setMenuOpen(false); setCrossOpen(false);}}>
                <a>X</a>
              </li>)}
              <li onClick={() =>{setMenuOpen(false); setCrossOpen(false); getTabNum(1);}}>
                <Link to="/" className={tabNum===1 ? "active": ""}>
                  Home
                </Link>
              </li>
              <li onClick={() =>{setMenuOpen(false); setCrossOpen(false); getTabNum(2);}}>
                <Link to="/about" className={tabNum===2 ? "active": ""}>
                  About
                </Link>
              </li>
              <li onClick={() =>{setMenuOpen(false); setCrossOpen(false); getTabNum(3);}}>
                <Link to="/equipment" className={tabNum===3 ? "active": ""}>
                  Equipment
                </Link>
              </li>
              <li onClick={() =>{setMenuOpen(false); setCrossOpen(false); getTabNum(4);}}>
                <Link to="/product" className={tabNum===4 ? "active": ""}>
                  Products
                </Link>
              </li>
              <li onClick={() =>{setMenuOpen(false); setCrossOpen(false); getTabNum(5);}}>
                <a href="/contact" className={tabNum===5 ? "active": ""}>
                  Contact</a>
              </li>{" "}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
