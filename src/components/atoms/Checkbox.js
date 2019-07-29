import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { default as MuiCheckbox } from '@material-ui/core/Checkbox';

export default function Checkbox(props) {
  return (
    <FormControlLabel
      label={props.label}
      onChange={props.onChange}
      control={<MuiCheckbox {...props} />}
    />
  );
}
