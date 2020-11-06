import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { ICountry, ICountryState } from '../Redux/types/countries';
import Axios from 'axios';
import { getErrorMessage, getSearched, setSkip, setCategory } from '../Redux/Actions/countries';
import CountryListElement from './CountryListElement';
import { Button, Table } from '@material-ui/core';
import './CountryTable.css';

const CountryTable = () => {
    const countries: ICountry[] = useSelector (
        (state: ICountryState) => state.countries)
    const dispatch = useDispatch();
    const searchWord = useSelector<ICountryState, ICountryState["searchWord"]>((state) => state.searchWord); //get current search word
    const skip = useSelector<ICountryState, ICountryState["skip"]>((state) => state.skip); //get current skip
    const sort = useSelector<ICountryState, ICountryState["sort"]>((state) => state.sort); //get current sort
    const limit = useSelector<ICountryState, ICountryState["limit"]>((state) => state.limit); //get current sort
    const category = useSelector<ICountryState, ICountryState["category"]>((state) => state.category); //get current category

    //const [Sk, setSk] = useState(10);
    //const [Cat, setCat] = useState("");

    useEffect(() => {     
        loadMoreCountryClick();
    },[]);

    const loadMoreCountryClick = async() => {
        dispatch(setSkip(skip+10))
        //setSk(Sk+10)
        try {
            const result = await Axios.get (`http://localhost:8001?category=${category}&limit=10&skip=${skip}`) 
            dispatch(getSearched(result.data))
            console.log("getSearched",result.data)
            console.log("contries:",countries)
            console.log("result:",result)
            //console.log("local skip:",Sk)
            console.log("global skip:",skip)
            console.log("limit:",limit)
            console.log("category:", category)
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
                            <th>Value for selected category</th> 
                            <th>Country</th>
                            <th>Overall rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((ICountry) => <CountryListElement { ...ICountry} key={ICountry._id}/>)}
                    </tbody>
                </Table>
            </div>
        <Button onClick={() => loadMoreCountryClick()}>Load more...</Button>
        </div>
    );
};

export default CountryTable;