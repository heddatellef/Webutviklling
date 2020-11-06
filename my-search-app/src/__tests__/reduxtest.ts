import countryreducer from "../Redux/Reducers/countriesReducer";
import { setSearchWord } from "../Redux/Actions/countries";


test("check if searchWord value changes", () => {
    const initialState = {
        countries: [],
        searchWord: "",
        name: "",
        skip: 0,
        limit: 10,
        sort: 1,
        category: "",
    }

    const setSearchWord = {
        type: "SET_SEARCH_WORD",
        payload: "hello",
    };

    const expectedState = {
        countries: [],
        searchWord: "hello",
        name: "",
        skip: 0,
        limit: 10,
        sort: 1,
        category: "",
    }
    expect(countryreducer(initialState, setSearchWord)).toEqual(expectedState);
})