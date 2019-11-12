import React from "react";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <a href="/">
          <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
        </a>
      </div>
      <div className="links">
        {localStorage.getItem("token") ? (
          <div>
            <a href="#">Hello, User!</a>
            <a href="#" onClick={() => localStorage.clear()}>
              Log Out
            </a>
          </div>
        ) : (
          <div>
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
          </div>
        )}
      </div>
    </div>
  );
};
