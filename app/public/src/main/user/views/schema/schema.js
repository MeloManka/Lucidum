'use strict';

import SchemaCtrl from './schema-controller';
import SchemaService from './schema-services/schema-service';
import SchemaAPIService from './schema-services/schema-api-service';
import CookiesService from '../../../../common/service/cookies-service';

export default angular.module('schemaUser', [])
    .service('schemaService', SchemaService)
    .service('schemaAPIService', SchemaAPIService)
    .service('cookiesService', CookiesService)
    .config($stateProvider => {
        $stateProvider.state('user.schema', {
            url: '/schema',
            controller: SchemaCtrl,
            controllerAs: 'ctrl',
            template: require('./schema-tmpl.jade')
        });
    });
