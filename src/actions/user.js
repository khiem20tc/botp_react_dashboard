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

export {
  signInAction,
  signUpAction,
  signOutAction,
  getUserInfoAction,
  cleanUserInfoAction,
};
