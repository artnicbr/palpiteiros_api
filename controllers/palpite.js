var mongoose = require('mongoose'),
    Palpite = mongoose.model('Palpite');

module.exports.listAll = function(req, res){
    Palpite.find({ status: true }, function(err, palpite){        
        if(err)
            res.send(err);
        
        res.json(palpite);
    });
}

module.exports.getById = function(req, res){
    Palpite.find({_id: req.params.id, status: true}, function(err, palpite){
        if(err)
            res.json({
                error: 7,
                message: err.message
            });
        
        res.json(palpite);
    });
}

module.exports.getByUserId = function(req, res){
    Palpite.find({Palpiteiro: req.params.id, status: true}, function(err, palpites){
        if(err)
            res.json({
                error: 7,
                message: err.message
            });
        
        res.json(palpites);
    });
}

module.exports.deactivateOne = function(req, res){
    Palpite.find({_id: req.params.id}, function(err, palpite){
        if(err)
            res.json({status: -1, message: "Problem while removing id: " + req.params._id, error: err});
        
        Palpite.status = false;
        Palpite.save();
    });
}

module.exports.updateOne = function(req, res){
    Palpite.findById(req.params.id, function(err, palpite){
        if(err)
            res.json({status: -1, message: "Problem while updating id: " + req.params._id, error: err});
        
        Palpite.rodada = req.body.nome;
        Palpite.mandante = req.body.email;
        Palpite.visitante = req.body.senha;
        Palpite.resultado = req.body.login;
        Palpite.save();
    });
}

module.exports.insertOne = function(req, res){
    var status,
        msg;

    newPalpite = new Palpite(req.body);
    newPalpite.save()
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
        object: newPalpite
    });
}