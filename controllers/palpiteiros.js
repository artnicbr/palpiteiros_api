var mongoose = require('mongoose'),
    Palpiteiro = mongoose.model('Palpiteiro');

module.exports.listAll = function(req, res){
    Palpiteiro.find({ status: true }, function(err, palpiteiros){        
        if(err)
            res.send(err);
        
        res.json(palpiteiros);
    });
}

module.exports.getById = function(req, res){
    Palpiteiro.find({_id: req.params.id, status: true}, function(err, palpiteiro){
        if(err)
            res.json({
                error: 7,
                message: err.message
            });
        
        res.json(palpiteiro);
    });
}

module.exports.deactivateOne = function(req, res){
    Palpiteiro.find({_id: req.params.id}, function(err, palpiteiro){
        if(err)
            res.json({status: -1, message: "Problem while removing id: " + req.params._id, error: err});
        
        palpiteiro.status = false;
        palpiteiro.save();
    });
}

module.exports.updateOne = function(req, res){
    Palpiteiro.findById(req.params.id, function(err, palpiteiro){
        if(err)
            res.json({status: -1, message: "Problem while updating id: " + req.params._id, error: err});
        
        palpiteiro.nome = req.body.nome;
        palpiteiro.email = req.body.email;
        palpiteiro.senha = req.body.senha;
        palpiteiro.login = req.body.login;
        palpiteiro.save();
    });
}

module.exports.insertOne = function(req, res){
    var status,
        msg;

    newPalpiteiro = new Palpiteiro(req.body);
    newPalpiteiro.save()
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
        object: newPalpiteiro
    });
}