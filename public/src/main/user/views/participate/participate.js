'use strict';

import ParticipateCtrl from './participate-controller';
import ParticipateService from './participate-services/participate-service';
import ParticipateAPIService from './participate-services/participate-api-service';
import CookiesService from '../../../../common/service/cookies-service';

export default angular.module('participateUser', [])
    .service('participateService', ParticipateService)
    .service('participateAPIService', ParticipateAPIService)
    .service('cookiesService', CookiesService)
    .config($stateProvider => {
        $stateProvider.state('user.participate', {
            url: '/participate',
            controller: ParticipateCtrl,
            controllerAs: 'ctrl',
            template: require('./participate-tmpl.jade')
        });
    });
