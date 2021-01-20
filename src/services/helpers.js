import {format, parseISO, getHours, differenceInDays} from 'date-fns';

import {DAYS_PER_WEEK} from '../constants/config';

const beforeFormatDate = (date) =>
  format(new Date(parseISO(date)), 'MM/dd/yyyy');

const getHoursFromDate = (date) => getHours(new Date(date));

const formatData = (data) => {
  const result = {
    filters: {
      instructors: [],
      eventType: [],
    },
    label: '',
    week: [],
    maxHoursDay: 0,
    firstHour: '',
  };

  let firstHour = null;
  let lastHour = null;

  let firstDate = null;
  let lastDate = null;

  data
    .sort((a, b) => {
      return new Date(a.dateTime) - new Date(b.dateTime);
    })
    .filter((item) => {
      const currentDateTime = new Date(beforeFormatDate(item.dateTime));
      const currentHour = getHoursFromDate(item.dateTime) + 2;

      if (!firstDate) {
        firstDate = beforeFormatDate(item.dateTime);
      }

      if (!firstHour || currentHour < firstHour) {
        firstHour = currentHour;
      }

      if (!lastHour || currentHour > lastHour) {
        lastHour = currentHour;
      }

      const differenceIsSmaller =
        differenceInDays(currentDateTime, new Date(firstDate)) <=
        DAYS_PER_WEEK - 1;
      if (differenceIsSmaller) {
        lastDate = currentDateTime;
      }

      return differenceIsSmaller && item;
    })
    .forEach((item) => {
      if (result.week.length === DAYS_PER_WEEK) {
        return;
      }

      if (!result.filters.eventType.includes(item.eventType)) {
        result.filters.eventType.push(item.eventType);
      }

      if (!result.filters.instructors.includes(item.instructor)) {
        result.filters.instructors.push(item.instructor);
      }

      result.label = `${format(new Date(firstDate), 'dd MMM')} - ${format(
        new Date(lastDate),
        'dd MMM',
      )}`.toUpperCase();

      const currentDate = format(
        new Date(beforeFormatDate(item.dateTime)),
        'EEE dd.L',
      );
      const dateForTime = new Date(item.dateTime);
      const time = {
        hours: Number(format(dateForTime, 'k')) + 2,
        minutes: format(dateForTime, 'mm'),
      };
      const currentItem = result.week[result.week.length - 1];

      if (currentItem && currentItem.name === currentDate) {
        result.week[result.week.length - 1].items.push({
          ...item,
          time,
        });
      } else {
        result.week.push({
          name: currentDate,
          items: [{...item, time}],
        });
      }
    });

  return {
    ...result,
    maxHoursDay: lastHour - firstHour + 1,
    firstHour,
  };
};

export {formatData, getHoursFromDate};
