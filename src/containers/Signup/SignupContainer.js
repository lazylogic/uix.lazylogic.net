import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { withStyles } from '@material-ui/styles';
import * as Utils from 'utils';

// import components
import * as CONST from 'config/constants';
import styles from './SignupStyles';
import SignupTemplate from './SignupTemplate';
import FormField from 'components/atoms/FormField';
import EmailField from 'components/atoms/EmailField';
import PasswdField from 'components/atoms/PasswdField';
import Checkbox from 'components/atoms/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

function SignupContainer(props) {
  // read props
  const { Template, classes, onSignup } = props;

  // init state
  const [user, setUser] = React.useState({
    first_name: 'a',
    last_name: 'b',
    email: 'a@b.c',
    passwd: '12345678',
    allowed: false,
  });

  const [errors, setError] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    passwd: '',
  });

  const handleChange = (name) => (event, checked) => {
    setUser({
      ...user,
      [name]: checked === undefined ? event.target.value : checked,
    });
    setError({
      ...errors,
      [name]: '',
    });
  };

  const handleSignup = () => {
    onSignup(user)
      .then((response) => {
        console.log(response);
        // TODO: 회원 가입 성공 처리. 팝업 등
      })
      .catch((error) => {
        console.log(error, error.response);
        const data = Utils.getErrorData(error);
        setError({
          first_name: data.first_name ? data.first_name[0] : '',
          last_name: data.last_name ? data.last_name[0] : '',
          email: data.email ? data.email[0] : '',
          passwd: data.passwd ? data.passwd[0] : '',
        });
      });
  };

  // define components
  const FirstName = (
    <FormField
      id="signup-first_name"
      label="First Name *"
      fullWidth
      value={user.first_name}
      onChange={handleChange('first_name')}
      helperText={errors.first_name}
      error={errors.first_name.length > 0}
      validators={['required']}
      errorMessages={['this field is required']}
    />
  );

  const LastName = (
    <FormField
      id="signup-last_name"
      label="Last Name *"
      fullWidth
      value={user.last_name}
      onChange={handleChange('last_name')}
      helperText={errors.last_name}
      error={errors.last_name.length > 0}
      // validators={['required']}
      // errorMessages={['this field is required']}
    />
  );

  const Email = (
    <EmailField
      id="signup-email"
      label="Email *"
      fullWidth
      value={user.email}
      onChange={handleChange('email')}
      helperText={errors.email}
      error={errors.email.length > 0}
      // validators={['required', 'isEmail']}
      // errorMessages={['this field is required', 'email is not valid']}
    />
  );

  const Passwd = (
    <PasswdField
      id="signup-passwd"
      label="Password *"
      fullWidth
      value={user.passwd}
      onChange={handleChange('passwd')}
      helperText={errors.passwd}
      error={errors.passwd.length > 0}
      // validators={['required', `matchRegexp:${CONST.PATTERN_PASSWD}`]}
      // errorMessages={['this field is required', 'password is not valid']}
    />
  );

  const Allow = (
    <Checkbox
      value="1"
      color="primary"
      label="I want to receive inspiration, marketing promotions and updates via email."
      checked={user.allowed}
      onChange={handleChange('allowed')}
    />
  );

  const Signup = (
    <Button type="submit" variant="contained" color="primary" fullWidth>
      Signup
    </Button>
  );

  const Signin = (
    <Link variant="body2" component={RouterLink} to="/siginin">
      Already have an account? Sign in
    </Link>
  );

  return (
    <Template
      FirstNameField={FirstName}
      LastNameField={LastName}
      EmailField={Email}
      PasswdField={Passwd}
      AllowCheckbox={Allow}
      SignupButton={Signup}
      SigninLink={Signin}
      handelSubmit={handleSignup}
    />
  );
}

SignupContainer.defaultProps = {
  Template: SignupTemplate,
};

export default inject(({ userStore }) => ({
  onSignup: userStore.create,
}))(observer(withStyles(styles)(SignupContainer)));
