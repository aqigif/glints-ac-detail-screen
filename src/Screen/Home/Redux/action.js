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

export const movieDetail = data => {
  return {
    type: 'MOVIE_DETAIL',
    dataDetail: data,
  };
};

export const giveReview = request => {
  return {
    type: 'MOVIE_REVIEW',
    request,
  };
};

export const giveReviewSuccess = request => {
  return {
    type: 'MOVIE_REVIEW_SUCCESS',
    request,
  };
};

export const giveReviewFailed = request => {
  return {
    type: 'MOVIE_REVIEW_FAILED',
    request,
  };
};
