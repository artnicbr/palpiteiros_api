var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Resultado = new Schema({
    rodada: {
        type: Number
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
    },
    status : {
        type: Boolean,
        default : true
    }
});

module.exports = mongoose.model('Resultado', Resultado);