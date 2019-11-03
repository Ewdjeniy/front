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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/modules/modules.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/modules/button/button.css":
/*!*******************************************!*\
  !*** ./src/API/modules/button/button.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/API/modules/button/buttonModule.js":
/*!************************************************!*\
  !*** ./src/API/modules/button/buttonModule.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css */ "./src/API/modules/button/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_0__);


function dragButton(e) {
  var buttonBlockId = 'button' + getRandom();
  var module = '<div id="' + buttonBlockId + '" class="buttonBlock">' + '<div class="buttonWrapper" style="width: 600px;">' + '<div class="image_settings button_settings">' + '<span class="glyphicon glyphicon-cog buttonSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyButton"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="button"><div>КЛИКНИТЕ, ЧТОБЫ ПРОДОЛЖИТЬ!</div></div>' + '<div class="resizerTextXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  addFunctionalityToButtonElement(buttonBlockId);
}

/* harmony default export */ __webpack_exports__["default"] = (dragButton);

/***/ }),

/***/ "./src/API/modules/form/form.css":
/*!***************************************!*\
  !*** ./src/API/modules/form/form.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/API/modules/form/formModule.js":
/*!********************************************!*\
  !*** ./src/API/modules/form/formModule.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.css */ "./src/API/modules/form/form.css");
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_css__WEBPACK_IMPORTED_MODULE_0__);


function dragForm(e) {
  var formBlockId = 'form' + getRandom();
  var module = '<div id="' + formBlockId + '" class="formBlock">' + '<div class="formWrapper" style="width: 354px;">' + '<div class="image_settings form_settings">' + '<span class="glyphicon glyphicon-cog formSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyForm"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="form">' + '<form method="POST" enctype="multipart/form-data">' + '<input class="productsId" name="product_id" type="hidden">' + '<input class="inputFunnelId" type="hidden" name="funnel_id" />' + '<input class="inputFunnelStepId" type="hidden" name="funnel_step_id" />' + '<input class="payInput name" name="name" type="text" placeholder="Ваше имя">' + '<input class="payInput email" name="email" type="email" placeholder="Ваш емейл">' + '<input class="paySubmit" type="submit" value="Оформить заказ">' + '</form>' + '<div class="resizerY"></div>' + '<div class="resizerXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  var formBlockEl = document.getElementById(formBlockId);
  var inputFunnelIdEl = formBlockEl.getElementsByClassName('inputFunnelId')[0];
  var inputFunnelStepId = formBlockEl.getElementsByClassName('inputFunnelStepId')[0];
  var serverInputFunnelIdEl = document.getElementById('serverInputFunnelId');
  var serverInputFunnelStepIdEl = document.getElementById('serverInputFunnelStepId');
  inputFunnelIdEl.value = serverInputFunnelIdEl.value;
  inputFunnelStepId.value = serverInputFunnelStepIdEl.value;
  addDragAndDropToForm(formBlockId);
  addFunctionalityToFormElement(formBlockId);
}

/* harmony default export */ __webpack_exports__["default"] = (dragForm);

/***/ }),

/***/ "./src/API/modules/image/imageModule.js":
/*!**********************************************!*\
  !*** ./src/API/modules/image/imageModule.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);


function dragImage(e) {
  var imgBlockId = 'image' + getRandom();
  var imgModule = '<div id="' + imgBlockId + '" class="imageBlock">' + '<div class="imageWrapper" style="width: 350px;"><div class="image_settings">' + '<span class="glyphicon glyphicon-cog imgSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyImg"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="border" id="' + getRandom() + '">' + '<img class="img" src="https://avatars.mds.yandex.net/get-pdb/38069/9013e3ba-b082-46eb-9873-512724423a84/s1200?webp=false" alt="image">' + '<input class="imgProportion" type="hidden" value="1">' + '</div>' + '<div class="resizerY"></div>' + '<div class="resizerXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>';
  $(e.item).replaceWith(imgModule);
  addFunctionalityToElement(imgBlockId);
}

/* harmony default export */ __webpack_exports__["default"] = (dragImage);

/***/ }),

/***/ "./src/API/modules/line/line.css":
/*!***************************************!*\
  !*** ./src/API/modules/line/line.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/API/modules/line/lineModule.js":
/*!********************************************!*\
  !*** ./src/API/modules/line/lineModule.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line.css */ "./src/API/modules/line/line.css");
/* harmony import */ var _line_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_line_css__WEBPACK_IMPORTED_MODULE_0__);


function dragLine(e) {
  var lineBlockId = 'line' + getRandom();
  var module = '<div id="' + lineBlockId + '" class="lineBlock">' + '<div class="lineWrapper" style="width: 300px;">' + '<div class="image_settings line_settings">' + '<span class="glyphicon glyphicon-cog lineSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyLine"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<hr class="line">' + '<div class="resizerX"></div>' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  addFunctionalityToLineElement(lineBlockId);
}

function addFunctionalityToLineElement(id) {
  var lineBlockElem = document.getElementById(id);
  var lineWrapperElem = lineBlockElem.getElementsByClassName('lineWrapper')[0];
  var lineSettings = lineBlockElem.getElementsByClassName('image_settings')[0];
  var resizerX_Elem = lineBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = lineBlockElem.getElementsByClassName('glyphicon')[0];
  var arrowLeftElem = lineBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowCenterElem = lineBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowRightElem = lineBlockElem.getElementsByClassName('glyphicon')[3];
  var lineCopyElem = lineBlockElem.getElementsByClassName('glyphicon')[4];
  var lineDeleteElem = lineBlockElem.getElementsByClassName('glyphicon')[5];
  var lineElem = lineBlockElem.getElementsByClassName('line')[0]; //Сохранение анонимных функций в переменных (для removeEventlinener)

  var imgHover = function imgHover() {
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function imgChangeBorderToZero() {
    resizerX_Elem.style.visibility = 'hidden';
  };

  var resizeX = function resizeX() {
    if (getComputedStyle(lineBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(lineBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(lineBlockElem).justifyContent == 'flex-end') {
      lineWrapperElem.style.width = lineWrapperElem.getBoundingClientRect().left + lineWrapperElem.getBoundingClientRect().width - event.clientX + 'px';
    } else {
      lineWrapperElem.style.width = event.clientX - lineWrapperElem.getBoundingClientRect().left + 'px';
    }
  };

  var finishResizeX = function finishResizeX() {
    if (event.clientX < lineWrapperElem.getBoundingClientRect().left || event.clientX > lineWrapperElem.getBoundingClientRect().left + lineWrapperElem.getBoundingClientRect().width || event.clientY < lineWrapperElem.getBoundingClientRect().top || event.clientY > lineWrapperElem.getBoundingClientRect().top + lineWrapperElem.getBoundingClientRect().height) {
      imgChangeBorderToZero();
    }

    lineWrapperElem.addEventListener('mouseover', imgHover);
    lineWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeX);
    document.removeEventListener('mouseup', finishResizeX);
    makePreview();
  }; //Обработчики событий


  lineWrapperElem.addEventListener('mouseover', imgHover);
  lineWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);

  resizerX_Elem.onmousedown = function () {
    lineWrapperElem.removeEventListener('mouseover', imgHover);
    lineWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', finishResizeX);
    return false;
  };

  arrowLeftElem.onclick = function () {
    lineBlockElem.style["-webkit-box-pack"] = 'start';
    lineBlockElem.style["-ms-flex-pack"] = 'start';
    lineBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    makePreview();
  };

  arrowCenterElem.onclick = function () {
    lineBlockElem.style["-webkit-box-pack"] = 'center';
    lineBlockElem.style["-ms-flex-pack"] = 'center';
    lineBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    makePreview();
  };

  arrowRightElem.onclick = function () {
    lineBlockElem.style["-webkit-box-pack"] = 'end';
    lineBlockElem.style["-ms-flex-pack"] = 'end';
    lineBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    makePreview();
  };

  lineDeleteElem.onclick = function () {
    lineBlockElem.remove();
    makePreview();
  };
}

/* harmony default export */ __webpack_exports__["default"] = (dragLine);

/***/ }),

