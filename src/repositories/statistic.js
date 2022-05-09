import { baseUrl } from "configuration";
import { postWithToken } from "utils/services/rest";

class StatisticRepository {
  static async getGeneralStatistic() {
    const url = `${baseUrl}/dashboardAuthen/analyser`;
    const body = {};
    try {
      const result = await postWithToken(url, body);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getDailyStatistic(agentAddress, timeRangeArr) {
    const url = `${baseUrl}/dashboardAuthen/analyserDaily`;
    const body = { agentAddr: agentAddress, timeRanges: timeRangeArr };
    try {
      const result = await postWithToken(url, body);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default StatisticRepository;
