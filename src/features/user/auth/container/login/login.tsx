import React, { FormEvent, useContext, useState } from "react";
import "../../../../../shared/components/styling/styles.css";
import { MicroBank } from "../../../../../core/components/microInfo";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/authContext";


export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { handleAuth } = useContext(AuthContext);


   const handleLogin = (e: FormEvent) => {
     e.preventDefault();
     handleAuth(email, password);
  };
  
  return (
    <Link to="/" className="container">
      <MicroBank />
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <p className="login-header">Login</p>
          <p className="helper-text">Please login to your account</p>
          <div className="login-input">
            <label> Email or Phone </label>
            <input
              type="text"
              id="login-email"
              name="login_email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <label> Password </label>
            <input
              type="password"
              id="login-password"
              name="login_password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="forgot-text">
            <a href="forgot.html">Forgot Password?</a>
          </p>
          <input
            className="login-btn"
            id="login-account-button"
            type="submit"
            value="Login"
          />
          <p className="create-account">
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Create an account</Link>
            </span>
          </p>
        </form>
      </div>
    </Link>
  );
};
