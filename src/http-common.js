import axios from "axios";

export default axios.create({
  baseURL: "https://restcountries.com/v3.1/all/?results=50",
  headers: {
    "Content-type": "application/json"
  }
});