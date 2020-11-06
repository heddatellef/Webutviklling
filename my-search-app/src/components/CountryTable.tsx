import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { ICountry, ICountryState } from '../Redux/types/countries';
import Axios from 'axios';
import { getErrorMessage, getSearched, setSkip } from '../Redux/Actions/countries';
import { Table } from '@material-ui/core';
import CountryListElement from './CountryListElement';
import { findAllByAltText } from '@testing-library/react';

const CountryTable = () => {
    const searchWord = useSelector<ICountryState, ICountryState["searchWord"]>((state) => state.searchWord); //get current search word
    const skip = useSelector<ICountryState, ICountryState["skip"]>((state) => state.skip); //get current skip
    const brand = useSelector<ICountryState, ICountryState["brand"]>((state) => state.brand); //get current brand
    const rating = useSelector<ICountryState, ICountryState["rating"]>((state) => state.rating); //get current rating
    const sort = useSelector<ICountryState, ICountryState["sort"]>((state) => state.sort); //get current sort
    
    const countries: ICountry[] = useSelector (
        (state: ICountryState) => state.countries)
        const dispatch = useDispatch();

   /*const [countries, setCountry]  = useState<Array<string>>([]);
   /*const dispatch = useDispatch();

   useEffect(() => {
       async function fetchData() {
         const res = await fetch("http://localhost:8001/");
         res.json().then(res => setCountry(res));
   
       }
       fetchData(); 
       
     }, []);*/

    const loadMoreCountryClick = async() => {
        dispatch(setSkip(skip+10))
        try {
            const result = await Axios.get ('http://localhost:8001/')
            dispatch(getSearched(result.data))
        }
        catch(e){
            dispatch(getErrorMessage("error when searching"))
        }
    };

    
    return (
        <div>
            <div>
                <h1>Resultater</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Overall rank</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((ICountry) => <CountryListElement { ...ICountry} />)}
                    </tbody>
                </Table>
            </div>
        <button onClick={() => loadMoreCountryClick()}>Load more</button>
        </div>
    );
};

export default CountryTable;