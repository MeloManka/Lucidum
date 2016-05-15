'use strict';

export default class LoginCtrl {
    constructor(loginAPIService, cookiesService, $state) {
        this.api = loginAPIService;
        this.cookies = cookiesService;
        this.username = '';
        this.password = '';
        this.state = $state;
    }

    login() {
        this.api.login(this.username, this.password)
            .then(data => {
                let token = data;
                this.cookies.set('token', token);
                this.state.go('main');
            })
            .catch(function (err) {

            });
    }

    isValidFormLogin() {
        if (this.username && this.password) {
            return true;
        } else {
            return false;
        }
    }
}