import React from 'react';
import { TextValidator } from 'react-material-ui-form-validator';
import { withErrorMessage } from 'utils';

function FormField(props) {
  return <TextValidator {...props} />;
}

export default withErrorMessage(FormField);
