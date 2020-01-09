
'use strict';

//Required Schemas
const mongoose = require('../config/mongoose');
const Users = require('../schemas/user');
const Planning = require('../schemas/planning');
const Template  = require('../schemas/template');
const Calendary = require('../schemas/calendary');
const DayOff = require('../schemas/dayoff');
const Course = require('../schemas/course');

const models = {
    
    Planning : mongoose.model('plannings' , Planning),
    User : mongoose.model('users', Users),
    Template : mongoose.model('templates' ,Template),
    Calendary : mongoose.model('calendaries' ,Calendary),
    DayOff : mongoose.model('dayoff' ,DayOff),
    Course : mongoose.model('Course' ,Course),
    
};

module.exports = models;