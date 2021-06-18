export const loginAction = request => {
  return {
    type: 'LOGIN',
    request,
    responseSuccess: null,
    responseError: null,
  };
};
export const loginSucces = responseSuccess => {
  return {
    type: 'LOGIN_SUCCESS',
    responseSuccess,
    responseError: null,
  };
};

export const loginFailed = responseError => {
  return {
    type: 'LOGIN_FAILED',
    responseError,
    responseSuccess: null,
  };
};
export const logoutAction = response => {
  return {
    type: 'LOGOUT',
    response,
    responseSuccess: null,
    responseError: null,
  };
};
