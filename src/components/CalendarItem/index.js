import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {COMMITMENT_HEIGHT} from '../../constants/config';

import useStyles from './styles';

export default function CalendarItem({item, firstHour}) {
  const classes = useStyles();

  const handleTop = () =>
    (Number(item.time.hours + item.time.minutes) / 100 - firstHour) *
    COMMITMENT_HEIGHT;

  return (
    <div
      className={classes.root}
      style={{
        top: handleTop(),
      }}>
      <div className={classes.containerTime}>
        <Typography className={classes.time} variant="body2">
          {`${item.time.hours}:${item.time.minutes}`}
        </Typography>
        <Typography className={classes.time} variant="body2">
          {item.duration} min
        </Typography>
      </div>
      <div className={classes.containerType}>
        <Typography
          className={clsx(classes.type, classes.instructor)}
          variant="subtitle1">
          {item.instructor}
        </Typography>
        <Typography className={classes.type} variant="caption">
          {item.eventType}
        </Typography>
      </div>
      <Button
        className={classes.buttonBook}
        disabled={!item.bookable}
        variant="contained"
        color="primary">
        book
      </Button>
    </div>
  );
}

CalendarItem.propTypes = {
  item: PropTypes.shape({
    dateTime: PropTypes.string,
    duration: PropTypes.number,
    time: PropTypes.shape({
      hours: PropTypes.number,
      minutes: PropTypes.string,
    }),
    instructor: PropTypes.string,
    eventType: PropTypes.string,
    bookable: PropTypes.bool,
  }).isRequired,
  firstHour: PropTypes.number.isRequired,
};
