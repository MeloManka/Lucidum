var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var schema = new Schema({
    userId: {
        type: String,
        require: true
    },
    auctionId: {
        type: String,
        require: true
    },
    schema: {
        type: String,
        require: true
    },
    sum: {
        type: Number,
        require: true
    }
});

schema.plugin(autoIncrement.plugin, {
    model: 'Proposals',
    startAt: 0,
    field: 'index'
});

var Proposals = mongoose.model('Proposals', schema);

exports.Proposals = Proposals;
