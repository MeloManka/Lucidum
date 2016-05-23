'use strict';

export default class LoginCtrl {
    constructor(loginAPIService, cookiesService, sessionStorageService, $state) {
        this.api = loginAPIService;
        this.cookies = cookiesService;
        this.session = sessionStorageService;
        this.username = '';
        this.password = '';
        this.state = $state;
        this.error = '';
        this.loader = false;
    }

    login() {
        this.loader = true;
        this.api.login(this.username, this.password)
            .then(data => {
                this.loader = false;
                let token = data.token;
                let type = data.type;
                this.cookies.set('token', token);
                this.session.set('username', this.username);
                this.cookies.set('type', type);
                if(this.cookies.get('type') == 'admin'){
                    this.state.go('admin.profile');
                }
                this.state.go('user.profile');
            })
            .catch(err => {
                this.loader = false;
                this.error = err.message;
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