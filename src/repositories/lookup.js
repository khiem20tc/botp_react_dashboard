import { baseUrl } from "configuration";
import { postWithToken } from "utils/services/rest";

class LookupRepository {
  static async getIdentity(bcAddress) {
    const url = `${baseUrl}/identity/getIdentity`;
    const body = { bcAddr: bcAddress };
    try {
      const result = await postWithToken(url, body);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default LookupRepository;
