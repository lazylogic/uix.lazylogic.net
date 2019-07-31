import React from 'react';
import Button from '@material-ui/core/Button';
import PasswordField from 'components/atoms/PasswordField';
import FormField from 'components/atoms/FormField';
import Checkbox from 'components/atoms/Checkbox';
import SigninLink from 'components/atoms/SigninLink';
import { PATTERN_PASSWD } from 'config/constants';

export const FirstNameField = (props) => {
  return <FormField {...props} />;
};
FirstNameField.defaultProps = {
  id: 'signup-first_name',
  label: 'First Name *',
  fullWidth: true,
  validators: ['required'],
  errorMessages: ['First Name is required'],
};

export const LastNameField = (props) => {
  return <FormField {...props} />;
};
LastNameField.defaultProps = {
  id: 'signup-last_name',
  label: 'Last Name *',
  fullWidth: true,
  validators: ['required'],
  errorMessages: ['Last Name is required'],
};

export const EmailField = (props) => {
  return <FormField {...props} />;
};
EmailField.defaultProps = {
  id: 'signup-email',
  label: 'Email *',
  fullWidth: true,
  validators: ['required'],
  errorMessages: ['Email is required'],
};

export const PasswdField = (props) => {
  return <PasswordField {...props} />;
};
PasswdField.defaultProps = {
  id: 'signup-passwd',
  label: 'Password *',
  helperText: 'asdfasdfsadfasfd',
  fullWidth: true,
  validators: ['required', 'minStringLength:4'],
  errorMessages: ['this field is required', 'password is too short'],
};

export const AllowChecbox = (props) => {
  return <Checkbox {...props} />;
};
AllowChecbox.defaultProps = {
  value: '1',
  color: 'primary',
  label:
    'I want to receive inspiration, marketing promotions and updates via email.',
  checked: false,
};

export const SignupButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};
SignupButton.defaultProps = {
  type: 'submit',
  variant: 'contained',
  color: 'primary',
  fullWidth: true,
  children: 'Sign Up',
};

export const LoginLink = (props) => {
  return <SigninLink {...props}>{props.children}</SigninLink>;
};
