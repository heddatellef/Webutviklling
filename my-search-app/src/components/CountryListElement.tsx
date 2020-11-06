import React from 'react';
import {ICountry} from '../Redux/types/countries';

const CountryListElement = (Country: ICountry) => {

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