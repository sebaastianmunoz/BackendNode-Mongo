const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
      name:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: false,
        minLength: 7
    },
    rol: {
        type: String,
        required: false
    },
    planification:{
        type: String,
        required: false
    },
    address : {
        type: String,
        required: false
    },
    phone : {
        type: String,
        required: false
    },
    yearStart : {
        type: Date,
        require : false
    },
    schedule:[{
        asignature: {
            type: String,
        },
        level: {
            type: String,
        },
        letter: {
            type: String,
        },
        hour : {
            type: Date,
        },
        day : {
            type: String
        }
    }],
    tokens: [{
        token: {
            type: String,
            required: false
        }
    }],
    course : [{
        level : {
            type: String
        },
        letter : {
            type : String
        }
    }]

},{
  timestamps: true,
});

module.exports = Users;

