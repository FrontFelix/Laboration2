const userModel = require('../../models/user/userModel')

async function DeleteUser() {
    await userModel.deleteOne({ username: 'Adam' }); 
}

module.exports = DeleteUser
