import axios from "axios";
import axiosRetry from "axios-retry";

const axiosReq = axios.create({
  baseURL: "https://my-book-app-5701b.firebaseio.com/",
});

axiosRetry(axiosReq, { retries: 5, retryDelay: axiosRetry.exponentialDelay });

export default axiosReq;
