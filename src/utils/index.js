import React from 'react';

export function withErrorMessage(WrappedField) {
  return class extends React.Component {
    render() {
      const { helperText, error } = this.props;
      return (
        <WrappedField
          {...this.props}
          helperText={error ? error : helperText}
          error={error !== undefined && error.length > 0}
        />
      );
    }
  };
}

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
