'use strict';

export default class RegisterCtrl {
    constructor($state, registerAPIService, cookiesService) {
        this.state = $state;
        this.api = registerAPIService;
        this.cookies = cookiesService;
        this.username = '';
        this.password = '';
        this.password2 = '';
    }

    registration() {
        this.api.register(this.username, this.password)
            .then(token => {
                this.cookies.set('token',token);
                this.state.go('main');
            })
            .catch(err => {
            });
    }

    isValidFormRegister() {
        return this.username && this.password && this.password2 && this.password == this.password2;
    }
}
