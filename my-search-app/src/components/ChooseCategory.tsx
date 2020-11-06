import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { emptyList, getErrorMessage, getSearched, setCategory } from '../Redux/Actions/countries';
import Axios from 'axios';

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
  const [open, setOpen] = useState(false);

  const handleChange = async (event: React.ChangeEvent<{ value: any }>) => {
    dispatch(emptyList())
    dispatch(setCategory(event.target.value));
    try {
      const result = await Axios.get (`http://localhost:8001?category=${event.target.value}&limit=10&skip=`) 
      dispatch(getSearched(result.data))
    }
    catch(e){
      dispatch(getErrorMessage("error when searching"))
    }
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
        <InputLabel id="demo-controlled-open-select-label">Rank by category...</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          //value={Cat}
          onChange={handleChange}
        >
          <MenuItem value=""  >
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Overall_rank"}>Overall hapiness rank</MenuItem>
          <MenuItem value={"GDP_per_capita"}>GDP per capita</MenuItem>
          <MenuItem value={"Social_support"}>Social support</MenuItem>
          <MenuItem value={"Healthy_life_expectancy"}>Healthy life expectancy</MenuItem>
          <MenuItem value={"Freedom_to_make_life_choices"}>Freedom to make life choices</MenuItem>
          <MenuItem value={"Generosity"}>Generosity</MenuItem>
          <MenuItem value={"Perceptions_of_corruption"}>Perception of corruption</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}