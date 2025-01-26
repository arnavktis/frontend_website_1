import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import About from "./components/About";
import HeroSection from "./components/heroSection";
import GetStarted from "./components/getStarted";
import Equipment_Main from "./components/equipment_main";
import Products_Main from "./components/products_main";
import Feature from "./components/features";
import Footer from "./components/footer";
import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/vendor/bootstrap/css/bootstrap-grid.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./App.css";
import Equipment from "./components/Equipments";
import Products from "./components/Products";
import Contact from "./components/Contacts";

function Content() {
  return (
    <div>
      <HeroSection></HeroSection>
      <GetStarted></GetStarted>
      <Feature></Feature>
      <Equipment_Main></Equipment_Main>
      <Products_Main></Products_Main>
      {/* <Services></Services> */}
      {/* <AltServices></AltServices> */}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route path="/About" element={<About />} />
          <Route path="/Equipment" element={<Equipment />} />
          <Route path="/Product" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
