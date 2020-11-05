const router = require("express").Router();
import { Request, Response} from "express";
import Country from "./CountryModel";

router.get("/", (req: Request, res: Response) => {
  let countries = req.query.countries;
  let searchWord = req.query.searchWord;
  let skip = req.query.skip;
  let limit = req.query.limit;
  let sort = req.query.sort;
  let category;
  if (req.query.category) {
    category = req.query.category;
  }
  else {
    category = "";
  }
console.log("CATEGORY:",category)
Country.find()
.sort(category)
.skip(Number(skip))
.limit(Number(limit))
.then((countries: any) =>  res.json(countries))});

/*
router.get('/', (req: Request, res: Response) => {
  Country.find()
  .then(countries => res.json(countries));
});
*/


export default router;