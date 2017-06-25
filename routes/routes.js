module.exports = function(app){
    var palpiteirosController = require("../controllers/palpiteiros");

    app.route("/palpiteiros")
        .get(palpiteirosController.listAll)
        .post(palpiteirosController.insertOne);
}