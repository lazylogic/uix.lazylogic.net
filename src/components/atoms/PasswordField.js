import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextValidator } from 'react-material-ui-form-validator';
import { withErrorMessage } from 'utils';

function PasswordField(props) {
  const [visibility, setVisibility] = React.useState(false);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  return (
    <TextValidator
      id="adornment-password"
      type={visibility ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClick}
              onMouseDown={handleMouseDown}
            >
              {visibility ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}

PasswordField.defaultProps = {
  label: 'Password',
};

export default withErrorMessage(PasswordField);
