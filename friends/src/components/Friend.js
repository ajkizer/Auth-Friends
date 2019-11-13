import React from "react";

const Friend = props => {
  const { name, age, email } = props;
  return (
    <div className="Friend">
      <h2 className="name">{name}</h2>
      <h3 className="age">Age: {age}</h3>
      <h3 className="email">{email}</h3>
    </div>
  );
};

export default Friend;
