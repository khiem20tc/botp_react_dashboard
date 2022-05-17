import axios from "axios";
import CommonErrors from "constants/error";
import { loadState } from "./localStorage";

// Utils
const _getBearerConfig = () => {
  const config = {};
  const token = loadState()?.user.token;
  config["headers"] = { Authorization: `Bearer ${token}` };
  return config;
};

const _queryRest = async (promise) => {
  try {
    // Non-formating response
    return await promise();
  } catch (error) {
    // Get error conditionally
    throw String(error.message ?? "").includes(CommonErrors.NETWORK_ERROR)
      ? error
      : error.response.data;
  }
};

// Without token
const getWithoutToken = async (url) =>
  await _queryRest(async () => await axios.get(url));
const postWithoutToken = async (url, data, config) =>
  await _queryRest(async () => await axios.post(url, data, config));

// With bearer token
const getWithToken = async (url) =>
  await _queryRest(async () => await axios.get(url, _getBearerConfig()));
const postWithToken = async (url, data) =>
  await _queryRest(async () => await axios.post(url, data, _getBearerConfig()));

export { getWithoutToken, postWithoutToken, getWithToken, postWithToken };
