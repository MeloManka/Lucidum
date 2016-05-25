'use strict';

export default class ParticipateCtrl {
    constructor($state, participateAPIService, cookiesService) {
        this.state = $state;
        this.api = participateAPIService;
        this.cookies = cookiesService;
        this.loader = false;
    }
}
