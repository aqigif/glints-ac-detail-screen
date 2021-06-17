export const getMovie = filter => {
  return {
    type: 'GET_MOVIE',
    filter,
  };
};

export const setMovie = data => {
  return {
    type: 'SET_MOVIE',
    payload: data,
  };
};
