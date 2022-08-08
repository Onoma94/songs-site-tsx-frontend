import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: false,
  headers: {
    "Content-type": "application/json"
  }
});
