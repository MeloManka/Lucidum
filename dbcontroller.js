var mongoose = require('mongoose');
var config = require('./config');
var autoIncrement = require('mongoose-auto-increment');

var url = 'mongodb://' + config.get('mongo:user') + ':' + config.get('mongo:password') + '@' + config.get('mongo:url') + ':' + config.get('mongo:port') + '/' + config.get('mongo:db');

console.log('db url', url);
var db = mongoose.createConnection(url);
db.Schema = mongoose.Schema;

autoIncrement.initialize(db);

db.once('open', function callback() {
    console.info('Mongo db connected successfully');
});

exports.mongoose = mongoose;
exports.db = db;
