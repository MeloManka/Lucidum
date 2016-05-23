'use strict';

export default class MainCtrl {
    constructor(mainAPIService, sessionStorageService, cookiesService) {
        this.api = mainAPIService;
        this.session  = sessionStorageService;
        this.cookies = cookiesService;
        this.username = this.session.get('username');
        this.type = this.cookies.get('type');
    }
    openMenu($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    };
    logout(){
        this.api.logout()
            .then()
            .catch();
    }
}