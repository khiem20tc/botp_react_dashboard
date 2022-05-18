import {
  mainBaseUrlDev,
  cloudinaryCloudNameDev,
  cloudinaryUploadPresetDev,
  cloudinaryApiSecretDev,
} from "./development";
import {
  mainBaseUrlProd,
  cloudinaryCloudNameProd,
  cloudinaryUploadPresetProd,
  cloudinaryApiSecretProd,
} from "./production";

const reactEnv =
  process.env.REACT_APP_ENV === "production" ? "production" : "development";

const mainBaseUrl =
  reactEnv === "development" ? mainBaseUrlDev : mainBaseUrlProd;
const cloudinaryCloudName =
  reactEnv === "development" ? cloudinaryCloudNameDev : cloudinaryCloudNameProd;
const cloudinaryUploadPreset =
  reactEnv === "development"
    ? cloudinaryUploadPresetDev
    : cloudinaryUploadPresetProd;

const cloudinaryApiSecret =
  reactEnv === "development" ? cloudinaryApiSecretDev : cloudinaryApiSecretProd;

export {
  mainBaseUrl,
  cloudinaryCloudName,
  cloudinaryUploadPreset,
  cloudinaryApiSecret,
};
