"use-client";
import { withRouter } from "next/router";
import jwt from "jsonwebtoken";
import axios from "axios";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../../../helpers/alert";
import { API } from "../../../../config";
import { useState, useEffect } from "react";
import Layout from "../../../../components/Layout";

const ResetPassword = ({ router }) => {
  //we will create a state to get the details from token
  const [state, setState] = useState({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Reset Password",
    success: "",
    error: "",
  });

  //destructure the state
  const { name, token, newPassword, buttonText, success, error } = state;

  //use effect to set the state when token recieved
  useEffect(() => {
    //get the token
    let urlToken = router.query.id;
    if (urlToken) {
      const { name } = jwt.decode(urlToken);
      setState({ ...state, name, token: urlToken });
    }
  }, [router]);

  const handleChange = (event) => {
    setState({
      ...state,
      newPassword: event.target.value,
      success: "",
      error: "",
    });
  };

  //we need to create activate account function
  const handleSubmit = async (event) => {
    event.preventDefault();
    //set the button text
    setState({ ...state, buttonText: "Reseting Password" });
    try {
      //we will make api request to send the token
      const response = await axios.put(`${API}/reset-password`, {
        resetPasswordLink: token,
        newPassword,
      });
      console.log(response);
      setState({
        ...state,
        name: "",
        token: "",
        success: response?.data?.message,
        buttonText: "Password Changed",
      });
    } catch (error) {
      setState({
        ...state,
        buttonText: "Reset Password",
        error: error?.response?.data?.message,
      });
    }
  };

  const ResetPasswordForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group mt-3 mb-3">
        <input
          value={newPassword}
          type="password"
          className="form-control"
          placeholder="Type your new password"
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
          <h1>Hi {name} , please enter new password for your account.</h1>
          <br />
          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}
          {ResetPasswordForm()}
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(ResetPassword);
