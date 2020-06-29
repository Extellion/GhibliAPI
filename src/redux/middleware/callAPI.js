export const callAPIMiddleware = () => {
  return (next) => (action) => {
    const { promise, types, ...rest } = action;

    const [REQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE] = types;

    next({ ...rest, type: REQUEST_TYPE });

    return promise() // till this isn't process `request` event is on
      .then((response) => next({ ...rest, response, type: SUCCESS_TYPE })) // return success event
      .catch(({ statusCode, error } = {}) => {
        return next({ ...rest, statusCode, error, type: FAILURE_TYPE }); // return failure event
      });
  };
};
