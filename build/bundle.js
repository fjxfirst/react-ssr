/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Header/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Header/style.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".style_container_31n_O{\\r\\n  box-sizing: border-box;\\r\\n  height: 40px;\\r\\n  padding-top: 9px;\\r\\n  border:1px solid #ccc;\\r\\n}\\r\\n.style_item_1gapL{\\r\\n  display: inline-block;\\r\\n  color:#333;\\r\\n  text-decoration: none;\\r\\n  margin-left: 20px;\\r\\n  font-size:14px;\\r\\n  cursor:pointer;\\r\\n}\\r\\n.style_item_1gapL:hover{\\r\\n  color:#999;\\r\\n}\\r\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"container\": \"style_container_31n_O\",\n\t\"item\": \"style_item_1gapL\"\n};\n\n//# sourceURL=webpack:///./src/components/Header/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/containers/Home/style.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/containers/Home/style.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".style_container_1n3kz{\\r\\n  margin-top: 20px;\\r\\n  margin-left:20px;\\r\\n}\\r\\n.style_item_1Fqg-{\\r\\n  line-height: 34px;\\r\\n  font-size: 14px;\\r\\n  color:#666;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"container\": \"style_container_1n3kz\",\n\t\"item\": \"style_item_1Fqg-\"\n};\n\n//# sourceURL=webpack:///./src/containers/Home/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header/store */ \"./src/components/Header/store/index.js\");\n\n\n\n // import routes from './Routes'\n\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    staticContext: props.staticContext\n  }), Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(props.route.routes));\n};\n\nApp.loadData = function (store) {\n  return store.dispatch(_components_Header_store__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].getHeaderInfo());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n/* harmony import */ var _containers_Translation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/Translation */ \"./src/containers/Translation/index.js\");\n/* harmony import */ var _containers_NotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\");\n\n\n\n\n\n\n/*export default (\r\n  <div>\r\n    <Route path='/' exact component={Home}></Route>\r\n    <Route path='/login' exact component={Login}></Route>\r\n  </div>\r\n)*/\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([//当用户访问'/'路径时，能匹配出App和Home组件\n//当用户访问'/login'路径时，能匹配出App和Login组件\n{\n  path: '/',\n  component: _App__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  loadData: _App__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadData,\n  routes: [{\n    path: '/',\n    component: _containers_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    exact: true,\n    //当加载Home组件之前会执行loadData方法\n    loadData: _containers_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadData,\n    key: 'home'\n  }, {\n    path: '/translation',\n    component: _containers_Translation__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    exact: true,\n    key: 'translation'\n  }, {\n    component: _containers_NotFound__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/api' //对于浏览器端\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./src/components/Header/store/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/components/Header/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar Header =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n\n    /*componentWillMount(){\r\n      const {staticContext}=this.props\r\n      staticContext&&(staticContext.css.push(styles._getCss()))\r\n    }*/\n    value: function render() {\n      var _this$props = this.props,\n          login = _this$props.login,\n          handleLogin = _this$props.handleLogin,\n          handleLogout = _this$props.handleLogout;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\",\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item\n      }, \"\\u9996\\u9875\"), login ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/translation\",\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item\n      }, \"\\u7FFB\\u8BD1\\u5217\\u8868\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: handleLogout,\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item\n      }, \"\\u9000\\u51FA\")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: handleLogin,\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item\n      }, \"\\u767B\\u5F55\"));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(function (state) {\n  return {\n    login: state.header.login\n  };\n}, function (dispatch) {\n  return {\n    handleLogin: function handleLogin() {\n      dispatch(_store__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].login());\n    },\n    handleLogout: function handleLogout() {\n      dispatch(_store__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].logout());\n    }\n  };\n})(Object(_withStyle__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Header, _style_css__WEBPACK_IMPORTED_MODULE_4___default.a)));\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/action-types.js":
/*!*****************************************************!*\
  !*** ./src/components/Header/store/action-types.js ***!
  \*****************************************************/
/*! exports provided: CHANGE_LOGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_LOGIN\", function() { return CHANGE_LOGIN; });\nvar CHANGE_LOGIN = 'change_login';\n\n//# sourceURL=webpack:///./src/components/Header/store/action-types.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! exports provided: login, logout, getHeaderInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHeaderInfo\", function() { return getHeaderInfo; });\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ \"./src/components/Header/store/action-types.js\");\n\n\nvar changeLogin = function changeLogin(login) {\n  return {\n    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LOGIN\"],\n    login: login\n  };\n};\n\nvar login = function login() {\n  return function (dispatch, getState, axiosInstance) {\n    //返回promise对象\n    return new Promise(function (resolve, reject) {\n      resolve(true);\n    }).then(function (res) {\n      dispatch(changeLogin(res));\n    });\n  };\n};\nvar logout = function logout() {\n  return function (dispatch, getState, axiosInstance) {\n    //返回promise对象\n    return new Promise(function (resolve, reject) {\n      resolve(false);\n    }).then(function (res) {\n      dispatch(changeLogin(res));\n    });\n  };\n};\nvar getHeaderInfo = function getHeaderInfo() {\n  /*浏览器运行这段代码\r\n   /api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10等价于请求http://localhost:3000/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10\r\n  如果是服务器运行\r\n   /api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10等价于服务器根目录下/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10*/\n\n  /*let url=''\r\n  if(server){//如果是服务端渲染\r\n    url='https://api.douban.com/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10'\r\n  }else{\r\n    url='/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10'\r\n  }*/\n  return function (dispatch, getState, axiosInstance) {\n    //返回promise对象\n    var state = getState();\n    return new Promise(function (resolve, reject) {\n      resolve(state.header.login);\n    }).then(function (res) {\n      dispatch(changeLogin(res));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! exports provided: headerReducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"headerReducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/components/Header/store/actions.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__; });\n\n\n\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ \"./src/components/Header/store/action-types.js\");\n\nvar defaultState = {\n  login: false\n};\n\nvar headerReducer = function headerReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LOGIN\"]:\n      return {\n        login: action.login\n      };\n  }\n\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (headerReducer);\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/Header/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Header/style.css?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/containers/Home/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n\n    /*componentWillMount(){\r\n      const {staticContext}=this.props\r\n      staticContext&&(staticContext.css.push(styles._getCss()))\r\n    }*/\n    value: function render() {\n      var _this$props = this.props,\n          name = _this$props.name,\n          list = _this$props.list;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"\\u8FD9\\u662Ffeng\\u7684ssr\\u4ECB\\u7ECD\\u9875\\u9762\\uFF0C\\u5F88\\u4E30\\u5BCC\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"\\u8FD9\\u662Ffeng\\u7684ssr\\u4ECB\\u7ECD\\u9875\\u9762\\uFF0C\\u5F88\\u4E30\\u5BCC\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, name), list.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: item.id,\n          className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item\n        }, item.title);\n      })));\n    } //componentDidMount在服务器端是不执行的\n\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (!this.props.list.length) {\n        this.props.getHomeList();\n      }\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nHome.loadData = function (store) {\n  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n  //返回promise对象\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getHomeList\"])());\n};\n\nvar ExportHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    list: state.home.list,\n    name: state.home.name\n  };\n}, function (dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getHomeList\"])());\n    }\n  };\n})(Object(_withStyle__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Home, _style_css__WEBPACK_IMPORTED_MODULE_4___default.a));\n\nExportHome.loadData = function (store) {\n  //消除loadData潜在的问题\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getHomeList\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExportHome);\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/action-types.js":
/*!***************************************************!*\
  !*** ./src/containers/Home/store/action-types.js ***!
  \***************************************************/
/*! exports provided: CHANGE_HOME_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_HOME_LIST\", function() { return CHANGE_HOME_LIST; });\nvar CHANGE_HOME_LIST = 'change_home_list';\n\n//# sourceURL=webpack:///./src/containers/Home/store/action-types.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! exports provided: getHomeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHomeList\", function() { return getHomeList; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types */ \"./src/containers/Home/store/action-types.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server/request */ \"./src/server/request.js\");\n\n\n\n\n\nvar changeHomeList = function changeHomeList(list) {\n  return {\n    type: _action_types__WEBPACK_IMPORTED_MODULE_1__[\"CHANGE_HOME_LIST\"],\n    list: list\n  };\n};\n\nvar getHomeList = function getHomeList() {\n  /*浏览器运行这段代码\r\n   /api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10等价于请求http://localhost:3000/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10\r\n  如果是服务器运行\r\n   /api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10等价于服务器根目录下/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10*/\n\n  /*let url=''\r\n  if(server){//如果是服务端渲染\r\n    url='https://api.douban.com/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10'\r\n  }else{\r\n    url='/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10'\r\n  }*/\n  return function (dispatch, getState, axiosInstance) {\n    //返回promise对象\n    return axiosInstance.get('/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10').then(function (res) {\n      var list = res.data.subjects;\n      dispatch(changeHomeList(list));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! exports provided: homeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"homeReducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ \"./src/containers/Home/store/action-types.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  name: 'feng',\n  list: []\n};\n\nvar homeReducer = function homeReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_HOME_LIST\"]:\n      return _objectSpread({}, state, {\n        list: action.list\n      });\n  }\n\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (homeReducer);\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/containers/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Home/style.css?");

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar NotFound =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NotFound, _Component);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NotFound).apply(this, arguments));\n  }\n\n  _createClass(NotFound, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var staticContext = this.props.staticContext;\n      staticContext && (staticContext.NOT_FOUND = true);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"404,\\u627E\\u4E0D\\u5230\\u5185\\u5BB9\");\n    }\n  }]);\n\n  return NotFound;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/containers/NotFound/index.js?");

