var mongoose = require('mongoose'),
    Resultado = mongoose.model('Resultado');

module.exports.listAll = function(req, res){
    Resultado.find({ status: true }, function(err, palpite){        
        if(err)
            res.send(err);
        
        res.json(palpite);
    });
}

module.exports.deactivateOne = function(req, res){
    Resultado.find({_id: req.params.id}, function(err, resultado){
        if(err)
            res.json({status: -1, message: "Problem while removing id: " + req.params._id, error: err});
        
        resultado.status = false;
        resultado.save();
    });
}

module.exports.updateOne = function(req, res){
    Resultado.findById(req.params.id, function(err, resultado){
        if(err)
            res.json({status: -1, message: "Problem while updating id: " + req.params._id, error: err});
        
        resultado.rodada = req.body.nome;
        resultado.mandante = req.body.email;
        resultado.visitante = req.body.senha;
        resultado.resultado = req.body.login;
        resultado.save();
    });
}

module.exports.insertOne = function(req, res){
    var status,
        msg;

    newResultado = new Resultado(req.body);
    newResultado.save()
        .then(function(){
            status = 1;
            msg = "";
        })
        .catch(function(err, elem){
            status = -1;
            msg = err.message;
        });

    res.json({
        status: status,
        error: msg,
        object: newResultado
    });
}