import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import classnames from "classnames";
import "./style.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navbarShadow: false,
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  handleScrollVisibility() {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    console.log(this.state);
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  }

  handleScrollShadow() {
    const navStatus = document.documentElement.scrollTop > 30;
    this.setState({ navbarShadow: navStatus });
  }

  componentDidMount() {
    window.onscroll = () => [
      this.handleScrollShadow(),
      this.handleScrollVisibility()
    ];
  }

  // JSX stuff
  render() {
    return (
      <section id="nav-bar">
        <nav
          className={classnames(
            "navbar",
            { "navbar--shadow": this.state.navbarShadow },
            { "navbar--hidden": !this.state.visible },
            "navbar-expand-lg"
          )}
        >
          <div className="container navbar-collapse2">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" />
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
