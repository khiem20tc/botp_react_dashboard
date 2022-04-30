import { mainUrlDev, avatarUrlDev, uploadPresetDev } from "./development";
import { mainUrlProd, avatarUrlProd, uploadPresetProd } from "./production";

const reactEnv =
  !process.env.REACT_APP_ENV || process.env.REACT_APP_ENV === "PROD"
    ? "production"
    : "development";

const mainUrl = reactEnv === "development" ? mainUrlDev : mainUrlProd;
const avatarUrl = reactEnv === "development" ? avatarUrlDev : avatarUrlProd;
const uploadPreset =
  reactEnv === "development" ? uploadPresetDev : uploadPresetProd;

export { mainUrl, avatarUrl, uploadPreset };
