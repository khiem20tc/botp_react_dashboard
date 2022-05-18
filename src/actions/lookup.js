import { LookupAction } from "constants/redux";
import LookupRepository from "repositories/lookup";

const getIdentityAction = (bcAddress) => ({
  type: LookupAction.PENDING_GET_IDENTITY,
  pendingAction: LookupRepository.getIdentity(bcAddress),
});

const getEventBroadcastAction = (agentAddress, userAddress, transactionId) => ({
  type: LookupAction.PENDING_GET_EVENT_BROADCAST,
  pendingAction: LookupRepository.getEventBroadcast(
    agentAddress,
    userAddress,
    transactionId
  ),
});

const getEventHistoryAction = (agentAddress, userAddress, transactionId) => ({
  type: LookupAction.PENDING_GET_EVENT_HISTORY,
  pendingAction: LookupRepository.getEventHistory(
    agentAddress,
    userAddress,
    transactionId
  ),
});

export { getIdentityAction, getEventBroadcastAction, getEventHistoryAction };
