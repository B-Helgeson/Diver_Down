import React, { Component } from "react";

class newLog extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

render() {
    return (
    <div className="login">
    <div className="login-content">
      <div className="row login-elem">
      <form className="col s12">
        <div className="row">
          <div className="welcomeInfo">
            <p>Welcome to Diver Down! The ultimate SCUBA dive-logging application.</p>
            <p>Log in or create an account to get started.</p> 
          </div>
        </div>

        <div className="row">
        <div className="input-field col s6">
        <input id="email" type="text" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s6">
          <input id="password" type="text" className="validate" />
          <label htmlFor="passoword">Password</label>
        </div>
        </div>

        <a className="waves-effect waves-light btn-large"><i className="mainPageBtn material-icons left">cloud</i>Create Account</a>
        <a className="waves-effect waves-light btn-large"><i className="mainPageBtn material-icons right">cloud</i>Login</a>

      </form>
    </div>
    </div>
  </div>
    );
  }}

export default newLog;
