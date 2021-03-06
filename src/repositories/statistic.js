import { mainBaseUrl } from "configs";
import { postWithToken } from "utils/services/rest";

class StatisticRepository {
  static async getGeneralStatistic() {
    const url = `${mainBaseUrl}/dashboardAuthen/analyser`;
    const body = {};
    try {
      const result = await postWithToken(url, body);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getDailyStatistic(agentAddress, timeRangeArr) {
    const url = `${mainBaseUrl}/dashboardAuthen/analyserDaily`;
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
