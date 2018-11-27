const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    billType: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userSurname: {
        type: String,
        required: true
    },
    passportID: {
        type: String,
        required: true
    }

});


module.exports = mongoose.model('Post', schema);