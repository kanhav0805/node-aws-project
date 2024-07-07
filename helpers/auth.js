//we will add all authentication related helper functions
import cookie from "js-cookie";
//cookie setter function
export const setCookie = (key, value) => {
  if (process.browser) {
    //process.browser is to know if we are in client mode
    cookie.set(key, value);
  }
};

//cookie remover function
export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key);
  }
};

//cookie getter function
// get from cookie such as stored token
// will be useful when we need to make request to server with auth token
export const getCookie = (key, req) => {
  // if (process.browser) {
  //     return cookie.get(key);
  // }
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

export const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

export const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  let token = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!token) {
    return undefined;
  }
  let tokenValue = token.split("=")[1];
  return tokenValue;
};

//now we will add logic to save user info in local storage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

//remove item from local storage
export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

//local storage getter function
export const getLocalStorage = (key) => {
  if (process.browser) {
    return localStorage.getItem(key);
  }
};

//now we will add authenticate function
export const authenticate = (response, next) => {
  //here next is a callback function where we will do redirect to another page
  //we will set cookie and local storage
  setCookie("token", response?.data?.token);
  setLocalStorage("user", response?.data?.user);
  next();
};

//check the authentication of user
export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (getLocalStorage("user")) {
        return JSON.parse(getLocalStorage("user"));
      } else {
        return false;
      }
    }
  }
};

export const logout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
};
