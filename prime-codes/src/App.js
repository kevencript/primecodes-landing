import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//components import
import Header from "./components/Header/index";
import LandingPage from "./pages/landing/index";
import Footer from "./components/Footer/index";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <LandingPage exact path="/" component={LandingPage} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
