var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Palpiteiro = new Schema({
    nome : {
        type : String,
    },
    email : {
        type: String,      
    },
    login : {
        type : String,

    },
    senha : {
        type: String,
    },
    status : {
        type : Boolean,
        default: true
    },
});

module.exports = mongoose.model('Palpiteiro', Palpiteiro);