const express = require('express');
const app = express();
var cors = require('cors');

function logger(req, res, next){
    console.log('Request received');
}

//Middleware
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
//ROUTES
app.use(require('./Routes/index'));
//Initializing
require('./config/mongoose');

app.listen(80,'192.168.1.9',() => {
    console.log('port 88')
});

