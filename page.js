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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/page/page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/page/page.js":
/*!******************************!*\
  !*** ./src/API/page/page.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

previewDigital.onclick = function () {
  makePreview();
}; //<!--Пункты меню с выбором селекторов-->


$('#leftSidebar .main-selectors').on('click', function () {
  $('#elements').slideUp();
  $('#mainSelector').slideDown();
});
$('#leftSidebar .content-selectors').on('click', function () {
  $('#elements').slideUp();
  $('#contentSelector').slideDown();
});
$('#leftSidebar .modules').on('click', function () {
  $('#elements').slideUp();
  $('#Modules').slideDown();
});
$('#leftSidebar .ls-back-btn').on('click', function () {
  $(this).parent().slideUp();
  $('#elements').slideDown();
});
/*Появление и скрытие левой панели*/

$('#leftSidebar .hide-panel span').on('click', function () {
  if ($('#leftSidebar .hide-panel span').hasClass('glyphicon-arrow-left')) {
    $('#leftSidebar .ls-center-area').hide();
    $('#leftSidebar').css({
      width: '45px',
      transition: '1s all ease'
    });
    $('#leftSidebar .hide-panel span').removeClass('glyphicon-arrow-left').addClass('glyphicon-arrow-right');
  } else if ($('#leftSidebar .hide-panel span').hasClass('glyphicon-arrow-right')) {
    $('#leftSidebar').css('width', '300px');
    $('#leftSidebar .ls-center-area').show();
    $('#leftSidebar .hide-panel span').removeClass('glyphicon-arrow-right').addClass('glyphicon-arrow-left');
  }
});
$('#leftSidebar .main-settings span').on('click', function () {
  $('#rightSidebar > div').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#settings-mn').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');
});
$('#page-width input').val($('#mainArea').width());
$('#page-width input').on('input', function () {
  $('#mainArea').width($(this).val());
  makePreview();
});
$('#rightSidebar .close-rs').on('click', function () {
  $('#rightSidebar').css({
    right: '-400px',
    transition: '0.4s all ease-in'
  }).removeClass('activated');
  $('#rightSidebar > div').hide();
});
$('#videolink, #video_loop, #video_unmute').on('change', function () {
  if ($('#videolink').val().indexOf(".mp4") != -1 || $('#videolink').val().indexOf(".avi") != -1) {
    setAnotherBackgroundVideo($(this).val());
  } else if ($('#videolink').val().indexOf("youtube.com") != -1 || $('#videolink').val().indexOf("youtu.be") != -1) {
    var link;

    if ($('#videolink').val().indexOf("watch?v=") != -1) {
      link = $('#videolink').val().split("watch?v=")[1];
    } else if ($('#videolink').val().indexOf("embed") != -1) {
      link = $('#videolink').val().split("embed/")[1];
    } else {
      link = $('#videolink').val().split("youtu.be/")[1];
    }

    params = [];
    params['loop'] = $('#video_loop:checked').val() == '1' ? 1 : 0;
    params['mute'] = $('#video_unmute:checked').val() == '1' ? 0 : 1;
    setYoutubeBackgroundVideo(link, params);
  } else {
    $('#backgroundVideo > *').remove();
  }

  makePreview();
});
Sortable.create(mainArea, {
  group: {
    name: 'main',
    put: 'main-selector'
  },
  draggable: '.main-selector',
  filter: '.resizer, .handle, .block-resizer',
  ghostClass: 'main-selector-ghostClass',
  onStart: function onStart(evt) {
    jQuery('.content').css('display', 'none');
    $('.block-settings').css('display', 'none');
    $(evt.item).css('opacity', '0.3');
  },
  onEnd: function onEnd(evt) {
    jQuery('.content').css('display', 'flex');
    $('.block-settings').show();
    $(evt.item).css('opacity', '1');
    makePreview();
  }
});

function setYoutubeBackgroundVideo(link, params) {
  $('#backgroundVideo > *').remove(); //var teta = 'https://www.youtube.com/embed/5tvGJsen9mo?controls=0&autoplay=1&mute=1&loop=1';

  var p = "?autoplay=1&controls=0&loop=" + params['loop'] + "&mute=" + params['mute'];
  console.log(p);
  link = 'https://www.youtube.com/embed/' + link + p;
  var videoblock = '<div class="video-background">\
                             <div class="video-foreground">\
                                    <iframe width="560" height="315" src="' + link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
                             </div>\
                          </div>';
  $('#backgroundVideo').append(videoblock);
}

