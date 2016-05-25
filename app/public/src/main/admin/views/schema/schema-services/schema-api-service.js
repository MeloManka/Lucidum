'use strict';

export default class SchemaAPIService {
    constructor($http) {
        this.HTTP = $http;
        this.urlBase = '/api';
    }
    send(programm) {
        return this.HTTP.post(this.urlBase + '/send', {
            programm: programm
        });
    }
}