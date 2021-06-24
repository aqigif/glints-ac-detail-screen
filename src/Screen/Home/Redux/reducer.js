const initialState = {
  listData: [{}],
  listCart: [{}],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return {
        ...state,
        listData: action.payload,
      };
    case 'MOVIE_DETAIL':
      return {
        ...state,
        dataDetail: action.dataDetail,
      };
    case 'SAVE_TO_CART':
      const theListCart = Array.from(state?.listCart || []);
      return {
        listCart: [...theListCart, action.product],
      };
    default:
      return state;
  }
};
