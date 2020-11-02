import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function CountrySelect() {
  const classes = useStyles();

  const [countries, setCountries] = useState<CountryType[]>([]);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8029/");
      const jsonres: CountryInterfaceFromBackend[]  = await res.json();
      const fetchedCountries: CountryType[] = jsonres.map((value) => { return { label: value["Country or region"] }});
      setCountries(fetchedCountries);
      console.log(fetchedCountries);

    }
    fetchData(); 
    
  }, []);

  return (
    <Autocomplete
      id="country-select-demo"
      style={{ width: 400 }}
      options={countries as CountryType[]}
      classes={{
        option: classes.option,
      }}
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
          label="Choose a country..."
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

export interface CountryType {
  label: string;
}

export interface CountryInterfaceFromBackend {
  "Country or region": string;
}