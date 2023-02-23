const FlightModel = require("../model/flight");

// get all flight-
const getFlight = async(req, res)=>{
    try
    {
        const allFlight = await FlightModel.find();
        console.log("All Flight");
        res.json(allFlight);
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's somthing went wrong"})
    }
}

// get single flight-
const getSingleFlight = async(req, res)=>{
    const {_id} = req.params;
    try
    {
        const singleFlight = await FlightModel.find({_id});
        console.log("Single Flight");
        res.json(singleFlight);
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's somthing went wrong"})
    }
}


// added-
const addFlight = async(req, res)=>{
    const payload = req.body;
    try
    {
        const data = FlightModel(payload)
        await data.save();
        console.log("Successfully added Flight");
        res.json({message: "Successfully added Flight"})
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's Flight not added"})
    }
}


// update-
const updateFlight = async(req, res)=>{
    const payload = req.body;
    const {_id} = req.params;
    try
    {
        await FlightModel.findByIdAndUpdate({_id}, payload)
        console.log("Successfully updated Flight");
        res.json({message: "Successfully updated Flight"})
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's Flight not updated"})
    }
}


// update-
const deleteFlight = async(req, res)=>{
    const {_id} = req.params;
    try
    {
        await FlightModel.findByIdAndDelete({_id})
        console.log("Successfully deleted Flight");
        res.json({message: "Successfully deleted Flight"})
    }
    catch(error)
    {
        console.log(error);
        res.json({error: "OOP's Flight not deleted"})
    }
}
module.exports = {getFlight, getSingleFlight, addFlight, updateFlight, deleteFlight};