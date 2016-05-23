'use strict';

export default class UsersAPIService {
    constructor($http) {
        this.HTTP = $http;
        this.urlBase = '/api';
    }
}