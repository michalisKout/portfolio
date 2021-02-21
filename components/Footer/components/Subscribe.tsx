import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe--container">
      <div className="subscribe--wrapper">
        <input
          type="email"
          className="subscribe--input"
          placeholder="Enter your email"
          aria-label="Enter your email"
        />
        <button className="button-primary">subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
