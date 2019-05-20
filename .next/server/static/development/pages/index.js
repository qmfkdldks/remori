module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/animations/Worker.js":
/*!*****************************************!*\
  !*** ./components/animations/Worker.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal */ "react-reveal");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_2__);



var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Worker__ImageContainer",
  componentId: "kp92u7-0"
})(["max-width:540px;position:relative;@media only screen and (max-width:767px){text-align:center;}@media only screen and (min-width:768px) and (max-width:991px){text-align:center;margin-top:45px;}@media only screen and (min-width:992px) and (max-width:1199px){}"]);
var InnerImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Worker__InnerImage",
  componentId: "kp92u7-1"
})(["position:absolute;max-width:100%;&.man{z-index:3;top:-130px;left:-45px;}&.code{right:145px;top:-287px;}&.carpet{left:25px;top:-20px;}&.bin{right:12%;top:118px;z-index:1;}&.book{left:28%;top:-120px;z-index:2;}&.desktop{right:35%;z-index:1;top:-150px;}&.dot{right:20px;top:-110px;}&.flower-top-big{right:25px;top:-140px;}&.flower-top{right:30%;z-index:1;top:-35px;}&.keyboard{left:37%;top:-28px;z-index:1;}&.pen{left:37%;top:-160px;z-index:1;}&.table{left:90px;top:-110px;}&.tea-cup{left:56%;top:-25px;z-index:2;}&.headphone{right:105px;top:-28px;}&.main-pic{display:none;}@media only screen and (max-width:767px){display:none;position:relative;&.main-pic{display:block;left:0;right:0;margin:0 auto;}}@media only screen and (min-width:768px) and (max-width:991px){position:relative;display:none;}@media only screen and (min-width:992px) and (max-width:1199px){&.man{top:-140px;left:-120px;}&.code{right:160px;top:-286px;}&.carpet{left:-30px;top:-15px;}&.bin{right:15%;top:105px;}&.book{left:15%;top:-120px;}&.desktop{right:37%;top:-160px;}&.dot{right:20px;top:-110px;}&.flower-top-big{right:25px;top:-140px;}&.flower-top{right:28%;top:-25px;}&.keyboard{left:29%;top:-35px;}&.pen{left:26%;top:-160px;}&.table{left:15px;top:-110px;}&.tea-cup{left:50%;top:-18px;}&.headphone{right:98px;top:-20px;}&.main-pic{}}"]);

var Worker = function Worker(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
    left: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/carpet.png */ "./images/banner-image/carpet.png"),
    alt: "carpet",
    className: "carpet"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Zoom"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/dot.png */ "./images/banner-image/dot.png"),
    alt: "dot",
    className: "dot"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Zoom"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/table.png */ "./images/banner-image/table.png"),
    alt: "table",
    className: "table"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
    bottom: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/keyboard.png */ "./images/banner-image/keyboard.png"),
    alt: "keyboard",
    className: "keyboard"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Zoom"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/pen.png */ "./images/banner-image/pen.png"),
    alt: "pen",
    className: "pen"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Bounce"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/book.png */ "./images/banner-image/book.png"),
    alt: "book",
    className: "book"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
    top: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/man.png */ "./images/banner-image/man.png"),
    alt: "man",
    className: "man"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
    bottom: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/flower-top-big.png */ "./images/banner-image/flower-top-big.png"),
    alt: "flower-top-big",
    className: "flower-top-big"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Zoom"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/bin.png */ "./images/banner-image/bin.png"),
    alt: "bin",
    className: "bin"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
    top: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/dekstop.png */ "./images/banner-image/dekstop.png"),
    alt: "dekstop",
    className: "desktop"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Rotate"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/flower-top.png */ "./images/banner-image/flower-top.png"),
    alt: "flower-top",
    className: "flower-top"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
    right: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/tea-cup.png */ "./images/banner-image/tea-cup.png"),
    alt: "tea-cup",
    className: "tea-cup"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Roll"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/headphone.png */ "./images/banner-image/headphone.png"),
    alt: "headphone",
    className: "headphone"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/main-pic.png */ "./images/banner-image/main-pic.png"),
    alt: "main-pic",
    className: "main-pic",
    display: "none"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
    bottom: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerImage, {
    src: __webpack_require__(/*! ../../images/banner-image/code.png */ "./images/banner-image/code.png"),
    className: "code",
    alt: "code"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Worker);

/***/ }),

/***/ "./components/animations/keyframes.js":
/*!********************************************!*\
  !*** ./components/animations/keyframes.js ***!
  \********************************************/
