"use-client";
import jwt from "jsonwebtoken";
import axios from "axios";
import { showErrorMessage, showSuccessMessage } from "../../../helpers/alert";
import { API } from "../../../config";
import { useState, useEffect } from "react";
import Layout from "../../../components/Layout";

const ForgotPassword = () => {
  //we will create a state to get the details from token
  const [state, setState] = useState({
    email: "",
    buttonText: "Forgot Password",
    success: "",
    error: "",
  });

  //destructure the state
  const { email, buttonText, success, error } = state;

  const handleChange = (event) => {
    setState({ ...state, email: event.target.value, success: "", error: "" });
  };

  //we need to create activate account function
  const handleSubmit = async (event) => {
    event.preventDefault();
    //set the button text
    try {
      //we will make api request to send the token
      const response = await axios.put(`${API}/forgot-password`, { email });
      console.log(response);
      setState({
        ...state,
        email: "",
        success: response?.data?.message,
        buttonText: "Email Sent",
      });
    } catch (error) {
      setState({
        ...state,
        buttonText: "Forgot Password",
        error: error?.response?.data?.message,
      });
    }
  };

  const ForgotPasswordForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group mt-3 mb-3">
        <input
          value={email}
          type="email"
          className="form-control"
          placeholder="Type your email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mt-3 mb-3">
        <button className="btn btn-outline-primary">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Please enter your registered email</h1>
          <br />
          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}
          {ForgotPasswordForm()}
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
