'use strict';

export default class SchemaAPIService {
    constructor($http) {
        this.HTTP = $http;
        this.urlBase = '/api';
    }
    send() {
        return this.HTTP.post(this.urlBase + '/send', {
            num: 0
        });
    }
}