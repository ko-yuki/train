/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"2":"63e5e26b","3":"efae5798"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"2":1,"3":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({}[chunkId]||chunkId) + "." + {"2":"be4e1d7a","3":"ba7ac4cd"}[chunkId] + ".chunk.css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				var onLinkComplete = function (event) {
/******/ 					// avoid mem leaks.
/******/ 					linkTag.onerror = linkTag.onload = null;
/******/ 					if (event.type === 'load') {
/******/ 						resolve();
/******/ 					} else {
/******/ 						var request = event && event.target && event.target.href || fullhref;
/******/ 						var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 						err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 						err.request = request;
/******/ 						delete installedCssChunks[chunkId]
/******/ 						linkTag.parentNode.removeChild(linkTag)
/******/ 						reject(err);
/******/ 					}
/******/ 				};
/******/ 				linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				document.head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/train/05/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([81,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a {\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.65);\n}\na:hover {\n  color: #1890ff;\n}\na.actived {\n  color: #b42c1e;\n}\nbutton:enabled:hover {\n  color: #1890ff;\n}\nli a {\n  color: rgba(0, 0, 0, 0.65);\n  text-decoration: none;\n}\nli a:hover {\n  text-decoration: none;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/index.less"],"names":[],"mappings":"AAEA;EACE,qBAAA;EACA,0BAAA;AADF;AAGA;EACE,cAAA;AADF;AAGA;EACE,cAAA;AADF;AAGA;EACE,cAAA;AADF;AAGA;EACE,0BAAA;EACA,qBAAA;AADF;AAGA;EACE,qBAAA;AADF","sourcesContent":["@import \"./variable\";\n\na {\n  text-decoration: none;\n  color: @text-color;\n}\na:hover {\n  color: @primary-color;\n}\na.actived {\n  color: @active-colr;\n}\nbutton:enabled:hover {\n  color: @primary-color;\n}\nli a {\n  color: @text-color;\n  text-decoration: none;\n}\nli a:hover {\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(37);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/assets/index.less
var assets = __webpack_require__(21);

// CONCATENATED MODULE: ./src/assets/index.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(assets["a" /* default */], options);



/* harmony default export */ var src_assets = (assets["a" /* default */].locals || {});
// CONCATENATED MODULE: ./src/assets/reset.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/font-awesome/css/font-awesome.min.css
var font_awesome_min = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(7);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(8);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(9);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(10);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@loadable/component/dist/loadable.esm.js + 1 modules
var loadable_esm = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(13);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(14);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/components/Common/Nav.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Common_Nav = ({"top":"_3P_f4R_0aicXeuoBw3DX6z"});
// CONCATENATED MODULE: ./src/components/Common/Nav.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Nav_Nav = /*#__PURE__*/function (_Component) {
  inherits_default()(Nav, _Component);

  var _super = _createSuper(Nav);

  function Nav(props) {
    var _this;

    classCallCheck_default()(this, Nav);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "isActive", function (nav) {
      var param = window.location.hash.split("#")[1].replace("/", "");
      var idx = param.indexOf("battle");

      if (nav === "Popular") {
        return idx === -1;
      }

      return idx !== -1;
    });

    _this.state = {
      navs: ["Popular", "Battle"]
    };
    return _this;
  }

  createClass_default()(Nav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var navs = this.state.navs;
      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("ul", {
        className: Common_Nav.top
      }, navs.map(function (nav, index) {
        return /*#__PURE__*/react_default.a.createElement("li", {
          key: index
        }, /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* NavLink */], {
          isActive: function isActive() {
            return _this2.isActive(nav);
          },
          activeStyle: {
            color: "rgb(180, 44, 30)"
          },
          to: nav === "Popular" ? "/popular?language=all" : "/battle"
        }, nav));
      })));
    }
  }]);

  return Nav;
}(react["Component"]);

/* harmony default export */ var components_Common_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./src/components/Common/Footer.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Common_Footer = ({"footer":"_22noeUpClUQNc8mtg3XB0v"});
// CONCATENATED MODULE: ./src/components/Common/Footer.js






function Footer_createSuper(Derived) { var hasNativeReflectConstruct = Footer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Footer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// 定义尾部



var Footer_Footer = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Footer, _React$Component);

  var _super = Footer_createSuper(Footer);

  function Footer() {
    classCallCheck_default()(this, Footer);

    return _super.apply(this, arguments);
  }

  createClass_default()(Footer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("p", {
        className: Common_Footer.footer
      }, "\u7248\u6743\u6240\u6709 \xA9 xuezhonglin");
    }
  }]);

  return Footer;
}(react_default.a.Component);

/* harmony default export */ var components_Common_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./src/components/Home/Header.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Home_Header = ({"header":"_2wz81iXuIZX_axsRb4HReE","actived":"_161Qx9nnT2JicAYY7IXDb8"});
// CONCATENATED MODULE: ./src/components/Home/Header.js






