import axios from "axios";
import { loadState } from "./localStorage";

const getBearerConfig = () => {
  const config = {};
  const token = loadState()?.user.token;
  config["headers"] = { Authorization: `Bearer ${token}` };
  return config;
};

// Without token
const getWithoutToken = async (url) => await axios.get(url);
const postWithoutToken = async (url, data) => await axios.post(url, data);

// With bearer token
const getWithToken = async (url) => await axios.get(url, getBearerConfig());
const postWithToken = async (url, data) =>
  await axios.post(url, data, getBearerConfig());

export { getWithoutToken, postWithoutToken, getWithToken, postWithToken };
