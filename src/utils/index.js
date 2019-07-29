export function getErrorData(error) {
  return error && error.response && error.response.data
    ? error.response.data.data || {}
    : {};
}

export function getErrorMessage(error) {
  return error && error.response && error.response.data
    ? error.response.data.message || ''
    : '';
}

export function getErrorResponse(error) {
  return error && error.response ? error.response.data || {} : {};
}
