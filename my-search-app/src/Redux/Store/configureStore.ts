import { createStore } from "redux";
import { countryReducer } from '../Reducers/countriesReducer'

export const Store = createStore(countryReducer);
