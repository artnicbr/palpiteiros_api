module.exports = function(app){
    var palpiteirosController = require("../controllers/palpiteiros");

    app.get('/palpiteiros', palpiteirosController.listAll)
        .get('/palpiteiros/:id', palpiteirosController.getById)
        .post('/palpiteiros', palpiteirosController.insertOne)
        .delete('/palpiteiros/:id',palpiteirosController.deactivateOne)
        .put('/palpiteiros',palpiteirosController.updateOne);
}