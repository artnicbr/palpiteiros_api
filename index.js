var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose'),
    Palpiteiro = require('./models/palpiteiro'),
    routes = require('./routes/routes'),
    port = process.env.PORT || 3005;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.17.0.2/palpiteiros', { useMongoClient: true });

app.use(bodyParser.json());
routes(app);

app.listen(port);
console.log('Running on port ' + port);