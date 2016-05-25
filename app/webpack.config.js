'use strict';

var _ = require('lodash');

var _configs = {
    global: require(__dirname + '/config/webpack/global'),
    production: require(__dirname + '/config/webpack/env/production'),
    development: require(__dirname + '/config/webpack/env/development'),
    admin: require(__dirname + '/config/webpack/type_app/admin_app.js')
};

var _load = function(environment,typeApp) {
    // Проверяем окружение
    if (!environment) throw 'Can\'t find local environment variable via process.env.NODE_ENV';
    if (!_configs[environment]) throw 'Can\'t find environments see _config object';
    console.log('config',__dirname);
    // load config file by environment
    return _configs && _.merge(
            _configs[environment](__dirname),
            _configs[typeApp](__dirname),
            _configs['global'](__dirname)
        );
};
module.exports = _load(process.env.NODE_ENV,process.env.TYPE_APP);