import Layout from "../components/Layout";
import axios from "axios";
import { API } from "../config";
import Link from "next/link";

const Home = ({ categories }) => {
  console.log(categories);

  // Function to render the categories
  const listCategories = () => {
    return categories.map((category, index) => {
      return (
        <div className="col-md-4 p-0" key={index}>
          <Link href={`/links/${category.slug}`}>
            <div
              className="bg-light p-3 d-flex flex-column justify-content-center align-items-center"
              style={{ height: "100px", border: "1px solid lightblue" }}
            >
              <div className="row w-100">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <img
                    src={category.image && category.image.url}
                    alt={category.name}
                    style={{ maxWidth: "80px", height: "auto" }}
                    className="pr-3"
                  />
                </div>
                <div className="col-8 d-flex justify-content-center align-items-center">
                  <h5>{category.name}</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-md-12">
          <h1 className="font-weight-bold">Browse Tutorials/Courses</h1>
          <br />
        </div>
      </div>
      <div className="row no-gutters">{listCategories()}</div>
    </Layout>
  );
};

// Fetching data from the server-side
Home.getInitialProps = async () => {
  const response = await axios.get(`${API}/categories`);
  return {
    categories: response.data,
  };
};

export default Home;
