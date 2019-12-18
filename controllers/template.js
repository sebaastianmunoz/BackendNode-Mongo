const express = require('express');
const router = express.Router();
const Template = require ('./../models/index').Template;

router.use(express.json());

async function get(req, res) {
    const template = await Template.find();
   // console.log(usrs);
    res.send(template);
}
async function create(req,res) {
    console.log('nuevo');
    try {
        var newTemplate = new Template(req.body);
        newTemplate.save();
        res.status(201).send(newTemplate);
    } 
    catch(err){
    }
}
async function update(req,res){
    var templateAux = {
        structure : req.body.structure,
        logo : req.body.logo
    };
    try{
        await Template.findByIdAndUpdate({_id : req.params.id}, templateAux, function(err,template){
            if(err){
                res.send(err);
                console.log(err);
            }
            else{
                //console.log('update',usr);
                //usr = req.body
                res.status(201).send(template);
            //    console.log('user ' ,template);
            //    console.log('Update users succesfully');
            }
        })
    }
    catch(err){

    }
}

function deleted(req,res){
    console.log('entro borrar');
    Template.findByIdAndDelete({_id : req.params.id}).then(function(err){
        console.log('user deleted success');
    }).catch(err => {
        console.log(err);
    })
    res.status(201).send('Borro');
}
function getFavorite(req,res){
    console.log('hola');
    Template.findOne({favorite : true}, function(err,template) {
        res.send(template);
    });
}

function favoriteChange(req,res){
    Template.updateMany({favorite :true}, {$set:{favorite : false}}, function(err){
        Template.findByIdAndUpdate({_id : req.params.id}, {$set:{favorite : true}}, function(err,template){
            get(req,res);
            //res.status(201).send('Cambio estado favorito de 1');
        })
    })
}

function getOneTemplate(req,res){
   
    Template.findOne({_id : req.params.id}, function(err,template){

        res.status(201).send(template);
    })
}
 
module.exports = {
    get,
    create,
    deleted,
    update,
    favoriteChange,
    getOneTemplate,
    getFavorite,
};



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
*/