const express = require('express');
const router = express.Router();
const User = require ('./../models/index').User;
var db = require('./../config/mongoose');

router.use(express.json());

async function get(req, res) {
    const usrs = await User.find();
   // console.log(usrs);
    res.send(usrs);
}

async function create(req,res) {
    console.log('hola');
    try {
        var newUser = new User(req.body);
        newUser.save();
        res.status(201).send(newUser)
    } 
    catch(err){
    }
}

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

module.exports = {
    get,
    create,
    update,
    deleted
};

   // let body = JSON.parse(JSON.stringify(req.body));
    
  /* (req,res) => {
    const { name, lastName } = req.body;
    //const user = JSON.parse();
    var usr = JSON.stringify(req.body);
    usr = JSON.parse(usr); 
    console.log(usr);
    //res.status().json(user);
    //console.log(user.name);
    res.send('ok');
} */
   /* 
    ({
        name : req.body.name,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password,
        planification : req.body.planification,
        schedule : req.body.schedule,
    });
   */

           /*
        console.log('entro2');
        console.log(User.schema.tree);
        newUser.name = name;
        newUser.lastName = lastName;
        newUser.email = email;
        newUser.password = password;
        newUser.planification = planification;
        newUser.schedule = schedule;
        

        JSON CREATE {
	"name" : "Carlos",
	"lastName" : "Orellana",
	"email" : "carlosorellana@gmail.com",
	"password" : "carlos123",
	"rol" : "utp",
	"planification" : "none",
	"schedule" : { "asignature" :" Fisica",
					"level" : "2to medio",
					"letter" : "B",
					"hour" : "2",
					"day" : "Martes"
	}
}
  
        */