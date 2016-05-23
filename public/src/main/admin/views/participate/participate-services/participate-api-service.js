'use strict';

export default class ParticipateAPIService {
    constructor($http) {
        this.HTTP = $http;
        this.urlBase = '/api';
    }
}