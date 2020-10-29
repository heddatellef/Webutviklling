import mongoose from "mongoose";

let ratingSchema = new mongoose.Schema({
    rank: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    GDP: {
        type: Number,
        required: true,
    },
    social: {
        type: Number,
        required: true,
    },
    healthy: {
        type: Number,
        required: true,
    },
    freedom: {
        type: Number,
        required: true,
    },
    generosity: {
        type: Number,
        required: true,
    },
    perceptions: {
        type: Number,
        required: true,
    },
    favorite: {
        type: Boolean,
    }
});

export default mongoose.model("rating", ratingSchema, "rating")