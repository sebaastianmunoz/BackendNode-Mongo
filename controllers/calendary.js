const express = require('express');
const router = express.Router();
const https = require('https');

const Calendary = require ('./../models/index').Calendary;
const Datecontroller = require('./dateController');

router.use(express.json());

async function get(req, res) {
    const calendary = await Calendary.find();
  //  console.log(usrs);
    res.send(calendary);
  //  const dates = Datecontroller.getDates(new Date(2020,02,5), new Date(2020,11,25));
    //console.log(dates);
   // res.send(dates);
}
async function getOne(req,res) {
    const calendary = await Calendary.findById({_id : req.params.id} , function (err,calendary) {
        console.log(calendary);
        res.status(201).send(calendary);
    })
    
}
async function create(req,res) {
    try {
        var newCalendary = new Calendary(req.body);
        console.log(req.body);
        newCalendary.save();
        console.log('guardo',req.body)
        res.status(201).send(newCalendary);
    } 
    catch(err){
    }
}

async function update(req,res){
  
    var calendaryAux = {
       year : req.body.year,
       event : req.body.event,

    };
   
    try{
        await Calendary.findByIdAndUpdate({_id : req.params.id}, calendaryAux, function(err,calendar){
            if(err){
                res.send(err);
                console.log(err);
            }
            else{
                //console.log('update',usr);
                //usr = req.body
                res.status(201).send(calendar);
                console.log('calendario ' ,calendar);
                console.log('Update calendary succesfully');
            }
        })
    }
    catch(err){

    }
}

function deleted(req,res){
    console.log('entro borrar');
    Calendary.findByIdAndDelete({_id : req.params.id}).then(function(err){
        console.log('Calendar deleted success');
    }).catch(err => {
        console.log(err);
    })
    res.status(201).send('chupa el pico');
}


function getDayOffChile(req,res){
    let rawData = '';
    var today = new Date();
    var auxYear = today.getFullYear();
 //   console.log(auxYear);
    https.get('https://apis.digital.gob.cl/fl/feriados/'+auxYear,(res)=>{
        let data = ''
        console.log('statusCode : ' ,res.statusCode);
        //console.log('header', res.headers);
        res.setEncoding('utf8')
        res.on('data', (chunk) => {rawData += chunk; });
        res.on('end', () =>{
            try{
               // console.log(rawData);
                rawData = JSON.parse(rawData);
                var list = {}
                var auxEvent =[
                        {
                            'title':"",
                            'start' : '',
                            'end' : '',
                            'eventType' : '',
                            'description' : ''
                        }]
                
                Object.keys(rawData).map(function(key, index) {
                    var title = rawData[key].nombre;
                    var start = rawData[key].fecha;
                    var end = rawData[key].fecha;
                    var eventType = rawData[key].irrenunciable;
                    var description = rawData[key].comentarios;
                    auxEvent = [{
                        'title' : title,
                        'start' :  start,
                        'end' : end,
                        'eventType' :  eventType,
                        'description' : description,
                      }]
                    //console.log(events); 
                   // list = events;
                    console.log(auxYear);
                    auxData2 = {
                        year : auxYear, 
                        events : auxEvent,
                    }
                    var auxData = new Calendary(auxData2);
                    auxData.save();  
                    console.log('data',auxData);
                  });
            }catch (e){
                console.log(e.message);
            }
        }).on('error', (e) => {
          console.error(e);
        });
    });
   //     res.status(201).send(dayOff);
}


module.exports = {
    get,
    getOne,
    create,
    update,
    deleted,
    getDayOffChile,
};