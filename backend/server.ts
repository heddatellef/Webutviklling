import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import CountryRoute from "./routes/countries";
import Country from "./routes/CountryModel";

dotenv.config();

const app = express();
const port = 8001;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://gruppe46:gruppe46@it2810-46.idi.ntnu.no:27017/gruppe46?authSource=gruppe46",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(() => console.log("Mongodb connected"));


app.use("/", CountryRoute);

    

app.listen(port, () => console.log("App is listening on port: " + port));