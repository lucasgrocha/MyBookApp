import axios from "axios";
import axiosRetry from "axios-retry";

const axiosReq = axios.create({
  baseURL: "http://localhost:3333",
});

axiosRetry(axiosReq, { retries: 5, retryDelay: axiosRetry.exponentialDelay });

export default axiosReq;
