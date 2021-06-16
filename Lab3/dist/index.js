/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menuContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-weight: bold;\n  text-align: center;\n  background-color: grey;\n  height: 150px;\n  width: 150px;\n}\n.menuContainer ul {\n  padding: 0px;\n}\n.menuContainer ul li {\n  list-style: none;\n  cursor: pointer;\n  margin-top: 2px;\n  padding: 10px;\n  background-color: #f0c403;\n  transition: 0.2s;\n  border-radius: 2px;\n}\n.menuContainer ul li:hover {\n  background-color: aliceblue;\n}\n\n.board {\n  position: relative;\n  width: 350px;\n  height: 350px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.board .playerinfo {\n  position: absolute;\n  width: 342px;\n  height: 34px;\n  top: -20%;\n  padding-top: 18px;\n  padding-bottom: 4px;\n  border: 3px solid black;\n  font-size: 16px;\n  background-color: #72a6eb;\n}\n\n.field {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-weight: bold;\n  text-align: center;\n  width: 100px;\n  height: 100px;\n  margin: 5px;\n  background-color: white;\n  font-size: 72px;\n  cursor: pointer;\n  transition: 0.2s;\n  border: 3px solid black;\n}\n.field:hover {\n  background-color: lightgrey;\n}\n\n.winner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-weight: bold;\n  text-align: center;\n  display: none;\n  position: absolute;\n  width: 342px;\n  height: 354px;\n  background: #72a6eb;\n  font-size: 24px;\n  border: 3px solid black;\n}\n\n.buttonBacks {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-weight: bold;\n  text-align: center;\n  position: absolute;\n  top: 400px;\n  width: 348px;\n  height: 38px;\n  background: #f0c403;\n  font-size: 24px;\n  border: 3px solid black;\n}\n\n.gameContainer {\n  background: grey;\n  flex-grow: 1;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-weight: bold;\n  text-align: center;\n}\n\nbody {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  min-height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/styles/_menuContainer.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_veriables.scss","webpack://./src/styles/styles.scss","webpack://./src/styles/_tictactoe.scss","webpack://./src/styles/_gameContainer.scss"],"names":[],"mappings":"AAEA;ECDI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;EAK/B,iBAAA;EACA,kBAAA;EDFA,sBEHM;EFIN,aAAA;EACA,YAAA;AGIJ;AHHI;EACI,YAAA;AGKR;AHJQ;EACI,gBAAA;EACA,eAAA;EACA,eAAA;EACA,aAAA;EACA,yBEdG;EFeH,gBAAA;EACA,kBAAA;AGMZ;AHLY;EACI,2BAAA;AGOhB;;ACtBA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;ADyBJ;ACxBI;EACI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,yBFhBK;AC0Cb;;ACtBA;EHrBI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;EAK/B,iBAAA;EACA,kBAAA;EGkBA,YAAA;EACA,aAAA;EACA,WAAA;EACA,uBFvBU;EEwBV,eAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;AD8BJ;AC7BI;EACI,2BF5BY;AC2DpB;;AC3BA;EHpCI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;EAK/B,iBAAA;EACA,kBAAA;EGiCA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,mBFzCS;EE0CT,eAAA;EACA,uBAAA;ADmCJ;;ACjCA;EH9CI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;EAK/B,iBAAA;EACA,kBAAA;EG2CA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,mBFrDW;EEsDX,eAAA;EACA,uBAAA;ADyCJ;;AE3FA;EACI,gBHLM;EGMN,YAAA;EACA,iBAAA;EJPA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;EAK/B,iBAAA;EACA,kBAAA;AEsGJ;;AAxGA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,yCAAA;AA2GF","sourcesContent":["@import '_mixins.scss';\r\n\r\n.menuContainer{\r\n    @include flex-center();\r\n    background-color: $bg-main;\r\n    height:150px;\r\n    width:150px;\r\n    ul{\r\n        padding:0px;\r\n        li{\r\n            list-style: none;\r\n            cursor: pointer;\r\n            margin-top:2px;\r\n            padding:10px;\r\n            background-color: $button-color;\r\n            transition: .2s;\r\n            border-radius:2px;\r\n            &:hover{\r\n                background-color: aliceblue;\r\n            }\r\n        }  \r\n    }\r\n\r\n}","@mixin flex-center($flex-direction:column){\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: $flex-direction;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}","$button-color: rgb(240, 196, 3);\r\n$bg-main: grey;\r\n$info-color: rgb(114, 166, 235);\r\n\r\n$field-color: white;\r\n$field-hover-color: lightgrey;","@import '_veriables.scss';\r\n@import '_menuContainer.scss';\r\n@import '_gameContainer.scss';\r\n\r\nbody {\r\n  margin:0px;\r\n  padding:0px;\r\n  display:flex;\r\n  min-height: 100vh;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}","@import '_mixins.scss';\r\n@import '_veriables.scss';\r\n\r\n.board{\r\n    position: relative;\r\n    width:350px;\r\n    height:350px;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    .playerinfo{\r\n        position: absolute;\r\n        width:342px;\r\n        height:34px;\r\n        top: -20%;\r\n        padding-top: 18px;\r\n        padding-bottom:4px;\r\n        border: 3px solid black;\r\n        font-size:16px;\r\n        background-color: $info-color;\r\n    }\r\n}\r\n\r\n.field{\r\n    @include flex-center();\r\n    width:100px;\r\n    height:100px;\r\n    margin:5px;\r\n    background-color: $field-color;\r\n    font-size:72px;\r\n    cursor: pointer;\r\n    transition:.2s;\r\n    border: 3px solid black;\r\n    &:hover{\r\n        background-color: $field-hover-color;\r\n    }\r\n}\r\n\r\n.winner{\r\n    @include flex-center();\r\n    display:none;\r\n    position: absolute;\r\n    width:342px;\r\n    height:354px;\r\n    background: $info-color;\r\n    font-size:24px;\r\n    border: 3px solid black;\r\n}\r\n.buttonBacks{\r\n    @include flex-center();\r\n    position: absolute;\r\n    top: 400px;\r\n    width:348px;\r\n    height:38px;\r\n    background: $button-color;\r\n    font-size:24px;\r\n    border: 3px solid black;\r\n    \r\n}","@import '_mixins.scss';\r\n@import '_veriables.scss';\r\n\r\n@import '_tictactoe.scss';\r\n\r\n.gameContainer{\r\n    background: $bg-main;\r\n    flex-grow:1;\r\n    min-height: 100vh;\r\n    @include flex-center();\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/battleships/battleships.ts":
/*!****************************************!*\
  !*** ./src/battleships/battleships.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BattleShips = void 0;
var decorators_1 = __webpack_require__(/*! ../decorators */ "./src/decorators.ts");
var BattleShips = /** @class */ (function () {
    function BattleShips() {
        this.name = "Statki";
    }
    BattleShips.prototype.getGameElement = function () {
        if (!this.isDisabled) {
            var div = document.createElement('div');
            div.appendChild(document.createTextNode("Hello BattleShips"));
            return div;
        }
    };
    __decorate([
        decorators_1.watch
    ], BattleShips.prototype, "getGameElement", null);
    BattleShips = __decorate([
        decorators_1.disabled
    ], BattleShips);
    return BattleShips;
}());
exports.BattleShips = BattleShips;