/***/ "./src/API/modules/list/list.css":
/*!***************************************!*\
  !*** ./src/API/modules/list/list.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/API/modules/list/listModule.js":
/*!********************************************!*\
  !*** ./src/API/modules/list/listModule.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.css */ "./src/API/modules/list/list.css");
/* harmony import */ var _list_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_list_css__WEBPACK_IMPORTED_MODULE_0__);


function dragList(e) {
  var listBlockId = 'list' + getRandom();
  var module = '<div id="' + listBlockId + '" class="listBlock">' + '<div class="listWrapper" style="width: 300px;">' + '<div class="image_settings list_settings">' + '<span class="glyphicon glyphicon-cog listSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyList"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<ul class="list">' + '<li><span>Первое преимущество</span></li>' + '<li>Второе преимущество</li>' + '<li>Третье преимущество</li>' + '</ul>' + '<div class="resizerTextXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  addFunctionalityToListElement(listBlockId);
}

/* harmony default export */ __webpack_exports__["default"] = (dragList);

/***/ }),

/***/ "./src/API/modules/modules.js":
/*!************************************!*\
  !*** ./src/API/modules/modules.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_imageModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/imageModule.js */ "./src/API/modules/image/imageModule.js");
/* harmony import */ var _video_videoModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video/videoModule.js */ "./src/API/modules/video/videoModule.js");
/* harmony import */ var _text_textModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text/textModule.js */ "./src/API/modules/text/textModule.js");
/* harmony import */ var _button_buttonModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/buttonModule.js */ "./src/API/modules/button/buttonModule.js");
/* harmony import */ var _form_formModule_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/formModule.js */ "./src/API/modules/form/formModule.js");
/* harmony import */ var _subscribe_subscribeModule_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribe/subscribeModule.js */ "./src/API/modules/subscribe/subscribeModule.js");
/* harmony import */ var _list_listModule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/listModule.js */ "./src/API/modules/list/listModule.js");
/* harmony import */ var _line_lineModule_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./line/lineModule.js */ "./src/API/modules/line/lineModule.js");







 //Драг н дроп модулей

Sortable.create(Modules, {
  group: {
    name: 'content-selector',
    pull: 'clone',
    put: false
  },
  sort: false,
  animation: 150,
  emptyInsertThreshold: 1,
  ghostClass: 'green-background-class',
  onStart: function onStart(e) {
    var el = Modules;
    $('.handle').css('display', 'none');
    $('.main-selector').each(function (ind, el) {
      $(el).find('> .content:not(:last)').addClass('border-hover');
    });
    $('.content-selector').each(function (ind, el) {
      $(el).find('> .content:not(:last)').addClass('border-hover-content');
    });
    $('.block-settings').css('display', 'none');
  },
  onEnd: function onEnd(e) {
    /*Разместить*/
    $('.border-hover').removeClass('border-hover');
    $('.border-hover-content').removeClass('border-hover-content');
    $('.handle').css('display', 'block');

    if (e.target != e.to) {
      switch (e.item.id) {
        case 'image':
          Object(_image_imageModule_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e);
          break;

        case 'video':
          Object(_video_videoModule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e);
          break;

        case 'text':
          Object(_text_textModule_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
          break;

        case 'button':
          Object(_button_buttonModule_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e);
          break;

        case 'payForm':
          Object(_form_formModule_js__WEBPACK_IMPORTED_MODULE_4__["default"])(e);
          break;

        case 'subscribeForm':
          Object(_subscribe_subscribeModule_js__WEBPACK_IMPORTED_MODULE_5__["default"])(e);
          break;

        case 'list':
          Object(_list_listModule_js__WEBPACK_IMPORTED_MODULE_6__["default"])(e);
          break;

        case 'line':
          Object(_line_lineModule_js__WEBPACK_IMPORTED_MODULE_7__["default"])(e);
          break;
      }

      makePreview();
    }

    $('.handle').resizer();
    $('.resizer').resizer_s();
    $('.block-resizer').block_resizer();
    $('.block-settings').show();
  }
});

/***/ }),

/***/ "./src/API/modules/subscribe/subscribe.css":
/*!*************************************************!*\
  !*** ./src/API/modules/subscribe/subscribe.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/API/modules/subscribe/subscribeModule.js":
/*!******************************************************!*\
  !*** ./src/API/modules/subscribe/subscribeModule.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscribe_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribe.css */ "./src/API/modules/subscribe/subscribe.css");
/* harmony import */ var _subscribe_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_subscribe_css__WEBPACK_IMPORTED_MODULE_0__);


function dragSubscribe(e) {
  var subscribeBlockId = 'subscribe' + getRandom();
  var module = '<div id="' + subscribeBlockId + '" class="subscribeBlock">' + '<div class="subscribeWrapper" style="width: 300px;">' + '<div class="image_settings subscribe_settings">' + '<span class="glyphicon glyphicon glyphicon-move"></span>' + '<span class="glyphicon glyphicon-cog subscribeSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copySubscribe"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="subscribe">' + '<div class="formCodeWrapper">' + '<form class="subscribeForm" method="POST" enctype="multipart/form-data">' + '<input autocomplete="off" class="subscribeInput name" name="name" type="text" placeholder="Ваше имя">' + '<input autocomplete="off" class="subscribeInput email" name="email" type="email" placeholder="Ваш емейл">' + '<div class="submitWrapper">' + '<button class="subscribeSubmit" type="submit">ПОДПИСАТЬСЯ</button>' + '</div>' + '</form>' + '</div>' + '<div class="deliveryCode"></div>' + '<div class="resizerTextXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  addDragAndDropToForm(subscribeBlockId);
  addFunctionalityToSubscribeElement(subscribeBlockId);
}

/* harmony default export */ __webpack_exports__["default"] = (dragSubscribe);

/***/ }),

/***/ "./src/API/modules/text/text.css":
/*!***************************************!*\
  !*** ./src/API/modules/text/text.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/API/modules/text/textModule.js":
/*!********************************************!*\
  !*** ./src/API/modules/text/textModule.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.css */ "./src/API/modules/text/text.css");
/* harmony import */ var _text_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_text_css__WEBPACK_IMPORTED_MODULE_0__);


