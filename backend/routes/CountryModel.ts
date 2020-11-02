import mongoose from "mongoose";

export const CountrySchema = new mongoose.Schema({
    "_id": {
        type: String,
        required: true,
    },
    "Overall rank": {
        type: String,
        required: true,
    },
    "Country or region": {
        type: String, 
        required: true
    },
    "Score": {
        type: String,
        required: true,
    },
    "GDP per capita": {
        type: String,
        required: true,
    },
    "Social support": {
        type: String,
        required: true,
    },
    "Healthy life expectancy": {
        type: String,
        required: true,
    },
    "Freedom to make life choices": {
        type: String,
        required: true,
    },
    "Generosity": {
        type: String,
        required: true,
    },
    "Perceptions of corruption": {
        type: String,
        required: true,
    }
});

const Country =  mongoose.model("Country", CountrySchema, "countries");
export default Country;