function Header_createSuper(Derived) { var hasNativeReflectConstruct = Header_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Header_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// 定义头部



var Header_Header = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Header, _React$Component);

  var _super = Header_createSuper(Header);

  function Header(props) {
    var _this;

    classCallCheck_default()(this, Header);

    _this = _super.call(this, props);
    _this.state = {
      title: ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"],
      param: 'all'
    };
    return _this;
  }

  createClass_default()(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var s = this.props.props.location.search;
      var p = new URLSearchParams(s).get('language');
      this.setState({
        param: p
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      var s = newProps.props.location.search;
      var p = new URLSearchParams(s).get('language');
      this.setState({
        param: p
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          title = _this$state.title,
          param = _this$state.param;
      var _onClick = this.props.onClick;
      return /*#__PURE__*/react_default.a.createElement("ul", {
        className: Home_Header.header
      }, title.map(function (item) {
        return /*#__PURE__*/react_default.a.createElement("li", {
          style: {
            color: param === item.toLowerCase() ? '#b42c1e' : '#000'
          },
          key: item,
          onClick: function onClick() {
            return _onClick(item.toLowerCase());
          }
        }, item);
      }));
    }
  }]);

  return Header;
}(react_default.a.Component);

/* harmony default export */ var components_Home_Header = (Header_Header);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(41);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(25);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(19);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(20);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/react-infinite-scroll-component/dist/index.es.js
var index_es = __webpack_require__(42);

// CONCATENATED MODULE: ./src/components/Home/HomeMain.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Home_HomeMain = ({"home_box":"_1Ft1YqBm4dl6re7d7unyo2","loading":"_3Q7g-IU_3Qmh4thtZtC86w","project_box":"_1P4MTnEnsJnRvwAhJhsCwc","project_item":"QZauYb-w1p4IEsW0k0iSp","icon_box":"_1GZ1SAuWMWjxQ92_J2DjQZ"});
// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(80);

// CONCATENATED MODULE: ./src/components/Home/HomeMain.js











function HomeMain_createSuper(Derived) { var hasNativeReflectConstruct = HomeMain_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function HomeMain_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





 // 定义主要内容

var HomeMain_HomeMain = /*#__PURE__*/function (_React$Component) {
  inherits_default()(HomeMain, _React$Component);

  var _super = HomeMain_createSuper(HomeMain);

  function HomeMain(props) {
    var _this;

    classCallCheck_default()(this, HomeMain);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "componentWillUnmount", function () {
      _this.setState = function () {};
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getData", /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(param) {
        var _this$state, data, page, res, arr;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state = _this.state, data = _this$state.data, page = _this$state.page;
                res = null; // 请求数据

                if (!(param === "all")) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return axios_default()({
                  url: "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories",
                  params: {
                    per_page: 10,
                    page: page
                  }
                })["catch"](function (error) {
                  var err = error.response.data.message;

                  _this.setState({
                    err: err
                  });
                });

              case 5:
                res = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return axios_default()({
                  url: "https://api.github.com/search/repositories?q=stars:%3E1+language:".concat(param, "&sort=stars&order=desc&type=Repositories"),
                  params: {
                    per_page: 10,
                    page: page
                  }
                })["catch"](function (error) {
                  var err = error.response.data.message;

                  _this.setState({
                    err: err
                  });
                });

              case 10:
                res = _context.sent;

              case 11:
                arr = [];
                res.data.items.forEach(function (item) {
                  var obj = {
                    id: item.id,
                    url: item.owner.avatar_url,
                    name: item.owner.login,
                    infos: [{
                      text: item.owner.login,
                      icon: "fa-user",
                      color: "#febf6b"
                    }, {
                      text: item.watchers,
                      end: " stars",
                      icon: "fa-star",
                      color: "#fed901"
                    }, {
                      text: item.forks,
                      end: " forks",
                      icon: "fa-code-fork",
                      color: "#a2cdef"
                    }, {
                      text: item.open_issues,
                      end: " open issues",
                      icon: "fa-warning",
                      color: "#f8868f"
                    }]
                  };
                  arr.push(obj);
                });

                _this.setState({
                  data: [].concat(toConsumableArray_default()(data), arr),
                  page: page + 1,
                  err: ""
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      data: [],
      page: 1,
      param: '',
      err: ''
    };
    return _this;
  }

  createClass_default()(HomeMain, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var params = this.props.props.location.search;
      var p = new URLSearchParams(params).get("language");
      this.setState({
        param: p
      });
      this.getData(p);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      var _this2 = this;

      var param = newProps.param;

      if (param !== this.state.param) {
        this.setState({
          data: [],
          param: param,
          page: 1
        }, function () {
          _this2.getData(param);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          data = _this$state2.data,
          param = _this$state2.param,
          err = _this$state2.err;
      var msg = "Loading ...";

      if (err !== "") {
        msg = '数据请求失败，请刷新页面重试！';
      } else {
        msg = "Loading ...";
      }

      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "container ".concat(Home_HomeMain.home_box)
      }, /*#__PURE__*/react_default.a.createElement(index_es["a" /* default */], {
        style: {
          overflow: "unset"
        },
        dataLength: data.length,
        next: function next() {
          return _this3.getData(param);
        },
        hasMore: true,
        loader: /*#__PURE__*/react_default.a.createElement("h4", {
          className: Home_HomeMain.loading,
          style: {
            color: err === "" ? '#000' : 'red'
          }
        }, /*#__PURE__*/react_default.a.createElement("i", {
          className: "fa fa-spinner fa-spin",
          style: {
            display: err === "" ? "inline-block" : "none"
          }
        }), msg, /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), err)
      }, /*#__PURE__*/react_default.a.createElement("ul", {
        className: "row ".concat(Home_HomeMain.project_box)
      }, data.map(function (item, idx) {
        return /*#__PURE__*/react_default.a.createElement("li", {
          className: "col-9 col-sm-6 col-md-4 col-lg-3 ".concat(Home_HomeMain.project_item),
          key: idx
        }, /*#__PURE__*/react_default.a.createElement("h2", null, "#", idx + 1), /*#__PURE__*/react_default.a.createElement("img", {
          "data-src": item.url,
          alt: "",
          className: "lazyload"
        }), /*#__PURE__*/react_default.a.createElement("h3", null, item.name), /*#__PURE__*/react_default.a.createElement("ul", {
          className: "fa-ul ".concat(Home_HomeMain.icon_box)
        }, item.infos.map(function (info) {
          return /*#__PURE__*/react_default.a.createElement("li", {
            key: info.icon
          }, /*#__PURE__*/react_default.a.createElement("i", {
            style: {
              color: info.color
            },
            className: "icon fa ".concat(info.icon)
          }, /*#__PURE__*/react_default.a.createElement("span", null, info.text, info.end)));
        })));
      }))));
    }
  }]);

  return HomeMain;
}(react_default.a.Component);

