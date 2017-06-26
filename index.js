var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose'),    
    Palpite = require('./models/palpite'),
    Palpiteiro = require('./models/palpiteiro'),    
    routes = require('./routes/routes'),    
    fs = require('fs'),
    config = JSON.parse(fs.readFileSync('config.json', 'utf8')),
    port = process.env.PORT || config.server.port || 8080;

mongoose.Promise = global.Promise;
mongoose.connect(config.database.development.driver + '://' + config.database.development.host + '/' + config.database.development.database);

app.use(bodyParser.json());
routes(app);

app.listen(port);
console.log('Running on port ' + port);