import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper-div">
        <form>
          <img src={require("./assets/snap3.png")} />
          <h1>Log in to Snapchat</h1>
          <div className="input-box">
            <p>Username or Email</p>
            <input type="text" />
          </div>

          <div className="input-box">
            <p>Password</p>
            <input type="text" />
            <div className="forgot">
              <div></div>
              <p className="forgotp">Forgot Password</p>
            </div>
          </div>

          <button type="submit">Log In</button>
        </form>
        <h2>
          New To Snapchat? <a href="#">Sign Up</a>
        </h2>
      </div>
    );
  }
}
