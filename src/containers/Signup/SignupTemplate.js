import React from 'react';
import { withStyles } from '@material-ui/styles';

// import components
import styles from './SignupStyles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ValidatorForm } from 'react-material-ui-form-validator';

function SignupTemplate(props) {
  const { classes } = props;
  const {
    FirstNameField,
    LastNameField,
    EmailField,
    PasswdField,
    AllowCheckbox,
    SignupButton,
    SigninLink,
    handelSubmit,
  } = props;

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <ValidatorForm className={classes.form} onSubmit={handelSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {FirstNameField}
            </Grid>
            <Grid item xs={12} sm={6}>
              {LastNameField}
            </Grid>
            <Grid item xs={12}>
              {EmailField}
            </Grid>
            <Grid item xs={12}>
              {PasswdField}
            </Grid>
            <Grid item xs={12}>
              {AllowCheckbox}
            </Grid>
            {SignupButton}
            <Grid container justify="flex-end">
              <Grid item className={classes.link}>
                {SigninLink}
              </Grid>
            </Grid>
          </Grid>
        </ValidatorForm>
      </Paper>
    </Container>
  );
}

export default withStyles(styles)(SignupTemplate);
