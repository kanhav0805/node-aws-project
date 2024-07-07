"use-client";
import { withRouter } from "next/router";
import jwt from "jsonwebtoken";
import axios from "axios";
import { showErrorMessage, showSuccessMessage } from "../../../helpers/alert";
import { API } from "../../../config";
import { useState, useEffect } from "react";
import Layout from "../../../components/Layout";

const ActivateAccount = ({ router }) => {
  //we will create a state to get the details from token
  const [state, setState] = useState({
    name: "",
    token: "",
    buttonText: "Activate Account",
    success: "",
    error: "",
  });

  //destructure the state
  const { name, token, buttonText, success, error } = state;

  //use effect to set the state when token recieved
  useEffect(() => {
    //get the token
    let urlToken = router.query.id;
    if (urlToken) {
      const { name } = jwt.decode(urlToken);
      setState({ ...state, name, token: urlToken });
    }
  }, [router]);

  //we need to create activate account function
  const handleActivation = async (event) => {
    event.preventDefault();
    //set the button text
    setState({ ...state, buttonText: "Activating Account" });
    try {
      //we will make api request to send the token
      const response = await axios.post(`${API}/register/activate`, { token });
      console.log(response);
      setState({
        ...state,
        name: "",
        token: "",
        success: response?.data?.message,
        buttonText: "Account Activated",
      });
    } catch (error) {
      setState({
        ...state,
        buttonText: "Activate Account",
        error: error?.response?.data?.message,
      });
    }
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Hello {name}, Ready to activate your account?</h1>
          <br />
          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}
          <button
            className="btn btn-outline-primary w-100"
            onClick={handleActivation}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(ActivateAccount);