/***/ }),

/***/ "./src/decorators.ts":
/*!***************************!*\
  !*** ./src/decorators.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.watch = exports.enabled = exports.disabled = void 0;
function disabled(constructorFn) {
    constructorFn.prototype.isDisabled = true;
}
exports.disabled = disabled;
function enabled(constructorFn) {
    constructorFn.prototype.isDisabled = false;
}
exports.enabled = enabled;
function watch(target, propKey, descriptor) {
    var originalFn = target[propKey];
    descriptor.value = function (param) {
        console.log(target.constructor.name + " is running!");
        return originalFn.call(this, param);
    };
}
exports.watch = watch;


/***/ }),

/***/ "./src/game.enum.ts":
/*!**************************!*\
  !*** ./src/game.enum.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Games = void 0;
var Games;
(function (Games) {
    Games[Games["TicTacToe"] = 1] = "TicTacToe";
    Games[Games["BattleShips"] = 2] = "BattleShips";
})(Games = exports.Games || (exports.Games = {}));


/***/ }),

/***/ "./src/gameFactory.class.ts":
/*!**********************************!*\
  !*** ./src/gameFactory.class.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gameFactory = void 0;
var game_enum_1 = __webpack_require__(/*! ./game.enum */ "./src/game.enum.ts");
var tictactoe_1 = __webpack_require__(/*! ./tictactoe/tictactoe */ "./src/tictactoe/tictactoe.ts");
var battleships_1 = __webpack_require__(/*! ./battleships/battleships */ "./src/battleships/battleships.ts");
var gameFactory = /** @class */ (function () {
    function gameFactory() {
    }
    gameFactory.prototype.createGame = function (game) {
        switch (game) {
            case game_enum_1.Games.TicTacToe:
                return new tictactoe_1.TicTacToe();
            case game_enum_1.Games.BattleShips:
                return new battleships_1.BattleShips();
            default:
                console.warn('error');
                break;
        }
    };
    return gameFactory;
}());
exports.gameFactory = gameFactory;


/***/ }),

