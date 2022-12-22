import { makePreview, showHideSettings, getRandom, hexToRGB } from '../../global/global.js';

let subscribeBlockElem = null;
let subscribeWrapperElem = null;
let currentSubscribe = null;
let subscribeSubmitElem = null;
let subscribeInputs = null;
let allInputs = null;
let submitWrapperEl = null;

function includeSubscribeSubmitSettings(id) {
  'use strict';

  subscribeBlockElem = document.getElementById(id);
  subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  subscribeInputs = currentSubscribe.getElementsByClassName('subsribeInput');
  allInputs = currentSubscribe.getElementsByTagName('input');
  submitWrapperEl = currentSubscribe.getElementsByClassName('submitWrapper')[0];

  showHideSettings('subscribe-submit-settings', 'subscribeSubmitIndicator');
  
  //Редактирование текста кнопки
  
  showHideSettings('subscribe-submit-editor-settings', 'subscribeSubmitEditorIndicator');
  
  submitEditor.value = subscribeSubmitElem.innerHTML;
  submitEditor.oninput = function() {
    subscribeSubmitElem.innerHTML = submitEditor.value;
    subscribeSubmitElem.style.height = 'auto';
  }
  
  /*Настройки тени submit*/

  showHideSettings('subscribe-submit-text-shadow-settings', 'subscribeSubmitTextShadowIndicator');

  document.getElementById('subscribeSubmitTextShadowRadioOn').onclick = function () {
    document.getElementById('subscribe-submit-text-shadow').style.display = 'block';
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    makePreview();
  }
  document.getElementById('subscribeSubmitTextShadowRadioOff').onclick = function () {
    document.getElementById('subscribe-submit-text-shadow').style.display = 'none';
    $(subscribeSubmitElem).css('text-shadow', 'none');
    makePreview();
  }

  $('#subscribe-submit-text-shadow-horizontal-value, #subscribe-submit-text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "subscribe-submit-text-shadow-horizontal-value") {
      $('#subscribe-submit-text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-horizontal-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribe-submit-text-shadow-vertical-value, #subscribe-submit-text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "subscribe-submit-text-shadow-vertical-value") {
      $('#subscribe-submit-text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-vertical-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribe-submit-text-shadow-blur-value, #subscribe-submit-text-shadow-blur-value-range').on('input', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = hexToRGB($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
//    for (let i = 0; i < allInputs.length; i++) {
//      $(subscribeSubmitElem).css('text-shadow', prpts);
//    }
    if ($(this).attr('id') == "subscribe-submit-text-shadow-blur-value") {
      $('#subscribe-submit-text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-blur-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribe-submit-text-shadow-opacity-value, #subscribe-submit-text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-submit-text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "subscribe-submit-text-shadow-opacity-value") {
      $('#subscribe-submit-text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-opacity-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribe-submit-text-shadow-color-value').on('change', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    makePreview();
  });
  /*Конец настроек тени submit*/
  
  
  //Настройки отступов у submit

  showHideSettings('subscribeSubmitMarginEvery', 'subscribeSubmitMarginIndicator');
  
  $('#subscribeSubmit-margin-top-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginTop));
  $('#subscribeSubmit-margin-top-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginTop));
  $('#subscribeSubmit-margin-right-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginRight));
  $('#subscribeSubmit-margin-right-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginRight));
  $('#subscribeSubmit-margin-bottom-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginBottom));
  $('#subscribeSubmit-margin-bottom-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginBottom));
  $('#subscribeSubmit-margin-left-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginLeft));
  $('#subscribeSubmit-margin-left-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginLeft));

  $('#subscribeSubmit-margin-top-value, #subscribeSubmit-margin-top-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-top', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "subscribeSubmit-margin-top-value") {
      $('#subscribeSubmit-margin-top-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-top-value').val($(this).val());
    }
    makePreview();
  });
  $('#subscribeSubmit-margin-right-value, #subscribeSubmit-margin-right-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-right', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "subscribeSubmit-margin-right-value") {
      $('#subscribeSubmit-margin-right-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#subscribeSubmit-margin-bottom-value, #subscribeSubmit-margin-bottom-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-bottom', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "subscribeSubmit-margin-bottom-value") {
      $('#subscribeSubmit-margin-bottom-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-bottom-value').val($(this).val());
    }
    makePreview();
  });
  $('#subscribeSubmit-margin-left-value, #subscribeSubmit-margin-left-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-left', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "subscribeSubmit-margin-left-value") {
      $('#subscribeSubmit-margin-left-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-left-value').val($(this).val());
    }
    makePreview();
  });

  //Выбор шрифта
  
  showHideSettings('subscribe-show-submit-font-settings', 'subscribeSubmitFontIndicator');
  
  subscribeSubmitFontFamilySelect.value = getComputedStyle(subscribeSubmitElem).fontFamily;
  subscribeSubmitFontFamilySelect.onchange = function () {
    subscribeSubmitElem.style.fontFamily = subscribeSubmitFontFamilySelect.value;
    makePreview();
  }

  if (getComputedStyle(subscribeSubmitElem).fontWeight == '900') {
    subscribeSubmitBold.checked = true;
  } else {
    subscribeSubmitBold.checked = false;
  }
  subscribeSubmitBold.onclick = function () {
    if (subscribeSubmitBold.checked) {
      subscribeSubmitElem.style.fontWeight = '900';
    } else {
      subscribeSubmitElem.style.fontWeight = 'normal';
    }
    makePreview();
  }

  //Размер шрифта submit
  $('#subscribeSubmit-font-size-value').val(parseInt(getComputedStyle(subscribeSubmitElem).fontSize));
  $('#subscribeSubmit-font-size-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).fontSize));
  $('#subscribeSubmit-font-size-value, #subscribeSubmit-font-size-value-range').on('input', function () {
    $(subscribeSubmitElem).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    if ($(this).attr('id') == "subscribeSubmit-font-size-value") {
      $('#subscribeSubmit-font-size-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-font-size-value').val($(this).val());
    }
    makePreview();
  });

  //Цвет текста у submit
  $('#subscribeSubmit-color-value').on('change', function () {
    $(subscribeSubmitElem).css('color', $(this).val());
    makePreview();
  });

  //Цвет submit
  
  showHideSettings('subscribeSubmit-background-types', 'subscribeSubmitBackgroundIndicator');

  subscribeSubmitBackgroundRadioColor.onclick = function () {
    subscribeSubmitBackgroundGradient.style.display = 'none';
    subscribeSubmitBackgroundColor.style.display = 'block';
  }
  subscribeSubmitBackgroundRadioGradient.onclick = function () {
    subscribeSubmitBackgroundColor.style.display = 'none';
    subscribeSubmitBackgroundGradient.style.display = 'block';
  }

  $('#subscribeSubmit-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = hexToRGB($(this).val(), opacity);
    $(subscribeSubmitElem).css('background', color);
    makePreview();
  });

  $('#subscribeSubmit-gradient-color-1').on('change', function () {
    $(subscribeSubmitElem).css('background', 'linear-gradient(' + parseInt($('#subscribeSubmit-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#subscribeSubmit-gradient-color-2').val() + ')');
    makePreview();
  });

  $('#subscribeSubmit-gradient-color-2').on('change', function () {
    $(subscribeSubmitElem).css('background', 'linear-gradient(' + parseInt($('#subscribeSubmit-gradient-angle').val()) + 'deg, ' + $('#subscribeSubmit-gradient-color-1').val() + ', ' + $(this).val() + ')');
    makePreview();
  });

  $('#subscribeSubmit-gradient-angle').on('input', function () {
    $(subscribeSubmitElem).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#subscribeSubmit-gradient-color-1').val() + ', ' + $('#subscribeSubmit-gradient-color-2').val() + ')');
    makePreview();
  });

  $('#subscribeSubmit-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#subscribeSubmit-main-color').val(), opacity / 100);
    $(subscribeSubmitElem).css('background', color);
    makePreview();
  });

  //Высота кнопки
  
  showHideSettings('subscribeSubmit-height', 'subscribeSubmitSizeIndicator');
  
  if (subscribeSubmitElem.style.height == 'auto' || subscribeSubmitElem.style.height == '') {
    subscribeSubmitAutoHeight.checked = true;
  } else {
    subscribeSubmitAutoHeight.checked = false;
  }
  $('#subscribeSubmit-height-value').val(parseInt($(subscribeSubmitElem).css('height')));
  $('#subscribeSubmit-height-value-range').val(parseInt($(subscribeSubmitElem).css('height')));

  subscribeSubmitAutoHeight.onclick = function () {
    if (subscribeSubmitAutoHeight.checked == true) {
      subscribeSubmitElem.style.height = 'auto';
      makePreview();
    }
  }

  $('#subscribeSubmit-height-value, #subscribeSubmit-height-value-range').on('input', function () {
    if (subscribeSubmitAutoHeight.checked == false) {
      $(subscribeSubmitElem).css('height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      if ($(this).attr('id') == "subscribeSubmit-height-value") {
        $('#subscribeSubmit-height-value-range').val($(this).val());
      } else {
        $('#subscribeSubmit-height-value').val($(this).val());
      }
    }
    makePreview();
  });

  //Ширина кнопки
  if (getComputedStyle(subscribeSubmitElem).width == '100%') {
    subscribeSubmitAutoWidth.checked = true;
  } else {
    subscribeSubmitAutoWidth.checked = false;
  }
  $('#subscribeSubmit-width-value').val(parseInt($(subscribeSubmitElem).css('width')));
  $('#subscribeSubmit-width-value-range').val(parseInt($(subscribeSubmitElem).css('width')));

  subscribeSubmitAutoWidth.onclick = function () {
    if (subscribeSubmitAutoWidth.checked == true) {
      subscribeSubmitElem.style.width = '100%';
      makePreview();
    }
  }

  $('#subscribeSubmit-width-value, #subscribeSubmit-width-value-range').on('input', function () {
    if (subscribeSubmitAutoWidth.checked == false) {
      $(subscribeSubmitElem).css('width', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      if ($(this).attr('id') == "subscribeSubmit-width-value") {
        $('#subscribeSubmit-width-value-range').val($(this).val());
      } else {
        $('#subscribeSubmit-width-value').val($(this).val());
      }
    }
    makePreview();
  });

  //Настройки всех границ submit
  
  showHideSettings('subscribe-show-submit-border-settings', 'subscribeSubmitBorderIndicator');

  subscribeSubmitBorderRadioEvery.onclick = function () {
    subscribeSubmitBorderAll.style.display = 'none';
    subscribeSubmitBorderEvery.style.display = 'block';
  }
  subscribeSubmitBorderRadioAll.onclick = function () {
    subscribeSubmitBorderAll.style.display = 'block';
    subscribeSubmitBorderEvery.style.display = 'none';
  }

  $('#subscribeSubmit-border-value').val(parseInt($(subscribeSubmitElem).css('border-width')));
  $('#subscribeSubmit-border-value-range').val(parseInt($(subscribeSubmitElem).css('border-width')));
  $('#subscribeSubmit-border-radius').val(parseInt($(subscribeSubmitElem).css('border-radius')));
  $('#subscribeSubmit-border-radius-range').val(parseInt($(subscribeSubmitElem).css('border-radius')));

  $('#subscribeSubmit-border-value, #subscribeSubmit-border-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-width', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-value") {
      $('#subscribeSubmit-border-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeSubmit-border-radius, #subscribeSubmit-border-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-radius") {
      $('#subscribeSubmit-border-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-radius').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeSubmit-border-style').on('change', function () {
    $(subscribeSubmitElem).css('border-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#subscribeSubmit-border-color-value').on('change', function () {
    $(subscribeSubmitElem).css('border-color', $(this).val());
    makePreview();
  });

  /*Настройки для верхней границы submit*/

  $('#subscribeSubmit-border-top-value').val(parseInt($(subscribeSubmitElem).css('border-top-width')));
  $('#subscribeSubmit-border-top-value-range').val(parseInt($(subscribeSubmitElem).css('border-top-width')));
  $('#subscribeSubmit-border-left-top-radius').val(parseInt($(subscribeSubmitElem).css('border-top-left-radius')));
  $('#subscribeSubmit-border-left-top-radius-range').val(parseInt($(subscribeSubmitElem).css('border-top-left-radius')));

  $('#subscribeSubmit-border-top-value, #subscribeSubmit-border-top-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-top-width', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-top-value") {
      $('#subscribeSubmit-border-top-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-top-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeSubmit-border-left-top-radius, #subscribeSubmit-border-left-top-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-top-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-left-top-radius") {
      $('#subscribeSubmit-border-left-top-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-left-top-radius').val($(this).val());
    }
    makePreview();
  });
  $('#subscribeSubmit-border-top-style-value').on('change', function () {
    $(subscribeSubmitElem).css('border-top-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#subscribeSubmit-border-top-color').on('change', function () {
    $(subscribeSubmitElem).css('border-top-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для правой границы submit*/
  $('#subscribeSubmit-border-right-value').val(parseInt($(subscribeSubmitElem).css('border-right-width')));
  $('#subscribeSubmit-border-right-value-range').val(parseInt($(subscribeSubmitElem).css('border-right-width')));
  $('#subscribeSubmit-border-right-radius').val(parseInt($(subscribeSubmitElem).css('border-top-right-radius')));
  $('#subscribeSubmit-border-right-radius-range').val(parseInt($(subscribeSubmitElem).css('border-top-right-radius')));

  $('#subscribeSubmit-border-right-value, #subscribeSubmit-border-right-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-right-width', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-right-value") {
      $('#subscribeSubmit-border-right-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#subscribeSubmit-border-right-radius, #subscribeSubmit-border-right-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-top-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-right-radius") {
      $('#subscribeSubmit-border-right-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-right-radiuse').val($(this).val());
    }
    makePreview();
  });
  $('#subscribeSubmit-border-right-style').on('change', function () {
    $(subscribeSubmitElem).css('border-right-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#subscribeSubmit-border-right-color').on('change', function () {
    $(subscribeSubmitElem).css('border-right-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для нижней границы submit*/
  $('#subscribeSubmit-border-bottom-value').val(parseInt($(subscribeSubmitElem).css('border-bottom-width')));
  $('#subscribeSubmit-border-bottom-value-range').val(parseInt($(subscribeSubmitElem).css('border-bottom-width')));
  $('#subscribeSubmit-border-bottom-right-radius').val(parseInt($(subscribeSubmitElem).css('border-bottom-right-radius')));
  $('#subscribeSubmit-border-bottom-right-radius-range').val(parseInt($(subscribeSubmitElem).css('border-bottom-right-radius')));

  $('#subscribeSubmit-border-bottom-value, #subscribeSubmit-border-bottom-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-bottom-value") {
      $('#subscribeSubmit-border-bottom-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-bottom-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeSubmit-border-bottom-right-radius, #subscribeSubmit-border-bottom-right-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-bottom-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-bottom-right-radius") {
      $('#subscribeSubmit-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-bottom-right-radius').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeSubmit-border-bottom-style').on('change', function () {
    $(subscribeSubmitElem).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#subscribeSubmit-border-bottom-color').on('change', function () {
    $(subscribeSubmitElem).css('border-bottom-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для левой границы submit*/
  $('#subscribeSubmit-border-left-value').val(parseInt($(subscribeSubmitElem).css('border-left-width')));
  $('#subscribeSubmit-border-left-value-range').val(parseInt($(subscribeSubmitElem).css('border-left-width')));
  $('#subscribeSubmit-border-bottom-left-radius').val(parseInt($(subscribeSubmitElem).css('border-bottom-left-radius')));
  $('#subscribeSubmit-border-bottom-left-radius-range').val(parseInt($(subscribeSubmitElem).css('border-bottom-left-radius')));

  $('#subscribeSubmit-border-left-value, #subscribeSubmit-border-left-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-left-width', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-left-value") {
      $('#subscribeSubmit-border-left-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-left-value').val($(this).val());
    }
    makePreview();
  });
  $('#subscribeSubmit-border-bottom-left-radius, #subscribeSubmit-border-bottom-left-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-bottom-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-bottom-left-radius") {
      $('#subscribeSubmit-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-bottom-left-radius').val($(this).val());
    }
    makePreview();
  });

  $('#subscribeSubmit-border-left-style').on('change', function () {
    $(subscribeSubmitElem).css('border-left-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#subscribeSubmit-border-left-color').on('change', function () {
    $(subscribeSubmitElem).css('border-left-color', $(this).val());
    makePreview();
  });
}




export default includeSubscribeSubmitSettings;