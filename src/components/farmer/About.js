import React, { Component } from "react";
import "./about.css";
class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="image-container">
          <div className="image"></div>
        </div>
        <div className="text-container">
          <div className="about-title">Farmazon</div>
          <p className="about-description">
            We are all about integration and convenience to hardworking farmers.
          </p>
          <ul className="list">
            <li>
              Bringing the customer and farmer one step closer. Reducing hassle
              and improving transparency.
            </li>
            <li>Best prices. No middlemen. Straight from the state</li>
            <li>A sleek website that is easy to use and just as useful.</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default About;
