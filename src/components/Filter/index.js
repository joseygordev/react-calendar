import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './styles';

export default function Filter({label, value, filters, onChange}) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={value}
        onChange={(event) => onChange(event.target.value)}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {filters.map((filter) => (
          <MenuItem key={filter} value={filter}>
            {filter}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  filters: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
