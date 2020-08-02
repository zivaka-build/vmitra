/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          <img
            className="navbar-image"
            src={require("./../../assets/img/vm.png")}
            alt="vibha mitra"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/blogs">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/qissa">
                Qissaa Buddy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
