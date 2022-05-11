import {
  mainBaseUrlDev,
  avatarBaseUrlDev,
  uploadPresetDev,
} from "./development";
import {
  mainBaseUrlProd,
  avatarBaseUrlProd,
  uploadPresetProd,
} from "./production";

const reactEnv =
  process.env.REACT_APP_ENV === "production" ? "production" : "development";

const mainBaseUrl =
  reactEnv === "development" ? mainBaseUrlDev : mainBaseUrlProd;
const avatarBaseUrl =
  reactEnv === "development" ? avatarBaseUrlDev : avatarBaseUrlProd;
const uploadPreset =
  reactEnv === "development" ? uploadPresetDev : uploadPresetProd;

export { mainBaseUrl, avatarBaseUrl, uploadPreset };
