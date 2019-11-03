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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/modules/line/lineSettings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/modules/line/lineSettings.js":
/*!**********************************************!*\
  !*** ./src/API/modules/line/lineSettings.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('#mainArea').on('click', '.copyLine', function () {
  var lineBlockId = $(this).parents('.lineBlock').attr('id');
  var lineBlockElem = document.getElementById(lineBlockId);
  var clonId = 'line' + getRandom();
  $(lineBlockElem).clone(true).attr('id', clonId).insertAfter(lineBlockElem);
  addFunctionalityToLineElement(clonId);
  makePreview();
});
$('#mainArea').on('click', '.lineSet', function (e) {
  var ths = $(this).parents('.lineBlock');
  var lineBlockElem = document.getElementById($(ths).attr('id'));
  var lineWrapperElem = lineBlockElem.getElementsByClassName('lineWrapper')[0];
  var lineEl = lineBlockElem.getElementsByClassName('line')[0]; //Появление правой панели, инициализация инпутов.

  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#line-animation-type-value').off();

  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#line-timeout-hour-value').val(h);
    $('#line-timeout-minute-value').val(m);
    $('#line-timeout-second-value').val(s);
    $('#line-display-none-value').prop('checked', true);
  } else {
    $('#line-timeout-hour-value').val(0);
    $('#line-timeout-minute-value').val(0);
    $('#line-timeout-second-value').val(0);
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
  $('#list-settings').hide();
  $('#line-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated'); // Закрыть панель

  document.addEventListener('mousedown', closeRightPanel); //Настройки отступов формы

  showHideSettings('lineMargins', 'lineMarginsIndicator');
  showHideSettings('lineMarginEvery', 'lineMarginGroupIndicator');
  $('#line-margin-top-value').val(parseInt(getComputedStyle(lineBlockElem).marginTop));
  $('#line-margin-top-value-range').val(parseInt(getComputedStyle(lineBlockElem).marginTop));
  $('#line-margin-right-value').val(parseInt(getComputedStyle(lineBlockElem).marginRight));
  $('#line-margin-right-value-range').val(parseInt(getComputedStyle(lineBlockElem).marginRight));
  $('#line-margin-bottom-value').val(parseInt(getComputedStyle(lineBlockElem).marginBottom));
  $('#line-margin-bottom-value-range').val(parseInt(getComputedStyle(lineBlockElem).marginBottom));
  $('#line-margin-left-value').val(parseInt(getComputedStyle(lineBlockElem).marginLeft));
  $('#line-margin-left-value-range').val(parseInt(getComputedStyle(lineBlockElem).marginLeft));
  $('#line-margin-top-value, #line-margin-top-value-range').on('input', function () {
    $(lineBlockElem).css('margin-top', '');
    var val = $(this).val();
    $(lineBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "line-margin-top-value") {
      $('#line-margin-top-value-range').val($(this).val());
    } else {
      $('#line-margin-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#line-margin-right-value, #line-margin-right-value-range').on('input', function () {
    $(lineBlockElem).css('margin-right', '');
    var val = $(this).val();
    $(lineBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "line-margin-right-value") {
      $('#line-margin-right-value-range').val($(this).val());
    } else {
      $('#line-margin-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#line-margin-bottom-value, #line-margin-bottom-value-range').on('input', function () {
    $(lineBlockElem).css('margin-bottom', '');
    var val = $(this).val();
    $(lineBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "line-margin-bottom-value") {
      $('#line-margin-bottom-value-range').val($(this).val());
    } else {
      $('#line-margin-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#line-margin-left-value, #line-margin-left-value-range').on('input', function () {
    $(lineBlockElem).css('margin-left', '');
    var val = $(this).val();
    $(lineBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "line-margin-left-value") {
      $('#line-margin-left-value-range').val($(this).val());
    } else {
      $('#line-margin-left-value').val($(this).val());
    }

    makePreview();
  }); //Вертикальное выравнивание формы

  showHideSettings('line-show-vertical-settings', 'lineVerticalIndicator');

  if (getComputedStyle(lineBlockElem).marginTop == 'auto') {
    lineMarginBottom.checked = true;
    lineMarginTop.checked = false;
    lineMarginCenter.checked = false;
  } else if (getComputedStyle(lineBlockElem).marginBottom == 'auto') {
    lineMarginBottom.checked = false;
    lineMarginTop.checked = true;
    lineMarginCenter.checked = false;
  } else if (getComputedStyle(lineBlockElem).marginTop == '0px' && getComputedStyle(lineBlockElem).marginBottom == '0px') {
    lineMarginBottom.checked = false;
    lineMarginTop.checked = false;
    lineMarginCenter.checked = true;
  }

  lineMarginTop.onclick = function () {
    lineBlockElem.style.marginTop = '0px';
    lineBlockElem.style.marginBottom = 'auto';
    makePreview();
  };

  lineMarginCenter.onclick = function () {
    lineBlockElem.style.marginTop = '0px';
    lineBlockElem.style.marginBottom = '0px';
    makePreview();
  };

  lineMarginBottom.onclick = function () {
    lineBlockElem.style.marginTop = 'auto';
    lineBlockElem.style.marginBottom = '0px';
    makePreview();
  }; //Выбор линии


  showHideSettings('lineSettings', 'lineSettingsIndicator');
  showHideSettings('line-choose-settings', 'lineChooseIndicator'); // Картинка

  showHideSettings('line-image-settings', 'lineImageIndicator'); // Стиль линии

  showHideSettings('line-settings-under-menu', 'lineSettingsUnderMenuIndicator');
  showHideSettings('line-style-settings', 'lineStyleIndicator'); // Толщина линии

  showHideSettings('line-height-settings', 'lineHeightIndicator'); // Выбор цвета

  showHideSettings('line-color-settings', 'lineColorIndicator'); //Анимация

  showHideSettings('show-line-animation-settings', 'lineAnimationIndicator');
  $('#line-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(lineBlockElem).css('animation-name', $(this).val());
      $(lineBlockElem).css('animation-delay', $('#line-animation-delay-value').val() + 's');
      $(lineBlockElem).css('animation-duration', $('#line-animation-duration-value').val() + 's');
    }

    makePreview();
  });
  $('#line-animation-delay-value, #line-animation-delay-value-range').on('input', function () {
    $(lineBlockElem).css('animation-delay', $(this).val() + 's');

    if ($(this).attr('id') == "line-animation-delay-value") {
      $('#line-animation-delay-value-range').val($(this).val());
    } else {
      $('#line-animation-delay-value').val($(this).val());
    }

    makePreview();
  });
  $('#line-animation-duration-value, #line-animation-duration-value-range').on('input', function () {
    $(lineBlockElem).css('animation-duration', $(this).val() + 's');

    if ($(this).attr('id') == "line-animation-duration-value") {
      $('#line-animation-duration-value-range').val($(this).val());
    } else {
      $('#line-animation-duration-value').val($(this).val());
    }

    makePreview();
  }); //Скрытие блока

  showHideSettings('show-line-timeout-settings', 'lineTimeoutIndicator');

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('line-display-none-value').checked = true;
  } else {
    document.getElementById('line-display-none-value').checked = false;
  }

  $('#line-display-none-value, #line-timeout-hour-value, #line-timeout-hour-value-range, #line-timeout-minute-value, #line-timeout-minute-value-range, #line-timeout-second-value, #line-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#line-timeout-hour-value').val() * 3600;
    var minute = $('#line-timeout-minute-value').val() * 60;
    var second = parseInt($('#line-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;

    if (document.getElementById('line-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }

    if ($(this).attr('id') == "line-timeout-hour-value") {
      $('#line-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "line-timeout-hour-value-range") {
      $('#line-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "line-timeout-minute-value") {
      $('#line-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "line-timeout-minute-value-range") {
      $('#line-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "line-timeout-second-value") {
      $('#line-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "line-timeout-second-value-range") {
      $('#line-timeout-second-value').val($(this).val());
    }

    makePreview();
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL2xpbmUvbGluZVNldHRpbmdzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsImxpbmVCbG9ja0lkIiwicGFyZW50cyIsImF0dHIiLCJsaW5lQmxvY2tFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsb25JZCIsImdldFJhbmRvbSIsImNsb25lIiwiaW5zZXJ0QWZ0ZXIiLCJhZGRGdW5jdGlvbmFsaXR5VG9MaW5lRWxlbWVudCIsIm1ha2VQcmV2aWV3IiwiZSIsInRocyIsImxpbmVXcmFwcGVyRWxlbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsaW5lRWwiLCJvZmYiLCJ0aW1lIiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJzcGxpdCIsImgiLCJNYXRoIiwiZmxvb3IiLCJtIiwicyIsInZhbCIsInByb3AiLCJoaWRlIiwic2hvdyIsImNzcyIsInJpZ2h0IiwidHJhbnNpdGlvbiIsImFkZENsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlUmlnaHRQYW5lbCIsInNob3dIaWRlU2V0dGluZ3MiLCJnZXRDb21wdXRlZFN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwiaSIsImxpbmVNYXJnaW5Cb3R0b20iLCJjaGVja2VkIiwibGluZU1hcmdpblRvcCIsImxpbmVNYXJnaW5DZW50ZXIiLCJvbmNsaWNrIiwic3R5bGUiLCJpZCIsImhvdXJzIiwibWludXRlIiwic2Vjb25kIiwicmVtb3ZlIiwiYXBwZW5kIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7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SUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDJCQUExQixFQUF1RDtBQUM1REosT0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0M2QixHQUF0QyxDQUEwQzdCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZCLEdBQVIsRUFBMUM7QUFDRCxLQUZNLE1BRUEsSUFBSTdCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsaUNBQTFCLEVBQTZEO0FBQ2xFSixPQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzZCLEdBQWhDLENBQW9DN0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkIsR0FBUixFQUFwQztBQUNELEtBRk0sTUFFQSxJQUFJN0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQiwyQkFBMUIsRUFBdUQ7QUFDNURKLE9BQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDNkIsR0FBdEMsQ0FBMEM3QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE2QixHQUFSLEVBQTFDO0FBQ0QsS0FGTSxNQUVBLElBQUk3QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLGlDQUExQixFQUE2RDtBQUNsRUosT0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0M2QixHQUFoQyxDQUFvQzdCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZCLEdBQVIsRUFBcEM7QUFDRDs7QUFDRGhCLGVBQVc7QUFFWixHQXBDRDtBQXNDRCxDQXpQRCxFIiwiZmlsZSI6ImxpbmVfc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9BUEkvbW9kdWxlcy9saW5lL2xpbmVTZXR0aW5ncy5qc1wiKTtcbiIsIiQoJyNtYWluQXJlYScpLm9uKCdjbGljaycsICcuY29weUxpbmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgbGluZUJsb2NrSWQgPSAkKHRoaXMpLnBhcmVudHMoJy5saW5lQmxvY2snKS5hdHRyKCdpZCcpO1xyXG4gIGNvbnN0IGxpbmVCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaW5lQmxvY2tJZCk7XHJcbiAgY29uc3QgY2xvbklkID0gJ2xpbmUnICsgZ2V0UmFuZG9tKCk7XHJcbiAgJChsaW5lQmxvY2tFbGVtKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsIGNsb25JZCkuaW5zZXJ0QWZ0ZXIobGluZUJsb2NrRWxlbSk7XHJcblxyXG4gIGFkZEZ1bmN0aW9uYWxpdHlUb0xpbmVFbGVtZW50KGNsb25JZCk7XHJcbiAgbWFrZVByZXZpZXcoKTtcclxufSk7XHJcblxyXG4kKCcjbWFpbkFyZWEnKS5vbignY2xpY2snLCAnLmxpbmVTZXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGNvbnN0IHRocyA9ICQodGhpcykucGFyZW50cygnLmxpbmVCbG9jaycpO1xyXG4gIGNvbnN0IGxpbmVCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKHRocykuYXR0cignaWQnKSk7XHJcbiAgY29uc3QgbGluZVdyYXBwZXJFbGVtID0gbGluZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaW5lV3JhcHBlcicpWzBdO1xyXG4gIGxldCBsaW5lRWwgPSBsaW5lQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpbmUnKVswXTtcclxuXHJcbiAgLy/Qn9C+0Y/QstC70LXQvdC40LUg0L/RgNCw0LLQvtC5INC/0LDQvdC10LvQuCwg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LjQvdC/0YPRgtC+0LIuXHJcbiAgJCgnI3JpZ2h0U2lkZWJhciA+IGRpdjpub3QoI3NldHRpbmdzLW1uKSBpbnB1dCcpLm9mZignaW5wdXQnKTtcclxuICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2Om5vdCgjc2V0dGluZ3MtbW4pIGlucHV0Jykub2ZmKCk7XHJcbiAgJCgnI2xpbmUtYW5pbWF0aW9uLXR5cGUtdmFsdWUnKS5vZmYoKTtcclxuXHJcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JpcHQtJyArIHRocy5hdHRyKCdpZCcpKSkge1xyXG4gICAgdmFyIHRpbWUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyaXB0LScgKyB0aHMuYXR0cignaWQnKSkuaW5uZXJIVE1MLnNwbGl0KCcsJylbMV0pIC8gMTAwMDtcclxuICAgIHZhciBoID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCk7XHJcbiAgICB2YXIgbSA9IE1hdGguZmxvb3IoKHRpbWUgLSAzNjAwICogaCkgLyA2MCk7XHJcbiAgICB2YXIgcyA9IHRpbWUgLSAoMzYwMCAqIGggKyA2MCAqIG0pO1xyXG4gICAgJCgnI2xpbmUtdGltZW91dC1ob3VyLXZhbHVlJykudmFsKGgpO1xyXG4gICAgJCgnI2xpbmUtdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwobSk7XHJcbiAgICAkKCcjbGluZS10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbChzKTtcclxuICAgICQoJyNsaW5lLWRpc3BsYXktbm9uZS12YWx1ZScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnI2xpbmUtdGltZW91dC1ob3VyLXZhbHVlJykudmFsKDApO1xyXG4gICAgJCgnI2xpbmUtdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwoMCk7XHJcbiAgICAkKCcjbGluZS10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgwKTtcclxuICB9XHJcbiAgJCgnI3JpZ2h0U2lkZWJhciA+IGRpdicpLmhpZGUoKTtcclxuICAkKCcjc2V0dGluZ3MtbW4nKS5oaWRlKCk7XHJcbiAgJCgnI21haW4tYmxvY2stc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2ltYWdlLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyN2aWRlby1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjdGV4dC1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjYnV0dG9uLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNmb3JtLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNzdWJzY3JpYmUtc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2xpc3Qtc2V0dGluZ3MnKS5oaWRlKClcclxuICAkKCcjbGluZS1zZXR0aW5ncycpLnNob3coKTtcclxuICAkKCcjcmlnaHRTaWRlYmFyJykuY3NzKHtcclxuICAgIHJpZ2h0OiAnMHB4JyxcclxuICAgIHRyYW5zaXRpb246ICcwLjRzIGFsbCBlYXNlLWluJ1xyXG4gIH0pLmFkZENsYXNzKCdhY3RpdmF0ZWQnKTtcclxuXHJcbiAgLy8g0JfQsNC60YDRi9GC0Ywg0L/QsNC90LXQu9GMXHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlUmlnaHRQYW5lbCk7XHJcblxyXG4gIC8v0J3QsNGB0YLRgNC+0LnQutC4INC+0YLRgdGC0YPQv9C+0LIg0YTQvtGA0LzRi1xyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdsaW5lTWFyZ2lucycsICdsaW5lTWFyZ2luc0luZGljYXRvcicpO1xyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ2xpbmVNYXJnaW5FdmVyeScsICdsaW5lTWFyZ2luR3JvdXBJbmRpY2F0b3InKTtcclxuXHJcbiAgJCgnI2xpbmUtbWFyZ2luLXRvcC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGxpbmVCbG9ja0VsZW0pLm1hcmdpblRvcCkpO1xyXG4gICQoJyNsaW5lLW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShsaW5lQmxvY2tFbGVtKS5tYXJnaW5Ub3ApKTtcclxuICAkKCcjbGluZS1tYXJnaW4tcmlnaHQtdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShsaW5lQmxvY2tFbGVtKS5tYXJnaW5SaWdodCkpO1xyXG4gICQoJyNsaW5lLW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGxpbmVCbG9ja0VsZW0pLm1hcmdpblJpZ2h0KSk7XHJcbiAgJCgnI2xpbmUtbWFyZ2luLWJvdHRvbS12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGxpbmVCbG9ja0VsZW0pLm1hcmdpbkJvdHRvbSkpO1xyXG4gICQoJyNsaW5lLW1hcmdpbi1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShsaW5lQmxvY2tFbGVtKS5tYXJnaW5Cb3R0b20pKTtcclxuICAkKCcjbGluZS1tYXJnaW4tbGVmdC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGxpbmVCbG9ja0VsZW0pLm1hcmdpbkxlZnQpKTtcclxuICAkKCcjbGluZS1tYXJnaW4tbGVmdC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGxpbmVCbG9ja0VsZW0pLm1hcmdpbkxlZnQpKTtcclxuXHJcbiAgJCgnI2xpbmUtbWFyZ2luLXRvcC12YWx1ZSwgI2xpbmUtbWFyZ2luLXRvcC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQobGluZUJsb2NrRWxlbSkuY3NzKCdtYXJnaW4tdG9wJywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKGxpbmVCbG9ja0VsZW0pLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tdG9wOicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJsaW5lLW1hcmdpbi10b3AtdmFsdWVcIikge1xyXG4gICAgICAkKCcjbGluZS1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2xpbmUtbWFyZ2luLXRvcC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI2xpbmUtbWFyZ2luLXJpZ2h0LXZhbHVlLCAjbGluZS1tYXJnaW4tcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGxpbmVCbG9ja0VsZW0pLmNzcygnbWFyZ2luLXJpZ2h0JywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKGxpbmVCbG9ja0VsZW0pLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tcmlnaHQ6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImxpbmUtbWFyZ2luLXJpZ2h0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2xpbmUtbWFyZ2luLXJpZ2h0LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2xpbmUtbWFyZ2luLXJpZ2h0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjbGluZS1tYXJnaW4tYm90dG9tLXZhbHVlLCAjbGluZS1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChsaW5lQmxvY2tFbGVtKS5jc3MoJ21hcmdpbi1ib3R0b20nLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQobGluZUJsb2NrRWxlbSkuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi1ib3R0b206JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImxpbmUtbWFyZ2luLWJvdHRvbS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNsaW5lLW1hcmdpbi1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbGluZS1tYXJnaW4tYm90dG9tLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjbGluZS1tYXJnaW4tbGVmdC12YWx1ZSwgI2xpbmUtbWFyZ2luLWxlZnQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGxpbmVCbG9ja0VsZW0pLmNzcygnbWFyZ2luLWxlZnQnLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQobGluZUJsb2NrRWxlbSkuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi1sZWZ0OicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJsaW5lLW1hcmdpbi1sZWZ0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2xpbmUtbWFyZ2luLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbGluZS1tYXJnaW4tbGVmdC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0JLQtdGA0YLQuNC60LDQu9GM0L3QvtC1INCy0YvRgNCw0LLQvdC40LLQsNC90LjQtSDRhNC+0YDQvNGLXHJcblxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ2xpbmUtc2hvdy12ZXJ0aWNhbC1zZXR0aW5ncycsICdsaW5lVmVydGljYWxJbmRpY2F0b3InKTtcclxuXHJcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUobGluZUJsb2NrRWxlbSkubWFyZ2luVG9wID09ICdhdXRvJykge1xyXG4gICAgbGluZU1hcmdpbkJvdHRvbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIGxpbmVNYXJnaW5Ub3AuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgbGluZU1hcmdpbkNlbnRlci5jaGVja2VkID0gZmFsc2U7XHJcbiAgfSBlbHNlIGlmIChnZXRDb21wdXRlZFN0eWxlKGxpbmVCbG9ja0VsZW0pLm1hcmdpbkJvdHRvbSA9PSAnYXV0bycpIHtcclxuICAgIGxpbmVNYXJnaW5Cb3R0b20uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgbGluZU1hcmdpblRvcC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIGxpbmVNYXJnaW5DZW50ZXIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShsaW5lQmxvY2tFbGVtKS5tYXJnaW5Ub3AgPT0gJzBweCcgJiYgZ2V0Q29tcHV0ZWRTdHlsZShsaW5lQmxvY2tFbGVtKS5tYXJnaW5Cb3R0b20gPT0gJzBweCcpIHtcclxuICAgIGxpbmVNYXJnaW5Cb3R0b20uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgbGluZU1hcmdpblRvcC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBsaW5lTWFyZ2luQ2VudGVyLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH1cclxuICBsaW5lTWFyZ2luVG9wLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaW5lQmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xyXG4gICAgbGluZUJsb2NrRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnYXV0byc7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuICBsaW5lTWFyZ2luQ2VudGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaW5lQmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xyXG4gICAgbGluZUJsb2NrRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGxpbmVNYXJnaW5Cb3R0b20ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxpbmVCbG9ja0VsZW0uc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xyXG4gICAgbGluZUJsb2NrRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICAvL9CS0YvQsdC+0YAg0LvQuNC90LjQuFxyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdsaW5lU2V0dGluZ3MnLCAnbGluZVNldHRpbmdzSW5kaWNhdG9yJyk7XHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnbGluZS1jaG9vc2Utc2V0dGluZ3MnLCAnbGluZUNob29zZUluZGljYXRvcicpO1xyXG4gIFxyXG4gIC8vINCa0LDRgNGC0LjQvdC60LBcclxuICBcclxuICBzaG93SGlkZVNldHRpbmdzKCdsaW5lLWltYWdlLXNldHRpbmdzJywgJ2xpbmVJbWFnZUluZGljYXRvcicpO1xyXG4gIFxyXG4gIC8vINCh0YLQuNC70Ywg0LvQuNC90LjQuFxyXG4gIFxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ2xpbmUtc2V0dGluZ3MtdW5kZXItbWVudScsICdsaW5lU2V0dGluZ3NVbmRlck1lbnVJbmRpY2F0b3InKTtcclxuICBzaG93SGlkZVNldHRpbmdzKCdsaW5lLXN0eWxlLXNldHRpbmdzJywgJ2xpbmVTdHlsZUluZGljYXRvcicpO1xyXG4gIFxyXG4gIC8vINCi0L7Qu9GJ0LjQvdCwINC70LjQvdC40LhcclxuICBcclxuICBzaG93SGlkZVNldHRpbmdzKCdsaW5lLWhlaWdodC1zZXR0aW5ncycsICdsaW5lSGVpZ2h0SW5kaWNhdG9yJyk7XHJcbiAgXHJcbiAgLy8g0JLRi9Cx0L7RgCDRhtCy0LXRgtCwXHJcbiAgXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnbGluZS1jb2xvci1zZXR0aW5ncycsICdsaW5lQ29sb3JJbmRpY2F0b3InKTtcclxuICBcclxuICAvL9CQ0L3QuNC80LDRhtC40Y9cclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnc2hvdy1saW5lLWFuaW1hdGlvbi1zZXR0aW5ncycsICdsaW5lQW5pbWF0aW9uSW5kaWNhdG9yJyk7XHJcblxyXG4gICQoJyNsaW5lLWFuaW1hdGlvbi10eXBlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpICE9IFwibm9uZVwiKSB7XHJcbiAgICAgICQobGluZUJsb2NrRWxlbSkuY3NzKCdhbmltYXRpb24tbmFtZScsICQodGhpcykudmFsKCkpO1xyXG4gICAgICAkKGxpbmVCbG9ja0VsZW0pLmNzcygnYW5pbWF0aW9uLWRlbGF5JywgJCgnI2xpbmUtYW5pbWF0aW9uLWRlbGF5LXZhbHVlJykudmFsKCkgKyAncycpO1xyXG4gICAgICAkKGxpbmVCbG9ja0VsZW0pLmNzcygnYW5pbWF0aW9uLWR1cmF0aW9uJywgJCgnI2xpbmUtYW5pbWF0aW9uLWR1cmF0aW9uLXZhbHVlJykudmFsKCkgKyAncycpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2xpbmUtYW5pbWF0aW9uLWRlbGF5LXZhbHVlLCAjbGluZS1hbmltYXRpb24tZGVsYXktdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGxpbmVCbG9ja0VsZW0pLmNzcygnYW5pbWF0aW9uLWRlbGF5JywgJCh0aGlzKS52YWwoKSArICdzJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibGluZS1hbmltYXRpb24tZGVsYXktdmFsdWVcIikge1xyXG4gICAgICAkKCcjbGluZS1hbmltYXRpb24tZGVsYXktdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbGluZS1hbmltYXRpb24tZGVsYXktdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbGluZS1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUsICNsaW5lLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQobGluZUJsb2NrRWxlbSkuY3NzKCdhbmltYXRpb24tZHVyYXRpb24nLCAkKHRoaXMpLnZhbCgpICsgJ3MnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJsaW5lLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNsaW5lLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNsaW5lLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0KHQutGA0YvRgtC40LUg0LHQu9C+0LrQsFxyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdzaG93LWxpbmUtdGltZW91dC1zZXR0aW5ncycsICdsaW5lVGltZW91dEluZGljYXRvcicpO1xyXG5cclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZS1kaXNwbGF5LW5vbmUtdmFsdWUnKS5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmUtZGlzcGxheS1ub25lLXZhbHVlJykuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgJCgnI2xpbmUtZGlzcGxheS1ub25lLXZhbHVlLCAjbGluZS10aW1lb3V0LWhvdXItdmFsdWUsICNsaW5lLXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZSwgI2xpbmUtdGltZW91dC1taW51dGUtdmFsdWUsICNsaW5lLXRpbWVvdXQtbWludXRlLXZhbHVlLXJhbmdlLCAjbGluZS10aW1lb3V0LXNlY29uZC12YWx1ZSwgI2xpbmUtdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaWQgPSB0aHMuYXR0cignaWQnKTtcclxuXHJcbiAgICB2YXIgaG91cnMgPSAkKCcjbGluZS10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoKSAqIDM2MDA7XHJcbiAgICB2YXIgbWludXRlID0gJCgnI2xpbmUtdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwoKSAqIDYwO1xyXG4gICAgdmFyIHNlY29uZCA9IHBhcnNlSW50KCQoJyNsaW5lLXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKCkpO1xyXG5cclxuICAgIHZhciB0aW1lID0gaG91cnMgKyBtaW51dGUgKyBzZWNvbmQ7XHJcblxyXG4gICAgdGltZSA9IHRpbWUgKiAxMDAwO1xyXG5cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmUtZGlzcGxheS1ub25lLXZhbHVlJykuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgICAgJCgnI21haW5BcmVhJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNvZGVcIiBpZD1cInNjcmlwdC0nICsgaWQgKyAnXCIgY2xhc3M9XCJjb2RlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPicgKyBbaWQsIHRpbWVdICsgJzwvc3Bhbj4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJsaW5lLXRpbWVvdXQtaG91ci12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNsaW5lLXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibGluZS10aW1lb3V0LWhvdXItdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjbGluZS10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImxpbmUtdGltZW91dC1taW51dGUtdmFsdWVcIikge1xyXG4gICAgICAkKCcjbGluZS10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibGluZS10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZVwiKSB7XHJcbiAgICAgICQoJyNsaW5lLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJsaW5lLXRpbWVvdXQtc2Vjb25kLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2xpbmUtdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImxpbmUtdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjbGluZS10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=