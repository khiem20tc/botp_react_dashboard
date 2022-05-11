import { ProvenanceAction } from "constants/redux";
import ProvenanceRepository from "repositories/provenance";

const getEventBroadcastAction = (agentAddress, userAddress, transactionId) => ({
  type: ProvenanceAction.PENDING_GET_EVENT_BROADCAST,
  pendingAction: ProvenanceRepository.getEventBroadcast(
    agentAddress,
    userAddress,
    transactionId
  ),
});

const getEventHistoryAction = (agentAddress, userAddress, transactionId) => ({
  type: ProvenanceAction.PENDING_GET_EVENT_HISTORY,
  pendingAction: ProvenanceRepository.getEventHistory(
    agentAddress,
    userAddress,
    transactionId
  ),
});

export { getEventBroadcastAction, getEventHistoryAction };
