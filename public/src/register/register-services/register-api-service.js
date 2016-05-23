'use strict';

export default class RegisterAPIService {
    constructor($http) {
        this.HTTP = $http;
        this.urlBase = '/api';
    }
    register(username, password) {
        return this.HTTP.post(this.urlBase + '/registration', {
            username: username,
            password: password
        });
    }
}