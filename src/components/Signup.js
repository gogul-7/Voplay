import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (username == localStorage.getItem("username")) {
      alert("username already exist");
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/login");
    }
  };
  return (
    <div class="container">
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label for="userid">User ID:</label>
          <input type="text" id="userid" name="userid" value="3" disabled />
        </div>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <Link to={"/login"}>
            <p>Already a user? Login</p>
          </Link>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default Signup;
