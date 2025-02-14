const mongoose = require('mongoose')
const user = mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true,
        unique: true
    }
})

const User = mongoose.model('users',user)
module.exports = User