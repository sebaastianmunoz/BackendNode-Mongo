const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const dayOff = new Schema ({

        title : String,
        start: Date,
        end: Date,
        eventType: String,
        description: String,

});

module.exports = dayOff;