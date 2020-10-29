import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import ratingRoute from "./routes/rating"

dotenv.config();

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://gruppe46:gruppe46@it2810-46.idi.ntnu.no:27017/?authSource=gruppe46",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(() => console.log("Mongodb connected"));


//app.use("/rating", ratingRoute);

/*app.get("/", (req, res) => {
    res.send("Home");
});

app.listen(port, () => console.log("App is listening on port" + port)*/