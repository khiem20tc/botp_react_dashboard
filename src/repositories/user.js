import { baseUrl } from "configuration";
import { postWithoutToken, getWithToken } from "utils/services/rest";

class UserRepository {
  static async signUp(username, password) {
    const url = `${baseUrl}/dashboardAuthen/signUp`;
    const body = { username, password };
    try {
      const result = await postWithoutToken(url, body);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async signIn(username, password) {
    const url = `${baseUrl}/dashboardAuthen/signIn`;
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
    const url = `${baseUrl}/dashboardAuthen/checkAuth`;
    // Get token from local storage
    try {
      const result = await getWithToken(url);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
