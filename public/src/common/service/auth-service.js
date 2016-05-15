'use strict';

export default class AuthService {
    constructor($http, cookiesService,$q) {
        this.HTTP = $http;
        this.urlBase = '/api';
        this.cookies = cookiesService;
        this.q = $q;
    }

    isTokenValid() {
        var token = this.cookies.get('token');
        return this.HTTP.get(this.urlBase + '/auth/' + token);
    }

    isAuth() {
        if (this.cookies.isExist('token')) {
            return this.isTokenValid();
        } else {
            return this.q.reject(new Error('Token was not present'));
        }
    }
}