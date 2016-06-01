(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_systemjs_config__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_systemjs_config___default = __WEBPACK_IMPORTED_MODULE_0__config_systemjs_config__ && __WEBPACK_IMPORTED_MODULE_0__config_systemjs_config__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0__config_systemjs_config__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0__config_systemjs_config__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0__config_systemjs_config___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0__config_systemjs_config___default });
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	
	
	var ComponentRegistry = function () {
	    function ComponentRegistry() {
	        _classCallCheck(this, ComponentRegistry);
	    }
	
	    _createClass(ComponentRegistry, [{
	        key: 'load',
	        value: function load(packageName, moduleName, callback) {
	            // uses SystemJS to load package by name, see config/systemjs.config.js for settings
	            SystemJS.import(packageName).then(function (m) {
	                callback(m[moduleName]);
	            });
	        }
	    }]);
	
	    return ComponentRegistry;
	}();
	
	/* harmony default export */ exports["a"] = ComponentRegistry;

/***/ },
/* 1 */
/***/ function(module, exports) {

	// Need to map globals for SystemJS to see
	// Also note that we are using SystemJS.import in code to avoid Webpack from treating System.import as build time split points
	
	SystemJS.config({
	    map: {
	        'React': '/components/__adapters/react-adapter.js',
	        'ReactDOM': '/components/__adapters/react-dom-adapter.js',
	        /* add component package names here */
	        'component3-package1': '/components/component3-package1/component3-package1.js',
	        'component3-package2': '/components/component3-package2/component3-package2.js'
	    }
	});

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_ComponentRegistry__ = __webpack_require__(0);
	/* harmony reexport */ if(Object.prototype.hasOwnProperty.call(__WEBPACK_IMPORTED_MODULE_0_app_ComponentRegistry__, "a")) Object.defineProperty(exports, "ComponentRegistry", {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_0_app_ComponentRegistry__["a"]; }});


/***/ }
/******/ ])
});
;