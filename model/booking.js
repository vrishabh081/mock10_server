const mongoose = require("mongoose");

// Schema-
const bookingSchema = mongoose.Schema({
    user : { type: ObjectId, ref: 'User' },
    flight : { type: ObjectId, ref: 'Flight' }
})

// Model-
const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = BookingModel;