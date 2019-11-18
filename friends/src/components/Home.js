import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="text">
        <h1>PlaceHolder.</h1>
        <h3>Holding your place in the social heirarchy</h3>
        <div className="link">
          {localStorage.getItem("token") ? (
            <Link to="/FriendsList" className="link-text">
              Profile
            </Link>
          ) : (
            <Link to="/login" className="link-text">
              Login
            </Link>
          )}
        </div>
      </div>
      <div className="image">
        <img src={require("../assets/images/eaters.jpg")} />
      </div>
    </div>
  );
};

export default Home;
