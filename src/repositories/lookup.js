import { mainBaseUrl } from "configs";
import { getWithToken, postWithToken } from "utils/services/rest";

class LookupRepository {
  static async getIdentity(bcAddress) {
    const url = `${mainBaseUrl}/identity/getIdentity`;
    const body = { bcAddr: bcAddress };
    try {
      const result = await postWithToken(url, body);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getEventBroadcast(agentAddress, userAddress, transactionId) {
    const url = `${mainBaseUrl}/provenance/eventBroadcast`;
    // const body = { bcAddr: bcAddress };
    try {
      const result = await getWithToken(url);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getEventHistory(agentAddress, userAddress, transactionId) {
    const url = `${mainBaseUrl}/provenance/eventHistory`;
    // const body = { agentAddr: agentAddress, timeRanges: timeRangeArr };
    try {
      const result = await getWithToken(url);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default LookupRepository;