/*! exports provided: Rotate3d, MoveBounce, MoveLeftBounce, RotateMe, AnimationFramesOne, MoveBg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rotate3d", function() { return Rotate3d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveBounce", function() { return MoveBounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveLeftBounce", function() { return MoveLeftBounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateMe", function() { return RotateMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFramesOne", function() { return AnimationFramesOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveBg", function() { return MoveBg; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Rotate3d = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg);}100%{-webkit-transform:rotateY(360deg);transform:rotateY(360deg);}"]);
var MoveBounce = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{-webkit-transform:translateY(0px);transform:translateY(0px);}50%{-webkit-transform:translateY(20px);transform:translateY(20px);}100%{-webkit-transform:translateY(0px);transform:translateY(0px);}"]);
var MoveLeftBounce = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{-webkit-transform:translateX(0px);transform:translateX(0px);}50%{-webkit-transform:translateX(20px);transform:translateX(20px);}100%{-webkit-transform:translateX(0px);transform:translateX(0px);}"]);
var RotateMe = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var AnimationFramesOne = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:translate(0px,0px) rotate(0deg);}20%{transform:translate(73px,-1px) rotate(36deg);}40%{transform:translate(141px,72px) rotate(72deg);}60%{transform:translate(83px,122px) rotate(108deg);}80%{transform:translate(-40px,72px) rotate(144deg);}100%{transform:translate(0px,0px) rotate(0deg);}"]);
var MoveBg = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:translateX(0);}to{transform:translateX(88px);}"]);

/***/ }),

/***/ "./components/atomic/Bar.js":
/*!**********************************!*\
  !*** ./components/atomic/Bar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animations_keyframes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/keyframes */ "./components/animations/keyframes.js");


var Bar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Bar",
  componentId: "qmezrb-0"
})(["height:5px;width:90px;background:#cdf1d8;margin:20px auto;position:relative;border-radius:30px;::before{content:'';position:absolute;left:0;top:-2.7px;height:10px;width:10px;border-radius:50%;background:#44ce6f;animation-duration:3s;animation-timing-function:linear;animation-iteration-count:infinite;animation-name:", ";}"], _animations_keyframes__WEBPACK_IMPORTED_MODULE_1__["MoveBg"]);
/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ }),

/***/ "./components/atomic/Shape.js":
/*!************************************!*\
  !*** ./components/atomic/Shape.js ***!
  \************************************/
/*! exports provided: Shape1, Shape2, Shape3, Shape4, Shape5, Shape6, Shape7, Shape8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape1", function() { return Shape1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape2", function() { return Shape2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape3", function() { return Shape3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape4", function() { return Shape4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape5", function() { return Shape5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape6", function() { return Shape6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape7", function() { return Shape7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape8", function() { return Shape8; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _animations_keyframes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/keyframes */ "./components/animations/keyframes.js");
/* harmony import */ var _images_shape1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/shape1.png */ "./images/shape1.png");
/* harmony import */ var _images_shape1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_shape1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_shape2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/shape2.svg */ "./images/shape2.svg");
/* harmony import */ var _images_shape2_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_shape2_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_shape3_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/shape3.svg */ "./images/shape3.svg");
/* harmony import */ var _images_shape3_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_shape3_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_shape4_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/shape4.svg */ "./images/shape4.svg");
/* harmony import */ var _images_shape4_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_shape4_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_shape5_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/shape5.png */ "./images/shape5.png");
/* harmony import */ var _images_shape5_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_shape5_png__WEBPACK_IMPORTED_MODULE_9__);










var StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Shape__StyledDiv",
  componentId: "sc-14zi0qo-0"
})(["position:absolute;animation:", " ", ";z-index:-1;top:", ";left:", ";bottom:", ";right:", ";opacity:", ";@media only screen and (max-width:767px){&.shape1,&.shape2,&.shape3,&.shape4,&.shape5{display:none;}}@media only screen and (min-width:768px) and (max-width:991px){&.shape1,&.shape2,&.shape3,&.shape4,&.shape5,&.shape7{display:none;}}@media only screen and (min-width:992px) and (max-width:1199px){&.shape1{display:none;}}"], function (props) {
  return props.animation;
}, function (props) {
  return props.animationOptions;
}, function (props) {
  return props.top;
}, function (props) {
  return props.left;
}, function (props) {
  return props.bottom;
}, function (props) {
  return props.right;
}, function (props) {
  return props.opacity || 1;
});

var Shape = function Shape(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDiv, props, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: props.img,
    alt: "remori shape"
  }));
};

var Shape1 = function Shape1(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Shape, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    top: "20%",
    left: "30px",
    opacity: ".4",
    img: _images_shape1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    animation: _animations_keyframes__WEBPACK_IMPORTED_MODULE_4__["Rotate3d"],
    animationOptions: "4s linear infinite"
  }, props));
};
var Shape2 = function Shape2(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Shape, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    top: "70%",
    left: "15%",
    img: _images_shape2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    animation: _animations_keyframes__WEBPACK_IMPORTED_MODULE_4__["RotateMe"],
    animationOptions: "5s linear infinite"
  }, props));
};
var Shape3 = function Shape3() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Shape, {
    left: "25%",
    bottom: "15%",
    img: _images_shape3_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    animation: _animations_keyframes__WEBPACK_IMPORTED_MODULE_4__["AnimationFramesOne"],
    animationOptions: "15s linear infinite"
  });
};
var Shape4 = function Shape4(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Shape, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    right: "25%",
    bottom: "15%",
    img: _images_shape4_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    animation: _animations_keyframes__WEBPACK_IMPORTED_MODULE_4__["AnimationFramesOne"],
    animationOptions: "20s linear infinite"
  }, props));
};
var Shape5 = function Shape5() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Shape, {
    right: "5%",
    top: "10%",
    img: _images_shape5_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    animation: _animations_keyframes__WEBPACK_IMPORTED_MODULE_4__["MoveBounce"],
    animationOptions: "5s linear infinite"
  });
};
var Shape6 = function Shape6() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Shape, {
    right: "10%",
    top: "40%",
    opacity: ".2",
    img: _images_shape4_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    animation: _animations_keyframes__WEBPACK_IMPORTED_MODULE_4__["RotateMe"],
    animationOptions: "10s linear infinite"
  });
};
var Shape7 = function Shape7() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Shape, {
    left: "25%",
    top: "15%",
    img: _images_shape4_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    animation: _animations_keyframes__WEBPACK_IMPORTED_MODULE_4__["RotateMe"],
    animationOptions: "10s linear infinite"
  });
};
var Shape8 = function Shape8() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Shape, {
    right: "10%",
    top: "15%",
    img: _images_shape2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    animation: _animations_keyframes__WEBPACK_IMPORTED_MODULE_4__["RotateMe"],
    animationOptions: "10s linear infinite"
  });
};

