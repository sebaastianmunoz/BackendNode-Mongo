const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Planning = new Schema({
    unity : [{
        name: String,
        number: String,
        duration: String
    }],
    archive: [],
    data: [{}],
    status: {
        type: String,
    },
    level : {
        type: String
    },
    asignature : [],
    content : {
        type : String
    },
    verbs : [],
    dates : {
        type : String
    }
});
//const Planning = mongoose.model('Planning', PlanningSchema);

module.exports = Planning;