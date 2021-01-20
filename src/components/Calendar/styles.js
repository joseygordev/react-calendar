import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  containerCalendar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  containerCommitment: {
    flexDirection: 'column',
    height: 'auto !important',
    overflow: 'hidden',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    margin: `0px ${theme.spacing(0.8)}px`,
    minWidth: 150,
  },
  containerDayName: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1.4),
  },
  dayName: {
    textAlign: 'center',
    color: theme.palette.common.white,
    margin: 0,
  },
  containerDay: {
    minWidth: '150px !important',
    width: '150px !important',
    minHeight: '100%',
    position: 'relative',
    backgroundColor: theme.palette.grey[200],
  },
}));
