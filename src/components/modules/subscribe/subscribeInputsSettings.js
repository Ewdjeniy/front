import { makePreview, showHideSettings, getRandom, hexToRGB } from '../../global/global.js';

let subscribeBlockElem = null;
let subscribeWrapperElem = null;
let currentSubscribe = null;
let subscribeSubmitElem = null;
let subscribeInputs = null;
let allInputs = null;

function includeSubscribeInputsSettings(id) {
  'use strict';

  subscribeBlockElem = document.getElementById(id);
  subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
  allInputs = currentSubscribe.getElementsByTagName('input');

  showHideSettings('subscribe-inputs-settings', 'subscribeInputsIndicator');

  // Расстояние между полями

  showHideSettings('show-subscribe-input-space-settings', 'subscribeInputSpaceIndicator');

  $('#subscribe-input-space-value').val(parseInt(getComputedStyle(subscribeInputs[0]).marginBottom));
  $('#subscribe-input-space-value-range').val(parseInt(getComputedStyle(subscribeInputs[0]).marginBottom));
  $('#subscribe-input-space-value, #subscribe-input-space-value-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('margin-bottom', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    }
    if ($(this).attr('id') == "subscribe-input-space-value") {
      $('#subscribe-input-space-value-range').val($(this).val());
    } else {
      $('#subscribe-input-space-value').val($(this).val());
    }
    makePreview();
  });

  /*Настройки тени submit*/

  showHideSettings('subscribeInput-text-shadow-settings', 'subscribeInputTextShadowIndicator');

  document.getElementById('subscribeInputTextShadowRadioOn').onclick = function () {
    document.getElementById('subscribeInput-text-shadow').style.display = 'block';
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    makePreview();
  }
  document.getElementById('subscribeInputTextShadowRadioOff').onclick = function () {
    document.getElementById('subscribeInput-text-shadow').style.display = 'none';
    $(subscribeInputElem).css('text-shadow', 'none');
    makePreview();
  }

  $('#subscribeInput-text-shadow-horizontal-value, #subscribeInput-text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribeInput-text-shadow-horizontal-value") {
      $('#subscribeInput-text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-horizontal-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeInput-text-shadow-vertical-value, #subscribeInput-text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribeInput-text-shadow-vertical-value") {
      $('#subscribeInput-text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-vertical-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeInput-text-shadow-blur-value, #subscribeInput-text-shadow-blur-value-range').on('input', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = hexToRGB($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribeInput-text-shadow-blur-value") {
      $('#subscribeInput-text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-blur-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeInput-text-shadow-opacity-value, #subscribeInput-text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribeInput-text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribeInput-text-shadow-opacity-value") {
      $('#subscribeInput-text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-opacity-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeInput-text-shadow-color-value').on('change', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    makePreview();
  });
  /*Конец настроек тени submit*/


  //Выбор шрифта полей
  subscribeInputFontFamilySelect.value = getComputedStyle(subscribeInputs[0]).fontFamily;
  subscribeInputFontFamilySelect.onchange = function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      subscribeInputs[i].style.fontFamily = subscribeInputFontFamilySelect.value;
    }
    makePreview();
  }

  if (getComputedStyle(subscribeInputs[0]).fontWeight == '900') {
    subscribeInputBold.checked = true;
  } else {
    subscribeInputBold.checked = false;
  }
  subscribeInputBold.onclick = function () {
    if (subscribeInputBold.checked) {
      for (let i = 0; i < subscribeInputs.length; i++) {
        subscribeInputs[i].style.fontWeight = '900';
      }
    } else {
      for (let i = 0; i < subscribeInputs.length; i++) {
        subscribeInputs[i].style.fontWeight = 'normal';
      }
    }
    makePreview();
  }

  //Размер шрифта полей

  showHideSettings('subscribe-show-inputs-font-settings', 'subscribeInputsFontIndicator');

  $('#subscribeInput-font-size-value').val(parseInt(getComputedStyle(subscribeInputs[0]).fontSize));
  $('#subscribeInput-font-size-value-range').val(parseInt(getComputedStyle(subscribeInputs[0]).fontSize));
  $('#subscribeInput-font-size-value, #subscribeInput-font-size-value-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    }
    if ($(this).attr('id') == "subscribeInput-font-size-value") {
      $('#subscribeInput-font-size-value-range').val($(this).val());
    } else {
      $('#subscribeInput-font-size-value').val($(this).val());
    }
    makePreview();
  });

  //Цвет текста у полей
  $('#subscribeInput-color-value').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('color', $(this).val());
    }
    makePreview();
  });

  //Цвет полей

  showHideSettings('subscribeInput-background-types', 'subscribeInputsBackgroundIndicator');

  subscribeInputBackgroundRadioColor.onclick = function () {
    subscribeInputBackgroundGradient.style.display = 'none';
    subscribeInputBackgroundColor.style.display = 'block';
  }
  subscribeInputBackgroundRadioGradient.onclick = function () {
    subscribeInputBackgroundColor.style.display = 'none';
    subscribeInputBackgroundGradient.style.display = 'block';
  }

  $('#subscribeInput-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = hexToRGB($(this).val(), opacity);
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', color);
    }
    makePreview();
  });

  $('#subscribeInput-gradient-color-1').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', 'linear-gradient(' + parseInt($('#subscribeInput-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#subscribeInput-gradient-color-2').val() + ')');
    }
    makePreview();
  });

  $('#subscribeInput-gradient-color-2').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', 'linear-gradient(' + parseInt($('#subscribeInput-gradient-angle').val()) + 'deg, ' + $('#subscribeInput-gradient-color-1').val() + ', ' + $(this).val() + ')');
    }
    makePreview();
  });

  $('#subscribeInput-gradient-angle').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#subscribeInput-gradient-color-1').val() + ', ' + $('#subscribeInput-gradient-color-2').val() + ')');
    }
    makePreview();
  });

  $('#subscribeInput-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#subscribeInput-main-color').val(), opacity / 100);
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', color);
    }
    makePreview();
  });

  //Высота полей

  showHideSettings('subscribeInput-height', 'subscribeInputsSizeIndicator');

  if (getComputedStyle(subscribeInputs[0]).height == 'auto') {
    subscribeInputAutoHeight.checked = true;
  } else {
    subscribeInputAutoHeight.checked = false;
  }
  $('#subscribeInput-height-value').val(parseInt($(subscribeInputs[0]).css('height')));
  $('#subscribeInput-height-value-range').val(parseInt($(subscribeInputs[0]).css('height')));

  subscribeInputAutoHeight.onclick = function () {
    if (subscribeInputAutoHeight.checked == true) {
      for (let i = 0; i < subscribeInputs.length; i++) {
        subscribeInputs[i].style.height = 'auto';
      }
      makePreview();
    }
  }

  $('#subscribeInput-height-value, #subscribeInput-height-value-range').on('input', function () {
    if (subscribeInputAutoHeight.checked == false) {
      for (let i = 0; i < subscribeInputs.length; i++) {
        $(subscribeInputs[i]).css('height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      }
      if ($(this).attr('id') == "subscribeInput-height-value") {
        $('#subscribeInput-height-value-range').val($(this).val());
      } else {
        $('#subscribeInput-height-value').val($(this).val());
      }
    }
    makePreview();
  });

  //Ширина полей
  if (getComputedStyle(subscribeInputs[0]).width == '100%') {
    subscribeInputAutoWidth.checked = true;
  } else {
    subscribeInputAutoWidth.checked = false;
  }
  $('#subscribeInput-width-value').val(parseInt($(subscribeInputs[0]).css('width')));
  $('#subscribeInput-width-value-range').val(parseInt($(subscribeInputs[0]).css('width')));

  subscribeInputAutoWidth.onclick = function () {
    if (subscribeInputAutoWidth.checked == true) {
      for (let i = 0; i < subscribeInputs.length; i++) {
        subscribeInputs[i].style.width = '100%';
      }
      makePreview();
    }
  }

  $('#subscribeInput-width-value, #subscribeInput-width-value-range').on('input', function () {
    if (subscribeInputAutoWidth.checked == false) {
      for (let i = 0; i < subscribeInputs.length; i++) {
        $(subscribeInputs[i]).css('width', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      }
      if ($(this).attr('id') == "subscribeInput-width-value") {
        $('#subscribeInput-width-value-range').val($(this).val());
      } else {
        $('#subscribeInput-width-value').val($(this).val());
      }
    }
    makePreview();
  });

  //Настройки всех границ полей

  showHideSettings('subscribe-show-inputs-border-settings', 'subscribeInputsBorderIndicator');

  subscribeInputBorderRadioEvery.onclick = function () {
    subscribeInputBorderAll.style.display = 'none';
    subscribeInputBorderEvery.style.display = 'block';
  }
  subscribeInputBorderRadioAll.onclick = function () {
    subscribeInputBorderAll.style.display = 'block';
    subscribeInputBorderEvery.style.display = 'none';
  }

  $('#subscribeInput-border-value').val(parseInt($(subscribeInputs[0]).css('border-width')));
  $('#subscribeInput-border-value-range').val(parseInt($(subscribeInputs[0]).css('border-width')));
  $('#subscribeInput-border-radius').val(parseInt($(subscribeInputs[0]).css('border-radius')));
  $('#subscribeInput-border-radius-range').val(parseInt($(subscribeInputs[0]).css('border-radius')));

  $('#subscribeInput-border-value, #subscribeInput-border-value-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-value") {
      $('#subscribeInput-border-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeInput-border-radius, #subscribeInput-border-radius-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-radius") {
      $('#subscribeInput-border-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-radius').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeInput-border-style').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-style', $(this).find('option:selected').val());
    }
    makePreview();
  });

  $('#subscribeInput-border-color-value').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-color', $(this).val());
    }
    makePreview();
  });

  /*Настройки для верхней границы полей*/

  $('#subscribeInput-border-top-value').val(parseInt($(subscribeInputs[0]).css('border-top-width')));
  $('#subscribeInput-border-top-value-range').val(parseInt($(subscribeInputs[0]).css('border-top-width')));
  $('#subscribeInput-border-left-top-radius').val(parseInt($(subscribeInputs[0]).css('border-top-left-radius')));
  $('#subscribeInput-border-left-top-radius-range').val(parseInt($(subscribeInputs[0]).css('border-top-left-radius')));

  $('#subscribeInput-border-top-value, #subscribeInput-border-top-value-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-top-value") {
      $('#subscribeInput-border-top-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-top-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeInput-border-left-top-radius, #subscribeInput-border-left-top-radius-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-left-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-left-top-radius") {
      $('#subscribeInput-border-left-top-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-left-top-radius').val($(this).val());
    }
    makePreview();
  });
  $('#subscribeInput-border-top-style-value').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-style', $(this).find('option:selected').val());
    }
    makePreview();
  });

  $('#subscribeInput-border-top-color').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-color', $(this).val());
    }
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для правой границы полей*/
  $('#subscribeInput-border-right-value').val(parseInt($(subscribeInputs[0]).css('border-right-width')));
  $('#subscribeInput-border-right-value-range').val(parseInt($(subscribeInputs[0]).css('border-right-width')));
  $('#subscribeInput-border-right-radius').val(parseInt($(subscribeInputs[0]).css('border-top-right-radius')));
  $('#subscribeInput-border-right-radius-range').val(parseInt($(subscribeInputs[0]).css('border-top-right-radius')));

  $('#subscribeInput-border-right-value, #subscribeInput-border-right-value-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-right-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-right-value") {
      $('#subscribeInput-border-right-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#subscribeInput-border-right-radius, #subscribeInput-border-right-radius-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-right-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-right-radius") {
      $('#subscribeInput-border-right-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-right-radiuse').val($(this).val());
    }
    makePreview();
  });
  $('#subscribeInput-border-right-style').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-right-style', $(this).find('option:selected').val());
    }
    makePreview();
  });

  $('#subscribeInput-border-right-color').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-right-color', $(this).val());
    }
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для нижней границы полей*/
  $('#subscribeInput-border-bottom-value').val(parseInt($(subscribeInputs[0]).css('border-bottom-width')));
  $('#subscribeInput-border-bottom-value-range').val(parseInt($(subscribeInputs[0]).css('border-bottom-width')));
  $('#subscribeInput-border-bottom-right-radius').val(parseInt($(subscribeInputs[0]).css('border-bottom-right-radius')));
  $('#subscribeInput-border-bottom-right-radius-range').val(parseInt($(subscribeInputs[0]).css('border-bottom-right-radius')));

  $('#subscribeInput-border-bottom-value, #subscribeInput-border-bottom-value-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-bottom-value") {
      $('#subscribeInput-border-bottom-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-bottom-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeInput-border-bottom-right-radius, #subscribeInput-border-bottom-right-radius-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-right-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-bottom-right-radius") {
      $('#subscribeInput-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-bottom-right-radius').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeInput-border-bottom-style').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-style', $(this).find('option:selected').val());
    }
    makePreview();
  });

  $('#subscribeInput-border-bottom-color').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-color', $(this).val());
    }
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для левой границы полей*/
  $('#subscribeInput-border-left-value').val(parseInt($(subscribeInputs[0]).css('border-left-width')));
  $('#subscribeInput-border-left-value-range').val(parseInt($(subscribeInputs[0]).css('border-left-width')));
  $('#subscribeInput-border-bottom-left-radius').val(parseInt($(subscribeInputs[0]).css('border-bottom-left-radius')));
  $('#subscribeInput-border-bottom-left-radius-range').val(parseInt($(subscribeInputs[0]).css('border-bottom-left-radius')));

  $('#subscribeInput-border-left-value, #subscribeInput-border-left-value-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-left-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-left-value") {
      $('#subscribeInput-border-left-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-left-value').val($(this).val());
    }
    makePreview();
  });
  $('#subscribeInput-border-bottom-left-radius, #subscribeInput-border-bottom-left-radius-range').on('input', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-left-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-bottom-left-radius") {
      $('#subscribeInput-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-bottom-left-radius').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeInput-border-left-style').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-left-style', $(this).find('option:selected').val());
    }
    makePreview();
  });

  $('#subscribeInput-border-left-color').on('change', function () {
    for (let i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-left-color', $(this).val());
    }
    makePreview();
  });

}




export default includeSubscribeInputsSettings;
