'use strict';

export default class AuctionAPIService {
    constructor($http) {
        this.HTTP = $http;
        this.urlBase = '/api';
    }
}