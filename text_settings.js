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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/modules/text/textSettings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/modules/text/textSettings.js":
/*!**********************************************!*\
  !*** ./src/API/modules/text/textSettings.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('#mainArea').on('click', '.copyText', function () {
  var imgBlockId = $(this).parents('.textBlock').attr('id');
  var imgBlockElem = document.getElementById(imgBlockId);
  var clonId = 'text' + getRandom();
  $(imgBlockElem).clone(true).attr('id', clonId).css('height', 'auto').insertAfter(imgBlockElem);
  var clone = document.getElementById(clonId);
  var clonedImg = clone.getElementsByClassName('img')[0];
  var imgWrapper = clone.getElementsByClassName('imageWrapper')[0];
  var cloneResizerXY = clone.getElementsByClassName('resizerXY')[0];
  var cloneResizerX = clone.getElementsByClassName('resizerX')[0];
  addFunctionalityToTextElement(clonId);
  makePreview();
});
var ths = null;
var imgWrapperElem = null;
var textElem = null;
var textWrapperElem = null;
var iframe = null;
var ifr = null;
var redactorEditor = null;
$('#mainArea').on('click', '.textSet', function (e) {
  ths = $(this).parents('.textBlock');
  imgWrapperElem = document.getElementById(ths.attr('id'));
  textWrapperElem = imgWrapperElem.getElementsByClassName('textWrapper')[0];
  var textEditor = imgWrapperElem.getElementsByClassName('text-editor')[0];
  var ifr = imgWrapperElem.getElementsByTagName('iframe')[0];
  iframe = imgWrapperElem.getElementsByTagName('iframe')[0].contentWindow;
  var textEditorPanel = imgWrapperElem.getElementsByClassName('text-editor-panel')[0];

  if (textWrapperElem.getElementsByClassName('header')[0]) {
    textElem = textWrapperElem.getElementsByClassName('header')[0];
    redactorEditor = iframe.document.body.getElementsByClassName('header')[0];
  } else {
    textElem = textWrapperElem.getElementsByClassName('text')[0];
    redactorEditor = iframe.document.body;
  }

  $(textElem).css('line-height', getComputedStyle(redactorEditor).lineHeight); //Появление правой панели, инициализация инпутов.

  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#text-border-style').off();
  $('#text-border-left-style').off();
  $('#text-border-right-style').off();
  $('#text-border-top-style-value').off();
  $('#text-border-bottom-style').off();
  $('#text-animation-type-value').off();

  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#text-timeout-hour-value').val(h);
    $('#text-timeout-minute-value').val(m);
    $('#text-timeout-second-value').val(s);
    $('#text-display-none-value').prop('checked', true);
  } else {
    $('#text-timeout-hour-value').val(0);
    $('#text-timeout-minute-value').val(0);
    $('#text-timeout-second-value').val(0);
  }

  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#text-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated'); //Заголовки

  (function () {
    'use strict';

    var redactor = iframe.document.body.innerHTML;

    for (var i = 1; i <= 6; i++) {
      if (redactor.includes('<h' + i)) {
        headers.value = i;
        return;
      } else {
        headers.value = '0';
      }
    }
  })();

  headers.onchange = function () {
    textElem = textWrapperElem.getElementsByClassName('text')[0];
    redactorEditor = iframe.document.body;

    if (+headers.value > 0) {
      iframe.document.body.innerHTML = '<h' + headers.value + ' class="header">' + deleteHeader(iframe.document.body.innerHTML) + '</h' + headers.value + '>';
      textElem.innerHTML = '<h' + headers.value + ' class="header">' + deleteHeader(textElem.innerHTML) + '</h' + headers.value + '>';
      textElem = textWrapperElem.getElementsByClassName('header')[0];
      $('#text-font-size-value').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-font-size-value-range').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-line-height-value').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
      $('#text-line-height-value-range').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
      redactorEditor = iframe.document.body.getElementsByClassName('header')[0];
      textElem.style.lineHeight = getComputedStyle(redactorEditor).lineHeight;
    } else {
      iframe.document.body.innerHTML = deleteHeader(iframe.document.body.innerHTML);
      textElem.innerHTML = deleteHeader(textElem.innerHTML);
      $(textElem).css('line-height', getComputedStyle(redactorEditor).lineHeight);
      $('#text-font-size-value').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-font-size-value-range').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-line-height-value').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
      $('#text-line-height-value-range').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
    }

    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';
    makePreview();
  }; //Выбор шрифта


  fontFamilySelect.value = getComputedStyle(iframe.document.body).fontFamily;

  fontFamilySelect.onchange = function () {
    redactorEditor.style.fontFamily = fontFamilySelect.value;
    textElem.style.fontFamily = fontFamilySelect.value;
    textElem = imgWrapperElem.getElementsByClassName('text')[0];
    textElem.style.fontFamily = fontFamilySelect.value;
    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';
    textElem.innerHTML = iframe.document.body.innerHTML;
    makePreview();
  }; //Размер шрифта  


  $('#text-font-size-value').val(parseInt(getComputedStyle(redactorEditor).fontSize));
  $('#text-font-size-value-range').val(parseInt(getComputedStyle(redactorEditor).fontSize));
  $('#text-font-size-value, #text-font-size-value-range').on('input', function () {
    $(redactorEditor).css('font-size', $(this).val() + 'px');
    $(textElem).css('font-size', $(this).val() + 'px').css('line-height', getComputedStyle(redactorEditor).lineHeight);
    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';

    if ($(this).attr('id') == "text-font-size-value") {
      $('#text-font-size-value-range').val($(this).val());
    } else {
      $('#text-font-size-value').val($(this).val());
    }

    makePreview();
  }); //Межстрочный интервал

  $('#text-line-height-value').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
  $('#text-line-height-value-range').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
  $('#text-line-height-value, #text-line-height-value-range').on('input', function () {
    $(redactorEditor).css('line-height', $(this).val() + 'px');
    $(textElem).css('line-height', $(this).val() + 'px');
    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';

    if ($(this).attr('id') == "text-line-height-value") {
      $('#text-line-height-value-range').val($(this).val());
    } else {
      $('#text-line-height-value').val($(this).val());
    }

    makePreview();
  }); //Цвет текста

  $('#text-color-value').on('change', function () {
    $(redactorEditor).css('color', $(this).val());
    $(textElem).css('color', $(this).val());
    makePreview();
  }); //Заливка текста

  $('#text-backcolor-value').on('change', function () {
    redactorEditor.innerHTML = deleteSpan(redactorEditor);
    var target = redactorEditor;
    var rng = document.createRange();
    var nodes = redactorEditor.childNodes;

    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType == 3) {
        rng.selectNode(nodes[i]);
        var highlightSpan = document.createElement('span');
        highlightSpan.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpan);
      } else if (nodes[i].nodeName != "BR") {
        rng.selectNodeContents(nodes[i]);
        var highlightSpan = document.createElement('span');
        highlightSpan.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpan);
      }

      makePreview();
    }

    textElem.innerHTML = deleteSpan(textElem);
    var target = textElem;
    var rng = document.createRange();
    var nodes = textElem.childNodes;

    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType == 3) {
        rng.selectNode(nodes[i]);
        var highlightSpanForText = document.createElement('span');
        highlightSpanForText.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpanForText);
      } else if (nodes[i].nodeName != "BR") {
        rng.selectNodeContents(nodes[i]);
        var highlightSpanForText = document.createElement('span');
        highlightSpanForText.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpanForText);
      }
    }

    makePreview();
  });
  var resetBackcolor = document.getElementById('text-backcolor-value-reset');

  resetBackcolor.onclick = function () {
    redactorEditor.innerHTML = deleteSpan(redactorEditor);
    textElem.innerHTML = deleteSpan(textElem);
    makePreview();
  }; //Вертикальное выравнивание


  if (getComputedStyle(imgWrapperElem).marginTop == 'auto') {
    textMarginBottom.checked = true;
    textMarginTop.checked = false;
    textMarginCenter.checked = false;
  } else if (getComputedStyle(imgWrapperElem).marginBottom == 'auto') {
    textMarginBottom.checked = false;
    textMarginTop.checked = true;
    textMarginCenter.checked = false;
  } else if (getComputedStyle(imgWrapperElem).marginTop == '0px' && getComputedStyle(imgWrapperElem).marginBottom == '0px') {
    textMarginBottom.checked = false;
    textMarginTop.checked = false;
    textMarginCenter.checked = true;
  }

  textMarginTop.onclick = function () {
    imgWrapperElem.style.marginTop = '0px';
    imgWrapperElem.style.marginBottom = 'auto';
    makePreview(); //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  };

  textMarginCenter.onclick = function () {
    imgWrapperElem.style.marginTop = '0px';
    imgWrapperElem.style.marginBottom = '0px';
    makePreview(); //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  };

  textMarginBottom.onclick = function () {
    imgWrapperElem.style.marginTop = 'auto';
    imgWrapperElem.style.marginBottom = '0px';
    makePreview(); //    resizerY_Elem.style.top = '0';
    //    resizerY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.top = '0';
    //    resizerXY_Elem.style.left = '0';
    //    resizerXY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.marginLeft = '0';
  }; //Настройки отступов


  $('#text-padding-value').val(parseInt($(textElem).css('padding')));
  $('#text-padding-value-range').val(parseInt($(textElem).css('padding')));
  $('#text-margin-top-value').val(parseInt(getComputedStyle(imgWrapperElem).marginTop));
  $('#text-margin-top-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginTop));
  $('#text-margin-right-value').val(parseInt(getComputedStyle(imgWrapperElem).marginRight));
  $('#text-margin-right-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginRight));
  $('#text-margin-bottom-value').val(parseInt(getComputedStyle(imgWrapperElem).marginBottom));
  $('#text-margin-bottom-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginBottom));
  $('#text-margin-left-value').val(parseInt(getComputedStyle(imgWrapperElem).marginLeft));
  $('#text-margin-left-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginLeft));
  $('#text-margin-value, #text-margin-value-range').on('input', function () {
    $(ths).css('margin', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "text-margin-value") {
      $('#text-margin-value-range').val($(this).val());
    } else {
      $('#text-margin-value').val($(this).val());
    }

    makePreview();
  });
  $('#text-margin-top-value, #text-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "text-margin-top-value") {
      $('#text-margin-top-value-range').val($(this).val());
    } else {
      $('#text-margin-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#text-margin-right-value, #text-margin-right-value-range').on('input', function () {
    $(ths).css('margin-right', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "text-margin-right-value") {
      $('#text-margin-right-value-range').val($(this).val());
    } else {
      $('#text-margin-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#text-margin-bottom-value, #text-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "text-margin-bottom-value") {
      $('#text-margin-bottom-value-range').val($(this).val());
    } else {
      $('#text-margin-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#text-margin-left-value, #text-margin-left-value-range').on('input', function () {
    $(ths).css('margin-left', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "text-margin-left-value") {
      $('#text-margin-left-value-range').val($(this).val());
    } else {
      $('#text-margin-left-value').val($(this).val());
    }

    makePreview();
  });
  /*Настройки теней*/

  document.getElementById('textShadowRadioOn').onclick = function () {
    document.getElementById('text-shadow').style.display = 'block';
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    makePreview();
  };

  document.getElementById('textShadowRadioOff').onclick = function () {
    document.getElementById('text-shadow').style.display = 'none';
    $(iframe.document.body).css('text-shadow', 'none');
    $(textElem).css('text-shadow', 'none');
    makePreview();
  };

  $('#text-shadow-horizontal-value, #text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);

    if ($(this).attr('id') == "text-shadow-horizontal-value") {
      $('#text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#text-shadow-horizontal-value').val($(this).val());
    }

    makePreview();
  });
  $('#text-shadow-vertical-value, #text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);

    if ($(this).attr('id') == "text-shadow-vertical-value") {
      $('#text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#text-shadow-vertical-value').val($(this).val());
    }

    makePreview();
  });
  $('#text-shadow-blur-value, #text-shadow-blur-value-range').on('input', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);

    if ($(this).attr('id') == "text-shadow-blur-value") {
      $('#text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#text-shadow-blur-value').val($(this).val());
    }

    makePreview();
  });
  $('#text-shadow-opacity-value, #text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);

    if ($(this).attr('id') == "text-shadow-opacity-value") {
      $('#text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#text-shadow-opacity-value').val($(this).val());
    }

    makePreview();
  });
  $('#text-shadow-color-value').on('change', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    makePreview();
  });
  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#text-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(textElem).css('animation-name', $(this).val());
      $(textElem).css('animation-delay', $('#text-animation-delay-value').val() + 's');
      $(textElem).css('animation-duration', $('#text-animation-duration-value').val() + 's');
    }

    makePreview();
  });
  $('#text-animation-delay-value, #text-animation-delay-value-range').on('input', function () {
    $(textElem).css('animation-delay', $(this).val() + 's');

    if ($(this).attr('id') == "text-animation-delay-value") {
      $('#text-animation-delay-value-range').val($(this).val());
    } else {
      $('#text-animation-delay-value').val($(this).val());
    }

    makePreview();
  });
  $('#text-animation-duration-value, #text-animation-duration-value-range').on('input', function () {
    $(textElem).css('animation-duration', $(this).val() + 's');

    if ($(this).attr('id') == "text-animation-duration-value") {
      $('#text-animation-duration-value-range').val($(this).val());
    } else {
      $('#text-animation-duration-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец настроек анимации*/

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('text-display-none-value').checked = true;
  } else {
    document.getElementById('text-display-none-value').checked = false;
  }

  $('#text-display-none-value, #text-timeout-hour-value, #text-timeout-hour-value-range, #text-timeout-minute-value, #text-timeout-minute-value-range, #text-timeout-second-value, #text-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#text-timeout-hour-value').val() * 3600;
    var minute = $('#text-timeout-minute-value').val() * 60;
    var second = parseInt($('#text-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;

    if (document.getElementById('text-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }

    if ($(this).attr('id') == "text-timeout-hour-value") {
      $('#text-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-hour-value-range") {
      $('#text-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-minute-value") {
      $('#text-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-minute-value-range") {
      $('#text-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-second-value") {
      $('#text-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-second-value-range") {
      $('#text-timeout-second-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец блока таймаута*/
});

function deleteHeader(el) {
  var content = el;

  for (var i = 1; i <= 6; i++) {
    var tagName = 'h' + i;
    var reOpen = new RegExp('<' + tagName + '[^>]*>', 'gi');
    var reClose = new RegExp('</' + tagName + '[^>]*>', 'gi');
    content = content.replace(reOpen, "");
    content = content.replace(reClose, "");
  }

  return content;
}

function deleteSpan(el) {
  var content = el.innerHTML;
  var reOpen = new RegExp('<span[^>]*>', 'gi');
  var reClose = new RegExp('</span[^>]*>', 'gi');
  content = content.replace(reOpen, "");
  content = content.replace(reClose, "");
  return content;
}

function changeFontFamily(id) {
  'use strict';

  var chosenElement = document.getElementById(id);
  var chosenText = chosenElement.getElementsByClassName('text')[0];

  fontFamilySelect.onchange = function () {
    chosenText.style.fontFamily = fontFamilySelect.value;
  };
}
/*Перевод hex в RGB (где-то точно используется, уже не помню)*/


function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else if (alpha == 0) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL3RleHQvdGV4dFNldHRpbmdzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsImltZ0Jsb2NrSWQiLCJwYXJlbnRzIiwiYXR0ciIsImltZ0Jsb2NrRWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbG9uSWQiLCJnZXRSYW5kb20iLCJjbG9uZSIsImNzcyIsImluc2VydEFmdGVyIiwiY2xvbmVkSW1nIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImltZ1dyYXBwZXIiLCJjbG9uZVJlc2l6ZXJYWSIsImNsb25lUmVzaXplclgiLCJhZGRGdW5jdGlvbmFsaXR5VG9UZXh0RWxlbWVudCIsIm1ha2VQcmV2aWV3IiwidGhzIiwiaW1nV3JhcHBlckVsZW0iLCJ0ZXh0RWxlbSIsInRleHRXcmFwcGVyRWxlbSIsImlmcmFtZSIsImlmciIsInJlZGFjdG9yRWRpdG9yIiwiZSIsInRleHRFZGl0b3IiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbnRlbnRXaW5kb3ciLCJ0ZXh0RWRpdG9yUGFuZWwiLCJib2R5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImxpbmVIZWlnaHQiLCJvZmYiLCJ0aW1lIiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJzcGxpdCIsImgiLCJNYXRoIiwiZmxvb3IiLCJtIiwicyIsInZhbCIsInByb3AiLCJoaWRlIiwic2hvdyIsInJpZ2h0IiwidHJhbnNpdGlvbiIsImFkZENsYXNzIiwicmVkYWN0b3IiLCJpIiwiaW5jbHVkZXMiLCJoZWFkZXJzIiwidmFsdWUiLCJvbmNoYW5nZSIsImRlbGV0ZUhlYWRlciIsImZvbnRTaXplIiwic3R5bGUiLCJoZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmb250RmFtaWx5U2VsZWN0IiwiZm9udEZhbWlseSIsImRlbGV0ZVNwYW4iLCJ0YXJnZXQiLCJybmciLCJjcmVhdGVSYW5nZSIsIm5vZGVzIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsIm5vZGVUeXBlIiwic2VsZWN0Tm9kZSIsImhpZ2hsaWdodFNwYW4iLCJjcmVhdGVFbGVtZW50IiwiYmFja2dyb3VuZENvbG9yIiwic3Vycm91bmRDb250ZW50cyIsIm5vZGVOYW1lIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiaGlnaGxpZ2h0U3BhbkZvclRleHQiLCJyZXNldEJhY2tjb2xvciIsIm9uY2xpY2siLCJtYXJnaW5Ub3AiLCJ0ZXh0TWFyZ2luQm90dG9tIiwiY2hlY2tlZCIsInRleHRNYXJnaW5Ub3AiLCJ0ZXh0TWFyZ2luQ2VudGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiZGlzcGxheSIsImh2IiwidnYiLCJibHIiLCJjbHIiLCJoZXhUb1JHQiIsInBycHRzIiwiaWQiLCJob3VycyIsIm1pbnV0ZSIsInNlY29uZCIsInJlbW92ZSIsImFwcGVuZCIsImVsIiwiY29udGVudCIsInRhZ05hbWUiLCJyZU9wZW4iLCJSZWdFeHAiLCJyZUNsb3NlIiwicmVwbGFjZSIsImNoYW5nZUZvbnRGYW1pbHkiLCJjaG9zZW5FbGVtZW50IiwiY2hvc2VuVGV4dCIsImhleCIsImFscGhhIiwiciIsInNsaWNlIiwiZyIsImIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7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QThCRCxnQkFBZ0IsQ0FBQ1AsS0FBL0M7QUFDRCxHQUZEO0FBR0Q7QUFFRDs7O0FBQ0EsU0FBU3dDLFFBQVQsQ0FBa0JrQixHQUFsQixFQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsTUFBSUMsQ0FBQyxHQUFHL0UsUUFBUSxDQUFDNkUsR0FBRyxDQUFDRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBRCxFQUFrQixFQUFsQixDQUFoQjtBQUFBLE1BQ0VDLENBQUMsR0FBR2pGLFFBQVEsQ0FBQzZFLEdBQUcsQ0FBQ0csS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQUQsRUFBa0IsRUFBbEIsQ0FEZDtBQUFBLE1BRUVFLENBQUMsR0FBR2xGLFFBQVEsQ0FBQzZFLEdBQUcsQ0FBQ0csS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQUQsRUFBa0IsRUFBbEIsQ0FGZDs7QUFJQSxNQUFJRixLQUFKLEVBQVc7QUFDVCxXQUFPLFVBQVVDLENBQVYsR0FBYyxJQUFkLEdBQXFCRSxDQUFyQixHQUF5QixJQUF6QixHQUFnQ0MsQ0FBaEMsR0FBb0MsSUFBcEMsR0FBMkNKLEtBQTNDLEdBQW1ELEdBQTFEO0FBQ0QsR0FGRCxNQUVPLElBQUlBLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ3JCLFdBQU8sVUFBVUMsQ0FBVixHQUFjLElBQWQsR0FBcUJFLENBQXJCLEdBQXlCLElBQXpCLEdBQWdDQyxDQUFoQyxHQUFvQyxJQUFwQyxHQUEyQ0osS0FBM0MsR0FBbUQsR0FBMUQ7QUFDRCxHQUZNLE1BRUE7QUFDTCxXQUFPLFNBQVNDLENBQVQsR0FBYSxJQUFiLEdBQW9CRSxDQUFwQixHQUF3QixJQUF4QixHQUErQkMsQ0FBL0IsR0FBbUMsR0FBMUM7QUFDRDtBQUNGLEMiLCJmaWxlIjoidGV4dF9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0FQSS9tb2R1bGVzL3RleHQvdGV4dFNldHRpbmdzLmpzXCIpO1xuIiwiJCgnI21haW5BcmVhJykub24oJ2NsaWNrJywgJy5jb3B5VGV4dCcsIGZ1bmN0aW9uICgpIHtcclxuICB2YXIgaW1nQmxvY2tJZCA9ICQodGhpcykucGFyZW50cygnLnRleHRCbG9jaycpLmF0dHIoJ2lkJyk7XHJcbiAgdmFyIGltZ0Jsb2NrRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGltZ0Jsb2NrSWQpO1xyXG4gIHZhciBjbG9uSWQgPSAndGV4dCcgKyBnZXRSYW5kb20oKTtcclxuICAkKGltZ0Jsb2NrRWxlbSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCBjbG9uSWQpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKS5pbnNlcnRBZnRlcihpbWdCbG9ja0VsZW0pO1xyXG5cclxuICB2YXIgY2xvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbG9uSWQpO1xyXG4gIHZhciBjbG9uZWRJbWcgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWcnKVswXTtcclxuICB2YXIgaW1nV3JhcHBlciA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlV3JhcHBlcicpWzBdO1xyXG4gIHZhciBjbG9uZVJlc2l6ZXJYWSA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc2l6ZXJYWScpWzBdO1xyXG4gIHZhciBjbG9uZVJlc2l6ZXJYID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzaXplclgnKVswXTtcclxuXHJcbiAgYWRkRnVuY3Rpb25hbGl0eVRvVGV4dEVsZW1lbnQoY2xvbklkKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbnZhciB0aHMgPSBudWxsO1xyXG52YXIgaW1nV3JhcHBlckVsZW0gPSBudWxsO1xyXG52YXIgdGV4dEVsZW0gPSBudWxsO1xyXG52YXIgdGV4dFdyYXBwZXJFbGVtID0gbnVsbDtcclxudmFyIGlmcmFtZSA9IG51bGw7XHJcbnZhciBpZnIgPSBudWxsO1xyXG52YXIgcmVkYWN0b3JFZGl0b3IgPSBudWxsO1xyXG5cclxuJCgnI21haW5BcmVhJykub24oJ2NsaWNrJywgJy50ZXh0U2V0JywgZnVuY3Rpb24gKGUpIHtcclxuICB0aHMgPSAkKHRoaXMpLnBhcmVudHMoJy50ZXh0QmxvY2snKTtcclxuICBpbWdXcmFwcGVyRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRocy5hdHRyKCdpZCcpKTtcclxuICB0ZXh0V3JhcHBlckVsZW0gPSBpbWdXcmFwcGVyRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0V3JhcHBlcicpWzBdO1xyXG4gIGNvbnN0IHRleHRFZGl0b3IgPSBpbWdXcmFwcGVyRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0LWVkaXRvcicpWzBdO1xyXG4gIGNvbnN0IGlmciA9IGltZ1dyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXTtcclxuICBpZnJhbWUgPSBpbWdXcmFwcGVyRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJylbMF0uY29udGVudFdpbmRvdztcclxuICBjb25zdCB0ZXh0RWRpdG9yUGFuZWwgPSBpbWdXcmFwcGVyRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0LWVkaXRvci1wYW5lbCcpWzBdO1xyXG4gIGlmICh0ZXh0V3JhcHBlckVsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyJylbMF0pIHtcclxuICAgIHRleHRFbGVtID0gdGV4dFdyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcicpWzBdO1xyXG4gICAgcmVkYWN0b3JFZGl0b3IgPSBpZnJhbWUuZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXInKVswXTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGV4dEVsZW0gPSB0ZXh0V3JhcHBlckVsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dCcpWzBdO1xyXG4gICAgcmVkYWN0b3JFZGl0b3IgPSBpZnJhbWUuZG9jdW1lbnQuYm9keTtcclxuICB9XHJcbiAgJCh0ZXh0RWxlbSkuY3NzKCdsaW5lLWhlaWdodCcsIGdldENvbXB1dGVkU3R5bGUocmVkYWN0b3JFZGl0b3IpLmxpbmVIZWlnaHQpO1xyXG5cclxuICAvL9Cf0L7Rj9Cy0LvQtdC90LjQtSDQv9GA0LDQstC+0Lkg0L/QsNC90LXQu9C4LCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQuNC90L/Rg9GC0L7Qsi5cclxuICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2Om5vdCgjc2V0dGluZ3MtbW4pIGlucHV0Jykub2ZmKCdpbnB1dCcpO1xyXG4gICQoJyNyaWdodFNpZGViYXIgPiBkaXY6bm90KCNzZXR0aW5ncy1tbikgaW5wdXQnKS5vZmYoKTtcclxuICAkKCcjdGV4dC1ib3JkZXItc3R5bGUnKS5vZmYoKTtcclxuICAkKCcjdGV4dC1ib3JkZXItbGVmdC1zdHlsZScpLm9mZigpO1xyXG4gICQoJyN0ZXh0LWJvcmRlci1yaWdodC1zdHlsZScpLm9mZigpO1xyXG4gICQoJyN0ZXh0LWJvcmRlci10b3Atc3R5bGUtdmFsdWUnKS5vZmYoKTtcclxuICAkKCcjdGV4dC1ib3JkZXItYm90dG9tLXN0eWxlJykub2ZmKCk7XHJcbiAgJCgnI3RleHQtYW5pbWF0aW9uLXR5cGUtdmFsdWUnKS5vZmYoKTtcclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpKSB7XHJcbiAgICB2YXIgdGltZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JpcHQtJyArIHRocy5hdHRyKCdpZCcpKS5pbm5lckhUTUwuc3BsaXQoJywnKVsxXSkgLyAxMDAwO1xyXG4gICAgdmFyIGggPSBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKTtcclxuICAgIHZhciBtID0gTWF0aC5mbG9vcigodGltZSAtIDM2MDAgKiBoKSAvIDYwKTtcclxuICAgIHZhciBzID0gdGltZSAtICgzNjAwICogaCArIDYwICogbSk7XHJcbiAgICAkKCcjdGV4dC10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoaCk7XHJcbiAgICAkKCcjdGV4dC10aW1lb3V0LW1pbnV0ZS12YWx1ZScpLnZhbChtKTtcclxuICAgICQoJyN0ZXh0LXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKHMpO1xyXG4gICAgJCgnI3RleHQtZGlzcGxheS1ub25lLXZhbHVlJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCcjdGV4dC10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoMCk7XHJcbiAgICAkKCcjdGV4dC10aW1lb3V0LW1pbnV0ZS12YWx1ZScpLnZhbCgwKTtcclxuICAgICQoJyN0ZXh0LXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKDApO1xyXG4gIH1cclxuICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2JykuaGlkZSgpO1xyXG4gICQoJyNzZXR0aW5ncy1tbicpLmhpZGUoKTtcclxuICAkKCcjbWFpbi1ibG9jay1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjY29udGVudC1ibG9jay1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjaW1hZ2Utc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3ZpZGVvLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNidXR0b24tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2Zvcm0tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3N1YnNjcmliZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGluZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGlzdC1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjdGV4dC1zZXR0aW5ncycpLnNob3coKTtcclxuICAkKCcjcmlnaHRTaWRlYmFyJykuY3NzKHtcclxuICAgIHJpZ2h0OiAnMHB4JyxcclxuICAgIHRyYW5zaXRpb246ICcwLjRzIGFsbCBlYXNlLWluJ1xyXG4gIH0pLmFkZENsYXNzKCdhY3RpdmF0ZWQnKTtcclxuXHJcbiAgLy/Ql9Cw0LPQvtC70L7QstC60LhcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGNvbnN0IHJlZGFjdG9yID0gaWZyYW1lLmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgIGlmIChyZWRhY3Rvci5pbmNsdWRlcygnPGgnICsgaSkpIHtcclxuICAgICAgICBoZWFkZXJzLnZhbHVlID0gaTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVycy52YWx1ZSA9ICcwJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pKCk7XHJcbiAgaGVhZGVycy5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRleHRFbGVtID0gdGV4dFdyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHQnKVswXTtcclxuICAgIHJlZGFjdG9yRWRpdG9yID0gaWZyYW1lLmRvY3VtZW50LmJvZHk7XHJcbiAgICBpZiAoK2hlYWRlcnMudmFsdWUgPiAwKSB7XHJcbiAgICAgIGlmcmFtZS5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICc8aCcgKyBoZWFkZXJzLnZhbHVlICsgJyBjbGFzcz1cImhlYWRlclwiPicgKyBkZWxldGVIZWFkZXIoaWZyYW1lLmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MKSArICc8L2gnICsgaGVhZGVycy52YWx1ZSArICc+JztcclxuICAgICAgdGV4dEVsZW0uaW5uZXJIVE1MID0gJzxoJyArIGhlYWRlcnMudmFsdWUgKyAnIGNsYXNzPVwiaGVhZGVyXCI+JyArIGRlbGV0ZUhlYWRlcih0ZXh0RWxlbS5pbm5lckhUTUwpICsgJzwvaCcgKyBoZWFkZXJzLnZhbHVlICsgJz4nO1xyXG4gICAgICB0ZXh0RWxlbSA9IHRleHRXcmFwcGVyRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXInKVswXTtcclxuICAgICAgJCgnI3RleHQtZm9udC1zaXplLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUocmVkYWN0b3JFZGl0b3IpLmZvbnRTaXplKSk7XHJcbiAgICAgICQoJyN0ZXh0LWZvbnQtc2l6ZS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHJlZGFjdG9yRWRpdG9yKS5mb250U2l6ZSkpO1xyXG4gICAgICAkKCcjdGV4dC1saW5lLWhlaWdodC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHJlZGFjdG9yRWRpdG9yKS5saW5lSGVpZ2h0KSk7XHJcbiAgICAgICQoJyN0ZXh0LWxpbmUtaGVpZ2h0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUocmVkYWN0b3JFZGl0b3IpLmxpbmVIZWlnaHQpKTtcclxuICAgICAgcmVkYWN0b3JFZGl0b3IgPSBpZnJhbWUuZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXInKVswXTtcclxuICAgICAgdGV4dEVsZW0uc3R5bGUubGluZUhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUocmVkYWN0b3JFZGl0b3IpLmxpbmVIZWlnaHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZnJhbWUuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBkZWxldGVIZWFkZXIoaWZyYW1lLmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MKTtcclxuICAgICAgdGV4dEVsZW0uaW5uZXJIVE1MID0gZGVsZXRlSGVhZGVyKHRleHRFbGVtLmlubmVySFRNTCk7XHJcbiAgICAgICQodGV4dEVsZW0pLmNzcygnbGluZS1oZWlnaHQnLCBnZXRDb21wdXRlZFN0eWxlKHJlZGFjdG9yRWRpdG9yKS5saW5lSGVpZ2h0KTtcclxuICAgICAgJCgnI3RleHQtZm9udC1zaXplLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUocmVkYWN0b3JFZGl0b3IpLmZvbnRTaXplKSk7XHJcbiAgICAgICQoJyN0ZXh0LWZvbnQtc2l6ZS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHJlZGFjdG9yRWRpdG9yKS5mb250U2l6ZSkpO1xyXG4gICAgICAkKCcjdGV4dC1saW5lLWhlaWdodC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHJlZGFjdG9yRWRpdG9yKS5saW5lSGVpZ2h0KSk7XHJcbiAgICAgICQoJyN0ZXh0LWxpbmUtaGVpZ2h0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUocmVkYWN0b3JFZGl0b3IpLmxpbmVIZWlnaHQpKTtcclxuICAgIH1cclxuICAgIGlmci5oZWlnaHQgPSBpZnJhbWUuZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyAncHgnO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG4gIC8v0JLRi9Cx0L7RgCDRiNGA0LjRhNGC0LBcclxuICBmb250RmFtaWx5U2VsZWN0LnZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShpZnJhbWUuZG9jdW1lbnQuYm9keSkuZm9udEZhbWlseTtcclxuICBmb250RmFtaWx5U2VsZWN0Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmVkYWN0b3JFZGl0b3Iuc3R5bGUuZm9udEZhbWlseSA9IGZvbnRGYW1pbHlTZWxlY3QudmFsdWU7XHJcbiAgICB0ZXh0RWxlbS5zdHlsZS5mb250RmFtaWx5ID0gZm9udEZhbWlseVNlbGVjdC52YWx1ZTtcclxuICAgIHRleHRFbGVtID0gaW1nV3JhcHBlckVsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dCcpWzBdO1xyXG4gICAgdGV4dEVsZW0uc3R5bGUuZm9udEZhbWlseSA9IGZvbnRGYW1pbHlTZWxlY3QudmFsdWU7XHJcbiAgICBpZnIuaGVpZ2h0ID0gaWZyYW1lLmRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgJ3B4JztcclxuICAgIHRleHRFbGVtLmlubmVySFRNTCA9IGlmcmFtZS5kb2N1bWVudC5ib2R5LmlubmVySFRNTDtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICAvL9Cg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAgIFxyXG4gICQoJyN0ZXh0LWZvbnQtc2l6ZS12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHJlZGFjdG9yRWRpdG9yKS5mb250U2l6ZSkpO1xyXG4gICQoJyN0ZXh0LWZvbnQtc2l6ZS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHJlZGFjdG9yRWRpdG9yKS5mb250U2l6ZSkpO1xyXG4gICQoJyN0ZXh0LWZvbnQtc2l6ZS12YWx1ZSwgI3RleHQtZm9udC1zaXplLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChyZWRhY3RvckVkaXRvcikuY3NzKCdmb250LXNpemUnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICAkKHRleHRFbGVtKS5jc3MoJ2ZvbnQtc2l6ZScsICQodGhpcykudmFsKCkgKyAncHgnKS5jc3MoJ2xpbmUtaGVpZ2h0JywgZ2V0Q29tcHV0ZWRTdHlsZShyZWRhY3RvckVkaXRvcikubGluZUhlaWdodCk7XHJcbiAgICBpZnIuaGVpZ2h0ID0gaWZyYW1lLmRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgJ3B4JztcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ0ZXh0LWZvbnQtc2l6ZS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN0ZXh0LWZvbnQtc2l6ZS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN0ZXh0LWZvbnQtc2l6ZS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0JzQtdC20YHRgtGA0L7Rh9C90YvQuSDQuNC90YLQtdGA0LLQsNC7XHJcblxyXG4gICQoJyN0ZXh0LWxpbmUtaGVpZ2h0LXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUocmVkYWN0b3JFZGl0b3IpLmxpbmVIZWlnaHQpKTtcclxuICAkKCcjdGV4dC1saW5lLWhlaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHJlZGFjdG9yRWRpdG9yKS5saW5lSGVpZ2h0KSk7XHJcbiAgJCgnI3RleHQtbGluZS1oZWlnaHQtdmFsdWUsICN0ZXh0LWxpbmUtaGVpZ2h0LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChyZWRhY3RvckVkaXRvcikuY3NzKCdsaW5lLWhlaWdodCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICQodGV4dEVsZW0pLmNzcygnbGluZS1oZWlnaHQnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZnIuaGVpZ2h0ID0gaWZyYW1lLmRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgJ3B4JztcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ0ZXh0LWxpbmUtaGVpZ2h0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3RleHQtbGluZS1oZWlnaHQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjdGV4dC1saW5lLWhlaWdodC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0KbQstC10YIg0YLQtdC60YHRgtCwXHJcbiAgJCgnI3RleHQtY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChyZWRhY3RvckVkaXRvcikuY3NzKCdjb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgJCh0ZXh0RWxlbSkuY3NzKCdjb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8v0JfQsNC70LjQstC60LAg0YLQtdC60YHRgtCwXHJcbiAgJCgnI3RleHQtYmFja2NvbG9yLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlZGFjdG9yRWRpdG9yLmlubmVySFRNTCA9IGRlbGV0ZVNwYW4ocmVkYWN0b3JFZGl0b3IpO1xyXG4gICAgdmFyIHRhcmdldCA9IHJlZGFjdG9yRWRpdG9yO1xyXG4gICAgdmFyIHJuZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICB2YXIgbm9kZXMgPSByZWRhY3RvckVkaXRvci5jaGlsZE5vZGVzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobm9kZXNbaV0ubm9kZVR5cGUgPT0gMykge1xyXG4gICAgICAgIHJuZy5zZWxlY3ROb2RlKG5vZGVzW2ldKTtcclxuICAgICAgICB2YXIgaGlnaGxpZ2h0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBoaWdobGlnaHRTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgcm5nLnN1cnJvdW5kQ29udGVudHMoaGlnaGxpZ2h0U3Bhbik7XHJcbiAgICAgIH0gZWxzZSBpZiAobm9kZXNbaV0ubm9kZU5hbWUgIT0gXCJCUlwiKSB7XHJcbiAgICAgICAgcm5nLnNlbGVjdE5vZGVDb250ZW50cyhub2Rlc1tpXSk7XHJcbiAgICAgICAgdmFyIGhpZ2hsaWdodFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgaGlnaGxpZ2h0U3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHJuZy5zdXJyb3VuZENvbnRlbnRzKGhpZ2hsaWdodFNwYW4pO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9XHJcbiAgICB0ZXh0RWxlbS5pbm5lckhUTUwgPSBkZWxldGVTcGFuKHRleHRFbGVtKTtcclxuICAgIHZhciB0YXJnZXQgPSB0ZXh0RWxlbTtcclxuICAgIHZhciBybmcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgdmFyIG5vZGVzID0gdGV4dEVsZW0uY2hpbGROb2RlcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKG5vZGVzW2ldLm5vZGVUeXBlID09IDMpIHtcclxuICAgICAgICBybmcuc2VsZWN0Tm9kZShub2Rlc1tpXSk7XHJcbiAgICAgICAgdmFyIGhpZ2hsaWdodFNwYW5Gb3JUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGhpZ2hsaWdodFNwYW5Gb3JUZXh0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgcm5nLnN1cnJvdW5kQ29udGVudHMoaGlnaGxpZ2h0U3BhbkZvclRleHQpO1xyXG4gICAgICB9IGVsc2UgaWYgKG5vZGVzW2ldLm5vZGVOYW1lICE9IFwiQlJcIikge1xyXG4gICAgICAgIHJuZy5zZWxlY3ROb2RlQ29udGVudHMobm9kZXNbaV0pO1xyXG4gICAgICAgIHZhciBoaWdobGlnaHRTcGFuRm9yVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBoaWdobGlnaHRTcGFuRm9yVGV4dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHJuZy5zdXJyb3VuZENvbnRlbnRzKGhpZ2hsaWdodFNwYW5Gb3JUZXh0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICBjb25zdCByZXNldEJhY2tjb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LWJhY2tjb2xvci12YWx1ZS1yZXNldCcpO1xyXG4gIHJlc2V0QmFja2NvbG9yLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZWRhY3RvckVkaXRvci5pbm5lckhUTUwgPSBkZWxldGVTcGFuKHJlZGFjdG9yRWRpdG9yKTtcclxuICAgIHRleHRFbGVtLmlubmVySFRNTCA9IGRlbGV0ZVNwYW4odGV4dEVsZW0pO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG4gIC8v0JLQtdGA0YLQuNC60LDQu9GM0L3QvtC1INCy0YvRgNCw0LLQvdC40LLQsNC90LjQtVxyXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGltZ1dyYXBwZXJFbGVtKS5tYXJnaW5Ub3AgPT0gJ2F1dG8nKSB7XHJcbiAgICB0ZXh0TWFyZ2luQm90dG9tLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgdGV4dE1hcmdpblRvcC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB0ZXh0TWFyZ2luQ2VudGVyLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9IGVsc2UgaWYgKGdldENvbXB1dGVkU3R5bGUoaW1nV3JhcHBlckVsZW0pLm1hcmdpbkJvdHRvbSA9PSAnYXV0bycpIHtcclxuICAgIHRleHRNYXJnaW5Cb3R0b20uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgdGV4dE1hcmdpblRvcC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHRleHRNYXJnaW5DZW50ZXIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShpbWdXcmFwcGVyRWxlbSkubWFyZ2luVG9wID09ICcwcHgnICYmIGdldENvbXB1dGVkU3R5bGUoaW1nV3JhcHBlckVsZW0pLm1hcmdpbkJvdHRvbSA9PSAnMHB4Jykge1xyXG4gICAgdGV4dE1hcmdpbkJvdHRvbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB0ZXh0TWFyZ2luVG9wLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIHRleHRNYXJnaW5DZW50ZXIuY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG4gIHRleHRNYXJnaW5Ub3Aub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGltZ1dyYXBwZXJFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xyXG4gICAgaW1nV3JhcHBlckVsZW0uc3R5bGUubWFyZ2luQm90dG9tID0gJ2F1dG8nO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuXHJcbiAgICAvLyAgICByZXNpemVyWV9FbGVtLnN0eWxlLnRvcCA9ICcxMDAlJztcclxuICAgIC8vICAgIHJlc2l6ZXJZX0VsZW0uc3R5bGUubWFyZ2luVG9wID0gJy0xcmVtJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLnRvcCA9ICcxMDAlJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLmxlZnQgPSAnMTAwJSc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnLTFyZW0nO1xyXG4gICAgLy8gICAgcmVzaXplclhZX0VsZW0uc3R5bGUubWFyZ2luTGVmdCA9ICctMXJlbSc7XHJcbiAgfVxyXG4gIHRleHRNYXJnaW5DZW50ZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGltZ1dyYXBwZXJFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xyXG4gICAgaW1nV3JhcHBlckVsZW0uc3R5bGUubWFyZ2luQm90dG9tID0gJzBweCc7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG5cclxuICAgIC8vICAgIHJlc2l6ZXJZX0VsZW0uc3R5bGUudG9wID0gJzEwMCUnO1xyXG4gICAgLy8gICAgcmVzaXplcllfRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnLTFyZW0nO1xyXG4gICAgLy8gICAgcmVzaXplclhZX0VsZW0uc3R5bGUudG9wID0gJzEwMCUnO1xyXG4gICAgLy8gICAgcmVzaXplclhZX0VsZW0uc3R5bGUubGVmdCA9ICcxMDAlJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLm1hcmdpblRvcCA9ICctMXJlbSc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0xcmVtJztcclxuICB9XHJcbiAgdGV4dE1hcmdpbkJvdHRvbS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaW1nV3JhcHBlckVsZW0uc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xyXG4gICAgaW1nV3JhcHBlckVsZW0uc3R5bGUubWFyZ2luQm90dG9tID0gJzBweCc7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG5cclxuICAgIC8vICAgIHJlc2l6ZXJZX0VsZW0uc3R5bGUudG9wID0gJzAnO1xyXG4gICAgLy8gICAgcmVzaXplcllfRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgLy8gICAgcmVzaXplclhZX0VsZW0uc3R5bGUubWFyZ2luVG9wID0gJzAnO1xyXG4gICAgLy8gICAgcmVzaXplclhZX0VsZW0uc3R5bGUubWFyZ2luTGVmdCA9ICcwJztcclxuICB9XHJcblxyXG4gIC8v0J3QsNGB0YLRgNC+0LnQutC4INC+0YLRgdGC0YPQv9C+0LJcclxuXHJcbiAgJCgnI3RleHQtcGFkZGluZy12YWx1ZScpLnZhbChwYXJzZUludCgkKHRleHRFbGVtKS5jc3MoJ3BhZGRpbmcnKSkpO1xyXG4gICQoJyN0ZXh0LXBhZGRpbmctdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0ZXh0RWxlbSkuY3NzKCdwYWRkaW5nJykpKTtcclxuXHJcbiAgJCgnI3RleHQtbWFyZ2luLXRvcC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ1dyYXBwZXJFbGVtKS5tYXJnaW5Ub3ApKTtcclxuICAkKCcjdGV4dC1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoaW1nV3JhcHBlckVsZW0pLm1hcmdpblRvcCkpO1xyXG4gICQoJyN0ZXh0LW1hcmdpbi1yaWdodC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ1dyYXBwZXJFbGVtKS5tYXJnaW5SaWdodCkpO1xyXG4gICQoJyN0ZXh0LW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ1dyYXBwZXJFbGVtKS5tYXJnaW5SaWdodCkpO1xyXG4gICQoJyN0ZXh0LW1hcmdpbi1ib3R0b20tdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShpbWdXcmFwcGVyRWxlbSkubWFyZ2luQm90dG9tKSk7XHJcbiAgJCgnI3RleHQtbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ1dyYXBwZXJFbGVtKS5tYXJnaW5Cb3R0b20pKTtcclxuICAkKCcjdGV4dC1tYXJnaW4tbGVmdC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ1dyYXBwZXJFbGVtKS5tYXJnaW5MZWZ0KSk7XHJcbiAgJCgnI3RleHQtbWFyZ2luLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShpbWdXcmFwcGVyRWxlbSkubWFyZ2luTGVmdCkpO1xyXG5cclxuICAkKCcjdGV4dC1tYXJnaW4tdmFsdWUsICN0ZXh0LW1hcmdpbi12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ21hcmdpbicsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJCh0aHMpLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW46JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInRleHQtbWFyZ2luLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3RleHQtbWFyZ2luLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3RleHQtbWFyZ2luLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjdGV4dC1tYXJnaW4tdG9wLXZhbHVlLCAjdGV4dC1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnbWFyZ2luLXRvcCcsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJCh0aHMpLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tdG9wOicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ0ZXh0LW1hcmdpbi10b3AtdmFsdWVcIikge1xyXG4gICAgICAkKCcjdGV4dC1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3RleHQtbWFyZ2luLXRvcC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI3RleHQtbWFyZ2luLXJpZ2h0LXZhbHVlLCAjdGV4dC1tYXJnaW4tcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdtYXJnaW4tcmlnaHQnLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQodGhzKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLXJpZ2h0OicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ0ZXh0LW1hcmdpbi1yaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN0ZXh0LW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN0ZXh0LW1hcmdpbi1yaWdodC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI3RleHQtbWFyZ2luLWJvdHRvbS12YWx1ZSwgI3RleHQtbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ21hcmdpbi1ib3R0b20nLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQodGhzKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLWJvdHRvbTonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgfSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidGV4dC1tYXJnaW4tYm90dG9tLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3RleHQtbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN0ZXh0LW1hcmdpbi1ib3R0b20tdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyN0ZXh0LW1hcmdpbi1sZWZ0LXZhbHVlLCAjdGV4dC1tYXJnaW4tbGVmdC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ21hcmdpbi1sZWZ0JywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHRocykuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi1sZWZ0OicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ0ZXh0LW1hcmdpbi1sZWZ0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3RleHQtbWFyZ2luLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjdGV4dC1tYXJnaW4tbGVmdC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INGC0LXQvdC10LkqL1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0U2hhZG93UmFkaW9PbicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1zaGFkb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHZhciBodiA9ICQoJyN0ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3RleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyN0ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyN0ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAkKGlmcmFtZS5kb2N1bWVudC5ib2R5KS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgJCh0ZXh0RWxlbSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0U2hhZG93UmFkaW9PZmYnKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtc2hhZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICQoaWZyYW1lLmRvY3VtZW50LmJvZHkpLmNzcygndGV4dC1zaGFkb3cnLCAnbm9uZScpO1xyXG4gICAgJCh0ZXh0RWxlbSkuY3NzKCd0ZXh0LXNoYWRvdycsICdub25lJyk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuXHJcbiAgJCgnI3RleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUsICN0ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI3RleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI3RleHQtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyN0ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuICAgICQoaWZyYW1lLmRvY3VtZW50LmJvZHkpLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICAkKHRleHRFbGVtKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWVcIikge1xyXG4gICAgICAkKCcjdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN0ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3RleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlLCAjdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyN0ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyN0ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAkKGlmcmFtZS5kb2N1bWVudC5ib2R5KS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgJCh0ZXh0RWxlbSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ0ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN0ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN0ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN0ZXh0LXNoYWRvdy1ibHVyLXZhbHVlLCAjdGV4dC1zaGFkb3ctYmx1ci12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyN0ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3RleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyN0ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAkKGlmcmFtZS5kb2N1bWVudC5ib2R5KS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgJCh0ZXh0RWxlbSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ0ZXh0LXNoYWRvdy1ibHVyLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3RleHQtc2hhZG93LWJsdXItdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN0ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlLCAjdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyN0ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3RleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyN0ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyN0ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKHRoaXMpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAkKGlmcmFtZS5kb2N1bWVudC5ib2R5KS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgJCh0ZXh0RWxlbSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ0ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3RleHQtc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN0ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyN0ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKHRoaXMpLnZhbCgpLCAkKCcjdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAkKGlmcmFtZS5kb2N1bWVudC5ib2R5KS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgJCh0ZXh0RWxlbSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQvdCw0YHRgtGA0L7QtdC6INGC0LXQvdC10LkqL1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQsCDQsNC90LjQvNCw0YbQuNC4Ki9cclxuXHJcbiAgJCgnI3RleHQtYW5pbWF0aW9uLXR5cGUtdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykgIT0gXCJub25lXCIpIHtcclxuICAgICAgJCh0ZXh0RWxlbSkuY3NzKCdhbmltYXRpb24tbmFtZScsICQodGhpcykudmFsKCkpO1xyXG4gICAgICAkKHRleHRFbGVtKS5jc3MoJ2FuaW1hdGlvbi1kZWxheScsICQoJyN0ZXh0LWFuaW1hdGlvbi1kZWxheS12YWx1ZScpLnZhbCgpICsgJ3MnKTtcclxuICAgICAgJCh0ZXh0RWxlbSkuY3NzKCdhbmltYXRpb24tZHVyYXRpb24nLCAkKCcjdGV4dC1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUnKS52YWwoKSArICdzJyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjdGV4dC1hbmltYXRpb24tZGVsYXktdmFsdWUsICN0ZXh0LWFuaW1hdGlvbi1kZWxheS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGV4dEVsZW0pLmNzcygnYW5pbWF0aW9uLWRlbGF5JywgJCh0aGlzKS52YWwoKSArICdzJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidGV4dC1hbmltYXRpb24tZGVsYXktdmFsdWVcIikge1xyXG4gICAgICAkKCcjdGV4dC1hbmltYXRpb24tZGVsYXktdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjdGV4dC1hbmltYXRpb24tZGVsYXktdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjdGV4dC1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUsICN0ZXh0LWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGV4dEVsZW0pLmNzcygnYW5pbWF0aW9uLWR1cmF0aW9uJywgJCh0aGlzKS52YWwoKSArICdzJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidGV4dC1hbmltYXRpb24tZHVyYXRpb24tdmFsdWVcIikge1xyXG4gICAgICAkKCcjdGV4dC1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjdGV4dC1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0L3QsNGB0YLRgNC+0LXQuiDQsNC90LjQvNCw0YbQuNC4Ki9cclxuXHJcbiAgLyrQkdC70L7QuiDRgtCw0LnQvNCw0YPRgtCwKi9cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tISEh0KHQlNCV0JvQkNCi0KwhISEtLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1kaXNwbGF5LW5vbmUtdmFsdWUnKS5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtZGlzcGxheS1ub25lLXZhbHVlJykuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgJCgnI3RleHQtZGlzcGxheS1ub25lLXZhbHVlLCAjdGV4dC10aW1lb3V0LWhvdXItdmFsdWUsICN0ZXh0LXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZSwgI3RleHQtdGltZW91dC1taW51dGUtdmFsdWUsICN0ZXh0LXRpbWVvdXQtbWludXRlLXZhbHVlLXJhbmdlLCAjdGV4dC10aW1lb3V0LXNlY29uZC12YWx1ZSwgI3RleHQtdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaWQgPSB0aHMuYXR0cignaWQnKTtcclxuXHJcbiAgICB2YXIgaG91cnMgPSAkKCcjdGV4dC10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoKSAqIDM2MDA7XHJcbiAgICB2YXIgbWludXRlID0gJCgnI3RleHQtdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwoKSAqIDYwO1xyXG4gICAgdmFyIHNlY29uZCA9IHBhcnNlSW50KCQoJyN0ZXh0LXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKCkpO1xyXG5cclxuICAgIHZhciB0aW1lID0gaG91cnMgKyBtaW51dGUgKyBzZWNvbmQ7XHJcblxyXG4gICAgdGltZSA9IHRpbWUgKiAxMDAwO1xyXG5cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtZGlzcGxheS1ub25lLXZhbHVlJykuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgICAgJCgnI21haW5BcmVhJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNvZGVcIiBpZD1cInNjcmlwdC0nICsgaWQgKyAnXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPicgKyBbaWQsIHRpbWVdICsgJzwvc3Bhbj4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ0ZXh0LXRpbWVvdXQtaG91ci12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN0ZXh0LXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidGV4dC10aW1lb3V0LWhvdXItdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjdGV4dC10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInRleHQtdGltZW91dC1taW51dGUtdmFsdWVcIikge1xyXG4gICAgICAkKCcjdGV4dC10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidGV4dC10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZVwiKSB7XHJcbiAgICAgICQoJyN0ZXh0LXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ0ZXh0LXRpbWVvdXQtc2Vjb25kLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3RleHQtdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInRleHQtdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjdGV4dC10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0LHQu9C+0LrQsCDRgtCw0LnQvNCw0YPRgtCwKi9cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGVsZXRlSGVhZGVyKGVsKSB7XHJcbiAgbGV0IGNvbnRlbnQgPSBlbDtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcclxuICAgIGxldCB0YWdOYW1lID0gJ2gnICsgaTtcclxuICAgIGNvbnN0IHJlT3BlbiA9IG5ldyBSZWdFeHAoJzwnICsgdGFnTmFtZSArICdbXj5dKj4nLCAnZ2knKTtcclxuICAgIGNvbnN0IHJlQ2xvc2UgPSBuZXcgUmVnRXhwKCc8LycgKyB0YWdOYW1lICsgJ1tePl0qPicsICdnaScpO1xyXG4gICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShyZU9wZW4sIFwiXCIpO1xyXG4gICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShyZUNsb3NlLCBcIlwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVNwYW4oZWwpIHtcclxuICBsZXQgY29udGVudCA9IGVsLmlubmVySFRNTDtcclxuICBjb25zdCByZU9wZW4gPSBuZXcgUmVnRXhwKCc8c3BhbltePl0qPicsICdnaScpO1xyXG4gIGNvbnN0IHJlQ2xvc2UgPSBuZXcgUmVnRXhwKCc8L3NwYW5bXj5dKj4nLCAnZ2knKTtcclxuICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlT3BlbiwgXCJcIik7XHJcbiAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShyZUNsb3NlLCBcIlwiKTtcclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlRm9udEZhbWlseShpZCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgY29uc3QgY2hvc2VuRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICBjb25zdCBjaG9zZW5UZXh0ID0gY2hvc2VuRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0JylbMF07XHJcblxyXG4gIGZvbnRGYW1pbHlTZWxlY3Qub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjaG9zZW5UZXh0LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5U2VsZWN0LnZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuLyrQn9C10YDQtdCy0L7QtCBoZXgg0LIgUkdCICjQs9C00LUt0YLQviDRgtC+0YfQvdC+INC40YHQv9C+0LvRjNC30YPQtdGC0YHRjywg0YPQttC1INC90LUg0L/QvtC80L3RjikqL1xyXG5mdW5jdGlvbiBoZXhUb1JHQihoZXgsIGFscGhhKSB7XHJcbiAgdmFyIHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KSxcclxuICAgIGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KSxcclxuICAgIGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KTtcclxuXHJcbiAgaWYgKGFscGhhKSB7XHJcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcclxuICB9IGVsc2UgaWYgKGFscGhhID09IDApIHtcclxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCJyZ2IoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIilcIjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==