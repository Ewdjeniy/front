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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/modules/video/videoSettings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/modules/video/videoSettings.js":
/*!************************************************!*\
  !*** ./src/API/modules/video/videoSettings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('#mainArea').on('click', '.copyVideo', function () {
  var imgBlockId = $(this).parents('.videoBlock').attr('id');
  var imgBlockElem = document.getElementById(imgBlockId);
  var clonId = 'video' + getRandom();
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
var videoPlayerSrc = null;
var content = null;
var imgBlockElem = null;
var imgElem = null;
var imgWrapperElem = null;
var proportion = null;
var imgWrapper = null;
var resizerY_Elem = null;
var resizerXY_Elem = null;
var iframe = null;
var iframeWrapper = null;
var timoutCheckBox = null;
$('#mainArea').on('click', '.videoSet', function (e) {
  ths = $(this).parents('.videoBlock');
  content = document.getElementById($(this).parents('.content').attr('id'));
  imgBlockElem = document.getElementById(ths.attr('id'));
  imgElem = imgBlockElem.getElementsByClassName('img')[0];
  imgWrapperElem = imgBlockElem.getElementsByClassName('imageWrapper')[0];
  proportion = imgBlockElem.getElementsByClassName('imgProportion')[0];
  imgWrapper = imgBlockElem.getElementsByClassName('border')[0];
  resizerY_Elem = imgBlockElem.getElementsByClassName('resizerY')[0];
  resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerXY')[0];
  iframeWrapper = imgWrapper.getElementsByClassName('iframeWrapper')[0];
  iframe = iframeWrapper.getElementsByTagName('iframe')[0];
  timoutCheckBox = document.getElementById('video-display-none-value'); //Появление правой панели, инициализация инпутов.

  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#video-border-style').off();
  $('#video-border-left-style').off();
  $('#video-border-right-style').off();
  $('#video-border-top-style-value').off();
  $('#video-border-bottom-style').off();
  $('#video-animation-type-value').off();

  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#video-timeout-hour-value').val(h);
    $('#video-timeout-minute-value').val(m);
    $('#video-timeout-second-value').val(s);
    $('#video-display-none-value').prop('checked', true);
  } else {
    $('#video-timeout-hour-value').val(0);
    $('#video-timeout-minute-value').val(0);
    $('#video-timeout-second-value').val(0);
  }

  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#video-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  (function () {
    document.getElementById('videoBorderRadioEvery').onclick = function () {
      document.getElementById('videoBorderAll').style.display = 'none';
      document.getElementById('videoBorderEvery').style.display = 'block';
    };

    document.getElementById('videoBorderRadioAll').onclick = function () {
      document.getElementById('videoBorderAll').style.display = 'block';
      document.getElementById('videoBorderEvery').style.display = 'none';
    };
  })(); // Вставка ссылки или кода видео EMBED


  function changeVideoSrc() {
    if (videoSrc.value == "youtube") {
      youtube.style.display = 'block';
      vimeo.style.display = 'none';
      embedCode.style.display = 'none';
      videoAutoplay.style.display = 'block';
      videoControls.style.display = 'block';

      if (imgWrapperElem.getElementsByClassName('video')[0]) {
        videoPlayerSrc = imgWrapperElem.getElementsByTagName('iframe')[0].src;
        videoPlayerSrc = videoPlayerSrc == '' ? 'Отсутствует' : videoPlayerSrc.replace('youtube.com/embed', 'youtu.be');
        videoPlayerSrc = videoPlayerSrc == '' ? 'Отсутствует' : videoPlayerSrc.replace('player.vimeo.com/video', 'vimeo.com');
        videoPlayerSrc = videoPlayerSrc.replace('?delay&mute=1', '');
        videoPlayerSrc = videoPlayerSrc.replace('?delay&muted=1', '');
        videoPlayerSrc = videoPlayerSrc.replace('?controls=0', '');
        videoPlayerSrc = videoPlayerSrc.replace('&controls=0', '');
        videoIndicator.innerHTML = videoPlayerSrc;
      }
    } else if (videoSrc.value == "vimeo") {
      youtube.style.display = 'none';
      vimeo.style.display = 'block';
      embedCode.style.display = 'none';
      videoAutoplay.style.display = 'block';
      videoControls.style.display = 'block';

      if (imgWrapperElem.getElementsByClassName('video')[0]) {
        videoPlayerSrc = imgWrapperElem.getElementsByTagName('iframe')[0].src;
        videoPlayerSrc = videoPlayerSrc == '' ? 'Отсутствует' : videoPlayerSrc.replace('player.vimeo.com/video', 'vimeo.com');
        videoPlayerSrc = videoPlayerSrc == '' ? 'Отсутствует' : videoPlayerSrc.replace('youtube.com/embed', 'youtu.be');
        videoPlayerSrc = videoPlayerSrc.replace('?delay&mute=1', '');
        videoPlayerSrc = videoPlayerSrc.replace('?delay&muted=1', '');
        videoPlayerSrc = videoPlayerSrc.replace('?controls=0', '');
        videoPlayerSrc = videoPlayerSrc.replace('&controls=0', '');
        videoIndicator.innerHTML = videoPlayerSrc;
      }
    } else if (videoSrc.value == "embed") {
      youtube.style.display = 'none';
      vimeo.style.display = 'none';
      embedCode.style.display = 'block';
      videoAutoplay.style.display = 'none';
      videoControls.style.display = 'none';

      if (embedArea.value != '') {
        videoIndicator.innerHTML = 'Embed code';
      } else {
        videoIndicator.innerHTML = 'Отсутствует';
      }
    }
  }

  changeVideoSrc();

  videoSrc.onchange = function () {
    changeVideoSrc();
    makePreview();
  }; //автопроигрывание


  if (imgWrapperElem.getElementsByClassName('video')[0] && iframe.src != '' && iframe.src.indexOf('delay') != -1) {
    videoAutoplayCheckBox.checked = true;
  } else {
    videoAutoplayCheckBox.checked = false;
  }

  videoAutoplayCheckBox.onclick = function () {
    var src;

    switch (videoSrc.value) {
      case 'youtube':
        if (videoIndicator.innerHTML != 'Отсутствует' && youtubeInput.value == '' && videoAutoplayCheckBox.checked == true && iframe.src.indexOf('delay') == -1) {
          src = iframe.src.indexOf('controls') == -1 ? videoIndicator.innerHTML.replace('youtu.be', 'youtube.com/embed') + '?delay&mute=1' : videoIndicator.innerHTML.replace('youtu.be', 'youtube.com/embed') + '?delay&mute=1&controls=0';
          iframe.src = src;
        } else if (videoIndicator.innerHTML != 'Отсутствует' && youtubeInput.value == '' && videoAutoplayCheckBox.checked == false && iframe.src.indexOf('delay') != -1) {
          src = iframe.src.indexOf('controls') == -1 ? videoIndicator.innerHTML.replace('youtu.be', 'youtube.com/embed') : videoIndicator.innerHTML.replace('youtu.be', 'youtube.com/embed') + '?controls=0';
          iframe.src = src;
        }

        makePreview();
        break;

      case 'vimeo':
        if (videoIndicator.innerHTML != 'Отсутствует' && vimeoInput.value == '' && videoAutoplayCheckBox.checked == true && iframe.src.indexOf('delay') == -1) {
          src = iframe.src.indexOf('controls') == -1 ? videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1' : videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1&controls=0';
          iframe.src = src;
        } else if (videoIndicator.innerHTML != 'Отсутствует' && vimeoInput.value == '' && videoAutoplayCheckBox.checked == false && iframe.src.indexOf('delay') != -1) {
          src = iframe.src.indexOf('controls') == -1 ? videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') : videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?controls=0';
          iframe.src = src;
        }

        makePreview();
        break;
    }
  }; //Скрыть панель управления


  if (imgWrapperElem.getElementsByTagName('iframe')[0] && iframe.src != '' && iframe.src.indexOf('controls') != -1) {
    videoControlsCheckBox.checked = true;
  } else {
    videoControlsCheckBox.checked = false;
  }

  videoControlsCheckBox.onclick = function () {
    var src;

    switch (videoSrc.value) {
      case 'youtube':
        if (videoIndicator.innerHTML != 'Отсутствует' && youtubeInput.value == '' && videoControlsCheckBox.checked == true && iframe.src.indexOf('controls') == -1) {
          src = iframe.src.indexOf('delay') == -1 ? videoIndicator.innerHTML.replace('youtu.be', 'youtube.com/embed') + '?controls=0' : videoIndicator.innerHTML.replace('youtu.be', 'youtube.com/embed') + '?delay&mute=1&controls=0';
          iframe.src = src;
        } else if (videoIndicator.innerHTML != 'Отсутствует' && youtubeInput.value == '' && videoControlsCheckBox.checked == false && iframe.src.indexOf('controls') != -1) {
          src = iframe.src.indexOf('delay') == -1 ? videoIndicator.innerHTML.replace('youtu.be', 'youtube.com/embed') : videoIndicator.innerHTML.replace('youtu.be', 'youtube.com/embed') + '?delay&mute=1';
          iframe.src = src;
        }

        makePreview();
        break;

      case 'vimeo':
        if (videoIndicator.innerHTML != 'Отсутствует' && vimeoInput.value == '' && videoControlsCheckBox.checked == true && iframe.src.indexOf('controls') == -1) {
          src = iframe.src.indexOf('delay') == -1 ? videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?controls=0' : videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1&controls=0';
          iframe.src = src;
        } else if (videoIndicator.innerHTML != 'Отсутствует' && vimeoInput.value == '' && videoControlsCheckBox.checked == false && iframe.src.indexOf('controls') != -1) {
          src = iframe.src.indexOf('delay') == -1 ? videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') : videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1';
          iframe.src = src;
        }

        makePreview();
        break;
    }
  };

  videoUrlExec.onclick = function () {
    var src = '';
    var stringToDelete = '';

    switch (videoSrc.value) {
      case 'youtube':
        if (!imgWrapperElem.getElementsByClassName('video')[0]) {
          iframeWrapper.innerHTML = '<iframe class="video" frameborder="0" width="100%" height="100%"allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
          iframe = iframeWrapper.getElementsByTagName('iframe')[0];
        }

        if (youtubeInput.value != '') {
          src = youtubeInput.value;

          if (!videoAutoplayCheckBox.checked && !videoControlsCheckBox.checked) {
            src = src.replace('youtu.be', 'youtube.com/embed');
          } else if (videoAutoplayCheckBox.checked && videoControlsCheckBox.checked) {
            src = src.replace('youtu.be', 'youtube.com/embed') + '?delay&mute=1&controls=0';
          } else if (videoAutoplayCheckBox.checked && !videoControlsCheckBox.checked) {
            src = src.replace('youtu.be', 'youtube.com/embed') + '?delay&mute=1';
          } else {
            src = src.replace('youtu.be', 'youtube.com/embed') + '?controls=0';
          }

          iframe.src = src;
          youtubeInput.value = '';
          changeVideoSrc();
          stringToDelete = new RegExp('<img class="noVideo"[^>]*>', 'gi');
          iframeWrapper.innerHTML = iframeWrapper.innerHTML.replace(stringToDelete, '');
          alert(iframeWrapper.innerHTML);
        } else {
          alert('Вы не ввели ссылку на видео!');
        }

        makePreview();
        break;

      case 'vimeo':
        if (!imgWrapperElem.getElementsByClassName('video')[0]) {
          iframeWrapper.innerHTML = '<iframe class="video" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }

        if (vimeoInput.value != '') {
          src = vimeoInput.value;

          if (!videoAutoplayCheckBox.checked && !videoControlsCheckBox.checked) {
            src = src.replace('vimeo.com', 'player.vimeo.com/video');
          } else if (videoAutoplayCheckBox.checked && videoControlsCheckBox.checked) {
            src = src.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1&controls=0';
          } else if (videoAutoplayCheckBox.checked && !videoControlsCheckBox.checked) {
            src = src.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1';
          } else {
            src = src.replace('vimeo.com', 'player.vimeo.com/video') + '?controls=0';
          }

          iframe.src = src;
          vimeoInput.value = '';
          changeVideoSrc();
          stringToDelete = new RegExp('<img class="noVideo"[^>]*>', 'gi');
          iframeWrapper.innerHTML = iframeWrapper.innerHTML.replace(stringToDelete, '');
        } else {
          alert('Вы не ввели ссылку на видео!');
        }

        makePreview();
        break;

      case 'embed':
        if (embedArea.value != '') {
          iframeWrapper.innerHTML = embedArea.value;
          changeVideoSrc();
          stringToDelete = new RegExp('<img class="noVideo"[^>]*>', 'gi');
          iframeWrapper.innerHTML = iframeWrapper.innerHTML.replace(stringToDelete, '');
        } else {
          alert('Вы не ввели код плеера!');
        }

        makePreview();
        break;
    }
  }; //Вертикальное выравнивание


  if (getComputedStyle(imgBlockElem).marginTop == 'auto') {
    videoMarginBottom.checked = true;
    videoMarginTop.checked = false;
    videoMarginCenter.checked = false;
  } else if (getComputedStyle(imgBlockElem).marginBottom == 'auto') {
    videoMarginBottom.checked = false;
    videoMarginTop.checked = true;
    videoMarginCenter.checked = false;
  } else if (getComputedStyle(imgBlockElem).marginTop == '0px' && getComputedStyle(imgBlockElem).marginBottom == '0px') {
    videoMarginBottom.checked = false;
    videoMarginTop.checked = false;
    videoMarginCenter.checked = true;
  }

  videoMarginTop.onclick = function () {
    imgBlockElem.style.marginTop = '0px';
    imgBlockElem.style.marginBottom = 'auto';
    makePreview(); //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  };

  videoMarginCenter.onclick = function () {
    imgBlockElem.style.marginTop = '0px';
    imgBlockElem.style.marginBottom = '0px';
    makePreview(); //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  };

  videoMarginBottom.onclick = function () {
    imgBlockElem.style.marginTop = 'auto';
    imgBlockElem.style.marginBottom = '0px';
    makePreview(); //    resizerY_Elem.style.top = '0';
    //    resizerY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.top = '0';
    //    resizerXY_Elem.style.left = '0';
    //    resizerXY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.marginLeft = '0';
  }; //Настройки отступов


  $('#video-margin-top-value').val(parseInt(getComputedStyle(imgBlockElem).marginTop));
  $('#video-margin-top-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginTop));
  $('#video-margin-right-value').val(parseInt(getComputedStyle(imgBlockElem).marginRight));
  $('#video-margin-right-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginRight));
  $('#video-margin-bottom-value').val(parseInt(getComputedStyle(imgBlockElem).marginBottom));
  $('#video-margin-bottom-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginBottom));
  $('#video-margin-left-value').val(parseInt(getComputedStyle(imgBlockElem).marginLeft));
  $('#video-margin-left-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginLeft));
  $('#video-margin-top-value, #video-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "video-margin-top-value") {
      $('#video-margin-top-value-range').val($(this).val());
    } else {
      $('#video-margin-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-margin-right-value, #video-margin-right-value-range').on('input', function () {
    $(ths).css('margin-right', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "video-margin-right-value") {
      $('#video-margin-right-value-range').val($(this).val());
    } else {
      $('#video-margin-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-margin-bottom-value, #video-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "video-margin-bottom-value") {
      $('#video-margin-bottom-value-range').val($(this).val());
    } else {
      $('#video-margin-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-margin-left-value, #video-margin-left-value-range').on('input', function () {
    $(ths).css('margin-left', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "video-margin-left-value") {
      $('#video-margin-left-value-range').val($(this).val());
    } else {
      $('#video-margin-left-value').val($(this).val());
    }

    makePreview();
  }); //Настройки всех границ изображения

  $('#video-border-value').val(parseInt($(imgWrapper).css('border-width')));
  $('#video-border-value-range').val(parseInt($(imgWrapper).css('border-width')));
  $('#video-border-radius').val(parseInt($(imgWrapper).css('border-radius')));
  $('#video-border-radius-range').val(parseInt($(imgWrapper).css('border-radius')));
  $('#video-border-value, #video-border-value-range').on('input', function () {
    $(imgWrapper).css('border-width', $(this).val() + 'px');

    if ($(this).attr('id') == "video-border-value") {
      $('#video-border-value-range').val($(this).val());
    } else {
      $('#video-border-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-border-style').on('change', function () {
    $(imgWrapper).css('border-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#video-border-color-value').on('change', function () {
    $(imgWrapper).css('border-color', $(this).val());
    makePreview();
  });
  /*Настройки для верхней границы блока*/

  $('#video-border-top-value').val(parseInt($(ths).css('border-top-width')));
  $('#video-border-top-value-range').val(parseInt($(ths).css('border-top-width')));
  $('#video-border-left-top-radius').val(parseInt($(ths).css('border-top-left-radius')));
  $('#video-border-left-top-radius-range').val(parseInt($(ths).css('border-top-left-radius')));
  $('#video-border-top-value, #video-border-top-value-range').on('input', function () {
    $(imgWrapper).css('border-top-width', $(this).val() + 'px');

    if ($(this).attr('id') == "video-border-top-value") {
      $('#video-border-top-value-range').val($(this).val());
    } else {
      $('#video-border-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-border-top-style-value').on('change', function () {
    $(imgWrapper).css('border-top-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#video-border-top-color').on('change', function () {
    $(imgWrapper).css('border-top-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для правой границы блока*/

  $('#video-border-right-value').val(parseInt($(ths).css('border-right-width')));
  $('#video-border-right-value-range').val(parseInt($(ths).css('border-right-width')));
  $('#video-border-right-radius').val(parseInt($(ths).css('border-top-right-radius')));
  $('#video-border-right-radius-range').val(parseInt($(ths).css('border-top-right-radius')));
  $('#video-border-right-value, #video-border-right-value-range').on('input', function () {
    $(imgWrapper).css('border-right-width', $(this).val() + 'px');

    if ($(this).attr('id') == "video-border-right-value") {
      $('#video-border-right-value-range').val($(this).val());
    } else {
      $('#video-border-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-border-right-style').on('change', function () {
    $(imgWrapper).css('border-right-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#video-border-right-color').on('change', function () {
    $(imgWrapper).css('border-right-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для нижней границы блока*/

  $('#video-border-bottom-value').val(parseInt($(ths).css('border-bottom-width')));
  $('#video-border-bottom-value-range').val(parseInt($(ths).css('border-bottom-width')));
  $('#video-border-bottom-right-radius').val(parseInt($(ths).css('border-bottom-right-radius')));
  $('#video-border-bottom-right-radius-range').val(parseInt($(ths).css('border-bottom-right-radius')));
  $('#video-border-bottom-value, #video-border-bottom-value-range').on('input', function () {
    $(imgWrapper).css('border-bottom-width', $(this).val() + 'px');

    if ($(this).attr('id') == "video-border-bottom-value") {
      $('#video-border-bottom-value-range').val($(this).val());
    } else {
      $('#video-border-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-border-bottom-style').on('change', function () {
    $(imgWrapper).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#video-border-bottom-color').on('change', function () {
    $(imgWrapper).css('border-bottom-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для левой границы блока*/

  $('#video-border-left-value').val(parseInt($(ths).css('border-left-width')));
  $('#video-border-left-value-range').val(parseInt($(ths).css('border-left-width')));
  $('#video-border-bottom-left-radius').val(parseInt($(ths).css('border-bottom-left-radius')));
  $('#video-border-bottom-left-radius-range').val(parseInt($(ths).css('border-bottom-left-radius')));
  $('#video-border-left-value, #video-border-left-value-range').on('input', function () {
    $(imgWrapper).css('border-left-width', $(this).val() + 'px');

    if ($(this).attr('id') == "video-border-left-value") {
      $('#video-border-left-value-range').val($(this).val());
    } else {
      $('#video-border-left-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-border-left-style').on('change', function () {
    $(imgWrapper).css('border-left-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#video-border-left-color').on('change', function () {
    $(imgWrapper).css('border-left-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки теней*/

  document.getElementById('videoShadowRadioOn').onclick = function () {
    document.getElementById('video-shadow').style.display = 'block';
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    makePreview();
  };

  document.getElementById('videoShadowRadioOff').onclick = function () {
    document.getElementById('video-shadow').style.display = 'none';
    $(imgWrapper).css('box-shadow', 'none');
    $(imgElem).css('box-shadow', 'none');
    makePreview();
  };

  $('#video-shadow-horizontal-value, #video-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "video-shadow-horizontal-value") {
      $('#video-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#video-shadow-horizontal-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-shadow-vertical-value, #video-shadow-vertical-value-range').on('input', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "video-shadow-vertical-value") {
      $('#video-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#video-shadow-vertical-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-shadow-blur-value, #video-shadow-blur-value-range').on('input', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "video-shadow-blur-value") {
      $('#video-shadow-blur-value-range').val($(this).val());
    } else {
      $('#video-shadow-blur-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-shadow-spread-value, #video-shadow-spread-value-range').on('input', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "video-shadow-spread-value") {
      $('#video-shadow-spread-value-range').val($(this).val());
    } else {
      $('#video-shadow-spread-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-shadow-opacity-value, #video-shadow-opacity-value-range').on('input', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "video-shadow-opacity-value") {
      $('#video-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#video-shadow-opacity-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-shadow-color-value').on('change', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    makePreview();
  });
  $('#video-shadow-inset-value').on('change', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }

    makePreview();
  });
  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#video-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(imgElem).css('animation-name', $(this).val());
      $(imgElem).css('animation-delay', $('#video-animation-delay-value').val() + 's');
      $(imgElem).css('animation-duration', $('#video-animation-duration-value').val() + 's');
    }

    makePreview();
  });
  $('#video-animation-delay-value, #video-animation-delay-value-range').on('input', function () {
    $(imgElem).css('animation-delay', $(this).val() + 's');

    if ($(this).attr('id') == "video-animation-delay-value") {
      $('#video-animation-delay-value-range').val($(this).val());
    } else {
      $('#video-animation-delay-value').val($(this).val());
    }

    makePreview();
  });
  $('#video-animation-duration-value, #video-animation-duration-value-range').on('input', function () {
    $(imgElem).css('animation-duration', $(this).val() + 's');

    if ($(this).attr('id') == "video-animation-duration-value") {
      $('#video-animation-duration-value-range').val($(this).val());
    } else {
      $('#video-animation-duration-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец настроек анимации*/

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    timoutCheckBox.checked = true;
  } else {
    timoutCheckBox.checked = false;
  }

  $('#video-display-none-value, #video-timeout-hour-value, #video-timeout-hour-value-range, #video-timeout-minute-value, #video-timeout-minute-value-range, #video-timeout-second-value, #video-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#video-timeout-hour-value').val() * 3600;
    var minute = $('#video-timeout-minute-value').val() * 60;
    var second = parseInt($('#video-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;

    if (timoutCheckBox.checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }

    if ($(this).attr('id') == "video-timeout-hour-value") {
      $('#video-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "video-timeout-hour-value-range") {
      $('#video-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "video-timeout-minute-value") {
      $('#video-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "video-timeout-minute-value-range") {
      $('#video-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "video-timeout-second-value") {
      $('#video-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "video-timeout-second-value-range") {
      $('#video-timeout-second-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец блока таймаута*/
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

function deleteTeg(content, reOpen, reCloze) {
  var teg = new RegExp('<' + reOpen + '[^<]*</' + reCloze + '>', 'gi');
  content = content.replace(teg, '');
  return content;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL3ZpZGVvL3ZpZGVvU2V0dGluZ3MuanMiXSwibmFtZXMiOlsiJCIsIm9uIiwiaW1nQmxvY2tJZCIsInBhcmVudHMiLCJhdHRyIiwiaW1nQmxvY2tFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsb25JZCIsImdldFJhbmRvbSIsImNsb25lIiwiY3NzIiwiaW5zZXJ0QWZ0ZXIiLCJjbG9uZWRJbWciLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW1nV3JhcHBlciIsImNsb25lUmVzaXplclkiLCJjbG9uZVJlc2l6ZXJYWSIsImNsb25lUmVzaXplclgiLCJhZGRGdW5jdGlvbmFsaXR5VG9FbGVtZW50IiwibWFrZVByZXZpZXciLCJ0aHMiLCJ2aWRlb1BsYXllclNyYyIsImNvbnRlbnQiLCJpbWdFbGVtIiwiaW1nV3JhcHBlckVsZW0iLCJwcm9wb3J0aW9uIiwicmVzaXplcllfRWxlbSIsInJlc2l6ZXJYWV9FbGVtIiwiaWZyYW1lIiwiaWZyYW1lV3JhcHBlciIsInRpbW91dENoZWNrQm94IiwiZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwib2ZmIiwidGltZSIsInBhcnNlSW50IiwiaW5uZXJIVE1MIiwic3BsaXQiLCJoIiwiTWF0aCIsImZsb29yIiwibSIsInMiLCJ2YWwiLCJwcm9wIiwiaGlkZSIsInNob3ciLCJyaWdodCIsInRyYW5zaXRpb24iLCJhZGRDbGFzcyIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJjaGFuZ2VWaWRlb1NyYyIsInZpZGVvU3JjIiwidmFsdWUiLCJ5b3V0dWJlIiwidmltZW8iLCJlbWJlZENvZGUiLCJ2aWRlb0F1dG9wbGF5IiwidmlkZW9Db250cm9scyIsInNyYyIsInJlcGxhY2UiLCJ2aWRlb0luZGljYXRvciIsImVtYmVkQXJlYSIsIm9uY2hhbmdlIiwiaW5kZXhPZiIsInZpZGVvQXV0b3BsYXlDaGVja0JveCIsImNoZWNrZWQiLCJ5b3V0dWJlSW5wdXQiLCJ2aW1lb0lucHV0IiwidmlkZW9Db250cm9sc0NoZWNrQm94IiwidmlkZW9VcmxFeGVjIiwic3RyaW5nVG9EZWxldGUiLCJSZWdFeHAiLCJhbGVydCIsImdldENvbXB1dGVkU3R5bGUiLCJtYXJnaW5Ub3AiLCJ2aWRlb01hcmdpbkJvdHRvbSIsInZpZGVvTWFyZ2luVG9wIiwidmlkZW9NYXJnaW5DZW50ZXIiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJpIiwiZmluZCIsImh2IiwidnYiLCJibHIiLCJzcHJkIiwiY2xyIiwiaGV4VG9SR0IiLCJpbnNldCIsInBycHRzIiwiaWQiLCJob3VycyIsIm1pbnV0ZSIsInNlY29uZCIsInJlbW92ZSIsImFwcGVuZCIsImhleCIsImFscGhhIiwiciIsInNsaWNlIiwiZyIsImIiLCJkZWxldGVUZWciLCJyZU9wZW4iLCJyZUNsb3plIiwidGVnIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUMsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUEzQixFQUF5QyxZQUFZO0FBQ25ELE1BQU1DLFVBQVUsR0FBR0YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxPQUFSLENBQWdCLGFBQWhCLEVBQStCQyxJQUEvQixDQUFvQyxJQUFwQyxDQUFuQjtBQUNBLE1BQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCTCxVQUF4QixDQUFyQjtBQUNBLE1BQU1NLE1BQU0sR0FBRyxVQUFVQyxTQUFTLEVBQWxDO0FBRUFULEdBQUMsQ0FBQ0ssWUFBRCxDQUFELENBQWdCSyxLQUFoQixDQUFzQixJQUF0QixFQUE0Qk4sSUFBNUIsQ0FBaUMsSUFBakMsRUFBdUNJLE1BQXZDLEVBQStDRyxHQUEvQyxDQUFtRCxRQUFuRCxFQUE2RCxNQUE3RCxFQUFxRUMsV0FBckUsQ0FBaUZQLFlBQWpGO0FBRUEsTUFBTUssS0FBSyxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0JDLE1BQXhCLENBQWQ7QUFDQSxNQUFNSyxTQUFTLEdBQUdILEtBQUssQ0FBQ0ksc0JBQU4sQ0FBNkIsS0FBN0IsRUFBb0MsQ0FBcEMsQ0FBbEI7QUFDQSxNQUFNQyxVQUFVLEdBQUdMLEtBQUssQ0FBQ0ksc0JBQU4sQ0FBNkIsY0FBN0IsRUFBNkMsQ0FBN0MsQ0FBbkI7QUFDQSxNQUFNRSxhQUFhLEdBQUdOLEtBQUssQ0FBQ0ksc0JBQU4sQ0FBNkIsVUFBN0IsRUFBeUMsQ0FBekMsQ0FBdEI7QUFDQSxNQUFNRyxjQUFjLEdBQUdQLEtBQUssQ0FBQ0ksc0JBQU4sQ0FBNkIsV0FBN0IsRUFBMEMsQ0FBMUMsQ0FBdkI7QUFDQSxNQUFNSSxhQUFhLEdBQUdSLEtBQUssQ0FBQ0ksc0JBQU4sQ0FBNkIsVUFBN0IsRUFBeUMsQ0FBekMsQ0FBdEI7QUFFQUssMkJBQXlCLENBQUNYLE1BQUQsQ0FBekI7QUFDQVksYUFBVztBQUNaLENBaEJEO0FBbUJBLElBQUlDLEdBQUcsR0FBRyxJQUFWO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLElBQXJCO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFDQSxJQUFJbEIsWUFBWSxHQUFHLElBQW5CO0FBQ0EsSUFBSW1CLE9BQU8sR0FBRyxJQUFkO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLElBQXJCO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLElBQWpCO0FBQ0EsSUFBSVgsVUFBVSxHQUFHLElBQWpCO0FBQ0EsSUFBSVksYUFBYSxHQUFHLElBQXBCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLElBQXJCO0FBQ0EsSUFBSUMsTUFBTSxHQUFHLElBQWI7QUFDQSxJQUFJQyxhQUFhLEdBQUcsSUFBcEI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsSUFBckI7QUFFQS9CLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUMsRUFBZixDQUFrQixPQUFsQixFQUEyQixXQUEzQixFQUF3QyxVQUFVK0IsQ0FBVixFQUFhO0FBQ25EWCxLQUFHLEdBQUdyQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLE9BQVIsQ0FBZ0IsYUFBaEIsQ0FBTjtBQUNBb0IsU0FBTyxHQUFHakIsUUFBUSxDQUFDQyxjQUFULENBQXdCUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLE9BQVIsQ0FBZ0IsVUFBaEIsRUFBNEJDLElBQTVCLENBQWlDLElBQWpDLENBQXhCLENBQVY7QUFDQUMsY0FBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JjLEdBQUcsQ0FBQ2pCLElBQUosQ0FBUyxJQUFULENBQXhCLENBQWY7QUFDQW9CLFNBQU8sR0FBR25CLFlBQVksQ0FBQ1Msc0JBQWIsQ0FBb0MsS0FBcEMsRUFBMkMsQ0FBM0MsQ0FBVjtBQUNBVyxnQkFBYyxHQUFHcEIsWUFBWSxDQUFDUyxzQkFBYixDQUFvQyxjQUFwQyxFQUFvRCxDQUFwRCxDQUFqQjtBQUNBWSxZQUFVLEdBQUdyQixZQUFZLENBQUNTLHNCQUFiLENBQW9DLGVBQXBDLEVBQXFELENBQXJELENBQWI7QUFDQUMsWUFBVSxHQUFHVixZQUFZLENBQUNTLHNCQUFiLENBQW9DLFFBQXBDLEVBQThDLENBQTlDLENBQWI7QUFDQWEsZUFBYSxHQUFHdEIsWUFBWSxDQUFDUyxzQkFBYixDQUFvQyxVQUFwQyxFQUFnRCxDQUFoRCxDQUFoQjtBQUNBYyxnQkFBYyxHQUFHdkIsWUFBWSxDQUFDUyxzQkFBYixDQUFvQyxXQUFwQyxFQUFpRCxDQUFqRCxDQUFqQjtBQUNBZ0IsZUFBYSxHQUFHZixVQUFVLENBQUNELHNCQUFYLENBQWtDLGVBQWxDLEVBQW1ELENBQW5ELENBQWhCO0FBQ0FlLFFBQU0sR0FBR0MsYUFBYSxDQUFDRyxvQkFBZCxDQUFtQyxRQUFuQyxFQUE2QyxDQUE3QyxDQUFUO0FBQ0FGLGdCQUFjLEdBQUd6QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsMEJBQXhCLENBQWpCLENBWm1ELENBY25EOztBQUNBUCxHQUFDLENBQUMsNkNBQUQsQ0FBRCxDQUFpRGtDLEdBQWpELENBQXFELE9BQXJEO0FBQ0FsQyxHQUFDLENBQUMsNkNBQUQsQ0FBRCxDQUFpRGtDLEdBQWpEO0FBQ0FsQyxHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QmtDLEdBQXpCO0FBQ0FsQyxHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QmtDLEdBQTlCO0FBQ0FsQyxHQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQmtDLEdBQS9CO0FBQ0FsQyxHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ2tDLEdBQW5DO0FBQ0FsQyxHQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ2tDLEdBQWhDO0FBQ0FsQyxHQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ2tDLEdBQWpDOztBQUNBLE1BQUk1QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBWWMsR0FBRyxDQUFDakIsSUFBSixDQUFTLElBQVQsQ0FBcEMsQ0FBSixFQUF5RDtBQUN2RCxRQUFJK0IsSUFBSSxHQUFHQyxRQUFRLENBQUM5QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBWWMsR0FBRyxDQUFDakIsSUFBSixDQUFTLElBQVQsQ0FBcEMsRUFBb0RpQyxTQUFwRCxDQUE4REMsS0FBOUQsQ0FBb0UsR0FBcEUsRUFBeUUsQ0FBekUsQ0FBRCxDQUFSLEdBQXdGLElBQW5HO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sSUFBSSxHQUFHLElBQWxCLENBQVI7QUFDQSxRQUFJTyxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNOLElBQUksR0FBRyxPQUFPSSxDQUFmLElBQW9CLEVBQS9CLENBQVI7QUFDQSxRQUFJSSxDQUFDLEdBQUdSLElBQUksSUFBSSxPQUFPSSxDQUFQLEdBQVcsS0FBS0csQ0FBcEIsQ0FBWjtBQUNBMUMsS0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0QyxHQUEvQixDQUFtQ0wsQ0FBbkM7QUFDQXZDLEtBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDNEMsR0FBakMsQ0FBcUNGLENBQXJDO0FBQ0ExQyxLQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQzRDLEdBQWpDLENBQXFDRCxDQUFyQztBQUNBM0MsS0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I2QyxJQUEvQixDQUFvQyxTQUFwQyxFQUErQyxJQUEvQztBQUNELEdBVEQsTUFTTztBQUNMN0MsS0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0QyxHQUEvQixDQUFtQyxDQUFuQztBQUNBNUMsS0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxDQUFxQyxDQUFyQztBQUNBNUMsS0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxDQUFxQyxDQUFyQztBQUNEOztBQUNENUMsR0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUI4QyxJQUF6QjtBQUNBOUMsR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjhDLElBQWxCO0FBQ0E5QyxHQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQjhDLElBQTFCO0FBQ0E5QyxHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjhDLElBQTdCO0FBQ0E5QyxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQjhDLElBQXJCO0FBQ0E5QyxHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjhDLElBQXBCO0FBQ0E5QyxHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjhDLElBQXRCO0FBQ0E5QyxHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjhDLElBQXBCO0FBQ0E5QyxHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjhDLElBQXpCO0FBQ0E5QyxHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjhDLElBQXBCO0FBQ0E5QyxHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjhDLElBQXBCO0FBQ0E5QyxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQitDLElBQXJCO0FBQ0EvQyxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1CVyxHQUFuQixDQUF1QjtBQUNyQnFDLFNBQUssRUFBRSxLQURjO0FBRXJCQyxjQUFVLEVBQUU7QUFGUyxHQUF2QixFQUdHQyxRQUhILENBR1ksV0FIWjs7QUFJQSxHQUFDLFlBQVk7QUFDWDVDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix1QkFBeEIsRUFBaUQ0QyxPQUFqRCxHQUEyRCxZQUFZO0FBQ3JFN0MsY0FBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixFQUEwQzZDLEtBQTFDLENBQWdEQyxPQUFoRCxHQUEwRCxNQUExRDtBQUNBL0MsY0FBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixFQUE0QzZDLEtBQTVDLENBQWtEQyxPQUFsRCxHQUE0RCxPQUE1RDtBQUNELEtBSEQ7O0FBSUEvQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDNEMsT0FBL0MsR0FBeUQsWUFBWTtBQUNuRTdDLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsRUFBMEM2QyxLQUExQyxDQUFnREMsT0FBaEQsR0FBMEQsT0FBMUQ7QUFDQS9DLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsRUFBNEM2QyxLQUE1QyxDQUFrREMsT0FBbEQsR0FBNEQsTUFBNUQ7QUFDRCxLQUhEO0FBSUQsR0FURCxJQXJEbUQsQ0FnRW5EOzs7QUFDQSxXQUFTQyxjQUFULEdBQTBCO0FBQ3hCLFFBQUlDLFFBQVEsQ0FBQ0MsS0FBVCxJQUFrQixTQUF0QixFQUFpQztBQUMvQkMsYUFBTyxDQUFDTCxLQUFSLENBQWNDLE9BQWQsR0FBd0IsT0FBeEI7QUFDQUssV0FBSyxDQUFDTixLQUFOLENBQVlDLE9BQVosR0FBc0IsTUFBdEI7QUFDQU0sZUFBUyxDQUFDUCxLQUFWLENBQWdCQyxPQUFoQixHQUEwQixNQUExQjtBQUNBTyxtQkFBYSxDQUFDUixLQUFkLENBQW9CQyxPQUFwQixHQUE4QixPQUE5QjtBQUNBUSxtQkFBYSxDQUFDVCxLQUFkLENBQW9CQyxPQUFwQixHQUE4QixPQUE5Qjs7QUFDQSxVQUFJNUIsY0FBYyxDQUFDWCxzQkFBZixDQUFzQyxPQUF0QyxFQUErQyxDQUEvQyxDQUFKLEVBQXVEO0FBQ3JEUSxzQkFBYyxHQUFHRyxjQUFjLENBQUNRLG9CQUFmLENBQW9DLFFBQXBDLEVBQThDLENBQTlDLEVBQWlENkIsR0FBbEU7QUFDQXhDLHNCQUFjLEdBQUlBLGNBQWMsSUFBSSxFQUFuQixHQUF5QixhQUF6QixHQUF5Q0EsY0FBYyxDQUFDeUMsT0FBZixDQUF1QixtQkFBdkIsRUFBNEMsVUFBNUMsQ0FBMUQ7QUFDQXpDLHNCQUFjLEdBQUlBLGNBQWMsSUFBSSxFQUFuQixHQUF5QixhQUF6QixHQUF5Q0EsY0FBYyxDQUFDeUMsT0FBZixDQUF1Qix3QkFBdkIsRUFBaUQsV0FBakQsQ0FBMUQ7QUFDQXpDLHNCQUFjLEdBQUdBLGNBQWMsQ0FBQ3lDLE9BQWYsQ0FBdUIsZUFBdkIsRUFBd0MsRUFBeEMsQ0FBakI7QUFDQXpDLHNCQUFjLEdBQUdBLGNBQWMsQ0FBQ3lDLE9BQWYsQ0FBdUIsZ0JBQXZCLEVBQXlDLEVBQXpDLENBQWpCO0FBQ0F6QyxzQkFBYyxHQUFHQSxjQUFjLENBQUN5QyxPQUFmLENBQXVCLGFBQXZCLEVBQXNDLEVBQXRDLENBQWpCO0FBQ0F6QyxzQkFBYyxHQUFHQSxjQUFjLENBQUN5QyxPQUFmLENBQXVCLGFBQXZCLEVBQXNDLEVBQXRDLENBQWpCO0FBQ0FDLHNCQUFjLENBQUMzQixTQUFmLEdBQTJCZixjQUEzQjtBQUNEO0FBQ0YsS0FoQkQsTUFnQk8sSUFBSWlDLFFBQVEsQ0FBQ0MsS0FBVCxJQUFrQixPQUF0QixFQUErQjtBQUNwQ0MsYUFBTyxDQUFDTCxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDQUssV0FBSyxDQUFDTixLQUFOLENBQVlDLE9BQVosR0FBc0IsT0FBdEI7QUFDQU0sZUFBUyxDQUFDUCxLQUFWLENBQWdCQyxPQUFoQixHQUEwQixNQUExQjtBQUNBTyxtQkFBYSxDQUFDUixLQUFkLENBQW9CQyxPQUFwQixHQUE4QixPQUE5QjtBQUNBUSxtQkFBYSxDQUFDVCxLQUFkLENBQW9CQyxPQUFwQixHQUE4QixPQUE5Qjs7QUFDQSxVQUFJNUIsY0FBYyxDQUFDWCxzQkFBZixDQUFzQyxPQUF0QyxFQUErQyxDQUEvQyxDQUFKLEVBQXVEO0FBQ3JEUSxzQkFBYyxHQUFHRyxjQUFjLENBQUNRLG9CQUFmLENBQW9DLFFBQXBDLEVBQThDLENBQTlDLEVBQWlENkIsR0FBbEU7QUFDQXhDLHNCQUFjLEdBQUlBLGNBQWMsSUFBSSxFQUFuQixHQUF5QixhQUF6QixHQUF5Q0EsY0FBYyxDQUFDeUMsT0FBZixDQUF1Qix3QkFBdkIsRUFBaUQsV0FBakQsQ0FBMUQ7QUFDQXpDLHNCQUFjLEdBQUlBLGNBQWMsSUFBSSxFQUFuQixHQUF5QixhQUF6QixHQUF5Q0EsY0FBYyxDQUFDeUMsT0FBZixDQUF1QixtQkFBdkIsRUFBNEMsVUFBNUMsQ0FBMUQ7QUFDQXpDLHNCQUFjLEdBQUdBLGNBQWMsQ0FBQ3lDLE9BQWYsQ0FBdUIsZUFBdkIsRUFBd0MsRUFBeEMsQ0FBakI7QUFDQXpDLHNCQUFjLEdBQUdBLGNBQWMsQ0FBQ3lDLE9BQWYsQ0FBdUIsZ0JBQXZCLEVBQXlDLEVBQXpDLENBQWpCO0FBQ0F6QyxzQkFBYyxHQUFHQSxjQUFjLENBQUN5QyxPQUFmLENBQXVCLGFBQXZCLEVBQXNDLEVBQXRDLENBQWpCO0FBQ0F6QyxzQkFBYyxHQUFHQSxjQUFjLENBQUN5QyxPQUFmLENBQXVCLGFBQXZCLEVBQXNDLEVBQXRDLENBQWpCO0FBQ0FDLHNCQUFjLENBQUMzQixTQUFmLEdBQTJCZixjQUEzQjtBQUNEO0FBQ0YsS0FoQk0sTUFnQkEsSUFBSWlDLFFBQVEsQ0FBQ0MsS0FBVCxJQUFrQixPQUF0QixFQUErQjtBQUNwQ0MsYUFBTyxDQUFDTCxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDQUssV0FBSyxDQUFDTixLQUFOLENBQVlDLE9BQVosR0FBc0IsTUFBdEI7QUFDQU0sZUFBUyxDQUFDUCxLQUFWLENBQWdCQyxPQUFoQixHQUEwQixPQUExQjtBQUNBTyxtQkFBYSxDQUFDUixLQUFkLENBQW9CQyxPQUFwQixHQUE4QixNQUE5QjtBQUNBUSxtQkFBYSxDQUFDVCxLQUFkLENBQW9CQyxPQUFwQixHQUE4QixNQUE5Qjs7QUFDQSxVQUFJWSxTQUFTLENBQUNULEtBQVYsSUFBbUIsRUFBdkIsRUFBMkI7QUFDekJRLHNCQUFjLENBQUMzQixTQUFmLEdBQTJCLFlBQTNCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wyQixzQkFBYyxDQUFDM0IsU0FBZixHQUEyQixhQUEzQjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRGlCLGdCQUFjOztBQUNkQyxVQUFRLENBQUNXLFFBQVQsR0FBb0IsWUFBWTtBQUM5Qlosa0JBQWM7QUFDZGxDLGVBQVc7QUFDWixHQUhELENBaEhtRCxDQXFIbkQ7OztBQUVBLE1BQ0VLLGNBQWMsQ0FBQ1gsc0JBQWYsQ0FBc0MsT0FBdEMsRUFBK0MsQ0FBL0MsS0FDQWUsTUFBTSxDQUFDaUMsR0FBUCxJQUFjLEVBRGQsSUFFQWpDLE1BQU0sQ0FBQ2lDLEdBQVAsQ0FBV0ssT0FBWCxDQUFtQixPQUFuQixLQUErQixDQUFDLENBSGxDLEVBSUU7QUFDQUMseUJBQXFCLENBQUNDLE9BQXRCLEdBQWdDLElBQWhDO0FBQ0QsR0FORCxNQU1PO0FBQ0xELHlCQUFxQixDQUFDQyxPQUF0QixHQUFnQyxLQUFoQztBQUNEOztBQUVERCx1QkFBcUIsQ0FBQ2pCLE9BQXRCLEdBQWdDLFlBQVk7QUFDMUMsUUFBSVcsR0FBSjs7QUFDQSxZQUFRUCxRQUFRLENBQUNDLEtBQWpCO0FBRUUsV0FBSyxTQUFMO0FBQ0UsWUFDRVEsY0FBYyxDQUFDM0IsU0FBZixJQUE0QixhQUE1QixJQUNBaUMsWUFBWSxDQUFDZCxLQUFiLElBQXNCLEVBRHRCLElBQzRCWSxxQkFBcUIsQ0FBQ0MsT0FBdEIsSUFBaUMsSUFEN0QsSUFFQXhDLE1BQU0sQ0FBQ2lDLEdBQVAsQ0FBV0ssT0FBWCxDQUFtQixPQUFuQixLQUErQixDQUFDLENBSGxDLEVBSUU7QUFDQUwsYUFBRyxHQUFJakMsTUFBTSxDQUFDaUMsR0FBUCxDQUFXSyxPQUFYLENBQW1CLFVBQW5CLEtBQWtDLENBQUMsQ0FBcEMsR0FDSkgsY0FBYyxDQUFDM0IsU0FBZixDQUF5QjBCLE9BQXpCLENBQWlDLFVBQWpDLEVBQTZDLG1CQUE3QyxJQUFvRSxlQURoRSxHQUVKQyxjQUFjLENBQUMzQixTQUFmLENBQXlCMEIsT0FBekIsQ0FBaUMsVUFBakMsRUFBNkMsbUJBQTdDLElBQW9FLDBCQUZ0RTtBQUdBbEMsZ0JBQU0sQ0FBQ2lDLEdBQVAsR0FBYUEsR0FBYjtBQUNELFNBVEQsTUFTTyxJQUNMRSxjQUFjLENBQUMzQixTQUFmLElBQTRCLGFBQTVCLElBQ0FpQyxZQUFZLENBQUNkLEtBQWIsSUFBc0IsRUFEdEIsSUFDNEJZLHFCQUFxQixDQUFDQyxPQUF0QixJQUFpQyxLQUQ3RCxJQUVBeEMsTUFBTSxDQUFDaUMsR0FBUCxDQUFXSyxPQUFYLENBQW1CLE9BQW5CLEtBQStCLENBQUMsQ0FIM0IsRUFJTDtBQUNBTCxhQUFHLEdBQUlqQyxNQUFNLENBQUNpQyxHQUFQLENBQVdLLE9BQVgsQ0FBbUIsVUFBbkIsS0FBa0MsQ0FBQyxDQUFwQyxHQUNKSCxjQUFjLENBQUMzQixTQUFmLENBQXlCMEIsT0FBekIsQ0FBaUMsVUFBakMsRUFBNkMsbUJBQTdDLENBREksR0FFSkMsY0FBYyxDQUFDM0IsU0FBZixDQUF5QjBCLE9BQXpCLENBQWlDLFVBQWpDLEVBQTZDLG1CQUE3QyxJQUFvRSxhQUZ0RTtBQUdBbEMsZ0JBQU0sQ0FBQ2lDLEdBQVAsR0FBYUEsR0FBYjtBQUNEOztBQUNEMUMsbUJBQVc7QUFDWDs7QUFDRixXQUFLLE9BQUw7QUFDRSxZQUNFNEMsY0FBYyxDQUFDM0IsU0FBZixJQUE0QixhQUE1QixJQUNBa0MsVUFBVSxDQUFDZixLQUFYLElBQW9CLEVBRHBCLElBQzBCWSxxQkFBcUIsQ0FBQ0MsT0FBdEIsSUFBaUMsSUFEM0QsSUFFQXhDLE1BQU0sQ0FBQ2lDLEdBQVAsQ0FBV0ssT0FBWCxDQUFtQixPQUFuQixLQUErQixDQUFDLENBSGxDLEVBSUU7QUFDQUwsYUFBRyxHQUFJakMsTUFBTSxDQUFDaUMsR0FBUCxDQUFXSyxPQUFYLENBQW1CLFVBQW5CLEtBQWtDLENBQUMsQ0FBcEMsR0FDSkgsY0FBYyxDQUFDM0IsU0FBZixDQUF5QjBCLE9BQXpCLENBQWlDLFdBQWpDLEVBQThDLHdCQUE5QyxJQUEwRSxnQkFEdEUsR0FFSkMsY0FBYyxDQUFDM0IsU0FBZixDQUF5QjBCLE9BQXpCLENBQWlDLFdBQWpDLEVBQThDLHdCQUE5QyxJQUEwRSwyQkFGNUU7QUFHQWxDLGdCQUFNLENBQUNpQyxHQUFQLEdBQWFBLEdBQWI7QUFDRCxTQVRELE1BU08sSUFDTEUsY0FBYyxDQUFDM0IsU0FBZixJQUE0QixhQUE1QixJQUNBa0MsVUFBVSxDQUFDZixLQUFYLElBQW9CLEVBRHBCLElBQzBCWSxxQkFBcUIsQ0FBQ0MsT0FBdEIsSUFBaUMsS0FEM0QsSUFFQXhDLE1BQU0sQ0FBQ2lDLEdBQVAsQ0FBV0ssT0FBWCxDQUFtQixPQUFuQixLQUErQixDQUFDLENBSDNCLEVBSUw7QUFDQUwsYUFBRyxHQUFJakMsTUFBTSxDQUFDaUMsR0FBUCxDQUFXSyxPQUFYLENBQW1CLFVBQW5CLEtBQWtDLENBQUMsQ0FBcEMsR0FDSkgsY0FBYyxDQUFDM0IsU0FBZixDQUF5QjBCLE9BQXpCLENBQWlDLFdBQWpDLEVBQThDLHdCQUE5QyxDQURJLEdBRUpDLGNBQWMsQ0FBQzNCLFNBQWYsQ0FBeUIwQixPQUF6QixDQUFpQyxXQUFqQyxFQUE4Qyx3QkFBOUMsSUFBMEUsYUFGNUU7QUFHQWxDLGdCQUFNLENBQUNpQyxHQUFQLEdBQWFBLEdBQWI7QUFDRDs7QUFDRDFDLG1CQUFXO0FBQ1g7QUE3Q0o7QUFnREQsR0FsREQsQ0FqSW1ELENBcUxuRDs7O0FBRUEsTUFDRUssY0FBYyxDQUFDUSxvQkFBZixDQUFvQyxRQUFwQyxFQUE4QyxDQUE5QyxLQUNBSixNQUFNLENBQUNpQyxHQUFQLElBQWMsRUFEZCxJQUVBakMsTUFBTSxDQUFDaUMsR0FBUCxDQUFXSyxPQUFYLENBQW1CLFVBQW5CLEtBQWtDLENBQUMsQ0FIckMsRUFJRTtBQUNBSyx5QkFBcUIsQ0FBQ0gsT0FBdEIsR0FBZ0MsSUFBaEM7QUFDRCxHQU5ELE1BTU87QUFDTEcseUJBQXFCLENBQUNILE9BQXRCLEdBQWdDLEtBQWhDO0FBQ0Q7O0FBRURHLHVCQUFxQixDQUFDckIsT0FBdEIsR0FBZ0MsWUFBWTtBQUMxQyxRQUFJVyxHQUFKOztBQUNBLFlBQVFQLFFBQVEsQ0FBQ0MsS0FBakI7QUFFRSxXQUFLLFNBQUw7QUFDRSxZQUNFUSxjQUFjLENBQUMzQixTQUFmLElBQTRCLGFBQTVCLElBQ0FpQyxZQUFZLENBQUNkLEtBQWIsSUFBc0IsRUFEdEIsSUFDNEJnQixxQkFBcUIsQ0FBQ0gsT0FBdEIsSUFBaUMsSUFEN0QsSUFFQXhDLE1BQU0sQ0FBQ2lDLEdBQVAsQ0FBV0ssT0FBWCxDQUFtQixVQUFuQixLQUFrQyxDQUFDLENBSHJDLEVBSUU7QUFDQUwsYUFBRyxHQUFJakMsTUFBTSxDQUFDaUMsR0FBUCxDQUFXSyxPQUFYLENBQW1CLE9BQW5CLEtBQStCLENBQUMsQ0FBakMsR0FDSkgsY0FBYyxDQUFDM0IsU0FBZixDQUF5QjBCLE9BQXpCLENBQWlDLFVBQWpDLEVBQTZDLG1CQUE3QyxJQUFvRSxhQURoRSxHQUVKQyxjQUFjLENBQUMzQixTQUFmLENBQXlCMEIsT0FBekIsQ0FBaUMsVUFBakMsRUFBNkMsbUJBQTdDLElBQW9FLDBCQUZ0RTtBQUdBbEMsZ0JBQU0sQ0FBQ2lDLEdBQVAsR0FBYUEsR0FBYjtBQUNELFNBVEQsTUFTTyxJQUNMRSxjQUFjLENBQUMzQixTQUFmLElBQTRCLGFBQTVCLElBQ0FpQyxZQUFZLENBQUNkLEtBQWIsSUFBc0IsRUFEdEIsSUFDNEJnQixxQkFBcUIsQ0FBQ0gsT0FBdEIsSUFBaUMsS0FEN0QsSUFFQXhDLE1BQU0sQ0FBQ2lDLEdBQVAsQ0FBV0ssT0FBWCxDQUFtQixVQUFuQixLQUFrQyxDQUFDLENBSDlCLEVBSUw7QUFDQUwsYUFBRyxHQUFJakMsTUFBTSxDQUFDaUMsR0FBUCxDQUFXSyxPQUFYLENBQW1CLE9BQW5CLEtBQStCLENBQUMsQ0FBakMsR0FDSkgsY0FBYyxDQUFDM0IsU0FBZixDQUF5QjBCLE9BQXpCLENBQWlDLFVBQWpDLEVBQTZDLG1CQUE3QyxDQURJLEdBRUpDLGNBQWMsQ0FBQzNCLFNBQWYsQ0FBeUIwQixPQUF6QixDQUFpQyxVQUFqQyxFQUE2QyxtQkFBN0MsSUFBb0UsZUFGdEU7QUFHQWxDLGdCQUFNLENBQUNpQyxHQUFQLEdBQWFBLEdBQWI7QUFDRDs7QUFDRDFDLG1CQUFXO0FBQ1g7O0FBQ0YsV0FBSyxPQUFMO0FBQ0UsWUFDRTRDLGNBQWMsQ0FBQzNCLFNBQWYsSUFBNEIsYUFBNUIsSUFDQWtDLFVBQVUsQ0FBQ2YsS0FBWCxJQUFvQixFQURwQixJQUMwQmdCLHFCQUFxQixDQUFDSCxPQUF0QixJQUFpQyxJQUQzRCxJQUVBeEMsTUFBTSxDQUFDaUMsR0FBUCxDQUFXSyxPQUFYLENBQW1CLFVBQW5CLEtBQWtDLENBQUMsQ0FIckMsRUFJRTtBQUNBTCxhQUFHLEdBQUlqQyxNQUFNLENBQUNpQyxHQUFQLENBQVdLLE9BQVgsQ0FBbUIsT0FBbkIsS0FBK0IsQ0FBQyxDQUFqQyxHQUNKSCxjQUFjLENBQUMzQixTQUFmLENBQXlCMEIsT0FBekIsQ0FBaUMsV0FBakMsRUFBOEMsd0JBQTlDLElBQTBFLGFBRHRFLEdBRUpDLGNBQWMsQ0FBQzNCLFNBQWYsQ0FBeUIwQixPQUF6QixDQUFpQyxXQUFqQyxFQUE4Qyx3QkFBOUMsSUFBMEUsMkJBRjVFO0FBR0FsQyxnQkFBTSxDQUFDaUMsR0FBUCxHQUFhQSxHQUFiO0FBQ0QsU0FURCxNQVNPLElBQ0xFLGNBQWMsQ0FBQzNCLFNBQWYsSUFBNEIsYUFBNUIsSUFDQWtDLFVBQVUsQ0FBQ2YsS0FBWCxJQUFvQixFQURwQixJQUMwQmdCLHFCQUFxQixDQUFDSCxPQUF0QixJQUFpQyxLQUQzRCxJQUVBeEMsTUFBTSxDQUFDaUMsR0FBUCxDQUFXSyxPQUFYLENBQW1CLFVBQW5CLEtBQWtDLENBQUMsQ0FIOUIsRUFJTDtBQUNBTCxhQUFHLEdBQUlqQyxNQUFNLENBQUNpQyxHQUFQLENBQVdLLE9BQVgsQ0FBbUIsT0FBbkIsS0FBK0IsQ0FBQyxDQUFqQyxHQUNKSCxjQUFjLENBQUMzQixTQUFmLENBQXlCMEIsT0FBekIsQ0FBaUMsV0FBakMsRUFBOEMsd0JBQTlDLENBREksR0FFSkMsY0FBYyxDQUFDM0IsU0FBZixDQUF5QjBCLE9BQXpCLENBQWlDLFdBQWpDLEVBQThDLHdCQUE5QyxJQUEwRSxnQkFGNUU7QUFHQWxDLGdCQUFNLENBQUNpQyxHQUFQLEdBQWFBLEdBQWI7QUFDRDs7QUFDRDFDLG1CQUFXO0FBQ1g7QUE3Q0o7QUFnREQsR0FsREQ7O0FBb0RBcUQsY0FBWSxDQUFDdEIsT0FBYixHQUF1QixZQUFZO0FBQ2pDLFFBQUlXLEdBQUcsR0FBRyxFQUFWO0FBQ0EsUUFBSVksY0FBYyxHQUFHLEVBQXJCOztBQUNBLFlBQVFuQixRQUFRLENBQUNDLEtBQWpCO0FBRUUsV0FBSyxTQUFMO0FBQ0UsWUFBSSxDQUFDL0IsY0FBYyxDQUFDWCxzQkFBZixDQUFzQyxPQUF0QyxFQUErQyxDQUEvQyxDQUFMLEVBQXdEO0FBQ3REZ0IsdUJBQWEsQ0FBQ08sU0FBZCxHQUEwQiwyUEFBMUI7QUFDQVIsZ0JBQU0sR0FBR0MsYUFBYSxDQUFDRyxvQkFBZCxDQUFtQyxRQUFuQyxFQUE2QyxDQUE3QyxDQUFUO0FBQ0Q7O0FBRUQsWUFBSXFDLFlBQVksQ0FBQ2QsS0FBYixJQUFzQixFQUExQixFQUE4QjtBQUM1Qk0sYUFBRyxHQUFHUSxZQUFZLENBQUNkLEtBQW5COztBQUNBLGNBQUksQ0FBQ1kscUJBQXFCLENBQUNDLE9BQXZCLElBQWtDLENBQUNHLHFCQUFxQixDQUFDSCxPQUE3RCxFQUFzRTtBQUNwRVAsZUFBRyxHQUFHQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxVQUFaLEVBQXdCLG1CQUF4QixDQUFOO0FBQ0QsV0FGRCxNQUVPLElBQUlLLHFCQUFxQixDQUFDQyxPQUF0QixJQUFpQ0cscUJBQXFCLENBQUNILE9BQTNELEVBQW9FO0FBQ3pFUCxlQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLFVBQVosRUFBd0IsbUJBQXhCLElBQStDLDBCQUFyRDtBQUNELFdBRk0sTUFFQSxJQUFJSyxxQkFBcUIsQ0FBQ0MsT0FBdEIsSUFBaUMsQ0FBQ0cscUJBQXFCLENBQUNILE9BQTVELEVBQXFFO0FBQzFFUCxlQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLFVBQVosRUFBd0IsbUJBQXhCLElBQStDLGVBQXJEO0FBQ0QsV0FGTSxNQUVBO0FBQ0xELGVBQUcsR0FBR0EsR0FBRyxDQUFDQyxPQUFKLENBQVksVUFBWixFQUF3QixtQkFBeEIsSUFBK0MsYUFBckQ7QUFDRDs7QUFDRGxDLGdCQUFNLENBQUNpQyxHQUFQLEdBQWFBLEdBQWI7QUFDQVEsc0JBQVksQ0FBQ2QsS0FBYixHQUFxQixFQUFyQjtBQUNBRix3QkFBYztBQUNkb0Isd0JBQWMsR0FBRyxJQUFJQyxNQUFKLENBQVcsNEJBQVgsRUFBeUMsSUFBekMsQ0FBakI7QUFDQTdDLHVCQUFhLENBQUNPLFNBQWQsR0FBMEJQLGFBQWEsQ0FBQ08sU0FBZCxDQUF3QjBCLE9BQXhCLENBQWdDVyxjQUFoQyxFQUFnRCxFQUFoRCxDQUExQjtBQUNBRSxlQUFLLENBQUM5QyxhQUFhLENBQUNPLFNBQWYsQ0FBTDtBQUNELFNBakJELE1BaUJPO0FBQ0x1QyxlQUFLLENBQUMsOEJBQUQsQ0FBTDtBQUNEOztBQUNEeEQsbUJBQVc7QUFDWDs7QUFDRixXQUFLLE9BQUw7QUFDRSxZQUFJLENBQUNLLGNBQWMsQ0FBQ1gsc0JBQWYsQ0FBc0MsT0FBdEMsRUFBK0MsQ0FBL0MsQ0FBTCxFQUF3RDtBQUN0RGdCLHVCQUFhLENBQUNPLFNBQWQsR0FBMEIsNFBBQTFCO0FBQ0Q7O0FBRUQsWUFBSWtDLFVBQVUsQ0FBQ2YsS0FBWCxJQUFvQixFQUF4QixFQUE0QjtBQUMxQk0sYUFBRyxHQUFHUyxVQUFVLENBQUNmLEtBQWpCOztBQUVBLGNBQUksQ0FBQ1kscUJBQXFCLENBQUNDLE9BQXZCLElBQWtDLENBQUNHLHFCQUFxQixDQUFDSCxPQUE3RCxFQUFzRTtBQUNwRVAsZUFBRyxHQUFHQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxXQUFaLEVBQXlCLHdCQUF6QixDQUFOO0FBQ0QsV0FGRCxNQUVPLElBQUlLLHFCQUFxQixDQUFDQyxPQUF0QixJQUFpQ0cscUJBQXFCLENBQUNILE9BQTNELEVBQW9FO0FBQ3pFUCxlQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLFdBQVosRUFBeUIsd0JBQXpCLElBQXFELDJCQUEzRDtBQUNELFdBRk0sTUFFQSxJQUFJSyxxQkFBcUIsQ0FBQ0MsT0FBdEIsSUFBaUMsQ0FBQ0cscUJBQXFCLENBQUNILE9BQTVELEVBQXFFO0FBQzFFUCxlQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLFdBQVosRUFBeUIsd0JBQXpCLElBQXFELGdCQUEzRDtBQUNELFdBRk0sTUFFQTtBQUNMRCxlQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLFdBQVosRUFBeUIsd0JBQXpCLElBQXFELGFBQTNEO0FBQ0Q7O0FBQ0RsQyxnQkFBTSxDQUFDaUMsR0FBUCxHQUFhQSxHQUFiO0FBQ0FTLG9CQUFVLENBQUNmLEtBQVgsR0FBbUIsRUFBbkI7QUFDQUYsd0JBQWM7QUFDZG9CLHdCQUFjLEdBQUcsSUFBSUMsTUFBSixDQUFXLDRCQUFYLEVBQXlDLElBQXpDLENBQWpCO0FBQ0E3Qyx1QkFBYSxDQUFDTyxTQUFkLEdBQTBCUCxhQUFhLENBQUNPLFNBQWQsQ0FBd0IwQixPQUF4QixDQUFnQ1csY0FBaEMsRUFBZ0QsRUFBaEQsQ0FBMUI7QUFDRCxTQWpCRCxNQWlCTztBQUNMRSxlQUFLLENBQUMsOEJBQUQsQ0FBTDtBQUNEOztBQUNEeEQsbUJBQVc7QUFDWDs7QUFDRixXQUFLLE9BQUw7QUFDRSxZQUFJNkMsU0FBUyxDQUFDVCxLQUFWLElBQW1CLEVBQXZCLEVBQTJCO0FBQ3pCMUIsdUJBQWEsQ0FBQ08sU0FBZCxHQUEwQjRCLFNBQVMsQ0FBQ1QsS0FBcEM7QUFDQUYsd0JBQWM7QUFDZG9CLHdCQUFjLEdBQUcsSUFBSUMsTUFBSixDQUFXLDRCQUFYLEVBQXlDLElBQXpDLENBQWpCO0FBQ0E3Qyx1QkFBYSxDQUFDTyxTQUFkLEdBQTBCUCxhQUFhLENBQUNPLFNBQWQsQ0FBd0IwQixPQUF4QixDQUFnQ1csY0FBaEMsRUFBZ0QsRUFBaEQsQ0FBMUI7QUFDRCxTQUxELE1BS087QUFDTEUsZUFBSyxDQUFDLHlCQUFELENBQUw7QUFDRDs7QUFDRHhELG1CQUFXO0FBQ1g7QUFuRUo7QUFzRUQsR0F6RUQsQ0FyUG1ELENBZ1VuRDs7O0FBQ0EsTUFBSXlELGdCQUFnQixDQUFDeEUsWUFBRCxDQUFoQixDQUErQnlFLFNBQS9CLElBQTRDLE1BQWhELEVBQXdEO0FBQ3REQyxxQkFBaUIsQ0FBQ1YsT0FBbEIsR0FBNEIsSUFBNUI7QUFDQVcsa0JBQWMsQ0FBQ1gsT0FBZixHQUF5QixLQUF6QjtBQUNBWSxxQkFBaUIsQ0FBQ1osT0FBbEIsR0FBNEIsS0FBNUI7QUFDRCxHQUpELE1BSU8sSUFBSVEsZ0JBQWdCLENBQUN4RSxZQUFELENBQWhCLENBQStCNkUsWUFBL0IsSUFBK0MsTUFBbkQsRUFBMkQ7QUFDaEVILHFCQUFpQixDQUFDVixPQUFsQixHQUE0QixLQUE1QjtBQUNBVyxrQkFBYyxDQUFDWCxPQUFmLEdBQXlCLElBQXpCO0FBQ0FZLHFCQUFpQixDQUFDWixPQUFsQixHQUE0QixLQUE1QjtBQUNELEdBSk0sTUFJQSxJQUFJUSxnQkFBZ0IsQ0FBQ3hFLFlBQUQsQ0FBaEIsQ0FBK0J5RSxTQUEvQixJQUE0QyxLQUE1QyxJQUFxREQsZ0JBQWdCLENBQUN4RSxZQUFELENBQWhCLENBQStCNkUsWUFBL0IsSUFBK0MsS0FBeEcsRUFBK0c7QUFDcEhILHFCQUFpQixDQUFDVixPQUFsQixHQUE0QixLQUE1QjtBQUNBVyxrQkFBYyxDQUFDWCxPQUFmLEdBQXlCLEtBQXpCO0FBQ0FZLHFCQUFpQixDQUFDWixPQUFsQixHQUE0QixJQUE1QjtBQUNEOztBQUNEVyxnQkFBYyxDQUFDN0IsT0FBZixHQUF5QixZQUFZO0FBQ25DOUMsZ0JBQVksQ0FBQytDLEtBQWIsQ0FBbUIwQixTQUFuQixHQUErQixLQUEvQjtBQUNBekUsZ0JBQVksQ0FBQytDLEtBQWIsQ0FBbUI4QixZQUFuQixHQUFrQyxNQUFsQztBQUNBOUQsZUFBVyxHQUh3QixDQUtuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVhEOztBQVlBNkQsbUJBQWlCLENBQUM5QixPQUFsQixHQUE0QixZQUFZO0FBQ3RDOUMsZ0JBQVksQ0FBQytDLEtBQWIsQ0FBbUIwQixTQUFuQixHQUErQixLQUEvQjtBQUNBekUsZ0JBQVksQ0FBQytDLEtBQWIsQ0FBbUI4QixZQUFuQixHQUFrQyxLQUFsQztBQUNBOUQsZUFBVyxHQUgyQixDQUt0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVhEOztBQVlBMkQsbUJBQWlCLENBQUM1QixPQUFsQixHQUE0QixZQUFZO0FBQ3RDOUMsZ0JBQVksQ0FBQytDLEtBQWIsQ0FBbUIwQixTQUFuQixHQUErQixNQUEvQjtBQUNBekUsZ0JBQVksQ0FBQytDLEtBQWIsQ0FBbUI4QixZQUFuQixHQUFrQyxLQUFsQztBQUNBOUQsZUFBVyxHQUgyQixDQUt0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVhELENBdFdtRCxDQW1YbkQ7OztBQUVBcEIsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkI0QyxHQUE3QixDQUFpQ1IsUUFBUSxDQUFDeUMsZ0JBQWdCLENBQUN4RSxZQUFELENBQWhCLENBQStCeUUsU0FBaEMsQ0FBekM7QUFDQTlFLEdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DNEMsR0FBbkMsQ0FBdUNSLFFBQVEsQ0FBQ3lDLGdCQUFnQixDQUFDeEUsWUFBRCxDQUFoQixDQUErQnlFLFNBQWhDLENBQS9DO0FBQ0E5RSxHQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjRDLEdBQS9CLENBQW1DUixRQUFRLENBQUN5QyxnQkFBZ0IsQ0FBQ3hFLFlBQUQsQ0FBaEIsQ0FBK0I4RSxXQUFoQyxDQUEzQztBQUNBbkYsR0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUM0QyxHQUFyQyxDQUF5Q1IsUUFBUSxDQUFDeUMsZ0JBQWdCLENBQUN4RSxZQUFELENBQWhCLENBQStCOEUsV0FBaEMsQ0FBakQ7QUFDQW5GLEdBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDNEMsR0FBaEMsQ0FBb0NSLFFBQVEsQ0FBQ3lDLGdCQUFnQixDQUFDeEUsWUFBRCxDQUFoQixDQUErQjZFLFlBQWhDLENBQTVDO0FBQ0FsRixHQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQzRDLEdBQXRDLENBQTBDUixRQUFRLENBQUN5QyxnQkFBZ0IsQ0FBQ3hFLFlBQUQsQ0FBaEIsQ0FBK0I2RSxZQUFoQyxDQUFsRDtBQUNBbEYsR0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI0QyxHQUE5QixDQUFrQ1IsUUFBUSxDQUFDeUMsZ0JBQWdCLENBQUN4RSxZQUFELENBQWhCLENBQStCK0UsVUFBaEMsQ0FBMUM7QUFDQXBGLEdBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DNEMsR0FBcEMsQ0FBd0NSLFFBQVEsQ0FBQ3lDLGdCQUFnQixDQUFDeEUsWUFBRCxDQUFoQixDQUErQitFLFVBQWhDLENBQWhEO0FBRUFwRixHQUFDLENBQUMsd0RBQUQsQ0FBRCxDQUE0REMsRUFBNUQsQ0FBK0QsT0FBL0QsRUFBd0UsWUFBWTtBQUNsRkQsS0FBQyxDQUFDcUIsR0FBRCxDQUFELENBQU9WLEdBQVAsQ0FBVyxZQUFYLEVBQXlCLEVBQXpCO0FBQ0EsUUFBSWlDLEdBQUcsR0FBRzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBVjtBQUNBNUMsS0FBQyxDQUFDcUIsR0FBRCxDQUFELENBQU9qQixJQUFQLENBQVksT0FBWixFQUFxQixVQUFVaUYsQ0FBVixFQUFhMUMsQ0FBYixFQUFnQjtBQUNuQyxhQUFPLENBQUNBLENBQUMsSUFBSSxFQUFOLElBQVksYUFBWixHQUE0QkMsR0FBNUIsR0FBa0MsZ0JBQXpDO0FBQ0QsS0FGRDs7QUFHQSxRQUFJNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQix3QkFBMUIsRUFBb0Q7QUFDbERKLE9BQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DNEMsR0FBbkMsQ0FBdUM1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQXZDO0FBQ0QsS0FGRCxNQUVPO0FBQ0w1QyxPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjRDLEdBQTdCLENBQWlDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUFqQztBQUNEOztBQUNEeEIsZUFBVztBQUNaLEdBWkQ7QUFhQXBCLEdBQUMsQ0FBQyw0REFBRCxDQUFELENBQWdFQyxFQUFoRSxDQUFtRSxPQUFuRSxFQUE0RSxZQUFZO0FBQ3RGRCxLQUFDLENBQUNxQixHQUFELENBQUQsQ0FBT1YsR0FBUCxDQUFXLGNBQVgsRUFBMkIsRUFBM0I7QUFDQSxRQUFJaUMsR0FBRyxHQUFHNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUFWO0FBQ0E1QyxLQUFDLENBQUNxQixHQUFELENBQUQsQ0FBT2pCLElBQVAsQ0FBWSxPQUFaLEVBQXFCLFVBQVVpRixDQUFWLEVBQWExQyxDQUFiLEVBQWdCO0FBQ25DLGFBQU8sQ0FBQ0EsQ0FBQyxJQUFJLEVBQU4sSUFBWSxlQUFaLEdBQThCQyxHQUE5QixHQUFvQyxnQkFBM0M7QUFDRCxLQUZEOztBQUdBLFFBQUk1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDBCQUExQixFQUFzRDtBQUNwREosT0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUM0QyxHQUFyQyxDQUF5QzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBekM7QUFDRCxLQUZELE1BRU87QUFDTDVDLE9BQUMsQ0FBQywyQkFBRCxDQUFELENBQStCNEMsR0FBL0IsQ0FBbUM1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQW5DO0FBQ0Q7O0FBQ0R4QixlQUFXO0FBQ1osR0FaRDtBQWFBcEIsR0FBQyxDQUFDLDhEQUFELENBQUQsQ0FBa0VDLEVBQWxFLENBQXFFLE9BQXJFLEVBQThFLFlBQVk7QUFDeEZELEtBQUMsQ0FBQ3FCLEdBQUQsQ0FBRCxDQUFPVixHQUFQLENBQVcsZUFBWCxFQUE0QixFQUE1QjtBQUNBLFFBQUlpQyxHQUFHLEdBQUc1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQVY7QUFDQTVDLEtBQUMsQ0FBQ3FCLEdBQUQsQ0FBRCxDQUFPakIsSUFBUCxDQUFZLE9BQVosRUFBcUIsVUFBVWlGLENBQVYsRUFBYTFDLENBQWIsRUFBZ0I7QUFDbkMsYUFBTyxDQUFDQSxDQUFDLElBQUksRUFBTixJQUFZLGdCQUFaLEdBQStCQyxHQUEvQixHQUFxQyxnQkFBNUM7QUFDRCxLQUZEOztBQUdBLFFBQUk1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDJCQUExQixFQUF1RDtBQUNyREosT0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0M0QyxHQUF0QyxDQUEwQzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBMUM7QUFDRCxLQUZELE1BRU87QUFDTDVDLE9BQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDNEMsR0FBaEMsQ0FBb0M1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQXBDO0FBQ0Q7O0FBQ0R4QixlQUFXO0FBQ1osR0FaRDtBQWFBcEIsR0FBQyxDQUFDLDBEQUFELENBQUQsQ0FBOERDLEVBQTlELENBQWlFLE9BQWpFLEVBQTBFLFlBQVk7QUFDcEZELEtBQUMsQ0FBQ3FCLEdBQUQsQ0FBRCxDQUFPVixHQUFQLENBQVcsYUFBWCxFQUEwQixFQUExQjtBQUNBLFFBQUlpQyxHQUFHLEdBQUc1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQVY7QUFDQTVDLEtBQUMsQ0FBQ3FCLEdBQUQsQ0FBRCxDQUFPakIsSUFBUCxDQUFZLE9BQVosRUFBcUIsVUFBVWlGLENBQVYsRUFBYTFDLENBQWIsRUFBZ0I7QUFDbkMsYUFBTyxDQUFDQSxDQUFDLElBQUksRUFBTixJQUFZLGNBQVosR0FBNkJDLEdBQTdCLEdBQW1DLGdCQUExQztBQUNELEtBRkQ7O0FBR0EsUUFBSTVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IseUJBQTFCLEVBQXFEO0FBQ25ESixPQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzRDLEdBQXBDLENBQXdDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUF4QztBQUNELEtBRkQsTUFFTztBQUNMNUMsT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI0QyxHQUE5QixDQUFrQzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBbEM7QUFDRDs7QUFDRHhCLGVBQVc7QUFDWixHQVpELEVBcmFtRCxDQW1ibkQ7O0FBQ0FwQixHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjRDLEdBQXpCLENBQTZCUixRQUFRLENBQUNwQyxDQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLGNBQWxCLENBQUQsQ0FBckM7QUFDQVgsR0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0QyxHQUEvQixDQUFtQ1IsUUFBUSxDQUFDcEMsQ0FBQyxDQUFDZSxVQUFELENBQUQsQ0FBY0osR0FBZCxDQUFrQixjQUFsQixDQUFELENBQTNDO0FBQ0FYLEdBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCNEMsR0FBMUIsQ0FBOEJSLFFBQVEsQ0FBQ3BDLENBQUMsQ0FBQ2UsVUFBRCxDQUFELENBQWNKLEdBQWQsQ0FBa0IsZUFBbEIsQ0FBRCxDQUF0QztBQUNBWCxHQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRDLEdBQWhDLENBQW9DUixRQUFRLENBQUNwQyxDQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLGVBQWxCLENBQUQsQ0FBNUM7QUFFQVgsR0FBQyxDQUFDLGdEQUFELENBQUQsQ0FBb0RDLEVBQXBELENBQXVELE9BQXZELEVBQWdFLFlBQVk7QUFDMUVELEtBQUMsQ0FBQ2UsVUFBRCxDQUFELENBQWNKLEdBQWQsQ0FBa0IsY0FBbEIsRUFBa0NYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsS0FBZ0IsSUFBbEQ7O0FBQ0EsUUFBSTVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0Isb0JBQTFCLEVBQWdEO0FBQzlDSixPQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjRDLEdBQS9CLENBQW1DNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUFuQztBQUNELEtBRkQsTUFFTztBQUNMNUMsT0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUI0QyxHQUF6QixDQUE2QjVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBN0I7QUFDRDs7QUFDRHhCLGVBQVc7QUFDWixHQVJEO0FBVUFwQixHQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkMsRUFBekIsQ0FBNEIsUUFBNUIsRUFBc0MsWUFBWTtBQUNoREQsS0FBQyxDQUFDZSxVQUFELENBQUQsQ0FBY0osR0FBZCxDQUFrQixjQUFsQixFQUFrQ1gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0YsSUFBUixDQUFhLGlCQUFiLEVBQWdDMUMsR0FBaEMsRUFBbEM7QUFDQXhCLGVBQVc7QUFDWixHQUhEO0FBS0FwQixHQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQkMsRUFBL0IsQ0FBa0MsUUFBbEMsRUFBNEMsWUFBWTtBQUN0REQsS0FBQyxDQUFDZSxVQUFELENBQUQsQ0FBY0osR0FBZCxDQUFrQixjQUFsQixFQUFrQ1gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUFsQztBQUNBeEIsZUFBVztBQUNaLEdBSEQ7QUFLQTs7QUFFQXBCLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCNEMsR0FBN0IsQ0FBaUNSLFFBQVEsQ0FBQ3BDLENBQUMsQ0FBQ3FCLEdBQUQsQ0FBRCxDQUFPVixHQUFQLENBQVcsa0JBQVgsQ0FBRCxDQUF6QztBQUNBWCxHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQzRDLEdBQW5DLENBQXVDUixRQUFRLENBQUNwQyxDQUFDLENBQUNxQixHQUFELENBQUQsQ0FBT1YsR0FBUCxDQUFXLGtCQUFYLENBQUQsQ0FBL0M7QUFDQVgsR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUM0QyxHQUFuQyxDQUF1Q1IsUUFBUSxDQUFDcEMsQ0FBQyxDQUFDcUIsR0FBRCxDQUFELENBQU9WLEdBQVAsQ0FBVyx3QkFBWCxDQUFELENBQS9DO0FBQ0FYLEdBQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDNEMsR0FBekMsQ0FBNkNSLFFBQVEsQ0FBQ3BDLENBQUMsQ0FBQ3FCLEdBQUQsQ0FBRCxDQUFPVixHQUFQLENBQVcsd0JBQVgsQ0FBRCxDQUFyRDtBQUVBWCxHQUFDLENBQUMsd0RBQUQsQ0FBRCxDQUE0REMsRUFBNUQsQ0FBK0QsT0FBL0QsRUFBd0UsWUFBWTtBQUNsRkQsS0FBQyxDQUFDZSxVQUFELENBQUQsQ0FBY0osR0FBZCxDQUFrQixrQkFBbEIsRUFBc0NYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsS0FBZ0IsSUFBdEQ7O0FBQ0EsUUFBSTVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0Isd0JBQTFCLEVBQW9EO0FBQ2xESixPQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQzRDLEdBQW5DLENBQXVDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUF2QztBQUNELEtBRkQsTUFFTztBQUNMNUMsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkI0QyxHQUE3QixDQUFpQzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBakM7QUFDRDs7QUFDRHhCLGVBQVc7QUFDWixHQVJEO0FBVUFwQixHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ0MsRUFBbkMsQ0FBc0MsUUFBdEMsRUFBZ0QsWUFBWTtBQUMxREQsS0FBQyxDQUFDZSxVQUFELENBQUQsQ0FBY0osR0FBZCxDQUFrQixrQkFBbEIsRUFBc0NYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNGLElBQVIsQ0FBYSxpQkFBYixFQUFnQzFDLEdBQWhDLEVBQXRDO0FBQ0F4QixlQUFXO0FBQ1osR0FIRDtBQUtBcEIsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLEVBQTdCLENBQWdDLFFBQWhDLEVBQTBDLFlBQVk7QUFDcERELEtBQUMsQ0FBQ2UsVUFBRCxDQUFELENBQWNKLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDWCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQXRDO0FBQ0F4QixlQUFXO0FBQ1osR0FIRDtBQUtBOztBQUVBOztBQUNBcEIsR0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0QyxHQUEvQixDQUFtQ1IsUUFBUSxDQUFDcEMsQ0FBQyxDQUFDcUIsR0FBRCxDQUFELENBQU9WLEdBQVAsQ0FBVyxvQkFBWCxDQUFELENBQTNDO0FBQ0FYLEdBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDNEMsR0FBckMsQ0FBeUNSLFFBQVEsQ0FBQ3BDLENBQUMsQ0FBQ3FCLEdBQUQsQ0FBRCxDQUFPVixHQUFQLENBQVcsb0JBQVgsQ0FBRCxDQUFqRDtBQUNBWCxHQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRDLEdBQWhDLENBQW9DUixRQUFRLENBQUNwQyxDQUFDLENBQUNxQixHQUFELENBQUQsQ0FBT1YsR0FBUCxDQUFXLHlCQUFYLENBQUQsQ0FBNUM7QUFDQVgsR0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0M0QyxHQUF0QyxDQUEwQ1IsUUFBUSxDQUFDcEMsQ0FBQyxDQUFDcUIsR0FBRCxDQUFELENBQU9WLEdBQVAsQ0FBVyx5QkFBWCxDQUFELENBQWxEO0FBRUFYLEdBQUMsQ0FBQyw0REFBRCxDQUFELENBQWdFQyxFQUFoRSxDQUFtRSxPQUFuRSxFQUE0RSxZQUFZO0FBQ3RGRCxLQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLG9CQUFsQixFQUF3Q1gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixLQUFnQixJQUF4RDs7QUFDQSxRQUFJNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQiwwQkFBMUIsRUFBc0Q7QUFDcERKLE9BQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDNEMsR0FBckMsQ0FBeUM1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQXpDO0FBQ0QsS0FGRCxNQUVPO0FBQ0w1QyxPQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjRDLEdBQS9CLENBQW1DNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUFuQztBQUNEOztBQUNEeEIsZUFBVztBQUNaLEdBUkQ7QUFTQXBCLEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCQyxFQUEvQixDQUFrQyxRQUFsQyxFQUE0QyxZQUFZO0FBQ3RERCxLQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLG9CQUFsQixFQUF3Q1gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0YsSUFBUixDQUFhLGlCQUFiLEVBQWdDMUMsR0FBaEMsRUFBeEM7QUFDQXhCLGVBQVc7QUFDWixHQUhEO0FBS0FwQixHQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQkMsRUFBL0IsQ0FBa0MsUUFBbEMsRUFBNEMsWUFBWTtBQUN0REQsS0FBQyxDQUFDZSxVQUFELENBQUQsQ0FBY0osR0FBZCxDQUFrQixvQkFBbEIsRUFBd0NYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBeEM7QUFDQXhCLGVBQVc7QUFDWixHQUhEO0FBS0E7O0FBRUE7O0FBQ0FwQixHQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRDLEdBQWhDLENBQW9DUixRQUFRLENBQUNwQyxDQUFDLENBQUNxQixHQUFELENBQUQsQ0FBT1YsR0FBUCxDQUFXLHFCQUFYLENBQUQsQ0FBNUM7QUFDQVgsR0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0M0QyxHQUF0QyxDQUEwQ1IsUUFBUSxDQUFDcEMsQ0FBQyxDQUFDcUIsR0FBRCxDQUFELENBQU9WLEdBQVAsQ0FBVyxxQkFBWCxDQUFELENBQWxEO0FBQ0FYLEdBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDNEMsR0FBdkMsQ0FBMkNSLFFBQVEsQ0FBQ3BDLENBQUMsQ0FBQ3FCLEdBQUQsQ0FBRCxDQUFPVixHQUFQLENBQVcsNEJBQVgsQ0FBRCxDQUFuRDtBQUNBWCxHQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2QzRDLEdBQTdDLENBQWlEUixRQUFRLENBQUNwQyxDQUFDLENBQUNxQixHQUFELENBQUQsQ0FBT1YsR0FBUCxDQUFXLDRCQUFYLENBQUQsQ0FBekQ7QUFFQVgsR0FBQyxDQUFDLDhEQUFELENBQUQsQ0FBa0VDLEVBQWxFLENBQXFFLE9BQXJFLEVBQThFLFlBQVk7QUFDeEZELEtBQUMsQ0FBQ2UsVUFBRCxDQUFELENBQWNKLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDWCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEtBQWdCLElBQXpEOztBQUNBLFFBQUk1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDJCQUExQixFQUF1RDtBQUNyREosT0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0M0QyxHQUF0QyxDQUEwQzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBMUM7QUFDRCxLQUZELE1BRU87QUFDTDVDLE9BQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDNEMsR0FBaEMsQ0FBb0M1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQXBDO0FBQ0Q7O0FBQ0R4QixlQUFXO0FBQ1osR0FSRDtBQVVBcEIsR0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NDLEVBQWhDLENBQW1DLFFBQW5DLEVBQTZDLFlBQVk7QUFDdkRELEtBQUMsQ0FBQ2UsVUFBRCxDQUFELENBQWNKLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDWCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzRixJQUFSLENBQWEsaUJBQWIsRUFBZ0MxQyxHQUFoQyxFQUF6QztBQUNBeEIsZUFBVztBQUNaLEdBSEQ7QUFLQXBCLEdBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDQyxFQUFoQyxDQUFtQyxRQUFuQyxFQUE2QyxZQUFZO0FBQ3ZERCxLQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLHFCQUFsQixFQUF5Q1gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUF6QztBQUNBeEIsZUFBVztBQUNaLEdBSEQ7QUFLQTs7QUFFQTs7QUFDQXBCLEdBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCNEMsR0FBOUIsQ0FBa0NSLFFBQVEsQ0FBQ3BDLENBQUMsQ0FBQ3FCLEdBQUQsQ0FBRCxDQUFPVixHQUFQLENBQVcsbUJBQVgsQ0FBRCxDQUExQztBQUNBWCxHQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzRDLEdBQXBDLENBQXdDUixRQUFRLENBQUNwQyxDQUFDLENBQUNxQixHQUFELENBQUQsQ0FBT1YsR0FBUCxDQUFXLG1CQUFYLENBQUQsQ0FBaEQ7QUFDQVgsR0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0M0QyxHQUF0QyxDQUEwQ1IsUUFBUSxDQUFDcEMsQ0FBQyxDQUFDcUIsR0FBRCxDQUFELENBQU9WLEdBQVAsQ0FBVywyQkFBWCxDQUFELENBQWxEO0FBQ0FYLEdBQUMsQ0FBQyx3Q0FBRCxDQUFELENBQTRDNEMsR0FBNUMsQ0FBZ0RSLFFBQVEsQ0FBQ3BDLENBQUMsQ0FBQ3FCLEdBQUQsQ0FBRCxDQUFPVixHQUFQLENBQVcsMkJBQVgsQ0FBRCxDQUF4RDtBQUVBWCxHQUFDLENBQUMsMERBQUQsQ0FBRCxDQUE4REMsRUFBOUQsQ0FBaUUsT0FBakUsRUFBMEUsWUFBWTtBQUNwRkQsS0FBQyxDQUFDZSxVQUFELENBQUQsQ0FBY0osR0FBZCxDQUFrQixtQkFBbEIsRUFBdUNYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsS0FBZ0IsSUFBdkQ7O0FBQ0EsUUFBSTVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IseUJBQTFCLEVBQXFEO0FBQ25ESixPQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzRDLEdBQXBDLENBQXdDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUF4QztBQUNELEtBRkQsTUFFTztBQUNMNUMsT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI0QyxHQUE5QixDQUFrQzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBbEM7QUFDRDs7QUFDRHhCLGVBQVc7QUFDWixHQVJEO0FBVUFwQixHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkMsRUFBOUIsQ0FBaUMsUUFBakMsRUFBMkMsWUFBWTtBQUNyREQsS0FBQyxDQUFDZSxVQUFELENBQUQsQ0FBY0osR0FBZCxDQUFrQixtQkFBbEIsRUFBdUNYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNGLElBQVIsQ0FBYSxpQkFBYixFQUFnQzFDLEdBQWhDLEVBQXZDO0FBQ0F4QixlQUFXO0FBQ1osR0FIRDtBQUtBcEIsR0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJDLEVBQTlCLENBQWlDLFFBQWpDLEVBQTJDLFlBQVk7QUFDckRELEtBQUMsQ0FBQ2UsVUFBRCxDQUFELENBQWNKLEdBQWQsQ0FBa0IsbUJBQWxCLEVBQXVDWCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQXZDO0FBQ0F4QixlQUFXO0FBQ1osR0FIRDtBQUtBOztBQUVBOztBQUNBZCxVQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDNEMsT0FBOUMsR0FBd0QsWUFBWTtBQUNsRTdDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3QzZDLEtBQXhDLENBQThDQyxPQUE5QyxHQUF3RCxPQUF4RDtBQUNBLFFBQUlrQyxFQUFFLEdBQUd2RixDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzRDLEdBQXBDLEtBQTRDLElBQXJEO0FBQ0EsUUFBSTRDLEVBQUUsR0FBR3hGLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDNEMsR0FBbEMsS0FBMEMsSUFBbkQ7QUFDQSxRQUFJNkMsR0FBRyxHQUFHekYsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI0QyxHQUE5QixLQUFzQyxJQUFoRDtBQUNBLFFBQUk4QyxJQUFJLEdBQUcxRixDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRDLEdBQWhDLEtBQXdDLElBQW5EO0FBQ0EsUUFBSStDLEdBQUcsR0FBR0MsUUFBUSxDQUFDNUYsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0QyxHQUEvQixFQUFELEVBQXVDNUMsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxLQUF5QyxHQUFoRixDQUFsQjtBQUNBLFFBQUlpRCxLQUFLLEdBQUc3RixDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjZDLElBQS9CLENBQW9DLFNBQXBDLEtBQWtELElBQWxELEdBQXlELE9BQXpELEdBQW1FLEVBQS9FO0FBQ0EsUUFBSWlELEtBQUssR0FBR1AsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLElBQWxDLEdBQXlDLEdBQXpDLEdBQStDQyxHQUEvQyxHQUFxRCxHQUFyRCxHQUEyREUsS0FBdkU7O0FBQ0EsUUFBSTdGLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCNkMsSUFBL0IsQ0FBb0MsU0FBcEMsS0FBa0QsSUFBdEQsRUFBNEQ7QUFDMUQ3QyxPQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLFlBQWxCLEVBQWdDbUYsS0FBaEM7QUFDRCxLQUZELE1BRU87QUFDTDlGLE9BQUMsQ0FBQ3dCLE9BQUQsQ0FBRCxDQUFXYixHQUFYLENBQWUsWUFBZixFQUE2Qm1GLEtBQTdCO0FBQ0Q7O0FBQ0QxRSxlQUFXO0FBQ1osR0FmRDs7QUFnQkFkLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0M0QyxPQUEvQyxHQUF5RCxZQUFZO0FBQ25FN0MsWUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDNkMsS0FBeEMsQ0FBOENDLE9BQTlDLEdBQXdELE1BQXhEO0FBQ0FyRCxLQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLFlBQWxCLEVBQWdDLE1BQWhDO0FBQ0FYLEtBQUMsQ0FBQ3dCLE9BQUQsQ0FBRCxDQUFXYixHQUFYLENBQWUsWUFBZixFQUE2QixNQUE3QjtBQUNBUyxlQUFXO0FBQ1osR0FMRDs7QUFPQXBCLEdBQUMsQ0FBQyxzRUFBRCxDQUFELENBQTBFQyxFQUExRSxDQUE2RSxPQUE3RSxFQUFzRixZQUFZO0FBQ2hHLFFBQUlzRixFQUFFLEdBQUd2RixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEtBQWdCLElBQXpCO0FBQ0EsUUFBSTRDLEVBQUUsR0FBR3hGLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDNEMsR0FBbEMsS0FBMEMsSUFBbkQ7QUFDQSxRQUFJNkMsR0FBRyxHQUFHekYsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI0QyxHQUE5QixLQUFzQyxJQUFoRDtBQUNBLFFBQUk4QyxJQUFJLEdBQUcxRixDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRDLEdBQWhDLEtBQXdDLElBQW5EO0FBQ0EsUUFBSStDLEdBQUcsR0FBR0MsUUFBUSxDQUFDNUYsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0QyxHQUEvQixFQUFELEVBQXVDNUMsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxLQUF5QyxHQUFoRixDQUFsQjtBQUNBLFFBQUlpRCxLQUFLLEdBQUc3RixDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjZDLElBQS9CLENBQW9DLFNBQXBDLEtBQWtELElBQWxELEdBQXlELE9BQXpELEdBQW1FLEVBQS9FO0FBQ0EsUUFBSWlELEtBQUssR0FBR1AsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLElBQWxDLEdBQXlDLEdBQXpDLEdBQStDQyxHQUEvQyxHQUFxRCxHQUFyRCxHQUEyREUsS0FBdkU7O0FBQ0EsUUFBSTdGLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCNkMsSUFBL0IsQ0FBb0MsU0FBcEMsS0FBa0QsSUFBdEQsRUFBNEQ7QUFDMUQ3QyxPQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLFlBQWxCLEVBQWdDbUYsS0FBaEM7QUFDRCxLQUZELE1BRU87QUFDTDlGLE9BQUMsQ0FBQ3dCLE9BQUQsQ0FBRCxDQUFXYixHQUFYLENBQWUsWUFBZixFQUE2Qm1GLEtBQTdCO0FBQ0Q7O0FBQ0QsUUFBSTlGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsK0JBQTFCLEVBQTJEO0FBQ3pESixPQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQzRDLEdBQTFDLENBQThDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUE5QztBQUNELEtBRkQsTUFFTztBQUNMNUMsT0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0M0QyxHQUFwQyxDQUF3QzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBeEM7QUFDRDs7QUFDRHhCLGVBQVc7QUFDWixHQW5CRDtBQXFCQXBCLEdBQUMsQ0FBQyxrRUFBRCxDQUFELENBQXNFQyxFQUF0RSxDQUF5RSxPQUF6RSxFQUFrRixZQUFZO0FBQzVGLFFBQUlzRixFQUFFLEdBQUd2RixDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzRDLEdBQXBDLEtBQTRDLElBQXJEO0FBQ0EsUUFBSTRDLEVBQUUsR0FBR3hGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsS0FBZ0IsSUFBekI7QUFDQSxRQUFJNkMsR0FBRyxHQUFHekYsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI0QyxHQUE5QixLQUFzQyxJQUFoRDtBQUNBLFFBQUk4QyxJQUFJLEdBQUcxRixDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRDLEdBQWhDLEtBQXdDLElBQW5EO0FBQ0EsUUFBSStDLEdBQUcsR0FBR0MsUUFBUSxDQUFDNUYsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0QyxHQUEvQixFQUFELEVBQXVDNUMsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxLQUF5QyxHQUFoRixDQUFsQjtBQUNBLFFBQUlpRCxLQUFLLEdBQUc3RixDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjZDLElBQS9CLENBQW9DLFNBQXBDLEtBQWtELElBQWxELEdBQXlELE9BQXpELEdBQW1FLEVBQS9FO0FBQ0EsUUFBSWlELEtBQUssR0FBR1AsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLElBQWxDLEdBQXlDLEdBQXpDLEdBQStDQyxHQUEvQyxHQUFxRCxHQUFyRCxHQUEyREUsS0FBdkU7O0FBQ0EsUUFBSTdGLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCNkMsSUFBL0IsQ0FBb0MsU0FBcEMsS0FBa0QsSUFBdEQsRUFBNEQ7QUFDMUQ3QyxPQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLFlBQWxCLEVBQWdDbUYsS0FBaEM7QUFDRCxLQUZELE1BRU87QUFDTDlGLE9BQUMsQ0FBQ3dCLE9BQUQsQ0FBRCxDQUFXYixHQUFYLENBQWUsWUFBZixFQUE2Qm1GLEtBQTdCO0FBQ0Q7O0FBQ0QsUUFBSTlGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsNkJBQTFCLEVBQXlEO0FBQ3ZESixPQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3QzRDLEdBQXhDLENBQTRDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUE1QztBQUNELEtBRkQsTUFFTztBQUNMNUMsT0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0M0QyxHQUFsQyxDQUFzQzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBdEM7QUFDRDs7QUFDRHhCLGVBQVc7QUFDWixHQW5CRDtBQXFCQXBCLEdBQUMsQ0FBQywwREFBRCxDQUFELENBQThEQyxFQUE5RCxDQUFpRSxPQUFqRSxFQUEwRSxZQUFZO0FBQ3BGLFFBQUlzRixFQUFFLEdBQUd2RixDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzRDLEdBQXBDLEtBQTRDLElBQXJEO0FBQ0EsUUFBSTRDLEVBQUUsR0FBR3hGLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDNEMsR0FBbEMsS0FBMEMsSUFBbkQ7QUFDQSxRQUFJNkMsR0FBRyxHQUFHekYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixLQUFnQixJQUExQjtBQUNBLFFBQUk4QyxJQUFJLEdBQUcxRixDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRDLEdBQWhDLEtBQXdDLElBQW5EO0FBQ0EsUUFBSStDLEdBQUcsR0FBR0MsUUFBUSxDQUFDNUYsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0QyxHQUEvQixFQUFELEVBQXVDNUMsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxLQUF5QyxHQUFoRixDQUFsQjtBQUNBLFFBQUlpRCxLQUFLLEdBQUc3RixDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjZDLElBQS9CLENBQW9DLFNBQXBDLEtBQWtELElBQWxELEdBQXlELE9BQXpELEdBQW1FLEVBQS9FO0FBQ0EsUUFBSWlELEtBQUssR0FBR1AsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLElBQWxDLEdBQXlDLEdBQXpDLEdBQStDQyxHQUEvQyxHQUFxRCxHQUFyRCxHQUEyREUsS0FBdkU7O0FBQ0EsUUFBSTdGLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCNkMsSUFBL0IsQ0FBb0MsU0FBcEMsS0FBa0QsSUFBdEQsRUFBNEQ7QUFDMUQ3QyxPQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLFlBQWxCLEVBQWdDbUYsS0FBaEM7QUFDRCxLQUZELE1BRU87QUFDTDlGLE9BQUMsQ0FBQ3dCLE9BQUQsQ0FBRCxDQUFXYixHQUFYLENBQWUsWUFBZixFQUE2Qm1GLEtBQTdCO0FBQ0Q7O0FBQ0QsUUFBSTlGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IseUJBQTFCLEVBQXFEO0FBQ25ESixPQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzRDLEdBQXBDLENBQXdDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUF4QztBQUNELEtBRkQsTUFFTztBQUNMNUMsT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI0QyxHQUE5QixDQUFrQzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBbEM7QUFDRDs7QUFDRHhCLGVBQVc7QUFDWixHQW5CRDtBQXFCQXBCLEdBQUMsQ0FBQyw4REFBRCxDQUFELENBQWtFQyxFQUFsRSxDQUFxRSxPQUFyRSxFQUE4RSxZQUFZO0FBQ3hGLFFBQUlzRixFQUFFLEdBQUd2RixDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzRDLEdBQXBDLEtBQTRDLElBQXJEO0FBQ0EsUUFBSTRDLEVBQUUsR0FBR3hGLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDNEMsR0FBbEMsS0FBMEMsSUFBbkQ7QUFDQSxRQUFJNkMsR0FBRyxHQUFHekYsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI0QyxHQUE5QixLQUFzQyxJQUFoRDtBQUNBLFFBQUk4QyxJQUFJLEdBQUcxRixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEtBQWdCLElBQTNCO0FBQ0EsUUFBSStDLEdBQUcsR0FBR0MsUUFBUSxDQUFDNUYsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0QyxHQUEvQixFQUFELEVBQXVDNUMsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxLQUF5QyxHQUFoRixDQUFsQjtBQUNBLFFBQUlpRCxLQUFLLEdBQUc3RixDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjZDLElBQS9CLENBQW9DLFNBQXBDLEtBQWtELElBQWxELEdBQXlELE9BQXpELEdBQW1FLEVBQS9FO0FBQ0EsUUFBSWlELEtBQUssR0FBR1AsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLElBQWxDLEdBQXlDLEdBQXpDLEdBQStDQyxHQUEvQyxHQUFxRCxHQUFyRCxHQUEyREUsS0FBdkU7O0FBQ0EsUUFBSTdGLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCNkMsSUFBL0IsQ0FBb0MsU0FBcEMsS0FBa0QsSUFBdEQsRUFBNEQ7QUFDMUQ3QyxPQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLFlBQWxCLEVBQWdDbUYsS0FBaEM7QUFDRCxLQUZELE1BRU87QUFDTDlGLE9BQUMsQ0FBQ3dCLE9BQUQsQ0FBRCxDQUFXYixHQUFYLENBQWUsWUFBZixFQUE2Qm1GLEtBQTdCO0FBQ0Q7O0FBQ0QsUUFBSTlGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsMkJBQTFCLEVBQXVEO0FBQ3JESixPQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQzRDLEdBQXRDLENBQTBDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUExQztBQUNELEtBRkQsTUFFTztBQUNMNUMsT0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0M0QyxHQUFoQyxDQUFvQzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBcEM7QUFDRDs7QUFDRHhCLGVBQVc7QUFDWixHQW5CRDtBQXFCQXBCLEdBQUMsQ0FBQyxnRUFBRCxDQUFELENBQW9FQyxFQUFwRSxDQUF1RSxPQUF2RSxFQUFnRixZQUFZO0FBQzFGLFFBQUlzRixFQUFFLEdBQUd2RixDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzRDLEdBQXBDLEtBQTRDLElBQXJEO0FBQ0EsUUFBSTRDLEVBQUUsR0FBR3hGLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDNEMsR0FBbEMsS0FBMEMsSUFBbkQ7QUFDQSxRQUFJNkMsR0FBRyxHQUFHekYsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI0QyxHQUE5QixLQUFzQyxJQUFoRDtBQUNBLFFBQUk4QyxJQUFJLEdBQUcxRixDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRDLEdBQWhDLEtBQXdDLElBQW5EO0FBQ0EsUUFBSStDLEdBQUcsR0FBR0MsUUFBUSxDQUFDNUYsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0QyxHQUEvQixFQUFELEVBQXVDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixLQUFnQixHQUF2RCxDQUFsQjtBQUNBLFFBQUlpRCxLQUFLLEdBQUc3RixDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjZDLElBQS9CLENBQW9DLFNBQXBDLEtBQWtELElBQWxELEdBQXlELE9BQXpELEdBQW1FLEVBQS9FO0FBQ0EsUUFBSWlELEtBQUssR0FBR1AsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLElBQWxDLEdBQXlDLEdBQXpDLEdBQStDQyxHQUEvQyxHQUFxRCxHQUFyRCxHQUEyREUsS0FBdkU7O0FBQ0EsUUFBSTdGLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCNkMsSUFBL0IsQ0FBb0MsU0FBcEMsS0FBa0QsSUFBdEQsRUFBNEQ7QUFDMUQ3QyxPQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLFlBQWxCLEVBQWdDbUYsS0FBaEM7QUFDRCxLQUZELE1BRU87QUFDTDlGLE9BQUMsQ0FBQ3dCLE9BQUQsQ0FBRCxDQUFXYixHQUFYLENBQWUsWUFBZixFQUE2Qm1GLEtBQTdCO0FBQ0Q7O0FBQ0QsUUFBSTlGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsNEJBQTFCLEVBQXdEO0FBQ3RESixPQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1QzRDLEdBQXZDLENBQTJDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUEzQztBQUNELEtBRkQsTUFFTztBQUNMNUMsT0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxDQUFxQzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBckM7QUFDRDs7QUFDRHhCLGVBQVc7QUFDWixHQW5CRDtBQXFCQXBCLEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCQyxFQUEvQixDQUFrQyxRQUFsQyxFQUE0QyxZQUFZO0FBQ3RELFFBQUlzRixFQUFFLEdBQUd2RixDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzRDLEdBQXBDLEtBQTRDLElBQXJEO0FBQ0EsUUFBSTRDLEVBQUUsR0FBR3hGLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDNEMsR0FBbEMsS0FBMEMsSUFBbkQ7QUFDQSxRQUFJNkMsR0FBRyxHQUFHekYsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI0QyxHQUE5QixLQUFzQyxJQUFoRDtBQUNBLFFBQUk4QyxJQUFJLEdBQUcxRixDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRDLEdBQWhDLEtBQXdDLElBQW5EO0FBQ0EsUUFBSStDLEdBQUcsR0FBR0MsUUFBUSxDQUFDNUYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUFELEVBQWdCNUMsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxLQUF5QyxHQUF6RCxDQUFsQjtBQUNBLFFBQUlpRCxLQUFLLEdBQUc3RixDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjZDLElBQS9CLENBQW9DLFNBQXBDLEtBQWtELElBQWxELEdBQXlELE9BQXpELEdBQW1FLEVBQS9FO0FBQ0EsUUFBSWlELEtBQUssR0FBR1AsRUFBRSxHQUFHLEdBQUwsR0FBV0MsRUFBWCxHQUFnQixHQUFoQixHQUFzQkMsR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLElBQWxDLEdBQXlDLEdBQXpDLEdBQStDQyxHQUEvQyxHQUFxRCxHQUFyRCxHQUEyREUsS0FBdkU7O0FBQ0EsUUFBSTdGLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCNkMsSUFBL0IsQ0FBb0MsU0FBcEMsS0FBa0QsSUFBdEQsRUFBNEQ7QUFDMUQ3QyxPQUFDLENBQUNlLFVBQUQsQ0FBRCxDQUFjSixHQUFkLENBQWtCLFlBQWxCLEVBQWdDbUYsS0FBaEM7QUFDRCxLQUZELE1BRU87QUFDTDlGLE9BQUMsQ0FBQ3dCLE9BQUQsQ0FBRCxDQUFXYixHQUFYLENBQWUsWUFBZixFQUE2Qm1GLEtBQTdCO0FBQ0Q7O0FBQ0QxRSxlQUFXO0FBQ1osR0FkRDtBQWdCQXBCLEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCQyxFQUEvQixDQUFrQyxRQUFsQyxFQUE0QyxZQUFZO0FBQ3RELFFBQUlzRixFQUFFLEdBQUd2RixDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzRDLEdBQXBDLEtBQTRDLElBQXJEO0FBQ0EsUUFBSTRDLEVBQUUsR0FBR3hGLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDNEMsR0FBbEMsS0FBMEMsSUFBbkQ7QUFDQSxRQUFJNkMsR0FBRyxHQUFHekYsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI0QyxHQUE5QixLQUFzQyxJQUFoRDtBQUNBLFFBQUk4QyxJQUFJLEdBQUcxRixDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRDLEdBQWhDLEtBQXdDLElBQW5EO0FBQ0EsUUFBSStDLEdBQUcsR0FBR0MsUUFBUSxDQUFDNUYsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0QyxHQUEvQixFQUFELEVBQXVDNUMsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxLQUF5QyxHQUFoRixDQUFsQjtBQUNBLFFBQUlpRCxLQUFLLEdBQUc3RixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE2QyxJQUFSLENBQWEsU0FBYixLQUEyQixJQUEzQixHQUFrQyxPQUFsQyxHQUE0QyxFQUF4RDtBQUNBLFFBQUlpRCxLQUFLLEdBQUdQLEVBQUUsR0FBRyxHQUFMLEdBQVdDLEVBQVgsR0FBZ0IsR0FBaEIsR0FBc0JDLEdBQXRCLEdBQTRCLEdBQTVCLEdBQWtDQyxJQUFsQyxHQUF5QyxHQUF6QyxHQUErQ0MsR0FBL0MsR0FBcUQsR0FBckQsR0FBMkRFLEtBQXZFOztBQUNBLFFBQUk3RixDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjZDLElBQS9CLENBQW9DLFNBQXBDLEtBQWtELElBQXRELEVBQTREO0FBQzFEN0MsT0FBQyxDQUFDZSxVQUFELENBQUQsQ0FBY0osR0FBZCxDQUFrQixZQUFsQixFQUFnQ21GLEtBQWhDO0FBQ0QsS0FGRCxNQUVPO0FBQ0w5RixPQUFDLENBQUN3QixPQUFELENBQUQsQ0FBV2IsR0FBWCxDQUFlLFlBQWYsRUFBNkJtRixLQUE3QjtBQUNEOztBQUNEMUUsZUFBVztBQUNaLEdBZEQ7QUFnQkE7O0FBRUE7O0FBRUFwQixHQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ0MsRUFBakMsQ0FBb0MsUUFBcEMsRUFBOEMsWUFBWTtBQUN4RCxRQUFJRCxDQUFDLENBQUMsSUFBRCxDQUFELElBQVcsTUFBZixFQUF1QjtBQUNyQkEsT0FBQyxDQUFDd0IsT0FBRCxDQUFELENBQVdiLEdBQVgsQ0FBZSxnQkFBZixFQUFpQ1gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUFqQztBQUNBNUMsT0FBQyxDQUFDd0IsT0FBRCxDQUFELENBQVdiLEdBQVgsQ0FBZSxpQkFBZixFQUFrQ1gsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0M0QyxHQUFsQyxLQUEwQyxHQUE1RTtBQUNBNUMsT0FBQyxDQUFDd0IsT0FBRCxDQUFELENBQVdiLEdBQVgsQ0FBZSxvQkFBZixFQUFxQ1gsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUM0QyxHQUFyQyxLQUE2QyxHQUFsRjtBQUNEOztBQUNEeEIsZUFBVztBQUNaLEdBUEQ7QUFTQXBCLEdBQUMsQ0FBQyxrRUFBRCxDQUFELENBQXNFQyxFQUF0RSxDQUF5RSxPQUF6RSxFQUFrRixZQUFZO0FBQzVGRCxLQUFDLENBQUN3QixPQUFELENBQUQsQ0FBV2IsR0FBWCxDQUFlLGlCQUFmLEVBQWtDWCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEtBQWdCLEdBQWxEOztBQUNBLFFBQUk1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDZCQUExQixFQUF5RDtBQUN2REosT0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0M0QyxHQUF4QyxDQUE0QzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBNUM7QUFDRCxLQUZELE1BRU87QUFDTDVDLE9BQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDNEMsR0FBbEMsQ0FBc0M1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQXRDO0FBQ0Q7O0FBQ0R4QixlQUFXO0FBQ1osR0FSRDtBQVVBcEIsR0FBQyxDQUFDLHdFQUFELENBQUQsQ0FBNEVDLEVBQTVFLENBQStFLE9BQS9FLEVBQXdGLFlBQVk7QUFDbEdELEtBQUMsQ0FBQ3dCLE9BQUQsQ0FBRCxDQUFXYixHQUFYLENBQWUsb0JBQWYsRUFBcUNYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsS0FBZ0IsR0FBckQ7O0FBQ0EsUUFBSTVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsZ0NBQTFCLEVBQTREO0FBQzFESixPQUFDLENBQUMsdUNBQUQsQ0FBRCxDQUEyQzRDLEdBQTNDLENBQStDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUEvQztBQUNELEtBRkQsTUFFTztBQUNMNUMsT0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUM0QyxHQUFyQyxDQUF5QzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBekM7QUFDRDs7QUFDRHhCLGVBQVc7QUFDWixHQVJEO0FBVUE7O0FBRUE7O0FBRUE7O0FBR0EsTUFBSWQsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQVljLEdBQUcsQ0FBQ2pCLElBQUosQ0FBUyxJQUFULENBQXBDLENBQUosRUFBeUQ7QUFDdkQyQixrQkFBYyxDQUFDc0MsT0FBZixHQUF5QixJQUF6QjtBQUNELEdBRkQsTUFFTztBQUNMdEMsa0JBQWMsQ0FBQ3NDLE9BQWYsR0FBeUIsS0FBekI7QUFDRDs7QUFFRHJFLEdBQUMsQ0FBQyx1TkFBRCxDQUFELENBQTJOQyxFQUEzTixDQUE4TixPQUE5TixFQUF1TyxZQUFZO0FBQ2pQLFFBQUk4RixFQUFFLEdBQUcxRSxHQUFHLENBQUNqQixJQUFKLENBQVMsSUFBVCxDQUFUO0FBRUEsUUFBSTRGLEtBQUssR0FBR2hHLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCNEMsR0FBL0IsS0FBdUMsSUFBbkQ7QUFDQSxRQUFJcUQsTUFBTSxHQUFHakcsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxLQUF5QyxFQUF0RDtBQUNBLFFBQUlzRCxNQUFNLEdBQUc5RCxRQUFRLENBQUNwQyxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQzRDLEdBQWpDLEVBQUQsQ0FBckI7QUFFQSxRQUFJVCxJQUFJLEdBQUc2RCxLQUFLLEdBQUdDLE1BQVIsR0FBaUJDLE1BQTVCO0FBRUEvRCxRQUFJLEdBQUdBLElBQUksR0FBRyxJQUFkOztBQUdBLFFBQUlKLGNBQWMsQ0FBQ3NDLE9BQWYsSUFBMEIsSUFBOUIsRUFBb0M7QUFDbENyRSxPQUFDLENBQUMsYUFBYStGLEVBQWQsQ0FBRCxDQUFtQkksTUFBbkI7QUFDQW5HLE9BQUMsQ0FBQyxXQUFELENBQUQsQ0FBZW9HLE1BQWYsQ0FBc0IsbUNBQW1DTCxFQUFuQyxHQUF3QywyQkFBeEMsR0FBc0UsQ0FBQ0EsRUFBRCxFQUFLNUQsSUFBTCxDQUF0RSxHQUFtRixTQUF6RztBQUNELEtBSEQsTUFHTztBQUNMbkMsT0FBQyxDQUFDLGFBQWErRixFQUFkLENBQUQsQ0FBbUJJLE1BQW5CO0FBQ0Q7O0FBSUQsUUFBSW5HLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0IsMEJBQTFCLEVBQXNEO0FBQ3BESixPQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQzRDLEdBQXJDLENBQXlDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUF6QztBQUNELEtBRkQsTUFFTyxJQUFJNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQixnQ0FBMUIsRUFBNEQ7QUFDakVKLE9BQUMsQ0FBQywyQkFBRCxDQUFELENBQStCNEMsR0FBL0IsQ0FBbUM1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQW5DO0FBQ0QsS0FGTSxNQUVBLElBQUk1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLDRCQUExQixFQUF3RDtBQUM3REosT0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUM0QyxHQUF2QyxDQUEyQzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBM0M7QUFDRCxLQUZNLE1BRUEsSUFBSTVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsS0FBc0Isa0NBQTFCLEVBQThEO0FBQ25FSixPQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQzRDLEdBQWpDLENBQXFDNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQUFyQztBQUNELEtBRk0sTUFFQSxJQUFJNUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEsSUFBYixLQUFzQiw0QkFBMUIsRUFBd0Q7QUFDN0RKLE9BQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDNEMsR0FBdkMsQ0FBMkM1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQTNDO0FBQ0QsS0FGTSxNQUVBLElBQUk1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLEtBQXNCLGtDQUExQixFQUE4RDtBQUNuRUosT0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxDQUFxQzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBckM7QUFDRDs7QUFDRHhCLGVBQVc7QUFFWixHQXBDRDtBQXNDQTtBQUNELENBbnpCRDtBQTB6QkE7O0FBQ0EsU0FBU3dFLFFBQVQsQ0FBa0JTLEdBQWxCLEVBQXVCQyxLQUF2QixFQUE4QjtBQUM1QixNQUFJQyxDQUFDLEdBQUduRSxRQUFRLENBQUNpRSxHQUFHLENBQUNHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFELEVBQWtCLEVBQWxCLENBQWhCO0FBQUEsTUFDRUMsQ0FBQyxHQUFHckUsUUFBUSxDQUFDaUUsR0FBRyxDQUFDRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBRCxFQUFrQixFQUFsQixDQURkO0FBQUEsTUFFRUUsQ0FBQyxHQUFHdEUsUUFBUSxDQUFDaUUsR0FBRyxDQUFDRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBRCxFQUFrQixFQUFsQixDQUZkOztBQUlBLE1BQUlGLEtBQUosRUFBVztBQUNULFdBQU8sVUFBVUMsQ0FBVixHQUFjLElBQWQsR0FBcUJFLENBQXJCLEdBQXlCLElBQXpCLEdBQWdDQyxDQUFoQyxHQUFvQyxJQUFwQyxHQUEyQ0osS0FBM0MsR0FBbUQsR0FBMUQ7QUFDRCxHQUZELE1BRU8sSUFBSUEsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDckIsV0FBTyxVQUFVQyxDQUFWLEdBQWMsSUFBZCxHQUFxQkUsQ0FBckIsR0FBeUIsSUFBekIsR0FBZ0NDLENBQWhDLEdBQW9DLElBQXBDLEdBQTJDSixLQUEzQyxHQUFtRCxHQUExRDtBQUNELEdBRk0sTUFFQTtBQUNMLFdBQU8sU0FBU0MsQ0FBVCxHQUFhLElBQWIsR0FBb0JFLENBQXBCLEdBQXdCLElBQXhCLEdBQStCQyxDQUEvQixHQUFtQyxHQUExQztBQUNEO0FBQ0Y7O0FBRUQsU0FBU0MsU0FBVCxDQUFtQnBGLE9BQW5CLEVBQTRCcUYsTUFBNUIsRUFBb0NDLE9BQXBDLEVBQTZDO0FBQzNDLE1BQU1DLEdBQUcsR0FBRyxJQUFJbkMsTUFBSixDQUFXLE1BQU1pQyxNQUFOLEdBQWUsU0FBZixHQUEyQkMsT0FBM0IsR0FBcUMsR0FBaEQsRUFBcUQsSUFBckQsQ0FBWjtBQUNBdEYsU0FBTyxHQUFHQSxPQUFPLENBQUN3QyxPQUFSLENBQWdCK0MsR0FBaEIsRUFBcUIsRUFBckIsQ0FBVjtBQUNBLFNBQU92RixPQUFQO0FBQ0QsQyIsImZpbGUiOiJ2aWRlb19zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0FQSS9tb2R1bGVzL3ZpZGVvL3ZpZGVvU2V0dGluZ3MuanNcIik7XG4iLCIkKCcjbWFpbkFyZWEnKS5vbignY2xpY2snLCAnLmNvcHlWaWRlbycsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBpbWdCbG9ja0lkID0gJCh0aGlzKS5wYXJlbnRzKCcudmlkZW9CbG9jaycpLmF0dHIoJ2lkJyk7XHJcbiAgY29uc3QgaW1nQmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1nQmxvY2tJZCk7XHJcbiAgY29uc3QgY2xvbklkID0gJ3ZpZGVvJyArIGdldFJhbmRvbSgpO1xyXG5cclxuICAkKGltZ0Jsb2NrRWxlbSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCBjbG9uSWQpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKS5pbnNlcnRBZnRlcihpbWdCbG9ja0VsZW0pO1xyXG5cclxuICBjb25zdCBjbG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNsb25JZCk7XHJcbiAgY29uc3QgY2xvbmVkSW1nID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nJylbMF07XHJcbiAgY29uc3QgaW1nV3JhcHBlciA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlV3JhcHBlcicpWzBdO1xyXG4gIGNvbnN0IGNsb25lUmVzaXplclkgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXNpemVyWScpWzBdO1xyXG4gIGNvbnN0IGNsb25lUmVzaXplclhZID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzaXplclhZJylbMF07XHJcbiAgY29uc3QgY2xvbmVSZXNpemVyWCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc2l6ZXJYJylbMF07XHJcblxyXG4gIGFkZEZ1bmN0aW9uYWxpdHlUb0VsZW1lbnQoY2xvbklkKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcblxyXG5sZXQgdGhzID0gbnVsbDtcclxubGV0IHZpZGVvUGxheWVyU3JjID0gbnVsbDtcclxubGV0IGNvbnRlbnQgPSBudWxsO1xyXG5sZXQgaW1nQmxvY2tFbGVtID0gbnVsbDtcclxubGV0IGltZ0VsZW0gPSBudWxsO1xyXG5sZXQgaW1nV3JhcHBlckVsZW0gPSBudWxsO1xyXG5sZXQgcHJvcG9ydGlvbiA9IG51bGw7XHJcbmxldCBpbWdXcmFwcGVyID0gbnVsbDtcclxubGV0IHJlc2l6ZXJZX0VsZW0gPSBudWxsO1xyXG5sZXQgcmVzaXplclhZX0VsZW0gPSBudWxsO1xyXG5sZXQgaWZyYW1lID0gbnVsbDtcclxubGV0IGlmcmFtZVdyYXBwZXIgPSBudWxsO1xyXG5sZXQgdGltb3V0Q2hlY2tCb3ggPSBudWxsO1xyXG5cclxuJCgnI21haW5BcmVhJykub24oJ2NsaWNrJywgJy52aWRlb1NldCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgdGhzID0gJCh0aGlzKS5wYXJlbnRzKCcudmlkZW9CbG9jaycpO1xyXG4gIGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKHRoaXMpLnBhcmVudHMoJy5jb250ZW50JykuYXR0cignaWQnKSk7XHJcbiAgaW1nQmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhzLmF0dHIoJ2lkJykpO1xyXG4gIGltZ0VsZW0gPSBpbWdCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nJylbMF07XHJcbiAgaW1nV3JhcHBlckVsZW0gPSBpbWdCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2VXcmFwcGVyJylbMF07XHJcbiAgcHJvcG9ydGlvbiA9IGltZ0Jsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdQcm9wb3J0aW9uJylbMF07XHJcbiAgaW1nV3JhcHBlciA9IGltZ0Jsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3JkZXInKVswXTtcclxuICByZXNpemVyWV9FbGVtID0gaW1nQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc2l6ZXJZJylbMF07XHJcbiAgcmVzaXplclhZX0VsZW0gPSBpbWdCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzaXplclhZJylbMF07XHJcbiAgaWZyYW1lV3JhcHBlciA9IGltZ1dyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaWZyYW1lV3JhcHBlcicpWzBdO1xyXG4gIGlmcmFtZSA9IGlmcmFtZVdyYXBwZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdO1xyXG4gIHRpbW91dENoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLWRpc3BsYXktbm9uZS12YWx1ZScpO1xyXG5cclxuICAvL9Cf0L7Rj9Cy0LvQtdC90LjQtSDQv9GA0LDQstC+0Lkg0L/QsNC90LXQu9C4LCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQuNC90L/Rg9GC0L7Qsi5cclxuICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2Om5vdCgjc2V0dGluZ3MtbW4pIGlucHV0Jykub2ZmKCdpbnB1dCcpO1xyXG4gICQoJyNyaWdodFNpZGViYXIgPiBkaXY6bm90KCNzZXR0aW5ncy1tbikgaW5wdXQnKS5vZmYoKTtcclxuICAkKCcjdmlkZW8tYm9yZGVyLXN0eWxlJykub2ZmKCk7XHJcbiAgJCgnI3ZpZGVvLWJvcmRlci1sZWZ0LXN0eWxlJykub2ZmKCk7XHJcbiAgJCgnI3ZpZGVvLWJvcmRlci1yaWdodC1zdHlsZScpLm9mZigpO1xyXG4gICQoJyN2aWRlby1ib3JkZXItdG9wLXN0eWxlLXZhbHVlJykub2ZmKCk7XHJcbiAgJCgnI3ZpZGVvLWJvcmRlci1ib3R0b20tc3R5bGUnKS5vZmYoKTtcclxuICAkKCcjdmlkZW8tYW5pbWF0aW9uLXR5cGUtdmFsdWUnKS5vZmYoKTtcclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpKSB7XHJcbiAgICB2YXIgdGltZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JpcHQtJyArIHRocy5hdHRyKCdpZCcpKS5pbm5lckhUTUwuc3BsaXQoJywnKVsxXSkgLyAxMDAwO1xyXG4gICAgdmFyIGggPSBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKTtcclxuICAgIHZhciBtID0gTWF0aC5mbG9vcigodGltZSAtIDM2MDAgKiBoKSAvIDYwKTtcclxuICAgIHZhciBzID0gdGltZSAtICgzNjAwICogaCArIDYwICogbSk7XHJcbiAgICAkKCcjdmlkZW8tdGltZW91dC1ob3VyLXZhbHVlJykudmFsKGgpO1xyXG4gICAgJCgnI3ZpZGVvLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKG0pO1xyXG4gICAgJCgnI3ZpZGVvLXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKHMpO1xyXG4gICAgJCgnI3ZpZGVvLWRpc3BsYXktbm9uZS12YWx1ZScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnI3ZpZGVvLXRpbWVvdXQtaG91ci12YWx1ZScpLnZhbCgwKTtcclxuICAgICQoJyN2aWRlby10aW1lb3V0LW1pbnV0ZS12YWx1ZScpLnZhbCgwKTtcclxuICAgICQoJyN2aWRlby10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgwKTtcclxuICB9XHJcbiAgJCgnI3JpZ2h0U2lkZWJhciA+IGRpdicpLmhpZGUoKTtcclxuICAkKCcjc2V0dGluZ3MtbW4nKS5oaWRlKCk7XHJcbiAgJCgnI21haW4tYmxvY2stc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2NvbnRlbnQtYmxvY2stc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2ltYWdlLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyN0ZXh0LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNidXR0b24tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2Zvcm0tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3N1YnNjcmliZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGluZS1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjbGlzdC1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjdmlkZW8tc2V0dGluZ3MnKS5zaG93KCk7XHJcbiAgJCgnI3JpZ2h0U2lkZWJhcicpLmNzcyh7XHJcbiAgICByaWdodDogJzBweCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnMC40cyBhbGwgZWFzZS1pbidcclxuICB9KS5hZGRDbGFzcygnYWN0aXZhdGVkJyk7XHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlb0JvcmRlclJhZGlvRXZlcnknKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9Cb3JkZXJBbGwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9Cb3JkZXJFdmVyeScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvQm9yZGVyUmFkaW9BbGwnKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9Cb3JkZXJBbGwnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvQm9yZGVyRXZlcnknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcblxyXG4gIC8vINCS0YHRgtCw0LLQutCwINGB0YHRi9C70LrQuCDQuNC70Lgg0LrQvtC00LAg0LLQuNC00LXQviBFTUJFRFxyXG4gIGZ1bmN0aW9uIGNoYW5nZVZpZGVvU3JjKCkge1xyXG4gICAgaWYgKHZpZGVvU3JjLnZhbHVlID09IFwieW91dHViZVwiKSB7XHJcbiAgICAgIHlvdXR1YmUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHZpbWVvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGVtYmVkQ29kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB2aWRlb0F1dG9wbGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB2aWRlb0NvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpZiAoaW1nV3JhcHBlckVsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlkZW8nKVswXSkge1xyXG4gICAgICAgIHZpZGVvUGxheWVyU3JjID0gaW1nV3JhcHBlckVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpWzBdLnNyYztcclxuICAgICAgICB2aWRlb1BsYXllclNyYyA9ICh2aWRlb1BsYXllclNyYyA9PSAnJykgPyAn0J7RgtGB0YPRgtGB0YLQstGD0LXRgicgOiB2aWRlb1BsYXllclNyYy5yZXBsYWNlKCd5b3V0dWJlLmNvbS9lbWJlZCcsICd5b3V0dS5iZScpO1xyXG4gICAgICAgIHZpZGVvUGxheWVyU3JjID0gKHZpZGVvUGxheWVyU3JjID09ICcnKSA/ICfQntGC0YHRg9GC0YHRgtCy0YPQtdGCJyA6IHZpZGVvUGxheWVyU3JjLnJlcGxhY2UoJ3BsYXllci52aW1lby5jb20vdmlkZW8nLCAndmltZW8uY29tJyk7XHJcbiAgICAgICAgdmlkZW9QbGF5ZXJTcmMgPSB2aWRlb1BsYXllclNyYy5yZXBsYWNlKCc/ZGVsYXkmbXV0ZT0xJywgJycpO1xyXG4gICAgICAgIHZpZGVvUGxheWVyU3JjID0gdmlkZW9QbGF5ZXJTcmMucmVwbGFjZSgnP2RlbGF5Jm11dGVkPTEnLCAnJyk7XHJcbiAgICAgICAgdmlkZW9QbGF5ZXJTcmMgPSB2aWRlb1BsYXllclNyYy5yZXBsYWNlKCc/Y29udHJvbHM9MCcsICcnKTtcclxuICAgICAgICB2aWRlb1BsYXllclNyYyA9IHZpZGVvUGxheWVyU3JjLnJlcGxhY2UoJyZjb250cm9scz0wJywgJycpO1xyXG4gICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTCA9IHZpZGVvUGxheWVyU3JjO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHZpZGVvU3JjLnZhbHVlID09IFwidmltZW9cIikge1xyXG4gICAgICB5b3V0dWJlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHZpbWVvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBlbWJlZENvZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdmlkZW9BdXRvcGxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdmlkZW9Db250cm9scy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgaWYgKGltZ1dyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZpZGVvJylbMF0pIHtcclxuICAgICAgICB2aWRlb1BsYXllclNyYyA9IGltZ1dyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXS5zcmM7XHJcbiAgICAgICAgdmlkZW9QbGF5ZXJTcmMgPSAodmlkZW9QbGF5ZXJTcmMgPT0gJycpID8gJ9Ce0YLRgdGD0YLRgdGC0LLRg9C10YInIDogdmlkZW9QbGF5ZXJTcmMucmVwbGFjZSgncGxheWVyLnZpbWVvLmNvbS92aWRlbycsICd2aW1lby5jb20nKTtcclxuICAgICAgICB2aWRlb1BsYXllclNyYyA9ICh2aWRlb1BsYXllclNyYyA9PSAnJykgPyAn0J7RgtGB0YPRgtGB0YLQstGD0LXRgicgOiB2aWRlb1BsYXllclNyYy5yZXBsYWNlKCd5b3V0dWJlLmNvbS9lbWJlZCcsICd5b3V0dS5iZScpO1xyXG4gICAgICAgIHZpZGVvUGxheWVyU3JjID0gdmlkZW9QbGF5ZXJTcmMucmVwbGFjZSgnP2RlbGF5Jm11dGU9MScsICcnKTtcclxuICAgICAgICB2aWRlb1BsYXllclNyYyA9IHZpZGVvUGxheWVyU3JjLnJlcGxhY2UoJz9kZWxheSZtdXRlZD0xJywgJycpO1xyXG4gICAgICAgIHZpZGVvUGxheWVyU3JjID0gdmlkZW9QbGF5ZXJTcmMucmVwbGFjZSgnP2NvbnRyb2xzPTAnLCAnJyk7XHJcbiAgICAgICAgdmlkZW9QbGF5ZXJTcmMgPSB2aWRlb1BsYXllclNyYy5yZXBsYWNlKCcmY29udHJvbHM9MCcsICcnKTtcclxuICAgICAgICB2aWRlb0luZGljYXRvci5pbm5lckhUTUwgPSB2aWRlb1BsYXllclNyYztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh2aWRlb1NyYy52YWx1ZSA9PSBcImVtYmVkXCIpIHtcclxuICAgICAgeW91dHViZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB2aW1lby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBlbWJlZENvZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHZpZGVvQXV0b3BsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdmlkZW9Db250cm9scy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBpZiAoZW1iZWRBcmVhLnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgdmlkZW9JbmRpY2F0b3IuaW5uZXJIVE1MID0gJ0VtYmVkIGNvZGUnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTCA9ICfQntGC0YHRg9GC0YHRgtCy0YPQtdGCJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjaGFuZ2VWaWRlb1NyYygpO1xyXG4gIHZpZGVvU3JjLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY2hhbmdlVmlkZW9TcmMoKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICAvL9Cw0LLRgtC+0L/RgNC+0LjQs9GA0YvQstCw0L3QuNC1XHJcblxyXG4gIGlmIChcclxuICAgIGltZ1dyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZpZGVvJylbMF0gJiZcclxuICAgIGlmcmFtZS5zcmMgIT0gJycgJiZcclxuICAgIGlmcmFtZS5zcmMuaW5kZXhPZignZGVsYXknKSAhPSAtMVxyXG4gICkge1xyXG4gICAgdmlkZW9BdXRvcGxheUNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2aWRlb0F1dG9wbGF5Q2hlY2tCb3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdmlkZW9BdXRvcGxheUNoZWNrQm94Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3JjO1xyXG4gICAgc3dpdGNoICh2aWRlb1NyYy52YWx1ZSkge1xyXG5cclxuICAgICAgY2FzZSAneW91dHViZSc6XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdmlkZW9JbmRpY2F0b3IuaW5uZXJIVE1MICE9ICfQntGC0YHRg9GC0YHRgtCy0YPQtdGCJyAmJlxyXG4gICAgICAgICAgeW91dHViZUlucHV0LnZhbHVlID09ICcnICYmIHZpZGVvQXV0b3BsYXlDaGVja0JveC5jaGVja2VkID09IHRydWUgJiZcclxuICAgICAgICAgIGlmcmFtZS5zcmMuaW5kZXhPZignZGVsYXknKSA9PSAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc3JjID0gKGlmcmFtZS5zcmMuaW5kZXhPZignY29udHJvbHMnKSA9PSAtMSkgP1xyXG4gICAgICAgICAgICB2aWRlb0luZGljYXRvci5pbm5lckhUTUwucmVwbGFjZSgneW91dHUuYmUnLCAneW91dHViZS5jb20vZW1iZWQnKSArICc/ZGVsYXkmbXV0ZT0xJyA6XHJcbiAgICAgICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTC5yZXBsYWNlKCd5b3V0dS5iZScsICd5b3V0dWJlLmNvbS9lbWJlZCcpICsgJz9kZWxheSZtdXRlPTEmY29udHJvbHM9MCc7XHJcbiAgICAgICAgICBpZnJhbWUuc3JjID0gc3JjO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICB2aWRlb0luZGljYXRvci5pbm5lckhUTUwgIT0gJ9Ce0YLRgdGD0YLRgdGC0LLRg9C10YInICYmXHJcbiAgICAgICAgICB5b3V0dWJlSW5wdXQudmFsdWUgPT0gJycgJiYgdmlkZW9BdXRvcGxheUNoZWNrQm94LmNoZWNrZWQgPT0gZmFsc2UgJiZcclxuICAgICAgICAgIGlmcmFtZS5zcmMuaW5kZXhPZignZGVsYXknKSAhPSAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc3JjID0gKGlmcmFtZS5zcmMuaW5kZXhPZignY29udHJvbHMnKSA9PSAtMSkgP1xyXG4gICAgICAgICAgICB2aWRlb0luZGljYXRvci5pbm5lckhUTUwucmVwbGFjZSgneW91dHUuYmUnLCAneW91dHViZS5jb20vZW1iZWQnKSA6XHJcbiAgICAgICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTC5yZXBsYWNlKCd5b3V0dS5iZScsICd5b3V0dWJlLmNvbS9lbWJlZCcpICsgJz9jb250cm9scz0wJztcclxuICAgICAgICAgIGlmcmFtZS5zcmMgPSBzcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3ZpbWVvJzpcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB2aWRlb0luZGljYXRvci5pbm5lckhUTUwgIT0gJ9Ce0YLRgdGD0YLRgdGC0LLRg9C10YInICYmXHJcbiAgICAgICAgICB2aW1lb0lucHV0LnZhbHVlID09ICcnICYmIHZpZGVvQXV0b3BsYXlDaGVja0JveC5jaGVja2VkID09IHRydWUgJiZcclxuICAgICAgICAgIGlmcmFtZS5zcmMuaW5kZXhPZignZGVsYXknKSA9PSAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc3JjID0gKGlmcmFtZS5zcmMuaW5kZXhPZignY29udHJvbHMnKSA9PSAtMSkgP1xyXG4gICAgICAgICAgICB2aWRlb0luZGljYXRvci5pbm5lckhUTUwucmVwbGFjZSgndmltZW8uY29tJywgJ3BsYXllci52aW1lby5jb20vdmlkZW8nKSArICc/ZGVsYXkmbXV0ZWQ9MScgOlxyXG4gICAgICAgICAgICB2aWRlb0luZGljYXRvci5pbm5lckhUTUwucmVwbGFjZSgndmltZW8uY29tJywgJ3BsYXllci52aW1lby5jb20vdmlkZW8nKSArICc/ZGVsYXkmbXV0ZWQ9MSZjb250cm9scz0wJztcclxuICAgICAgICAgIGlmcmFtZS5zcmMgPSBzcmM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTCAhPSAn0J7RgtGB0YPRgtGB0YLQstGD0LXRgicgJiZcclxuICAgICAgICAgIHZpbWVvSW5wdXQudmFsdWUgPT0gJycgJiYgdmlkZW9BdXRvcGxheUNoZWNrQm94LmNoZWNrZWQgPT0gZmFsc2UgJiZcclxuICAgICAgICAgIGlmcmFtZS5zcmMuaW5kZXhPZignZGVsYXknKSAhPSAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc3JjID0gKGlmcmFtZS5zcmMuaW5kZXhPZignY29udHJvbHMnKSA9PSAtMSkgP1xyXG4gICAgICAgICAgICB2aWRlb0luZGljYXRvci5pbm5lckhUTUwucmVwbGFjZSgndmltZW8uY29tJywgJ3BsYXllci52aW1lby5jb20vdmlkZW8nKSA6XHJcbiAgICAgICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTC5yZXBsYWNlKCd2aW1lby5jb20nLCAncGxheWVyLnZpbWVvLmNvbS92aWRlbycpICsgJz9jb250cm9scz0wJztcclxuICAgICAgICAgIGlmcmFtZS5zcmMgPSBzcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/QodC60YDRi9GC0Ywg0L/QsNC90LXQu9GMINGD0L/RgNCw0LLQu9C10L3QuNGPXHJcblxyXG4gIGlmIChcclxuICAgIGltZ1dyYXBwZXJFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXSAmJlxyXG4gICAgaWZyYW1lLnNyYyAhPSAnJyAmJlxyXG4gICAgaWZyYW1lLnNyYy5pbmRleE9mKCdjb250cm9scycpICE9IC0xXHJcbiAgKSB7XHJcbiAgICB2aWRlb0NvbnRyb2xzQ2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZpZGVvQ29udHJvbHNDaGVja0JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB2aWRlb0NvbnRyb2xzQ2hlY2tCb3gub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzcmM7XHJcbiAgICBzd2l0Y2ggKHZpZGVvU3JjLnZhbHVlKSB7XHJcblxyXG4gICAgICBjYXNlICd5b3V0dWJlJzpcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB2aWRlb0luZGljYXRvci5pbm5lckhUTUwgIT0gJ9Ce0YLRgdGD0YLRgdGC0LLRg9C10YInICYmXHJcbiAgICAgICAgICB5b3V0dWJlSW5wdXQudmFsdWUgPT0gJycgJiYgdmlkZW9Db250cm9sc0NoZWNrQm94LmNoZWNrZWQgPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgaWZyYW1lLnNyYy5pbmRleE9mKCdjb250cm9scycpID09IC0xXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBzcmMgPSAoaWZyYW1lLnNyYy5pbmRleE9mKCdkZWxheScpID09IC0xKSA/XHJcbiAgICAgICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTC5yZXBsYWNlKCd5b3V0dS5iZScsICd5b3V0dWJlLmNvbS9lbWJlZCcpICsgJz9jb250cm9scz0wJyA6XHJcbiAgICAgICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTC5yZXBsYWNlKCd5b3V0dS5iZScsICd5b3V0dWJlLmNvbS9lbWJlZCcpICsgJz9kZWxheSZtdXRlPTEmY29udHJvbHM9MCc7XHJcbiAgICAgICAgICBpZnJhbWUuc3JjID0gc3JjO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICB2aWRlb0luZGljYXRvci5pbm5lckhUTUwgIT0gJ9Ce0YLRgdGD0YLRgdGC0LLRg9C10YInICYmXHJcbiAgICAgICAgICB5b3V0dWJlSW5wdXQudmFsdWUgPT0gJycgJiYgdmlkZW9Db250cm9sc0NoZWNrQm94LmNoZWNrZWQgPT0gZmFsc2UgJiZcclxuICAgICAgICAgIGlmcmFtZS5zcmMuaW5kZXhPZignY29udHJvbHMnKSAhPSAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc3JjID0gKGlmcmFtZS5zcmMuaW5kZXhPZignZGVsYXknKSA9PSAtMSkgP1xyXG4gICAgICAgICAgICB2aWRlb0luZGljYXRvci5pbm5lckhUTUwucmVwbGFjZSgneW91dHUuYmUnLCAneW91dHViZS5jb20vZW1iZWQnKSA6XHJcbiAgICAgICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTC5yZXBsYWNlKCd5b3V0dS5iZScsICd5b3V0dWJlLmNvbS9lbWJlZCcpICsgJz9kZWxheSZtdXRlPTEnO1xyXG4gICAgICAgICAgaWZyYW1lLnNyYyA9IHNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndmltZW8nOlxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTCAhPSAn0J7RgtGB0YPRgtGB0YLQstGD0LXRgicgJiZcclxuICAgICAgICAgIHZpbWVvSW5wdXQudmFsdWUgPT0gJycgJiYgdmlkZW9Db250cm9sc0NoZWNrQm94LmNoZWNrZWQgPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgaWZyYW1lLnNyYy5pbmRleE9mKCdjb250cm9scycpID09IC0xXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBzcmMgPSAoaWZyYW1lLnNyYy5pbmRleE9mKCdkZWxheScpID09IC0xKSA/XHJcbiAgICAgICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTC5yZXBsYWNlKCd2aW1lby5jb20nLCAncGxheWVyLnZpbWVvLmNvbS92aWRlbycpICsgJz9jb250cm9scz0wJyA6XHJcbiAgICAgICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTC5yZXBsYWNlKCd2aW1lby5jb20nLCAncGxheWVyLnZpbWVvLmNvbS92aWRlbycpICsgJz9kZWxheSZtdXRlZD0xJmNvbnRyb2xzPTAnO1xyXG4gICAgICAgICAgaWZyYW1lLnNyYyA9IHNyYztcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgdmlkZW9JbmRpY2F0b3IuaW5uZXJIVE1MICE9ICfQntGC0YHRg9GC0YHRgtCy0YPQtdGCJyAmJlxyXG4gICAgICAgICAgdmltZW9JbnB1dC52YWx1ZSA9PSAnJyAmJiB2aWRlb0NvbnRyb2xzQ2hlY2tCb3guY2hlY2tlZCA9PSBmYWxzZSAmJlxyXG4gICAgICAgICAgaWZyYW1lLnNyYy5pbmRleE9mKCdjb250cm9scycpICE9IC0xXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBzcmMgPSAoaWZyYW1lLnNyYy5pbmRleE9mKCdkZWxheScpID09IC0xKSA/XHJcbiAgICAgICAgICAgIHZpZGVvSW5kaWNhdG9yLmlubmVySFRNTC5yZXBsYWNlKCd2aW1lby5jb20nLCAncGxheWVyLnZpbWVvLmNvbS92aWRlbycpIDpcclxuICAgICAgICAgICAgdmlkZW9JbmRpY2F0b3IuaW5uZXJIVE1MLnJlcGxhY2UoJ3ZpbWVvLmNvbScsICdwbGF5ZXIudmltZW8uY29tL3ZpZGVvJykgKyAnP2RlbGF5Jm11dGVkPTEnO1xyXG4gICAgICAgICAgaWZyYW1lLnNyYyA9IHNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aWRlb1VybEV4ZWMub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzcmMgPSAnJztcclxuICAgIGxldCBzdHJpbmdUb0RlbGV0ZSA9ICcnO1xyXG4gICAgc3dpdGNoICh2aWRlb1NyYy52YWx1ZSkge1xyXG5cclxuICAgICAgY2FzZSAneW91dHViZSc6XHJcbiAgICAgICAgaWYgKCFpbWdXcmFwcGVyRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2aWRlbycpWzBdKSB7XHJcbiAgICAgICAgICBpZnJhbWVXcmFwcGVyLmlubmVySFRNTCA9ICc8aWZyYW1lIGNsYXNzPVwidmlkZW9cIiBmcmFtZWJvcmRlcj1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCJhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgICAgaWZyYW1lID0gaWZyYW1lV3JhcHBlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJylbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoeW91dHViZUlucHV0LnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICBzcmMgPSB5b3V0dWJlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICBpZiAoIXZpZGVvQXV0b3BsYXlDaGVja0JveC5jaGVja2VkICYmICF2aWRlb0NvbnRyb2xzQ2hlY2tCb3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgneW91dHUuYmUnLCAneW91dHViZS5jb20vZW1iZWQnKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodmlkZW9BdXRvcGxheUNoZWNrQm94LmNoZWNrZWQgJiYgdmlkZW9Db250cm9sc0NoZWNrQm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UoJ3lvdXR1LmJlJywgJ3lvdXR1YmUuY29tL2VtYmVkJykgKyAnP2RlbGF5Jm11dGU9MSZjb250cm9scz0wJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAodmlkZW9BdXRvcGxheUNoZWNrQm94LmNoZWNrZWQgJiYgIXZpZGVvQ29udHJvbHNDaGVja0JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKCd5b3V0dS5iZScsICd5b3V0dWJlLmNvbS9lbWJlZCcpICsgJz9kZWxheSZtdXRlPTEnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UoJ3lvdXR1LmJlJywgJ3lvdXR1YmUuY29tL2VtYmVkJykgKyAnP2NvbnRyb2xzPTAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWZyYW1lLnNyYyA9IHNyYztcclxuICAgICAgICAgIHlvdXR1YmVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgY2hhbmdlVmlkZW9TcmMoKTtcclxuICAgICAgICAgIHN0cmluZ1RvRGVsZXRlID0gbmV3IFJlZ0V4cCgnPGltZyBjbGFzcz1cIm5vVmlkZW9cIltePl0qPicsICdnaScpO1xyXG4gICAgICAgICAgaWZyYW1lV3JhcHBlci5pbm5lckhUTUwgPSBpZnJhbWVXcmFwcGVyLmlubmVySFRNTC5yZXBsYWNlKHN0cmluZ1RvRGVsZXRlLCAnJyk7XHJcbiAgICAgICAgICBhbGVydChpZnJhbWVXcmFwcGVyLmlubmVySFRNTCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KCfQktGLINC90LUg0LLQstC10LvQuCDRgdGB0YvQu9C60YMg0L3QsCDQstC40LTQtdC+IScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd2aW1lbyc6XHJcbiAgICAgICAgaWYgKCFpbWdXcmFwcGVyRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2aWRlbycpWzBdKSB7XHJcbiAgICAgICAgICBpZnJhbWVXcmFwcGVyLmlubmVySFRNTCA9ICc8aWZyYW1lIGNsYXNzPVwidmlkZW9cIiBmcmFtZWJvcmRlcj1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2aW1lb0lucHV0LnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICBzcmMgPSB2aW1lb0lucHV0LnZhbHVlO1xyXG5cclxuICAgICAgICAgIGlmICghdmlkZW9BdXRvcGxheUNoZWNrQm94LmNoZWNrZWQgJiYgIXZpZGVvQ29udHJvbHNDaGVja0JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKCd2aW1lby5jb20nLCAncGxheWVyLnZpbWVvLmNvbS92aWRlbycpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh2aWRlb0F1dG9wbGF5Q2hlY2tCb3guY2hlY2tlZCAmJiB2aWRlb0NvbnRyb2xzQ2hlY2tCb3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgndmltZW8uY29tJywgJ3BsYXllci52aW1lby5jb20vdmlkZW8nKSArICc/ZGVsYXkmbXV0ZWQ9MSZjb250cm9scz0wJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAodmlkZW9BdXRvcGxheUNoZWNrQm94LmNoZWNrZWQgJiYgIXZpZGVvQ29udHJvbHNDaGVja0JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKCd2aW1lby5jb20nLCAncGxheWVyLnZpbWVvLmNvbS92aWRlbycpICsgJz9kZWxheSZtdXRlZD0xJztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKCd2aW1lby5jb20nLCAncGxheWVyLnZpbWVvLmNvbS92aWRlbycpICsgJz9jb250cm9scz0wJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmcmFtZS5zcmMgPSBzcmM7XHJcbiAgICAgICAgICB2aW1lb0lucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICBjaGFuZ2VWaWRlb1NyYygpO1xyXG4gICAgICAgICAgc3RyaW5nVG9EZWxldGUgPSBuZXcgUmVnRXhwKCc8aW1nIGNsYXNzPVwibm9WaWRlb1wiW14+XSo+JywgJ2dpJyk7XHJcbiAgICAgICAgICBpZnJhbWVXcmFwcGVyLmlubmVySFRNTCA9IGlmcmFtZVdyYXBwZXIuaW5uZXJIVE1MLnJlcGxhY2Uoc3RyaW5nVG9EZWxldGUsICcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoJ9CS0Ysg0L3QtSDQstCy0LXQu9C4INGB0YHRi9C70LrRgyDQvdCwINCy0LjQtNC10L4hJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2VtYmVkJzpcclxuICAgICAgICBpZiAoZW1iZWRBcmVhLnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICBpZnJhbWVXcmFwcGVyLmlubmVySFRNTCA9IGVtYmVkQXJlYS52YWx1ZTtcclxuICAgICAgICAgIGNoYW5nZVZpZGVvU3JjKCk7XHJcbiAgICAgICAgICBzdHJpbmdUb0RlbGV0ZSA9IG5ldyBSZWdFeHAoJzxpbWcgY2xhc3M9XCJub1ZpZGVvXCJbXj5dKj4nLCAnZ2knKTtcclxuICAgICAgICAgIGlmcmFtZVdyYXBwZXIuaW5uZXJIVE1MID0gaWZyYW1lV3JhcHBlci5pbm5lckhUTUwucmVwbGFjZShzdHJpbmdUb0RlbGV0ZSwgJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydCgn0JLRiyDQvdC1INCy0LLQtdC70Lgg0LrQvtC0INC/0LvQtdC10YDQsCEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL9CS0LXRgNGC0LjQutCw0LvRjNC90L7QtSDQstGL0YDQsNCy0L3QuNCy0LDQvdC40LVcclxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShpbWdCbG9ja0VsZW0pLm1hcmdpblRvcCA9PSAnYXV0bycpIHtcclxuICAgIHZpZGVvTWFyZ2luQm90dG9tLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgdmlkZW9NYXJnaW5Ub3AuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgdmlkZW9NYXJnaW5DZW50ZXIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShpbWdCbG9ja0VsZW0pLm1hcmdpbkJvdHRvbSA9PSAnYXV0bycpIHtcclxuICAgIHZpZGVvTWFyZ2luQm90dG9tLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIHZpZGVvTWFyZ2luVG9wLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgdmlkZW9NYXJnaW5DZW50ZXIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShpbWdCbG9ja0VsZW0pLm1hcmdpblRvcCA9PSAnMHB4JyAmJiBnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luQm90dG9tID09ICcwcHgnKSB7XHJcbiAgICB2aWRlb01hcmdpbkJvdHRvbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB2aWRlb01hcmdpblRvcC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB2aWRlb01hcmdpbkNlbnRlci5jaGVja2VkID0gdHJ1ZTtcclxuICB9XHJcbiAgdmlkZW9NYXJnaW5Ub3Aub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGltZ0Jsb2NrRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnMHB4JztcclxuICAgIGltZ0Jsb2NrRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnYXV0byc7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG5cclxuICAgIC8vICAgIHJlc2l6ZXJZX0VsZW0uc3R5bGUudG9wID0gJzEwMCUnO1xyXG4gICAgLy8gICAgcmVzaXplcllfRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnLTFyZW0nO1xyXG4gICAgLy8gICAgcmVzaXplclhZX0VsZW0uc3R5bGUudG9wID0gJzEwMCUnO1xyXG4gICAgLy8gICAgcmVzaXplclhZX0VsZW0uc3R5bGUubGVmdCA9ICcxMDAlJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLm1hcmdpblRvcCA9ICctMXJlbSc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0xcmVtJztcclxuICB9XHJcbiAgdmlkZW9NYXJnaW5DZW50ZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGltZ0Jsb2NrRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnMHB4JztcclxuICAgIGltZ0Jsb2NrRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcblxyXG4gICAgLy8gICAgcmVzaXplcllfRWxlbS5zdHlsZS50b3AgPSAnMTAwJSc7XHJcbiAgICAvLyAgICByZXNpemVyWV9FbGVtLnN0eWxlLm1hcmdpblRvcCA9ICctMXJlbSc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS50b3AgPSAnMTAwJSc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS5sZWZ0ID0gJzEwMCUnO1xyXG4gICAgLy8gICAgcmVzaXplclhZX0VsZW0uc3R5bGUubWFyZ2luVG9wID0gJy0xcmVtJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLm1hcmdpbkxlZnQgPSAnLTFyZW0nO1xyXG4gIH1cclxuICB2aWRlb01hcmdpbkJvdHRvbS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaW1nQmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICdhdXRvJztcclxuICAgIGltZ0Jsb2NrRWxlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMHB4JztcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcblxyXG4gICAgLy8gICAgcmVzaXplcllfRWxlbS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAvLyAgICByZXNpemVyWV9FbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLnRvcCA9ICcwJztcclxuICAgIC8vICAgIHJlc2l6ZXJYWV9FbGVtLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XHJcbiAgICAvLyAgICByZXNpemVyWFlfRWxlbS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xyXG4gIH1cclxuXHJcbiAgLy/QndCw0YHRgtGA0L7QudC60Lgg0L7RgtGB0YLRg9C/0L7QslxyXG5cclxuICAkKCcjdmlkZW8tbWFyZ2luLXRvcC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luVG9wKSk7XHJcbiAgJCgnI3ZpZGVvLW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShpbWdCbG9ja0VsZW0pLm1hcmdpblRvcCkpO1xyXG4gICQoJyN2aWRlby1tYXJnaW4tcmlnaHQtdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShpbWdCbG9ja0VsZW0pLm1hcmdpblJpZ2h0KSk7XHJcbiAgJCgnI3ZpZGVvLW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luUmlnaHQpKTtcclxuICAkKCcjdmlkZW8tbWFyZ2luLWJvdHRvbS12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luQm90dG9tKSk7XHJcbiAgJCgnI3ZpZGVvLW1hcmdpbi1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShpbWdCbG9ja0VsZW0pLm1hcmdpbkJvdHRvbSkpO1xyXG4gICQoJyN2aWRlby1tYXJnaW4tbGVmdC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luTGVmdCkpO1xyXG4gICQoJyN2aWRlby1tYXJnaW4tbGVmdC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGltZ0Jsb2NrRWxlbSkubWFyZ2luTGVmdCkpO1xyXG5cclxuICAkKCcjdmlkZW8tbWFyZ2luLXRvcC12YWx1ZSwgI3ZpZGVvLW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRocykuY3NzKCdtYXJnaW4tdG9wJywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHRocykuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi10b3A6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInZpZGVvLW1hcmdpbi10b3AtdmFsdWVcIikge1xyXG4gICAgICAkKCcjdmlkZW8tbWFyZ2luLXRvcC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN2aWRlby1tYXJnaW4tdG9wLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjdmlkZW8tbWFyZ2luLXJpZ2h0LXZhbHVlLCAjdmlkZW8tbWFyZ2luLXJpZ2h0LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnbWFyZ2luLXJpZ2h0JywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHRocykuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi1yaWdodDonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgfSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidmlkZW8tbWFyZ2luLXJpZ2h0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3ZpZGVvLW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN2aWRlby1tYXJnaW4tcmlnaHQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyN2aWRlby1tYXJnaW4tYm90dG9tLXZhbHVlLCAjdmlkZW8tbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhzKS5jc3MoJ21hcmdpbi1ib3R0b20nLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQodGhzKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLWJvdHRvbTonICsgdmFsICsgJ3B4ICFpbXBvcnRhbnQ7J1xyXG4gICAgfSk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidmlkZW8tbWFyZ2luLWJvdHRvbS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN2aWRlby1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3ZpZGVvLW1hcmdpbi1ib3R0b20tdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyN2aWRlby1tYXJnaW4tbGVmdC12YWx1ZSwgI3ZpZGVvLW1hcmdpbi1sZWZ0LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aHMpLmNzcygnbWFyZ2luLWxlZnQnLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQodGhzKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLWxlZnQ6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInZpZGVvLW1hcmdpbi1sZWZ0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3ZpZGVvLW1hcmdpbi1sZWZ0LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3ZpZGVvLW1hcmdpbi1sZWZ0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QndCw0YHRgtGA0L7QudC60Lgg0LLRgdC10YUg0LPRgNCw0L3QuNGGINC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxuICAkKCcjdmlkZW8tYm9yZGVyLXZhbHVlJykudmFsKHBhcnNlSW50KCQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItd2lkdGgnKSkpO1xyXG4gICQoJyN2aWRlby1ib3JkZXItdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci13aWR0aCcpKSk7XHJcbiAgJCgnI3ZpZGVvLWJvcmRlci1yYWRpdXMnKS52YWwocGFyc2VJbnQoJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci1yYWRpdXMnKSkpO1xyXG4gICQoJyN2aWRlby1ib3JkZXItcmFkaXVzLXJhbmdlJykudmFsKHBhcnNlSW50KCQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItcmFkaXVzJykpKTtcclxuXHJcbiAgJCgnI3ZpZGVvLWJvcmRlci12YWx1ZSwgI3ZpZGVvLWJvcmRlci12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItd2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidmlkZW8tYm9yZGVyLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3ZpZGVvLWJvcmRlci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN2aWRlby1ib3JkZXItdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjdmlkZW8tYm9yZGVyLXN0eWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN2aWRlby1ib3JkZXItY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINCy0LXRgNGF0L3QtdC5INCz0YDQsNC90LjRhtGLINCx0LvQvtC60LAqL1xyXG5cclxuICAkKCcjdmlkZW8tYm9yZGVyLXRvcC12YWx1ZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItdG9wLXdpZHRoJykpKTtcclxuICAkKCcjdmlkZW8tYm9yZGVyLXRvcC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItdG9wLXdpZHRoJykpKTtcclxuICAkKCcjdmlkZW8tYm9yZGVyLWxlZnQtdG9wLXJhZGl1cycpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJykpKTtcclxuICAkKCcjdmlkZW8tYm9yZGVyLWxlZnQtdG9wLXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJykpKTtcclxuXHJcbiAgJCgnI3ZpZGVvLWJvcmRlci10b3AtdmFsdWUsICN2aWRlby1ib3JkZXItdG9wLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci10b3Atd2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidmlkZW8tYm9yZGVyLXRvcC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN2aWRlby1ib3JkZXItdG9wLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3ZpZGVvLWJvcmRlci10b3AtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjdmlkZW8tYm9yZGVyLXRvcC1zdHlsZS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLXRvcC1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3ZpZGVvLWJvcmRlci10b3AtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci10b3AtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC/0YDQsNCy0L7QuSDQs9GA0LDQvdC40YbRiyDQsdC70L7QutCwKi9cclxuICAkKCcjdmlkZW8tYm9yZGVyLXJpZ2h0LXZhbHVlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcpKSk7XHJcbiAgJCgnI3ZpZGVvLWJvcmRlci1yaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItcmlnaHQtd2lkdGgnKSkpO1xyXG4gICQoJyN2aWRlby1ib3JkZXItcmlnaHQtcmFkaXVzJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJykpKTtcclxuICAkKCcjdmlkZW8tYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycpKSk7XHJcblxyXG4gICQoJyN2aWRlby1ib3JkZXItcmlnaHQtdmFsdWUsICN2aWRlby1ib3JkZXItcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInZpZGVvLWJvcmRlci1yaWdodC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN2aWRlby1ib3JkZXItcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjdmlkZW8tYm9yZGVyLXJpZ2h0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjdmlkZW8tYm9yZGVyLXJpZ2h0LXN0eWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItcmlnaHQtc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN2aWRlby1ib3JkZXItcmlnaHQtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci1yaWdodC1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQmtC+0L3QtdGGINCx0LvQvtC60LAqL1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQuCDQtNC70Y8g0L3QuNC20L3QtdC5INCz0YDQsNC90LjRhtGLINCx0LvQvtC60LAqL1xyXG4gICQoJyN2aWRlby1ib3JkZXItYm90dG9tLXZhbHVlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkpO1xyXG4gICQoJyN2aWRlby1ib3JkZXItYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkpO1xyXG4gICQoJyN2aWRlby1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycpLnZhbChwYXJzZUludCgkKHRocykuY3NzKCdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycpKSk7XHJcbiAgJCgnI3ZpZGVvLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJykpKTtcclxuXHJcbiAgJCgnI3ZpZGVvLWJvcmRlci1ib3R0b20tdmFsdWUsICN2aWRlby1ib3JkZXItYm90dG9tLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidmlkZW8tYm9yZGVyLWJvdHRvbS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN2aWRlby1ib3JkZXItYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3ZpZGVvLWJvcmRlci1ib3R0b20tdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjdmlkZW8tYm9yZGVyLWJvdHRvbS1zdHlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLWJvdHRvbS1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3ZpZGVvLWJvcmRlci1ib3R0b20tY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JvcmRlci1ib3R0b20tY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC70LXQstC+0Lkg0LPRgNCw0L3QuNGG0Ysg0LHQu9C+0LrQsCovXHJcbiAgJCgnI3ZpZGVvLWJvcmRlci1sZWZ0LXZhbHVlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykpKTtcclxuICAkKCcjdmlkZW8tYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJCh0aHMpLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSkpO1xyXG4gICQoJyN2aWRlby1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnKSkpO1xyXG4gICQoJyN2aWRlby1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLXJhbmdlJykudmFsKHBhcnNlSW50KCQodGhzKS5jc3MoJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjdmlkZW8tYm9yZGVyLWxlZnQtdmFsdWUsICN2aWRlby1ib3JkZXItbGVmdC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3JkZXItbGVmdC13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ2aWRlby1ib3JkZXItbGVmdC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN2aWRlby1ib3JkZXItbGVmdC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN2aWRlby1ib3JkZXItbGVmdC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN2aWRlby1ib3JkZXItbGVmdC1zdHlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLWxlZnQtc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN2aWRlby1ib3JkZXItbGVmdC1jb2xvcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm9yZGVyLWxlZnQtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0YLQtdC90LXQuSovXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvU2hhZG93UmFkaW9PbicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tc2hhZG93Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB2YXIgaHYgPSAkKCcjdmlkZW8tc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjdmlkZW8tc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyN2aWRlby1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI3ZpZGVvLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI3ZpZGVvLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjdmlkZW8tc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjdmlkZW8tc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIHNwcmQgKyBcIiBcIiArIGNsciArIFwiIFwiICsgaW5zZXQ7XHJcbiAgICBpZiAoJCgnI3ZpZGVvLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChpbWdFbGVtKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9TaGFkb3dSYWRpb09mZicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tc2hhZG93Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3gtc2hhZG93JywgJ25vbmUnKTtcclxuICAgICQoaW1nRWxlbSkuY3NzKCdib3gtc2hhZG93JywgJ25vbmUnKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICAkKCcjdmlkZW8tc2hhZG93LWhvcml6b250YWwtdmFsdWUsICN2aWRlby1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3ZpZGVvLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjdmlkZW8tc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyN2aWRlby1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyN2aWRlby1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3ZpZGVvLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI3ZpZGVvLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgaWYgKCQoJyN2aWRlby1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xyXG4gICAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoaW1nRWxlbSkuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInZpZGVvLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3ZpZGVvLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3ZpZGVvLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3ZpZGVvLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZSwgI3ZpZGVvLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyN2aWRlby1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyN2aWRlby1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI3ZpZGVvLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI3ZpZGVvLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjdmlkZW8tc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjdmlkZW8tc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIHNwcmQgKyBcIiBcIiArIGNsciArIFwiIFwiICsgaW5zZXQ7XHJcbiAgICBpZiAoJCgnI3ZpZGVvLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICQoaW1nV3JhcHBlcikuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChpbWdFbGVtKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidmlkZW8tc2hhZG93LXZlcnRpY2FsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3ZpZGVvLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN2aWRlby1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjdmlkZW8tc2hhZG93LWJsdXItdmFsdWUsICN2aWRlby1zaGFkb3ctYmx1ci12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyN2aWRlby1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyN2aWRlby1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyN2aWRlby1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyN2aWRlby1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3ZpZGVvLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI3ZpZGVvLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgaWYgKCQoJyN2aWRlby1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xyXG4gICAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoaW1nRWxlbSkuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInZpZGVvLXNoYWRvdy1ibHVyLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3ZpZGVvLXNoYWRvdy1ibHVyLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3ZpZGVvLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3ZpZGVvLXNoYWRvdy1zcHJlYWQtdmFsdWUsICN2aWRlby1zaGFkb3ctc3ByZWFkLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI3ZpZGVvLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3ZpZGVvLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjdmlkZW8tc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyN2aWRlby1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3ZpZGVvLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI3ZpZGVvLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgaWYgKCQoJyN2aWRlby1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xyXG4gICAgICAkKGltZ1dyYXBwZXIpLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoaW1nRWxlbSkuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInZpZGVvLXNoYWRvdy1zcHJlYWQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjdmlkZW8tc2hhZG93LXNwcmVhZC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN2aWRlby1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3ZpZGVvLXNoYWRvdy1vcGFjaXR5LXZhbHVlLCAjdmlkZW8tc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjdmlkZW8tc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjdmlkZW8tc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyN2aWRlby1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI3ZpZGVvLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI3ZpZGVvLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKHRoaXMpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBpbnNldCA9ICQoJyN2aWRlby1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGlmICgkKCcjdmlkZW8tc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuICAgICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGltZ0VsZW0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ2aWRlby1zaGFkb3ctb3BhY2l0eS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN2aWRlby1zaGFkb3ctb3BhY2l0eS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyN2aWRlby1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN2aWRlby1zaGFkb3ctY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI3ZpZGVvLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3ZpZGVvLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjdmlkZW8tc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyN2aWRlby1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQodGhpcykudmFsKCksICQoJyN2aWRlby1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBpbnNldCA9ICQoJyN2aWRlby1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGlmICgkKCcjdmlkZW8tc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuICAgICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGltZ0VsZW0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN2aWRlby1zaGFkb3ctaW5zZXQtdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI3ZpZGVvLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3ZpZGVvLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjdmlkZW8tc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyN2aWRlby1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyN2aWRlby1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3ZpZGVvLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCh0aGlzKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGlmICgkKCcjdmlkZW8tc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuICAgICAgJChpbWdXcmFwcGVyKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGltZ0VsZW0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQvdCw0YHRgtGA0L7QtdC6INGC0LXQvdC10LkqL1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQsCDQsNC90LjQvNCw0YbQuNC4Ki9cclxuXHJcbiAgJCgnI3ZpZGVvLWFuaW1hdGlvbi10eXBlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpICE9IFwibm9uZVwiKSB7XHJcbiAgICAgICQoaW1nRWxlbSkuY3NzKCdhbmltYXRpb24tbmFtZScsICQodGhpcykudmFsKCkpO1xyXG4gICAgICAkKGltZ0VsZW0pLmNzcygnYW5pbWF0aW9uLWRlbGF5JywgJCgnI3ZpZGVvLWFuaW1hdGlvbi1kZWxheS12YWx1ZScpLnZhbCgpICsgJ3MnKTtcclxuICAgICAgJChpbWdFbGVtKS5jc3MoJ2FuaW1hdGlvbi1kdXJhdGlvbicsICQoJyN2aWRlby1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUnKS52YWwoKSArICdzJyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjdmlkZW8tYW5pbWF0aW9uLWRlbGF5LXZhbHVlLCAjdmlkZW8tYW5pbWF0aW9uLWRlbGF5LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChpbWdFbGVtKS5jc3MoJ2FuaW1hdGlvbi1kZWxheScsICQodGhpcykudmFsKCkgKyAncycpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInZpZGVvLWFuaW1hdGlvbi1kZWxheS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN2aWRlby1hbmltYXRpb24tZGVsYXktdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjdmlkZW8tYW5pbWF0aW9uLWRlbGF5LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3ZpZGVvLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZSwgI3ZpZGVvLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoaW1nRWxlbSkuY3NzKCdhbmltYXRpb24tZHVyYXRpb24nLCAkKHRoaXMpLnZhbCgpICsgJ3MnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ2aWRlby1hbmltYXRpb24tZHVyYXRpb24tdmFsdWVcIikge1xyXG4gICAgICAkKCcjdmlkZW8tYW5pbWF0aW9uLWR1cmF0aW9uLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3ZpZGVvLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQvdCw0YHRgtGA0L7QtdC6INCw0L3QuNC80LDRhtC40LgqL1xyXG5cclxuICAvKtCR0LvQvtC6INGC0LDQudC80LDRg9GC0LAqL1xyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0hISHQodCU0JXQm9CQ0KLQrCEhIS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBcclxuICBcclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpKSB7XHJcbiAgICB0aW1vdXRDaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltb3V0Q2hlY2tCb3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuICBcclxuICAkKCcjdmlkZW8tZGlzcGxheS1ub25lLXZhbHVlLCAjdmlkZW8tdGltZW91dC1ob3VyLXZhbHVlLCAjdmlkZW8tdGltZW91dC1ob3VyLXZhbHVlLXJhbmdlLCAjdmlkZW8tdGltZW91dC1taW51dGUtdmFsdWUsICN2aWRlby10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZSwgI3ZpZGVvLXRpbWVvdXQtc2Vjb25kLXZhbHVlLCAjdmlkZW8tdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaWQgPSB0aHMuYXR0cignaWQnKTtcclxuXHJcbiAgICB2YXIgaG91cnMgPSAkKCcjdmlkZW8tdGltZW91dC1ob3VyLXZhbHVlJykudmFsKCkgKiAzNjAwO1xyXG4gICAgdmFyIG1pbnV0ZSA9ICQoJyN2aWRlby10aW1lb3V0LW1pbnV0ZS12YWx1ZScpLnZhbCgpICogNjA7XHJcbiAgICB2YXIgc2Vjb25kID0gcGFyc2VJbnQoJCgnI3ZpZGVvLXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKCkpO1xyXG5cclxuICAgIHZhciB0aW1lID0gaG91cnMgKyBtaW51dGUgKyBzZWNvbmQ7XHJcblxyXG4gICAgdGltZSA9IHRpbWUgKiAxMDAwO1xyXG5cclxuXHJcbiAgICBpZiAodGltb3V0Q2hlY2tCb3guY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgICAgJCgnI21haW5BcmVhJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNvZGVcIiBpZD1cInNjcmlwdC0nICsgaWQgKyAnXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPicgKyBbaWQsIHRpbWVdICsgJzwvc3Bhbj4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzY3JpcHQtJyArIGlkKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ2aWRlby10aW1lb3V0LWhvdXItdmFsdWVcIikge1xyXG4gICAgICAkKCcjdmlkZW8tdGltZW91dC1ob3VyLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ2aWRlby10aW1lb3V0LWhvdXItdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjdmlkZW8tdGltZW91dC1ob3VyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ2aWRlby10aW1lb3V0LW1pbnV0ZS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyN2aWRlby10aW1lb3V0LW1pbnV0ZS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwidmlkZW8tdGltZW91dC1taW51dGUtdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjdmlkZW8tdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInZpZGVvLXRpbWVvdXQtc2Vjb25kLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3ZpZGVvLXRpbWVvdXQtc2Vjb25kLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJ2aWRlby10aW1lb3V0LXNlY29uZC12YWx1ZS1yYW5nZVwiKSB7XHJcbiAgICAgICQoJyN2aWRlby10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0LHQu9C+0LrQsCDRgtCw0LnQvNCw0YPRgtCwKi9cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8q0J/QtdGA0LXQstC+0LQgaGV4INCyIFJHQiAo0LPQtNC1LdGC0L4g0YLQvtGH0L3QviDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8sINGD0LbQtSDQvdC1INC/0L7QvNC90Y4pKi9cclxuZnVuY3Rpb24gaGV4VG9SR0IoaGV4LCBhbHBoYSkge1xyXG4gIHZhciByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNiksXHJcbiAgICBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNiksXHJcbiAgICBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNik7XHJcblxyXG4gIGlmIChhbHBoYSkge1xyXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XHJcbiAgfSBlbHNlIGlmIChhbHBoYSA9PSAwKSB7XHJcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwicmdiKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIpXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUZWcoY29udGVudCwgcmVPcGVuLCByZUNsb3plKSB7XHJcbiAgY29uc3QgdGVnID0gbmV3IFJlZ0V4cCgnPCcgKyByZU9wZW4gKyAnW148XSo8LycgKyByZUNsb3plICsgJz4nLCAnZ2knKTtcclxuICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHRlZywgJycpO1xyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=