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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/modules/form/formSettings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/modules/form/formSettings.js":
/*!**********************************************!*\
  !*** ./src/API/modules/form/formSettings.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inputsSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputsSettings.js */ "./src/API/modules/form/inputsSettings.js");
/* harmony import */ var _sumbitSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sumbitSettings.js */ "./src/API/modules/form/sumbitSettings.js");


$('#mainArea').on('click', '.copyForm', function () {
  var formBlockId = $(this).parents('.formBlock').attr('id');
  var formBlockElem = document.getElementById(formBlockId);
  var clonId = 'form' + getRandom();
  $(formBlockElem).clone(true).attr('id', clonId).insertAfter(formBlockElem);
  var formId = getRandom();
  document.getElementById(clonId).getElementsByTagName('form')[0].id = formId;
  var inputs = document.getElementById(formId).getElementsByClassName('payInput');
  Sortable.create($("#" + formId + "").get(0), {
    animation: 150,
    swapThreshold: 1,
    emptyInsertThreshold: 1,
    ghostClass: 'blue-background-class',
    onStart: function onStart(e) {
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].onblur = function () {
          return false;
        };
      }
    },
    onEnd: function onEnd(e) {
      var _loop = function _loop(i) {
        inputs[i].blur();

        inputs[i].onblur = function () {
          inputs[i].placeholder = inputs[i].value;
          inputs[i].value = '';
        };
      };

      for (var i = 0; i < inputs.length; i++) {
        _loop(i);
      }

      makePreview();
    }
  });
  addFunctionalityToFormElement(clonId);
  makePreview();
});
$('#mainArea').on('click', '.formSet', function (e) {
  var ths = $(this).parents('.formBlock');
  var formBlockElem = document.getElementById(ths.attr('id'));
  var formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  var currentForm = formBlockElem.getElementsByTagName('form')[0];
  var formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
  var formInputs = currentForm.getElementsByClassName('payInput');
  var allInputs = currentForm.getElementsByTagName('input'); //Появление правой панели, инициализация инпутов.

  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#form-border-style').off();
  $('#form-border-left-style').off();
  $('#form-border-right-style').off();
  $('#form-border-top-style-value').off();
  $('#form-border-bottom-style').off();
  $('#form-animation-type-value').off();

  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#form-timeout-hour-value').val(h);
    $('#form-timeout-minute-value').val(m);
    $('#form-timeout-second-value').val(s);
    $('#form-display-none-value').prop('checked', true);
  } else {
    $('#form-timeout-hour-value').val(0);
    $('#form-timeout-minute-value').val(0);
    $('#form-timeout-second-value').val(0);
  }

  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#form-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated'); //Настройки отступов формы

  showHideSettings('formMarginEvery', 'formMarginGroupIndicator');
  $('#form-margin-top-value').val(parseInt(getComputedStyle(formBlockElem).marginTop));
  $('#form-margin-top-value-range').val(parseInt(getComputedStyle(formBlockElem).marginTop));
  $('#form-margin-right-value').val(parseInt(getComputedStyle(formBlockElem).marginRight));
  $('#form-margin-right-value-range').val(parseInt(getComputedStyle(formBlockElem).marginRight));
  $('#form-margin-bottom-value').val(parseInt(getComputedStyle(formBlockElem).marginBottom));
  $('#form-margin-bottom-value-range').val(parseInt(getComputedStyle(formBlockElem).marginBottom));
  $('#form-margin-left-value').val(parseInt(getComputedStyle(formBlockElem).marginLeft));
  $('#form-margin-left-value-range').val(parseInt(getComputedStyle(formBlockElem).marginLeft));
  $('#form-margin-top-value, #form-margin-top-value-range').on('input', function () {
    $(formBlockElem).css('margin-top', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "form-margin-top-value") {
      $('#form-margin-top-value-range').val($(this).val());
    } else {
      $('#form-margin-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-margin-right-value, #form-margin-right-value-range').on('input', function () {
    $(formBlockElem).css('margin-right', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "form-margin-right-value") {
      $('#form-margin-right-value-range').val($(this).val());
    } else {
      $('#form-margin-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-margin-bottom-value, #form-margin-bottom-value-range').on('input', function () {
    $(formBlockElem).css('margin-bottom', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "form-margin-bottom-value") {
      $('#form-margin-bottom-value-range').val($(this).val());
    } else {
      $('#form-margin-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-margin-left-value, #form-margin-left-value-range').on('input', function () {
    $(formBlockElem).css('margin-left', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "form-margin-left-value") {
      $('#form-margin-left-value-range').val($(this).val());
    } else {
      $('#form-margin-left-value').val($(this).val());
    }

    makePreview();
  }); //Вертикальное выравнивание формы

  showHideSettings('form-show-vertical-settings', 'formVerticalIndicator');

  if (getComputedStyle(formBlockElem).marginTop == 'auto') {
    formMarginBottom.checked = true;
    formMarginTop.checked = false;
    formMarginCenter.checked = false;
  } else if (getComputedStyle(formBlockElem).marginBottom == 'auto') {
    formMarginBottom.checked = false;
    formMarginTop.checked = true;
    formMarginCenter.checked = false;
  } else if (getComputedStyle(formBlockElem).marginTop == '0px' && getComputedStyle(formBlockElem).marginBottom == '0px') {
    formMarginBottom.checked = false;
    formMarginTop.checked = false;
    formMarginCenter.checked = true;
  }

  formMarginTop.onclick = function () {
    formBlockElem.style.marginTop = '0px';
    formBlockElem.style.marginBottom = 'auto';
    makePreview();
  };

  formMarginCenter.onclick = function () {
    formBlockElem.style.marginTop = '0px';
    formBlockElem.style.marginBottom = '0px';
    makePreview();
  };

  formMarginBottom.onclick = function () {
    formBlockElem.style.marginTop = 'auto';
    formBlockElem.style.marginBottom = '0px';
    makePreview();
  };
  /*Настройки тени текста*/


  showHideSettings('form-text-shadow-settings', 'formTextShadowIndicator');

  document.getElementById('formTextShadowRadioOn').onclick = function () {
    document.getElementById('form-text-shadow').style.display = 'block';
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }

    makePreview();
  };

  document.getElementById('formTextShadowRadioOff').onclick = function () {
    document.getElementById('form-text-shadow').style.display = 'none';

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', 'none');
    }

    makePreview();
  };

  $('#form-text-shadow-horizontal-value, #form-text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }

    if ($(this).attr('id') == "form-text-shadow-horizontal-value") {
      $('#form-text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-horizontal-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-text-shadow-vertical-value, #form-text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }

    if ($(this).attr('id') == "form-text-shadow-vertical-value") {
      $('#form-text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-vertical-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-text-shadow-blur-value, #form-text-shadow-blur-value-range').on('input', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }

    if ($(this).attr('id') == "form-text-shadow-blur-value") {
      $('#form-text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-blur-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-text-shadow-opacity-value, #form-text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#form-text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }

    if ($(this).attr('id') == "form-text-shadow-opacity-value") {
      $('#form-text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-opacity-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-text-shadow-color-value').on('change', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }

    makePreview();
  });
  /*Конец настроек тени текста*/

  /*Настройки теней*/

  showHideSettings('form-shadow-settings', 'formShadowIndicator');

  document.getElementById('formShadowRadioOn').onclick = function () {
    document.getElementById('form-shadow').style.display = 'block';
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    makePreview();
  };

  document.getElementById('formShadowRadioOff').onclick = function () {
    document.getElementById('form-shadow').style.display = 'none';

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', 'none');
    }

    makePreview();
  };

  $('#form-shadow-horizontal-value, #form-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "form-shadow-horizontal-value") {
      $('#form-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#form-shadow-horizontal-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-shadow-vertical-value, #form-shadow-vertical-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "form-shadow-vertical-value") {
      $('#form-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#form-shadow-vertical-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-shadow-blur-value, #form-shadow-blur-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "form-shadow-blur-value") {
      $('#form-shadow-blur-value-range').val($(this).val());
    } else {
      $('#form-shadow-blur-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-shadow-spread-value, #form-shadow-spread-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "form-shadow-spread-value") {
      $('#form-shadow-spread-value-range').val($(this).val());
    } else {
      $('#form-shadow-spread-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-shadow-opacity-value, #form-shadow-opacity-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "form-shadow-opacity-value") {
      $('#form-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#form-shadow-opacity-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-shadow-color-value').on('change', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    makePreview();
  });
  $('#form-shadow-inset-value').on('change', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    makePreview();
  });
  /*Конец настроек теней*/

  Object(_inputsSettings_js__WEBPACK_IMPORTED_MODULE_0__["default"])($(ths).attr('id'));
  Object(_sumbitSettings_js__WEBPACK_IMPORTED_MODULE_1__["default"])($(ths).attr('id'));
  /*Настройка анимации*/

  showHideSettings('form-animation', 'formAnimationIndicator');
  $('#form-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(currentForm).css('animation-name', $(this).val());
      $(currentForm).css('animation-delay', $('#form-animation-delay-value').val() + 's');
      $(currentForm).css('animation-duration', $('#form-animation-duration-value').val() + 's');
    }

    makePreview();
  });
  $('#form-animation-delay-value, #form-animation-delay-value-range').on('input', function () {
    $(currentForm).css('animation-delay', $(this).val() + 's');

    if ($(this).attr('id') == "form-animation-delay-value") {
      $('#form-animation-delay-value-range').val($(this).val());
    } else {
      $('#form-animation-delay-value').val($(this).val());
    }

    makePreview();
  });
  $('#form-animation-duration-value, #form-animation-duration-value-range').on('input', function () {
    $(currentForm).css('animation-duration', $(this).val() + 's');

    if ($(this).attr('id') == "form-animation-duration-value") {
      $('#form-animation-duration-value-range').val($(this).val());
    } else {
      $('#form-animation-duration-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец настроек анимации*/

  /*Блок таймаута*/

  showHideSettings('form-show-timeout-settings', 'formTimeoutIndicator');
  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('form-display-none-value').checked = true;
  } else {
    document.getElementById('form-display-none-value').checked = false;
  }

  $('#form-display-none-value, #form-timeout-hour-value, #form-timeout-hour-value-range, #form-timeout-minute-value, #form-timeout-minute-value-range, #form-timeout-second-value, #form-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#form-timeout-hour-value').val() * 3600;
    var minute = $('#form-timeout-minute-value').val() * 60;
    var second = parseInt($('#form-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;

    if (document.getElementById('form-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }

    if ($(this).attr('id') == "form-timeout-hour-value") {
      $('#form-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-hour-value-range") {
      $('#form-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-minute-value") {
      $('#form-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-minute-value-range") {
      $('#form-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-second-value") {
      $('#form-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-second-value-range") {
      $('#form-timeout-second-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец блока таймаута*/
});

/***/ }),

/***/ "./src/API/modules/form/inputsSettings.js":
/*!************************************************!*\
  !*** ./src/API/modules/form/inputsSettings.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function includeInputsSettings(id) {
  'use strict';

  var formBlockElem = document.getElementById(id);
  var formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  var currentForm = formBlockElem.getElementsByTagName('form')[0];
  var formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
  var formInputs = currentForm.getElementsByClassName('payInput');
  var allInputs = currentForm.getElementsByTagName('input');
  showHideSettings('form-inputs-settings', 'formInputsIndicator'); //Добавление поля

  showHideSettings('form-show-add-delete-settings', 'formAddDeleteIndicator');
  inputerAdd.value = '';

  function showOptionsForAdd() {
    currentForm = formBlockElem.getElementsByTagName('form')[0];
    inputerAdd.innerHTML = '<option value=""></option>';

    if (!currentForm.getElementsByClassName('name')[0]) {
      inputerAdd.innerHTML += '<option value="name">Имя</option>';
    }

    if (!currentForm.getElementsByClassName('email')[0]) {
      inputerAdd.innerHTML += '<option value="email">Email</option>';
    }

    if (!currentForm.getElementsByClassName('tel')[0]) {
      inputerAdd.innerHTML += '<option value="tel">Телефон</option>';
    }
  }

  showOptionsForAdd();

  inputerAdd.onchange = function () {
    var i = inputerAdd.selectedIndex;
    var formInput = document.createElement('input');

    if (inputerAdd.value == 'tel') {
      formInput.className = 'payInput tel';
      formInput.name = 'tel';
      formInput.type = inputerAdd.value;
      formInput.placeholder = inputerAdd.options[i].innerHTML;

      if (formInputBold.checked == true) {
        formInput.style.fontWeight = '900';
      } else {
        formInput.style.fontWeight = 'normal';
      }

      formInput.style.fontFamily = formInputFontFamilySelect.value;
      formInput.style.fontSize = $('#formInput-font-size-value').val() + 'px';

      if (formInputs[0]) {
        if (parseFloat(getComputedStyle(formInputs[0]).width) != parseFloat(getComputedStyle(formWrapperElem).width) - 2) {
          formInput.style.width = getComputedStyle(formInputs[0]).width;
        }

        formInput.style.color = getComputedStyle(formInputs[0]).color;
        formInput.style.background = getComputedStyle(formInputs[0]).background;
        formInput.style.borderTopWidth = getComputedStyle(formInputs[0]).borderTopWidth;
        formInput.style.borderTopLeftRadius = getComputedStyle(formInputs[0]).borderTopLeftRadius;
        formInput.style.borderTopStyle = getComputedStyle(formInputs[0]).borderTopStyle;
        formInput.style.borderTopColor = getComputedStyle(formInputs[0]).borderTopColor;
        formInput.style.borderRightWidth = getComputedStyle(formInputs[0]).borderRightWidth;
        formInput.style.borderTopRightRadius = getComputedStyle(formInputs[0]).borderTopRightRadius;
        formInput.style.borderRightStyle = getComputedStyle(formInputs[0]).borderRightStyle;
        formInput.style.borderRightColor = getComputedStyle(formInputs[0]).borderRightColor;
        formInput.style.borderBottomWidth = getComputedStyle(formInputs[0]).borderBottomWidth;
        formInput.style.borderBottomRightRadius = getComputedStyle(formInputs[0]).borderBottomRightRadius;
        formInput.style.borderBottomStyle = getComputedStyle(formInputs[0]).borderBottomStyle;
        formInput.style.borderBottomColor = getComputedStyle(formInputs[0]).borderBottomColor;
        formInput.style.borderLeftWidth = getComputedStyle(formInputs[0]).borderLeftWidth;
        formInput.style.borderBottomLeftRadius = getComputedStyle(formInputs[0]).borderBottomLeftRadius;
        formInput.style.borderLeftStyle = getComputedStyle(formInputs[0]).borderLeftStyle;
        formInput.style.borderLeftColor = getComputedStyle(formInputs[0]).borderLeftColor;
      }

      if (formInputAutoHeight.checked == true) {
        formInput.style.height = 'auto';
      } else {
        formInput.style.height = $('#formInput-height-value').val() + 'px';
      }

      if (formTextShadowRadioOn.checked == true) {
        var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
        var vv = $('#form-text-shadow-vertical-value').val() + 'px';
        var blr = $('#form-text-shadow-blur-value').val() + 'px';
        var clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
        var prpts = hv + " " + vv + " " + blr + " " + clr;
        formInput.style.textShadow = prpts;
      }

      $(formInput).insertBefore(formSubmitElem);
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      addFunctionalityToFormElement($(ths).attr('id'));
      makePreview();
    } else if (inputerAdd.value == 'name') {
      formInput.className = 'payInput name';
      formInput.name = 'name';
      formInput.type = inputerAdd.value;
      formInput.placeholder = inputerAdd.options[i].innerHTML;

      if (formInputBold.checked == true) {
        formInput.style.fontWeight = '900';
      } else {
        formInput.style.fontWeight = 'normal';
      }

      formInput.style.fontFamily = formInputFontFamilySelect.value;
      formInput.style.fontSize = $('#formInput-font-size-value').val() + 'px';

      if (formInputs[0]) {
        if (parseFloat(getComputedStyle(formInputs[0]).width) != parseFloat(getComputedStyle(formWrapperElem).width) - 2) {
          formInput.style.width = getComputedStyle(formInputs[0]).width;
        }

        formInput.style.color = getComputedStyle(formInputs[0]).color;
        formInput.style.background = getComputedStyle(formInputs[0]).background;
        formInput.style.borderTopWidth = getComputedStyle(formInputs[0]).borderTopWidth;
        formInput.style.borderTopLeftRadius = getComputedStyle(formInputs[0]).borderTopLeftRadius;
        formInput.style.borderTopStyle = getComputedStyle(formInputs[0]).borderTopStyle;
        formInput.style.borderTopColor = getComputedStyle(formInputs[0]).borderTopColor;
        formInput.style.borderRightWidth = getComputedStyle(formInputs[0]).borderRightWidth;
        formInput.style.borderTopRightRadius = getComputedStyle(formInputs[0]).borderTopRightRadius;
        formInput.style.borderRightStyle = getComputedStyle(formInputs[0]).borderRightStyle;
        formInput.style.borderRightColor = getComputedStyle(formInputs[0]).borderRightColor;
        formInput.style.borderBottomWidth = getComputedStyle(formInputs[0]).borderBottomWidth;
        formInput.style.borderBottomRightRadius = getComputedStyle(formInputs[0]).borderBottomRightRadius;
        formInput.style.borderBottomStyle = getComputedStyle(formInputs[0]).borderBottomStyle;
        formInput.style.borderBottomColor = getComputedStyle(formInputs[0]).borderBottomColor;
        formInput.style.borderLeftWidth = getComputedStyle(formInputs[0]).borderLeftWidth;
        formInput.style.borderBottomLeftRadius = getComputedStyle(formInputs[0]).borderBottomLeftRadius;
        formInput.style.borderLeftStyle = getComputedStyle(formInputs[0]).borderLeftStyle;
        formInput.style.borderLeftColor = getComputedStyle(formInputs[0]).borderLeftColor;
      }

      if (formInputAutoHeight.checked == true) {
        formInput.style.height = 'auto';
      } else {
        formInput.style.height = $('#formInput-height-value').val() + 'px';
      }

      if (formTextShadowRadioOn.checked == true) {
        var _hv = $('#form-text-shadow-horizontal-value').val() + 'px';

        var _vv = $('#form-text-shadow-vertical-value').val() + 'px';

        var _blr = $('#form-text-shadow-blur-value').val() + 'px';

        var _clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);

        var _prpts = _hv + " " + _vv + " " + _blr + " " + _clr;

        formInput.style.textShadow = _prpts;
      }

      $(formInput).insertBefore(formSubmitElem);
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      addFunctionalityToFormElement($(ths).attr('id'));
      makePreview();
    }

    if (inputerAdd.value == 'email') {
      formInput.className = 'payInput email';
      formInput.name = 'email';
      formInput.type = inputerAdd.value;
      formInput.placeholder = inputerAdd.options[i].innerHTML;

      if (formInputBold.checked == true) {
        formInput.style.fontWeight = '900';
      } else {
        formInput.style.fontWeight = 'normal';
      }

      formInput.style.fontFamily = formInputFontFamilySelect.value;
      formInput.style.fontSize = $('#formInput-font-size-value').val() + 'px';

      if (formInputs[0]) {
        if (parseFloat(getComputedStyle(formInputs[0]).width) != parseFloat(getComputedStyle(formWrapperElem).width) - 2) {
          formInput.style.width = getComputedStyle(formInputs[0]).width;
        }

        formInput.style.color = getComputedStyle(formInputs[0]).color;
        formInput.style.background = getComputedStyle(formInputs[0]).background;
        formInput.style.borderTopWidth = getComputedStyle(formInputs[0]).borderTopWidth;
        formInput.style.borderTopLeftRadius = getComputedStyle(formInputs[0]).borderTopLeftRadius;
        formInput.style.borderTopStyle = getComputedStyle(formInputs[0]).borderTopStyle;
        formInput.style.borderTopColor = getComputedStyle(formInputs[0]).borderTopColor;
        formInput.style.borderRightWidth = getComputedStyle(formInputs[0]).borderRightWidth;
        formInput.style.borderTopRightRadius = getComputedStyle(formInputs[0]).borderTopRightRadius;
        formInput.style.borderRightStyle = getComputedStyle(formInputs[0]).borderRightStyle;
        formInput.style.borderRightColor = getComputedStyle(formInputs[0]).borderRightColor;
        formInput.style.borderBottomWidth = getComputedStyle(formInputs[0]).borderBottomWidth;
        formInput.style.borderBottomRightRadius = getComputedStyle(formInputs[0]).borderBottomRightRadius;
        formInput.style.borderBottomStyle = getComputedStyle(formInputs[0]).borderBottomStyle;
        formInput.style.borderBottomColor = getComputedStyle(formInputs[0]).borderBottomColor;
        formInput.style.borderLeftWidth = getComputedStyle(formInputs[0]).borderLeftWidth;
        formInput.style.borderBottomLeftRadius = getComputedStyle(formInputs[0]).borderBottomLeftRadius;
        formInput.style.borderLeftStyle = getComputedStyle(formInputs[0]).borderLeftStyle;
        formInput.style.borderLeftColor = getComputedStyle(formInputs[0]).borderLeftColor;
      }

      if (formInputAutoHeight.checked == true) {
        formInput.style.height = 'auto';
      } else {
        formInput.style.height = $('#formInput-height-value').val() + 'px';
      }

      if (formTextShadowRadioOn.checked == true) {
        var _hv2 = $('#form-text-shadow-horizontal-value').val() + 'px';

        var _vv2 = $('#form-text-shadow-vertical-value').val() + 'px';

        var _blr2 = $('#form-text-shadow-blur-value').val() + 'px';

        var _clr2 = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);

        var _prpts2 = _hv2 + " " + _vv2 + " " + _blr2 + " " + _clr2;

        formInput.style.textShadow = _prpts2;
      }

      $(formInput).insertBefore(formSubmitElem);
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      addFunctionalityToFormElement($(ths).attr('id'));
      makePreview();
    }
  }; //Удаление поля


  inputerDelete.value = '';

  function showOptionsForDelete() {
    currentForm = formBlockElem.getElementsByTagName('form')[0];
    inputerDelete.innerHTML = '<option value=""></option>';

    if (currentForm.getElementsByClassName('name')[0]) {
      inputerDelete.innerHTML += '<option value="name">Имя</option>';
    }

    if (currentForm.getElementsByClassName('email')[0]) {
      inputerDelete.innerHTML += '<option value="email">Email</option>';
    }

    if (currentForm.getElementsByClassName('tel')[0]) {
      inputerDelete.innerHTML += '<option value="tel">Телефон</option>';
    }
  }

  showOptionsForDelete();

  function deleteInput(el, inputClass) {
    var stringToDelete = new RegExp('<input class="payInput ' + inputClass + '"[^>]*>', 'gi');
    el.innerHTML = el.innerHTML.replace(stringToDelete, '');
  }

  inputerDelete.onchange = function () {
    if (inputerDelete.value == 'tel') {
      deleteInput(currentForm, 'tel');
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      makePreview();
    } else if (inputerDelete.value == 'name') {
      deleteInput(currentForm, 'name');
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      makePreview();
    } else if (inputerDelete.value == 'email') {
      deleteInput(currentForm, 'email');
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      makePreview();
    }
  }; //Настройки спрятанных полей


  hiddenId.onchange = function () {
    productIdEl = currentForm.getElementsByClassName('productsId')[0];
    productIdEl.value = hiddenId.value;
  }; //Выбор шрифта полей


  formInputFontFamilySelect.value = getComputedStyle(formInputs[0]).fontFamily;

  formInputFontFamilySelect.onchange = function () {
    for (var i = 0; i < formInputs.length; i++) {
      formInputs[i].style.fontFamily = formInputFontFamilySelect.value;
    }

    makePreview();
  };

  if (getComputedStyle(formInputs[0]).fontWeight == '900') {
    formInputBold.checked = true;
  } else {
    formInputBold.checked = false;
  }

  formInputBold.onclick = function () {
    if (formInputBold.checked) {
      for (var i = 0; i < formInputs.length; i++) {
        formInputs[i].style.fontWeight = '900';
      }
    } else {
      for (var _i = 0; _i < formInputs.length; _i++) {
        formInputs[_i].style.fontWeight = 'normal';
      }
    }

    makePreview();
  }; //Размер шрифта полей


  showHideSettings('form-show-inputs-font-settings', 'formInputsFontIndicator');
  $('#formInput-font-size-value').val(parseInt(getComputedStyle(formInputs[0]).fontSize));
  $('#formInput-font-size-value-range').val(parseInt(getComputedStyle(formInputs[0]).fontSize));
  $('#formInput-font-size-value, #formInput-font-size-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('font-size', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "formInput-font-size-value") {
      $('#formInput-font-size-value-range').val($(this).val());
    } else {
      $('#formInput-font-size-value').val($(this).val());
    }

    makePreview();
  }); //Цвет текста у полей

  $('#formInput-color-value').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('color', $(this).val());
    }

    makePreview();
  }); //Цвет полей

  showHideSettings('formInput-background-types', 'formInputsBackgroundIndicator');

  formInputBackgroundRadioColor.onclick = function () {
    formInputBackgroundGradient.style.display = 'none';
    formInputBackgroundColor.style.display = 'block';
  };

  formInputBackgroundRadioGradient.onclick = function () {
    formInputBackgroundColor.style.display = 'none';
    formInputBackgroundGradient.style.display = 'block';
  };

  $('#formInput-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = hexToRGB($(this).val(), opacity);

    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', color);
    }

    makePreview();
  });
  $('#formInput-gradient-color-1').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', 'linear-gradient(' + parseInt($('#formInput-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#formInput-gradient-color-2').val() + ')');
    }

    makePreview();
  });
  $('#formInput-gradient-color-2').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', 'linear-gradient(' + parseInt($('#formInput-gradient-angle').val()) + 'deg, ' + $('#formInput-gradient-color-1').val() + ', ' + $(this).val() + ')');
    }

    makePreview();
  });
  $('#formInput-gradient-angle').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#formInput-gradient-color-1').val() + ', ' + $('#formInput-gradient-color-2').val() + ')');
    }

    makePreview();
  });
  $('#formInput-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#formInput-main-color').val(), opacity / 100);

    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', color);
    }

    makePreview();
  }); //Высота полей

  showHideSettings('formInput-height', 'formInputsSizeIndicator');

  if (getComputedStyle(formInputs[0]).height == 'auto') {
    formInputAutoHeight.checked = true;
  } else {
    formInputAutoHeight.checked = false;
  }

  $('#formInput-height-value').val(parseInt($(formInputs[0]).css('height')));
  $('#formInput-height-value-range').val(parseInt($(formInputs[0]).css('height')));

  formInputAutoHeight.onclick = function () {
    if (formInputAutoHeight.checked == true) {
      for (var i = 0; i < formInputs.length; i++) {
        formInputs[i].style.height = 'auto';
      }

      makePreview();
    }
  };

  $('#formInput-height-value, #formInput-height-value-range').on('input', function () {
    if (formInputAutoHeight.checked == false) {
      for (var i = 0; i < formInputs.length; i++) {
        $(formInputs[i]).css('height', $(this).val() + 'px');
      }

      if ($(this).attr('id') == "formInput-height-value") {
        $('#formInput-height-value-range').val($(this).val());
      } else {
        $('#formInput-height-value').val($(this).val());
      }
    }

    makePreview();
  }); //Ширина полей

  if (getComputedStyle(formInputs[0]).width == '100%') {
    formInputAutoWidth.checked = true;
  } else {
    formInputAutoWidth.checked = false;
  }

  $('#formInput-width-value').val(parseInt($(formInputs[0]).css('width')));
  $('#formInput-width-value-range').val(parseInt($(formInputs[0]).css('width')));

  formInputAutoWidth.onclick = function () {
    if (formInputAutoWidth.checked == true) {
      for (var i = 0; i < formInputs.length; i++) {
        formInputs[i].style.width = '100%';
      }

      makePreview();
    }
  };

  $('#formInput-width-value, #formInput-width-value-range').on('input', function () {
    if (formInputAutoWidth.checked == false) {
      for (var i = 0; i < formInputs.length; i++) {
        $(formInputs[i]).css('width', $(this).val() + 'px');
      }

      if ($(this).attr('id') == "formInput-width-value") {
        $('#formInput-width-value-range').val($(this).val());
      } else {
        $('#formInput-width-value').val($(this).val());
      }
    }

    makePreview();
  }); //Настройки всех границ полей

  showHideSettings('form-show-inputs-border-settings', 'formInputsBorderIndicator');

  formInputBorderRadioEvery.onclick = function () {
    formInputBorderAll.style.display = 'none';
    formInputBorderEvery.style.display = 'block';
  };

  formInputBorderRadioAll.onclick = function () {
    formInputBorderAll.style.display = 'block';
    formInputBorderEvery.style.display = 'none';
  };

  $('#formInput-border-value').val(parseInt($(formInputs[0]).css('border-width')));
  $('#formInput-border-value-range').val(parseInt($(formInputs[0]).css('border-width')));
  $('#formInput-border-radius').val(parseInt($(formInputs[0]).css('border-radius')));
  $('#formInput-border-radius-range').val(parseInt($(formInputs[0]).css('border-radius')));
  $('#formInput-border-value, #formInput-border-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-width', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "formInput-border-value") {
      $('#formInput-border-value-range').val($(this).val());
    } else {
      $('#formInput-border-value').val($(this).val());
    }

    makePreview();
  });
  $('#formInput-border-radius, #formInput-border-radius-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-radius', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "formInput-border-radius") {
      $('#formInput-border-radius-range').val($(this).val());
    } else {
      $('#formInput-border-radius').val($(this).val());
    }

    makePreview();
  });
  $('#formInput-border-style').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-style', $(this).find('option:selected').val());
    }

    makePreview();
  });
  $('#formInput-border-color-value').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-color', $(this).val());
    }

    makePreview();
  });
  /*Настройки для верхней границы полей*/

  $('#formInput-border-top-value').val(parseInt($(formInputs[0]).css('border-top-width')));
  $('#formInput-border-top-value-range').val(parseInt($(formInputs[0]).css('border-top-width')));
  $('#formInput-border-left-top-radius').val(parseInt($(formInputs[0]).css('border-top-left-radius')));
  $('#formInput-border-left-top-radius-range').val(parseInt($(formInputs[0]).css('border-top-left-radius')));
  $('#formInput-border-top-value, #formInput-border-top-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-width', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "formInput-border-top-value") {
      $('#formInput-border-top-value-range').val($(this).val());
    } else {
      $('#formInput-border-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#formInput-border-left-top-radius, #formInput-border-left-top-radius-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-left-radius', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "formInput-border-left-top-radius") {
      $('#formInput-border-left-top-radius-range').val($(this).val());
    } else {
      $('#formInput-border-left-top-radius').val($(this).val());
    }

    makePreview();
  });
  $('#formInput-border-top-style-value').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-style', $(this).find('option:selected').val());
    }

    makePreview();
  });
  $('#formInput-border-top-color').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-color', $(this).val());
    }

    makePreview();
  });
  /*Конец блока*/

  /*Настройки для правой границы полей*/

  $('#formInput-border-right-value').val(parseInt($(formInputs[0]).css('border-right-width')));
  $('#formInput-border-right-value-range').val(parseInt($(formInputs[0]).css('border-right-width')));
  $('#formInput-border-right-radius').val(parseInt($(formInputs[0]).css('border-top-right-radius')));
  $('#formInput-border-right-radius-range').val(parseInt($(formInputs[0]).css('border-top-right-radius')));
  $('#formInput-border-right-value, #formInput-border-right-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-right-width', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "formInput-border-right-value") {
      $('#formInput-border-right-value-range').val($(this).val());
    } else {
      $('#formInput-border-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#formInput-border-right-radius, #formInput-border-right-radius-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-right-radius', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "formInput-border-right-radius") {
      $('#formInput-border-right-radius-range').val($(this).val());
    } else {
      $('#formInput-border-right-radiuse').val($(this).val());
    }

    makePreview();
  });
  $('#formInput-border-right-style').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-right-style', $(this).find('option:selected').val());
    }

    makePreview();
  });
  $('#formInput-border-right-color').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-right-color', $(this).val());
    }

    makePreview();
  });
  /*Конец блока*/

  /*Настройки для нижней границы полей*/

  $('#formInput-border-bottom-value').val(parseInt($(formInputs[0]).css('border-bottom-width')));
  $('#formInput-border-bottom-value-range').val(parseInt($(formInputs[0]).css('border-bottom-width')));
  $('#formInput-border-bottom-right-radius').val(parseInt($(formInputs[0]).css('border-bottom-right-radius')));
  $('#formInput-border-bottom-right-radius-range').val(parseInt($(formInputs[0]).css('border-bottom-right-radius')));
  $('#formInput-border-bottom-value, #formInput-border-bottom-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-width', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "formInput-border-bottom-value") {
      $('#formInput-border-bottom-value-range').val($(this).val());
    } else {
      $('#formInput-border-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#formInput-border-bottom-right-radius, #formInput-border-bottom-right-radius-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-right-radius', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "formInput-border-bottom-right-radius") {
      $('#formInput-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#formInput-border-bottom-right-radius').val($(this).val());
    }

    makePreview();
  });
  $('#formInput-border-bottom-style').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-style', $(this).find('option:selected').val());
    }

    makePreview();
  });
  $('#formInput-border-bottom-color').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-color', $(this).val());
    }

    makePreview();
  });
  /*Конец блока*/

  /*Настройки для левой границы полей*/

  $('#formInput-border-left-value').val(parseInt($(formInputs[0]).css('border-left-width')));
  $('#formInput-border-left-value-range').val(parseInt($(formInputs[0]).css('border-left-width')));
  $('#formInput-border-bottom-left-radius').val(parseInt($(formInputs[0]).css('border-bottom-left-radius')));
  $('#formInput-border-bottom-left-radius-range').val(parseInt($(formInputs[0]).css('border-bottom-left-radius')));
  $('#formInput-border-left-value, #formInput-border-left-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-left-width', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "formInput-border-left-value") {
      $('#formInput-border-left-value-range').val($(this).val());
    } else {
      $('#formInput-border-left-value').val($(this).val());
    }

    makePreview();
  });
  $('#formInput-border-bottom-left-radius, #formInput-border-bottom-left-radius-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-left-radius', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "formInput-border-bottom-left-radius") {
      $('#formInput-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#formInput-border-bottom-left-radius').val($(this).val());
    }

    makePreview();
  });
  $('#formInput-border-left-style').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-left-style', $(this).find('option:selected').val());
    }

    makePreview();
  });
  $('#formInput-border-left-color').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-left-color', $(this).val());
    }

    makePreview();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (includeInputsSettings);

/***/ }),

