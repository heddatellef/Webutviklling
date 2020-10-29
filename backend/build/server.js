"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = express_1.default();
const port = 8080;
app.use(express_1.default.json());
app.use(cors_1.default());
mongoose_1.default.connect("mongodb://gruppe46:gruppe46@it2810-46.idi.ntnu.no:27017/?authSource=gruppe46", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(() => console.log("Mongodb connected"));
//app.use("/rating", ratingRoute);
/*app.get("/", (req, res) => {
    res.send("Home");
});

app.listen(port, () => console.log("App is listening on port" + port)*/ 
