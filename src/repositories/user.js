import { mainUrl } from "configs";
import { postWithoutToken, getWithToken } from "utils/services/rest";

class UserRepository {
  static async signUp(username, password) {
    const url = `${mainUrl}/dashboardAuthen/signUp`;
    const body = { username, password };
    try {
      const result = await postWithoutToken(url, body);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async signIn(username, password) {
    const url = `${mainUrl}/dashboardAuthen/signIn`;
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
    const url = `${mainUrl}/dashboardAuthen/checkAuth`;
    try {
      const result = await getWithToken(url);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateAvatar() {}
}

export default UserRepository;
