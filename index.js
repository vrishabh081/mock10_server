const express = require("express");
const dbConnection = require("./config/database");
const authRouter = require("./routes/authRoutes");
const flightRouter = require("./routes/flightRoutes");
const app = express();
require("dotenv").config();

// middlewae and routes-
app.use(express.json());
app.use("/api", authRouter);
app.use("/api", flightRouter);

// server-
app.listen(5000, async ()=>{
    try
    {
        await dbConnection
        console.log("Database connected successfully");
        console.log(`PORT is successfully running on 5000`);
    }
    catch(error)
    {
        console.log(`error: ${error}`);
        console.log("Database not connected");
    }
})