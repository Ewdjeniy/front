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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/modules/button/buttonSettings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/modules/button/buttonSettings.js":
/*!**************************************************!*\
  !*** ./src/API/modules/button/buttonSettings.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  $('#mainArea').on('click', '.copyButton', function () {
    var buttonBlockId = $(this).parents('.buttonBlock').attr('id');
    var buttonBlockElem = document.getElementById(buttonBlockId);
    var clonId = 'button' + getRandom();
    $(buttonBlockElem).clone(true).attr('id', clonId).insertAfter(buttonBlockElem);
    addFunctionalityToButtonElement(clonId);
    makePreview();
  });
  var ths = null;
  var buttonBlockElem = null;
  var buttonWrapperElem = null;
  var buttonElem = null;
  var editor = null;
  $('#mainArea').on('click', '.buttonSet', function (e) {
    ths = $(this).parents('.buttonBlock');
    buttonBlockElem = document.getElementById(ths.attr('id'));
    buttonWrapperElem = buttonBlockElem.getElementsByClassName('buttonWrapper')[0];
    buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
    editor = buttonElem.getElementsByTagName('div')[0]; //Появление правой панели, инициализация инпутов.

    $('#rightSidebar > div:not(#settings-mn) input').off('input');
    $('#rightSidebar > div:not(#settings-mn) input').off();
    $('#button-border-style').off();
    $('#button-border-left-style').off();
    $('#button-border-right-style').off();
    $('#button-border-top-style-value').off();
    $('#button-border-bottom-style').off();
    $('#button-animation-type-value').off();

    if (document.getElementById('script-' + ths.attr('id'))) {
      var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
      var h = Math.floor(time / 3600);
      var m = Math.floor((time - 3600 * h) / 60);
      var s = time - (3600 * h + 60 * m);
      $('#button-timeout-hour-value').val(h);
      $('#button-timeout-minute-value').val(m);
      $('#button-timeout-second-value').val(s);
      $('#button-display-none-value').prop('checked', true);
    } else {
      $('#button-timeout-hour-value').val(0);
      $('#button-timeout-minute-value').val(0);
      $('#button-timeout-second-value').val(0);
    }

    $('#rightSidebar > div').hide();
    $('#settings-mn').hide();
    $('#main-block-settings').hide();
    $('#content-block-settings').hide();
    $('#image-settings').hide();
    $('#video-settings').hide();
    $('#text-settings').hide();
    $('#form-settings').hide();
    $('#subscribe-settings').hide();
    $('#line-settings').hide();
    $('#list-settings').hide();
    $('#button-settings').show();
    $('#rightSidebar').css({
      right: '0px',
      transition: '0.4s all ease-in'
    }).addClass('activated'); //Настройки отступов

    $('#button-margin-top-value').val(parseInt(getComputedStyle(buttonBlockElem).marginTop));
    $('#button-margin-top-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginTop));
    $('#button-margin-right-value').val(parseInt(getComputedStyle(buttonBlockElem).marginRight));
    $('#button-margin-right-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginRight));
    $('#button-margin-bottom-value').val(parseInt(getComputedStyle(buttonBlockElem).marginBottom));
    $('#button-margin-bottom-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginBottom));
    $('#button-margin-left-value').val(parseInt(getComputedStyle(buttonBlockElem).marginLeft));
    $('#button-margin-left-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginLeft));
    $('#button-margin-top-value, #button-margin-top-value-range').on('input', function () {
      $(ths).css('margin-top', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-top:' + val + 'px !important;';
      });

      if ($(this).attr('id') == "button-margin-top-value") {
        $('#button-margin-top-value-range').val($(this).val());
      } else {
        $('#button-margin-top-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-margin-right-value, #button-margin-right-value-range').on('input', function () {
      $(ths).css('margin-right', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-right:' + val + 'px !important;';
      });

      if ($(this).attr('id') == "button-margin-right-value") {
        $('#button-margin-right-value-range').val($(this).val());
      } else {
        $('#button-margin-right-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-margin-bottom-value, #button-margin-bottom-value-range').on('input', function () {
      $(ths).css('margin-bottom', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-bottom:' + val + 'px !important;';
      });

      if ($(this).attr('id') == "button-margin-bottom-value") {
        $('#button-margin-bottom-value-range').val($(this).val());
      } else {
        $('#button-margin-bottom-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-margin-left-value, #button-margin-left-value-range').on('input', function () {
      $(ths).css('margin-left', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-left:' + val + 'px !important;';
      });

      if ($(this).attr('id') == "button-margin-left-value") {
        $('#button-margin-left-value-range').val($(this).val());
      } else {
        $('#button-margin-left-value').val($(this).val());
      }

      makePreview();
    }); //Вертикальное выравнивание

    if (getComputedStyle(buttonBlockElem).marginTop == 'auto') {
      buttonMarginBottom.checked = true;
      buttonMarginTop.checked = false;
      buttonMarginCenter.checked = false;
    } else if (getComputedStyle(buttonBlockElem).marginBottom == 'auto') {
      buttonMarginBottom.checked = false;
      buttonMarginTop.checked = true;
      buttonMarginCenter.checked = false;
    } else if (getComputedStyle(buttonBlockElem).marginTop == '0px' && getComputedStyle(buttonBlockElem).marginBottom == '0px') {
      buttonMarginBottom.checked = false;
      buttonMarginTop.checked = false;
      buttonMarginCenter.checked = true;
    }

    buttonMarginTop.onclick = function () {
      buttonBlockElem.style.marginTop = '0px';
      buttonBlockElem.style.marginBottom = 'auto';
      makePreview();
    };

    buttonMarginCenter.onclick = function () {
      buttonBlockElem.style.marginTop = '0px';
      buttonBlockElem.style.marginBottom = '0px';
      makePreview();
    };

    buttonMarginBottom.onclick = function () {
      buttonBlockElem.style.marginTop = 'auto';
      buttonBlockElem.style.marginBottom = '0px';
      makePreview();
    }; //Выбор шрифта


    buttonFontFamilySelect.value = getComputedStyle(buttonElem).fontFamily;

    buttonFontFamilySelect.onchange = function () {
      buttonElem.style.fontFamily = buttonFontFamilySelect.value;
      makePreview();
    };

    if (getComputedStyle(buttonElem).fontWeight == '900') {
      buttonBold.checked = true;
    } else {
      buttonBold.checked = false;
    }

    buttonBold.onclick = function () {
      if (buttonBold.checked) {
        buttonElem.style.fontWeight = '900';
      } else {
        buttonElem.style.fontWeight = 'normal';
      }

      makePreview();
    }; //Размер шрифта  


    $('#button-font-size-value').val(parseInt(getComputedStyle(buttonElem).fontSize));
    $('#button-font-size-value-range').val(parseInt(getComputedStyle(buttonElem).fontSize));
    $('#button-font-size-value, #button-font-size-value-range').on('input', function () {
      $(buttonElem).css('font-size', $(this).val() + 'px');

      if ($(this).attr('id') == "button-font-size-value") {
        $('#button-font-size-value-range').val($(this).val());
      } else {
        $('#button-font-size-value').val($(this).val());
      }

      makePreview();
    }); //Межстрочный интервал

    $('#button-line-height-value').val(parseInt(getComputedStyle(buttonElem).lineHeight));
    $('#button-line-height-value-range').val(parseInt(getComputedStyle(buttonElem).lineHeight));
    $('#button-line-height-value, #button-line-height-value-range').on('input', function () {
      $(buttonElem).css('line-height', $(this).val() + 'px');

      if ($(this).attr('id') == "button-line-height-value") {
        $('#button-line-height-value-range').val($(this).val());
      } else {
        $('#button-line-height-value').val($(this).val());
      }

      makePreview();
    }); //Редактирование

    buttonEditor.onclick = function () {
      buttonWrapperElem.innerHTML = deleteLink(buttonWrapperElem);
      addFunctionalityToButtonElement($(ths).attr('id'));
      buttonElem = buttonWrapperElem.getElementsByClassName('button')[0];
      editor = buttonElem.getElementsByTagName('div')[0];
      editor.contentEditable = true;
      editor.focus();

      editor.onblur = function () {
        if (linkIndicator.innerHTML != 'отсутствует') {
          if (buttonTarget.checked == true) {
            buttonElem.outerHTML = '<a href="' + linkIndicator.innerHTML + '" target="_blank">' + buttonElem.outerHTML + '</a>';
            buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
            editor = buttonElem.getElementsByTagName('div')[0];
          } else {
            buttonElem.outerHTML = '<a href="' + linkIndicator.innerHTML + '" target="_self">' + buttonElem.outerHTML + '</a>';
            buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
            editor = buttonElem.getElementsByTagName('div')[0];
          }
        }

        editor.contentEditable = false;
        makePreview();
      };
    }; //Превращение в ссылку


    if (buttonWrapperElem.getElementsByTagName('a')[0]) {
      linkIndicator.innerHTML = buttonWrapperElem.getElementsByTagName('a')[0].href;
    }

    if (buttonWrapperElem.getElementsByTagName('a')[0] && buttonWrapperElem.getElementsByTagName('a')[0].target == '_blank') {
      buttonTarget.checked = true;
    } else {
      buttonTarget.checked = false;
    }

    buttonTarget.onclick = function () {
      if (buttonWrapperElem.getElementsByTagName('a')[0] && buttonTarget.checked == true) {
        buttonWrapperElem.getElementsByTagName('a')[0].target = '_blank';
      } else if (buttonWrapperElem.getElementsByTagName('a')[0] && buttonTarget.checked == false) {
        buttonWrapperElem.getElementsByTagName('a')[0].target = '_self';
      }

      makePreview();
    };

    buttonUrlExec.onclick = function () {
      if (buttonUrl.value != '') {
        if (buttonTarget.checked == true) {
          var button = deleteLink(buttonWrapperElem);
          buttonElem.outerHTML = '<a href="' + buttonUrl.value + '" target="_blank">' + button + '</a>';
          linkIndicator.innerHTML = buttonUrl.value;
          buttonUrl.value = '';
          buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
          editor = buttonElem.getElementsByTagName('div')[0];
        } else {
          var _button = deleteLink(buttonWrapperElem);

          buttonElem.outerHTML = '<a href="' + buttonUrl.value + '" target="_self">' + _button + '</a>';
          linkIndicator.innerHTML = buttonUrl.value;
          buttonUrl.value = '';
          buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
          editor = buttonElem.getElementsByTagName('div')[0];
        }
      } else {
        alert('Вы не ввели адрес ссылки');
      }

      makePreview();
    }; //Цвет текста


    $('#button-color-value').on('change', function () {
      $(buttonElem).css('color', $(this).val());
      makePreview();
    }); //Цвет кнопки

    buttonBackgroundRadioColor.onclick = function () {
      buttonBackgroundGradient.style.display = 'none';
      buttonBackgroundColor.style.display = 'block';
    };

    buttonBackgroundRadioGradient.onclick = function () {
      buttonBackgroundColor.style.display = 'none';
      buttonBackgroundGradient.style.display = 'block';
    };

    $('#button-main-color').on('change', function () {
      var opacity = $('#page-main-color-opacity').val() / 100;
      var color = hexToRGB($(this).val(), opacity);
      $(buttonElem).css('background', color);
      makePreview();
    });
    $('#button-gradient-color-1').on('change', function () {
      $(buttonElem).css('background', 'linear-gradient(' + parseInt($('#button-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#button-gradient-color-2').val() + ')');
      makePreview();
    });
    $('#button-gradient-color-2').on('change', function () {
      $(buttonElem).css('background', 'linear-gradient(' + parseInt($('#button-gradient-angle').val()) + 'deg, ' + $('#button-gradient-color-1').val() + ', ' + $(this).val() + ')');
      makePreview();
    });
    $('#button-gradient-angle').on('input', function () {
      $(buttonElem).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#button-gradient-color-1').val() + ', ' + $('#button-gradient-color-2').val() + ')');
      makePreview();
    });
    $('#button-main-color-opacity').on('input', function () {
      var opacity = $(this).val();
      var color = hexToRGB($('#button-main-color').val(), opacity / 100);
      $(buttonElem).css('background', color);
      makePreview();
    });
    /*Настройки тени текста*/

    document.getElementById('buttonTextShadowRadioOn').onclick = function () {
      document.getElementById('button-text-shadow').style.display = 'block';
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      makePreview();
    };

    document.getElementById('buttonTextShadowRadioOff').onclick = function () {
      document.getElementById('button-text-shadow').style.display = 'none';
      $(buttonElem).css('text-shadow', 'none');
      makePreview();
    };

    $('#button-text-shadow-horizontal-value, #button-text-shadow-horizontal-value-range').on('input', function () {
      var hv = $(this).val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);

      if ($(this).attr('id') == "button-text-shadow-horizontal-value") {
        $('#button-text-shadow-horizontal-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-horizontal-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-text-shadow-vertical-value, #button-text-shadow-vertical-value-range').on('input', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $(this).val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);

      if ($(this).attr('id') == "button-text-shadow-vertical-value") {
        $('#button-text-shadow-vertical-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-vertical-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-text-shadow-blur-value, #button-text-shadow-blur-value-range').on('input', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $(this).val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);

      if ($(this).attr('id') == "button-text-shadow-blur-value") {
        $('#button-text-shadow-blur-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-blur-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-text-shadow-opacity-value, #button-text-shadow-opacity-value-range').on('input', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $(this).val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);

      if ($(this).attr('id') == "button-text-shadow-opacity-value") {
        $('#button-text-shadow-opacity-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-opacity-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-text-shadow-color-value').on('change', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($(this).val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      makePreview();
    });
    /*Конец настроек тени текста*/
    //Настройки всех границ изображения

    buttonBorderRadioEvery.onclick = function () {
      buttonBorderAll.style.display = 'none';
      buttonBorderEvery.style.display = 'block';
    };

    buttonBorderRadioAll.onclick = function () {
      buttonBorderAll.style.display = 'block';
      buttonBorderEvery.style.display = 'none';
    };

    $('#button-border-value').val(parseInt($(buttonElem).css('border-width')));
    $('#button-border-value-range').val(parseInt($(buttonElem).css('border-width')));
    $('#button-border-radius').val(parseInt($(buttonElem).css('border-radius')));
    $('#button-border-radius-range').val(parseInt($(buttonElem).css('border-radius')));
    $('#button-border-value, #button-border-value-range').on('input', function () {
      $(buttonElem).css('border-width', $(this).val() + 'px');

      if ($(this).attr('id') == "button-border-value") {
        $('#button-border-value-range').val($(this).val());
      } else {
        $('#button-border-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-border-radius, #button-border-radius-range').on('input', function () {
      $(buttonElem).css('border-radius', $(this).val() + 'px');
      $(buttonElem).css('border-radius', $(this).val() + 'px');

      if ($(this).attr('id') == "button-border-radius") {
        $('#button-border-radius-range').val($(this).val());
      } else {
        $('#button-border-radius').val($(this).val());
      }

      makePreview();
    });
    $('#button-border-style').on('change', function () {
      $(buttonElem).css('border-style', $(this).find('option:selected').val());
      makePreview();
    });
    $('#button-border-color-value').on('change', function () {
      $(buttonElem).css('border-color', $(this).val());
      makePreview();
    });
    /*Настройки для верхней границы блока*/

    $('#button-border-top-value').val(parseInt($(buttonElem).css('border-top-width')));
    $('#button-border-top-value-range').val(parseInt($(buttonElem).css('border-top-width')));
    $('#button-border-left-top-radius').val(parseInt($(buttonElem).css('border-top-left-radius')));
    $('#button-border-left-top-radius-range').val(parseInt($(buttonElem).css('border-top-left-radius')));
    $('#button-border-top-value, #button-border-top-value-range').on('input', function () {
      $(buttonElem).css('border-top-width', $(this).val() + 'px');

      if ($(this).attr('id') == "button-border-top-value") {
        $('#button-border-top-value-range').val($(this).val());
      } else {
        $('#button-border-top-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-border-left-top-radius, #button-border-left-top-radius-range').on('input', function () {
      $(buttonElem).css('border-top-left-radius', $(this).val() + 'px');
      $(buttonElem).css('border-top-left-radius', $(this).val() + 'px');

      if ($(this).attr('id') == "button-border-left-top-radius") {
        $('#button-border-left-top-radius-range').val($(this).val());
      } else {
        $('#button-border-left-top-radius').val($(this).val());
      }

      makePreview();
    });
    $('#button-border-top-style-value').on('change', function () {
      $(buttonElem).css('border-top-style', $(this).find('option:selected').val());
      makePreview();
    });
    $('#button-border-top-color').on('change', function () {
      $(buttonElem).css('border-top-color', $(this).val());
      makePreview();
    });
    /*Конец блока*/

    /*Настройки для правой границы блока*/

    $('#button-border-right-value').val(parseInt($(buttonElem).css('border-right-width')));
    $('#button-border-right-value-range').val(parseInt($(buttonElem).css('border-right-width')));
    $('#button-border-right-radius').val(parseInt($(buttonElem).css('border-top-right-radius')));
    $('#button-border-right-radius-range').val(parseInt($(buttonElem).css('border-top-right-radius')));
    $('#button-border-right-value, #button-border-right-value-range').on('input', function () {
      $(buttonElem).css('border-right-width', $(this).val() + 'px');

      if ($(this).attr('id') == "button-border-right-value") {
        $('#button-border-right-value-range').val($(this).val());
      } else {
        $('#button-border-right-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-border-right-radius, #button-border-right-radius-range').on('input', function () {
      $(buttonElem).css('border-top-right-radius', $(this).val() + 'px');
      $(buttonElem).css('border-top-right-radius', $(this).val() + 'px');

      if ($(this).attr('id') == "button-border-right-radius") {
        $('#button-border-right-radius-range').val($(this).val());
      } else {
        $('#button-border-right-radiuse').val($(this).val());
      }

      makePreview();
    });
    $('#button-border-right-style').on('change', function () {
      $(buttonElem).css('border-right-style', $(this).find('option:selected').val());
      makePreview();
    });
    $('#button-border-right-color').on('change', function () {
      $(buttonElem).css('border-right-color', $(this).val());
      makePreview();
    });
    /*Конец блока*/

    /*Настройки для нижней границы блока*/

    $('#button-border-bottom-value').val(parseInt($(buttonElem).css('border-bottom-width')));
    $('#button-border-bottom-value-range').val(parseInt($(buttonElem).css('border-bottom-width')));
    $('#button-border-bottom-right-radius').val(parseInt($(buttonElem).css('border-bottom-right-radius')));
    $('#button-border-bottom-right-radius-range').val(parseInt($(buttonElem).css('border-bottom-right-radius')));
    $('#button-border-bottom-value, #button-border-bottom-value-range').on('input', function () {
      $(buttonElem).css('border-bottom-width', $(this).val() + 'px');

      if ($(this).attr('id') == "button-border-bottom-value") {
        $('#button-border-bottom-value-range').val($(this).val());
      } else {
        $('#button-border-bottom-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-border-bottom-right-radius, #button-border-bottom-right-radius-range').on('input', function () {
      $(buttonElem).css('border-bottom-right-radius', $(this).val() + 'px');
      $(buttonElem).css('border-bottom-right-radius', $(this).val() + 'px');

      if ($(this).attr('id') == "button-border-bottom-right-radius") {
        $('#button-border-bottom-right-radius-range').val($(this).val());
      } else {
        $('#button-border-bottom-right-radius').val($(this).val());
      }

      makePreview();
    });
    $('#button-border-bottom-style').on('change', function () {
      $(buttonElem).css('border-bottom-style', $(this).find('option:selected').val());
      makePreview();
    });
    $('#button-border-bottom-color').on('change', function () {
      $(buttonElem).css('border-bottom-color', $(this).val());
      makePreview();
    });
    /*Конец блока*/

    /*Настройки для левой границы блока*/

    $('#button-border-left-value').val(parseInt($(buttonElem).css('border-left-width')));
    $('#button-border-left-value-range').val(parseInt($(buttonElem).css('border-left-width')));
    $('#button-border-bottom-left-radius').val(parseInt($(buttonElem).css('border-bottom-left-radius')));
    $('#button-border-bottom-left-radius-range').val(parseInt($(buttonElem).css('border-bottom-left-radius')));
    $('#button-border-left-value, #button-border-left-value-range').on('input', function () {
      $(buttonElem).css('border-left-width', $(this).val() + 'px');

      if ($(this).attr('id') == "button-border-left-value") {
        $('#button-border-left-value-range').val($(this).val());
      } else {
        $('#button-border-left-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-border-bottom-left-radius, #button-border-bottom-left-radius-range').on('input', function () {
      $(buttonElem).css('border-bottom-left-radius', $(this).val() + 'px');
      $(buttonElem).css('border-bottom-left-radius', $(this).val() + 'px');

      if ($(this).attr('id') == "button-border-bottom-left-radius") {
        $('#button-border-bottom-left-radius-range').val($(this).val());
      } else {
        $('#button-border-bottom-left-radius').val($(this).val());
      }

      makePreview();
    });
    $('#button-border-left-style').on('change', function () {
      $(buttonElem).css('border-left-style', $(this).find('option:selected').val());
      makePreview();
    });
    $('#button-border-left-color').on('change', function () {
      $(buttonElem).css('border-left-color', $(this).val());
      makePreview();
    });
    /*Конец блока*/

    /*Настройки теней*/

    document.getElementById('buttonShadowRadioOn').onclick = function () {
      document.getElementById('button-shadow').style.display = 'block';
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      makePreview();
    };

    document.getElementById('buttonShadowRadioOff').onclick = function () {
      document.getElementById('button-shadow').style.display = 'none';
      $(buttonElem).css('box-shadow', 'none');
      makePreview();
    };

    $('#button-shadow-horizontal-value, #button-shadow-horizontal-value-range').on('input', function () {
      var hv = $(this).val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);

      if ($(this).attr('id') == "button-shadow-horizontal-value") {
        $('#button-shadow-horizontal-value-range').val($(this).val());
      } else {
        $('#button-shadow-horizontal-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-shadow-vertical-value, #button-shadow-vertical-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $(this).val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);

      if ($(this).attr('id') == "button-shadow-vertical-value") {
        $('#button-shadow-vertical-value-range').val($(this).val());
      } else {
        $('#button-shadow-vertical-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-shadow-blur-value, #button-shadow-blur-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $(this).val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);

      if ($(this).attr('id') == "button-shadow-blur-value") {
        $('#button-shadow-blur-value-range').val($(this).val());
      } else {
        $('#button-shadow-blur-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-shadow-spread-value, #button-shadow-spread-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $(this).val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);

      if ($(this).attr('id') == "button-shadow-spread-value") {
        $('#button-shadow-spread-value-range').val($(this).val());
      } else {
        $('#button-shadow-spread-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-shadow-opacity-value, #button-shadow-opacity-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $(this).val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);

      if ($(this).attr('id') == "button-shadow-opacity-value") {
        $('#button-shadow-opacity-value-range').val($(this).val());
      } else {
        $('#button-shadow-opacity-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-shadow-color-value').on('change', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($(this).val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      makePreview();
    });
    $('#button-shadow-inset-value').on('change', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $(this).prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      makePreview();
    });
    /*Конец настроек теней*/
    //Высота кнопки

    if (getComputedStyle(buttonWrapperElem).height == 'auto') {
      autoHeight.checked = true;
    } else {
      autoHeight.checked = false;
    }

    $('#button-height-value').val(parseInt($(buttonWrapperElem).css('height')));
    $('#button-height-value-range').val(parseInt($(buttonWrapperElem).css('height')));

    autoHeight.onclick = function () {
      if (autoHeight.checked == true) {
        buttonWrapperElem.style.height = 'auto';
        makePreview();
      }
    };

    $('#button-height-value, #button-height-value-range').on('input', function () {
      if (autoHeight.checked == false) {
        $(buttonWrapperElem).css('height', $(this).val() + 'px');

        if ($(this).attr('id') == "button-height-value") {
          $('#button-height-value-range').val($(this).val());
        } else {
          $('#button-height-value').val($(this).val());
        }
      }

      makePreview();
    }); //Ширина кнопки

    if (getComputedStyle(buttonWrapperElem).width == '100%') {
      autoWidth.checked = true;
    } else {
      autoWidth.checked = false;
    }

    $('#button-width-value').val(parseInt($(buttonWrapperElem).css('width')));
    $('#button-width-value-range').val(parseInt($(buttonWrapperElem).css('width')));

    autoWidth.onclick = function () {
      if (autoWidth.checked == true) {
        buttonWrapperElem.style.width = '100%';
        makePreview();
      }
    };

    $('#button-width-value, #button-width-value-range').on('input', function () {
      if (autoWidth.checked == false) {
        $(buttonWrapperElem).css('width', $(this).val() + 'px');

        if ($(this).attr('id') == "button-width-value") {
          $('#button-width-value-range').val($(this).val());
        } else {
          $('#button-width-value').val($(this).val());
        }
      }

      makePreview();
    });
    /*Настройка анимации*/

    $('#button-animation-type-value').on('change', function () {
      if ($(this) != "none") {
        $(buttonElem).css('animation-name', $(this).val());
        $(buttonElem).css('animation-delay', $('#button-animation-delay-value').val() + 's');
        $(buttonElem).css('animation-duration', $('#button-animation-duration-value').val() + 's');
      }

      makePreview();
    });
    $('#button-animation-delay-value, #button-animation-delay-value-range').on('input', function () {
      $(buttonElem).css('animation-delay', $(this).val() + 's');

      if ($(this).attr('id') == "button-animation-delay-value") {
        $('#button-animation-delay-value-range').val($(this).val());
      } else {
        $('#button-animation-delay-value').val($(this).val());
      }

      makePreview();
    });
    $('#button-animation-duration-value, #button-animation-duration-value-range').on('input', function () {
      $(buttonElem).css('animation-duration', $(this).val() + 's');

      if ($(this).attr('id') == "button-animation-duration-value") {
        $('#button-animation-duration-value-range').val($(this).val());
      } else {
        $('#button-animation-duration-value').val($(this).val());
      }

      makePreview();
    });
    /*Конец настроек анимации*/

    /*Блок таймаута*/

    /*----------------!!!СДЕЛАТЬ!!!-----------------*/

    if (document.getElementById('script-' + ths.attr('id'))) {
      document.getElementById('button-display-none-value').checked = true;
    } else {
      document.getElementById('button-display-none-value').checked = false;
    }

    $('#button-display-none-value, #button-timeout-hour-value, #button-timeout-hour-value-range, #button-timeout-minute-value, #button-timeout-minute-value-range, #button-timeout-second-value, #button-timeout-second-value-range').on('input', function () {
      var id = ths.attr('id');
      var hours = $('#button-timeout-hour-value').val() * 3600;
      var minute = $('#button-timeout-minute-value').val() * 60;
      var second = parseInt($('#button-timeout-second-value').val());
      var time = hours + minute + second;
      time = time * 1000;

      if (document.getElementById('button-display-none-value').checked == true) {
        $('#script-' + id).remove();
        $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
      } else {
        $('#script-' + id).remove();
      }

      if ($(this).attr('id') == "button-timeout-hour-value") {
        $('#button-timeout-hour-value-range').val($(this).val());
      } else if ($(this).attr('id') == "button-timeout-hour-value-range") {
        $('#button-timeout-hour-value').val($(this).val());
      } else if ($(this).attr('id') == "button-timeout-minute-value") {
        $('#button-timeout-minute-value-range').val($(this).val());
      } else if ($(this).attr('id') == "button-timeout-minute-value-range") {
        $('#button-timeout-minute-value').val($(this).val());
      } else if ($(this).attr('id') == "button-timeout-second-value") {
        $('#button-timeout-second-value-range').val($(this).val());
      } else if ($(this).attr('id') == "button-timeout-second-value-range") {
        $('#button-timeout-second-value').val($(this).val());
      }

      makePreview();
    });
    /*Конец блока таймаута*/
  });
})();

function deleteLink(el) {
  var content = el.innerHTML;
  var reOpen = new RegExp('<a[^>]*>', 'gi');
  var reClose = new RegExp('</a[^>]*>', 'gi');
  content = content.replace(reOpen, "");
  content = content.replace(reClose, "");
  return content;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL2J1dHRvbi9idXR0b25TZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyIkIiwib24iLCJidXR0b25CbG9ja0lkIiwicGFyZW50cyIsImF0dHIiLCJidXR0b25CbG9ja0VsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xvbklkIiwiZ2V0UmFuZG9tIiwiY2xvbmUiLCJpbnNlcnRBZnRlciIsImFkZEZ1bmN0aW9uYWxpdHlUb0J1dHRvbkVsZW1lbnQiLCJtYWtlUHJldmlldyIsInRocyIsImJ1dHRvbldyYXBwZXJFbGVtIiwiYnV0dG9uRWxlbSIsImVkaXRvciIsImUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJvZmYiLCJ0aW1lIiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJzcGxpdCIsImgiLCJNYXRoIiwiZmxvb3IiLCJtIiwicyIsInZhbCIsInByb3AiLCJoaWRlIiwic2hvdyIsImNzcyIsInJpZ2h0IiwidHJhbnNpdGlvbiIsImFkZENsYXNzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsImkiLCJidXR0b25NYXJnaW5Cb3R0b20iLCJjaGVja2VkIiwiYnV0dG9uTWFyZ2luVG9wIiwiYnV0dG9uTWFyZ2luQ2VudGVyIiwib25jbGljayIsInN0eWxlIiwiYnV0dG9uRm9udEZhbWlseVNlbGVjdCIsInZhbHVlIiwiZm9udEZhbWlseSIsIm9uY2hhbmdlIiwiZm9udFdlaWdodCIsImJ1dHRvbkJvbGQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJidXR0b25FZGl0b3IiLCJkZWxldGVMaW5rIiwiY29udGVudEVkaXRhYmxlIiwiZm9jdXMiLCJvbmJsdXIiLCJsaW5rSW5kaWNhdG9yIiwiYnV0dG9uVGFyZ2V0Iiwib3V0ZXJIVE1MIiwiaHJlZiIsInRhcmdldCIsImJ1dHRvblVybEV4ZWMiLCJidXR0b25VcmwiLCJidXR0b24iLCJhbGVydCIsImJ1dHRvbkJhY2tncm91bmRSYWRpb0NvbG9yIiwiYnV0dG9uQmFja2dyb3VuZEdyYWRpZW50IiwiZGlzcGxheSIsImJ1dHRvbkJhY2tncm91bmRDb2xvciIsImJ1dHRvbkJhY2tncm91bmRSYWRpb0dyYWRpZW50Iiwib3BhY2l0eSIsImNvbG9yIiwiaGV4VG9SR0IiLCJodiIsInZ2IiwiYmxyIiwiY2xyIiwicHJwdHMiLCJidXR0b25Cb3JkZXJSYWRpb0V2ZXJ5IiwiYnV0dG9uQm9yZGVyQWxsIiwiYnV0dG9uQm9yZGVyRXZlcnkiLCJidXR0b25Cb3JkZXJSYWRpb0FsbCIsImZpbmQiLCJzcHJkIiwiaW5zZXQiLCJoZWlnaHQiLCJhdXRvSGVpZ2h0Iiwid2lkdGgiLCJhdXRvV2lkdGgiLCJpZCIsImhvdXJzIiwibWludXRlIiwic2Vjb25kIiwicmVtb3ZlIiwiYXBwZW5kIiwiZWwiLCJjb250ZW50IiwicmVPcGVuIiwiUmVnRXhwIiwicmVDbG9zZSIsInJlcGxhY2UiLCJoZXgiLCJhbHBoYSIsInIiLCJzbGljZSIsImciLCJiIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtR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QXJCLEdBQXlCLElBQXpCLEdBQWdDQyxDQUFoQyxHQUFvQyxJQUFwQyxHQUEyQ0osS0FBM0MsR0FBbUQsR0FBMUQ7QUFDRCxHQUZELE1BRU8sSUFBSUEsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDckIsV0FBTyxVQUFVQyxDQUFWLEdBQWMsSUFBZCxHQUFxQkUsQ0FBckIsR0FBeUIsSUFBekIsR0FBZ0NDLENBQWhDLEdBQW9DLElBQXBDLEdBQTJDSixLQUEzQyxHQUFtRCxHQUExRDtBQUNELEdBRk0sTUFFQTtBQUNMLFdBQU8sU0FBU0MsQ0FBVCxHQUFhLElBQWIsR0FBb0JFLENBQXBCLEdBQXdCLElBQXhCLEdBQStCQyxDQUEvQixHQUFtQyxHQUExQztBQUNEO0FBQ0YsQyIsImZpbGUiOiJidXR0b25fc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9BUEkvbW9kdWxlcy9idXR0b24vYnV0dG9uU2V0dGluZ3MuanNcIik7XG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgJCgnI21haW5BcmVhJykub24oJ2NsaWNrJywgJy5jb3B5QnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYnV0dG9uQmxvY2tJZCA9ICQodGhpcykucGFyZW50cygnLmJ1dHRvbkJsb2NrJykuYXR0cignaWQnKTtcclxuICAgIGNvbnN0IGJ1dHRvbkJsb2NrRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbkJsb2NrSWQpO1xyXG4gICAgY29uc3QgY2xvbklkID0gJ2J1dHRvbicgKyBnZXRSYW5kb20oKTtcclxuICAgICQoYnV0dG9uQmxvY2tFbGVtKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsIGNsb25JZCkuaW5zZXJ0QWZ0ZXIoYnV0dG9uQmxvY2tFbGVtKTtcclxuICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0J1dHRvbkVsZW1lbnQoY2xvbklkKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIGxldCB0aHMgPSBudWxsO1xyXG4gIGxldCBidXR0b25CbG9ja0VsZW0gPSBudWxsO1xyXG4gIGxldCBidXR0b25XcmFwcGVyRWxlbSA9IG51bGw7XHJcbiAgbGV0IGJ1dHRvbkVsZW0gPSBudWxsO1xyXG4gIGxldCBlZGl0b3IgPSBudWxsO1xyXG5cclxuICAkKCcjbWFpbkFyZWEnKS5vbignY2xpY2snLCAnLmJ1dHRvblNldCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0aHMgPSAkKHRoaXMpLnBhcmVudHMoJy5idXR0b25CbG9jaycpO1xyXG4gICAgYnV0dG9uQmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhzLmF0dHIoJ2lkJykpO1xyXG4gICAgYnV0dG9uV3JhcHBlckVsZW0gPSBidXR0b25CbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9uV3JhcHBlcicpWzBdO1xyXG4gICAgYnV0dG9uRWxlbSA9IGJ1dHRvbkJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b24nKVswXTtcclxuICAgIGVkaXRvciA9IGJ1dHRvbkVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpWzBdO1xyXG5cclxuICAgIC8v0J/QvtGP0LLQu9C10L3QuNC1INC/0YDQsNCy0L7QuSDQv9Cw0L3QtdC70LgsINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC40L3Qv9GD0YLQvtCyLlxyXG4gICAgJCgnI3JpZ2h0U2lkZWJhciA+IGRpdjpub3QoI3NldHRpbmdzLW1uKSBpbnB1dCcpLm9mZignaW5wdXQnKTtcclxuICAgICQoJyNyaWdodFNpZGViYXIgPiBkaXY6bm90KCNzZXR0aW5ncy1tbikgaW5wdXQnKS5vZmYoKTtcclxuICAgICQoJyNidXR0b24tYm9yZGVyLXN0eWxlJykub2ZmKCk7XHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci1sZWZ0LXN0eWxlJykub2ZmKCk7XHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci1yaWdodC1zdHlsZScpLm9mZigpO1xyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItdG9wLXN0eWxlLXZhbHVlJykub2ZmKCk7XHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci1ib3R0b20tc3R5bGUnKS5vZmYoKTtcclxuICAgICQoJyNidXR0b24tYW5pbWF0aW9uLXR5cGUtdmFsdWUnKS5vZmYoKTtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpKSB7XHJcbiAgICAgIHZhciB0aW1lID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpLmlubmVySFRNTC5zcGxpdCgnLCcpWzFdKSAvIDEwMDA7XHJcbiAgICAgIHZhciBoID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCk7XHJcbiAgICAgIHZhciBtID0gTWF0aC5mbG9vcigodGltZSAtIDM2MDAgKiBoKSAvIDYwKTtcclxuICAgICAgdmFyIHMgPSB0aW1lIC0gKDM2MDAgKiBoICsgNjAgKiBtKTtcclxuICAgICAgJCgnI2J1dHRvbi10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoaCk7XHJcbiAgICAgICQoJyNidXR0b24tdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwobSk7XHJcbiAgICAgICQoJyNidXR0b24tdGltZW91dC1zZWNvbmQtdmFsdWUnKS52YWwocyk7XHJcbiAgICAgICQoJyNidXR0b24tZGlzcGxheS1ub25lLXZhbHVlJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2J1dHRvbi10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoMCk7XHJcbiAgICAgICQoJyNidXR0b24tdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwoMCk7XHJcbiAgICAgICQoJyNidXR0b24tdGltZW91dC1zZWNvbmQtdmFsdWUnKS52YWwoMCk7XHJcbiAgICB9XHJcbiAgICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2JykuaGlkZSgpO1xyXG4gICAgJCgnI3NldHRpbmdzLW1uJykuaGlkZSgpO1xyXG4gICAgJCgnI21haW4tYmxvY2stc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAkKCcjY29udGVudC1ibG9jay1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICQoJyNpbWFnZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICQoJyN2aWRlby1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICQoJyN0ZXh0LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICAgJCgnI2Zvcm0tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAkKCcjc3Vic2NyaWJlLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICAgJCgnI2xpbmUtc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAkKCcjbGlzdC1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICQoJyNidXR0b24tc2V0dGluZ3MnKS5zaG93KCk7XHJcbiAgICAkKCcjcmlnaHRTaWRlYmFyJykuY3NzKHtcclxuICAgICAgcmlnaHQ6ICcwcHgnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnMC40cyBhbGwgZWFzZS1pbidcclxuICAgIH0pLmFkZENsYXNzKCdhY3RpdmF0ZWQnKTtcclxuXHJcbiAgICAvL9Cd0LDRgdGC0YDQvtC50LrQuCDQvtGC0YHRgtGD0L/QvtCyXHJcblxyXG4gICAgJCgnI2J1dHRvbi1tYXJnaW4tdG9wLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoYnV0dG9uQmxvY2tFbGVtKS5tYXJnaW5Ub3ApKTtcclxuICAgICQoJyNidXR0b24tbWFyZ2luLXRvcC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGJ1dHRvbkJsb2NrRWxlbSkubWFyZ2luVG9wKSk7XHJcbiAgICAkKCcjYnV0dG9uLW1hcmdpbi1yaWdodC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGJ1dHRvbkJsb2NrRWxlbSkubWFyZ2luUmlnaHQpKTtcclxuICAgICQoJyNidXR0b24tbWFyZ2luLXJpZ2h0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoYnV0dG9uQmxvY2tFbGVtKS5tYXJnaW5SaWdodCkpO1xyXG4gICAgJCgnI2J1dHRvbi1tYXJnaW4tYm90dG9tLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoYnV0dG9uQmxvY2tFbGVtKS5tYXJnaW5Cb3R0b20pKTtcclxuICAgICQoJyNidXR0b24tbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGJ1dHRvbkJsb2NrRWxlbSkubWFyZ2luQm90dG9tKSk7XHJcbiAgICAkKCcjYnV0dG9uLW1hcmdpbi1sZWZ0LXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoYnV0dG9uQmxvY2tFbGVtKS5tYXJnaW5MZWZ0KSk7XHJcbiAgICAkKCcjYnV0dG9uLW1hcmdpbi1sZWZ0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoYnV0dG9uQmxvY2tFbGVtKS5tYXJnaW5MZWZ0KSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi1tYXJnaW4tdG9wLXZhbHVlLCAjYnV0dG9uLW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhzKS5jc3MoJ21hcmdpbi10b3AnLCAnJyk7XHJcbiAgICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAkKHRocykuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLXRvcDonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1tYXJnaW4tdG9wLXZhbHVlXCIpIHtcclxuICAgICAgICAkKCcjYnV0dG9uLW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1tYXJnaW4tdG9wLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuICAgICQoJyNidXR0b24tbWFyZ2luLXJpZ2h0LXZhbHVlLCAjYnV0dG9uLW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aHMpLmNzcygnbWFyZ2luLXJpZ2h0JywgJycpO1xyXG4gICAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgJCh0aHMpLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi1yaWdodDonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1tYXJnaW4tcmlnaHQtdmFsdWVcIikge1xyXG4gICAgICAgICQoJyNidXR0b24tbWFyZ2luLXJpZ2h0LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNidXR0b24tbWFyZ2luLXJpZ2h0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuICAgICQoJyNidXR0b24tbWFyZ2luLWJvdHRvbS12YWx1ZSwgI2J1dHRvbi1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRocykuY3NzKCdtYXJnaW4tYm90dG9tJywgJycpO1xyXG4gICAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgJCh0aHMpLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi1ib3R0b206JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJidXR0b24tbWFyZ2luLWJvdHRvbS12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNidXR0b24tbWFyZ2luLWJvdHRvbS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcjYnV0dG9uLW1hcmdpbi1sZWZ0LXZhbHVlLCAjYnV0dG9uLW1hcmdpbi1sZWZ0LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRocykuY3NzKCdtYXJnaW4tbGVmdCcsICcnKTtcclxuICAgICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICQodGhzKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tbGVmdDonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1tYXJnaW4tbGVmdC12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1tYXJnaW4tbGVmdC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjYnV0dG9uLW1hcmdpbi1sZWZ0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL9CS0LXRgNGC0LjQutCw0LvRjNC90L7QtSDQstGL0YDQsNCy0L3QuNCy0LDQvdC40LVcclxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGJ1dHRvbkJsb2NrRWxlbSkubWFyZ2luVG9wID09ICdhdXRvJykge1xyXG4gICAgICBidXR0b25NYXJnaW5Cb3R0b20uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGJ1dHRvbk1hcmdpblRvcC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIGJ1dHRvbk1hcmdpbkNlbnRlci5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKGdldENvbXB1dGVkU3R5bGUoYnV0dG9uQmxvY2tFbGVtKS5tYXJnaW5Cb3R0b20gPT0gJ2F1dG8nKSB7XHJcbiAgICAgIGJ1dHRvbk1hcmdpbkJvdHRvbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIGJ1dHRvbk1hcmdpblRvcC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgYnV0dG9uTWFyZ2luQ2VudGVyLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShidXR0b25CbG9ja0VsZW0pLm1hcmdpblRvcCA9PSAnMHB4JyAmJiBnZXRDb21wdXRlZFN0eWxlKGJ1dHRvbkJsb2NrRWxlbSkubWFyZ2luQm90dG9tID09ICcwcHgnKSB7XHJcbiAgICAgIGJ1dHRvbk1hcmdpbkJvdHRvbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIGJ1dHRvbk1hcmdpblRvcC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIGJ1dHRvbk1hcmdpbkNlbnRlci5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGJ1dHRvbk1hcmdpblRvcC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBidXR0b25CbG9ja0VsZW0uc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XHJcbiAgICAgIGJ1dHRvbkJsb2NrRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnYXV0byc7XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9XHJcbiAgICBidXR0b25NYXJnaW5DZW50ZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYnV0dG9uQmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xyXG4gICAgICBidXR0b25CbG9ja0VsZW0uc3R5bGUubWFyZ2luQm90dG9tID0gJzBweCc7XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9XHJcbiAgICBidXR0b25NYXJnaW5Cb3R0b20ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYnV0dG9uQmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICdhdXRvJztcclxuICAgICAgYnV0dG9uQmxvY2tFbGVtLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcwcHgnO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v0JLRi9Cx0L7RgCDRiNGA0LjRhNGC0LBcclxuICAgIGJ1dHRvbkZvbnRGYW1pbHlTZWxlY3QudmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKGJ1dHRvbkVsZW0pLmZvbnRGYW1pbHk7XHJcbiAgICBidXR0b25Gb250RmFtaWx5U2VsZWN0Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBidXR0b25FbGVtLnN0eWxlLmZvbnRGYW1pbHkgPSBidXR0b25Gb250RmFtaWx5U2VsZWN0LnZhbHVlO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGJ1dHRvbkVsZW0pLmZvbnRXZWlnaHQgPT0gJzkwMCcpIHtcclxuICAgICAgYnV0dG9uQm9sZC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbkJvbGQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uQm9sZC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoYnV0dG9uQm9sZC5jaGVja2VkKSB7XHJcbiAgICAgICAgYnV0dG9uRWxlbS5zdHlsZS5mb250V2VpZ2h0ID0gJzkwMCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uRWxlbS5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XHJcbiAgICAgIH1cclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL9Cg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAgIFxyXG4gICAgJCgnI2J1dHRvbi1mb250LXNpemUtdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShidXR0b25FbGVtKS5mb250U2l6ZSkpO1xyXG4gICAgJCgnI2J1dHRvbi1mb250LXNpemUtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShidXR0b25FbGVtKS5mb250U2l6ZSkpO1xyXG4gICAgJCgnI2J1dHRvbi1mb250LXNpemUtdmFsdWUsICNidXR0b24tZm9udC1zaXplLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnZm9udC1zaXplJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiYnV0dG9uLWZvbnQtc2l6ZS12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1mb250LXNpemUtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1mb250LXNpemUtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH1cclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8v0JzQtdC20YHRgtGA0L7Rh9C90YvQuSDQuNC90YLQtdGA0LLQsNC7XHJcbiAgICAkKCcjYnV0dG9uLWxpbmUtaGVpZ2h0LXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoYnV0dG9uRWxlbSkubGluZUhlaWdodCkpO1xyXG4gICAgJCgnI2J1dHRvbi1saW5lLWhlaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGJ1dHRvbkVsZW0pLmxpbmVIZWlnaHQpKTtcclxuICAgICQoJyNidXR0b24tbGluZS1oZWlnaHQtdmFsdWUsICNidXR0b24tbGluZS1oZWlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdsaW5lLWhlaWdodCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1saW5lLWhlaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1saW5lLWhlaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjYnV0dG9uLWxpbmUtaGVpZ2h0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LVcclxuXHJcbiAgICBidXR0b25FZGl0b3Iub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYnV0dG9uV3JhcHBlckVsZW0uaW5uZXJIVE1MID0gZGVsZXRlTGluayhidXR0b25XcmFwcGVyRWxlbSk7XHJcbiAgICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0J1dHRvbkVsZW1lbnQoJCh0aHMpLmF0dHIoJ2lkJykpO1xyXG4gICAgICBidXR0b25FbGVtID0gYnV0dG9uV3JhcHBlckVsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9uJylbMF07XHJcbiAgICAgIGVkaXRvciA9IGJ1dHRvbkVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpWzBdO1xyXG4gICAgICBlZGl0b3IuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgZWRpdG9yLmZvY3VzKCk7XHJcbiAgICAgIGVkaXRvci5vbmJsdXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGxpbmtJbmRpY2F0b3IuaW5uZXJIVE1MICE9ICfQvtGC0YHRg9GC0YHRgtCy0YPQtdGCJykge1xyXG4gICAgICAgICAgaWYgKGJ1dHRvblRhcmdldC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICAgICAgYnV0dG9uRWxlbS5vdXRlckhUTUwgPSAnPGEgaHJlZj1cIicgKyBsaW5rSW5kaWNhdG9yLmlubmVySFRNTCArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICsgYnV0dG9uRWxlbS5vdXRlckhUTUwgKyAnPC9hPic7XHJcbiAgICAgICAgICAgIGJ1dHRvbkVsZW0gPSBidXR0b25CbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9uJylbMF07XHJcbiAgICAgICAgICAgIGVkaXRvciA9IGJ1dHRvbkVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpWzBdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uRWxlbS5vdXRlckhUTUwgPSAnPGEgaHJlZj1cIicgKyBsaW5rSW5kaWNhdG9yLmlubmVySFRNTCArICdcIiB0YXJnZXQ9XCJfc2VsZlwiPicgKyBidXR0b25FbGVtLm91dGVySFRNTCArICc8L2E+JztcclxuICAgICAgICAgICAgYnV0dG9uRWxlbSA9IGJ1dHRvbkJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b24nKVswXTtcclxuICAgICAgICAgICAgZWRpdG9yID0gYnV0dG9uRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2JylbMF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVkaXRvci5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/Qn9GA0LXQstGA0LDRidC10L3QuNC1INCyINGB0YHRi9C70LrRg1xyXG4gICAgaWYgKGJ1dHRvbldyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0pIHtcclxuICAgICAgbGlua0luZGljYXRvci5pbm5lckhUTUwgPSBidXR0b25XcmFwcGVyRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdLmhyZWY7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBidXR0b25XcmFwcGVyRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdICYmXHJcbiAgICAgIGJ1dHRvbldyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0udGFyZ2V0ID09ICdfYmxhbmsnXHJcbiAgICApIHtcclxuICAgICAgYnV0dG9uVGFyZ2V0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uVGFyZ2V0LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b25UYXJnZXQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGJ1dHRvbldyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0gJiYgYnV0dG9uVGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGJ1dHRvbldyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0udGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uV3JhcHBlckVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXSAmJiBidXR0b25UYXJnZXQuY2hlY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgIGJ1dHRvbldyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF0udGFyZ2V0ID0gJ19zZWxmJztcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvblVybEV4ZWMub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGJ1dHRvblVybC52YWx1ZSAhPSAnJykge1xyXG4gICAgICAgIGlmIChidXR0b25UYXJnZXQuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBsZXQgYnV0dG9uID0gZGVsZXRlTGluayhidXR0b25XcmFwcGVyRWxlbSk7XHJcbiAgICAgICAgICBidXR0b25FbGVtLm91dGVySFRNTCA9ICc8YSBocmVmPVwiJyArIGJ1dHRvblVybC52YWx1ZSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICsgYnV0dG9uICsgJzwvYT4nO1xyXG4gICAgICAgICAgbGlua0luZGljYXRvci5pbm5lckhUTUwgPSBidXR0b25VcmwudmFsdWU7XHJcbiAgICAgICAgICBidXR0b25VcmwudmFsdWUgPSAnJztcclxuICAgICAgICAgIGJ1dHRvbkVsZW0gPSBidXR0b25CbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9uJylbMF07XHJcbiAgICAgICAgICBlZGl0b3IgPSBidXR0b25FbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKVswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IGJ1dHRvbiA9IGRlbGV0ZUxpbmsoYnV0dG9uV3JhcHBlckVsZW0pO1xyXG4gICAgICAgICAgYnV0dG9uRWxlbS5vdXRlckhUTUwgPSAnPGEgaHJlZj1cIicgKyBidXR0b25VcmwudmFsdWUgKyAnXCIgdGFyZ2V0PVwiX3NlbGZcIj4nICsgYnV0dG9uICsgJzwvYT4nO1xyXG4gICAgICAgICAgbGlua0luZGljYXRvci5pbm5lckhUTUwgPSBidXR0b25VcmwudmFsdWU7XHJcbiAgICAgICAgICBidXR0b25VcmwudmFsdWUgPSAnJztcclxuICAgICAgICAgIGJ1dHRvbkVsZW0gPSBidXR0b25CbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9uJylbMF07XHJcbiAgICAgICAgICBlZGl0b3IgPSBidXR0b25FbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKVswXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ9CS0Ysg0L3QtSDQstCy0LXQu9C4INCw0LTRgNC10YEg0YHRgdGL0LvQutC4Jyk7XHJcbiAgICAgIH1cclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL9Cm0LLQtdGCINGC0LXQutGB0YLQsFxyXG4gICAgJCgnI2J1dHRvbi1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdjb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy/QptCy0LXRgiDQutC90L7Qv9C60LhcclxuXHJcbiAgICBidXR0b25CYWNrZ3JvdW5kUmFkaW9Db2xvci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBidXR0b25CYWNrZ3JvdW5kR3JhZGllbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgYnV0dG9uQmFja2dyb3VuZENvbG9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uQmFja2dyb3VuZFJhZGlvR3JhZGllbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYnV0dG9uQmFja2dyb3VuZENvbG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGJ1dHRvbkJhY2tncm91bmRHcmFkaWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuXHJcbiAgICAkKCcjYnV0dG9uLW1haW4tY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgb3BhY2l0eSA9ICQoJyNwYWdlLW1haW4tY29sb3Itb3BhY2l0eScpLnZhbCgpIC8gMTAwO1xyXG4gICAgICB2YXIgY29sb3IgPSBoZXhUb1JHQigkKHRoaXMpLnZhbCgpLCBvcGFjaXR5KTtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcik7XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLWdyYWRpZW50LWNvbG9yLTEnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQoJyArIHBhcnNlSW50KCQoJyNidXR0b24tZ3JhZGllbnQtYW5nbGUnKS52YWwoKSkgKyAnZGVnLCAnICsgJCh0aGlzKS52YWwoKSArICcsICcgKyAkKCcjYnV0dG9uLWdyYWRpZW50LWNvbG9yLTInKS52YWwoKSArICcpJyk7XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLWdyYWRpZW50LWNvbG9yLTInKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQoJyArIHBhcnNlSW50KCQoJyNidXR0b24tZ3JhZGllbnQtYW5nbGUnKS52YWwoKSkgKyAnZGVnLCAnICsgJCgnI2J1dHRvbi1ncmFkaWVudC1jb2xvci0xJykudmFsKCkgKyAnLCAnICsgJCh0aGlzKS52YWwoKSArICcpJyk7XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLWdyYWRpZW50LWFuZ2xlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQoJyArIHBhcnNlSW50KCQodGhpcykudmFsKCkpICsgJ2RlZywgJyArICQoJyNidXR0b24tZ3JhZGllbnQtY29sb3ItMScpLnZhbCgpICsgJywgJyArICQoJyNidXR0b24tZ3JhZGllbnQtY29sb3ItMicpLnZhbCgpICsgJyknKTtcclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNidXR0b24tbWFpbi1jb2xvci1vcGFjaXR5Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgb3BhY2l0eSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgIHZhciBjb2xvciA9IGhleFRvUkdCKCQoJyNidXR0b24tbWFpbi1jb2xvcicpLnZhbCgpLCBvcGFjaXR5IC8gMTAwKTtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcik7XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKtCd0LDRgdGC0YDQvtC50LrQuCDRgtC10L3QuCDRgtC10LrRgdGC0LAqL1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvblRleHRTaGFkb3dSYWRpb09uJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi10ZXh0LXNoYWRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB2YXIgaHYgPSAkKCcjYnV0dG9uLXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciB2diA9ICQoJyNidXR0b24tdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBibHIgPSAkKCcjYnV0dG9uLXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjYnV0dG9uLXRleHQtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNidXR0b24tdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvblRleHRTaGFkb3dSYWRpb09mZicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tdGV4dC1zaGFkb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygndGV4dC1zaGFkb3cnLCAnbm9uZScpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNidXR0b24tdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZSwgI2J1dHRvbi10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgaHYgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIHZ2ID0gJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIGJsciA9ICQoJyNidXR0b24tdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNidXR0b24tdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJidXR0b24tdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNidXR0b24tdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZSwgI2J1dHRvbi10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGh2ID0gJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgdnYgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIGJsciA9ICQoJyNidXR0b24tdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNidXR0b24tdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJidXR0b24tdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWVcIikge1xyXG4gICAgICAgICQoJyNidXR0b24tdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlLCAjYnV0dG9uLXRleHQtc2hhZG93LWJsdXItdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBodiA9ICQoJyNidXR0b24tdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIHZ2ID0gJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIGJsciA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjYnV0dG9uLXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlXCIpIHtcclxuICAgICAgICAkKCcjYnV0dG9uLXRleHQtc2hhZG93LWJsdXItdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUsICNidXR0b24tdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGh2ID0gJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgdnYgPSAkKCcjYnV0dG9uLXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgYmxyID0gJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2J1dHRvbi10ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKHRoaXMpLnZhbCgpIC8gMTAwKTtcclxuICAgICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiYnV0dG9uLXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWVcIikge1xyXG4gICAgICAgICQoJyNidXR0b24tdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjYnV0dG9uLXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH1cclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNidXR0b24tdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgaHYgPSAkKCcjYnV0dG9uLXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciB2diA9ICQoJyNidXR0b24tdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBibHIgPSAkKCcjYnV0dG9uLXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKHRoaXMpLnZhbCgpLCAkKCcjYnV0dG9uLXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG4gICAgLyrQmtC+0L3QtdGGINC90LDRgdGC0YDQvtC10Log0YLQtdC90Lgg0YLQtdC60YHRgtCwKi9cclxuXHJcbiAgICAvL9Cd0LDRgdGC0YDQvtC50LrQuCDQstGB0LXRhSDQs9GA0LDQvdC40YYg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG5cclxuICAgIGJ1dHRvbkJvcmRlclJhZGlvRXZlcnkub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYnV0dG9uQm9yZGVyQWxsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGJ1dHRvbkJvcmRlckV2ZXJ5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uQm9yZGVyUmFkaW9BbGwub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYnV0dG9uQm9yZGVyQWxsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBidXR0b25Cb3JkZXJFdmVyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNidXR0b24tYm9yZGVyLXZhbHVlJykudmFsKHBhcnNlSW50KCQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItd2lkdGgnKSkpO1xyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci13aWR0aCcpKSk7XHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci1yYWRpdXMnKS52YWwocGFyc2VJbnQoJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci1yYWRpdXMnKSkpO1xyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItcmFkaXVzLXJhbmdlJykudmFsKHBhcnNlSW50KCQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItcmFkaXVzJykpKTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci12YWx1ZSwgI2J1dHRvbi1ib3JkZXItdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItd2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJidXR0b24tYm9yZGVyLXZhbHVlXCIpIHtcclxuICAgICAgICAkKCcjYnV0dG9uLWJvcmRlci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjYnV0dG9uLWJvcmRlci12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItcmFkaXVzLCAjYnV0dG9uLWJvcmRlci1yYWRpdXMtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1ib3JkZXItcmFkaXVzXCIpIHtcclxuICAgICAgICAkKCcjYnV0dG9uLWJvcmRlci1yYWRpdXMtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1ib3JkZXItcmFkaXVzJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci1zdHlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNidXR0b24tYm9yZGVyLWNvbG9yLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINCy0LXRgNGF0L3QtdC5INCz0YDQsNC90LjRhtGLINCx0LvQvtC60LAqL1xyXG5cclxuICAgICQoJyNidXR0b24tYm9yZGVyLXRvcC12YWx1ZScpLnZhbChwYXJzZUludCgkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLXRvcC13aWR0aCcpKSk7XHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci10b3AtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci10b3Atd2lkdGgnKSkpO1xyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItbGVmdC10b3AtcmFkaXVzJykudmFsKHBhcnNlSW50KCQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJykpKTtcclxuICAgICQoJyNidXR0b24tYm9yZGVyLWxlZnQtdG9wLXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycpKSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItdG9wLXZhbHVlLCAjYnV0dG9uLWJvcmRlci10b3AtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItdG9wLXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiYnV0dG9uLWJvcmRlci10b3AtdmFsdWVcIikge1xyXG4gICAgICAgICQoJyNidXR0b24tYm9yZGVyLXRvcC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjYnV0dG9uLWJvcmRlci10b3AtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH1cclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNidXR0b24tYm9yZGVyLWxlZnQtdG9wLXJhZGl1cywgI2J1dHRvbi1ib3JkZXItbGVmdC10b3AtcmFkaXVzLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJidXR0b24tYm9yZGVyLWxlZnQtdG9wLXJhZGl1c1wiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1ib3JkZXItbGVmdC10b3AtcmFkaXVzLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNidXR0b24tYm9yZGVyLWxlZnQtdG9wLXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci10b3Atc3R5bGUtdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLXRvcC1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItdG9wLWNvbG9yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci10b3AtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgICAvKtCd0LDRgdGC0YDQvtC50LrQuCDQtNC70Y8g0L/RgNCw0LLQvtC5INCz0YDQsNC90LjRhtGLINCx0LvQvtC60LAqL1xyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItcmlnaHQtdmFsdWUnKS52YWwocGFyc2VJbnQoJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcpKSk7XHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci1yaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJykpKTtcclxuICAgICQoJyNidXR0b24tYm9yZGVyLXJpZ2h0LXJhZGl1cycpLnZhbChwYXJzZUludCgkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnKSkpO1xyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItcmlnaHQtcmFkaXVzLXJhbmdlJykudmFsKHBhcnNlSW50KCQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycpKSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItcmlnaHQtdmFsdWUsICNidXR0b24tYm9yZGVyLXJpZ2h0LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiYnV0dG9uLWJvcmRlci1yaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1ib3JkZXItcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1ib3JkZXItcmlnaHQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH1cclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItcmlnaHQtcmFkaXVzLCAjYnV0dG9uLWJvcmRlci1yaWdodC1yYWRpdXMtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiYnV0dG9uLWJvcmRlci1yaWdodC1yYWRpdXNcIikge1xyXG4gICAgICAgICQoJyNidXR0b24tYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjYnV0dG9uLWJvcmRlci1yaWdodC1yYWRpdXNlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuICAgICQoJyNidXR0b24tYm9yZGVyLXJpZ2h0LXN0eWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci1yaWdodC1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItcmlnaHQtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLXJpZ2h0LWNvbG9yJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKtCa0L7QvdC10YYg0LHQu9C+0LrQsCovXHJcblxyXG4gICAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC90LjQttC90LXQuSDQs9GA0LDQvdC40YbRiyDQsdC70L7QutCwKi9cclxuICAgICQoJyNidXR0b24tYm9yZGVyLWJvdHRvbS12YWx1ZScpLnZhbChwYXJzZUludCgkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcpKSk7XHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkpO1xyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycpLnZhbChwYXJzZUludCgkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnKSkpO1xyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnKSkpO1xyXG5cclxuICAgICQoJyNidXR0b24tYm9yZGVyLWJvdHRvbS12YWx1ZSwgI2J1dHRvbi1ib3JkZXItYm90dG9tLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1ib3JkZXItYm90dG9tLXZhbHVlXCIpIHtcclxuICAgICAgICAkKCcjYnV0dG9uLWJvcmRlci1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1ib3JkZXItYm90dG9tLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAjYnV0dG9uLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjYnV0dG9uLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci1ib3R0b20tc3R5bGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItYm90dG9tLWNvbG9yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20tY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgICAvKtCd0LDRgdGC0YDQvtC50LrQuCDQtNC70Y8g0LvQtdCy0L7QuSDQs9GA0LDQvdC40YbRiyDQsdC70L7QutCwKi9cclxuICAgICQoJyNidXR0b24tYm9yZGVyLWxlZnQtdmFsdWUnKS52YWwocGFyc2VJbnQoJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykpKTtcclxuICAgICQoJyNidXR0b24tYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykpKTtcclxuICAgICQoJyNidXR0b24tYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycpLnZhbChwYXJzZUludCgkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycpKSk7XHJcbiAgICAkKCcjYnV0dG9uLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnKSkpO1xyXG5cclxuICAgICQoJyNidXR0b24tYm9yZGVyLWxlZnQtdmFsdWUsICNidXR0b24tYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItbGVmdC13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1ib3JkZXItbGVmdC12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1ib3JkZXItbGVmdC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjYnV0dG9uLWJvcmRlci1sZWZ0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuICAgICQoJyNidXR0b24tYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgI2J1dHRvbi1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJidXR0b24tYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNidXR0b24tYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItbGVmdC1zdHlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItbGVmdC1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi1ib3JkZXItbGVmdC1jb2xvcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdib3JkZXItbGVmdC1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyrQmtC+0L3QtdGGINCx0LvQvtC60LAqL1xyXG5cclxuICAgIC8q0J3QsNGB0YLRgNC+0LnQutC4INGC0LXQvdC10LkqL1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvblNoYWRvd1JhZGlvT24nKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXNoYWRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB2YXIgaHYgPSAkKCcjYnV0dG9uLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgdnYgPSAkKCcjYnV0dG9uLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIGJsciA9ICQoJyNidXR0b24tc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBzcHJkID0gJCgnI2J1dHRvbi1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2J1dHRvbi1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2J1dHRvbi1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgICAgdmFyIGluc2V0ID0gJCgnI2J1dHRvbi1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25TaGFkb3dSYWRpb09mZicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tc2hhZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JveC1zaGFkb3cnLCAnbm9uZScpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNidXR0b24tc2hhZG93LWhvcml6b250YWwtdmFsdWUsICNidXR0b24tc2hhZG93LWhvcml6b250YWwtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBodiA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgdnYgPSAkKCcjYnV0dG9uLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIGJsciA9ICQoJyNidXR0b24tc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBzcHJkID0gJCgnI2J1dHRvbi1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2J1dHRvbi1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2J1dHRvbi1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgICAgdmFyIGluc2V0ID0gJCgnI2J1dHRvbi1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjYnV0dG9uLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZSwgI2J1dHRvbi1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBodiA9ICQoJyNidXR0b24tc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciB2diA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgYmxyID0gJCgnI2J1dHRvbi1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIHNwcmQgPSAkKCcjYnV0dG9uLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjYnV0dG9uLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjYnV0dG9uLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgICB2YXIgaW5zZXQgPSAkKCcjYnV0dG9uLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIHNwcmQgKyBcIiBcIiArIGNsciArIFwiIFwiICsgaW5zZXQ7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiYnV0dG9uLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH1cclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNidXR0b24tc2hhZG93LWJsdXItdmFsdWUsICNidXR0b24tc2hhZG93LWJsdXItdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBodiA9ICQoJyNidXR0b24tc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciB2diA9ICQoJyNidXR0b24tc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgYmxyID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBzcHJkID0gJCgnI2J1dHRvbi1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2J1dHRvbi1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2J1dHRvbi1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgICAgdmFyIGluc2V0ID0gJCgnI2J1dHRvbi1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1zaGFkb3ctYmx1ci12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1zaGFkb3ctYmx1ci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjYnV0dG9uLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLXNoYWRvdy1zcHJlYWQtdmFsdWUsICNidXR0b24tc2hhZG93LXNwcmVhZC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGh2ID0gJCgnI2J1dHRvbi1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIHZ2ID0gJCgnI2J1dHRvbi1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBibHIgPSAkKCcjYnV0dG9uLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgc3ByZCA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2J1dHRvbi1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2J1dHRvbi1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgICAgdmFyIGluc2V0ID0gJCgnI2J1dHRvbi1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1zaGFkb3ctc3ByZWFkLXZhbHVlXCIpIHtcclxuICAgICAgICAkKCcjYnV0dG9uLXNoYWRvdy1zcHJlYWQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLXNoYWRvdy1vcGFjaXR5LXZhbHVlLCAjYnV0dG9uLXNoYWRvdy1vcGFjaXR5LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgaHYgPSAkKCcjYnV0dG9uLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgdnYgPSAkKCcjYnV0dG9uLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIGJsciA9ICQoJyNidXR0b24tc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBzcHJkID0gJCgnI2J1dHRvbi1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2J1dHRvbi1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCh0aGlzKS52YWwoKSAvIDEwMCk7XHJcbiAgICAgIHZhciBpbnNldCA9ICQoJyNidXR0b24tc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiO1xyXG4gICAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJidXR0b24tc2hhZG93LW9wYWNpdHktdmFsdWVcIikge1xyXG4gICAgICAgICQoJyNidXR0b24tc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2J1dHRvbi1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2J1dHRvbi1zaGFkb3ctY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgaHYgPSAkKCcjYnV0dG9uLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgdnYgPSAkKCcjYnV0dG9uLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIGJsciA9ICQoJyNidXR0b24tc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBzcHJkID0gJCgnI2J1dHRvbi1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCh0aGlzKS52YWwoKSwgJCgnI2J1dHRvbi1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgICAgdmFyIGluc2V0ID0gJCgnI2J1dHRvbi1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNidXR0b24tc2hhZG93LWluc2V0LXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGh2ID0gJCgnI2J1dHRvbi1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIHZ2ID0gJCgnI2J1dHRvbi1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIHZhciBibHIgPSAkKCcjYnV0dG9uLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICB2YXIgc3ByZCA9ICQoJyNidXR0b24tc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNidXR0b24tc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNidXR0b24tc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICAgIHZhciBpbnNldCA9ICQodGhpcykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiO1xyXG4gICAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuICAgIC8q0JrQvtC90LXRhiDQvdCw0YHRgtGA0L7QtdC6INGC0LXQvdC10LkqL1xyXG5cclxuICAgIC8v0JLRi9GB0L7RgtCwINC60L3QvtC/0LrQuFxyXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUoYnV0dG9uV3JhcHBlckVsZW0pLmhlaWdodCA9PSAnYXV0bycpIHtcclxuICAgICAgYXV0b0hlaWdodC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF1dG9IZWlnaHQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgJCgnI2J1dHRvbi1oZWlnaHQtdmFsdWUnKS52YWwocGFyc2VJbnQoJChidXR0b25XcmFwcGVyRWxlbSkuY3NzKCdoZWlnaHQnKSkpO1xyXG4gICAgJCgnI2J1dHRvbi1oZWlnaHQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChidXR0b25XcmFwcGVyRWxlbSkuY3NzKCdoZWlnaHQnKSkpO1xyXG5cclxuICAgIGF1dG9IZWlnaHQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGF1dG9IZWlnaHQuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgYnV0dG9uV3JhcHBlckVsZW0uc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkKCcjYnV0dG9uLWhlaWdodC12YWx1ZSwgI2J1dHRvbi1oZWlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChhdXRvSGVpZ2h0LmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKGJ1dHRvbldyYXBwZXJFbGVtKS5jc3MoJ2hlaWdodCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiYnV0dG9uLWhlaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICAgICAkKCcjYnV0dG9uLWhlaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJCgnI2J1dHRvbi1oZWlnaHQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL9Co0LjRgNC40L3QsCDQutC90L7Qv9C60LhcclxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGJ1dHRvbldyYXBwZXJFbGVtKS53aWR0aCA9PSAnMTAwJScpIHtcclxuICAgICAgYXV0b1dpZHRoLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXV0b1dpZHRoLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgICQoJyNidXR0b24td2lkdGgtdmFsdWUnKS52YWwocGFyc2VJbnQoJChidXR0b25XcmFwcGVyRWxlbSkuY3NzKCd3aWR0aCcpKSk7XHJcbiAgICAkKCcjYnV0dG9uLXdpZHRoLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQoYnV0dG9uV3JhcHBlckVsZW0pLmNzcygnd2lkdGgnKSkpO1xyXG5cclxuICAgIGF1dG9XaWR0aC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoYXV0b1dpZHRoLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGJ1dHRvbldyYXBwZXJFbGVtLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkKCcjYnV0dG9uLXdpZHRoLXZhbHVlLCAjYnV0dG9uLXdpZHRoLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoYXV0b1dpZHRoLmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAkKGJ1dHRvbldyYXBwZXJFbGVtKS5jc3MoJ3dpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJidXR0b24td2lkdGgtdmFsdWVcIikge1xyXG4gICAgICAgICAgJCgnI2J1dHRvbi13aWR0aC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJCgnI2J1dHRvbi13aWR0aC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvKtCd0LDRgdGC0YDQvtC50LrQsCDQsNC90LjQvNCw0YbQuNC4Ki9cclxuXHJcbiAgICAkKCcjYnV0dG9uLWFuaW1hdGlvbi10eXBlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodGhpcykgIT0gXCJub25lXCIpIHtcclxuICAgICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYW5pbWF0aW9uLW5hbWUnLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAkKGJ1dHRvbkVsZW0pLmNzcygnYW5pbWF0aW9uLWRlbGF5JywgJCgnI2J1dHRvbi1hbmltYXRpb24tZGVsYXktdmFsdWUnKS52YWwoKSArICdzJyk7XHJcbiAgICAgICAgJChidXR0b25FbGVtKS5jc3MoJ2FuaW1hdGlvbi1kdXJhdGlvbicsICQoJyNidXR0b24tYW5pbWF0aW9uLWR1cmF0aW9uLXZhbHVlJykudmFsKCkgKyAncycpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLWFuaW1hdGlvbi1kZWxheS12YWx1ZSwgI2J1dHRvbi1hbmltYXRpb24tZGVsYXktdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdhbmltYXRpb24tZGVsYXknLCAkKHRoaXMpLnZhbCgpICsgJ3MnKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1hbmltYXRpb24tZGVsYXktdmFsdWVcIikge1xyXG4gICAgICAgICQoJyNidXR0b24tYW5pbWF0aW9uLWRlbGF5LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNidXR0b24tYW5pbWF0aW9uLWRlbGF5LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnV0dG9uLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZSwgI2J1dHRvbi1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoYnV0dG9uRWxlbSkuY3NzKCdhbmltYXRpb24tZHVyYXRpb24nLCAkKHRoaXMpLnZhbCgpICsgJ3MnKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi1hbmltYXRpb24tZHVyYXRpb24tdmFsdWVcIikge1xyXG4gICAgICAgICQoJyNidXR0b24tYW5pbWF0aW9uLWR1cmF0aW9uLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNidXR0b24tYW5pbWF0aW9uLWR1cmF0aW9uLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKtCa0L7QvdC10YYg0L3QsNGB0YLRgNC+0LXQuiDQsNC90LjQvNCw0YbQuNC4Ki9cclxuICAgIC8q0JHQu9C+0Log0YLQsNC50LzQsNGD0YLQsCovXHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLSEhIdCh0JTQldCb0JDQotCsISEhLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JpcHQtJyArIHRocy5hdHRyKCdpZCcpKSkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1kaXNwbGF5LW5vbmUtdmFsdWUnKS5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1kaXNwbGF5LW5vbmUtdmFsdWUnKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAkKCcjYnV0dG9uLWRpc3BsYXktbm9uZS12YWx1ZSwgI2J1dHRvbi10aW1lb3V0LWhvdXItdmFsdWUsICNidXR0b24tdGltZW91dC1ob3VyLXZhbHVlLXJhbmdlLCAjYnV0dG9uLXRpbWVvdXQtbWludXRlLXZhbHVlLCAjYnV0dG9uLXRpbWVvdXQtbWludXRlLXZhbHVlLXJhbmdlLCAjYnV0dG9uLXRpbWVvdXQtc2Vjb25kLXZhbHVlLCAjYnV0dG9uLXRpbWVvdXQtc2Vjb25kLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGlkID0gdGhzLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgdmFyIGhvdXJzID0gJCgnI2J1dHRvbi10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoKSAqIDM2MDA7XHJcbiAgICB2YXIgbWludXRlID0gJCgnI2J1dHRvbi10aW1lb3V0LW1pbnV0ZS12YWx1ZScpLnZhbCgpICogNjA7XHJcbiAgICB2YXIgc2Vjb25kID0gcGFyc2VJbnQoJCgnI2J1dHRvbi10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgpKTtcclxuXHJcbiAgICB2YXIgdGltZSA9IGhvdXJzICsgbWludXRlICsgc2Vjb25kO1xyXG5cclxuICAgIHRpbWUgPSB0aW1lICogMTAwMDtcclxuXHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tZGlzcGxheS1ub25lLXZhbHVlJykuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgICAgJCgnI21haW5BcmVhJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNvZGVcIiBpZD1cInNjcmlwdC0nICsgaWQgKyAnXCIgY2xhc3M9XCJjb2RlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPicgKyBbaWQsIHRpbWVdICsgJzwvc3Bhbj4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJidXR0b24tdGltZW91dC1ob3VyLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2J1dHRvbi10aW1lb3V0LWhvdXItdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImJ1dHRvbi10aW1lb3V0LWhvdXItdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjYnV0dG9uLXRpbWVvdXQtaG91ci12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiYnV0dG9uLXRpbWVvdXQtbWludXRlLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2J1dHRvbi10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiYnV0dG9uLXRpbWVvdXQtbWludXRlLXZhbHVlLXJhbmdlXCIpIHtcclxuICAgICAgJCgnI2J1dHRvbi10aW1lb3V0LW1pbnV0ZS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiYnV0dG9uLXRpbWVvdXQtc2Vjb25kLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2J1dHRvbi10aW1lb3V0LXNlY29uZC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiYnV0dG9uLXRpbWVvdXQtc2Vjb25kLXZhbHVlLXJhbmdlXCIpIHtcclxuICAgICAgJCgnI2J1dHRvbi10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0LHQu9C+0LrQsCDRgtCw0LnQvNCw0YPRgtCwKi9cclxuICB9KTtcclxufSkoKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGVsZXRlTGluayhlbCkge1xyXG4gIGxldCBjb250ZW50ID0gZWwuaW5uZXJIVE1MO1xyXG4gIGNvbnN0IHJlT3BlbiA9IG5ldyBSZWdFeHAoJzxhW14+XSo+JywgJ2dpJyk7XHJcbiAgY29uc3QgcmVDbG9zZSA9IG5ldyBSZWdFeHAoJzwvYVtePl0qPicsICdnaScpO1xyXG4gIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UocmVPcGVuLCBcIlwiKTtcclxuICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlQ2xvc2UsIFwiXCIpO1xyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG4vKtCf0LXRgNC10LLQvtC0IGhleCDQsiBSR0IgKNCz0LTQtS3RgtC+INGC0L7Rh9C90L4g0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPLCDRg9C20LUg0L3QtSDQv9C+0LzQvdGOKSovXHJcbmZ1bmN0aW9uIGhleFRvUkdCKGhleCwgYWxwaGEpIHtcclxuICB2YXIgciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpLFxyXG4gICAgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpLFxyXG4gICAgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpO1xyXG5cclxuICBpZiAoYWxwaGEpIHtcclxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xyXG4gIH0gZWxzZSBpZiAoYWxwaGEgPT0gMCkge1xyXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBcInJnYihcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiKVwiO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9