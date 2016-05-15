'use strict';

export default class LoginAPIService {
    constructor($http) {
        this.HTTP = $http;
        this.urlBase = '/api/admin';
    }
    login(username, password) {
        return this.HTTP.post(this.urlBase + '/login', {
            username: username,
            password: password
        });
    }
}