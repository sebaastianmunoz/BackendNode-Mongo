
'use strict';
const mongoose = require('../config/mongoose');
const Users = require('../schemas/user');
const Planning = require('../schemas/planning');
const Template  = require('../schemas/template');
const Calendary = require('../schemas/calendary');

const models = {
Planning : mongoose.model('plannings' , Planning),
User : mongoose.model('users', Users),
Template : mongoose.model('templates' ,Template),
Calendary : mongoose.model('calendaries' ,Calendary),
};

module.exports = models;