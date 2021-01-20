import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    flexDirection: 'row',
    display: 'flex',
    margin: `${theme.spacing(1.5)}px 0px`,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    padding: theme.spacing(1.5),
  },
}));
