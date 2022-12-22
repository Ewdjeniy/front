import { makePreview, showHideSettings, getRandom,  closeRightPanel, hexToRGB } from '../../global/global.js';
import includeInputsSettings from './inputsSettings.js';
import includeSubmitSettings from './sumbitSettings.js';
import { addDragAndDropToForm, addFunctionalityToFormElement } from './formModule.js';

$('#mainArea').on('click', '.copyForm', function () {
  const formBlockId = $(this).parents('.formBlock').attr('id');
  const formBlockElem = document.getElementById(formBlockId);
  const clonId = 'form' + getRandom();
  $(formBlockElem).clone(true).attr('id', clonId).insertAfter(formBlockElem);

  const formId = getRandom();
  document.getElementById(clonId).getElementsByTagName('form')[0].id = formId;
  const inputs = document.getElementById(formId).getElementsByClassName('payInput');

  Sortable.create($("#" + formId + "").get(0), {
    animation: 150,
    swapThreshold: 1,
    emptyInsertThreshold: 1,
    ghostClass: 'blue-background-class',
    onStart: function (e) {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].onblur = function () {
          return false;
        }
      }
    },
    onEnd: function (e) {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].blur();
        inputs[i].onblur = function () {
          inputs[i].placeholder = inputs[i].value;
          inputs[i].value = '';
        }
      }
      makePreview();
    }
  });

  addFunctionalityToFormElement(clonId);
  makePreview();
});

let ths = null;
let formBlockElem = null;
let formWrapperElem = null;
let currentForm = null;
let formSubmitElem = null;
let formInputs = null;
let allInputs = null;

