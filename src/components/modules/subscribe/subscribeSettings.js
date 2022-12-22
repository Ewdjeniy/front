import includeSubscribeInputsSettings from './subscribeInputsSettings.js';
import includeSubscribeSubmitSettings from './subscribeSumbitSettings.js';
import includeSubscribeDelivery from './subscribeDelivery.js';
import { makePreview, showHideSettings, getRandom,  closeRightPanel, hexToRGB } from '../../global/global.js';
import { addDragAndDropToSubscribeForm, addFunctionalityToSubscribeElement } from './subscribeModule.js';

$('#mainArea').on('click', '.copySubscribe', function () {
  const subscribeBlockId = $(this).parents('.subscribeBlock').attr('id');
  const subscribeBlockElem = document.getElementById(subscribeBlockId);
  const clonId = 'subscribe' + getRandom();
  $(subscribeBlockElem).clone(true).attr('id', clonId).insertAfter(subscribeBlockElem);

  addFunctionalityToSubscribeElement(clonId);
  addDragAndDropToSubscribeForm(clonId);
  makePreview();
});

let ths = null;
let subscribeBlockElem = null;
let subscribeWrapperElem = null;
let formCodeWrapperElem = null;
let currentSubscribe = null;
let subscribeSubmitElem = null;
let subscribeInputs = null;
let allInputs = null;

