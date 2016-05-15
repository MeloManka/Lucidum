var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var ClientClipsSchema = new Schema({
    clipId: {
        type: String,
        require: true
    },
    configuration: {
        type: Object
    },
    startDate: {
        type: Date
    },
    startDay: {
        type: String
    },
    batteryStatistics: {
        type: Object
    }
});

var schema = new Schema({
    clientId: {
        type: String
    },
    info: {
        type: Object
    },
    hubs: {
        type: Array
    },
    clips: [ClientClipsSchema]
});

schema.plugin(autoIncrement.plugin, {
    model: 'Clients',
    startAt: 0,
    field: 'index'
});

var Clients = mongoose.model('Clients', schema);

exports.Clients = Clients;