/***/ }),

/***/ "./src/containers/Translation/index.js":
/*!*********************************************!*\
  !*** ./src/containers/Translation/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actions */ \"./src/containers/Translation/store/actions.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar Translation =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Translation, _Component);\n\n  function Translation() {\n    _classCallCheck(this, Translation);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Translation).apply(this, arguments));\n  }\n\n  _createClass(Translation, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.getTranslationList();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          list = _this$props.list,\n          login = _this$props.login;\n\n      if (login) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"\\u8FD9\\u662Ffeng\\u7684ssr\\u7FFB\\u8BD1\\u9875\\u9762\\uFF0C\\u7FFB\\u8BD1\\u7684\\u5F88\\u597D\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n          name: \"description\",\n          content: \"\\u8FD9\\u662Ffeng\\u7684ssr\\u7FFB\\u8BD1\\u9875\\u9762\\uFF0C\\u7FFB\\u8BD1\\u7684\\u5F88\\u597D\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, list.map(function (item) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            key: item.id\n          }, item.title);\n        })));\n      } else {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Redirect\"], {\n          to: \"/\"\n        });\n      }\n    }\n  }]);\n\n  return Translation;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nTranslation.loadData = function (store) {\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__[\"getTranslationList\"])());\n};\n\nvar ExportTranslation = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    list: state.translation.list,\n    login: state.header.login\n  };\n}, function (dispatch) {\n  return {\n    getTranslationList: function getTranslationList() {\n      dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__[\"getTranslationList\"])());\n    }\n  };\n})(Translation);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExportTranslation);\n\n//# sourceURL=webpack:///./src/containers/Translation/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/action-types.js":