function dragText(e) {
  var textBlockId = 'text' + getRandom();
  var module = '<div id="' + textBlockId + '" class="textBlock">' + '<div class="textWrapper" style="width: 100%;">' + '<div class="image_settings text_settings">' + '<span class="glyphicon glyphicon-cog textSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyText"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="text-editor">' + '<div class="text-editor-panel">' + '<span class="glyphicon glyphicon-bold bold" title="Полужирный"></span>' + '<span class="glyphicon glyphicon-italic ital" title="Курсив"></span>' + '<span class="under" title="Подчеркнутый">U</span>' + '<span class="through" title="Зачёркнутый">S</span>' + '<span class="glyphicon glyphicon-link textLink" title="Вставить ссылку"></span>' + '<span class="glyphicon glyphicon-align-left left" title="Выровнять по левому краю"></span>' + '<span class="glyphicon glyphicon-align-center center" title="Выровнять по центру"></span>' + '<span class="glyphicon glyphicon-align-justify justify" title="Выровнять текст по ширине"></span>' + '<span class="glyphicon glyphicon-align-right right" title="Выровнять по правому краю"></span>' + '</div>' + '</div>' + '<div class="text">Text example<br>Пример текста</div>' + '<div class="resizerTextXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  addFunctionalityToTextElement(textBlockId);
}

/* harmony default export */ __webpack_exports__["default"] = (dragText);

/***/ }),

/***/ "./src/API/modules/video/video.css":
/*!*****************************************!*\
  !*** ./src/API/modules/video/video.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/API/modules/video/videoModule.js":
/*!**********************************************!*\
  !*** ./src/API/modules/video/videoModule.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.css */ "./src/API/modules/video/video.css");
/* harmony import */ var _video_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_video_css__WEBPACK_IMPORTED_MODULE_0__);


function dragVideo(e) {
  var videoBlockId = 'video' + getRandom();
  var videoModule = '<div id="' + videoBlockId + '" class="videoBlock">' + '<div class="imageWrapper videoWrapper" style="width: 600px;">' + '<div class="image_settings">' + '<span class="glyphicon glyphicon-cog videoSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyVideo"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="border" id="' + getRandom() + '">' + '<img class="videoimg img" src="http://member.5lives.ru/wp-content/plugins/instabuilder2/assets/img/video-placeholder.png" alt="image">' + '<input class="imgProportion" type="hidden" value="1">' + '<div class="iframeWrapper">' + '<iframe class="video" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' + '<img class="noVideo" src="https://im0-tub-ru.yandex.net/i?id=7b10531c523d501dcffb99398ea80fe0-l&n=13" alt="video">' + '</div>' + '<div class="resizerY"></div>' + '<div class="resizerXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>';
  $(e.item).replaceWith(videoModule);
  addFunctionalityToElement(videoBlockId);
}

