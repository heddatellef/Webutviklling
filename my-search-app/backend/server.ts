import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";

import ratingRoute from "./routes/rating"

app.use(bodyparser.json())
app.use(cors())

app.use("/rating", ratingRoute)

mongoose.connect();