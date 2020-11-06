import {Reducer} from 'redux';
import { 
    Action, 
    ICountryState
} from '../types/countries';
import {COUNTRY} from '../types/actionTypes';


//state when starting the website
const initialState = {
    countries: [], //setInitialCountries
    searchWord: "",
    name: "",
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