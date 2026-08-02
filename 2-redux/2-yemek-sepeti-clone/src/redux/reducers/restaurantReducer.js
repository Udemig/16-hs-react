import AT from "../actions/actionTypes";

const initialState = {
  loading: true,
  error: null,
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.REST_LOADING:
      return { ...state, loading: true };

    case AT.REST_ERROR:
      return { ...state, loading: false, error: action.payload };

    case AT.REST_SUCCESS:
      return { ...state, loading: false, error: null, restaurants: action.payload };

    default:
      return state;
  }
};

export default restaurantReducer;
