import axios from "axios";
// import store from "../../src/Store";

const ApiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  // withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
    // withCredentials: false,
  },
  timeout: process.env.REACT_APP_REQUESTS_TIMEOUT,
});

// ApiClient.interceptors.request.use(
//   (config) => {
//     if (
//       store?.getState()?.auth?.token &&
//       !["/auth/login", "/auth/register"].includes(config.url)
//     ) {
//       const token = store?.getState()?.auth?.token;
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default ApiClient;
