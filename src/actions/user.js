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

const saveNotKycAccountAction = (username, password, bcAddress) => ({
  type: UserAction.SAVE_NOT_KYC_ACCOUNT,
  data: { username, password, bcAddress },
});

const clearNotKycAccountAction = () => ({
  type: UserAction.CLEAR_NOT_KYC_ACCOUNT,
});

const uploadAvatarFileAction = (bcAddress, avatarFile) => ({
  type: UserAction.PENDING_UPLOAD_AVATAR_FILE,
  pendingAction: async () =>
    await UserRepository.uploadAvatarFile(bcAddress, avatarFile),
});

const changeAvatarUrlAction = (bcAddress, avatarUrl) => ({
  type: UserAction.PENDING_CHANGE_AVATAR_URL,
  pendingAction: async () =>
    await UserRepository.changeAvatarUrl(bcAddress, avatarUrl),
});

export {
  signInAction,
  signUpAction,
  signOutAction,
  getUserInfoAction,
  cleanUserInfoAction,
  setupKycAction,
  saveNotKycAccountAction,
  clearNotKycAccountAction,
  uploadAvatarFileAction,
  changeAvatarUrlAction,
};
