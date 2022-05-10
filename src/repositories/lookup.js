import { mainUrl } from "configs";
import { postWithToken } from "utils/services/rest";

class LookupRepository {
  static async getIdentity(bcAddress) {
    const url = `${mainUrl}/identity/getIdentity`;
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
