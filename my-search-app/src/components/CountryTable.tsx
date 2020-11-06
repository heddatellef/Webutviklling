import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ICountry, ICountryState } from '../Redux/types/countries';
import Axios from 'axios';
import { getErrorMessage, getSearched, setSkip } from '../Redux/Actions/countries';
import CountryListElement from './CountryListElement';
import { Button, Table } from '@material-ui/core';
import './CountryTable.css';

const CountryTable = () => {
    const countries: ICountry[] = useSelector (
        (state: ICountryState) => state.countries)
    const dispatch = useDispatch();
    const skip = useSelector<ICountryState, ICountryState["skip"]>((state) => state.skip); //get current skip
    const category = useSelector<ICountryState, ICountryState["category"]>((state) => state.category); //get current category

    useEffect(() => {     
        loadMoreCountryClick();
    },[]);

    const loadMoreCountryClick = async() => {
        dispatch(setSkip(skip+10))
        try {
            const result = await Axios.get (`http://localhost:8001?category=${category}&limit=10&skip=${skip}`) 
            dispatch(getSearched(result.data))
        }
        catch(e){
            dispatch(getErrorMessage("error when searching"))
        }
    };

    
    return (
        <div>
            <div>
                <Table >
                    <thead>
                        <tr>
                            <th>COUNTRY</th>
                            <th>Overall happiness rank</th>
                            <th>GDP per capita</th>
                            <th>Social support</th>
                            <th>Healty life expectancy</th>
                            <th>Freedom to make life choices</th>
                            <th>Generosity</th>
                            <th>Perceptions of corruption</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((ICountry) => <CountryListElement { ...ICountry} key={ICountry._id}/>)}
                    </tbody>
                </Table>
            </div>
            <br/>
            <br/>
        <Button color="primary" onClick={() => loadMoreCountryClick()}>Load more...</Button>
        </div>
    );
};

export default CountryTable;