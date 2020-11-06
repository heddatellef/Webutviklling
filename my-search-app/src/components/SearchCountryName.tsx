import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { setSearchWord } from "../Redux/Actions/countries";
import { useSelector, useDispatch } from "react-redux";
import { ICountry } from '../Redux/types/countries';
import './popup.css';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11

const useStyles = makeStyles((theme: Theme) => 
createStyles({
  typography: {
    padding: theme.spacing(2),
  },
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  button: {
    display: 'block',
    outline: 'none'
  }
}));

export default function CountrySelect() {
  const classes = useStyles();
  const dispatch = useDispatch();

  //for å få opp alle land og velge land
  const [countries, setCountries] = useState<CountryType[]>([]);
  console.log(countries);


//fetcher data og legger det i et interface
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8001/");
      const jsonres: CountryInterfaceFromBackend[]  = await res.json();
      //Sørger for at label i "backend-interfacet" (CountryInterfaceFromBackend) mapper til label i det "frontend-interfacet" (CountryType)
      const fetchedCountries: CountryType[] = jsonres.map((value) => { return { label: value["Country or region"] }});
      setCountries(fetchedCountries);


    }
    fetchData(); 
    
  }, []);

  const [country, setCountry] = useState<ICountry>();

  const [value, setValue] = useState("");

  //opdaterer value når man skriver i søkefeltet
  const handleSearchChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    console.log("Value: ", value);
  }
  /*onTagsChange = (event, values) => {
    this.setState({
      tags: values
    }, () => {
      // This will output an array of objects
      // given by Autocompelte options property.
      console.log(this.state.tags);
    });
  }*/
  
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  //åpner popup vindu når man trykker "Search". Vil også at denne funksjonen skal sette value til det som står i search field 
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log("Anchor: ", anchorEl);

    const res = await fetch("http://localhost:8001/"+value);
      const jsonres: ICountry[]  = await res.json();
      //Sørger for at label i "backend-interfacet" (CountryInterfaceFromBackend) mapper til label i det "frontend-interfacet" (CountryType)
      //const fetchedCountries: CountryType[] = jsonres.map((value) => { return { label: value["Country or region"] }});
      console.log(jsonres);
      setCountry(jsonres[0]);

  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //Koden under er fra material.ui 
  return (
    <div>
    <Autocomplete
      id="country-select-demo"
      style={{ width: 400 }}
      options={countries as CountryType[]}
      classes={{
        option: classes.option,
      }}
      onChange={(e: object, value: any | null) => {
        if (value !== null) {
          setValue(value.label)
        }
        console.log(value)}}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <React.Fragment>
            {option.label}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          variant="outlined"
          onChange={handleSearchChange}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}    
    />
    <Button color="primary" onClick={handleClick} >Search</Button>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
         <h5>{country?.["Country or region"]}</h5>
         <div>Overall rank: {country?.["Overall rank"]}</div>
         <div className="smallDiv"> The overall rank explains how a country is rated compared to the other countries.</div>
         <div>GDP per capita: {country?.["GDP per capita"]}</div>
         <div className="smallDiv">Per capita gross domestic product (GDP) is a metric that breaks down a country's economic output per person and is calculated by dividing the GDP of a country by its population.</div>
         <div>Social support: {country?.["Social support"]}</div>
         <div>Healthy life expectancy: {country?.["Healthy life expectancy"]}</div>
         <div>Freedom to make life choices: {country?.["Freedom to make life choices"]}</div>
         <div>Generosity: {country?.["Generosity"]}</div>
         <div>Perceptions of corruption: {country?.["Perceptions of corruption"]}</div>
        </Typography>
      </Popover>

    </div>
  );
}

export interface CountryType {
  label: string;
}

export interface CountryInterfaceFromBackend {
  "Country or region": string;
}