import axios from "axios";
import { LOGIN_ENDPOINT, LOGOUT_ENDPOINT } from "../constants";



export const auhtLogin = (email, password,role) => {
  return axios
    .post(LOGIN_ENDPOINT, {
      email,
      password,
      role
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    }).catch((error)=>{
      return error
  });
};

export const authlogout = () => {
  const role = authDetail().role
  const refreshToken = authObj().refreshToken
  return axios
  .post(LOGOUT_ENDPOINT, {
    role,
    refreshToken
  },{ headers: authHeader() })
  .then((response) => {
    localStorage.removeItem("user");

  }).catch((error)=>{
    return error
});
 
};

export const authHeader=()=> {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken};
    } else {
      return {};
    }
}

export const authDetail=()=>{
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
      return user?.data
  } else {
    return undefined;
  }
}

export const authObj =()=>{
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
      return user
  } else {
    return undefined;
  }
}
