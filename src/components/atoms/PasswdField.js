import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextValidator } from 'react-material-ui-form-validator';

import { Icon } from '@material-ui/core';
import { Search } from '@material-ui/icons';

export default function PasswdField(props) {
  return <TextValidator {...props} />;
}

PasswdField.defaultProps = {
  label: 'Password',
};
