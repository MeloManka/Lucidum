import angular from 'angular';

import controller from './landing.ctrl';
import template from './landing.tmpl.html';
import style from './landing.scss';

import main from '../main/main';

export default angular.module('landing', [
  main.name
])
  .config($stateProvider => {
    $stateProvider.state('landing', {
      url: '/',
      views: {
        "common": {
          controller,
          controllerAs: 'ctrl',
          template
        }
      }
    })
  })