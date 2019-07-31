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
import {
  FirstNameField,
  LastNameField,
  EmailField,
  PasswdField,
  AllowChecbox,
  SignupButton,
  LoginLink,
} from './SignupMolecules';

function SignupTemplate(props) {
  const { classes, values, errors, handleChange, handelSubmit } = props;
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
              <FirstNameField
                value={values.first_name}
                error={errors.first_name}
                onChange={handleChange('first_name')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LastNameField
                value={values.last_name}
                error={errors.last_name}
                onChange={handleChange('last_name')}
              />
            </Grid>
            <Grid item xs={12}>
              <EmailField
                value={values.email}
                error={errors.email}
                onChange={handleChange('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswdField
                value={values.passwd}
                error={errors.passwd}
                onChange={handleChange('passwd')}
              />
            </Grid>
            <Grid item xs={12}>
              <AllowChecbox
                checked={values.allowed}
                onChange={handleChange('allowed')}
              />
            </Grid>
            <SignupButton />
            <Grid container justify="flex-end">
              <Grid item className={classes.link}>
                <LoginLink />
              </Grid>
            </Grid>
          </Grid>
        </ValidatorForm>
      </Paper>
    </Container>
  );
}

export default withStyles(styles)(SignupTemplate);
