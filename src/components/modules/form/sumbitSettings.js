import { makePreview, showHideSettings, getRandom, hexToRGB } from '../../global/global.js';

let formBlockElem = null;
let formWrapperElem = null;
let currentForm = null;
let formSubmitElem = null;
let formInputs = null;
let allInputs = null;

function includeSubmitSettings(id) {
  'use strict';

  formBlockElem = document.getElementById(id);
  formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  currentForm = formBlockElem.getElementsByTagName('form')[0];
  formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
  formInputs = currentForm.getElementsByClassName('payInput');
  allInputs = currentForm.getElementsByTagName('input');

  showHideSettings('form-submit-settings', 'formSubmitIndicator');
  
  //Настройки отступов у submit

  showHideSettings('formSubmitMarginEvery', 'formSubmitMarginIndicator');
  
  $('#formSubmit-margin-top-value').val(parseInt(getComputedStyle(formSubmitElem).marginTop));
  $('#formSubmit-margin-top-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginTop));
  $('#formSubmit-margin-right-value').val(parseInt(getComputedStyle(formSubmitElem).marginRight));
  $('#formSubmit-margin-right-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginRight));
  $('#formSubmit-margin-bottom-value').val(parseInt(getComputedStyle(formSubmitElem).marginBottom));
  $('#formSubmit-margin-bottom-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginBottom));
  $('#formSubmit-margin-left-value').val(parseInt(getComputedStyle(formSubmitElem).marginLeft));
  $('#formSubmit-margin-left-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginLeft));

  $('#formSubmit-margin-top-value, #formSubmit-margin-top-value-range').on('input', function () {
    $(formSubmitElem).css('margin-top', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "formSubmit-margin-top-value") {
      $('#formSubmit-margin-top-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-top-value').val($(this).val());
    }
    makePreview();
  });
  $('#formSubmit-margin-right-value, #formSubmit-margin-right-value-range').on('input', function () {
    $(formSubmitElem).css('margin-right', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "formSubmit-margin-right-value") {
      $('#formSubmit-margin-right-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#formSubmit-margin-bottom-value, #formSubmit-margin-bottom-value-range').on('input', function () {
    $(formSubmitElem).css('margin-bottom', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "formSubmit-margin-bottom-value") {
      $('#formSubmit-margin-bottom-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-bottom-value').val($(this).val());
    }
    makePreview();
  });
  $('#formSubmit-margin-left-value, #formSubmit-margin-left-value-range').on('input', function () {
    $(formSubmitElem).css('margin-left', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "formSubmit-margin-left-value") {
      $('#formSubmit-margin-left-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-left-value').val($(this).val());
    }
    makePreview();
  });

  //Выбор шрифта
  
  showHideSettings('form-show-submit-font-settings', 'formSubmitFontIndicator');
  
  formSubmitFontFamilySelect.value = getComputedStyle(formSubmitElem).fontFamily;
  formSubmitFontFamilySelect.onchange = function () {
    formSubmitElem.style.fontFamily = formSubmitFontFamilySelect.value;
    makePreview();
  }

  if (getComputedStyle(formSubmitElem).fontWeight == '900') {
    formSubmitBold.checked = true;
  } else {
    formSubmitBold.checked = false;
  }
  formSubmitBold.onclick = function () {
    if (formSubmitBold.checked) {
      formSubmitElem.style.fontWeight = '900';
    } else {
      formSubmitElem.style.fontWeight = 'normal';
    }
    makePreview();
  }

  //Размер шрифта submit
  $('#formSubmit-font-size-value').val(parseInt(getComputedStyle(formSubmitElem).fontSize));
  $('#formSubmit-font-size-value-range').val(parseInt(getComputedStyle(formSubmitElem).fontSize));
  $('#formSubmit-font-size-value, #formSubmit-font-size-value-range').on('input', function () {
    $(formSubmitElem).css('font-size', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-font-size-value") {
      $('#formSubmit-font-size-value-range').val($(this).val());
    } else {
      $('#formSubmit-font-size-value').val($(this).val());
    }
    makePreview();
  });

  //Цвет текста у submit
  $('#formSubmit-color-value').on('change', function () {
    $(formSubmitElem).css('color', $(this).val());
    makePreview();
  });

  //Цвет submit
  
  showHideSettings('formSubmit-background-types', 'formSubmitBackgroundIndicator');

  formSubmitBackgroundRadioColor.onclick = function () {
    formSubmitBackgroundGradient.style.display = 'none';
    formSubmitBackgroundColor.style.display = 'block';
  }
  formSubmitBackgroundRadioGradient.onclick = function () {
    formSubmitBackgroundColor.style.display = 'none';
    formSubmitBackgroundGradient.style.display = 'block';
  }

  $('#formSubmit-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = hexToRGB($(this).val(), opacity);
    $(formSubmitElem).css('background', color);
    makePreview();
  });

  $('#formSubmit-gradient-color-1').on('change', function () {
    $(formSubmitElem).css('background', 'linear-gradient(' + parseInt($('#formSubmit-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#formSubmit-gradient-color-2').val() + ')');
    makePreview();
  });

  $('#formSubmit-gradient-color-2').on('change', function () {
    $(formSubmitElem).css('background', 'linear-gradient(' + parseInt($('#formSubmit-gradient-angle').val()) + 'deg, ' + $('#formSubmit-gradient-color-1').val() + ', ' + $(this).val() + ')');
    makePreview();
  });

  $('#formSubmit-gradient-angle').on('input', function () {
    $(formSubmitElem).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#formSubmit-gradient-color-1').val() + ', ' + $('#formSubmit-gradient-color-2').val() + ')');
    makePreview();
  });

  $('#formSubmit-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#formSubmit-main-color').val(), opacity / 100);
    $(formSubmitElem).css('background', color);
    makePreview();
  });

  //Высота кнопки
  
  showHideSettings('formSubmit-height', 'formSubmitSizeIndicator');
  
  if (getComputedStyle(formSubmitElem).height == 'auto') {
    formSubmitAutoHeight.checked = true;
  } else {
    formSubmitAutoHeight.checked = false;
  }
  $('#formSubmit-height-value').val(parseInt($(formSubmitElem).css('height')));
  $('#formSubmit-height-value-range').val(parseInt($(formSubmitElem).css('height')));

  formSubmitAutoHeight.onclick = function () {
    if (formSubmitAutoHeight.checked == true) {
      formSubmitElem.style.height = 'auto';
      makePreview();
    }
  }

  $('#formSubmit-height-value, #formSubmit-height-value-range').on('input', function () {
    if (formSubmitAutoHeight.checked == false) {
      $(formSubmitElem).css('height', $(this).val() + 'px');
      if ($(this).attr('id') == "formSubmit-height-value") {
        $('#formSubmit-height-value-range').val($(this).val());
      } else {
        $('#formSubmit-height-value').val($(this).val());
      }
    }
    makePreview();
  });

  //Ширина кнопки
  if (getComputedStyle(formSubmitElem).width == '100%') {
    formSubmitAutoWidth.checked = true;
  } else {
    formSubmitAutoWidth.checked = false;
  }
  $('#formSubmit-width-value').val(parseInt($(formSubmitElem).css('width')));
  $('#formSubmit-width-value-range').val(parseInt($(formSubmitElem).css('width')));

  formSubmitAutoWidth.onclick = function () {
    if (formSubmitAutoWidth.checked == true) {
      formSubmitElem.style.width = '100%';
      makePreview();
    }
  }

  $('#formSubmit-width-value, #formSubmit-width-value-range').on('input', function () {
    if (formSubmitAutoWidth.checked == false) {
      $(formSubmitElem).css('width', $(this).val() + 'px');
      if ($(this).attr('id') == "formSubmit-width-value") {
        $('#formSubmit-width-value-range').val($(this).val());
      } else {
        $('#formSubmit-width-value').val($(this).val());
      }
    }
    makePreview();
  });

  //Настройки всех границ submit
  
  showHideSettings('form-show-submit-border-settings', 'formSubmitBorderIndicator');

  formSubmitBorderRadioEvery.onclick = function () {
    formSubmitBorderAll.style.display = 'none';
    formSubmitBorderEvery.style.display = 'block';
  }
  formSubmitBorderRadioAll.onclick = function () {
    formSubmitBorderAll.style.display = 'block';
    formSubmitBorderEvery.style.display = 'none';
  }

  $('#formSubmit-border-value').val(parseInt($(formSubmitElem).css('border-width')));
  $('#formSubmit-border-value-range').val(parseInt($(formSubmitElem).css('border-width')));
  $('#formSubmit-border-radius').val(parseInt($(formSubmitElem).css('border-radius')));
  $('#formSubmit-border-radius-range').val(parseInt($(formSubmitElem).css('border-radius')));

  $('#formSubmit-border-value, #formSubmit-border-value-range').on('input', function () {
    $(formSubmitElem).css('border-width', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-value") {
      $('#formSubmit-border-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-value').val($(this).val());
    }
    makePreview();
  });

  $('#formSubmit-border-radius, #formSubmit-border-radius-range').on('input', function () {
    $(formSubmitElem).css('border-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-radius") {
      $('#formSubmit-border-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-radius').val($(this).val());
    }
    makePreview();
  });

  $('#formSubmit-border-style').on('change', function () {
    $(formSubmitElem).css('border-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#formSubmit-border-color-value').on('change', function () {
    $(formSubmitElem).css('border-color', $(this).val());
    makePreview();
  });

  /*Настройки для верхней границы submit*/

  $('#formSubmit-border-top-value').val(parseInt($(formSubmitElem).css('border-top-width')));
  $('#formSubmit-border-top-value-range').val(parseInt($(formSubmitElem).css('border-top-width')));
  $('#formSubmit-border-left-top-radius').val(parseInt($(formSubmitElem).css('border-top-left-radius')));
  $('#formSubmit-border-left-top-radius-range').val(parseInt($(formSubmitElem).css('border-top-left-radius')));

  $('#formSubmit-border-top-value, #formSubmit-border-top-value-range').on('input', function () {
    $(formSubmitElem).css('border-top-width', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-top-value") {
      $('#formSubmit-border-top-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-top-value').val($(this).val());
    }
    makePreview();
  });

  $('#formSubmit-border-left-top-radius, #formSubmit-border-left-top-radius-range').on('input', function () {
    $(formSubmitElem).css('border-top-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-left-top-radius") {
      $('#formSubmit-border-left-top-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-left-top-radius').val($(this).val());
    }
    makePreview();
  });
  $('#formSubmit-border-top-style-value').on('change', function () {
    $(formSubmitElem).css('border-top-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#formSubmit-border-top-color').on('change', function () {
    $(formSubmitElem).css('border-top-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для правой границы submit*/
  $('#formSubmit-border-right-value').val(parseInt($(formSubmitElem).css('border-right-width')));
  $('#formSubmit-border-right-value-range').val(parseInt($(formSubmitElem).css('border-right-width')));
  $('#formSubmit-border-right-radius').val(parseInt($(formSubmitElem).css('border-top-right-radius')));
  $('#formSubmit-border-right-radius-range').val(parseInt($(formSubmitElem).css('border-top-right-radius')));

  $('#formSubmit-border-right-value, #formSubmit-border-right-value-range').on('input', function () {
    $(formSubmitElem).css('border-right-width', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-right-value") {
      $('#formSubmit-border-right-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#formSubmit-border-right-radius, #formSubmit-border-right-radius-range').on('input', function () {
    $(formSubmitElem).css('border-top-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-right-radius") {
      $('#formSubmit-border-right-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-right-radiuse').val($(this).val());
    }
    makePreview();
  });
  $('#formSubmit-border-right-style').on('change', function () {
    $(formSubmitElem).css('border-right-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#formSubmit-border-right-color').on('change', function () {
    $(formSubmitElem).css('border-right-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для нижней границы submit*/
  $('#formSubmit-border-bottom-value').val(parseInt($(formSubmitElem).css('border-bottom-width')));
  $('#formSubmit-border-bottom-value-range').val(parseInt($(formSubmitElem).css('border-bottom-width')));
  $('#formSubmit-border-bottom-right-radius').val(parseInt($(formSubmitElem).css('border-bottom-right-radius')));
  $('#formSubmit-border-bottom-right-radius-range').val(parseInt($(formSubmitElem).css('border-bottom-right-radius')));

  $('#formSubmit-border-bottom-value, #formSubmit-border-bottom-value-range').on('input', function () {
    $(formSubmitElem).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-bottom-value") {
      $('#formSubmit-border-bottom-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-bottom-value').val($(this).val());
    }
    makePreview();
  });

  $('#formSubmit-border-bottom-right-radius, #formSubmit-border-bottom-right-radius-range').on('input', function () {
    $(formSubmitElem).css('border-bottom-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-bottom-right-radius") {
      $('#formSubmit-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-bottom-right-radius').val($(this).val());
    }
    makePreview();
  });

  $('#formSubmit-border-bottom-style').on('change', function () {
    $(formSubmitElem).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#formSubmit-border-bottom-color').on('change', function () {
    $(formSubmitElem).css('border-bottom-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для левой границы submit*/
  $('#formSubmit-border-left-value').val(parseInt($(formSubmitElem).css('border-left-width')));
  $('#formSubmit-border-left-value-range').val(parseInt($(formSubmitElem).css('border-left-width')));
  $('#formSubmit-border-bottom-left-radius').val(parseInt($(formSubmitElem).css('border-bottom-left-radius')));
  $('#formSubmit-border-bottom-left-radius-range').val(parseInt($(formSubmitElem).css('border-bottom-left-radius')));

  $('#formSubmit-border-left-value, #formSubmit-border-left-value-range').on('input', function () {
    $(formSubmitElem).css('border-left-width', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-left-value") {
      $('#formSubmit-border-left-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-left-value').val($(this).val());
    }
    makePreview();
  });
  $('#formSubmit-border-bottom-left-radius, #formSubmit-border-bottom-left-radius-range').on('input', function () {
    $(formSubmitElem).css('border-bottom-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-bottom-left-radius") {
      $('#formSubmit-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-bottom-left-radius').val($(this).val());
    }
    makePreview();
  });

  $('#formSubmit-border-left-style').on('change', function () {
    $(formSubmitElem).css('border-left-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#formSubmit-border-left-color').on('change', function () {
    $(formSubmitElem).css('border-left-color', $(this).val());
    makePreview();
  });
}




export default includeSubmitSettings;