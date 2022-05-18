import {
  mainBaseUrl,
  cloudinaryCloudName,
  cloudinaryUploadPreset,
  cloudinaryApiKey,
  cloudinaryApiSecret,
} from "configs";
import sha1 from "crypto-js/sha1";
import { postWithoutToken, getWithToken } from "utils/services/rest";

class UserRepository {
  static async signUp(username, password) {
    const url = `${mainBaseUrl}/dashboardAuthen/signUp`;
    const body = { username, password };
    try {
      const result = await postWithoutToken(url, body);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async signIn(username, password) {
    const url = `${mainBaseUrl}/dashboardAuthen/signIn`;
    const body = { username, password };
    try {
      const result = await postWithoutToken(url, body);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async signOut() {
    // Didn't have sign out api.
    return setTimeout(() => Promise.resolve(), 500);
  }

  static async getUserInfo() {
    const url = `${mainBaseUrl}/dashboardAuthen/info`;
    try {
      const result = await getWithToken(url);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async setupKYC(bcAddress, password, name, description) {
    const url = `${mainBaseUrl}/author/KYC`;
    const body = {
      bcAddress,
      password,
      type: "AGENT",
      info: { name, description },
    };

    try {
      const result = await postWithoutToken(url, body);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async uploadAvatarFile(avatarFile) {
    const url = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`;

    // Create signature + append in body
    const searchParamEntries = [
      ["upload_preset", cloudinaryUploadPreset],
      ["unique_filename", false],
      ["filename_override", "123"],
      ["timestamp", Date.now()],
    ];
    searchParamEntries.sort((e1, e2) =>
      e1[0] === e2[0] ? 0 : e1[0] > e2[0] ? 1 : -1
    );
    const searchParamsObj = new URLSearchParams(
      Object.fromEntries(searchParamEntries)
    );
    const signature = sha1(searchParamsObj.toString() + cloudinaryApiSecret);

    // Body data
    // * To use Axios, config FormData + XMLHttpRequest headers for Cloudinary
    const formData = new FormData();
    formData.append("file", avatarFile);
    formData.append("api_key", cloudinaryApiKey);
    formData.append("signature", signature);
    for (const [key, value] of searchParamEntries) {
      formData.append(key, value);
    }

    // Change header
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    };

    try {
      const result = await postWithoutToken(url, formData, config);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async changeAvatarUrl(bcAddress, avatarUrl) {
    const url = `${mainBaseUrl}/authen/editAvatar`;
    const body = { bcAddress, avatar: avatarUrl };
    try {
      const result = await postWithoutToken(url, body);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