$('#mainArea').on('click', '.formSet', function (e) {

  ths = $(this).parents('.formBlock');
  formBlockElem = document.getElementById(ths.attr('id'));
  formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  currentForm = formBlockElem.getElementsByTagName('form')[0];
  formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
  formInputs = currentForm.getElementsByClassName('payInput');
  allInputs = currentForm.getElementsByTagName('input');

  //Появление правой панели, инициализация инпутов.
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#form-border-style').off();
  $('#form-border-left-style').off();
  $('#form-border-right-style').off();
  $('#form-border-top-style-value').off();
  $('#form-border-bottom-style').off();
  $('#form-animation-type-value').off();

  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#form-timeout-hour-value').val(h);
    $('#form-timeout-minute-value').val(m);
    $('#form-timeout-second-value').val(s);
    $('#form-display-none-value').prop('checked', true);
  } else {
    $('#form-timeout-hour-value').val(0);
    $('#form-timeout-minute-value').val(0);
    $('#form-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#form-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  //Настройки отступов формы

  showHideSettings('formMarginEvery', 'formMarginGroupIndicator');

  $('#form-margin-top-value').val(parseInt(getComputedStyle(formBlockElem).marginTop));
  $('#form-margin-top-value-range').val(parseInt(getComputedStyle(formBlockElem).marginTop));
  $('#form-margin-right-value').val(parseInt(getComputedStyle(formBlockElem).marginRight));
  $('#form-margin-right-value-range').val(parseInt(getComputedStyle(formBlockElem).marginRight));
  $('#form-margin-bottom-value').val(parseInt(getComputedStyle(formBlockElem).marginBottom));
  $('#form-margin-bottom-value-range').val(parseInt(getComputedStyle(formBlockElem).marginBottom));
  $('#form-margin-left-value').val(parseInt(getComputedStyle(formBlockElem).marginLeft));
  $('#form-margin-left-value-range').val(parseInt(getComputedStyle(formBlockElem).marginLeft));

  $('#form-margin-top-value, #form-margin-top-value-range').on('input', function () {
    $(formBlockElem).css('margin-top', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "form-margin-top-value") {
      $('#form-margin-top-value-range').val($(this).val());
    } else {
      $('#form-margin-top-value').val($(this).val());
    }
    makePreview();
  });
  $('#form-margin-right-value, #form-margin-right-value-range').on('input', function () {
    $(formBlockElem).css('margin-right', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "form-margin-right-value") {
      $('#form-margin-right-value-range').val($(this).val());
    } else {
      $('#form-margin-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#form-margin-bottom-value, #form-margin-bottom-value-range').on('input', function () {
    $(formBlockElem).css('margin-bottom', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "form-margin-bottom-value") {
      $('#form-margin-bottom-value-range').val($(this).val());
    } else {
      $('#form-margin-bottom-value').val($(this).val());
    }
    makePreview();
  });
  $('#form-margin-left-value, #form-margin-left-value-range').on('input', function () {
    $(formBlockElem).css('margin-left', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "form-margin-left-value") {
      $('#form-margin-left-value-range').val($(this).val());
    } else {
      $('#form-margin-left-value').val($(this).val());
    }
    makePreview();
  });

  //Вертикальное выравнивание формы
  
  showHideSettings('form-show-vertical-settings', 'formVerticalIndicator');
  
  if (getComputedStyle(formBlockElem).marginTop == 'auto') {
    formMarginBottom.checked = true;
    formMarginTop.checked = false;
    formMarginCenter.checked = false;
  } else if (getComputedStyle(formBlockElem).marginBottom == 'auto') {
    formMarginBottom.checked = false;
    formMarginTop.checked = true;
    formMarginCenter.checked = false;
  } else if (getComputedStyle(formBlockElem).marginTop == '0px' && getComputedStyle(formBlockElem).marginBottom == '0px') {
    formMarginBottom.checked = false;
    formMarginTop.checked = false;
    formMarginCenter.checked = true;
  }
  formMarginTop.onclick = function () {
    formBlockElem.style.marginTop = '0px';
    formBlockElem.style.marginBottom = 'auto';
    makePreview();
  }
  formMarginCenter.onclick = function () {
    formBlockElem.style.marginTop = '0px';
    formBlockElem.style.marginBottom = '0px';
    makePreview();
  }
  formMarginBottom.onclick = function () {
    formBlockElem.style.marginTop = 'auto';
    formBlockElem.style.marginBottom = '0px';
    makePreview();
  }

  /*Настройки тени текста*/
  
  showHideSettings('form-text-shadow-settings', 'formTextShadowIndicator');

  document.getElementById('formTextShadowRadioOn').onclick = function () {
    document.getElementById('form-text-shadow').style.display = 'block';
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    makePreview();
  }
  document.getElementById('formTextShadowRadioOff').onclick = function () {
    document.getElementById('form-text-shadow').style.display = 'none';
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', 'none');
    }
    makePreview();
  }

  $('#form-text-shadow-horizontal-value, #form-text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "form-text-shadow-horizontal-value") {
      $('#form-text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-horizontal-value').val($(this).val());
    }
    makePreview();
  });

  $('#form-text-shadow-vertical-value, #form-text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "form-text-shadow-vertical-value") {
      $('#form-text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-vertical-value').val($(this).val());
    }
    makePreview();
  });

  $('#form-text-shadow-blur-value, #form-text-shadow-blur-value-range').on('input', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "form-text-shadow-blur-value") {
      $('#form-text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-blur-value').val($(this).val());
    }
    makePreview();
  });

  $('#form-text-shadow-opacity-value, #form-text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#form-text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "form-text-shadow-opacity-value") {
      $('#form-text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-opacity-value').val($(this).val());
    }
    makePreview();
  });

  $('#form-text-shadow-color-value').on('change', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    makePreview();
  });
  /*Конец настроек тени текста*/

  /*Настройки теней*/
  
  showHideSettings('form-shadow-settings', 'formShadowIndicator');
  
  document.getElementById('formShadowRadioOn').onclick = function () {
    document.getElementById('form-shadow').style.display = 'block';
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    makePreview();
  }
  document.getElementById('formShadowRadioOff').onclick = function () {
    document.getElementById('form-shadow').style.display = 'none';
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', 'none');
    }
    makePreview();
  }

  $('#form-shadow-horizontal-value, #form-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "form-shadow-horizontal-value") {
      $('#form-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#form-shadow-horizontal-value').val($(this).val());
    }
    makePreview();
  });

  $('#form-shadow-vertical-value, #form-shadow-vertical-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "form-shadow-vertical-value") {
      $('#form-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#form-shadow-vertical-value').val($(this).val());
    }
    makePreview();
  });

  $('#form-shadow-blur-value, #form-shadow-blur-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "form-shadow-blur-value") {
      $('#form-shadow-blur-value-range').val($(this).val());
    } else {
      $('#form-shadow-blur-value').val($(this).val());
    }
    makePreview();
  });

  $('#form-shadow-spread-value, #form-shadow-spread-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "form-shadow-spread-value") {
      $('#form-shadow-spread-value-range').val($(this).val());
    } else {
      $('#form-shadow-spread-value').val($(this).val());
    }
    makePreview();
  });

  $('#form-shadow-opacity-value, #form-shadow-opacity-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "form-shadow-opacity-value") {
      $('#form-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#form-shadow-opacity-value').val($(this).val());
    }
    makePreview();
  });

  $('#form-shadow-color-value').on('change', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    makePreview();
  });

  $('#form-shadow-inset-value').on('change', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    makePreview();
  });
  /*Конец настроек теней*/

  includeInputsSettings($(ths).attr('id'));
  includeSubmitSettings($(ths).attr('id'));

  /*Настройка анимации*/
  
  showHideSettings('form-animation', 'formAnimationIndicator');

  $('#form-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(currentForm).css('animation-name', $(this).val());
      $(currentForm).css('animation-delay', $('#form-animation-delay-value').val() + 's');
      $(currentForm).css('animation-duration', $('#form-animation-duration-value').val() + 's');
    }
    makePreview();
  });

  $('#form-animation-delay-value, #form-animation-delay-value-range').on('input', function () {
    $(currentForm).css('animation-delay', $(this).val() + 's');
    if ($(this).attr('id') == "form-animation-delay-value") {
      $('#form-animation-delay-value-range').val($(this).val());
    } else {
      $('#form-animation-delay-value').val($(this).val());
    }
    makePreview();
  });

  $('#form-animation-duration-value, #form-animation-duration-value-range').on('input', function () {
    $(currentForm).css('animation-duration', $(this).val() + 's');
    if ($(this).attr('id') == "form-animation-duration-value") {
      $('#form-animation-duration-value-range').val($(this).val());
    } else {
      $('#form-animation-duration-value').val($(this).val());
    }
    makePreview();
  });

  /*Конец настроек анимации*/
  /*Блок таймаута*/
  
  showHideSettings('form-show-timeout-settings', 'formTimeoutIndicator');

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/


  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('form-display-none-value').checked = true;
  } else {
    document.getElementById('form-display-none-value').checked = false;
  }

  $('#form-display-none-value, #form-timeout-hour-value, #form-timeout-hour-value-range, #form-timeout-minute-value, #form-timeout-minute-value-range, #form-timeout-second-value, #form-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');

    var hours = $('#form-timeout-hour-value').val() * 3600;
    var minute = $('#form-timeout-minute-value').val() * 60;
    var second = parseInt($('#form-timeout-second-value').val());

    var time = hours + minute + second;

    time = time * 1000;


    if (document.getElementById('form-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }



    if ($(this).attr('id') == "form-timeout-hour-value") {
      $('#form-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-hour-value-range") {
      $('#form-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-minute-value") {
      $('#form-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-minute-value-range") {
      $('#form-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-second-value") {
      $('#form-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-second-value-range") {
      $('#form-timeout-second-value').val($(this).val());
    }
    makePreview();

  });

  /*Конец блока таймаута*/

});
