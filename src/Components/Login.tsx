import React,{useState} from "react"
import "../CSS/styles.css"
import { MicroBank } from './MicroBank'
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";

const initState={
    login_email: "",
    login_password: "",
  }

export const Login = () => {
    const history = useHistory();
    const [loginInput, setLoginInput] = useState(initState);

  const {login_email,login_password} =loginInput;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setLoginInput(prevState => ({ ...prevState, [name]: value }))
}

const buttonHandler = async(event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const userLogin = {
      method: "GET",
    };
    try {
      const response = await fetch("http://localhost:3001/userData", userLogin);
      const loginDetails = await response.json();
      for (let i = 0; i < loginDetails.length; i++) {
        if (
          loginDetails[i].email === loginInput.login_email &&
          loginDetails[i].password === loginInput.login_password
        ) {
          alert("Login Success");
          history.push("/dashboard");
        } else {
          alert("Login Failure");
          setLoginInput({
            login_email:"",
            login_password:"",
          })
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <Link to="/login" className="container">
      <MicroBank/>
      <div className="login-container">
        <form >
        <p className="login-header">Login</p>
        <p className="helper-text">Please login to your account</p>
        <div className="login-input">
          <label> Email or Phone </label>
          <input type="text" id="login-email" name="login_email" onChange={handleChange} value={login_email}/>
        </div>
        <div className="login-input">
          <label> Password </label>
          <input type="password" id="login-password" name="login_password"  onChange={handleChange} value={login_password} />
        </div>
        <p className="forgot-text"><a href="forgot.html">Forgot Password?</a></p>
        <button onClick={buttonHandler} className="login-btn" id="login-account-button">Login</button>
        <p className="create-account">
          Don't have an account? <span><Link to="/signup">Create an account</Link></span>
        </p>
        </form>
      </div>
    </Link>
    )
}
