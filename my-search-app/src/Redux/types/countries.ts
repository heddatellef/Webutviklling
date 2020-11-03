export interface ICountry {
    _id: String,
    "Overall rank": String,
    "Country or region": String,
    "Score": string,
    "GDP per capita": string,
    "Social support": string,
    "Healthy life expectancy": string,
    "Freedom to make life choices": string,
    "Generosity": string,
    "Perceptions of corruption": string
}

export interface ICountryState{
    countries: ICountry[],
    searchWord: string,
    skip: number,
    limit: number,
    sort: number,
    brand: string,
    rating: number
}

export type Action = {
    type: string,
    payload: ICountry[] | string | number 
}