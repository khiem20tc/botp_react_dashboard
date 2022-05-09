const { LookupAction } = require("constants/actions");
const { default: LookupRepository } = require("repositories/lookup");

const getIdentityAction = (bcAddress) => ({
  type: LookupAction.PENDING_GET_IDENTITY,
  pendingAction: LookupRepository.getIdentity(bcAddress),
});

export { getIdentityAction };
