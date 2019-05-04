import React from "react";
import { Link } from "gatsby";

import logo from "../img/itp_logo.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer__logo">
          <img src={logo} alt="itp logo" />
        </div>

        <div className="flexContainer">
          <div className="flexContainer__item">
            <section className="menu">
              <ul className="Footer_list">
                <li>
                  <h3 className="Footer__item Footer__item--title" to="/start">
                    Docs
                  </h3>
                </li>
                <li>
                  <Link className="Footer__item" to="/start">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link className="Footer__item" to="/reference">
                    API Reference
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="flexContainer__item">
            <section>
              <ul className="Footer_list">
                <li>
                  <h3 className="Footer__item Footer__item--title" to="/start">
                    Community
                  </h3>
                </li>
                <li>
                  <Link className="Footer__item" to="/experiments">
                    Experiments
                  </Link>
                </li>
                <li>
                  <Link className="Footer__item" to="/blog">
                    Tutorial
                  </Link>
                </li>
                <li>
                  <a
                    className="Footer__item"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Log In
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="flexContainer__item">
            <section>
              <ul className="Footer_list">
                <li>
                  <h3 className="Footer__item--title Footer__item" to="/start">
                    Contribute
                  </h3>
                </li>
                <li>
                  <Link className="Footer__item" to="/experiments">
                    Github
                  </Link>
                </li>
                <li>
                  <Link className="Footer__item" to="/blog">
                    Tutorials
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className="Footer__social">
          <a title="facebook" href="https://facebook.com">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="twitter" href="https://twitter.com">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="vimeo" href="https://vimeo.com">
            <img
              src={vimeo}
              alt="Vimeo"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
