import * as ActionTypes from "../actions/movies";

const initialStateMovies = {
  movies: [],
  isLoadingMovies: false,
};

const initialStateMovie = {
  movie: {},
  isLoadingMovie: false,
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

export const movie = (state = initialStateMovie, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_MOVIE_REQUEST: {
      return {
        ...state,
        isLoadingMovie: true,
      };
    }
    case ActionTypes.LOAD_MOVIE_SUCCESS: {
      const movie = action.response;
      return {
        ...state,
        movie,
        isLoadingMovie: false,
      };
    }
    case ActionTypes.LOAD_MOVIE_FAILURE: {
      console.log(action);
    }

    default:
      return state;
  }
};
