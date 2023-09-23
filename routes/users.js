'use strict';

const express = require("express");
const userModel = require("../models/users");
const app = express();
const errorhandler = require("../utils/errorHandling")
const userModelHelpers = require("../utils/modelHelpers/userModelHelpers")
const loginModelHelpers = require("../utils/modelHelpers/loginModelHelpers")
const APISchemas = require("../apiSchemaValidators/schemas")
const validateApiSchema = require("../apiSchemaValidators/validator")

app.post("/api/user/signup",validateApiSchema(APISchemas.signupSchema), async (req, res) => {
    try {
        // Creeating user model
        const user = new userModel(req.body)

        // Saving it 
        await user.save();
        res.send(user);
    } catch (e) {
        errorhandler(e)
        res.status(500).send(e);
    }
})

app.post("/api/user/trigger_otp", validateApiSchema(APISchemas.triggerOTPSchema),  async (req, res) => {
    try {

        // Fetching user with given mobile no. and extension
        const user = await userModelHelpers.fetchUserByMobileNumber(req.body.mobileNumberExtension, req.body.mobileNumber)

        // if user found
        if (user) {
            // triggerOTP here
            await triggerOTP(user)
            res.send({
                isUserFound: true,
            })
        } else {
            res.send({
                isUserFound: false
            })
        }
    } catch (e) {
        errorhandler(e)
        res.status(500).send(e);
    }
})

app.post("/api/user/verify_otp", validateApiSchema(APISchemas.verifyOTPSchema),  async (req, res) => {
    try {

        const user = await userModelHelpers.fetchUserByMobileNumber(req.body.mobileNumberExtension, req.body.mobileNumber)

        if (user) {

            const filter = {
                user_object_id: user._id, 
                recent_login_otp : req.body.otp
            }
    
            const newValue = {
                is_logged_in: true,
            }

           const updatedDoc = await loginModelHelpers.findAndUpsert(filter, newValue)

           if(updatedDoc){
            res.send("success")
           } else {
            res.status(500).send("Invalid OTP");
           }

        } else {
            res.status(500).send("Invalid user data");
        }

    } catch (e) {
        errorhandler(e)
        res.status(500).send(e);
    }
})



/**
 * 
 * @param {object} userObject 
 */
const triggerOTP = (userObject) => {

    return new Promise(async (resolve, reject) => {

        const OTP = 1234 // write a method to generate OTP and send

        const filter = {
            _id: userObject._id
        }

        const newValue = {
            user_object_id: userObject._id,
            is_logged_in: false,
            recent_login_otp: OTP
        }

        try {
            const updatedDoc = await loginModelHelpers.findAndUpsert(filter, newValue)
            resolve()
        } catch (e) {
            reject(e)
        }


    })
}


module.exports = app