var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Palpite = new Schema({
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
    Palpiteiro : {
        type : Schema.Types.ObjectId, 
        ref: 'Palpiteiro'
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

module.exports = mongoose.model('Palpite', Palpite);