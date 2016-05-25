'use strict';

import SchemaCtrl from './schema-controller';
import SchemaService from './schema-services/schema-service';
import SchemaAPIService from './schema-services/schema-api-service';
import CookiesService from '../../../../common/service/cookies-service';
import Schema1Directive from '../../../../schemes/schema1/schema1-directive';
export default angular.module('schemaAdmin', [])
    .service('schemaService', SchemaService)
    .service('schemaAPIService', SchemaAPIService)
    .service('cookiesService', CookiesService)
    .directive('schemaDirective', () => new Schema1Directive())
    .config($stateProvider => {
        $stateProvider.state('admin.schema', {
            url: '/schema',
            controller: SchemaCtrl,
            controllerAs: 'ctrl',
            template: require('./schema-tmpl.jade')
        });
    });
