const express = require("express");
const { getFlight, getSingleFlight, addFlight, updateFlight, deleteFlight } = require("../controller/flight");
const flightRouter = express.Router();

flightRouter.get("/flights", getFlight)
flightRouter.get("/flights/:_id", getSingleFlight);
flightRouter.post("/flights", addFlight);
flightRouter.patch("/flights/:_id", updateFlight);
flightRouter.delete("/flights/:_id", deleteFlight)

module.exports = flightRouter;
