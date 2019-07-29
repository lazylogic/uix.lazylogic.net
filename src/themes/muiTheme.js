import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  props: {
    MuiInputBase: {
      margin: 'dense',
    },
    MuiTextField: {
      margin: 'dense',
      variant: 'outlined',
    },
    MuiButton: {
      margin: 'dense',
      variant: 'contained',
    },
  },
});
