const express = require('express');
const router = express.Router();
const Course = require ('./../models/index').Course;

router.use(express.json());

async function get(req, res) {
    console.log('cursos');
    const courses = await Course.find();
   // console.log(usrs);
    res.send(courses);
}

async function create(req,res) {
    console.log('created');
    try {
        var newCourse = new Course(req.body);
        newCourse.save();
        res.status(201).send(newCourse);
    } 
    catch(err){
    }
}

async function update(req,res){
  
    var courseAux = {
        id : req.body.id,
        level : req.body.level,
        letter : req.body.letter,
        teacherChief : req.body.teacherChief,
        schedule : req.body.schedule,
    };
   
    try{
        await Course.findByIdAndUpdate({_id : req.params.id}, courseAux, function(err,crs){
            if(err){
                res.send(err);
                console.log(err);
            }
            else{
                //console.log('update',usr);
                //usr = req.body
                res.status(201).send(crs);
                console.log('user ' ,crs);
                console.log('Update course succesfully');
            }
        })
    }
    catch(err){

    }
}

function deleted(req,res){
    console.log('entro borrar');
    Course.findByIdAndDelete({_id : req.params.id}).then(function(err){
        console.log('course deleted success');
    }).catch(err => {
        console.log(err);
    })
    res.status(201).send('error process deleted ');
}


module.exports = {
    get,
    create,
    update,
    deleted
};