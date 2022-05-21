import {
  mainBaseUrlDev,
  cloudinaryCloudNameDev,
  cloudinaryUploadPresetDev,
  cloudinaryApiKeyDev,
  cloudinaryApiSecretDev,
} from "./development";
import {
  mainBaseUrlProd,
  cloudinaryCloudNameProd,
  cloudinaryUploadPresetProd,
  cloudinaryApiKeyProd,
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

const cloudinaryApiKey =
  reactEnv === "development" ? cloudinaryApiKeyDev : cloudinaryApiKeyProd;

const cloudinaryApiSecret =
  reactEnv === "development" ? cloudinaryApiSecretDev : cloudinaryApiSecretProd;

export {
  mainBaseUrl,
  cloudinaryCloudName,
  cloudinaryUploadPreset,
  cloudinaryApiKey,
  cloudinaryApiSecret,
};