/*!**********************************************************!*\
  !*** ./src/containers/Translation/store/action-types.js ***!
  \**********************************************************/
/*! exports provided: CHANGE_TRANSLATION_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_TRANSLATION_LIST\", function() { return CHANGE_TRANSLATION_LIST; });\nvar CHANGE_TRANSLATION_LIST = 'change_translation_list';\n\n//# sourceURL=webpack:///./src/containers/Translation/store/action-types.js?");

/***/ }),

/***/ "./src/containers/Translation/store/actions.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/actions.js ***!
  \*****************************************************/
/*! exports provided: getTranslationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTranslationList\", function() { return getTranslationList; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types */ \"./src/containers/Translation/store/action-types.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server/request */ \"./src/server/request.js\");\n\n\n\n\n\nvar changeTranslationList = function changeTranslationList(list) {\n  return {\n    type: _action_types__WEBPACK_IMPORTED_MODULE_1__[\"CHANGE_TRANSLATION_LIST\"],\n    list: list\n  };\n};\n\nvar getTranslationList = function getTranslationList() {\n  return function (dispatch, getState, axiosInstance) {\n    //返回promise对象\n    return new Promise(function (resolve, reject) {\n      var list = [{\n        \"id\": 12,\n        \"title\": \"孙悟空\"\n      }, {\n        \"id\": 1,\n        \"title\": \"猪八戒\"\n      }, {\n        \"id\": 2,\n        \"title\": \"唐三藏\"\n      }, {\n        \"id\": 3,\n        \"title\": \"白骨精\"\n      }, {\n        \"id\": 4,\n        \"title\": \"太上老君\"\n      }];\n      resolve(list);\n    }).then(function (res) {\n      var list = res;\n      dispatch(changeTranslationList(list));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/store/actions.js?");

