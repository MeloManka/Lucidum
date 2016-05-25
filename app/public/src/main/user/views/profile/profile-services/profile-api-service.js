'use strict';

export default class ProfileAPIService {
    constructor($http) {
        this.HTTP = $http;
        this.urlBase = '/api';
    }
}