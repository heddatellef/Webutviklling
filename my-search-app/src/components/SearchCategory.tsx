import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {ICountry, ICountryState} from '../Redux/types/countries';
import { useDispatch } from 'react-redux';
import { setCategory } from '../Redux/Actions/countries';

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

  const dispatch = useDispatch();


  const classes = useStyles();

  const [cat, setCat] = React.useState("");
  //React.useState<string | string>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCat(event.target.value as string);
    dispatch(setCategory(cat));
    console.log("hei", cat);

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
          value={cat}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Overall rank"}>Overall rank</MenuItem>
          <MenuItem value={"GDP per capita"}>GPD per capita</MenuItem>
          <MenuItem value={"Social support"}>Social support</MenuItem>
          <MenuItem value={"Healthy life expectancy"}>Healthy life expectancy</MenuItem>
          <MenuItem value={"Freedom to make life choices"}>Freedom to make life choices</MenuItem>
          <MenuItem value={"Generosity"}>Generosity</MenuItem>
          <MenuItem value={"Perception of corruption"}>Perception of corruption</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}