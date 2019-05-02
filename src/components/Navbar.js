import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/ml5_logo_purple.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="Navbar navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="Navbar__brand navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="ml5.js logo" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`Navbar__menu ${this.state.navBarActiveClass}`}
          >
            <div className="Navbar__itemContainer">
              <Link className="navbar-item" to="/start">
                Getting Started
              </Link>
              <Link className="navbar-item" to="/reference/api-Pix2Pix/">
                Reference
              </Link>
              <Link className="navbar-item" to="/community">
                Community
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>

              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              {/*<Link className="navbar-item" to="/contact/examples">*/}
              {/*  Form Examples*/}
              {/*</Link>*/}
            </div>
            <div className="Navbar__itemContainer">
              <a
                className="navbar-item"
                href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
