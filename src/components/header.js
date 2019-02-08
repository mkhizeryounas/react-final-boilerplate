import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              width="35"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            {/* CodexTech */}
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/welcome/Omer Waheed">
                  Second
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="load-bar">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    );
  }
}

export default Header;
