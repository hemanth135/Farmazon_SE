import React from "react";

// Create component for form
export default class FormSignup extends React.Component {
  render() {
    return (
      <form method="" action="">
        <div>
          <label htmlFor="fname">First name</label>
          <input type="text" id="fname" name="fname" />
        </div>

        <div>
          <label htmlFor="lname">Last name</label>
          <input type="text" id="lname" name="lname" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign up</button>
        <div>
          Already have an account ? Login
          <a href="#">here</a>
        </div>
      </form>
    );
  }
}
