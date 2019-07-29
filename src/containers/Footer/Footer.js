import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './FooterStyles';

const Footer = (props) => {
  const { classes } = props;
  return <div className={classes.root}>푸터</div>;
};

export default withStyles(styles)(Footer);
