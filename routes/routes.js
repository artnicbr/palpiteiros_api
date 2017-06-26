module.exports = function(app){
    var palpiteirosController = require("../controllers/palpiteiros"),
        palpitesController = require("../controllers/palpite");

    app.get('/palpiteiros', palpiteirosController.listAll)
        .get('/palpiteiros/:id', palpiteirosController.getById)
        .post('/palpiteiros', palpiteirosController.insertOne)
        .delete('/palpiteiros/:id',palpiteirosController.deactivateOne)
        .put('/palpiteiros',palpiteirosController.updateOne);
    
    app.get('/palpites/user/:id', palpitesController.getByUserId)
        .get('/palpites', palpitesController.listAll)
        .get('/palpites/:id', palpitesController.getById)
        .post('/palpites', palpitesController.insertOne)
        .delete('/palpites/:id',palpitesController.deactivateOne)
        .put('/palpites',palpitesController.updateOne);
}