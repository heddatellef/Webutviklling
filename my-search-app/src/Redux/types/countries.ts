export interface ICountry {
    _id: String,
    "Overall_rank": String,
    "Country_or_region": String,
    "Score": string,
    "GDP_per_capita": string,
    "Social_support": string,
    "Healthy_life_expectancy": string,
    "Freedom_to_make_life_choices": string,
    "Generosity": string,
    "Perceptions_of_corruption": string,
    "Likes": number
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