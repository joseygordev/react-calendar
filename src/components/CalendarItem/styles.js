import {makeStyles} from '@material-ui/core/styles';

export const ITEM_HEIGHT = 100;
export const ITEM_WIDTH = 200;

export default makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: `calc(100% - ${theme.spacing(2)}px)`,
    maxWidth: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#8aca80',
    borderBottomStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#8aca80',
    borderTopStyle: 'solid',
    padding: theme.spacing(1),
  },
  containerTime: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  containerType: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  type: {
    lineHeight: 1.4,
  },
  instructor: {
    color: '#8aca80',
    fontWeight: 'bold',
  },
  buttonBook: {
    display: 'flex',
    margin: 'auto',
    marginTop: theme.spacing(0.5),
    backgroundColor: '#8aca80',
    '&:hover': {
      backgroundColor: '#8aca80',
      opacity: 0.8,
    },
  },
}));
