import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const SigninLink = (props) => {
  return (
    <Link component={RouterLink} {...props}>
      {props.children}
    </Link>
  );
};
SigninLink.defaultProps = {
  variant: 'body2',
  to: '/siginin',
  children: 'Already have an account? Sign in',
};

export default SigninLink;
