const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
    },
    location:{
        type: String,
        required: true
    },
    city:{
        type: String,
    },
    postalCode:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', UserSchema)