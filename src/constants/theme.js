import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#495156',
    },
    secondary: {
      main: '#8aca80',
    },
    background: {
      default: '#fafafb',
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        color: '#565656',
      },
    },
  },
});

export default theme;
