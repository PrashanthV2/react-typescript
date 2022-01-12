import axios from "axios";
import { LoginFormBody,SignUpFormBody } from "../utilites";

export function loginRequest(body: LoginFormBody) {
  return axios.post('/login', body);
}

export function signUpRequest(body:SignUpFormBody) {
  return axios.post('/signup', body);
}

