const mongoose = require("mongoose");

// Schema-
const flightSchema = mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
})

// Model-
const FlightModel = mongoose.model("flight", flightSchema);

module.exports = FlightModel;