/***/ "./src/API/modules/form/sumbitSettings.js":
/*!************************************************!*\
  !*** ./src/API/modules/form/sumbitSettings.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function includeSubmitSettings(id) {
  'use strict';

  var formBlockElem = document.getElementById(id);
  var formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  var currentForm = formBlockElem.getElementsByTagName('form')[0];
  var formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
  var formInputs = currentForm.getElementsByClassName('payInput');
  var allInputs = currentForm.getElementsByTagName('input');
  showHideSettings('form-submit-settings', 'formSubmitIndicator'); //Настройки отступов у submit

  showHideSettings('formSubmitMarginEvery', 'formSubmitMarginIndicator');
  $('#formSubmit-margin-top-value').val(parseInt(getComputedStyle(formSubmitElem).marginTop));
  $('#formSubmit-margin-top-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginTop));
  $('#formSubmit-margin-right-value').val(parseInt(getComputedStyle(formSubmitElem).marginRight));
  $('#formSubmit-margin-right-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginRight));
  $('#formSubmit-margin-bottom-value').val(parseInt(getComputedStyle(formSubmitElem).marginBottom));
  $('#formSubmit-margin-bottom-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginBottom));
  $('#formSubmit-margin-left-value').val(parseInt(getComputedStyle(formSubmitElem).marginLeft));
  $('#formSubmit-margin-left-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginLeft));
  $('#formSubmit-margin-top-value, #formSubmit-margin-top-value-range').on('input', function () {
    $(formSubmitElem).css('margin-top', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "formSubmit-margin-top-value") {
      $('#formSubmit-margin-top-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-margin-right-value, #formSubmit-margin-right-value-range').on('input', function () {
    $(formSubmitElem).css('margin-right', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "formSubmit-margin-right-value") {
      $('#formSubmit-margin-right-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-margin-bottom-value, #formSubmit-margin-bottom-value-range').on('input', function () {
    $(formSubmitElem).css('margin-bottom', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "formSubmit-margin-bottom-value") {
      $('#formSubmit-margin-bottom-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-margin-left-value, #formSubmit-margin-left-value-range').on('input', function () {
    $(formSubmitElem).css('margin-left', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "formSubmit-margin-left-value") {
      $('#formSubmit-margin-left-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-left-value').val($(this).val());
    }

    makePreview();
  }); //Выбор шрифта

  showHideSettings('form-show-submit-font-settings', 'formSubmitFontIndicator');
  formSubmitFontFamilySelect.value = getComputedStyle(formSubmitElem).fontFamily;

  formSubmitFontFamilySelect.onchange = function () {
    formSubmitElem.style.fontFamily = formSubmitFontFamilySelect.value;
    makePreview();
  };

  if (getComputedStyle(formSubmitElem).fontWeight == '900') {
    formSubmitBold.checked = true;
  } else {
    formSubmitBold.checked = false;
  }

  formSubmitBold.onclick = function () {
    if (formSubmitBold.checked) {
      formSubmitElem.style.fontWeight = '900';
    } else {
      formSubmitElem.style.fontWeight = 'normal';
    }

    makePreview();
  }; //Размер шрифта submit


  $('#formSubmit-font-size-value').val(parseInt(getComputedStyle(formSubmitElem).fontSize));
  $('#formSubmit-font-size-value-range').val(parseInt(getComputedStyle(formSubmitElem).fontSize));
  $('#formSubmit-font-size-value, #formSubmit-font-size-value-range').on('input', function () {
    $(formSubmitElem).css('font-size', $(this).val() + 'px');

    if ($(this).attr('id') == "formSubmit-font-size-value") {
      $('#formSubmit-font-size-value-range').val($(this).val());
    } else {
      $('#formSubmit-font-size-value').val($(this).val());
    }

    makePreview();
  }); //Цвет текста у submit

  $('#formSubmit-color-value').on('change', function () {
    $(formSubmitElem).css('color', $(this).val());
    makePreview();
  }); //Цвет submit

  showHideSettings('formSubmit-background-types', 'formSubmitBackgroundIndicator');

  formSubmitBackgroundRadioColor.onclick = function () {
    formSubmitBackgroundGradient.style.display = 'none';
    formSubmitBackgroundColor.style.display = 'block';
  };

  formSubmitBackgroundRadioGradient.onclick = function () {
    formSubmitBackgroundColor.style.display = 'none';
    formSubmitBackgroundGradient.style.display = 'block';
  };

  $('#formSubmit-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = hexToRGB($(this).val(), opacity);
    $(formSubmitElem).css('background', color);
    makePreview();
  });
  $('#formSubmit-gradient-color-1').on('change', function () {
    $(formSubmitElem).css('background', 'linear-gradient(' + parseInt($('#formSubmit-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#formSubmit-gradient-color-2').val() + ')');
    makePreview();
  });
  $('#formSubmit-gradient-color-2').on('change', function () {
    $(formSubmitElem).css('background', 'linear-gradient(' + parseInt($('#formSubmit-gradient-angle').val()) + 'deg, ' + $('#formSubmit-gradient-color-1').val() + ', ' + $(this).val() + ')');
    makePreview();
  });
  $('#formSubmit-gradient-angle').on('input', function () {
    $(formSubmitElem).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#formSubmit-gradient-color-1').val() + ', ' + $('#formSubmit-gradient-color-2').val() + ')');
    makePreview();
  });
  $('#formSubmit-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#formSubmit-main-color').val(), opacity / 100);
    $(formSubmitElem).css('background', color);
    makePreview();
  }); //Высота кнопки

  showHideSettings('formSubmit-height', 'formSubmitSizeIndicator');

  if (getComputedStyle(formSubmitElem).height == 'auto') {
    formSubmitAutoHeight.checked = true;
  } else {
    formSubmitAutoHeight.checked = false;
  }

  $('#formSubmit-height-value').val(parseInt($(formSubmitElem).css('height')));
  $('#formSubmit-height-value-range').val(parseInt($(formSubmitElem).css('height')));

  formSubmitAutoHeight.onclick = function () {
    if (formSubmitAutoHeight.checked == true) {
      formSubmitElem.style.height = 'auto';
      makePreview();
    }
  };

  $('#formSubmit-height-value, #formSubmit-height-value-range').on('input', function () {
    if (formSubmitAutoHeight.checked == false) {
      $(formSubmitElem).css('height', $(this).val() + 'px');

      if ($(this).attr('id') == "formSubmit-height-value") {
        $('#formSubmit-height-value-range').val($(this).val());
      } else {
        $('#formSubmit-height-value').val($(this).val());
      }
    }

    makePreview();
  }); //Ширина кнопки

  if (getComputedStyle(formSubmitElem).width == '100%') {
    formSubmitAutoWidth.checked = true;
  } else {
    formSubmitAutoWidth.checked = false;
  }

  $('#formSubmit-width-value').val(parseInt($(formSubmitElem).css('width')));
  $('#formSubmit-width-value-range').val(parseInt($(formSubmitElem).css('width')));

  formSubmitAutoWidth.onclick = function () {
    if (formSubmitAutoWidth.checked == true) {
      formSubmitElem.style.width = '100%';
      makePreview();
    }
  };

  $('#formSubmit-width-value, #formSubmit-width-value-range').on('input', function () {
    if (formSubmitAutoWidth.checked == false) {
      $(formSubmitElem).css('width', $(this).val() + 'px');

      if ($(this).attr('id') == "formSubmit-width-value") {
        $('#formSubmit-width-value-range').val($(this).val());
      } else {
        $('#formSubmit-width-value').val($(this).val());
      }
    }

    makePreview();
  }); //Настройки всех границ submit

  showHideSettings('form-show-submit-border-settings', 'formSubmitBorderIndicator');

  formSubmitBorderRadioEvery.onclick = function () {
    formSubmitBorderAll.style.display = 'none';
    formSubmitBorderEvery.style.display = 'block';
  };

  formSubmitBorderRadioAll.onclick = function () {
    formSubmitBorderAll.style.display = 'block';
    formSubmitBorderEvery.style.display = 'none';
  };

  $('#formSubmit-border-value').val(parseInt($(formSubmitElem).css('border-width')));
  $('#formSubmit-border-value-range').val(parseInt($(formSubmitElem).css('border-width')));
  $('#formSubmit-border-radius').val(parseInt($(formSubmitElem).css('border-radius')));
  $('#formSubmit-border-radius-range').val(parseInt($(formSubmitElem).css('border-radius')));
  $('#formSubmit-border-value, #formSubmit-border-value-range').on('input', function () {
    $(formSubmitElem).css('border-width', $(this).val() + 'px');

    if ($(this).attr('id') == "formSubmit-border-value") {
      $('#formSubmit-border-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-value').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-border-radius, #formSubmit-border-radius-range').on('input', function () {
    $(formSubmitElem).css('border-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "formSubmit-border-radius") {
      $('#formSubmit-border-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-radius').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-border-style').on('change', function () {
    $(formSubmitElem).css('border-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#formSubmit-border-color-value').on('change', function () {
    $(formSubmitElem).css('border-color', $(this).val());
    makePreview();
  });
  /*Настройки для верхней границы submit*/

  $('#formSubmit-border-top-value').val(parseInt($(formSubmitElem).css('border-top-width')));
  $('#formSubmit-border-top-value-range').val(parseInt($(formSubmitElem).css('border-top-width')));
  $('#formSubmit-border-left-top-radius').val(parseInt($(formSubmitElem).css('border-top-left-radius')));
  $('#formSubmit-border-left-top-radius-range').val(parseInt($(formSubmitElem).css('border-top-left-radius')));
  $('#formSubmit-border-top-value, #formSubmit-border-top-value-range').on('input', function () {
    $(formSubmitElem).css('border-top-width', $(this).val() + 'px');

    if ($(this).attr('id') == "formSubmit-border-top-value") {
      $('#formSubmit-border-top-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-border-left-top-radius, #formSubmit-border-left-top-radius-range').on('input', function () {
    $(formSubmitElem).css('border-top-left-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "formSubmit-border-left-top-radius") {
      $('#formSubmit-border-left-top-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-left-top-radius').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-border-top-style-value').on('change', function () {
    $(formSubmitElem).css('border-top-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#formSubmit-border-top-color').on('change', function () {
    $(formSubmitElem).css('border-top-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для правой границы submit*/

  $('#formSubmit-border-right-value').val(parseInt($(formSubmitElem).css('border-right-width')));
  $('#formSubmit-border-right-value-range').val(parseInt($(formSubmitElem).css('border-right-width')));
  $('#formSubmit-border-right-radius').val(parseInt($(formSubmitElem).css('border-top-right-radius')));
  $('#formSubmit-border-right-radius-range').val(parseInt($(formSubmitElem).css('border-top-right-radius')));
  $('#formSubmit-border-right-value, #formSubmit-border-right-value-range').on('input', function () {
    $(formSubmitElem).css('border-right-width', $(this).val() + 'px');

    if ($(this).attr('id') == "formSubmit-border-right-value") {
      $('#formSubmit-border-right-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-border-right-radius, #formSubmit-border-right-radius-range').on('input', function () {
    $(formSubmitElem).css('border-top-right-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "formSubmit-border-right-radius") {
      $('#formSubmit-border-right-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-right-radiuse').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-border-right-style').on('change', function () {
    $(formSubmitElem).css('border-right-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#formSubmit-border-right-color').on('change', function () {
    $(formSubmitElem).css('border-right-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для нижней границы submit*/

  $('#formSubmit-border-bottom-value').val(parseInt($(formSubmitElem).css('border-bottom-width')));
  $('#formSubmit-border-bottom-value-range').val(parseInt($(formSubmitElem).css('border-bottom-width')));
  $('#formSubmit-border-bottom-right-radius').val(parseInt($(formSubmitElem).css('border-bottom-right-radius')));
  $('#formSubmit-border-bottom-right-radius-range').val(parseInt($(formSubmitElem).css('border-bottom-right-radius')));
  $('#formSubmit-border-bottom-value, #formSubmit-border-bottom-value-range').on('input', function () {
    $(formSubmitElem).css('border-bottom-width', $(this).val() + 'px');

    if ($(this).attr('id') == "formSubmit-border-bottom-value") {
      $('#formSubmit-border-bottom-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-border-bottom-right-radius, #formSubmit-border-bottom-right-radius-range').on('input', function () {
    $(formSubmitElem).css('border-bottom-right-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "formSubmit-border-bottom-right-radius") {
      $('#formSubmit-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-bottom-right-radius').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-border-bottom-style').on('change', function () {
    $(formSubmitElem).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#formSubmit-border-bottom-color').on('change', function () {
    $(formSubmitElem).css('border-bottom-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для левой границы submit*/

  $('#formSubmit-border-left-value').val(parseInt($(formSubmitElem).css('border-left-width')));
  $('#formSubmit-border-left-value-range').val(parseInt($(formSubmitElem).css('border-left-width')));
  $('#formSubmit-border-bottom-left-radius').val(parseInt($(formSubmitElem).css('border-bottom-left-radius')));
  $('#formSubmit-border-bottom-left-radius-range').val(parseInt($(formSubmitElem).css('border-bottom-left-radius')));
  $('#formSubmit-border-left-value, #formSubmit-border-left-value-range').on('input', function () {
    $(formSubmitElem).css('border-left-width', $(this).val() + 'px');

    if ($(this).attr('id') == "formSubmit-border-left-value") {
      $('#formSubmit-border-left-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-left-value').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-border-bottom-left-radius, #formSubmit-border-bottom-left-radius-range').on('input', function () {
    $(formSubmitElem).css('border-bottom-left-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "formSubmit-border-bottom-left-radius") {
      $('#formSubmit-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-bottom-left-radius').val($(this).val());
    }

    makePreview();
  });
  $('#formSubmit-border-left-style').on('change', function () {
    $(formSubmitElem).css('border-left-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#formSubmit-border-left-color').on('change', function () {
    $(formSubmitElem).css('border-left-color', $(this).val());
    makePreview();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (includeSubmitSettings);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL2Zvcm0vZm9ybVNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9BUEkvbW9kdWxlcy9mb3JtL2lucHV0c1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9BUEkvbW9kdWxlcy9mb3JtL3N1bWJpdFNldHRpbmdzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsImZvcm1CbG9ja0lkIiwicGFyZW50cyIsImF0dHIiLCJmb3JtQmxvY2tFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsb25JZCIsImdldFJhbmRvbSIsImNsb25lIiwiaW5zZXJ0QWZ0ZXIiLCJmb3JtSWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlkIiwiaW5wdXRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlNvcnRhYmxlIiwiY3JlYXRlIiwiZ2V0IiwiYW5pbWF0aW9uIiwic3dhcFRocmVzaG9sZCIsImVtcHR5SW5zZXJ0VGhyZXNob2xkIiwiZ2hvc3RDbGFzcyIsIm9uU3RhcnQiLCJlIiwiaSIsImxlbmd0aCIsIm9uYmx1ciIsIm9uRW5kIiwiYmx1ciIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJtYWtlUHJldmlldyIsImFkZEZ1bmN0aW9uYWxpdHlUb0Zvcm1FbGVtZW50IiwidGhzIiwiZm9ybVdyYXBwZXJFbGVtIiwiY3VycmVudEZvcm0iLCJmb3JtU3VibWl0RWxlbSIsImZvcm1JbnB1dHMiLCJhbGxJbnB1dHMiLCJvZmYiLCJ0aW1lIiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJzcGxpdCIsImgiLCJNYXRoIiwiZmxvb3IiLCJtIiwicyIsInZhbCIsInByb3AiLCJoaWRlIiwic2hvdyIsImNzcyIsInJpZ2h0IiwidHJhbnNpdGlvbiIsImFkZENsYXNzIiwic2hvd0hpZGVTZXR0aW5ncyIsImdldENvbXB1dGVkU3R5bGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJmb3JtTWFyZ2luQm90dG9tIiwiY2hlY2tlZCIsImZvcm1NYXJnaW5Ub3AiLCJmb3JtTWFyZ2luQ2VudGVyIiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImh2IiwidnYiLCJibHIiLCJjbHIiLCJoZXhUb1JHQiIsInBycHRzIiwic3ByZCIsImluc2V0IiwiaW5jbHVkZUlucHV0c1NldHRpbmdzIiwiaW5jbHVkZVN1Ym1pdFNldHRpbmdzIiwiaG91cnMiLCJtaW51dGUiLCJzZWNvbmQiLCJyZW1vdmUiLCJhcHBlbmQiLCJpbnB1dGVyQWRkIiwic2hvd09wdGlvbnNGb3JBZGQiLCJvbmNoYW5nZSIsInNlbGVjdGVkSW5kZXgiLCJmb3JtSW5wdXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibmFtZSIsInR5cGUiLCJvcHRpb25zIiwiZm9ybUlucHV0Qm9sZCIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiZm9ybUlucHV0Rm9udEZhbWlseVNlbGVjdCIsImZvbnRTaXplIiwicGFyc2VGbG9hdCIsIndpZHRoIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wU3R5bGUiLCJib3JkZXJUb3BDb2xvciIsImJvcmRlclJpZ2h0V2lkdGgiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlclJpZ2h0U3R5bGUiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVN0eWxlIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyTGVmdFN0eWxlIiwiYm9yZGVyTGVmdENvbG9yIiwiZm9ybUlucHV0QXV0b0hlaWdodCIsImhlaWdodCIsImZvcm1UZXh0U2hhZG93UmFkaW9PbiIsInRleHRTaGFkb3ciLCJpbnNlcnRCZWZvcmUiLCJzaG93T3B0aW9uc0ZvckRlbGV0ZSIsImlucHV0ZXJEZWxldGUiLCJkZWxldGVJbnB1dCIsImVsIiwiaW5wdXRDbGFzcyIsInN0cmluZ1RvRGVsZXRlIiwiUmVnRXhwIiwicmVwbGFjZSIsImhpZGRlbklkIiwicHJvZHVjdElkRWwiLCJmb3JtSW5wdXRCYWNrZ3JvdW5kUmFkaW9Db2xvciIsImZvcm1JbnB1dEJhY2tncm91bmRHcmFkaWVudCIsImZvcm1JbnB1dEJhY2tncm91bmRDb2xvciIsImZvcm1JbnB1dEJhY2tncm91bmRSYWRpb0dyYWRpZW50Iiwib3BhY2l0eSIsImZvcm1JbnB1dEF1dG9XaWR0aCIsImZvcm1JbnB1dEJvcmRlclJhZGlvRXZlcnkiLCJmb3JtSW5wdXRCb3JkZXJBbGwiLCJmb3JtSW5wdXRCb3JkZXJFdmVyeSIsImZvcm1JbnB1dEJvcmRlclJhZGlvQWxsIiwiZmluZCIsImZvcm1TdWJtaXRGb250RmFtaWx5U2VsZWN0IiwiZm9ybVN1Ym1pdEJvbGQiLCJmb3JtU3VibWl0QmFja2dyb3VuZFJhZGlvQ29sb3IiLCJmb3JtU3VibWl0QmFja2dyb3VuZEdyYWRpZW50IiwiZm9ybVN1Ym1pdEJhY2tncm91bmRDb2xvciIsImZvcm1TdWJtaXRCYWNrZ3JvdW5kUmFkaW9HcmFkaWVudCIsImZvcm1TdWJtaXRBdXRvSGVpZ2h0IiwiZm9ybVN1Ym1pdEF1dG9XaWR0aCIsImZvcm1TdWJtaXRCb3JkZXJSYWRpb0V2ZXJ5IiwiZm9ybVN1Ym1pdEJvcmRlckFsbCIsImZvcm1TdWJtaXRCb3JkZXJFdmVyeSIsImZvcm1TdWJtaXRCb3JkZXJSYWRpb0FsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUMsRUFBZixDQUFrQixPQUFsQixFQUEyQixXQUEzQixFQUF3QyxZQUFZO0FBQ2xELE1BQU1DLFdBQVcsR0FBR0YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxPQUFSLENBQWdCLFlBQWhCLEVBQThCQyxJQUE5QixDQUFtQyxJQUFuQyxDQUFwQjtBQUNBLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCTCxXQUF4QixDQUF0QjtBQUNBLE1BQU1NLE1BQU0sR0FBRyxTQUFTQyxTQUFTLEVBQWpDO0FBQ0FULEdBQUMsQ0FBQ0ssYUFBRCxDQUFELENBQWlCSyxLQUFqQixDQUF1QixJQUF2QixFQUE2Qk4sSUFBN0IsQ0FBa0MsSUFBbEMsRUFBd0NJLE1BQXhDLEVBQWdERyxXQUFoRCxDQUE0RE4sYUFBNUQ7QUFFQSxNQUFNTyxNQUFNLEdBQUdILFNBQVMsRUFBeEI7QUFDQUgsVUFBUSxDQUFDQyxjQUFULENBQXdCQyxNQUF4QixFQUFnQ0ssb0JBQWhDLENBQXFELE1BQXJELEVBQTZELENBQTdELEVBQWdFQyxFQUFoRSxHQUFxRUYsTUFBckU7QUFDQSxNQUFNRyxNQUFNLEdBQUdULFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkssTUFBeEIsRUFBZ0NJLHNCQUFoQyxDQUF1RCxVQUF2RCxDQUFmO0FBRUFDLFVBQVEsQ0FBQ0MsTUFBVCxDQUFnQmxCLENBQUMsQ0FBQyxNQUFNWSxNQUFOLEdBQWUsRUFBaEIsQ0FBRCxDQUFxQk8sR0FBckIsQ0FBeUIsQ0FBekIsQ0FBaEIsRUFBNkM7QUFDM0NDLGFBQVMsRUFBRSxHQURnQztBQUUzQ0MsaUJBQWEsRUFBRSxDQUY0QjtBQUczQ0Msd0JBQW9CLEVBQUUsQ0FIcUI7QUFJM0NDLGNBQVUsRUFBRSx1QkFKK0I7QUFLM0NDLFdBQU8sRUFBRSxpQkFBVUMsQ0FBVixFQUFhO0FBQ3BCLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1gsTUFBTSxDQUFDWSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztBQUN0Q1gsY0FBTSxDQUFDVyxDQUFELENBQU4sQ0FBVUUsTUFBVixHQUFtQixZQUFZO0FBQzdCLGlCQUFPLEtBQVA7QUFDRCxTQUZEO0FBR0Q7QUFDRixLQVgwQztBQVkzQ0MsU0FBSyxFQUFFLGVBQVVKLENBQVYsRUFBYTtBQUFBLGlDQUNUQyxDQURTO0FBRWhCWCxjQUFNLENBQUNXLENBQUQsQ0FBTixDQUFVSSxJQUFWOztBQUNBZixjQUFNLENBQUNXLENBQUQsQ0FBTixDQUFVRSxNQUFWLEdBQW1CLFlBQVk7QUFDN0JiLGdCQUFNLENBQUNXLENBQUQsQ0FBTixDQUFVSyxXQUFWLEdBQXdCaEIsTUFBTSxDQUFDVyxDQUFELENBQU4sQ0FBVU0sS0FBbEM7QUFDQWpCLGdCQUFNLENBQUNXLENBQUQsQ0FBTixDQUFVTSxLQUFWLEdBQWtCLEVBQWxCO0FBQ0QsU0FIRDtBQUhnQjs7QUFDbEIsV0FBSyxJQUFJTixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxNQUFNLENBQUNZLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQUEsY0FBL0JBLENBQStCO0FBTXZDOztBQUNETyxpQkFBVztBQUNaO0FBckIwQyxHQUE3QztBQXdCQUMsK0JBQTZCLENBQUMxQixNQUFELENBQTdCO0FBQ0F5QixhQUFXO0FBQ1osQ0FwQ0Q7QUFzQ0FqQyxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVDLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsVUFBM0IsRUFBdUMsVUFBVXdCLENBQVYsRUFBYTtBQUVsRCxNQUFNVSxHQUFHLEdBQUduQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLE9BQVIsQ0FBZ0IsWUFBaEIsQ0FBWjtBQUNBLE1BQU1FLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCNEIsR0FBRyxDQUFDL0IsSUFBSixDQUFTLElBQVQsQ0FBeEIsQ0FBdEI7QUFDQSxNQUFNZ0MsZUFBZSxHQUFHL0IsYUFBYSxDQUFDVyxzQkFBZCxDQUFxQyxhQUFyQyxFQUFvRCxDQUFwRCxDQUF4QjtBQUNBLE1BQUlxQixXQUFXLEdBQUdoQyxhQUFhLENBQUNRLG9CQUFkLENBQW1DLE1BQW5DLEVBQTJDLENBQTNDLENBQWxCO0FBQ0EsTUFBSXlCLGNBQWMsR0FBR0QsV0FBVyxDQUFDckIsc0JBQVosQ0FBbUMsV0FBbkMsRUFBZ0QsQ0FBaEQsQ0FBckI7QUFDQSxNQUFJdUIsVUFBVSxHQUFHRixXQUFXLENBQUNyQixzQkFBWixDQUFtQyxVQUFuQyxDQUFqQjtBQUNBLE1BQUl3QixTQUFTLEdBQUdILFdBQVcsQ0FBQ3hCLG9CQUFaLENBQWlDLE9BQWpDLENBQWhCLENBUmtELENBVWxEOztBQUNBYixHQUFDLENBQUMsNkNBQUQsQ0FBRCxDQUFpRHlDLEdBQWpELENBQXFELE9BQXJEO0FBQ0F6QyxHQUFDLENBQUMsNkNBQUQsQ0FBRCxDQUFpRHlDLEdBQWpEO0FBQ0F6QyxHQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QnlDLEdBQXhCO0FBQ0F6QyxHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QnlDLEdBQTdCO0FBQ0F6QyxHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QnlDLEdBQTlCO0FBQ0F6QyxHQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ3lDLEdBQWxDO0FBQ0F6QyxHQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQnlDLEdBQS9CO0FBQ0F6QyxHQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ3lDLEdBQWhDOztBQUVBLE1BQUluQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBWTRCLEdBQUcsQ0FBQy9CLElBQUosQ0FBUyxJQUFULENBQXBDLENBQUosRUFBeUQ7QUFDdkQsUUFBSXNDLElBQUksR0FBR0MsUUFBUSxDQUFDckMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQVk0QixHQUFHLENBQUMvQixJQUFKLENBQVMsSUFBVCxDQUFwQyxFQUFvRHdDLFNBQXBELENBQThEQyxLQUE5RCxDQUFvRSxHQUFwRSxFQUF5RSxDQUF6RSxDQUFELENBQVIsR0FBd0YsSUFBbkc7QUFDQSxRQUFJQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixJQUFJLEdBQUcsSUFBbEIsQ0FBUjtBQUNBLFFBQUlPLENBQUMsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ04sSUFBSSxHQUFHLE9BQU9JLENBQWYsSUFBb0IsRUFBL0IsQ0FBUjtBQUNBLFFBQUlJLENBQUMsR0FBR1IsSUFBSSxJQUFJLE9BQU9JLENBQVAsR0FBVyxLQUFLRyxDQUFwQixDQUFaO0FBQ0FqRCxLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLENBQWtDTCxDQUFsQztBQUNBOUMsS0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NtRCxHQUFoQyxDQUFvQ0YsQ0FBcEM7QUFDQWpELEtBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDbUQsR0FBaEMsQ0FBb0NELENBQXBDO0FBQ0FsRCxLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm9ELElBQTlCLENBQW1DLFNBQW5DLEVBQThDLElBQTlDO0FBQ0QsR0FURCxNQVNPO0FBQ0xwRCxLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLENBQWtDLENBQWxDO0FBQ0FuRCxLQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ21ELEdBQWhDLENBQW9DLENBQXBDO0FBQ0FuRCxLQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ21ELEdBQWhDLENBQW9DLENBQXBDO0FBQ0Q7O0FBQ0RuRCxHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QnFELElBQXpCO0FBQ0FyRCxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCcUQsSUFBbEI7QUFDQXJELEdBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCcUQsSUFBMUI7QUFDQXJELEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCcUQsSUFBN0I7QUFDQXJELEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCcUQsSUFBckI7QUFDQXJELEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCcUQsSUFBckI7QUFDQXJELEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CcUQsSUFBcEI7QUFDQXJELEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCcUQsSUFBdEI7QUFDQXJELEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCcUQsSUFBekI7QUFDQXJELEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CcUQsSUFBcEI7QUFDQXJELEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CcUQsSUFBcEI7QUFDQXJELEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9Cc0QsSUFBcEI7QUFDQXRELEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJ1RCxHQUFuQixDQUF1QjtBQUNyQkMsU0FBSyxFQUFFLEtBRGM7QUFFckJDLGNBQVUsRUFBRTtBQUZTLEdBQXZCLEVBR0dDLFFBSEgsQ0FHWSxXQUhaLEVBOUNrRCxDQW1EbEQ7O0FBRUFDLGtCQUFnQixDQUFDLGlCQUFELEVBQW9CLDBCQUFwQixDQUFoQjtBQUVBM0QsR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJtRCxHQUE1QixDQUFnQ1IsUUFBUSxDQUFDaUIsZ0JBQWdCLENBQUN2RCxhQUFELENBQWhCLENBQWdDd0QsU0FBakMsQ0FBeEM7QUFDQTdELEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDbUQsR0FBbEMsQ0FBc0NSLFFBQVEsQ0FBQ2lCLGdCQUFnQixDQUFDdkQsYUFBRCxDQUFoQixDQUFnQ3dELFNBQWpDLENBQTlDO0FBQ0E3RCxHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLENBQWtDUixRQUFRLENBQUNpQixnQkFBZ0IsQ0FBQ3ZELGFBQUQsQ0FBaEIsQ0FBZ0N5RCxXQUFqQyxDQUExQztBQUNBOUQsR0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NtRCxHQUFwQyxDQUF3Q1IsUUFBUSxDQUFDaUIsZ0JBQWdCLENBQUN2RCxhQUFELENBQWhCLENBQWdDeUQsV0FBakMsQ0FBaEQ7QUFDQTlELEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCbUQsR0FBL0IsQ0FBbUNSLFFBQVEsQ0FBQ2lCLGdCQUFnQixDQUFDdkQsYUFBRCxDQUFoQixDQUFnQzBELFlBQWpDLENBQTNDO0FBQ0EvRCxHQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ21ELEdBQXJDLENBQXlDUixRQUFRLENBQUNpQixnQkFBZ0IsQ0FBQ3ZELGFBQUQsQ0FBaEIsQ0FBZ0MwRCxZQUFqQyxDQUFqRDtBQUNBL0QsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJtRCxHQUE3QixDQUFpQ1IsUUFBUSxDQUFDaUIsZ0JBQWdCLENBQUN2RCxhQUFELENBQWhCLENBQWdDMkQsVUFBakMsQ0FBekM7QUFDQWhFLEdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbUQsR0FBbkMsQ0FBdUNSLFFBQVEsQ0FBQ2lCLGdCQUFnQixDQUFDdkQsYUFBRCxDQUFoQixDQUFnQzJELFVBQWpDLENBQS9DO0FBRUFoRSxHQUFDLENBQUMsc0RBQUQsQ0FBRCxDQUEwREMsRUFBMUQsQ0FBNkQsT0FBN0QsRUFBc0UsWUFBWTtBQUNoRkQsS0FBQyxDQUFDSyxhQUFELENBQUQsQ0FBaUJrRCxHQUFqQixDQUFxQixZQUFyQixFQUFtQyxFQUFuQztBQUNBLFFBQUlKLEdBQUcsR0FBR25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBVjtBQUNBbkQsS0FBQyxDQUFDSyxhQUFELENBQUQsQ0FBaUJELElBQWpCLENBQXNCLE9BQXRCLEVBQStCLFVBQVVzQixDQUFWLEVBQWF3QixDQUFiLEVBQWdCO0FBQzdDLGFBQU8sQ0FBQ0EsQ0FBQyxJQUFJLEVBQU4sSUFBWSxhQUFaLEdBQTRCQyxHQUE1QixHQUFrQyxnQkFBekM7QUFDRCxLQUZEOztBQUdBLFFBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLHVCQUExQixFQUFtRDtBQUNqREosT0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxDQUFzQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBdEM7QUFDRCxLQUZELE1BRU87QUFDTG5ELE9BQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCbUQsR0FBNUIsQ0FBZ0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWhDO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FaRDtBQWFBakMsR0FBQyxDQUFDLDBEQUFELENBQUQsQ0FBOERDLEVBQTlELENBQWlFLE9BQWpFLEVBQTBFLFlBQVk7QUFDcEZELEtBQUMsQ0FBQ0ssYUFBRCxDQUFELENBQWlCa0QsR0FBakIsQ0FBcUIsY0FBckIsRUFBcUMsRUFBckM7QUFDQSxRQUFJSixHQUFHLEdBQUduRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQVY7QUFDQW5ELEtBQUMsQ0FBQ0ssYUFBRCxDQUFELENBQWlCRCxJQUFqQixDQUFzQixPQUF0QixFQUErQixVQUFVc0IsQ0FBVixFQUFhd0IsQ0FBYixFQUFnQjtBQUM3QyxhQUFPLENBQUNBLENBQUMsSUFBSSxFQUFOLElBQVksZUFBWixHQUE4QkMsR0FBOUIsR0FBb0MsZ0JBQTNDO0FBQ0QsS0FGRDs7QUFHQSxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQix5QkFBMUIsRUFBcUQ7QUFDbkRKLE9BQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DbUQsR0FBcEMsQ0FBd0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXhDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLENBQWtDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFsQztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBWkQ7QUFhQWpDLEdBQUMsQ0FBQyw0REFBRCxDQUFELENBQWdFQyxFQUFoRSxDQUFtRSxPQUFuRSxFQUE0RSxZQUFZO0FBQ3RGRCxLQUFDLENBQUNLLGFBQUQsQ0FBRCxDQUFpQmtELEdBQWpCLENBQXFCLGVBQXJCLEVBQXNDLEVBQXRDO0FBQ0EsUUFBSUosR0FBRyxHQUFHbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFWO0FBQ0FuRCxLQUFDLENBQUNLLGFBQUQsQ0FBRCxDQUFpQkQsSUFBakIsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBVXNCLENBQVYsRUFBYXdCLENBQWIsRUFBZ0I7QUFDN0MsYUFBTyxDQUFDQSxDQUFDLElBQUksRUFBTixJQUFZLGdCQUFaLEdBQStCQyxHQUEvQixHQUFxQyxnQkFBNUM7QUFDRCxLQUZEOztBQUdBLFFBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDBCQUExQixFQUFzRDtBQUNwREosT0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNtRCxHQUFyQyxDQUF5Q25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBekM7QUFDRCxLQUZELE1BRU87QUFDTG5ELE9BQUMsQ0FBQywyQkFBRCxDQUFELENBQStCbUQsR0FBL0IsQ0FBbUNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQW5DO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FaRDtBQWFBakMsR0FBQyxDQUFDLHdEQUFELENBQUQsQ0FBNERDLEVBQTVELENBQStELE9BQS9ELEVBQXdFLFlBQVk7QUFDbEZELEtBQUMsQ0FBQ0ssYUFBRCxDQUFELENBQWlCa0QsR0FBakIsQ0FBcUIsYUFBckIsRUFBb0MsRUFBcEM7QUFDQSxRQUFJSixHQUFHLEdBQUduRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQVY7QUFDQW5ELEtBQUMsQ0FBQ0ssYUFBRCxDQUFELENBQWlCRCxJQUFqQixDQUFzQixPQUF0QixFQUErQixVQUFVc0IsQ0FBVixFQUFhd0IsQ0FBYixFQUFnQjtBQUM3QyxhQUFPLENBQUNBLENBQUMsSUFBSSxFQUFOLElBQVksY0FBWixHQUE2QkMsR0FBN0IsR0FBbUMsZ0JBQTFDO0FBQ0QsS0FGRDs7QUFHQSxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQix3QkFBMUIsRUFBb0Q7QUFDbERKLE9BQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbUQsR0FBbkMsQ0FBdUNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXZDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1ELEdBQTdCLENBQWlDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFqQztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBWkQsRUF2R2tELENBcUhsRDs7QUFFQTBCLGtCQUFnQixDQUFDLDZCQUFELEVBQWdDLHVCQUFoQyxDQUFoQjs7QUFFQSxNQUFJQyxnQkFBZ0IsQ0FBQ3ZELGFBQUQsQ0FBaEIsQ0FBZ0N3RCxTQUFoQyxJQUE2QyxNQUFqRCxFQUF5RDtBQUN2REksb0JBQWdCLENBQUNDLE9BQWpCLEdBQTJCLElBQTNCO0FBQ0FDLGlCQUFhLENBQUNELE9BQWQsR0FBd0IsS0FBeEI7QUFDQUUsb0JBQWdCLENBQUNGLE9BQWpCLEdBQTJCLEtBQTNCO0FBQ0QsR0FKRCxNQUlPLElBQUlOLGdCQUFnQixDQUFDdkQsYUFBRCxDQUFoQixDQUFnQzBELFlBQWhDLElBQWdELE1BQXBELEVBQTREO0FBQ2pFRSxvQkFBZ0IsQ0FBQ0MsT0FBakIsR0FBMkIsS0FBM0I7QUFDQUMsaUJBQWEsQ0FBQ0QsT0FBZCxHQUF3QixJQUF4QjtBQUNBRSxvQkFBZ0IsQ0FBQ0YsT0FBakIsR0FBMkIsS0FBM0I7QUFDRCxHQUpNLE1BSUEsSUFBSU4sZ0JBQWdCLENBQUN2RCxhQUFELENBQWhCLENBQWdDd0QsU0FBaEMsSUFBNkMsS0FBN0MsSUFBc0RELGdCQUFnQixDQUFDdkQsYUFBRCxDQUFoQixDQUFnQzBELFlBQWhDLElBQWdELEtBQTFHLEVBQWlIO0FBQ3RIRSxvQkFBZ0IsQ0FBQ0MsT0FBakIsR0FBMkIsS0FBM0I7QUFDQUMsaUJBQWEsQ0FBQ0QsT0FBZCxHQUF3QixLQUF4QjtBQUNBRSxvQkFBZ0IsQ0FBQ0YsT0FBakIsR0FBMkIsSUFBM0I7QUFDRDs7QUFDREMsZUFBYSxDQUFDRSxPQUFkLEdBQXdCLFlBQVk7QUFDbENoRSxpQkFBYSxDQUFDaUUsS0FBZCxDQUFvQlQsU0FBcEIsR0FBZ0MsS0FBaEM7QUFDQXhELGlCQUFhLENBQUNpRSxLQUFkLENBQW9CUCxZQUFwQixHQUFtQyxNQUFuQztBQUNBOUIsZUFBVztBQUNaLEdBSkQ7O0FBS0FtQyxrQkFBZ0IsQ0FBQ0MsT0FBakIsR0FBMkIsWUFBWTtBQUNyQ2hFLGlCQUFhLENBQUNpRSxLQUFkLENBQW9CVCxTQUFwQixHQUFnQyxLQUFoQztBQUNBeEQsaUJBQWEsQ0FBQ2lFLEtBQWQsQ0FBb0JQLFlBQXBCLEdBQW1DLEtBQW5DO0FBQ0E5QixlQUFXO0FBQ1osR0FKRDs7QUFLQWdDLGtCQUFnQixDQUFDSSxPQUFqQixHQUEyQixZQUFZO0FBQ3JDaEUsaUJBQWEsQ0FBQ2lFLEtBQWQsQ0FBb0JULFNBQXBCLEdBQWdDLE1BQWhDO0FBQ0F4RCxpQkFBYSxDQUFDaUUsS0FBZCxDQUFvQlAsWUFBcEIsR0FBbUMsS0FBbkM7QUFDQTlCLGVBQVc7QUFDWixHQUpEO0FBTUE7OztBQUVBMEIsa0JBQWdCLENBQUMsMkJBQUQsRUFBOEIseUJBQTlCLENBQWhCOztBQUVBckQsVUFBUSxDQUFDQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRDhELE9BQWpELEdBQTJELFlBQVk7QUFDckUvRCxZQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDK0QsS0FBNUMsQ0FBa0RDLE9BQWxELEdBQTRELE9BQTVEO0FBQ0EsUUFBSUMsRUFBRSxHQUFHeEUsQ0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NtRCxHQUF4QyxLQUFnRCxJQUF6RDtBQUNBLFFBQUlzQixFQUFFLEdBQUd6RSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ21ELEdBQXRDLEtBQThDLElBQXZEO0FBQ0EsUUFBSXVCLEdBQUcsR0FBRzFFLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDbUQsR0FBbEMsS0FBMEMsSUFBcEQ7QUFDQSxRQUFJd0IsR0FBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLEVBQUQsRUFBMkNuRCxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ21ELEdBQXJDLEtBQTZDLEdBQXhGLENBQWxCO0FBQ0EsUUFBSTBCLEtBQUssR0FBR0wsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLEdBQTlDOztBQUNBLFNBQUssSUFBSWpELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdjLFNBQVMsQ0FBQ2IsTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMxQixPQUFDLENBQUN3QyxTQUFTLENBQUNkLENBQUQsQ0FBVixDQUFELENBQWdCNkIsR0FBaEIsQ0FBb0IsYUFBcEIsRUFBbUNzQixLQUFuQztBQUNEOztBQUNENUMsZUFBVztBQUNaLEdBWEQ7O0FBWUEzQixVQUFRLENBQUNDLGNBQVQsQ0FBd0Isd0JBQXhCLEVBQWtEOEQsT0FBbEQsR0FBNEQsWUFBWTtBQUN0RS9ELFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsRUFBNEMrRCxLQUE1QyxDQUFrREMsT0FBbEQsR0FBNEQsTUFBNUQ7O0FBQ0EsU0FBSyxJQUFJN0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2MsU0FBUyxDQUFDYixNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QzFCLE9BQUMsQ0FBQ3dDLFNBQVMsQ0FBQ2QsQ0FBRCxDQUFWLENBQUQsQ0FBZ0I2QixHQUFoQixDQUFvQixhQUFwQixFQUFtQyxNQUFuQztBQUNEOztBQUNEdEIsZUFBVztBQUNaLEdBTkQ7O0FBUUFqQyxHQUFDLENBQUMsOEVBQUQsQ0FBRCxDQUFrRkMsRUFBbEYsQ0FBcUYsT0FBckYsRUFBOEYsWUFBWTtBQUN4RyxRQUFJdUUsRUFBRSxHQUFHeEUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixLQUFnQixJQUF6QjtBQUNBLFFBQUlzQixFQUFFLEdBQUd6RSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ21ELEdBQXRDLEtBQThDLElBQXZEO0FBQ0EsUUFBSXVCLEdBQUcsR0FBRzFFLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDbUQsR0FBbEMsS0FBMEMsSUFBcEQ7QUFDQSxRQUFJd0IsR0FBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLEVBQUQsRUFBMkNuRCxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ21ELEdBQXJDLEtBQTZDLEdBQXhGLENBQWxCO0FBQ0EsUUFBSTBCLEtBQUssR0FBR0wsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLEdBQTlDOztBQUNBLFNBQUssSUFBSWpELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdjLFNBQVMsQ0FBQ2IsTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMxQixPQUFDLENBQUN3QyxTQUFTLENBQUNkLENBQUQsQ0FBVixDQUFELENBQWdCNkIsR0FBaEIsQ0FBb0IsYUFBcEIsRUFBbUNzQixLQUFuQztBQUNEOztBQUNELFFBQUk3RSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLG1DQUExQixFQUErRDtBQUM3REosT0FBQyxDQUFDLDBDQUFELENBQUQsQ0FBOENtRCxHQUE5QyxDQUFrRG5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBbEQ7QUFDRCxLQUZELE1BRU87QUFDTG5ELE9BQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDbUQsR0FBeEMsQ0FBNENuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQTVDO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FmRDtBQWlCQWpDLEdBQUMsQ0FBQywwRUFBRCxDQUFELENBQThFQyxFQUE5RSxDQUFpRixPQUFqRixFQUEwRixZQUFZO0FBQ3BHLFFBQUl1RSxFQUFFLEdBQUd4RSxDQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q21ELEdBQXhDLEtBQWdELElBQXpEO0FBQ0EsUUFBSXNCLEVBQUUsR0FBR3pFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBekI7QUFDQSxRQUFJdUIsR0FBRyxHQUFHMUUsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxLQUEwQyxJQUFwRDtBQUNBLFFBQUl3QixHQUFHLEdBQUdDLFFBQVEsQ0FBQzVFLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbUQsR0FBbkMsRUFBRCxFQUEyQ25ELENBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDbUQsR0FBckMsS0FBNkMsR0FBeEYsQ0FBbEI7QUFDQSxRQUFJMEIsS0FBSyxHQUFHTCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQUFYLEdBQWdCLEdBQWhCLEdBQXNCQyxHQUF0QixHQUE0QixHQUE1QixHQUFrQ0MsR0FBOUM7O0FBQ0EsU0FBSyxJQUFJakQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2MsU0FBUyxDQUFDYixNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QzFCLE9BQUMsQ0FBQ3dDLFNBQVMsQ0FBQ2QsQ0FBRCxDQUFWLENBQUQsQ0FBZ0I2QixHQUFoQixDQUFvQixhQUFwQixFQUFtQ3NCLEtBQW5DO0FBQ0Q7O0FBQ0QsUUFBSTdFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsaUNBQTFCLEVBQTZEO0FBQzNESixPQUFDLENBQUMsd0NBQUQsQ0FBRCxDQUE0Q21ELEdBQTVDLENBQWdEbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFoRDtBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NtRCxHQUF0QyxDQUEwQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBMUM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQWZEO0FBaUJBakMsR0FBQyxDQUFDLGtFQUFELENBQUQsQ0FBc0VDLEVBQXRFLENBQXlFLE9BQXpFLEVBQWtGLFlBQVk7QUFDNUYsUUFBSXVFLEVBQUUsR0FBR3hFLENBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDbUQsR0FBeEMsS0FBZ0QsSUFBekQ7QUFDQSxRQUFJc0IsRUFBRSxHQUFHekUsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NtRCxHQUF0QyxLQUE4QyxJQUF2RDtBQUNBLFFBQUl1QixHQUFHLEdBQUcxRSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLElBQTFCO0FBQ0EsUUFBSXdCLEdBQUcsR0FBR0MsUUFBUSxDQUFDNUUsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNtRCxHQUFuQyxFQUFELEVBQTJDbkQsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNtRCxHQUFyQyxLQUE2QyxHQUF4RixDQUFsQjtBQUNBLFFBQUkwQixLQUFLLEdBQUdMLEVBQUUsR0FBRyxHQUFMLEdBQVdDLEVBQVgsR0FBZ0IsR0FBaEIsR0FBc0JDLEdBQXRCLEdBQTRCLEdBQTVCLEdBQWtDQyxHQUE5Qzs7QUFDQSxTQUFLLElBQUlqRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYyxTQUFTLENBQUNiLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDMUIsT0FBQyxDQUFDd0MsU0FBUyxDQUFDZCxDQUFELENBQVYsQ0FBRCxDQUFnQjZCLEdBQWhCLENBQW9CLGFBQXBCLEVBQW1Dc0IsS0FBbkM7QUFDRDs7QUFDRCxRQUFJN0UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQiw2QkFBMUIsRUFBeUQ7QUFDdkRKLE9BQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDbUQsR0FBeEMsQ0FBNENuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQTVDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ21ELEdBQWxDLENBQXNDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUF0QztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBZkQ7QUFpQkFqQyxHQUFDLENBQUMsd0VBQUQsQ0FBRCxDQUE0RUMsRUFBNUUsQ0FBK0UsT0FBL0UsRUFBd0YsWUFBWTtBQUNsRyxRQUFJdUUsRUFBRSxHQUFHeEUsQ0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NtRCxHQUF4QyxLQUFnRCxJQUF6RDtBQUNBLFFBQUlzQixFQUFFLEdBQUd6RSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ21ELEdBQXRDLEtBQThDLElBQXZEO0FBQ0EsUUFBSXVCLEdBQUcsR0FBRzFFLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDbUQsR0FBbEMsS0FBMEMsSUFBcEQ7QUFDQSxRQUFJd0IsR0FBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLEVBQUQsRUFBMkNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLEdBQTNELENBQWxCO0FBQ0EsUUFBSTBCLEtBQUssR0FBR0wsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLEdBQTlDOztBQUNBLFNBQUssSUFBSWpELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdjLFNBQVMsQ0FBQ2IsTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMxQixPQUFDLENBQUN3QyxTQUFTLENBQUNkLENBQUQsQ0FBVixDQUFELENBQWdCNkIsR0FBaEIsQ0FBb0IsYUFBcEIsRUFBbUNzQixLQUFuQztBQUNEOztBQUNELFFBQUk3RSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLGdDQUExQixFQUE0RDtBQUMxREosT0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNtRCxHQUEzQyxDQUErQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBL0M7QUFDRCxLQUZELE1BRU87QUFDTG5ELE9BQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDbUQsR0FBckMsQ0FBeUNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXpDO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FmRDtBQWlCQWpDLEdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DQyxFQUFuQyxDQUFzQyxRQUF0QyxFQUFnRCxZQUFZO0FBQzFELFFBQUl1RSxFQUFFLEdBQUd4RSxDQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q21ELEdBQXhDLEtBQWdELElBQXpEO0FBQ0EsUUFBSXNCLEVBQUUsR0FBR3pFLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDbUQsR0FBdEMsS0FBOEMsSUFBdkQ7QUFDQSxRQUFJdUIsR0FBRyxHQUFHMUUsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxLQUEwQyxJQUFwRDtBQUNBLFFBQUl3QixHQUFHLEdBQUdDLFFBQVEsQ0FBQzVFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBRCxFQUFnQm5ELENBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDbUQsR0FBckMsS0FBNkMsR0FBN0QsQ0FBbEI7QUFDQSxRQUFJMEIsS0FBSyxHQUFHTCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQUFYLEdBQWdCLEdBQWhCLEdBQXNCQyxHQUF0QixHQUE0QixHQUE1QixHQUFrQ0MsR0FBOUM7O0FBQ0EsU0FBSyxJQUFJakQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2MsU0FBUyxDQUFDYixNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QzFCLE9BQUMsQ0FBQ3dDLFNBQVMsQ0FBQ2QsQ0FBRCxDQUFWLENBQUQsQ0FBZ0I2QixHQUFoQixDQUFvQixhQUFwQixFQUFtQ3NCLEtBQW5DO0FBQ0Q7O0FBQ0Q1QyxlQUFXO0FBQ1osR0FWRDtBQVdBOztBQUVBOztBQUVBMEIsa0JBQWdCLENBQUMsc0JBQUQsRUFBeUIscUJBQXpCLENBQWhCOztBQUVBckQsVUFBUSxDQUFDQyxjQUFULENBQXdCLG1CQUF4QixFQUE2QzhELE9BQTdDLEdBQXVELFlBQVk7QUFDakUvRCxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMrRCxLQUF2QyxDQUE2Q0MsT0FBN0MsR0FBdUQsT0FBdkQ7QUFDQSxRQUFJQyxFQUFFLEdBQUd4RSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLEtBQTJDLElBQXBEO0FBQ0EsUUFBSXNCLEVBQUUsR0FBR3pFLENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDbUQsR0FBakMsS0FBeUMsSUFBbEQ7QUFDQSxRQUFJdUIsR0FBRyxHQUFHMUUsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJtRCxHQUE3QixLQUFxQyxJQUEvQztBQUNBLFFBQUkyQixJQUFJLEdBQUc5RSxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQm1ELEdBQS9CLEtBQXVDLElBQWxEO0FBQ0EsUUFBSXdCLEdBQUcsR0FBR0MsUUFBUSxDQUFDNUUsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJtRCxHQUE5QixFQUFELEVBQXNDbkQsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NtRCxHQUFoQyxLQUF3QyxHQUE5RSxDQUFsQjtBQUNBLFFBQUk0QixLQUFLLEdBQUcvRSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm9ELElBQTlCLENBQW1DLFNBQW5DLEtBQWlELElBQWpELEdBQXdELE9BQXhELEdBQWtFLEVBQTlFO0FBQ0EsUUFBSXlCLEtBQUssR0FBR0wsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NJLElBQWxDLEdBQXlDLEdBQXpDLEdBQStDSCxHQUEvQyxHQUFxRCxHQUFyRCxHQUEyREksS0FBdkU7O0FBQ0EsU0FBSyxJQUFJckQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2MsU0FBUyxDQUFDYixNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QzFCLE9BQUMsQ0FBQ3dDLFNBQVMsQ0FBQ2QsQ0FBRCxDQUFWLENBQUQsQ0FBZ0I2QixHQUFoQixDQUFvQixZQUFwQixFQUFrQ3NCLEtBQWxDO0FBQ0Q7O0FBQ0Q1QyxlQUFXO0FBQ1osR0FiRDs7QUFjQTNCLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsRUFBOEM4RCxPQUE5QyxHQUF3RCxZQUFZO0FBQ2xFL0QsWUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDK0QsS0FBdkMsQ0FBNkNDLE9BQTdDLEdBQXVELE1BQXZEOztBQUNBLFNBQUssSUFBSTdDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdjLFNBQVMsQ0FBQ2IsTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMxQixPQUFDLENBQUN3QyxTQUFTLENBQUNkLENBQUQsQ0FBVixDQUFELENBQWdCNkIsR0FBaEIsQ0FBb0IsWUFBcEIsRUFBa0MsTUFBbEM7QUFDRDs7QUFDRHRCLGVBQVc7QUFDWixHQU5EOztBQVFBakMsR0FBQyxDQUFDLG9FQUFELENBQUQsQ0FBd0VDLEVBQXhFLENBQTJFLE9BQTNFLEVBQW9GLFlBQVk7QUFDOUYsUUFBSXVFLEVBQUUsR0FBR3hFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBekI7QUFDQSxRQUFJc0IsRUFBRSxHQUFHekUsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNtRCxHQUFqQyxLQUF5QyxJQUFsRDtBQUNBLFFBQUl1QixHQUFHLEdBQUcxRSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1ELEdBQTdCLEtBQXFDLElBQS9DO0FBQ0EsUUFBSTJCLElBQUksR0FBRzlFLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCbUQsR0FBL0IsS0FBdUMsSUFBbEQ7QUFDQSxRQUFJd0IsR0FBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLEVBQUQsRUFBc0NuRCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ21ELEdBQWhDLEtBQXdDLEdBQTlFLENBQWxCO0FBQ0EsUUFBSTRCLEtBQUssR0FBRy9FLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCb0QsSUFBOUIsQ0FBbUMsU0FBbkMsS0FBaUQsSUFBakQsR0FBd0QsT0FBeEQsR0FBa0UsRUFBOUU7QUFDQSxRQUFJeUIsS0FBSyxHQUFHTCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQUFYLEdBQWdCLEdBQWhCLEdBQXNCQyxHQUF0QixHQUE0QixHQUE1QixHQUFrQ0ksSUFBbEMsR0FBeUMsR0FBekMsR0FBK0NILEdBQS9DLEdBQXFELEdBQXJELEdBQTJESSxLQUF2RTs7QUFDQSxTQUFLLElBQUlyRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYyxTQUFTLENBQUNiLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDMUIsT0FBQyxDQUFDd0MsU0FBUyxDQUFDZCxDQUFELENBQVYsQ0FBRCxDQUFnQjZCLEdBQWhCLENBQW9CLFlBQXBCLEVBQWtDc0IsS0FBbEM7QUFDRDs7QUFDRCxRQUFJN0UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQiw4QkFBMUIsRUFBMEQ7QUFDeERKLE9BQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDbUQsR0FBekMsQ0FBNkNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQTdDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLENBQXVDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUF2QztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBakJEO0FBbUJBakMsR0FBQyxDQUFDLGdFQUFELENBQUQsQ0FBb0VDLEVBQXBFLENBQXVFLE9BQXZFLEVBQWdGLFlBQVk7QUFDMUYsUUFBSXVFLEVBQUUsR0FBR3hFLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbUQsR0FBbkMsS0FBMkMsSUFBcEQ7QUFDQSxRQUFJc0IsRUFBRSxHQUFHekUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixLQUFnQixJQUF6QjtBQUNBLFFBQUl1QixHQUFHLEdBQUcxRSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1ELEdBQTdCLEtBQXFDLElBQS9DO0FBQ0EsUUFBSTJCLElBQUksR0FBRzlFLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCbUQsR0FBL0IsS0FBdUMsSUFBbEQ7QUFDQSxRQUFJd0IsR0FBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLEVBQUQsRUFBc0NuRCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ21ELEdBQWhDLEtBQXdDLEdBQTlFLENBQWxCO0FBQ0EsUUFBSTRCLEtBQUssR0FBRy9FLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCb0QsSUFBOUIsQ0FBbUMsU0FBbkMsS0FBaUQsSUFBakQsR0FBd0QsT0FBeEQsR0FBa0UsRUFBOUU7QUFDQSxRQUFJeUIsS0FBSyxHQUFHTCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQUFYLEdBQWdCLEdBQWhCLEdBQXNCQyxHQUF0QixHQUE0QixHQUE1QixHQUFrQ0ksSUFBbEMsR0FBeUMsR0FBekMsR0FBK0NILEdBQS9DLEdBQXFELEdBQXJELEdBQTJESSxLQUF2RTs7QUFDQSxTQUFLLElBQUlyRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYyxTQUFTLENBQUNiLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDMUIsT0FBQyxDQUFDd0MsU0FBUyxDQUFDZCxDQUFELENBQVYsQ0FBRCxDQUFnQjZCLEdBQWhCLENBQW9CLFlBQXBCLEVBQWtDc0IsS0FBbEM7QUFDRDs7QUFDRCxRQUFJN0UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQiw0QkFBMUIsRUFBd0Q7QUFDdERKLE9BQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDbUQsR0FBdkMsQ0FBMkNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQTNDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ21ELEdBQWpDLENBQXFDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFyQztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBakJEO0FBbUJBakMsR0FBQyxDQUFDLHdEQUFELENBQUQsQ0FBNERDLEVBQTVELENBQStELE9BQS9ELEVBQXdFLFlBQVk7QUFDbEYsUUFBSXVFLEVBQUUsR0FBR3hFLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbUQsR0FBbkMsS0FBMkMsSUFBcEQ7QUFDQSxRQUFJc0IsRUFBRSxHQUFHekUsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNtRCxHQUFqQyxLQUF5QyxJQUFsRDtBQUNBLFFBQUl1QixHQUFHLEdBQUcxRSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLElBQTFCO0FBQ0EsUUFBSTJCLElBQUksR0FBRzlFLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCbUQsR0FBL0IsS0FBdUMsSUFBbEQ7QUFDQSxRQUFJd0IsR0FBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLEVBQUQsRUFBc0NuRCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ21ELEdBQWhDLEtBQXdDLEdBQTlFLENBQWxCO0FBQ0EsUUFBSTRCLEtBQUssR0FBRy9FLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCb0QsSUFBOUIsQ0FBbUMsU0FBbkMsS0FBaUQsSUFBakQsR0FBd0QsT0FBeEQsR0FBa0UsRUFBOUU7QUFDQSxRQUFJeUIsS0FBSyxHQUFHTCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQUFYLEdBQWdCLEdBQWhCLEdBQXNCQyxHQUF0QixHQUE0QixHQUE1QixHQUFrQ0ksSUFBbEMsR0FBeUMsR0FBekMsR0FBK0NILEdBQS9DLEdBQXFELEdBQXJELEdBQTJESSxLQUF2RTs7QUFDQSxTQUFLLElBQUlyRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYyxTQUFTLENBQUNiLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDMUIsT0FBQyxDQUFDd0MsU0FBUyxDQUFDZCxDQUFELENBQVYsQ0FBRCxDQUFnQjZCLEdBQWhCLENBQW9CLFlBQXBCLEVBQWtDc0IsS0FBbEM7QUFDRDs7QUFDRCxRQUFJN0UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQix3QkFBMUIsRUFBb0Q7QUFDbERKLE9BQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbUQsR0FBbkMsQ0FBdUNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXZDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1ELEdBQTdCLENBQWlDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFqQztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBakJEO0FBbUJBakMsR0FBQyxDQUFDLDREQUFELENBQUQsQ0FBZ0VDLEVBQWhFLENBQW1FLE9BQW5FLEVBQTRFLFlBQVk7QUFDdEYsUUFBSXVFLEVBQUUsR0FBR3hFLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbUQsR0FBbkMsS0FBMkMsSUFBcEQ7QUFDQSxRQUFJc0IsRUFBRSxHQUFHekUsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNtRCxHQUFqQyxLQUF5QyxJQUFsRDtBQUNBLFFBQUl1QixHQUFHLEdBQUcxRSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1ELEdBQTdCLEtBQXFDLElBQS9DO0FBQ0EsUUFBSTJCLElBQUksR0FBRzlFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBM0I7QUFDQSxRQUFJd0IsR0FBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLEVBQUQsRUFBc0NuRCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ21ELEdBQWhDLEtBQXdDLEdBQTlFLENBQWxCO0FBQ0EsUUFBSTRCLEtBQUssR0FBRy9FLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCb0QsSUFBOUIsQ0FBbUMsU0FBbkMsS0FBaUQsSUFBakQsR0FBd0QsT0FBeEQsR0FBa0UsRUFBOUU7QUFDQSxRQUFJeUIsS0FBSyxHQUFHTCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQUFYLEdBQWdCLEdBQWhCLEdBQXNCQyxHQUF0QixHQUE0QixHQUE1QixHQUFrQ0ksSUFBbEMsR0FBeUMsR0FBekMsR0FBK0NILEdBQS9DLEdBQXFELEdBQXJELEdBQTJESSxLQUF2RTs7QUFDQSxTQUFLLElBQUlyRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYyxTQUFTLENBQUNiLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDMUIsT0FBQyxDQUFDd0MsU0FBUyxDQUFDZCxDQUFELENBQVYsQ0FBRCxDQUFnQjZCLEdBQWhCLENBQW9CLFlBQXBCLEVBQWtDc0IsS0FBbEM7QUFDRDs7QUFDRCxRQUFJN0UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQiwwQkFBMUIsRUFBc0Q7QUFDcERKLE9BQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDbUQsR0FBckMsQ0FBeUNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXpDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQm1ELEdBQS9CLENBQW1DbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFuQztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBakJEO0FBbUJBakMsR0FBQyxDQUFDLDhEQUFELENBQUQsQ0FBa0VDLEVBQWxFLENBQXFFLE9BQXJFLEVBQThFLFlBQVk7QUFDeEYsUUFBSXVFLEVBQUUsR0FBR3hFLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbUQsR0FBbkMsS0FBMkMsSUFBcEQ7QUFDQSxRQUFJc0IsRUFBRSxHQUFHekUsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNtRCxHQUFqQyxLQUF5QyxJQUFsRDtBQUNBLFFBQUl1QixHQUFHLEdBQUcxRSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1ELEdBQTdCLEtBQXFDLElBQS9DO0FBQ0EsUUFBSTJCLElBQUksR0FBRzlFLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCbUQsR0FBL0IsS0FBdUMsSUFBbEQ7QUFDQSxRQUFJd0IsR0FBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLEVBQUQsRUFBc0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLEdBQXRELENBQWxCO0FBQ0EsUUFBSTRCLEtBQUssR0FBRy9FLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCb0QsSUFBOUIsQ0FBbUMsU0FBbkMsS0FBaUQsSUFBakQsR0FBd0QsT0FBeEQsR0FBa0UsRUFBOUU7QUFDQSxRQUFJeUIsS0FBSyxHQUFHTCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQUFYLEdBQWdCLEdBQWhCLEdBQXNCQyxHQUF0QixHQUE0QixHQUE1QixHQUFrQ0ksSUFBbEMsR0FBeUMsR0FBekMsR0FBK0NILEdBQS9DLEdBQXFELEdBQXJELEdBQTJESSxLQUF2RTs7QUFDQSxTQUFLLElBQUlyRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYyxTQUFTLENBQUNiLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDMUIsT0FBQyxDQUFDd0MsU0FBUyxDQUFDZCxDQUFELENBQVYsQ0FBRCxDQUFnQjZCLEdBQWhCLENBQW9CLFlBQXBCLEVBQWtDc0IsS0FBbEM7QUFDRDs7QUFDRCxRQUFJN0UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQiwyQkFBMUIsRUFBdUQ7QUFDckRKLE9BQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDbUQsR0FBdEMsQ0FBMENuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQTFDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ21ELEdBQWhDLENBQW9DbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFwQztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBakJEO0FBbUJBakMsR0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJDLEVBQTlCLENBQWlDLFFBQWpDLEVBQTJDLFlBQVk7QUFDckQsUUFBSXVFLEVBQUUsR0FBR3hFLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbUQsR0FBbkMsS0FBMkMsSUFBcEQ7QUFDQSxRQUFJc0IsRUFBRSxHQUFHekUsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNtRCxHQUFqQyxLQUF5QyxJQUFsRDtBQUNBLFFBQUl1QixHQUFHLEdBQUcxRSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1ELEdBQTdCLEtBQXFDLElBQS9DO0FBQ0EsUUFBSTJCLElBQUksR0FBRzlFLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCbUQsR0FBL0IsS0FBdUMsSUFBbEQ7QUFDQSxRQUFJd0IsR0FBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQUQsRUFBZ0JuRCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ21ELEdBQWhDLEtBQXdDLEdBQXhELENBQWxCO0FBQ0EsUUFBSTRCLEtBQUssR0FBRy9FLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCb0QsSUFBOUIsQ0FBbUMsU0FBbkMsS0FBaUQsSUFBakQsR0FBd0QsT0FBeEQsR0FBa0UsRUFBOUU7QUFDQSxRQUFJeUIsS0FBSyxHQUFHTCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQUFYLEdBQWdCLEdBQWhCLEdBQXNCQyxHQUF0QixHQUE0QixHQUE1QixHQUFrQ0ksSUFBbEMsR0FBeUMsR0FBekMsR0FBK0NILEdBQS9DLEdBQXFELEdBQXJELEdBQTJESSxLQUF2RTs7QUFDQSxTQUFLLElBQUlyRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYyxTQUFTLENBQUNiLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDMUIsT0FBQyxDQUFDd0MsU0FBUyxDQUFDZCxDQUFELENBQVYsQ0FBRCxDQUFnQjZCLEdBQWhCLENBQW9CLFlBQXBCLEVBQWtDc0IsS0FBbEM7QUFDRDs7QUFDRDVDLGVBQVc7QUFDWixHQVpEO0FBY0FqQyxHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkMsRUFBOUIsQ0FBaUMsUUFBakMsRUFBMkMsWUFBWTtBQUNyRCxRQUFJdUUsRUFBRSxHQUFHeEUsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNtRCxHQUFuQyxLQUEyQyxJQUFwRDtBQUNBLFFBQUlzQixFQUFFLEdBQUd6RSxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ21ELEdBQWpDLEtBQXlDLElBQWxEO0FBQ0EsUUFBSXVCLEdBQUcsR0FBRzFFLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCbUQsR0FBN0IsS0FBcUMsSUFBL0M7QUFDQSxRQUFJMkIsSUFBSSxHQUFHOUUsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JtRCxHQUEvQixLQUF1QyxJQUFsRDtBQUNBLFFBQUl3QixHQUFHLEdBQUdDLFFBQVEsQ0FBQzVFLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCbUQsR0FBOUIsRUFBRCxFQUFzQ25ELENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDbUQsR0FBaEMsS0FBd0MsR0FBOUUsQ0FBbEI7QUFDQSxRQUFJNEIsS0FBSyxHQUFHL0UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0QsSUFBUixDQUFhLFNBQWIsS0FBMkIsSUFBM0IsR0FBa0MsT0FBbEMsR0FBNEMsRUFBeEQ7QUFDQSxRQUFJeUIsS0FBSyxHQUFHTCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQUFYLEdBQWdCLEdBQWhCLEdBQXNCQyxHQUF0QixHQUE0QixHQUE1QixHQUFrQ0ksSUFBbEMsR0FBeUMsR0FBekMsR0FBK0NILEdBQS9DLEdBQXFELEdBQXJELEdBQTJESSxLQUF2RTs7QUFDQSxTQUFLLElBQUlyRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYyxTQUFTLENBQUNiLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDMUIsT0FBQyxDQUFDd0MsU0FBUyxDQUFDZCxDQUFELENBQVYsQ0FBRCxDQUFnQjZCLEdBQWhCLENBQW9CLFlBQXBCLEVBQWtDc0IsS0FBbEM7QUFDRDs7QUFDRDVDLGVBQVc7QUFDWixHQVpEO0FBYUE7O0FBRUErQyxvRUFBcUIsQ0FBQ2hGLENBQUMsQ0FBQ21DLEdBQUQsQ0FBRCxDQUFPL0IsSUFBUCxDQUFZLElBQVosQ0FBRCxDQUFyQjtBQUNBNkUsb0VBQXFCLENBQUNqRixDQUFDLENBQUNtQyxHQUFELENBQUQsQ0FBTy9CLElBQVAsQ0FBWSxJQUFaLENBQUQsQ0FBckI7QUFFQTs7QUFFQXVELGtCQUFnQixDQUFDLGdCQUFELEVBQW1CLHdCQUFuQixDQUFoQjtBQUVBM0QsR0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NDLEVBQWhDLENBQW1DLFFBQW5DLEVBQTZDLFlBQVk7QUFDdkQsUUFBSUQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxJQUFXLE1BQWYsRUFBdUI7QUFDckJBLE9BQUMsQ0FBQ3FDLFdBQUQsQ0FBRCxDQUFla0IsR0FBZixDQUFtQixnQkFBbkIsRUFBcUN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXJDO0FBQ0FuRCxPQUFDLENBQUNxQyxXQUFELENBQUQsQ0FBZWtCLEdBQWYsQ0FBbUIsaUJBQW5CLEVBQXNDdkQsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNtRCxHQUFqQyxLQUF5QyxHQUEvRTtBQUNBbkQsT0FBQyxDQUFDcUMsV0FBRCxDQUFELENBQWVrQixHQUFmLENBQW1CLG9CQUFuQixFQUF5Q3ZELENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DbUQsR0FBcEMsS0FBNEMsR0FBckY7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVBEO0FBU0FqQyxHQUFDLENBQUMsZ0VBQUQsQ0FBRCxDQUFvRUMsRUFBcEUsQ0FBdUUsT0FBdkUsRUFBZ0YsWUFBWTtBQUMxRkQsS0FBQyxDQUFDcUMsV0FBRCxDQUFELENBQWVrQixHQUFmLENBQW1CLGlCQUFuQixFQUFzQ3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsR0FBdEQ7O0FBQ0EsUUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsNEJBQTFCLEVBQXdEO0FBQ3RESixPQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1Q21ELEdBQXZDLENBQTJDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUEzQztBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNtRCxHQUFqQyxDQUFxQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBckM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVJEO0FBVUFqQyxHQUFDLENBQUMsc0VBQUQsQ0FBRCxDQUEwRUMsRUFBMUUsQ0FBNkUsT0FBN0UsRUFBc0YsWUFBWTtBQUNoR0QsS0FBQyxDQUFDcUMsV0FBRCxDQUFELENBQWVrQixHQUFmLENBQW1CLG9CQUFuQixFQUF5Q3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsR0FBekQ7O0FBQ0EsUUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsK0JBQTFCLEVBQTJEO0FBQ3pESixPQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ21ELEdBQTFDLENBQThDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUE5QztBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NtRCxHQUFwQyxDQUF3Q25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBeEM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVJEO0FBVUE7O0FBQ0E7O0FBRUEwQixrQkFBZ0IsQ0FBQyw0QkFBRCxFQUErQixzQkFBL0IsQ0FBaEI7QUFFQTs7QUFHQSxNQUFJckQsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQVk0QixHQUFHLENBQUMvQixJQUFKLENBQVMsSUFBVCxDQUFwQyxDQUFKLEVBQXlEO0FBQ3ZERSxZQUFRLENBQUNDLGNBQVQsQ0FBd0IseUJBQXhCLEVBQW1EMkQsT0FBbkQsR0FBNkQsSUFBN0Q7QUFDRCxHQUZELE1BRU87QUFDTDVELFlBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix5QkFBeEIsRUFBbUQyRCxPQUFuRCxHQUE2RCxLQUE3RDtBQUNEOztBQUVEbEUsR0FBQyxDQUFDLGdOQUFELENBQUQsQ0FBb05DLEVBQXBOLENBQXVOLE9BQXZOLEVBQWdPLFlBQVk7QUFDMU8sUUFBSWEsRUFBRSxHQUFHcUIsR0FBRyxDQUFDL0IsSUFBSixDQUFTLElBQVQsQ0FBVDtBQUVBLFFBQUk4RSxLQUFLLEdBQUdsRixDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLEtBQXNDLElBQWxEO0FBQ0EsUUFBSWdDLE1BQU0sR0FBR25GLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDbUQsR0FBaEMsS0FBd0MsRUFBckQ7QUFDQSxRQUFJaUMsTUFBTSxHQUFHekMsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NtRCxHQUFoQyxFQUFELENBQXJCO0FBRUEsUUFBSVQsSUFBSSxHQUFHd0MsS0FBSyxHQUFHQyxNQUFSLEdBQWlCQyxNQUE1QjtBQUVBMUMsUUFBSSxHQUFHQSxJQUFJLEdBQUcsSUFBZDs7QUFHQSxRQUFJcEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLHlCQUF4QixFQUFtRDJELE9BQW5ELElBQThELElBQWxFLEVBQXdFO0FBQ3RFbEUsT0FBQyxDQUFDLGFBQWFjLEVBQWQsQ0FBRCxDQUFtQnVFLE1BQW5CO0FBQ0FyRixPQUFDLENBQUMsV0FBRCxDQUFELENBQWVzRixNQUFmLENBQXNCLG1DQUFtQ3hFLEVBQW5DLEdBQXdDLHdDQUF4QyxHQUFtRixDQUFDQSxFQUFELEVBQUs0QixJQUFMLENBQW5GLEdBQWdHLFNBQXRIO0FBQ0QsS0FIRCxNQUdPO0FBQ0wxQyxPQUFDLENBQUMsYUFBYWMsRUFBZCxDQUFELENBQW1CdUUsTUFBbkI7QUFDRDs7QUFJRCxRQUFJckYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQix5QkFBMUIsRUFBcUQ7QUFDbkRKLE9BQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DbUQsR0FBcEMsQ0FBd0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXhDO0FBQ0QsS0FGRCxNQUVPLElBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLCtCQUExQixFQUEyRDtBQUNoRUosT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJtRCxHQUE5QixDQUFrQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBbEM7QUFDRCxLQUZNLE1BRUEsSUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsMkJBQTFCLEVBQXVEO0FBQzVESixPQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ21ELEdBQXRDLENBQTBDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUExQztBQUNELEtBRk0sTUFFQSxJQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQixpQ0FBMUIsRUFBNkQ7QUFDbEVKLE9BQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDbUQsR0FBaEMsQ0FBb0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXBDO0FBQ0QsS0FGTSxNQUVBLElBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDJCQUExQixFQUF1RDtBQUM1REosT0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NtRCxHQUF0QyxDQUEwQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBMUM7QUFDRCxLQUZNLE1BRUEsSUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsaUNBQTFCLEVBQTZEO0FBQ2xFSixPQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ21ELEdBQWhDLENBQW9DbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFwQztBQUNEOztBQUNEbEIsZUFBVztBQUVaLEdBcENEO0FBc0NBO0FBRUQsQ0EvZUQsRTs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUEsU0FBUytDLHFCQUFULENBQStCbEUsRUFBL0IsRUFBbUM7QUFDakM7O0FBRUEsTUFBTVQsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JPLEVBQXhCLENBQXRCO0FBQ0EsTUFBTXNCLGVBQWUsR0FBRy9CLGFBQWEsQ0FBQ1csc0JBQWQsQ0FBcUMsYUFBckMsRUFBb0QsQ0FBcEQsQ0FBeEI7QUFDQSxNQUFJcUIsV0FBVyxHQUFHaEMsYUFBYSxDQUFDUSxvQkFBZCxDQUFtQyxNQUFuQyxFQUEyQyxDQUEzQyxDQUFsQjtBQUNBLE1BQUl5QixjQUFjLEdBQUdELFdBQVcsQ0FBQ3JCLHNCQUFaLENBQW1DLFdBQW5DLEVBQWdELENBQWhELENBQXJCO0FBQ0EsTUFBSXVCLFVBQVUsR0FBR0YsV0FBVyxDQUFDckIsc0JBQVosQ0FBbUMsVUFBbkMsQ0FBakI7QUFDQSxNQUFJd0IsU0FBUyxHQUFHSCxXQUFXLENBQUN4QixvQkFBWixDQUFpQyxPQUFqQyxDQUFoQjtBQUVBOEMsa0JBQWdCLENBQUMsc0JBQUQsRUFBeUIscUJBQXpCLENBQWhCLENBVmlDLENBWWpDOztBQUVBQSxrQkFBZ0IsQ0FBQywrQkFBRCxFQUFrQyx3QkFBbEMsQ0FBaEI7QUFFQTRCLFlBQVUsQ0FBQ3ZELEtBQVgsR0FBbUIsRUFBbkI7O0FBRUEsV0FBU3dELGlCQUFULEdBQTZCO0FBQzNCbkQsZUFBVyxHQUFHaEMsYUFBYSxDQUFDUSxvQkFBZCxDQUFtQyxNQUFuQyxFQUEyQyxDQUEzQyxDQUFkO0FBRUEwRSxjQUFVLENBQUMzQyxTQUFYLEdBQXVCLDRCQUF2Qjs7QUFDQSxRQUFJLENBQUNQLFdBQVcsQ0FBQ3JCLHNCQUFaLENBQW1DLE1BQW5DLEVBQTJDLENBQTNDLENBQUwsRUFBb0Q7QUFDbER1RSxnQkFBVSxDQUFDM0MsU0FBWCxJQUF3QixtQ0FBeEI7QUFDRDs7QUFDRCxRQUFJLENBQUNQLFdBQVcsQ0FBQ3JCLHNCQUFaLENBQW1DLE9BQW5DLEVBQTRDLENBQTVDLENBQUwsRUFBcUQ7QUFDbkR1RSxnQkFBVSxDQUFDM0MsU0FBWCxJQUF3QixzQ0FBeEI7QUFDRDs7QUFDRCxRQUFJLENBQUNQLFdBQVcsQ0FBQ3JCLHNCQUFaLENBQW1DLEtBQW5DLEVBQTBDLENBQTFDLENBQUwsRUFBbUQ7QUFDakR1RSxnQkFBVSxDQUFDM0MsU0FBWCxJQUF3QixzQ0FBeEI7QUFDRDtBQUNGOztBQUNENEMsbUJBQWlCOztBQUVqQkQsWUFBVSxDQUFDRSxRQUFYLEdBQXNCLFlBQVk7QUFDaEMsUUFBSS9ELENBQUMsR0FBRzZELFVBQVUsQ0FBQ0csYUFBbkI7QUFDQSxRQUFJQyxTQUFTLEdBQUdyRixRQUFRLENBQUNzRixhQUFULENBQXVCLE9BQXZCLENBQWhCOztBQUdBLFFBQUlMLFVBQVUsQ0FBQ3ZELEtBQVgsSUFBb0IsS0FBeEIsRUFBK0I7QUFDN0IyRCxlQUFTLENBQUNFLFNBQVYsR0FBc0IsY0FBdEI7QUFDQUYsZUFBUyxDQUFDRyxJQUFWLEdBQWlCLEtBQWpCO0FBQ0FILGVBQVMsQ0FBQ0ksSUFBVixHQUFpQlIsVUFBVSxDQUFDdkQsS0FBNUI7QUFDQTJELGVBQVMsQ0FBQzVELFdBQVYsR0FBd0J3RCxVQUFVLENBQUNTLE9BQVgsQ0FBbUJ0RSxDQUFuQixFQUFzQmtCLFNBQTlDOztBQUVBLFVBQUlxRCxhQUFhLENBQUMvQixPQUFkLElBQXlCLElBQTdCLEVBQW1DO0FBQ2pDeUIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0I0QixVQUFoQixHQUE2QixLQUE3QjtBQUNELE9BRkQsTUFFTztBQUNMUCxpQkFBUyxDQUFDckIsS0FBVixDQUFnQjRCLFVBQWhCLEdBQTZCLFFBQTdCO0FBQ0Q7O0FBQ0RQLGVBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0I2QixVQUFoQixHQUE2QkMseUJBQXlCLENBQUNwRSxLQUF2RDtBQUNBMkQsZUFBUyxDQUFDckIsS0FBVixDQUFnQitCLFFBQWhCLEdBQTJCckcsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NtRCxHQUFoQyxLQUF3QyxJQUFuRTs7QUFDQSxVQUFJWixVQUFVLENBQUMsQ0FBRCxDQUFkLEVBQW1CO0FBQ2pCLFlBQUkrRCxVQUFVLENBQUMxQyxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NnRSxLQUFqQyxDQUFWLElBQXFERCxVQUFVLENBQUMxQyxnQkFBZ0IsQ0FBQ3hCLGVBQUQsQ0FBaEIsQ0FBa0NtRSxLQUFuQyxDQUFWLEdBQXNELENBQS9HLEVBQWtIO0FBQ2hIWixtQkFBUyxDQUFDckIsS0FBVixDQUFnQmlDLEtBQWhCLEdBQXdCM0MsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDZ0UsS0FBeEQ7QUFDRDs7QUFDRFosaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JrQyxLQUFoQixHQUF3QjVDLGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ2lFLEtBQXhEO0FBQ0FiLGlCQUFTLENBQUNyQixLQUFWLENBQWdCbUMsVUFBaEIsR0FBNkI3QyxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NrRSxVQUE3RDtBQUNBZCxpQkFBUyxDQUFDckIsS0FBVixDQUFnQm9DLGNBQWhCLEdBQWlDOUMsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDbUUsY0FBakU7QUFDQWYsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JxQyxtQkFBaEIsR0FBc0MvQyxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NvRSxtQkFBdEU7QUFDQWhCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCc0MsY0FBaEIsR0FBaUNoRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NxRSxjQUFqRTtBQUNBakIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0J1QyxjQUFoQixHQUFpQ2pELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ3NFLGNBQWpFO0FBRUFsQixpQkFBUyxDQUFDckIsS0FBVixDQUFnQndDLGdCQUFoQixHQUFtQ2xELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ3VFLGdCQUFuRTtBQUNBbkIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0J5QyxvQkFBaEIsR0FBdUNuRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0N3RSxvQkFBdkU7QUFDQXBCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCMEMsZ0JBQWhCLEdBQW1DcEQsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDeUUsZ0JBQW5FO0FBQ0FyQixpQkFBUyxDQUFDckIsS0FBVixDQUFnQjJDLGdCQUFoQixHQUFtQ3JELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQzBFLGdCQUFuRTtBQUVBdEIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0I0QyxpQkFBaEIsR0FBb0N0RCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0MyRSxpQkFBcEU7QUFDQXZCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCNkMsdUJBQWhCLEdBQTBDdkQsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDNEUsdUJBQTFFO0FBQ0F4QixpQkFBUyxDQUFDckIsS0FBVixDQUFnQjhDLGlCQUFoQixHQUFvQ3hELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQzZFLGlCQUFwRTtBQUNBekIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0IrQyxpQkFBaEIsR0FBb0N6RCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0M4RSxpQkFBcEU7QUFFQTFCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCZ0QsZUFBaEIsR0FBa0MxRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0MrRSxlQUFsRTtBQUNBM0IsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JpRCxzQkFBaEIsR0FBeUMzRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NnRixzQkFBekU7QUFDQTVCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCa0QsZUFBaEIsR0FBa0M1RCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NpRixlQUFsRTtBQUNBN0IsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JtRCxlQUFoQixHQUFrQzdELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ2tGLGVBQWxFO0FBQ0Q7O0FBQ0QsVUFBSUMsbUJBQW1CLENBQUN4RCxPQUFwQixJQUErQixJQUFuQyxFQUF5QztBQUN2Q3lCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCcUQsTUFBaEIsR0FBeUIsTUFBekI7QUFDRCxPQUZELE1BRU87QUFDTGhDLGlCQUFTLENBQUNyQixLQUFWLENBQWdCcUQsTUFBaEIsR0FBeUIzSCxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1ELEdBQTdCLEtBQXFDLElBQTlEO0FBQ0Q7O0FBRUQsVUFBSXlFLHFCQUFxQixDQUFDMUQsT0FBdEIsSUFBaUMsSUFBckMsRUFBMkM7QUFDekMsWUFBTU0sRUFBRSxHQUFHeEUsQ0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NtRCxHQUF4QyxLQUFnRCxJQUEzRDtBQUNBLFlBQU1zQixFQUFFLEdBQUd6RSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ21ELEdBQXRDLEtBQThDLElBQXpEO0FBQ0EsWUFBTXVCLEdBQUcsR0FBRzFFLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDbUQsR0FBbEMsS0FBMEMsSUFBdEQ7QUFDQSxZQUFNd0IsR0FBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLEVBQUQsRUFBMkNuRCxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ21ELEdBQXJDLEtBQTZDLEdBQXhGLENBQXBCO0FBQ0EsWUFBTTBCLEtBQUssR0FBR0wsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLEdBQWhEO0FBRUFnQixpQkFBUyxDQUFDckIsS0FBVixDQUFnQnVELFVBQWhCLEdBQTZCaEQsS0FBN0I7QUFDRDs7QUFFRDdFLE9BQUMsQ0FBQzJGLFNBQUQsQ0FBRCxDQUFhbUMsWUFBYixDQUEwQnhGLGNBQTFCO0FBQ0FrRCx1QkFBaUI7QUFDakJ1QywwQkFBb0I7QUFDcEIxRixpQkFBVyxHQUFHaEMsYUFBYSxDQUFDUSxvQkFBZCxDQUFtQyxNQUFuQyxFQUEyQyxDQUEzQyxDQUFkO0FBQ0F5QixvQkFBYyxHQUFHRCxXQUFXLENBQUNyQixzQkFBWixDQUFtQyxXQUFuQyxFQUFnRCxDQUFoRCxDQUFqQjtBQUNBa0IsbUNBQTZCLENBQUNsQyxDQUFDLENBQUNtQyxHQUFELENBQUQsQ0FBTy9CLElBQVAsQ0FBWSxJQUFaLENBQUQsQ0FBN0I7QUFDQTZCLGlCQUFXO0FBQ1osS0E5REQsTUE4RE8sSUFBSXNELFVBQVUsQ0FBQ3ZELEtBQVgsSUFBb0IsTUFBeEIsRUFBZ0M7QUFDckMyRCxlQUFTLENBQUNFLFNBQVYsR0FBc0IsZUFBdEI7QUFDQUYsZUFBUyxDQUFDRyxJQUFWLEdBQWlCLE1BQWpCO0FBQ0FILGVBQVMsQ0FBQ0ksSUFBVixHQUFpQlIsVUFBVSxDQUFDdkQsS0FBNUI7QUFDQTJELGVBQVMsQ0FBQzVELFdBQVYsR0FBd0J3RCxVQUFVLENBQUNTLE9BQVgsQ0FBbUJ0RSxDQUFuQixFQUFzQmtCLFNBQTlDOztBQUVBLFVBQUlxRCxhQUFhLENBQUMvQixPQUFkLElBQXlCLElBQTdCLEVBQW1DO0FBQ2pDeUIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0I0QixVQUFoQixHQUE2QixLQUE3QjtBQUNELE9BRkQsTUFFTztBQUNMUCxpQkFBUyxDQUFDckIsS0FBVixDQUFnQjRCLFVBQWhCLEdBQTZCLFFBQTdCO0FBQ0Q7O0FBQ0RQLGVBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0I2QixVQUFoQixHQUE2QkMseUJBQXlCLENBQUNwRSxLQUF2RDtBQUNBMkQsZUFBUyxDQUFDckIsS0FBVixDQUFnQitCLFFBQWhCLEdBQTJCckcsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NtRCxHQUFoQyxLQUF3QyxJQUFuRTs7QUFDQSxVQUFJWixVQUFVLENBQUMsQ0FBRCxDQUFkLEVBQW1CO0FBQ2pCLFlBQUkrRCxVQUFVLENBQUMxQyxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NnRSxLQUFqQyxDQUFWLElBQXFERCxVQUFVLENBQUMxQyxnQkFBZ0IsQ0FBQ3hCLGVBQUQsQ0FBaEIsQ0FBa0NtRSxLQUFuQyxDQUFWLEdBQXNELENBQS9HLEVBQWtIO0FBQ2hIWixtQkFBUyxDQUFDckIsS0FBVixDQUFnQmlDLEtBQWhCLEdBQXdCM0MsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDZ0UsS0FBeEQ7QUFDRDs7QUFDRFosaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JrQyxLQUFoQixHQUF3QjVDLGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ2lFLEtBQXhEO0FBQ0FiLGlCQUFTLENBQUNyQixLQUFWLENBQWdCbUMsVUFBaEIsR0FBNkI3QyxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NrRSxVQUE3RDtBQUNBZCxpQkFBUyxDQUFDckIsS0FBVixDQUFnQm9DLGNBQWhCLEdBQWlDOUMsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDbUUsY0FBakU7QUFDQWYsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JxQyxtQkFBaEIsR0FBc0MvQyxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NvRSxtQkFBdEU7QUFDQWhCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCc0MsY0FBaEIsR0FBaUNoRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NxRSxjQUFqRTtBQUNBakIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0J1QyxjQUFoQixHQUFpQ2pELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ3NFLGNBQWpFO0FBRUFsQixpQkFBUyxDQUFDckIsS0FBVixDQUFnQndDLGdCQUFoQixHQUFtQ2xELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ3VFLGdCQUFuRTtBQUNBbkIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0J5QyxvQkFBaEIsR0FBdUNuRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0N3RSxvQkFBdkU7QUFDQXBCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCMEMsZ0JBQWhCLEdBQW1DcEQsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDeUUsZ0JBQW5FO0FBQ0FyQixpQkFBUyxDQUFDckIsS0FBVixDQUFnQjJDLGdCQUFoQixHQUFtQ3JELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQzBFLGdCQUFuRTtBQUVBdEIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0I0QyxpQkFBaEIsR0FBb0N0RCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0MyRSxpQkFBcEU7QUFDQXZCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCNkMsdUJBQWhCLEdBQTBDdkQsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDNEUsdUJBQTFFO0FBQ0F4QixpQkFBUyxDQUFDckIsS0FBVixDQUFnQjhDLGlCQUFoQixHQUFvQ3hELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQzZFLGlCQUFwRTtBQUNBekIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0IrQyxpQkFBaEIsR0FBb0N6RCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0M4RSxpQkFBcEU7QUFFQTFCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCZ0QsZUFBaEIsR0FBa0MxRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0MrRSxlQUFsRTtBQUNBM0IsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JpRCxzQkFBaEIsR0FBeUMzRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NnRixzQkFBekU7QUFDQTVCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCa0QsZUFBaEIsR0FBa0M1RCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NpRixlQUFsRTtBQUNBN0IsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JtRCxlQUFoQixHQUFrQzdELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ2tGLGVBQWxFO0FBQ0Q7O0FBQ0QsVUFBSUMsbUJBQW1CLENBQUN4RCxPQUFwQixJQUErQixJQUFuQyxFQUF5QztBQUN2Q3lCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCcUQsTUFBaEIsR0FBeUIsTUFBekI7QUFDRCxPQUZELE1BRU87QUFDTGhDLGlCQUFTLENBQUNyQixLQUFWLENBQWdCcUQsTUFBaEIsR0FBeUIzSCxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1ELEdBQTdCLEtBQXFDLElBQTlEO0FBQ0Q7O0FBRUQsVUFBSXlFLHFCQUFxQixDQUFDMUQsT0FBdEIsSUFBaUMsSUFBckMsRUFBMkM7QUFDekMsWUFBTU0sR0FBRSxHQUFHeEUsQ0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NtRCxHQUF4QyxLQUFnRCxJQUEzRDs7QUFDQSxZQUFNc0IsR0FBRSxHQUFHekUsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NtRCxHQUF0QyxLQUE4QyxJQUF6RDs7QUFDQSxZQUFNdUIsSUFBRyxHQUFHMUUsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxLQUEwQyxJQUF0RDs7QUFDQSxZQUFNd0IsSUFBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLEVBQUQsRUFBMkNuRCxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ21ELEdBQXJDLEtBQTZDLEdBQXhGLENBQXBCOztBQUNBLFlBQU0wQixNQUFLLEdBQUdMLEdBQUUsR0FBRyxHQUFMLEdBQVdDLEdBQVgsR0FBZ0IsR0FBaEIsR0FBc0JDLElBQXRCLEdBQTRCLEdBQTVCLEdBQWtDQyxJQUFoRDs7QUFFQWdCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCdUQsVUFBaEIsR0FBNkJoRCxNQUE3QjtBQUNEOztBQUVEN0UsT0FBQyxDQUFDMkYsU0FBRCxDQUFELENBQWFtQyxZQUFiLENBQTBCeEYsY0FBMUI7QUFDQWtELHVCQUFpQjtBQUNqQnVDLDBCQUFvQjtBQUNwQjFGLGlCQUFXLEdBQUdoQyxhQUFhLENBQUNRLG9CQUFkLENBQW1DLE1BQW5DLEVBQTJDLENBQTNDLENBQWQ7QUFDQXlCLG9CQUFjLEdBQUdELFdBQVcsQ0FBQ3JCLHNCQUFaLENBQW1DLFdBQW5DLEVBQWdELENBQWhELENBQWpCO0FBQ0FrQixtQ0FBNkIsQ0FBQ2xDLENBQUMsQ0FBQ21DLEdBQUQsQ0FBRCxDQUFPL0IsSUFBUCxDQUFZLElBQVosQ0FBRCxDQUE3QjtBQUNBNkIsaUJBQVc7QUFDWjs7QUFDRCxRQUFJc0QsVUFBVSxDQUFDdkQsS0FBWCxJQUFvQixPQUF4QixFQUFpQztBQUMvQjJELGVBQVMsQ0FBQ0UsU0FBVixHQUFzQixnQkFBdEI7QUFDQUYsZUFBUyxDQUFDRyxJQUFWLEdBQWlCLE9BQWpCO0FBQ0FILGVBQVMsQ0FBQ0ksSUFBVixHQUFpQlIsVUFBVSxDQUFDdkQsS0FBNUI7QUFDQTJELGVBQVMsQ0FBQzVELFdBQVYsR0FBd0J3RCxVQUFVLENBQUNTLE9BQVgsQ0FBbUJ0RSxDQUFuQixFQUFzQmtCLFNBQTlDOztBQUVBLFVBQUlxRCxhQUFhLENBQUMvQixPQUFkLElBQXlCLElBQTdCLEVBQW1DO0FBQ2pDeUIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0I0QixVQUFoQixHQUE2QixLQUE3QjtBQUNELE9BRkQsTUFFTztBQUNMUCxpQkFBUyxDQUFDckIsS0FBVixDQUFnQjRCLFVBQWhCLEdBQTZCLFFBQTdCO0FBQ0Q7O0FBQ0RQLGVBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0I2QixVQUFoQixHQUE2QkMseUJBQXlCLENBQUNwRSxLQUF2RDtBQUNBMkQsZUFBUyxDQUFDckIsS0FBVixDQUFnQitCLFFBQWhCLEdBQTJCckcsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NtRCxHQUFoQyxLQUF3QyxJQUFuRTs7QUFDQSxVQUFJWixVQUFVLENBQUMsQ0FBRCxDQUFkLEVBQW1CO0FBQ2pCLFlBQUkrRCxVQUFVLENBQUMxQyxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NnRSxLQUFqQyxDQUFWLElBQXFERCxVQUFVLENBQUMxQyxnQkFBZ0IsQ0FBQ3hCLGVBQUQsQ0FBaEIsQ0FBa0NtRSxLQUFuQyxDQUFWLEdBQXNELENBQS9HLEVBQWtIO0FBQ2hIWixtQkFBUyxDQUFDckIsS0FBVixDQUFnQmlDLEtBQWhCLEdBQXdCM0MsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDZ0UsS0FBeEQ7QUFDRDs7QUFDRFosaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JrQyxLQUFoQixHQUF3QjVDLGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ2lFLEtBQXhEO0FBQ0FiLGlCQUFTLENBQUNyQixLQUFWLENBQWdCbUMsVUFBaEIsR0FBNkI3QyxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NrRSxVQUE3RDtBQUNBZCxpQkFBUyxDQUFDckIsS0FBVixDQUFnQm9DLGNBQWhCLEdBQWlDOUMsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDbUUsY0FBakU7QUFDQWYsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JxQyxtQkFBaEIsR0FBc0MvQyxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NvRSxtQkFBdEU7QUFDQWhCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCc0MsY0FBaEIsR0FBaUNoRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NxRSxjQUFqRTtBQUNBakIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0J1QyxjQUFoQixHQUFpQ2pELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ3NFLGNBQWpFO0FBRUFsQixpQkFBUyxDQUFDckIsS0FBVixDQUFnQndDLGdCQUFoQixHQUFtQ2xELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ3VFLGdCQUFuRTtBQUNBbkIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0J5QyxvQkFBaEIsR0FBdUNuRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0N3RSxvQkFBdkU7QUFDQXBCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCMEMsZ0JBQWhCLEdBQW1DcEQsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDeUUsZ0JBQW5FO0FBQ0FyQixpQkFBUyxDQUFDckIsS0FBVixDQUFnQjJDLGdCQUFoQixHQUFtQ3JELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQzBFLGdCQUFuRTtBQUVBdEIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0I0QyxpQkFBaEIsR0FBb0N0RCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0MyRSxpQkFBcEU7QUFDQXZCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCNkMsdUJBQWhCLEdBQTBDdkQsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDNEUsdUJBQTFFO0FBQ0F4QixpQkFBUyxDQUFDckIsS0FBVixDQUFnQjhDLGlCQUFoQixHQUFvQ3hELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQzZFLGlCQUFwRTtBQUNBekIsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0IrQyxpQkFBaEIsR0FBb0N6RCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0M4RSxpQkFBcEU7QUFFQTFCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCZ0QsZUFBaEIsR0FBa0MxRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0MrRSxlQUFsRTtBQUNBM0IsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JpRCxzQkFBaEIsR0FBeUMzRCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NnRixzQkFBekU7QUFDQTVCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCa0QsZUFBaEIsR0FBa0M1RCxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NpRixlQUFsRTtBQUNBN0IsaUJBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0JtRCxlQUFoQixHQUFrQzdELGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ2tGLGVBQWxFO0FBQ0Q7O0FBQ0QsVUFBSUMsbUJBQW1CLENBQUN4RCxPQUFwQixJQUErQixJQUFuQyxFQUF5QztBQUN2Q3lCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCcUQsTUFBaEIsR0FBeUIsTUFBekI7QUFDRCxPQUZELE1BRU87QUFDTGhDLGlCQUFTLENBQUNyQixLQUFWLENBQWdCcUQsTUFBaEIsR0FBeUIzSCxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1ELEdBQTdCLEtBQXFDLElBQTlEO0FBQ0Q7O0FBRUQsVUFBSXlFLHFCQUFxQixDQUFDMUQsT0FBdEIsSUFBaUMsSUFBckMsRUFBMkM7QUFDekMsWUFBTU0sSUFBRSxHQUFHeEUsQ0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NtRCxHQUF4QyxLQUFnRCxJQUEzRDs7QUFDQSxZQUFNc0IsSUFBRSxHQUFHekUsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NtRCxHQUF0QyxLQUE4QyxJQUF6RDs7QUFDQSxZQUFNdUIsS0FBRyxHQUFHMUUsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxLQUEwQyxJQUF0RDs7QUFDQSxZQUFNd0IsS0FBRyxHQUFHQyxRQUFRLENBQUM1RSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLEVBQUQsRUFBMkNuRCxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ21ELEdBQXJDLEtBQTZDLEdBQXhGLENBQXBCOztBQUNBLFlBQU0wQixPQUFLLEdBQUdMLElBQUUsR0FBRyxHQUFMLEdBQVdDLElBQVgsR0FBZ0IsR0FBaEIsR0FBc0JDLEtBQXRCLEdBQTRCLEdBQTVCLEdBQWtDQyxLQUFoRDs7QUFFQWdCLGlCQUFTLENBQUNyQixLQUFWLENBQWdCdUQsVUFBaEIsR0FBNkJoRCxPQUE3QjtBQUNEOztBQUVEN0UsT0FBQyxDQUFDMkYsU0FBRCxDQUFELENBQWFtQyxZQUFiLENBQTBCeEYsY0FBMUI7QUFDQWtELHVCQUFpQjtBQUNqQnVDLDBCQUFvQjtBQUNwQjFGLGlCQUFXLEdBQUdoQyxhQUFhLENBQUNRLG9CQUFkLENBQW1DLE1BQW5DLEVBQTJDLENBQTNDLENBQWQ7QUFDQXlCLG9CQUFjLEdBQUdELFdBQVcsQ0FBQ3JCLHNCQUFaLENBQW1DLFdBQW5DLEVBQWdELENBQWhELENBQWpCO0FBQ0FrQixtQ0FBNkIsQ0FBQ2xDLENBQUMsQ0FBQ21DLEdBQUQsQ0FBRCxDQUFPL0IsSUFBUCxDQUFZLElBQVosQ0FBRCxDQUE3QjtBQUNBNkIsaUJBQVc7QUFDWjtBQUNGLEdBak1ELENBbENpQyxDQXFPakM7OztBQUVBK0YsZUFBYSxDQUFDaEcsS0FBZCxHQUFzQixFQUF0Qjs7QUFFQSxXQUFTK0Ysb0JBQVQsR0FBZ0M7QUFDOUIxRixlQUFXLEdBQUdoQyxhQUFhLENBQUNRLG9CQUFkLENBQW1DLE1BQW5DLEVBQTJDLENBQTNDLENBQWQ7QUFFQW1ILGlCQUFhLENBQUNwRixTQUFkLEdBQTBCLDRCQUExQjs7QUFDQSxRQUFJUCxXQUFXLENBQUNyQixzQkFBWixDQUFtQyxNQUFuQyxFQUEyQyxDQUEzQyxDQUFKLEVBQW1EO0FBQ2pEZ0gsbUJBQWEsQ0FBQ3BGLFNBQWQsSUFBMkIsbUNBQTNCO0FBQ0Q7O0FBQ0QsUUFBSVAsV0FBVyxDQUFDckIsc0JBQVosQ0FBbUMsT0FBbkMsRUFBNEMsQ0FBNUMsQ0FBSixFQUFvRDtBQUNsRGdILG1CQUFhLENBQUNwRixTQUFkLElBQTJCLHNDQUEzQjtBQUNEOztBQUNELFFBQUlQLFdBQVcsQ0FBQ3JCLHNCQUFaLENBQW1DLEtBQW5DLEVBQTBDLENBQTFDLENBQUosRUFBa0Q7QUFDaERnSCxtQkFBYSxDQUFDcEYsU0FBZCxJQUEyQixzQ0FBM0I7QUFDRDtBQUNGOztBQUNEbUYsc0JBQW9COztBQUVwQixXQUFTRSxXQUFULENBQXFCQyxFQUFyQixFQUF5QkMsVUFBekIsRUFBcUM7QUFDbkMsUUFBTUMsY0FBYyxHQUFHLElBQUlDLE1BQUosQ0FBVyw0QkFBNEJGLFVBQTVCLEdBQXlDLFNBQXBELEVBQStELElBQS9ELENBQXZCO0FBQ0FELE1BQUUsQ0FBQ3RGLFNBQUgsR0FBZXNGLEVBQUUsQ0FBQ3RGLFNBQUgsQ0FBYTBGLE9BQWIsQ0FBcUJGLGNBQXJCLEVBQXFDLEVBQXJDLENBQWY7QUFDRDs7QUFFREosZUFBYSxDQUFDdkMsUUFBZCxHQUF5QixZQUFZO0FBQ25DLFFBQUl1QyxhQUFhLENBQUNoRyxLQUFkLElBQXVCLEtBQTNCLEVBQWtDO0FBQ2hDaUcsaUJBQVcsQ0FBQzVGLFdBQUQsRUFBYyxLQUFkLENBQVg7QUFDQW1ELHVCQUFpQjtBQUNqQnVDLDBCQUFvQjtBQUNwQjFGLGlCQUFXLEdBQUdoQyxhQUFhLENBQUNRLG9CQUFkLENBQW1DLE1BQW5DLEVBQTJDLENBQTNDLENBQWQ7QUFDQXlCLG9CQUFjLEdBQUdELFdBQVcsQ0FBQ3JCLHNCQUFaLENBQW1DLFdBQW5DLEVBQWdELENBQWhELENBQWpCO0FBQ0FpQixpQkFBVztBQUNaLEtBUEQsTUFPTyxJQUFJK0YsYUFBYSxDQUFDaEcsS0FBZCxJQUF1QixNQUEzQixFQUFtQztBQUN4Q2lHLGlCQUFXLENBQUM1RixXQUFELEVBQWMsTUFBZCxDQUFYO0FBQ0FtRCx1QkFBaUI7QUFDakJ1QywwQkFBb0I7QUFDcEIxRixpQkFBVyxHQUFHaEMsYUFBYSxDQUFDUSxvQkFBZCxDQUFtQyxNQUFuQyxFQUEyQyxDQUEzQyxDQUFkO0FBQ0F5QixvQkFBYyxHQUFHRCxXQUFXLENBQUNyQixzQkFBWixDQUFtQyxXQUFuQyxFQUFnRCxDQUFoRCxDQUFqQjtBQUNBaUIsaUJBQVc7QUFDWixLQVBNLE1BT0EsSUFBSStGLGFBQWEsQ0FBQ2hHLEtBQWQsSUFBdUIsT0FBM0IsRUFBb0M7QUFDekNpRyxpQkFBVyxDQUFDNUYsV0FBRCxFQUFjLE9BQWQsQ0FBWDtBQUNBbUQsdUJBQWlCO0FBQ2pCdUMsMEJBQW9CO0FBQ3BCMUYsaUJBQVcsR0FBR2hDLGFBQWEsQ0FBQ1Esb0JBQWQsQ0FBbUMsTUFBbkMsRUFBMkMsQ0FBM0MsQ0FBZDtBQUNBeUIsb0JBQWMsR0FBR0QsV0FBVyxDQUFDckIsc0JBQVosQ0FBbUMsV0FBbkMsRUFBZ0QsQ0FBaEQsQ0FBakI7QUFDQWlCLGlCQUFXO0FBQ1o7QUFDRixHQXZCRCxDQTlQaUMsQ0F1UmpDOzs7QUFFQXNHLFVBQVEsQ0FBQzlDLFFBQVQsR0FBb0IsWUFBWTtBQUM5QitDLGVBQVcsR0FBR25HLFdBQVcsQ0FBQ3JCLHNCQUFaLENBQW1DLFlBQW5DLEVBQWlELENBQWpELENBQWQ7QUFDQXdILGVBQVcsQ0FBQ3hHLEtBQVosR0FBb0J1RyxRQUFRLENBQUN2RyxLQUE3QjtBQUNELEdBSEQsQ0F6UmlDLENBOFJqQzs7O0FBQ0FvRSwyQkFBeUIsQ0FBQ3BFLEtBQTFCLEdBQWtDNEIsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDNEQsVUFBbEU7O0FBQ0FDLDJCQUF5QixDQUFDWCxRQUExQixHQUFxQyxZQUFZO0FBQy9DLFNBQUssSUFBSS9ELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUNhLGdCQUFVLENBQUNiLENBQUQsQ0FBVixDQUFjNEMsS0FBZCxDQUFvQjZCLFVBQXBCLEdBQWlDQyx5QkFBeUIsQ0FBQ3BFLEtBQTNEO0FBQ0Q7O0FBQ0RDLGVBQVc7QUFDWixHQUxEOztBQU9BLE1BQUkyQixnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0MyRCxVQUFoQyxJQUE4QyxLQUFsRCxFQUF5RDtBQUN2REQsaUJBQWEsQ0FBQy9CLE9BQWQsR0FBd0IsSUFBeEI7QUFDRCxHQUZELE1BRU87QUFDTCtCLGlCQUFhLENBQUMvQixPQUFkLEdBQXdCLEtBQXhCO0FBQ0Q7O0FBQ0QrQixlQUFhLENBQUM1QixPQUFkLEdBQXdCLFlBQVk7QUFDbEMsUUFBSTRCLGFBQWEsQ0FBQy9CLE9BQWxCLEVBQTJCO0FBQ3pCLFdBQUssSUFBSXhDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUNhLGtCQUFVLENBQUNiLENBQUQsQ0FBVixDQUFjNEMsS0FBZCxDQUFvQjRCLFVBQXBCLEdBQWlDLEtBQWpDO0FBQ0Q7QUFDRixLQUpELE1BSU87QUFDTCxXQUFLLElBQUl4RSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxFQUFDLEVBQXhDLEVBQTRDO0FBQzFDYSxrQkFBVSxDQUFDYixFQUFELENBQVYsQ0FBYzRDLEtBQWQsQ0FBb0I0QixVQUFwQixHQUFpQyxRQUFqQztBQUNEO0FBQ0Y7O0FBQ0RqRSxlQUFXO0FBQ1osR0FYRCxDQTVTaUMsQ0F5VGpDOzs7QUFFQTBCLGtCQUFnQixDQUFDLGdDQUFELEVBQW1DLHlCQUFuQyxDQUFoQjtBQUVBM0QsR0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NtRCxHQUFoQyxDQUFvQ1IsUUFBUSxDQUFDaUIsZ0JBQWdCLENBQUNyQixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQWhCLENBQWdDOEQsUUFBakMsQ0FBNUM7QUFDQXJHLEdBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDbUQsR0FBdEMsQ0FBMENSLFFBQVEsQ0FBQ2lCLGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQzhELFFBQWpDLENBQWxEO0FBQ0FyRyxHQUFDLENBQUMsOERBQUQsQ0FBRCxDQUFrRUMsRUFBbEUsQ0FBcUUsT0FBckUsRUFBOEUsWUFBWTtBQUN4RixTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsT0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLFdBQXJCLEVBQWtDdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixLQUFnQixJQUFsRDtBQUNEOztBQUNELFFBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDJCQUExQixFQUF1RDtBQUNyREosT0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NtRCxHQUF0QyxDQUEwQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBMUM7QUFDRCxLQUZELE1BRU87QUFDTG5ELE9BQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDbUQsR0FBaEMsQ0FBb0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXBDO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FWRCxFQS9UaUMsQ0EyVWpDOztBQUNBakMsR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJDLEVBQTVCLENBQStCLFFBQS9CLEVBQXlDLFlBQVk7QUFDbkQsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2EsVUFBVSxDQUFDWixNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQzFCLE9BQUMsQ0FBQ3VDLFVBQVUsQ0FBQ2IsQ0FBRCxDQUFYLENBQUQsQ0FBaUI2QixHQUFqQixDQUFxQixPQUFyQixFQUE4QnZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBOUI7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQUxELEVBNVVpQyxDQW1WakM7O0FBRUEwQixrQkFBZ0IsQ0FBQyw0QkFBRCxFQUErQiwrQkFBL0IsQ0FBaEI7O0FBRUE4RSwrQkFBNkIsQ0FBQ3BFLE9BQTlCLEdBQXdDLFlBQVk7QUFDbERxRSwrQkFBMkIsQ0FBQ3BFLEtBQTVCLENBQWtDQyxPQUFsQyxHQUE0QyxNQUE1QztBQUNBb0UsNEJBQXdCLENBQUNyRSxLQUF6QixDQUErQkMsT0FBL0IsR0FBeUMsT0FBekM7QUFDRCxHQUhEOztBQUlBcUUsa0NBQWdDLENBQUN2RSxPQUFqQyxHQUEyQyxZQUFZO0FBQ3JEc0UsNEJBQXdCLENBQUNyRSxLQUF6QixDQUErQkMsT0FBL0IsR0FBeUMsTUFBekM7QUFDQW1FLCtCQUEyQixDQUFDcEUsS0FBNUIsQ0FBa0NDLE9BQWxDLEdBQTRDLE9BQTVDO0FBQ0QsR0FIRDs7QUFLQXZFLEdBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCQyxFQUEzQixDQUE4QixRQUE5QixFQUF3QyxZQUFZO0FBQ2xELFFBQUk0SSxPQUFPLEdBQUc3SSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLEtBQXNDLEdBQXBEO0FBQ0EsUUFBSXFELEtBQUssR0FBRzVCLFFBQVEsQ0FBQzVFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBRCxFQUFnQjBGLE9BQWhCLENBQXBCOztBQUNBLFNBQUssSUFBSW5ILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUMxQixPQUFDLENBQUN1QyxVQUFVLENBQUNiLENBQUQsQ0FBWCxDQUFELENBQWlCNkIsR0FBakIsQ0FBcUIsWUFBckIsRUFBbUNpRCxLQUFuQztBQUNEOztBQUNEdkUsZUFBVztBQUNaLEdBUEQ7QUFTQWpDLEdBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDQyxFQUFqQyxDQUFvQyxRQUFwQyxFQUE4QyxZQUFZO0FBQ3hELFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUMxQixPQUFDLENBQUN1QyxVQUFVLENBQUNiLENBQUQsQ0FBWCxDQUFELENBQWlCNkIsR0FBakIsQ0FBcUIsWUFBckIsRUFBbUMscUJBQXFCWixRQUFRLENBQUMzQyxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQm1ELEdBQS9CLEVBQUQsQ0FBN0IsR0FBc0UsT0FBdEUsR0FBZ0ZuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWhGLEdBQWdHLElBQWhHLEdBQXVHbkQsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNtRCxHQUFqQyxFQUF2RyxHQUFnSixHQUFuTDtBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBTEQ7QUFPQWpDLEdBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDQyxFQUFqQyxDQUFvQyxRQUFwQyxFQUE4QyxZQUFZO0FBQ3hELFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUMxQixPQUFDLENBQUN1QyxVQUFVLENBQUNiLENBQUQsQ0FBWCxDQUFELENBQWlCNkIsR0FBakIsQ0FBcUIsWUFBckIsRUFBbUMscUJBQXFCWixRQUFRLENBQUMzQyxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQm1ELEdBQS9CLEVBQUQsQ0FBN0IsR0FBc0UsT0FBdEUsR0FBZ0ZuRCxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ21ELEdBQWpDLEVBQWhGLEdBQXlILElBQXpILEdBQWdJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFoSSxHQUFnSixHQUFuTDtBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBTEQ7QUFPQWpDLEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCQyxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFZO0FBQ3JELFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUMxQixPQUFDLENBQUN1QyxVQUFVLENBQUNiLENBQUQsQ0FBWCxDQUFELENBQWlCNkIsR0FBakIsQ0FBcUIsWUFBckIsRUFBbUMscUJBQXFCWixRQUFRLENBQUMzQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQUQsQ0FBN0IsR0FBK0MsT0FBL0MsR0FBeURuRCxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ21ELEdBQWpDLEVBQXpELEdBQWtHLElBQWxHLEdBQXlHbkQsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNtRCxHQUFqQyxFQUF6RyxHQUFrSixHQUFyTDtBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBTEQ7QUFPQWpDLEdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DQyxFQUFuQyxDQUFzQyxPQUF0QyxFQUErQyxZQUFZO0FBQ3pELFFBQUk0SSxPQUFPLEdBQUc3SSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWQ7QUFDQSxRQUFJcUQsS0FBSyxHQUFHNUIsUUFBUSxDQUFDNUUsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJtRCxHQUEzQixFQUFELEVBQW1DMEYsT0FBTyxHQUFHLEdBQTdDLENBQXBCOztBQUNBLFNBQUssSUFBSW5ILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUMxQixPQUFDLENBQUN1QyxVQUFVLENBQUNiLENBQUQsQ0FBWCxDQUFELENBQWlCNkIsR0FBakIsQ0FBcUIsWUFBckIsRUFBbUNpRCxLQUFuQztBQUNEOztBQUNEdkUsZUFBVztBQUNaLEdBUEQsRUE5WGlDLENBdVlqQzs7QUFFQTBCLGtCQUFnQixDQUFDLGtCQUFELEVBQXFCLHlCQUFyQixDQUFoQjs7QUFFQSxNQUFJQyxnQkFBZ0IsQ0FBQ3JCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBaEIsQ0FBZ0NvRixNQUFoQyxJQUEwQyxNQUE5QyxFQUFzRDtBQUNwREQsdUJBQW1CLENBQUN4RCxPQUFwQixHQUE4QixJQUE5QjtBQUNELEdBRkQsTUFFTztBQUNMd0QsdUJBQW1CLENBQUN4RCxPQUFwQixHQUE4QixLQUE5QjtBQUNEOztBQUNEbEUsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJtRCxHQUE3QixDQUFpQ1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDdUMsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFELENBQWlCZ0IsR0FBakIsQ0FBcUIsUUFBckIsQ0FBRCxDQUF6QztBQUNBdkQsR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNtRCxHQUFuQyxDQUF1Q1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDdUMsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFELENBQWlCZ0IsR0FBakIsQ0FBcUIsUUFBckIsQ0FBRCxDQUEvQzs7QUFFQW1FLHFCQUFtQixDQUFDckQsT0FBcEIsR0FBOEIsWUFBWTtBQUN4QyxRQUFJcUQsbUJBQW1CLENBQUN4RCxPQUFwQixJQUErQixJQUFuQyxFQUF5QztBQUN2QyxXQUFLLElBQUl4QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDYSxrQkFBVSxDQUFDYixDQUFELENBQVYsQ0FBYzRDLEtBQWQsQ0FBb0JxRCxNQUFwQixHQUE2QixNQUE3QjtBQUNEOztBQUNEMUYsaUJBQVc7QUFDWjtBQUNGLEdBUEQ7O0FBU0FqQyxHQUFDLENBQUMsd0RBQUQsQ0FBRCxDQUE0REMsRUFBNUQsQ0FBK0QsT0FBL0QsRUFBd0UsWUFBWTtBQUNsRixRQUFJeUgsbUJBQW1CLENBQUN4RCxPQUFwQixJQUErQixLQUFuQyxFQUEwQztBQUN4QyxXQUFLLElBQUl4QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsU0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLFFBQXJCLEVBQStCdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixLQUFnQixJQUEvQztBQUNEOztBQUNELFVBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLHdCQUExQixFQUFvRDtBQUNsREosU0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNtRCxHQUFuQyxDQUF1Q25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBdkM7QUFDRCxPQUZELE1BRU87QUFDTG5ELFNBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCbUQsR0FBN0IsQ0FBaUNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWpDO0FBQ0Q7QUFDRjs7QUFDRGxCLGVBQVc7QUFDWixHQVpELEVBNVppQyxDQTBhakM7O0FBQ0EsTUFBSTJCLGdCQUFnQixDQUFDckIsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFoQixDQUFnQ2dFLEtBQWhDLElBQXlDLE1BQTdDLEVBQXFEO0FBQ25EdUMsc0JBQWtCLENBQUM1RSxPQUFuQixHQUE2QixJQUE3QjtBQUNELEdBRkQsTUFFTztBQUNMNEUsc0JBQWtCLENBQUM1RSxPQUFuQixHQUE2QixLQUE3QjtBQUNEOztBQUNEbEUsR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJtRCxHQUE1QixDQUFnQ1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDdUMsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFELENBQWlCZ0IsR0FBakIsQ0FBcUIsT0FBckIsQ0FBRCxDQUF4QztBQUNBdkQsR0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxDQUFzQ1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDdUMsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFELENBQWlCZ0IsR0FBakIsQ0FBcUIsT0FBckIsQ0FBRCxDQUE5Qzs7QUFFQXVGLG9CQUFrQixDQUFDekUsT0FBbkIsR0FBNkIsWUFBWTtBQUN2QyxRQUFJeUUsa0JBQWtCLENBQUM1RSxPQUFuQixJQUE4QixJQUFsQyxFQUF3QztBQUN0QyxXQUFLLElBQUl4QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDYSxrQkFBVSxDQUFDYixDQUFELENBQVYsQ0FBYzRDLEtBQWQsQ0FBb0JpQyxLQUFwQixHQUE0QixNQUE1QjtBQUNEOztBQUNEdEUsaUJBQVc7QUFDWjtBQUNGLEdBUEQ7O0FBU0FqQyxHQUFDLENBQUMsc0RBQUQsQ0FBRCxDQUEwREMsRUFBMUQsQ0FBNkQsT0FBN0QsRUFBc0UsWUFBWTtBQUNoRixRQUFJNkksa0JBQWtCLENBQUM1RSxPQUFuQixJQUE4QixLQUFsQyxFQUF5QztBQUN2QyxXQUFLLElBQUl4QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsU0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLE9BQXJCLEVBQThCdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixLQUFnQixJQUE5QztBQUNEOztBQUNELFVBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLHVCQUExQixFQUFtRDtBQUNqREosU0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxDQUFzQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBdEM7QUFDRCxPQUZELE1BRU87QUFDTG5ELFNBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCbUQsR0FBNUIsQ0FBZ0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWhDO0FBQ0Q7QUFDRjs7QUFDRGxCLGVBQVc7QUFDWixHQVpELEVBNWJpQyxDQTBjakM7O0FBRUEwQixrQkFBZ0IsQ0FBQyxrQ0FBRCxFQUFxQywyQkFBckMsQ0FBaEI7O0FBRUFvRiwyQkFBeUIsQ0FBQzFFLE9BQTFCLEdBQW9DLFlBQVk7QUFDOUMyRSxzQkFBa0IsQ0FBQzFFLEtBQW5CLENBQXlCQyxPQUF6QixHQUFtQyxNQUFuQztBQUNBMEUsd0JBQW9CLENBQUMzRSxLQUFyQixDQUEyQkMsT0FBM0IsR0FBcUMsT0FBckM7QUFDRCxHQUhEOztBQUlBMkUseUJBQXVCLENBQUM3RSxPQUF4QixHQUFrQyxZQUFZO0FBQzVDMkUsc0JBQWtCLENBQUMxRSxLQUFuQixDQUF5QkMsT0FBekIsR0FBbUMsT0FBbkM7QUFDQTBFLHdCQUFvQixDQUFDM0UsS0FBckIsQ0FBMkJDLE9BQTNCLEdBQXFDLE1BQXJDO0FBQ0QsR0FIRDs7QUFLQXZFLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCbUQsR0FBN0IsQ0FBaUNSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3VDLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBRCxDQUFpQmdCLEdBQWpCLENBQXFCLGNBQXJCLENBQUQsQ0FBekM7QUFDQXZELEdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DbUQsR0FBbkMsQ0FBdUNSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3VDLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBRCxDQUFpQmdCLEdBQWpCLENBQXFCLGNBQXJCLENBQUQsQ0FBL0M7QUFDQXZELEdBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCbUQsR0FBOUIsQ0FBa0NSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3VDLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBRCxDQUFpQmdCLEdBQWpCLENBQXFCLGVBQXJCLENBQUQsQ0FBMUM7QUFDQXZELEdBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DbUQsR0FBcEMsQ0FBd0NSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3VDLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBRCxDQUFpQmdCLEdBQWpCLENBQXFCLGVBQXJCLENBQUQsQ0FBaEQ7QUFFQXZELEdBQUMsQ0FBQyx3REFBRCxDQUFELENBQTREQyxFQUE1RCxDQUErRCxPQUEvRCxFQUF3RSxZQUFZO0FBQ2xGLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUMxQixPQUFDLENBQUN1QyxVQUFVLENBQUNiLENBQUQsQ0FBWCxDQUFELENBQWlCNkIsR0FBakIsQ0FBcUIsY0FBckIsRUFBcUN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLElBQXJEO0FBQ0Q7O0FBQ0QsUUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0Isd0JBQTFCLEVBQW9EO0FBQ2xESixPQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLENBQXVDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUF2QztBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJtRCxHQUE3QixDQUFpQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBakM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVZEO0FBWUFqQyxHQUFDLENBQUMsMERBQUQsQ0FBRCxDQUE4REMsRUFBOUQsQ0FBaUUsT0FBakUsRUFBMEUsWUFBWTtBQUNwRixTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsT0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLGVBQXJCLEVBQXNDdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixLQUFnQixJQUF0RDtBQUNEOztBQUNELFFBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLHlCQUExQixFQUFxRDtBQUNuREosT0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NtRCxHQUFwQyxDQUF3Q25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBeEM7QUFDRCxLQUZELE1BRU87QUFDTG5ELE9BQUMsQ0FBQywwQkFBRCxDQUFELENBQThCbUQsR0FBOUIsQ0FBa0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWxDO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FWRDtBQVlBakMsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLEVBQTdCLENBQWdDLFFBQWhDLEVBQTBDLFlBQVk7QUFDcEQsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2EsVUFBVSxDQUFDWixNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQzFCLE9BQUMsQ0FBQ3VDLFVBQVUsQ0FBQ2IsQ0FBRCxDQUFYLENBQUQsQ0FBaUI2QixHQUFqQixDQUFxQixjQUFyQixFQUFxQ3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1KLElBQVIsQ0FBYSxpQkFBYixFQUFnQ2hHLEdBQWhDLEVBQXJDO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FMRDtBQU9BakMsR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNDLEVBQW5DLENBQXNDLFFBQXRDLEVBQWdELFlBQVk7QUFDMUQsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2EsVUFBVSxDQUFDWixNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQzFCLE9BQUMsQ0FBQ3VDLFVBQVUsQ0FBQ2IsQ0FBRCxDQUFYLENBQUQsQ0FBaUI2QixHQUFqQixDQUFxQixjQUFyQixFQUFxQ3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBckM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQUxEO0FBT0E7O0FBRUFqQyxHQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ21ELEdBQWpDLENBQXFDUixRQUFRLENBQUMzQyxDQUFDLENBQUN1QyxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQUQsQ0FBaUJnQixHQUFqQixDQUFxQixrQkFBckIsQ0FBRCxDQUE3QztBQUNBdkQsR0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUNtRCxHQUF2QyxDQUEyQ1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDdUMsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFELENBQWlCZ0IsR0FBakIsQ0FBcUIsa0JBQXJCLENBQUQsQ0FBbkQ7QUFDQXZELEdBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDbUQsR0FBdkMsQ0FBMkNSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3VDLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBRCxDQUFpQmdCLEdBQWpCLENBQXFCLHdCQUFyQixDQUFELENBQW5EO0FBQ0F2RCxHQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2Q21ELEdBQTdDLENBQWlEUixRQUFRLENBQUMzQyxDQUFDLENBQUN1QyxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQUQsQ0FBaUJnQixHQUFqQixDQUFxQix3QkFBckIsQ0FBRCxDQUF6RDtBQUVBdkQsR0FBQyxDQUFDLGdFQUFELENBQUQsQ0FBb0VDLEVBQXBFLENBQXVFLE9BQXZFLEVBQWdGLFlBQVk7QUFDMUYsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2EsVUFBVSxDQUFDWixNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQzFCLE9BQUMsQ0FBQ3VDLFVBQVUsQ0FBQ2IsQ0FBRCxDQUFYLENBQUQsQ0FBaUI2QixHQUFqQixDQUFxQixrQkFBckIsRUFBeUN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLElBQXpEO0FBQ0Q7O0FBQ0QsUUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsNEJBQTFCLEVBQXdEO0FBQ3RESixPQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1Q21ELEdBQXZDLENBQTJDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUEzQztBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNtRCxHQUFqQyxDQUFxQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBckM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVZEO0FBWUFqQyxHQUFDLENBQUMsNEVBQUQsQ0FBRCxDQUFnRkMsRUFBaEYsQ0FBbUYsT0FBbkYsRUFBNEYsWUFBWTtBQUN0RyxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsT0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLHdCQUFyQixFQUErQ3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBL0Q7QUFDRDs7QUFDRCxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQixrQ0FBMUIsRUFBOEQ7QUFDNURKLE9BQUMsQ0FBQyx5Q0FBRCxDQUFELENBQTZDbUQsR0FBN0MsQ0FBaURuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWpEO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1Q21ELEdBQXZDLENBQTJDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUEzQztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBVkQ7QUFXQWpDLEdBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDQyxFQUF2QyxDQUEwQyxRQUExQyxFQUFvRCxZQUFZO0FBQzlELFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUMxQixPQUFDLENBQUN1QyxVQUFVLENBQUNiLENBQUQsQ0FBWCxDQUFELENBQWlCNkIsR0FBakIsQ0FBcUIsa0JBQXJCLEVBQXlDdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUosSUFBUixDQUFhLGlCQUFiLEVBQWdDaEcsR0FBaEMsRUFBekM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQUxEO0FBT0FqQyxHQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ0MsRUFBakMsQ0FBb0MsUUFBcEMsRUFBOEMsWUFBWTtBQUN4RCxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsT0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLGtCQUFyQixFQUF5Q3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBekM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQUxEO0FBT0E7O0FBRUE7O0FBQ0FqQyxHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLENBQXVDUixRQUFRLENBQUMzQyxDQUFDLENBQUN1QyxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQUQsQ0FBaUJnQixHQUFqQixDQUFxQixvQkFBckIsQ0FBRCxDQUEvQztBQUNBdkQsR0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNtRCxHQUF6QyxDQUE2Q1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDdUMsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFELENBQWlCZ0IsR0FBakIsQ0FBcUIsb0JBQXJCLENBQUQsQ0FBckQ7QUFDQXZELEdBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DbUQsR0FBcEMsQ0FBd0NSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3VDLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBRCxDQUFpQmdCLEdBQWpCLENBQXFCLHlCQUFyQixDQUFELENBQWhEO0FBQ0F2RCxHQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ21ELEdBQTFDLENBQThDUixRQUFRLENBQUMzQyxDQUFDLENBQUN1QyxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQUQsQ0FBaUJnQixHQUFqQixDQUFxQix5QkFBckIsQ0FBRCxDQUF0RDtBQUVBdkQsR0FBQyxDQUFDLG9FQUFELENBQUQsQ0FBd0VDLEVBQXhFLENBQTJFLE9BQTNFLEVBQW9GLFlBQVk7QUFDOUYsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2EsVUFBVSxDQUFDWixNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQzFCLE9BQUMsQ0FBQ3VDLFVBQVUsQ0FBQ2IsQ0FBRCxDQUFYLENBQUQsQ0FBaUI2QixHQUFqQixDQUFxQixvQkFBckIsRUFBMkN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLElBQTNEO0FBQ0Q7O0FBQ0QsUUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsOEJBQTFCLEVBQTBEO0FBQ3hESixPQUFDLENBQUMscUNBQUQsQ0FBRCxDQUF5Q21ELEdBQXpDLENBQTZDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUE3QztBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNtRCxHQUFuQyxDQUF1Q25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBdkM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVZEO0FBV0FqQyxHQUFDLENBQUMsc0VBQUQsQ0FBRCxDQUEwRUMsRUFBMUUsQ0FBNkUsT0FBN0UsRUFBc0YsWUFBWTtBQUNoRyxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsT0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLHlCQUFyQixFQUFnRHZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBaEU7QUFDRDs7QUFDRCxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQiwrQkFBMUIsRUFBMkQ7QUFDekRKLE9BQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDbUQsR0FBMUMsQ0FBOENuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQTlDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ21ELEdBQXJDLENBQXlDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUF6QztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBVkQ7QUFXQWpDLEdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DQyxFQUFuQyxDQUFzQyxRQUF0QyxFQUFnRCxZQUFZO0FBQzFELFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUMxQixPQUFDLENBQUN1QyxVQUFVLENBQUNiLENBQUQsQ0FBWCxDQUFELENBQWlCNkIsR0FBakIsQ0FBcUIsb0JBQXJCLEVBQTJDdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUosSUFBUixDQUFhLGlCQUFiLEVBQWdDaEcsR0FBaEMsRUFBM0M7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQUxEO0FBT0FqQyxHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ0MsRUFBbkMsQ0FBc0MsUUFBdEMsRUFBZ0QsWUFBWTtBQUMxRCxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsT0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLG9CQUFyQixFQUEyQ3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBM0M7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQUxEO0FBT0E7O0FBRUE7O0FBQ0FqQyxHQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ21ELEdBQXBDLENBQXdDUixRQUFRLENBQUMzQyxDQUFDLENBQUN1QyxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQUQsQ0FBaUJnQixHQUFqQixDQUFxQixxQkFBckIsQ0FBRCxDQUFoRDtBQUNBdkQsR0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMENtRCxHQUExQyxDQUE4Q1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDdUMsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFELENBQWlCZ0IsR0FBakIsQ0FBcUIscUJBQXJCLENBQUQsQ0FBdEQ7QUFDQXZELEdBQUMsQ0FBQyx1Q0FBRCxDQUFELENBQTJDbUQsR0FBM0MsQ0FBK0NSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3VDLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBRCxDQUFpQmdCLEdBQWpCLENBQXFCLDRCQUFyQixDQUFELENBQXZEO0FBQ0F2RCxHQUFDLENBQUMsNkNBQUQsQ0FBRCxDQUFpRG1ELEdBQWpELENBQXFEUixRQUFRLENBQUMzQyxDQUFDLENBQUN1QyxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQUQsQ0FBaUJnQixHQUFqQixDQUFxQiw0QkFBckIsQ0FBRCxDQUE3RDtBQUVBdkQsR0FBQyxDQUFDLHNFQUFELENBQUQsQ0FBMEVDLEVBQTFFLENBQTZFLE9BQTdFLEVBQXNGLFlBQVk7QUFDaEcsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2EsVUFBVSxDQUFDWixNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQzFCLE9BQUMsQ0FBQ3VDLFVBQVUsQ0FBQ2IsQ0FBRCxDQUFYLENBQUQsQ0FBaUI2QixHQUFqQixDQUFxQixxQkFBckIsRUFBNEN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLElBQTVEO0FBQ0Q7O0FBQ0QsUUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsK0JBQTFCLEVBQTJEO0FBQ3pESixPQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ21ELEdBQTFDLENBQThDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUE5QztBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NtRCxHQUFwQyxDQUF3Q25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBeEM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVZEO0FBWUFqQyxHQUFDLENBQUMsb0ZBQUQsQ0FBRCxDQUF3RkMsRUFBeEYsQ0FBMkYsT0FBM0YsRUFBb0csWUFBWTtBQUM5RyxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsT0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLDRCQUFyQixFQUFtRHZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBbkU7QUFDRDs7QUFDRCxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQixzQ0FBMUIsRUFBa0U7QUFDaEVKLE9BQUMsQ0FBQyw2Q0FBRCxDQUFELENBQWlEbUQsR0FBakQsQ0FBcURuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXJEO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsdUNBQUQsQ0FBRCxDQUEyQ21ELEdBQTNDLENBQStDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUEvQztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBVkQ7QUFZQWpDLEdBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DQyxFQUFwQyxDQUF1QyxRQUF2QyxFQUFpRCxZQUFZO0FBQzNELFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUMxQixPQUFDLENBQUN1QyxVQUFVLENBQUNiLENBQUQsQ0FBWCxDQUFELENBQWlCNkIsR0FBakIsQ0FBcUIscUJBQXJCLEVBQTRDdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUosSUFBUixDQUFhLGlCQUFiLEVBQWdDaEcsR0FBaEMsRUFBNUM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQUxEO0FBT0FqQyxHQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ0MsRUFBcEMsQ0FBdUMsUUFBdkMsRUFBaUQsWUFBWTtBQUMzRCxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsT0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLHFCQUFyQixFQUE0Q3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBNUM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQUxEO0FBT0E7O0FBRUE7O0FBQ0FqQyxHQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ21ELEdBQWxDLENBQXNDUixRQUFRLENBQUMzQyxDQUFDLENBQUN1QyxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQUQsQ0FBaUJnQixHQUFqQixDQUFxQixtQkFBckIsQ0FBRCxDQUE5QztBQUNBdkQsR0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NtRCxHQUF4QyxDQUE0Q1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDdUMsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUFELENBQWlCZ0IsR0FBakIsQ0FBcUIsbUJBQXJCLENBQUQsQ0FBcEQ7QUFDQXZELEdBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDbUQsR0FBMUMsQ0FBOENSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3VDLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBRCxDQUFpQmdCLEdBQWpCLENBQXFCLDJCQUFyQixDQUFELENBQXREO0FBQ0F2RCxHQUFDLENBQUMsNENBQUQsQ0FBRCxDQUFnRG1ELEdBQWhELENBQW9EUixRQUFRLENBQUMzQyxDQUFDLENBQUN1QyxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQUQsQ0FBaUJnQixHQUFqQixDQUFxQiwyQkFBckIsQ0FBRCxDQUE1RDtBQUVBdkQsR0FBQyxDQUFDLGtFQUFELENBQUQsQ0FBc0VDLEVBQXRFLENBQXlFLE9BQXpFLEVBQWtGLFlBQVk7QUFDNUYsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2EsVUFBVSxDQUFDWixNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQzFCLE9BQUMsQ0FBQ3VDLFVBQVUsQ0FBQ2IsQ0FBRCxDQUFYLENBQUQsQ0FBaUI2QixHQUFqQixDQUFxQixtQkFBckIsRUFBMEN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLElBQTFEO0FBQ0Q7O0FBQ0QsUUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsNkJBQTFCLEVBQXlEO0FBQ3ZESixPQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q21ELEdBQXhDLENBQTRDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUE1QztBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxDQUFzQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBdEM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVZEO0FBV0FqQyxHQUFDLENBQUMsa0ZBQUQsQ0FBRCxDQUFzRkMsRUFBdEYsQ0FBeUYsT0FBekYsRUFBa0csWUFBWTtBQUM1RyxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsT0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLDJCQUFyQixFQUFrRHZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBbEU7QUFDRDs7QUFDRCxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQixxQ0FBMUIsRUFBaUU7QUFDL0RKLE9BQUMsQ0FBQyw0Q0FBRCxDQUFELENBQWdEbUQsR0FBaEQsQ0FBb0RuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXBEO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ21ELEdBQTFDLENBQThDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUE5QztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBVkQ7QUFZQWpDLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDQyxFQUFsQyxDQUFxQyxRQUFyQyxFQUErQyxZQUFZO0FBQ3pELFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdhLFVBQVUsQ0FBQ1osTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUMxQixPQUFDLENBQUN1QyxVQUFVLENBQUNiLENBQUQsQ0FBWCxDQUFELENBQWlCNkIsR0FBakIsQ0FBcUIsbUJBQXJCLEVBQTBDdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUosSUFBUixDQUFhLGlCQUFiLEVBQWdDaEcsR0FBaEMsRUFBMUM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQUxEO0FBT0FqQyxHQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0MsRUFBbEMsQ0FBcUMsUUFBckMsRUFBK0MsWUFBWTtBQUN6RCxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYSxVQUFVLENBQUNaLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDMUIsT0FBQyxDQUFDdUMsVUFBVSxDQUFDYixDQUFELENBQVgsQ0FBRCxDQUFpQjZCLEdBQWpCLENBQXFCLG1CQUFyQixFQUEwQ3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBMUM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQUxEO0FBT0Q7O0FBS2MrQyxvRkFBZixFOzs7Ozs7Ozs7Ozs7QUMxckJBO0FBQUEsU0FBU0MscUJBQVQsQ0FBK0JuRSxFQUEvQixFQUFtQztBQUNqQzs7QUFFQSxNQUFNVCxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qk8sRUFBeEIsQ0FBdEI7QUFDQSxNQUFNc0IsZUFBZSxHQUFHL0IsYUFBYSxDQUFDVyxzQkFBZCxDQUFxQyxhQUFyQyxFQUFvRCxDQUFwRCxDQUF4QjtBQUNBLE1BQUlxQixXQUFXLEdBQUdoQyxhQUFhLENBQUNRLG9CQUFkLENBQW1DLE1BQW5DLEVBQTJDLENBQTNDLENBQWxCO0FBQ0EsTUFBSXlCLGNBQWMsR0FBR0QsV0FBVyxDQUFDckIsc0JBQVosQ0FBbUMsV0FBbkMsRUFBZ0QsQ0FBaEQsQ0FBckI7QUFDQSxNQUFJdUIsVUFBVSxHQUFHRixXQUFXLENBQUNyQixzQkFBWixDQUFtQyxVQUFuQyxDQUFqQjtBQUNBLE1BQUl3QixTQUFTLEdBQUdILFdBQVcsQ0FBQ3hCLG9CQUFaLENBQWlDLE9BQWpDLENBQWhCO0FBRUE4QyxrQkFBZ0IsQ0FBQyxzQkFBRCxFQUF5QixxQkFBekIsQ0FBaEIsQ0FWaUMsQ0FZakM7O0FBRUFBLGtCQUFnQixDQUFDLHVCQUFELEVBQTBCLDJCQUExQixDQUFoQjtBQUVBM0QsR0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxDQUFzQ1IsUUFBUSxDQUFDaUIsZ0JBQWdCLENBQUN0QixjQUFELENBQWhCLENBQWlDdUIsU0FBbEMsQ0FBOUM7QUFDQTdELEdBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDbUQsR0FBeEMsQ0FBNENSLFFBQVEsQ0FBQ2lCLGdCQUFnQixDQUFDdEIsY0FBRCxDQUFoQixDQUFpQ3VCLFNBQWxDLENBQXBEO0FBQ0E3RCxHQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ21ELEdBQXBDLENBQXdDUixRQUFRLENBQUNpQixnQkFBZ0IsQ0FBQ3RCLGNBQUQsQ0FBaEIsQ0FBaUN3QixXQUFsQyxDQUFoRDtBQUNBOUQsR0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMENtRCxHQUExQyxDQUE4Q1IsUUFBUSxDQUFDaUIsZ0JBQWdCLENBQUN0QixjQUFELENBQWhCLENBQWlDd0IsV0FBbEMsQ0FBdEQ7QUFDQTlELEdBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDbUQsR0FBckMsQ0FBeUNSLFFBQVEsQ0FBQ2lCLGdCQUFnQixDQUFDdEIsY0FBRCxDQUFoQixDQUFpQ3lCLFlBQWxDLENBQWpEO0FBQ0EvRCxHQUFDLENBQUMsdUNBQUQsQ0FBRCxDQUEyQ21ELEdBQTNDLENBQStDUixRQUFRLENBQUNpQixnQkFBZ0IsQ0FBQ3RCLGNBQUQsQ0FBaEIsQ0FBaUN5QixZQUFsQyxDQUF2RDtBQUNBL0QsR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNtRCxHQUFuQyxDQUF1Q1IsUUFBUSxDQUFDaUIsZ0JBQWdCLENBQUN0QixjQUFELENBQWhCLENBQWlDMEIsVUFBbEMsQ0FBL0M7QUFDQWhFLEdBQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDbUQsR0FBekMsQ0FBNkNSLFFBQVEsQ0FBQ2lCLGdCQUFnQixDQUFDdEIsY0FBRCxDQUFoQixDQUFpQzBCLFVBQWxDLENBQXJEO0FBRUFoRSxHQUFDLENBQUMsa0VBQUQsQ0FBRCxDQUFzRUMsRUFBdEUsQ0FBeUUsT0FBekUsRUFBa0YsWUFBWTtBQUM1RkQsS0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsWUFBdEIsRUFBb0MsRUFBcEM7QUFDQSxRQUFJSixHQUFHLEdBQUduRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQVY7QUFDQW5ELEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmxDLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDLFVBQVVzQixDQUFWLEVBQWF3QixDQUFiLEVBQWdCO0FBQzlDLGFBQU8sQ0FBQ0EsQ0FBQyxJQUFJLEVBQU4sSUFBWSxhQUFaLEdBQTRCQyxHQUE1QixHQUFrQyxnQkFBekM7QUFDRCxLQUZEOztBQUdBLFFBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDZCQUExQixFQUF5RDtBQUN2REosT0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NtRCxHQUF4QyxDQUE0Q25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBNUM7QUFDRCxLQUZELE1BRU87QUFDTG5ELE9BQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDbUQsR0FBbEMsQ0FBc0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXRDO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FaRDtBQWFBakMsR0FBQyxDQUFDLHNFQUFELENBQUQsQ0FBMEVDLEVBQTFFLENBQTZFLE9BQTdFLEVBQXNGLFlBQVk7QUFDaEdELEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLGNBQXRCLEVBQXNDLEVBQXRDO0FBQ0EsUUFBSUosR0FBRyxHQUFHbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFWO0FBQ0FuRCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JsQyxJQUFsQixDQUF1QixPQUF2QixFQUFnQyxVQUFVc0IsQ0FBVixFQUFhd0IsQ0FBYixFQUFnQjtBQUM5QyxhQUFPLENBQUNBLENBQUMsSUFBSSxFQUFOLElBQVksZUFBWixHQUE4QkMsR0FBOUIsR0FBb0MsZ0JBQTNDO0FBQ0QsS0FGRDs7QUFHQSxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQiwrQkFBMUIsRUFBMkQ7QUFDekRKLE9BQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDbUQsR0FBMUMsQ0FBOENuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQTlDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ21ELEdBQXBDLENBQXdDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUF4QztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBWkQ7QUFhQWpDLEdBQUMsQ0FBQyx3RUFBRCxDQUFELENBQTRFQyxFQUE1RSxDQUErRSxPQUEvRSxFQUF3RixZQUFZO0FBQ2xHRCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixlQUF0QixFQUF1QyxFQUF2QztBQUNBLFFBQUlKLEdBQUcsR0FBR25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBVjtBQUNBbkQsS0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCbEMsSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBVXNCLENBQVYsRUFBYXdCLENBQWIsRUFBZ0I7QUFDOUMsYUFBTyxDQUFDQSxDQUFDLElBQUksRUFBTixJQUFZLGdCQUFaLEdBQStCQyxHQUEvQixHQUFxQyxnQkFBNUM7QUFDRCxLQUZEOztBQUdBLFFBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLGdDQUExQixFQUE0RDtBQUMxREosT0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNtRCxHQUEzQyxDQUErQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBL0M7QUFDRCxLQUZELE1BRU87QUFDTG5ELE9BQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDbUQsR0FBckMsQ0FBeUNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXpDO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FaRDtBQWFBakMsR0FBQyxDQUFDLG9FQUFELENBQUQsQ0FBd0VDLEVBQXhFLENBQTJFLE9BQTNFLEVBQW9GLFlBQVk7QUFDOUZELEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLGFBQXRCLEVBQXFDLEVBQXJDO0FBQ0EsUUFBSUosR0FBRyxHQUFHbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFWO0FBQ0FuRCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JsQyxJQUFsQixDQUF1QixPQUF2QixFQUFnQyxVQUFVc0IsQ0FBVixFQUFhd0IsQ0FBYixFQUFnQjtBQUM5QyxhQUFPLENBQUNBLENBQUMsSUFBSSxFQUFOLElBQVksY0FBWixHQUE2QkMsR0FBN0IsR0FBbUMsZ0JBQTFDO0FBQ0QsS0FGRDs7QUFHQSxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQiw4QkFBMUIsRUFBMEQ7QUFDeERKLE9BQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDbUQsR0FBekMsQ0FBNkNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQTdDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLENBQXVDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUF2QztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBWkQsRUFoRWlDLENBOEVqQzs7QUFFQTBCLGtCQUFnQixDQUFDLGdDQUFELEVBQW1DLHlCQUFuQyxDQUFoQjtBQUVBeUYsNEJBQTBCLENBQUNwSCxLQUEzQixHQUFtQzRCLGdCQUFnQixDQUFDdEIsY0FBRCxDQUFoQixDQUFpQzZELFVBQXBFOztBQUNBaUQsNEJBQTBCLENBQUMzRCxRQUEzQixHQUFzQyxZQUFZO0FBQ2hEbkQsa0JBQWMsQ0FBQ2dDLEtBQWYsQ0FBcUI2QixVQUFyQixHQUFrQ2lELDBCQUEwQixDQUFDcEgsS0FBN0Q7QUFDQUMsZUFBVztBQUNaLEdBSEQ7O0FBS0EsTUFBSTJCLGdCQUFnQixDQUFDdEIsY0FBRCxDQUFoQixDQUFpQzRELFVBQWpDLElBQStDLEtBQW5ELEVBQTBEO0FBQ3hEbUQsa0JBQWMsQ0FBQ25GLE9BQWYsR0FBeUIsSUFBekI7QUFDRCxHQUZELE1BRU87QUFDTG1GLGtCQUFjLENBQUNuRixPQUFmLEdBQXlCLEtBQXpCO0FBQ0Q7O0FBQ0RtRixnQkFBYyxDQUFDaEYsT0FBZixHQUF5QixZQUFZO0FBQ25DLFFBQUlnRixjQUFjLENBQUNuRixPQUFuQixFQUE0QjtBQUMxQjVCLG9CQUFjLENBQUNnQyxLQUFmLENBQXFCNEIsVUFBckIsR0FBa0MsS0FBbEM7QUFDRCxLQUZELE1BRU87QUFDTDVELG9CQUFjLENBQUNnQyxLQUFmLENBQXFCNEIsVUFBckIsR0FBa0MsUUFBbEM7QUFDRDs7QUFDRGpFLGVBQVc7QUFDWixHQVBELENBN0ZpQyxDQXNHakM7OztBQUNBakMsR0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNtRCxHQUFqQyxDQUFxQ1IsUUFBUSxDQUFDaUIsZ0JBQWdCLENBQUN0QixjQUFELENBQWhCLENBQWlDK0QsUUFBbEMsQ0FBN0M7QUFDQXJHLEdBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDbUQsR0FBdkMsQ0FBMkNSLFFBQVEsQ0FBQ2lCLGdCQUFnQixDQUFDdEIsY0FBRCxDQUFoQixDQUFpQytELFFBQWxDLENBQW5EO0FBQ0FyRyxHQUFDLENBQUMsZ0VBQUQsQ0FBRCxDQUFvRUMsRUFBcEUsQ0FBdUUsT0FBdkUsRUFBZ0YsWUFBWTtBQUMxRkQsS0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsV0FBdEIsRUFBbUN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLElBQW5EOztBQUNBLFFBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDRCQUExQixFQUF3RDtBQUN0REosT0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUNtRCxHQUF2QyxDQUEyQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBM0M7QUFDRCxLQUZELE1BRU87QUFDTG5ELE9BQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDbUQsR0FBakMsQ0FBcUNuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXJDO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FSRCxFQXpHaUMsQ0FtSGpDOztBQUNBakMsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLEVBQTdCLENBQWdDLFFBQWhDLEVBQTBDLFlBQVk7QUFDcERELEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLE9BQXRCLEVBQStCdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUEvQjtBQUNBbEIsZUFBVztBQUNaLEdBSEQsRUFwSGlDLENBeUhqQzs7QUFFQTBCLGtCQUFnQixDQUFDLDZCQUFELEVBQWdDLCtCQUFoQyxDQUFoQjs7QUFFQTJGLGdDQUE4QixDQUFDakYsT0FBL0IsR0FBeUMsWUFBWTtBQUNuRGtGLGdDQUE0QixDQUFDakYsS0FBN0IsQ0FBbUNDLE9BQW5DLEdBQTZDLE1BQTdDO0FBQ0FpRiw2QkFBeUIsQ0FBQ2xGLEtBQTFCLENBQWdDQyxPQUFoQyxHQUEwQyxPQUExQztBQUNELEdBSEQ7O0FBSUFrRixtQ0FBaUMsQ0FBQ3BGLE9BQWxDLEdBQTRDLFlBQVk7QUFDdERtRiw2QkFBeUIsQ0FBQ2xGLEtBQTFCLENBQWdDQyxPQUFoQyxHQUEwQyxNQUExQztBQUNBZ0YsZ0NBQTRCLENBQUNqRixLQUE3QixDQUFtQ0MsT0FBbkMsR0FBNkMsT0FBN0M7QUFDRCxHQUhEOztBQUtBdkUsR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJDLEVBQTVCLENBQStCLFFBQS9CLEVBQXlDLFlBQVk7QUFDbkQsUUFBSTRJLE9BQU8sR0FBRzdJLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCbUQsR0FBOUIsS0FBc0MsR0FBcEQ7QUFDQSxRQUFJcUQsS0FBSyxHQUFHNUIsUUFBUSxDQUFDNUUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFELEVBQWdCMEYsT0FBaEIsQ0FBcEI7QUFDQTdJLEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLFlBQXRCLEVBQW9DaUQsS0FBcEM7QUFDQXZFLGVBQVc7QUFDWixHQUxEO0FBT0FqQyxHQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0MsRUFBbEMsQ0FBcUMsUUFBckMsRUFBK0MsWUFBWTtBQUN6REQsS0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsWUFBdEIsRUFBb0MscUJBQXFCWixRQUFRLENBQUMzQyxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ21ELEdBQWhDLEVBQUQsQ0FBN0IsR0FBdUUsT0FBdkUsR0FBaUZuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWpGLEdBQWlHLElBQWpHLEdBQXdHbkQsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxFQUF4RyxHQUFrSixHQUF0TDtBQUNBbEIsZUFBVztBQUNaLEdBSEQ7QUFLQWpDLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDQyxFQUFsQyxDQUFxQyxRQUFyQyxFQUErQyxZQUFZO0FBQ3pERCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixZQUF0QixFQUFvQyxxQkFBcUJaLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDbUQsR0FBaEMsRUFBRCxDQUE3QixHQUF1RSxPQUF2RSxHQUFpRm5ELENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDbUQsR0FBbEMsRUFBakYsR0FBMkgsSUFBM0gsR0FBa0luRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWxJLEdBQWtKLEdBQXRMO0FBQ0FsQixlQUFXO0FBQ1osR0FIRDtBQUtBakMsR0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NDLEVBQWhDLENBQW1DLE9BQW5DLEVBQTRDLFlBQVk7QUFDdERELEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLFlBQXRCLEVBQW9DLHFCQUFxQlosUUFBUSxDQUFDM0MsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFELENBQTdCLEdBQStDLE9BQS9DLEdBQXlEbkQsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxFQUF6RCxHQUFtRyxJQUFuRyxHQUEwR25ELENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDbUQsR0FBbEMsRUFBMUcsR0FBb0osR0FBeEw7QUFDQWxCLGVBQVc7QUFDWixHQUhEO0FBS0FqQyxHQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ0MsRUFBcEMsQ0FBdUMsT0FBdkMsRUFBZ0QsWUFBWTtBQUMxRCxRQUFJNEksT0FBTyxHQUFHN0ksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFkO0FBQ0EsUUFBSXFELEtBQUssR0FBRzVCLFFBQVEsQ0FBQzVFLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCbUQsR0FBNUIsRUFBRCxFQUFvQzBGLE9BQU8sR0FBRyxHQUE5QyxDQUFwQjtBQUNBN0ksS0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsWUFBdEIsRUFBb0NpRCxLQUFwQztBQUNBdkUsZUFBVztBQUNaLEdBTEQsRUE1SmlDLENBbUtqQzs7QUFFQTBCLGtCQUFnQixDQUFDLG1CQUFELEVBQXNCLHlCQUF0QixDQUFoQjs7QUFFQSxNQUFJQyxnQkFBZ0IsQ0FBQ3RCLGNBQUQsQ0FBaEIsQ0FBaUNxRixNQUFqQyxJQUEyQyxNQUEvQyxFQUF1RDtBQUNyRCtCLHdCQUFvQixDQUFDeEYsT0FBckIsR0FBK0IsSUFBL0I7QUFDRCxHQUZELE1BRU87QUFDTHdGLHdCQUFvQixDQUFDeEYsT0FBckIsR0FBK0IsS0FBL0I7QUFDRDs7QUFDRGxFLEdBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCbUQsR0FBOUIsQ0FBa0NSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLFFBQXRCLENBQUQsQ0FBMUM7QUFDQXZELEdBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DbUQsR0FBcEMsQ0FBd0NSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLFFBQXRCLENBQUQsQ0FBaEQ7O0FBRUFtRyxzQkFBb0IsQ0FBQ3JGLE9BQXJCLEdBQStCLFlBQVk7QUFDekMsUUFBSXFGLG9CQUFvQixDQUFDeEYsT0FBckIsSUFBZ0MsSUFBcEMsRUFBMEM7QUFDeEM1QixvQkFBYyxDQUFDZ0MsS0FBZixDQUFxQnFELE1BQXJCLEdBQThCLE1BQTlCO0FBQ0ExRixpQkFBVztBQUNaO0FBQ0YsR0FMRDs7QUFPQWpDLEdBQUMsQ0FBQywwREFBRCxDQUFELENBQThEQyxFQUE5RCxDQUFpRSxPQUFqRSxFQUEwRSxZQUFZO0FBQ3BGLFFBQUl5SixvQkFBb0IsQ0FBQ3hGLE9BQXJCLElBQWdDLEtBQXBDLEVBQTJDO0FBQ3pDbEUsT0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsUUFBdEIsRUFBZ0N2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLElBQWhEOztBQUNBLFVBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLHlCQUExQixFQUFxRDtBQUNuREosU0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NtRCxHQUFwQyxDQUF3Q25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBeEM7QUFDRCxPQUZELE1BRU87QUFDTG5ELFNBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCbUQsR0FBOUIsQ0FBa0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWxDO0FBQ0Q7QUFDRjs7QUFDRGxCLGVBQVc7QUFDWixHQVZELEVBdExpQyxDQWtNakM7O0FBQ0EsTUFBSTJCLGdCQUFnQixDQUFDdEIsY0FBRCxDQUFoQixDQUFpQ2lFLEtBQWpDLElBQTBDLE1BQTlDLEVBQXNEO0FBQ3BEb0QsdUJBQW1CLENBQUN6RixPQUFwQixHQUE4QixJQUE5QjtBQUNELEdBRkQsTUFFTztBQUNMeUYsdUJBQW1CLENBQUN6RixPQUFwQixHQUE4QixLQUE5QjtBQUNEOztBQUNEbEUsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJtRCxHQUE3QixDQUFpQ1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsT0FBdEIsQ0FBRCxDQUF6QztBQUNBdkQsR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNtRCxHQUFuQyxDQUF1Q1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsT0FBdEIsQ0FBRCxDQUEvQzs7QUFFQW9HLHFCQUFtQixDQUFDdEYsT0FBcEIsR0FBOEIsWUFBWTtBQUN4QyxRQUFJc0YsbUJBQW1CLENBQUN6RixPQUFwQixJQUErQixJQUFuQyxFQUF5QztBQUN2QzVCLG9CQUFjLENBQUNnQyxLQUFmLENBQXFCaUMsS0FBckIsR0FBNkIsTUFBN0I7QUFDQXRFLGlCQUFXO0FBQ1o7QUFDRixHQUxEOztBQU9BakMsR0FBQyxDQUFDLHdEQUFELENBQUQsQ0FBNERDLEVBQTVELENBQStELE9BQS9ELEVBQXdFLFlBQVk7QUFDbEYsUUFBSTBKLG1CQUFtQixDQUFDekYsT0FBcEIsSUFBK0IsS0FBbkMsRUFBMEM7QUFDeENsRSxPQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixPQUF0QixFQUErQnZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBL0M7O0FBQ0EsVUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0Isd0JBQTFCLEVBQW9EO0FBQ2xESixTQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLENBQXVDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUF2QztBQUNELE9BRkQsTUFFTztBQUNMbkQsU0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJtRCxHQUE3QixDQUFpQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBakM7QUFDRDtBQUNGOztBQUNEbEIsZUFBVztBQUNaLEdBVkQsRUFsTmlDLENBOE5qQzs7QUFFQTBCLGtCQUFnQixDQUFDLGtDQUFELEVBQXFDLDJCQUFyQyxDQUFoQjs7QUFFQWlHLDRCQUEwQixDQUFDdkYsT0FBM0IsR0FBcUMsWUFBWTtBQUMvQ3dGLHVCQUFtQixDQUFDdkYsS0FBcEIsQ0FBMEJDLE9BQTFCLEdBQW9DLE1BQXBDO0FBQ0F1Rix5QkFBcUIsQ0FBQ3hGLEtBQXRCLENBQTRCQyxPQUE1QixHQUFzQyxPQUF0QztBQUNELEdBSEQ7O0FBSUF3RiwwQkFBd0IsQ0FBQzFGLE9BQXpCLEdBQW1DLFlBQVk7QUFDN0N3Rix1QkFBbUIsQ0FBQ3ZGLEtBQXBCLENBQTBCQyxPQUExQixHQUFvQyxPQUFwQztBQUNBdUYseUJBQXFCLENBQUN4RixLQUF0QixDQUE0QkMsT0FBNUIsR0FBc0MsTUFBdEM7QUFDRCxHQUhEOztBQUtBdkUsR0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJtRCxHQUE5QixDQUFrQ1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsY0FBdEIsQ0FBRCxDQUExQztBQUNBdkQsR0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NtRCxHQUFwQyxDQUF3Q1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsY0FBdEIsQ0FBRCxDQUFoRDtBQUNBdkQsR0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JtRCxHQUEvQixDQUFtQ1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsZUFBdEIsQ0FBRCxDQUEzQztBQUNBdkQsR0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNtRCxHQUFyQyxDQUF5Q1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsZUFBdEIsQ0FBRCxDQUFqRDtBQUVBdkQsR0FBQyxDQUFDLDBEQUFELENBQUQsQ0FBOERDLEVBQTlELENBQWlFLE9BQWpFLEVBQTBFLFlBQVk7QUFDcEZELEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLGNBQXRCLEVBQXNDdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixLQUFnQixJQUF0RDs7QUFDQSxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQix5QkFBMUIsRUFBcUQ7QUFDbkRKLE9BQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DbUQsR0FBcEMsQ0FBd0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXhDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1ELEdBQTlCLENBQWtDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUFsQztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBUkQ7QUFVQWpDLEdBQUMsQ0FBQyw0REFBRCxDQUFELENBQWdFQyxFQUFoRSxDQUFtRSxPQUFuRSxFQUE0RSxZQUFZO0FBQ3RGRCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixlQUF0QixFQUF1Q3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBdkQ7O0FBQ0EsUUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsMEJBQTFCLEVBQXNEO0FBQ3BESixPQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ21ELEdBQXJDLENBQXlDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUF6QztBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JtRCxHQUEvQixDQUFtQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBbkM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVJEO0FBVUFqQyxHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkMsRUFBOUIsQ0FBaUMsUUFBakMsRUFBMkMsWUFBWTtBQUNyREQsS0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsY0FBdEIsRUFBc0N2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtSixJQUFSLENBQWEsaUJBQWIsRUFBZ0NoRyxHQUFoQyxFQUF0QztBQUNBbEIsZUFBVztBQUNaLEdBSEQ7QUFLQWpDLEdBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DQyxFQUFwQyxDQUF1QyxRQUF2QyxFQUFpRCxZQUFZO0FBQzNERCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixjQUF0QixFQUFzQ3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBdEM7QUFDQWxCLGVBQVc7QUFDWixHQUhEO0FBS0E7O0FBRUFqQyxHQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ21ELEdBQWxDLENBQXNDUixRQUFRLENBQUMzQyxDQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixrQkFBdEIsQ0FBRCxDQUE5QztBQUNBdkQsR0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NtRCxHQUF4QyxDQUE0Q1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0Isa0JBQXRCLENBQUQsQ0FBcEQ7QUFDQXZELEdBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDbUQsR0FBeEMsQ0FBNENSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLHdCQUF0QixDQUFELENBQXBEO0FBQ0F2RCxHQUFDLENBQUMsMENBQUQsQ0FBRCxDQUE4Q21ELEdBQTlDLENBQWtEUixRQUFRLENBQUMzQyxDQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQix3QkFBdEIsQ0FBRCxDQUExRDtBQUVBdkQsR0FBQyxDQUFDLGtFQUFELENBQUQsQ0FBc0VDLEVBQXRFLENBQXlFLE9BQXpFLEVBQWtGLFlBQVk7QUFDNUZELEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLGtCQUF0QixFQUEwQ3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBMUQ7O0FBQ0EsUUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsNkJBQTFCLEVBQXlEO0FBQ3ZESixPQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q21ELEdBQXhDLENBQTRDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUE1QztBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NtRCxHQUFsQyxDQUFzQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBdEM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVJEO0FBVUFqQyxHQUFDLENBQUMsOEVBQUQsQ0FBRCxDQUFrRkMsRUFBbEYsQ0FBcUYsT0FBckYsRUFBOEYsWUFBWTtBQUN4R0QsS0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0Isd0JBQXRCLEVBQWdEdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixLQUFnQixJQUFoRTs7QUFDQSxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQixtQ0FBMUIsRUFBK0Q7QUFDN0RKLE9BQUMsQ0FBQywwQ0FBRCxDQUFELENBQThDbUQsR0FBOUMsQ0FBa0RuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWxEO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q21ELEdBQXhDLENBQTRDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUE1QztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBUkQ7QUFTQWpDLEdBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDQyxFQUF4QyxDQUEyQyxRQUEzQyxFQUFxRCxZQUFZO0FBQy9ERCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixrQkFBdEIsRUFBMEN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtSixJQUFSLENBQWEsaUJBQWIsRUFBZ0NoRyxHQUFoQyxFQUExQztBQUNBbEIsZUFBVztBQUNaLEdBSEQ7QUFLQWpDLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDQyxFQUFsQyxDQUFxQyxRQUFyQyxFQUErQyxZQUFZO0FBQ3pERCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixrQkFBdEIsRUFBMEN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQTFDO0FBQ0FsQixlQUFXO0FBQ1osR0FIRDtBQUtBOztBQUVBOztBQUNBakMsR0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NtRCxHQUFwQyxDQUF3Q1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0Isb0JBQXRCLENBQUQsQ0FBaEQ7QUFDQXZELEdBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDbUQsR0FBMUMsQ0FBOENSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLG9CQUF0QixDQUFELENBQXREO0FBQ0F2RCxHQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ21ELEdBQXJDLENBQXlDUixRQUFRLENBQUMzQyxDQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQix5QkFBdEIsQ0FBRCxDQUFqRDtBQUNBdkQsR0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNtRCxHQUEzQyxDQUErQ1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IseUJBQXRCLENBQUQsQ0FBdkQ7QUFFQXZELEdBQUMsQ0FBQyxzRUFBRCxDQUFELENBQTBFQyxFQUExRSxDQUE2RSxPQUE3RSxFQUFzRixZQUFZO0FBQ2hHRCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixvQkFBdEIsRUFBNEN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLElBQTVEOztBQUNBLFFBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLCtCQUExQixFQUEyRDtBQUN6REosT0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMENtRCxHQUExQyxDQUE4Q25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBOUM7QUFDRCxLQUZELE1BRU87QUFDTG5ELE9BQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DbUQsR0FBcEMsQ0FBd0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXhDO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FSRDtBQVNBakMsR0FBQyxDQUFDLHdFQUFELENBQUQsQ0FBNEVDLEVBQTVFLENBQStFLE9BQS9FLEVBQXdGLFlBQVk7QUFDbEdELEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLHlCQUF0QixFQUFpRHZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBakU7O0FBQ0EsUUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsZ0NBQTFCLEVBQTREO0FBQzFESixPQUFDLENBQUMsdUNBQUQsQ0FBRCxDQUEyQ21ELEdBQTNDLENBQStDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUEvQztBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NtRCxHQUF0QyxDQUEwQ25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBMUM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVJEO0FBU0FqQyxHQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ0MsRUFBcEMsQ0FBdUMsUUFBdkMsRUFBaUQsWUFBWTtBQUMzREQsS0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0Isb0JBQXRCLEVBQTRDdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUosSUFBUixDQUFhLGlCQUFiLEVBQWdDaEcsR0FBaEMsRUFBNUM7QUFDQWxCLGVBQVc7QUFDWixHQUhEO0FBS0FqQyxHQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ0MsRUFBcEMsQ0FBdUMsUUFBdkMsRUFBaUQsWUFBWTtBQUMzREQsS0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0Isb0JBQXRCLEVBQTRDdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUE1QztBQUNBbEIsZUFBVztBQUNaLEdBSEQ7QUFLQTs7QUFFQTs7QUFDQWpDLEdBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDbUQsR0FBckMsQ0FBeUNSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLHFCQUF0QixDQUFELENBQWpEO0FBQ0F2RCxHQUFDLENBQUMsdUNBQUQsQ0FBRCxDQUEyQ21ELEdBQTNDLENBQStDUixRQUFRLENBQUMzQyxDQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixxQkFBdEIsQ0FBRCxDQUF2RDtBQUNBdkQsR0FBQyxDQUFDLHdDQUFELENBQUQsQ0FBNENtRCxHQUE1QyxDQUFnRFIsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsNEJBQXRCLENBQUQsQ0FBeEQ7QUFDQXZELEdBQUMsQ0FBQyw4Q0FBRCxDQUFELENBQWtEbUQsR0FBbEQsQ0FBc0RSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLDRCQUF0QixDQUFELENBQTlEO0FBRUF2RCxHQUFDLENBQUMsd0VBQUQsQ0FBRCxDQUE0RUMsRUFBNUUsQ0FBK0UsT0FBL0UsRUFBd0YsWUFBWTtBQUNsR0QsS0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IscUJBQXRCLEVBQTZDdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixLQUFnQixJQUE3RDs7QUFDQSxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQixnQ0FBMUIsRUFBNEQ7QUFDMURKLE9BQUMsQ0FBQyx1Q0FBRCxDQUFELENBQTJDbUQsR0FBM0MsQ0FBK0NuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQS9DO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ21ELEdBQXJDLENBQXlDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUF6QztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBUkQ7QUFVQWpDLEdBQUMsQ0FBQyxzRkFBRCxDQUFELENBQTBGQyxFQUExRixDQUE2RixPQUE3RixFQUFzRyxZQUFZO0FBQ2hIRCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQiw0QkFBdEIsRUFBb0R2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEtBQWdCLElBQXBFOztBQUNBLFFBQUluRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLHVDQUExQixFQUFtRTtBQUNqRUosT0FBQyxDQUFDLDhDQUFELENBQUQsQ0FBa0RtRCxHQUFsRCxDQUFzRG5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBdEQ7QUFDRCxLQUZELE1BRU87QUFDTG5ELE9BQUMsQ0FBQyx3Q0FBRCxDQUFELENBQTRDbUQsR0FBNUMsQ0FBZ0RuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQWhEO0FBQ0Q7O0FBQ0RsQixlQUFXO0FBQ1osR0FSRDtBQVVBakMsR0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNDLEVBQXJDLENBQXdDLFFBQXhDLEVBQWtELFlBQVk7QUFDNURELEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLHFCQUF0QixFQUE2Q3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1KLElBQVIsQ0FBYSxpQkFBYixFQUFnQ2hHLEdBQWhDLEVBQTdDO0FBQ0FsQixlQUFXO0FBQ1osR0FIRDtBQUtBakMsR0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNDLEVBQXJDLENBQXdDLFFBQXhDLEVBQWtELFlBQVk7QUFDNURELEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLHFCQUF0QixFQUE2Q3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBN0M7QUFDQWxCLGVBQVc7QUFDWixHQUhEO0FBS0E7O0FBRUE7O0FBQ0FqQyxHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ21ELEdBQW5DLENBQXVDUixRQUFRLENBQUMzQyxDQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixtQkFBdEIsQ0FBRCxDQUEvQztBQUNBdkQsR0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNtRCxHQUF6QyxDQUE2Q1IsUUFBUSxDQUFDM0MsQ0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsbUJBQXRCLENBQUQsQ0FBckQ7QUFDQXZELEdBQUMsQ0FBQyx1Q0FBRCxDQUFELENBQTJDbUQsR0FBM0MsQ0FBK0NSLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLDJCQUF0QixDQUFELENBQXZEO0FBQ0F2RCxHQUFDLENBQUMsNkNBQUQsQ0FBRCxDQUFpRG1ELEdBQWpELENBQXFEUixRQUFRLENBQUMzQyxDQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQiwyQkFBdEIsQ0FBRCxDQUE3RDtBQUVBdkQsR0FBQyxDQUFDLG9FQUFELENBQUQsQ0FBd0VDLEVBQXhFLENBQTJFLE9BQTNFLEVBQW9GLFlBQVk7QUFDOUZELEtBQUMsQ0FBQ3NDLGNBQUQsQ0FBRCxDQUFrQmlCLEdBQWxCLENBQXNCLG1CQUF0QixFQUEyQ3ZELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsS0FBZ0IsSUFBM0Q7O0FBQ0EsUUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsOEJBQTFCLEVBQTBEO0FBQ3hESixPQUFDLENBQUMscUNBQUQsQ0FBRCxDQUF5Q21ELEdBQXpDLENBQTZDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUE3QztBQUNELEtBRkQsTUFFTztBQUNMbkQsT0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNtRCxHQUFuQyxDQUF1Q25ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ELEdBQVIsRUFBdkM7QUFDRDs7QUFDRGxCLGVBQVc7QUFDWixHQVJEO0FBU0FqQyxHQUFDLENBQUMsb0ZBQUQsQ0FBRCxDQUF3RkMsRUFBeEYsQ0FBMkYsT0FBM0YsRUFBb0csWUFBWTtBQUM5R0QsS0FBQyxDQUFDc0MsY0FBRCxDQUFELENBQWtCaUIsR0FBbEIsQ0FBc0IsMkJBQXRCLEVBQW1EdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixLQUFnQixJQUFuRTs7QUFDQSxRQUFJbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQixzQ0FBMUIsRUFBa0U7QUFDaEVKLE9BQUMsQ0FBQyw2Q0FBRCxDQUFELENBQWlEbUQsR0FBakQsQ0FBcURuRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQXJEO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRCxPQUFDLENBQUMsdUNBQUQsQ0FBRCxDQUEyQ21ELEdBQTNDLENBQStDbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsR0FBUixFQUEvQztBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBUkQ7QUFVQWpDLEdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DQyxFQUFuQyxDQUFzQyxRQUF0QyxFQUFnRCxZQUFZO0FBQzFERCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixtQkFBdEIsRUFBMkN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtSixJQUFSLENBQWEsaUJBQWIsRUFBZ0NoRyxHQUFoQyxFQUEzQztBQUNBbEIsZUFBVztBQUNaLEdBSEQ7QUFLQWpDLEdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DQyxFQUFuQyxDQUFzQyxRQUF0QyxFQUFnRCxZQUFZO0FBQzFERCxLQUFDLENBQUNzQyxjQUFELENBQUQsQ0FBa0JpQixHQUFsQixDQUFzQixtQkFBdEIsRUFBMkN2RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRCxHQUFSLEVBQTNDO0FBQ0FsQixlQUFXO0FBQ1osR0FIRDtBQUlEOztBQUtjZ0Qsb0ZBQWYsRSIsImZpbGUiOiJmb3JtX3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvQVBJL21vZHVsZXMvZm9ybS9mb3JtU2V0dGluZ3MuanNcIik7XG4iLCJpbXBvcnQgaW5jbHVkZUlucHV0c1NldHRpbmdzIGZyb20gJy4vaW5wdXRzU2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgaW5jbHVkZVN1Ym1pdFNldHRpbmdzIGZyb20gJy4vc3VtYml0U2V0dGluZ3MuanMnO1xyXG5cclxuJCgnI21haW5BcmVhJykub24oJ2NsaWNrJywgJy5jb3B5Rm9ybScsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBmb3JtQmxvY2tJZCA9ICQodGhpcykucGFyZW50cygnLmZvcm1CbG9jaycpLmF0dHIoJ2lkJyk7XHJcbiAgY29uc3QgZm9ybUJsb2NrRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CbG9ja0lkKTtcclxuICBjb25zdCBjbG9uSWQgPSAnZm9ybScgKyBnZXRSYW5kb20oKTtcclxuICAkKGZvcm1CbG9ja0VsZW0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgY2xvbklkKS5pbnNlcnRBZnRlcihmb3JtQmxvY2tFbGVtKTtcclxuXHJcbiAgY29uc3QgZm9ybUlkID0gZ2V0UmFuZG9tKCk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xvbklkKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdLmlkID0gZm9ybUlkO1xyXG4gIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5SW5wdXQnKTtcclxuXHJcbiAgU29ydGFibGUuY3JlYXRlKCQoXCIjXCIgKyBmb3JtSWQgKyBcIlwiKS5nZXQoMCksIHtcclxuICAgIGFuaW1hdGlvbjogMTUwLFxyXG4gICAgc3dhcFRocmVzaG9sZDogMSxcclxuICAgIGVtcHR5SW5zZXJ0VGhyZXNob2xkOiAxLFxyXG4gICAgZ2hvc3RDbGFzczogJ2JsdWUtYmFja2dyb3VuZC1jbGFzcycsXHJcbiAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlucHV0c1tpXS5vbmJsdXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25FbmQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW5wdXRzW2ldLmJsdXIoKTtcclxuICAgICAgICBpbnB1dHNbaV0ub25ibHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaW5wdXRzW2ldLnBsYWNlaG9sZGVyID0gaW5wdXRzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgaW5wdXRzW2ldLnZhbHVlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGFkZEZ1bmN0aW9uYWxpdHlUb0Zvcm1FbGVtZW50KGNsb25JZCk7XHJcbiAgbWFrZVByZXZpZXcoKTtcclxufSk7XHJcblxyXG4kKCcjbWFpbkFyZWEnKS5vbignY2xpY2snLCAnLmZvcm1TZXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICBjb25zdCB0aHMgPSAkKHRoaXMpLnBhcmVudHMoJy5mb3JtQmxvY2snKTtcclxuICBjb25zdCBmb3JtQmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhzLmF0dHIoJ2lkJykpO1xyXG4gIGNvbnN0IGZvcm1XcmFwcGVyRWxlbSA9IGZvcm1CbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybVdyYXBwZXInKVswXTtcclxuICBsZXQgY3VycmVudEZvcm0gPSBmb3JtQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF07XHJcbiAgbGV0IGZvcm1TdWJtaXRFbGVtID0gY3VycmVudEZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5U3VibWl0JylbMF07XHJcbiAgbGV0IGZvcm1JbnB1dHMgPSBjdXJyZW50Rm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXlJbnB1dCcpO1xyXG4gIGxldCBhbGxJbnB1dHMgPSBjdXJyZW50Rm9ybS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuXHJcbiAgLy/Qn9C+0Y/QstC70LXQvdC40LUg0L/RgNCw0LLQvtC5INC/0LDQvdC10LvQuCwg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LjQvdC/0YPRgtC+0LIuXHJcbiAgJCgnI3JpZ2h0U2lkZWJhciA+IGRpdjpub3QoI3NldHRpbmdzLW1uKSBpbnB1dCcpLm9mZignaW5wdXQnKTtcclxuICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2Om5vdCgjc2V0dGluZ3MtbW4pIGlucHV0Jykub2ZmKCk7XHJcbiAgJCgnI2Zvcm0tYm9yZGVyLXN0eWxlJykub2ZmKCk7XHJcbiAgJCgnI2Zvcm0tYm9yZGVyLWxlZnQtc3R5bGUnKS5vZmYoKTtcclxuICAkKCcjZm9ybS1ib3JkZXItcmlnaHQtc3R5bGUnKS5vZmYoKTtcclxuICAkKCcjZm9ybS1ib3JkZXItdG9wLXN0eWxlLXZhbHVlJykub2ZmKCk7XHJcbiAgJCgnI2Zvcm0tYm9yZGVyLWJvdHRvbS1zdHlsZScpLm9mZigpO1xyXG4gICQoJyNmb3JtLWFuaW1hdGlvbi10eXBlLXZhbHVlJykub2ZmKCk7XHJcblxyXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyaXB0LScgKyB0aHMuYXR0cignaWQnKSkpIHtcclxuICAgIHZhciB0aW1lID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpLmlubmVySFRNTC5zcGxpdCgnLCcpWzFdKSAvIDEwMDA7XHJcbiAgICB2YXIgaCA9IE1hdGguZmxvb3IodGltZSAvIDM2MDApO1xyXG4gICAgdmFyIG0gPSBNYXRoLmZsb29yKCh0aW1lIC0gMzYwMCAqIGgpIC8gNjApO1xyXG4gICAgdmFyIHMgPSB0aW1lIC0gKDM2MDAgKiBoICsgNjAgKiBtKTtcclxuICAgICQoJyNmb3JtLXRpbWVvdXQtaG91ci12YWx1ZScpLnZhbChoKTtcclxuICAgICQoJyNmb3JtLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKG0pO1xyXG4gICAgJCgnI2Zvcm0tdGltZW91dC1zZWNvbmQtdmFsdWUnKS52YWwocyk7XHJcbiAgICAkKCcjZm9ybS1kaXNwbGF5LW5vbmUtdmFsdWUnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJyNmb3JtLXRpbWVvdXQtaG91ci12YWx1ZScpLnZhbCgwKTtcclxuICAgICQoJyNmb3JtLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKDApO1xyXG4gICAgJCgnI2Zvcm0tdGltZW91dC1zZWNvbmQtdmFsdWUnKS52YWwoMCk7XHJcbiAgfVxyXG4gICQoJyNyaWdodFNpZGViYXIgPiBkaXYnKS5oaWRlKCk7XHJcbiAgJCgnI3NldHRpbmdzLW1uJykuaGlkZSgpO1xyXG4gICQoJyNtYWluLWJsb2NrLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNjb250ZW50LWJsb2NrLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNpbWFnZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjdmlkZW8tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3RleHQtc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2J1dHRvbi1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjc3Vic2NyaWJlLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNsaW5lLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNsaXN0LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNmb3JtLXNldHRpbmdzJykuc2hvdygpO1xyXG4gICQoJyNyaWdodFNpZGViYXInKS5jc3Moe1xyXG4gICAgcmlnaHQ6ICcwcHgnLFxyXG4gICAgdHJhbnNpdGlvbjogJzAuNHMgYWxsIGVhc2UtaW4nXHJcbiAgfSkuYWRkQ2xhc3MoJ2FjdGl2YXRlZCcpO1xyXG5cclxuICAvL9Cd0LDRgdGC0YDQvtC50LrQuCDQvtGC0YHRgtGD0L/QvtCyINGE0L7RgNC80YtcclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnZm9ybU1hcmdpbkV2ZXJ5JywgJ2Zvcm1NYXJnaW5Hcm91cEluZGljYXRvcicpO1xyXG5cclxuICAkKCcjZm9ybS1tYXJnaW4tdG9wLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZm9ybUJsb2NrRWxlbSkubWFyZ2luVG9wKSk7XHJcbiAgJCgnI2Zvcm0tbWFyZ2luLXRvcC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGZvcm1CbG9ja0VsZW0pLm1hcmdpblRvcCkpO1xyXG4gICQoJyNmb3JtLW1hcmdpbi1yaWdodC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGZvcm1CbG9ja0VsZW0pLm1hcmdpblJpZ2h0KSk7XHJcbiAgJCgnI2Zvcm0tbWFyZ2luLXJpZ2h0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZm9ybUJsb2NrRWxlbSkubWFyZ2luUmlnaHQpKTtcclxuICAkKCcjZm9ybS1tYXJnaW4tYm90dG9tLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZm9ybUJsb2NrRWxlbSkubWFyZ2luQm90dG9tKSk7XHJcbiAgJCgnI2Zvcm0tbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGZvcm1CbG9ja0VsZW0pLm1hcmdpbkJvdHRvbSkpO1xyXG4gICQoJyNmb3JtLW1hcmdpbi1sZWZ0LXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZm9ybUJsb2NrRWxlbSkubWFyZ2luTGVmdCkpO1xyXG4gICQoJyNmb3JtLW1hcmdpbi1sZWZ0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZm9ybUJsb2NrRWxlbSkubWFyZ2luTGVmdCkpO1xyXG5cclxuICAkKCcjZm9ybS1tYXJnaW4tdG9wLXZhbHVlLCAjZm9ybS1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChmb3JtQmxvY2tFbGVtKS5jc3MoJ21hcmdpbi10b3AnLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQoZm9ybUJsb2NrRWxlbSkuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi10b3A6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm0tbWFyZ2luLXRvcC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtLW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybS1tYXJnaW4tdG9wLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjZm9ybS1tYXJnaW4tcmlnaHQtdmFsdWUsICNmb3JtLW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybUJsb2NrRWxlbSkuY3NzKCdtYXJnaW4tcmlnaHQnLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQoZm9ybUJsb2NrRWxlbSkuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi1yaWdodDonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgfSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybS1tYXJnaW4tcmlnaHQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybS1tYXJnaW4tcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybS1tYXJnaW4tcmlnaHQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNmb3JtLW1hcmdpbi1ib3R0b20tdmFsdWUsICNmb3JtLW1hcmdpbi1ib3R0b20tdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1CbG9ja0VsZW0pLmNzcygnbWFyZ2luLWJvdHRvbScsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChmb3JtQmxvY2tFbGVtKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLWJvdHRvbTonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgfSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybS1tYXJnaW4tYm90dG9tLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2Zvcm0tbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtLW1hcmdpbi1ib3R0b20tdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNmb3JtLW1hcmdpbi1sZWZ0LXZhbHVlLCAjZm9ybS1tYXJnaW4tbGVmdC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybUJsb2NrRWxlbSkuY3NzKCdtYXJnaW4tbGVmdCcsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChmb3JtQmxvY2tFbGVtKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLWxlZnQ6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm0tbWFyZ2luLWxlZnQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybS1tYXJnaW4tbGVmdC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtLW1hcmdpbi1sZWZ0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QktC10YDRgtC40LrQsNC70YzQvdC+0LUg0LLRi9GA0LDQstC90LjQstCw0L3QuNC1INGE0L7RgNC80YtcclxuICBcclxuICBzaG93SGlkZVNldHRpbmdzKCdmb3JtLXNob3ctdmVydGljYWwtc2V0dGluZ3MnLCAnZm9ybVZlcnRpY2FsSW5kaWNhdG9yJyk7XHJcbiAgXHJcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoZm9ybUJsb2NrRWxlbSkubWFyZ2luVG9wID09ICdhdXRvJykge1xyXG4gICAgZm9ybU1hcmdpbkJvdHRvbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIGZvcm1NYXJnaW5Ub3AuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgZm9ybU1hcmdpbkNlbnRlci5jaGVja2VkID0gZmFsc2U7XHJcbiAgfSBlbHNlIGlmIChnZXRDb21wdXRlZFN0eWxlKGZvcm1CbG9ja0VsZW0pLm1hcmdpbkJvdHRvbSA9PSAnYXV0bycpIHtcclxuICAgIGZvcm1NYXJnaW5Cb3R0b20uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgZm9ybU1hcmdpblRvcC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIGZvcm1NYXJnaW5DZW50ZXIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtQmxvY2tFbGVtKS5tYXJnaW5Ub3AgPT0gJzBweCcgJiYgZ2V0Q29tcHV0ZWRTdHlsZShmb3JtQmxvY2tFbGVtKS5tYXJnaW5Cb3R0b20gPT0gJzBweCcpIHtcclxuICAgIGZvcm1NYXJnaW5Cb3R0b20uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgZm9ybU1hcmdpblRvcC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBmb3JtTWFyZ2luQ2VudGVyLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH1cclxuICBmb3JtTWFyZ2luVG9wLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3JtQmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xyXG4gICAgZm9ybUJsb2NrRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnYXV0byc7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuICBmb3JtTWFyZ2luQ2VudGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3JtQmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xyXG4gICAgZm9ybUJsb2NrRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGZvcm1NYXJnaW5Cb3R0b20ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvcm1CbG9ja0VsZW0uc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xyXG4gICAgZm9ybUJsb2NrRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQuCDRgtC10L3QuCDRgtC10LrRgdGC0LAqL1xyXG4gIFxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ2Zvcm0tdGV4dC1zaGFkb3ctc2V0dGluZ3MnLCAnZm9ybVRleHRTaGFkb3dJbmRpY2F0b3InKTtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UZXh0U2hhZG93UmFkaW9PbicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS10ZXh0LXNoYWRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdmFyIGh2ID0gJCgnI2Zvcm0tdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNmb3JtLXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNmb3JtLXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2Zvcm0tdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2Zvcm0tdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbElucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGFsbElucHV0c1tpXSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGV4dFNoYWRvd1JhZGlvT2ZmJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXRleHQtc2hhZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoYWxsSW5wdXRzW2ldKS5jc3MoJ3RleHQtc2hhZG93JywgJ25vbmUnKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICAkKCcjZm9ybS10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLCAjZm9ybS10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjZm9ybS10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjZm9ybS10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNmb3JtLXRleHQtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNmb3JtLXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybS10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2Zvcm0tdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtLXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybS10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZSwgI2Zvcm0tdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjZm9ybS10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI2Zvcm0tdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjZm9ybS10ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjZm9ybS10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoYWxsSW5wdXRzW2ldKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm0tdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybS10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtLXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2Zvcm0tdGV4dC1zaGFkb3ctYmx1ci12YWx1ZSwgI2Zvcm0tdGV4dC1zaGFkb3ctYmx1ci12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNmb3JtLXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjZm9ybS10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjZm9ybS10ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjZm9ybS10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoYWxsSW5wdXRzW2ldKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm0tdGV4dC1zaGFkb3ctYmx1ci12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtLXRleHQtc2hhZG93LWJsdXItdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybS10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2Zvcm0tdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZSwgI2Zvcm0tdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNmb3JtLXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjZm9ybS10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjZm9ybS10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNmb3JtLXRleHQtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQodGhpcykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoYWxsSW5wdXRzW2ldKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm0tdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtLXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybS10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2Zvcm0tdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI2Zvcm0tdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNmb3JtLXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNmb3JtLXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCh0aGlzKS52YWwoKSwgJCgnI2Zvcm0tdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbElucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGFsbElucHV0c1tpXSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgLyrQmtC+0L3QtdGGINC90LDRgdGC0YDQvtC10Log0YLQtdC90Lgg0YLQtdC60YHRgtCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0YLQtdC90LXQuSovXHJcbiAgXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnZm9ybS1zaGFkb3ctc2V0dGluZ3MnLCAnZm9ybVNoYWRvd0luZGljYXRvcicpO1xyXG4gIFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU2hhZG93UmFkaW9PbicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1zaGFkb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHZhciBodiA9ICQoJyNmb3JtLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI2Zvcm0tc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNmb3JtLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHNwcmQgPSAkKCcjZm9ybS1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNmb3JtLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjZm9ybS1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBpbnNldCA9ICQoJyNmb3JtLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU2hhZG93UmFkaW9PZmYnKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tc2hhZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoYWxsSW5wdXRzW2ldKS5jc3MoJ2JveC1zaGFkb3cnLCAnbm9uZScpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG4gICQoJyNmb3JtLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLCAjZm9ybS1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI2Zvcm0tc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNmb3JtLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHNwcmQgPSAkKCcjZm9ybS1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNmb3JtLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjZm9ybS1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBpbnNldCA9ICQoJyNmb3JtLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2Zvcm0tc2hhZG93LWhvcml6b250YWwtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybS1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZSwgI2Zvcm0tc2hhZG93LXZlcnRpY2FsLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI2Zvcm0tc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjZm9ybS1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI2Zvcm0tc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjZm9ybS1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2Zvcm0tc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjZm9ybS1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoYWxsSW5wdXRzW2ldKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybS1zaGFkb3ctdmVydGljYWwtdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybS1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybS1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybS1zaGFkb3ctYmx1ci12YWx1ZSwgI2Zvcm0tc2hhZG93LWJsdXItdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjZm9ybS1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNmb3JtLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI2Zvcm0tc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjZm9ybS1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2Zvcm0tc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjZm9ybS1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoYWxsSW5wdXRzW2ldKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybS1zaGFkb3ctYmx1ci12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtLXNoYWRvdy1ibHVyLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2Zvcm0tc2hhZG93LWJsdXItdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybS1zaGFkb3ctc3ByZWFkLXZhbHVlLCAjZm9ybS1zaGFkb3ctc3ByZWFkLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI2Zvcm0tc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjZm9ybS1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI2Zvcm0tc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNmb3JtLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjZm9ybS1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBpbnNldCA9ICQoJyNmb3JtLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtLXNoYWRvdy1zcHJlYWQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybS1zaGFkb3ctc3ByZWFkLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2Zvcm0tc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtLXNoYWRvdy1vcGFjaXR5LXZhbHVlLCAjZm9ybS1zaGFkb3ctb3BhY2l0eS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNmb3JtLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI2Zvcm0tc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNmb3JtLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHNwcmQgPSAkKCcjZm9ybS1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNmb3JtLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKHRoaXMpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBpbnNldCA9ICQoJyNmb3JtLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtLXNoYWRvdy1vcGFjaXR5LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2Zvcm0tc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybS1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtLXNoYWRvdy1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjZm9ybS1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNmb3JtLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjZm9ybS1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI2Zvcm0tc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKHRoaXMpLnZhbCgpLCAkKCcjZm9ybS1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBpbnNldCA9ICQoJyNmb3JtLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtLXNoYWRvdy1pbnNldC12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjZm9ybS1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNmb3JtLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjZm9ybS1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI2Zvcm0tc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjZm9ybS1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2Zvcm0tc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgLyrQmtC+0L3QtdGGINC90LDRgdGC0YDQvtC10Log0YLQtdC90LXQuSovXHJcblxyXG4gIGluY2x1ZGVJbnB1dHNTZXR0aW5ncygkKHRocykuYXR0cignaWQnKSk7XHJcbiAgaW5jbHVkZVN1Ym1pdFNldHRpbmdzKCQodGhzKS5hdHRyKCdpZCcpKTtcclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60LAg0LDQvdC40LzQsNGG0LjQuCovXHJcbiAgXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnZm9ybS1hbmltYXRpb24nLCAnZm9ybUFuaW1hdGlvbkluZGljYXRvcicpO1xyXG5cclxuICAkKCcjZm9ybS1hbmltYXRpb24tdHlwZS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKSAhPSBcIm5vbmVcIikge1xyXG4gICAgICAkKGN1cnJlbnRGb3JtKS5jc3MoJ2FuaW1hdGlvbi1uYW1lJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICQoY3VycmVudEZvcm0pLmNzcygnYW5pbWF0aW9uLWRlbGF5JywgJCgnI2Zvcm0tYW5pbWF0aW9uLWRlbGF5LXZhbHVlJykudmFsKCkgKyAncycpO1xyXG4gICAgICAkKGN1cnJlbnRGb3JtKS5jc3MoJ2FuaW1hdGlvbi1kdXJhdGlvbicsICQoJyNmb3JtLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZScpLnZhbCgpICsgJ3MnKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtLWFuaW1hdGlvbi1kZWxheS12YWx1ZSwgI2Zvcm0tYW5pbWF0aW9uLWRlbGF5LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChjdXJyZW50Rm9ybSkuY3NzKCdhbmltYXRpb24tZGVsYXknLCAkKHRoaXMpLnZhbCgpICsgJ3MnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtLWFuaW1hdGlvbi1kZWxheS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtLWFuaW1hdGlvbi1kZWxheS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtLWFuaW1hdGlvbi1kZWxheS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZSwgI2Zvcm0tYW5pbWF0aW9uLWR1cmF0aW9uLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChjdXJyZW50Rm9ybSkuY3NzKCdhbmltYXRpb24tZHVyYXRpb24nLCAkKHRoaXMpLnZhbCgpICsgJ3MnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQvdCw0YHRgtGA0L7QtdC6INCw0L3QuNC80LDRhtC40LgqL1xyXG4gIC8q0JHQu9C+0Log0YLQsNC50LzQsNGD0YLQsCovXHJcbiAgXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnZm9ybS1zaG93LXRpbWVvdXQtc2V0dGluZ3MnLCAnZm9ybVRpbWVvdXRJbmRpY2F0b3InKTtcclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tISEh0KHQlNCV0JvQkNCi0KwhISEtLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1kaXNwbGF5LW5vbmUtdmFsdWUnKS5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tZGlzcGxheS1ub25lLXZhbHVlJykuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgJCgnI2Zvcm0tZGlzcGxheS1ub25lLXZhbHVlLCAjZm9ybS10aW1lb3V0LWhvdXItdmFsdWUsICNmb3JtLXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZSwgI2Zvcm0tdGltZW91dC1taW51dGUtdmFsdWUsICNmb3JtLXRpbWVvdXQtbWludXRlLXZhbHVlLXJhbmdlLCAjZm9ybS10aW1lb3V0LXNlY29uZC12YWx1ZSwgI2Zvcm0tdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaWQgPSB0aHMuYXR0cignaWQnKTtcclxuXHJcbiAgICB2YXIgaG91cnMgPSAkKCcjZm9ybS10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoKSAqIDM2MDA7XHJcbiAgICB2YXIgbWludXRlID0gJCgnI2Zvcm0tdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwoKSAqIDYwO1xyXG4gICAgdmFyIHNlY29uZCA9IHBhcnNlSW50KCQoJyNmb3JtLXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKCkpO1xyXG5cclxuICAgIHZhciB0aW1lID0gaG91cnMgKyBtaW51dGUgKyBzZWNvbmQ7XHJcblxyXG4gICAgdGltZSA9IHRpbWUgKiAxMDAwO1xyXG5cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tZGlzcGxheS1ub25lLXZhbHVlJykuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgICAgJCgnI21haW5BcmVhJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNvZGVcIiBpZD1cInNjcmlwdC0nICsgaWQgKyAnXCIgY2xhc3M9XCJjb2RlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPicgKyBbaWQsIHRpbWVdICsgJzwvc3Bhbj4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtLXRpbWVvdXQtaG91ci12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtLXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybS10aW1lb3V0LWhvdXItdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjZm9ybS10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm0tdGltZW91dC1taW51dGUtdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybS10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybS10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtLXRpbWVvdXQtc2Vjb25kLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2Zvcm0tdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm0tdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjZm9ybS10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0LHQu9C+0LrQsCDRgtCw0LnQvNCw0YPRgtCwKi9cclxuXHJcbn0pO1xyXG4iLCJmdW5jdGlvbiBpbmNsdWRlSW5wdXRzU2V0dGluZ3MoaWQpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGNvbnN0IGZvcm1CbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgY29uc3QgZm9ybVdyYXBwZXJFbGVtID0gZm9ybUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtV3JhcHBlcicpWzBdO1xyXG4gIGxldCBjdXJyZW50Rm9ybSA9IGZvcm1CbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcclxuICBsZXQgZm9ybVN1Ym1pdEVsZW0gPSBjdXJyZW50Rm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXlTdWJtaXQnKVswXTtcclxuICBsZXQgZm9ybUlucHV0cyA9IGN1cnJlbnRGb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheUlucHV0Jyk7XHJcbiAgbGV0IGFsbElucHV0cyA9IGN1cnJlbnRGb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gIFxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ2Zvcm0taW5wdXRzLXNldHRpbmdzJywgJ2Zvcm1JbnB1dHNJbmRpY2F0b3InKTtcclxuICBcclxuICAvL9CU0L7QsdCw0LLQu9C10L3QuNC1INC/0L7Qu9GPXHJcbiAgXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnZm9ybS1zaG93LWFkZC1kZWxldGUtc2V0dGluZ3MnLCAnZm9ybUFkZERlbGV0ZUluZGljYXRvcicpO1xyXG4gIFxyXG4gIGlucHV0ZXJBZGQudmFsdWUgPSAnJztcclxuXHJcbiAgZnVuY3Rpb24gc2hvd09wdGlvbnNGb3JBZGQoKSB7XHJcbiAgICBjdXJyZW50Rm9ybSA9IGZvcm1CbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcclxuXHJcbiAgICBpbnB1dGVyQWRkLmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+JztcclxuICAgIGlmICghY3VycmVudEZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmFtZScpWzBdKSB7XHJcbiAgICAgIGlucHV0ZXJBZGQuaW5uZXJIVE1MICs9ICc8b3B0aW9uIHZhbHVlPVwibmFtZVwiPtCY0LzRjzwvb3B0aW9uPic7XHJcbiAgICB9XHJcbiAgICBpZiAoIWN1cnJlbnRGb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VtYWlsJylbMF0pIHtcclxuICAgICAgaW5wdXRlckFkZC5pbm5lckhUTUwgKz0gJzxvcHRpb24gdmFsdWU9XCJlbWFpbFwiPkVtYWlsPC9vcHRpb24+JztcclxuICAgIH1cclxuICAgIGlmICghY3VycmVudEZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVsJylbMF0pIHtcclxuICAgICAgaW5wdXRlckFkZC5pbm5lckhUTUwgKz0gJzxvcHRpb24gdmFsdWU9XCJ0ZWxcIj7QotC10LvQtdGE0L7QvTwvb3B0aW9uPic7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dPcHRpb25zRm9yQWRkKCk7XHJcblxyXG4gIGlucHV0ZXJBZGQub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaSA9IGlucHV0ZXJBZGQuc2VsZWN0ZWRJbmRleDtcclxuICAgIGxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuXHJcbiAgICBpZiAoaW5wdXRlckFkZC52YWx1ZSA9PSAndGVsJykge1xyXG4gICAgICBmb3JtSW5wdXQuY2xhc3NOYW1lID0gJ3BheUlucHV0IHRlbCc7XHJcbiAgICAgIGZvcm1JbnB1dC5uYW1lID0gJ3RlbCc7XHJcbiAgICAgIGZvcm1JbnB1dC50eXBlID0gaW5wdXRlckFkZC52YWx1ZTtcclxuICAgICAgZm9ybUlucHV0LnBsYWNlaG9sZGVyID0gaW5wdXRlckFkZC5vcHRpb25zW2ldLmlubmVySFRNTDtcclxuXHJcbiAgICAgIGlmIChmb3JtSW5wdXRCb2xkLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5mb250V2VpZ2h0ID0gJzkwMCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJztcclxuICAgICAgfVxyXG4gICAgICBmb3JtSW5wdXQuc3R5bGUuZm9udEZhbWlseSA9IGZvcm1JbnB1dEZvbnRGYW1pbHlTZWxlY3QudmFsdWU7XHJcbiAgICAgIGZvcm1JbnB1dC5zdHlsZS5mb250U2l6ZSA9ICQoJyNmb3JtSW5wdXQtZm9udC1zaXplLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICBpZiAoZm9ybUlucHV0c1swXSkge1xyXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkud2lkdGgpICE9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtV3JhcHBlckVsZW0pLndpZHRoKSAtIDIpIHtcclxuICAgICAgICAgIGZvcm1JbnB1dC5zdHlsZS53aWR0aCA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5jb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuY29sb3I7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJhY2tncm91bmQgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJhY2tncm91bmQ7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlclRvcFdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJUb3BXaWR0aDtcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyVG9wTGVmdFJhZGl1cyA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyVG9wTGVmdFJhZGl1cztcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyVG9wU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlclRvcFN0eWxlO1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJUb3BDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyVG9wQ29sb3I7XHJcblxyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJSaWdodFdpZHRoO1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyVG9wUmlnaHRSYWRpdXM7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlclJpZ2h0U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlclJpZ2h0U3R5bGU7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlclJpZ2h0Q29sb3I7XHJcblxyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyQm90dG9tV2lkdGg7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cztcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlckJvdHRvbVN0eWxlO1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyQm90dG9tQ29sb3I7XHJcblxyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJMZWZ0V2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlckxlZnRXaWR0aDtcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyQm90dG9tTGVmdFJhZGl1cztcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyTGVmdFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJMZWZ0U3R5bGU7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyTGVmdENvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmb3JtSW5wdXRBdXRvSGVpZ2h0LmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmhlaWdodCA9ICQoJyNmb3JtSW5wdXQtaGVpZ2h0LXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZm9ybVRleHRTaGFkb3dSYWRpb09uLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGh2ID0gJCgnI2Zvcm0tdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgICBjb25zdCB2diA9ICQoJyNmb3JtLXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICAgIGNvbnN0IGJsciA9ICQoJyNmb3JtLXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgICAgY29uc3QgY2xyID0gaGV4VG9SR0IoJCgnI2Zvcm0tdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2Zvcm0tdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgICAgICBjb25zdCBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcblxyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS50ZXh0U2hhZG93ID0gcHJwdHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoZm9ybUlucHV0KS5pbnNlcnRCZWZvcmUoZm9ybVN1Ym1pdEVsZW0pO1xyXG4gICAgICBzaG93T3B0aW9uc0ZvckFkZCgpO1xyXG4gICAgICBzaG93T3B0aW9uc0ZvckRlbGV0ZSgpO1xyXG4gICAgICBjdXJyZW50Rm9ybSA9IGZvcm1CbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcclxuICAgICAgZm9ybVN1Ym1pdEVsZW0gPSBjdXJyZW50Rm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXlTdWJtaXQnKVswXTtcclxuICAgICAgYWRkRnVuY3Rpb25hbGl0eVRvRm9ybUVsZW1lbnQoJCh0aHMpLmF0dHIoJ2lkJykpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dGVyQWRkLnZhbHVlID09ICduYW1lJykge1xyXG4gICAgICBmb3JtSW5wdXQuY2xhc3NOYW1lID0gJ3BheUlucHV0IG5hbWUnO1xyXG4gICAgICBmb3JtSW5wdXQubmFtZSA9ICduYW1lJztcclxuICAgICAgZm9ybUlucHV0LnR5cGUgPSBpbnB1dGVyQWRkLnZhbHVlO1xyXG4gICAgICBmb3JtSW5wdXQucGxhY2Vob2xkZXIgPSBpbnB1dGVyQWRkLm9wdGlvbnNbaV0uaW5uZXJIVE1MO1xyXG5cclxuICAgICAgaWYgKGZvcm1JbnB1dEJvbGQuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmZvbnRXZWlnaHQgPSAnOTAwJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1JbnB1dC5zdHlsZS5mb250RmFtaWx5ID0gZm9ybUlucHV0Rm9udEZhbWlseVNlbGVjdC52YWx1ZTtcclxuICAgICAgZm9ybUlucHV0LnN0eWxlLmZvbnRTaXplID0gJCgnI2Zvcm1JbnB1dC1mb250LXNpemUtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIGlmIChmb3JtSW5wdXRzWzBdKSB7XHJcbiAgICAgICAgaWYgKHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS53aWR0aCkgIT0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGZvcm1XcmFwcGVyRWxlbSkud2lkdGgpIC0gMikge1xyXG4gICAgICAgICAgZm9ybUlucHV0LnN0eWxlLndpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5jb2xvcjtcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYmFja2dyb3VuZCA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYmFja2dyb3VuZDtcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyVG9wV2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlclRvcFdpZHRoO1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJUb3BMZWZ0UmFkaXVzO1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJUb3BTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyVG9wU3R5bGU7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlclRvcENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJUb3BDb2xvcjtcclxuXHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlclJpZ2h0V2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlclJpZ2h0V2lkdGg7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJUb3BSaWdodFJhZGl1cztcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyUmlnaHRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyUmlnaHRTdHlsZTtcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyUmlnaHRDb2xvcjtcclxuXHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbVdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJCb3R0b21XaWR0aDtcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzO1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyQm90dG9tU3R5bGU7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJCb3R0b21Db2xvcjtcclxuXHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyTGVmdFdpZHRoO1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzO1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJMZWZ0U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlckxlZnRTdHlsZTtcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJMZWZ0Q29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvcm1JbnB1dEF1dG9IZWlnaHQuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuaGVpZ2h0ID0gJCgnI2Zvcm1JbnB1dC1oZWlnaHQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmb3JtVGV4dFNoYWRvd1JhZGlvT24uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgaHYgPSAkKCcjZm9ybS10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICAgIGNvbnN0IHZ2ID0gJCgnI2Zvcm0tdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgICAgY29uc3QgYmxyID0gJCgnI2Zvcm0tdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgICBjb25zdCBjbHIgPSBoZXhUb1JHQigkKCcjZm9ybS10ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjZm9ybS10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgICAgIGNvbnN0IHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuXHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLnRleHRTaGFkb3cgPSBwcnB0cztcclxuICAgICAgfVxyXG5cclxuICAgICAgJChmb3JtSW5wdXQpLmluc2VydEJlZm9yZShmb3JtU3VibWl0RWxlbSk7XHJcbiAgICAgIHNob3dPcHRpb25zRm9yQWRkKCk7XHJcbiAgICAgIHNob3dPcHRpb25zRm9yRGVsZXRlKCk7XHJcbiAgICAgIGN1cnJlbnRGb3JtID0gZm9ybUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4gICAgICBmb3JtU3VibWl0RWxlbSA9IGN1cnJlbnRGb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheVN1Ym1pdCcpWzBdO1xyXG4gICAgICBhZGRGdW5jdGlvbmFsaXR5VG9Gb3JtRWxlbWVudCgkKHRocykuYXR0cignaWQnKSk7XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5wdXRlckFkZC52YWx1ZSA9PSAnZW1haWwnKSB7XHJcbiAgICAgIGZvcm1JbnB1dC5jbGFzc05hbWUgPSAncGF5SW5wdXQgZW1haWwnO1xyXG4gICAgICBmb3JtSW5wdXQubmFtZSA9ICdlbWFpbCc7XHJcbiAgICAgIGZvcm1JbnB1dC50eXBlID0gaW5wdXRlckFkZC52YWx1ZTtcclxuICAgICAgZm9ybUlucHV0LnBsYWNlaG9sZGVyID0gaW5wdXRlckFkZC5vcHRpb25zW2ldLmlubmVySFRNTDtcclxuXHJcbiAgICAgIGlmIChmb3JtSW5wdXRCb2xkLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5mb250V2VpZ2h0ID0gJzkwMCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJztcclxuICAgICAgfVxyXG4gICAgICBmb3JtSW5wdXQuc3R5bGUuZm9udEZhbWlseSA9IGZvcm1JbnB1dEZvbnRGYW1pbHlTZWxlY3QudmFsdWU7XHJcbiAgICAgIGZvcm1JbnB1dC5zdHlsZS5mb250U2l6ZSA9ICQoJyNmb3JtSW5wdXQtZm9udC1zaXplLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICBpZiAoZm9ybUlucHV0c1swXSkge1xyXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkud2lkdGgpICE9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtV3JhcHBlckVsZW0pLndpZHRoKSAtIDIpIHtcclxuICAgICAgICAgIGZvcm1JbnB1dC5zdHlsZS53aWR0aCA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5jb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuY29sb3I7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJhY2tncm91bmQgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJhY2tncm91bmQ7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlclRvcFdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJUb3BXaWR0aDtcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyVG9wTGVmdFJhZGl1cyA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyVG9wTGVmdFJhZGl1cztcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyVG9wU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlclRvcFN0eWxlO1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJUb3BDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyVG9wQ29sb3I7XHJcblxyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJSaWdodFdpZHRoO1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyVG9wUmlnaHRSYWRpdXM7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlclJpZ2h0U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlclJpZ2h0U3R5bGU7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlclJpZ2h0Q29sb3I7XHJcblxyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyQm90dG9tV2lkdGg7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cztcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlckJvdHRvbVN0eWxlO1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyQm90dG9tQ29sb3I7XHJcblxyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5ib3JkZXJMZWZ0V2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmJvcmRlckxlZnRXaWR0aDtcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyQm90dG9tTGVmdFJhZGl1cztcclxuICAgICAgICBmb3JtSW5wdXQuc3R5bGUuYm9yZGVyTGVmdFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5ib3JkZXJMZWZ0U3R5bGU7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuYm9yZGVyTGVmdENvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmb3JtSW5wdXRBdXRvSGVpZ2h0LmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybUlucHV0LnN0eWxlLmhlaWdodCA9ICQoJyNmb3JtSW5wdXQtaGVpZ2h0LXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZm9ybVRleHRTaGFkb3dSYWRpb09uLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGh2ID0gJCgnI2Zvcm0tdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgICBjb25zdCB2diA9ICQoJyNmb3JtLXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICAgIGNvbnN0IGJsciA9ICQoJyNmb3JtLXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgICAgY29uc3QgY2xyID0gaGV4VG9SR0IoJCgnI2Zvcm0tdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2Zvcm0tdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgICAgICBjb25zdCBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcblxyXG4gICAgICAgIGZvcm1JbnB1dC5zdHlsZS50ZXh0U2hhZG93ID0gcHJwdHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoZm9ybUlucHV0KS5pbnNlcnRCZWZvcmUoZm9ybVN1Ym1pdEVsZW0pO1xyXG4gICAgICBzaG93T3B0aW9uc0ZvckFkZCgpO1xyXG4gICAgICBzaG93T3B0aW9uc0ZvckRlbGV0ZSgpO1xyXG4gICAgICBjdXJyZW50Rm9ybSA9IGZvcm1CbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcclxuICAgICAgZm9ybVN1Ym1pdEVsZW0gPSBjdXJyZW50Rm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXlTdWJtaXQnKVswXTtcclxuICAgICAgYWRkRnVuY3Rpb25hbGl0eVRvRm9ybUVsZW1lbnQoJCh0aHMpLmF0dHIoJ2lkJykpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/Qo9C00LDQu9C10L3QuNC1INC/0L7Qu9GPXHJcblxyXG4gIGlucHV0ZXJEZWxldGUudmFsdWUgPSAnJztcclxuXHJcbiAgZnVuY3Rpb24gc2hvd09wdGlvbnNGb3JEZWxldGUoKSB7XHJcbiAgICBjdXJyZW50Rm9ybSA9IGZvcm1CbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcclxuXHJcbiAgICBpbnB1dGVyRGVsZXRlLmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+JztcclxuICAgIGlmIChjdXJyZW50Rm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYW1lJylbMF0pIHtcclxuICAgICAgaW5wdXRlckRlbGV0ZS5pbm5lckhUTUwgKz0gJzxvcHRpb24gdmFsdWU9XCJuYW1lXCI+0JjQvNGPPC9vcHRpb24+JztcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50Rm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlbWFpbCcpWzBdKSB7XHJcbiAgICAgIGlucHV0ZXJEZWxldGUuaW5uZXJIVE1MICs9ICc8b3B0aW9uIHZhbHVlPVwiZW1haWxcIj5FbWFpbDwvb3B0aW9uPic7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVsJylbMF0pIHtcclxuICAgICAgaW5wdXRlckRlbGV0ZS5pbm5lckhUTUwgKz0gJzxvcHRpb24gdmFsdWU9XCJ0ZWxcIj7QotC10LvQtdGE0L7QvTwvb3B0aW9uPic7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dPcHRpb25zRm9yRGVsZXRlKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZUlucHV0KGVsLCBpbnB1dENsYXNzKSB7XHJcbiAgICBjb25zdCBzdHJpbmdUb0RlbGV0ZSA9IG5ldyBSZWdFeHAoJzxpbnB1dCBjbGFzcz1cInBheUlucHV0ICcgKyBpbnB1dENsYXNzICsgJ1wiW14+XSo+JywgJ2dpJyk7XHJcbiAgICBlbC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUwucmVwbGFjZShzdHJpbmdUb0RlbGV0ZSwgJycpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRlckRlbGV0ZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChpbnB1dGVyRGVsZXRlLnZhbHVlID09ICd0ZWwnKSB7XHJcbiAgICAgIGRlbGV0ZUlucHV0KGN1cnJlbnRGb3JtLCAndGVsJyk7XHJcbiAgICAgIHNob3dPcHRpb25zRm9yQWRkKCk7XHJcbiAgICAgIHNob3dPcHRpb25zRm9yRGVsZXRlKCk7XHJcbiAgICAgIGN1cnJlbnRGb3JtID0gZm9ybUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4gICAgICBmb3JtU3VibWl0RWxlbSA9IGN1cnJlbnRGb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheVN1Ym1pdCcpWzBdO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dGVyRGVsZXRlLnZhbHVlID09ICduYW1lJykge1xyXG4gICAgICBkZWxldGVJbnB1dChjdXJyZW50Rm9ybSwgJ25hbWUnKTtcclxuICAgICAgc2hvd09wdGlvbnNGb3JBZGQoKTtcclxuICAgICAgc2hvd09wdGlvbnNGb3JEZWxldGUoKTtcclxuICAgICAgY3VycmVudEZvcm0gPSBmb3JtQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF07XHJcbiAgICAgIGZvcm1TdWJtaXRFbGVtID0gY3VycmVudEZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5U3VibWl0JylbMF07XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0ZXJEZWxldGUudmFsdWUgPT0gJ2VtYWlsJykge1xyXG4gICAgICBkZWxldGVJbnB1dChjdXJyZW50Rm9ybSwgJ2VtYWlsJyk7XHJcbiAgICAgIHNob3dPcHRpb25zRm9yQWRkKCk7XHJcbiAgICAgIHNob3dPcHRpb25zRm9yRGVsZXRlKCk7XHJcbiAgICAgIGN1cnJlbnRGb3JtID0gZm9ybUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4gICAgICBmb3JtU3VibWl0RWxlbSA9IGN1cnJlbnRGb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheVN1Ym1pdCcpWzBdO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/QndCw0YHRgtGA0L7QudC60Lgg0YHQv9GA0Y/RgtCw0L3QvdGL0YUg0L/QvtC70LXQuVxyXG5cclxuICBoaWRkZW5JZC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHByb2R1Y3RJZEVsID0gY3VycmVudEZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvZHVjdHNJZCcpWzBdO1xyXG4gICAgcHJvZHVjdElkRWwudmFsdWUgPSBoaWRkZW5JZC52YWx1ZTtcclxuICB9XHJcbiAgXHJcbiAgLy/QktGL0LHQvtGAINGI0YDQuNGE0YLQsCDQv9C+0LvQtdC5XHJcbiAgZm9ybUlucHV0Rm9udEZhbWlseVNlbGVjdC52YWx1ZSA9IGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuZm9udEZhbWlseTtcclxuICBmb3JtSW5wdXRGb250RmFtaWx5U2VsZWN0Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvcm1JbnB1dHNbaV0uc3R5bGUuZm9udEZhbWlseSA9IGZvcm1JbnB1dEZvbnRGYW1pbHlTZWxlY3QudmFsdWU7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuZm9udFdlaWdodCA9PSAnOTAwJykge1xyXG4gICAgZm9ybUlucHV0Qm9sZC5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9ybUlucHV0Qm9sZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG4gIGZvcm1JbnB1dEJvbGQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChmb3JtSW5wdXRCb2xkLmNoZWNrZWQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9ybUlucHV0c1tpXS5zdHlsZS5mb250V2VpZ2h0ID0gJzkwMCc7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvcm1JbnB1dHNbaV0uc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuXHJcbiAgLy/QoNCw0LfQvNC10YAg0YjRgNC40YTRgtCwINC/0L7Qu9C10LlcclxuICBcclxuICBzaG93SGlkZVNldHRpbmdzKCdmb3JtLXNob3ctaW5wdXRzLWZvbnQtc2V0dGluZ3MnLCAnZm9ybUlucHV0c0ZvbnRJbmRpY2F0b3InKTtcclxuICBcclxuICAkKCcjZm9ybUlucHV0LWZvbnQtc2l6ZS12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGZvcm1JbnB1dHNbMF0pLmZvbnRTaXplKSk7XHJcbiAgJCgnI2Zvcm1JbnB1dC1mb250LXNpemUtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS5mb250U2l6ZSkpO1xyXG4gICQoJyNmb3JtSW5wdXQtZm9udC1zaXplLXZhbHVlLCAjZm9ybUlucHV0LWZvbnQtc2l6ZS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGZvcm1JbnB1dHNbaV0pLmNzcygnZm9udC1zaXplJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm1JbnB1dC1mb250LXNpemUtdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybUlucHV0LWZvbnQtc2l6ZS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtSW5wdXQtZm9udC1zaXplLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QptCy0LXRgiDRgtC10LrRgdGC0LAg0YMg0L/QvtC70LXQuVxyXG4gICQoJyNmb3JtSW5wdXQtY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoZm9ybUlucHV0c1tpXSkuY3NzKCdjb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QptCy0LXRgiDQv9C+0LvQtdC5XHJcbiAgXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnZm9ybUlucHV0LWJhY2tncm91bmQtdHlwZXMnLCAnZm9ybUlucHV0c0JhY2tncm91bmRJbmRpY2F0b3InKTtcclxuXHJcbiAgZm9ybUlucHV0QmFja2dyb3VuZFJhZGlvQ29sb3Iub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvcm1JbnB1dEJhY2tncm91bmRHcmFkaWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZm9ybUlucHV0QmFja2dyb3VuZENvbG9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuICBmb3JtSW5wdXRCYWNrZ3JvdW5kUmFkaW9HcmFkaWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZm9ybUlucHV0QmFja2dyb3VuZENvbG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBmb3JtSW5wdXRCYWNrZ3JvdW5kR3JhZGllbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICAkKCcjZm9ybUlucHV0LW1haW4tY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9wYWNpdHkgPSAkKCcjcGFnZS1tYWluLWNvbG9yLW9wYWNpdHknKS52YWwoKSAvIDEwMDtcclxuICAgIHZhciBjb2xvciA9IGhleFRvUkdCKCQodGhpcykudmFsKCksIG9wYWNpdHkpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoZm9ybUlucHV0c1tpXSkuY3NzKCdiYWNrZ3JvdW5kJywgY29sb3IpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2Zvcm1JbnB1dC1ncmFkaWVudC1jb2xvci0xJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGZvcm1JbnB1dHNbaV0pLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQoJyArIHBhcnNlSW50KCQoJyNmb3JtSW5wdXQtZ3JhZGllbnQtYW5nbGUnKS52YWwoKSkgKyAnZGVnLCAnICsgJCh0aGlzKS52YWwoKSArICcsICcgKyAkKCcjZm9ybUlucHV0LWdyYWRpZW50LWNvbG9yLTInKS52YWwoKSArICcpJyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybUlucHV0LWdyYWRpZW50LWNvbG9yLTInKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoZm9ybUlucHV0c1tpXSkuY3NzKCdiYWNrZ3JvdW5kJywgJ2xpbmVhci1ncmFkaWVudCgnICsgcGFyc2VJbnQoJCgnI2Zvcm1JbnB1dC1ncmFkaWVudC1hbmdsZScpLnZhbCgpKSArICdkZWcsICcgKyAkKCcjZm9ybUlucHV0LWdyYWRpZW50LWNvbG9yLTEnKS52YWwoKSArICcsICcgKyAkKHRoaXMpLnZhbCgpICsgJyknKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtSW5wdXQtZ3JhZGllbnQtYW5nbGUnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1JbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChmb3JtSW5wdXRzW2ldKS5jc3MoJ2JhY2tncm91bmQnLCAnbGluZWFyLWdyYWRpZW50KCcgKyBwYXJzZUludCgkKHRoaXMpLnZhbCgpKSArICdkZWcsICcgKyAkKCcjZm9ybUlucHV0LWdyYWRpZW50LWNvbG9yLTEnKS52YWwoKSArICcsICcgKyAkKCcjZm9ybUlucHV0LWdyYWRpZW50LWNvbG9yLTInKS52YWwoKSArICcpJyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybUlucHV0LW1haW4tY29sb3Itb3BhY2l0eScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBvcGFjaXR5ID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHZhciBjb2xvciA9IGhleFRvUkdCKCQoJyNmb3JtSW5wdXQtbWFpbi1jb2xvcicpLnZhbCgpLCBvcGFjaXR5IC8gMTAwKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGZvcm1JbnB1dHNbaV0pLmNzcygnYmFja2dyb3VuZCcsIGNvbG9yKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0JLRi9GB0L7RgtCwINC/0L7Qu9C10LlcclxuICBcclxuICBzaG93SGlkZVNldHRpbmdzKCdmb3JtSW5wdXQtaGVpZ2h0JywgJ2Zvcm1JbnB1dHNTaXplSW5kaWNhdG9yJyk7XHJcbiAgXHJcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoZm9ybUlucHV0c1swXSkuaGVpZ2h0ID09ICdhdXRvJykge1xyXG4gICAgZm9ybUlucHV0QXV0b0hlaWdodC5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9ybUlucHV0QXV0b0hlaWdodC5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG4gICQoJyNmb3JtSW5wdXQtaGVpZ2h0LXZhbHVlJykudmFsKHBhcnNlSW50KCQoZm9ybUlucHV0c1swXSkuY3NzKCdoZWlnaHQnKSkpO1xyXG4gICQoJyNmb3JtSW5wdXQtaGVpZ2h0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQoZm9ybUlucHV0c1swXSkuY3NzKCdoZWlnaHQnKSkpO1xyXG5cclxuICBmb3JtSW5wdXRBdXRvSGVpZ2h0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZm9ybUlucHV0QXV0b0hlaWdodC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9ybUlucHV0c1tpXS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgIH1cclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICQoJyNmb3JtSW5wdXQtaGVpZ2h0LXZhbHVlLCAjZm9ybUlucHV0LWhlaWdodC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChmb3JtSW5wdXRBdXRvSGVpZ2h0LmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgJChmb3JtSW5wdXRzW2ldKS5jc3MoJ2hlaWdodCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybUlucHV0LWhlaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2Zvcm1JbnB1dC1oZWlnaHQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2Zvcm1JbnB1dC1oZWlnaHQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0KjQuNGA0LjQvdCwINC/0L7Qu9C10LlcclxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtSW5wdXRzWzBdKS53aWR0aCA9PSAnMTAwJScpIHtcclxuICAgIGZvcm1JbnB1dEF1dG9XaWR0aC5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9ybUlucHV0QXV0b1dpZHRoLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgJCgnI2Zvcm1JbnB1dC13aWR0aC12YWx1ZScpLnZhbChwYXJzZUludCgkKGZvcm1JbnB1dHNbMF0pLmNzcygnd2lkdGgnKSkpO1xyXG4gICQoJyNmb3JtSW5wdXQtd2lkdGgtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChmb3JtSW5wdXRzWzBdKS5jc3MoJ3dpZHRoJykpKTtcclxuXHJcbiAgZm9ybUlucHV0QXV0b1dpZHRoLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZm9ybUlucHV0QXV0b1dpZHRoLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1JbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3JtSW5wdXRzW2ldLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkKCcjZm9ybUlucHV0LXdpZHRoLXZhbHVlLCAjZm9ybUlucHV0LXdpZHRoLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGZvcm1JbnB1dEF1dG9XaWR0aC5jaGVja2VkID09IGZhbHNlKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICQoZm9ybUlucHV0c1tpXSkuY3NzKCd3aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybUlucHV0LXdpZHRoLXZhbHVlXCIpIHtcclxuICAgICAgICAkKCcjZm9ybUlucHV0LXdpZHRoLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNmb3JtSW5wdXQtd2lkdGgtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0J3QsNGB0YLRgNC+0LnQutC4INCy0YHQtdGFINCz0YDQsNC90LjRhiDQv9C+0LvQtdC5XHJcbiAgXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnZm9ybS1zaG93LWlucHV0cy1ib3JkZXItc2V0dGluZ3MnLCAnZm9ybUlucHV0c0JvcmRlckluZGljYXRvcicpO1xyXG5cclxuICBmb3JtSW5wdXRCb3JkZXJSYWRpb0V2ZXJ5Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3JtSW5wdXRCb3JkZXJBbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGZvcm1JbnB1dEJvcmRlckV2ZXJ5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuICBmb3JtSW5wdXRCb3JkZXJSYWRpb0FsbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZm9ybUlucHV0Qm9yZGVyQWxsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZm9ybUlucHV0Qm9yZGVyRXZlcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcblxyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLXZhbHVlJykudmFsKHBhcnNlSW50KCQoZm9ybUlucHV0c1swXSkuY3NzKCdib3JkZXItd2lkdGgnKSkpO1xyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQoZm9ybUlucHV0c1swXSkuY3NzKCdib3JkZXItd2lkdGgnKSkpO1xyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLXJhZGl1cycpLnZhbChwYXJzZUludCgkKGZvcm1JbnB1dHNbMF0pLmNzcygnYm9yZGVyLXJhZGl1cycpKSk7XHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItcmFkaXVzLXJhbmdlJykudmFsKHBhcnNlSW50KCQoZm9ybUlucHV0c1swXSkuY3NzKCdib3JkZXItcmFkaXVzJykpKTtcclxuXHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItdmFsdWUsICNmb3JtSW5wdXQtYm9yZGVyLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoZm9ybUlucHV0c1tpXSkuY3NzKCdib3JkZXItd2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybUlucHV0LWJvcmRlci12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtSW5wdXQtYm9yZGVyLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci1yYWRpdXMsICNmb3JtSW5wdXQtYm9yZGVyLXJhZGl1cy1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGZvcm1JbnB1dHNbaV0pLmNzcygnYm9yZGVyLXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtSW5wdXQtYm9yZGVyLXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNmb3JtSW5wdXQtYm9yZGVyLXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtSW5wdXQtYm9yZGVyLXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLXN0eWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGZvcm1JbnB1dHNbaV0pLmNzcygnYm9yZGVyLXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1JbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChmb3JtSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINCy0LXRgNGF0L3QtdC5INCz0YDQsNC90LjRhtGLINC/0L7Qu9C10LkqL1xyXG5cclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci10b3AtdmFsdWUnKS52YWwocGFyc2VJbnQoJChmb3JtSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci10b3Atd2lkdGgnKSkpO1xyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLXRvcC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKGZvcm1JbnB1dHNbMF0pLmNzcygnYm9yZGVyLXRvcC13aWR0aCcpKSk7XHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItbGVmdC10b3AtcmFkaXVzJykudmFsKHBhcnNlSW50KCQoZm9ybUlucHV0c1swXSkuY3NzKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJykpKTtcclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci1sZWZ0LXRvcC1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChmb3JtSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci10b3AtdmFsdWUsICNmb3JtSW5wdXQtYm9yZGVyLXRvcC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGZvcm1JbnB1dHNbaV0pLmNzcygnYm9yZGVyLXRvcC13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtSW5wdXQtYm9yZGVyLXRvcC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtSW5wdXQtYm9yZGVyLXRvcC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtSW5wdXQtYm9yZGVyLXRvcC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLWxlZnQtdG9wLXJhZGl1cywgI2Zvcm1JbnB1dC1ib3JkZXItbGVmdC10b3AtcmFkaXVzLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoZm9ybUlucHV0c1tpXSkuY3NzKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm1JbnB1dC1ib3JkZXItbGVmdC10b3AtcmFkaXVzXCIpIHtcclxuICAgICAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItbGVmdC10b3AtcmFkaXVzLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItbGVmdC10b3AtcmFkaXVzJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci10b3Atc3R5bGUtdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoZm9ybUlucHV0c1tpXSkuY3NzKCdib3JkZXItdG9wLXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci10b3AtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoZm9ybUlucHV0c1tpXSkuY3NzKCdib3JkZXItdG9wLWNvbG9yJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0LHQu9C+0LrQsCovXHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INC00LvRjyDQv9GA0LDQstC+0Lkg0LPRgNCw0L3QuNGG0Ysg0L/QvtC70LXQuSovXHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItcmlnaHQtdmFsdWUnKS52YWwocGFyc2VJbnQoJChmb3JtSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcpKSk7XHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChmb3JtSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcpKSk7XHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItcmlnaHQtcmFkaXVzJykudmFsKHBhcnNlSW50KCQoZm9ybUlucHV0c1swXSkuY3NzKCdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycpKSk7XHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItcmlnaHQtcmFkaXVzLXJhbmdlJykudmFsKHBhcnNlSW50KCQoZm9ybUlucHV0c1swXSkuY3NzKCdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycpKSk7XHJcblxyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLXJpZ2h0LXZhbHVlLCAjZm9ybUlucHV0LWJvcmRlci1yaWdodC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGZvcm1JbnB1dHNbaV0pLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm1JbnB1dC1ib3JkZXItcmlnaHQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybUlucHV0LWJvcmRlci1yaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtSW5wdXQtYm9yZGVyLXJpZ2h0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci1yaWdodC1yYWRpdXMsICNmb3JtSW5wdXQtYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGZvcm1JbnB1dHNbaV0pLmNzcygnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybUlucHV0LWJvcmRlci1yaWdodC1yYWRpdXNcIikge1xyXG4gICAgICAkKCcjZm9ybUlucHV0LWJvcmRlci1yaWdodC1yYWRpdXMtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybUlucHV0LWJvcmRlci1yaWdodC1yYWRpdXNlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci1yaWdodC1zdHlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1JbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChmb3JtSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1yaWdodC1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItcmlnaHQtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoZm9ybUlucHV0c1tpXSkuY3NzKCdib3JkZXItcmlnaHQtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC90LjQttC90LXQuSDQs9GA0LDQvdC40YbRiyDQv9C+0LvQtdC5Ki9cclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci1ib3R0b20tdmFsdWUnKS52YWwocGFyc2VJbnQoJChmb3JtSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkpO1xyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKGZvcm1JbnB1dHNbMF0pLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcpKSk7XHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycpLnZhbChwYXJzZUludCgkKGZvcm1JbnB1dHNbMF0pLmNzcygnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnKSkpO1xyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChmb3JtSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJykpKTtcclxuXHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItYm90dG9tLXZhbHVlLCAjZm9ybUlucHV0LWJvcmRlci1ib3R0b20tdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1JbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChmb3JtSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybUlucHV0LWJvcmRlci1ib3R0b20tdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybUlucHV0LWJvcmRlci1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybUlucHV0LWJvcmRlci1ib3R0b20tdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAjZm9ybUlucHV0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoZm9ybUlucHV0c1tpXSkuY3NzKCdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtSW5wdXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcIikge1xyXG4gICAgICAkKCcjZm9ybUlucHV0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLWJvdHRvbS1zdHlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1JbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChmb3JtSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1ib3R0b20tc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLWJvdHRvbS1jb2xvcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1JbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChmb3JtSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1ib3R0b20tY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC70LXQstC+0Lkg0LPRgNCw0L3QuNGG0Ysg0L/QvtC70LXQuSovXHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItbGVmdC12YWx1ZScpLnZhbChwYXJzZUludCgkKGZvcm1JbnB1dHNbMF0pLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSkpO1xyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChmb3JtSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykpKTtcclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnKS52YWwocGFyc2VJbnQoJChmb3JtSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnKSkpO1xyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKGZvcm1JbnB1dHNbMF0pLmNzcygnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycpKSk7XHJcblxyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLWxlZnQtdmFsdWUsICNmb3JtSW5wdXQtYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1JbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChmb3JtSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm1JbnB1dC1ib3JkZXItbGVmdC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtSW5wdXQtYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybUlucHV0LWJvcmRlci1sZWZ0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjZm9ybUlucHV0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsICNmb3JtSW5wdXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cy1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGZvcm1JbnB1dHNbaV0pLmNzcygnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtSW5wdXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNmb3JtSW5wdXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtSW5wdXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtSW5wdXQtYm9yZGVyLWxlZnQtc3R5bGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoZm9ybUlucHV0c1tpXSkuY3NzKCdib3JkZXItbGVmdC1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2Zvcm1JbnB1dC1ib3JkZXItbGVmdC1jb2xvcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1JbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChmb3JtSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1sZWZ0LWNvbG9yJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5jbHVkZUlucHV0c1NldHRpbmdzOyIsImZ1bmN0aW9uIGluY2x1ZGVTdWJtaXRTZXR0aW5ncyhpZCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgY29uc3QgZm9ybUJsb2NrRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICBjb25zdCBmb3JtV3JhcHBlckVsZW0gPSBmb3JtQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm1XcmFwcGVyJylbMF07XHJcbiAgbGV0IGN1cnJlbnRGb3JtID0gZm9ybUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4gIGxldCBmb3JtU3VibWl0RWxlbSA9IGN1cnJlbnRGb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheVN1Ym1pdCcpWzBdO1xyXG4gIGxldCBmb3JtSW5wdXRzID0gY3VycmVudEZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5SW5wdXQnKTtcclxuICBsZXQgYWxsSW5wdXRzID0gY3VycmVudEZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcblxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ2Zvcm0tc3VibWl0LXNldHRpbmdzJywgJ2Zvcm1TdWJtaXRJbmRpY2F0b3InKTtcclxuICBcclxuICAvL9Cd0LDRgdGC0YDQvtC50LrQuCDQvtGC0YHRgtGD0L/QvtCyINGDIHN1Ym1pdFxyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdmb3JtU3VibWl0TWFyZ2luRXZlcnknLCAnZm9ybVN1Ym1pdE1hcmdpbkluZGljYXRvcicpO1xyXG4gIFxyXG4gICQoJyNmb3JtU3VibWl0LW1hcmdpbi10b3AtdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtU3VibWl0RWxlbSkubWFyZ2luVG9wKSk7XHJcbiAgJCgnI2Zvcm1TdWJtaXQtbWFyZ2luLXRvcC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGZvcm1TdWJtaXRFbGVtKS5tYXJnaW5Ub3ApKTtcclxuICAkKCcjZm9ybVN1Ym1pdC1tYXJnaW4tcmlnaHQtdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtU3VibWl0RWxlbSkubWFyZ2luUmlnaHQpKTtcclxuICAkKCcjZm9ybVN1Ym1pdC1tYXJnaW4tcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtU3VibWl0RWxlbSkubWFyZ2luUmlnaHQpKTtcclxuICAkKCcjZm9ybVN1Ym1pdC1tYXJnaW4tYm90dG9tLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZm9ybVN1Ym1pdEVsZW0pLm1hcmdpbkJvdHRvbSkpO1xyXG4gICQoJyNmb3JtU3VibWl0LW1hcmdpbi1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtU3VibWl0RWxlbSkubWFyZ2luQm90dG9tKSk7XHJcbiAgJCgnI2Zvcm1TdWJtaXQtbWFyZ2luLWxlZnQtdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtU3VibWl0RWxlbSkubWFyZ2luTGVmdCkpO1xyXG4gICQoJyNmb3JtU3VibWl0LW1hcmdpbi1sZWZ0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZm9ybVN1Ym1pdEVsZW0pLm1hcmdpbkxlZnQpKTtcclxuXHJcbiAgJCgnI2Zvcm1TdWJtaXQtbWFyZ2luLXRvcC12YWx1ZSwgI2Zvcm1TdWJtaXQtbWFyZ2luLXRvcC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnbWFyZ2luLXRvcCcsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChmb3JtU3VibWl0RWxlbSkuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi10b3A6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm1TdWJtaXQtbWFyZ2luLXRvcC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybVN1Ym1pdC1tYXJnaW4tdG9wLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjZm9ybVN1Ym1pdC1tYXJnaW4tcmlnaHQtdmFsdWUsICNmb3JtU3VibWl0LW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnbWFyZ2luLXJpZ2h0JywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLXJpZ2h0OicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtU3VibWl0LW1hcmdpbi1yaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LW1hcmdpbi1yaWdodC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI2Zvcm1TdWJtaXQtbWFyZ2luLWJvdHRvbS12YWx1ZSwgI2Zvcm1TdWJtaXQtbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnbWFyZ2luLWJvdHRvbScsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChmb3JtU3VibWl0RWxlbSkuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi1ib3R0b206JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm1TdWJtaXQtbWFyZ2luLWJvdHRvbS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LW1hcmdpbi1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybVN1Ym1pdC1tYXJnaW4tYm90dG9tLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjZm9ybVN1Ym1pdC1tYXJnaW4tbGVmdC12YWx1ZSwgI2Zvcm1TdWJtaXQtbWFyZ2luLWxlZnQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ21hcmdpbi1sZWZ0JywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLWxlZnQ6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm1TdWJtaXQtbWFyZ2luLWxlZnQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybVN1Ym1pdC1tYXJnaW4tbGVmdC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LW1hcmdpbi1sZWZ0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QktGL0LHQvtGAINGI0YDQuNGE0YLQsFxyXG4gIFxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ2Zvcm0tc2hvdy1zdWJtaXQtZm9udC1zZXR0aW5ncycsICdmb3JtU3VibWl0Rm9udEluZGljYXRvcicpO1xyXG4gIFxyXG4gIGZvcm1TdWJtaXRGb250RmFtaWx5U2VsZWN0LnZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShmb3JtU3VibWl0RWxlbSkuZm9udEZhbWlseTtcclxuICBmb3JtU3VibWl0Rm9udEZhbWlseVNlbGVjdC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvcm1TdWJtaXRFbGVtLnN0eWxlLmZvbnRGYW1pbHkgPSBmb3JtU3VibWl0Rm9udEZhbWlseVNlbGVjdC52YWx1ZTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShmb3JtU3VibWl0RWxlbSkuZm9udFdlaWdodCA9PSAnOTAwJykge1xyXG4gICAgZm9ybVN1Ym1pdEJvbGQuY2hlY2tlZCA9IHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvcm1TdWJtaXRCb2xkLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgZm9ybVN1Ym1pdEJvbGQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChmb3JtU3VibWl0Qm9sZC5jaGVja2VkKSB7XHJcbiAgICAgIGZvcm1TdWJtaXRFbGVtLnN0eWxlLmZvbnRXZWlnaHQgPSAnOTAwJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1TdWJtaXRFbGVtLnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJztcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICAvL9Cg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAgc3VibWl0XHJcbiAgJCgnI2Zvcm1TdWJtaXQtZm9udC1zaXplLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZm9ybVN1Ym1pdEVsZW0pLmZvbnRTaXplKSk7XHJcbiAgJCgnI2Zvcm1TdWJtaXQtZm9udC1zaXplLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZm9ybVN1Ym1pdEVsZW0pLmZvbnRTaXplKSk7XHJcbiAgJCgnI2Zvcm1TdWJtaXQtZm9udC1zaXplLXZhbHVlLCAjZm9ybVN1Ym1pdC1mb250LXNpemUtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2ZvbnQtc2l6ZScsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtU3VibWl0LWZvbnQtc2l6ZS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWZvbnQtc2l6ZS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWZvbnQtc2l6ZS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0KbQstC10YIg0YLQtdC60YHRgtCwINGDIHN1Ym1pdFxyXG4gICQoJyNmb3JtU3VibWl0LWNvbG9yLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0KbQstC10YIgc3VibWl0XHJcbiAgXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnZm9ybVN1Ym1pdC1iYWNrZ3JvdW5kLXR5cGVzJywgJ2Zvcm1TdWJtaXRCYWNrZ3JvdW5kSW5kaWNhdG9yJyk7XHJcblxyXG4gIGZvcm1TdWJtaXRCYWNrZ3JvdW5kUmFkaW9Db2xvci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZm9ybVN1Ym1pdEJhY2tncm91bmRHcmFkaWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZm9ybVN1Ym1pdEJhY2tncm91bmRDb2xvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcbiAgZm9ybVN1Ym1pdEJhY2tncm91bmRSYWRpb0dyYWRpZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3JtU3VibWl0QmFja2dyb3VuZENvbG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBmb3JtU3VibWl0QmFja2dyb3VuZEdyYWRpZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgJCgnI2Zvcm1TdWJtaXQtbWFpbi1jb2xvcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgb3BhY2l0eSA9ICQoJyNwYWdlLW1haW4tY29sb3Itb3BhY2l0eScpLnZhbCgpIC8gMTAwO1xyXG4gICAgdmFyIGNvbG9yID0gaGV4VG9SR0IoJCh0aGlzKS52YWwoKSwgb3BhY2l0eSk7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcik7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybVN1Ym1pdC1ncmFkaWVudC1jb2xvci0xJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQoJyArIHBhcnNlSW50KCQoJyNmb3JtU3VibWl0LWdyYWRpZW50LWFuZ2xlJykudmFsKCkpICsgJ2RlZywgJyArICQodGhpcykudmFsKCkgKyAnLCAnICsgJCgnI2Zvcm1TdWJtaXQtZ3JhZGllbnQtY29sb3ItMicpLnZhbCgpICsgJyknKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtU3VibWl0LWdyYWRpZW50LWNvbG9yLTInKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChmb3JtU3VibWl0RWxlbSkuY3NzKCdiYWNrZ3JvdW5kJywgJ2xpbmVhci1ncmFkaWVudCgnICsgcGFyc2VJbnQoJCgnI2Zvcm1TdWJtaXQtZ3JhZGllbnQtYW5nbGUnKS52YWwoKSkgKyAnZGVnLCAnICsgJCgnI2Zvcm1TdWJtaXQtZ3JhZGllbnQtY29sb3ItMScpLnZhbCgpICsgJywgJyArICQodGhpcykudmFsKCkgKyAnKScpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2Zvcm1TdWJtaXQtZ3JhZGllbnQtYW5nbGUnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JhY2tncm91bmQnLCAnbGluZWFyLWdyYWRpZW50KCcgKyBwYXJzZUludCgkKHRoaXMpLnZhbCgpKSArICdkZWcsICcgKyAkKCcjZm9ybVN1Ym1pdC1ncmFkaWVudC1jb2xvci0xJykudmFsKCkgKyAnLCAnICsgJCgnI2Zvcm1TdWJtaXQtZ3JhZGllbnQtY29sb3ItMicpLnZhbCgpICsgJyknKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtU3VibWl0LW1haW4tY29sb3Itb3BhY2l0eScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBvcGFjaXR5ID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHZhciBjb2xvciA9IGhleFRvUkdCKCQoJyNmb3JtU3VibWl0LW1haW4tY29sb3InKS52YWwoKSwgb3BhY2l0eSAvIDEwMCk7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcik7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvL9CS0YvRgdC+0YLQsCDQutC90L7Qv9C60LhcclxuICBcclxuICBzaG93SGlkZVNldHRpbmdzKCdmb3JtU3VibWl0LWhlaWdodCcsICdmb3JtU3VibWl0U2l6ZUluZGljYXRvcicpO1xyXG4gIFxyXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGZvcm1TdWJtaXRFbGVtKS5oZWlnaHQgPT0gJ2F1dG8nKSB7XHJcbiAgICBmb3JtU3VibWl0QXV0b0hlaWdodC5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9ybVN1Ym1pdEF1dG9IZWlnaHQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuICAkKCcjZm9ybVN1Ym1pdC1oZWlnaHQtdmFsdWUnKS52YWwocGFyc2VJbnQoJChmb3JtU3VibWl0RWxlbSkuY3NzKCdoZWlnaHQnKSkpO1xyXG4gICQoJyNmb3JtU3VibWl0LWhlaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2hlaWdodCcpKSk7XHJcblxyXG4gIGZvcm1TdWJtaXRBdXRvSGVpZ2h0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZm9ybVN1Ym1pdEF1dG9IZWlnaHQuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgIGZvcm1TdWJtaXRFbGVtLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICQoJyNmb3JtU3VibWl0LWhlaWdodC12YWx1ZSwgI2Zvcm1TdWJtaXQtaGVpZ2h0LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGZvcm1TdWJtaXRBdXRvSGVpZ2h0LmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgJChmb3JtU3VibWl0RWxlbSkuY3NzKCdoZWlnaHQnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtU3VibWl0LWhlaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2Zvcm1TdWJtaXQtaGVpZ2h0LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNmb3JtU3VibWl0LWhlaWdodC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QqNC40YDQuNC90LAg0LrQvdC+0L/QutC4XHJcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoZm9ybVN1Ym1pdEVsZW0pLndpZHRoID09ICcxMDAlJykge1xyXG4gICAgZm9ybVN1Ym1pdEF1dG9XaWR0aC5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9ybVN1Ym1pdEF1dG9XaWR0aC5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG4gICQoJyNmb3JtU3VibWl0LXdpZHRoLXZhbHVlJykudmFsKHBhcnNlSW50KCQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnd2lkdGgnKSkpO1xyXG4gICQoJyNmb3JtU3VibWl0LXdpZHRoLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnd2lkdGgnKSkpO1xyXG5cclxuICBmb3JtU3VibWl0QXV0b1dpZHRoLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZm9ybVN1Ym1pdEF1dG9XaWR0aC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgZm9ybVN1Ym1pdEVsZW0uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkKCcjZm9ybVN1Ym1pdC13aWR0aC12YWx1ZSwgI2Zvcm1TdWJtaXQtd2lkdGgtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZm9ybVN1Ym1pdEF1dG9XaWR0aC5jaGVja2VkID09IGZhbHNlKSB7XHJcbiAgICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnd2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtU3VibWl0LXdpZHRoLXZhbHVlXCIpIHtcclxuICAgICAgICAkKCcjZm9ybVN1Ym1pdC13aWR0aC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjZm9ybVN1Ym1pdC13aWR0aC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QndCw0YHRgtGA0L7QudC60Lgg0LLRgdC10YUg0LPRgNCw0L3QuNGGIHN1Ym1pdFxyXG4gIFxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ2Zvcm0tc2hvdy1zdWJtaXQtYm9yZGVyLXNldHRpbmdzJywgJ2Zvcm1TdWJtaXRCb3JkZXJJbmRpY2F0b3InKTtcclxuXHJcbiAgZm9ybVN1Ym1pdEJvcmRlclJhZGlvRXZlcnkub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvcm1TdWJtaXRCb3JkZXJBbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGZvcm1TdWJtaXRCb3JkZXJFdmVyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcbiAgZm9ybVN1Ym1pdEJvcmRlclJhZGlvQWxsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3JtU3VibWl0Qm9yZGVyQWxsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZm9ybVN1Ym1pdEJvcmRlckV2ZXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItdmFsdWUnKS52YWwocGFyc2VJbnQoJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItd2lkdGgnKSkpO1xyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci13aWR0aCcpKSk7XHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLXJhZGl1cycpLnZhbChwYXJzZUludCgkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1yYWRpdXMnKSkpO1xyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItcmFkaXVzJykpKTtcclxuXHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLXZhbHVlLCAjZm9ybVN1Ym1pdC1ib3JkZXItdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtU3VibWl0LWJvcmRlci12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWJvcmRlci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWJvcmRlci12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci1yYWRpdXMsICNmb3JtU3VibWl0LWJvcmRlci1yYWRpdXMtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybVN1Ym1pdC1ib3JkZXItcmFkaXVzXCIpIHtcclxuICAgICAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWJvcmRlci1yYWRpdXMnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItc3R5bGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINCy0LXRgNGF0L3QtdC5INCz0YDQsNC90LjRhtGLIHN1Ym1pdCovXHJcblxyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci10b3AtdmFsdWUnKS52YWwocGFyc2VJbnQoJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItdG9wLXdpZHRoJykpKTtcclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItdG9wLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXRvcC13aWR0aCcpKSk7XHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLWxlZnQtdG9wLXJhZGl1cycpLnZhbChwYXJzZUludCgkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnKSkpO1xyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci1sZWZ0LXRvcC1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJykpKTtcclxuXHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLXRvcC12YWx1ZSwgI2Zvcm1TdWJtaXQtYm9yZGVyLXRvcC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXRvcC13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtU3VibWl0LWJvcmRlci10b3AtdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItdG9wLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLXRvcC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci1sZWZ0LXRvcC1yYWRpdXMsICNmb3JtU3VibWl0LWJvcmRlci1sZWZ0LXRvcC1yYWRpdXMtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybVN1Ym1pdC1ib3JkZXItbGVmdC10b3AtcmFkaXVzXCIpIHtcclxuICAgICAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLWxlZnQtdG9wLXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWJvcmRlci1sZWZ0LXRvcC1yYWRpdXMnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci10b3Atc3R5bGUtdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItdG9wLXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItdG9wLWNvbG9yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXRvcC1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQmtC+0L3QtdGGINCx0LvQvtC60LAqL1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQuCDQtNC70Y8g0L/RgNCw0LLQvtC5INCz0YDQsNC90LjRhtGLIHN1Ym1pdCovXHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLXJpZ2h0LXZhbHVlJykudmFsKHBhcnNlSW50KCQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJykpKTtcclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItcmlnaHQtd2lkdGgnKSkpO1xyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci1yaWdodC1yYWRpdXMnKS52YWwocGFyc2VJbnQoJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycpKSk7XHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJykpKTtcclxuXHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLXJpZ2h0LXZhbHVlLCAjZm9ybVN1Ym1pdC1ib3JkZXItcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtU3VibWl0LWJvcmRlci1yaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWJvcmRlci1yaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWJvcmRlci1yaWdodC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLXJpZ2h0LXJhZGl1cywgI2Zvcm1TdWJtaXQtYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybVN1Ym1pdC1ib3JkZXItcmlnaHQtcmFkaXVzXCIpIHtcclxuICAgICAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWJvcmRlci1yaWdodC1yYWRpdXNlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItcmlnaHQtc3R5bGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItcmlnaHQtc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci1yaWdodC1jb2xvcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1yaWdodC1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQmtC+0L3QtdGGINCx0LvQvtC60LAqL1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQuCDQtNC70Y8g0L3QuNC20L3QtdC5INCz0YDQsNC90LjRhtGLIHN1Ym1pdCovXHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLWJvdHRvbS12YWx1ZScpLnZhbChwYXJzZUludCgkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkpO1xyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItYm90dG9tLXdpZHRoJykpKTtcclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycpLnZhbChwYXJzZUludCgkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJykpKTtcclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJykpKTtcclxuXHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLWJvdHRvbS12YWx1ZSwgI2Zvcm1TdWJtaXQtYm9yZGVyLWJvdHRvbS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJmb3JtU3VibWl0LWJvcmRlci1ib3R0b20tdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLWJvdHRvbS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNmb3JtU3VibWl0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAjZm9ybVN1Ym1pdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cy1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiZm9ybVN1Ym1pdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItYm90dG9tLXN0eWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLWJvdHRvbS1jb2xvcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20tY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC70LXQstC+0Lkg0LPRgNCw0L3QuNGG0Ysgc3VibWl0Ki9cclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItbGVmdC12YWx1ZScpLnZhbChwYXJzZUludCgkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykpKTtcclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItbGVmdC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykpKTtcclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJykudmFsKHBhcnNlSW50KCQoZm9ybVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycpKSk7XHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItbGVmdC12YWx1ZSwgI2Zvcm1TdWJtaXQtYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGZvcm1TdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm1TdWJtaXQtYm9yZGVyLWxlZnQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItbGVmdC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWJvcmRlci1sZWZ0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLCAjZm9ybVN1Ym1pdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImZvcm1TdWJtaXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNmb3JtU3VibWl0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjZm9ybVN1Ym1pdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLWxlZnQtc3R5bGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItbGVmdC1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2Zvcm1TdWJtaXQtYm9yZGVyLWxlZnQtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChmb3JtU3VibWl0RWxlbSkuY3NzKCdib3JkZXItbGVmdC1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5jbHVkZVN1Ym1pdFNldHRpbmdzOyJdLCJzb3VyY2VSb290IjoiIn0=