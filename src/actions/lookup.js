import { LookupAction } from "constants/redux";
import LookupRepository from "repositories/lookup";

const getIdentityAction = (bcAddress) => ({
  type: LookupAction.PENDING_GET_IDENTITY,
  pendingAction: LookupRepository.getIdentity(bcAddress),
});

export { getIdentityAction };
