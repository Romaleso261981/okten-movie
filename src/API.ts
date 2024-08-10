import axios from "axios";
import { env } from "process";

const token = env.API_TOKEN;
const baseURL = env.API_BASE_URL;

export const APIInstance = axios.create({
  baseURL: baseURL
});

APIInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
