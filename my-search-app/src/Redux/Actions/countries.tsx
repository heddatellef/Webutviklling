import {ICountry} from '../types/countries';
import{ COUNTRY} from '../types/actionTypes';

//all the differnet actions with type and payload
export const getSearched = (countries: ICountry)=> ({
    type: COUNTRY.GET_SEARCHED,
    payload: countries
})

export const emptyList = ()=> ({
    type: COUNTRY.EMPTY_LIST,
})

export const getErrorMessage = (error: string) => ({
    type: COUNTRY.GET_ERROR_MESSAGE,
    payload: error
})

export const setSearchWord = (word: string) => ({
    type: COUNTRY.SET_SEARCH_WORD,
    payload: word
})

export const setSkip = (num:number) => ({
    type: COUNTRY.SET_SKIP,
    payload:num
})

export const setCategory = (category: string) =>({
    type: COUNTRY.SET_CATEGORY,
    payload: category
})

export const setRating = (rating: number) =>({
    type: COUNTRY.SET_LIMIT,
    payload:rating
})

export const setSorting = (sort: number) => ({
    type: COUNTRY.SET_SORTING,
    payload:sort
})




