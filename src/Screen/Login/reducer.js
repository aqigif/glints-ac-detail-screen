const initialState = {
  isLogin: false,
  password: '',
  email: '',
  responseSuccess: {
    token: null,
  },
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        ...action,
      };
    }

    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        ...action,
        isLogin: true,
      };
    }
    case 'LOGIN_FAILED': {
      return {
        ...state,
        ...action,
        isLogin: false,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        ...action,
        isLogin: false,
      };
    }
    default:
      return state;
  }
};
