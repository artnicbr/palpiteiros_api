var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Palpite = new Schema({
    rodada: {
        type: Integer
    },
    mandante: {
        type: "String"
    },
    visitante:{
        type:"String"
    },
    resultado: {
        type: "String",
        enum: ["mandante","visitante","empate"]
    },
    created_at : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Palpite', Palpite);