/***/ }),

/***/ "./components/container/RecentWork/index.js":
/*!**************************************************!*\
  !*** ./components/container/RecentWork/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./components/container/RecentWork/style.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _molecular_ProjectCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecular/ProjectCard */ "./components/molecular/ProjectCard/index.js");
/* harmony import */ var _images_works_image_1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../images/works-image/1.jpg */ "./images/works-image/1.jpg");
/* harmony import */ var _images_works_image_1_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_works_image_1_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_works_image_2_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../images/works-image/2.jpg */ "./images/works-image/2.jpg");
/* harmony import */ var _images_works_image_2_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_works_image_2_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_works_image_3_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../images/works-image/3.jpg */ "./images/works-image/3.jpg");
/* harmony import */ var _images_works_image_3_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_works_image_3_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_works_image_4_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../images/works-image/4.jpg */ "./images/works-image/4.jpg");
/* harmony import */ var _images_works_image_4_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_works_image_4_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_works_image_5_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../images/works-image/5.jpg */ "./images/works-image/5.jpg");
/* harmony import */ var _images_works_image_5_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_works_image_5_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _atomic_Shape__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../atomic/Shape */ "./components/atomic/Shape.js");







 // import Link from 'next/link'

 // import OwlCarousel from 'react-owl-carousel3'

var OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")];
    },
    modules: ['react-owl-carousel3']
  }
});







var slideOptions = {
  items: 4,
  loop: true,
  nav: false,
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    786: {
      items: 2
    },
    1200: {
      items: 3
    },
    1500: {
      items: 4
    }
  }
};

var RecentWork =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RecentWork, _React$Component);

  function RecentWork(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RecentWork);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(RecentWork).call(this, props));
    _this.state = {
      display: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RecentWork, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        display: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["WorkArea"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["SectionTitle"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["Heading"], null, "Our Recent Works"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["Bar"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["Text"], null, "Before building product, It's really important to set crystal clear goal. Meet our goal and data driven projects!")), this.state.display && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OwlCarousel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "owl-theme"
      }, slideOptions), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_molecular_ProjectCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        img: _images_works_image_1_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
        title: "Proveat",
        description: "Restaurant data collector which helps decision making to owners."
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_molecular_ProjectCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        img: _images_works_image_2_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
        title: "Version",
        description: "Connect game world with reality. If you win game you win real rewards."
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_molecular_ProjectCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        img: _images_works_image_3_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
        title: "Solvi",
        description: "Calculate demanding stock in the future with collected data"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atomic_Shape__WEBPACK_IMPORTED_MODULE_15__["Shape8"], {
        top: "15%",
        right: "10%"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atomic_Shape__WEBPACK_IMPORTED_MODULE_15__["Shape4"], {
        left: "25%",
        top: "15%"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atomic_Shape__WEBPACK_IMPORTED_MODULE_15__["Shape4"], null));
    }
  }]);

  return RecentWork;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RecentWork);

/***/ }),

/***/ "./components/container/RecentWork/style.js":
/*!**************************************************!*\
  !*** ./components/container/RecentWork/style.js ***!
  \**************************************************/
/*! exports provided: WorkArea, SectionTitle, Heading, Text, Bar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkArea", function() { return WorkArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return SectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_Bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atomic/Bar */ "./components/atomic/Bar.js");



var WorkArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "style__WorkArea",
  componentId: "sc-5hxntr-0"
})(["position:relative;z-index:1;padding-top:80px;padding-bottom:50px;background-color:#f7fafd;"]);
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__SectionTitle",
  componentId: "sc-5hxntr-1"
})(["text-align:center;margin-bottom:60px;"]);
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"]).withConfig({
  displayName: "style__Heading",
  componentId: "sc-5hxntr-2"
})(["margin-bottom:0;font-size:24px;font-weight:600;text-transform:capitalize;color:#0e314c;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"]).withConfig({
  displayName: "style__Text",
  componentId: "sc-5hxntr-3"
})(["max-width:520px;margin:0 auto;line-height:1.9;"]);
var Bar = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_atomic_Bar__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "style__Bar",
  componentId: "sc-5hxntr-4"
})([""]);

/***/ }),

/***/ "./components/molecular/AboutArea/index.js":
/*!*************************************************!*\
  !*** ./components/molecular/AboutArea/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./components/molecular/AboutArea/style.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../images/1.png */ "./images/1.png");
