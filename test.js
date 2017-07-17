var mongoose = require('mongoose');
    mongoose.connect('mongodb://172.17.0.2/palpiteiros');
    Schema = mongoose.Schema;

var Log = new Schema({
    __id : {
        type: Schema.Types.ObjectId
    },
    created_at: {
        type: Schema.Types.Date,
        default: Date.now
    }
});

var logModel = mongoose.model('Log', Log);

logItem = new logModel();
logItem.save();

console.log(logItem);

logModel.find({}, function(err, resp){
    console.log(err, resp);
})