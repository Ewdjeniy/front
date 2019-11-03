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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/modules/list/listSettings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/modules/list/listSettings.js":
/*!**********************************************!*\
  !*** ./src/API/modules/list/listSettings.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('#mainArea').on('click', '.copyList', function () {
  var listBlockId = $(this).parents('.listBlock').attr('id');
  var listBlockElem = document.getElementById(listBlockId);
  var clonId = 'list' + getRandom();
  $(listBlockElem).clone(true).attr('id', clonId).insertAfter(listBlockElem);
  addFunctionalityToListElement(clonId);
  makePreview();
});
$('#mainArea').on('click', '.listSet', function (e) {
  var ths = $(this).parents('.listBlock');
  var listBlockElem = document.getElementById($(ths).attr('id'));
  var listWrapperElem = listBlockElem.getElementsByClassName('listWrapper')[0];
  var listEl = listBlockElem.getElementsByClassName('list')[0];
  var addListItemEl = document.getElementById('addListItem');
  var listImages = document.getElementById('list-icon-style-settings').getElementsByTagName('img');
  var listItems = listEl.getElementsByTagName('li'); //Появление правой панели, инициализация инпутов.

  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#list-animation-type-value').off();

  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#list-timeout-hour-value').val(h);
    $('#list-timeout-minute-value').val(m);
    $('#list-timeout-second-value').val(s);
    $('#list-display-none-value').prop('checked', true);
  } else {
    $('#list-timeout-hour-value').val(0);
    $('#list-timeout-minute-value').val(0);
    $('#list-timeout-second-value').val(0);
  }

  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated'); // Закрыть панель

  document.addEventListener('mousedown', closeRightPanel); //Настройки отступов формы

  showHideSettings('margins', 'marginsIndicator');
  showHideSettings('listMarginEvery', 'listMarginGroupIndicator');
  $('#list-margin-top-value').val(parseInt(getComputedStyle(listBlockElem).marginTop));
  $('#list-margin-top-value-range').val(parseInt(getComputedStyle(listBlockElem).marginTop));
  $('#list-margin-right-value').val(parseInt(getComputedStyle(listBlockElem).marginRight));
  $('#list-margin-right-value-range').val(parseInt(getComputedStyle(listBlockElem).marginRight));
  $('#list-margin-bottom-value').val(parseInt(getComputedStyle(listBlockElem).marginBottom));
  $('#list-margin-bottom-value-range').val(parseInt(getComputedStyle(listBlockElem).marginBottom));
  $('#list-margin-left-value').val(parseInt(getComputedStyle(listBlockElem).marginLeft));
  $('#list-margin-left-value-range').val(parseInt(getComputedStyle(listBlockElem).marginLeft));
  $('#list-margin-top-value, #list-margin-top-value-range').on('input', function () {
    $(listBlockElem).css('margin-top', '');
    var val = $(this).val();
    $(listBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "list-margin-top-value") {
      $('#list-margin-top-value-range').val($(this).val());
    } else {
      $('#list-margin-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#list-margin-right-value, #list-margin-right-value-range').on('input', function () {
    $(listBlockElem).css('margin-right', '');
    var val = $(this).val();
    $(listBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "list-margin-right-value") {
      $('#list-margin-right-value-range').val($(this).val());
    } else {
      $('#list-margin-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#list-margin-bottom-value, #list-margin-bottom-value-range').on('input', function () {
    $(listBlockElem).css('margin-bottom', '');
    var val = $(this).val();
    $(listBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "list-margin-bottom-value") {
      $('#list-margin-bottom-value-range').val($(this).val());
    } else {
      $('#list-margin-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#list-margin-left-value, #list-margin-left-value-range').on('input', function () {
    $(listBlockElem).css('margin-left', '');
    var val = $(this).val();
    $(listBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "list-margin-left-value") {
      $('#list-margin-left-value-range').val($(this).val());
    } else {
      $('#list-margin-left-value').val($(this).val());
    }

    makePreview();
  }); //Вертикальное выравнивание формы

  showHideSettings('list-show-vertical-settings', 'listVerticalIndicator');

  if (getComputedStyle(listBlockElem).marginTop == 'auto') {
    listMarginBottom.checked = true;
    listMarginTop.checked = false;
    listMarginCenter.checked = false;
  } else if (getComputedStyle(listBlockElem).marginBottom == 'auto') {
    listMarginBottom.checked = false;
    listMarginTop.checked = true;
    listMarginCenter.checked = false;
  } else if (getComputedStyle(listBlockElem).marginTop == '0px' && getComputedStyle(listBlockElem).marginBottom == '0px') {
    listMarginBottom.checked = false;
    listMarginTop.checked = false;
    listMarginCenter.checked = true;
  }

  listMarginTop.onclick = function () {
    listBlockElem.style.marginTop = '0px';
    listBlockElem.style.marginBottom = 'auto';
    makePreview();
  };

  listMarginCenter.onclick = function () {
    listBlockElem.style.marginTop = '0px';
    listBlockElem.style.marginBottom = '0px';
    makePreview();
  };

  listMarginBottom.onclick = function () {
    listBlockElem.style.marginTop = 'auto';
    listBlockElem.style.marginBottom = '0px';
    makePreview();
  }; //Выбор иконки


  showHideSettings('listSettings', 'listSettingsIndicator');
  showHideSettings('list-icon-style-settings', 'listIconStyleIndicator');

  var _loop = function _loop(i) {
    listImages[i].onclick = function () {
      for (var j = 0; j < listItems.length; j++) {
        listItems[j].style.backgroundImage = 'url("' + listImages[i].src + '")';
      }

      makePreview();
    };
  };

  for (var i = 0; i < listImages.length; i++) {
    _loop(i);
  } //Добавление строки


  showHideSettings('list-add-string-settings', 'listAddStringIndicator');

  function changeListValues(liItems) {
    var liValuesWrapper = document.getElementById('liItems');
    liValuesWrapper.innerHTML = '';

    var _loop2 = function _loop2(_i) {
      var div = document.createElement('div');
      var span = document.createElement('span');
      var listValue = document.createElement('input');
      listValue.type = 'text';
      listValue.value = liItems[_i].innerHTML;
      span.innerHTML = 'X';
      liValuesWrapper.append(div);
      div.append(listValue);
      div.append(span);

      listValue.oninput = function () {
        liItems[_i].innerHTML = listValue.value;
        makePreview();
      };

      span.onclick = function () {
        liItems[_i].remove();

        changeListValues(liItems);
        makePreview();
      };
    };

    for (var _i = 0; _i < liItems.length; _i++) {
      _loop2(_i);
    }
  }

  changeListValues(listItems);

  addListItemEl.onclick = function () {
    var newLi = document.createElement('li');
    newLi.innerHTML = 'Описание';
    listEl.append(newLi);
    changeListValues(listItems);
    listEl = listBlockElem.getElementsByClassName('list')[0];
    listItems = listEl.getElementsByTagName('li');

    for (var _i2 = 0; _i2 < listItems.length; _i2++) {
      if (_i2 < listItems.length - 1) {
        $(listItems[_i2]).css('margin-bottom', $('#list-space-value').val() + 'px');
      }
    }

    if (listItems[0]) {
      newLi.style.backgroundImage = listItems[0].style.backgroundImage;
    }

    makePreview();
  }; //Отступ между строк


  showHideSettings('show-list-space-settings', 'listSpaceIndicator');
  $('#list-space-value').val(parseInt(getComputedStyle(listItems[0]).marginBottom));
  $('#list-space-value-range').val(parseInt(getComputedStyle(listItems[0]).marginBottom));
  $('#list-space-value, #list-space-value-range').on('input', function () {
    for (var _i3 = 0; _i3 < listItems.length; _i3++) {
      if (_i3 < listItems.length - 1) {
        $(listItems[_i3]).css('margin-bottom', $(this).val() + 'px');
      }
    }

    if ($(this).attr('id') == "list-space-value") {
      $('#list-space-value-range').val($(this).val());
    } else {
      $('#list-space-value').val($(this).val());
    }

    makePreview();
  }); //Выбор шрифта

  showHideSettings('show-font-settings', 'listFontIndicator');
  showHideSettings('list-font-family-settings', 'listFontFamilyIndicator');
  listFontFamilySelect.value = getComputedStyle(listEl).fontFamily;

  listFontFamilySelect.onchange = function () {
    listEl.style.fontFamily = listFontFamilySelect.value;
    makePreview();
  };

  if (getComputedStyle(listEl).fontWeight == '900') {
    listBold.checked = true;
  } else {
    listBold.checked = false;
  }

  listBold.onclick = function () {
    if (listBold.checked) {
      listEl.style.fontWeight = '900';
    } else {
      listEl.style.fontWeight = 'normal';
    }

    makePreview();
  }; //Размер шрифта


  showHideSettings('list-font-size-settings', 'listFontSizeIndicator');
  $('#list-font-size-value').val(parseInt(getComputedStyle(listEl).fontSize));
  $('#list-font-size-value-range').val(parseInt(getComputedStyle(listEl).fontSize));
  $('#list-font-size-value, #list-font-size-value-range').on('input', function () {
    $(listEl).css('font-size', $(this).val() + 'px');

    if ($(this).attr('id') == "list-font-size-value") {
      $('#list-font-size-value-range').val($(this).val());
    } else {
      $('#list-font-size-value').val($(this).val());
    }

    makePreview();
  }); //Межстрочный интервал

  showHideSettings('list-line-height-settings', 'listLineHeightIndicator');
  $('#list-line-height-value').val(parseInt(getComputedStyle(listEl).lineHeight));
  $('#list-line-height-value-range').val(parseInt(getComputedStyle(listEl).lineHeight));
  $('#list-line-height-value, #list-line-height-value-range').on('input', function () {
    $(listEl).css('line-height', $(this).val() + 'px');

    if ($(this).attr('id') == "list-line-height-value") {
      $('#list-line-height-value-range').val($(this).val());
    } else {
      $('#list-line-height-value').val($(this).val());
    }

    makePreview();
  }); //Выбор цвета

  showHideSettings('list-font-color-settings', 'listFontColorIndicator');
  $('#list-color-value').on('change', function () {
    $(listEl).css('color', $(this).val());
    makePreview();
  }); //Тени шрифта

  showHideSettings('show-list-text-shadow-settings', 'listTextShadowIndicator');

  document.getElementById('listTextShadowRadioOn').onclick = function () {
    document.getElementById('list-text-shadow').style.display = 'block';
    var hv = $('#list-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#list-text-shadow-vertical-value').val() + 'px';
    var blr = $('#list-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#list-text-shadow-color-value').val(), $('#list-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);
    makePreview();
  };

  document.getElementById('listTextShadowRadioOff').onclick = function () {
    document.getElementById('list-text-shadow').style.display = 'none';
    $(listEl).css('text-shadow', 'none');
    makePreview();
  };

  $('#list-text-shadow-horizontal-value, #list-text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#list-text-shadow-vertical-value').val() + 'px';
    var blr = $('#list-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#list-text-shadow-color-value').val(), $('#list-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);

    if ($(this).attr('id') == "list-text-shadow-horizontal-value") {
      $('#list-text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#list-text-shadow-horizontal-value').val($(this).val());
    }

    makePreview();
  });
  $('#list-text-shadow-vertical-value, #list-text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#list-text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#list-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#list-text-shadow-color-value').val(), $('#list-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);

    if ($(this).attr('id') == "list-text-shadow-vertical-value") {
      $('#list-text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#list-text-shadow-vertical-value').val($(this).val());
    }

    makePreview();
  });
  $('#list-text-shadow-blur-value, #list-text-shadow-blur-value-range').on('input', function () {
    var hv = $('#list-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#list-text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = hexToRGB($('#list-text-shadow-color-value').val(), $('#list-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);

    if ($(this).attr('id') == "list-text-shadow-blur-value") {
      $('#list-text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#list-text-shadow-blur-value').val($(this).val());
    }

    makePreview();
  });
  $('#list-text-shadow-opacity-value, #list-text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#list-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#list-text-shadow-vertical-value').val() + 'px';
    var blr = $('#list-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#list-text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);

    if ($(this).attr('id') == "list-text-shadow-opacity-value") {
      $('#list-text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#list-text-shadow-opacity-value').val($(this).val());
    }

    makePreview();
  });
  $('#list-text-shadow-color-value').on('change', function () {
    var hv = $('#list-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#list-text-shadow-vertical-value').val() + 'px';
    var blr = $('#list-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#list-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);
    makePreview();
  });
  /*Конец настроек тени submit*/
  //Анимация

  showHideSettings('show-list-animation-settings', 'listAnimationIndicator');
  $('#list-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(listBlockElem).css('animation-name', $(this).val());
      $(listBlockElem).css('animation-delay', $('#list-animation-delay-value').val() + 's');
      $(listBlockElem).css('animation-duration', $('#list-animation-duration-value').val() + 's');
    }

    makePreview();
  });
  $('#list-animation-delay-value, #list-animation-delay-value-range').on('input', function () {
    $(listBlockElem).css('animation-delay', $(this).val() + 's');

    if ($(this).attr('id') == "list-animation-delay-value") {
      $('#list-animation-delay-value-range').val($(this).val());
    } else {
      $('#list-animation-delay-value').val($(this).val());
    }

    makePreview();
  });
  $('#list-animation-duration-value, #list-animation-duration-value-range').on('input', function () {
    $(listBlockElem).css('animation-duration', $(this).val() + 's');

    if ($(this).attr('id') == "list-animation-duration-value") {
      $('#list-animation-duration-value-range').val($(this).val());
    } else {
      $('#list-animation-duration-value').val($(this).val());
    }

    makePreview();
  }); //Скрытие блока

  showHideSettings('show-list-timeout-settings', 'listTimeoutIndicator');

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('list-display-none-value').checked = true;
  } else {
    document.getElementById('list-display-none-value').checked = false;
  }

  $('#list-display-none-value, #list-timeout-hour-value, #list-timeout-hour-value-range, #list-timeout-minute-value, #list-timeout-minute-value-range, #list-timeout-second-value, #list-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#list-timeout-hour-value').val() * 3600;
    var minute = $('#list-timeout-minute-value').val() * 60;
    var second = parseInt($('#list-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;

    if (document.getElementById('list-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }

    if ($(this).attr('id') == "list-timeout-hour-value") {
      $('#list-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "list-timeout-hour-value-range") {
      $('#list-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "list-timeout-minute-value") {
      $('#list-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "list-timeout-minute-value-range") {
      $('#list-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "list-timeout-second-value") {
      $('#list-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "list-timeout-second-value-range") {
      $('#list-timeout-second-value').val($(this).val());
    }

    makePreview();
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL2xpc3QvbGlzdFNldHRpbmdzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsImxpc3RCbG9ja0lkIiwicGFyZW50cyIsImF0dHIiLCJsaXN0QmxvY2tFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsb25JZCIsImdldFJhbmRvbSIsImNsb25lIiwiaW5zZXJ0QWZ0ZXIiLCJhZGRGdW5jdGlvbmFsaXR5VG9MaXN0RWxlbWVudCIsIm1ha2VQcmV2aWV3IiwiZSIsInRocyIsImxpc3RXcmFwcGVyRWxlbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsaXN0RWwiLCJhZGRMaXN0SXRlbUVsIiwibGlzdEltYWdlcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGlzdEl0ZW1zIiwib2ZmIiwidGltZSIsInBhcnNlSW50IiwiaW5uZXJIVE1MIiwic3BsaXQiLCJoIiwiTWF0aCIsImZsb29yIiwibSIsInMiLCJ2YWwiLCJwcm9wIiwiaGlkZSIsInNob3ciLCJjc3MiLCJyaWdodCIsInRyYW5zaXRpb24iLCJhZGRDbGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZVJpZ2h0UGFuZWwiLCJzaG93SGlkZVNldHRpbmdzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsImkiLCJsaXN0TWFyZ2luQm90dG9tIiwiY2hlY2tlZCIsImxpc3RNYXJnaW5Ub3AiLCJsaXN0TWFyZ2luQ2VudGVyIiwib25jbGljayIsInN0eWxlIiwiaiIsImxlbmd0aCIsImJhY2tncm91bmRJbWFnZSIsInNyYyIsImNoYW5nZUxpc3RWYWx1ZXMiLCJsaUl0ZW1zIiwibGlWYWx1ZXNXcmFwcGVyIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInNwYW4iLCJsaXN0VmFsdWUiLCJ0eXBlIiwidmFsdWUiLCJhcHBlbmQiLCJvbmlucHV0IiwicmVtb3ZlIiwibmV3TGkiLCJsaXN0Rm9udEZhbWlseVNlbGVjdCIsImZvbnRGYW1pbHkiLCJvbmNoYW5nZSIsImZvbnRXZWlnaHQiLCJsaXN0Qm9sZCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImRpc3BsYXkiLCJodiIsInZ2IiwiYmxyIiwiY2xyIiwiaGV4VG9SR0IiLCJwcnB0cyIsImlkIiwiaG91cnMiLCJtaW51dGUiLCJzZWNvbmQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlQyxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFdBQTNCLEVBQXdDLFlBQVk7QUFDbEQsTUFBTUMsV0FBVyxHQUFHRixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLE9BQVIsQ0FBZ0IsWUFBaEIsRUFBOEJDLElBQTlCLENBQW1DLElBQW5DLENBQXBCO0FBQ0EsTUFB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LENBQUQsQ0FBUWlDLEdBQVIsRUFBbEM7QUFDRCxLQUZNLE1BRUEsSUFBSWpDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsMkJBQTFCLEVBQXVEO0FBQzVESixPQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ2lDLEdBQXRDLENBQTBDakMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUMsR0FBUixFQUExQztBQUNELEtBRk0sTUFFQSxJQUFJakMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQixpQ0FBMUIsRUFBNkQ7QUFDbEVKLE9BQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDaUMsR0FBaEMsQ0FBb0NqQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpQyxHQUFSLEVBQXBDO0FBQ0QsS0FGTSxNQUVBLElBQUlqQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDJCQUExQixFQUF1RDtBQUM1REosT0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NpQyxHQUF0QyxDQUEwQ2pDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlDLEdBQVIsRUFBMUM7QUFDRCxLQUZNLE1BRUEsSUFBSWpDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsaUNBQTFCLEVBQTZEO0FBQ2xFSixPQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ2lDLEdBQWhDLENBQW9DakMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUMsR0FBUixFQUFwQztBQUNEOztBQUNEcEIsZUFBVztBQUVaLEdBcENEO0FBc0NELENBMWRELEUiLCJmaWxlIjoibGlzdF9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0FQSS9tb2R1bGVzL2xpc3QvbGlzdFNldHRpbmdzLmpzXCIpO1xuIiwiJCgnI21haW5BcmVhJykub24oJ2NsaWNrJywgJy5jb3B5TGlzdCcsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBsaXN0QmxvY2tJZCA9ICQodGhpcykucGFyZW50cygnLmxpc3RCbG9jaycpLmF0dHIoJ2lkJyk7XHJcbiAgY29uc3QgbGlzdEJsb2NrRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3RCbG9ja0lkKTtcclxuICBjb25zdCBjbG9uSWQgPSAnbGlzdCcgKyBnZXRSYW5kb20oKTtcclxuICAkKGxpc3RCbG9ja0VsZW0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgY2xvbklkKS5pbnNlcnRBZnRlcihsaXN0QmxvY2tFbGVtKTtcclxuXHJcbiAgYWRkRnVuY3Rpb25hbGl0eVRvTGlzdEVsZW1lbnQoY2xvbklkKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbiQoJyNtYWluQXJlYScpLm9uKCdjbGljaycsICcubGlzdFNldCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgY29uc3QgdGhzID0gJCh0aGlzKS5wYXJlbnRzKCcubGlzdEJsb2NrJyk7XHJcbiAgY29uc3QgbGlzdEJsb2NrRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQodGhzKS5hdHRyKCdpZCcpKTtcclxuICBjb25zdCBsaXN0V3JhcHBlckVsZW0gPSBsaXN0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpc3RXcmFwcGVyJylbMF07XHJcbiAgbGV0IGxpc3RFbCA9IGxpc3RCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlzdCcpWzBdO1xyXG4gIGNvbnN0IGFkZExpc3RJdGVtRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdEl0ZW0nKTtcclxuICBjb25zdCBsaXN0SW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtaWNvbi1zdHlsZS1zZXR0aW5ncycpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcclxuICBsZXQgbGlzdEl0ZW1zID0gbGlzdEVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG5cclxuICAvL9Cf0L7Rj9Cy0LvQtdC90LjQtSDQv9GA0LDQstC+0Lkg0L/QsNC90LXQu9C4LCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQuNC90L/Rg9GC0L7Qsi5cclxuICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2Om5vdCgjc2V0dGluZ3MtbW4pIGlucHV0Jykub2ZmKCdpbnB1dCcpO1xyXG4gICQoJyNyaWdodFNpZGViYXIgPiBkaXY6bm90KCNzZXR0aW5ncy1tbikgaW5wdXQnKS5vZmYoKTtcclxuICAkKCcjbGlzdC1hbmltYXRpb24tdHlwZS12YWx1ZScpLm9mZigpO1xyXG5cclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpKSB7XHJcbiAgICB2YXIgdGltZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JpcHQtJyArIHRocy5hdHRyKCdpZCcpKS5pbm5lckhUTUwuc3BsaXQoJywnKVsxXSkgLyAxMDAwO1xyXG4gICAgdmFyIGggPSBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKTtcclxuICAgIHZhciBtID0gTWF0aC5mbG9vcigodGltZSAtIDM2MDAgKiBoKSAvIDYwKTtcclxuICAgIHZhciBzID0gdGltZSAtICgzNjAwICogaCArIDYwICogbSk7XHJcbiAgICAkKCcjbGlzdC10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoaCk7XHJcbiAgICAkKCcjbGlzdC10aW1lb3V0LW1pbnV0ZS12YWx1ZScpLnZhbChtKTtcclxuICAgICQoJyNsaXN0LXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKHMpO1xyXG4gICAgJCgnI2xpc3QtZGlzcGxheS1ub25lLXZhbHVlJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCcjbGlzdC10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoMCk7XHJcbiAgICAkKCcjbGlzdC10aW1lb3V0LW1pbnV0ZS12YWx1ZScpLnZhbCgwKTtcclxuICAgICQoJyNsaXN0LXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKDApO1xyXG4gIH1cclxuICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2JykuaGlkZSgpO1xyXG4gICQoJyNzZXR0aW5ncy1tbicpLmhpZGUoKTtcclxuICAkKCcjbWFpbi1ibG9jay1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjY29udGVudC1ibG9jay1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjaW1hZ2Utc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3ZpZGVvLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyN0ZXh0LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNidXR0b24tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2Zvcm0tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3N1YnNjcmliZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGluZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGlzdC1zZXR0aW5ncycpLnNob3coKTtcclxuICAkKCcjcmlnaHRTaWRlYmFyJykuY3NzKHtcclxuICAgIHJpZ2h0OiAnMHB4JyxcclxuICAgIHRyYW5zaXRpb246ICcwLjRzIGFsbCBlYXNlLWluJ1xyXG4gIH0pLmFkZENsYXNzKCdhY3RpdmF0ZWQnKTtcclxuXHJcbiAgLy8g0JfQsNC60YDRi9GC0Ywg0L/QsNC90LXQu9GMXHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlUmlnaHRQYW5lbCk7XHJcblxyXG4gIC8v0J3QsNGB0YLRgNC+0LnQutC4INC+0YLRgdGC0YPQv9C+0LIg0YTQvtGA0LzRi1xyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdtYXJnaW5zJywgJ21hcmdpbnNJbmRpY2F0b3InKTtcclxuICBzaG93SGlkZVNldHRpbmdzKCdsaXN0TWFyZ2luRXZlcnknLCAnbGlzdE1hcmdpbkdyb3VwSW5kaWNhdG9yJyk7XHJcblxyXG4gICQoJyNsaXN0LW1hcmdpbi10b3AtdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShsaXN0QmxvY2tFbGVtKS5tYXJnaW5Ub3ApKTtcclxuICAkKCcjbGlzdC1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobGlzdEJsb2NrRWxlbSkubWFyZ2luVG9wKSk7XHJcbiAgJCgnI2xpc3QtbWFyZ2luLXJpZ2h0LXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobGlzdEJsb2NrRWxlbSkubWFyZ2luUmlnaHQpKTtcclxuICAkKCcjbGlzdC1tYXJnaW4tcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShsaXN0QmxvY2tFbGVtKS5tYXJnaW5SaWdodCkpO1xyXG4gICQoJyNsaXN0LW1hcmdpbi1ib3R0b20tdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShsaXN0QmxvY2tFbGVtKS5tYXJnaW5Cb3R0b20pKTtcclxuICAkKCcjbGlzdC1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobGlzdEJsb2NrRWxlbSkubWFyZ2luQm90dG9tKSk7XHJcbiAgJCgnI2xpc3QtbWFyZ2luLWxlZnQtdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShsaXN0QmxvY2tFbGVtKS5tYXJnaW5MZWZ0KSk7XHJcbiAgJCgnI2xpc3QtbWFyZ2luLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShsaXN0QmxvY2tFbGVtKS5tYXJnaW5MZWZ0KSk7XHJcblxyXG4gICQoJyNsaXN0LW1hcmdpbi10b3AtdmFsdWUsICNsaXN0LW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGxpc3RCbG9ja0VsZW0pLmNzcygnbWFyZ2luLXRvcCcsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChsaXN0QmxvY2tFbGVtKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLXRvcDonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgfSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibGlzdC1tYXJnaW4tdG9wLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2xpc3QtbWFyZ2luLXRvcC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNsaXN0LW1hcmdpbi10b3AtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNsaXN0LW1hcmdpbi1yaWdodC12YWx1ZSwgI2xpc3QtbWFyZ2luLXJpZ2h0LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChsaXN0QmxvY2tFbGVtKS5jc3MoJ21hcmdpbi1yaWdodCcsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChsaXN0QmxvY2tFbGVtKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLXJpZ2h0OicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJsaXN0LW1hcmdpbi1yaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNsaXN0LW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNsaXN0LW1hcmdpbi1yaWdodC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI2xpc3QtbWFyZ2luLWJvdHRvbS12YWx1ZSwgI2xpc3QtbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQobGlzdEJsb2NrRWxlbSkuY3NzKCdtYXJnaW4tYm90dG9tJywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKGxpc3RCbG9ja0VsZW0pLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tYm90dG9tOicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJsaXN0LW1hcmdpbi1ib3R0b20tdmFsdWVcIikge1xyXG4gICAgICAkKCcjbGlzdC1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2xpc3QtbWFyZ2luLWJvdHRvbS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI2xpc3QtbWFyZ2luLWxlZnQtdmFsdWUsICNsaXN0LW1hcmdpbi1sZWZ0LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChsaXN0QmxvY2tFbGVtKS5jc3MoJ21hcmdpbi1sZWZ0JywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKGxpc3RCbG9ja0VsZW0pLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tbGVmdDonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgfSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibGlzdC1tYXJnaW4tbGVmdC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNsaXN0LW1hcmdpbi1sZWZ0LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2xpc3QtbWFyZ2luLWxlZnQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvL9CS0LXRgNGC0LjQutCw0LvRjNC90L7QtSDQstGL0YDQsNCy0L3QuNCy0LDQvdC40LUg0YTQvtGA0LzRi1xyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdsaXN0LXNob3ctdmVydGljYWwtc2V0dGluZ3MnLCAnbGlzdFZlcnRpY2FsSW5kaWNhdG9yJyk7XHJcblxyXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGxpc3RCbG9ja0VsZW0pLm1hcmdpblRvcCA9PSAnYXV0bycpIHtcclxuICAgIGxpc3RNYXJnaW5Cb3R0b20uY2hlY2tlZCA9IHRydWU7XHJcbiAgICBsaXN0TWFyZ2luVG9wLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIGxpc3RNYXJnaW5DZW50ZXIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShsaXN0QmxvY2tFbGVtKS5tYXJnaW5Cb3R0b20gPT0gJ2F1dG8nKSB7XHJcbiAgICBsaXN0TWFyZ2luQm90dG9tLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIGxpc3RNYXJnaW5Ub3AuY2hlY2tlZCA9IHRydWU7XHJcbiAgICBsaXN0TWFyZ2luQ2VudGVyLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9IGVsc2UgaWYgKGdldENvbXB1dGVkU3R5bGUobGlzdEJsb2NrRWxlbSkubWFyZ2luVG9wID09ICcwcHgnICYmIGdldENvbXB1dGVkU3R5bGUobGlzdEJsb2NrRWxlbSkubWFyZ2luQm90dG9tID09ICcwcHgnKSB7XHJcbiAgICBsaXN0TWFyZ2luQm90dG9tLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIGxpc3RNYXJnaW5Ub3AuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgbGlzdE1hcmdpbkNlbnRlci5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcbiAgbGlzdE1hcmdpblRvcC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdEJsb2NrRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnMHB4JztcclxuICAgIGxpc3RCbG9ja0VsZW0uc3R5bGUubWFyZ2luQm90dG9tID0gJ2F1dG8nO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcbiAgbGlzdE1hcmdpbkNlbnRlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdEJsb2NrRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnMHB4JztcclxuICAgIGxpc3RCbG9ja0VsZW0uc3R5bGUubWFyZ2luQm90dG9tID0gJzBweCc7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuICBsaXN0TWFyZ2luQm90dG9tLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0QmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICdhdXRvJztcclxuICAgIGxpc3RCbG9ja0VsZW0uc3R5bGUubWFyZ2luQm90dG9tID0gJzBweCc7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuXHJcbiAgLy/QktGL0LHQvtGAINC40LrQvtC90LrQuFxyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdsaXN0U2V0dGluZ3MnLCAnbGlzdFNldHRpbmdzSW5kaWNhdG9yJyk7XHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnbGlzdC1pY29uLXN0eWxlLXNldHRpbmdzJywgJ2xpc3RJY29uU3R5bGVJbmRpY2F0b3InKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0SW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsaXN0SW1hZ2VzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGlzdEl0ZW1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgbGlzdEl0ZW1zW2pdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCInICsgbGlzdEltYWdlc1tpXS5zcmMgKyAnXCIpJztcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/QlNC+0LHQsNCy0LvQtdC90LjQtSDRgdGC0YDQvtC60LhcclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnbGlzdC1hZGQtc3RyaW5nLXNldHRpbmdzJywgJ2xpc3RBZGRTdHJpbmdJbmRpY2F0b3InKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlTGlzdFZhbHVlcyhsaUl0ZW1zKSB7XHJcbiAgICBjb25zdCBsaVZhbHVlc1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlJdGVtcycpO1xyXG4gICAgbGlWYWx1ZXNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgY29uc3QgbGlzdFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgICAgIGxpc3RWYWx1ZS50eXBlID0gJ3RleHQnO1xyXG4gICAgICBsaXN0VmFsdWUudmFsdWUgPSBsaUl0ZW1zW2ldLmlubmVySFRNTDtcclxuICAgICAgc3Bhbi5pbm5lckhUTUwgPSAnWCc7XHJcbiAgICAgIGxpVmFsdWVzV3JhcHBlci5hcHBlbmQoZGl2KTtcclxuICAgICAgZGl2LmFwcGVuZChsaXN0VmFsdWUpO1xyXG4gICAgICBkaXYuYXBwZW5kKHNwYW4pO1xyXG5cclxuICAgICAgbGlzdFZhbHVlLm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGlJdGVtc1tpXS5pbm5lckhUTUwgPSBsaXN0VmFsdWUudmFsdWU7XHJcbiAgICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgICAgfVxyXG4gICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGlJdGVtc1tpXS5yZW1vdmUoKTtcclxuICAgICAgICBjaGFuZ2VMaXN0VmFsdWVzKGxpSXRlbXMpO1xyXG4gICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY2hhbmdlTGlzdFZhbHVlcyhsaXN0SXRlbXMpO1xyXG5cclxuICBhZGRMaXN0SXRlbUVsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgbmV3TGkuaW5uZXJIVE1MID0gJ9Ce0L/QuNGB0LDQvdC40LUnO1xyXG4gICAgbGlzdEVsLmFwcGVuZChuZXdMaSk7XHJcbiAgICBjaGFuZ2VMaXN0VmFsdWVzKGxpc3RJdGVtcyk7XHJcbiAgICBsaXN0RWwgPSBsaXN0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpc3QnKVswXTtcclxuICAgIGxpc3RJdGVtcyA9IGxpc3RFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChpIDwgbGlzdEl0ZW1zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAkKGxpc3RJdGVtc1tpXSkuY3NzKCdtYXJnaW4tYm90dG9tJywgJCgnI2xpc3Qtc3BhY2UtdmFsdWUnKS52YWwoKSArICdweCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobGlzdEl0ZW1zWzBdKSB7XHJcbiAgICAgIG5ld0xpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGxpc3RJdGVtc1swXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8v0J7RgtGB0YLRg9C/INC80LXQttC00YMg0YHRgtGA0L7QulxyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdzaG93LWxpc3Qtc3BhY2Utc2V0dGluZ3MnLCAnbGlzdFNwYWNlSW5kaWNhdG9yJyk7XHJcblxyXG4gICQoJyNsaXN0LXNwYWNlLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobGlzdEl0ZW1zWzBdKS5tYXJnaW5Cb3R0b20pKTtcclxuICAkKCcjbGlzdC1zcGFjZS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGxpc3RJdGVtc1swXSkubWFyZ2luQm90dG9tKSk7XHJcbiAgJCgnI2xpc3Qtc3BhY2UtdmFsdWUsICNsaXN0LXNwYWNlLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGkgPCBsaXN0SXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICQobGlzdEl0ZW1zW2ldKS5jc3MoJ21hcmdpbi1ib3R0b20nLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJsaXN0LXNwYWNlLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2xpc3Qtc3BhY2UtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbGlzdC1zcGFjZS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0JLRi9Cx0L7RgCDRiNGA0LjRhNGC0LBcclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnc2hvdy1mb250LXNldHRpbmdzJywgJ2xpc3RGb250SW5kaWNhdG9yJyk7XHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnbGlzdC1mb250LWZhbWlseS1zZXR0aW5ncycsICdsaXN0Rm9udEZhbWlseUluZGljYXRvcicpO1xyXG5cclxuICBsaXN0Rm9udEZhbWlseVNlbGVjdC52YWx1ZSA9IGdldENvbXB1dGVkU3R5bGUobGlzdEVsKS5mb250RmFtaWx5O1xyXG4gIGxpc3RGb250RmFtaWx5U2VsZWN0Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdEVsLnN0eWxlLmZvbnRGYW1pbHkgPSBsaXN0Rm9udEZhbWlseVNlbGVjdC52YWx1ZTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShsaXN0RWwpLmZvbnRXZWlnaHQgPT0gJzkwMCcpIHtcclxuICAgIGxpc3RCb2xkLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaXN0Qm9sZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG4gIGxpc3RCb2xkLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAobGlzdEJvbGQuY2hlY2tlZCkge1xyXG4gICAgICBsaXN0RWwuc3R5bGUuZm9udFdlaWdodCA9ICc5MDAnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGlzdEVsLnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJztcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICAvL9Cg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LBcclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnbGlzdC1mb250LXNpemUtc2V0dGluZ3MnLCAnbGlzdEZvbnRTaXplSW5kaWNhdG9yJyk7XHJcblxyXG4gICQoJyNsaXN0LWZvbnQtc2l6ZS12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGxpc3RFbCkuZm9udFNpemUpKTtcclxuICAkKCcjbGlzdC1mb250LXNpemUtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShsaXN0RWwpLmZvbnRTaXplKSk7XHJcbiAgJCgnI2xpc3QtZm9udC1zaXplLXZhbHVlLCAjbGlzdC1mb250LXNpemUtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGxpc3RFbCkuY3NzKCdmb250LXNpemUnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibGlzdC1mb250LXNpemUtdmFsdWVcIikge1xyXG4gICAgICAkKCcjbGlzdC1mb250LXNpemUtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbGlzdC1mb250LXNpemUtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvL9Cc0LXQttGB0YLRgNC+0YfQvdGL0Lkg0LjQvdGC0LXRgNCy0LDQu1xyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdsaXN0LWxpbmUtaGVpZ2h0LXNldHRpbmdzJywgJ2xpc3RMaW5lSGVpZ2h0SW5kaWNhdG9yJyk7XHJcblxyXG4gICQoJyNsaXN0LWxpbmUtaGVpZ2h0LXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobGlzdEVsKS5saW5lSGVpZ2h0KSk7XHJcbiAgJCgnI2xpc3QtbGluZS1oZWlnaHQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShsaXN0RWwpLmxpbmVIZWlnaHQpKTtcclxuICAkKCcjbGlzdC1saW5lLWhlaWdodC12YWx1ZSwgI2xpc3QtbGluZS1oZWlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGxpc3RFbCkuY3NzKCdsaW5lLWhlaWdodCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJsaXN0LWxpbmUtaGVpZ2h0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2xpc3QtbGluZS1oZWlnaHQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbGlzdC1saW5lLWhlaWdodC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0JLRi9Cx0L7RgCDRhtCy0LXRgtCwXHJcblxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ2xpc3QtZm9udC1jb2xvci1zZXR0aW5ncycsICdsaXN0Rm9udENvbG9ySW5kaWNhdG9yJyk7XHJcblxyXG4gICQoJyNsaXN0LWNvbG9yLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQobGlzdEVsKS5jc3MoJ2NvbG9yJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvL9Ci0LXQvdC4INGI0YDQuNGE0YLQsFxyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdzaG93LWxpc3QtdGV4dC1zaGFkb3ctc2V0dGluZ3MnLCAnbGlzdFRleHRTaGFkb3dJbmRpY2F0b3InKTtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RUZXh0U2hhZG93UmFkaW9PbicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC10ZXh0LXNoYWRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdmFyIGh2ID0gJCgnI2xpc3QtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNsaXN0LXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNsaXN0LXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2xpc3QtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2xpc3QtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAkKGxpc3RFbCkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0VGV4dFNoYWRvd1JhZGlvT2ZmJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LXRleHQtc2hhZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICQobGlzdEVsKS5jc3MoJ3RleHQtc2hhZG93JywgJ25vbmUnKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICAkKCcjbGlzdC10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLCAjbGlzdC10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjbGlzdC10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjbGlzdC10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNsaXN0LXRleHQtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNsaXN0LXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4gICAgJChsaXN0RWwpLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibGlzdC10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2xpc3QtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNsaXN0LXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbGlzdC10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZSwgI2xpc3QtdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjbGlzdC10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI2xpc3QtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjbGlzdC10ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjbGlzdC10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuICAgICQobGlzdEVsKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImxpc3QtdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWVcIikge1xyXG4gICAgICAkKCcjbGlzdC10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNsaXN0LXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2xpc3QtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZSwgI2xpc3QtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNsaXN0LXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjbGlzdC10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjbGlzdC10ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjbGlzdC10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuICAgICQobGlzdEVsKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImxpc3QtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNsaXN0LXRleHQtc2hhZG93LWJsdXItdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbGlzdC10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2xpc3QtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZSwgI2xpc3QtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNsaXN0LXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjbGlzdC10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjbGlzdC10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNsaXN0LXRleHQtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQodGhpcykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuICAgICQobGlzdEVsKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImxpc3QtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNsaXN0LXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbGlzdC10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2xpc3QtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI2xpc3QtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNsaXN0LXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNsaXN0LXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCh0aGlzKS52YWwoKSwgJCgnI2xpc3QtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAkKGxpc3RFbCkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgLyrQmtC+0L3QtdGGINC90LDRgdGC0YDQvtC10Log0YLQtdC90Lggc3VibWl0Ki9cclxuXHJcbiAgLy/QkNC90LjQvNCw0YbQuNGPXHJcblxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ3Nob3ctbGlzdC1hbmltYXRpb24tc2V0dGluZ3MnLCAnbGlzdEFuaW1hdGlvbkluZGljYXRvcicpO1xyXG5cclxuICAkKCcjbGlzdC1hbmltYXRpb24tdHlwZS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKSAhPSBcIm5vbmVcIikge1xyXG4gICAgICAkKGxpc3RCbG9ja0VsZW0pLmNzcygnYW5pbWF0aW9uLW5hbWUnLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgJChsaXN0QmxvY2tFbGVtKS5jc3MoJ2FuaW1hdGlvbi1kZWxheScsICQoJyNsaXN0LWFuaW1hdGlvbi1kZWxheS12YWx1ZScpLnZhbCgpICsgJ3MnKTtcclxuICAgICAgJChsaXN0QmxvY2tFbGVtKS5jc3MoJ2FuaW1hdGlvbi1kdXJhdGlvbicsICQoJyNsaXN0LWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZScpLnZhbCgpICsgJ3MnKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNsaXN0LWFuaW1hdGlvbi1kZWxheS12YWx1ZSwgI2xpc3QtYW5pbWF0aW9uLWRlbGF5LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChsaXN0QmxvY2tFbGVtKS5jc3MoJ2FuaW1hdGlvbi1kZWxheScsICQodGhpcykudmFsKCkgKyAncycpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImxpc3QtYW5pbWF0aW9uLWRlbGF5LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2xpc3QtYW5pbWF0aW9uLWRlbGF5LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2xpc3QtYW5pbWF0aW9uLWRlbGF5LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2xpc3QtYW5pbWF0aW9uLWR1cmF0aW9uLXZhbHVlLCAjbGlzdC1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGxpc3RCbG9ja0VsZW0pLmNzcygnYW5pbWF0aW9uLWR1cmF0aW9uJywgJCh0aGlzKS52YWwoKSArICdzJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibGlzdC1hbmltYXRpb24tZHVyYXRpb24tdmFsdWVcIikge1xyXG4gICAgICAkKCcjbGlzdC1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbGlzdC1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvL9Ch0LrRgNGL0YLQuNC1INCx0LvQvtC60LBcclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnc2hvdy1saXN0LXRpbWVvdXQtc2V0dGluZ3MnLCAnbGlzdFRpbWVvdXRJbmRpY2F0b3InKTtcclxuXHJcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JpcHQtJyArIHRocy5hdHRyKCdpZCcpKSkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtZGlzcGxheS1ub25lLXZhbHVlJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LWRpc3BsYXktbm9uZS12YWx1ZScpLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gICQoJyNsaXN0LWRpc3BsYXktbm9uZS12YWx1ZSwgI2xpc3QtdGltZW91dC1ob3VyLXZhbHVlLCAjbGlzdC10aW1lb3V0LWhvdXItdmFsdWUtcmFuZ2UsICNsaXN0LXRpbWVvdXQtbWludXRlLXZhbHVlLCAjbGlzdC10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZSwgI2xpc3QtdGltZW91dC1zZWNvbmQtdmFsdWUsICNsaXN0LXRpbWVvdXQtc2Vjb25kLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGlkID0gdGhzLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgdmFyIGhvdXJzID0gJCgnI2xpc3QtdGltZW91dC1ob3VyLXZhbHVlJykudmFsKCkgKiAzNjAwO1xyXG4gICAgdmFyIG1pbnV0ZSA9ICQoJyNsaXN0LXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKCkgKiA2MDtcclxuICAgIHZhciBzZWNvbmQgPSBwYXJzZUludCgkKCcjbGlzdC10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgpKTtcclxuXHJcbiAgICB2YXIgdGltZSA9IGhvdXJzICsgbWludXRlICsgc2Vjb25kO1xyXG5cclxuICAgIHRpbWUgPSB0aW1lICogMTAwMDtcclxuXHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LWRpc3BsYXktbm9uZS12YWx1ZScpLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAkKCcjc2NyaXB0LScgKyBpZCkucmVtb3ZlKCk7XHJcbiAgICAgICQoJyNtYWluQXJlYScpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJjb2RlXCIgaWQ9XCJzY3JpcHQtJyArIGlkICsgJ1wiIGNsYXNzPVwiY29kZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj4nICsgW2lkLCB0aW1lXSArICc8L3NwYW4+Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc2NyaXB0LScgKyBpZCkucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibGlzdC10aW1lb3V0LWhvdXItdmFsdWVcIikge1xyXG4gICAgICAkKCcjbGlzdC10aW1lb3V0LWhvdXItdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImxpc3QtdGltZW91dC1ob3VyLXZhbHVlLXJhbmdlXCIpIHtcclxuICAgICAgJCgnI2xpc3QtdGltZW91dC1ob3VyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJsaXN0LXRpbWVvdXQtbWludXRlLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2xpc3QtdGltZW91dC1taW51dGUtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImxpc3QtdGltZW91dC1taW51dGUtdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjbGlzdC10aW1lb3V0LW1pbnV0ZS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibGlzdC10aW1lb3V0LXNlY29uZC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNsaXN0LXRpbWVvdXQtc2Vjb25kLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJsaXN0LXRpbWVvdXQtc2Vjb25kLXZhbHVlLXJhbmdlXCIpIHtcclxuICAgICAgJCgnI2xpc3QtdGltZW91dC1zZWNvbmQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9