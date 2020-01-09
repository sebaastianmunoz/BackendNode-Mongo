const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const Calendary = new Schema ({
    year: {
        type: String,
        required: false,
    },
    events : [{
        title : String,
        start: Date,
        end: Date,
        eventType: String,
        description: String,
    }],
});

module.exports = Calendary;