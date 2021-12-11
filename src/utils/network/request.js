import Axios from 'axios';


async function getAxiosRequest(
  config,
  errorHandler,
  token,
){
  try {
    if (token) {
      return await Axios.request({
        ...config,
        headers: {
          ...(config.headers ?? {}),
          Authorization: token,
        },
      });
    }
    return await Axios.request(config);
  } catch (error) {
    throw catchExceptiion(error, errorHandler);
  }
}

function catchExceptiion(error, errorHandler) {
  handle404Error(error);
  if (errorHandler) {
    throw errorHandler(error);
  }
  handleGenericError(error);
  throw new SystemException(error.message, 'error', error.response?.status);
}

function handle404Error(error) {
  if (Number(error.code) === 404 || error.request?.status === 0) {
    throw new SystemException('Trying request was not found', 'error', 404);
  }
}

function handleGenericError(error) {
  if (error.response) {
    const errorData = error.response.data;
    if (!!errorData.code) {
      if (errorData.details?.length === 0) {
        throw new SystemException(`${errorData.code}: ${errorData.message}`, 'error', error.response.status);
      } else {
        throw new SystemException(
          `${errorData.code}: ${errorData.message} ${'/ ' + errorData.details}`,
          'error',
          error.response.status,
        );
      }
    }
  }
}

export default getAxiosRequest;
