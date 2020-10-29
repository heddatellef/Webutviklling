import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(5),
    },
    formControl: {
      margin: theme.spacing(5),
      minWidth: 290,
    },
  }),
);

export default function ChoseCategory() {
  const classes = useStyles();
  const [age, setAge] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Sort by category...</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Overall rank</MenuItem>
          <MenuItem value={20}>GPD per capita</MenuItem>
          <MenuItem value={10}>Social support</MenuItem>
          <MenuItem value={20}>Healthy life expectancy</MenuItem>
          <MenuItem value={30}>Freedom to make life choices</MenuItem>
          <MenuItem value={30}>Generosity</MenuItem>
          <MenuItem value={30}>Perception of corruption</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}