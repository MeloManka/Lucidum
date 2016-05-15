var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    status: {
        type: String
    },
    workingHours: {
        type: String
    },
    clients: {
        type: Array
    }
});

schema.plugin(autoIncrement.plugin, {
    model: 'Pharmacies',
    startAt: 0,
    field: 'index'
});

var Pharmacies = mongoose.model('Pharmacies', schema);

exports.Pharmacies = Pharmacies;
