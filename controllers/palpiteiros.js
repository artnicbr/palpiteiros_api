var mongoose = require('mongoose'),
    Palpiteiro = mongoose.model('Palpiteiro');

module.exports.listAll = function(req, res){
    Palpiteiro.find({}, function(err, palpiteiros){        
        if(err)
            res.send(err);
        
        res.json(palpiteiros);
    });
}

module.exports.insertOne = function(req, res){
    try{
        var status = "OK",
            msg = "";

        data = req.body;

        newPalpiteiro = new Palpiteiro();
        newPalpiteiro.nome = data.nome;
        newPalpiteiro.email = data.email;
        newPalpiteiro.senha = data.senha;
        newPalpiteiro.login = data.login;

        newPalpiteiro.save();
    }
    catch(err){
        status = "Error";
        msg = err;
    }
    finally{
        res.json({
            status: status,
            error: msg,
            object: newPalpiteiro
        });
    }
}