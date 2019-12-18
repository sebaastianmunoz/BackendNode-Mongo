const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const Calendary = new Schema ({
    event : {
        title : {
            type: String,
            required: false,
        },
        start: {
            type: Date,
            required: false,
        },
        end: {
            type: Date,
            required: false,
        },
        type: {
    
            type: String,
            required: false,
        },
        description : {
            type: String,
            required: false,
        },
    },    
});

module.exports = Calendary;