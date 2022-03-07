import Axios from "axios";

const axios = (baseURL) => {
  const instance = Axios.create({
    baseURL: baseURL || "https://immense-woodland-77775.herokuapp.com/", //back-end
    headers: { "Content-Type": "application/json" },
    timeout: 8000,
  });

  return instance;
};

export { axios };
export default axios();
