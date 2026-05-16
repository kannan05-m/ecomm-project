import axios from "axios";
const API = axios.create({
  baseURL: "https://ecomm-project-1-5734.onrender.com/api",
});
export default API;
