import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { tsPropertySignature } from "@babel/types";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friendslist");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.login}>
          <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
          {localStorage.getItem("token") ? (
            <div className="form-content">
              <h3>You're already Logged in!</h3>{" "}
              <a href="/friendslist">Go to profile</a>
            </div>
          ) : (
            <div className="form-content">
              <h3>Sign In to Profile</h3>
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />

              <button>Log in</button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
