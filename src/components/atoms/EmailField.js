import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function EmailField(props) {
  return <TextField {...props} />;
}

EmailField.defaultProps = {
  label: 'Email'
};
