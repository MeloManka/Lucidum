'use strict';

export default class MainAPIService {
    constructor($http) {
        this.HTTP = $http;
        this.urlBase = '/api';
    }
    logout(){
        return this.HTTP.post(this.url + '/logout');
    }
}