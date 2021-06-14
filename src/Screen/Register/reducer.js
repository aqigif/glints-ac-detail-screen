const initialState = {
  password: '',
  email: '',
  username: '',
  fullname: '',
};

export const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {
        ...state,
        password: action.payload.password,
        email: action.payload.email,
        username: action.payload.username,
        fullname: action.payload.fullname,
      };
    default:
      return state;
  }
};
