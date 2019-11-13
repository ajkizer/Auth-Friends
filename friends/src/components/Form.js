import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Redirect } from "react-router-dom";

const Form = () => {
  const [newFriend, setNewFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  const submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(() => window.location.reload());
  };

  const changeHandler = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <form autofill="off" onSubmit={submitHandler}>
        <input
          autocomplete="off"
          type="text"
          name="name"
          placeholder="Name"
          value={newFriend.name}
          onChange={changeHandler}
        />
        <input
          autocomplete="off"
          type="number"
          placeholder="Age"
          name="age"
          value={newFriend.age}
          onChange={changeHandler}
        />
        <input
          autocomplete="off"
          text="email"
          name="email"
          placeholder="Email"
          value={newFriend.email}
          onChange={changeHandler}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default Form;
