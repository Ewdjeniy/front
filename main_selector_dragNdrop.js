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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/main_selector/main_selector_dragNdrop.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/main_selector/main_selector_dragNdrop.js":
/*!**********************************************************!*\
  !*** ./src/API/main_selector/main_selector_dragNdrop.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var content, style;
  Sortable.create(mainSelector, {
    group: {
      name: 'main-selector',
      pull: 'clone'
    },
    filter: '.resizer, .handle, .block-resizer, .textBlock',
    sort: true,
    animation: 150,
    ghostClass: 'green-background-class',
    onStart: function onStart(e) {
      $('#left-sidebar').hide();
      $('.block-settings').css('display', 'none');
    },
    onEnd: function onEnd(e) {
      $('#left-sidebar').show();

      if (e.target != e.to) {
        switch (e.item.id) {
          case 'main-selector-1':
            {
              var selector1 = '<div id="main_selector' + getRandom() + '" class="row main-selector">' + '<div class="block-settings">' + '<div class="copy">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> <div class="remove">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div><div class="add-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div><div class="main-block-settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-md-12 content" id="content' + getRandom() + '" style="min-height:80px;"></div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div>' + '</div>';
              $(e.item).replaceWith(selector1); //драг н дроп из основного

              var id = $(selector1).find('.content').attr('id');
              Sortable.create($("#" + id + "").get(0), {
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
                    textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
                    init(iframe, content, style);
                    iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
                    addFunctionalityToIframe($(evt.item).attr('id'));
                  }

                  makePreview();
                }
              });
              break;
            }

          case 'main-selector-2':
            {
              var selector2 = '<div id="main_selector' + getRandom() + '" class="row main-selector">' + '<div class="block-settings">' + '<div class="copy">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> <div class="remove">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div><div class="add-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div><div class="main-block-settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-md-6 content" id="content' + getRandom() + '" style="min-height:80px;">' + '<div class="handle"></div> ' + '</div>' + '<div class="col-md-6 content" id="content' + getRandom() + '" style="min-height:80px;"></div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div> ' + '</div>';
              $(e.item).replaceWith(selector2);
              $(selector2).find('.content').each(function () {
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

                    makePreview();
                  }
                });
              });
              break;
            }

          case 'main-selector-3':
            {
              var selector3 = '<div id="main_selector' + getRandom() + '" class="row main-selector">' + '<div class="block-settings">' + '<div class="copy">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> <div class="remove">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div><div class="add-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div><div class="main-block-settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-md-4 content" id="content' + getRandom() + '" style="min-height:80px;">' + '<div class="handle"></div></div>' + '<div class="col-md-4 content" id="content' + getRandom() + '" style="min-height:80px;">' + '<div class="handle"></div></div>' + '<div class="col-md-4 content" id="content' + getRandom() + '" style="min-height:80px;">' + '</div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div> ' + '</div>';
              $(e.item).replaceWith(selector3);
              $(selector3).find('.content').each(function () {
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

                    makePreview();
                  }
                });
              });
              break;
            }

          case 'main-selector-4':
            {
              var selector4 = '<div id="main_selector' + getRandom() + '" class="row main-selector">' + '<div class="block-settings">' + '<div class="copy">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> <div class="remove">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div><div class="add-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div><div class="main-block-settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-md-3 content" id="content' + getRandom() + '" style="min-height:80px;">' + '<div class="handle"></div></div>' + '<div class="col-md-3 content" id="content' + getRandom() + '" style="min-height:80px;">' + '<div class="handle"></div></div>' + '<div class="col-md-3 content" id="content' + getRandom() + '" style="min-height:80px;">' + '<div class="handle"></div></div>' + '<div class="col-md-3 content" id="content' + getRandom() + '" style="min-height:80px;">' + '</div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div> ' + '</div>';
              $(e.item).replaceWith(selector4);
              $(selector4).find('.content').each(function () {
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

                    makePreview();
                  }
                });
              });
              break;
            }
        }

        makePreview();
      }

      $('.handle').resizer();
      $('.resizer').resizer_s();
      $('.block-resizer').block_resizer();
      $('.block-settings').show();
    }
  });

  $.fn.block_resizer = function () {
    var offset;
    var relativeX;
    var currHandle;
    var text_editor_id;
    $(this).on('mousedown', function (e) {
      currHandle = $(this);
      text_editor_id = $(e.target).parents('.text-editor-module').children('.text-editor').find('iframe').attr('id');
      var text_editor_height = $(e.target).parents('.text-editor-module').height();
      $(e.target).parents('.text-editor-module').css('height', text_editor_height + 8);
      $('#' + text_editor_id + '').hide();
      $('html').on('mousemove', function (e) {
        offset = currHandle.parent().offset();
        relativeX = e.pageX - offset.left;
        var teta = parseInt(currHandle.parent().css('padding-left')) + parseInt(currHandle.parent().css('padding-right')) + parseInt(currHandle.parent().css('border-right-width')) + parseInt(currHandle.parent().css('border-left-width'));
        var delta = currHandle.parent().width() + teta - relativeX;
        var deltaPercentage = delta / currHandle.parent().width() * 100;

        if (deltaPercentage > 3 && currHandle.parent().width() > 100) {
          currHandle.parent().css('width', currHandle.parent().width() - 50 + teta + 'px');
        } else if (deltaPercentage < -3 && currHandle.parent().width() > 100) {
          currHandle.parent().css('width', currHandle.parent().width() + 50 + teta + 'px');
        }
      });
    });
    $('html').on('mouseup', function () {
      $('.container').off('mousemove');
      $('#' + text_editor_id + '').show();

      if ($(currHandle).parent().hasClass('main-selector')) {
        $('#main-block-width-value').val($(currHandle).parent().width());
        $('#main-block-width-value-range').val($(currHandle).parent().width());
        makePreview();
      }
    });
  };

  $('.block-resizer').block_resizer();

  $.fn.resizer_s = function () {
    var offset;
    var relativeX;
    var currHandle2;
    $(this).on('mousedown', function () {
      currHandle2 = $(this);
      $('html').on('mousemove', function (e) {
        var total = parseFloat(currHandle2.parent().children('.content').css('padding-bottom'));
        var paddings = parseFloat(currHandle2.parent().css('padding-top')) + parseFloat(currHandle2.parent().css('padding-bottom')) + parseFloat(currHandle2.parent().css('border-top-width')) + parseFloat(currHandle2.parent().css('border-bottom-width'));
        var height = currHandle2.parent().height();
        var topPosition = currHandle2.parent().children('.content').offset();
        var innerHeight = currHandle2.parent().children('.content').height();
        var delta = e.pageY - total - topPosition.top - innerHeight;

        if (delta > 40) {
          currHandle2.parent().css('min-height', currHandle2.parent().height() + paddings + 40 + 'px');
        } else if (delta < -40 && parseInt(currHandle2.parent().css('min-height')) > 88) {
          currHandle2.parent().css('min-height', currHandle2.parent().height() + paddings - 40 + 'px');
        }
      });
    });
    $('html').on('mouseup', function () {
      $('html').off('mousemove');
      makePreview();
    });
  };
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tYWluX3NlbGVjdG9yL21haW5fc2VsZWN0b3JfZHJhZ05kcm9wLmpzIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJzdHlsZSIsIlNvcnRhYmxlIiwiY3JlYXRlIiwibWFpblNlbGVjdG9yIiwiZ3JvdXAiLCJuYW1lIiwicHVsbCIsImZpbHRlciIsInNvcnQiLCJhbmltYXRpb24iLCJnaG9zdENsYXNzIiwib25TdGFydCIsImUiLCIkIiwiaGlkZSIsImNzcyIsIm9uRW5kIiwic2hvdyIsInRhcmdldCIsInRvIiwiaXRlbSIsImlkIiwic2VsZWN0b3IxIiwiZ2V0UmFuZG9tIiwicmVwbGFjZVdpdGgiLCJmaW5kIiwiYXR0ciIsImdldCIsInB1dCIsIm9uQ2hvb3NlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0ZXh0QmxvY2tFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlmcmFtZSIsInRleHRFbGVtIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnRlbnRXaW5kb3ciLCJib2R5IiwiaW5uZXJIVE1MIiwic3R5bGVFbGVtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImxpbmVIZWlnaHQiLCJjb2xvciIsInRleHRTaGFkb3ciLCJldnQiLCJlYWNoIiwiaW5kIiwiZWwiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidGV4dEVkaXRvclBhbmVsIiwid2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpbml0IiwiaGVpZ2h0IiwiYWRkRnVuY3Rpb25hbGl0eVRvSWZyYW1lIiwibWFrZVByZXZpZXciLCJzZWxlY3RvcjIiLCJzZWxlY3RvcjMiLCJzZWxlY3RvcjQiLCJyZXNpemVyIiwicmVzaXplcl9zIiwiYmxvY2tfcmVzaXplciIsImZuIiwib2Zmc2V0IiwicmVsYXRpdmVYIiwiY3VyckhhbmRsZSIsInRleHRfZWRpdG9yX2lkIiwib24iLCJwYXJlbnRzIiwiY2hpbGRyZW4iLCJ0ZXh0X2VkaXRvcl9oZWlnaHQiLCJwYXJlbnQiLCJwYWdlWCIsImxlZnQiLCJ0ZXRhIiwicGFyc2VJbnQiLCJkZWx0YSIsImRlbHRhUGVyY2VudGFnZSIsIm9mZiIsImhhc0NsYXNzIiwidmFsIiwiY3VyckhhbmRsZTIiLCJ0b3RhbCIsInBhcnNlRmxvYXQiLCJwYWRkaW5ncyIsInRvcFBvc2l0aW9uIiwiaW5uZXJIZWlnaHQiLCJwYWdlWSIsInRvcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsWUFBWTtBQUNYOztBQUNBLE1BQUlBLE9BQUosRUFBYUMsS0FBYjtBQUVBQyxVQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLFlBQWhCLEVBQThCO0FBQzVCQyxTQUFLLEVBQUU7QUFDTEMsVUFBSSxFQUFFLGVBREQ7QUFFTEMsVUFBSSxFQUFFO0FBRkQsS0FEcUI7QUFL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QUdwRSxDQUFDLENBQUMrRSxLQUFGLEdBQVVMLEtBQVYsR0FBa0JHLFdBQVcsQ0FBQ0csR0FBOUIsR0FBb0NGLFdBQWhEOztBQUVBLFlBQUlWLEtBQUssR0FBRyxFQUFaLEVBQWdCO0FBQ2RLLHFCQUFXLENBQUNWLE1BQVosR0FBcUI1RCxHQUFyQixDQUF5QixZQUF6QixFQUF1Q3NFLFdBQVcsQ0FBQ1YsTUFBWixHQUFxQmxCLE1BQXJCLEtBQWdDK0IsUUFBaEMsR0FBMkMsRUFBM0MsR0FBZ0QsSUFBdkY7QUFDRCxTQUZELE1BRU8sSUFBSVIsS0FBSyxHQUFHLENBQUMsRUFBVCxJQUFlRCxRQUFRLENBQUNNLFdBQVcsQ0FBQ1YsTUFBWixHQUFxQjVELEdBQXJCLENBQXlCLFlBQXpCLENBQUQsQ0FBUixHQUFtRCxFQUF0RSxFQUEwRTtBQUMvRXNFLHFCQUFXLENBQUNWLE1BQVosR0FBcUI1RCxHQUFyQixDQUF5QixZQUF6QixFQUF1Q3NFLFdBQVcsQ0FBQ1YsTUFBWixHQUFxQmxCLE1BQXJCLEtBQWdDK0IsUUFBaEMsR0FBMkMsRUFBM0MsR0FBZ0QsSUFBdkY7QUFDRDtBQUNGLE9BZEQ7QUFnQkQsS0FwQkQ7QUFzQkEzRSxLQUFDLENBQUMsTUFBRCxDQUFELENBQVUwRCxFQUFWLENBQWEsU0FBYixFQUF3QixZQUFZO0FBQ2xDMUQsT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVcUUsR0FBVixDQUFjLFdBQWQ7QUFDQXZCLGlCQUFXO0FBQ1osS0FIRDtBQUtELEdBakNEO0FBbUNELENBamJELEkiLCJmaWxlIjoibWFpbl9zZWxlY3Rvcl9kcmFnTmRyb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9BUEkvbWFpbl9zZWxlY3Rvci9tYWluX3NlbGVjdG9yX2RyYWdOZHJvcC5qc1wiKTtcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIGxldCBjb250ZW50LCBzdHlsZTtcclxuXHJcbiAgU29ydGFibGUuY3JlYXRlKG1haW5TZWxlY3Rvciwge1xyXG4gICAgZ3JvdXA6IHtcclxuICAgICAgbmFtZTogJ21haW4tc2VsZWN0b3InLFxyXG4gICAgICBwdWxsOiAnY2xvbmUnLFxyXG4gICAgfSxcclxuICAgIGZpbHRlcjogJy5yZXNpemVyLCAuaGFuZGxlLCAuYmxvY2stcmVzaXplciwgLnRleHRCbG9jaycsXHJcbiAgICBzb3J0OiB0cnVlLFxyXG4gICAgYW5pbWF0aW9uOiAxNTAsXHJcbiAgICBnaG9zdENsYXNzOiAnZ3JlZW4tYmFja2dyb3VuZC1jbGFzcycsXHJcbiAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKCcjbGVmdC1zaWRlYmFyJykuaGlkZSgpO1xyXG4gICAgICAkKCcuYmxvY2stc2V0dGluZ3MnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSxcclxuICAgIG9uRW5kOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKCcjbGVmdC1zaWRlYmFyJykuc2hvdygpO1xyXG4gICAgICBpZiAoZS50YXJnZXQgIT0gZS50bykge1xyXG4gICAgICAgIHN3aXRjaCAoZS5pdGVtLmlkKSB7XHJcbiAgICAgICAgICBjYXNlICdtYWluLXNlbGVjdG9yLTEnOiB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RvcjEgPSAnPGRpdiBpZD1cIm1haW5fc2VsZWN0b3InICsgZ2V0UmFuZG9tKCkgKyAnXCIgY2xhc3M9XCJyb3cgbWFpbi1zZWxlY3RvclwiPicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYmxvY2stc2V0dGluZ3NcIj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvcHlcIj4nICtcclxuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWR1cGxpY2F0ZVwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+IDxkaXYgY2xhc3M9XCJyZW1vdmVcIj4nICtcclxuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cImFkZC1ibG9ja1wiPicgK1xyXG4gICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJyZW1vdmUtYmxvY2tcIj4nICtcclxuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1pbnVzXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwibWFpbi1ibG9jay1zZXR0aW5nc1wiPicgK1xyXG4gICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY29nXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY29udGVudFwiIGlkPVwiY29udGVudCcgKyBnZXRSYW5kb20oKSArICdcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6ODBweDtcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImJsb2NrLXJlc2l6ZXJcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInJlc2l6ZXJcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgJChlLml0ZW0pLnJlcGxhY2VXaXRoKHNlbGVjdG9yMSk7XHJcblxyXG4gICAgICAgICAgICAvL9C00YDQsNCzINC9INC00YDQvtC/INC40Lcg0L7RgdC90L7QstC90L7Qs9C+XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICQoc2VsZWN0b3IxKS5maW5kKCcuY29udGVudCcpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICBTb3J0YWJsZS5jcmVhdGUoJChcIiNcIiArIGlkICsgXCJcIikuZ2V0KDApLCB7XHJcbiAgICAgICAgICAgICAgZ3JvdXA6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdjb250ZW50LXNlbGVjdG9yJyxcclxuICAgICAgICAgICAgICAgIHB1dDogJ2NvbnRlbnQtc2VsZWN0b3InXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmaWx0ZXI6ICcucmVzaXplciwgLmhhbmRsZSwgLmJsb2NrLXJlc2l6ZXInLFxyXG4gICAgICAgICAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsXHJcbiAgICAgICAgICAgICAgZ2hvc3RDbGFzczogJ2dyZWVuLWJhY2tncm91bmQtY2xhc3MnLFxyXG4gICAgICAgICAgICAgIG9uQ2hvb3NlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoZS5pdGVtKS5hdHRyKCdjbGFzcycpID09ICd0ZXh0QmxvY2sgc29ydGFibGUtY2hvc2VuJyAmJiBlLml0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKGUuaXRlbSkuYXR0cignaWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlmcmFtZSA9IHRleHRCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RWxlbSA9IHRleHRCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dCcpWzBdO1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBzdHlsZUVsZW0gPSAnZm9udC1zaXplOicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS5mb250U2l6ZSArICc7JztcclxuICAgICAgICAgICAgICAgICAgc3R5bGVFbGVtICs9ICdmb250LWZhbWlseTonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkuZm9udEZhbWlseSArICc7JztcclxuICAgICAgICAgICAgICAgICAgc3R5bGVFbGVtICs9ICdsaW5lLWhlaWdodDonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkubGluZUhlaWdodCArICc7JztcclxuICAgICAgICAgICAgICAgICAgc3R5bGVFbGVtICs9ICdjb2xvcjonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkuY29sb3IgKyAnOyc7XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlRWxlbSArPSAndGV4dC1zaGFkb3c6JyArIGdldENvbXB1dGVkU3R5bGUodGV4dEVsZW0pLnRleHRTaGFkb3cgKyAnOyc7XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlID0gJ2JvZHkge292ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7JyArIHN0eWxlRWxlbSArICd9JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgICQoJy5oYW5kbGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1haW4tc2VsZWN0b3InKS5lYWNoKGZ1bmN0aW9uIChpbmQsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoZWwpLmZpbmQoJz4gLmNvbnRlbnQ6bm90KDpsYXN0KScpLmFkZENsYXNzKCdib3JkZXItaG92ZXInKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnLmNvbnRlbnQtc2VsZWN0b3InKS5lYWNoKGZ1bmN0aW9uIChpbmQsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoZWwpLmZpbmQoJz4gLmNvbnRlbnQ6bm90KDpsYXN0KScpLmFkZENsYXNzKCdib3JkZXItaG92ZXItY29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmhhbmRsZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmJvcmRlci1ob3ZlcicpLnJlbW92ZUNsYXNzKCdib3JkZXItaG92ZXInKTtcclxuICAgICAgICAgICAgICAgICQoJy5ib3JkZXItaG92ZXItY29udGVudCcpLnJlbW92ZUNsYXNzKCdib3JkZXItaG92ZXItY29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoZXZ0Lml0ZW0pLmF0dHIoJ2NsYXNzJykgPT0gJ3RleHRCbG9jaycgJiYgZXZ0Lml0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKGV2dC5pdGVtKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVkaXRvclBhbmVsID0gdGV4dEJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0LWVkaXRvci1wYW5lbCcpWzBdO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBpZnJhbWUgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXTtcclxuICAgICAgICAgICAgICAgICAgdGV4dEVkaXRvclBhbmVsLnN0eWxlLndpZHRoID0gKHRleHRCbG9ja0VsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSAyKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgIGluaXQoaWZyYW1lLCBjb250ZW50LCBzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0lmcmFtZSgkKGV2dC5pdGVtKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXNlICdtYWluLXNlbGVjdG9yLTInOiB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RvcjIgPSAnPGRpdiBpZD1cIm1haW5fc2VsZWN0b3InICsgZ2V0UmFuZG9tKCkgKyAnXCIgY2xhc3M9XCJyb3cgbWFpbi1zZWxlY3RvclwiPicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYmxvY2stc2V0dGluZ3NcIj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvcHlcIj4nICtcclxuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWR1cGxpY2F0ZVwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+IDxkaXYgY2xhc3M9XCJyZW1vdmVcIj4nICtcclxuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cImFkZC1ibG9ja1wiPicgK1xyXG4gICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJyZW1vdmUtYmxvY2tcIj4nICtcclxuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1pbnVzXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwibWFpbi1ibG9jay1zZXR0aW5nc1wiPicgK1xyXG4gICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY29nXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb2wtbWQtNiBjb250ZW50XCIgaWQ9XCJjb250ZW50JyArIGdldFJhbmRvbSgpICsgJ1wiIHN0eWxlPVwibWluLWhlaWdodDo4MHB4O1wiPicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaGFuZGxlXCI+PC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvbC1tZC02IGNvbnRlbnRcIiBpZD1cImNvbnRlbnQnICsgZ2V0UmFuZG9tKCkgKyAnXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjgwcHg7XCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJibG9jay1yZXNpemVyXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJyZXNpemVyXCI+PC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAkKGUuaXRlbSkucmVwbGFjZVdpdGgoc2VsZWN0b3IyKTtcclxuXHJcbiAgICAgICAgICAgICQoc2VsZWN0b3IyKS5maW5kKCcuY29udGVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIFNvcnRhYmxlLmNyZWF0ZSgkKFwiI1wiICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgXCJcIikuZ2V0KDApLCB7XHJcbiAgICAgICAgICAgICAgICBncm91cDoge1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnY29udGVudC1zZWxlY3RvcicsXHJcbiAgICAgICAgICAgICAgICAgIHB1dDogJ2NvbnRlbnQtc2VsZWN0b3InXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiAnLnJlc2l6ZXIsIC5oYW5kbGUsIC5ibG9jay1yZXNpemVyJyxcclxuICAgICAgICAgICAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgICAgICAgICAgIGdob3N0Q2xhc3M6ICdncmVlbi1iYWNrZ3JvdW5kLWNsYXNzJyxcclxuICAgICAgICAgICAgICAgIG9uQ2hvb3NlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoJChlLml0ZW0pLmF0dHIoJ2NsYXNzJykgPT0gJ3RleHRCbG9jayBzb3J0YWJsZS1jaG9zZW4nICYmIGUuaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJylbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJChlLml0ZW0pLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlmcmFtZSA9IHRleHRCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbGVtID0gdGV4dEJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0JylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHlsZUVsZW0gPSAnZm9udC1zaXplOicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS5mb250U2l6ZSArICc7JztcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZUVsZW0gKz0gJ2ZvbnQtZmFtaWx5OicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS5mb250RmFtaWx5ICsgJzsnO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRWxlbSArPSAnbGluZS1oZWlnaHQ6JyArIGdldENvbXB1dGVkU3R5bGUodGV4dEVsZW0pLmxpbmVIZWlnaHQgKyAnOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVFbGVtICs9ICdjb2xvcjonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkuY29sb3IgKyAnOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVFbGVtICs9ICd0ZXh0LXNoYWRvdzonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkudGV4dFNoYWRvdyArICc7JztcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9ICdib2R5IHtvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOycgKyBzdHlsZUVsZW0gKyAnfSc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5oYW5kbGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubWFpbi1zZWxlY3RvcicpLmVhY2goZnVuY3Rpb24gKGluZCwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsKS5maW5kKCc+IC5jb250ZW50Om5vdCg6bGFzdCknKS5hZGRDbGFzcygnYm9yZGVyLWhvdmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuY29udGVudC1zZWxlY3RvcicpLmVhY2goZnVuY3Rpb24gKGluZCwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsKS5maW5kKCc+IC5jb250ZW50Om5vdCg6bGFzdCknKS5hZGRDbGFzcygnYm9yZGVyLWhvdmVyLWNvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICQoJy5oYW5kbGUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLmJvcmRlci1ob3ZlcicpLnJlbW92ZUNsYXNzKCdib3JkZXItaG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLmJvcmRlci1ob3Zlci1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1ob3Zlci1jb250ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICgkKGV2dC5pdGVtKS5hdHRyKCdjbGFzcycpID09ICd0ZXh0QmxvY2snICYmIGV2dC5pdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKGV2dC5pdGVtKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RWRpdG9yUGFuZWwgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHQtZWRpdG9yLXBhbmVsJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWZyYW1lID0gdGV4dEJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdChpZnJhbWUsIGNvbnRlbnQsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0RWRpdG9yUGFuZWwuc3R5bGUud2lkdGggPSAodGV4dEJsb2NrRWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBpZnJhbWUuaGVpZ2h0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0lmcmFtZSgkKGV2dC5pdGVtKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSAnbWFpbi1zZWxlY3Rvci0zJzoge1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0b3IzID0gJzxkaXYgaWQ9XCJtYWluX3NlbGVjdG9yJyArIGdldFJhbmRvbSgpICsgJ1wiIGNsYXNzPVwicm93IG1haW4tc2VsZWN0b3JcIj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImJsb2NrLXNldHRpbmdzXCI+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb3B5XCI+JyArXHJcbiAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1kdXBsaWNhdGVcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgJzwvZGl2PiA8ZGl2IGNsYXNzPVwicmVtb3ZlXCI+JyArXHJcbiAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgJzwvZGl2PjxkaXYgY2xhc3M9XCJhZGQtYmxvY2tcIj4nICtcclxuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVtb3ZlLWJsb2NrXCI+JyArXHJcbiAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1taW51c1wiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cIm1haW4tYmxvY2stc2V0dGluZ3NcIj4nICtcclxuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNvZ1wiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29udGVudFwiIGlkPVwiY29udGVudCcgKyBnZXRSYW5kb20oKSArICdcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6ODBweDtcIj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImhhbmRsZVwiPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29udGVudFwiIGlkPVwiY29udGVudCcgKyBnZXRSYW5kb20oKSArICdcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6ODBweDtcIj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImhhbmRsZVwiPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29udGVudFwiIGlkPVwiY29udGVudCcgKyBnZXRSYW5kb20oKSArICdcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6ODBweDtcIj4nICtcclxuICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJibG9jay1yZXNpemVyXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJyZXNpemVyXCI+PC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAkKGUuaXRlbSkucmVwbGFjZVdpdGgoc2VsZWN0b3IzKTtcclxuICAgICAgICAgICAgJChzZWxlY3RvcjMpLmZpbmQoJy5jb250ZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgU29ydGFibGUuY3JlYXRlKCQoXCIjXCIgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyBcIlwiKS5nZXQoMCksIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb250ZW50LXNlbGVjdG9yJyxcclxuICAgICAgICAgICAgICAgICAgcHV0OiAnY29udGVudC1zZWxlY3RvcidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6ICcucmVzaXplciwgLmhhbmRsZSwgLmJsb2NrLXJlc2l6ZXInLFxyXG4gICAgICAgICAgICAgICAgc29ydDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwLFxyXG4gICAgICAgICAgICAgICAgZ2hvc3RDbGFzczogJ2dyZWVuLWJhY2tncm91bmQtY2xhc3MnLFxyXG4gICAgICAgICAgICAgICAgb25DaG9vc2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICgkKGUuaXRlbSkuYXR0cignY2xhc3MnKSA9PSAndGV4dEJsb2NrIHNvcnRhYmxlLWNob3NlbicgJiYgZS5pdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKGUuaXRlbSkuYXR0cignaWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWZyYW1lID0gdGV4dEJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVsZW0gPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHQnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0eWxlRWxlbSA9ICdmb250LXNpemU6JyArIGdldENvbXB1dGVkU3R5bGUodGV4dEVsZW0pLmZvbnRTaXplICsgJzsnO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRWxlbSArPSAnZm9udC1mYW1pbHk6JyArIGdldENvbXB1dGVkU3R5bGUodGV4dEVsZW0pLmZvbnRGYW1pbHkgKyAnOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVFbGVtICs9ICdsaW5lLWhlaWdodDonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkubGluZUhlaWdodCArICc7JztcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZUVsZW0gKz0gJ2NvbG9yOicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS5jb2xvciArICc7JztcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZUVsZW0gKz0gJ3RleHQtc2hhZG93OicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS50ZXh0U2hhZG93ICsgJzsnO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gJ2JvZHkge292ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7JyArIHN0eWxlRWxlbSArICd9JztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnLmhhbmRsZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5tYWluLXNlbGVjdG9yJykuZWFjaChmdW5jdGlvbiAoaW5kLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoZWwpLmZpbmQoJz4gLmNvbnRlbnQ6bm90KDpsYXN0KScpLmFkZENsYXNzKCdib3JkZXItaG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5jb250ZW50LXNlbGVjdG9yJykuZWFjaChmdW5jdGlvbiAoaW5kLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoZWwpLmZpbmQoJz4gLmNvbnRlbnQ6bm90KDpsYXN0KScpLmFkZENsYXNzKCdib3JkZXItaG92ZXItY29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgJCgnLmhhbmRsZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuYm9yZGVyLWhvdmVyJykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1ob3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuYm9yZGVyLWhvdmVyLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYm9yZGVyLWhvdmVyLWNvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCQoZXZ0Lml0ZW0pLmF0dHIoJ2NsYXNzJykgPT0gJ3RleHRCbG9jaycgJiYgZXZ0Lml0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEJsb2NrRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQoZXZ0Lml0ZW0pLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFZGl0b3JQYW5lbCA9IHRleHRCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dC1lZGl0b3ItcGFuZWwnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZnJhbWUgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBpbml0KGlmcmFtZSwgY29udGVudCwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRFZGl0b3JQYW5lbC5zdHlsZS53aWR0aCA9ICh0ZXh0QmxvY2tFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gMikgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRnVuY3Rpb25hbGl0eVRvSWZyYW1lKCQoZXZ0Lml0ZW0pLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgJ21haW4tc2VsZWN0b3ItNCc6IHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdG9yNCA9ICc8ZGl2IGlkPVwibWFpbl9zZWxlY3RvcicgKyBnZXRSYW5kb20oKSArICdcIiBjbGFzcz1cInJvdyBtYWluLXNlbGVjdG9yXCI+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJibG9jay1zZXR0aW5nc1wiPicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY29weVwiPicgK1xyXG4gICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZHVwbGljYXRlXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj4gPGRpdiBjbGFzcz1cInJlbW92ZVwiPicgK1xyXG4gICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwiYWRkLWJsb2NrXCI+JyArXHJcbiAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInJlbW92ZS1ibG9ja1wiPicgK1xyXG4gICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWludXNcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgJzwvZGl2PjxkaXYgY2xhc3M9XCJtYWluLWJsb2NrLXNldHRpbmdzXCI+JyArXHJcbiAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jb2dcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbnRlbnRcIiBpZD1cImNvbnRlbnQnICsgZ2V0UmFuZG9tKCkgKyAnXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjgwcHg7XCI+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJoYW5kbGVcIj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbnRlbnRcIiBpZD1cImNvbnRlbnQnICsgZ2V0UmFuZG9tKCkgKyAnXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjgwcHg7XCI+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJoYW5kbGVcIj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbnRlbnRcIiBpZD1cImNvbnRlbnQnICsgZ2V0UmFuZG9tKCkgKyAnXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjgwcHg7XCI+JyArXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJoYW5kbGVcIj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbnRlbnRcIiBpZD1cImNvbnRlbnQnICsgZ2V0UmFuZG9tKCkgKyAnXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjgwcHg7XCI+JyArXHJcbiAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYmxvY2stcmVzaXplclwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVzaXplclwiPjwvZGl2PiAnICtcclxuICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgJChlLml0ZW0pLnJlcGxhY2VXaXRoKHNlbGVjdG9yNCk7XHJcbiAgICAgICAgICAgICQoc2VsZWN0b3I0KS5maW5kKCcuY29udGVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIFNvcnRhYmxlLmNyZWF0ZSgkKFwiI1wiICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgXCJcIikuZ2V0KDApLCB7XHJcbiAgICAgICAgICAgICAgICBncm91cDoge1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnY29udGVudC1zZWxlY3RvcicsXHJcbiAgICAgICAgICAgICAgICAgIHB1dDogJ2NvbnRlbnQtc2VsZWN0b3InXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiAnLnJlc2l6ZXIsIC5oYW5kbGUsIC5ibG9jay1yZXNpemVyJyxcclxuICAgICAgICAgICAgICAgIHNvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgICAgICAgICAgIGdob3N0Q2xhc3M6ICdncmVlbi1iYWNrZ3JvdW5kLWNsYXNzJyxcclxuICAgICAgICAgICAgICAgIG9uQ2hvb3NlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoJChlLml0ZW0pLmF0dHIoJ2NsYXNzJykgPT0gJ3RleHRCbG9jayBzb3J0YWJsZS1jaG9zZW4nICYmIGUuaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJylbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJChlLml0ZW0pLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlmcmFtZSA9IHRleHRCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbGVtID0gdGV4dEJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0JylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHlsZUVsZW0gPSAnZm9udC1zaXplOicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS5mb250U2l6ZSArICc7JztcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZUVsZW0gKz0gJ2ZvbnQtZmFtaWx5OicgKyBnZXRDb21wdXRlZFN0eWxlKHRleHRFbGVtKS5mb250RmFtaWx5ICsgJzsnO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRWxlbSArPSAnbGluZS1oZWlnaHQ6JyArIGdldENvbXB1dGVkU3R5bGUodGV4dEVsZW0pLmxpbmVIZWlnaHQgKyAnOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVFbGVtICs9ICdjb2xvcjonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkuY29sb3IgKyAnOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVFbGVtICs9ICd0ZXh0LXNoYWRvdzonICsgZ2V0Q29tcHV0ZWRTdHlsZSh0ZXh0RWxlbSkudGV4dFNoYWRvdyArICc7JztcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9ICdib2R5IHtvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOycgKyBzdHlsZUVsZW0gKyAnfSc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5oYW5kbGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubWFpbi1zZWxlY3RvcicpLmVhY2goZnVuY3Rpb24gKGluZCwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsKS5maW5kKCc+IC5jb250ZW50Om5vdCg6bGFzdCknKS5hZGRDbGFzcygnYm9yZGVyLWhvdmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuY29udGVudC1zZWxlY3RvcicpLmVhY2goZnVuY3Rpb24gKGluZCwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsKS5maW5kKCc+IC5jb250ZW50Om5vdCg6bGFzdCknKS5hZGRDbGFzcygnYm9yZGVyLWhvdmVyLWNvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICQoJy5oYW5kbGUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLmJvcmRlci1ob3ZlcicpLnJlbW92ZUNsYXNzKCdib3JkZXItaG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLmJvcmRlci1ob3Zlci1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1ob3Zlci1jb250ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICgkKGV2dC5pdGVtKS5hdHRyKCdjbGFzcycpID09ICd0ZXh0QmxvY2snICYmIGV2dC5pdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKGV2dC5pdGVtKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RWRpdG9yUGFuZWwgPSB0ZXh0QmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHQtZWRpdG9yLXBhbmVsJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWZyYW1lID0gdGV4dEJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdChpZnJhbWUsIGNvbnRlbnQsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0RWRpdG9yUGFuZWwuc3R5bGUud2lkdGggPSAodGV4dEJsb2NrRWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBpZnJhbWUuaGVpZ2h0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0lmcmFtZSgkKGV2dC5pdGVtKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoJy5oYW5kbGUnKS5yZXNpemVyKCk7XHJcbiAgICAgICQoJy5yZXNpemVyJykucmVzaXplcl9zKCk7XHJcbiAgICAgICQoJy5ibG9jay1yZXNpemVyJykuYmxvY2tfcmVzaXplcigpO1xyXG4gICAgICAkKCcuYmxvY2stc2V0dGluZ3MnKS5zaG93KCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAkLmZuLmJsb2NrX3Jlc2l6ZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIG9mZnNldDtcclxuICAgIHZhciByZWxhdGl2ZVg7XHJcbiAgICB2YXIgY3VyckhhbmRsZTtcclxuICAgIHZhciB0ZXh0X2VkaXRvcl9pZDtcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgY3VyckhhbmRsZSA9ICQodGhpcyk7XHJcblxyXG4gICAgICB0ZXh0X2VkaXRvcl9pZCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy50ZXh0LWVkaXRvci1tb2R1bGUnKS5jaGlsZHJlbignLnRleHQtZWRpdG9yJykuZmluZCgnaWZyYW1lJykuYXR0cignaWQnKTtcclxuXHJcbiAgICAgIHZhciB0ZXh0X2VkaXRvcl9oZWlnaHQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcudGV4dC1lZGl0b3ItbW9kdWxlJykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAkKGUudGFyZ2V0KS5wYXJlbnRzKCcudGV4dC1lZGl0b3ItbW9kdWxlJykuY3NzKCdoZWlnaHQnLCB0ZXh0X2VkaXRvcl9oZWlnaHQgKyA4KTtcclxuXHJcbiAgICAgICQoJyMnICsgdGV4dF9lZGl0b3JfaWQgKyAnJykuaGlkZSgpO1xyXG5cclxuICAgICAgJCgnaHRtbCcpLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICBvZmZzZXQgPSBjdXJySGFuZGxlLnBhcmVudCgpLm9mZnNldCgpO1xyXG4gICAgICAgIHJlbGF0aXZlWCA9IChlLnBhZ2VYIC0gb2Zmc2V0LmxlZnQpO1xyXG5cclxuICAgICAgICB2YXIgdGV0YSA9IHBhcnNlSW50KGN1cnJIYW5kbGUucGFyZW50KCkuY3NzKCdwYWRkaW5nLWxlZnQnKSkgKyBwYXJzZUludChjdXJySGFuZGxlLnBhcmVudCgpLmNzcygncGFkZGluZy1yaWdodCcpKSArXHJcbiAgICAgICAgICBwYXJzZUludChjdXJySGFuZGxlLnBhcmVudCgpLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJykpICsgcGFyc2VJbnQoY3VyckhhbmRsZS5wYXJlbnQoKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykpO1xyXG5cclxuICAgICAgICB2YXIgZGVsdGEgPSAoY3VyckhhbmRsZS5wYXJlbnQoKS53aWR0aCgpICsgdGV0YSkgLSByZWxhdGl2ZVg7XHJcbiAgICAgICAgdmFyIGRlbHRhUGVyY2VudGFnZSA9IGRlbHRhIC8gY3VyckhhbmRsZS5wYXJlbnQoKS53aWR0aCgpICogMTAwO1xyXG5cclxuICAgICAgICBpZiAoKGRlbHRhUGVyY2VudGFnZSA+IDMpICYmIChjdXJySGFuZGxlLnBhcmVudCgpLndpZHRoKCkgPiAxMDApKSB7XHJcbiAgICAgICAgICBjdXJySGFuZGxlLnBhcmVudCgpLmNzcygnd2lkdGgnLCBjdXJySGFuZGxlLnBhcmVudCgpLndpZHRoKCkgLSA1MCArIHRldGEgKyAncHgnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKChkZWx0YVBlcmNlbnRhZ2UgPCAtMykgJiYgKGN1cnJIYW5kbGUucGFyZW50KCkud2lkdGgoKSA+IDEwMCkpIHtcclxuICAgICAgICAgIGN1cnJIYW5kbGUucGFyZW50KCkuY3NzKCd3aWR0aCcsIGN1cnJIYW5kbGUucGFyZW50KCkud2lkdGgoKSArIDUwICsgdGV0YSArICdweCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG4gICAgJCgnaHRtbCcpLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKCcuY29udGFpbmVyJykub2ZmKCdtb3VzZW1vdmUnKTtcclxuICAgICAgJCgnIycgKyB0ZXh0X2VkaXRvcl9pZCArICcnKS5zaG93KCk7XHJcbiAgICAgIGlmICgkKGN1cnJIYW5kbGUpLnBhcmVudCgpLmhhc0NsYXNzKCdtYWluLXNlbGVjdG9yJykpIHtcclxuICAgICAgICAkKCcjbWFpbi1ibG9jay13aWR0aC12YWx1ZScpLnZhbCgkKGN1cnJIYW5kbGUpLnBhcmVudCgpLndpZHRoKCkpO1xyXG4gICAgICAgICQoJyNtYWluLWJsb2NrLXdpZHRoLXZhbHVlLXJhbmdlJykudmFsKCQoY3VyckhhbmRsZSkucGFyZW50KCkud2lkdGgoKSk7XHJcbiAgICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJCgnLmJsb2NrLXJlc2l6ZXInKS5ibG9ja19yZXNpemVyKCk7XHJcblxyXG4gICQuZm4ucmVzaXplcl9zID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBvZmZzZXQ7XHJcbiAgICB2YXIgcmVsYXRpdmVYO1xyXG4gICAgdmFyIGN1cnJIYW5kbGUyO1xyXG5cclxuICAgICQodGhpcykub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgIGN1cnJIYW5kbGUyID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICQoJ2h0bWwnKS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdG90YWwgPSBwYXJzZUZsb2F0KGN1cnJIYW5kbGUyLnBhcmVudCgpLmNoaWxkcmVuKCcuY29udGVudCcpLmNzcygncGFkZGluZy1ib3R0b20nKSk7XHJcbiAgICAgICAgdmFyIHBhZGRpbmdzID0gcGFyc2VGbG9hdChjdXJySGFuZGxlMi5wYXJlbnQoKS5jc3MoJ3BhZGRpbmctdG9wJykpICsgcGFyc2VGbG9hdChjdXJySGFuZGxlMi5wYXJlbnQoKS5jc3MoJ3BhZGRpbmctYm90dG9tJykpICtcclxuICAgICAgICAgIHBhcnNlRmxvYXQoY3VyckhhbmRsZTIucGFyZW50KCkuY3NzKCdib3JkZXItdG9wLXdpZHRoJykpICsgcGFyc2VGbG9hdChjdXJySGFuZGxlMi5wYXJlbnQoKS5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnKSk7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IGN1cnJIYW5kbGUyLnBhcmVudCgpLmhlaWdodCgpO1xyXG4gICAgICAgIHZhciB0b3BQb3NpdGlvbiA9IGN1cnJIYW5kbGUyLnBhcmVudCgpLmNoaWxkcmVuKCcuY29udGVudCcpLm9mZnNldCgpO1xyXG4gICAgICAgIHZhciBpbm5lckhlaWdodCA9IGN1cnJIYW5kbGUyLnBhcmVudCgpLmNoaWxkcmVuKCcuY29udGVudCcpLmhlaWdodCgpO1xyXG4gICAgICAgIHZhciBkZWx0YSA9IGUucGFnZVkgLSB0b3RhbCAtIHRvcFBvc2l0aW9uLnRvcCAtIGlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoZGVsdGEgPiA0MCkge1xyXG4gICAgICAgICAgY3VyckhhbmRsZTIucGFyZW50KCkuY3NzKCdtaW4taGVpZ2h0JywgY3VyckhhbmRsZTIucGFyZW50KCkuaGVpZ2h0KCkgKyBwYWRkaW5ncyArIDQwICsgJ3B4Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkZWx0YSA8IC00MCAmJiBwYXJzZUludChjdXJySGFuZGxlMi5wYXJlbnQoKS5jc3MoJ21pbi1oZWlnaHQnKSkgPiA4OCkge1xyXG4gICAgICAgICAgY3VyckhhbmRsZTIucGFyZW50KCkuY3NzKCdtaW4taGVpZ2h0JywgY3VyckhhbmRsZTIucGFyZW50KCkuaGVpZ2h0KCkgKyBwYWRkaW5ncyAtIDQwICsgJ3B4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdodG1sJykub24oJ21vdXNldXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoJ2h0bWwnKS5vZmYoJ21vdXNlbW92ZScpO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gIH07XHJcblxyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9