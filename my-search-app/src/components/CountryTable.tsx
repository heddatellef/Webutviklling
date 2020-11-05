import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { ICountry, ICountryState } from '../Redux/types/countries';
import Axios from 'axios';
import { getErrorMessage, getSearched, setSkip, setCategory } from '../Redux/Actions/countries';
import { Table } from '@material-ui/core';
import CountryListElement from './CountryListElement';
import { findAllByAltText } from '@testing-library/react';

const CountryTable = () => {
    const countries: ICountry[] = useSelector (
        (state: ICountryState) => state.countries)
    const dispatch = useDispatch();
    const searchWord = useSelector<ICountryState, ICountryState["searchWord"]>((state) => state.searchWord); //get current search word
    const skip = useSelector<ICountryState, ICountryState["skip"]>((state) => state.skip); //get current skip
    const sort = useSelector<ICountryState, ICountryState["sort"]>((state) => state.sort); //get current sort
    const cat = useSelector<ICountryState, ICountryState["category"]>((state) => state.category); //get current category
    //console.log(category);
    //const [cat, setCat] = useState("Overall rank");

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
            const result = await Axios.get (`http://localhost:8001?category=${cat}&limit=10&skip=${skip}`) 
            dispatch(getSearched(result.data))
            console.log("result:",result)
            console.log("skip:",skip)
            console.log("category:", cat)
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
                        {countries.map((ICountry) => <CountryListElement { ...ICountry} key={ICountry._id}/>)}
                    </tbody>
                </Table>
            </div>
        <button onClick={() => loadMoreCountryClick()}>Load more</button>
        </div>
    );
};

export default CountryTable;