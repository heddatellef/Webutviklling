import { PostAddSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import { createDocumentRegistry } from 'typescript';
import { useSelector } from 'react-redux';
import { countryReducer } from '../Redux/Reducers/countriesReducer';
import {ICountry, ICountryState} from '../Redux/types/countries';

//let category = useSelector<ICountryState, ICountryState["category"]>((state) => state.category); //get current category



const CountryListElement = (Country: ICountry) => {
    /*const [value, setValue] = useState("0");
    const category = useSelector<ICountryState, ICountryState["category"]>((state) => state.category); //get current category
    if (category == "Overall_rank") {
        setValue(Country["Overall_rank"]);
    }
    <td>{value}</td>
    const category = useSelector<ICountryState, ICountryState["category"]>((state) => state.category);
console.log("DETTE ER KATEGORIEN",typeof category);
const [value, setValue] = useState(0) 
if (String(category) == "Healthy_life_expectancy") {
    console.log("Nå ble kategorien satt til Healthy...")
    setValue(Country["Healthy_life_expectancy"])
    console.log("Dette er value:",value);
}

const category = useSelector<ICountryState, ICountryState["category"]>((state) => state.category);
const [v, setV] = useState(0)

const showCategory = () =>{
    if (category === "Overall_rank") {
        setV(Country["Overall_rank"])
    }
}
if (category === "Overall_rank") {
    setV(Country["Overall_rank"])
}


console.log("DETTE ER KATEGORIEN", v);
*/
    return (
        <tr>
            <td>{Country["Country_or_region"]}</td>
            <td>{Country["Overall_rank"]}</td>
            <td>{Country["GDP_per_capita"]}</td>
            <td>{Country["Social_support"]}</td>
            <td>{Country["Healthy_life_expectancy"]}</td>
            <td>{Country["Freedom_to_make_life_choices"]}</td>
            <td>{Country["Generosity"]}</td>
            <td>{Country["Perceptions_of_corruption"]}</td>    
        </tr>

    )
}

export default CountryListElement;