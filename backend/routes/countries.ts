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
/*
router.get('/', (req: Request, res: Response) => {
  function getCountries(res: Response, body: any) {
    var parseBody = JSON.parse(body);
    var name = parseBody["Country or region"];
    res.send({ name });
  }
  getCountries;
});*/

export default router;