import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

export default function CurrentWeek({label}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h6">
        {label}
      </Typography>
      <Button href="#" color="primary">
        NEXT WEEK
      </Button>
    </div>
  );
}

CurrentWeek.propTypes = {
  label: PropTypes.string.isRequired,
};
