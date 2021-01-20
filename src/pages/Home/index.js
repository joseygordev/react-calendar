import React, {useEffect} from 'react';

import Calendar from '../../components/Calendar';
import CurrentWeek from '../../components/CurrentWeek';
import Filter from '../../components/Filter';

import {formatData} from '../../services/helpers';

import dataJson from '../../data/calendar.json';

import useStyles from './styles';

export default function SingleLineGridList() {
  const classes = useStyles();
  const [instructor, setInstructor] = React.useState('');
  const [eventType, setEventType] = React.useState('');
  const [data, setData] = React.useState({});
  const [dataFiltered, setDataFiltered] = React.useState({});

  useEffect(() => {
    setData(formatData(dataJson));
  }, []);

  useEffect(() => {
    if (data?.week?.length) {
      setDataFiltered({
        ...data,
        week: data.week.map((week) => {
          return {
            ...week,
            items: week.items.filter((item) => {
              if (!eventType && !instructor) {
                return item;
              }
              if (eventType && instructor) {
                return (
                  eventType &&
                  item.eventType === eventType &&
                  instructor &&
                  item.instructor === instructor
                );
              }
              return (
                (eventType && item.eventType === eventType) ||
                (instructor && item.instructor === instructor)
              );
            }),
          };
        }),
      });
    }
  }, [eventType, instructor]);

  const handleInstructors = (value) => {
    setInstructor(value);
  };

  const handleEventType = (value) => {
    setEventType(value);
  };

  if (!data.week || !data.week.length) return null;

  return (
    <div className={classes.root}>
      <div className={classes.filters}>
        <Filter
          label="ALL INSTRUCTORS"
          value={instructor}
          filters={data.filters.instructors}
          onChange={handleInstructors}
        />
        <Filter
          label="ALL CLASS TYPES"
          value={eventType}
          filters={data.filters.eventType}
          onChange={handleEventType}
        />
      </div>
      <CurrentWeek label={data.label} />
      <Calendar
        maxHoursDay={data.maxHoursDay}
        firstHour={data.firstHour}
        week={dataFiltered.week || data.week}
      />
      <CurrentWeek label={data.label} />
    </div>
  );
}
