import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { showErrorMessage, showSuccessMessage } from "../helpers/alert";
import { API } from "../config";
import { authenticate, isAuth } from "../helpers/auth";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  //state to handle the form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
    btnText: "Login",
  });
  //now we will add a function to update the state
  const handleFormData = (key) => (event) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [key]: event.target.value,
        error: "",
        success: "",
        btnText: "Login",
      };
    });
  };
  const router = useRouter();

  //destructure the state
  let { email, password, error, success, btnText } = formData;

  //change so that user cannot open the login page when already logged in
  useEffect(() => {
    isAuth() && router.push("/");
  }, []);

  //convert handle submit function to async function
  const handleFormSubmit = async (event) => {
    event.preventDefault(); //to stop reloading the page when submit

    //we can set the button text
    setFormData({ ...formData, btnText: "Logging in" });
    //we will call the register end point
    try {
      const response = await axios.post(`${API}/login`, {
        email,
        password,
      });
      //after that you will be redirected to new page
      authenticate(response, () =>
        isAuth() && isAuth().role === "admin"
          ? router.push("/admin")
          : router.push("/user")
      );
    } catch (error) {
      console.log(error);
      setFormData({
        ...formData,
        error: error.response?.data?.message,
        btnText: "Login",
      });
    }
  };

  const loginForm = () => (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group mt-3 mb-3">
        <input
          value={email}
          type="email"
          className="form-control"
          placeholder="Type your email"
          onChange={handleFormData("email")}
          required
        />
      </div>
      <div className="form-group mt-3 mb-3">
        <input
          value={password}
          type="password"
          className="form-control"
          placeholder="Type your password"
          onChange={handleFormData("password")}
          required
        />
      </div>
      <div className="form-group mt-3 mb-3 d-flex">
        <button className="btn btn-outline-primary">{btnText}</button>
        <Link href={"/auth/password/forgot"} className="text-danger ms-auto">
          Forgot Password
        </Link>
      </div>
    </form>
  );
  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h2>Login</h2>
        <br />
        {success && showSuccessMessage(success)}
        {error && showErrorMessage(error)}
        {loginForm()}
      </div>
    </Layout>
  );
};
export default Login;
