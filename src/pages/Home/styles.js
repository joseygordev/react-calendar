import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    backgroundColor: theme.palette.background.default,
  },
  filters: {
    flexDirection: 'column',
    display: 'flex',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
}));
