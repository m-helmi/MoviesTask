import { SELECT_MOVIE } from '../actions/types';
const initialState = {
  movie: ''
};
const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_MOVIE:
      return {
        ...state,
        movie: {
          value: action.payload
        }
      };
    default:
      return state;
  }
}
export default movieReducer;