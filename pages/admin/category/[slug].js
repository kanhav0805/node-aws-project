import { useState } from "react";
import axios from "axios";
import { API } from "../../../config";
import { showSuccessMessage, showErrorMessage } from "../../../helpers/alert";
import Layout from "../../../components/Layout";
import withAdmin from "../../withAdmin";
import Resizer from "react-image-file-resizer";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";

const Update = ({ oldCategory, user, token }) => {
  const [state, setState] = useState({
    name: oldCategory.name,
    error: "",
    success: "",
    buttonText: "Update",
    imagePreview: oldCategory.image.url,
    image: "",
  });
  const [content, setContent] = useState(
    Array.isArray(oldCategory.content)
      ? oldCategory.content[0]
      : oldCategory.content
  );
  console.log(content[0]);

  const [imageUploadButtonName, setImageUploadButtonName] =
    useState("Update image");

  const { name, success, error, image, buttonText, imagePreview } = state;

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
    });
  };

  const handleContent = (e) => {
    console.log(e);
    setContent(e);
  };

  const handleImage = (event) => {
    let fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          300,
          300,
          "JPEG",
          100,
          0,
          (uri) => {
            setState({
              ...state,
              image: uri,
              imageUploadText: event.target.files[0].name,
              success: success,
            });
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "Updating" });
    console.table({ name, content, image });
    try {
      const response = await axios.put(
        `${API}/category/${oldCategory.slug}`,
        { name, content, image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("CATEGORY UPDATE RESPONSE", response);
      setState({
        ...state,
        imagePreview: response.data.image.url,
        success: `${response.data.name} is updated`,
      });
      setContent(response.data.content);
    } catch (error) {
      console.log("CATEGORY CREATE ERROR", error);
      setState({
        ...state,
        buttonText: "Create",
        error: error.response.data.message,
      });
    }
  };
  const createCategoryForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          value={name}
          type="text"
          className="form-control my-4"
          required
        />
      </div>
      <div className="form-group my-4">
        <label className="text-muted">Content</label>
        {/* <textarea
          onChange={handleChange("content")}
          value={content}
          className="form-control"
          required
        /> */}
        <ReactQuill
          value={content}
          onChange={handleContent}
          placeholder="Write something..."
          theme="bubble"
          className="pb-5 mb-3"
          style={{ border: "1px solid #666" }}
        />
      </div>
      <div className="form-group my-4">
        <label className="btn btn-outline-secondary">
          {imageUploadButtonName}{" "}
          <span>
            <img src={imagePreview} alt="image" height="20" />
          </span>
          <input
            onChange={handleImage}
            type="file"
            accept="image/*"
            className="form-control"
            hidden
          />
        </label>
      </div>
      <div>
        <button className="btn btn-outline-primary">{buttonText}</button>
      </div>
    </form>
  );
  console.log(state);
  return (
    <Layout>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Create category</h1>
          <br />
          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}
          {createCategoryForm()}
        </div>
      </div>
    </Layout>
  );
};

Update.getInitialProps = async ({ req, query, token }) => {
  const response = await axios.post(`${API}/category/${query.slug}`);
  return { oldCategory: response.data.category, token };
};

export default withAdmin(Update);
