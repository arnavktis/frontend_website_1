import React from "react";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import GetStarted from "./components/getStarted";
import Construction from "./components/construction";
import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/vendor/bootstrap/css/bootstrap-grid.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <head>
          {/* Favicons */}
          <link href="" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

          {/* Google font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </head>
        <Header></Header>
        <HeroSection></HeroSection>
        <GetStarted></GetStarted>
        <Construction></Construction>
      </body>
    </div>
  );
}

export default App;
