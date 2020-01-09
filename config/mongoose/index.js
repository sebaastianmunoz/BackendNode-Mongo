const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.0.17/planning-database',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(db => console.log('DB is connected'))
  .catch(err => console.log(err));

module.exports = mongoose;
