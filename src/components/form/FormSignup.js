import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
// Create component for form
export default class FormSignup extends React.Component {
  render() {
    return (
      <div className="sign-up-form">
        <h1> Sign Up </h1>
        <form className="form" method="" action="">
          <div className="form-element">
            <label htmlFor="fname">First name</label>
            <br />
            <input
              placeholder="Type your First Name"
              type="text"
              id="fname"
              name="fname"
            />
          </div>

          <div className="form-element">
            <label htmlFor="lname">Last name</label>
            <br />
            <input
              placeholder="Type your Last Name"
              type="text"
              id="lname"
              name="lname"
            />
          </div>

          <div className="form-element">
            <label htmlFor="email">Email</label>
            <br />
            <input
              placeholder="Type your email id"
              type="email"
              id="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-element">
            <label htmlFor="password">Password</label>
            <br />
            <input
              placeholder="Type your password"
              type="password"
              id="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-element">
            <label htmlFor="street">Street</label>
            <br />
            <input
              placeholder="Type your street name"
              type="text"
              id="street"
              name="street"
            />
          </div>

          <div className="form-element">
            <label htmlFor="city">City</label>
            <br />
            <input
              placeholder="Type your city name"
              type="text"
              id="city"
              name="city"
            />
          </div>

          <div className="form-element">
            <label htmlFor="state">State</label>
            <br />
            <input
              placeholder="Type your state name"
              type="text"
              id="state"
              name="state"
            />
          </div>

          <div className="form-element">
            <label htmlFor="contact">Contact</label>
            <br />
            <input
              placeholder="Type your contact"
              type="number"
              id="contact"
              name="contact"
            />
          </div>
          <Link to="/">
            <button type="submit">Sign up</button>
          </Link>
          <p>
            Already have an account ? Login{" "}
            <Link className="here" to="/">
              here
            </Link>
          </p>
        </form>
      </div>
    );
  }
}
