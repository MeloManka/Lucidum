'use strict';

export default class AuctionCtrl {
    constructor($state, auctionAPIService, cookiesService) {
        this.state = $state;
        this.api = auctionAPIService;
        this.cookies = cookiesService;
        this.loader = false;
    }
}
