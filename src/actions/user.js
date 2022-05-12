import { UserAction } from "constants/redux";
import UserRepository from "repositories/user";

const signInAction = (username, password) => ({
  type: UserAction.PENDING_SIGN_IN,
  pendingAction: async () => await UserRepository.signIn(username, password),
});

const signUpAction = (username, password) => ({
  type: UserAction.PENDING_SIGN_UP,
  pendingAction: async () => await UserRepository.signUp(username, password),
});

const signOutAction = () => ({
  type: UserAction.PENDING_SIGN_OUT,
  pendingAction: async () => await UserRepository.signOut(),
});

const getUserInfoAction = () => ({
  type: UserAction.PENDING_GET_USER_INFO,
  pendingAction: async () => await UserRepository.getUserInfo(),
});

const cleanUserInfoAction = () => ({
  type: UserAction.CLEAN_USER_INFO,
});

const setupKycAction = (bcAddress, password, name, description) => ({
  type: UserAction.PENDING_SETUP_KYC,
  pendingAction: async () =>
    await UserRepository.setupKYC(bcAddress, password, name, description),
});

const updateAvatarAction = () => ({
  type: UserAction.PENDING_SETUP_KYC,
  pendingAction: async () =>
    await UserRepository.setupKYC(bcAddress, password, name, description),
});

export {
  signInAction,
  signUpAction,
  signOutAction,
  getUserInfoAction,
  cleanUserInfoAction,
  setupKycAction,
};
