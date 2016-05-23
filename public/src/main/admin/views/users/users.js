'use strict';

import UsersCtrl from './users-controller';
import UsersService from './users-services/users-service';
import UsersAPIService from './users-services/users-api-service';
import CookiesService from '../../../../common/service/cookies-service';

export default angular.module('usersAdmin', [])
    .service('usersService', UsersService)
    .service('usersAPIService', UsersAPIService)
    .service('cookiesService', CookiesService)
    .config($stateProvider => {
        $stateProvider.state('admin.users', {
            url: '/users',
            controller: UsersCtrl,
            controllerAs: 'ctrl',
            template: require('./users-tmpl.jade')
        });
    });
