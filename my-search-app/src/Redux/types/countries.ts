export interface ICountry {
    _id: string,
    "Overall rank": string,
    "Country or region": string,
    "Score": string,
    "GDP per capita": string,
    "Social support": string,
    "Healthy life expectancy": string,
    "Freedom to make life choices": string,
    "Generosity": string,
    "Perceptions of corruption": string,
    "Likes": number
}

export interface ICountryState{
    countries: ICountry[],
    searchWord: string,
    skip: number,
    limit: number,
    sort: number,
    category: string
}

export type Action = {
    type: string,
    payload: ICountry[] | string | number 
}