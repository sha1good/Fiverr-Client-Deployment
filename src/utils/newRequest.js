import axios from "axios";

 const newRequest = axios.create({
    baseURL: "https://clone-fiverr-app-01.onrender.com/api",
    withCredentials: true
 })

 export default newRequest;