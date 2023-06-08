import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (
      username == localStorage.getItem("username") &&
      password == localStorage.getItem("password")
    ) {
      navigate("/");
    } else {
      alert("invalid credentials");
    }
  };
  return (
    <div class="container">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <Link to={"/signup"}>
            <p>Not a user? Signup</p>
          </Link>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default Login;
