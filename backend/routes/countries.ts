const router = require("express").Router();

const express = require("express");
import { Request, Response} from "express";

import Country from "./CountryModel";

/*router.get('/', (req: Request, res: Response) => {
  Country.find({"Overall rank": {$gt: 0}}, {"Country or region": 1, "_id": 0})
  .then(countries => res.json(countries));
});*/

router.get('/', (req: Request, res: Response) => {
  Country.find()
  .then(countries => res.json(countries));
});

router.get('/:country', (req: Request, res: Response) => {
  const country = req.params.country;
  Country.find({"Country_or_region": country})
  .then(countries => res.json(countries));
});
 
router.put('/:_id', (req: Request, res: Response) => {
  const country = req.params._id;
  Country.findOneAndUpdate({_id: country}, {$inc : {"Likes" : 1}})
});

export default router;