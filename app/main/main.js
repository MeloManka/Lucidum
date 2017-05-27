import angular from 'angular';

import controller from './main.ctrl';
import template from './main.tmpl.html';
import style from './main.scss';

export default angular.module('main', [])
  .config($stateProvider => {
    $stateProvider.state('main', {
      url: '/main',
      views: {
        "common": {
          controller,
          controllerAs: 'ctrl',
          template
        }
      }
    })
  })