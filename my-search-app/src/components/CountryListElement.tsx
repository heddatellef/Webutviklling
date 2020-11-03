import { PostAddSharp } from '@material-ui/icons';
import React from 'react';
import { createDocumentRegistry } from 'typescript';
import { useSelector } from 'react-redux';
import { countryReducer } from '../Redux/Reducers/countriesReducer';
import {ICountry, ICountryState} from '../Redux/types/countries';


const CountryListElement = (Country: ICountry) => {
    return (
        <tr>
            <td>{Country["Overall rank"]}</td>
            <td>{Country["Country or region"]}</td>
        </tr>

    )
}

export default CountryListElement;