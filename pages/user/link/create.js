//add the necessary imports
import Layout from "../../../components/Layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { showErrorMessage, showSuccessMessage } from "../../../helpers/alert";
import { API } from "../../../config";
import { getCookie } from "../../../helpers/auth";
import { isAuth } from "../../../helpers/auth";

const Create = ({ token }) => {
  // state
  const [state, setState] = useState({
    title: "",
    url: "",
    categories: [],
    loadedCategories: [],
    success: "",
    error: "",
    type: "",
    medium: "",
  });

  const {
    title,
    url,
    categories,
    loadedCategories,
    success,
    error,
    type,
    medium,
  } = state;

  //now create a use effect to get the data
  useEffect(() => {
    loadCategories();
  }, [success]);

  const loadCategories = async () => {
    try {
      const response = await axios.get(`${API}/categories`);
      setState({ ...state, loadedCategories: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.table({ title, url, categories, type, medium });
    try {
      const response = await axios.post(
        `${API}/link`,
        { title, url, categories, type, medium },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setState({
        ...state,
        title: "",
        url: "",
        success: "Link is created",
        error: "",
        loadedCategories: [],
        categories: [],
        type: "",
        medium: "",
      });
    } catch (error) {
      console.log("LINK SUBMIT ERROR", error);
      setState({ ...state, error: error?.response?.data?.message });
    }
  };

  console.log(state, "state");

  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value, error: "", success: "" });
  };

  const handleURLChange = (e) => {
    setState({ ...state, url: e.target.value, error: "", success: "" });
  };
  const handleToggle = (categoryId) => () => {
    // return the first index or -1
    const clickedCategory = categories.findIndex((id) => id === categoryId);
    let all;
    all =
      clickedCategory === -1
        ? [...categories, categoryId]
        : categories.filter((id) => id !== categoryId);

    setState({ ...state, categories: all, success: "", error: "" });
  };
  const handleTypeClick = (e) => {
    setState({ ...state, type: e.target.value, success: "", error: "" });
  };

  const handleMediumClick = (e) => {
    setState({ ...state, medium: e.target.value, success: "", error: "" });
  };

  const showMedium = () => (
    <React.Fragment>
      <div className="form-check ml-3">
        <label className="form-check-label">
          <input
            type="radio"
            onChange={handleMediumClick}
            checked={medium === "video"}
            value="video"
            className="from-check-input"
            name="medium"
          />{" "}
          Video
        </label>
      </div>

      <div className="form-check ml-3">
        <label className="form-check-label">
          <input
            type="radio"
            onChange={handleMediumClick}
            checked={medium === "book"}
            value="book"
            className="from-check-input"
            name="medium"
          />{" "}
          Book
        </label>
      </div>
    </React.Fragment>
  );

  const showType = () => (
    <React.Fragment>
      <div className="form-check ml-3">
        <label className="form-check-label">
          <input
            type="radio"
            onChange={handleTypeClick}
            checked={type === "free"}
            value="free"
            className="from-check-input"
            name="free"
          />{" "}
          Free
        </label>
      </div>

      <div className="form-check ml-3">
        <label className="form-check-label">
          <input
            type="radio"
            onChange={handleTypeClick}
            checked={type === "paid"}
            value="paid"
            className="from-check-input"
            name="paid"
          />{" "}
          Paid
        </label>
      </div>
    </React.Fragment>
  );

  //now we will create the jsx to add title and url
  const submitLinkForm = () => (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group my-4">
        <label className="text-muted">Title</label>
        <input
          type="text"
          className="form-control"
          onChange={handleTitleChange}
          value={title}
        />
      </div>
      <div className="form-group my-4">
        <label className="text-muted">URL</label>
        <input
          type="url"
          className="form-control"
          onChange={handleURLChange}
          value={url}
        />
      </div>
      <div>
        <button
          disabled={!token}
          className="btn btn-outline-primary"
          type="submit"
        >
          {isAuth() || token ? "Post" : "Login to post"}
        </button>
      </div>
    </form>
  );
  //we will create handle toggle function

  //now we need to create the categories form
  const showCategories = () => {
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

  //categories form
  return (
    <Layout>
      <div className="row">
        <div className="col-md-12">
          <h1>Submit Link/URL</h1>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label className="text-muted ml-4">Category</label>
            <ul style={{ maxHeight: "100px", overflowY: "scroll" }}>
              {showCategories()}
            </ul>
          </div>
          <div className="form-group">
            <label className="text-muted ml-4">Type</label>
            {showType()}
          </div>
          <div className="form-group">
            <label className="text-muted ml-4">Medium</label>
            {showMedium()}
          </div>
        </div>
        <div className="col-md-8">
          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}
          {submitLinkForm()}
        </div>
      </div>
    </Layout>
  );
};

Create.getInitialProps = ({ req }) => {
  const token = getCookie("token", req);
  return { token };
};

export default Create;
