import { makePreview, showHideSettings, getRandom } from '../../global/global.js';
import { addFunctionalityToVideoElement } from './videoModule.js';

$('#mainArea').on('click', '.copyVideo', function () {
  const imgBlockId = $(this).parents('.videoBlock').attr('id');
  const imgBlockElem = document.getElementById(imgBlockId);
  const clonId = 'video' + getRandom();

  $(imgBlockElem).clone(true).attr('id', clonId).css('height', 'auto').insertAfter(imgBlockElem);

  const clone = document.getElementById(clonId);
  const clonedImg = clone.getElementsByClassName('img')[0];
  const imgWrapper = clone.getElementsByClassName('imageWrapper')[0];
  const cloneResizerY = clone.getElementsByClassName('resizerY')[0];
  const cloneResizerXY = clone.getElementsByClassName('resizerXY')[0];
  const cloneResizerX = clone.getElementsByClassName('resizerX')[0];

  addFunctionalityToElement(clonId);
  makePreview();
});


let ths = null;
let videoPlayerSrc = null;
let content = null;
let imgBlockElem = null;
let imgElem = null;
let imgWrapperElem = null;
let proportion = null;
let imgWrapper = null;
let resizerY_Elem = null;
let resizerXY_Elem = null;
let iframe = null;
let iframeWrapper = null;
let timoutCheckBox = null;

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
  iframeWrapper = imgBlockElem.getElementsByClassName('iframeWrapper')[0];
  iframe = imgBlockElem.getElementsByTagName('iframe')[0];
  timoutCheckBox = document.getElementById('video-display-none-value');

  //Появление правой панели, инициализация инпутов.
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
    }
    document.getElementById('videoBorderRadioAll').onclick = function () {
      document.getElementById('videoBorderAll').style.display = 'block';
      document.getElementById('videoBorderEvery').style.display = 'none';
    }
  })();

  // Вставка ссылки или кода видео EMBED
  function changeVideoSrc() {
    if (videoSrc.value == "youtube") {
      youtube.style.display = 'block';
      vimeo.style.display = 'none';
      embedCode.style.display = 'none';
      videoAutoplay.style.display = 'block';
      videoControls.style.display = 'block';
      if (imgWrapperElem.getElementsByClassName('video')[0]) {
        videoPlayerSrc = imgWrapperElem.getElementsByTagName('iframe')[0].src;
        videoPlayerSrc = (videoPlayerSrc == '') ? 'Отсутствует' : videoPlayerSrc.replace('embed/', 'watch?v=');
        videoPlayerSrc = (videoPlayerSrc == '') ? 'Отсутствует' : videoPlayerSrc.replace('player.vimeo.com/video', 'vimeo.com');
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
        videoPlayerSrc = (videoPlayerSrc == '') ? 'Отсутствует' : videoPlayerSrc.replace('player.vimeo.com/video', 'vimeo.com');
        videoPlayerSrc = (videoPlayerSrc == '') ? 'Отсутствует' : videoPlayerSrc.replace('embed/', 'watch?v=');
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
  }

  //автопроигрывание

  if (
    imgWrapperElem.getElementsByClassName('video')[0] &&
    iframe.src != '' &&
    iframe.src.indexOf('delay') != -1
  ) {
    videoAutoplayCheckBox.checked = true;
  } else {
    videoAutoplayCheckBox.checked = false;
  }

  videoAutoplayCheckBox.onclick = function () {
    let src;
    switch (videoSrc.value) {

      case 'youtube':
        if (
          videoIndicator.innerHTML != 'Отсутствует' &&
          youtubeInput.value == '' && videoAutoplayCheckBox.checked == true &&
          iframe.src.indexOf('delay') == -1
        ) {
          src = (iframe.src.indexOf('controls') == -1) ?
            videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?delay&mute=1' :
            videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?delay&mute=1&controls=0';
          iframe.src = src;
        } else if (
          videoIndicator.innerHTML != 'Отсутствует' &&
          youtubeInput.value == '' && videoAutoplayCheckBox.checked == false &&
          iframe.src.indexOf('delay') != -1
        ) {
          src = (iframe.src.indexOf('controls') == -1) ?
            videoIndicator.innerHTML.replace('watch?v=', 'embed/') :
            videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?controls=0';
          iframe.src = src;
        }
        makePreview();
        break;
      case 'vimeo':
        if (
          videoIndicator.innerHTML != 'Отсутствует' &&
          vimeoInput.value == '' && videoAutoplayCheckBox.checked == true &&
          iframe.src.indexOf('delay') == -1
        ) {
          src = (iframe.src.indexOf('controls') == -1) ?
            videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1' :
            videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1&controls=0';
          iframe.src = src;
        } else if (
          videoIndicator.innerHTML != 'Отсутствует' &&
          vimeoInput.value == '' && videoAutoplayCheckBox.checked == false &&
          iframe.src.indexOf('delay') != -1
        ) {
          src = (iframe.src.indexOf('controls') == -1) ?
            videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') :
            videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?controls=0';
          iframe.src = src;
        }
        makePreview();
        break;

    }
  }

  //Скрыть панель управления

  if (
    imgWrapperElem.getElementsByTagName('iframe')[0] &&
    iframe.src != '' &&
    iframe.src.indexOf('controls') != -1
  ) {
    videoControlsCheckBox.checked = true;
  } else {
    videoControlsCheckBox.checked = false;
  }

  videoControlsCheckBox.onclick = function () {
    let src;
    switch (videoSrc.value) {

      case 'youtube':
        if (
          videoIndicator.innerHTML != 'Отсутствует' &&
          youtubeInput.value == '' && videoControlsCheckBox.checked == true &&
          iframe.src.indexOf('controls') == -1
        ) {
          src = (iframe.src.indexOf('delay') == -1) ?
            videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?controls=0' :
            videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?delay&mute=1&controls=0';
          iframe.src = src;
        } else if (
          videoIndicator.innerHTML != 'Отсутствует' &&
          youtubeInput.value == '' && videoControlsCheckBox.checked == false &&
          iframe.src.indexOf('controls') != -1
        ) {
          src = (iframe.src.indexOf('delay') == -1) ?
            videoIndicator.innerHTML.replace('watch?v=', 'embed/') :
            videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?delay&mute=1';
          iframe.src = src;
        }
        makePreview();
        break;
      case 'vimeo':
        if (
          videoIndicator.innerHTML != 'Отсутствует' &&
          vimeoInput.value == '' && videoControlsCheckBox.checked == true &&
          iframe.src.indexOf('controls') == -1
        ) {
          src = (iframe.src.indexOf('delay') == -1) ?
            videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?controls=0' :
            videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1&controls=0';
          iframe.src = src;
        } else if (
          videoIndicator.innerHTML != 'Отсутствует' &&
          vimeoInput.value == '' && videoControlsCheckBox.checked == false &&
          iframe.src.indexOf('controls') != -1
        ) {
          src = (iframe.src.indexOf('delay') == -1) ?
            videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') :
            videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1';
          iframe.src = src;
        }
        makePreview();
        break;

    }
  }

  videoUrlExec.onclick = function () {
    let src = '';
    let stringToDelete = '';
    switch (videoSrc.value) {

      case 'youtube':
        if (!imgWrapperElem.getElementsByClassName('video')[0]) {
          iframeWrapper.innerHTML = '<iframe class="video" frameborder="0" width="100%" height="100%"allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
          iframe = iframeWrapper.getElementsByTagName('iframe')[0];
        }

        if (youtubeInput.value != '') {
          src = youtubeInput.value;
          if (!videoAutoplayCheckBox.checked && !videoControlsCheckBox.checked) {
            src = src.replace('watch?v=', 'embed/');
          } else if (videoAutoplayCheckBox.checked && videoControlsCheckBox.checked) {
            src = src.replace('watch?v=', 'embed/') + '?delay&mute=1&controls=0';
          } else if (videoAutoplayCheckBox.checked && !videoControlsCheckBox.checked) {
            src = src.replace('watch?v=', 'embed/') + '?delay&mute=1';
          } else {
            src = src.replace('watch?v=', 'embed/') + '?controls=0';
          }
          iframe.src = src;
          youtubeInput.value = '';
          changeVideoSrc();
          stringToDelete = new RegExp('<img class="noVideo"[^>]*>', 'gi');
          iframeWrapper.innerHTML = iframeWrapper.innerHTML.replace(stringToDelete, '');
          iframe = imgBlockElem.getElementsByTagName('iframe')[0];
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
  }

  //Вертикальное выравнивание
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
    makePreview();

    //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  }
  videoMarginCenter.onclick = function () {
    imgBlockElem.style.marginTop = '0px';
    imgBlockElem.style.marginBottom = '0px';
    makePreview();

    //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  }
  videoMarginBottom.onclick = function () {
    imgBlockElem.style.marginTop = 'auto';
    imgBlockElem.style.marginBottom = '0px';
    makePreview();

    //    resizerY_Elem.style.top = '0';
    //    resizerY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.top = '0';
    //    resizerXY_Elem.style.left = '0';
    //    resizerXY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.marginLeft = '0';
  }

  //Настройки отступов

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
      return (s || '') + 'margin-top:' + val + 'px !important;'
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
      return (s || '') + 'margin-right:' + val + 'px !important;'
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
      return (s || '') + 'margin-bottom:' + val + 'px !important;'
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
      return (s || '') + 'margin-left:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "video-margin-left-value") {
      $('#video-margin-left-value-range').val($(this).val());
    } else {
      $('#video-margin-left-value').val($(this).val());
    }
    makePreview();
  });

  //Настройки всех границ изображения
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
  }
  document.getElementById('videoShadowRadioOff').onclick = function () {
    document.getElementById('video-shadow').style.display = 'none';
    $(imgWrapper).css('box-shadow', 'none');
    $(imgElem).css('box-shadow', 'none');
    makePreview();
  }

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
  const teg = new RegExp('<' + reOpen + '[^<]*</' + reCloze + '>', 'gi');
  content = content.replace(teg, '');
  return content;
}