/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_1_png__WEBPACK_IMPORTED_MODULE_8__);










var AboutArea =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AboutArea, _React$Component);

  function AboutArea(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutArea);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AboutArea).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutArea, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["AboutAreaWrapper"], {
        p: 3
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
        flexWrap: "wrap"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [1, 1 / 2]
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Image"], {
        src: _images_1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Remori"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [1, 1 / 2],
        p: 3
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["SectionTitle"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Heading"], null, "About Us"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Bar"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "We need a system that helps us to be tolerant to failures.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "# 3 goals of our platform"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "Failures are the lessons that we should get through, but it shouldn't drown us."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "Our goal is to build secure foundation which allows us to commit failures fast and get key lessons quickly with out big damages."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "Mesurement are the most important tool to clirify aspects of business."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "Our goal is to make sure to collect all data needed to use it in every decisions."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "Sharing ideas, experiences, data, opportunites among us will help everyone in this community."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "Our goal is to create open records which help us grow with healthy community."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["AboutInnerArea"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
        flexWrap: "wrap"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [1, 1 / 3],
        p: 2
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Heading"], null, "Our History"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "After various failures and lessons, we decided to create \"Remori\" to help individuals and entrepreneurs who have great creativity. We started this platform at 2019.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [1, 1 / 3],
        p: 2
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Heading"], null, "Our Mission"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "We are building platform that connects individuals and entrepreneurs. We hope we can share experiences, knowledges, opportunities and data to make our community stronger.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [1, 1 / 3],
        p: 2
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Heading"], null, "Who we are"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["Text"], null, "We are aiming to create transparent community. So we can share experience and opportunites with confidence.")))));
    }
  }]);

  return AboutArea;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AboutArea);

/***/ }),

/***/ "./components/molecular/AboutArea/style.js":
/*!*************************************************!*\
  !*** ./components/molecular/AboutArea/style.js ***!
  \*************************************************/
/*! exports provided: AboutAreaWrapper, SectionTitle, Text, Bar, AboutInnerArea, Heading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAreaWrapper", function() { return AboutAreaWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return SectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutInnerArea", function() { return AboutInnerArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atomic_Bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atomic/Bar */ "./components/atomic/Bar.js");




var AboutAreaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "style__AboutAreaWrapper",
  componentId: "l3sekg-0"
})(["padding-top:80px;padding-bottom:80px;"]);
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "style__SectionTitle",
  componentId: "l3sekg-1"
})(["text-align:left;margin-bottom:18px;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"]).withConfig({
  displayName: "style__Text",
  componentId: "l3sekg-2"
})(["margin:0;color:#586069;line-height:1.9;"]);
var Bar = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_Bar__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "style__Bar",
  componentId: "l3sekg-3"
})(["margin-right:0;margin-left:0;"]);
var AboutInnerArea = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "style__AboutInnerArea",
  componentId: "l3sekg-4"
})(["margin-top:60px;"]);
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "style__Heading",
  componentId: "l3sekg-5"
})(["color:#0e314c;font-size:18px;margin-bottom:15px;"]);

/***/ }),

/***/ "./components/molecular/BoxArea/index.js":
/*!***********************************************!*\
  !*** ./components/molecular/BoxArea/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IconBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IconBox */ "./components/molecular/IconBox/index.js");





var BoxAreaContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({
  displayName: "BoxArea__BoxAreaContainer",
  componentId: "sc-1cbxie1-0"
})(["position:relative;padding-bottom:80px;margin-top:-130px;z-index:1;@media only screen and (max-width:767px){margin-top:0;padding-bottom:20px;}@media only screen and (min-width:768px) and (max-width:991px){padding-bottom:50px;margin-top:-65px;}"]);

var BoxArea = function BoxArea(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    p: [1, 3, 5],
    flexWrap: "wrap",
    justifyContent: "space-around"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    p: 3,
    width: [1, 1 / 2, 1 / 4]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Code"], null),
    heading: "Code",
    text: "Code is the most powerful tool in the world. Consult to us to bring your idea in reality."
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    p: 3,
    width: [1, 1 / 2, 1 / 4]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Layers"], null),
    primary: "#f78acb",
    secondary: "rgba(247, 138, 203, 0.3)",
    heading: "Platform",
    text: "We need foundation of our creativity. Be one of us to build success & failures foundation."
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    p: 3,
    width: [1, 1 / 2, 1 / 4]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Layers"], null),
    primary: "#c679e3",
    secondary: "#edc3fc",
    heading: "Connection",
    text: "Connect potential startup partners through our network. Welcome everyone!"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    p: 3,
    width: [1, 1 / 2, 1 / 4]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["BarChart"], null),
    primary: "#eb6b3d",
    secondary: "rgba(235, 107, 61, 0.3)",
    heading: "Immense Data",
    text: "We are collecting good quantity and quality of data to not repeat failures."
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BoxArea);

/***/ }),

/***/ "./components/molecular/Contact/index.js":
/*!***********************************************!*\
  !*** ./components/molecular/Contact/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style */ "./components/molecular/Contact/style.js");









 // import Link from 'next/link'
// import * as Icon from 'react-feather'
// import GoogleMapComponent from "./GoogleMapComponent"





