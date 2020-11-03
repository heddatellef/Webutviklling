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

export const setBrand = (brand: string) =>({
    type: COUNTRY.SET_BRAND,
    payload:brand
})

export const setRating = (rating: number) =>({
    type: COUNTRY.SET_RATING,
    payload:rating
})

export const setSorting = (sort: number) => ({
    type: COUNTRY.SET_SORTING,
    payload:sort
})




