import { makePreview, showHideSettings, getRandom, closeRightPanel } from '../../global/global.js';
import { addFunctionalityToLineElement } from './lineModule.js';

$('#mainArea').on('click', '.copyLine', function () {
  const lineBlockId = $(this).parents('.lineBlock').attr('id');
  const lineBlockElem = document.getElementById(lineBlockId);
  const clonId = 'line' + getRandom();
  $(lineBlockElem).clone(true).attr('id', clonId).insertAfter(lineBlockElem);

  addFunctionalityToLineElement(clonId);
  makePreview();
});

let ths = null;
let lineBlockElem = null;
let lineEl = null;

$('#mainArea').on('click', '.lineSet', function (e) {
  ths = $(this).parents('.lineBlock');
  lineBlockElem = document.getElementById(ths.attr('id'));
  let lineWrapperElem = lineBlockElem.getElementsByClassName('lineWrapper')[0];
  let lineImages = document.getElementById('lineIcons').getElementsByClassName('lineIconImg');
  let lineOrImgLineEl = document.getElementById('lineOrImgLine');
  
  if (lineBlockElem.getElementsByClassName('line')[0]) {
    lineEl = lineWrapperElem.getElementsByClassName('line')[0];
  } else {
    lineEl = lineWrapperElem.getElementsByClassName('lineImg')[0];
  }

  //Появление правой панели, инициализация инпутов.
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
  $('#list-settings').hide()
  $('#line-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  // Закрыть панель

  document.addEventListener('mousedown', closeRightPanel);

  //Настройки отступов формы

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
      return (s || '') + 'margin-top:' + val + 'px !important;'
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
      return (s || '') + 'margin-right:' + val + 'px !important;'
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
      return (s || '') + 'margin-bottom:' + val + 'px !important;'
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
      return (s || '') + 'margin-left:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "line-margin-left-value") {
      $('#line-margin-left-value-range').val($(this).val());
    } else {
      $('#line-margin-left-value').val($(this).val());
    }
    makePreview();
  });

  //Вертикальное выравнивание формы

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
  }
  lineMarginCenter.onclick = function () {
    lineBlockElem.style.marginTop = '0px';
    lineBlockElem.style.marginBottom = '0px';
    makePreview();
  }
  lineMarginBottom.onclick = function () {
    lineBlockElem.style.marginTop = 'auto';
    lineBlockElem.style.marginBottom = '0px';
    makePreview();
  }

  //Выбор линии

  showHideSettings('lineSettings', 'lineSettingsIndicator');
  showHideSettings('line-choose-settings', 'lineChooseIndicator');
  
  if (lineWrapperElem.getElementsByClassName('lineImg')[0]) {
    lineSettingsUnderMenuIndicator.style.display = 'none';
    document.getElementById('line-settings-under-menu').style.display = 'none';
    lineOrImgLineEl.value = 'img';
	lineIcons.style.display = 'block';
  } else {
    lineIcons.style.display = 'none';
	lineSettingsUnderMenuIndicator.style.display = 'flex';
    lineOrImgLineEl.value = 'line';
  }
  
  lineOrImgLineEl.onchange = function() {
    if (lineOrImgLineEl.value == 'img') {
      lineSettingsUnderMenuIndicator.style.display = 'none';
      document.getElementById('line-settings-under-menu').style.display = 'none';
      lineIcons.style.display = 'block';
      
      if (lineWrapperElem.getElementsByClassName('line')[0]) {
        const lineImgEl = document.createElement('img');
        
        lineImgEl.className = 'lineImg';
        lineImgEl.src = lineImages[0].src;
        lineEl.remove();
        lineWrapperElem.append(lineImgEl);
        lineEl = lineWrapperElem.getElementsByClassName('lineImg')[0];
        makePreview();
      }
    } else {
      lineSettingsUnderMenuIndicator.style.display = 'flex';
      document.getElementById('line-settings-under-menu').style.display = 'block';
      lineIcons.style.display = 'none';
      
      if (lineWrapperElem.getElementsByClassName('lineImg')[0]) {
        const line = document.createElement('hr');
        
        line.className = 'line';
        lineEl.remove();
        lineWrapperElem.append(line);
        lineEl = lineWrapperElem.getElementsByClassName('line')[0];
        makePreview();
      }
    }
  }
  
  for (let i = 0; i < lineImages.length; i++) {
    lineImages[i].onclick = function() {
      if (lineWrapperElem.getElementsByClassName('line')[0]) {
        const lineImgEl = document.createElement('img');
        
        lineImgEl.className = 'lineImg';
        lineImgEl.src = lineImages[i].src;
        lineEl.remove();
        lineWrapperElem.append(lineImgEl);
        lineEl = lineWrapperElem.getElementsByClassName('lineImg')[0];
      } else {
        lineEl.src = lineImages[i].src;
      }
      makePreview();
    }
  }
  
  // Стиль линии
  
  showHideSettings('line-settings-under-menu', 'lineSettingsUnderMenuIndicator');
  showHideSettings('line-style-settings', 'lineStyleIndicator');
  
  $('#line-style').val($(lineEl).css('border-bottom-style'));
  
  $('#line-style').on('change', function () {
    $(lineEl).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });
  
  // Толщина линии
  
  showHideSettings('line-height-settings', 'lineHeightIndicator');
  
  $('#line-height-value').val(parseInt($(lineEl).css('border-bottom-width')));
  $('#line-height-value-range').val(parseInt($(lineEl).css('border-bottom-width')));
  
  $('#line-height-value, #line-height-value-range').on('input', function () {
    $(lineEl).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "line-height-value") {
      $('#line-height-value-range').val($(this).val());
    } else {
      $('#line-height-value').val($(this).val());
    }
    makePreview();
  });
  
  // Выбор цвета
  
  showHideSettings('line-color-settings', 'lineColorIndicator');
  
  $('#line-color').on('change', function () {
    $(lineEl).css('border-bottom-color', $(this).val());
    makePreview();
  });
  
  //Анимация

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
  });

  //Скрытие блока

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