var ContactArea =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ContactArea, _React$Component);

  function ContactArea() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ContactArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ContactArea)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      submitting: false,
      submitted: false,
      buttonState: '',
      formFields: {
        name: '',
        email: '',
        subject: '',
        phone: '',
        text: ''
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit", function (e) {
      e.preventDefault();
      var data = _this.state.formFields;
      fetch('/api/contact', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)
      }).then(function (res) {
        res.status === 200 ? _this.setState({
          submitted: true
        }) : '';

        var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

        formFields.name = '';
        formFields.email = '';
        formFields.phone = '';
        formFields.subject = '';
        formFields.text = '';

        _this.setState({
          formFields: formFields
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "nameChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.name = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "emailChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.email = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "phoneChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.phone = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "subjectChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.subject = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "textChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.text = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onHideSuccess", function () {
      _this.setState({
        submitted: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "successMessage", function () {
      if (_this.state.submitted) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "alert alert-success"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("strong", null, "Thank you!"), " Your message is send to the owner", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          onClick: _this.onHideSuccess,
          type: "button",
          className: "close"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          "aria-hidden": "true"
        }, "\xD7")));
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ContactArea, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["ContactAreaWrapper"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_11__["Flex"], {
        width: 1,
        flexWrap: "wrap",
        justifyContent: "center"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["SectionTitle"], {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Heading"], null, "Get In Touch With Us"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Bar"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Text"], null, "Anything On your Mind. We\u2019ll Be Glad To Assist You!")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_11__["Flex"], {
        width: 1,
        px: 2
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        id: "contactForm",
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Label"], null, "Name", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "text",
        name: "name",
        required: true,
        "data-error": "Please enter your name",
        placeholder: "Name",
        value: this.state.formFields.name,
        onChange: this.nameChangeHandler
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "help-block with-errors"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Label"], null, "Email", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "email",
        name: "email",
        required: true,
        "data-error": "Please enter your email",
        placeholder: "Email",
        value: this.state.formFields.email,
        onChange: this.emailChangeHandler
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "help-block with-errors"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Label"], null, "Phone", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "text",
        name: "phone",
        placeholder: "Phone",
        value: this.state.formFields.phone,
        onChange: this.phoneChangeHandler
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Label"], null, "Subject", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "text",
        name: "subject",
        placeholder: "Subject",
        value: this.state.formFields.subject,
        onChange: this.subjectChangeHandler
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["Label"], null, "Message"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_12__["TextArea"], {
        name: "message",
        id: "message",
        cols: "30",
        rows: "5",
        required: true,
        "data-error": "Write your message",
        placeholder: "Your Message",
        value: this.state.formFields.text,
        onChange: this.textChangeHandler
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "help-block with-errors"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        width: 1,
        type: "submit"
      }, "Send Message"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "msgSubmit",
        className: "h3 text-center hidden"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "clearfix"
      }), this.successMessage())))));
    }
  }]);

  return ContactArea;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContactArea);

/***/ }),

/***/ "./components/molecular/Contact/style.js":
/*!***********************************************!*\
  !*** ./components/molecular/Contact/style.js ***!
  \***********************************************/
/*! exports provided: Bar, Form, ContactAreaWrapper, SectionTitle, Heading, Text, FormGroup, Label, Input, TextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAreaWrapper", function() { return ContactAreaWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return SectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atomic_Bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atomic/Bar */ "./components/atomic/Bar.js");




var Bar = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_atomic_Bar__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "style__Bar",
  componentId: "sc-18nqvz2-0"
})([""]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "style__Form",
  componentId: "sc-18nqvz2-1"
})(["width:100%;max-width:400px;margin:auto;"]);
var ContactAreaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "style__ContactAreaWrapper",
  componentId: "sc-18nqvz2-2"
})(["padding-top:80px;padding-bottom:80px;"]);
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "style__SectionTitle",
  componentId: "sc-18nqvz2-3"
})(["text-align:center;margin-bottom:60px;"]);
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"]).withConfig({
  displayName: "style__Heading",
  componentId: "sc-18nqvz2-4"
})(["margin-bottom:0;font-size:24px;font-weight:600;text-transform:capitalize;color:#0e314c;font-weight:500;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"]).withConfig({
  displayName: "style__Text",
  componentId: "sc-18nqvz2-5"
})(["max-width:520px;margin:0 auto;color:#586069;line-height:1.9;"]);
var FormGroup = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "style__FormGroup",
  componentId: "sc-18nqvz2-6"
})(["margin-bottom:18px;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label.withConfig({
  displayName: "style__Label",
  componentId: "sc-18nqvz2-7"
})(["color:#0e314c;font-size:15px;font-weight:500;margin-bottom:10px;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "style__Input",
  componentId: "sc-18nqvz2-8"
})(["box-sizing:border-box;width:100%;padding:10px;height:45px;font-size:14px;color:#0e314c;border:1px solid #eeeeee;border-radius:0;background:#eeeeee;transition:0.5s;margin-bottom:18px;&:focus{outline:0;background:#ffffff;box-shadow:unset;border-color:#44ce6f;}"]);
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Input).withConfig({
  displayName: "style__TextArea",
  componentId: "sc-18nqvz2-9"
})(["height:200px;"]);

/***/ }),

