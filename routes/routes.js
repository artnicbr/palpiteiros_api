module.exports = function(app){
    var palpiteirosController = require("../controllers/palpiteiros"),
        palpitesController = require("../controllers/palpite"),
        resultadoController = require("../controllers/resultado");

    app.get('/palpiteiro', palpiteirosController.listAll)
        .get('/palpiteiro/:id', palpiteirosController.getById)
        .post('/palpiteiro', palpiteirosController.insertOne)
        .delete('/palpiteiro/:id',palpiteirosController.deactivateOne)
        .put('/palpiteiro',palpiteirosController.updateOne);
    
    app.get('/palpite/user/:id', palpitesController.getByUserId)
        .get('/palpite', palpitesController.listAll)
        .get('/palpite/:id', palpitesController.getById)
        .post('/palpite', palpitesController.insertOne)
        .delete('/palpite/:id',palpitesController.deactivateOne)
        .put('/palpite',palpitesController.updateOne);
    
    app.get('/resultado', resultadoController.listAll)
        .post('/resultado', resultadoController.insertOne)
        .delete('/resultado/:id',resultadoController.deactivateOne)
        .put('/resultado',resultadoController.updateOne);
}