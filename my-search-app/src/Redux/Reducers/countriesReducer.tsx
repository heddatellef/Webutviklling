import {Reducer} from 'redux';
import { 
    Action, 
    ICountryState
} from '../types/countries';
import {COUNTRY} from '../types/actionTypes';
import countries from '../../components/CountryListElement';
import Axios from 'axios';
import { getErrorMessage, getSearched } from '../Actions/countries';
import { useDispatch } from 'react-redux';

/*const dispatch = useDispatch();

const setInitialCountries = async () => {
    try {
      const result = await Axios.get (`http://localhost:8001?category=&limit=10&skip=0`) 
      return dispatch(getSearched(result.data))
    }
    catch(e){
      dispatch(getErrorMessage("error"))
    }
}*/

//state when starting the website
const initialState = {
    countries: [], //setInitialCountries
    searchWord: "",
    skip: 0,
    limit: 10,
    sort: 1,
    category: "",
}


//reducer list and filters/sort
export const countryReducer: Reducer<ICountryState, Action> = (
    state: ICountryState = initialState,
    action: Action
)=> {
    switch(action.type){
        case COUNTRY.SET_SKIP:      
            if (typeof action.payload !== 'number'){
                return state;
            } 
            state = {...state, skip: action.payload }
            return state

        case COUNTRY.SET_CATEGORY:
            if (typeof action.payload !== 'string'){
                return state;
            } 
            state = {...state, category: action.payload }
            return state

        case COUNTRY.SET_LIMIT:
            if (typeof action.payload !== 'number'){
                return state;
            } 
            state = {...state, limit: action.payload}
            return state

        case COUNTRY.SET_SORTING:
            if (typeof action.payload !== 'number'){
                return state;
            } 
            state = {...state, sort: action.payload}
            return state

        case COUNTRY.SET_SEARCH_WORD:       
            if (typeof action.payload !== 'string'|| typeof action.payload === 'number'){
                return state;
            } 
            state = {...state, countries:state.countries, searchWord: action.payload }

            return state

        case COUNTRY.GET_SEARCHED:
          
            if (typeof action.payload === 'string' || typeof action.payload === 'number' ||typeof action.payload === 'boolean' ){
                return state;            }
            for (let item of action.payload){
                state = {...state, countries:[...state.countries, item]};
            }
            return state;

        case COUNTRY.EMPTY_LIST:
            if (typeof action.payload === 'string'|| typeof action.payload === 'number' || typeof action.payload === 'boolean' ){
                return state;            }
            state = {...state, countries:[]};
            return state
        default:
            return state
    }
};

export default countryReducer;