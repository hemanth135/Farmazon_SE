import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
// Create component for form
export default class profile extends React.Component {
  render() {
    return (
      <div className="sign-up-form">
        <h1> Profile </h1>
        <form className="form" method="" action="">
          <div className="form-element">
            <label htmlFor="fname">First name</label>
            <br />
            <input value="Ram" type="text" id="fname" name="fname" />
          </div>

          <div className="form-element">
            <label htmlFor="lname">Last name</label>
            <br />
            <input value="krishna" type="text" id="lname" name="lname" />
          </div>

          <div className="form-element">
            <label htmlFor="email">Email</label>
            <br />
            <input
              value="ramkrishna@gmail.com"
              type="email"
              id="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-element">
            <label htmlFor="street">Street</label>
            <br />
            <input value="Shamirpet" type="text" id="street" name="street" />
          </div>

          <div className="form-element">
            <label htmlFor="city">City</label>
            <br />
            <input value="Hyderabad" type="text" id="city" name="city" />
          </div>

          <div className="form-element">
            <label htmlFor="state">State</label>
            <br />
            <input value="Telangana" type="text" id="state" name="state" />
          </div>

          <div className="form-element">
            <label htmlFor="contact">Contact</label>
            <br />
            <input
              value="9101201000"
              type="number"
              id="contact"
              name="contact"
            />
          </div>
          <div className="button"></div>
        </form>
      </div>
    );
  }
}
