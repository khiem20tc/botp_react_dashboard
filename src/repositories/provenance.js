import { baseUrl } from "configuration";
import { getWithToken } from "utils/services/rest";

class ProvenanceRepository {
  static async getEventBroadcast(agentAddress, userAddress, transactionId) {
    const url = `${baseUrl}/provenance/eventBroadcast`;
    // const body = { bcAddr: bcAddress };
    try {
      const result = await getWithToken(url);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getEventHistory(agentAddress, userAddress, transactionId) {
    const url = `${baseUrl}/provenance/eventHistory`;
    // const body = { agentAddr: agentAddress, timeRanges: timeRangeArr };
    try {
      const result = await getWithToken(url);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default ProvenanceRepository;