/***/ }),

/***/ "./src/containers/Translation/store/index.js":
/*!***************************************************!*\
  !*** ./src/containers/Translation/store/index.js ***!
  \***************************************************/
/*! exports provided: translationReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/containers/Translation/store/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"translationReducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/containers/Translation/store/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/reducer.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/reducer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ \"./src/containers/Translation/store/action-types.js\");\n\nvar defaultState = {\n  list: []\n};\n\nvar translationReducer = function translationReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_TRANSLATION_LIST\"]:\n      return {\n        list: action.list\n      };\n  }\n\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (translationReducer);\n\n//# sourceURL=webpack:///./src/containers/Translation/store/reducer.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n//客户端渲染：React代码在浏览器上执行，消耗的是用户浏览器的性能\n//服务器端渲染：React代码在服务器上执行，消耗的是服务器端的性能\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public')); //设置静态资源路径，\n\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()('https://api.douban.com', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return '/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10';\n  }\n}));\napp.get('*', function (req, res) {\n  var store = Object(_store__WEBPACK_IMPORTED_MODULE_3__[\"getStore\"])(req); //如果在这里，能够拿到异步数据，并填充到store中\n  //store里面到底填充什么，需要结合当前用户请求的地址和路由，做判断\n  //如果用户访问/路径，就拿Home组件的异步数据\n  //如果用户访问/login路径，就拿Login组件的异步数据\n\n  /*routes.some(route => { //遍历routes中的每一条路由\r\n    //如果当前请求的路径和route中的路由能匹配上，match就为true,要使用react-router-dom中的matchPath\r\n    const match = matchPath(req.path, route);\r\n    if (match){\r\n      matchedRoutes.push(route)\r\n    }\r\n  });*/\n\n  var matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"matchRoutes\"])(_Routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"], req.path);\n  var promises = [];\n  matchedRoutes.forEach(function (item) {\n    //这里是异步代码，有可能数据还没获取到，后面的代码就执行了\n    if (item.route.loadData) {\n      /**\r\n       * 一个页面要加载A,B,C,D四个组件，这四个组件都需要服务器端加载数据\r\n       * 假设A组件加载数据有误\r\n       * B,C,D组件有几种情况\r\n       * 1.B,C,D组件数据已经加载完成了\r\n       * 2.假设B,C,D接口比较慢，B,C,D组件数据没有加载完成\r\n       * 我们最终希望的结果是，不论慢或块，加载正确的正常显示，有误的不显示，\r\n       * 所以之前的Promise.all会有问题，所以需要在外面再包一层Promise\r\n       * */\n      var promise = new Promise(function (resolve, reject) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      promises.push(promise);\n    }\n  }); //当所有异步数据获取到后再去执行后面的代码\n\n  Promise.all(promises).then(function () {\n    var context = {\n      css: [] //多组件样式整合\n\n    };\n    var html = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(store, _Routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"], req, context);\n\n    if (context.action === 'REPLACE') {\n      //判断是否为重定向\n      res.redirect(301, context.url);\n    } else if (context.NOT_FOUND) {\n      //如果为true说明为404页面\n      res.status(404);\n      res.send(html);\n    } else {\n      res.send(html);\n    }\n  }).catch(function (err) {\n    console.log(err);\n  });\n});\nvar server = app.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar createInstance = function createInstance(req) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n    baseURL: 'https://api.douban.com',\n    //对于服务器端\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createInstance);\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n //服务端渲染就需要react-dom/server提供的renderToString方法\n\nvar render = function render(store, routes, req, context) {\n  //当所有异步数据获取到后再去执行后面的代码\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(routes)))));\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_5__[\"Helmet\"].renderStatic();\n  var cssStr = context.css.join('\\n');\n  return \"\\n    <html>\\n      <head>\\n         \".concat(helmet.title.toString(), \"\\n         \").concat(helmet.meta.toString(), \"\\n        <style>\").concat(cssStr, \"</style>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\").concat(content, \"</div>\\n        <script>\\n        window.context={\\n          state: \").concat(JSON.stringify(store.getState()), \"\\n        }\\n        </script>\\n        <script src=\\\"/index.js\\\"></script>\\n      </body>\\n    </html>\\n    \");\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_Home_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n/* harmony import */ var _components_Header_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/store */ \"./src/components/Header/store/index.js\");\n/* harmony import */ var _containers_Translation_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Translation/store */ \"./src/containers/Translation/store/index.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\n\n\n\n\n\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _containers_Home_store__WEBPACK_IMPORTED_MODULE_2__[\"homeReducer\"],\n  header: _components_Header_store__WEBPACK_IMPORTED_MODULE_3__[\"headerReducer\"],\n  translation: _containers_Translation_store__WEBPACK_IMPORTED_MODULE_4__[\"translationReducer\"]\n});\nvar getStore = function getStore(req) {\n  //改变服务器端store的内容，那么就一定要使用serverAxios\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(Object(_server_request__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req))));\n};\n/*\r\n* 使用thunk.withExtraArgument直接将对应的axiosInstance带入action中\r\n* */\n\nvar getClientStore = function getClientStore() {\n  //保证服务端的初始数据和浏览器端的初始数据一致，作为reducer的初始默认数据\n  var defaultState = window.context.state; //数据的脱水\n  //改变服务器端store的内容，那么就一定要使用clientAxios\n\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"])));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/withStyle.js":
/*!**************************!*\
  !*** ./src/withStyle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n//这个函数返回一个组件,该组件具备一些公共的特性\n//这个函数是生成高阶组件的函数\n\n/*\r\n* DecoratedComponent被修饰组件\r\n* styles样式\r\n* */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (DecoratedComponent, styles) {\n  //返回的叫做高阶组件\n  return (\n    /*#__PURE__*/\n    function (_Component) {\n      _inherits(NewComponent, _Component);\n\n      function NewComponent() {\n        _classCallCheck(this, NewComponent);\n\n        return _possibleConstructorReturn(this, _getPrototypeOf(NewComponent).apply(this, arguments));\n      }\n\n      _createClass(NewComponent, [{\n        key: \"componentWillMount\",\n        value: function componentWillMount() {\n          var staticContext = this.props.staticContext;\n          staticContext && staticContext.css.push(styles._getCss());\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecoratedComponent, this.props);\n        }\n      }]);\n\n      return NewComponent;\n    }(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"])\n  );\n});\n\n//# sourceURL=webpack:///./src/withStyle.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });