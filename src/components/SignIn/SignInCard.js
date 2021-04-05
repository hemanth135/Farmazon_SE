import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../App.module.css";
import inputCSS from "../../layouts/StandardInput.module.css";
import SignInCSS from "./SignInCard.module.css";
// import { ReactComponent as Checked } from "../assets/checked-brown.svg";

class SignInCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      success: false,
      error: "",
    };
  }

  signIn() {
    axios
      .post(
        "/api/signin",
        {
          email: this.state.email,
          password: this.state.password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        if (data.status === 200) {
          // console.log(data.data.user);
          this.setState({ success: true });
        }
      })
      .catch((err) => {
        // console.log(err.response.data);
        this.setState({ error: err.response.data.err });
      });
  }

  render() {
    return (
      <div className={SignInCSS.maincard}>
        <div className={SignInCSS.topbox}>
          <h1 style={{ color: "var(--black-2)" }}>Sign&nbsp;In</h1>
        </div>
        {/* <StandardInput
          type="text"
          name="Username"
          placeholder="Type your Username..."
          marginT={42}
          marginL={20}
          width={536}
        />
        <StandardInput
          type="password"
          name="Password"
          placeholder="Type your Password..."
          marginT={42}
          marginL={20}
          width={536}
        /> */}
        <div
          className={inputCSS.box}
          style={{
            marginTop: 42,
            marginLeft: 20,
            width: 536,
          }}
        >
          <h4 className={inputCSS.name}>Email</h4>
          <input
            className={inputCSS.input}
            type="text"
            placeholder="Type your Email..."
            style={{ width: 536 }}
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div
          className={inputCSS.box}
          style={{
            marginTop: 42,
            marginLeft: 20,
            width: 536,
          }}
        >
          <h4 className={inputCSS.name}>Password</h4>
          <input
            className={inputCSS.input}
            type="password"
            placeholder="Type your Password..."
            style={{ width: 536 }}
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        {/* <div className={SignInCSS.underpassword}>
        <div className={SignInCSS.remember}>
          <div className={SignInCSS.rememberBox}>
            <Checked className={SignInCSS.Checked} />
          </div>
          <caption className={SignInCSS.rememberText}>Remember&nbsp;Me</caption>
        </div>
        <div>
          <caption className={SignInCSS.forgotpass}>
            Forgot&nbsp;Password?
          </caption>
        </div>
      </div> */}
        <div className={SignInCSS.accountcheck}>
          <h6>Do&nbsp;not&nbsp;have&nbsp;an&nbsp;account&nbsp;yet?</h6>
          <Link className="link" to="/signup">
            <caption>Create&nbsp;account</caption>
          </Link>
        </div>
        <div className={SignInCSS.errorMessage}>{this.state.error}</div>
        <div onClick={this.signIn.bind(this)} className={SignInCSS.loginbtn}>
          {this.state.success === false ? (
            <h3>Login</h3>
          ) : (
            <Link style = {{}}to="/profile">
              <h3>Login</h3>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
export default SignInCard;
