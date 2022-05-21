import { StatisticAction } from "constants/redux";
import StatisticRepository from "repositories/statistic";

const getGeneralStatisticAction = () => ({
  type: StatisticAction.PENDING_GET_GENERAL_STATISITC,
  pendingAction: async () => await StatisticRepository.getGeneralStatistic(),
});

const getDailyStatisticAction = (agentAddress, timeRangesArr) => ({
  type: StatisticAction.PENDING_GET_DAILY_STATISTIC,
  pendingAction: async () =>
    await StatisticRepository.getDailyStatistic(agentAddress, timeRangesArr),
});

export { getGeneralStatisticAction, getDailyStatisticAction };
