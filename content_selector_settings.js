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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/content_selector/content_selector_settings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/content_selector/content_selector_settings.js":
/*!***************************************************************!*\
  !*** ./src/API/content_selector/content_selector_settings.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('#mainArea').on('click', '.remove-content', function () {
  $(this).parents('.content-selector').first().remove();
});
$('#mainArea').on('click', '.copy-content', function () {
  var $copyElement = $(this).parents('.content-selector').first().clone();
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
  $(this).parents('.content-selector').first().after($copyElement);
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
      onEnd: function onEnd(evt) {
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
});
$('#mainArea').on('click', '.add-content-block', function () {
  var $this = $(this);
  var maxIndex;
  var cols = $(this).parents('.content-selector').find('>[class*="col-"]');
  if (cols.length == 12) return;
  var $colSizes = [];
  $(cols).each(function (ind, el) {
    var classes = $(this).attr('class').split(' ');
    $(classes).each(function (ind, el) {
      if (el.match(/col-[a-z]+-[0-9]+/i)) $colSizes.push(parseInt(el.split('-')[2]));
    });
  });
  maxIndex = indexOfMax($colSizes);
  var maxValueSection = $($this).parents('.content-selector').find('>[class*="col-"]:nth(' + maxIndex + ')');
  $(maxValueSection.attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      $(maxValueSection).removeClass(el);
      $(maxValueSection).addClass('col-' + el.split('-')[1] + '-' + (parseInt(el.split('-')[2]) - 1));
    }
  });
  addContentSelectorSection($this);
  makePreview();
});
$('#mainArea').on('click', '.remove-content-block', function () {
  var $this = $(this);
  var cols = $(this).parents('.content-selector').find('>[class*="col-"]');
  if (cols.length == 1) return;
  removeContentSelectorSection($this);
  makePreview();
});
$('#mainArea').on('click', '.settings', function (event) {
  //Очистка от старых событий изменения значений (при первом клике на настройки, вызывается один раз, при втором уже два).
  //Поправлено!!!
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#content-block-border-style-value').off();
  $('#content-block-border-left-style-value').off();
  $('#content-block-border-right-style-value').off();
  $('#content-block-border-top-style-value').off();
  $('#content-block-border-bottom-style-value').off();
  $('#content-block-animation-type-value').off();
  var ths = null;
  ths = $(this).parents('.block-settings').parent();

  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#content-block-timeout-hour-value').val(h);
    $('#content-block-timeout-minute-value').val(m);
    $('#content-block-timeout-second-value').val(s);
    $('#content-block-display-none-value').prop('checked', true);
  } else {
    $('#content-block-timeout-hour-value').val(0);
    $('#content-block-timeout-minute-value').val(0);
    $('#content-block-timeout-second-value').val(0);
  }

  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#test').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');
  /*Инициализация инпутов*/

  $('#content-block-width-value').val($(ths).width());
  $('#content-block-width-value-range').val($(ths).width());
  $('#content-block-margin-top-value').val(parseInt($(ths).css('margin-top')));
  $('#content-block-margin-top-value-range').val(parseInt($(ths).css('margin-top')));
  $('#content-block-margin-bottom-value').val(parseInt($(ths).css('margin-bottom')));
  $('#content-block-margin-bottom-value-range').val(parseInt($(ths).css('margin-bottom')));
  $('#content-block-padding-top-value').val(parseInt($(ths).css('padding-top')));
  $('#content-block-padding-top-value-range').val(parseInt($(ths).css('padding-top')));
  $('#content-block-padding-bottom-value').val(parseInt($(ths).css('padding-bottom')));
  $('#content-block-padding-bottom-value-range').val(parseInt($(ths).css('padding-bottom')));
  $('#content-block-padding-left-value').val(parseInt($(ths).css('padding-left')));
  $('#content-block-padding-left-value-range').val(parseInt($(ths).css('padding-left')));
  $('#content-block-padding-right-value').val(parseInt($(ths).css('padding-right')));
  $('#content-block-padding-right-value-range').val(parseInt($(ths).css('padding-right')));
  $('#content-block-opacity-value').val($(ths).css('opacity') * 100);
  $('#content-block-opacity-value-range').val($(ths).css('opacity') * 100);
  $('#content-block-border-thickness-value').val(parseInt($(ths).css('border-width')));
  $('#content-block-border-thickness-value-range').val(parseInt($(ths).css('border-width')));
  $('#content-block-border-left-thickness-value').val(parseInt($(ths).css('border-left-width')));
  $('#content-block-border-left-thickness-value-range').val(parseInt($(ths).css('border-left-width')));
  $('#content-block-border-top-thickness-value').val(parseInt($(ths).css('border-top-width')));
  $('#content-block-border-top-thickness-value-range').val(parseInt($(ths).css('border-top-width')));
  $('#content-block-border-right-thickness-value').val(parseInt($(ths).css('border-right-width')));
  $('#content-block-border-right-thickness-value-range').val(parseInt($(ths).css('border-right-width')));
  $('#content-block-border-bottom-thickness-value').val(parseInt($(ths).css('border-bottom-width')));
  $('#content-block-border-bottom-thickness-value-range').val(parseInt($(ths).css('border-bottom-width')));
  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('content-block-display-none-value').checked = true;
  } else {
    document.getElementById('content-block-display-none-value').checked = false;
  }

  $('#content-block-display-none-value, #content-block-timeout-hour-value, #content-block-timeout-hour-value-range, #content-block-timeout-minute-value, #content-block-timeout-minute-value-range, #content-block-timeout-second-value, #content-block-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#content-block-timeout-hour-value').val() * 3600;
    var minute = $('#content-block-timeout-minute-value').val() * 60;
    var second = parseInt($('#content-block-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;

    if (document.getElementById('content-block-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }

    if ($(this).attr('id') == "content-block-timeout-hour-value") {
      $('#content-block-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-hour-value-range") {
      $('#content-block-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-minute-value") {
      $('#content-block-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-minute-value-range") {
      $('#content-block-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-second-value") {
      $('#content-block-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-second-value-range") {
      $('#content-block-timeout-second-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец блока таймаута*/

  /*Динамические настройки для основного блока*/

  /*Изменение ширины основного селектора*/

  $('#content-block-width-value, #content-block-width-value-range').on('input', function () {
    var contentBlockId = $(ths).attr('id');
    var contentBlockElem = document.getElementById(contentBlockId);
    var cssClassContentArray = contentBlockElem.getElementsByClassName('content');
    var img = {};
    var imgWidth = 0;
    var wrapperWidth = 0;

    for (var i = 0; i < cssClassContentArray.length; i++) {
      if (cssClassContentArray[i].getElementsByClassName('img')[0]) {
        img = cssClassContentArray[i].getElementsByClassName('img')[0];
        imgWidth = parseFloat(getComputedStyle(img).width);
        wrapperWidth = parseFloat(getComputedStyle(cssClassContentArray[i]).width);

        if (wrapperWidth <= imgWidth + 40) {
          img.style.width = '100%';
        }
      }
    }

    $(ths).width($(this).val());

    if ($(this).attr('id') == "content-block-width-value") {
      $('#content-block-width-value-range').val($(this).val());
    } else {
      $('#content-block-width-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-margin-top-value, #content-block-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    }); //$(ths).css('cssText', 'margin-top:'+$(this).val()+'px !important');

    if ($(this).attr('id') == "content-block-margin-top-value") {
      $('#content-block-margin-top-value-range').val($(this).val());
    } else {
      $('#content-block-margin-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-margin-bottom-value, #content-block-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "content-block-margin-bottom-value") {
      $('#content-block-margin-bottom-value-range').val($(this).val());
    } else {
      $('#content-block-margin-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-padding-top-value, #content-block-padding-top-value-range').on('input', function () {
    $(ths).css('padding-top', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-padding-top-value") {
      $('#content-block-padding-top-value-range').val($(this).val());
    } else {
      $('#content-block-padding-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-padding-bottom-value, #content-block-padding-bottom-value-range').on('input', function () {
    $(ths).css('padding-bottom', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-padding-bottom-value") {
      $('#content-block-padding-bottom-value-range').val($(this).val());
    } else {
      $('#content-block-padding-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-padding-left-value, #content-block-padding-left-value-range').on('input', function () {
    $(ths).css('padding-left', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-padding-left-value") {
      $('#content-block-padding-left-value-range').val($(this).val());
    } else {
      $('#content-block-padding-left-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-padding-right-value, #content-block-padding-right-value-range').on('input', function () {
    $(ths).css('padding-right', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-padding-right-value") {
      $('#content-block-padding-right-value-range').val($(this).val());
    } else {
      $('#content-block-padding-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-opacity-value, #content-block-opacity-value-range').on('input', function () {
    $(ths).css('opacity', $(this).val() / 100);

    if ($(this).attr('id') == "content-block-opacity-value") {
      $('#content-block-opacity-value-range').val($(this).val());
    } else {
      $('#content-block-opacity-value').val($(this).val());
    }

    makePreview();
  });
  /*Настройки для всех границ блока*/

  $('#content-block-border-thickness-value, #content-block-border-thickness-value-range').on('input', function () {
    $(ths).css('border-width', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-border-thickness-value") {
      $('#content-block-border-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-thickness-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-border-radius-value, #content-block-border-radius-value-range').on('input', function () {
    $(ths).css('border-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-border-radius-value") {
      $('#content-block-border-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-radius-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-border-style-value').on('change', function () {
    $(ths).css('border-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#content-block-border-color-value').on('change', function () {
    $(ths).css('border-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для левой границы блока*/

  $('#content-block-border-left-thickness-value, #content-block-border-left-thickness-value-range').on('input', function () {
    $(ths).css('border-left-width', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-border-left-thickness-value") {
      $('#content-block-border-left-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-left-thickness-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-border-left-style-value').on('change', function () {
    $(ths).css('border-left-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#content-block-border-left-color-value').on('change', function () {
    $(ths).css('border-left-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для верхней границы блока*/

  $('#content-block-border-top-thickness-value, #content-block-border-top-thickness-value-range').on('input', function () {
    $(ths).css('border-top-width', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-border-top-thickness-value") {
      $('#content-block-border-top-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-top-thickness-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-border-top-left-radius-value, #content-block-border-top-left-radius-value-range').on('input', function () {
    $(ths).css('border-top-left-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-border-top-left-radius-value") {
      $('#content-block-border-top-left-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-top-left-radius-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-border-top-right-radius-value, #content-block-border-top-right-radius-value-range').on('input', function () {
    $(ths).css('border-top-right-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-border-top-right-radius-value") {
      $('#content-block-border-top-right-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-top-right-radius-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-border-top-style-value').on('change', function () {
    $(ths).css('border-top-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#content-block-border-top-color-value').on('change', function () {
    $(ths).css('border-top-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для правой границы блока*/

  $('#content-block-border-right-thickness-value, #content-block-border-right-thickness-value-range').on('input', function () {
    $(ths).css('border-right-width', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-border-right-thickness-value") {
      $('#content-block-border-right-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-right-thickness-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-border-right-style-value').on('change', function () {
    $(ths).css('border-right-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#content-block-border-right-color-value').on('change', function () {
    $(ths).css('border-right-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для нижней границы блока*/

  $('#content-block-border-bottom-thickness-value, #content-block-border-bottom-thickness-value-range').on('input', function () {
    $(ths).css('border-bottom-width', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-border-bottom-thickness-value") {
      $('#content-block-border-bottom-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-bottom-thickness-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-border-bottom-left-radius-value, #content-block-border-bottom-left-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-left-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-border-bottom-left-radius-value") {
      $('#content-block-border-bottom-left-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-bottom-left-radius-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-border-bottom-right-radius-value, #content-block-border-bottom-right-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-right-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "content-block-border-bottom-right-radius-value") {
      $('#content-block-border-bottom-right-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-bottom-right-radius-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-border-bottom-style-value').on('change', function () {
    $(ths).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#content-block-border-bottom-color-value').on('change', function () {
    $(ths).css('border-bottom-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  $('#content-block-border-settings-choice input').on('change', function () {
    switch ($(this).val()) {
      case 'allborders':
        {
          $('#content-block-all-border-settings').show();
          $('#content-block-each-border-settings').hide();
          break;
        }

      case 'eachborders':
        {
          $('#content-block-all-border-settings').hide();
          $('#content-block-each-border-settings').show();
          break;
        }
    }

    makePreview();
  });
  $('#content-block-background-types input').on('change', function () {
    switch ($(this).val()) {
      case 'color':
        {
          $('.content-block-background-color-settings').show();
          $('.content-block-background-gradient-settings').hide();
          $('.content-block-background-image-settings').hide();
          break;
        }

      case 'gradient':
        {
          $('.content-block-background-color-settings').hide();
          $('.content-block-background-gradient-settings').show();
          $('.content-block-background-image-settings').hide();
          break;
        }

      case 'bgimage':
        {
          $('.content-block-background-color-settings').hide();
          $('.content-block-background-gradient-settings').hide();
          $('.content-block-background-image-settings').show();
          break;
        }
    }
  });
  /*Посмотреть, хз че это вообще такое и что оно тут делает???????????*/

  $('#content-block-gradient-color-1').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#content-block-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#content-block-gradient-color-2').val() + ')');
    makePreview();
  });
  $('#content-block-gradient-color-2').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#content-block-gradient-angle').val()) + 'deg, ' + $('#content-block-gradient-color-1').val() + ', ' + $(this).val() + ')');
    makePreview();
  });
  $('#content-block-gradient-angle').on('input', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#content-block-gradient-color-1').val() + ', ' + $('#content-block-gradient-color-2').val() + ')');
    makePreview();
  });
  $('#content-block-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#content-block-main-color').val(), opacity / 100);
    $(ths).css('background', color);
    makePreview();
  });
  $('#content-block-main-color').on('change', function () {
    var opacity = $('#content-block-main-color-opacity').val();
    var color = hexToRGB($(this).val(), opacity / 100);
    $(ths).css('background', color);
    makePreview();
  });
  $('#content-block-background-image-file').on('change', function () {
    var file = document.querySelector('input#content-block-background-image-file').files[0];
    var token = $('input[name=_token][type=hidden]').val();
    var form_data = new FormData();
    form_data.append('image', file);
    form_data.append('_token', token);
    form_data.append('id', $('input[name=template_id]').val());
    $.ajax({
      url: '/editor/saveimage',
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
  $('#content-block-background-image-size').on('change', function () {
    $(ths).css('background-size', $(this).val());
    makePreview();
  });
  $('#content-block-background-image-attachment').on('change', function () {
    $(ths).css('background-attachment', $(this).val());
    makePreview();
  });
  $('#content-block-background-image-blend-mode').on('change', function () {
    $(ths).css('background-blend-mode', $(this).val());
    makePreview();
  });
  $('#content-block-background-image-repeat-x').on('change', function () {
    $(ths).css('background-repeat-x', $(this).val());
    makePreview();
  });
  $('#content-block-background-image-repeat-y').on('change', function () {
    $(ths).css('background-repeat-y', $(this).val());
    makePreview();
  });
  $('#content-block-background-image-color').on('change', function () {
    $(ths).css('background-color', $(this).val());
    makePreview();
  });
  /*Настройки теней*/

  $('#content-block-shadow-horizontal-value, #content-block-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);

    if ($(this).attr('id') == "content-block-shadow-horizontal-value") {
      $('#content-block-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-horizontal-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-shadow-vertical-value, #content-block-shadow-vertical-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);

    if ($(this).attr('id') == "content-block-shadow-vertical-value") {
      $('#content-block-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-vertical-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-shadow-blur-value, #content-block-shadow-blur-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);

    if ($(this).attr('id') == "content-block-shadow-blur-value") {
      $('#content-block-shadow-blur-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-blur-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-shadow-spread-value, #content-block-shadow-spread-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);

    if ($(this).attr('id') == "content-block-shadow-spread-value") {
      $('#content-block-shadow-spread-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-spread-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-shadow-opacity-value, #content-block-shadow-opacity-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);

    if ($(this).attr('id') == "content-block-shadow-opacity-value") {
      $('#content-block-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-opacity-value').val($(this).val());
    }

    makePreview();
  });
  $('#content-block-shadow-color-value').on('change', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    makePreview();
  });
  $('#content-block-shadow-inset-value').on('change', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    makePreview();
  });
  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#content-block-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(ths).css('animation-name', $(this).val());
      $(ths).css('animation-delay', $('#content-block-animation-delay-value').val() + 's');
      $(ths).css('animation-duration', $('#content-block-animation-duration-value').val() + 's');
    }

    makePreview();
  });
  $('#content-block-animation-delay-value').on('change', function () {
    $(ths).css('animation-delay', $(this).val() + 's');
    makePreview();
  });
  $('#content-block-animation-duration-value').on('change', function () {
    $(ths).css('animation-duration', $(this).val() + 's');
    makePreview();
  });
  /*Конец настроек анимации*/
  //Конец блока
  // пока не знаю что это
  //  if ($($this).first().hasClass('image-module')) {
  //    $('#settings-img').show();
  //    $('#rightSidebar').css({
  //      right: '0px',
  //      transition: '0.4s all ease-in'
  //    }).addClass('activated');
  //
  //    var currWidth = $this.width();
  //    $('#img-width input').val(currWidth);
  //
  //    $('#img-width input').on('input', function () {
  //      $this.width($(this).val());
  //    });
  //
  //    var currHeight = $this.height();
  //    $('#img-height input').val(currHeight);
  //
  //    $('#img-height input').on('input', function () {
  //      $this.height($(this).val());
  //      makePreview();
  //    });
  //
  //    $('#img-file input[type=file]').on('change', function () {
  //      var file = document.querySelector('input#img-file').files[0];
  //
  //      var token = $('input[name=_token][type=hidden]').val();
  //
  //      var form_data = new FormData();
  //      form_data.append('image', file);
  //      form_data.append('_token', token);
  //      form_data.append('id', $('input[name=template_id]').val());
  //
  //      $.ajax({
  //        url: "{{route('client_save_image_post')}}",
  //        method: 'post',
  //        data: form_data,
  //        contentType: false,
  //        processData: false,
  //        success: function (e) {
  //          $($this).find('img').attr('src', e.link);
  //        }
  //      });
  //
  //    });
  //  } else {
  //    $('#settings-bl').show();
  //    $('#rightSidebar').css({
  //      right: '0px',
  //      transition: '0.4s all ease-in'
  //    }).addClass('activated');
  //
  //    var currWidth = $this.width();
  //    $('#block-width input').val(currWidth);
  //
  //    $('#block-width input').on('input', function () {
  //      $this.width($(this).val());
  //      makePreview();
  //    });
  //  }
});

$.fn.resizer = function () {
  var offset;
  var relativeX;
  var currHandle;
  $(this).on('mousedown', function (e) {
    currHandle = $(this);
    $('#mainArea').on('mousemove', function (e) {
      offset = currHandle.parent().offset();
      relativeX = e.pageX - offset.left;
      var dim_curr = currHandle.parent().attr('class');
      var dim_curr = dim_curr.split(' ');
      var dim_next = currHandle.parent().next().attr('class');
      var dim_next = dim_next.split(' ');
      var dimCurrNum, dimNextNum;

      for (var i = 0; i < dim_curr.length; i++) {
        if (dim_curr[i].includes('col-md-')) {
          dimCurrNum = dim_curr[i].split('-')[2];
        }
      }

      for (var i = 0; i < dim_next.length; i++) {
        if (dim_next[i].includes('col-md-')) {
          dimNextNum = dim_next[i].split('-')[2];
        }
      }

      var teta = parseInt(currHandle.parent().css('padding-left')) + parseInt(currHandle.parent().css('padding-right'));
      var delta = currHandle.parent().width() + teta - relativeX - $('.handle').width() / 2;
      var deltaPercentage = delta / currHandle.parent().parent().width() * 100;

      if (deltaPercentage > 7 && currHandle.parent().width() > 100) {
        currHandle.parent().removeClass('col-md-' + dimCurrNum + '');
        currHandle.parent().addClass('col-md-' + (dimCurrNum - 1) + '');
        currHandle.parent().next().removeClass('col-md-' + dimNextNum + '');
        currHandle.parent().next().addClass('col-md-' + (parseInt(dimNextNum) + 1) + '');
      } else if (deltaPercentage < -7 && currHandle.parent().next().width() > 100) {
        currHandle.parent().removeClass('col-md-' + dimCurrNum + '');
        currHandle.parent().addClass('col-md-' + (parseInt(dimCurrNum) + 1) + '');
        currHandle.parent().next().removeClass('col-md-' + dimNextNum + '');
        currHandle.parent().next().addClass('col-md-' + (parseInt(dimNextNum) - 1) + '');
      }
    });
  });
  $('html').on('mouseup', function () {
    $('#mainArea').off('mousemove');
    makePreview();
  });
};

$('.handle').resizer();
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

function addContentSelectorSection($this) {
  var lastElement = $($this).parents('.content-selector').find('>[class*="col-"]').last();
  $(lastElement).append('<div class="handle"></div>');
  $(lastElement).after('<div class="content col-md-1" id="' + getRandom() + '"></div>');
  $($(lastElement).find('.handle')).resizer();
  $($this).parents('.content-selector').find('.content').each(function () {
    Sortable.create($("#" + $(this).attr('id') + "").get(0), {
      group: {
        name: 'content-selector',
        put: 'content-selector'
      },
      sort: true,
      animation: 150,
      ghostClass: 'green-background-class',
      filter: '.resizer, .handle, .block-resizer',
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
        $('.border-hover-content').removeClass('border-hover-content');
        $('.border-hover').removeClass('border-hover');

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
}

function removeContentSelectorSection($this) {
  var $delta = 0;
  var lastElement = $($this).parents('.content-selector').find('>[class*="col-"]').last();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9jb250ZW50X3NlbGVjdG9yL2NvbnRlbnRfc2VsZWN0b3Jfc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiJCIsIm9uIiwicGFyZW50cyIsImZpcnN0IiwicmVtb3ZlIiwiJGNvcHlFbGVtZW50IiwiY2xvbmUiLCJmaW5kIiwiZWFjaCIsImF0dHIiLCJnZXRSYW5kb20iLCJhZnRlciIsImNsb25lSWQiLCJhZGRGdW5jdGlvbmFsaXR5VG9FbGVtZW50IiwiYWRkRnVuY3Rpb25hbGl0eVRvVGV4dEVsZW1lbnQiLCJhZGRGdW5jdGlvbmFsaXR5VG9CdXR0b25FbGVtZW50IiwiZm9ybUlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaWQiLCJpbnB1dHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiU29ydGFibGUiLCJjcmVhdGUiLCJnZXQiLCJhbmltYXRpb24iLCJzd2FwVGhyZXNob2xkIiwiZW1wdHlJbnNlcnRUaHJlc2hvbGQiLCJnaG9zdENsYXNzIiwib25TdGFydCIsImUiLCJpIiwibGVuZ3RoIiwib25ibHVyIiwib25FbmQiLCJibHVyIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm1ha2VQcmV2aWV3IiwiYWRkRnVuY3Rpb25hbGl0eVRvRm9ybUVsZW1lbnQiLCJhZGREcmFnQW5kRHJvcFRvRm9ybSIsImFkZEZ1bmN0aW9uYWxpdHlUb1N1YnNjcmliZUVsZW1lbnQiLCJhZGRGdW5jdGlvbmFsaXR5VG9MaXN0RWxlbWVudCIsImdyb3VwIiwicHV0IiwiZmlsdGVyIiwic29ydCIsIm9uQ2hvb3NlIiwiaXRlbSIsInRleHRCbG9ja0VsZW0iLCJpZnJhbWUiLCJ0ZXh0RWxlbSIsImNvbnRlbnQiLCJjb250ZW50V2luZG93IiwiYm9keSIsImlubmVySFRNTCIsInN0eWxlRWxlbSIsImdldENvbXB1dGVkU3R5bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJ0ZXh0U2hhZG93Iiwic3R5bGUiLCJldnQiLCJ0ZXh0RWRpdG9yUGFuZWwiLCJpbml0Iiwid2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJhZGRGdW5jdGlvbmFsaXR5VG9JZnJhbWUiLCJyZXNpemVyIiwicmVzaXplcl9zIiwiYmxvY2tfcmVzaXplciIsIiR0aGlzIiwibWF4SW5kZXgiLCJjb2xzIiwiJGNvbFNpemVzIiwiaW5kIiwiZWwiLCJjbGFzc2VzIiwic3BsaXQiLCJtYXRjaCIsInB1c2giLCJwYXJzZUludCIsImluZGV4T2ZNYXgiLCJtYXhWYWx1ZVNlY3Rpb24iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYWRkQ29udGVudFNlbGVjdG9yU2VjdGlvbiIsInJlbW92ZUNvbnRlbnRTZWxlY3RvclNlY3Rpb24iLCJldmVudCIsIm9mZiIsInRocyIsInBhcmVudCIsInRpbWUiLCJoIiwiTWF0aCIsImZsb29yIiwibSIsInMiLCJ2YWwiLCJwcm9wIiwiaGlkZSIsInNob3ciLCJjc3MiLCJyaWdodCIsInRyYW5zaXRpb24iLCJjaGVja2VkIiwiaG91cnMiLCJtaW51dGUiLCJzZWNvbmQiLCJhcHBlbmQiLCJjb250ZW50QmxvY2tJZCIsImNvbnRlbnRCbG9ja0VsZW0iLCJjc3NDbGFzc0NvbnRlbnRBcnJheSIsImltZyIsImltZ1dpZHRoIiwid3JhcHBlcldpZHRoIiwicGFyc2VGbG9hdCIsIm9wYWNpdHkiLCJoZXhUb1JHQiIsImZpbGUiLCJxdWVyeVNlbGVjdG9yIiwiZmlsZXMiLCJ0b2tlbiIsImZvcm1fZGF0YSIsIkZvcm1EYXRhIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwic3VjY2VzcyIsImxpbmsiLCJodiIsInZ2IiwiYmxyIiwic3ByZCIsImNsciIsImluc2V0IiwicHJwdHMiLCJmbiIsIm9mZnNldCIsInJlbGF0aXZlWCIsImN1cnJIYW5kbGUiLCJwYWdlWCIsImxlZnQiLCJkaW1fY3VyciIsImRpbV9uZXh0IiwibmV4dCIsImRpbUN1cnJOdW0iLCJkaW1OZXh0TnVtIiwiaW5jbHVkZXMiLCJ0ZXRhIiwiZGVsdGEiLCJkZWx0YVBlcmNlbnRhZ2UiLCJoZXgiLCJhbHBoYSIsInIiLCJzbGljZSIsImciLCJiIiwibGFzdEVsZW1lbnQiLCJsYXN0IiwibmFtZSIsIiRkZWx0YSIsInByZXZFbGVtZW50IiwicHJldiIsIm1hcyIsIm1heCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVDLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsaUJBQTNCLEVBQThDLFlBQVk7QUFDeERELEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUUsT0FBUixDQUFnQixtQkFBaEIsRUFBcUNDLEtBQXJDLEdBQTZDQyxNQUE3QztBQUNELENBRkQ7QUFJ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QUFFLENBQUNFLEtBQUgsQ0FBUyxHQUFULEVBQWMsQ0FBZCxDQUFELENBQVIsR0FBNkJHLFFBQVEsQ0FBQ21GLE1BQUQsQ0FBeEUsQ0FBeEI7QUFDRDtBQUNGLEdBTEQ7QUFPRDs7QUFFRCxTQUFTbEYsVUFBVCxDQUFvQnFGLEdBQXBCLEVBQXlCO0FBQ3ZCLE1BQUlBLEdBQUcsQ0FBQzFJLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNwQixXQUFPLENBQUMsQ0FBUjtBQUNEOztBQUVELE1BQUkySSxHQUFHLEdBQUdELEdBQUcsQ0FBQyxDQUFELENBQWI7QUFDQSxNQUFJL0YsUUFBUSxHQUFHLENBQWY7O0FBRUEsT0FBSyxJQUFJNUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzJJLEdBQUcsQ0FBQzFJLE1BQXhCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ25DLFFBQUkySSxHQUFHLENBQUMzSSxDQUFELENBQUgsR0FBUzRJLEdBQWIsRUFBa0I7QUFDaEJoRyxjQUFRLEdBQUc1QyxDQUFYO0FBQ0E0SSxTQUFHLEdBQUdELEdBQUcsQ0FBQzNJLENBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTzRDLFFBQVA7QUFDRCxDIiwiZmlsZSI6ImNvbnRlbnRfc2VsZWN0b3Jfc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9BUEkvY29udGVudF9zZWxlY3Rvci9jb250ZW50X3NlbGVjdG9yX3NldHRpbmdzLmpzXCIpO1xuIiwiJCgnI21haW5BcmVhJykub24oJ2NsaWNrJywgJy5yZW1vdmUtY29udGVudCcsIGZ1bmN0aW9uICgpIHtcclxuICAkKHRoaXMpLnBhcmVudHMoJy5jb250ZW50LXNlbGVjdG9yJykuZmlyc3QoKS5yZW1vdmUoKTtcclxufSk7XHJcblxyXG4kKCcjbWFpbkFyZWEnKS5vbignY2xpY2snLCAnLmNvcHktY29udGVudCcsIGZ1bmN0aW9uICgpIHtcclxuICB2YXIgJGNvcHlFbGVtZW50ID0gJCh0aGlzKS5wYXJlbnRzKCcuY29udGVudC1zZWxlY3RvcicpLmZpcnN0KCkuY2xvbmUoKTtcclxuXHJcbiAgJCgkY29weUVsZW1lbnQpLmZpbmQoJy5jb250ZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmF0dHIoJ2lkJywgZ2V0UmFuZG9tKCkpO1xyXG4gIH0pO1xyXG4gICQoJGNvcHlFbGVtZW50KS5maW5kKCcuaW1hZ2VCbG9jaycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5hdHRyKCdpZCcsICdpbWFnZScgKyBnZXRSYW5kb20oKSk7XHJcbiAgfSk7XHJcbiAgJCgkY29weUVsZW1lbnQpLmZpbmQoJy52aWRlb0Jsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJ3ZpZGVvJyArIGdldFJhbmRvbSgpKTtcclxuICB9KTtcclxuICAkKCRjb3B5RWxlbWVudCkuZmluZCgnLnRleHRCbG9jaycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5hdHRyKCdpZCcsICd0ZXh0JyArIGdldFJhbmRvbSgpKTtcclxuICB9KTtcclxuICAkKCRjb3B5RWxlbWVudCkuZmluZCgnLmJ1dHRvbkJsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJ2J1dHRvbicgKyBnZXRSYW5kb20oKSk7XHJcbiAgfSk7XHJcbiAgJCgkY29weUVsZW1lbnQpLmZpbmQoJy5mb3JtQmxvY2snKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuYXR0cignaWQnLCAnZm9ybScgKyBnZXRSYW5kb20oKSk7XHJcbiAgfSk7XHJcbiAgJCgkY29weUVsZW1lbnQpLmZpbmQoJy5zdWJzY3JpYmVCbG9jaycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5hdHRyKCdpZCcsICdzdWJzY3JpYmUnICsgZ2V0UmFuZG9tKCkpO1xyXG4gIH0pO1xyXG4gICQoJGNvcHlFbGVtZW50KS5maW5kKCcubGlzdEJsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJ2xpc3QnICsgZ2V0UmFuZG9tKCkpO1xyXG4gIH0pO1xyXG5cclxuICAkKHRoaXMpLnBhcmVudHMoJy5jb250ZW50LXNlbGVjdG9yJykuZmlyc3QoKS5hZnRlcigkY29weUVsZW1lbnQpO1xyXG5cclxuICAkKCRjb3B5RWxlbWVudCkuZmluZCgnLmltYWdlQmxvY2snKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjbG9uZUlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0VsZW1lbnQoY2xvbmVJZCk7XHJcbiAgfSk7XHJcbiAgJCgkY29weUVsZW1lbnQpLmZpbmQoJy52aWRlb0Jsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2xvbmVJZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuXHJcbiAgICBhZGRGdW5jdGlvbmFsaXR5VG9FbGVtZW50KGNsb25lSWQpO1xyXG4gIH0pO1xyXG4gICQoJGNvcHlFbGVtZW50KS5maW5kKCcudGV4dEJsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2xvbmVJZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuXHJcbiAgICBhZGRGdW5jdGlvbmFsaXR5VG9UZXh0RWxlbWVudChjbG9uZUlkKTtcclxuICB9KTtcclxuICAkKCRjb3B5RWxlbWVudCkuZmluZCgnLmJ1dHRvbkJsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2xvbmVJZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuXHJcbiAgICBhZGRGdW5jdGlvbmFsaXR5VG9CdXR0b25FbGVtZW50KGNsb25lSWQpO1xyXG4gIH0pO1xyXG4gICQoJGNvcHlFbGVtZW50KS5maW5kKCcuZm9ybUJsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2xvbmVJZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuXHJcbiAgICBjb25zdCBmb3JtSWQgPSBnZXRSYW5kb20oKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNsb25lSWQpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF0uaWQgPSBmb3JtSWQ7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtSWQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BheUlucHV0Jyk7XHJcblxyXG4gICAgU29ydGFibGUuY3JlYXRlKCQoXCIjXCIgKyBmb3JtSWQgKyBcIlwiKS5nZXQoMCksIHtcclxuICAgICAgYW5pbWF0aW9uOiAxNTAsXHJcbiAgICAgIHN3YXBUaHJlc2hvbGQ6IDEsXHJcbiAgICAgIGVtcHR5SW5zZXJ0VGhyZXNob2xkOiAxLFxyXG4gICAgICBnaG9zdENsYXNzOiAnYmx1ZS1iYWNrZ3JvdW5kLWNsYXNzJyxcclxuICAgICAgb25TdGFydDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaW5wdXRzW2ldLm9uYmx1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb25FbmQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlucHV0c1tpXS5ibHVyKCk7XHJcbiAgICAgICAgICBpbnB1dHNbaV0ub25ibHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnB1dHNbaV0ucGxhY2Vob2xkZXIgPSBpbnB1dHNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgIGlucHV0c1tpXS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRGdW5jdGlvbmFsaXR5VG9Gb3JtRWxlbWVudChjbG9uZUlkKTtcclxuICB9KTtcclxuICAkKCRjb3B5RWxlbWVudCkuZmluZCgnLnN1YnNjcmliZUJsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2xvbmVJZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuXHJcbiAgICBhZGREcmFnQW5kRHJvcFRvRm9ybShjbG9uZUlkKTtcclxuXHJcbiAgICBhZGRGdW5jdGlvbmFsaXR5VG9TdWJzY3JpYmVFbGVtZW50KGNsb25lSWQpO1xyXG4gIH0pO1xyXG4gICQoJGNvcHlFbGVtZW50KS5maW5kKCcubGlzdEJsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2xvbmVJZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuXHJcbiAgICBhZGRGdW5jdGlvbmFsaXR5VG9MaXN0RWxlbWVudChjbG9uZUlkKTtcclxuICB9KTtcclxuXHJcbiAgJCgkY29weUVsZW1lbnQpLmZpbmQoJy5jb250ZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICBTb3J0YWJsZS5jcmVhdGUoJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyAnJykuZ2V0KDApLCB7XHJcbiAgICAgIGdyb3VwOiAnY29udGVudC1zZWxlY3RvcicsXHJcbiAgICAgIHB1dDogJ2NvbnRlbnQtc2VsZWN0b3InLFxyXG4gICAgICBmaWx0ZXI6ICcucmVzaXplciwgLmhhbmRsZSwgLmJsb2NrLXJlc2l6ZXInLFxyXG4gICAgICBzb3J0OiB0cnVlLFxyXG4gICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgZ2hvc3RDbGFzczogJ2dyZWVuLWJhY2tncm91bmQtY2xhc3MnLFxyXG4gICAgICBvbkNob29zZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoJChlLml0ZW0pLmF0dHIoJ2NsYXNzJykgPT0gJ3RleHRCbG9jayBzb3J0YWJsZS1jaG9zZW4nICYmIGUuaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJylbMF0pIHtcclxuICAgICAgICAgIGNvbnN0IHRleHRCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKGUuaXRlbSkuYXR0cignaWQnKSk7XHJcbiAgICAgICAgICBjb25zdCBpZnJhbWUgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXTtcclxuICAgICAgICAgIGNvbnN0IHRleHRFbGVtID0gdGV4dEJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0JylbMF07XHJcbiAgICAgICAgICBjb250ZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5pbm5lckhUTUw7XHJcbiAgICAgICAgICBsZXQgc3R5bGVFbGVtID0gJ2ZvbnQtc2l6ZTonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkuZm9udFNpemUgKyAnOyc7XHJcbiAgICAgICAgICBzdHlsZUVsZW0gKz0gJ2ZvbnQtZmFtaWx5OicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS5mb250RmFtaWx5ICsgJzsnO1xyXG4gICAgICAgICAgc3R5bGVFbGVtICs9ICdsaW5lLWhlaWdodDonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkubGluZUhlaWdodCArICc7JztcclxuICAgICAgICAgIHN0eWxlRWxlbSArPSAnY29sb3I6JyArIGdldENvbXB1dGVkU3R5bGUodGV4dEVsZW0pLmNvbG9yICsgJzsnO1xyXG4gICAgICAgICAgc3R5bGVFbGVtICs9ICd0ZXh0LXNoYWRvdzonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkudGV4dFNoYWRvdyArICc7JztcclxuICAgICAgICAgIHN0eWxlID0gJ2JvZHkge292ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7JyArIHN0eWxlRWxlbSArICd9JztcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgaWYgKCQoZXZ0Lml0ZW0pLmF0dHIoJ2NsYXNzJykgPT0gJ3RleHRCbG9jaycgJiYgZXZ0Lml0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdKSB7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0QmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJChldnQuaXRlbSkuYXR0cignaWQnKSk7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0RWRpdG9yUGFuZWwgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHQtZWRpdG9yLXBhbmVsJylbMF07XHJcbiAgICAgICAgICBjb25zdCBpZnJhbWUgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXTtcclxuICAgICAgICAgIGluaXQoaWZyYW1lLCBjb250ZW50LCBzdHlsZSk7XHJcbiAgICAgICAgICB0ZXh0RWRpdG9yUGFuZWwuc3R5bGUud2lkdGggPSAodGV4dEJsb2NrRWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIDIpICsgJ3B4JztcclxuICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICdweCc7XHJcbiAgICAgICAgICBhZGRGdW5jdGlvbmFsaXR5VG9JZnJhbWUoJChldnQuaXRlbSkuYXR0cignaWQnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gICQoJy5oYW5kbGUnKS5yZXNpemVyKCk7XHJcbiAgJCgnLnJlc2l6ZXInKS5yZXNpemVyX3MoKTtcclxuICAkKCcuYmxvY2stcmVzaXplcicpLmJsb2NrX3Jlc2l6ZXIoKTtcclxufSk7XHJcblxyXG4kKCcjbWFpbkFyZWEnKS5vbignY2xpY2snLCAnLmFkZC1jb250ZW50LWJsb2NrJywgZnVuY3Rpb24gKCkge1xyXG4gIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgdmFyIG1heEluZGV4O1xyXG4gIHZhciBjb2xzID0gJCh0aGlzKS5wYXJlbnRzKCcuY29udGVudC1zZWxlY3RvcicpLmZpbmQoJz5bY2xhc3MqPVwiY29sLVwiXScpO1xyXG5cclxuICBpZiAoY29scy5sZW5ndGggPT0gMTIpXHJcbiAgICByZXR1cm47XHJcblxyXG4gIHZhciAkY29sU2l6ZXMgPSBbXTtcclxuXHJcbiAgJChjb2xzKS5lYWNoKGZ1bmN0aW9uIChpbmQsIGVsKSB7XHJcbiAgICB2YXIgY2xhc3NlcyA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpO1xyXG5cclxuICAgICQoY2xhc3NlcykuZWFjaChmdW5jdGlvbiAoaW5kLCBlbCkge1xyXG4gICAgICBpZiAoZWwubWF0Y2goL2NvbC1bYS16XSstWzAtOV0rL2kpKVxyXG4gICAgICAgICRjb2xTaXplcy5wdXNoKHBhcnNlSW50KGVsLnNwbGl0KCctJylbMl0pKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIG1heEluZGV4ID0gaW5kZXhPZk1heCgkY29sU2l6ZXMpO1xyXG4gIHZhciBtYXhWYWx1ZVNlY3Rpb24gPSAkKCR0aGlzKS5wYXJlbnRzKCcuY29udGVudC1zZWxlY3RvcicpLmZpbmQoJz5bY2xhc3MqPVwiY29sLVwiXTpudGgoJyArIG1heEluZGV4ICsgJyknKTtcclxuICAkKG1heFZhbHVlU2VjdGlvbi5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJykpLmVhY2goZnVuY3Rpb24gKGluZCwgZWwpIHtcclxuICAgIGlmIChlbC5tYXRjaCgvY29sLVthLXpdKy1bMC05XSsvaSkpIHtcclxuICAgICAgJChtYXhWYWx1ZVNlY3Rpb24pLnJlbW92ZUNsYXNzKGVsKTtcclxuICAgICAgJChtYXhWYWx1ZVNlY3Rpb24pLmFkZENsYXNzKCdjb2wtJyArIGVsLnNwbGl0KCctJylbMV0gKyAnLScgKyAocGFyc2VJbnQoZWwuc3BsaXQoJy0nKVsyXSkgLSAxKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgYWRkQ29udGVudFNlbGVjdG9yU2VjdGlvbigkdGhpcyk7XHJcbiAgbWFrZVByZXZpZXcoKTtcclxufSk7XHJcblxyXG4kKCcjbWFpbkFyZWEnKS5vbignY2xpY2snLCAnLnJlbW92ZS1jb250ZW50LWJsb2NrJywgZnVuY3Rpb24gKCkge1xyXG4gIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gIHZhciBjb2xzID0gJCh0aGlzKS5wYXJlbnRzKCcuY29udGVudC1zZWxlY3RvcicpLmZpbmQoJz5bY2xhc3MqPVwiY29sLVwiXScpO1xyXG5cclxuICBpZiAoY29scy5sZW5ndGggPT0gMSlcclxuICAgIHJldHVybjtcclxuXHJcbiAgcmVtb3ZlQ29udGVudFNlbGVjdG9yU2VjdGlvbigkdGhpcyk7XHJcbiAgbWFrZVByZXZpZXcoKTtcclxufSk7XHJcblxyXG4kKCcjbWFpbkFyZWEnKS5vbignY2xpY2snLCAnLnNldHRpbmdzJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgLy/QntGH0LjRgdGC0LrQsCDQvtGCINGB0YLQsNGA0YvRhSDRgdC+0LHRi9GC0LjQuSDQuNC30LzQtdC90LXQvdC40Y8g0LfQvdCw0YfQtdC90LjQuSAo0L/RgNC4INC/0LXRgNCy0L7QvCDQutC70LjQutC1INC90LAg0L3QsNGB0YLRgNC+0LnQutC4LCDQstGL0LfRi9Cy0LDQtdGC0YHRjyDQvtC00LjQvSDRgNCw0LcsINC/0YDQuCDQstGC0L7RgNC+0Lwg0YPQttC1INC00LLQsCkuXHJcbiAgLy/Qn9C+0L/RgNCw0LLQu9C10L3QviEhIVxyXG4gICQoJyNyaWdodFNpZGViYXIgPiBkaXY6bm90KCNzZXR0aW5ncy1tbikgaW5wdXQnKS5vZmYoJ2lucHV0Jyk7XHJcbiAgJCgnI3JpZ2h0U2lkZWJhciA+IGRpdjpub3QoI3NldHRpbmdzLW1uKSBpbnB1dCcpLm9mZigpO1xyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1zdHlsZS12YWx1ZScpLm9mZigpO1xyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1sZWZ0LXN0eWxlLXZhbHVlJykub2ZmKCk7XHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXJpZ2h0LXN0eWxlLXZhbHVlJykub2ZmKCk7XHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXRvcC1zdHlsZS12YWx1ZScpLm9mZigpO1xyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1ib3R0b20tc3R5bGUtdmFsdWUnKS5vZmYoKTtcclxuICAkKCcjY29udGVudC1ibG9jay1hbmltYXRpb24tdHlwZS12YWx1ZScpLm9mZigpO1xyXG4gIHZhciB0aHMgPSBudWxsO1xyXG4gIHRocyA9ICQodGhpcykucGFyZW50cygnLmJsb2NrLXNldHRpbmdzJykucGFyZW50KCk7XHJcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JpcHQtJyArIHRocy5hdHRyKCdpZCcpKSkge1xyXG4gICAgdmFyIHRpbWUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyaXB0LScgKyB0aHMuYXR0cignaWQnKSkuaW5uZXJIVE1MLnNwbGl0KCcsJylbMV0pIC8gMTAwMDtcclxuICAgIHZhciBoID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCk7XHJcbiAgICB2YXIgbSA9IE1hdGguZmxvb3IoKHRpbWUgLSAzNjAwICogaCkgLyA2MCk7XHJcbiAgICB2YXIgcyA9IHRpbWUgLSAoMzYwMCAqIGggKyA2MCAqIG0pO1xyXG4gICAgJCgnI2NvbnRlbnQtYmxvY2stdGltZW91dC1ob3VyLXZhbHVlJykudmFsKGgpO1xyXG4gICAgJCgnI2NvbnRlbnQtYmxvY2stdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwobSk7XHJcbiAgICAkKCcjY29udGVudC1ibG9jay10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbChzKTtcclxuICAgICQoJyNjb250ZW50LWJsb2NrLWRpc3BsYXktbm9uZS12YWx1ZScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnI2NvbnRlbnQtYmxvY2stdGltZW91dC1ob3VyLXZhbHVlJykudmFsKDApO1xyXG4gICAgJCgnI2NvbnRlbnQtYmxvY2stdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwoMCk7XHJcbiAgICAkKCcjY29udGVudC1ibG9jay10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgwKTtcclxuICB9XHJcblxyXG4gICQoJyNyaWdodFNpZGViYXIgPiBkaXYnKS5oaWRlKCk7XHJcblxyXG4gICQoJyNzZXR0aW5ncy1tbicpLmhpZGUoKTtcclxuICAkKCcjbWFpbi1ibG9jay1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjaW1hZ2Utc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3ZpZGVvLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyN0ZXh0LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNidXR0b24tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2Zvcm0tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3N1YnNjcmliZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGluZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGlzdC1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjdGVzdCcpLnNob3coKTtcclxuICAkKCcjcmlnaHRTaWRlYmFyJykuY3NzKHtcclxuICAgIHJpZ2h0OiAnMHB4JyxcclxuICAgIHRyYW5zaXRpb246ICcwLjRzIGFsbCBlYXNlLWluJ1xyXG4gIH0pLmFkZENsYXNzKCdhY3RpdmF0ZWQnKTtcclxuXHJcbiAgLyrQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQuNC90L/Rg9GC0L7QsiovXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2std2lkdGgtdmFsdWUnKS52YWwoJCh0aHMpLndpZHRoKCkpO1xyXG4gICQoJyNjb250ZW50LWJsb2NrLXdpZHRoLXZhbHVlLXJhbmdlJykudmFsKCQodGhzKS53aWR0aCgpKTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stbWFyZ2luLXRvcC12YWx1ZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdtYXJnaW4tdG9wJykpKTtcclxuICAkKCcjY29udGVudC1ibG9jay1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ21hcmdpbi10b3AnKSkpO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1tYXJnaW4tYm90dG9tLXZhbHVlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ21hcmdpbi1ib3R0b20nKSkpO1xyXG4gICQoJyNjb250ZW50LWJsb2NrLW1hcmdpbi1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnbWFyZ2luLWJvdHRvbScpKSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctdG9wLXZhbHVlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ3BhZGRpbmctdG9wJykpKTtcclxuICAkKCcjY29udGVudC1ibG9jay1wYWRkaW5nLXRvcC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdwYWRkaW5nLXRvcCcpKSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctYm90dG9tLXZhbHVlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ3BhZGRpbmctYm90dG9tJykpKTtcclxuICAkKCcjY29udGVudC1ibG9jay1wYWRkaW5nLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdwYWRkaW5nLWJvdHRvbScpKSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctbGVmdC12YWx1ZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdwYWRkaW5nLWxlZnQnKSkpO1xyXG4gICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctbGVmdC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdwYWRkaW5nLWxlZnQnKSkpO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1wYWRkaW5nLXJpZ2h0LXZhbHVlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSkpO1xyXG4gICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygncGFkZGluZy1yaWdodCcpKSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLW9wYWNpdHktdmFsdWUnKS52YWwoJCh0aHMpLmNzcygnb3BhY2l0eScpICogMTAwKTtcclxuICAkKCcjY29udGVudC1ibG9jay1vcGFjaXR5LXZhbHVlLXJhbmdlJykudmFsKCQodGhzKS5jc3MoJ29wYWNpdHknKSAqIDEwMCk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci10aGlja25lc3MtdmFsdWUnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLXdpZHRoJykpKTtcclxuICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci13aWR0aCcpKSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1sZWZ0LXRoaWNrbmVzcy12YWx1ZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItbGVmdC13aWR0aCcpKSk7XHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLWxlZnQtdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykpKTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXRvcC10aGlja25lc3MtdmFsdWUnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLXRvcC13aWR0aCcpKSk7XHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXRvcC10aGlja25lc3MtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLXRvcC13aWR0aCcpKSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1yaWdodC10aGlja25lc3MtdmFsdWUnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJykpKTtcclxuICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItcmlnaHQtdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcpKSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1ib3R0b20tdGhpY2tuZXNzLXZhbHVlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkpO1xyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1ib3R0b20tdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkpO1xyXG5cclxuICAvKtCR0LvQvtC6INGC0LDQudC80LDRg9GC0LAqL1xyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0hISHQodCU0JXQm9CQ0KLQrCEhIS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyaXB0LScgKyB0aHMuYXR0cignaWQnKSkpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWJsb2NrLWRpc3BsYXktbm9uZS12YWx1ZScpLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1ibG9jay1kaXNwbGF5LW5vbmUtdmFsdWUnKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1kaXNwbGF5LW5vbmUtdmFsdWUsICNjb250ZW50LWJsb2NrLXRpbWVvdXQtaG91ci12YWx1ZSwgI2NvbnRlbnQtYmxvY2stdGltZW91dC1ob3VyLXZhbHVlLXJhbmdlLCAjY29udGVudC1ibG9jay10aW1lb3V0LW1pbnV0ZS12YWx1ZSwgI2NvbnRlbnQtYmxvY2stdGltZW91dC1taW51dGUtdmFsdWUtcmFuZ2UsICNjb250ZW50LWJsb2NrLXRpbWVvdXQtc2Vjb25kLXZhbHVlLCAjY29udGVudC1ibG9jay10aW1lb3V0LXNlY29uZC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpZCA9IHRocy5hdHRyKCdpZCcpO1xyXG5cclxuICAgIHZhciBob3VycyA9ICQoJyNjb250ZW50LWJsb2NrLXRpbWVvdXQtaG91ci12YWx1ZScpLnZhbCgpICogMzYwMDtcclxuICAgIHZhciBtaW51dGUgPSAkKCcjY29udGVudC1ibG9jay10aW1lb3V0LW1pbnV0ZS12YWx1ZScpLnZhbCgpICogNjA7XHJcbiAgICB2YXIgc2Vjb25kID0gcGFyc2VJbnQoJCgnI2NvbnRlbnQtYmxvY2stdGltZW91dC1zZWNvbmQtdmFsdWUnKS52YWwoKSk7XHJcblxyXG4gICAgdmFyIHRpbWUgPSBob3VycyArIG1pbnV0ZSArIHNlY29uZDtcclxuXHJcbiAgICB0aW1lID0gdGltZSAqIDEwMDA7XHJcblxyXG5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1ibG9jay1kaXNwbGF5LW5vbmUtdmFsdWUnKS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgJCgnI3NjcmlwdC0nICsgaWQpLnJlbW92ZSgpO1xyXG4gICAgICAkKCcjbWFpbkFyZWEnKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiY29kZVwiIGlkPVwic2NyaXB0LScgKyBpZCArICdcIiBjbGFzcz1cImNvZGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+JyArIFtpZCwgdGltZV0gKyAnPC9zcGFuPicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3NjcmlwdC0nICsgaWQpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImNvbnRlbnQtYmxvY2stdGltZW91dC1ob3VyLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stdGltZW91dC1ob3VyLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJjb250ZW50LWJsb2NrLXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXRpbWVvdXQtaG91ci12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiY29udGVudC1ibG9jay10aW1lb3V0LW1pbnV0ZS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXRpbWVvdXQtbWludXRlLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJjb250ZW50LWJsb2NrLXRpbWVvdXQtbWludXRlLXZhbHVlLXJhbmdlXCIpIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImNvbnRlbnQtYmxvY2stdGltZW91dC1zZWNvbmQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay10aW1lb3V0LXNlY29uZC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiY29udGVudC1ibG9jay10aW1lb3V0LXNlY29uZC12YWx1ZS1yYW5nZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwINGC0LDQudC80LDRg9GC0LAqL1xyXG5cclxuICAvKtCU0LjQvdCw0LzQuNGH0LXRgdC60LjQtSDQvdCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC+0YHQvdC+0LLQvdC+0LPQviDQsdC70L7QutCwKi9cclxuICAvKtCY0LfQvNC10L3QtdC90LjQtSDRiNC40YDQuNC90Ysg0L7RgdC90L7QstC90L7Qs9C+INGB0LXQu9C10LrRgtC+0YDQsCovXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2std2lkdGgtdmFsdWUsICNjb250ZW50LWJsb2NrLXdpZHRoLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjb250ZW50QmxvY2tJZCA9ICQodGhzKS5hdHRyKCdpZCcpO1xyXG4gICAgdmFyIGNvbnRlbnRCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50QmxvY2tJZCk7XHJcbiAgICB2YXIgY3NzQ2xhc3NDb250ZW50QXJyYXkgPSBjb250ZW50QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnQnKTtcclxuICAgIHZhciBpbWcgPSB7fTtcclxuICAgIHZhciBpbWdXaWR0aCA9IDA7XHJcbiAgICB2YXIgd3JhcHBlcldpZHRoID0gMDtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNzc0NsYXNzQ29udGVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChjc3NDbGFzc0NvbnRlbnRBcnJheVtpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWcnKVswXSkge1xyXG4gICAgICAgIGltZyA9IGNzc0NsYXNzQ29udGVudEFycmF5W2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZycpWzBdO1xyXG4gICAgICAgIGltZ1dpZHRoID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGltZykud2lkdGgpO1xyXG4gICAgICAgIHdyYXBwZXJXaWR0aCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShjc3NDbGFzc0NvbnRlbnRBcnJheVtpXSkud2lkdGgpO1xyXG4gICAgICAgIGlmICh3cmFwcGVyV2lkdGggPD0gaW1nV2lkdGggKyA0MCkge1xyXG4gICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQodGhzKS53aWR0aCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJjb250ZW50LWJsb2NrLXdpZHRoLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2std2lkdGgtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay13aWR0aC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLW1hcmdpbi10b3AtdmFsdWUsICNjb250ZW50LWJsb2NrLW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdtYXJnaW4tdG9wJywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHRocykuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi10b3A6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgLy8kKHRocykuY3NzKCdjc3NUZXh0JywgJ21hcmdpbi10b3A6JyskKHRoaXMpLnZhbCgpKydweCAhaW1wb3J0YW50Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiY29udGVudC1ibG9jay1tYXJnaW4tdG9wLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stbWFyZ2luLXRvcC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLW1hcmdpbi10b3AtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1tYXJnaW4tYm90dG9tLXZhbHVlLCAjY29udGVudC1ibG9jay1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnbWFyZ2luLWJvdHRvbScsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJCh0aHMpLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tYm90dG9tOicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJjb250ZW50LWJsb2NrLW1hcmdpbi1ib3R0b20tdmFsdWVcIikge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stbWFyZ2luLWJvdHRvbS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctdG9wLXZhbHVlLCAjY29udGVudC1ibG9jay1wYWRkaW5nLXRvcC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ3BhZGRpbmctdG9wJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImNvbnRlbnQtYmxvY2stcGFkZGluZy10b3AtdmFsdWVcIikge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1wYWRkaW5nLXRvcC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctdG9wLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stcGFkZGluZy1ib3R0b20tdmFsdWUsICNjb250ZW50LWJsb2NrLXBhZGRpbmctYm90dG9tLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygncGFkZGluZy1ib3R0b20nLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiY29udGVudC1ibG9jay1wYWRkaW5nLWJvdHRvbS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stcGFkZGluZy1ib3R0b20tdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1wYWRkaW5nLWxlZnQtdmFsdWUsICNjb250ZW50LWJsb2NrLXBhZGRpbmctbGVmdC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ3BhZGRpbmctbGVmdCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJjb250ZW50LWJsb2NrLXBhZGRpbmctbGVmdC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctbGVmdC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctbGVmdC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctcmlnaHQtdmFsdWUsICNjb250ZW50LWJsb2NrLXBhZGRpbmctcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImNvbnRlbnQtYmxvY2stcGFkZGluZy1yaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXBhZGRpbmctcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1wYWRkaW5nLXJpZ2h0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stb3BhY2l0eS12YWx1ZSwgI2NvbnRlbnQtYmxvY2stb3BhY2l0eS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ29wYWNpdHknLCAkKHRoaXMpLnZhbCgpIC8gMTAwKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJjb250ZW50LWJsb2NrLW9wYWNpdHktdmFsdWVcIikge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1vcGFjaXR5LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stb3BhY2l0eS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INC00LvRjyDQstGB0LXRhSDQs9GA0LDQvdC40YYg0LHQu9C+0LrQsCovXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXRoaWNrbmVzcy12YWx1ZSwgI2NvbnRlbnQtYmxvY2stYm9yZGVyLXRoaWNrbmVzcy12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJjb250ZW50LWJsb2NrLWJvcmRlci10aGlja25lc3MtdmFsdWVcIikge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXRoaWNrbmVzcy12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1yYWRpdXMtdmFsdWUsICNjb250ZW50LWJsb2NrLWJvcmRlci1yYWRpdXMtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImNvbnRlbnQtYmxvY2stYm9yZGVyLXJhZGl1cy12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1yYWRpdXMtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItcmFkaXVzLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXN0eWxlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLWNvbG9yLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQmtC+0L3QtdGGINCx0LvQvtC60LAqL1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQuCDQtNC70Y8g0LvQtdCy0L7QuSDQs9GA0LDQvdC40YbRiyDQsdC70L7QutCwKi9cclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLWxlZnQtdGhpY2tuZXNzLXZhbHVlLCAjY29udGVudC1ibG9jay1ib3JkZXItbGVmdC10aGlja25lc3MtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItbGVmdC13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJjb250ZW50LWJsb2NrLWJvcmRlci1sZWZ0LXRoaWNrbmVzcy12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1sZWZ0LXRoaWNrbmVzcy12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1sZWZ0LXRoaWNrbmVzcy12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1sZWZ0LXN0eWxlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci1sZWZ0LXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItbGVmdC1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItbGVmdC1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQmtC+0L3QtdGGINCx0LvQvtC60LAqL1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQuCDQtNC70Y8g0LLQtdGA0YXQvdC10Lkg0LPRgNCw0L3QuNGG0Ysg0LHQu9C+0LrQsCovXHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci10b3AtdGhpY2tuZXNzLXZhbHVlLCAjY29udGVudC1ibG9jay1ib3JkZXItdG9wLXRoaWNrbmVzcy12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci10b3Atd2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiY29udGVudC1ibG9jay1ib3JkZXItdG9wLXRoaWNrbmVzcy12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci10b3AtdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXRvcC10aGlja25lc3MtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItdG9wLWxlZnQtcmFkaXVzLXZhbHVlLCAjY29udGVudC1ibG9jay1ib3JkZXItdG9wLWxlZnQtcmFkaXVzLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJjb250ZW50LWJsb2NrLWJvcmRlci10b3AtbGVmdC1yYWRpdXMtdmFsdWVcIikge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItdG9wLWxlZnQtcmFkaXVzLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cy12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzLXZhbHVlLCAjY29udGVudC1ibG9jay1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1cy12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImNvbnRlbnQtYmxvY2stYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMtdmFsdWVcIikge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1cy12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXRvcC1zdHlsZS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItdG9wLXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItdG9wLWNvbG9yLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci10b3AtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC/0YDQsNCy0L7QuSDQs9GA0LDQvdC40YbRiyDQsdC70L7QutCwKi9cclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXJpZ2h0LXRoaWNrbmVzcy12YWx1ZSwgI2NvbnRlbnQtYmxvY2stYm9yZGVyLXJpZ2h0LXRoaWNrbmVzcy12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJjb250ZW50LWJsb2NrLWJvcmRlci1yaWdodC10aGlja25lc3MtdmFsdWVcIikge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItcmlnaHQtdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLXJpZ2h0LXRoaWNrbmVzcy12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1yaWdodC1zdHlsZS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItcmlnaHQtc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1yaWdodC1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItcmlnaHQtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC90LjQttC90LXQuSDQs9GA0LDQvdC40YbRiyDQsdC70L7QutCwKi9cclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLWJvdHRvbS10aGlja25lc3MtdmFsdWUsICNjb250ZW50LWJsb2NrLWJvcmRlci1ib3R0b20tdGhpY2tuZXNzLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJjb250ZW50LWJsb2NrLWJvcmRlci1ib3R0b20tdGhpY2tuZXNzLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLWJvdHRvbS10aGlja25lc3MtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItYm90dG9tLXRoaWNrbmVzcy12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMtdmFsdWUsICNjb250ZW50LWJsb2NrLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImNvbnRlbnQtYmxvY2stYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cy12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMtdmFsdWUsICNjb250ZW50LWJsb2NrLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiY29udGVudC1ibG9jay1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cy12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItYm90dG9tLXN0eWxlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JvcmRlci1ib3R0b20tc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJvcmRlci1ib3R0b20tY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYm9yZGVyLWJvdHRvbS1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQmtC+0L3QtdGGINCx0LvQvtC60LAqL1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1ib3JkZXItc2V0dGluZ3MtY2hvaWNlIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHN3aXRjaCAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICBjYXNlICdhbGxib3JkZXJzJzoge1xyXG4gICAgICAgICQoJyNjb250ZW50LWJsb2NrLWFsbC1ib3JkZXItc2V0dGluZ3MnKS5zaG93KCk7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtYmxvY2stZWFjaC1ib3JkZXItc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnZWFjaGJvcmRlcnMnOiB7XHJcbiAgICAgICAgJCgnI2NvbnRlbnQtYmxvY2stYWxsLWJvcmRlci1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgICAkKCcjY29udGVudC1ibG9jay1lYWNoLWJvcmRlci1zZXR0aW5ncycpLnNob3coKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYmFja2dyb3VuZC10eXBlcyBpbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBzd2l0Y2ggKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgY2FzZSAnY29sb3InOiB7XHJcbiAgICAgICAgJCgnLmNvbnRlbnQtYmxvY2stYmFja2dyb3VuZC1jb2xvci1zZXR0aW5ncycpLnNob3coKTtcclxuICAgICAgICAkKCcuY29udGVudC1ibG9jay1iYWNrZ3JvdW5kLWdyYWRpZW50LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICAgICAgICQoJy5jb250ZW50LWJsb2NrLWJhY2tncm91bmQtaW1hZ2Utc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnZ3JhZGllbnQnOiB7XHJcbiAgICAgICAgJCgnLmNvbnRlbnQtYmxvY2stYmFja2dyb3VuZC1jb2xvci1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAgICAgICAkKCcuY29udGVudC1ibG9jay1iYWNrZ3JvdW5kLWdyYWRpZW50LXNldHRpbmdzJykuc2hvdygpO1xyXG4gICAgICAgICQoJy5jb250ZW50LWJsb2NrLWJhY2tncm91bmQtaW1hZ2Utc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnYmdpbWFnZSc6IHtcclxuICAgICAgICAkKCcuY29udGVudC1ibG9jay1iYWNrZ3JvdW5kLWNvbG9yLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICAgICAgICQoJy5jb250ZW50LWJsb2NrLWJhY2tncm91bmQtZ3JhZGllbnQtc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnLmNvbnRlbnQtYmxvY2stYmFja2dyb3VuZC1pbWFnZS1zZXR0aW5ncycpLnNob3coKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvKtCf0L7RgdC80L7RgtGA0LXRgtGMLCDRhdC3INGH0LUg0Y3RgtC+INCy0L7QvtCx0YnQtSDRgtCw0LrQvtC1INC4INGH0YLQviDQvtC90L4g0YLRg9GCINC00LXQu9Cw0LXRgj8/Pz8/Pz8/Pz8/Ki9cclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stZ3JhZGllbnQtY29sb3ItMScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdiYWNrZ3JvdW5kJywgJ2xpbmVhci1ncmFkaWVudCgnICsgcGFyc2VJbnQoJCgnI2NvbnRlbnQtYmxvY2stZ3JhZGllbnQtYW5nbGUnKS52YWwoKSkgKyAnZGVnLCAnICsgJCh0aGlzKS52YWwoKSArICcsICcgKyAkKCcjY29udGVudC1ibG9jay1ncmFkaWVudC1jb2xvci0yJykudmFsKCkgKyAnKScpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stZ3JhZGllbnQtY29sb3ItMicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdiYWNrZ3JvdW5kJywgJ2xpbmVhci1ncmFkaWVudCgnICsgcGFyc2VJbnQoJCgnI2NvbnRlbnQtYmxvY2stZ3JhZGllbnQtYW5nbGUnKS52YWwoKSkgKyAnZGVnLCAnICsgJCgnI2NvbnRlbnQtYmxvY2stZ3JhZGllbnQtY29sb3ItMScpLnZhbCgpICsgJywgJyArICQodGhpcykudmFsKCkgKyAnKScpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stZ3JhZGllbnQtYW5nbGUnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdiYWNrZ3JvdW5kJywgJ2xpbmVhci1ncmFkaWVudCgnICsgcGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgKyAnZGVnLCAnICsgJCgnI2NvbnRlbnQtYmxvY2stZ3JhZGllbnQtY29sb3ItMScpLnZhbCgpICsgJywgJyArICQoJyNjb250ZW50LWJsb2NrLWdyYWRpZW50LWNvbG9yLTInKS52YWwoKSArICcpJyk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1tYWluLWNvbG9yLW9wYWNpdHknKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgb3BhY2l0eSA9ICQodGhpcykudmFsKCk7XHJcbiAgICB2YXIgY29sb3IgPSBoZXhUb1JHQigkKCcjY29udGVudC1ibG9jay1tYWluLWNvbG9yJykudmFsKCksIG9wYWNpdHkgLyAxMDApO1xyXG4gICAgJCh0aHMpLmNzcygnYmFja2dyb3VuZCcsIGNvbG9yKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLW1haW4tY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9wYWNpdHkgPSAkKCcjY29udGVudC1ibG9jay1tYWluLWNvbG9yLW9wYWNpdHknKS52YWwoKTtcclxuICAgIHZhciBjb2xvciA9IGhleFRvUkdCKCQodGhpcykudmFsKCksIG9wYWNpdHkgLyAxMDApO1xyXG4gICAgJCh0aHMpLmNzcygnYmFja2dyb3VuZCcsIGNvbG9yKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJhY2tncm91bmQtaW1hZ2UtZmlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2NvbnRlbnQtYmxvY2stYmFja2dyb3VuZC1pbWFnZS1maWxlJykuZmlsZXNbMF07XHJcblxyXG4gICAgdmFyIHRva2VuID0gJCgnaW5wdXRbbmFtZT1fdG9rZW5dW3R5cGU9aGlkZGVuXScpLnZhbCgpO1xyXG5cclxuICAgIHZhciBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1fZGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZSk7XHJcbiAgICBmb3JtX2RhdGEuYXBwZW5kKCdfdG9rZW4nLCB0b2tlbik7XHJcbiAgICBmb3JtX2RhdGEuYXBwZW5kKCdpZCcsICQoJ2lucHV0W25hbWU9dGVtcGxhdGVfaWRdJykudmFsKCkpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJy9lZGl0b3Ivc2F2ZWltYWdlJyxcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIGRhdGE6IGZvcm1fZGF0YSxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJCh0aHMpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArIGUubGluayArICcpJylcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYmFja2dyb3VuZC1pbWFnZS1zaXplJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JhY2tncm91bmQtc2l6ZScsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYmFja2dyb3VuZC1pbWFnZS1hdHRhY2htZW50Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JhY2tncm91bmQtYXR0YWNobWVudCcsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYmFja2dyb3VuZC1pbWFnZS1ibGVuZC1tb2RlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JhY2tncm91bmQtYmxlbmQtbW9kZScsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stYmFja2dyb3VuZC1pbWFnZS1yZXBlYXQteCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdiYWNrZ3JvdW5kLXJlcGVhdC14JywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1iYWNrZ3JvdW5kLWltYWdlLXJlcGVhdC15Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ2JhY2tncm91bmQtcmVwZWF0LXknLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWJhY2tncm91bmQtaW1hZ2UtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INGC0LXQvdC10LkqL1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZSwgI2NvbnRlbnQtYmxvY2stc2hhZG93LWhvcml6b250YWwtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjY29udGVudC1ibG9jay1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICQodGhzKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiY29udGVudC1ibG9jay1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctdmVydGljYWwtdmFsdWUsICNjb250ZW50LWJsb2NrLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIHNwcmQgKyBcIiBcIiArIGNsciArIFwiIFwiICsgaW5zZXQ7XHJcbiAgICAkKHRocykuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImNvbnRlbnQtYmxvY2stc2hhZG93LXZlcnRpY2FsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LXZlcnRpY2FsLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWJsdXItdmFsdWUsICNjb250ZW50LWJsb2NrLXNoYWRvdy1ibHVyLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIHNwcmQgKyBcIiBcIiArIGNsciArIFwiIFwiICsgaW5zZXQ7XHJcbiAgICAkKHRocykuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcImNvbnRlbnQtYmxvY2stc2hhZG93LWJsdXItdmFsdWVcIikge1xyXG4gICAgICAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctYmx1ci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LXNwcmVhZC12YWx1ZSwgI2NvbnRlbnQtYmxvY2stc2hhZG93LXNwcmVhZC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHNwcmQgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjY29udGVudC1ibG9jay1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICQodGhzKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiY29udGVudC1ibG9jay1zaGFkb3ctc3ByZWFkLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LXNwcmVhZC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctb3BhY2l0eS12YWx1ZSwgI2NvbnRlbnQtYmxvY2stc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjY29udGVudC1ibG9jay1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCh0aGlzKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICQodGhzKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwiY29udGVudC1ibG9jay1zaGFkb3ctb3BhY2l0eS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1vcGFjaXR5LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCh0aGlzKS52YWwoKSwgJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICQodGhzKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctaW5zZXQtdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjY29udGVudC1ibG9jay1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI2NvbnRlbnQtYmxvY2stc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNjb250ZW50LWJsb2NrLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCh0aGlzKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgICQodGhzKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0L3QsNGB0YLRgNC+0LXQuiDRgtC10L3QtdC5Ki9cclxuXHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutCwINCw0L3QuNC80LDRhtC40LgqL1xyXG5cclxuICAkKCcjY29udGVudC1ibG9jay1hbmltYXRpb24tdHlwZS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKSAhPSBcIm5vbmVcIikge1xyXG4gICAgICAkKHRocykuY3NzKCdhbmltYXRpb24tbmFtZScsICQodGhpcykudmFsKCkpO1xyXG4gICAgICAkKHRocykuY3NzKCdhbmltYXRpb24tZGVsYXknLCAkKCcjY29udGVudC1ibG9jay1hbmltYXRpb24tZGVsYXktdmFsdWUnKS52YWwoKSArICdzJyk7XHJcbiAgICAgICQodGhzKS5jc3MoJ2FuaW1hdGlvbi1kdXJhdGlvbicsICQoJyNjb250ZW50LWJsb2NrLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZScpLnZhbCgpICsgJ3MnKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWFuaW1hdGlvbi1kZWxheS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdhbmltYXRpb24tZGVsYXknLCAkKHRoaXMpLnZhbCgpICsgJ3MnKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNjb250ZW50LWJsb2NrLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdhbmltYXRpb24tZHVyYXRpb24nLCAkKHRoaXMpLnZhbCgpICsgJ3MnKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQvdCw0YHRgtGA0L7QtdC6INCw0L3QuNC80LDRhtC40LgqL1xyXG5cclxuXHJcbiAgLy/QmtC+0L3QtdGGINCx0LvQvtC60LBcclxuXHJcbiAgLy8g0L/QvtC60LAg0L3QtSDQt9C90LDRjiDRh9GC0L4g0Y3RgtC+XHJcblxyXG4gIC8vICBpZiAoJCgkdGhpcykuZmlyc3QoKS5oYXNDbGFzcygnaW1hZ2UtbW9kdWxlJykpIHtcclxuICAvLyAgICAkKCcjc2V0dGluZ3MtaW1nJykuc2hvdygpO1xyXG4gIC8vICAgICQoJyNyaWdodFNpZGViYXInKS5jc3Moe1xyXG4gIC8vICAgICAgcmlnaHQ6ICcwcHgnLFxyXG4gIC8vICAgICAgdHJhbnNpdGlvbjogJzAuNHMgYWxsIGVhc2UtaW4nXHJcbiAgLy8gICAgfSkuYWRkQ2xhc3MoJ2FjdGl2YXRlZCcpO1xyXG4gIC8vXHJcbiAgLy8gICAgdmFyIGN1cnJXaWR0aCA9ICR0aGlzLndpZHRoKCk7XHJcbiAgLy8gICAgJCgnI2ltZy13aWR0aCBpbnB1dCcpLnZhbChjdXJyV2lkdGgpO1xyXG4gIC8vXHJcbiAgLy8gICAgJCgnI2ltZy13aWR0aCBpbnB1dCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAvLyAgICAgICR0aGlzLndpZHRoKCQodGhpcykudmFsKCkpO1xyXG4gIC8vICAgIH0pO1xyXG4gIC8vXHJcbiAgLy8gICAgdmFyIGN1cnJIZWlnaHQgPSAkdGhpcy5oZWlnaHQoKTtcclxuICAvLyAgICAkKCcjaW1nLWhlaWdodCBpbnB1dCcpLnZhbChjdXJySGVpZ2h0KTtcclxuICAvL1xyXG4gIC8vICAgICQoJyNpbWctaGVpZ2h0IGlucHV0Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gIC8vICAgICAgJHRoaXMuaGVpZ2h0KCQodGhpcykudmFsKCkpO1xyXG4gIC8vICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAvLyAgICB9KTtcclxuICAvL1xyXG4gIC8vICAgICQoJyNpbWctZmlsZSBpbnB1dFt0eXBlPWZpbGVdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAvLyAgICAgIHZhciBmaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjaW1nLWZpbGUnKS5maWxlc1swXTtcclxuICAvL1xyXG4gIC8vICAgICAgdmFyIHRva2VuID0gJCgnaW5wdXRbbmFtZT1fdG9rZW5dW3R5cGU9aGlkZGVuXScpLnZhbCgpO1xyXG4gIC8vXHJcbiAgLy8gICAgICB2YXIgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgLy8gICAgICBmb3JtX2RhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpO1xyXG4gIC8vICAgICAgZm9ybV9kYXRhLmFwcGVuZCgnX3Rva2VuJywgdG9rZW4pO1xyXG4gIC8vICAgICAgZm9ybV9kYXRhLmFwcGVuZCgnaWQnLCAkKCdpbnB1dFtuYW1lPXRlbXBsYXRlX2lkXScpLnZhbCgpKTtcclxuICAvL1xyXG4gIC8vICAgICAgJC5hamF4KHtcclxuICAvLyAgICAgICAgdXJsOiBcInt7cm91dGUoJ2NsaWVudF9zYXZlX2ltYWdlX3Bvc3QnKX19XCIsXHJcbiAgLy8gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIC8vICAgICAgICBkYXRhOiBmb3JtX2RhdGEsXHJcbiAgLy8gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAvLyAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gIC8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgICAgICAgICQoJHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycsIGUubGluayk7XHJcbiAgLy8gICAgICAgIH1cclxuICAvLyAgICAgIH0pO1xyXG4gIC8vXHJcbiAgLy8gICAgfSk7XHJcbiAgLy8gIH0gZWxzZSB7XHJcbiAgLy8gICAgJCgnI3NldHRpbmdzLWJsJykuc2hvdygpO1xyXG4gIC8vICAgICQoJyNyaWdodFNpZGViYXInKS5jc3Moe1xyXG4gIC8vICAgICAgcmlnaHQ6ICcwcHgnLFxyXG4gIC8vICAgICAgdHJhbnNpdGlvbjogJzAuNHMgYWxsIGVhc2UtaW4nXHJcbiAgLy8gICAgfSkuYWRkQ2xhc3MoJ2FjdGl2YXRlZCcpO1xyXG4gIC8vXHJcbiAgLy8gICAgdmFyIGN1cnJXaWR0aCA9ICR0aGlzLndpZHRoKCk7XHJcbiAgLy8gICAgJCgnI2Jsb2NrLXdpZHRoIGlucHV0JykudmFsKGN1cnJXaWR0aCk7XHJcbiAgLy9cclxuICAvLyAgICAkKCcjYmxvY2std2lkdGggaW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgICAkdGhpcy53aWR0aCgkKHRoaXMpLnZhbCgpKTtcclxuICAvLyAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgLy8gICAgfSk7XHJcbiAgLy8gIH1cclxuXHJcbn0pO1xyXG5cclxuJC5mbi5yZXNpemVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgb2Zmc2V0O1xyXG4gIHZhciByZWxhdGl2ZVg7XHJcbiAgdmFyIGN1cnJIYW5kbGU7XHJcblxyXG4gICQodGhpcykub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjdXJySGFuZGxlID0gJCh0aGlzKTtcclxuXHJcbiAgICAkKCcjbWFpbkFyZWEnKS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgIG9mZnNldCA9IGN1cnJIYW5kbGUucGFyZW50KCkub2Zmc2V0KCk7XHJcbiAgICAgIHJlbGF0aXZlWCA9IChlLnBhZ2VYIC0gb2Zmc2V0LmxlZnQpO1xyXG5cclxuICAgICAgdmFyIGRpbV9jdXJyID0gY3VyckhhbmRsZS5wYXJlbnQoKS5hdHRyKCdjbGFzcycpO1xyXG4gICAgICB2YXIgZGltX2N1cnIgPSBkaW1fY3Vyci5zcGxpdCgnICcpO1xyXG4gICAgICB2YXIgZGltX25leHQgPSBjdXJySGFuZGxlLnBhcmVudCgpLm5leHQoKS5hdHRyKCdjbGFzcycpO1xyXG4gICAgICB2YXIgZGltX25leHQgPSBkaW1fbmV4dC5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgdmFyIGRpbUN1cnJOdW0sIGRpbU5leHROdW07XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpbV9jdXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGRpbV9jdXJyW2ldLmluY2x1ZGVzKCdjb2wtbWQtJykpIHtcclxuICAgICAgICAgIGRpbUN1cnJOdW0gPSBkaW1fY3VycltpXS5zcGxpdCgnLScpWzJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGltX25leHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZGltX25leHRbaV0uaW5jbHVkZXMoJ2NvbC1tZC0nKSkge1xyXG4gICAgICAgICAgZGltTmV4dE51bSA9IGRpbV9uZXh0W2ldLnNwbGl0KCctJylbMl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIHZhciB0ZXRhID0gcGFyc2VJbnQoY3VyckhhbmRsZS5wYXJlbnQoKS5jc3MoJ3BhZGRpbmctbGVmdCcpKSArIHBhcnNlSW50KGN1cnJIYW5kbGUucGFyZW50KCkuY3NzKCdwYWRkaW5nLXJpZ2h0JykpO1xyXG5cclxuICAgICAgdmFyIGRlbHRhID0gKGN1cnJIYW5kbGUucGFyZW50KCkud2lkdGgoKSArIHRldGEpIC0gcmVsYXRpdmVYIC0gJCgnLmhhbmRsZScpLndpZHRoKCkgLyAyO1xyXG4gICAgICB2YXIgZGVsdGFQZXJjZW50YWdlID0gZGVsdGEgLyBjdXJySGFuZGxlLnBhcmVudCgpLnBhcmVudCgpLndpZHRoKCkgKiAxMDA7XHJcblxyXG4gICAgICBpZiAoKGRlbHRhUGVyY2VudGFnZSA+IDcpICYmIChjdXJySGFuZGxlLnBhcmVudCgpLndpZHRoKCkgPiAxMDApKSB7XHJcblxyXG4gICAgICAgIGN1cnJIYW5kbGUucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2NvbC1tZC0nICsgZGltQ3Vyck51bSArICcnKTtcclxuICAgICAgICBjdXJySGFuZGxlLnBhcmVudCgpLmFkZENsYXNzKCdjb2wtbWQtJyArIChkaW1DdXJyTnVtIC0gMSkgKyAnJyk7XHJcbiAgICAgICAgY3VyckhhbmRsZS5wYXJlbnQoKS5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2NvbC1tZC0nICsgZGltTmV4dE51bSArICcnKTtcclxuICAgICAgICBjdXJySGFuZGxlLnBhcmVudCgpLm5leHQoKS5hZGRDbGFzcygnY29sLW1kLScgKyAoKHBhcnNlSW50KShkaW1OZXh0TnVtKSArIDEpICsgJycpO1xyXG4gICAgICB9IGVsc2UgaWYgKChkZWx0YVBlcmNlbnRhZ2UgPCAtNykgJiYgKGN1cnJIYW5kbGUucGFyZW50KCkubmV4dCgpLndpZHRoKCkgPiAxMDApKSB7XHJcbiAgICAgICAgY3VyckhhbmRsZS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnY29sLW1kLScgKyBkaW1DdXJyTnVtICsgJycpO1xyXG4gICAgICAgIGN1cnJIYW5kbGUucGFyZW50KCkuYWRkQ2xhc3MoJ2NvbC1tZC0nICsgKChwYXJzZUludCkoZGltQ3Vyck51bSkgKyAxKSArICcnKTtcclxuICAgICAgICBjdXJySGFuZGxlLnBhcmVudCgpLm5leHQoKS5yZW1vdmVDbGFzcygnY29sLW1kLScgKyBkaW1OZXh0TnVtICsgJycpO1xyXG4gICAgICAgIGN1cnJIYW5kbGUucGFyZW50KCkubmV4dCgpLmFkZENsYXNzKCdjb2wtbWQtJyArICgocGFyc2VJbnQpKGRpbU5leHROdW0pIC0gMSkgKyAnJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuICAkKCdodG1sJykub24oJ21vdXNldXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjbWFpbkFyZWEnKS5vZmYoJ21vdXNlbW92ZScpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxufTtcclxuXHJcbiQoJy5oYW5kbGUnKS5yZXNpemVyKCk7XHJcblxyXG4vKtCf0LXRgNC10LLQvtC0IGhleCDQsiBSR0IgKNCz0LTQtS3RgtC+INGC0L7Rh9C90L4g0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPLCDRg9C20LUg0L3QtSDQv9C+0LzQvdGOKSovXHJcbmZ1bmN0aW9uIGhleFRvUkdCKGhleCwgYWxwaGEpIHtcclxuICB2YXIgciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpLFxyXG4gICAgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpLFxyXG4gICAgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpO1xyXG5cclxuICBpZiAoYWxwaGEpIHtcclxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xyXG4gIH0gZWxzZSBpZiAoYWxwaGEgPT0gMCkge1xyXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBcInJnYihcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiKVwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29udGVudFNlbGVjdG9yU2VjdGlvbigkdGhpcykge1xyXG4gIHZhciBsYXN0RWxlbWVudCA9ICQoJHRoaXMpLnBhcmVudHMoJy5jb250ZW50LXNlbGVjdG9yJykuZmluZCgnPltjbGFzcyo9XCJjb2wtXCJdJykubGFzdCgpO1xyXG4gICQobGFzdEVsZW1lbnQpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImhhbmRsZVwiPjwvZGl2PicpO1xyXG4gICQobGFzdEVsZW1lbnQpLmFmdGVyKCc8ZGl2IGNsYXNzPVwiY29udGVudCBjb2wtbWQtMVwiIGlkPVwiJyArIGdldFJhbmRvbSgpICsgJ1wiPjwvZGl2PicpO1xyXG4gICQoJChsYXN0RWxlbWVudCkuZmluZCgnLmhhbmRsZScpKS5yZXNpemVyKCk7XHJcbiAgJCgkdGhpcykucGFyZW50cygnLmNvbnRlbnQtc2VsZWN0b3InKS5maW5kKCcuY29udGVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgU29ydGFibGUuY3JlYXRlKCQoXCIjXCIgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyBcIlwiKS5nZXQoMCksIHtcclxuICAgICAgZ3JvdXA6IHtcclxuICAgICAgICBuYW1lOiAnY29udGVudC1zZWxlY3RvcicsXHJcbiAgICAgICAgcHV0OiAnY29udGVudC1zZWxlY3RvcidcclxuICAgICAgfSxcclxuICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgYW5pbWF0aW9uOiAxNTAsXHJcbiAgICAgIGdob3N0Q2xhc3M6ICdncmVlbi1iYWNrZ3JvdW5kLWNsYXNzJyxcclxuICAgICAgZmlsdGVyOiAnLnJlc2l6ZXIsIC5oYW5kbGUsIC5ibG9jay1yZXNpemVyJyxcclxuICAgICAgb25DaG9vc2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKCQoZS5pdGVtKS5hdHRyKCdjbGFzcycpID09ICd0ZXh0QmxvY2sgc29ydGFibGUtY2hvc2VuJyAmJiBlLml0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdKSB7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0QmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJChlLml0ZW0pLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgICAgY29uc3QgaWZyYW1lID0gdGV4dEJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJylbMF07XHJcbiAgICAgICAgICBjb25zdCB0ZXh0RWxlbSA9IHRleHRCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dCcpWzBdO1xyXG4gICAgICAgICAgY29udGVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgbGV0IHN0eWxlRWxlbSA9ICdmb250LXNpemU6JyArIGdldENvbXB1dGVkU3R5bGUodGV4dEVsZW0pLmZvbnRTaXplICsgJzsnO1xyXG4gICAgICAgICAgc3R5bGVFbGVtICs9ICdmb250LWZhbWlseTonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkuZm9udEZhbWlseSArICc7JztcclxuICAgICAgICAgIHN0eWxlRWxlbSArPSAnbGluZS1oZWlnaHQ6JyArIGdldENvbXB1dGVkU3R5bGUodGV4dEVsZW0pLmxpbmVIZWlnaHQgKyAnOyc7XHJcbiAgICAgICAgICBzdHlsZUVsZW0gKz0gJ2NvbG9yOicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS5jb2xvciArICc7JztcclxuICAgICAgICAgIHN0eWxlRWxlbSArPSAndGV4dC1zaGFkb3c6JyArIGdldENvbXB1dGVkU3R5bGUodGV4dEVsZW0pLnRleHRTaGFkb3cgKyAnOyc7XHJcbiAgICAgICAgICBzdHlsZSA9ICdib2R5IHtvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOycgKyBzdHlsZUVsZW0gKyAnfSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgJCgnLmhhbmRsZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgJCgnLm1haW4tc2VsZWN0b3InKS5lYWNoKGZ1bmN0aW9uIChpbmQsIGVsKSB7XHJcbiAgICAgICAgICAkKGVsKS5maW5kKCc+IC5jb250ZW50Om5vdCg6bGFzdCknKS5hZGRDbGFzcygnYm9yZGVyLWhvdmVyJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmNvbnRlbnQtc2VsZWN0b3InKS5lYWNoKGZ1bmN0aW9uIChpbmQsIGVsKSB7XHJcbiAgICAgICAgICAkKGVsKS5maW5kKCc+IC5jb250ZW50Om5vdCg6bGFzdCknKS5hZGRDbGFzcygnYm9yZGVyLWhvdmVyLWNvbnRlbnQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgJCgnLmhhbmRsZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJy5ib3JkZXItaG92ZXItY29udGVudCcpLnJlbW92ZUNsYXNzKCdib3JkZXItaG92ZXItY29udGVudCcpO1xyXG4gICAgICAgICQoJy5ib3JkZXItaG92ZXInKS5yZW1vdmVDbGFzcygnYm9yZGVyLWhvdmVyJyk7XHJcbiAgICAgICAgaWYgKCQoZXZ0Lml0ZW0pLmF0dHIoJ2NsYXNzJykgPT0gJ3RleHRCbG9jaycgJiYgZXZ0Lml0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdKSB7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0QmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJChldnQuaXRlbSkuYXR0cignaWQnKSk7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0RWRpdG9yUGFuZWwgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHQtZWRpdG9yLXBhbmVsJylbMF07XHJcbiAgICAgICAgICBjb25zdCBpZnJhbWUgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXTtcclxuICAgICAgICAgIGluaXQoaWZyYW1lLCBjb250ZW50LCBzdHlsZSk7XHJcbiAgICAgICAgICB0ZXh0RWRpdG9yUGFuZWwuc3R5bGUud2lkdGggPSAodGV4dEJsb2NrRWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIDIpICsgJ3B4JztcclxuICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICdweCc7XHJcbiAgICAgICAgICBhZGRGdW5jdGlvbmFsaXR5VG9JZnJhbWUoJChldnQuaXRlbSkuYXR0cignaWQnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDb250ZW50U2VsZWN0b3JTZWN0aW9uKCR0aGlzKSB7XHJcbiAgdmFyICRkZWx0YSA9IDA7XHJcbiAgdmFyIGxhc3RFbGVtZW50ID0gJCgkdGhpcykucGFyZW50cygnLmNvbnRlbnQtc2VsZWN0b3InKS5maW5kKCc+W2NsYXNzKj1cImNvbC1cIl0nKS5sYXN0KCk7XHJcbiAgJCgkKGxhc3RFbGVtZW50KS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJykpLmVhY2goZnVuY3Rpb24gKGluZCwgZWwpIHtcclxuICAgIGlmIChlbC5tYXRjaCgvY29sLVthLXpdKy1bMC05XSsvaSkpIHtcclxuICAgICAgJGRlbHRhID0gZWwuc3BsaXQoJy0nKVsyXTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbiAgdmFyIHByZXZFbGVtZW50ID0gbGFzdEVsZW1lbnQucHJldigpO1xyXG4gIGxhc3RFbGVtZW50LnJlbW92ZSgpO1xyXG4gICQocHJldkVsZW1lbnQpLmZpbmQoJy5oYW5kbGUnKS5yZW1vdmUoKTtcclxuICAkKCQocHJldkVsZW1lbnQpLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKSkuZWFjaChmdW5jdGlvbiAoaW5kLCBlbCkge1xyXG4gICAgaWYgKGVsLm1hdGNoKC9jb2wtW2Etel0rLVswLTldKy9pKSkge1xyXG4gICAgICAkKHByZXZFbGVtZW50KS5yZW1vdmVDbGFzcyhlbCk7XHJcbiAgICAgICQocHJldkVsZW1lbnQpLmFkZENsYXNzKCdjb2wtJyArIGVsLnNwbGl0KCctJylbMV0gKyAnLScgKyAocGFyc2VJbnQoZWwuc3BsaXQoJy0nKVsyXSkgKyBwYXJzZUludCgkZGVsdGEpKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpbmRleE9mTWF4KG1hcykge1xyXG4gIGlmIChtYXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICB2YXIgbWF4ID0gbWFzWzBdO1xyXG4gIHZhciBtYXhJbmRleCA9IDA7XHJcblxyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbWFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobWFzW2ldID4gbWF4KSB7XHJcbiAgICAgIG1heEluZGV4ID0gaTtcclxuICAgICAgbWF4ID0gbWFzW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1heEluZGV4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=