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
    const url = `${mainBaseUrl}/dashboardAuthen/checkAuth`;
    try {
      throw new Error("Invalid token");
      const result = { info: {} };
      // const result = await getWithToken(url);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async changeAvatar(bcAddress, avatarUrl) {
    const url = `${mainBaseUrl}/authen/editAvatar`;
    const presetUrl = `${avatarBaseUrl}/`;
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
