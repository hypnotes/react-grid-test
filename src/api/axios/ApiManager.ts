import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const ApiManager = axios.create({
  baseURL: baseUrl,
  responseType: "json",
  withCredentials: true,
  timeout: 1000,
  headers: { "Content-Type": "multipart/form-data" },
});

ApiManager.interceptors.request.use(async (config) => {
  return config;
});

export default ApiManager;
