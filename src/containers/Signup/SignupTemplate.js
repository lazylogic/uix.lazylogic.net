import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import makeStyles from './SignupStyles';

export default function SignupTemplate(props) {
  const classes = makeStyles();
  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        Signup
        {props.email}
        {props.passwd}
      </Paper>
    </Container>
  );
}
