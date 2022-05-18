import { mainBaseUrl, avatarBaseUrl, uploadPreset } from "configs";
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
    const url = `${avatarBaseUrl}`;

    // To use Axios, config FormData + XMLHttpRequest headers for Cloudinary
    const formData = new FormData();
    formData.append("file", avatarFile);
    formData.append("upload_preset", uploadPreset);
    // formData.append("filename_override", "123");
    // formData.append("unique_filename", false);
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
