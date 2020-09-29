import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Team from "./components/images/Team";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <div class="site-wrap">
        <div class="site-mobile-menu site-navbar-target">
          <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
              <span class="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>
        <Navigation />
        <Home />
        <About />
        <Products />
        <Team />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