$('#mainArea').on('click', '.subscribeSet', function (e) {

  ths = $(this).parents('.subscribeBlock');
  subscribeBlockElem = document.getElementById($(ths).attr('id'));
  subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  formCodeWrapperElem = subscribeBlockElem.getElementsByClassName('formCodeWrapper')[0];
  currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
  allInputs = currentSubscribe.getElementsByTagName('input');
  let testSubscribeElem = document.getElementById('testSubscribe');

  //Появление правой панели, инициализация инпутов.
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#subscribe-border-style').off();
  $('#subscribe-border-left-style').off();
  $('#subscribe-border-right-style').off();
  $('#subscribe-border-top-style-value').off();
  $('#subscribe-border-bottom-style').off();
  $('#subscribe-animation-type-value').off();

  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#subscribe-timeout-hour-value').val(h);
    $('#subscribe-timeout-minute-value').val(m);
    $('#subscribe-timeout-second-value').val(s);
    $('#subscribe-display-none-value').prop('checked', true);
  } else {
    $('#subscribe-timeout-hour-value').val(0);
    $('#subscribe-timeout-minute-value').val(0);
    $('#subscribe-timeout-second-value').val(0);
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
  $('#list-settings').hide();
  $('#line-settings').hide();
  $('#subscribe-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  // Закрыть панель

  document.addEventListener('mousedown', closeRightPanel);


  //Вставка кода

  showHideSettings('show-subscribe-code-settings', 'subscribeCodeIndicator');

  includeSubscribeDelivery(subscribeBlockElem.id);

  //Настройки отступов формы

  showHideSettings('subscribeMarginEvery', 'subscribeMarginGroupIndicator');

  $('#subscribe-margin-top-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginTop));
  $('#subscribe-margin-top-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginTop));
  $('#subscribe-margin-right-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginRight));
  $('#subscribe-margin-right-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginRight));
  $('#subscribe-margin-bottom-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginBottom));
  $('#subscribe-margin-bottom-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginBottom));
  $('#subscribe-margin-left-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginLeft));
  $('#subscribe-margin-left-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginLeft));

  $('#subscribe-margin-top-value, #subscribe-margin-top-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-top', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "subscribe-margin-top-value") {
      $('#subscribe-margin-top-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-top-value').val($(this).val());
    }
    makePreview();
  });
  $('#subscribe-margin-right-value, #subscribe-margin-right-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-right', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "subscribe-margin-right-value") {
      $('#subscribe-margin-right-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#subscribe-margin-bottom-value, #subscribe-margin-bottom-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-bottom', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "subscribe-margin-bottom-value") {
      $('#subscribe-margin-bottom-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-bottom-value').val($(this).val());
    }
    makePreview();
  });
  $('#subscribe-margin-left-value, #subscribe-margin-left-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-left', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "subscribe-margin-left-value") {
      $('#subscribe-margin-left-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-left-value').val($(this).val());
    }
    makePreview();
  });

  //Вертикальное выравнивание формы

  showHideSettings('subscribe-show-vertical-settings', 'subscribeVerticalIndicator');

  if (getComputedStyle(subscribeBlockElem).marginTop == 'auto') {
    subscribeMarginBottom.checked = true;
    subscribeMarginTop.checked = false;
    subscribeMarginCenter.checked = false;
  } else if (getComputedStyle(subscribeBlockElem).marginBottom == 'auto') {
    subscribeMarginBottom.checked = false;
    subscribeMarginTop.checked = true;
    subscribeMarginCenter.checked = false;
  } else if (getComputedStyle(subscribeBlockElem).marginTop == '0px' && getComputedStyle(subscribeBlockElem).marginBottom == '0px') {
    subscribeMarginBottom.checked = false;
    subscribeMarginTop.checked = false;
    subscribeMarginCenter.checked = true;
  }
  subscribeMarginTop.onclick = function () {
    subscribeBlockElem.style.marginTop = '0px';
    subscribeBlockElem.style.marginBottom = 'auto';
    makePreview();
  }
  subscribeMarginCenter.onclick = function () {
    subscribeBlockElem.style.marginTop = '0px';
    subscribeBlockElem.style.marginBottom = '0px';
    makePreview();
  }
  subscribeMarginBottom.onclick = function () {
    subscribeBlockElem.style.marginTop = 'auto';
    subscribeBlockElem.style.marginBottom = '0px';
    makePreview();
  }

  /*Настройки теней*/

  showHideSettings('subscribe-shadow-settings', 'subscribeShadowIndicator');

  document.getElementById('subscribeShadowRadioOn').onclick = function () {
    document.getElementById('subscribe-shadow').style.display = 'block';
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    makePreview();
  }
  document.getElementById('subscribeShadowRadioOff').onclick = function () {
    document.getElementById('subscribe-shadow').style.display = 'none';
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', 'none');
    }
    makePreview();
  }

  $('#subscribe-shadow-horizontal-value, #subscribe-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribe-shadow-horizontal-value") {
      $('#subscribe-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-horizontal-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribe-shadow-vertical-value, #subscribe-shadow-vertical-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribe-shadow-vertical-value") {
      $('#subscribe-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-vertical-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribe-shadow-blur-value, #subscribe-shadow-blur-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribe-shadow-blur-value") {
      $('#subscribe-shadow-blur-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-blur-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribe-shadow-spread-value, #subscribe-shadow-spread-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribe-shadow-spread-value") {
      $('#subscribe-shadow-spread-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-spread-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribe-shadow-opacity-value, #subscribe-shadow-opacity-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribe-shadow-opacity-value") {
      $('#subscribe-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-opacity-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribe-shadow-color-value').on('change', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    makePreview();
  });

  $('#subscribe-shadow-inset-value').on('change', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    makePreview();
  });
  /*Конец настроек теней*/

  includeSubscribeInputsSettings($(ths).attr('id'));
  includeSubscribeSubmitSettings($(ths).attr('id'));

  /*Настройка анимации*/

  showHideSettings('subscribe-animation', 'subscribeAnimationIndicator');

  $('#subscribe-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(currentSubscribe).css('animation-name', $(this).val());
      $(currentSubscribe).css('animation-delay', $('#subscribe-animation-delay-value').val() + 's');
      $(currentSubscribe).css('animation-duration', $('#subscribe-animation-duration-value').val() + 's');
    }
    makePreview();
  });

  $('#subscribe-animation-delay-value, #subscribe-animation-delay-value-range').on('input', function () {
    $(currentSubscribe).css('animation-delay', $(this).val() + 's');
    if ($(this).attr('id') == "subscribe-animation-delay-value") {
      $('#subscribe-animation-delay-value-range').val($(this).val());
    } else {
      $('#subscribe-animation-delay-value').val($(this).val());
    }
    makePreview();
  });

  $('#subscribe-animation-duration-value, #subscribe-animation-duration-value-range').on('input', function () {
    $(currentSubscribe).css('animation-duration', $(this).val() + 's');
    if ($(this).attr('id') == "subscribe-animation-duration-value") {
      $('#subscribe-animation-duration-value-range').val($(this).val());
    } else {
      $('#subscribe-animation-duration-value').val($(this).val());
    }
    makePreview();
  });

  /*Конец настроек анимации*/
  /*Блок таймаута*/

  showHideSettings('subscribe-show-timeout-settings', 'subscribeTimeoutIndicator');

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/


  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('subscribe-display-none-value').checked = true;
  } else {
    document.getElementById('subscribe-display-none-value').checked = false;
  }

  $('#subscribe-display-none-value, #subscribe-timeout-hour-value, #subscribe-timeout-hour-value-range, #subscribe-timeout-minute-value, #subscribe-timeout-minute-value-range, #subscribe-timeout-second-value, #subscribe-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');

    var hours = $('#subscribe-timeout-hour-value').val() * 3600;
    var minute = $('#subscribe-timeout-minute-value').val() * 60;
    var second = parseInt($('#subscribe-timeout-second-value').val());

    var time = hours + minute + second;

    time = time * 1000;


    if (document.getElementById('subscribe-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }



    if ($(this).attr('id') == "subscribe-timeout-hour-value") {
      $('#subscribe-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-hour-value-range") {
      $('#subscribe-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-minute-value") {
      $('#subscribe-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-minute-value-range") {
      $('#subscribe-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-second-value") {
      $('#subscribe-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-second-value-range") {
      $('#subscribe-timeout-second-value').val($(this).val());
    }
    makePreview();

  });

  /*Конец блока таймаута*/

});
