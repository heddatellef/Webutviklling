import mongoose from "mongoose";

export const CountrySchema = new mongoose.Schema({
    countries: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
    GDP: {
        type: String,
        required: true,
    },
    social: {
        type: String,
        required: true,
    },
    healthy: {
        type: String,
        required: true,
    },
    freedom: {
        type: String,
        required: true,
    },
    generosity: {
        type: String,
        required: true,
    },
    perceptions: {
        type: String,
        required: true,
    }
});

const Country =  mongoose.model("Country", CountrySchema, "countries");
export default Country;