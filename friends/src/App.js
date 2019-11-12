import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import "./components/css/index.css";

function App() {
  return (
    <div className="App">
      <Route path="/" components={NavBar} />
    </div>
  );
}

export default App;
