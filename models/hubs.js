var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var schema = new Schema({
    deliveryDate: {
        type: Date
    },
    hubId: {
        type: String
    },
    clips: {
        type: Array
    }
});

schema.plugin(autoIncrement.plugin, {
    model: 'Hubs',
    startAt: 0,
    field: 'index'
});

var Hubs = mongoose.model('Hubs', schema);

exports.Hubs = Hubs;
