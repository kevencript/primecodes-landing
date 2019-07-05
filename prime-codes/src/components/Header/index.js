import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./style.css";

class Header extends Component {
  // JSX stuff
  render() {
    return (
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} />
              <h2>PrimeCodes</h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Início
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/quem-somos">
                    Quem Somos?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Header;
