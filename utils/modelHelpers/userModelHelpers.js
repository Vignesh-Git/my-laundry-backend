const userModel = require("../../models/users")

const helpers = {
    /**
     * 
     * @param {string} mobileNumberExtension 
     * @param {string} mobileNumber 
     * @returns 
     */
    fetchUserByMobileNumber : async (mobileNumberExtension, mobileNumber) => {
        return await userModel.findOne(
            {
                mobileNumberExtension: mobileNumberExtension,
                mobileNumber: mobileNumber
            })
    }
}

module.exports = helpers