/***/ "./components/molecular/IconBox/index.js":
/*!***********************************************!*\
  !*** ./components/molecular/IconBox/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/molecular/IconBox/style.js");



var IconBox = function IconBox(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primary: props.primary,
    secondary: props.secondary
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, props.icon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["StyledHeading"], {
    className: "heading"
  }, props.heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["StyledText"], null, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (IconBox);

/***/ }),

/***/ "./components/molecular/IconBox/style.js":
/*!***********************************************!*\
  !*** ./components/molecular/IconBox/style.js ***!
  \***********************************************/
/*! exports provided: StyledHeading, StyledText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeading", function() { return StyledHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledText", function() { return StyledText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);


var StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "style__StyledBox",
  componentId: "sc-1ezgw7e-0"
})(["border:1px dashed #cdf1d8;padding:30px 20px;position:relative;border-radius:5px;background:#ffffff;box-shadow:0 0 10px rgba(72,69,224,0.1);transition:0.5s;height:300px;.icon{display:inline-block;text-align:center;width:55px;height:55px;line-height:55px;background:", ";border-radius:50%;color:", ";transition:0.5s;*{vertical-align:middle;}}&::before{content:'';position:absolute;left:0;top:0;width:100%;border-radius:5px;height:100%;background:linear-gradient(135deg,#23bdb8 0%,#43e794 100%);z-index:-1;opacity:0;visibility:hidden;transition:0.5s;}&:hover{transform:translateY(-9px);border-color:transparent;}&:hover::before{opacity:1;visibility:visible;}&:hover .icon{background:#ffffff;}"], function (props) {
  return props.secondary || '#cdf1d8';
}, function (props) {
  return props.primary || '#44ce6f';
});
var StyledHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"]).withConfig({
  displayName: "style__StyledHeading",
  componentId: "sc-1ezgw7e-1"
})(["font-size:18px;margin-top:25px;margin-bottom:15px;font-weight:500;color:#0e314c;", ":hover &{color:#ffffff;}"], StyledBox);
var StyledText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"]).withConfig({
  displayName: "style__StyledText",
  componentId: "sc-1ezgw7e-2"
})(["color:#586069;line-height:1.9;", ":hover &{color:#ffffff;}"], StyledBox);
/* harmony default export */ __webpack_exports__["default"] = (StyledBox);

/***/ }),

/***/ "./components/molecular/MainBanner/index.js":
/*!**************************************************!*\
  !*** ./components/molecular/MainBanner/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/molecular/MainBanner/style.js");
/* harmony import */ var _animations_Worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/Worker */ "./components/animations/Worker.js");
/* harmony import */ var _atomic_Shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atomic/Shape */ "./components/atomic/Shape.js");






var MainBanner = function MainBanner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["MainBannerContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 3,
    px: [3, 5],
    width: [1, 1, 1 / 2]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["HeroContentHeading"], null, "Remori IT Startup Platform Argentina"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["HeroContentText"], null, "\"Data Driven Business\" We gather and measure all business' aspects of startups to eventually accumulate experience of success and failures. Share your idea and experience! Together we can build concrete foundation of our challenges."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["StyledButton"], null, "Be Our Partners!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 3,
    mw: 3,
    width: [1, 1, 1 / 2]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_animations_Worker__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_Shape__WEBPACK_IMPORTED_MODULE_4__["Shape1"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_Shape__WEBPACK_IMPORTED_MODULE_4__["Shape2"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_Shape__WEBPACK_IMPORTED_MODULE_4__["Shape3"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_Shape__WEBPACK_IMPORTED_MODULE_4__["Shape4"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_Shape__WEBPACK_IMPORTED_MODULE_4__["Shape5"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_Shape__WEBPACK_IMPORTED_MODULE_4__["Shape6"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_Shape__WEBPACK_IMPORTED_MODULE_4__["Shape7"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_Shape__WEBPACK_IMPORTED_MODULE_4__["Shape8"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (MainBanner);

/***/ }),

/***/ "./components/molecular/MainBanner/style.js":
/*!**************************************************!*\
  !*** ./components/molecular/MainBanner/style.js ***!
  \**************************************************/
/*! exports provided: MainBannerContainer, HeroContentHeading, HeroContentText, StyledButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBannerContainer", function() { return MainBannerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroContentHeading", function() { return HeroContentHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroContentText", function() { return HeroContentText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_banner_bg1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/banner-bg1.jpg */ "./images/banner-bg1.jpg");
/* harmony import */ var _images_banner_bg1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_banner_bg1_jpg__WEBPACK_IMPORTED_MODULE_3__);




var MainBannerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "style__MainBannerContainer",
  componentId: "sc-17znbf5-0"
})(["position:relative;margin-top:300px;height:510px;z-index:1;@media only screen and (max-width:767px){height:100%;margin-top:50px;padding-bottom:80px;background-position:center;}@media only screen and (min-width:768px) and (max-width:991px){height:100%;margin-top:85px;padding-bottom:165px;}"]);
var HeroContentHeading = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Heading"]).withConfig({
  displayName: "style__HeroContentHeading",
  componentId: "sc-17znbf5-1"
})(["font-size:45px;font-weight:500;margin-bottom:20px;color:#0e314c;"]);
var HeroContentText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"]).withConfig({
  displayName: "style__HeroContentText",
  componentId: "sc-17znbf5-2"
})(["margin-bottom:30px;color:#586069;line-height:1.9;"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Button"]).withConfig({
  displayName: "style__StyledButton",
  componentId: "sc-17znbf5-3"
})(["font-weight:600;font-size:14px;border:none;padding:15px 40px;position:relative;border-radius:4px;z-index:1;text-transform:uppercase;-webkit-transition:0.5s;transition:0.5s;"]);

