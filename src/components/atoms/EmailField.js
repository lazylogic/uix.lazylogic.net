import React from 'react';
import { TextValidator } from 'react-material-ui-form-validator';

export default function EmailField(props) {
  return <TextValidator {...props} />;
}

EmailField.defaultProps = {
  label: 'Email',
};
