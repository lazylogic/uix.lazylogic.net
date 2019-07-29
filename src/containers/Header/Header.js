import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/styles';

// import components
import styles from './HeaderStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" component={RouterLink} to="/">
              News {props.title}
            </Link>
          </Typography>
          <Button variant="text" color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
          <Button variant="text" color="inherit" component={RouterLink} to="/signup">
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default inject(({ userStore }) => ({
  user: userStore.user,
  isLogin: userStore.isLogin
}))(observer(withStyles(styles)(ButtonAppBar)));
