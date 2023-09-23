const Joi = require('joi');

const verifyOTPSchema = Joi.object({
    mobileNumberExtension : Joi.string().required(),
    mobileNumber : Joi.string().required(),
    otp : Joi.string().required().min(4).max(4),
})

const signupSchema = Joi.object({
    firstName : Joi.string().required(),
    lastName : Joi.string().required(),
    email : Joi.string().required().email(),
    mobileNumberExtension : Joi.string().required(),
    mobileNumber : Joi.string().required(),
})

const triggerOTPSchema = Joi.object({
    mobileNumberExtension : Joi.string().required(),
    mobileNumber : Joi.string().required(),
})



module.exports = {
    verifyOTPSchema : verifyOTPSchema,
    triggerOTPSchema : triggerOTPSchema,
    signupSchema : signupSchema
}