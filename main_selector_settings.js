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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/main_selector/main_selector_settings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/main_selector/main_selector_settings.js":
/*!*********************************************************!*\
  !*** ./src/API/main_selector/main_selector_settings.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('#mainArea').on('click', '.remove', function () {
  $(this).parents('.main-selector').first().remove();
  makePreview();
});
$('#mainArea').on('click', '.copy', function () {
  var $copyElement = $(this).parents('.main-selector').clone();
  $($copyElement).find('.content').each(function () {
    $(this).attr('id', getRandom());
  });
  $($copyElement).find('.imageBlock').each(function () {
    $(this).attr('id', 'image' + getRandom());
  });
  $($copyElement).find('.videoBlock').each(function () {
    $(this).attr('id', 'video' + getRandom());
  });
  $($copyElement).find('.textBlock').each(function () {
    $(this).attr('id', 'text' + getRandom());
  });
  $($copyElement).find('.buttonBlock').each(function () {
    $(this).attr('id', 'button' + getRandom());
  });
  $($copyElement).find('.formBlock').each(function () {
    $(this).attr('id', 'form' + getRandom());
  });
  $($copyElement).find('.subscribeBlock').each(function () {
    $(this).attr('id', 'subscribe' + getRandom());
  });
  $($copyElement).find('.listBlock').each(function () {
    $(this).attr('id', 'list' + getRandom());
  });
  $(this).parents('.main-selector').first().after($copyElement);
  $($copyElement).find('.imageBlock').each(function () {
    var cloneId = $(this).attr('id');
    addFunctionalityToElement(cloneId);
  });
  $($copyElement).find('.videoBlock').each(function () {
    var cloneId = $(this).attr('id');
    addFunctionalityToElement(cloneId);
  });
  $($copyElement).find('.textBlock').each(function () {
    var cloneId = $(this).attr('id');
    addFunctionalityToTextElement(cloneId);
  });
  $($copyElement).find('.buttonBlock').each(function () {
    var cloneId = $(this).attr('id');
    addFunctionalityToButtonElement(cloneId);
  });
  $($copyElement).find('.formBlock').each(function () {
    var cloneId = $(this).attr('id');
    var formId = getRandom();
    document.getElementById(cloneId).getElementsByTagName('form')[0].id = formId;
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
    addFunctionalityToFormElement(cloneId);
  });
  $($copyElement).find('.subscribeBlock').each(function () {
    var cloneId = $(this).attr('id');
    addDragAndDropToForm(cloneId);
    addFunctionalityToSubscribeElement(cloneId);
  });
  $($copyElement).find('.listBlock').each(function () {
    var cloneId = $(this).attr('id');
    addFunctionalityToListElement(cloneId);
  });
  $($copyElement).find('.content').each(function () {
    Sortable.create($('#' + $(this).attr('id') + '').get(0), {
      group: 'content-selector',
      put: 'content-selector',
      filter: '.resizer, .handle, .block-resizer',
      sort: true,
      animation: 150,
      ghostClass: 'green-background-class',
      onChoose: function onChoose(e) {
        if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(e.item).attr('id'));
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          var textElem = textBlockElem.getElementsByClassName('text')[0];
          content = iframe.contentWindow.document.body.innerHTML;
          var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
          styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
          styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
          styleElem += 'color:' + getComputedStyle(textElem).color + ';';
          styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
          style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
        }
      },
      onStart: function onStart(evt) {
        $('.handle').css('display', 'none');
        $('.main-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover');
        });
        $('.content-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover-content');
        });
      },
      onEnd: function onEnd(evt) {
        $('.handle').css('display', 'block');
        $('.border-hover').removeClass('border-hover');
        $('.border-hover-content').removeClass('border-hover-content');

        if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(evt.item).attr('id'));
          var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          init(iframe, content, style);
          textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
          iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
          addFunctionalityToIframe($(evt.item).attr('id'));
        }

        makePreview();
      }
    });
  });
  $('.handle').resizer();
  $('.resizer').resizer_s();
  $('.block-resizer').block_resizer();
  makePreview();
});
$('#mainArea').on('click', '.add-block', function () {
  var $this = $(this);
  var maxIndex;
  var cols = $(this).parents('.main-selector').find('>[class*="col-"]');
  if (cols.length == 12) return;
  var $colSizes = [];
  $(cols).each(function (ind, el) {
    var classes = $(this).attr('class').split(' ');
    $(classes).each(function (ind, el) {
      if (el.match(/col-[a-z]+-[0-9]+/i)) $colSizes.push(parseInt(el.split('-')[2]));
    });
  });
  maxIndex = indexOfMax($colSizes);
  var maxValueSection = $($this).parents('.main-selector').find('>[class*="col-"]:nth(' + maxIndex + ')');
  $(maxValueSection.attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      $(maxValueSection).removeClass(el);
      $(maxValueSection).addClass('col-' + el.split('-')[1] + '-' + (parseInt(el.split('-')[2]) - 1));
    }
  });
  addMainSelectorSection($this);
  makePreview();
});
$('#mainArea').on('click', '.remove-block', function () {
  var $this = $(this);
  var cols = $(this).parents('.main-selector').find('>[class*="col-"]');
  if (cols.length == 1) return;
  removeMainSelectorSection($this);
  makePreview();
});
$('#mainArea').on('click', '.main-block-settings', function (event) {
  //Очистка от старых событий изменения значений (при первом клике на настройки, вызывается один раз, при втором уже два).
  //Поправлено!!!
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#main-block-border-style-value').off();
  $('#main-block-border-left-style-value').off();
  $('#main-block-border-right-style-value').off();
  $('#main-block-border-top-style-value').off();
  $('#main-block-border-bottom-style-value').off();
  $('#main-block-animation-type-value').off();
  var ths = null;
  ths = $(this).parents('.block-settings').parent();

  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#main-block-timeout-hour-value').val(h);
    $('#main-block-timeout-minute-value').val(m);
    $('#main-block-timeout-second-value').val(s);
    $('#main-block-display-none-value').prop('checked', true);
  } else {
    $('#main-block-timeout-hour-value').val(0);
    $('#main-block-timeout-minute-value').val(0);
    $('#main-block-timeout-second-value').val(0);
  }

  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#main-block-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');
  /*Инициализация инпутов*/

  $('#main-block-width-value').val($(ths).width());
  $('#main-block-width-value-range').val($(ths).width());
  $('#main-block-margin-top-value').val(parseInt($(ths).css('margin-top')));
  $('#main-block-margin-top-value-range').val(parseInt($(ths).css('margin-top')));
  $('#main-block-margin-bottom-value').val(parseInt($(ths).css('margin-bottom')));
  $('#main-block-margin-bottom-value-range').val(parseInt($(ths).css('margin-bottom')));
  $('#main-block-padding-top-value').val(parseInt($(ths).css('padding-top')));
  $('#main-block-padding-top-value-range').val(parseInt($(ths).css('padding-top')));
  $('#main-block-padding-bottom-value').val(parseInt($(ths).css('padding-bottom')));
  $('#main-block-padding-bottom-value-range').val(parseInt($(ths).css('padding-bottom')));
  $('#main-block-padding-left-value').val(parseInt($(ths).css('padding-left')));
  $('#main-block-padding-left-value-range').val(parseInt($(ths).css('padding-left')));
  $('#main-block-padding-right-value').val(parseInt($(ths).css('padding-right')));
  $('#main-block-padding-right-value-range').val(parseInt($(ths).css('padding-right')));
  $('#main-block-opacity-value').val($(ths).css('opacity') * 100);
  $('#main-block-opacity-value-range').val($(ths).css('opacity') * 100);
  $('#main-block-border-thickness-value').val(parseInt($(ths).css('border-width')));
  $('#main-block-border-thickness-value-range').val(parseInt($(ths).css('border-width')));
  $('#main-block-border-left-thickness-value').val(parseInt($(ths).css('border-left-width')));
  $('#main-block-border-left-thickness-value-range').val(parseInt($(ths).css('border-left-width')));
  $('#main-block-border-top-thickness-value').val(parseInt($(ths).css('border-top-width')));
  $('#main-block-border-top-thickness-value-range').val(parseInt($(ths).css('border-top-width')));
  $('#main-block-border-right-thickness-value').val(parseInt($(ths).css('border-right-width')));
  $('#main-block-border-right-thickness-value-range').val(parseInt($(ths).css('border-right-width')));
  $('#main-block-border-bottom-thickness-value').val(parseInt($(ths).css('border-bottom-width')));
  $('#main-block-border-bottom-thickness-value-range').val(parseInt($(ths).css('border-bottom-width')));
  var videolnk = String($(ths).find('.background-video iframe').attr('src')).split('?')[0];

  if (videolnk != "undefined") {
    $('#main-block-videolink').val(videolnk);
  } else {
    $('#main-block-videolink').val('');
  }
  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/


  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('main-block-display-none-value').checked = true;
  } else {
    document.getElementById('main-block-display-none-value').checked = false;
  }

  $('#main-block-display-none-value, #main-block-timeout-hour-value, #main-block-timeout-hour-value-range, #main-block-timeout-minute-value, #main-block-timeout-minute-value-range, #main-block-timeout-second-value, #main-block-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#main-block-timeout-hour-value').val() * 3600;
    var minute = $('#main-block-timeout-minute-value').val() * 60;
    var second = parseInt($('#main-block-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;

    if (document.getElementById('main-block-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }

    if ($(this).attr('id') == "main-block-timeout-hour-value") {
      $('#main-block-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-hour-value-range") {
      $('#main-block-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-minute-value") {
      $('#main-block-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-minute-value-range") {
      $('#main-block-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-second-value") {
      $('#main-block-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-second-value-range") {
      $('#main-block-timeout-second-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец блока таймаута*/

  /*Динамические настройки для основного блока*/

  /*Изменение ширины основного селектора*/

  $('#main-block-width-value, #main-block-width-value-range').on('input', function () {
    $(ths).width($(this).val());

    if ($(this).attr('id') == "main-block-width-value") {
      $('#main-block-width-value-range').val($(this).val());
    } else {
      $('#main-block-width-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-margin-top-value, #main-block-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    }); //$(ths).css('cssText', 'margin-top:'+$(this).val()+'px !important');

    if ($(this).attr('id') == "main-block-margin-top-value") {
      $('#main-block-margin-top-value-range').val($(this).val());
    } else {
      $('#main-block-margin-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-margin-bottom-value, #main-block-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "main-block-margin-bottom-value") {
      $('#main-block-margin-bottom-value-range').val($(this).val());
    } else {
      $('#main-block-margin-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-padding-top-value, #main-block-padding-top-value-range').on('input', function () {
    $(ths).css('padding-top', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-padding-top-value") {
      $('#main-block-padding-top-value-range').val($(this).val());
    } else {
      $('#main-block-padding-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-padding-bottom-value, #main-block-padding-bottom-value-range').on('input', function () {
    $(ths).css('padding-bottom', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-padding-bottom-value") {
      $('#main-block-padding-bottom-value-range').val($(this).val());
    } else {
      $('#main-block-padding-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-padding-left-value, #main-block-padding-left-value-range').on('input', function () {
    $(ths).css('padding-left', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-padding-left-value") {
      $('#main-block-padding-left-value-range').val($(this).val());
    } else {
      $('#main-block-padding-left-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-padding-right-value, #main-block-padding-right-value-range').on('input', function () {
    $(ths).css('padding-right', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-padding-right-value") {
      $('#main-block-padding-right-value-range').val($(this).val());
    } else {
      $('#main-block-padding-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-opacity-value, #main-block-opacity-value-range').on('input', function () {
    $(ths).css('opacity', $(this).val() / 100);

    if ($(this).attr('id') == "main-block-opacity-value") {
      $('#main-block-opacity-value-range').val($(this).val());
    } else {
      $('#main-block-opacity-value').val($(this).val());
    }

    makePreview();
  });
  /*Настройки для всех границ блока*/

  $('#main-block-border-thickness-value, #main-block-border-thickness-value-range').on('input', function () {
    $(ths).css('border-width', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-border-thickness-value") {
      $('#main-block-border-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-thickness-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-border-radius-value, #main-block-border-radius-value-range').on('input', function () {
    $(ths).css('border-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-border-radius-value") {
      $('#main-block-border-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-radius-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-border-style-value').on('change', function () {
    $(ths).css('border-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#main-block-border-color-value').on('change', function () {
    $(ths).css('border-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для левой границы блока*/

  $('#main-block-border-left-thickness-value, #main-block-border-left-thickness-value-range').on('input', function () {
    $(ths).css('border-left-width', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-border-left-thickness-value") {
      $('#main-block-border-left-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-left-thickness-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-border-left-style-value').on('change', function () {
    $(ths).css('border-left-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#main-block-border-left-color-value').on('change', function () {
    $(ths).css('border-left-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для верхней границы блока*/

  $('#main-block-border-top-thickness-value, #main-block-border-top-thickness-value-range').on('input', function () {
    $(ths).css('border-top-width', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-border-top-thickness-value") {
      $('#main-block-border-top-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-top-thickness-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-border-top-left-radius-value, #main-block-border-top-left-radius-value-range').on('input', function () {
    $(ths).css('border-top-left-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-border-top-left-radius-value") {
      $('#main-block-border-top-left-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-top-left-radius-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-border-top-right-radius-value, #main-block-border-top-right-radius-value-range').on('input', function () {
    $(ths).css('border-top-right-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-border-top-right-radius-value") {
      $('#main-block-border-top-right-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-top-right-radius-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-border-top-style-value').on('change', function () {
    $(ths).css('border-top-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#main-block-border-top-color-value').on('change', function () {
    $(ths).css('border-top-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для правой границы блока*/

  $('#main-block-border-right-thickness-value, #main-block-border-right-thickness-value-range').on('input', function () {
    $(ths).css('border-right-width', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-border-right-thickness-value") {
      $('#main-block-border-right-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-right-thickness-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-border-right-style-value').on('change', function () {
    $(ths).css('border-right-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#main-block-border-right-color-value').on('change', function () {
    $(ths).css('border-right-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для нижней границы блока*/

  $('#main-block-border-bottom-thickness-value, #main-block-border-bottom-thickness-value-range').on('input', function () {
    $(ths).css('border-bottom-width', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-border-bottom-thickness-value") {
      $('#main-block-border-bottom-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-bottom-thickness-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-border-bottom-left-radius-value, #main-block-border-bottom-left-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-left-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-border-bottom-left-radius-value") {
      $('#main-block-border-bottom-left-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-bottom-left-radius-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-border-bottom-right-radius-value, #main-block-border-bottom-right-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-right-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "main-block-border-bottom-right-radius-value") {
      $('#main-block-border-bottom-right-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-bottom-right-radius-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-border-bottom-style-value').on('change', function () {
    $(ths).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#main-block-border-bottom-color-value').on('change', function () {
    $(ths).css('border-bottom-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  $('#main-block-border-settings-choice input').on('change', function () {
    switch ($(this).val()) {
      case 'allborders':
        {
          $('#main-block-all-border-settings').show();
          $('#main-block-each-border-settings').hide();
          break;
        }

      case 'eachborders':
        {
          $('#main-block-all-border-settings').hide();
          $('#main-block-each-border-settings').show();
          break;
        }
    }
  });
  $('#main-block-background-types input').on('change', function () {
    switch ($(this).val()) {
      case 'color':
        {
          $('.main-block-background-color-settings').show();
          $('.main-block-background-gradient-settings').hide();
          $('.main-block-background-image-settings').hide();
          $('.main-block-background-vide-settings').hide();
          $(ths).find('.background-video').remove();
          break;
        }

      case 'gradient':
        {
          $('.main-block-background-color-settings').hide();
          $('.main-block-background-gradient-settings').show();
          $('.main-block-background-image-settings').hide();
          $('.main-block-background-vide-settings').hide();
          $(ths).find('.background-video').remove();
          break;
        }

      case 'bgimage':
        {
          $('.main-block-background-color-settings').hide();
          $('.main-block-background-gradient-settings').hide();
          $('.main-block-background-image-settings').show();
          $('.main-block-background-vide-settings').hide();
          $(ths).find('.background-video').remove();
          break;
        }

      case 'video':
        {
          $('.main-block-background-color-settings').hide();
          $('.main-block-background-gradient-settings').hide();
          $('.main-block-background-image-settings').hide();
          $('.main-block-background-video-settings').show();
        }
    }
  });
  $('#main-block-background-color input#main-block-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = hexToRGB($(this).val(), opacity);
    $(ths).css('background', color);
    makePreview();
  });
  $('#main-block-gradient-color-1').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#main-block-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#main-block-gradient-color-2').val() + ')');
    makePreview();
  });
  $('#main-block-gradient-color-2').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#main-block-gradient-angle').val()) + 'deg, ' + $('#main-block-gradient-color-1').val() + ', ' + $(this).val() + ')');
    makePreview();
  });
  $('#main-block-gradient-angle').on('input', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#main-block-gradient-color-1').val() + ', ' + $('#main-block-gradient-color-2').val() + ')');
    makePreview();
  });
  $('#main-block-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#main-block-main-color').val(), opacity / 100);
    $(ths).css('background', color);
    makePreview();
  });
  $('#main-block-background-image-file').on('change', function () {
    var file = document.querySelector('input#main-block-background-image-file').files[0];
    var token = $('input[name=_token][type=hidden]').val();
    var form_data = new FormData();
    form_data.append('image', file);
    form_data.append('_token', token);
    form_data.append('id', $('input[name=template_id]').val());
    $.ajax({
      url: "/client/funnel/saveimage",
      method: 'post',
      data: form_data,
      contentType: false,
      processData: false,
      success: function success(e) {
        $(ths).css('background-image', 'url(' + e.link + ')');
      }
    });
    makePreview();
  });
  $('#main-block-background-image-size').on('change', function () {
    $(ths).css('background-size', $(this).val());
    makePreview();
  });
  $('#main-block-background-image-attachment').on('change', function () {
    $(ths).css('background-attachment', $(this).val());
    makePreview();
  });
  $('#main-block-background-image-blend-mode').on('change', function () {
    $(ths).css('background-blend-mode', $(this).val());
    makePreview();
  });
  $('#main-block-background-image-repeat-x').on('change', function () {
    $(ths).css('background-repeat-x', $(this).val());
    makePreview();
  });
  $('#main-block-background-image-repeat-y').on('change', function () {
    $(ths).css('background-repeat-y', $(this).val());
    makePreview();
  });
  $('#main-block-background-image-color').on('change', function () {
    $(ths).css('background-color', $(this).val());
    makePreview();
  });

  function setYoutubeMainBlockBackgroundVideo(link, params, bgVideoBlock) {
    console.log(bgVideoBlock);
    $(bgVideoBlock).find(' > *').remove();
    var p = "?autoplay=1&controls=0&loop=" + params['loop'] + "&mute=" + params['mute'];
    link = 'https://www.youtube.com/embed/' + link + p;
    var videoblock = '<div class="video-background-main-block">\
                             <div class="video-foreground-main-block">\
                                    <iframe width="560" height="315" src="' + link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
                             </div>\
                          </div>';
    $(bgVideoBlock).append(videoblock);
  }

  $('#main-block-videolink, #main-block-video_loop, #main-block-video_unmute').on('change', function () {
    var bgVideoBlock = null;

    if ($(ths).find('> *').is('.background-video') == false) {
      $(ths).append('<div class="background-video"></div>');
      bgVideoBlock = $(ths).find('> .background-video').first();
    } else {
      bgVideoBlock = $(ths).find('> .background-video').first();
    }

    if ($('#main-block-videolink').val().indexOf(".mp4") != -1 || $('#main-block-videolink').val().indexOf(".avi") != -1) {
      setAnotherMainBlockBackgroundVideo($(this).val());
    } else if ($('#main-block-videolink').val().indexOf("youtube.com") != -1 || $('#main-block-videolink').val().indexOf("youtu.be") != -1) {
      var link;

      if ($('#main-block-videolink').val().indexOf("watch?v=") != -1) {
        link = $('#main-block-videolink').val().split("watch?v=")[1];
      } else if ($('#main-block-videolink').val().indexOf("embed") != -1) {
        link = $('#main-block-videolink').val().split("embed/")[1];
      } else {
        link = $('#main-block-videolink').val().split("youtu.be/")[1];
      }

      params = [];
      params['loop'] = $('#main-block-video_loop:checked').val() == '1' ? 1 : 0;
      params['mute'] = $('#main-block-video_unmute:checked').val() == '1' ? 0 : 1;
      setYoutubeMainBlockBackgroundVideo(link, params, bgVideoBlock);
    } else {
      $('#backgroundVideo > *').remove();
    }

    makePreview();
  });
  /*Настройки теней*/

  $('#main-block-shadow-horizontal-value, #main-block-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);

    if ($(this).attr('id') == "main-block-shadow-horizontal-value") {
      $('#main-block-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-horizontal-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-shadow-vertical-value, #main-block-shadow-vertical-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);

    if ($(this).attr('id') == "main-block-shadow-vertical-value") {
      $('#main-block-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-vertical-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-shadow-blur-value, #main-block-shadow-blur-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);

    if ($(this).attr('id') == "main-block-shadow-blur-value") {
      $('#main-block-shadow-blur-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-blur-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-shadow-spread-value, #main-block-shadow-spread-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);

    if ($(this).attr('id') == "main-block-shadow-spread-value") {
      $('#main-block-shadow-spread-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-spread-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-shadow-opacity-value, #main-block-shadow-opacity-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);

    if ($(this).attr('id') == "main-block-shadow-opacity-value") {
      $('#main-block-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-opacity-value').val($(this).val());
    }

    makePreview();
  });
  $('#main-block-shadow-color-value').on('change', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    makePreview();
  });
  $('#main-block-shadow-inset-value').on('change', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    makePreview();
  });
  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#main-block-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(ths).css('animation-name', $(this).val());
      $(ths).css('animation-delay', $('#main-block-animation-delay-value').val() + 's');
      $(ths).css('animation-duration', $('#main-block-animation-duration-value').val() + 's');
    }

    makePreview();
  });
  $('#main-block-animation-delay-value').on('change', function () {
    $(ths).css('animation-delay', $(this).val() + 's');
    makePreview();
  });
  $('#main-block-animation-duration-value').on('change', function () {
    $(ths).css('animation-duration', $(this).val() + 's');
    makePreview();
  });
  /*Конец настроек анимации*/
  //Конец блока
});
$('#page-background-color input').on('change', function () {
  var opacity = $('#page-main-color-opacity').val() / 100;
  var color = hexToRGB($(this).val(), opacity);
  $('#mainArea').css('background', color);
  makePreview();
});
$('#page-meta-description input').on('input', function () {
  $('meta[name=description]').attr('content', $(this).val());
});
$('#page-meta-keywords input').on('input', function () {
  $('meta[name=keywords]').attr('content', $(this).val());
});
$('#page-title input').on('input', function () {
  $('title').text($(this).val());
});
$('#gradient-color-1').on('change', function () {
  $('#mainArea').css('background', 'linear-gradient(' + parseInt($('#gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#gradient-color-2').val() + ')');
  makePreview();
});
$('#gradient-color-2').on('change', function () {
  $('#mainArea').css('background', 'linear-gradient(' + parseInt($('#gradient-angle').val()) + 'deg, ' + $('#gradient-color-1').val() + ', ' + $(this).val() + ')');
  makePreview();
});
$('#gradient-angle').on('input', function () {
  $('#mainArea').css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#gradient-color-1').val() + ', ' + $('#gradient-color-2').val() + ')');
  makePreview();
});
$('#page-main-color-opacity').on('input', function () {
  var opacity = $(this).val();
  var color = hexToRGB($('#page-main-color').val(), opacity / 100);
  $('#mainArea').css('background', color);
  makePreview();
});
$('#page-background-image-file').on('change', function () {
  var file = document.querySelector('input#page-background-image-file').files[0];
  var token = $('input[name=_token][type=hidden]').val();
  var form_data = new FormData();
  form_data.append('image', file);
  form_data.append('_token', token);
  form_data.append('id', $('input[name=template_id]').val());
  $.ajax({
    url: "/client/funnel/saveimage",
    method: 'post',
    data: form_data,
    contentType: false,
    processData: false,
    success: function success(e) {
      $('#mainArea').css('background-image', 'url(' + e.link + ')');
    }
  });
  makePreview();
});
$('#page-background-image-size').on('change', function () {
  $('#mainArea').css('background-size', $(this).val());
  makePreview();
});
$('#page-background-image-attachment').on('change', function () {
  $('#mainArea').css('background-attachment', $(this).val());
  makePreview();
});
$('#page-background-image-blend-mode').on('change', function () {
  $('#mainArea').css('background-blend-mode', $(this).val());
  makePreview();
});
$('#page-background-image-repeat-x').on('change', function () {
  $('#mainArea').css('background-repeat-x', $(this).val());
  makePreview();
});
$('#page-background-image-repeat-y').on('change', function () {
  $('#mainArea').css('background-repeat-y', $(this).val());
  makePreview();
});
$('#page-background-image-color').on('change', function () {
  $('#mainArea').css('background-color', $(this).val());
  makePreview();
});
$('#page-background-types input').on('change', function () {
  switch ($(this).val()) {
    case 'color':
      {
        $('.page-background-color-settings').show();
        $('.page-background-gradient-settings').hide();
        $('.page-background-image-settings').hide();
        $('.page-background-vide-settings').hide();
        break;
      }

    case 'gradient':
      {
        $('.page-background-color-settings').hide();
        $('.page-background-gradient-settings').show();
        $('.page-background-image-settings').hide();
        $('.page-background-vide-settings').hide();
        break;
      }

    case 'bgimage':
      {
        $('.page-background-color-settings').hide();
        $('.page-background-gradient-settings').hide();
        $('.page-background-image-settings').show();
        $('.page-background-vide-settings').hide();
        break;
      }

    case 'video':
      {
        $('.page-background-color-settings').hide();
        $('.page-background-gradient-settings').hide();
        $('.page-background-image-settings').hide();
        $('.page-background-video-settings').show();
      }
  }
});
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

function getRandomColor() {
  var colorR = Math.floor(Math.random() * 256);
  var colorG = Math.floor(Math.random() * 256);
  var colorB = Math.floor(Math.random() * 256);
  return "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}

function animateCSS(element, animationName, callback) {
  var node = document.querySelector(element);
  node.classList.add('animated', animationName);

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);
    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}

function addMainSelectorSection($this) {
  var lastElement = $($this).parents('.main-selector').find('>[class*="col-"]').last();
  $(lastElement).append('<div class="handle"></div>');
  $(lastElement).after('<div class="content col-md-1" id="' + getRandom() + '"></div>');
  $($(lastElement).find('.handle')).resizer();
  $($this).parents('.main-selector').find('.content').each(function () {
    Sortable.create($("#" + $(this).attr('id') + "").get(0), {
      group: {
        name: 'content-selector',
        put: 'content-selector'
      },
      filter: '.resizer, .handle, .block-resizer',
      sort: true,
      animation: 150,
      ghostClass: 'green-background-class',
      onChoose: function onChoose(e) {
        if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(e.item).attr('id'));
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          var textElem = textBlockElem.getElementsByClassName('text')[0];
          content = iframe.contentWindow.document.body.innerHTML;
          var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
          styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
          styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
          styleElem += 'color:' + getComputedStyle(textElem).color + ';';
          styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
          style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
        }
      },
      onStart: function onStart(evt) {
        $('.handle').css('display', 'none');
        $('.main-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover');
        });
        $('.content-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover-content');
        });
      },
      onEnd: function onEnd(evt) {
        $('.handle').css('display', 'block');
        $('.border-hover').removeClass('border-hover');
        $('.border-hover-content').removeClass('border-hover-content');

        if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(evt.item).attr('id'));
          var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          init(iframe, content, style);
          textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
          iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
          addFunctionalityToIframe($(evt.item).attr('id'));
        }
      }
    });
  });
}

function removeMainSelectorSection($this) {
  var $delta = 0;
  var lastElement = $($this).parents('.main-selector').find('>[class*="col-"]').last();
  $($(lastElement).attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      $delta = el.split('-')[2];
    }
  });
  var prevElement = lastElement.prev();
  lastElement.remove();
  $(prevElement).find('.handle').remove();
  $($(prevElement).attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      $(prevElement).removeClass(el);
      $(prevElement).addClass('col-' + el.split('-')[1] + '-' + (parseInt(el.split('-')[2]) + parseInt($delta)));
    }
  });
}

function indexOfMax(mas) {
  if (mas.length === 0) {
    return -1;
  }

  var max = mas[0];
  var maxIndex = 0;

  for (var i = 1; i < mas.length; i++) {
    if (mas[i] > max) {
      maxIndex = i;
      max = mas[i];
    }
  }

  return maxIndex;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tYWluX3NlbGVjdG9yL21haW5fc2VsZWN0b3Jfc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiJCIsIm9uIiwicGFyZW50cyIsImZpcnN0IiwicmVtb3ZlIiwibWFrZVByZXZpZXciLCIkY29weUVsZW1lbnQiLCJjbG9uZSIsImZpbmQiLCJlYWNoIiwiYXR0ciIsImdldFJhbmRvbSIsImFmdGVyIiwiY2xvbmVJZCIsImFkZEZ1bmN0aW9uYWxpdHlUb0VsZW1lbnQiLCJhZGRGdW5jdGlvbmFsaXR5VG9UZXh0RWxlbWVudCIsImFkZEZ1bmN0aW9uYWxpdHlUb0J1dHRvbkVsZW1lbnQiLCJmb3JtSWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpZCIsImlucHV0cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJTb3J0YWJsZSIsImNyZWF0ZSIsImdldCIsImFuaW1hdGlvbiIsInN3YXBUaHJlc2hvbGQiLCJlbXB0eUluc2VydFRocmVzaG9sZCIsImdob3N0Q2xhc3MiLCJvblN0YXJ0IiwiZSIsImkiLCJsZW5ndGgiLCJvbmJsdXIiLCJvbkVuZCIsImJsdXIiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwiYWRkRnVuY3Rpb25hbGl0eVRvRm9ybUVsZW1lbnQiLCJhZGREcmFnQW5kRHJvcFRvRm9ybSIsImFkZEZ1bmN0aW9uYWxpdHlUb1N1YnNjcmliZUVsZW1lbnQiLCJhZGRGdW5jdGlvbmFsaXR5VG9MaXN0RWxlbWVudCIsImdyb3VwIiwicHV0IiwiZmlsdGVyIiwic29ydCIsIm9uQ2hvb3NlIiwiaXRlbSIsInRleHRCbG9ja0VsZW0iLCJpZnJhbWUiLCJ0ZXh0RWxlbSIsImNvbnRlbnQiLCJjb250ZW50V2luZG93IiwiYm9keSIsImlubmVySFRNTCIsInN0eWxlRWxlbSIsImdldENvbXB1dGVkU3R5bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJ0ZXh0U2hhZG93Iiwic3R5bGUiLCJldnQiLCJjc3MiLCJpbmQiLCJlbCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0ZXh0RWRpdG9yUGFuZWwiLCJpbml0Iiwid2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJhZGRGdW5jdGlvbmFsaXR5VG9JZnJhbWUiLCJyZXNpemVyIiwicmVzaXplcl9zIiwiYmxvY2tfcmVzaXplciIsIiR0aGlzIiwibWF4SW5kZXgiLCJjb2xzIiwiJGNvbFNpemVzIiwiY2xhc3NlcyIsInNwbGl0IiwibWF0Y2giLCJwdXNoIiwicGFyc2VJbnQiLCJpbmRleE9mTWF4IiwibWF4VmFsdWVTZWN0aW9uIiwiYWRkTWFpblNlbGVjdG9yU2VjdGlvbiIsInJlbW92ZU1haW5TZWxlY3RvclNlY3Rpb24iLCJldmVudCIsIm9mZiIsInRocyIsInBhcmVudCIsInRpbWUiLCJoIiwiTWF0aCIsImZsb29yIiwibSIsInMiLCJ2YWwiLCJwcm9wIiwiaGlkZSIsInNob3ciLCJyaWdodCIsInRyYW5zaXRpb24iLCJ2aWRlb2xuayIsIlN0cmluZyIsImNoZWNrZWQiLCJob3VycyIsIm1pbnV0ZSIsInNlY29uZCIsImFwcGVuZCIsIm9wYWNpdHkiLCJoZXhUb1JHQiIsImZpbGUiLCJxdWVyeVNlbGVjdG9yIiwiZmlsZXMiLCJ0b2tlbiIsImZvcm1fZGF0YSIsIkZvcm1EYXRhIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwic3VjY2VzcyIsImxpbmsiLCJzZXRZb3V0dWJlTWFpbkJsb2NrQmFja2dyb3VuZFZpZGVvIiwicGFyYW1zIiwiYmdWaWRlb0Jsb2NrIiwiY29uc29sZSIsImxvZyIsInAiLCJ2aWRlb2Jsb2NrIiwiaXMiLCJpbmRleE9mIiwic2V0QW5vdGhlck1haW5CbG9ja0JhY2tncm91bmRWaWRlbyIsImh2IiwidnYiLCJibHIiLCJzcHJkIiwiY2xyIiwiaW5zZXQiLCJwcnB0cyIsInRleHQiLCJoZXgiLCJhbHBoYSIsInIiLCJzbGljZSIsImciLCJiIiwiZ2V0UmFuZG9tQ29sb3IiLCJjb2xvclIiLCJyYW5kb20iLCJjb2xvckciLCJjb2xvckIiLCJhbmltYXRlQ1NTIiwiZWxlbWVudCIsImFuaW1hdGlvbk5hbWUiLCJjYWxsYmFjayIsIm5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVBbmltYXRpb25FbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxhc3RFbGVtZW50IiwibGFzdCIsIm5hbWUiLCIkZGVsdGEiLCJwcmV2RWxlbWVudCIsInByZXYiLCJtYXMiLCJtYXgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlQyxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFNBQTNCLEVBQXNDLFlB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RUFBb0M7QUFDbEN0RixPQUFDLENBQUMrSyxXQUFELENBQUQsQ0FBZXpHLFdBQWYsQ0FBMkJGLEVBQTNCO0FBQ0FwRSxPQUFDLENBQUMrSyxXQUFELENBQUQsQ0FBZTFHLFFBQWYsQ0FBd0IsU0FBU0QsRUFBRSxDQUFDaUIsS0FBSCxDQUFTLEdBQVQsRUFBYyxDQUFkLENBQVQsR0FBNEIsR0FBNUIsSUFBbUNHLFFBQVEsQ0FBQ3BCLEVBQUUsQ0FBQ2lCLEtBQUgsQ0FBUyxHQUFULEVBQWMsQ0FBZCxDQUFELENBQVIsR0FBNkJHLFFBQVEsQ0FBQ3NGLE1BQUQsQ0FBeEUsQ0FBeEI7QUFDRDtBQUNGLEdBTEQ7QUFNRDs7QUFFRCxTQUFTckYsVUFBVCxDQUFvQndGLEdBQXBCLEVBQXlCO0FBQ3ZCLE1BQUlBLEdBQUcsQ0FBQy9JLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNwQixXQUFPLENBQUMsQ0FBUjtBQUNEOztBQUVELE1BQUlnSixHQUFHLEdBQUdELEdBQUcsQ0FBQyxDQUFELENBQWI7QUFDQSxNQUFJaEcsUUFBUSxHQUFHLENBQWY7O0FBRUEsT0FBSyxJQUFJaEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dKLEdBQUcsQ0FBQy9JLE1BQXhCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ25DLFFBQUlnSixHQUFHLENBQUNoSixDQUFELENBQUgsR0FBU2lKLEdBQWIsRUFBa0I7QUFDaEJqRyxjQUFRLEdBQUdoRCxDQUFYO0FBQ0FpSixTQUFHLEdBQUdELEdBQUcsQ0FBQ2hKLENBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT2dELFFBQVA7QUFDRCxDIiwiZmlsZSI6Im1haW5fc2VsZWN0b3Jfc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9BUEkvbWFpbl9zZWxlY3Rvci9tYWluX3NlbGVjdG9yX3NldHRpbmdzLmpzXCIpO1xuIiwiJCgnI21haW5BcmVhJykub24oJ2NsaWNrJywgJy5yZW1vdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCh0aGlzKS5wYXJlbnRzKCcubWFpbi1zZWxlY3RvcicpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgbWFrZVByZXZpZXcoKTtcclxufSk7XHJcblxyXG4kKCcjbWFpbkFyZWEnKS5vbignY2xpY2snLCAnLmNvcHknLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyICRjb3B5RWxlbWVudCA9ICQodGhpcykucGFyZW50cygnLm1haW4tc2VsZWN0b3InKS5jbG9uZSgpO1xyXG5cclxuICAkKCRjb3B5RWxlbWVudCkuZmluZCgnLmNvbnRlbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuYXR0cignaWQnLCBnZXRSYW5kb20oKSk7XHJcbiAgfSk7XHJcbiAgJCgkY29weUVsZW1lbnQpLmZpbmQoJy5pbWFnZUJsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJ2ltYWdlJyArIGdldFJhbmRvbSgpKTtcclxuICB9KTtcclxuICAkKCRjb3B5RWxlbWVudCkuZmluZCgnLnZpZGVvQmxvY2snKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuYXR0cignaWQnLCAndmlkZW8nICsgZ2V0UmFuZG9tKCkpO1xyXG4gIH0pO1xyXG4gICQoJGNvcHlFbGVtZW50KS5maW5kKCcudGV4dEJsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJ3RleHQnICsgZ2V0UmFuZG9tKCkpO1xyXG4gIH0pO1xyXG4gICQoJGNvcHlFbGVtZW50KS5maW5kKCcuYnV0dG9uQmxvY2snKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuYXR0cignaWQnLCAnYnV0dG9uJyArIGdldFJhbmRvbSgpKTtcclxuICB9KTtcclxuICAkKCRjb3B5RWxlbWVudCkuZmluZCgnLmZvcm1CbG9jaycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5hdHRyKCdpZCcsICdmb3JtJyArIGdldFJhbmRvbSgpKTtcclxuICB9KTtcclxuICAkKCRjb3B5RWxlbWVudCkuZmluZCgnLnN1YnNjcmliZUJsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJ3N1YnNjcmliZScgKyBnZXRSYW5kb20oKSk7XHJcbiAgfSk7XHJcbiAgJCgkY29weUVsZW1lbnQpLmZpbmQoJy5saXN0QmxvY2snKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuYXR0cignaWQnLCAnbGlzdCcgKyBnZXRSYW5kb20oKSk7XHJcbiAgfSk7XHJcblxyXG4gICQodGhpcykucGFyZW50cygnLm1haW4tc2VsZWN0b3InKS5maXJzdCgpLmFmdGVyKCRjb3B5RWxlbWVudCk7XHJcblxyXG4gICQoJGNvcHlFbGVtZW50KS5maW5kKCcuaW1hZ2VCbG9jaycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNsb25lSWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgYWRkRnVuY3Rpb25hbGl0eVRvRWxlbWVudChjbG9uZUlkKTtcclxuICB9KTtcclxuICAkKCRjb3B5RWxlbWVudCkuZmluZCgnLnZpZGVvQmxvY2snKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjbG9uZUlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0VsZW1lbnQoY2xvbmVJZCk7XHJcbiAgfSk7XHJcbiAgJCgkY29weUVsZW1lbnQpLmZpbmQoJy50ZXh0QmxvY2snKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjbG9uZUlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgIGFkZEZ1bmN0aW9uYWxpdHlUb1RleHRFbGVtZW50KGNsb25lSWQpO1xyXG4gIH0pO1xyXG4gICQoJGNvcHlFbGVtZW50KS5maW5kKCcuYnV0dG9uQmxvY2snKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjbG9uZUlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0J1dHRvbkVsZW1lbnQoY2xvbmVJZCk7XHJcbiAgfSk7XHJcbiAgJCgkY29weUVsZW1lbnQpLmZpbmQoJy5mb3JtQmxvY2snKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjbG9uZUlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1JZCA9IGdldFJhbmRvbSgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xvbmVJZCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXS5pZCA9IGZvcm1JZDtcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF5SW5wdXQnKTtcclxuXHJcbiAgICBTb3J0YWJsZS5jcmVhdGUoJChcIiNcIiArIGZvcm1JZCArIFwiXCIpLmdldCgwKSwge1xyXG4gICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgc3dhcFRocmVzaG9sZDogMSxcclxuICAgICAgZW1wdHlJbnNlcnRUaHJlc2hvbGQ6IDEsXHJcbiAgICAgIGdob3N0Q2xhc3M6ICdibHVlLWJhY2tncm91bmQtY2xhc3MnLFxyXG4gICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpbnB1dHNbaV0ub25ibHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvbkVuZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaW5wdXRzW2ldLmJsdXIoKTtcclxuICAgICAgICAgIGlucHV0c1tpXS5vbmJsdXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlucHV0c1tpXS5wbGFjZWhvbGRlciA9IGlucHV0c1tpXS52YWx1ZTtcclxuICAgICAgICAgICAgaW5wdXRzW2ldLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0Zvcm1FbGVtZW50KGNsb25lSWQpO1xyXG4gIH0pO1xyXG4gICQoJGNvcHlFbGVtZW50KS5maW5kKCcuc3Vic2NyaWJlQmxvY2snKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjbG9uZUlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgIGFkZERyYWdBbmREcm9wVG9Gb3JtKGNsb25lSWQpO1xyXG5cclxuICAgIGFkZEZ1bmN0aW9uYWxpdHlUb1N1YnNjcmliZUVsZW1lbnQoY2xvbmVJZCk7XHJcbiAgfSk7XHJcbiAgJCgkY29weUVsZW1lbnQpLmZpbmQoJy5saXN0QmxvY2snKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjbG9uZUlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0xpc3RFbGVtZW50KGNsb25lSWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKCRjb3B5RWxlbWVudCkuZmluZCgnLmNvbnRlbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIFNvcnRhYmxlLmNyZWF0ZSgkKCcjJyArICQodGhpcykuYXR0cignaWQnKSArICcnKS5nZXQoMCksIHtcclxuICAgICAgZ3JvdXA6ICdjb250ZW50LXNlbGVjdG9yJyxcclxuICAgICAgcHV0OiAnY29udGVudC1zZWxlY3RvcicsXHJcbiAgICAgIGZpbHRlcjogJy5yZXNpemVyLCAuaGFuZGxlLCAuYmxvY2stcmVzaXplcicsXHJcbiAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgIGFuaW1hdGlvbjogMTUwLFxyXG4gICAgICBnaG9zdENsYXNzOiAnZ3JlZW4tYmFja2dyb3VuZC1jbGFzcycsXHJcbiAgICAgIG9uQ2hvb3NlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICgkKGUuaXRlbSkuYXR0cignY2xhc3MnKSA9PSAndGV4dEJsb2NrIHNvcnRhYmxlLWNob3NlbicgJiYgZS5pdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXSkge1xyXG4gICAgICAgICAgY29uc3QgdGV4dEJsb2NrRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQoZS5pdGVtKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgIGNvbnN0IGlmcmFtZSA9IHRleHRCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdO1xyXG4gICAgICAgICAgY29uc3QgdGV4dEVsZW0gPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHQnKVswXTtcclxuICAgICAgICAgIGNvbnRlbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5ib2R5LmlubmVySFRNTDtcclxuICAgICAgICAgIGxldCBzdHlsZUVsZW0gPSAnZm9udC1zaXplOicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS5mb250U2l6ZSArICc7JztcclxuICAgICAgICAgIHN0eWxlRWxlbSArPSAnZm9udC1mYW1pbHk6JyArIGdldENvbXB1dGVkU3R5bGUodGV4dEVsZW0pLmZvbnRGYW1pbHkgKyAnOyc7XHJcbiAgICAgICAgICBzdHlsZUVsZW0gKz0gJ2xpbmUtaGVpZ2h0OicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS5saW5lSGVpZ2h0ICsgJzsnO1xyXG4gICAgICAgICAgc3R5bGVFbGVtICs9ICdjb2xvcjonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkuY29sb3IgKyAnOyc7XHJcbiAgICAgICAgICBzdHlsZUVsZW0gKz0gJ3RleHQtc2hhZG93OicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS50ZXh0U2hhZG93ICsgJzsnO1xyXG4gICAgICAgICAgc3R5bGUgPSAnYm9keSB7b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgZGlzcGxheTogYmxvY2s7IG1hcmdpbjogMDsgcGFkZGluZzogMDsnICsgc3R5bGVFbGVtICsgJ30nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb25TdGFydDogZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICQoJy5oYW5kbGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICQoJy5tYWluLXNlbGVjdG9yJykuZWFjaChmdW5jdGlvbiAoaW5kLCBlbCkge1xyXG4gICAgICAgICAgJChlbCkuZmluZCgnPiAuY29udGVudDpub3QoOmxhc3QpJykuYWRkQ2xhc3MoJ2JvcmRlci1ob3ZlcicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5jb250ZW50LXNlbGVjdG9yJykuZWFjaChmdW5jdGlvbiAoaW5kLCBlbCkge1xyXG4gICAgICAgICAgJChlbCkuZmluZCgnPiAuY29udGVudDpub3QoOmxhc3QpJykuYWRkQ2xhc3MoJ2JvcmRlci1ob3Zlci1jb250ZW50Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgJCgnLmhhbmRsZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJy5ib3JkZXItaG92ZXInKS5yZW1vdmVDbGFzcygnYm9yZGVyLWhvdmVyJyk7XHJcbiAgICAgICAgJCgnLmJvcmRlci1ob3Zlci1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1ob3Zlci1jb250ZW50Jyk7XHJcbiAgICAgICAgaWYgKCQoZXZ0Lml0ZW0pLmF0dHIoJ2NsYXNzJykgPT0gJ3RleHRCbG9jaycgJiYgZXZ0Lml0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdKSB7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0QmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJChldnQuaXRlbSkuYXR0cignaWQnKSk7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0RWRpdG9yUGFuZWwgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHQtZWRpdG9yLXBhbmVsJylbMF07XHJcbiAgICAgICAgICBjb25zdCBpZnJhbWUgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXTtcclxuICAgICAgICAgIGluaXQoaWZyYW1lLCBjb250ZW50LCBzdHlsZSk7XHJcbiAgICAgICAgICB0ZXh0RWRpdG9yUGFuZWwuc3R5bGUud2lkdGggPSAodGV4dEJsb2NrRWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIDIpICsgJ3B4JztcclxuICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICdweCc7XHJcbiAgICAgICAgICBhZGRGdW5jdGlvbmFsaXR5VG9JZnJhbWUoJChldnQuaXRlbSkuYXR0cignaWQnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gICQoJy5oYW5kbGUnKS5yZXNpemVyKCk7XHJcbiAgJCgnLnJlc2l6ZXInKS5yZXNpemVyX3MoKTtcclxuICAkKCcuYmxvY2stcmVzaXplcicpLmJsb2NrX3Jlc2l6ZXIoKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbiQoJyNtYWluQXJlYScpLm9uKCdjbGljaycsICcuYWRkLWJsb2NrJywgZnVuY3Rpb24gKCkge1xyXG4gIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgdmFyIG1heEluZGV4O1xyXG4gIHZhciBjb2xzID0gJCh0aGlzKS5wYXJlbnRzKCcubWFpbi1zZWxlY3RvcicpLmZpbmQoJz5bY2xhc3MqPVwiY29sLVwiXScpO1xyXG5cclxuICBpZiAoY29scy5sZW5ndGggPT0gMTIpXHJcbiAgICByZXR1cm47XHJcblxyXG4gIHZhciAkY29sU2l6ZXMgPSBbXTtcclxuXHJcbiAgJChjb2xzKS5lYWNoKGZ1bmN0aW9uIChpbmQsIGVsKSB7XHJcbiAgICB2YXIgY2xhc3NlcyA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpO1xyXG5cclxuICAgICQoY2xhc3NlcykuZWFjaChmdW5jdGlvbiAoaW5kLCBlbCkge1xyXG4gICAgICBpZiAoZWwubWF0Y2goL2NvbC1bYS16XSstWzAtOV0rL2kpKVxyXG4gICAgICAgICRjb2xTaXplcy5wdXNoKHBhcnNlSW50KGVsLnNwbGl0KCctJylbMl0pKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIG1heEluZGV4ID0gaW5kZXhPZk1heCgkY29sU2l6ZXMpO1xyXG4gIHZhciBtYXhWYWx1ZVNlY3Rpb24gPSAkKCR0aGlzKS5wYXJlbnRzKCcubWFpbi1zZWxlY3RvcicpLmZpbmQoJz5bY2xhc3MqPVwiY29sLVwiXTpudGgoJyArIG1heEluZGV4ICsgJyknKTtcclxuICAkKG1heFZhbHVlU2VjdGlvbi5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJykpLmVhY2goZnVuY3Rpb24gKGluZCwgZWwpIHtcclxuICAgIGlmIChlbC5tYXRjaCgvY29sLVthLXpdKy1bMC05XSsvaSkpIHtcclxuICAgICAgJChtYXhWYWx1ZVNlY3Rpb24pLnJlbW92ZUNsYXNzKGVsKTtcclxuICAgICAgJChtYXhWYWx1ZVNlY3Rpb24pLmFkZENsYXNzKCdjb2wtJyArIGVsLnNwbGl0KCctJylbMV0gKyAnLScgKyAocGFyc2VJbnQoZWwuc3BsaXQoJy0nKVsyXSkgLSAxKSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG4gIGFkZE1haW5TZWxlY3RvclNlY3Rpb24oJHRoaXMpO1xyXG4gIG1ha2VQcmV2aWV3KCk7XHJcbn0pO1xyXG5cclxuJCgnI21haW5BcmVhJykub24oJ2NsaWNrJywgJy5yZW1vdmUtYmxvY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgdmFyIGNvbHMgPSAkKHRoaXMpLnBhcmVudHMoJy5tYWluLXNlbGVjdG9yJykuZmluZCgnPltjbGFzcyo9XCJjb2wtXCJdJyk7XHJcblxyXG4gIGlmIChjb2xzLmxlbmd0aCA9PSAxKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICByZW1vdmVNYWluU2VsZWN0b3JTZWN0aW9uKCR0aGlzKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbiQoJyNtYWluQXJlYScpLm9uKCdjbGljaycsICcubWFpbi1ibG9jay1zZXR0aW5ncycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIC8v0J7Rh9C40YHRgtC60LAg0L7RgiDRgdGC0LDRgNGL0YUg0YHQvtCx0YvRgtC40Lkg0LjQt9C80LXQvdC10L3QuNGPINC30L3QsNGH0LXQvdC40LkgKNC/0YDQuCDQv9C10YDQstC+0Lwg0LrQu9C40LrQtSDQvdCwINC90LDRgdGC0YDQvtC50LrQuCwg0LLRi9C30YvQstCw0LXRgtGB0Y8g0L7QtNC40L0g0YDQsNC3LCDQv9GA0Lgg0LLRgtC+0YDQvtC8INGD0LbQtSDQtNCy0LApLlxyXG4gIC8v0J/QvtC/0YDQsNCy0LvQtdC90L4hISFcclxuICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2Om5vdCgjc2V0dGluZ3MtbW4pIGlucHV0Jykub2ZmKCdpbnB1dCcpO1xyXG4gICQoJyNyaWdodFNpZGViYXIgPiBkaXY6bm90KCNzZXR0aW5ncy1tbikgaW5wdXQnKS5vZmYoKTtcclxuICAkKCcjbWFpbi1ibG9jay1ib3JkZXItc3R5bGUtdmFsdWUnKS5vZmYoKTtcclxuICAkKCcjbWFpbi1ibG9jay1ib3JkZXItbGVmdC1zdHlsZS12YWx1ZScpLm9mZigpO1xyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci1yaWdodC1zdHlsZS12YWx1ZScpLm9mZigpO1xyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci10b3Atc3R5bGUtdmFsdWUnKS5vZmYoKTtcclxuICAkKCcjbWFpbi1ibG9jay1ib3JkZXItYm90dG9tLXN0eWxlLXZhbHVlJykub2ZmKCk7XHJcbiAgJCgnI21haW4tYmxvY2stYW5pbWF0aW9uLXR5cGUtdmFsdWUnKS5vZmYoKTtcclxuICB2YXIgdGhzID0gbnVsbDtcclxuICB0aHMgPSAkKHRoaXMpLnBhcmVudHMoJy5ibG9jay1zZXR0aW5ncycpLnBhcmVudCgpO1xyXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyaXB0LScgKyB0aHMuYXR0cignaWQnKSkpIHtcclxuICAgIHZhciB0aW1lID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpLmlubmVySFRNTC5zcGxpdCgnLCcpWzFdKSAvIDEwMDA7XHJcbiAgICB2YXIgaCA9IE1hdGguZmxvb3IodGltZSAvIDM2MDApO1xyXG4gICAgdmFyIG0gPSBNYXRoLmZsb29yKCh0aW1lIC0gMzYwMCAqIGgpIC8gNjApO1xyXG4gICAgdmFyIHMgPSB0aW1lIC0gKDM2MDAgKiBoICsgNjAgKiBtKTtcclxuICAgICQoJyNtYWluLWJsb2NrLXRpbWVvdXQtaG91ci12YWx1ZScpLnZhbChoKTtcclxuICAgICQoJyNtYWluLWJsb2NrLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKG0pO1xyXG4gICAgJCgnI21haW4tYmxvY2stdGltZW91dC1zZWNvbmQtdmFsdWUnKS52YWwocyk7XHJcbiAgICAkKCcjbWFpbi1ibG9jay1kaXNwbGF5LW5vbmUtdmFsdWUnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJyNtYWluLWJsb2NrLXRpbWVvdXQtaG91ci12YWx1ZScpLnZhbCgwKTtcclxuICAgICQoJyNtYWluLWJsb2NrLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKDApO1xyXG4gICAgJCgnI21haW4tYmxvY2stdGltZW91dC1zZWNvbmQtdmFsdWUnKS52YWwoMCk7XHJcbiAgfVxyXG5cclxuICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2JykuaGlkZSgpO1xyXG4gICQoJyNzZXR0aW5ncy1tbicpLmhpZGUoKTtcclxuICAkKCcjY29udGVudC1ibG9jay1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjaW1hZ2Utc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3ZpZGVvLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyN0ZXh0LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNidXR0b24tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2Zvcm0tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3N1YnNjcmliZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGluZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGlzdC1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbWFpbi1ibG9jay1zZXR0aW5ncycpLnNob3coKTtcclxuICAkKCcjcmlnaHRTaWRlYmFyJykuY3NzKHtcclxuICAgIHJpZ2h0OiAnMHB4JyxcclxuICAgIHRyYW5zaXRpb246ICcwLjRzIGFsbCBlYXNlLWluJ1xyXG4gIH0pLmFkZENsYXNzKCdhY3RpdmF0ZWQnKTtcclxuXHJcbiAgLyrQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQuNC90L/Rg9GC0L7QsiovXHJcbiAgJCgnI21haW4tYmxvY2std2lkdGgtdmFsdWUnKS52YWwoJCh0aHMpLndpZHRoKCkpO1xyXG4gICQoJyNtYWluLWJsb2NrLXdpZHRoLXZhbHVlLXJhbmdlJykudmFsKCQodGhzKS53aWR0aCgpKTtcclxuICAkKCcjbWFpbi1ibG9jay1tYXJnaW4tdG9wLXZhbHVlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ21hcmdpbi10b3AnKSkpO1xyXG4gICQoJyNtYWluLWJsb2NrLW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnbWFyZ2luLXRvcCcpKSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLW1hcmdpbi1ib3R0b20tdmFsdWUnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnbWFyZ2luLWJvdHRvbScpKSk7XHJcbiAgJCgnI21haW4tYmxvY2stbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdtYXJnaW4tYm90dG9tJykpKTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stcGFkZGluZy10b3AtdmFsdWUnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygncGFkZGluZy10b3AnKSkpO1xyXG4gICQoJyNtYWluLWJsb2NrLXBhZGRpbmctdG9wLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ3BhZGRpbmctdG9wJykpKTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stcGFkZGluZy1ib3R0b20tdmFsdWUnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygncGFkZGluZy1ib3R0b20nKSkpO1xyXG4gICQoJyNtYWluLWJsb2NrLXBhZGRpbmctYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ3BhZGRpbmctYm90dG9tJykpKTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stcGFkZGluZy1sZWZ0LXZhbHVlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ3BhZGRpbmctbGVmdCcpKSk7XHJcbiAgJCgnI21haW4tYmxvY2stcGFkZGluZy1sZWZ0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ3BhZGRpbmctbGVmdCcpKSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLXBhZGRpbmctcmlnaHQtdmFsdWUnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygncGFkZGluZy1yaWdodCcpKSk7XHJcbiAgJCgnI21haW4tYmxvY2stcGFkZGluZy1yaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdwYWRkaW5nLXJpZ2h0JykpKTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stb3BhY2l0eS12YWx1ZScpLnZhbCgkKHRocykuY3NzKCdvcGFjaXR5JykgKiAxMDApO1xyXG4gICQoJyNtYWluLWJsb2NrLW9wYWNpdHktdmFsdWUtcmFuZ2UnKS52YWwoJCh0aHMpLmNzcygnb3BhY2l0eScpICogMTAwKTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLXRoaWNrbmVzcy12YWx1ZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItd2lkdGgnKSkpO1xyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci10aGlja25lc3MtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLXdpZHRoJykpKTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLWxlZnQtdGhpY2tuZXNzLXZhbHVlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykpKTtcclxuICAkKCcjbWFpbi1ibG9jay1ib3JkZXItbGVmdC10aGlja25lc3MtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSkpO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1ib3JkZXItdG9wLXRoaWNrbmVzcy12YWx1ZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItdG9wLXdpZHRoJykpKTtcclxuICAkKCcjbWFpbi1ibG9jay1ib3JkZXItdG9wLXRoaWNrbmVzcy12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItdG9wLXdpZHRoJykpKTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLXJpZ2h0LXRoaWNrbmVzcy12YWx1ZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItcmlnaHQtd2lkdGgnKSkpO1xyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci1yaWdodC10aGlja25lc3MtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJykpKTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLWJvdHRvbS10aGlja25lc3MtdmFsdWUnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcpKSk7XHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLWJvdHRvbS10aGlja25lc3MtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcpKSk7XHJcblxyXG4gIHZhciB2aWRlb2xuayA9IFN0cmluZygkKHRocykuZmluZCgnLmJhY2tncm91bmQtdmlkZW8gaWZyYW1lJykuYXR0cignc3JjJykpLnNwbGl0KCc/JylbMF07XHJcblxyXG4gIGlmICh2aWRlb2xuayAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAkKCcjbWFpbi1ibG9jay12aWRlb2xpbmsnKS52YWwodmlkZW9sbmspO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCcjbWFpbi1ibG9jay12aWRlb2xpbmsnKS52YWwoJycpO1xyXG4gIH1cclxuXHJcbiAgLyrQkdC70L7QuiDRgtCw0LnQvNCw0YPRgtCwKi9cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tISEh0KHQlNCV0JvQkNCi0KwhISEtLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1ibG9jay1kaXNwbGF5LW5vbmUtdmFsdWUnKS5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tYmxvY2stZGlzcGxheS1ub25lLXZhbHVlJykuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgJCgnI21haW4tYmxvY2stZGlzcGxheS1ub25lLXZhbHVlLCAjbWFpbi1ibG9jay10aW1lb3V0LWhvdXItdmFsdWUsICNtYWluLWJsb2NrLXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZSwgI21haW4tYmxvY2stdGltZW91dC1taW51dGUtdmFsdWUsICNtYWluLWJsb2NrLXRpbWVvdXQtbWludXRlLXZhbHVlLXJhbmdlLCAjbWFpbi1ibG9jay10aW1lb3V0LXNlY29uZC12YWx1ZSwgI21haW4tYmxvY2stdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaWQgPSB0aHMuYXR0cignaWQnKTtcclxuXHJcbiAgICB2YXIgaG91cnMgPSAkKCcjbWFpbi1ibG9jay10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoKSAqIDM2MDA7XHJcbiAgICB2YXIgbWludXRlID0gJCgnI21haW4tYmxvY2stdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwoKSAqIDYwO1xyXG4gICAgdmFyIHNlY29uZCA9IHBhcnNlSW50KCQoJyNtYWluLWJsb2NrLXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKCkpO1xyXG5cclxuICAgIHZhciB0aW1lID0gaG91cnMgKyBtaW51dGUgKyBzZWNvbmQ7XHJcblxyXG4gICAgdGltZSA9IHRpbWUgKiAxMDAwO1xyXG5cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tYmxvY2stZGlzcGxheS1ub25lLXZhbHVlJykuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgICAgJCgnI21haW5BcmVhJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNvZGVcIiBpZD1cInNjcmlwdC0nICsgaWQgKyAnXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPicgKyBbaWQsIHRpbWVdICsgJzwvc3Bhbj4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJtYWluLWJsb2NrLXRpbWVvdXQtaG91ci12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibWFpbi1ibG9jay10aW1lb3V0LWhvdXItdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcIm1haW4tYmxvY2stdGltZW91dC1taW51dGUtdmFsdWVcIikge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibWFpbi1ibG9jay10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJtYWluLWJsb2NrLXRpbWVvdXQtc2Vjb25kLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcIm1haW4tYmxvY2stdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwINGC0LDQudC80LDRg9GC0LAqL1xyXG5cclxuICAvKtCU0LjQvdCw0LzQuNGH0LXRgdC60LjQtSDQvdCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC+0YHQvdC+0LLQvdC+0LPQviDQsdC70L7QutCwKi9cclxuICAvKtCY0LfQvNC10L3QtdC90LjQtSDRiNC40YDQuNC90Ysg0L7RgdC90L7QstC90L7Qs9C+INGB0LXQu9C10LrRgtC+0YDQsCovXHJcbiAgJCgnI21haW4tYmxvY2std2lkdGgtdmFsdWUsICNtYWluLWJsb2NrLXdpZHRoLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICQodGhzKS53aWR0aCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJtYWluLWJsb2NrLXdpZHRoLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI21haW4tYmxvY2std2lkdGgtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay13aWR0aC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLW1hcmdpbi10b3AtdmFsdWUsICNtYWluLWJsb2NrLW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdtYXJnaW4tdG9wJywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHRocykuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi10b3A6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgLy8kKHRocykuY3NzKCdjc3NUZXh0JywgJ21hcmdpbi10b3A6JyskKHRoaXMpLnZhbCgpKydweCAhaW1wb3J0YW50Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibWFpbi1ibG9jay1tYXJnaW4tdG9wLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stbWFyZ2luLXRvcC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLW1hcmdpbi10b3AtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1tYXJnaW4tYm90dG9tLXZhbHVlLCAjbWFpbi1ibG9jay1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnbWFyZ2luLWJvdHRvbScsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJCh0aHMpLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tYm90dG9tOicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJtYWluLWJsb2NrLW1hcmdpbi1ib3R0b20tdmFsdWVcIikge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stbWFyZ2luLWJvdHRvbS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLXBhZGRpbmctdG9wLXZhbHVlLCAjbWFpbi1ibG9jay1wYWRkaW5nLXRvcC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ3BhZGRpbmctdG9wJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcIm1haW4tYmxvY2stcGFkZGluZy10b3AtdmFsdWVcIikge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1wYWRkaW5nLXRvcC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLXBhZGRpbmctdG9wLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stcGFkZGluZy1ib3R0b20tdmFsdWUsICNtYWluLWJsb2NrLXBhZGRpbmctYm90dG9tLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygncGFkZGluZy1ib3R0b20nLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibWFpbi1ibG9jay1wYWRkaW5nLWJvdHRvbS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLXBhZGRpbmctYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stcGFkZGluZy1ib3R0b20tdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1wYWRkaW5nLWxlZnQtdmFsdWUsICNtYWluLWJsb2NrLXBhZGRpbmctbGVmdC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ3BhZGRpbmctbGVmdCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJtYWluLWJsb2NrLXBhZGRpbmctbGVmdC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLXBhZGRpbmctbGVmdC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLXBhZGRpbmctbGVmdC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLXBhZGRpbmctcmlnaHQtdmFsdWUsICNtYWluLWJsb2NrLXBhZGRpbmctcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcIm1haW4tYmxvY2stcGFkZGluZy1yaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLXBhZGRpbmctcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1wYWRkaW5nLXJpZ2h0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stb3BhY2l0eS12YWx1ZSwgI21haW4tYmxvY2stb3BhY2l0eS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ29wYWNpdHknLCAkKHRoaXMpLnZhbCgpIC8gMTAwKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJtYWluLWJsb2NrLW9wYWNpdHktdmFsdWVcIikge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1vcGFjaXR5LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stb3BhY2l0eS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INC00LvRjyDQstGB0LXRhSDQs9GA0LDQvdC40YYg0LHQu9C+0LrQsCovXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLXRoaWNrbmVzcy12YWx1ZSwgI21haW4tYmxvY2stYm9yZGVyLXRoaWNrbmVzcy12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJtYWluLWJsb2NrLWJvcmRlci10aGlja25lc3MtdmFsdWVcIikge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1ib3JkZXItdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stYm9yZGVyLXRoaWNrbmVzcy12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci1yYWRpdXMtdmFsdWUsICNtYWluLWJsb2NrLWJvcmRlci1yYWRpdXMtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcIm1haW4tYmxvY2stYm9yZGVyLXJhZGl1cy12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLWJvcmRlci1yYWRpdXMtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1ib3JkZXItcmFkaXVzLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLXN0eWxlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLWNvbG9yLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQmtC+0L3QtdGGINCx0LvQvtC60LAqL1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQuCDQtNC70Y8g0LvQtdCy0L7QuSDQs9GA0LDQvdC40YbRiyDQsdC70L7QutCwKi9cclxuXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLWxlZnQtdGhpY2tuZXNzLXZhbHVlLCAjbWFpbi1ibG9jay1ib3JkZXItbGVmdC10aGlja25lc3MtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItbGVmdC13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJtYWluLWJsb2NrLWJvcmRlci1sZWZ0LXRoaWNrbmVzcy12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLWJvcmRlci1sZWZ0LXRoaWNrbmVzcy12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLWJvcmRlci1sZWZ0LXRoaWNrbmVzcy12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci1sZWZ0LXN0eWxlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci1sZWZ0LXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1ib3JkZXItbGVmdC1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItbGVmdC1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQmtC+0L3QtdGGINCx0LvQvtC60LAqL1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQuCDQtNC70Y8g0LLQtdGA0YXQvdC10Lkg0LPRgNCw0L3QuNGG0Ysg0LHQu9C+0LrQsCovXHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci10b3AtdGhpY2tuZXNzLXZhbHVlLCAjbWFpbi1ibG9jay1ib3JkZXItdG9wLXRoaWNrbmVzcy12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci10b3Atd2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibWFpbi1ibG9jay1ib3JkZXItdG9wLXRoaWNrbmVzcy12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLWJvcmRlci10b3AtdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stYm9yZGVyLXRvcC10aGlja25lc3MtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1ib3JkZXItdG9wLWxlZnQtcmFkaXVzLXZhbHVlLCAjbWFpbi1ibG9jay1ib3JkZXItdG9wLWxlZnQtcmFkaXVzLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJtYWluLWJsb2NrLWJvcmRlci10b3AtbGVmdC1yYWRpdXMtdmFsdWVcIikge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1ib3JkZXItdG9wLWxlZnQtcmFkaXVzLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cy12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzLXZhbHVlLCAjbWFpbi1ibG9jay1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1cy12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcIm1haW4tYmxvY2stYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMtdmFsdWVcIikge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1cy12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLXRvcC1zdHlsZS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItdG9wLXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1ib3JkZXItdG9wLWNvbG9yLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci10b3AtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC/0YDQsNCy0L7QuSDQs9GA0LDQvdC40YbRiyDQsdC70L7QutCwKi9cclxuXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLXJpZ2h0LXRoaWNrbmVzcy12YWx1ZSwgI21haW4tYmxvY2stYm9yZGVyLXJpZ2h0LXRoaWNrbmVzcy12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJtYWluLWJsb2NrLWJvcmRlci1yaWdodC10aGlja25lc3MtdmFsdWVcIikge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1ib3JkZXItcmlnaHQtdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stYm9yZGVyLXJpZ2h0LXRoaWNrbmVzcy12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci1yaWdodC1zdHlsZS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItcmlnaHQtc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci1yaWdodC1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItcmlnaHQtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC90LjQttC90LXQuSDQs9GA0LDQvdC40YbRiyDQsdC70L7QutCwKi9cclxuXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLWJvdHRvbS10aGlja25lc3MtdmFsdWUsICNtYWluLWJsb2NrLWJvcmRlci1ib3R0b20tdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJtYWluLWJsb2NrLWJvcmRlci1ib3R0b20tdGhpY2tuZXNzLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stYm9yZGVyLWJvdHRvbS10aGlja25lc3MtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1ib3JkZXItYm90dG9tLXRoaWNrbmVzcy12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMtdmFsdWUsICNtYWluLWJsb2NrLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcIm1haW4tYmxvY2stYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cy12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMtdmFsdWUsICNtYWluLWJsb2NrLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibWFpbi1ibG9jay1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cy12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1ib3JkZXItYm90dG9tLXN0eWxlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci1ib3R0b20tc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWJvcmRlci1ib3R0b20tY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQmtC+0L3QtdGGINCx0LvQvtC60LAqL1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1ib3JkZXItc2V0dGluZ3MtY2hvaWNlIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHN3aXRjaCAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICBjYXNlICdhbGxib3JkZXJzJzoge1xyXG4gICAgICAgICQoJyNtYWluLWJsb2NrLWFsbC1ib3JkZXItc2V0dGluZ3MnKS5zaG93KCk7XHJcbiAgICAgICAgJCgnI21haW4tYmxvY2stZWFjaC1ib3JkZXItc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnZWFjaGJvcmRlcnMnOiB7XHJcbiAgICAgICAgJCgnI21haW4tYmxvY2stYWxsLWJvcmRlci1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgICAkKCcjbWFpbi1ibG9jay1lYWNoLWJvcmRlci1zZXR0aW5ncycpLnNob3coKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1iYWNrZ3JvdW5kLXR5cGVzIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHN3aXRjaCAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICBjYXNlICdjb2xvcic6IHtcclxuICAgICAgICAkKCcubWFpbi1ibG9jay1iYWNrZ3JvdW5kLWNvbG9yLXNldHRpbmdzJykuc2hvdygpO1xyXG4gICAgICAgICQoJy5tYWluLWJsb2NrLWJhY2tncm91bmQtZ3JhZGllbnQtc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnLm1haW4tYmxvY2stYmFja2dyb3VuZC1pbWFnZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgICAkKCcubWFpbi1ibG9jay1iYWNrZ3JvdW5kLXZpZGUtc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgICAgJCh0aHMpLmZpbmQoJy5iYWNrZ3JvdW5kLXZpZGVvJykucmVtb3ZlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnZ3JhZGllbnQnOiB7XHJcbiAgICAgICAgJCgnLm1haW4tYmxvY2stYmFja2dyb3VuZC1jb2xvci1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgICAkKCcubWFpbi1ibG9jay1iYWNrZ3JvdW5kLWdyYWRpZW50LXNldHRpbmdzJykuc2hvdygpO1xyXG4gICAgICAgICQoJy5tYWluLWJsb2NrLWJhY2tncm91bmQtaW1hZ2Utc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnLm1haW4tYmxvY2stYmFja2dyb3VuZC12aWRlLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICAgICAgICQodGhzKS5maW5kKCcuYmFja2dyb3VuZC12aWRlbycpLnJlbW92ZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2JnaW1hZ2UnOiB7XHJcbiAgICAgICAgJCgnLm1haW4tYmxvY2stYmFja2dyb3VuZC1jb2xvci1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgICAkKCcubWFpbi1ibG9jay1iYWNrZ3JvdW5kLWdyYWRpZW50LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICAgICAgICQoJy5tYWluLWJsb2NrLWJhY2tncm91bmQtaW1hZ2Utc2V0dGluZ3MnKS5zaG93KCk7XHJcbiAgICAgICAgJCgnLm1haW4tYmxvY2stYmFja2dyb3VuZC12aWRlLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICAgICAgICQodGhzKS5maW5kKCcuYmFja2dyb3VuZC12aWRlbycpLnJlbW92ZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ3ZpZGVvJzoge1xyXG4gICAgICAgICQoJy5tYWluLWJsb2NrLWJhY2tncm91bmQtY29sb3Itc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnLm1haW4tYmxvY2stYmFja2dyb3VuZC1ncmFkaWVudC1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgICAkKCcubWFpbi1ibG9jay1iYWNrZ3JvdW5kLWltYWdlLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICAgICAgICQoJy5tYWluLWJsb2NrLWJhY2tncm91bmQtdmlkZW8tc2V0dGluZ3MnKS5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYmFja2dyb3VuZC1jb2xvciBpbnB1dCNtYWluLWJsb2NrLW1haW4tY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9wYWNpdHkgPSAkKCcjcGFnZS1tYWluLWNvbG9yLW9wYWNpdHknKS52YWwoKSAvIDEwMDtcclxuICAgIHZhciBjb2xvciA9IGhleFRvUkdCKCQodGhpcykudmFsKCksIG9wYWNpdHkpO1xyXG4gICAgJCh0aHMpLmNzcygnYmFja2dyb3VuZCcsIGNvbG9yKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWdyYWRpZW50LWNvbG9yLTEnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQoJyArIHBhcnNlSW50KCQoJyNtYWluLWJsb2NrLWdyYWRpZW50LWFuZ2xlJykudmFsKCkpICsgJ2RlZywgJyArICQodGhpcykudmFsKCkgKyAnLCAnICsgJCgnI21haW4tYmxvY2stZ3JhZGllbnQtY29sb3ItMicpLnZhbCgpICsgJyknKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWdyYWRpZW50LWNvbG9yLTInKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQoJyArIHBhcnNlSW50KCQoJyNtYWluLWJsb2NrLWdyYWRpZW50LWFuZ2xlJykudmFsKCkpICsgJ2RlZywgJyArICQoJyNtYWluLWJsb2NrLWdyYWRpZW50LWNvbG9yLTEnKS52YWwoKSArICcsICcgKyAkKHRoaXMpLnZhbCgpICsgJyknKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWdyYWRpZW50LWFuZ2xlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQoJyArIHBhcnNlSW50KCQodGhpcykudmFsKCkpICsgJ2RlZywgJyArICQoJyNtYWluLWJsb2NrLWdyYWRpZW50LWNvbG9yLTEnKS52YWwoKSArICcsICcgKyAkKCcjbWFpbi1ibG9jay1ncmFkaWVudC1jb2xvci0yJykudmFsKCkgKyAnKScpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stbWFpbi1jb2xvci1vcGFjaXR5Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9wYWNpdHkgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdmFyIGNvbG9yID0gaGV4VG9SR0IoJCgnI21haW4tYmxvY2stbWFpbi1jb2xvcicpLnZhbCgpLCBvcGFjaXR5IC8gMTAwKTtcclxuICAgICQodGhzKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcik7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1iYWNrZ3JvdW5kLWltYWdlLWZpbGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNtYWluLWJsb2NrLWJhY2tncm91bmQtaW1hZ2UtZmlsZScpLmZpbGVzWzBdO1xyXG4gICAgdmFyIHRva2VuID0gJCgnaW5wdXRbbmFtZT1fdG9rZW5dW3R5cGU9aGlkZGVuXScpLnZhbCgpO1xyXG5cclxuICAgIHZhciBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1fZGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZSk7XHJcbiAgICBmb3JtX2RhdGEuYXBwZW5kKCdfdG9rZW4nLCB0b2tlbik7XHJcbiAgICBmb3JtX2RhdGEuYXBwZW5kKCdpZCcsICQoJ2lucHV0W25hbWU9dGVtcGxhdGVfaWRdJykudmFsKCkpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogXCIvY2xpZW50L2Z1bm5lbC9zYXZlaW1hZ2VcIixcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIGRhdGE6IGZvcm1fZGF0YSxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJCh0aHMpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArIGUubGluayArICcpJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYmFja2dyb3VuZC1pbWFnZS1zaXplJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JhY2tncm91bmQtc2l6ZScsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYmFja2dyb3VuZC1pbWFnZS1hdHRhY2htZW50Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JhY2tncm91bmQtYXR0YWNobWVudCcsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYmFja2dyb3VuZC1pbWFnZS1ibGVuZC1tb2RlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JhY2tncm91bmQtYmxlbmQtbW9kZScsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stYmFja2dyb3VuZC1pbWFnZS1yZXBlYXQteCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdiYWNrZ3JvdW5kLXJlcGVhdC14JywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1iYWNrZ3JvdW5kLWltYWdlLXJlcGVhdC15Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JhY2tncm91bmQtcmVwZWF0LXknLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWJhY2tncm91bmQtaW1hZ2UtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIHNldFlvdXR1YmVNYWluQmxvY2tCYWNrZ3JvdW5kVmlkZW8obGluaywgcGFyYW1zLCBiZ1ZpZGVvQmxvY2spIHtcclxuICAgIGNvbnNvbGUubG9nKGJnVmlkZW9CbG9jayk7XHJcbiAgICAkKGJnVmlkZW9CbG9jaykuZmluZCgnID4gKicpLnJlbW92ZSgpO1xyXG5cclxuICAgIHZhciBwID0gXCI/YXV0b3BsYXk9MSZjb250cm9scz0wJmxvb3A9XCIgKyBwYXJhbXNbJ2xvb3AnXSArIFwiJm11dGU9XCIgKyBwYXJhbXNbJ211dGUnXTtcclxuXHJcbiAgICBsaW5rID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBsaW5rICsgcDtcclxuXHJcblxyXG4gICAgdmFyIHZpZGVvYmxvY2sgPSAnPGRpdiBjbGFzcz1cInZpZGVvLWJhY2tncm91bmQtbWFpbi1ibG9ja1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWZvcmVncm91bmQtbWFpbi1ibG9ja1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCInICsgbGluayArICdcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG5cclxuICAgICQoYmdWaWRlb0Jsb2NrKS5hcHBlbmQodmlkZW9ibG9jayk7XHJcbiAgfVxyXG5cclxuICAkKCcjbWFpbi1ibG9jay12aWRlb2xpbmssICNtYWluLWJsb2NrLXZpZGVvX2xvb3AsICNtYWluLWJsb2NrLXZpZGVvX3VubXV0ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYmdWaWRlb0Jsb2NrID0gbnVsbDtcclxuICAgIGlmICgkKHRocykuZmluZCgnPiAqJykuaXMoJy5iYWNrZ3JvdW5kLXZpZGVvJykgPT0gZmFsc2UpIHtcclxuICAgICAgJCh0aHMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImJhY2tncm91bmQtdmlkZW9cIj48L2Rpdj4nKTtcclxuICAgICAgYmdWaWRlb0Jsb2NrID0gJCh0aHMpLmZpbmQoJz4gLmJhY2tncm91bmQtdmlkZW8nKS5maXJzdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmdWaWRlb0Jsb2NrID0gJCh0aHMpLmZpbmQoJz4gLmJhY2tncm91bmQtdmlkZW8nKS5maXJzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgkKCcjbWFpbi1ibG9jay12aWRlb2xpbmsnKS52YWwoKS5pbmRleE9mKFwiLm1wNFwiKSAhPSAtMSB8fCAkKCcjbWFpbi1ibG9jay12aWRlb2xpbmsnKS52YWwoKS5pbmRleE9mKFwiLmF2aVwiKSAhPSAtMSkge1xyXG4gICAgICBzZXRBbm90aGVyTWFpbkJsb2NrQmFja2dyb3VuZFZpZGVvKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKCcjbWFpbi1ibG9jay12aWRlb2xpbmsnKS52YWwoKS5pbmRleE9mKFwieW91dHViZS5jb21cIikgIT0gLTEgfHwgJCgnI21haW4tYmxvY2stdmlkZW9saW5rJykudmFsKCkuaW5kZXhPZihcInlvdXR1LmJlXCIpICE9IC0xKSB7XHJcblxyXG4gICAgICB2YXIgbGluaztcclxuXHJcbiAgICAgIGlmICgkKCcjbWFpbi1ibG9jay12aWRlb2xpbmsnKS52YWwoKS5pbmRleE9mKFwid2F0Y2g/dj1cIikgIT0gLTEpIHtcclxuICAgICAgICBsaW5rID0gJCgnI21haW4tYmxvY2stdmlkZW9saW5rJykudmFsKCkuc3BsaXQoXCJ3YXRjaD92PVwiKVsxXTtcclxuICAgICAgfSBlbHNlIGlmICgkKCcjbWFpbi1ibG9jay12aWRlb2xpbmsnKS52YWwoKS5pbmRleE9mKFwiZW1iZWRcIikgIT0gLTEpIHtcclxuICAgICAgICBsaW5rID0gJCgnI21haW4tYmxvY2stdmlkZW9saW5rJykudmFsKCkuc3BsaXQoXCJlbWJlZC9cIilbMV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGluayA9ICQoJyNtYWluLWJsb2NrLXZpZGVvbGluaycpLnZhbCgpLnNwbGl0KFwieW91dHUuYmUvXCIpWzFdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwYXJhbXMgPSBbXTtcclxuICAgICAgcGFyYW1zWydsb29wJ10gPSAkKCcjbWFpbi1ibG9jay12aWRlb19sb29wOmNoZWNrZWQnKS52YWwoKSA9PSAnMScgPyAxIDogMDtcclxuICAgICAgcGFyYW1zWydtdXRlJ10gPSAkKCcjbWFpbi1ibG9jay12aWRlb191bm11dGU6Y2hlY2tlZCcpLnZhbCgpID09ICcxJyA/IDAgOiAxO1xyXG5cclxuICAgICAgc2V0WW91dHViZU1haW5CbG9ja0JhY2tncm91bmRWaWRlbyhsaW5rLCBwYXJhbXMsIGJnVmlkZW9CbG9jayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjYmFja2dyb3VuZFZpZGVvID4gKicpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INGC0LXQvdC10LkqL1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZSwgI21haW4tYmxvY2stc2hhZG93LWhvcml6b250YWwtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNtYWluLWJsb2NrLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjbWFpbi1ibG9jay1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI21haW4tYmxvY2stc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjbWFpbi1ibG9jay1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI21haW4tYmxvY2stc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjbWFpbi1ibG9jay1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICQodGhzKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibWFpbi1ibG9jay1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1zaGFkb3ctdmVydGljYWwtdmFsdWUsICNtYWluLWJsb2NrLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNtYWluLWJsb2NrLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI21haW4tYmxvY2stc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNtYWluLWJsb2NrLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI21haW4tYmxvY2stc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNtYWluLWJsb2NrLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI21haW4tYmxvY2stc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIHNwcmQgKyBcIiBcIiArIGNsciArIFwiIFwiICsgaW5zZXQ7XHJcbiAgICAkKHRocykuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcIm1haW4tYmxvY2stc2hhZG93LXZlcnRpY2FsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stc2hhZG93LXZlcnRpY2FsLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stc2hhZG93LWJsdXItdmFsdWUsICNtYWluLWJsb2NrLXNoYWRvdy1ibHVyLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI21haW4tYmxvY2stc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjbWFpbi1ibG9jay1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNtYWluLWJsb2NrLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI21haW4tYmxvY2stc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNtYWluLWJsb2NrLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI21haW4tYmxvY2stc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIHNwcmQgKyBcIiBcIiArIGNsciArIFwiIFwiICsgaW5zZXQ7XHJcbiAgICAkKHRocykuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcIm1haW4tYmxvY2stc2hhZG93LWJsdXItdmFsdWVcIikge1xyXG4gICAgICAkKCcjbWFpbi1ibG9jay1zaGFkb3ctYmx1ci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI21haW4tYmxvY2stc2hhZG93LXNwcmVhZC12YWx1ZSwgI21haW4tYmxvY2stc2hhZG93LXNwcmVhZC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNtYWluLWJsb2NrLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI21haW4tYmxvY2stc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNtYWluLWJsb2NrLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHNwcmQgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjbWFpbi1ibG9jay1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI21haW4tYmxvY2stc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjbWFpbi1ibG9jay1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICQodGhzKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibWFpbi1ibG9jay1zaGFkb3ctc3ByZWFkLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stc2hhZG93LXNwcmVhZC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1zaGFkb3ctb3BhY2l0eS12YWx1ZSwgI21haW4tYmxvY2stc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjbWFpbi1ibG9jay1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNtYWluLWJsb2NrLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjbWFpbi1ibG9jay1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI21haW4tYmxvY2stc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjbWFpbi1ibG9jay1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCh0aGlzKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjbWFpbi1ibG9jay1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICQodGhzKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwibWFpbi1ibG9jay1zaGFkb3ctb3BhY2l0eS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNtYWluLWJsb2NrLXNoYWRvdy1vcGFjaXR5LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI21haW4tYmxvY2stc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1zaGFkb3ctY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI21haW4tYmxvY2stc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjbWFpbi1ibG9jay1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI21haW4tYmxvY2stc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNtYWluLWJsb2NrLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCh0aGlzKS52YWwoKSwgJCgnI21haW4tYmxvY2stc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjbWFpbi1ibG9jay1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICQodGhzKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1zaGFkb3ctaW5zZXQtdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI21haW4tYmxvY2stc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjbWFpbi1ibG9jay1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI21haW4tYmxvY2stc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNtYWluLWJsb2NrLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI21haW4tYmxvY2stc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNtYWluLWJsb2NrLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCh0aGlzKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICQodGhzKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0L3QsNGB0YLRgNC+0LXQuiDRgtC10L3QtdC5Ki9cclxuXHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutCwINCw0L3QuNC80LDRhtC40LgqL1xyXG5cclxuICAkKCcjbWFpbi1ibG9jay1hbmltYXRpb24tdHlwZS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKSAhPSBcIm5vbmVcIikge1xyXG4gICAgICAkKHRocykuY3NzKCdhbmltYXRpb24tbmFtZScsICQodGhpcykudmFsKCkpO1xyXG4gICAgICAkKHRocykuY3NzKCdhbmltYXRpb24tZGVsYXknLCAkKCcjbWFpbi1ibG9jay1hbmltYXRpb24tZGVsYXktdmFsdWUnKS52YWwoKSArICdzJyk7XHJcbiAgICAgICQodGhzKS5jc3MoJ2FuaW1hdGlvbi1kdXJhdGlvbicsICQoJyNtYWluLWJsb2NrLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZScpLnZhbCgpICsgJ3MnKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWFuaW1hdGlvbi1kZWxheS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdhbmltYXRpb24tZGVsYXknLCAkKHRoaXMpLnZhbCgpICsgJ3MnKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtYWluLWJsb2NrLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdhbmltYXRpb24tZHVyYXRpb24nLCAkKHRoaXMpLnZhbCgpICsgJ3MnKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQvdCw0YHRgtGA0L7QtdC6INCw0L3QuNC80LDRhtC40LgqL1xyXG5cclxuXHJcbiAgLy/QmtC+0L3QtdGGINCx0LvQvtC60LBcclxufSk7XHJcblxyXG4kKCcjcGFnZS1iYWNrZ3JvdW5kLWNvbG9yIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICB2YXIgb3BhY2l0eSA9ICQoJyNwYWdlLW1haW4tY29sb3Itb3BhY2l0eScpLnZhbCgpIC8gMTAwO1xyXG4gIHZhciBjb2xvciA9IGhleFRvUkdCKCQodGhpcykudmFsKCksIG9wYWNpdHkpO1xyXG4gICQoJyNtYWluQXJlYScpLmNzcygnYmFja2dyb3VuZCcsIGNvbG9yKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbiQoJyNwYWdlLW1ldGEtZGVzY3JpcHRpb24gaW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCgnbWV0YVtuYW1lPWRlc2NyaXB0aW9uXScpLmF0dHIoJ2NvbnRlbnQnLCAkKHRoaXMpLnZhbCgpKTtcclxufSk7XHJcblxyXG4kKCcjcGFnZS1tZXRhLWtleXdvcmRzIGlucHV0Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICQoJ21ldGFbbmFtZT1rZXl3b3Jkc10nKS5hdHRyKCdjb250ZW50JywgJCh0aGlzKS52YWwoKSk7XHJcbn0pO1xyXG5cclxuJCgnI3BhZ2UtdGl0bGUgaW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCgndGl0bGUnKS50ZXh0KCQodGhpcykudmFsKCkpO1xyXG59KTtcclxuXHJcbiQoJyNncmFkaWVudC1jb2xvci0xJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcjbWFpbkFyZWEnKS5jc3MoJ2JhY2tncm91bmQnLCAnbGluZWFyLWdyYWRpZW50KCcgKyBwYXJzZUludCgkKCcjZ3JhZGllbnQtYW5nbGUnKS52YWwoKSkgKyAnZGVnLCAnICsgJCh0aGlzKS52YWwoKSArICcsICcgKyAkKCcjZ3JhZGllbnQtY29sb3ItMicpLnZhbCgpICsgJyknKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbiQoJyNncmFkaWVudC1jb2xvci0yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcjbWFpbkFyZWEnKS5jc3MoJ2JhY2tncm91bmQnLCAnbGluZWFyLWdyYWRpZW50KCcgKyBwYXJzZUludCgkKCcjZ3JhZGllbnQtYW5nbGUnKS52YWwoKSkgKyAnZGVnLCAnICsgJCgnI2dyYWRpZW50LWNvbG9yLTEnKS52YWwoKSArICcsICcgKyAkKHRoaXMpLnZhbCgpICsgJyknKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbiQoJyNncmFkaWVudC1hbmdsZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcjbWFpbkFyZWEnKS5jc3MoJ2JhY2tncm91bmQnLCAnbGluZWFyLWdyYWRpZW50KCcgKyBwYXJzZUludCgkKHRoaXMpLnZhbCgpKSArICdkZWcsICcgKyAkKCcjZ3JhZGllbnQtY29sb3ItMScpLnZhbCgpICsgJywgJyArICQoJyNncmFkaWVudC1jb2xvci0yJykudmFsKCkgKyAnKScpO1xyXG4gIG1ha2VQcmV2aWV3KCk7XHJcbn0pO1xyXG5cclxuJCgnI3BhZ2UtbWFpbi1jb2xvci1vcGFjaXR5Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gIHZhciBvcGFjaXR5ID0gJCh0aGlzKS52YWwoKTtcclxuICB2YXIgY29sb3IgPSBoZXhUb1JHQigkKCcjcGFnZS1tYWluLWNvbG9yJykudmFsKCksIG9wYWNpdHkgLyAxMDApO1xyXG4gICQoJyNtYWluQXJlYScpLmNzcygnYmFja2dyb3VuZCcsIGNvbG9yKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbiQoJyNwYWdlLWJhY2tncm91bmQtaW1hZ2UtZmlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNwYWdlLWJhY2tncm91bmQtaW1hZ2UtZmlsZScpLmZpbGVzWzBdO1xyXG5cclxuICB2YXIgdG9rZW4gPSAkKCdpbnB1dFtuYW1lPV90b2tlbl1bdHlwZT1oaWRkZW5dJykudmFsKCk7XHJcblxyXG4gIHZhciBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtX2RhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpO1xyXG4gIGZvcm1fZGF0YS5hcHBlbmQoJ190b2tlbicsIHRva2VuKTtcclxuICBmb3JtX2RhdGEuYXBwZW5kKCdpZCcsICQoJ2lucHV0W25hbWU9dGVtcGxhdGVfaWRdJykudmFsKCkpO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBcIi9jbGllbnQvZnVubmVsL3NhdmVpbWFnZVwiLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICBkYXRhOiBmb3JtX2RhdGEsXHJcbiAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKCcjbWFpbkFyZWEnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcgKyBlLmxpbmsgKyAnKScpXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgbWFrZVByZXZpZXcoKTtcclxufSk7XHJcblxyXG4kKCcjcGFnZS1iYWNrZ3JvdW5kLWltYWdlLXNpemUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICQoJyNtYWluQXJlYScpLmNzcygnYmFja2dyb3VuZC1zaXplJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgbWFrZVByZXZpZXcoKTtcclxufSk7XHJcblxyXG4kKCcjcGFnZS1iYWNrZ3JvdW5kLWltYWdlLWF0dGFjaG1lbnQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICQoJyNtYWluQXJlYScpLmNzcygnYmFja2dyb3VuZC1hdHRhY2htZW50JywgJCh0aGlzKS52YWwoKSk7XHJcbiAgbWFrZVByZXZpZXcoKTtcclxufSk7XHJcblxyXG4kKCcjcGFnZS1iYWNrZ3JvdW5kLWltYWdlLWJsZW5kLW1vZGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICQoJyNtYWluQXJlYScpLmNzcygnYmFja2dyb3VuZC1ibGVuZC1tb2RlJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgbWFrZVByZXZpZXcoKTtcclxufSk7XHJcblxyXG4kKCcjcGFnZS1iYWNrZ3JvdW5kLWltYWdlLXJlcGVhdC14Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcjbWFpbkFyZWEnKS5jc3MoJ2JhY2tncm91bmQtcmVwZWF0LXgnLCAkKHRoaXMpLnZhbCgpKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbiQoJyNwYWdlLWJhY2tncm91bmQtaW1hZ2UtcmVwZWF0LXknKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICQoJyNtYWluQXJlYScpLmNzcygnYmFja2dyb3VuZC1yZXBlYXQteScsICQodGhpcykudmFsKCkpO1xyXG4gIG1ha2VQcmV2aWV3KCk7XHJcbn0pO1xyXG5cclxuJCgnI3BhZ2UtYmFja2dyb3VuZC1pbWFnZS1jb2xvcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCgnI21haW5BcmVhJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgbWFrZVByZXZpZXcoKTtcclxufSk7XHJcblxyXG4kKCcjcGFnZS1iYWNrZ3JvdW5kLXR5cGVzIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICBzd2l0Y2ggKCQodGhpcykudmFsKCkpIHtcclxuICAgIGNhc2UgJ2NvbG9yJzoge1xyXG4gICAgICAkKCcucGFnZS1iYWNrZ3JvdW5kLWNvbG9yLXNldHRpbmdzJykuc2hvdygpO1xyXG4gICAgICAkKCcucGFnZS1iYWNrZ3JvdW5kLWdyYWRpZW50LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICAgICAkKCcucGFnZS1iYWNrZ3JvdW5kLWltYWdlLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICAgICAkKCcucGFnZS1iYWNrZ3JvdW5kLXZpZGUtc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAnZ3JhZGllbnQnOiB7XHJcbiAgICAgICQoJy5wYWdlLWJhY2tncm91bmQtY29sb3Itc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgICQoJy5wYWdlLWJhY2tncm91bmQtZ3JhZGllbnQtc2V0dGluZ3MnKS5zaG93KCk7XHJcbiAgICAgICQoJy5wYWdlLWJhY2tncm91bmQtaW1hZ2Utc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgICQoJy5wYWdlLWJhY2tncm91bmQtdmlkZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAnYmdpbWFnZSc6IHtcclxuICAgICAgJCgnLnBhZ2UtYmFja2dyb3VuZC1jb2xvci1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgJCgnLnBhZ2UtYmFja2dyb3VuZC1ncmFkaWVudC1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgJCgnLnBhZ2UtYmFja2dyb3VuZC1pbWFnZS1zZXR0aW5ncycpLnNob3coKTtcclxuICAgICAgJCgnLnBhZ2UtYmFja2dyb3VuZC12aWRlLXNldHRpbmdzJykuaGlkZSgpO1xyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlICd2aWRlbyc6IHtcclxuICAgICAgJCgnLnBhZ2UtYmFja2dyb3VuZC1jb2xvci1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgJCgnLnBhZ2UtYmFja2dyb3VuZC1ncmFkaWVudC1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgJCgnLnBhZ2UtYmFja2dyb3VuZC1pbWFnZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgJCgnLnBhZ2UtYmFja2dyb3VuZC12aWRlby1zZXR0aW5ncycpLnNob3coKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8q0J/QtdGA0LXQstC+0LQgaGV4INCyIFJHQiAo0LPQtNC1LdGC0L4g0YLQvtGH0L3QviDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8sINGD0LbQtSDQvdC1INC/0L7QvNC90Y4pKi9cclxuZnVuY3Rpb24gaGV4VG9SR0IoaGV4LCBhbHBoYSkge1xyXG4gIHZhciByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNiksXHJcbiAgICBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNiksXHJcbiAgICBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNik7XHJcblxyXG4gIGlmIChhbHBoYSkge1xyXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XHJcbiAgfSBlbHNlIGlmIChhbHBoYSA9PSAwKSB7XHJcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwicmdiKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIpXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpIHtcclxuICB2YXIgY29sb3JSID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xyXG4gIHZhciBjb2xvckcgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjU2KSk7XHJcbiAgdmFyIGNvbG9yQiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyNTYpKTtcclxuICByZXR1cm4gXCJyZ2IoXCIgKyBjb2xvclIgKyBcIixcIiArIGNvbG9yRyArIFwiLFwiICsgY29sb3JCICsgXCIpXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVDU1MoZWxlbWVudCwgYW5pbWF0aW9uTmFtZSwgY2FsbGJhY2spIHtcclxuICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KVxyXG4gIG5vZGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnLCBhbmltYXRpb25OYW1lKVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVBbmltYXRpb25FbmQoKSB7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkJywgYW5pbWF0aW9uTmFtZSlcclxuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlQW5pbWF0aW9uRW5kKVxyXG5cclxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKClcclxuICB9XHJcblxyXG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlQW5pbWF0aW9uRW5kKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRNYWluU2VsZWN0b3JTZWN0aW9uKCR0aGlzKSB7XHJcbiAgdmFyIGxhc3RFbGVtZW50ID0gJCgkdGhpcykucGFyZW50cygnLm1haW4tc2VsZWN0b3InKS5maW5kKCc+W2NsYXNzKj1cImNvbC1cIl0nKS5sYXN0KCk7XHJcbiAgJChsYXN0RWxlbWVudCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaGFuZGxlXCI+PC9kaXY+Jyk7XHJcbiAgJChsYXN0RWxlbWVudCkuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJjb250ZW50IGNvbC1tZC0xXCIgaWQ9XCInICsgZ2V0UmFuZG9tKCkgKyAnXCI+PC9kaXY+Jyk7XHJcbiAgJCgkKGxhc3RFbGVtZW50KS5maW5kKCcuaGFuZGxlJykpLnJlc2l6ZXIoKTtcclxuICAkKCR0aGlzKS5wYXJlbnRzKCcubWFpbi1zZWxlY3RvcicpLmZpbmQoJy5jb250ZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICBTb3J0YWJsZS5jcmVhdGUoJChcIiNcIiArICQodGhpcykuYXR0cignaWQnKSArIFwiXCIpLmdldCgwKSwge1xyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIG5hbWU6ICdjb250ZW50LXNlbGVjdG9yJyxcclxuICAgICAgICBwdXQ6ICdjb250ZW50LXNlbGVjdG9yJ1xyXG4gICAgICB9LFxyXG4gICAgICBmaWx0ZXI6ICcucmVzaXplciwgLmhhbmRsZSwgLmJsb2NrLXJlc2l6ZXInLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgZ2hvc3RDbGFzczogJ2dyZWVuLWJhY2tncm91bmQtY2xhc3MnLFxyXG4gICAgICBvbkNob29zZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoJChlLml0ZW0pLmF0dHIoJ2NsYXNzJykgPT0gJ3RleHRCbG9jayBzb3J0YWJsZS1jaG9zZW4nICYmIGUuaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJylbMF0pIHtcclxuICAgICAgICAgIGNvbnN0IHRleHRCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKGUuaXRlbSkuYXR0cignaWQnKSk7XHJcbiAgICAgICAgICBjb25zdCBpZnJhbWUgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXTtcclxuICAgICAgICAgIGNvbnN0IHRleHRFbGVtID0gdGV4dEJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0JylbMF07XHJcbiAgICAgICAgICBjb250ZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5pbm5lckhUTUw7XHJcbiAgICAgICAgICBsZXQgc3R5bGVFbGVtID0gJ2ZvbnQtc2l6ZTonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkuZm9udFNpemUgKyAnOyc7XHJcbiAgICAgICAgICBzdHlsZUVsZW0gKz0gJ2ZvbnQtZmFtaWx5OicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS5mb250RmFtaWx5ICsgJzsnO1xyXG4gICAgICAgICAgc3R5bGVFbGVtICs9ICdsaW5lLWhlaWdodDonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkubGluZUhlaWdodCArICc7JztcclxuICAgICAgICAgIHN0eWxlRWxlbSArPSAnY29sb3I6JyArIGdldENvbXB1dGVkU3R5bGUodGV4dEVsZW0pLmNvbG9yICsgJzsnO1xyXG4gICAgICAgICAgc3R5bGVFbGVtICs9ICd0ZXh0LXNoYWRvdzonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkudGV4dFNoYWRvdyArICc7JztcclxuICAgICAgICAgIHN0eWxlID0gJ2JvZHkge292ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7JyArIHN0eWxlRWxlbSArICd9JztcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAkKCcuaGFuZGxlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAkKCcubWFpbi1zZWxlY3RvcicpLmVhY2goZnVuY3Rpb24gKGluZCwgZWwpIHtcclxuICAgICAgICAgICQoZWwpLmZpbmQoJz4gLmNvbnRlbnQ6bm90KDpsYXN0KScpLmFkZENsYXNzKCdib3JkZXItaG92ZXInKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuY29udGVudC1zZWxlY3RvcicpLmVhY2goZnVuY3Rpb24gKGluZCwgZWwpIHtcclxuICAgICAgICAgICQoZWwpLmZpbmQoJz4gLmNvbnRlbnQ6bm90KDpsYXN0KScpLmFkZENsYXNzKCdib3JkZXItaG92ZXItY29udGVudCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgICAkKCcuaGFuZGxlJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgJCgnLmJvcmRlci1ob3ZlcicpLnJlbW92ZUNsYXNzKCdib3JkZXItaG92ZXInKTtcclxuICAgICAgICAkKCcuYm9yZGVyLWhvdmVyLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYm9yZGVyLWhvdmVyLWNvbnRlbnQnKTtcclxuICAgICAgICBpZiAoJChldnQuaXRlbSkuYXR0cignY2xhc3MnKSA9PSAndGV4dEJsb2NrJyAmJiBldnQuaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJylbMF0pIHtcclxuICAgICAgICAgIGNvbnN0IHRleHRCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKGV2dC5pdGVtKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgIGNvbnN0IHRleHRFZGl0b3JQYW5lbCA9IHRleHRCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dC1lZGl0b3ItcGFuZWwnKVswXTtcclxuICAgICAgICAgIGNvbnN0IGlmcmFtZSA9IHRleHRCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdO1xyXG4gICAgICAgICAgaW5pdChpZnJhbWUsIGNvbnRlbnQsIHN0eWxlKTtcclxuICAgICAgICAgIHRleHRFZGl0b3JQYW5lbC5zdHlsZS53aWR0aCA9ICh0ZXh0QmxvY2tFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gMikgKyAncHgnO1xyXG4gICAgICAgICAgaWZyYW1lLmhlaWdodCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0lmcmFtZSgkKGV2dC5pdGVtKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVNYWluU2VsZWN0b3JTZWN0aW9uKCR0aGlzKSB7XHJcbiAgdmFyICRkZWx0YSA9IDA7XHJcbiAgdmFyIGxhc3RFbGVtZW50ID0gJCgkdGhpcykucGFyZW50cygnLm1haW4tc2VsZWN0b3InKS5maW5kKCc+W2NsYXNzKj1cImNvbC1cIl0nKS5sYXN0KCk7XHJcbiAgJCgkKGxhc3RFbGVtZW50KS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJykpLmVhY2goZnVuY3Rpb24gKGluZCwgZWwpIHtcclxuICAgIGlmIChlbC5tYXRjaCgvY29sLVthLXpdKy1bMC05XSsvaSkpIHtcclxuICAgICAgJGRlbHRhID0gZWwuc3BsaXQoJy0nKVsyXTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbiAgdmFyIHByZXZFbGVtZW50ID0gbGFzdEVsZW1lbnQucHJldigpO1xyXG4gIGxhc3RFbGVtZW50LnJlbW92ZSgpO1xyXG4gICQocHJldkVsZW1lbnQpLmZpbmQoJy5oYW5kbGUnKS5yZW1vdmUoKTtcclxuICAkKCQocHJldkVsZW1lbnQpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKSkuZWFjaChmdW5jdGlvbiAoaW5kLCBlbCkge1xyXG4gICAgaWYgKGVsLm1hdGNoKC9jb2wtW2Etel0rLVswLTldKy9pKSkge1xyXG4gICAgICAkKHByZXZFbGVtZW50KS5yZW1vdmVDbGFzcyhlbCk7XHJcbiAgICAgICQocHJldkVsZW1lbnQpLmFkZENsYXNzKCdjb2wtJyArIGVsLnNwbGl0KCctJylbMV0gKyAnLScgKyAocGFyc2VJbnQoZWwuc3BsaXQoJy0nKVsyXSkgKyBwYXJzZUludCgkZGVsdGEpKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZGV4T2ZNYXgobWFzKSB7XHJcbiAgaWYgKG1hcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIHZhciBtYXggPSBtYXNbMF07XHJcbiAgdmFyIG1heEluZGV4ID0gMDtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBtYXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChtYXNbaV0gPiBtYXgpIHtcclxuICAgICAgbWF4SW5kZXggPSBpO1xyXG4gICAgICBtYXggPSBtYXNbaV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWF4SW5kZXg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==