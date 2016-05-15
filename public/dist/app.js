webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(38);

	__webpack_require__(1);

	var _angular = __webpack_require__(12);

	var _angular2 = _interopRequireDefault(_angular);

	var _landing = __webpack_require__(13);

	var _landing2 = _interopRequireDefault(_landing);

	var _authService = __webpack_require__(33);

	var _authService2 = _interopRequireDefault(_authService);

	var _sessionStorageService = __webpack_require__(34);

	var _sessionStorageService2 = _interopRequireDefault(_sessionStorageService);

	var _cookiesService = __webpack_require__(19);

	var _cookiesService2 = _interopRequireDefault(_cookiesService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app', ['ui.router', 'ngCookies', 'ngStorage', _landing2.default.name]).service('authService', _authService2.default).service('sessionStorageService', _sessionStorageService2.default).service('cookiesService', _cookiesService2.default).config(function ($locationProvider, $httpProvider) {
	    var interceptor = function interceptor($q, $injector) {
	        return {
	            'response': function response(_response) {
	                return _response.data;
	            },
	            'responseError': function responseError(rejection) {
	                if (rejection.status == '401') {
	                    $injector.get('$state').transitionTo('landing');
	                }
	                return $q.reject(rejection.data);
	            }
	        };
	    };
	    $httpProvider.interceptors.push(interceptor);
	    $locationProvider.html5Mode(true);
	}).run(function ($rootScope, $state, authService) {
	    $rootScope.$on('$stateChangeStart', function (event, stateInfo, current) {
	        if (stateInfo.name != 'landing' && stateInfo.name != 'login' && stateInfo.name != 'register') {
	            authService.isAuth().then(function () {}).catch(function () {
	                event.preventDefault();
	                $state.go('landing');
	            });
	        }
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(6);

	__webpack_require__(8);

	__webpack_require__(10);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(12);

	var _angular2 = _interopRequireDefault(_angular);

	var _landingController = __webpack_require__(14);

	var _landingController2 = _interopRequireDefault(_landingController);

	var _login = __webpack_require__(15);

	var _login2 = _interopRequireDefault(_login);

	var _register = __webpack_require__(23);

	var _register2 = _interopRequireDefault(_register);

	var _main = __webpack_require__(28);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('landing', [_login2.default.name, _register2.default.name, _main2.default.name]).config(function ($stateProvider) {
	    $stateProvider.state('landing', {
	        url: '/',
	        views: {
	            'common': {
	                controller: _landingController2.default,
	                controllerAs: 'ctrl',
	                template: __webpack_require__(32)
	            }
	        }
	    });
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LandingCtrl = function LandingCtrl() {
	    _classCallCheck(this, LandingCtrl);
	};

	exports.default = LandingCtrl;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(12);

	var _angular2 = _interopRequireDefault(_angular);

	var _loginController = __webpack_require__(16);

	var _loginController2 = _interopRequireDefault(_loginController);

	var _loginService = __webpack_require__(17);

	var _loginService2 = _interopRequireDefault(_loginService);

	var _loginApiService = __webpack_require__(18);

	var _loginApiService2 = _interopRequireDefault(_loginApiService);

	var _cookiesService = __webpack_require__(19);

	var _cookiesService2 = _interopRequireDefault(_cookiesService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('login', []).service('loginService', _loginService2.default).service('loginAPIService', _loginApiService2.default).service('cookiesService', _cookiesService2.default).config(function ($stateProvider) {
	    $stateProvider.state('login', {
	        url: '/login',
	        views: {
	            'common': {
	                controller: _loginController2.default,
	                controllerAs: 'ctrl',
	                template: __webpack_require__(20)
	            }
	        }
	    });
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginCtrl = function () {
	    function LoginCtrl(loginAPIService, cookiesService, $state) {
	        _classCallCheck(this, LoginCtrl);

	        this.api = loginAPIService;
	        this.cookies = cookiesService;
	        this.username = '';
	        this.password = '';
	        this.state = $state;
	    }

	    _createClass(LoginCtrl, [{
	        key: 'login',
	        value: function login() {
	            var _this = this;

	            this.api.login(this.username, this.password).then(function (data) {
	                var token = data;
	                _this.cookies.set('token', token);
	                _this.state.go('main');
	            }).catch(function (err) {});
	        }
	    }, {
	        key: 'isValidFormLogin',
	        value: function isValidFormLogin() {
	            if (this.username && this.password) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }]);

	    return LoginCtrl;
	}();

	exports.default = LoginCtrl;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginService = function LoginService() {
	    _classCallCheck(this, LoginService);
	};

	exports.default = LoginService;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginAPIService = function () {
	    function LoginAPIService($http) {
	        _classCallCheck(this, LoginAPIService);

	        this.HTTP = $http;
	        this.urlBase = '/api/admin';
	    }

	    _createClass(LoginAPIService, [{
	        key: 'login',
	        value: function login(username, password) {
	            return this.HTTP.post(this.urlBase + '/login', {
	                username: username,
	                password: password
	            });
	        }
	    }]);

	    return LoginAPIService;
	}();

	exports.default = LoginAPIService;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CookiesService = function () {
	    function CookiesService($cookies) {
	        _classCallCheck(this, CookiesService);

	        this.cookies = $cookies;
	    }

	    _createClass(CookiesService, [{
	        key: 'get',
	        value: function get(key) {
	            return this.cookies.get(key);
	        }
	    }, {
	        key: 'set',
	        value: function set(key, value) {
	            this.cookies.put(key, value);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            this.cookies.remove(key);
	        }
	    }, {
	        key: 'isExist',
	        value: function isExist(key) {
	            return !!this.cookies.get(key);
	        }
	    }]);

	    return CookiesService;
	}();

	exports.default = CookiesService;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(21);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<div class=\"wrapper-flex __center __middle\"><div class=\"wrapper-flex__element\"><h1>Admin panel</h1><form name=\"loginForm\" aria-label=\"loginForm\" class=\"login-form\"><div class=\"list\"><label class=\"item item-input item-stacked-label\"><span class=\"input-label\">Username</span><input type=\"text\" placeholder=\"Username\" name=\"username\" ng-model=\"ctrl.username\"></label><label class=\"item item-input item-stacked-label\"><span class=\"input-label\">Password</span><input type=\"password\" placeholder=\"Password\" name=\"password\" ng-model=\"ctrl.password\"></label><button ng-class=\"{}\" ng-click=\"ctrl.login()\" ng-disabled=\"!ctrl.isValidFormLogin()\" class=\"button button-full button-balanced\">Log in</button></div></form></div></div>");;return buf.join("");
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(22).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 22 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _registerController = __webpack_require__(24);

	var _registerController2 = _interopRequireDefault(_registerController);

	var _registerService = __webpack_require__(25);

	var _registerService2 = _interopRequireDefault(_registerService);

	var _registerApiService = __webpack_require__(26);

	var _registerApiService2 = _interopRequireDefault(_registerApiService);

	var _cookiesService = __webpack_require__(19);

	var _cookiesService2 = _interopRequireDefault(_cookiesService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('register', []).service('registerService', _registerService2.default).service('registerAPIService', _registerApiService2.default).service('cookiesService', _cookiesService2.default).config(function ($stateProvider) {
	    $stateProvider.state('register', {
	        url: '/registration',
	        views: {
	            'common': {
	                controller: _registerController2.default,
	                controllerAs: 'ctrl',
	                template: __webpack_require__(27)
	            }
	        }
	    });
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RegisterCtrl = function () {
	    function RegisterCtrl($state, registerAPIService, cookiesService) {
	        _classCallCheck(this, RegisterCtrl);

	        this.state = $state;
	        this.api = registerAPIService;
	        this.cookies = cookiesService;
	        this.username = '';
	        this.password = '';
	        this.password2 = '';
	    }

	    _createClass(RegisterCtrl, [{
	        key: 'registration',
	        value: function registration() {
	            var _this = this;

	            this.api.register(this.username, this.password).then(function (token) {
	                _this.cookies.set('token', token);
	                _this.state.go('main');
	            }).catch(function (err) {});
	        }
	    }, {
	        key: 'isValidFormRegister',
	        value: function isValidFormRegister() {
	            return this.username && this.password && this.password2 && this.password == this.password2;
	        }
	    }]);

	    return RegisterCtrl;
	}();

	exports.default = RegisterCtrl;

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RegisterService = function RegisterService() {
	    _classCallCheck(this, RegisterService);
	};

	exports.default = RegisterService;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RegisterAPIService = function () {
	    function RegisterAPIService($http) {
	        _classCallCheck(this, RegisterAPIService);

	        this.HTTP = $http;
	        this.urlBase = '/api/admin';
	    }

	    _createClass(RegisterAPIService, [{
	        key: 'register',
	        value: function register(username, password) {
	            return this.HTTP.post(this.urlBase + '/registration', {
	                username: username,
	                password: password
	            });
	        }
	    }]);

	    return RegisterAPIService;
	}();

	exports.default = RegisterAPIService;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(21);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<div class=\"wrapper-flex __center __middle\"><div class=\"wrapper-flex__element\"><h1 class=\"__center-text\">Register as admin</h1><form name=\"registerForm\" aria-label=\"registerForm\" class=\"register-form\"><div class=\"list\"><label class=\"item item-input item-stacked-label\"><span class=\"input-label\">Username</span><input type=\"text\" placeholder=\"Username\" name=\"username\" ng-model=\"ctrl.username\"></label><label class=\"item item-input item-stacked-label\"><span class=\"input-label\">Password</span><input type=\"password\" placeholder=\"Password\" name=\"password\" ng-model=\"ctrl.password\"></label><label class=\"item item-input item-stacked-label\"><span class=\"input-label\">Repeat password</span><input type=\"password\" placeholder=\"Password\" name=\"password2\" ng-model=\"ctrl.password2\"></label><button ng-class=\"{}\" ng-click=\"ctrl.registration()\" ng-disabled=\"!ctrl.isValidFormRegister()\" class=\"button button-full button-balanced\">Register</button></div></form><div class=\"__center-text\"><a ui-sref=\"landing\">Go back to the landing page</a></div></div></div>");;return buf.join("");
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(12);

	var _angular2 = _interopRequireDefault(_angular);

	var _mainController = __webpack_require__(29);

	var _mainController2 = _interopRequireDefault(_mainController);

	var _mainService = __webpack_require__(30);

	var _mainService2 = _interopRequireDefault(_mainService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('main', []).service('mainService', _mainService2.default).config(function ($stateProvider) {
	    $stateProvider.state('main', {
	        url: '/main',
	        views: {
	            'common': {
	                controller: _mainController2.default,
	                controllerAs: 'ctrl',
	                template: __webpack_require__(31)
	            }
	        }
	    });
	});

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MainCtrl = function MainCtrl() {
	    _classCallCheck(this, MainCtrl);
	};

	exports.default = MainCtrl;

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MainService = function MainService() {
	    _classCallCheck(this, MainService);
	};

	exports.default = MainService;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(21);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<div>UIII</div><ui-view></ui-view>");;return buf.join("");
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(21);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<div>HELLO ADMIN!</div><a ui-sref=\"login\">Login</a><br><a ui-sref=\"register\">Registration</a>");;return buf.join("");
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AuthService = function () {
	    function AuthService($http, cookiesService, $q) {
	        _classCallCheck(this, AuthService);

	        this.HTTP = $http;
	        this.urlBase = '/api';
	        this.cookies = cookiesService;
	        this.q = $q;
	    }

	    _createClass(AuthService, [{
	        key: 'isTokenValid',
	        value: function isTokenValid() {
	            var token = this.cookies.get('token');
	            return this.HTTP.get(this.urlBase + '/auth/' + token);
	        }
	    }, {
	        key: 'isAuth',
	        value: function isAuth() {
	            if (this.cookies.isExist('token')) {
	                return this.isTokenValid();
	            } else {
	                return this.q.reject(new Error('Token was not present'));
	            }
	        }
	    }]);

	    return AuthService;
	}();

	exports.default = AuthService;

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SessionStorageService = function () {
	    function SessionStorageService($sessionStorage) {
	        _classCallCheck(this, SessionStorageService);

	        this.session = $sessionStorage;
	    }

	    _createClass(SessionStorageService, [{
	        key: 'get',
	        value: function get(key) {
	            return this.session[key];
	        }
	    }, {
	        key: 'set',
	        value: function set(key, value) {
	            this.session[key] = value;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            delete this.session[key];
	        }
	    }, {
	        key: 'isExist',
	        value: function isExist(key) {
	            return !!this.session[key];
	        }
	    }]);

	    return SessionStorageService;
	}();

	exports.default = SessionStorageService;

/***/ },
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);