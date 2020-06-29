export const LOAD_MOVIES_REQUEST = "LOAD_MOVIES_REQUEST";
export const LOAD_MOVIES_SUCCESS = "LOAD_MOVIES_SUCCESS";
export const LOAD_MOVIES_FAILURE = "LOAD_MOVIES_FAILURE";

const baseUrl = window.baseURL;

const handleResponse = (response) => {
  return response
    .json()
    .then((json) => (response.ok ? json : Promise.reject({ statusCode: response.status, error: json })));
};

export const getMovies = () => ({
  types: [LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE],
  promise: () => fetch(`${baseUrl}/films`).then(handleResponse),
});
