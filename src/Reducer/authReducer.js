import { authFeatures } from "../Constants/constants";

const authReducer = (prev, action) => {
  const { SET_TOKEN, SET_ISAUTHENTICATED, SET_USERINFO, CLEAR_AUTH } =
    authFeatures;
  switch (action.type) {
    case SET_TOKEN:
      return { ...prev, token: action.payload };
    case SET_ISAUTHENTICATED:
      return { ...prev, isAuthenticated: action.payload };
    case SET_USERINFO:
      return { ...prev, userInfo: action.payload };
    case CLEAR_AUTH:
      return {
        isAuthenticated: false,
        token: null,
        userInfo: null,
      };
    default:
      return prev;
  }
};

export default authReducer;
