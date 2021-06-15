const initialState = {
  isLogin: false,
  password: '',
  email: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        isLogin: true,
      };
    }

    default:
      return state;
  }
};