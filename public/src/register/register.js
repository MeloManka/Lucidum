'use strict';

import RegisterCtrl from './register-controller';
import RegisterService from './register-services/register-service';
import RegisterAPIService from './register-services/register-api-service';
import CookiesService from '../common/service/cookies-service';

export default angular.module('register', [])
    .service('registerService', RegisterService)
    .service('registerAPIService', RegisterAPIService)
    .service('cookiesService', CookiesService)
    .config($stateProvider => {
        $stateProvider.state('register', {
            url: '/registration',
            views: {
                'common': {
                    controller: RegisterCtrl,
                    controllerAs: 'ctrl',
                    template: require('./register-tmpl.jade')
                }
            }
        });
    });
