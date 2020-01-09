const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const Course = new Schema ({
   
    level : {
        type : String,
        required : true
    },
    letter : {
        type: String,
        required : true
    },
    teacherChief : {   
        name :{
            type: String
        },
        lastName : {
            type: String
        },
        email : {
            type: String,
        },
        address : {
            type: String,
        }
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
        day : {type: String}
    }],
});

module.exports = Course;