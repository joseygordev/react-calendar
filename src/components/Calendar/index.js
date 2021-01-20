import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

import {COMMITMENT_HEIGHT} from '../../constants/config';

import CalendarItem from '../CalendarItem';

import useStyles from './styles';

export default function Calendar({week, maxHoursDay, firstHour}) {
  const classes = useStyles();

  const handleHeight = () => maxHoursDay * COMMITMENT_HEIGHT;

  return (
    <div className={classes.containerCalendar}>
      <GridList className={classes.gridList} cols={2.5}>
        {week.map((day) => (
          <div key={day.name} className={classes.containerCommitment}>
            <div className={classes.containerDayName}>
              <Typography variant="body2" className={classes.dayName}>
                {day.name}
              </Typography>
            </div>
            <GridListTile
              style={{
                height: handleHeight(day.items[day.items.length - 1]?.dateTime),
              }}
              className={classes.containerDay}>
              {day.items.map((item) => (
                <CalendarItem
                  // eslint-disable-next-line no-underscore-dangle
                  key={item._id}
                  firstHour={firstHour}
                  item={item}
                />
              ))}
            </GridListTile>
          </div>
        ))}
      </GridList>
    </div>
  );
}

Calendar.propTypes = {
  week: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  maxHoursDay: PropTypes.number.isRequired,
  firstHour: PropTypes.number.isRequired,
};
