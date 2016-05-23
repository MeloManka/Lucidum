'use strict';

import ProfileCtrl from './profile-controller';
import ProfileService from './profile-services/profile-service';
import ProfileAPIService from './profile-services/profile-api-service';
import CookiesService from '../../../../common/service/cookies-service';

export default angular.module('profileUser', [])
    .service('profileService', ProfileService)
    .service('profileAPIService', ProfileAPIService)
    .service('cookiesService', CookiesService)
    .config($stateProvider => {
        $stateProvider.state('user.profile', {
            url: '/profile',
            controller: ProfileCtrl,
            controllerAs: 'ctrl',
            template: require('./profile-tmpl.jade')
        });
    });
