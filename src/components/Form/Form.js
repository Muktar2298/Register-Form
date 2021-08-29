import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [showInput, setShowInput] = useState({});

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInput(input);
  };
  return (
    <div className="form-container">
      <div className="intro-container half-width">
        <p>{showInput.name}</p>
        <p>{showInput.username}</p>
        <p>{showInput.email}</p>
        <p>{showInput.password}</p>
        <h5>Join With Me</h5>
        <p>Subscribe My Github Site for next update</p>
        <button className="intro-btn">About Me</button>
      </div>
      <div className="register-container half-width">
        <div className="form">
          <h2>Register Here</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="   Name"
              value={input.name}
              onChange={handleInput}
            />
            <br />
            <br />
            <input
              type="text"
              name="username"
              placeholder="   Username"
              value={input.username}
              onChange={handleInput}
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              placeholder="   Email"
              value={input.email}
              onChange={handleInput}
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="   Password"
              value={input.password}
              onChange={handleInput}
            />
            <br />
            <br />
            <button type="submit" className="btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
