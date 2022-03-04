import Axios from "axios";

const axios = (baseURL) => {
  const instance = Axios.create({
    baseURL: baseURL || "http://localhost:8000", //back-end
    headers: { "Content-Type": "application/json" },
    timeout: 1000,
  });

  return instance;
};

export { axios };
export default axios();