function setAnotherBackgroundVideo(link, params) {
  $('#backgroundVideo > *').remove(); //var videoblock = '<video width="100%" height="100%" autoplay muted loop src="' + link + '"></video>';

  var videoblock = '<div class="video-background">\
                             <div class="video-foreground">\
                             <video width="100%" height="100%" autoplay muted loop src="' + link + '"></video>\
                             </div>\
                          </div>';
  $('#backgroundVideo').append(videoblock);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9wYWdlL3BhZ2UuanMiXSwibmFtZXMiOlsicHJldmlld0RpZ2l0YWwiLCJvbmNsaWNrIiwibWFrZVByZXZpZXciLCIkIiwib24iLCJzbGlkZVVwIiwic2xpZGVEb3duIiwicGFyZW50IiwiaGFzQ2xhc3MiLCJoaWRlIiwiY3NzIiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNob3ciLCJyaWdodCIsInZhbCIsImluZGV4T2YiLCJzZXRBbm90aGVyQmFja2dyb3VuZFZpZGVvIiwibGluayIsInNwbGl0IiwicGFyYW1zIiwic2V0WW91dHViZUJhY2tncm91bmRWaWRlbyIsInJlbW92ZSIsIlNvcnRhYmxlIiwiY3JlYXRlIiwibWFpbkFyZWEiLCJncm91cCIsIm5hbWUiLCJwdXQiLCJkcmFnZ2FibGUiLCJmaWx0ZXIiLCJnaG9zdENsYXNzIiwib25TdGFydCIsImV2dCIsImpRdWVyeSIsIml0ZW0iLCJvbkVuZCIsInAiLCJjb25zb2xlIiwibG9nIiwidmlkZW9ibG9jayIsImFwcGVuZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFD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LGlCQUFELENBQUQsQ0FBcUJZLElBQXJCO0FBQ0FaLEtBQUMsQ0FBQ2dDLEdBQUcsQ0FBQ0UsSUFBTCxDQUFELENBQVkzQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCLEdBQTNCO0FBQ0FSLGVBQVc7QUFDWjtBQWxCdUIsQ0FBMUI7O0FBc0JBLFNBQVNxQix5QkFBVCxDQUFtQ0gsSUFBbkMsRUFBeUNFLE1BQXpDLEVBQWlEO0FBQy9DbkIsR0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJxQixNQUExQixHQUQrQyxDQUcvQzs7QUFFQSxNQUFJZSxDQUFDLEdBQUcsaUNBQWlDakIsTUFBTSxDQUFDLE1BQUQsQ0FBdkMsR0FBa0QsUUFBbEQsR0FBNkRBLE1BQU0sQ0FBQyxNQUFELENBQTNFO0FBRUFrQixTQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUdBbkIsTUFBSSxHQUFHLG1DQUFtQ0EsSUFBbkMsR0FBMENtQixDQUFqRDtBQUdBLE1BQUlHLFVBQVUsR0FBRzs7MkVBQUEsR0FFMkR0QixJQUYzRCxHQUVrRTs7aUNBRm5GO0FBTUFqQixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQndDLE1BQXRCLENBQTZCRCxVQUE3QjtBQUNEOztBQUVELFNBQVN2Qix5QkFBVCxDQUFtQ0MsSUFBbkMsRUFBeUNFLE1BQXpDLEVBQWlEO0FBQy9DbkIsR0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJxQixNQUExQixHQUQrQyxDQUUvQzs7QUFDQSxNQUFJa0IsVUFBVSxHQUFHOzt5RkFBQSxHQUV5RXRCLElBRnpFLEdBRWdGOztpQ0FGakc7QUFLQWpCLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCd0MsTUFBdEIsQ0FBNkJELFVBQTdCO0FBQ0QsQyIsImZpbGUiOiJwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvQVBJL3BhZ2UvcGFnZS5qc1wiKTtcbiIsInByZXZpZXdEaWdpdGFsLm9uY2xpY2sgPSBmdW5jdGlvbigpIHttYWtlUHJldmlldygpO31cclxuXHJcbi8vPCEtLdCf0YPQvdC60YLRiyDQvNC10L3RjiDRgSDQstGL0LHQvtGA0L7QvCDRgdC10LvQtdC60YLQvtGA0L7Qsi0tPlxyXG4kKCcjbGVmdFNpZGViYXIgLm1haW4tc2VsZWN0b3JzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICQoJyNlbGVtZW50cycpLnNsaWRlVXAoKTtcclxuICAkKCcjbWFpblNlbGVjdG9yJykuc2xpZGVEb3duKCk7XHJcbn0pO1xyXG5cclxuJCgnI2xlZnRTaWRlYmFyIC5jb250ZW50LXNlbGVjdG9ycycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcjZWxlbWVudHMnKS5zbGlkZVVwKCk7XHJcbiAgJCgnI2NvbnRlbnRTZWxlY3RvcicpLnNsaWRlRG93bigpO1xyXG59KTtcclxuXHJcbiQoJyNsZWZ0U2lkZWJhciAubW9kdWxlcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcjZWxlbWVudHMnKS5zbGlkZVVwKCk7XHJcbiAgJCgnI01vZHVsZXMnKS5zbGlkZURvd24oKTtcclxufSk7XHJcblxyXG4kKCcjbGVmdFNpZGViYXIgLmxzLWJhY2stYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICQodGhpcykucGFyZW50KCkuc2xpZGVVcCgpO1xyXG4gICQoJyNlbGVtZW50cycpLnNsaWRlRG93bigpO1xyXG59KTtcclxuXHJcbi8q0J/QvtGP0LLQu9C10L3QuNC1INC4INGB0LrRgNGL0YLQuNC1INC70LXQstC+0Lkg0L/QsNC90LXQu9C4Ki9cclxuJCgnI2xlZnRTaWRlYmFyIC5oaWRlLXBhbmVsIHNwYW4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCQoJyNsZWZ0U2lkZWJhciAuaGlkZS1wYW5lbCBzcGFuJykuaGFzQ2xhc3MoJ2dseXBoaWNvbi1hcnJvdy1sZWZ0JykpIHtcclxuICAgICQoJyNsZWZ0U2lkZWJhciAubHMtY2VudGVyLWFyZWEnKS5oaWRlKCk7XHJcbiAgICAkKCcjbGVmdFNpZGViYXInKS5jc3Moe1xyXG4gICAgICB3aWR0aDogJzQ1cHgnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnMXMgYWxsIGVhc2UnXHJcbiAgICB9KTtcclxuICAgICQoJyNsZWZ0U2lkZWJhciAuaGlkZS1wYW5lbCBzcGFuJykucmVtb3ZlQ2xhc3MoJ2dseXBoaWNvbi1hcnJvdy1sZWZ0JykuYWRkQ2xhc3MoJ2dseXBoaWNvbi1hcnJvdy1yaWdodCcpO1xyXG4gIH0gZWxzZSBpZiAoJCgnI2xlZnRTaWRlYmFyIC5oaWRlLXBhbmVsIHNwYW4nKS5oYXNDbGFzcygnZ2x5cGhpY29uLWFycm93LXJpZ2h0JykpIHtcclxuICAgICQoJyNsZWZ0U2lkZWJhcicpLmNzcygnd2lkdGgnLCAnMzAwcHgnKTtcclxuICAgICQoJyNsZWZ0U2lkZWJhciAubHMtY2VudGVyLWFyZWEnKS5zaG93KCk7XHJcbiAgICAkKCcjbGVmdFNpZGViYXIgLmhpZGUtcGFuZWwgc3BhbicpLnJlbW92ZUNsYXNzKCdnbHlwaGljb24tYXJyb3ctcmlnaHQnKS5hZGRDbGFzcygnZ2x5cGhpY29uLWFycm93LWxlZnQnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJCgnI2xlZnRTaWRlYmFyIC5tYWluLXNldHRpbmdzIHNwYW4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCgnI3JpZ2h0U2lkZWJhciA+IGRpdicpLmhpZGUoKTtcclxuICAkKCcjbWFpbi1ibG9jay1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjY29udGVudC1ibG9jay1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjaW1hZ2Utc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3ZpZGVvLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyN0ZXh0LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNidXR0b24tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2Zvcm0tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3N1YnNjcmliZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGluZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGlzdC1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjc2V0dGluZ3MtbW4nKS5zaG93KCk7XHJcbiAgJCgnI3JpZ2h0U2lkZWJhcicpLmNzcyh7XHJcbiAgICByaWdodDogJzBweCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnMC40cyBhbGwgZWFzZS1pbidcclxuICB9KS5hZGRDbGFzcygnYWN0aXZhdGVkJyk7XHJcblxyXG59KTtcclxuXHJcbiQoJyNwYWdlLXdpZHRoIGlucHV0JykudmFsKCQoJyNtYWluQXJlYScpLndpZHRoKCkpO1xyXG4kKCcjcGFnZS13aWR0aCBpbnB1dCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcjbWFpbkFyZWEnKS53aWR0aCgkKHRoaXMpLnZhbCgpKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbiQoJyNyaWdodFNpZGViYXIgLmNsb3NlLXJzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICQoJyNyaWdodFNpZGViYXInKS5jc3Moe1xyXG4gICAgcmlnaHQ6ICctNDAwcHgnLFxyXG4gICAgdHJhbnNpdGlvbjogJzAuNHMgYWxsIGVhc2UtaW4nXHJcbiAgfSkucmVtb3ZlQ2xhc3MoJ2FjdGl2YXRlZCcpO1xyXG4gICQoJyNyaWdodFNpZGViYXIgPiBkaXYnKS5oaWRlKCk7XHJcbn0pO1xyXG5cclxuJCgnI3ZpZGVvbGluaywgI3ZpZGVvX2xvb3AsICN2aWRlb191bm11dGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gIGlmICgkKCcjdmlkZW9saW5rJykudmFsKCkuaW5kZXhPZihcIi5tcDRcIikgIT0gLTEgfHwgJCgnI3ZpZGVvbGluaycpLnZhbCgpLmluZGV4T2YoXCIuYXZpXCIpICE9IC0xKSB7XHJcbiAgICBzZXRBbm90aGVyQmFja2dyb3VuZFZpZGVvKCQodGhpcykudmFsKCkpO1xyXG4gIH0gZWxzZSBpZiAoJCgnI3ZpZGVvbGluaycpLnZhbCgpLmluZGV4T2YoXCJ5b3V0dWJlLmNvbVwiKSAhPSAtMSB8fCAkKCcjdmlkZW9saW5rJykudmFsKCkuaW5kZXhPZihcInlvdXR1LmJlXCIpICE9IC0xKSB7XHJcblxyXG4gICAgdmFyIGxpbms7XHJcblxyXG4gICAgaWYgKCQoJyN2aWRlb2xpbmsnKS52YWwoKS5pbmRleE9mKFwid2F0Y2g/dj1cIikgIT0gLTEpIHtcclxuICAgICAgbGluayA9ICQoJyN2aWRlb2xpbmsnKS52YWwoKS5zcGxpdChcIndhdGNoP3Y9XCIpWzFdO1xyXG4gICAgfSBlbHNlIGlmICgkKCcjdmlkZW9saW5rJykudmFsKCkuaW5kZXhPZihcImVtYmVkXCIpICE9IC0xKSB7XHJcbiAgICAgIGxpbmsgPSAkKCcjdmlkZW9saW5rJykudmFsKCkuc3BsaXQoXCJlbWJlZC9cIilbMV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsaW5rID0gJCgnI3ZpZGVvbGluaycpLnZhbCgpLnNwbGl0KFwieW91dHUuYmUvXCIpWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmFtcyA9IFtdO1xyXG4gICAgcGFyYW1zWydsb29wJ10gPSAkKCcjdmlkZW9fbG9vcDpjaGVja2VkJykudmFsKCkgPT0gJzEnID8gMSA6IDA7XHJcbiAgICBwYXJhbXNbJ211dGUnXSA9ICQoJyN2aWRlb191bm11dGU6Y2hlY2tlZCcpLnZhbCgpID09ICcxJyA/IDAgOiAxO1xyXG5cclxuICAgIHNldFlvdXR1YmVCYWNrZ3JvdW5kVmlkZW8obGluaywgcGFyYW1zKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnI2JhY2tncm91bmRWaWRlbyA+IConKS5yZW1vdmUoKTtcclxuICB9XHJcbiAgbWFrZVByZXZpZXcoKTtcclxufSk7XHJcblxyXG5Tb3J0YWJsZS5jcmVhdGUobWFpbkFyZWEsIHtcclxuICBncm91cDoge1xyXG4gICAgbmFtZTogJ21haW4nLFxyXG4gICAgcHV0OiAnbWFpbi1zZWxlY3RvcidcclxuICB9LFxyXG4gIGRyYWdnYWJsZTogJy5tYWluLXNlbGVjdG9yJyxcclxuICBmaWx0ZXI6ICcucmVzaXplciwgLmhhbmRsZSwgLmJsb2NrLXJlc2l6ZXInLFxyXG4gIGdob3N0Q2xhc3M6ICdtYWluLXNlbGVjdG9yLWdob3N0Q2xhc3MnLFxyXG4gIG9uU3RhcnQ6IGZ1bmN0aW9uIChldnQpIHtcclxuICAgIGpRdWVyeSgnLmNvbnRlbnQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgJCgnLmJsb2NrLXNldHRpbmdzJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICQoZXZ0Lml0ZW0pLmNzcygnb3BhY2l0eScsICcwLjMnKTtcclxuICB9LFxyXG4gIG9uRW5kOiBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICBqUXVlcnkoJy5jb250ZW50JykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcclxuICAgICQoJy5ibG9jay1zZXR0aW5ncycpLnNob3coKTtcclxuICAgICQoZXZ0Lml0ZW0pLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0WW91dHViZUJhY2tncm91bmRWaWRlbyhsaW5rLCBwYXJhbXMpIHtcclxuICAkKCcjYmFja2dyb3VuZFZpZGVvID4gKicpLnJlbW92ZSgpO1xyXG5cclxuICAvL3ZhciB0ZXRhID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzV0dkdKc2VuOW1vP2NvbnRyb2xzPTAmYXV0b3BsYXk9MSZtdXRlPTEmbG9vcD0xJztcclxuXHJcbiAgdmFyIHAgPSBcIj9hdXRvcGxheT0xJmNvbnRyb2xzPTAmbG9vcD1cIiArIHBhcmFtc1snbG9vcCddICsgXCImbXV0ZT1cIiArIHBhcmFtc1snbXV0ZSddO1xyXG5cclxuICBjb25zb2xlLmxvZyhwKTtcclxuXHJcblxyXG4gIGxpbmsgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIGxpbmsgKyBwO1xyXG5cclxuXHJcbiAgdmFyIHZpZGVvYmxvY2sgPSAnPGRpdiBjbGFzcz1cInZpZGVvLWJhY2tncm91bmRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1mb3JlZ3JvdW5kXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cIicgKyBsaW5rICsgJ1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcblxyXG4gICQoJyNiYWNrZ3JvdW5kVmlkZW8nKS5hcHBlbmQodmlkZW9ibG9jayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFub3RoZXJCYWNrZ3JvdW5kVmlkZW8obGluaywgcGFyYW1zKSB7XHJcbiAgJCgnI2JhY2tncm91bmRWaWRlbyA+IConKS5yZW1vdmUoKTtcclxuICAvL3ZhciB2aWRlb2Jsb2NrID0gJzx2aWRlbyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgYXV0b3BsYXkgbXV0ZWQgbG9vcCBzcmM9XCInICsgbGluayArICdcIj48L3ZpZGVvPic7XHJcbiAgdmFyIHZpZGVvYmxvY2sgPSAnPGRpdiBjbGFzcz1cInZpZGVvLWJhY2tncm91bmRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1mb3JlZ3JvdW5kXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGF1dG9wbGF5IG11dGVkIGxvb3Agc3JjPVwiJyArIGxpbmsgKyAnXCI+PC92aWRlbz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAkKCcjYmFja2dyb3VuZFZpZGVvJykuYXBwZW5kKHZpZGVvYmxvY2spO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=