/***/ }),

/***/ "./components/molecular/ProjectCard/index.js":
/*!***************************************************!*\
  !*** ./components/molecular/ProjectCard/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/molecular/ProjectCard/style.js");
 // import Link from 'next/link'

 // import { Flex, Box } from 'rebass'
// import * as Icon from 'react-feather'

var ProjectCard = function ProjectCard(props) {
  var img = props.img,
      title = props.title,
      description = props.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SigleWorkWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["SingleWork"], {
    className: "single-works"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: img,
    alt: "remori project"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["WorkContent"], {
    className: "works-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Text"], null, description))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ }),

/***/ "./components/molecular/ProjectCard/style.js":
/*!***************************************************!*\
  !*** ./components/molecular/ProjectCard/style.js ***!
  \***************************************************/
/*! exports provided: SigleWorkWrapper, WorkContent, SingleWork, Image, Heading, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigleWorkWrapper", function() { return SigleWorkWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkContent", function() { return WorkContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleWork", function() { return SingleWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);



var SigleWorkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "style__SigleWorkWrapper",
  componentId: "sc-3i302i-0"
})(["padding-left:15px;padding-right:15px;"]);
var WorkContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "style__WorkContent",
  componentId: "sc-3i302i-1"
})(["position:absolute;bottom:-60px;left:0;padding:20px;transition:0.5s;opacity:0;z-index:2;visibility:hidden;"]);
var SingleWork = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "style__SingleWork",
  componentId: "sc-3i302i-2"
})(["position:relative;margin-bottom:30px;z-index:1;&::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(135deg,#23bdb8 0%,#43e794 100%);transition:0.5s;opacity:0;visibility:hidden;z-index:1;}&:hover::before{opacity:.8;visibility:visible;}&:hover ", "{opacity:1;visibility:visible;bottom:0;}"], WorkContent);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"]).withConfig({
  displayName: "style__Image",
  componentId: "sc-3i302i-3"
})(["max-width:100%;"]);
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Heading"]).withConfig({
  displayName: "style__Heading",
  componentId: "sc-3i302i-4"
})(["font-size:18px;margin-bottom:15px;color:#ffffff;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"]).withConfig({
  displayName: "style__Text",
  componentId: "sc-3i302i-5"
})(["color:#ffffff;"]);

/***/ }),

/***/ "./images/1.png":
/*!**********************!*\
  !*** ./images/1.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-74160cc2a0195cfe3813793230fa3e59.png";

/***/ }),

/***/ "./images/banner-bg1.jpg":
/*!*******************************!*\
  !*** ./images/banner-bg1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-bg1-c8e7f324943288541bc1cbb21e1f7c19.jpg";

/***/ }),

/***/ "./images/banner-image/bin.png":
/*!*************************************!*\
  !*** ./images/banner-image/bin.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/banner-image/book.png":
/*!**************************************!*\
  !*** ./images/banner-image/book.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/banner-image/carpet.png":
/*!****************************************!*\
  !*** ./images/banner-image/carpet.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/carpet-7f5c3fbcc7368eba529cf48c58ca7157.png";

/***/ }),

/***/ "./images/banner-image/code.png":
/*!**************************************!*\
  !*** ./images/banner-image/code.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAABvCAYAAAB1uPv/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzk2QUVENjM0MEE4MTFFOTlERjVDODI1RDkyRjNEQzgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzk2QUVENjI0MEE4MTFFOTlERjVDODI1RDkyRjNEQzgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTA4MWFiMzgtMTZlYi1jNDQ5LWI2MDItZmViZDE4NWExNTRmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/banner-image/dekstop.png":
/*!*****************************************!*\
  !*** ./images/banner-image/dekstop.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dekstop-f4a73c997bef188ad47be5f541834365.png";

/***/ }),

/***/ "./images/banner-image/dot.png":
/*!*************************************!*\
  !*** ./images/banner-image/dot.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/banner-image/flower-top-big.png":
/*!************************************************!*\
  !*** ./images/banner-image/flower-top-big.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flower-top-big-91455c174c06622bab257c371b029e16.png";

/***/ }),

/***/ "./images/banner-image/flower-top.png":
/*!********************************************!*\
  !*** ./images/banner-image/flower-top.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/banner-image/headphone.png":
/*!*******************************************!*\
  !*** ./images/banner-image/headphone.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/banner-image/keyboard.png":
/*!******************************************!*\
  !*** ./images/banner-image/keyboard.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/keyboard-23b516e81d81a32a26254ab6531b3ff2.png";

/***/ }),

/***/ "./images/banner-image/main-pic.png":
/*!******************************************!*\
  !*** ./images/banner-image/main-pic.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/main-pic-84672f753e38047ab6ae0428b74cf0a4.png";

/***/ }),

/***/ "./images/banner-image/man.png":
/*!*************************************!*\
  !*** ./images/banner-image/man.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/man-fc7952dee20e77f9593e00ab01c10dc6.png";

/***/ }),

