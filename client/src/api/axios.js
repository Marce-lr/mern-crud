import axios from "axios";

const instance = axios.create({
  baseURL: "https://3.147.2.94/api",
  withCredentials: true,
});

export default instance;
