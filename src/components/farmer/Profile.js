import React from "react";
import { Link } from "react-router-dom";
import '../../index.css';
import "./profile.css";
// Create component for form
export default class profile extends React.Component {
  render() {
    return (
      <div className="profile-page-rect">
        <div className="profile-card">
          <p className="p2 title">Profile</p>
          <div className="title-seperator"></div>
          <form className="profile-form" method="" action="">
            <div className="profile-grid">
              <div className="profile-form-element">
                <h4 className="field-label">First name</h4>
                <input className="p2 profile-input" placeholder="Ram" type="text" id="fname" name="fname" />
              </div>

              <div className="profile-form-element">
                <h4 className="field-label">Last name</h4>
                <input className="profile-input" placeholder="krishna" type="text" id="lname" name="lname" />
              </div>

              <div className="profile-form-element">
                <h4 className="field-label">Email</h4>
                <input
                className="profile-input"
                  placeholder="ramkrishna@gmail.com"
                  type="email"
                  id="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="profile-form-element">
                <h4 className="field-label">Contact</h4>
                <input
                className="profile-input"
                  placeholder="9101201000"
                  type="tel"
                  id="contact"
                  name="contact"
                />
              </div>
            </div>

            <div className="address-wrapper">
              <h4 className="h4 field-label" style={{marginLeft:'24px'}}>Address</h4>
              <div className="address-fields-wrapper">
                  <input className="address-input" placeholder="Shamirpet" type="text" id="street" name="street" style={{gridColumn:'span 2'}} />

                  <input className="address-input" placeholder="Hyderabad" type="text" id="city" name="city" />

                  <input className="address-input" placeholder="Telangana" type="text" id="state" name="state" />
                <div className="button"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
