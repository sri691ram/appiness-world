const initialState = {
  isFetching: false,
  isLoggedIn: false,
  error: false,
  userDetail: []
};

export default function CommonReducer(state = initialState, action) {
  switch (action.type) {
    case "onLogin":
      return {
        ...state,
        isFetchingLogin: true
      };
    case "onLoginSuccess":
      return {
        ...state,
        isFetchingLogin: false,
        userDetail: action.user
      };
    case "onLoginFailure":
      return {
        ...state,
        isFetchingLogin: false,
      };
    default:
      return state;
  }
}
