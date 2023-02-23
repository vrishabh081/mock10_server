const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const RegistrationModel = require("../model/user");

// registeration-
const register = (req, res)=>{
    const {name, email, password} = req.body;
    bcrypt.hash(password, 8, (err, secured_password)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            try
            {
                const userData = RegistrationModel({name, email, password: secured_password});
                userData.save();
                console.log("Successfully registered");
                res.json({message : "Successfully registered"})
            }
            catch(error)
            {
                console.log(`error: ${error}`)
                res.json({error})
            }
        }
    })
}


// login-
const login = (req, res)=>{
    const {email, password} = req.body
    RegistrationModel.findOne({email}).then(userData=>{
        if(!userData)
        {
            res.json({error: "OOP's you are not registered"})
        }
        else
        {
            bcrypt.compare(password, userData.password, (err, matched_password)=>{
                if(!matched_password)
                {
                    console.log(err);
                    res.json({message: "Password is not matching"})
                }
                else
                {
                    const token = jwt.sign(password, "social_media_app");
                    res.json({"message": "Successfully loged in", token})
                    console.log("Successfully loged in");
                }
            })
        }
    })
}

module.exports = {register, login}