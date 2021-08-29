import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="form-container">
      <div className="intro-container half-width">
        <h5>Join With Me</h5>
        <p>Subscribe My Github Site for next update</p>
        <button className="intro-btn">About Me</button>
      </div>
      <div className="register-container half-width">
        <div className="form">
          <h2>Register Here</h2>
          <br />
          <form>
            <input type="text" name="name" placeholder="   Name" />
            <br />
            <br />
            <input type="text" name="username" placeholder="   Username" />
            <br />
            <br />
            <input type="email" name="email" placeholder="   Email" />
            <br />
            <br />
            <input type="password" name="password" placeholder="   Password" />
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
