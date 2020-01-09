const express = require('express');
const router = express.Router();
const https = require('https');

const DayOff = require ('./../models/index').DayOff;
router.use(express.json());


function getDayOffChile(req,res){
    let rawData = '';
    var arrayEvent = [];
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

                    if(eventType == '1'){
                        eventType = 'irrenunciable';
                    }
                    else if( eventType == '0'){
                        eventType = 'no irrenunciable';
                    }
                    auxEvent = {
                        'title' : title,
                        'start' :  start,
                        'end' : end,
                        'eventType' :  eventType,
                        'description' : description,
                      }
                    //console.log(events); 
                   // list = events;
                 //  console.log('a',auxYear);
                //    arrayEvent.push(auxEvent);
                    var auxData = new DayOff(auxEvent);
                    auxData.save();  
                });
            }catch (e){
                console.log(e.message);
            }
            console.log(auxData);
        }).on('error', (e) => {
          console.error(e);
        });
        
    });
//    console.log('data',arrayEvent);
}

async function get(req, res) {
    const dayoff = await DayOff.find();
   // console.log(usrs);
    res.send(dayoff);
}

module.exports = {
    getDayOffChile,
    get,
};