/***/ "./images/banner-image/pen.png":
/*!*************************************!*\
  !*** ./images/banner-image/pen.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/banner-image/table.png":
/*!***************************************!*\
  !*** ./images/banner-image/table.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/table-63027416f1e42e45386e6ca96bac603c.png";

/***/ }),

/***/ "./images/banner-image/tea-cup.png":
/*!*****************************************!*\
  !*** ./images/banner-image/tea-cup.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/shape1.png":
/*!***************************!*\
  !*** ./images/shape1.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/shape2.svg":
/*!***************************!*\
  !*** ./images/shape2.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmb250LXNpemU6IDI1cHg7CiAgICAgICAgZmlsbDogIzI3ZWFjODsKICAgICAgICB0ZXh0LWFuY2hvcjogbWlkZGxlOwogICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDx0ZXh0IGlkPSJfIiBkYXRhLW5hbWU9IisiIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40MzcsIDEuNDM0LCAtMS40MzcsIDEuNDM0LCAtMC44MzIsIDIzLjA2NikiPjx0c3BhbiB4PSIwIj4rPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo="

/***/ }),

/***/ "./images/shape3.svg":
/*!***************************!*\
  !*** ./images/shape3.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC41NjIiIGhlaWdodD0iMjguNTk0IiB2aWV3Qm94PSIwIDAgMjguNTYyIDI4LjU5NCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMWUxZTE7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAzcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMTQuMjgxIiBjeT0iMTQuMjk3IiByPSIxMi43ODEiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./images/shape4.svg":
/*!***************************!*\
  !*** ./images/shape4.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjEgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzICg3MjUyMCkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+UGF0aCA1PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIxMDAlIiB4Mj0iNTAlIiB5Mj0iLTQ5Ljg5MTAwNzIlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMEU5MkIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0NDRkZBOCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJNYWluLUZpbGVzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjY1ODU5Mzc1Ij4KICAgICAgICA8ZyBpZD0iMDFfaW5kZXgtQWdlbmN5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMzLjAwMDAwMCwgLTU2Mi4wMDAwMDApIiBzdHJva2U9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgICAgIDxnIGlkPSJCYW5uZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNy4wMDAwMDAsIDM1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjUwMDAwMCwgMzI5LjUwMDAwMCkgcm90YXRlKC0yMjguMDAwMDAwKSB0cmFuc2xhdGUoLTEyLjUwMDAwMCwgLTMyOS41MDAwMDApICIgcG9pbnRzPSIyIDMyMyAxMi41OTgzNjA3IDMzNiAyMyAzMjMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./images/shape5.png":
/*!***************************!*\
  !*** ./images/shape5.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACSCAYAAADozTAkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTc1MUE5OUFCMTA0MTFFODlGMjdFOEIxOTJFNEM5NjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTc1MUE5OTlCMTA0MTFFODlGMjdFOEIxOTJFNEM5NjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5NzhmYzY3LThlYTktYWE0YS04MDA0LTZhOWMyNzY2ZGZkMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmNDBmNWRjLTM2NTYtNTI0Ny04ZTk3LTlmMjg3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"

/***/ }),

/***/ "./images/works-image/1.jpg":
/*!**********************************!*\
  !*** ./images/works-image/1.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-ad3c250e141382939cf0f428a127acb0.jpg";

/***/ }),

/***/ "./images/works-image/2.jpg":
/*!**********************************!*\
  !*** ./images/works-image/2.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-e9cd40279669f0a486d9ae60fec4628e.jpg";

/***/ }),

/***/ "./images/works-image/3.jpg":
/*!**********************************!*\
  !*** ./images/works-image/3.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-1a329ec9912c7da935919660c39bbf64.jpg";

/***/ }),

/***/ "./images/works-image/4.jpg":
/*!**********************************!*\
  !*** ./images/works-image/4.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/4-8c0065122ce8e605b935c42cb746a571.jpg";

/***/ }),

/***/ "./images/works-image/5.jpg":
/*!**********************************!*\
  !*** ./images/works-image/5.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/5-8b2d85812177cd414f098b07a07c790c.jpg";

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_molecular_MainBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/molecular/MainBanner */ "./components/molecular/MainBanner/index.js");
/* harmony import */ var _components_molecular_BoxArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/molecular/BoxArea */ "./components/molecular/BoxArea/index.js");
/* harmony import */ var _components_container_RecentWork__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/container/RecentWork */ "./components/container/RecentWork/index.js");
/* harmony import */ var _components_molecular_AboutArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/molecular/AboutArea */ "./components/molecular/AboutArea/index.js");
/* harmony import */ var _components_molecular_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/molecular/Contact */ "./components/molecular/Contact/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);










 // import ServicesArea from '../components/home-one/ServicesArea';



var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", null, "Remori Startup Argentina"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "description",
        content: "Platform to meet startup partners, projects and passions in Buenos Aires."
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_molecular_MainBanner__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_molecular_BoxArea__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_container_RecentWork__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_molecular_AboutArea__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_molecular_Contact__WEBPACK_IMPORTED_MODULE_10__["default"], null));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/liar/Documents/remori/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "react-reveal":
/*!*******************************!*\
  !*** external "react-reveal" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map