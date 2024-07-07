import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { showErrorMessage, showSuccessMessage } from "../helpers/alert";
import { API } from "../config";
import { useRouter } from "next/router";
import { isAuth } from "../helpers/auth";

const Register = () => {
  //state to handle the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
    btnText: "Register",
    categories: [],
    loadedCategories: [],
  });
  //now we will add a function to update the state
  const handleFormData = (key) => (event) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [key]: event.target.value,
        error: "",
        success: "",
        btnText: "Register",
      };
    });
  };

  //destructure the state
  let {
    name,
    email,
    password,
    error,
    success,
    btnText,
    loadedCategories,
    categories,
  } = formData;

  const router = useRouter();
  console.log(loadedCategories, "loaded");

  useEffect(() => {
    isAuth() && router.push("/");
  }, []);

  // load categories when component mounts using useEffect
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await axios.get(`${API}/categories`);
      console.log(response, "response");
      setFormData({ ...formData, loadedCategories: response.data });
    } catch (error) {
      console.log(error);
    }
  };
  const handleToggle = (c) => () => {
    // return the first index or -1
    const clickedCategory = categories.indexOf(c);
    const all = [...categories];

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log("all >> categories", all);
    setFormData({ ...formData, categories: all, success: "", error: "" });
  };

  const showCategories = () => {
    console.log(loadCategories, "loaded");
    return (
      loadedCategories &&
      loadedCategories.map((c, i) => (
        <li className="list-unstyled my-1" key={c._id}>
          <input
            type="checkbox"
            onChange={handleToggle(c._id)}
            className="mr-2"
          />
          <label className="form-check-label">{c.name}</label>
        </li>
      ))
    );
  };

  //convert handle submit function to async function
  const handleFormSubmit = async (event) => {
    event.preventDefault(); //to stop reloading the page when submit
    console.log(formData, "form");
    //we can set the button text
    setFormData({ ...formData, btnText: "Registering" });
    //we will call the register end point
    try {
      const response = await axios.post(`${API}/register`, {
        name,
        email,
        password,
        categories,
      });
      if (response) {
        setFormData({
          ...formData,
          name: "",
          email: "",
          password: "",
          success: response.data.message,
          btnText: "Submitted",
        });
      }
    } catch (error) {
      console.log(error);
      setFormData({
        ...formData,
        error: error.response.data.message,
        btnText: "Submitted",
      });
    }
  };
  console.log("in register");
  const registerForm = () => (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group mt-3 mb-3">
        <input
          value={name}
          type="text"
          className="form-control"
          placeholder="Type your name"
          onChange={handleFormData("name")}
          required
        />
      </div>
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
      <div className="form-group">
        <label className="text-muted ml-4">Category</label>
        <ul style={{ maxHeight: "100px", overflowY: "scroll" }}>
          {showCategories()}
        </ul>
      </div>
      <div className="form-group mt-3 mb-3">
        <button className="btn btn-outline-primary">{btnText}</button>
      </div>
    </form>
  );
  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h2>Register</h2>
        <br />
        {success && showSuccessMessage(success)}
        {error && showErrorMessage(error)}
        {registerForm()}
      </div>
    </Layout>
  );
};
export default Register;
