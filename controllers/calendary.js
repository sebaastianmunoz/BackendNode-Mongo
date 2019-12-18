const express = require('express');
const router = express.Router();
const Calendary = require ('./../models/index').Calendary;

router.use(express.json());

async function get(req, res) {
    const calendary = await Calendary.find();
   // console.log(usrs);
    res.send(calendary);
}

async function create(req,res) {

    try {
        var newCalendary = new Calendary(req.body);
        newCalendary.save();
        console.log('guardo',req.body)
        res.status(201).send(newCalendary);
    } 
    catch(err){
    }
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
    //update,
   // deleted
};