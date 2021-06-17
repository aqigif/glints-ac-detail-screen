const initialState = {
  listData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return {
        ...state,
        listData: action.payload,
      };
    default:
      return state;
  }
};
