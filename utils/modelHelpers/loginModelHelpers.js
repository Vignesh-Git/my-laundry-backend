const loginModel = require("../../models/login")

const helpers = {
    /**
     * 
     * @param {string} mobileNumberExtension 
     * @param {string} mobileNumber 
     * @returns 
     */
    findAndUpsert : async (filter, newValue) => {
        return await loginModel.findOneAndUpdate(filter, newValue, { upsert: true })
    }
}

module.exports = helpers