'use strict';

export default class RegisterCtrl {
    constructor($state, registerAPIService, cookiesService, sessionStorageService) {
        this.state = $state;
        this.api = registerAPIService;
        this.cookies = cookiesService;
        this.session = sessionStorageService;
        this.username = '';
        this.password = '';
        this.password2 = '';
        this.error = '';
        this.loader = false;
    }

    registration() {
        this.loader = true;
        this.api.register(this.username, this.password)
            .then(token => {
                this.loader = false;
                this.cookies.set('token',token);
                this.cookies.set('type','user');
                this.session.set('username',this.username);
                this.state.go('user.profile');
            })
            .catch(err => {
                this.loader = false;
                this.error = err.message;
            });
    }

    isValidFormReg() {
        return this.username && this.password && this.password2 && this.password == this.password2;
    }
}
