export interface ICountry {
    _id: string,
    "Overall_rank": number,
    "Country_or_region": string,
    "Score": number,
    "GDP_per_capita": number,
    "Social_support": number,
    "Healthy_life_expectancy": number,
    "Freedom_to_make_life_choices": number,
    "Generosity": number,
    "Perceptions_of_corruption": number,
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