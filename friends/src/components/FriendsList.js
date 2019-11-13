import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import Form from "./Form";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      });
  }, []);

  console.log(friends);

  return (
    <div className="FriendsList-container">
      <div className="Friendlist-form">
        <h2>Don't see your friend? Add them!</h2>
        <Form />
      </div>
      <div className="FriendList">
        {friends.map(friend => {
          return (
            <Friend
              name={friend.name}
              age={friend.age}
              email={friend.email}
              key={friend.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FriendsList;
