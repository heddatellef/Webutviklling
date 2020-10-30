const router = require("express").Router();
import express, { response } from "express";


import Country from "./CountryModel";


/*router.get( async (req: Request, res: Response) => {
    //res.send("We are on home");
    const countries = await Country.find();
    response.send(countries);
  });*/

export default router;