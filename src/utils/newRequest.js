import axios from "axios";

const BASEURL = "https://clone-fiverr-app-01.onrender.com/api";
const newRequest = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
  crossDomain: true,
  headers: {
    "Access-Control-Allow-Origin":
      "https://clone-fiverr-client-app01.netlify.app",
  },
});

export default newRequest;
