import React from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import "./components/css/index.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/friendslist" component={FriendsList} />
    </div>
  );
}

export default App;
