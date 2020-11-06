import mongoose from "mongoose";

export const CountrySchema = new mongoose.Schema({
    "_id": {
        type: String,
        required: true,
    },
    "Overall_rank": {
        type: String,
        required: true,
    },
    "Country_or_region": {
        type: String, 
        required: true
    },
    "Score": {
        type: String,
        required: true,
    },
    "GDP_per_capita": {
        type: String,
        required: true,
    },
    "Social_support": {
        type: String,
        required: true,
    },
    "Healthy_life_expectancy": {
        type: String,
        required: true,
    },
    "Freedom_to_make_life_choices": {
        type: String,
        required: true,
    },
    "Generosity": {
        type: String,
        required: true,
    },
    "Perceptions_of_corruption": {
        type: String,
        required: true,
    },
    "Likes": {
        type: Number, 
        required: true
    }
});

const Country =  mongoose.model("Country", CountrySchema, "countries");
export default Country;