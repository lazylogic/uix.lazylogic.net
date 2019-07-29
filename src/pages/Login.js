import React from 'react';
import { Redirect } from 'react-router';
import Page from 'pages/templates/DefaultTempate';

export default function Login() {
  return <Redirect to="/signup" />;
}
