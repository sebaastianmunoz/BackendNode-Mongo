// Returns an array of dates between the two dates
const express = require('express');
const router = express.Router();
// Returns an array of dates between the two dates
const Calendary = require ('./../models/index').Calendary;
const User = require('./../models/index').User;
const moment = require('moment');


function transformDate(dates,req){
    var auxDay = [];
    var auxDay2 = [];
  //  console.log('compo',dates);
    Object.keys(dates).map(function (key,err) {
        dayTransform = moment(dates[key]).day();
        
        auxDay.push(dayTransform);
        dayTransform2 = moment.weekdays(auxDay[key]);
        auxDay2.push(dayTransform2);
      
    })
   // console.log(auxDay);
   // console.log(auxDay2);
    return auxDay2;
}

async function getStartAndEndDate (res, req) {
    const auxCalendary = await Calendary.find();
    var startDate;
    var endDate;
    Object.keys(auxCalendary).map(function(key,err) {
        auxEvent = auxCalendary[key].events;
        Object.keys(auxEvent).map(function (key,err) {
            auxTypeEvent = auxEvent[key].eventType;
         //   console.log(auxTypeEvent);
            if(auxTypeEvent == 'startDay'){
                startDate = auxEvent[key].start;
            } else if (auxTypeEvent == 'endDay'){
                endDate = auxEvent[key].end;
            }
        })
       
   })
 
   return [startDate,endDate];
};

async function getDates(req,res) {
    data = await getStartAndEndDate(req,res);
    console.log(data[0],data[1]) 
    var dates = [],
        currentDate = data[0],
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
    while (currentDate <= data[1]){
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    dates = transformDate(dates,res);
    return dates;
  };


module.exports = {
    getDates,
}