import { PostAddSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import { createDocumentRegistry } from 'typescript';
import { useSelector } from 'react-redux';
import { countryReducer } from '../Redux/Reducers/countriesReducer';
import {ICountry, ICountryState} from '../Redux/types/countries';

//let category = useSelector<ICountryState, ICountryState["category"]>((state) => state.category); //get current category


const CountryListElement = (Country: ICountry) => {
    const category = useSelector<ICountryState, ICountryState["category"]>((state) => state.category);
    /*const [value, setValue] = useState("0");
    const category = useSelector<ICountryState, ICountryState["category"]>((state) => state.category); //get current category
    if (category == "Overall_rank") {
        setValue(Country["Overall_rank"]);
    }
    <td>{value}</td>
    const [value, setValue] = useState(0) 

if (category == "Healthy_life_expectancy") {
    setValue(Country["Healthy_life_expectancy"])
}
*/

console.log("DETTE ER KATEGORIEN",typeof category);


    return (
        <tr>
            <td></td>
            <td>{Country["Country_or_region"]}</td>
            <td>{Country["Overall_rank"]}</td>
        </tr>

    )
}

export default CountryListElement;