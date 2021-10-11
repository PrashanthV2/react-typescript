import  "../CSS/styles.css"
import { MicroBank } from "./MicroBank"
import React,{useState} from "react"
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";


const initState={
  full_name: "",
  date: "",
  email: "",
  password: "",
  c_password: "",
}


export const SignUp = () => {
  const history = useHistory();

  const [input, setInput] = useState(initState);

  const {full_name,date,email,password,c_password} =input;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setInput(prevState => ({ ...prevState, [name]: value }))
}

const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  const payload = {
    full_name: input.full_name,
    date: input.date,
    email: input.email,
    password: input.password,
    c_password: input.c_password,
  }

  let curr_pass = input.password;
  let confirm_pass = input.c_password;

  const hasUpperCase = /[A-Z]/.test(input.password);
  const hasLowerCase = /[a-z]/.test(input.password);
  const hasNumbers = /\d/.test(input.password);
  const hasNonalphas = /\W/.test(input.password);

  if (curr_pass !== confirm_pass) {
    alert("Password Mismatch");
  }else{
    if(curr_pass.length >= 8 &&
      hasUpperCase === true &&
      hasLowerCase === true &&
      hasNumbers === true &&
      hasNonalphas === true){
        const userSignUp = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        };
    
        try {
          const response = await fetch('http://localhost:3001/userData', userSignUp)
          const res = await response.json()
          console.log(res);
          alert("SignUp Successful")
          history.push("/login");
        } catch (error) {
          console.log(error)
          history.push("/signup");
        }
      }else{
        alert(
          "Strong Password Required, At least one Uppercase, one Lowercase, one Special Character and one Number"
        );
      }
  }

   
}
    return (
      <div className="container">
      <MicroBank/>
      <div className="signup-container">
        <h2 className="login-header">Create an Account</h2>
        <form onSubmit={handleSubmit}>
        <div className="login-input">
          <label> Full Name </label>
          <input type="text" id="full-name" name="full_name"  onChange={handleChange} value={full_name}/>
        </div>
        <div className="login-input">
          <label> Date of Incorporation </label>
          <input type="date" id="dob" name="date" onChange={handleChange} value={date}/>
          <div className="date-input"> </div>
        </div>
        <div className="login-input">
          <label> Email </label>
          <input type="text" id="email" name="email"  onChange={handleChange} value={email}/>
        </div>
        <div className="login-input">
          <label> Password </label>
          <input type="password" id="password" name="password"  onChange={handleChange} value={password}/>
          <div className="cpw-input"></div>
        </div>
        <div className="login-input">
          <label> Confirm Password </label>
          <input type="password" id="c-password"  name="c_password" onChange={handleChange} value={c_password}/>
          <div className="c-pw-input"></div>
        </div>
        <button type="submit" className="login-btn" id="create-account-button">Create an Account</button>
        </form>
        <p className="create-account">
          Already have an account? <span><Link to="login">Login</Link></span>
        </p>
      </div>
    </div>
    )
}