/* harmony default export */ var components_Home_HomeMain = (HomeMain_HomeMain);
// CONCATENATED MODULE: ./src/pages/Home.js








function Home_createSuper(Derived) { var hasNativeReflectConstruct = Home_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Home_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Home_Home = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Home, _React$Component);

  var _super = Home_createSuper(Home);

  function Home(props) {
    var _this;

    classCallCheck_default()(this, Home);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "getParam", function (param) {
      _this.setState({
        param: param
      });

      _this.props.history.push("/popular?language=".concat(param));
    });

    _this.state = {
      param: 'all'
    };
    return _this;
  }

  createClass_default()(Home, [{
    key: "render",
    value: function render() {
      var param = this.state.param;
      return /*#__PURE__*/react_default.a.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/react_default.a.createElement(components_Home_Header, {
        props: this.props,
        onClick: this.getParam
      }), /*#__PURE__*/react_default.a.createElement(components_Home_HomeMain, {
        props: this.props,
        param: param
      }));
    }
  }]);

  return Home;
}(react_default.a.Component);

/* harmony default export */ var pages_Home = (Home_Home);
// CONCATENATED MODULE: ./src/App.js






function App_createSuper(Derived) { var hasNativeReflectConstruct = App_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function App_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var Battle = Object(loadable_esm["a" /* default */])(function () {
  return __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 83));
});
var Result = Object(loadable_esm["a" /* default */])(function () {
  return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 82));
});

var App_App = /*#__PURE__*/function (_React$Component) {
  inherits_default()(App, _React$Component);

  var _super = App_createSuper(App);

  function App() {
    classCallCheck_default()(this, App);

    return _super.apply(this, arguments);
  }

  createClass_default()(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("div", {
        style: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }
      }, /*#__PURE__*/react_default.a.createElement(components_Common_Nav, null), /*#__PURE__*/react_default.a.createElement(react_router["d" /* Switch */], null, /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
        exact: true,
        from: "/",
        to: "/popular?language=all"
      }), /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], {
        path: "/popular",
        component: pages_Home
      }), /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], {
        exact: true,
        path: "/battle",
        component: Battle
      }), /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], {
        path: "/battle/result",
        component: Result
      })), /*#__PURE__*/react_default.a.createElement(components_Common_Footer, null));
    }
  }]);

  return App;
}(react_default.a.Component);

/* harmony default export */ var src_App = (App_App);
// CONCATENATED MODULE: ./src/index.js









react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* HashRouter */], null, /*#__PURE__*/react_default.a.createElement(src_App, null)), document.getElementById("app"));

/***/ })

/******/ });
//# sourceMappingURL=main.f48c910e.js.map