import * as ActionTypes from "../actions/movies";

const initialStateMovies = {
  movies: [],
  isLoadingMovies: false,
};

export const movies = (state = initialStateMovies, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_MOVIES_REQUEST: {
      return {
        ...state,
        isLoadingMovies: true,
      };
    }
    case ActionTypes.LOAD_MOVIES_SUCCESS: {
      const movies = action.response;
      return {
        ...state,
        movies,
        isLoadingMovies: false,
      };
    }
    case ActionTypes.LOAD_MOVIES_FAILURE: {
      console.log(action);
    }

    default:
      return state;
  }
};