/***/ "./src/tictactoe/srctictactoe/Classes/board.ts":
/*!*****************************************************!*\
  !*** ./src/tictactoe/srctictactoe/Classes/board.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.board = void 0;
var cell_1 = __webpack_require__(/*! ./cell */ "./src/tictactoe/srctictactoe/Classes/cell.ts");
var board = /** @class */ (function () {
    // _lastMove: any = [];
    function board(size, board) {
        var _this = this;
        this._currentMove = 'O';
        this._gameStatus = true; // 0 = finished
        this._allMoves = 0;
        this._base = size;
        var allCells = Math.pow(size, 2);
        this._board = board;
        this._cellArr = new Array(allCells);
        for (var i = 0; i < allCells; i++) {
            var element = document.createElement('div');
            element.classList.add('field');
            element.id = "" + i;
            var newCell = new cell_1.cell(element);
            newCell._htmlElement.addEventListener('mouseup', function (e) { return _this.move(e.target); });
            this._cellArr[i] = newCell;
        }
    }
    board.prototype.init = function () {
        for (var _i = 0, _a = this._cellArr; _i < _a.length; _i++) {
            var element = _a[_i];
            this._board.appendChild(element._htmlElement);
        }
        var playerInfo = document.createElement('div');
        playerInfo.classList.add('playerinfo');
        var player = document.createElement('span');
        player.innerHTML = "Player: " + this._currentMove + " turn";
        player.id = 'currentPlayer';
        playerInfo.appendChild(player);
        this._board.appendChild(playerInfo);
    };
    board.prototype.move = function (ev) {
        var currentCell = this._cellArr.filter(function (el) { return el._htmlElement == ev; });
        if (currentCell[0]._value == '' && this._gameStatus) {
            var last = [];
            if (sessionStorage.getItem('lastMove'))
                last = JSON.parse(sessionStorage.getItem('lastMove'));
            last.push(this._cellArr);
            sessionStorage.setItem('lastMove', JSON.stringify(last));
            currentCell[0].changeValue(this._currentMove);
            this._allMoves++;
            this.checkWin(parseInt(currentCell[0]._htmlElement.id));
            this.changePlayer();
        }
    };
    board.prototype.changePlayer = function () {
        if (this._currentMove === 'O')
            this._currentMove = 'X';
        else
            this._currentMove = 'O';
        document.querySelector('#currentPlayer').innerHTML = "Player: " + this._currentMove + " turn";
    };
    board.prototype.checkWin = function (currId) {
        for (var i = 0; i < this._base; i++) {
            if (this._cellArr[i]._value != '' || this._cellArr[i + this._base]._value != '' || this._cellArr[i + 2 * this._base]._value != '')
                if (this._cellArr[i]._value == this._cellArr[i + this._base]._value && this._cellArr[i]._value == this._cellArr[i + 2 * this._base]._value)
                    this.callWinner();
        }
        for (var i = 0; i < this._base * this._base; i += this._base) {
            if (this._cellArr[i]._value != '' || this._cellArr[i + 1]._value != '' || this._cellArr[i + 2]._value != '')
                if (this._cellArr[i]._value == this._cellArr[i + 1]._value && this._cellArr[i]._value == this._cellArr[i + 2]._value)
                    this.callWinner();
        }
        if (this._cellArr[0]._value != '' && this._cellArr[4]._value != '' && this._cellArr[8]._value != '')
            if (this._cellArr[0]._value == this._cellArr[4]._value && this._cellArr[0]._value == this._cellArr[8]._value)
                this.callWinner();
        if (this._cellArr[2]._value != '' && this._cellArr[4]._value != '' && this._cellArr[6]._value != '')
            if (this._cellArr[2]._value == this._cellArr[4]._value && this._cellArr[2]._value == this._cellArr[6]._value)
                this.callWinner();
        //draw
        if (this._allMoves == this._cellArr.length)
            this.callDraw();
    };
    board.prototype.callWinner = function () {
        this._gameStatus = false;
        var info = document.querySelector('.winner');
        info.style.display = 'flex';
        info.innerHTML = "Player: " + this._currentMove + " has won";
        sessionStorage.removeItem('lastMove');
    };
    board.prototype.callDraw = function () {
        this._gameStatus = false;
        var info = document.querySelector('.winner');
        info.style.display = 'flex';
        info.innerHTML = "DRAW";
        sessionStorage.removeItem('lastMove');
    };
    board.prototype.undoMove = function () {
        var _this = this;
        var sessionCells = JSON.parse(sessionStorage.getItem('lastMove'));
        var lastMovePop = sessionCells.pop();
        var lastMove = lastMovePop.map(function (el, id) { return (new cell_1.cell(_this._cellArr[id]._htmlElement, el._value)); });
        sessionStorage.setItem('lastMove', JSON.stringify(sessionCells));
        this._cellArr = lastMove;
        this._cellArr.forEach(function (el) {
            el.changeValue(el._value);
        });
        this.changePlayer();
        this._allMoves--;
    };
    return board;
}());
exports.board = board;


/***/ }),

/***/ "./src/tictactoe/srctictactoe/Classes/cell.ts":
/*!****************************************************!*\
  !*** ./src/tictactoe/srctictactoe/Classes/cell.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cell = void 0;
var cell = /** @class */ (function () {
    function cell(element, value) {
        this._value = '';
        if (value)
            this._value = value;
        this._htmlElement = element;
    }
    cell.prototype.changeValue = function (newValue) {
        if (this._value === '') {
            this._value = newValue;
            this._htmlElement.innerHTML = this._value;
        }
    };
    cell.prototype.refresh = function () {
        this._htmlElement.innerHTML = this._value;
    };
    return cell;
}());
exports.cell = cell;


/***/ }),

