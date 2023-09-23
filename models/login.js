'use strict';

const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    user_object_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref : process.env.USER_COLLECTION_NAME
    },
    access_token: {
        type: mongoose.SchemaTypes.String,
        trim: true,
        default : ''
    },
    is_logged_in: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        
    },
    recent_login_otp: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const loginModel = mongoose.model(process.env.LOGIN_COLLECTION_NAME, loginSchema);

module.exports = loginModel;