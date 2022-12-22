import { makePreview, showHideSettings, getRandom, hexToRGB, closeRightPanel } from '../../global/global.js';
import { addFunctionalityToListElement } from './listModule.js';

$('#mainArea').on('click', '.copyList', function () {
  const listBlockId = $(this).parents('.listBlock').attr('id');
  const listBlockElem = document.getElementById(listBlockId);
  const clonId = 'list' + getRandom();
  $(listBlockElem).clone(true).attr('id', clonId).insertAfter(listBlockElem);

  addFunctionalityToListElement(clonId);
  makePreview();
});

let ths = null;
let listBlockElem = null;
let listWrapperElem = null;
let listEl = null;
let listItems = null;

$('#mainArea').on('click', '.listSet', function (e) {
  ths = $(this).parents('.listBlock');
  listBlockElem = document.getElementById($(ths).attr('id'));
  listWrapperElem = listBlockElem.getElementsByClassName('listWrapper')[0];
  listEl = listBlockElem.getElementsByClassName('list')[0];
  let addListItemEl = document.getElementById('addListItem');
  let listImages = document.getElementById('list-icon-style-settings').getElementsByTagName('img');
  listItems = listEl.getElementsByTagName('li');

  //Появление правой панели, инициализация инпутов.
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
  }).addClass('activated');

  // Закрыть панель

  document.addEventListener('mousedown', closeRightPanel);

  //Настройки отступов формы

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
      return (s || '') + 'margin-top:' + val + 'px !important;'
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
      return (s || '') + 'margin-right:' + val + 'px !important;'
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
      return (s || '') + 'margin-bottom:' + val + 'px !important;'
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
      return (s || '') + 'margin-left:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "list-margin-left-value") {
      $('#list-margin-left-value-range').val($(this).val());
    } else {
      $('#list-margin-left-value').val($(this).val());
    }
    makePreview();
  });

  //Вертикальное выравнивание формы

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
  }
  listMarginCenter.onclick = function () {
    listBlockElem.style.marginTop = '0px';
    listBlockElem.style.marginBottom = '0px';
    makePreview();
  }
  listMarginBottom.onclick = function () {
    listBlockElem.style.marginTop = 'auto';
    listBlockElem.style.marginBottom = '0px';
    makePreview();
  }

  //Выбор иконки

  showHideSettings('listSettings', 'listSettingsIndicator');
  showHideSettings('list-icon-style-settings', 'listIconStyleIndicator');

  for (let i = 0; i < listImages.length; i++) {
    listImages[i].onclick = function () {
      for (let j = 0; j < listItems.length; j++) {
        listItems[j].style.backgroundImage = 'url("' + listImages[i].src + '")';
      }
      makePreview();
    }
  }

  //Добавление строки

  showHideSettings('list-add-string-settings', 'listAddStringIndicator');

  function changeListValues(liItems) {
    const liValuesWrapper = document.getElementById('liItems');
    liValuesWrapper.innerHTML = '';

    for (let i = 0; i < liItems.length; i++) {
      const div = document.createElement('div');
      const span = document.createElement('span');
      const listValue = document.createElement('input');

      listValue.type = 'text';
      listValue.value = liItems[i].innerHTML;
      span.innerHTML = 'X';
      liValuesWrapper.append(div);
      div.append(listValue);
      div.append(span);

      listValue.oninput = function () {
        liItems[i].innerHTML = listValue.value;
        makePreview();
      }
      span.onclick = function () {
        liItems[i].remove();
        changeListValues(liItems);
        makePreview();
      }
    }
  }
  changeListValues(listItems);

  addListItemEl.onclick = function () {
    const newLi = document.createElement('li');

    newLi.innerHTML = 'Описание';
    listEl.append(newLi);
    changeListValues(listItems);
    listEl = listBlockElem.getElementsByClassName('list')[0];
    listItems = listEl.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
      if (i < listItems.length - 1) {
        $(listItems[i]).css('margin-bottom', $('#list-space-value').val() + 'px');
      }
    }
    if (listItems[0]) {
      newLi.style.backgroundImage = listItems[0].style.backgroundImage;
    }
    makePreview();
  }


  //Отступ между строк

  showHideSettings('show-list-space-settings', 'listSpaceIndicator');

  $('#list-space-value').val(parseInt(getComputedStyle(listItems[0]).marginBottom));
  $('#list-space-value-range').val(parseInt(getComputedStyle(listItems[0]).marginBottom));
  $('#list-space-value, #list-space-value-range').on('input', function () {
    for (let i = 0; i < listItems.length; i++) {
      if (i < listItems.length - 1) {
        $(listItems[i]).css('margin-bottom', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      }
    }
    if ($(this).attr('id') == "list-space-value") {
      $('#list-space-value-range').val($(this).val());
    } else {
      $('#list-space-value').val($(this).val());
    }
    makePreview();
  });

  //Выбор шрифта

  showHideSettings('show-font-settings', 'listFontIndicator');
  showHideSettings('list-font-family-settings', 'listFontFamilyIndicator');

  listFontFamilySelect.value = getComputedStyle(listEl).fontFamily;
  listFontFamilySelect.onchange = function () {
    listEl.style.fontFamily = listFontFamilySelect.value;
    makePreview();
  }

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
  }

  //Размер шрифта

  showHideSettings('list-font-size-settings', 'listFontSizeIndicator');

  $('#list-font-size-value').val(parseInt(getComputedStyle(listEl).fontSize));
  $('#list-font-size-value-range').val(parseInt(getComputedStyle(listEl).fontSize));
  $('#list-font-size-value, #list-font-size-value-range').on('input', function () {
    $(listEl).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    if ($(this).attr('id') == "list-font-size-value") {
      $('#list-font-size-value-range').val($(this).val());
    } else {
      $('#list-font-size-value').val($(this).val());
    }
    makePreview();
  });

  //Межстрочный интервал

  showHideSettings('list-line-height-settings', 'listLineHeightIndicator');

  $('#list-line-height-value').val(parseInt(getComputedStyle(listEl).lineHeight));
  $('#list-line-height-value-range').val(parseInt(getComputedStyle(listEl).lineHeight));
  $('#list-line-height-value, #list-line-height-value-range').on('input', function () {
    $(listEl).css('line-height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    if ($(this).attr('id') == "list-line-height-value") {
      $('#list-line-height-value-range').val($(this).val());
    } else {
      $('#list-line-height-value').val($(this).val());
    }
    makePreview();
  });

  //Выбор цвета

  showHideSettings('list-font-color-settings', 'listFontColorIndicator');

  $('#list-color-value').on('change', function () {
    $(listEl).css('color', $(this).val());
    makePreview();
  });

  //Тени шрифта

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
  }
  document.getElementById('listTextShadowRadioOff').onclick = function () {
    document.getElementById('list-text-shadow').style.display = 'none';
    $(listEl).css('text-shadow', 'none');
    makePreview();
  }

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
  });

  //Скрытие блока

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