/* harmony default export */ __webpack_exports__["default"] = (dragVideo);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL2J1dHRvbi9idXR0b24uY3NzPzRjYWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL2J1dHRvbi9idXR0b25Nb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL2Zvcm0vZm9ybS5jc3M/NDI3NCIsIndlYnBhY2s6Ly8vLi9zcmMvQVBJL21vZHVsZXMvZm9ybS9mb3JtTW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9BUEkvbW9kdWxlcy9pbWFnZS9pbWFnZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQVBJL21vZHVsZXMvbGluZS9saW5lLmNzcz8wMjkwIiwid2VicGFjazovLy8uL3NyYy9BUEkvbW9kdWxlcy9saW5lL2xpbmVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL2xpc3QvbGlzdC5jc3M/MmIzMyIsIndlYnBhY2s6Ly8vLi9zcmMvQVBJL21vZHVsZXMvbGlzdC9saXN0TW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9BUEkvbW9kdWxlcy9tb2R1bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9BUEkvbW9kdWxlcy9zdWJzY3JpYmUvc3Vic2NyaWJlLmNzcz81YTg4Iiwid2VicGFjazovLy8uL3NyYy9BUEkvbW9kdWxlcy9zdWJzY3JpYmUvc3Vic2NyaWJlTW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9BUEkvbW9kdWxlcy90ZXh0L3RleHQuY3NzPzY4YTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL3RleHQvdGV4dE1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQVBJL21vZHVsZXMvdmlkZW8vdmlkZW8uY3NzPzk3MGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL3ZpZGVvL3ZpZGVvTW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/ODFkOSJdLCJuYW1lcyI6WyJkcmFnQnV0dG9uIiwiZSIsImJ1dHRvbkJsb2NrSWQiLCJnZXRSYW5kb20iLCJtb2R1bGUiLCIkIiwiaXRlbSIsInJlcGxhY2VXaXRoIiwiYWRkRnVuY3Rpb25hbGl0eVRvQnV0dG9uRWxlbWVudCIsImRyYWdGb3JtIiwiZm9ybUJsb2NrSWQiLCJmb3JtQmxvY2tFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnB1dEZ1bm5lbElkRWwiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5wdXRGdW5uZWxTdGVwSWQiLCJzZXJ2ZXJJbnB1dEZ1bm5lbElkRWwiLCJzZXJ2ZXJJbnB1dEZ1bm5lbFN0ZXBJZEVsIiwidmFsdWUiLCJhZGREcmFnQW5kRHJvcFRvRm9ybSIsImFkZEZ1bmN0aW9uYWxpdHlUb0Zvcm1FbGVtZW50IiwiZHJhZ0ltYWdlIiwiaW1nQmxvY2tJZCIsImltZ01vZHVsZSIsImFkZEZ1bmN0aW9uYWxpdHlUb0VsZW1lbnQiLCJkcmFnTGluZSIsImxpbmVCbG9ja0lkIiwiYWRkRnVuY3Rpb25hbGl0eVRvTGluZUVsZW1lbnQiLCJpZCIsImxpbmVCbG9ja0VsZW0iLCJsaW5lV3JhcHBlckVsZW0iLCJsaW5lU2V0dGluZ3MiLCJyZXNpemVyWF9FbGVtIiwiYmxvY2tTZXR0aW5nc0VsZW0iLCJhcnJvd0xlZnRFbGVtIiwiYXJyb3dDZW50ZXJFbGVtIiwiYXJyb3dSaWdodEVsZW0iLCJsaW5lQ29weUVsZW0iLCJsaW5lRGVsZXRlRWxlbSIsImxpbmVFbGVtIiwiaW1nSG92ZXIiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJpbWdDaGFuZ2VCb3JkZXJUb1plcm8iLCJyZXNpemVYIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwiZXZlbnQiLCJjbGllbnRYIiwiZmluaXNoUmVzaXplWCIsImNsaWVudFkiLCJ0b3AiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1ha2VQcmV2aWV3Iiwib25tb3VzZWRvd24iLCJvbmNsaWNrIiwibWFyZ2luTGVmdCIsInJlbW92ZSIsImRyYWdMaXN0IiwibGlzdEJsb2NrSWQiLCJhZGRGdW5jdGlvbmFsaXR5VG9MaXN0RWxlbWVudCIsIlNvcnRhYmxlIiwiY3JlYXRlIiwiTW9kdWxlcyIsImdyb3VwIiwibmFtZSIsInB1bGwiLCJwdXQiLCJzb3J0IiwiYW5pbWF0aW9uIiwiZW1wdHlJbnNlcnRUaHJlc2hvbGQiLCJnaG9zdENsYXNzIiwib25TdGFydCIsImVsIiwiY3NzIiwiZWFjaCIsImluZCIsImZpbmQiLCJhZGRDbGFzcyIsIm9uRW5kIiwicmVtb3ZlQ2xhc3MiLCJ0YXJnZXQiLCJ0byIsImRyYWdWaWRlbyIsImRyYWdUZXh0IiwiZHJhZ1N1YnNjcmliZSIsInJlc2l6ZXIiLCJyZXNpemVyX3MiLCJibG9ja19yZXNpemVyIiwic2hvdyIsInN1YnNjcmliZUJsb2NrSWQiLCJhZGRGdW5jdGlvbmFsaXR5VG9TdWJzY3JpYmVFbGVtZW50IiwidGV4dEJsb2NrSWQiLCJhZGRGdW5jdGlvbmFsaXR5VG9UZXh0RWxlbWVudCIsInZpZGVvQmxvY2tJZCIsInZpZGVvTW9kdWxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFF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Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTRCxTQUFULENBQW1CeEYsQ0FBbkIsRUFBc0I7QUFDcEIsTUFBTW1HLFlBQVksR0FBRyxVQUFVakcsU0FBUyxFQUF4QztBQUNBLE1BQUlrRyxXQUFXLEdBQUcsY0FBY0QsWUFBZCxHQUE2Qix1QkFBN0IsR0FDUSwrREFEUixHQUVVLDhCQUZWLEdBR0osd0RBSEksR0FJYyxzREFKZCxHQUtjLHdEQUxkLEdBTWMsdURBTmQsR0FPViwrREFQVSxHQVFWLGtEQVJVLEdBU1UsUUFUVixHQVVVLDBCQVZWLEdBVXVDakcsU0FBUyxFQVZoRCxHQVVxRCxJQVZyRCxHQVdZLHdJQVhaLEdBWVksdURBWlosR0FhWSw2QkFiWixHQWNjLDRQQWRkLEdBZWMsb0hBZmQsR0FnQlksUUFoQlosR0FpQlUsOEJBakJWLEdBa0JVLCtCQWxCVixHQW1CVSw4QkFuQlYsR0FvQlEsUUFwQlIsR0FxQk0sUUFyQnhCO0FBc0JBRSxHQUFDLENBQUNKLENBQUMsQ0FBQ0ssSUFBSCxDQUFELENBQVVDLFdBQVYsQ0FBc0I4RixXQUF0QjtBQUVBNUUsMkJBQXlCLENBQUMyRSxZQUFELENBQXpCO0FBQ0Q7O0FBTWNYLHdFQUFmLEU7Ozs7Ozs7Ozs7O0FDbkNBLHVDIiwiZmlsZSI6Im1vZHVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9BUEkvbW9kdWxlcy9tb2R1bGVzLmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2J1dHRvbi5jc3MnO1xyXG5cclxuZnVuY3Rpb24gZHJhZ0J1dHRvbihlKSB7XHJcbiAgY29uc3QgYnV0dG9uQmxvY2tJZCA9ICdidXR0b24nICsgZ2V0UmFuZG9tKCk7XHJcbiAgY29uc3QgbW9kdWxlID0gJzxkaXYgaWQ9XCInICsgYnV0dG9uQmxvY2tJZCArICdcIiBjbGFzcz1cImJ1dHRvbkJsb2NrXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYnV0dG9uV3JhcHBlclwiIHN0eWxlPVwid2lkdGg6IDYwMHB4O1wiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaW1hZ2Vfc2V0dGluZ3MgYnV0dG9uX3NldHRpbmdzXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNvZyBidXR0b25TZXRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWxlZnRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWFsaWduLWNlbnRlclwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctcmlnaHRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWR1cGxpY2F0ZSBjb3B5QnV0dG9uXCI+PC9zcGFuPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYnV0dG9uXCI+PGRpdj7QmtCb0JjQmtCd0JjQotCVLCDQp9Ci0J7QkdCrINCf0KDQntCU0J7Qm9CW0JjQotCsITwvZGl2PjwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVzaXplclRleHRYWVwiPjwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVzaXplclhcIj48L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAnPC9kaXY+J1xyXG4gICQoZS5pdGVtKS5yZXBsYWNlV2l0aChtb2R1bGUpO1xyXG4gIGFkZEZ1bmN0aW9uYWxpdHlUb0J1dHRvbkVsZW1lbnQoYnV0dG9uQmxvY2tJZCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcmFnQnV0dG9uO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vZm9ybS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gZHJhZ0Zvcm0oZSkge1xyXG4gIGNvbnN0IGZvcm1CbG9ja0lkID0gJ2Zvcm0nICsgZ2V0UmFuZG9tKCk7XHJcbiAgY29uc3QgbW9kdWxlID0gJzxkaXYgaWQ9XCInICsgZm9ybUJsb2NrSWQgKyAnXCIgY2xhc3M9XCJmb3JtQmxvY2tcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmb3JtV3JhcHBlclwiIHN0eWxlPVwid2lkdGg6IDM1NHB4O1wiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaW1hZ2Vfc2V0dGluZ3MgZm9ybV9zZXR0aW5nc1wiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jb2cgZm9ybVNldFwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctbGVmdFwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYWxpZ24tY2VudGVyXCI+PC9zcGFuPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1yaWdodFwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZHVwbGljYXRlIGNvcHlGb3JtXCI+PC9zcGFuPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZm9ybVwiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxmb3JtIG1ldGhvZD1cIlBPU1RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGlucHV0IGNsYXNzPVwicHJvZHVjdHNJZFwiIG5hbWU9XCJwcm9kdWN0X2lkXCIgdHlwZT1cImhpZGRlblwiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGlucHV0IGNsYXNzPVwiaW5wdXRGdW5uZWxJZFwiIHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZnVubmVsX2lkXCIgLz4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCBjbGFzcz1cImlucHV0RnVubmVsU3RlcElkXCIgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmdW5uZWxfc3RlcF9pZFwiIC8+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW5wdXQgY2xhc3M9XCJwYXlJbnB1dCBuYW1lXCIgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQsNGI0LUg0LjQvNGPXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW5wdXQgY2xhc3M9XCJwYXlJbnB1dCBlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwi0JLQsNGIINC10LzQtdC50LtcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCBjbGFzcz1cInBheVN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cItCe0YTQvtGA0LzQuNGC0Ywg0LfQsNC60LDQt1wiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZm9ybT4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVzaXplcllcIj48L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVzaXplclhZXCI+PC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInJlc2l6ZXJYXCI+PC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgJChlLml0ZW0pLnJlcGxhY2VXaXRoKG1vZHVsZSk7XHJcbiAgXHJcbiAgY29uc3QgZm9ybUJsb2NrRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtQmxvY2tJZCk7XHJcbiAgY29uc3QgaW5wdXRGdW5uZWxJZEVsID0gZm9ybUJsb2NrRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5wdXRGdW5uZWxJZCcpWzBdO1xyXG4gIGNvbnN0IGlucHV0RnVubmVsU3RlcElkID0gZm9ybUJsb2NrRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5wdXRGdW5uZWxTdGVwSWQnKVswXTtcclxuICBjb25zdCBzZXJ2ZXJJbnB1dEZ1bm5lbElkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VydmVySW5wdXRGdW5uZWxJZCcpO1xyXG4gIGNvbnN0IHNlcnZlcklucHV0RnVubmVsU3RlcElkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VydmVySW5wdXRGdW5uZWxTdGVwSWQnKTtcclxuICBcclxuICBpbnB1dEZ1bm5lbElkRWwudmFsdWUgPSBzZXJ2ZXJJbnB1dEZ1bm5lbElkRWwudmFsdWU7XHJcbiAgaW5wdXRGdW5uZWxTdGVwSWQudmFsdWUgPSBzZXJ2ZXJJbnB1dEZ1bm5lbFN0ZXBJZEVsLnZhbHVlO1xyXG4gIFxyXG4gIGFkZERyYWdBbmREcm9wVG9Gb3JtKGZvcm1CbG9ja0lkKTtcclxuICBcclxuICBhZGRGdW5jdGlvbmFsaXR5VG9Gb3JtRWxlbWVudChmb3JtQmxvY2tJZCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcmFnRm9ybTsiLCJpbXBvcnQgJy4uLy4uLy4uL2luZGV4LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBkcmFnSW1hZ2UoZSkge1xyXG4gIHZhciBpbWdCbG9ja0lkID0gJ2ltYWdlJyArIGdldFJhbmRvbSgpO1xyXG4gIHZhciBpbWdNb2R1bGUgPSAnPGRpdiBpZD1cIicgKyBpbWdCbG9ja0lkICsgJ1wiIGNsYXNzPVwiaW1hZ2VCbG9ja1wiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImltYWdlV3JhcHBlclwiIHN0eWxlPVwid2lkdGg6IDM1MHB4O1wiPjxkaXYgY2xhc3M9XCJpbWFnZV9zZXR0aW5nc1wiPicrXHJcblx0XHRcdFx0XHRcdCAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNvZyBpbWdTZXRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctbGVmdFwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1hbGlnbi1jZW50ZXJcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctcmlnaHRcIj48L3NwYW4+JytcclxuXHRcdFx0XHRcdFx0XHRcdCAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1kdXBsaWNhdGUgY29weUltZ1wiPjwvc3Bhbj4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJib3JkZXJcIiBpZD1cIicgKyBnZXRSYW5kb20oKSArICdcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW1nIGNsYXNzPVwiaW1nXCIgc3JjPVwiaHR0cHM6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2dldC1wZGIvMzgwNjkvOTAxM2UzYmEtYjA4Mi00NmViLTk4NzMtNTEyNzI0NDIzYTg0L3MxMjAwP3dlYnA9ZmFsc2VcIiBhbHQ9XCJpbWFnZVwiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCBjbGFzcz1cImltZ1Byb3BvcnRpb25cIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIxXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVzaXplcllcIj48L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInJlc2l6ZXJYWVwiPjwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVzaXplclhcIj48L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcblxyXG4gICQoZS5pdGVtKS5yZXBsYWNlV2l0aChpbWdNb2R1bGUpO1xyXG5cclxuICBhZGRGdW5jdGlvbmFsaXR5VG9FbGVtZW50KGltZ0Jsb2NrSWQpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcmFnSW1hZ2U7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2xpbmUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGRyYWdMaW5lKGUpIHtcclxuICBjb25zdCBsaW5lQmxvY2tJZCA9ICdsaW5lJyArIGdldFJhbmRvbSgpO1xyXG4gIGNvbnN0IG1vZHVsZSA9ICc8ZGl2IGlkPVwiJyArIGxpbmVCbG9ja0lkICsgJ1wiIGNsYXNzPVwibGluZUJsb2NrXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGluZVdyYXBwZXJcIiBzdHlsZT1cIndpZHRoOiAzMDBweDtcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImltYWdlX3NldHRpbmdzIGxpbmVfc2V0dGluZ3NcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY29nIGxpbmVTZXRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWxlZnRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWFsaWduLWNlbnRlclwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctcmlnaHRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWR1cGxpY2F0ZSBjb3B5TGluZVwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXCI+PC9zcGFuPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGhyIGNsYXNzPVwibGluZVwiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVzaXplclhcIj48L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAnPC9kaXY+J1xyXG4gICQoZS5pdGVtKS5yZXBsYWNlV2l0aChtb2R1bGUpO1xyXG4gIFxyXG4gIGFkZEZ1bmN0aW9uYWxpdHlUb0xpbmVFbGVtZW50KGxpbmVCbG9ja0lkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRnVuY3Rpb25hbGl0eVRvTGluZUVsZW1lbnQoaWQpIHtcclxuICB2YXIgbGluZUJsb2NrRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICB2YXIgbGluZVdyYXBwZXJFbGVtID0gbGluZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaW5lV3JhcHBlcicpWzBdO1xyXG4gIHZhciBsaW5lU2V0dGluZ3MgPSBsaW5lQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlX3NldHRpbmdzJylbMF07XHJcbiAgdmFyIHJlc2l6ZXJYX0VsZW0gPSBsaW5lQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc2l6ZXJYJylbMF07XHJcbiAgdmFyIGJsb2NrU2V0dGluZ3NFbGVtID0gbGluZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnbHlwaGljb24nKVswXTtcclxuICB2YXIgYXJyb3dMZWZ0RWxlbSA9IGxpbmVCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2x5cGhpY29uJylbMV07XHJcbiAgdmFyIGFycm93Q2VudGVyRWxlbSA9IGxpbmVCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2x5cGhpY29uJylbMl07XHJcbiAgdmFyIGFycm93UmlnaHRFbGVtID0gbGluZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnbHlwaGljb24nKVszXTtcclxuICB2YXIgbGluZUNvcHlFbGVtID0gbGluZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnbHlwaGljb24nKVs0XTtcclxuICB2YXIgbGluZURlbGV0ZUVsZW0gPSBsaW5lQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dseXBoaWNvbicpWzVdO1xyXG4gIHZhciBsaW5lRWxlbSA9IGxpbmVCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGluZScpWzBdO1xyXG5cclxuXHJcbiAgLy/QodC+0YXRgNCw0L3QtdC90LjQtSDQsNC90L7QvdC40LzQvdGL0YUg0YTRg9C90LrRhtC40Lkg0LIg0L/QtdGA0LXQvNC10L3QvdGL0YUgKNC00LvRjyByZW1vdmVFdmVudGxpbmVuZXIpXHJcbiAgdmFyIGltZ0hvdmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmVzaXplclhfRWxlbS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gIH07XHJcblxyXG4gIHZhciBpbWdDaGFuZ2VCb3JkZXJUb1plcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXNpemVyWF9FbGVtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICB9O1xyXG5cclxuICB2YXIgcmVzaXplWCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChcclxuICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShsaW5lQmxvY2tFbGVtKVtcIi13ZWJraXQtYm94LXBhY2tcIl0gPT0gJ2VuZCcgfHxcclxuICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShsaW5lQmxvY2tFbGVtKVtcIi1tcy1mbGV4LXBhY2tcIl0gPT0gJ2VuZCcgfHxcclxuICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShsaW5lQmxvY2tFbGVtKS5qdXN0aWZ5Q29udGVudCA9PSAnZmxleC1lbmQnXHJcbiAgICApIHtcclxuICAgICAgbGluZVdyYXBwZXJFbGVtLnN0eWxlLndpZHRoID0gKGxpbmVXcmFwcGVyRWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgbGluZVdyYXBwZXJFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gZXZlbnQuY2xpZW50WCkgKyAncHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGluZVdyYXBwZXJFbGVtLnN0eWxlLndpZHRoID0gKGV2ZW50LmNsaWVudFggLSBsaW5lV3JhcHBlckVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgKyAncHgnO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciBmaW5pc2hSZXNpemVYID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICBldmVudC5jbGllbnRYIDwgbGluZVdyYXBwZXJFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgfHxcclxuICAgICAgZXZlbnQuY2xpZW50WCA+IGxpbmVXcmFwcGVyRWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgbGluZVdyYXBwZXJFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHx8XHJcbiAgICAgIGV2ZW50LmNsaWVudFkgPCBsaW5lV3JhcHBlckVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIHx8XHJcbiAgICAgIGV2ZW50LmNsaWVudFkgPiBsaW5lV3JhcHBlckVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgbGluZVdyYXBwZXJFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIGltZ0NoYW5nZUJvcmRlclRvWmVybygpO1xyXG4gICAgfVxyXG4gICAgbGluZVdyYXBwZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGltZ0hvdmVyKTtcclxuICAgIGxpbmVXcmFwcGVyRWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGltZ0NoYW5nZUJvcmRlclRvWmVybyk7XHJcbiAgICByZXNpemVyWF9FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGltZ0hvdmVyKTtcclxuICAgIHJlc2l6ZXJYX0VsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBpbWdDaGFuZ2VCb3JkZXJUb1plcm8pO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcmVzaXplWCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZmluaXNoUmVzaXplWCk7XHJcblx0bWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG4gIC8v0J7QsdGA0LDQsdC+0YLRh9C40LrQuCDRgdC+0LHRi9GC0LjQuVxyXG4gIGxpbmVXcmFwcGVyRWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBpbWdIb3Zlcik7XHJcbiAgbGluZVdyYXBwZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaW1nQ2hhbmdlQm9yZGVyVG9aZXJvKTtcclxuICByZXNpemVyWF9FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGltZ0hvdmVyKTtcclxuICByZXNpemVyWF9FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaW1nQ2hhbmdlQm9yZGVyVG9aZXJvKTtcclxuXHJcbiAgcmVzaXplclhfRWxlbS5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxpbmVXcmFwcGVyRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBpbWdIb3Zlcik7XHJcbiAgICBsaW5lV3JhcHBlckVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBpbWdDaGFuZ2VCb3JkZXJUb1plcm8pO1xyXG4gICAgcmVzaXplclhfRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBpbWdIb3Zlcik7XHJcbiAgICByZXNpemVyWF9FbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaW1nQ2hhbmdlQm9yZGVyVG9aZXJvKTtcclxuICAgIGltZ0hvdmVyKCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCByZXNpemVYKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hSZXNpemVYKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG4gIFxyXG4gIGFycm93TGVmdEVsZW0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxpbmVCbG9ja0VsZW0uc3R5bGVbXCItd2Via2l0LWJveC1wYWNrXCJdID0gJ3N0YXJ0JztcclxuICAgIGxpbmVCbG9ja0VsZW0uc3R5bGVbXCItbXMtZmxleC1wYWNrXCJdID0gJ3N0YXJ0JztcclxuICAgIGxpbmVCbG9ja0VsZW0uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XHJcbiAgICByZXNpemVyWF9FbGVtLnN0eWxlLmxlZnQgPSAnMTAwJSc7XHJcbiAgICByZXNpemVyWF9FbGVtLnN0eWxlLm1hcmdpbkxlZnQgPSAnLTEuMXJlbSc7XHJcblx0bWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG4gIGFycm93Q2VudGVyRWxlbS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGluZUJsb2NrRWxlbS5zdHlsZVtcIi13ZWJraXQtYm94LXBhY2tcIl0gPSAnY2VudGVyJztcclxuICAgIGxpbmVCbG9ja0VsZW0uc3R5bGVbXCItbXMtZmxleC1wYWNrXCJdID0gJ2NlbnRlcic7XHJcbiAgICBsaW5lQmxvY2tFbGVtLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XHJcbiAgICByZXNpemVyWF9FbGVtLnN0eWxlLmxlZnQgPSAnMTAwJSc7XHJcbiAgICByZXNpemVyWF9FbGVtLnN0eWxlLm1hcmdpbkxlZnQgPSAnLTEuMXJlbSc7XHJcblx0bWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG4gIGFycm93UmlnaHRFbGVtLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaW5lQmxvY2tFbGVtLnN0eWxlW1wiLXdlYmtpdC1ib3gtcGFja1wiXSA9ICdlbmQnO1xyXG4gICAgbGluZUJsb2NrRWxlbS5zdHlsZVtcIi1tcy1mbGV4LXBhY2tcIl0gPSAnZW5kJztcclxuICAgIGxpbmVCbG9ja0VsZW0uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1lbmQnO1xyXG4gICAgcmVzaXplclhfRWxlbS5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgcmVzaXplclhfRWxlbS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xyXG5cdG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICBsaW5lRGVsZXRlRWxlbS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGluZUJsb2NrRWxlbS5yZW1vdmUoKTtcclxuXHRtYWtlUHJldmlldygpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJhZ0xpbmU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2xpc3QuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGRyYWdMaXN0KGUpIHtcclxuICBjb25zdCBsaXN0QmxvY2tJZCA9ICdsaXN0JyArIGdldFJhbmRvbSgpO1xyXG4gIGNvbnN0IG1vZHVsZSA9ICc8ZGl2IGlkPVwiJyArIGxpc3RCbG9ja0lkICsgJ1wiIGNsYXNzPVwibGlzdEJsb2NrXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGlzdFdyYXBwZXJcIiBzdHlsZT1cIndpZHRoOiAzMDBweDtcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImltYWdlX3NldHRpbmdzIGxpc3Rfc2V0dGluZ3NcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY29nIGxpc3RTZXRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWxlZnRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWFsaWduLWNlbnRlclwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctcmlnaHRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWR1cGxpY2F0ZSBjb3B5TGlzdFwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXCI+PC9zcGFuPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8dWwgY2xhc3M9XCJsaXN0XCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8bGk+PHNwYW4+0J/QtdGA0LLQvtC1INC/0YDQtdC40LzRg9GJ0LXRgdGC0LLQvjwvc3Bhbj48L2xpPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGxpPtCS0YLQvtGA0L7QtSDQv9GA0LXQuNC80YPRidC10YHRgtCy0L48L2xpPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGxpPtCi0YDQtdGC0YzQtSDQv9GA0LXQuNC80YPRidC10YHRgtCy0L48L2xpPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvdWw+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInJlc2l6ZXJUZXh0WFlcIj48L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVzaXplclhcIj48L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgJzwvZGl2PidcclxuICAkKGUuaXRlbSkucmVwbGFjZVdpdGgobW9kdWxlKTtcclxuICBcclxuICBhZGRGdW5jdGlvbmFsaXR5VG9MaXN0RWxlbWVudChsaXN0QmxvY2tJZCk7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJhZ0xpc3Q7IiwiaW1wb3J0IGRyYWdJbWFnZSBmcm9tICcuL2ltYWdlL2ltYWdlTW9kdWxlLmpzJztcclxuaW1wb3J0IGRyYWdWaWRlbyBmcm9tICcuL3ZpZGVvL3ZpZGVvTW9kdWxlLmpzJztcclxuaW1wb3J0IGRyYWdUZXh0IGZyb20gJy4vdGV4dC90ZXh0TW9kdWxlLmpzJztcclxuaW1wb3J0IGRyYWdCdXR0b24gZnJvbSAnLi9idXR0b24vYnV0dG9uTW9kdWxlLmpzJztcclxuaW1wb3J0IGRyYWdGb3JtIGZyb20gJy4vZm9ybS9mb3JtTW9kdWxlLmpzJztcclxuaW1wb3J0IGRyYWdTdWJzY3JpYmUgZnJvbSAnLi9zdWJzY3JpYmUvc3Vic2NyaWJlTW9kdWxlLmpzJztcclxuaW1wb3J0IGRyYWdMaXN0IGZyb20gJy4vbGlzdC9saXN0TW9kdWxlLmpzJztcclxuaW1wb3J0IGRyYWdMaW5lIGZyb20gJy4vbGluZS9saW5lTW9kdWxlLmpzJztcclxuXHJcbi8v0JTRgNCw0LMg0L0g0LTRgNC+0L8g0LzQvtC00YPQu9C10LlcclxuU29ydGFibGUuY3JlYXRlKE1vZHVsZXMsIHtcclxuICBncm91cDoge1xyXG4gICAgbmFtZTogJ2NvbnRlbnQtc2VsZWN0b3InLFxyXG4gICAgcHVsbDogJ2Nsb25lJyxcclxuICAgIHB1dDogZmFsc2VcclxuICB9LFxyXG4gIHNvcnQ6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbjogMTUwLFxyXG4gIGVtcHR5SW5zZXJ0VGhyZXNob2xkOiAxLFxyXG4gIGdob3N0Q2xhc3M6ICdncmVlbi1iYWNrZ3JvdW5kLWNsYXNzJyxcclxuICBvblN0YXJ0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGVsID0gTW9kdWxlcztcclxuICAgICQoJy5oYW5kbGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgJCgnLm1haW4tc2VsZWN0b3InKS5lYWNoKGZ1bmN0aW9uIChpbmQsIGVsKSB7XHJcbiAgICAgICQoZWwpLmZpbmQoJz4gLmNvbnRlbnQ6bm90KDpsYXN0KScpLmFkZENsYXNzKCdib3JkZXItaG92ZXInKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmNvbnRlbnQtc2VsZWN0b3InKS5lYWNoKGZ1bmN0aW9uIChpbmQsIGVsKSB7XHJcbiAgICAgICQoZWwpLmZpbmQoJz4gLmNvbnRlbnQ6bm90KDpsYXN0KScpLmFkZENsYXNzKCdib3JkZXItaG92ZXItY29udGVudCcpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuYmxvY2stc2V0dGluZ3MnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gIH0sXHJcbiAgb25FbmQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvKtCg0LDQt9C80LXRgdGC0LjRgtGMKi9cclxuICAgICQoJy5ib3JkZXItaG92ZXInKS5yZW1vdmVDbGFzcygnYm9yZGVyLWhvdmVyJyk7XHJcbiAgICAkKCcuYm9yZGVyLWhvdmVyLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYm9yZGVyLWhvdmVyLWNvbnRlbnQnKTtcclxuICAgICQoJy5oYW5kbGUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIGlmIChlLnRhcmdldCAhPSBlLnRvKSB7XHJcbiAgICAgIHN3aXRjaCAoZS5pdGVtLmlkKSB7XHJcbiAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgZHJhZ0ltYWdlKGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ3ZpZGVvJzpcclxuICAgICAgICAgIGRyYWdWaWRlbyhlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgIGRyYWdUZXh0KGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2J1dHRvbic6XHJcbiAgICAgICAgICBkcmFnQnV0dG9uKGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBcclxuICAgICAgICBjYXNlICdwYXlGb3JtJzpcclxuICAgICAgICAgIGRyYWdGb3JtKGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBcclxuICAgICAgICBjYXNlICdzdWJzY3JpYmVGb3JtJzpcclxuICAgICAgICAgIGRyYWdTdWJzY3JpYmUoZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ2xpc3QnOlxyXG4gICAgICAgICAgZHJhZ0xpc3QoZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ2xpbmUnOlxyXG4gICAgICAgICAgZHJhZ0xpbmUoZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG4gICAgJCgnLmhhbmRsZScpLnJlc2l6ZXIoKTtcclxuICAgICQoJy5yZXNpemVyJykucmVzaXplcl9zKCk7XHJcbiAgICAkKCcuYmxvY2stcmVzaXplcicpLmJsb2NrX3Jlc2l6ZXIoKTtcclxuICAgICQoJy5ibG9jay1zZXR0aW5ncycpLnNob3coKTtcclxuICB9XHJcbn0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vc3Vic2NyaWJlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBkcmFnU3Vic2NyaWJlKGUpIHtcclxuICBjb25zdCBzdWJzY3JpYmVCbG9ja0lkID0gJ3N1YnNjcmliZScgKyBnZXRSYW5kb20oKTtcclxuICBjb25zdCBtb2R1bGUgPSAnPGRpdiBpZD1cIicgKyBzdWJzY3JpYmVCbG9ja0lkICsgJ1wiIGNsYXNzPVwic3Vic2NyaWJlQmxvY2tcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzdWJzY3JpYmVXcmFwcGVyXCIgc3R5bGU9XCJ3aWR0aDogMzAwcHg7XCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpbWFnZV9zZXR0aW5ncyBzdWJzY3JpYmVfc2V0dGluZ3NcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24gZ2x5cGhpY29uLW1vdmVcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNvZyBzdWJzY3JpYmVTZXRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWxlZnRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWFsaWduLWNlbnRlclwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctcmlnaHRcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWR1cGxpY2F0ZSBjb3B5U3Vic2NyaWJlXCI+PC9zcGFuPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic3Vic2NyaWJlXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZvcm1Db2RlV3JhcHBlclwiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGZvcm0gY2xhc3M9XCJzdWJzY3JpYmVGb3JtXCIgbWV0aG9kPVwiUE9TVFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCBhdXRvY29tcGxldGU9XCJvZmZcIiBjbGFzcz1cInN1YnNjcmliZUlucHV0IG5hbWVcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCw0YjQtSDQuNC80Y9cIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGlucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNsYXNzPVwic3Vic2NyaWJlSW5wdXQgZW1haWxcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cItCS0LDRiCDQtdC80LXQudC7XCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzdWJtaXRXcmFwcGVyXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cInN1YnNjcmliZVN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIj7Qn9Ce0JTQn9CY0KHQkNCi0KzQodCvPC9idXR0b24+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9mb3JtPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkZWxpdmVyeUNvZGVcIj48L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVzaXplclRleHRYWVwiPjwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJyZXNpemVyWFwiPjwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAnPC9kaXY+J1xyXG4gICQoZS5pdGVtKS5yZXBsYWNlV2l0aChtb2R1bGUpO1xyXG4gIFxyXG4gIGFkZERyYWdBbmREcm9wVG9Gb3JtKHN1YnNjcmliZUJsb2NrSWQpO1xyXG4gIFxyXG4gIGFkZEZ1bmN0aW9uYWxpdHlUb1N1YnNjcmliZUVsZW1lbnQoc3Vic2NyaWJlQmxvY2tJZCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyYWdTdWJzY3JpYmU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL3RleHQuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGRyYWdUZXh0KGUpIHtcclxuICBjb25zdCB0ZXh0QmxvY2tJZCA9ICd0ZXh0JyArIGdldFJhbmRvbSgpO1xyXG4gIGNvbnN0IG1vZHVsZSA9ICc8ZGl2IGlkPVwiJyArIHRleHRCbG9ja0lkICsgJ1wiIGNsYXNzPVwidGV4dEJsb2NrXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGV4dFdyYXBwZXJcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaW1hZ2Vfc2V0dGluZ3MgdGV4dF9zZXR0aW5nc1wiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jb2cgdGV4dFNldFwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctbGVmdFwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYWxpZ24tY2VudGVyXCI+PC9zcGFuPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1yaWdodFwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZHVwbGljYXRlIGNvcHlUZXh0XCI+PC9zcGFuPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGV4dC1lZGl0b3JcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGV4dC1lZGl0b3ItcGFuZWxcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1ib2xkIGJvbGRcIiB0aXRsZT1cItCf0L7Qu9GD0LbQuNGA0L3Ri9C5XCI+PC9zcGFuPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWl0YWxpYyBpdGFsXCIgdGl0bGU9XCLQmtGD0YDRgdC40LJcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInVuZGVyXCIgdGl0bGU9XCLQn9C+0LTRh9C10YDQutC90YPRgtGL0LlcIj5VPC9zcGFuPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0aHJvdWdoXCIgdGl0bGU9XCLQl9Cw0YfRkdGA0LrQvdGD0YLRi9C5XCI+Uzwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rIHRleHRMaW5rXCIgdGl0bGU9XCLQktGB0YLQsNCy0LjRgtGMINGB0YHRi9C70LrRg1wiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1hbGlnbi1sZWZ0IGxlZnRcIiB0aXRsZT1cItCS0YvRgNC+0LLQvdGP0YLRjCDQv9C+INC70LXQstC+0LzRgyDQutGA0LDRjlwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1hbGlnbi1jZW50ZXIgY2VudGVyXCIgdGl0bGU9XCLQktGL0YDQvtCy0L3Rj9GC0Ywg0L/QviDRhtC10L3RgtGA0YNcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYWxpZ24tanVzdGlmeSBqdXN0aWZ5XCIgdGl0bGU9XCLQktGL0YDQvtCy0L3Rj9GC0Ywg0YLQtdC60YHRgiDQv9C+INGI0LjRgNC40L3QtVwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1hbGlnbi1yaWdodCByaWdodFwiIHRpdGxlPVwi0JLRi9GA0L7QstC90Y/RgtGMINC/0L4g0L/RgNCw0LLQvtC80YMg0LrRgNCw0Y5cIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGV4dFwiPlRleHQgZXhhbXBsZTxicj7Qn9GA0LjQvNC10YAg0YLQtdC60YHRgtCwPC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJyZXNpemVyVGV4dFhZXCI+PC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJyZXNpemVyWFwiPjwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgJChlLml0ZW0pLnJlcGxhY2VXaXRoKG1vZHVsZSk7XHJcbiAgYWRkRnVuY3Rpb25hbGl0eVRvVGV4dEVsZW1lbnQodGV4dEJsb2NrSWQpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcmFnVGV4dDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vdmlkZW8uY3NzJztcclxuXHJcbmZ1bmN0aW9uIGRyYWdWaWRlbyhlKSB7XHJcbiAgY29uc3QgdmlkZW9CbG9ja0lkID0gJ3ZpZGVvJyArIGdldFJhbmRvbSgpO1xyXG4gIHZhciB2aWRlb01vZHVsZSA9ICc8ZGl2IGlkPVwiJyArIHZpZGVvQmxvY2tJZCArICdcIiBjbGFzcz1cInZpZGVvQmxvY2tcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpbWFnZVdyYXBwZXIgdmlkZW9XcmFwcGVyXCIgc3R5bGU9XCJ3aWR0aDogNjAwcHg7XCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpbWFnZV9zZXR0aW5nc1wiPicrXHJcblx0XHRcdFx0XHRcdCAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNvZyB2aWRlb1NldFwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1sZWZ0XCI+PC9zcGFuPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWFsaWduLWNlbnRlclwiPjwvc3Bhbj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1yaWdodFwiPjwvc3Bhbj4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWR1cGxpY2F0ZSBjb3B5VmlkZW9cIj48L3NwYW4+JytcclxuXHRcdFx0XHRcdFx0XHRcdCAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIj48L3NwYW4+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYm9yZGVyXCIgaWQ9XCInICsgZ2V0UmFuZG9tKCkgKyAnXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBjbGFzcz1cInZpZGVvaW1nIGltZ1wiIHNyYz1cImh0dHA6Ly9tZW1iZXIuNWxpdmVzLnJ1L3dwLWNvbnRlbnQvcGx1Z2lucy9pbnN0YWJ1aWxkZXIyL2Fzc2V0cy9pbWcvdmlkZW8tcGxhY2Vob2xkZXIucG5nXCIgYWx0PVwiaW1hZ2VcIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW5wdXQgY2xhc3M9XCJpbWdQcm9wb3J0aW9uXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiMVwiPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpZnJhbWVXcmFwcGVyXCI+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aWZyYW1lIGNsYXNzPVwidmlkZW9cIiBmcmFtZWJvcmRlcj1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW1nIGNsYXNzPVwibm9WaWRlb1wiIHNyYz1cImh0dHBzOi8vaW0wLXR1Yi1ydS55YW5kZXgubmV0L2k/aWQ9N2IxMDUzMWM1MjNkNTAxZGNmZmI5OTM5OGVhODBmZTAtbCZuPTEzXCIgYWx0PVwidmlkZW9cIj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInJlc2l6ZXJZXCI+PC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJyZXNpemVyWFlcIj48L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInJlc2l6ZXJYXCI+PC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICQoZS5pdGVtKS5yZXBsYWNlV2l0aCh2aWRlb01vZHVsZSk7XHJcblxyXG4gIGFkZEZ1bmN0aW9uYWxpdHlUb0VsZW1lbnQodmlkZW9CbG9ja0lkKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyYWdWaWRlbzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9