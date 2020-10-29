"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let ratingSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("rating", ratingSchema, "rating");
