import axios from "axios";

const BASEURL = "https://clone-fiverr-app-01.onrender.com/api";
const newRequest = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
 });

export default newRequest;
