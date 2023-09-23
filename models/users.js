'use strict';

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    mobileNumberExtension: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const userModel = mongoose.model(process.env.USER_COLLECTION_NAME, userSchema);

module.exports = userModel;