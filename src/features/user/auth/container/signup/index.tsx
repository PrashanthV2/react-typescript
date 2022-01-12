import "../../../../../shared/components/styling/styles.css";
import { MicroBank } from "../../../../../core/components/microInfo";
import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface FormDetails {
  fullName: string;
  date: string;
  email: string;
  password: string;
  c_password: string;
}

export const SignUp = () => {
  const [fullName, setFullName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [c_password, setC_password] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (checkForm()) {
      const form: FormDetails = {
        fullName: fullName,
        date: date,
        email: email,
        password: password,
        c_password: c_password,
      };
      axios.post("http://localhost:3001/userData", form);
      alert("Registered Successfully");
    } else {
      alert("Something went wrong!!");
    }
  };

  const checkForm = (): boolean => {
    if (
      fullName.trim() !== "" &&
      date.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      c_password.trim() !== ""
    ) {
      if (password === c_password) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="container">
      <MicroBank />
      <div className="signup-container">
        <h2 className="login-header">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-input">
            <label> Full Name </label>
            <input
              type="text"
              id="full-name"
              name="full_name"
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <label> Date of Incorporation </label>
            <input
              type="date"
              id="dob"
              name="date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <div className="date-input"> </div>
          </div>
          <div className="login-input">
            <label> Email </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <label> Password </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="cpw-input"></div>
          </div>
          <div className="login-input">
            <label> Confirm Password </label>
            <input
              type="password"
              id="c-password"
              name="c_password"
              onChange={(e) => setC_password(e.target.value)}
              required
            />
            <div className="c-pw-input"></div>
          </div>
          <input
            type="submit"
            className="login-btn"
            id="create-account-button"
            value="Create an account"
          />
        </form>
        <p className="create-account">
          Already have an account?{" "}
          <span>
            <Link to="/">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
