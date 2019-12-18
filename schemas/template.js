const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const Templates = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    favorite:{
        type: Boolean,
        required: true,
        default : false,
    },
    structure : {
        type: JSON,
    },
    logo: {
        type: String,
        required: false,
    },    
});

module.exports = Templates;