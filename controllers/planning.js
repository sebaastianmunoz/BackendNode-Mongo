const express = require('express');
const router = express.Router();
const Planning = require('./../models/index').Planning;
const User = require('./../models/index').User;
const dateController = require('./dateController');
router.use(express.json());

async function get(req, res) {
    const planning = await Planning.find();
   // console.log(usrs);
    res.send(planning);
}


async function create(req,res) {
    console.log('Planning created');
    try {
        var newPlanning = new Planning();
        console.log(req.body);
//      console.log(newPlanning);

        newPlanning.save();
        res.status(201).send(newPlanning)
    } 
    catch(err){
    }
}


function getOnePlanning(req,res) {
    
}
async function getClassDate(req,res){
    let dates = [];
    let dayClass = [];
    let dayUser = [];
    await dateController.getDates().then(res=>{
        dates = res;
    }).catch(err =>{
        console.log(err);
    });
    User.findById({_id : req.params.id}, function(err,usr){
        Object.keys(usr.schedule).map(function(key1,err){
            dayUser.push(usr.schedule[key1].day);
            console.log('1',dayUser[key1]);
            console.log(dayUser);
        Object.keys(dates).map(function (key,err) {
            console.log('date',dates);
            if(dates[key] == dayUser[key1]){
                dayClass.push(dates[key]); 
            }
        })
    })
        console.log('dayClass' ,dayClass);
    });
    
}
/*
async function update(req,res){
  
    var userAux = {
        id : req.body.id,
        name : req.body.name,
        lastName : req.body.lastName,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password,
        yearStart : req.body.yearStart,
        planification : req.body.planification,
        schedule : req.body.schedule,
    };
   
    try{
        await User.findByIdAndUpdate({_id : req.params.id}, userAux, function(err,usr){
            if(err){
                res.send(err);
                console.log(err);
            }
            else{
                //console.log('update',usr);
                //usr = req.body
                res.status(201).send(usr);
                console.log('user ' ,usr);
                console.log('Update users succesfully');
            }
        })
    }
    catch(err){

    }
}

function deleted(req,res){
    console.log('entro borrar');
    User.findByIdAndDelete({_id : req.params.id}).then(function(err){
        console.log('user deleted success');
    }).catch(err => {
        console.log(err);
    })
    res.status(201).send('chupa el pico');
}
*/

module.exports = {
    get,
    create,
  //  update,
   // deleted
   getClassDate
};