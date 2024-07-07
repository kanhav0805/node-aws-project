const path = require("path");
const { env } = require("process");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  publicRuntimeConfig: {
    API: "http://localhost:8000/api",
    APP_NAME: "NODE-REACT-AWS",
    DOMAIN: "http://localhost:3000",
    PRODUCTION: false,
    FB_APP_ID: "ADADSDADKAKDAN",
  },
};
