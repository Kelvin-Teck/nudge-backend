const AppMessages = require('../common/appMessages');
const responseHelper = require('../helpers/responseHelper');
const UserRepository = require('../repositories/userRepository');
const HttpStatus = require('../utils/StatusCodes');

const createUser = async (req, res) => {
    const { fullName, email, phoneNumber } = req.body;

    const data = { fullName, email, phoneNumber };
    
    const isExistingUser = await UserRepository.getSingleUser(data);
    console.log(isExistingUser);

    if (isExistingUser) {
        return responseHelper.newError(AppMessages.INFO.USER_EXIST, HttpStatus.FORBIDDEN);
    }

    await UserRepository.createUser(data);
 }



module.exports = {
    createUser
}