import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="title">Farmazon</div>
        <ul className="menu">
          <li>
            <Link className="link" to="/profile">
              MY PROFILE
            </Link>
          </li>
          <li>
            <Link className="link" to="/sellCrops">
              SELL CROPS
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
