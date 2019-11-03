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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/modules/image/imageSettings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/modules/image/imageSettings.js":
/*!************************************************!*\
  !*** ./src/API/modules/image/imageSettings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('#mainArea').on('click', '.copyImg', function () {
  var imgBlockId = $(this).parents('.imageBlock').attr('id');
  var imgBlockElem = document.getElementById(imgBlockId);
  var clonId = 'image' + getRandom();
  $(imgBlockElem).clone(true).attr('id', clonId).css('height', 'auto').insertAfter(imgBlockElem);
  var clone = document.getElementById(clonId);
  var clonedImg = clone.getElementsByClassName('img')[0];
  var imgWrapper = clone.getElementsByClassName('imageWrapper')[0];
  var cloneResizerY = clone.getElementsByClassName('resizerY')[0];
  var cloneResizerXY = clone.getElementsByClassName('resizerXY')[0];
  var cloneResizerX = clone.getElementsByClassName('resizerX')[0];
  addFunctionalityToElement(clonId);
  makePreview();
});
var ths = null;
$('#mainArea').on('click', '.imgSet', function (e) {
  var imgWrapper = null;
  ths = $(this).parents('.imageBlock');
  var content = document.getElementById($(this).parents('.content').attr('id'));
  var imgBlockElem = document.getElementById(ths.attr('id'));
  var imgElem = imgBlockElem.getElementsByClassName('img')[0];
  var imgWrapperElem = imgBlockElem.getElementsByClassName('imageWrapper')[0];
  var proportion = imgBlockElem.getElementsByClassName('imgProportion')[0];
  var imgWrapper = imgBlockElem.getElementsByClassName('border')[0];
  var resizerY_Elem = imgBlockElem.getElementsByClassName('resizerY')[0];
  var resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerXY')[0]; //Появление правой панели, инициализация инпутов.

  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#img-border-style').off();
  $('#img-border-left-style').off();
  $('#img-border-right-style').off();
  $('#img-border-top-style-value').off();
  $('#img-border-bottom-style').off();
  $('#img-animation-type-value').off();

  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#img-timeout-hour-value').val(h);
    $('#img-timeout-minute-value').val(m);
    $('#img-timeout-second-value').val(s);
    $('#img-display-none-value').prop('checked', true);
  } else {
    $('#img-timeout-hour-value').val(0);
    $('#img-timeout-minute-value').val(0);
    $('#img-timeout-second-value').val(0);
  }

  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#image-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  (function () {
    document.getElementById('paddingRadioEvery').onclick = function () {
      document.getElementById('paddingAll').style.display = 'none';
      document.getElementById('paddingEvery').style.display = 'block';
    };

    document.getElementById('paddingRadioAll').onclick = function () {
      document.getElementById('paddingAll').style.display = 'block';
      document.getElementById('paddingEvery').style.display = 'none';
    };

    document.getElementById('imgBorderRadioEvery').onclick = function () {
      document.getElementById('imgBorderAll').style.display = 'none';
      document.getElementById('imgBorderEvery').style.display = 'block';
    };

    document.getElementById('imgBorderRadioAll').onclick = function () {
      document.getElementById('imgBorderAll').style.display = 'block';
      document.getElementById('imgBorderEvery').style.display = 'none';
    };
  })(); //Изменение src картинок


  pictureSrc.value = imgElem.src;
  changeSrc(ths.attr('id')); //Настройки пропорции

  if (proportion.value == "0" && proportionID.checked) {
    proportionID.checked = false;
  } else if (proportion.value == "1" && !proportionID.checked) {
    proportionID.checked = true;
  }

  proportionID.onclick = function () {
    if (proportionID.checked) {
      proportion.value = "1";
    } else {
      proportion.value = "0";
    }
  }; //Вертикальное выравнивание


  if (getComputedStyle(imgBlockElem).marginTop == 'auto') {
    imgMarginBottom.checked = true;
    imgMarginTop.checked = false;
    imgMarginCenter.checked = false;
  } else if (getComputedStyle(imgBlockElem).marginBottom == 'auto') {
    imgMarginBottom.checked = false;
    imgMarginTop.checked = true;
    imgMarginCenter.checked = false;
  } else if (getComputedStyle(imgBlockElem).marginTop == '0px' && getComputedStyle(imgBlockElem).marginBottom == '0px') {
    imgMarginBottom.checked = false;
    imgMarginTop.checked = false;
    imgMarginCenter.checked = true;
  }

  imgMarginTop.onclick = function () {
    imgBlockElem.style.marginTop = '0px';
    imgBlockElem.style.marginBottom = 'auto';
    makePreview(); //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  };

  imgMarginCenter.onclick = function () {
    imgBlockElem.style.marginTop = '0px';
    imgBlockElem.style.marginBottom = '0px';
    makePreview(); //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  };

  imgMarginBottom.onclick = function () {
    imgBlockElem.style.marginTop = 'auto';
    imgBlockElem.style.marginBottom = '0px';
    makePreview(); //    resizerY_Elem.style.top = '0';
    //    resizerY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.top = '0';
    //    resizerXY_Elem.style.left = '0';
    //    resizerXY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.marginLeft = '0';
  }; //Настройки отступов


  $('#img-padding-value').val(parseInt($(imgWrapper).css('padding')));
  $('#img-padding-value-range').val(parseInt($(imgWrapper).css('padding')));
  $('#img-margin-top-value').val(parseInt(getComputedStyle(imgBlockElem).marginTop));
  $('#img-margin-top-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginTop));
  $('#img-margin-right-value').val(parseInt(getComputedStyle(imgBlockElem).marginRight));
  $('#img-margin-right-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginRight));
  $('#img-margin-bottom-value').val(parseInt(getComputedStyle(imgBlockElem).marginBottom));
  $('#img-margin-bottom-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginBottom));
  $('#img-margin-left-value').val(parseInt(getComputedStyle(imgBlockElem).marginLeft));
  $('#img-margin-left-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginLeft));
  $('#img-padding-top-value').val(parseInt(getComputedStyle(imgWrapper).paddingTop));
  $('#img-padding-top-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingTop));
  $('#img-padding-right-value').val(parseInt(getComputedStyle(imgWrapper).paddingRight));
  $('#img-padding-right-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingRight));
  $('#img-padding-bottom-value').val(parseInt(getComputedStyle(imgWrapper).paddingBottom));
  $('#img-padding-bottom-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingBottom));
  $('#img-padding-left-value').val(parseInt(getComputedStyle(imgWrapper).paddingLeft));
  $('#img-padding-left-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingLeft));
  $('#img-margin-top-value, #img-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "img-margin-top-value") {
      $('#img-margin-top-value-range').val($(this).val());
    } else {
      $('#img-margin-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-margin-right-value, #img-margin-right-value-range').on('input', function () {
    $(ths).css('margin-right', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "img-margin-right-value") {
      $('#img-margin-right-value-range').val($(this).val());
    } else {
      $('#img-margin-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-margin-bottom-value, #img-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "img-margin-bottom-value") {
      $('#img-margin-bottom-value-range').val($(this).val());
    } else {
      $('#img-margin-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-margin-left-value, #img-margin-left-value-range').on('input', function () {
    $(ths).css('margin-left', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "img-margin-left-value") {
      $('#img-margin-left-value-range').val($(this).val());
    } else {
      $('#img-margin-left-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-padding-value, #img-padding-value-range').on('input', function () {
    $(imgWrapper).css('padding', $(this).val() + 'px');

    if ($(this).attr('id') == "img-padding-value") {
      $('#img-padding-value-range').val($(this).val());
    } else {
      $('#img-padding-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-padding-top-value, #img-padding-top-value-range').on('input', function () {
    $(imgWrapper).css('padding-top', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-top:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "img-padding-top-value") {
      $('#img-padding-top-value-range').val($(this).val());
    } else {
      $('#img-padding-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-padding-right-value, #img-padding-right-value-range').on('input', function () {
    $(imgWrapper).css('padding-right', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-right:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "img-padding-right-value") {
      $('#img-padding-right-value-range').val($(this).val());
    } else {
      $('#img-padding-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-padding-bottom-value, #img-padding-bottom-value-range').on('input', function () {
    $(imgWrapper).css('padding-bottom', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "img-padding-bottom-value") {
      $('#img-padding-bottom-value-range').val($(this).val());
    } else {
      $('#img-padding-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-padding-left-value, #img-padding-left-value-range').on('input', function () {
    $(imgWrapper).css('padding-left', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-left:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "img-padding-left-value") {
      $('#img-padding-left-value-range').val($(this).val());
    } else {
      $('#img-padding-left-value').val($(this).val());
    }

    makePreview();
  }); //Настройки всех границ изображения

  $('#img-border-value').val(parseInt($(imgWrapper).css('border-width')));
  $('#img-border-value-range').val(parseInt($(imgWrapper).css('border-width')));
  $('#img-border-radius').val(parseInt($(imgWrapper).css('border-radius')));
  $('#img-border-radius-range').val(parseInt($(imgWrapper).css('border-radius')));
  $('#img-border-value, #img-border-value-range').on('input', function () {
    $(imgWrapper).css('border-width', $(this).val() + 'px');

    if ($(this).attr('id') == "img-border-value") {
      $('#img-border-value-range').val($(this).val());
    } else {
      $('#img-border-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-border-radius, #img-border-radius-range').on('input', function () {
    $(imgWrapper).css('border-radius', $(this).val() + 'px');
    $(imgElem).css('border-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "img-border-radius") {
      $('#img-border-radius-range').val($(this).val());
    } else {
      $('#img-border-radius').val($(this).val());
    }

    makePreview();
  });
  $('#img-border-style').on('change', function () {
    $(imgWrapper).css('border-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#border-color-value').on('change', function () {
    $(imgWrapper).css('border-color', $(this).val());
    makePreview();
  });
  /*Настройки для верхней границы блока*/

  $('#img-border-top-value').val(parseInt($(ths).css('border-top-width')));
  $('#img-border-top-value-range').val(parseInt($(ths).css('border-top-width')));
  $('#img-border-left-top-radius').val(parseInt($(ths).css('border-top-left-radius')));
  $('#img-border-left-top-radius-range').val(parseInt($(ths).css('border-top-left-radius')));
  $('#img-border-top-value, #img-border-top-value-range').on('input', function () {
    $(imgWrapper).css('border-top-width', $(this).val() + 'px');

    if ($(this).attr('id') == "img-border-top-value") {
      $('#img-border-top-value-range').val($(this).val());
    } else {
      $('#img-border-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-border-left-top-radius, #img-border-left-top-radius-range').on('input', function () {
    $(imgElem).css('border-top-left-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-top-left-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "img-border-left-top-radius") {
      $('#img-border-left-top-radius-range').val($(this).val());
    } else {
      $('#img-border-left-top-radius').val($(this).val());
    }

    makePreview();
  });
  $('#img-border-top-style-value').on('change', function () {
    $(imgWrapper).css('border-top-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#img-border-top-color').on('change', function () {
    $(imgWrapper).css('border-top-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для правой границы блока*/

  $('#img-border-right-value').val(parseInt($(ths).css('border-right-width')));
  $('#img-border-right-value-range').val(parseInt($(ths).css('border-right-width')));
  $('#img-border-right-radius').val(parseInt($(ths).css('border-top-right-radius')));
  $('#img-border-right-radius-range').val(parseInt($(ths).css('border-top-right-radius')));
  $('#img-border-right-value, #img-border-right-value-range').on('input', function () {
    $(imgWrapper).css('border-right-width', $(this).val() + 'px');

    if ($(this).attr('id') == "img-border-right-value") {
      $('#img-border-right-value-range').val($(this).val());
    } else {
      $('#img-border-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-border-right-radius, #img-border-right-radius-range').on('input', function () {
    $(imgElem).css('border-top-right-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-top-right-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "img-border-right-radius") {
      $('#img-border-right-radius-range').val($(this).val());
    } else {
      $('#img-border-right-radiuse').val($(this).val());
    }

    makePreview();
  });
  $('#img-border-right-style').on('change', function () {
    $(imgWrapper).css('border-right-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#img-border-right-color').on('change', function () {
    $(imgWrapper).css('border-right-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для нижней границы блока*/

  $('#img-border-bottom-value').val(parseInt($(ths).css('border-bottom-width')));
  $('#img-border-bottom-value-range').val(parseInt($(ths).css('border-bottom-width')));
  $('#img-border-bottom-right-radius').val(parseInt($(ths).css('border-bottom-right-radius')));
  $('#img-border-bottom-right-radius-range').val(parseInt($(ths).css('border-bottom-right-radius')));
  $('#img-border-bottom-value, #img-border-bottom-value-range').on('input', function () {
    $(imgWrapper).css('border-bottom-width', $(this).val() + 'px');

    if ($(this).attr('id') == "img-border-bottom-value") {
      $('#img-border-bottom-value-range').val($(this).val());
    } else {
      $('#img-border-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-border-bottom-right-radius, #img-border-bottom-right-radius-range').on('input', function () {
    $(imgElem).css('border-bottom-right-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-bottom-right-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "img-border-bottom-right-radius") {
      $('#img-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#img-border-bottom-right-radius').val($(this).val());
    }

    makePreview();
  });
  $('#img-border-bottom-style').on('change', function () {
    $(imgWrapper).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#img-border-bottom-color').on('change', function () {
    $(imgWrapper).css('border-bottom-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для левой границы блока*/

  $('#img-border-left-value').val(parseInt($(ths).css('border-left-width')));
  $('#img-border-left-value-range').val(parseInt($(ths).css('border-left-width')));
  $('#img-border-bottom-left-radius').val(parseInt($(ths).css('border-bottom-left-radius')));
  $('#img-border-bottom-left-radius-range').val(parseInt($(ths).css('border-bottom-left-radius')));
  $('#img-border-left-value, #img-border-left-value-range').on('input', function () {
    $(imgWrapper).css('border-left-width', $(this).val() + 'px');

    if ($(this).attr('id') == "img-border-left-value") {
      $('#img-border-left-value-range').val($(this).val());
    } else {
      $('#img-border-left-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-border-bottom-left-radius, #img-border-bottom-left-radius-range').on('input', function () {
    $(imgElem).css('border-bottom-left-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-bottom-left-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "img-border-bottom-left-radius") {
      $('#img-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#img-border-bottom-left-radius').val($(this).val());
    }

    makePreview();
  });
  $('#img-border-left-style').on('change', function () {
    $(imgWrapper).css('border-left-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#img-border-left-color').on('change', function () {
    $(imgWrapper).css('border-left-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки теней*/

  document.getElementById('imgShadowRadioOn').onclick = function () {
    document.getElementById('img-shadow').style.display = 'block';
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    makePreview();
  };

  document.getElementById('imgShadowRadioOff').onclick = function () {
    document.getElementById('img-shadow').style.display = 'none';
    $(imgWrapper).css('box-shadow', 'none');
    $(imgElem).css('box-shadow', 'none');
    makePreview();
  };

  $('#img-shadow-horizontal-value, #img-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "img-shadow-horizontal-value") {
      $('#img-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#img-shadow-horizontal-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-shadow-vertical-value, #img-shadow-vertical-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "img-shadow-vertical-value") {
      $('#img-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#img-shadow-vertical-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-shadow-blur-value, #img-shadow-blur-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "img-shadow-blur-value") {
      $('#img-shadow-blur-value-range').val($(this).val());
    } else {
      $('#img-shadow-blur-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-shadow-spread-value, #img-shadow-spread-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "img-shadow-spread-value") {
      $('#img-shadow-spread-value-range').val($(this).val());
    } else {
      $('#img-shadow-spread-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-shadow-opacity-value, #img-shadow-opacity-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "img-shadow-opacity-value") {
      $('#img-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#img-shadow-opacity-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-shadow-color-value').on('change', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    makePreview();
  });
  $('#img-shadow-inset-value').on('change', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    makePreview();
  });
  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#img-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(imgElem).css('animation-name', $(this).val());
      $(imgElem).css('animation-delay', $('#img-animation-delay-value').val() + 's');
      $(imgElem).css('animation-duration', $('#img-animation-duration-value').val() + 's');
    }

    makePreview();
  });
  $('#img-animation-delay-value, #img-animation-delay-value-range').on('input', function () {
    $(imgElem).css('animation-delay', $(this).val() + 's');

    if ($(this).attr('id') == "img-animation-delay-value") {
      $('#img-animation-delay-value-range').val($(this).val());
    } else {
      $('#img-animation-delay-value').val($(this).val());
    }

    makePreview();
  });
  $('#img-animation-duration-value, #img-animation-duration-value-range').on('input', function () {
    $(imgElem).css('animation-duration', $(this).val() + 's');

    if ($(this).attr('id') == "img-animation-duration-value") {
      $('#img-animation-duration-value-range').val($(this).val());
    } else {
      $('#img-animation-duration-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец настроек анимации*/

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('img-display-none-value').checked = true;
  } else {
    document.getElementById('img-display-none-value').checked = false;
  }

  $('#img-display-none-value, #img-timeout-hour-value, #img-timeout-hour-value-range, #img-timeout-minute-value, #img-timeout-minute-value-range, #img-timeout-second-value, #img-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#img-timeout-hour-value').val() * 3600;
    var minute = $('#img-timeout-minute-value').val() * 60;
    var second = parseInt($('#img-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;

    if (document.getElementById('img-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }

    if ($(this).attr('id') == "img-timeout-hour-value") {
      $('#img-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-hour-value-range") {
      $('#img-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-minute-value") {
      $('#img-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-minute-value-range") {
      $('#img-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-second-value") {
      $('#img-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-second-value-range") {
      $('#img-timeout-second-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец блока таймаута*/
});

function changeSrc(id) {
  'use strict';

  var chosenElement = document.getElementById(id);
  var chosenImgWrapper = chosenElement.getElementsByClassName('imageWrapper')[0];
  var chosenImg = chosenElement.getElementsByClassName('img')[0];
  var pictures = pictureSrc.getElementsByClassName('pictures');
  var proportion = chosenElement.getElementsByClassName('imgProportion')[0];

  pictureSrc.onchange = function () {
    chosenImg.src = pictureSrc.value;
    makePreview();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL2ltYWdlL2ltYWdlU2V0dGluZ3MuanMiXSwibmFtZXMiOlsiJCIsIm9uIiwiaW1nQmxvY2tJZCIsInBhcmVudHMiLCJhdHRyIiwiaW1nQmxvY2tFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsb25JZCIsImdldFJhbmRvbSIsImNsb25lIiwiY3NzIiwiaW5zZXJ0QWZ0ZXIiLCJjbG9uZWRJbWciLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW1nV3JhcHBlciIsImNsb25lUmVzaXplclkiLCJjbG9uZVJlc2l6ZXJYWSIsImNsb25lUmVzaXplclgiLCJhZGRGdW5jdGlvbmFsaXR5VG9FbGVtZW50IiwibWFrZVByZXZpZXciLCJ0aHMiLCJlIiwiY29udGVudCIsImltZ0VsZW0iLCJpbWdXcmFwcGVyRWxlbSIsInByb3BvcnRpb24iLCJyZXNpemVyWV9FbGVtIiwicmVzaXplclhZX0VsZW0iLCJvZmYiLCJ0aW1lIiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJzcGxpdCIsImgiLCJNYXRoIiwiZmxvb3IiLCJtIiwicyIsInZhbCIsInByb3AiLCJoaWRlIiwic2hvdyIsInJpZ2h0IiwidHJhbnNpdGlvbiIsImFkZENsYXNzIiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsInBpY3R1cmVTcmMiLCJ2YWx1ZSIsInNyYyIsImNoYW5nZVNyYyIsInByb3BvcnRpb25JRCIsImNoZWNrZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwibWFyZ2luVG9wIiwiaW1nTWFyZ2luQm90dG9tIiwiaW1nTWFyZ2luVG9wIiwiaW1nTWFyZ2luQ2VudGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsImkiLCJmaW5kIiwiaHYiLCJ2diIsImJsciIsInNwcmQiLCJjbHIiLCJoZXhUb1JHQiIsImluc2V0IiwicHJwdHMiLCJpZCIsImhvdXJzIiwibWludXRlIiwic2Vjb25kIiwicmVtb3ZlIiwiYXBwZW5kIiwiY2hvc2VuRWxlbWVudCIsImNob3NlbkltZ1dyYXBwZXIiLCJjaG9zZW5JbWciLCJwaWN0dXJlcyIsIm9uY2hhbmdlIiwiaGV4IiwiYWxwaGEiLCJyIiwic2xpY2UiLCJnIiwiYiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVDLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsVUFBM0IsRUFBdUMsWUFBWTtBQUNqRCxNQUFJQyxVQUFVLEdBQUdGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsT0FBUixDQUFnQixhQUFoQixFQUErQkMsSUFBL0IsQ0FBb0MsSUFBcEMsQ0FBakI7QUFDQSxNQUFJQyxZQUFZLEdBQUdD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SUEsTUFBSUYsS0FBSixFQUFXO0FBQ1QsV0FBTyxVQUFVQyxDQUFWLEdBQWMsSUFBZCxHQUFxQkUsQ0FBckIsR0FBeUIsSUFBekIsR0FBZ0NDLENBQWhDLEdBQW9DLElBQXBDLEdBQTJDSixLQUEzQyxHQUFtRCxHQUExRDtBQUNELEdBRkQsTUFFTyxJQUFJQSxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNyQixXQUFPLFVBQVVDLENBQVYsR0FBYyxJQUFkLEdBQXFCRSxDQUFyQixHQUF5QixJQUF6QixHQUFnQ0MsQ0FBaEMsR0FBb0MsSUFBcEMsR0FBMkNKLEtBQTNDLEdBQW1ELEdBQTFEO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FBTyxTQUFTQyxDQUFULEdBQWEsSUFBYixHQUFvQkUsQ0FBcEIsR0FBd0IsSUFBeEIsR0FBK0JDLENBQS9CLEdBQW1DLEdBQTFDO0FBQ0Q7QUFDRixDIiwiZmlsZSI6ImltYWdlX3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvQVBJL21vZHVsZXMvaW1hZ2UvaW1hZ2VTZXR0aW5ncy5qc1wiKTtcbiIsIiQoJyNtYWluQXJlYScpLm9uKCdjbGljaycsICcuY29weUltZycsIGZ1bmN0aW9uICgpIHtcclxuICB2YXIgaW1nQmxvY2tJZCA9ICQodGhpcykucGFyZW50cygnLmltYWdlQmxvY2snKS5hdHRyKCdpZCcpO1xyXG4gIHZhciBpbWdCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbWdCbG9ja0lkKTtcclxuICB2YXIgY2xvbklkID0gJ2ltYWdlJyArIGdldFJhbmRvbSgpO1xyXG5cclxuICAkKGltZ0Jsb2NrRWxlbSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCBjbG9uSWQpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKS5pbnNlcnRBZnRlcihpbWdCbG9ja0VsZW0pO1xyXG5cclxuICB2YXIgY2xvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbG9uSWQpO1xyXG4gIHZhciBjbG9uZWRJbWcgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWcnKVswXTtcclxuICB2YXIgaW1nV3JhcHBlciA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlV3JhcHBlcicpWzBdO1xyXG4gIHZhciBjbG9uZVJlc2l6ZXJZID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzaXplclknKVswXTtcclxuICB2YXIgY2xvbmVSZXNpemVyWFkgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXNpemVyWFknKVswXTtcclxuICB2YXIgY2xvbmVSZXNpemVyWCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc2l6ZXJYJylbMF07XHJcblxyXG4gIGFkZEZ1bmN0aW9uYWxpdHlUb0VsZW1lbnQoY2xvbklkKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbnZhciB0aHMgPSBudWxsO1xyXG4kKCcjbWFpbkFyZWEnKS5vbignY2xpY2snLCAnLmltZ1NldCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdmFyIGltZ1dyYXBwZXIgPSBudWxsO1xyXG4gIHRocyA9ICQodGhpcykucGFyZW50cygnLmltYWdlQmxvY2snKTtcclxuICB2YXIgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQodGhpcykucGFyZW50cygnLmNvbnRlbnQnKS5hdHRyKCdpZCcpKTtcclxuICB2YXIgaW1nQmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhzLmF0dHIoJ2lkJykpO1xyXG4gIHZhciBpbWdFbGVtID0gaW1nQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZycpWzBdO1xyXG4gIHZhciBpbWdXcmFwcGVyRWxlbSA9IGltZ0Jsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZVdyYXBwZXInKVswXTtcclxuICB2YXIgcHJvcG9ydGlvbiA9IGltZ0Jsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdQcm9wb3J0aW9uJylbMF07XHJcbiAgdmFyIGltZ1dyYXBwZXIgPSBpbWdCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9yZGVyJylbMF07XHJcbiAgdmFyIHJlc2l6ZXJZX0VsZW0gPSBpbWdCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzaXplclknKVswXTtcclxuICB2YXIgcmVzaXplclhZX0VsZW0gPSBpbWdCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzaXplclhZJylbMF07XHJcblxyXG4gIC8v0J/QvtGP0LLQu9C10L3QuNC1INC/0YDQsNCy0L7QuSDQv9Cw0L3QtdC70LgsINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC40L3Qv9GD0YLQvtCyLlxyXG4gICQoJyNyaWdodFNpZGViYXIgPiBkaXY6bm90KCNzZXR0aW5ncy1tbikgaW5wdXQnKS5vZmYoJ2lucHV0Jyk7XHJcbiAgJCgnI3JpZ2h0U2lkZWJhciA+IGRpdjpub3QoI3NldHRpbmdzLW1uKSBpbnB1dCcpLm9mZigpO1xyXG4gICQoJyNpbWctYm9yZGVyLXN0eWxlJykub2ZmKCk7XHJcbiAgJCgnI2ltZy1ib3JkZXItbGVmdC1zdHlsZScpLm9mZigpO1xyXG4gICQoJyNpbWctYm9yZGVyLXJpZ2h0LXN0eWxlJykub2ZmKCk7XHJcbiAgJCgnI2ltZy1ib3JkZXItdG9wLXN0eWxlLXZhbHVlJykub2ZmKCk7XHJcbiAgJCgnI2ltZy1ib3JkZXItYm90dG9tLXN0eWxlJykub2ZmKCk7XHJcbiAgJCgnI2ltZy1hbmltYXRpb24tdHlwZS12YWx1ZScpLm9mZigpO1xyXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyaXB0LScgKyB0aHMuYXR0cignaWQnKSkpIHtcclxuICAgIHZhciB0aW1lID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpLmlubmVySFRNTC5zcGxpdCgnLCcpWzFdKSAvIDEwMDA7XHJcbiAgICB2YXIgaCA9IE1hdGguZmxvb3IodGltZSAvIDM2MDApO1xyXG4gICAgdmFyIG0gPSBNYXRoLmZsb29yKCh0aW1lIC0gMzYwMCAqIGgpIC8gNjApO1xyXG4gICAgdmFyIHMgPSB0aW1lIC0gKDM2MDAgKiBoICsgNjAgKiBtKTtcclxuICAgICQoJyNpbWctdGltZW91dC1ob3VyLXZhbHVlJykudmFsKGgpO1xyXG4gICAgJCgnI2ltZy10aW1lb3V0LW1pbnV0ZS12YWx1ZScpLnZhbChtKTtcclxuICAgICQoJyNpbWctdGltZW91dC1zZWNvbmQtdmFsdWUnKS52YWwocyk7XHJcbiAgICAkKCcjaW1nLWRpc3BsYXktbm9uZS12YWx1ZScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnI2ltZy10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoMCk7XHJcbiAgICAkKCcjaW1nLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKDApO1xyXG4gICAgJCgnI2ltZy10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgwKTtcclxuICB9XHJcbiAgJCgnI3JpZ2h0U2lkZWJhciA+IGRpdicpLmhpZGUoKTtcclxuICAkKCcjc2V0dGluZ3MtbW4nKS5oaWRlKCk7XHJcbiAgJCgnI21haW4tYmxvY2stc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3ZpZGVvLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyN0ZXh0LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNidXR0b24tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2Zvcm0tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3N1YnNjcmliZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGluZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGlzdC1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjaW1hZ2Utc2V0dGluZ3MnKS5zaG93KCk7XHJcbiAgJCgnI3JpZ2h0U2lkZWJhcicpLmNzcyh7XHJcbiAgICByaWdodDogJzBweCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnMC40cyBhbGwgZWFzZS1pbidcclxuICB9KS5hZGRDbGFzcygnYWN0aXZhdGVkJyk7XHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWRkaW5nUmFkaW9FdmVyeScpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWRkaW5nQWxsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZGRpbmdFdmVyeScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZGRpbmdSYWRpb0FsbCcpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWRkaW5nQWxsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWRkaW5nRXZlcnknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ0JvcmRlclJhZGlvRXZlcnknKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nQm9yZGVyQWxsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ0JvcmRlckV2ZXJ5Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nQm9yZGVyUmFkaW9BbGwnKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nQm9yZGVyQWxsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdCb3JkZXJFdmVyeScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfSkoKTtcclxuXHJcblxyXG4gIC8v0JjQt9C80LXQvdC10L3QuNC1IHNyYyDQutCw0YDRgtC40L3QvtC6XHJcbiAgcGljdHVyZVNyYy52YWx1ZSA9IGltZ0VsZW0uc3JjO1xyXG4gIGNoYW5nZVNyYyh0aHMuYXR0cignaWQnKSk7XHJcblxyXG4gIC8v0J3QsNGB0YLRgNC+0LnQutC4INC/0YDQvtC/0L7RgNGG0LjQuFxyXG4gIGlmIChwcm9wb3J0aW9uLnZhbHVlID09IFwiMFwiICYmIHByb3BvcnRpb25JRC5jaGVja2VkKSB7XHJcbiAgICBwcm9wb3J0aW9uSUQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAocHJvcG9ydGlvbi52YWx1ZSA9PSBcIjFcIiAmJiAhcHJvcG9ydGlvbklELmNoZWNrZWQpIHtcclxuICAgIHByb3BvcnRpb25JRC5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcbiAgcHJvcG9ydGlvbklELm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAocHJvcG9ydGlvbklELmNoZWNrZWQpIHtcclxuICAgICAgcHJvcG9ydGlvbi52YWx1ZSA9IFwiMVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcG9ydGlvbi52YWx1ZSA9IFwiMFwiO1xyXG4gICAgfVxyXG4gIH1cclxuICAvL9CS0LXRgNGC0LjQutCw0LvRjNC90L7QtSDQstGL0YDQsNCy0L3QuNCy0LDQvdC40LVcclxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShpbWdCbG9ja0VsZW0pLm1hcmdpblRvcCA9PSAnYXV0bycpIHtcclxuICAgIGltZ01hcmdpbkJvdHRvbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIGltZ01hcmdpblRvcC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBpbWdNYXJnaW5DZW50ZXIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShpbWdCbG9ja0VsZW0pLm1hcmdpbkJvdHRvbSA9PSAnYXV0bycpIHtcclxuICAgIGltZ01hcmdpbkJvdHRvbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBpbWdNYXJnaW5Ub3AuY2hlY2tlZCA9IHRydWU7XHJcbiAgICBpbWdNYXJnaW5DZW50ZXIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShpbWdCbG9ja0VsZW0pLm1hcmdpblRvcCA9PSAnMHB4JyAmJiBnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luQm90dG9tID09ICcwcHgnKSB7XHJcbiAgICBpbWdNYXJnaW5Cb3R0b20uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgaW1nTWFyZ2luVG9wLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIGltZ01hcmdpbkNlbnRlci5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcbiAgaW1nTWFyZ2luVG9wLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpbWdCbG9ja0VsZW0uc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XHJcbiAgICBpbWdCbG9ja0VsZW0uc3R5bGUubWFyZ2luQm90dG9tID0gJ2F1dG8nO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuXHJcbiAgICAvLyAgICByZXNpemVyWV9FbGVtLnN0eWxlLnRvcCA9ICcxMDAlJztcclxuICAgIC8vICAgIHJlc2l6ZXJZX0VsZW0uc3R5bGUubWFyZ2luVG9wID0gJy0xcmVtJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLnRvcCA9ICcxMDAlJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLmxlZnQgPSAnMTAwJSc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnLTFyZW0nO1xyXG4gICAgLy8gICAgcmVzaXplclhZX0VsZW0uc3R5bGUubWFyZ2luTGVmdCA9ICctMXJlbSc7XHJcbiAgfVxyXG4gIGltZ01hcmdpbkNlbnRlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaW1nQmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xyXG4gICAgaW1nQmxvY2tFbGVtLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcwcHgnO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuXHJcbiAgICAvLyAgICByZXNpemVyWV9FbGVtLnN0eWxlLnRvcCA9ICcxMDAlJztcclxuICAgIC8vICAgIHJlc2l6ZXJZX0VsZW0uc3R5bGUubWFyZ2luVG9wID0gJy0xcmVtJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLnRvcCA9ICcxMDAlJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLmxlZnQgPSAnMTAwJSc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnLTFyZW0nO1xyXG4gICAgLy8gICAgcmVzaXplclhZX0VsZW0uc3R5bGUubWFyZ2luTGVmdCA9ICctMXJlbSc7XHJcbiAgfVxyXG4gIGltZ01hcmdpbkJvdHRvbS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaW1nQmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICdhdXRvJztcclxuICAgIGltZ0Jsb2NrRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcblxyXG4gICAgLy8gICAgcmVzaXplcllfRWxlbS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAvLyAgICByZXNpemVyWV9FbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLnRvcCA9ICcwJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xyXG4gIH1cclxuXHJcbiAgLy/QndCw0YHRgtGA0L7QudC60Lgg0L7RgtGB0YLRg9C/0L7QslxyXG5cclxuICAkKCcjaW1nLXBhZGRpbmctdmFsdWUnKS52YWwocGFyc2VJbnQoJChpbWdXcmFwcGVyKS5jc3MoJ3BhZGRpbmcnKSkpO1xyXG4gICQoJyNpbWctcGFkZGluZy12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKGltZ1dyYXBwZXIpLmNzcygncGFkZGluZycpKSk7XHJcblxyXG4gICQoJyNpbWctbWFyZ2luLXRvcC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luVG9wKSk7XHJcbiAgJCgnI2ltZy1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoaW1nQmxvY2tFbGVtKS5tYXJnaW5Ub3ApKTtcclxuICAkKCcjaW1nLW1hcmdpbi1yaWdodC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luUmlnaHQpKTtcclxuICAkKCcjaW1nLW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luUmlnaHQpKTtcclxuICAkKCcjaW1nLW1hcmdpbi1ib3R0b20tdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShpbWdCbG9ja0VsZW0pLm1hcmdpbkJvdHRvbSkpO1xyXG4gICQoJyNpbWctbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luQm90dG9tKSk7XHJcbiAgJCgnI2ltZy1tYXJnaW4tbGVmdC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luTGVmdCkpO1xyXG4gICQoJyNpbWctbWFyZ2luLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShpbWdCbG9ja0VsZW0pLm1hcmdpbkxlZnQpKTtcclxuXHJcbiAgJCgnI2ltZy1wYWRkaW5nLXRvcC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ1dyYXBwZXIpLnBhZGRpbmdUb3ApKTtcclxuICAkKCcjaW1nLXBhZGRpbmctdG9wLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoaW1nV3JhcHBlcikucGFkZGluZ1RvcCkpO1xyXG4gICQoJyNpbWctcGFkZGluZy1yaWdodC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ1dyYXBwZXIpLnBhZGRpbmdSaWdodCkpO1xyXG4gICQoJyNpbWctcGFkZGluZy1yaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ1dyYXBwZXIpLnBhZGRpbmdSaWdodCkpO1xyXG4gICQoJyNpbWctcGFkZGluZy1ib3R0b20tdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShpbWdXcmFwcGVyKS5wYWRkaW5nQm90dG9tKSk7XHJcbiAgJCgnI2ltZy1wYWRkaW5nLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ1dyYXBwZXIpLnBhZGRpbmdCb3R0b20pKTtcclxuICAkKCcjaW1nLXBhZGRpbmctbGVmdC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ1dyYXBwZXIpLnBhZGRpbmdMZWZ0KSk7XHJcbiAgJCgnI2ltZy1wYWRkaW5nLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShpbWdXcmFwcGVyKS5wYWRkaW5nTGVmdCkpO1xyXG4gICQoJyNpbWctbWFyZ2luLXRvcC12YWx1ZSwgI2ltZy1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnbWFyZ2luLXRvcCcsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJCh0aHMpLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tdG9wOicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctbWFyZ2luLXRvcC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNpbWctbWFyZ2luLXRvcC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNpbWctbWFyZ2luLXRvcC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI2ltZy1tYXJnaW4tcmlnaHQtdmFsdWUsICNpbWctbWFyZ2luLXJpZ2h0LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnbWFyZ2luLXJpZ2h0JywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHRocykuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi1yaWdodDonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgfSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiaW1nLW1hcmdpbi1yaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNpbWctbWFyZ2luLXJpZ2h0LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2ltZy1tYXJnaW4tcmlnaHQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNpbWctbWFyZ2luLWJvdHRvbS12YWx1ZSwgI2ltZy1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnbWFyZ2luLWJvdHRvbScsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJCh0aHMpLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tYm90dG9tOicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctbWFyZ2luLWJvdHRvbS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNpbWctbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNpbWctbWFyZ2luLWJvdHRvbS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI2ltZy1tYXJnaW4tbGVmdC12YWx1ZSwgI2ltZy1tYXJnaW4tbGVmdC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ21hcmdpbi1sZWZ0JywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHRocykuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi1sZWZ0OicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctbWFyZ2luLWxlZnQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjaW1nLW1hcmdpbi1sZWZ0LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2ltZy1tYXJnaW4tbGVmdC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNpbWctcGFkZGluZy12YWx1ZSwgI2ltZy1wYWRkaW5nLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ3BhZGRpbmcnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiaW1nLXBhZGRpbmctdmFsdWVcIikge1xyXG4gICAgICAkKCcjaW1nLXBhZGRpbmctdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjaW1nLXBhZGRpbmctdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNpbWctcGFkZGluZy10b3AtdmFsdWUsICNpbWctcGFkZGluZy10b3AtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygncGFkZGluZy10b3AnLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQoaW1nV3JhcHBlcikuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ3BhZGRpbmctdG9wOicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctcGFkZGluZy10b3AtdmFsdWVcIikge1xyXG4gICAgICAkKCcjaW1nLXBhZGRpbmctdG9wLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2ltZy1wYWRkaW5nLXRvcC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI2ltZy1wYWRkaW5nLXJpZ2h0LXZhbHVlLCAjaW1nLXBhZGRpbmctcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygncGFkZGluZy1yaWdodCcsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChpbWdXcmFwcGVyKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAncGFkZGluZy1yaWdodDonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgfSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiaW1nLXBhZGRpbmctcmlnaHQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjaW1nLXBhZGRpbmctcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjaW1nLXBhZGRpbmctcmlnaHQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNpbWctcGFkZGluZy1ib3R0b20tdmFsdWUsICNpbWctcGFkZGluZy1ib3R0b20tdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygncGFkZGluZy1ib3R0b20nLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQoaW1nV3JhcHBlcikuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ3BhZGRpbmctYm90dG9tOicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctcGFkZGluZy1ib3R0b20tdmFsdWVcIikge1xyXG4gICAgICAkKCcjaW1nLXBhZGRpbmctYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2ltZy1wYWRkaW5nLWJvdHRvbS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI2ltZy1wYWRkaW5nLWxlZnQtdmFsdWUsICNpbWctcGFkZGluZy1sZWZ0LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ3BhZGRpbmctbGVmdCcsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChpbWdXcmFwcGVyKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAncGFkZGluZy1sZWZ0OicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctcGFkZGluZy1sZWZ0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2ltZy1wYWRkaW5nLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjaW1nLXBhZGRpbmctbGVmdC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0J3QsNGB0YLRgNC+0LnQutC4INCy0YHQtdGFINCz0YDQsNC90LjRhiDQuNC30L7QsdGA0LDQttC10L3QuNGPXHJcbiAgJCgnI2ltZy1ib3JkZXItdmFsdWUnKS52YWwocGFyc2VJbnQoJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci13aWR0aCcpKSk7XHJcbiAgJCgnI2ltZy1ib3JkZXItdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci13aWR0aCcpKSk7XHJcbiAgJCgnI2ltZy1ib3JkZXItcmFkaXVzJykudmFsKHBhcnNlSW50KCQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItcmFkaXVzJykpKTtcclxuICAkKCcjaW1nLWJvcmRlci1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjaW1nLWJvcmRlci12YWx1ZSwgI2ltZy1ib3JkZXItdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImltZy1ib3JkZXItdmFsdWVcIikge1xyXG4gICAgICAkKCcjaW1nLWJvcmRlci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNpbWctYm9yZGVyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2ltZy1ib3JkZXItcmFkaXVzLCAjaW1nLWJvcmRlci1yYWRpdXMtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICQoaW1nRWxlbSkuY3NzKCdib3JkZXItcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImltZy1ib3JkZXItcmFkaXVzXCIpIHtcclxuICAgICAgJCgnI2ltZy1ib3JkZXItcmFkaXVzLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2ltZy1ib3JkZXItcmFkaXVzJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2ltZy1ib3JkZXItc3R5bGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2JvcmRlci1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLWNvbG9yJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQuCDQtNC70Y8g0LLQtdGA0YXQvdC10Lkg0LPRgNCw0L3QuNGG0Ysg0LHQu9C+0LrQsCovXHJcblxyXG4gICQoJyNpbWctYm9yZGVyLXRvcC12YWx1ZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItdG9wLXdpZHRoJykpKTtcclxuICAkKCcjaW1nLWJvcmRlci10b3AtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLXRvcC13aWR0aCcpKSk7XHJcbiAgJCgnI2ltZy1ib3JkZXItbGVmdC10b3AtcmFkaXVzJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnKSkpO1xyXG4gICQoJyNpbWctYm9yZGVyLWxlZnQtdG9wLXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJykpKTtcclxuXHJcbiAgJCgnI2ltZy1ib3JkZXItdG9wLXZhbHVlLCAjaW1nLWJvcmRlci10b3AtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLXRvcC13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctYm9yZGVyLXRvcC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNpbWctYm9yZGVyLXRvcC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNpbWctYm9yZGVyLXRvcC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNpbWctYm9yZGVyLWxlZnQtdG9wLXJhZGl1cywgI2ltZy1ib3JkZXItbGVmdC10b3AtcmFkaXVzLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdFbGVtKS5jc3MoJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctYm9yZGVyLWxlZnQtdG9wLXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNpbWctYm9yZGVyLWxlZnQtdG9wLXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNpbWctYm9yZGVyLWxlZnQtdG9wLXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI2ltZy1ib3JkZXItdG9wLXN0eWxlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItdG9wLXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjaW1nLWJvcmRlci10b3AtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci10b3AtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC/0YDQsNCy0L7QuSDQs9GA0LDQvdC40YbRiyDQsdC70L7QutCwKi9cclxuICAkKCcjaW1nLWJvcmRlci1yaWdodC12YWx1ZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItcmlnaHQtd2lkdGgnKSkpO1xyXG4gICQoJyNpbWctYm9yZGVyLXJpZ2h0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcpKSk7XHJcbiAgJCgnI2ltZy1ib3JkZXItcmlnaHQtcmFkaXVzJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJykpKTtcclxuICAkKCcjaW1nLWJvcmRlci1yaWdodC1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjaW1nLWJvcmRlci1yaWdodC12YWx1ZSwgI2ltZy1ib3JkZXItcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImltZy1ib3JkZXItcmlnaHQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjaW1nLWJvcmRlci1yaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNpbWctYm9yZGVyLXJpZ2h0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjaW1nLWJvcmRlci1yaWdodC1yYWRpdXMsICNpbWctYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nRWxlbSkuY3NzKCdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctYm9yZGVyLXJpZ2h0LXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNpbWctYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNpbWctYm9yZGVyLXJpZ2h0LXJhZGl1c2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNpbWctYm9yZGVyLXJpZ2h0LXN0eWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItcmlnaHQtc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNpbWctYm9yZGVyLXJpZ2h0LWNvbG9yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItcmlnaHQtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC90LjQttC90LXQuSDQs9GA0LDQvdC40YbRiyDQsdC70L7QutCwKi9cclxuICAkKCcjaW1nLWJvcmRlci1ib3R0b20tdmFsdWUnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcpKSk7XHJcbiAgJCgnI2ltZy1ib3JkZXItYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkpO1xyXG4gICQoJyNpbWctYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnKSkpO1xyXG4gICQoJyNpbWctYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjaW1nLWJvcmRlci1ib3R0b20tdmFsdWUsICNpbWctYm9yZGVyLWJvdHRvbS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItYm90dG9tLXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImltZy1ib3JkZXItYm90dG9tLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2ltZy1ib3JkZXItYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2ltZy1ib3JkZXItYm90dG9tLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2ltZy1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgI2ltZy1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cy1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nRWxlbSkuY3NzKCdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcIikge1xyXG4gICAgICAkKCcjaW1nLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2ltZy1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNpbWctYm9yZGVyLWJvdHRvbS1zdHlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLWJvdHRvbS1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2ltZy1ib3JkZXItYm90dG9tLWNvbG9yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItYm90dG9tLWNvbG9yJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0LHQu9C+0LrQsCovXHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INC00LvRjyDQu9C10LLQvtC5INCz0YDQsNC90LjRhtGLINCx0LvQvtC60LAqL1xyXG4gICQoJyNpbWctYm9yZGVyLWxlZnQtdmFsdWUnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSkpO1xyXG4gICQoJyNpbWctYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSkpO1xyXG4gICQoJyNpbWctYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJykpKTtcclxuICAkKCcjaW1nLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycpKSk7XHJcblxyXG4gICQoJyNpbWctYm9yZGVyLWxlZnQtdmFsdWUsICNpbWctYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiaW1nLWJvcmRlci1sZWZ0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2ltZy1ib3JkZXItbGVmdC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNpbWctYm9yZGVyLWxlZnQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNpbWctYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgI2ltZy1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdFbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNpbWctYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNpbWctYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNpbWctYm9yZGVyLWxlZnQtc3R5bGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci1sZWZ0LXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjaW1nLWJvcmRlci1sZWZ0LWNvbG9yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItbGVmdC1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQmtC+0L3QtdGGINCx0LvQvtC60LAqL1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQuCDRgtC10L3QtdC5Ki9cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nU2hhZG93UmFkaW9PbicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLXNoYWRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdmFyIGh2ID0gJCgnI2ltZy1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNpbWctc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNpbWctc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNpbWctc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjaW1nLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjaW1nLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI2ltZy1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGlmICgkKCcjaW1nLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChpbWdFbGVtKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nU2hhZG93UmFkaW9PZmYnKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZy1zaGFkb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JveC1zaGFkb3cnLCAnbm9uZScpO1xyXG4gICAgJChpbWdFbGVtKS5jc3MoJ2JveC1zaGFkb3cnLCAnbm9uZScpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG4gICQoJyNpbWctc2hhZG93LWhvcml6b250YWwtdmFsdWUsICNpbWctc2hhZG93LWhvcml6b250YWwtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNpbWctc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNpbWctc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNpbWctc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjaW1nLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjaW1nLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI2ltZy1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGlmICgkKCcjaW1nLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChpbWdFbGVtKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiaW1nLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2ltZy1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNpbWctc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjaW1nLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZSwgI2ltZy1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjaW1nLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI2ltZy1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI2ltZy1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNpbWctc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNpbWctc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjaW1nLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgaWYgKCQoJyNpbWctc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuICAgICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGltZ0VsZW0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctc2hhZG93LXZlcnRpY2FsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2ltZy1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjaW1nLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNpbWctc2hhZG93LWJsdXItdmFsdWUsICNpbWctc2hhZG93LWJsdXItdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjaW1nLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI2ltZy1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNpbWctc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjaW1nLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjaW1nLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI2ltZy1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGlmICgkKCcjaW1nLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChpbWdFbGVtKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiaW1nLXNoYWRvdy1ibHVyLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2ltZy1zaGFkb3ctYmx1ci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNpbWctc2hhZG93LWJsdXItdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjaW1nLXNoYWRvdy1zcHJlYWQtdmFsdWUsICNpbWctc2hhZG93LXNwcmVhZC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNpbWctc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjaW1nLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjaW1nLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHNwcmQgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjaW1nLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjaW1nLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI2ltZy1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGlmICgkKCcjaW1nLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChpbWdFbGVtKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiaW1nLXNoYWRvdy1zcHJlYWQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjaW1nLXNoYWRvdy1zcHJlYWQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjaW1nLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjaW1nLXNoYWRvdy1vcGFjaXR5LXZhbHVlLCAjaW1nLXNoYWRvdy1vcGFjaXR5LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI2ltZy1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNpbWctc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNpbWctc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNpbWctc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjaW1nLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKHRoaXMpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBpbnNldCA9ICQoJyNpbWctc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIHNwcmQgKyBcIiBcIiArIGNsciArIFwiIFwiICsgaW5zZXQ7XHJcbiAgICBpZiAoJCgnI2ltZy1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xyXG4gICAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoaW1nRWxlbSkuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImltZy1zaGFkb3ctb3BhY2l0eS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNpbWctc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjaW1nLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2ltZy1zaGFkb3ctY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI2ltZy1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNpbWctc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNpbWctc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNpbWctc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKHRoaXMpLnZhbCgpLCAkKCcjaW1nLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI2ltZy1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGlmICgkKCcjaW1nLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChpbWdFbGVtKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjaW1nLXNoYWRvdy1pbnNldC12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjaW1nLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI2ltZy1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI2ltZy1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI2ltZy1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNpbWctc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNpbWctc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgaWYgKCQoJyNpbWctc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuICAgICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGltZ0VsZW0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQvdCw0YHRgtGA0L7QtdC6INGC0LXQvdC10LkqL1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQsCDQsNC90LjQvNCw0YbQuNC4Ki9cclxuXHJcbiAgJCgnI2ltZy1hbmltYXRpb24tdHlwZS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKSAhPSBcIm5vbmVcIikge1xyXG4gICAgICAkKGltZ0VsZW0pLmNzcygnYW5pbWF0aW9uLW5hbWUnLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgJChpbWdFbGVtKS5jc3MoJ2FuaW1hdGlvbi1kZWxheScsICQoJyNpbWctYW5pbWF0aW9uLWRlbGF5LXZhbHVlJykudmFsKCkgKyAncycpO1xyXG4gICAgICAkKGltZ0VsZW0pLmNzcygnYW5pbWF0aW9uLWR1cmF0aW9uJywgJCgnI2ltZy1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUnKS52YWwoKSArICdzJyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjaW1nLWFuaW1hdGlvbi1kZWxheS12YWx1ZSwgI2ltZy1hbmltYXRpb24tZGVsYXktdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ0VsZW0pLmNzcygnYW5pbWF0aW9uLWRlbGF5JywgJCh0aGlzKS52YWwoKSArICdzJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiaW1nLWFuaW1hdGlvbi1kZWxheS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNpbWctYW5pbWF0aW9uLWRlbGF5LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2ltZy1hbmltYXRpb24tZGVsYXktdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjaW1nLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZSwgI2ltZy1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ0VsZW0pLmNzcygnYW5pbWF0aW9uLWR1cmF0aW9uJywgJCh0aGlzKS52YWwoKSArICdzJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiaW1nLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNpbWctYW5pbWF0aW9uLWR1cmF0aW9uLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2ltZy1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0L3QsNGB0YLRgNC+0LXQuiDQsNC90LjQvNCw0YbQuNC4Ki9cclxuXHJcbiAgLyrQkdC70L7QuiDRgtCw0LnQvNCw0YPRgtCwKi9cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tISEh0KHQlNCV0JvQkNCi0KwhISEtLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLWRpc3BsYXktbm9uZS12YWx1ZScpLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLWRpc3BsYXktbm9uZS12YWx1ZScpLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gICQoJyNpbWctZGlzcGxheS1ub25lLXZhbHVlLCAjaW1nLXRpbWVvdXQtaG91ci12YWx1ZSwgI2ltZy10aW1lb3V0LWhvdXItdmFsdWUtcmFuZ2UsICNpbWctdGltZW91dC1taW51dGUtdmFsdWUsICNpbWctdGltZW91dC1taW51dGUtdmFsdWUtcmFuZ2UsICNpbWctdGltZW91dC1zZWNvbmQtdmFsdWUsICNpbWctdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaWQgPSB0aHMuYXR0cignaWQnKTtcclxuXHJcbiAgICB2YXIgaG91cnMgPSAkKCcjaW1nLXRpbWVvdXQtaG91ci12YWx1ZScpLnZhbCgpICogMzYwMDtcclxuICAgIHZhciBtaW51dGUgPSAkKCcjaW1nLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKCkgKiA2MDtcclxuICAgIHZhciBzZWNvbmQgPSBwYXJzZUludCgkKCcjaW1nLXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKCkpO1xyXG5cclxuICAgIHZhciB0aW1lID0gaG91cnMgKyBtaW51dGUgKyBzZWNvbmQ7XHJcblxyXG4gICAgdGltZSA9IHRpbWUgKiAxMDAwO1xyXG5cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZy1kaXNwbGF5LW5vbmUtdmFsdWUnKS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgJCgnI3NjcmlwdC0nICsgaWQpLnJlbW92ZSgpO1xyXG4gICAgICAkKCcjbWFpbkFyZWEnKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiY29kZVwiIGlkPVwic2NyaXB0LScgKyBpZCArICdcIiBjbGFzcz1cImNvZGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+JyArIFtpZCwgdGltZV0gKyAnPC9zcGFuPicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3NjcmlwdC0nICsgaWQpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImltZy10aW1lb3V0LWhvdXItdmFsdWVcIikge1xyXG4gICAgICAkKCcjaW1nLXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiaW1nLXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZVwiKSB7XHJcbiAgICAgICQoJyNpbWctdGltZW91dC1ob3VyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctdGltZW91dC1taW51dGUtdmFsdWVcIikge1xyXG4gICAgICAkKCcjaW1nLXRpbWVvdXQtbWludXRlLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctdGltZW91dC1taW51dGUtdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjaW1nLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctdGltZW91dC1zZWNvbmQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjaW1nLXRpbWVvdXQtc2Vjb25kLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJpbWctdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjaW1nLXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwINGC0LDQudC80LDRg9GC0LAqL1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlU3JjKGlkKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBjb25zdCBjaG9zZW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gIGNvbnN0IGNob3NlbkltZ1dyYXBwZXIgPSBjaG9zZW5FbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlV3JhcHBlcicpWzBdO1xyXG4gIGNvbnN0IGNob3NlbkltZyA9IGNob3NlbkVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nJylbMF07XHJcbiAgY29uc3QgcGljdHVyZXMgPSBwaWN0dXJlU3JjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BpY3R1cmVzJyk7XHJcbiAgY29uc3QgcHJvcG9ydGlvbiA9IGNob3NlbkVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nUHJvcG9ydGlvbicpWzBdO1xyXG5cclxuICBwaWN0dXJlU3JjLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY2hvc2VuSW1nLnNyYyA9IHBpY3R1cmVTcmMudmFsdWU7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxufVxyXG5cclxuLyrQn9C10YDQtdCy0L7QtCBoZXgg0LIgUkdCICjQs9C00LUt0YLQviDRgtC+0YfQvdC+INC40YHQv9C+0LvRjNC30YPQtdGC0YHRjywg0YPQttC1INC90LUg0L/QvtC80L3RjikqL1xyXG5mdW5jdGlvbiBoZXhUb1JHQihoZXgsIGFscGhhKSB7XHJcbiAgdmFyIHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KSxcclxuICAgIGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KSxcclxuICAgIGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KTtcclxuXHJcbiAgaWYgKGFscGhhKSB7XHJcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcclxuICB9IGVsc2UgaWYgKGFscGhhID09IDApIHtcclxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCJyZ2IoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIilcIjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==