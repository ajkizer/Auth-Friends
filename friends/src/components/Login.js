import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  render() {
    return (
      <div className="Login">
        <form>
          <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
          {localStorage.getItem("token") ? (
            <div className="form-content">
              <h3>You're already logged in!</h3>
              <a href="#">Go to profile</a>
            </div>
          ) : (
            <div className="form-content">
              <h3>Sign In to Profile</h3>
              <input type="text" name="username" />
              <input type="password" name="password" />
              <button>Log in</button>
            </div>
          )}
        </form>
      </div>
    );
  }
}
