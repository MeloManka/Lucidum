var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var schema = new Schema({
    timeBegin: {
        type: String
    },
    timeEnd: {
        type: String
    }
});

schema.plugin(autoIncrement.plugin, {
    model: 'Auctions',
    startAt: 0,
    field: 'index'
});

var Auctions = mongoose.model('Auctions', schema);

exports.Auctions = Auctions;