/***/ "./src/tictactoe/tictactoe.ts":
/*!************************************!*\
  !*** ./src/tictactoe/tictactoe.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicTacToe = void 0;
// import { board } from '../../../lab2b-ticktoe/src/Classes/board';
var board_1 = __webpack_require__(/*! ./srctictactoe/Classes/board */ "./src/tictactoe/srctictactoe/Classes/board.ts");
var decorators_1 = __webpack_require__(/*! ../decorators */ "./src/decorators.ts");
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.name = "Kółko i krzyżyk";
    }
    TicTacToe.prototype.getGameElement = function () {
        if (!this.isDisabled) {
            var div = document.createElement('div');
            var divWinner = document.createElement('div');
            divWinner.classList.add('winner');
            div.appendChild(divWinner);
            div.classList.add('board');
            var game_1 = new board_1.board(3, div);
            game_1.init();
            var buttonBack = document.createElement('button');
            buttonBack.classList.add('buttonBacks');
            buttonBack.innerHTML = 'COFNIJ RUCH';
            buttonBack.addEventListener('click', function () { game_1.undoMove(); });
            div.appendChild(buttonBack);
            return div;
        }
    };
    __decorate([
        decorators_1.watch
    ], TicTacToe.prototype, "getGameElement", null);
    TicTacToe = __decorate([
        decorators_1.enabled
    ], TicTacToe);
    return TicTacToe;
}());
exports.TicTacToe = TicTacToe;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var game_enum_1 = __webpack_require__(/*! ./game.enum */ "./src/game.enum.ts");
var gameFactory_class_1 = __webpack_require__(/*! ./gameFactory.class */ "./src/gameFactory.class.ts");
__webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
var App = /** @class */ (function () {
    function App() {
        this._gameFactory = new gameFactory_class_1.gameFactory();
        this.initMenu();
    }
    App.prototype.changeGame = function (name) {
        var game = this._gameFactory.createGame(game_enum_1.Games[name]);
        try {
            this.gameContainer.innerHTML = '';
            this.gameContainer.appendChild(game.getGameElement());
        }
        catch (_a) {
            console.log('Error');
        }
    };
    App.prototype.initMenu = function () {
        var _this = this;
        var menuContainer = (document.createElement('div'));
        menuContainer.classList.add('menuContainer');
        this.gameContainer = (document.createElement('div'));
        this.gameContainer.classList.add('gameContainer');
        var list = document.createElement('ul');
        for (var element in game_enum_1.Games) {
            if (isNaN(Number(element))) {
                var gameName = (document.createElement('li'));
                {
                    gameName.innerText = "" + element;
                    gameName.addEventListener('click', function (e) {
                        var newGameName = e.target.innerText;
                        _this.changeGame(newGameName);
                    });
                    list.appendChild(gameName);
                }
            }
        }
        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(this.gameContainer);
    };
    return App;
}());
new App();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UZW1hdDMvLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL1RlbWF0My8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVGVtYXQzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vVGVtYXQzLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzcz8yMDNiIiwid2VicGFjazovL1RlbWF0My8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9UZW1hdDMvLi9zcmMvYmF0dGxlc2hpcHMvYmF0dGxlc2hpcHMudHMiLCJ3ZWJwYWNrOi8vVGVtYXQzLy4vc3JjL2RlY29yYXRvcnMudHMiLCJ3ZWJwYWNrOi8vVGVtYXQzLy4vc3JjL2dhbWUuZW51bS50cyIsIndlYnBhY2s6Ly9UZW1hdDMvLi9zcmMvZ2FtZUZhY3RvcnkuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vVGVtYXQzLy4vc3JjL3RpY3RhY3RvZS9zcmN0aWN0YWN0b2UvQ2xhc3Nlcy9ib2FyZC50cyIsIndlYnBhY2s6Ly9UZW1hdDMvLi9zcmMvdGljdGFjdG9lL3NyY3RpY3RhY3RvZS9DbGFzc2VzL2NlbGwudHMiLCJ3ZWJwYWNrOi8vVGVtYXQzLy4vc3JjL3RpY3RhY3RvZS90aWN0YWN0b2UudHMiLCJ3ZWJwYWNrOi8vVGVtYXQzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RlbWF0My93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9UZW1hdDMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RlbWF0My93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RlbWF0My93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RlbWF0My8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsMERBQTBELGtCQUFrQix3QkFBd0IsNEJBQTRCLDJCQUEyQixzQkFBc0IsdUJBQXVCLDJCQUEyQixrQkFBa0IsaUJBQWlCLEdBQUcscUJBQXFCLGlCQUFpQixHQUFHLHdCQUF3QixxQkFBcUIsb0JBQW9CLG9CQUFvQixrQkFBa0IsOEJBQThCLHFCQUFxQix1QkFBdUIsR0FBRyw4QkFBOEIsZ0NBQWdDLEdBQUcsWUFBWSx1QkFBdUIsaUJBQWlCLGtCQUFrQixrQkFBa0Isb0JBQW9CLEdBQUcsc0JBQXNCLHVCQUF1QixpQkFBaUIsaUJBQWlCLGNBQWMsc0JBQXNCLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLDhCQUE4QixHQUFHLFlBQVksa0JBQWtCLHdCQUF3Qiw0QkFBNEIsMkJBQTJCLHNCQUFzQix1QkFBdUIsaUJBQWlCLGtCQUFrQixnQkFBZ0IsNEJBQTRCLG9CQUFvQixvQkFBb0IscUJBQXFCLDRCQUE0QixHQUFHLGdCQUFnQixnQ0FBZ0MsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0IsNEJBQTRCLDJCQUEyQixzQkFBc0IsdUJBQXVCLGtCQUFrQix1QkFBdUIsaUJBQWlCLGtCQUFrQix3QkFBd0Isb0JBQW9CLDRCQUE0QixHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLDRCQUE0QiwyQkFBMkIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsZUFBZSxpQkFBaUIsaUJBQWlCLHdCQUF3QixvQkFBb0IsNEJBQTRCLEdBQUcsb0JBQW9CLHFCQUFxQixpQkFBaUIsc0JBQXNCLGtCQUFrQix3QkFBd0IsNEJBQTRCLDJCQUEyQixzQkFBc0Is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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1lbnVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG4ubWVudUNvbnRhaW5lciB1bCB7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcbi5tZW51Q29udGFpbmVyIHVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYzQwMztcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi5tZW51Q29udGFpbmVyIHVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uYm9hcmQgLnBsYXllcmluZm8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDM0MnB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgdG9wOiAtMjAlO1xcbiAgcGFkZGluZy10b3A6IDE4cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJhNmViO1xcbn1cXG5cXG4uZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA3MnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG4uZmllbGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDM0MnB4O1xcbiAgaGVpZ2h0OiAzNTRweDtcXG4gIGJhY2tncm91bmQ6ICM3MmE2ZWI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJ1dHRvbkJhY2tzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwMHB4O1xcbiAgd2lkdGg6IDM0OHB4O1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgYmFja2dyb3VuZDogI2YwYzQwMztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiBncmV5O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX21lbnVDb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZlcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL190aWN0YWN0b2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fZ2FtZUNvbnRhaW5lci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VDREksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFKK0I7RUFLL0IsaUJBQUE7RUFDQSxrQkFBQTtFREZBLHNCRUhNO0VGSU4sYUFBQTtFQUNBLFlBQUE7QUdJSjtBSEhJO0VBQ0ksWUFBQTtBR0tSO0FISlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCRWRHO0VGZUgsZ0JBQUE7RUFDQSxrQkFBQTtBR01aO0FITFk7RUFDSSwyQkFBQTtBR09oQjs7QUN0QkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUR5Qko7QUN4Qkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkZoQks7QUMwQ2I7O0FDdEJBO0VIckJJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBSitCO0VBSy9CLGlCQUFBO0VBQ0Esa0JBQUE7RUdrQkEsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJGdkJVO0VFd0JWLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBRDhCSjtBQzdCSTtFQUNJLDJCRjVCWTtBQzJEcEI7O0FDM0JBO0VIcENJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBSitCO0VBSy9CLGlCQUFBO0VBQ0Esa0JBQUE7RUdpQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkZ6Q1M7RUUwQ1QsZUFBQTtFQUNBLHVCQUFBO0FEbUNKOztBQ2pDQTtFSDlDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUorQjtFQUsvQixpQkFBQTtFQUNBLGtCQUFBO0VHMkNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJGckRXO0VFc0RYLGVBQUE7RUFDQSx1QkFBQTtBRHlDSjs7QUUzRkE7RUFDSSxnQkhMTTtFR01OLFlBQUE7RUFDQSxpQkFBQTtFSlBBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBSitCO0VBSy9CLGlCQUFBO0VBQ0Esa0JBQUE7QUVzR0o7O0FBeEdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQTJHRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdfbWl4aW5zLnNjc3MnO1xcclxcblxcclxcbi5tZW51Q29udGFpbmVye1xcclxcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctbWFpbjtcXHJcXG4gICAgaGVpZ2h0OjE1MHB4O1xcclxcbiAgICB3aWR0aDoxNTBweDtcXHJcXG4gICAgdWx7XFxyXFxuICAgICAgICBwYWRkaW5nOjBweDtcXHJcXG4gICAgICAgIGxpe1xcclxcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MnB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWNvbG9yO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjJweDtcXHJcXG4gICAgICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XCIsXCJAbWl4aW4gZmxleC1jZW50ZXIoJGZsZXgtZGlyZWN0aW9uOmNvbHVtbil7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiLFwiJGJ1dHRvbi1jb2xvcjogcmdiKDI0MCwgMTk2LCAzKTtcXHJcXG4kYmctbWFpbjogZ3JleTtcXHJcXG4kaW5mby1jb2xvcjogcmdiKDExNCwgMTY2LCAyMzUpO1xcclxcblxcclxcbiRmaWVsZC1jb2xvcjogd2hpdGU7XFxyXFxuJGZpZWxkLWhvdmVyLWNvbG9yOiBsaWdodGdyZXk7XCIsXCJAaW1wb3J0ICdfdmVyaWFibGVzLnNjc3MnO1xcclxcbkBpbXBvcnQgJ19tZW51Q29udGFpbmVyLnNjc3MnO1xcclxcbkBpbXBvcnQgJ19nYW1lQ29udGFpbmVyLnNjc3MnO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOjBweDtcXHJcXG4gIHBhZGRpbmc6MHB4O1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XCIsXCJAaW1wb3J0ICdfbWl4aW5zLnNjc3MnO1xcclxcbkBpbXBvcnQgJ192ZXJpYWJsZXMuc2Nzcyc7XFxyXFxuXFxyXFxuLmJvYXJke1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOjM1MHB4O1xcclxcbiAgICBoZWlnaHQ6MzUwcHg7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC13cmFwOndyYXA7XFxyXFxuICAgIC5wbGF5ZXJpbmZve1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6MzQycHg7XFxyXFxuICAgICAgICBoZWlnaHQ6MzRweDtcXHJcXG4gICAgICAgIHRvcDogLTIwJTtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxOHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206NHB4O1xcclxcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICBmb250LXNpemU6MTZweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbmZvLWNvbG9yO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5maWVsZHtcXHJcXG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcXHJcXG4gICAgd2lkdGg6MTAwcHg7XFxyXFxuICAgIGhlaWdodDoxMDBweDtcXHJcXG4gICAgbWFyZ2luOjVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZpZWxkLWNvbG9yO1xcclxcbiAgICBmb250LXNpemU6NzJweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOi4ycztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmllbGQtaG92ZXItY29sb3I7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lcntcXHJcXG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOjM0MnB4O1xcclxcbiAgICBoZWlnaHQ6MzU0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRpbmZvLWNvbG9yO1xcclxcbiAgICBmb250LXNpemU6MjRweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5idXR0b25CYWNrc3tcXHJcXG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDQwMHB4O1xcclxcbiAgICB3aWR0aDozNDhweDtcXHJcXG4gICAgaGVpZ2h0OjM4cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRidXR0b24tY29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZToyNHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG4gICAgXFxyXFxufVwiLFwiQGltcG9ydCAnX21peGlucy5zY3NzJztcXHJcXG5AaW1wb3J0ICdfdmVyaWFibGVzLnNjc3MnO1xcclxcblxcclxcbkBpbXBvcnQgJ190aWN0YWN0b2Uuc2Nzcyc7XFxyXFxuXFxyXFxuLmdhbWVDb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRiZy1tYWluO1xcclxcbiAgICBmbGV4LWdyb3c6MTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkJhdHRsZVNoaXBzID0gdm9pZCAwO1xyXG52YXIgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIi4uL2RlY29yYXRvcnNcIik7XHJcbnZhciBCYXR0bGVTaGlwcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJhdHRsZVNoaXBzKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiU3RhdGtpXCI7XHJcbiAgICB9XHJcbiAgICBCYXR0bGVTaGlwcy5wcm90b3R5cGUuZ2V0R2FtZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIZWxsbyBCYXR0bGVTaGlwc1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXY7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGRlY29yYXRvcnNfMS53YXRjaFxyXG4gICAgXSwgQmF0dGxlU2hpcHMucHJvdG90eXBlLCBcImdldEdhbWVFbGVtZW50XCIsIG51bGwpO1xyXG4gICAgQmF0dGxlU2hpcHMgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBkZWNvcmF0b3JzXzEuZGlzYWJsZWRcclxuICAgIF0sIEJhdHRsZVNoaXBzKTtcclxuICAgIHJldHVybiBCYXR0bGVTaGlwcztcclxufSgpKTtcclxuZXhwb3J0cy5CYXR0bGVTaGlwcyA9IEJhdHRsZVNoaXBzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLndhdGNoID0gZXhwb3J0cy5lbmFibGVkID0gZXhwb3J0cy5kaXNhYmxlZCA9IHZvaWQgMDtcclxuZnVuY3Rpb24gZGlzYWJsZWQoY29uc3RydWN0b3JGbikge1xyXG4gICAgY29uc3RydWN0b3JGbi5wcm90b3R5cGUuaXNEaXNhYmxlZCA9IHRydWU7XHJcbn1cclxuZXhwb3J0cy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG5mdW5jdGlvbiBlbmFibGVkKGNvbnN0cnVjdG9yRm4pIHtcclxuICAgIGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxufVxyXG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xyXG5mdW5jdGlvbiB3YXRjaCh0YXJnZXQsIHByb3BLZXksIGRlc2NyaXB0b3IpIHtcclxuICAgIHZhciBvcmlnaW5hbEZuID0gdGFyZ2V0W3Byb3BLZXldO1xyXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uIChwYXJhbSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgaXMgcnVubmluZyFcIik7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsRm4uY2FsbCh0aGlzLCBwYXJhbSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMud2F0Y2ggPSB3YXRjaDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5HYW1lcyA9IHZvaWQgMDtcclxudmFyIEdhbWVzO1xyXG4oZnVuY3Rpb24gKEdhbWVzKSB7XHJcbiAgICBHYW1lc1tHYW1lc1tcIlRpY1RhY1RvZVwiXSA9IDFdID0gXCJUaWNUYWNUb2VcIjtcclxuICAgIEdhbWVzW0dhbWVzW1wiQmF0dGxlU2hpcHNcIl0gPSAyXSA9IFwiQmF0dGxlU2hpcHNcIjtcclxufSkoR2FtZXMgPSBleHBvcnRzLkdhbWVzIHx8IChleHBvcnRzLkdhbWVzID0ge30pKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nYW1lRmFjdG9yeSA9IHZvaWQgMDtcclxudmFyIGdhbWVfZW51bV8xID0gcmVxdWlyZShcIi4vZ2FtZS5lbnVtXCIpO1xyXG52YXIgdGljdGFjdG9lXzEgPSByZXF1aXJlKFwiLi90aWN0YWN0b2UvdGljdGFjdG9lXCIpO1xyXG52YXIgYmF0dGxlc2hpcHNfMSA9IHJlcXVpcmUoXCIuL2JhdHRsZXNoaXBzL2JhdHRsZXNoaXBzXCIpO1xyXG52YXIgZ2FtZUZhY3RvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBnYW1lRmFjdG9yeSgpIHtcclxuICAgIH1cclxuICAgIGdhbWVGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVHYW1lID0gZnVuY3Rpb24gKGdhbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKGdhbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBnYW1lX2VudW1fMS5HYW1lcy5UaWNUYWNUb2U6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRpY3RhY3RvZV8xLlRpY1RhY1RvZSgpO1xyXG4gICAgICAgICAgICBjYXNlIGdhbWVfZW51bV8xLkdhbWVzLkJhdHRsZVNoaXBzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBiYXR0bGVzaGlwc18xLkJhdHRsZVNoaXBzKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGdhbWVGYWN0b3J5O1xyXG59KCkpO1xyXG5leHBvcnRzLmdhbWVGYWN0b3J5ID0gZ2FtZUZhY3Rvcnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuYm9hcmQgPSB2b2lkIDA7XHJcbnZhciBjZWxsXzEgPSByZXF1aXJlKFwiLi9jZWxsXCIpO1xyXG52YXIgYm9hcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBfbGFzdE1vdmU6IGFueSA9IFtdO1xyXG4gICAgZnVuY3Rpb24gYm9hcmQoc2l6ZSwgYm9hcmQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNb3ZlID0gJ08nO1xyXG4gICAgICAgIHRoaXMuX2dhbWVTdGF0dXMgPSB0cnVlOyAvLyAwID0gZmluaXNoZWRcclxuICAgICAgICB0aGlzLl9hbGxNb3ZlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5fYmFzZSA9IHNpemU7XHJcbiAgICAgICAgdmFyIGFsbENlbGxzID0gTWF0aC5wb3coc2l6ZSwgMik7XHJcbiAgICAgICAgdGhpcy5fYm9hcmQgPSBib2FyZDtcclxuICAgICAgICB0aGlzLl9jZWxsQXJyID0gbmV3IEFycmF5KGFsbENlbGxzKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbENlbGxzOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlkID0gXCJcIiArIGk7XHJcbiAgICAgICAgICAgIHZhciBuZXdDZWxsID0gbmV3IGNlbGxfMS5jZWxsKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBuZXdDZWxsLl9odG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLm1vdmUoZS50YXJnZXQpOyB9KTtcclxuICAgICAgICAgICAgdGhpcy5fY2VsbEFycltpXSA9IG5ld0NlbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYm9hcmQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX2NlbGxBcnI7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5hcHBlbmRDaGlsZChlbGVtZW50Ll9odG1sRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwbGF5ZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGxheWVySW5mby5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJpbmZvJyk7XHJcbiAgICAgICAgdmFyIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBwbGF5ZXIuaW5uZXJIVE1MID0gXCJQbGF5ZXI6IFwiICsgdGhpcy5fY3VycmVudE1vdmUgKyBcIiB0dXJuXCI7XHJcbiAgICAgICAgcGxheWVyLmlkID0gJ2N1cnJlbnRQbGF5ZXInO1xyXG4gICAgICAgIHBsYXllckluZm8uYXBwZW5kQ2hpbGQocGxheWVyKTtcclxuICAgICAgICB0aGlzLl9ib2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJJbmZvKTtcclxuICAgIH07XHJcbiAgICBib2FyZC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIHZhciBjdXJyZW50Q2VsbCA9IHRoaXMuX2NlbGxBcnIuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuX2h0bWxFbGVtZW50ID09IGV2OyB9KTtcclxuICAgICAgICBpZiAoY3VycmVudENlbGxbMF0uX3ZhbHVlID09ICcnICYmIHRoaXMuX2dhbWVTdGF0dXMpIHtcclxuICAgICAgICAgICAgdmFyIGxhc3QgPSBbXTtcclxuICAgICAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xhc3RNb3ZlJykpXHJcbiAgICAgICAgICAgICAgICBsYXN0ID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsYXN0TW92ZScpKTtcclxuICAgICAgICAgICAgbGFzdC5wdXNoKHRoaXMuX2NlbGxBcnIpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsYXN0TW92ZScsIEpTT04uc3RyaW5naWZ5KGxhc3QpKTtcclxuICAgICAgICAgICAgY3VycmVudENlbGxbMF0uY2hhbmdlVmFsdWUodGhpcy5fY3VycmVudE1vdmUpO1xyXG4gICAgICAgICAgICB0aGlzLl9hbGxNb3ZlcysrO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrV2luKHBhcnNlSW50KGN1cnJlbnRDZWxsWzBdLl9odG1sRWxlbWVudC5pZCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBsYXllcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBib2FyZC5wcm90b3R5cGUuY2hhbmdlUGxheWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50TW92ZSA9PT0gJ08nKVxyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50TW92ZSA9ICdYJztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRNb3ZlID0gJ08nO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50UGxheWVyJykuaW5uZXJIVE1MID0gXCJQbGF5ZXI6IFwiICsgdGhpcy5fY3VycmVudE1vdmUgKyBcIiB0dXJuXCI7XHJcbiAgICB9O1xyXG4gICAgYm9hcmQucHJvdG90eXBlLmNoZWNrV2luID0gZnVuY3Rpb24gKGN1cnJJZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fYmFzZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jZWxsQXJyW2ldLl92YWx1ZSAhPSAnJyB8fCB0aGlzLl9jZWxsQXJyW2kgKyB0aGlzLl9iYXNlXS5fdmFsdWUgIT0gJycgfHwgdGhpcy5fY2VsbEFycltpICsgMiAqIHRoaXMuX2Jhc2VdLl92YWx1ZSAhPSAnJylcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jZWxsQXJyW2ldLl92YWx1ZSA9PSB0aGlzLl9jZWxsQXJyW2kgKyB0aGlzLl9iYXNlXS5fdmFsdWUgJiYgdGhpcy5fY2VsbEFycltpXS5fdmFsdWUgPT0gdGhpcy5fY2VsbEFycltpICsgMiAqIHRoaXMuX2Jhc2VdLl92YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxXaW5uZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9iYXNlICogdGhpcy5fYmFzZTsgaSArPSB0aGlzLl9iYXNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jZWxsQXJyW2ldLl92YWx1ZSAhPSAnJyB8fCB0aGlzLl9jZWxsQXJyW2kgKyAxXS5fdmFsdWUgIT0gJycgfHwgdGhpcy5fY2VsbEFycltpICsgMl0uX3ZhbHVlICE9ICcnKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbaV0uX3ZhbHVlID09IHRoaXMuX2NlbGxBcnJbaSArIDFdLl92YWx1ZSAmJiB0aGlzLl9jZWxsQXJyW2ldLl92YWx1ZSA9PSB0aGlzLl9jZWxsQXJyW2kgKyAyXS5fdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsV2lubmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jZWxsQXJyWzBdLl92YWx1ZSAhPSAnJyAmJiB0aGlzLl9jZWxsQXJyWzRdLl92YWx1ZSAhPSAnJyAmJiB0aGlzLl9jZWxsQXJyWzhdLl92YWx1ZSAhPSAnJylcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbMF0uX3ZhbHVlID09IHRoaXMuX2NlbGxBcnJbNF0uX3ZhbHVlICYmIHRoaXMuX2NlbGxBcnJbMF0uX3ZhbHVlID09IHRoaXMuX2NlbGxBcnJbOF0uX3ZhbHVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsV2lubmVyKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbMl0uX3ZhbHVlICE9ICcnICYmIHRoaXMuX2NlbGxBcnJbNF0uX3ZhbHVlICE9ICcnICYmIHRoaXMuX2NlbGxBcnJbNl0uX3ZhbHVlICE9ICcnKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2VsbEFyclsyXS5fdmFsdWUgPT0gdGhpcy5fY2VsbEFycls0XS5fdmFsdWUgJiYgdGhpcy5fY2VsbEFyclsyXS5fdmFsdWUgPT0gdGhpcy5fY2VsbEFycls2XS5fdmFsdWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxXaW5uZXIoKTtcclxuICAgICAgICAvL2RyYXdcclxuICAgICAgICBpZiAodGhpcy5fYWxsTW92ZXMgPT0gdGhpcy5fY2VsbEFyci5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuY2FsbERyYXcoKTtcclxuICAgIH07XHJcbiAgICBib2FyZC5wcm90b3R5cGUuY2FsbFdpbm5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyJyk7XHJcbiAgICAgICAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGluZm8uaW5uZXJIVE1MID0gXCJQbGF5ZXI6IFwiICsgdGhpcy5fY3VycmVudE1vdmUgKyBcIiBoYXMgd29uXCI7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnbGFzdE1vdmUnKTtcclxuICAgIH07XHJcbiAgICBib2FyZC5wcm90b3R5cGUuY2FsbERyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcicpO1xyXG4gICAgICAgIGluZm8uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBpbmZvLmlubmVySFRNTCA9IFwiRFJBV1wiO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2xhc3RNb3ZlJyk7XHJcbiAgICB9O1xyXG4gICAgYm9hcmQucHJvdG90eXBlLnVuZG9Nb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHNlc3Npb25DZWxscyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGFzdE1vdmUnKSk7XHJcbiAgICAgICAgdmFyIGxhc3RNb3ZlUG9wID0gc2Vzc2lvbkNlbGxzLnBvcCgpO1xyXG4gICAgICAgIHZhciBsYXN0TW92ZSA9IGxhc3RNb3ZlUG9wLm1hcChmdW5jdGlvbiAoZWwsIGlkKSB7IHJldHVybiAobmV3IGNlbGxfMS5jZWxsKF90aGlzLl9jZWxsQXJyW2lkXS5faHRtbEVsZW1lbnQsIGVsLl92YWx1ZSkpOyB9KTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsYXN0TW92ZScsIEpTT04uc3RyaW5naWZ5KHNlc3Npb25DZWxscykpO1xyXG4gICAgICAgIHRoaXMuX2NlbGxBcnIgPSBsYXN0TW92ZTtcclxuICAgICAgICB0aGlzLl9jZWxsQXJyLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLmNoYW5nZVZhbHVlKGVsLl92YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoKTtcclxuICAgICAgICB0aGlzLl9hbGxNb3Zlcy0tO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBib2FyZDtcclxufSgpKTtcclxuZXhwb3J0cy5ib2FyZCA9IGJvYXJkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNlbGwgPSB2b2lkIDA7XHJcbnZhciBjZWxsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gY2VsbChlbGVtZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKHZhbHVlKVxyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX2h0bWxFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGNlbGwucHJvdG90eXBlLmNoYW5nZVZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9odG1sRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl92YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY2VsbC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9odG1sRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl92YWx1ZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gY2VsbDtcclxufSgpKTtcclxuZXhwb3J0cy5jZWxsID0gY2VsbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5UaWNUYWNUb2UgPSB2b2lkIDA7XHJcbi8vIGltcG9ydCB7IGJvYXJkIH0gZnJvbSAnLi4vLi4vLi4vbGFiMmItdGlja3RvZS9zcmMvQ2xhc3Nlcy9ib2FyZCc7XHJcbnZhciBib2FyZF8xID0gcmVxdWlyZShcIi4vc3JjdGljdGFjdG9lL0NsYXNzZXMvYm9hcmRcIik7XHJcbnZhciBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZGVjb3JhdG9yc1wiKTtcclxudmFyIFRpY1RhY1RvZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRpY1RhY1RvZSgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkvDs8WCa28gaSBrcnp5xbx5a1wiO1xyXG4gICAgfVxyXG4gICAgVGljVGFjVG9lLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHZhciBkaXZXaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2V2lubmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2V2lubmVyKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XHJcbiAgICAgICAgICAgIHZhciBnYW1lXzEgPSBuZXcgYm9hcmRfMS5ib2FyZCgzLCBkaXYpO1xyXG4gICAgICAgICAgICBnYW1lXzEuaW5pdCgpO1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9uQmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidXR0b25CYWNrLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkJhY2tzJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkJhY2suaW5uZXJIVE1MID0gJ0NPRk5JSiBSVUNIJztcclxuICAgICAgICAgICAgYnV0dG9uQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgZ2FtZV8xLnVuZG9Nb3ZlKCk7IH0pO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uQmFjayk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXY7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGRlY29yYXRvcnNfMS53YXRjaFxyXG4gICAgXSwgVGljVGFjVG9lLnByb3RvdHlwZSwgXCJnZXRHYW1lRWxlbWVudFwiLCBudWxsKTtcclxuICAgIFRpY1RhY1RvZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGRlY29yYXRvcnNfMS5lbmFibGVkXHJcbiAgICBdLCBUaWNUYWNUb2UpO1xyXG4gICAgcmV0dXJuIFRpY1RhY1RvZTtcclxufSgpKTtcclxuZXhwb3J0cy5UaWNUYWNUb2UgPSBUaWNUYWNUb2U7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2FtZV9lbnVtXzEgPSByZXF1aXJlKFwiLi9nYW1lLmVudW1cIik7XHJcbnZhciBnYW1lRmFjdG9yeV9jbGFzc18xID0gcmVxdWlyZShcIi4vZ2FtZUZhY3RvcnkuY2xhc3NcIik7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy9zdHlsZXMuc2Nzc1wiKTtcclxudmFyIEFwcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lRmFjdG9yeSA9IG5ldyBnYW1lRmFjdG9yeV9jbGFzc18xLmdhbWVGYWN0b3J5KCk7XHJcbiAgICAgICAgdGhpcy5pbml0TWVudSgpO1xyXG4gICAgfVxyXG4gICAgQXBwLnByb3RvdHlwZS5jaGFuZ2VHYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB2YXIgZ2FtZSA9IHRoaXMuX2dhbWVGYWN0b3J5LmNyZWF0ZUdhbWUoZ2FtZV9lbnVtXzEuR2FtZXNbbmFtZV0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWUuZ2V0R2FtZUVsZW1lbnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQXBwLnByb3RvdHlwZS5pbml0TWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBtZW51Q29udGFpbmVyID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgICAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXIgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lQ29udGFpbmVyJyk7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gZ2FtZV9lbnVtXzEuR2FtZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcihlbGVtZW50KSkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnYW1lTmFtZSA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpKTtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZS5pbm5lclRleHQgPSBcIlwiICsgZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdHYW1lTmFtZSA9IGUudGFyZ2V0LmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlR2FtZShuZXdHYW1lTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChnYW1lTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nYW1lQ29udGFpbmVyKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXBwO1xyXG59KCkpO1xyXG5uZXcgQXBwKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=