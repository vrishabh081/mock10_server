const mongoose = require("mongoose");

// Schema-
const registerationSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String
})

// Model-
const RegistrationModel = mongoose.model("user", registerationSchema);

module.exports = RegistrationModel;