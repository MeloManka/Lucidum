'use strict';

export default class ProfileCtrl {
    constructor($state, profileAPIService, cookiesService) {
        this.state = $state;
        this.api = profileAPIService;
        this.cookies = cookiesService;
        this.loader = false;
    }
}
