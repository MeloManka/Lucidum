var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var schema = new Schema({
    info: {
        type: String
    },
    clients: {
        type: Array
    }
});

schema.plugin(autoIncrement.plugin, {
    model: 'Caregivers',
    startAt: 0,
    field: 'index'
});

var Caregivers = mongoose.model('Caregivers', schema);

exports.Caregivers = Caregivers;
