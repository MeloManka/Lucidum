'use strict';

export default class SchemaAPIService {
    constructor($http) {
        this.HTTP = $http;
        this.urlBase = '/api';
    }
    send(numberProgramm) {
        return this.HTTP.post(this.urlBase + '/send', {
            num: numberProgramm
        });
    }
}