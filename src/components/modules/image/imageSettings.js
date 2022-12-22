import { makePreview, showHideSettings, getRandom } from '../../global/global.js';
import { addFunctionalityToElement } from './imageModule.js';


$('#mainArea').on('click', '.copyImg', function () {
  var imgBlockId = $(this).parents('.imageBlock').attr('id');
  var imgBlockElem = document.getElementById(imgBlockId);
  var clonId = 'image' + getRandom();

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
$('#mainArea').on('click', '.imgSet', function (e) {
  var imgWrapper = null;
  ths = $(this).parents('.imageBlock');
  var content = document.getElementById($(this).parents('.content').attr('id'));
  var imgBlockElem = document.getElementById(ths.attr('id'));
  var imgElem = imgBlockElem.getElementsByClassName('img')[0];
  var imgWrapperElem = imgBlockElem.getElementsByClassName('imageWrapper')[0];
  var proportion = imgBlockElem.getElementsByClassName('imgProportion')[0];
  var imgWrapper = imgBlockElem.getElementsByClassName('border')[0];
  var resizerY_Elem = imgBlockElem.getElementsByClassName('resizerY')[0];
  var resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerXY')[0];

  //Появление правой панели, инициализация инпутов.
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#img-border-style').off();
  $('#img-border-left-style').off();
  $('#img-border-right-style').off();
  $('#img-border-top-style-value').off();
  $('#img-border-bottom-style').off();
  $('#img-animation-type-value').off();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#img-timeout-hour-value').val(h);
    $('#img-timeout-minute-value').val(m);
    $('#img-timeout-second-value').val(s);
    $('#img-display-none-value').prop('checked', true);
  } else {
    $('#img-timeout-hour-value').val(0);
    $('#img-timeout-minute-value').val(0);
    $('#img-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#image-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');
  (function () {
    document.getElementById('paddingRadioEvery').onclick = function () {
      document.getElementById('paddingAll').style.display = 'none';
      document.getElementById('paddingEvery').style.display = 'block';
    }
    document.getElementById('paddingRadioAll').onclick = function () {
      document.getElementById('paddingAll').style.display = 'block';
      document.getElementById('paddingEvery').style.display = 'none';
    }
    document.getElementById('imgBorderRadioEvery').onclick = function () {
      document.getElementById('imgBorderAll').style.display = 'none';
      document.getElementById('imgBorderEvery').style.display = 'block';
    }
    document.getElementById('imgBorderRadioAll').onclick = function () {
      document.getElementById('imgBorderAll').style.display = 'block';
      document.getElementById('imgBorderEvery').style.display = 'none';
    }
  })();


  //Изменение src картинок
  pictureSrc.value = imgElem.src;
  changeSrc(ths.attr('id'));

  //Настройки пропорции
  if (proportion.value == "0" && proportionID.checked) {
    proportionID.checked = false;
  } else if (proportion.value == "1" && !proportionID.checked) {
    proportionID.checked = true;
  }
  proportionID.onclick = function () {
    if (proportionID.checked) {
      proportion.value = "1";
    } else {
      proportion.value = "0";
    }
  }
  //Вертикальное выравнивание
  if (getComputedStyle(imgBlockElem).marginTop == 'auto') {
    imgMarginBottom.checked = true;
    imgMarginTop.checked = false;
    imgMarginCenter.checked = false;
  } else if (getComputedStyle(imgBlockElem).marginBottom == 'auto') {
    imgMarginBottom.checked = false;
    imgMarginTop.checked = true;
    imgMarginCenter.checked = false;
  } else if (getComputedStyle(imgBlockElem).marginTop == '0px' && getComputedStyle(imgBlockElem).marginBottom == '0px') {
    imgMarginBottom.checked = false;
    imgMarginTop.checked = false;
    imgMarginCenter.checked = true;
  }
  imgMarginTop.onclick = function () {
    imgBlockElem.style.marginTop = '0px';
    imgBlockElem.style.marginBottom = 'auto';
    makePreview();
  }
  imgMarginCenter.onclick = function () {
    imgBlockElem.style.marginTop = '0px';
    imgBlockElem.style.marginBottom = '0px';
    makePreview();
  }
  imgMarginBottom.onclick = function () {
    imgBlockElem.style.marginTop = 'auto';
    imgBlockElem.style.marginBottom = '0px';
    makePreview();
  }

  //Настройки отступов

  $('#img-padding-value').val(parseInt($(imgWrapper).css('padding')));
  $('#img-padding-value-range').val(parseInt($(imgWrapper).css('padding')));

  $('#img-margin-top-value').val(parseInt(getComputedStyle(imgBlockElem).marginTop));
  $('#img-margin-top-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginTop));
  $('#img-margin-right-value').val(parseInt(getComputedStyle(imgBlockElem).marginRight));
  $('#img-margin-right-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginRight));
  $('#img-margin-bottom-value').val(parseInt(getComputedStyle(imgBlockElem).marginBottom));
  $('#img-margin-bottom-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginBottom));
  $('#img-margin-left-value').val(parseInt(getComputedStyle(imgBlockElem).marginLeft));
  $('#img-margin-left-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginLeft));

  $('#img-padding-top-value').val(parseInt(getComputedStyle(imgWrapper).paddingTop));
  $('#img-padding-top-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingTop));
  $('#img-padding-right-value').val(parseInt(getComputedStyle(imgWrapper).paddingRight));
  $('#img-padding-right-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingRight));
  $('#img-padding-bottom-value').val(parseInt(getComputedStyle(imgWrapper).paddingBottom));
  $('#img-padding-bottom-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingBottom));
  $('#img-padding-left-value').val(parseInt(getComputedStyle(imgWrapper).paddingLeft));
  $('#img-padding-left-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingLeft));
  $('#img-margin-top-value, #img-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "img-margin-top-value") {
      $('#img-margin-top-value-range').val($(this).val());
    } else {
      $('#img-margin-top-value').val($(this).val());
    }
    makePreview();
  });
  $('#img-margin-right-value, #img-margin-right-value-range').on('input', function () {
    $(ths).css('margin-right', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "img-margin-right-value") {
      $('#img-margin-right-value-range').val($(this).val());
    } else {
      $('#img-margin-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#img-margin-bottom-value, #img-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "img-margin-bottom-value") {
      $('#img-margin-bottom-value-range').val($(this).val());
    } else {
      $('#img-margin-bottom-value').val($(this).val());
    }
    makePreview();
  });
  $('#img-margin-left-value, #img-margin-left-value-range').on('input', function () {
    $(ths).css('margin-left', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "img-margin-left-value") {
      $('#img-margin-left-value-range').val($(this).val());
    } else {
      $('#img-margin-left-value').val($(this).val());
    }
    makePreview();
  });

  $('#img-padding-value, #img-padding-value-range').on('input', function () {
    $(imgWrapper).css('padding', $(this).val() + 'px');
    if ($(this).attr('id') == "img-padding-value") {
      $('#img-padding-value-range').val($(this).val());
    } else {
      $('#img-padding-value').val($(this).val());
    }
    makePreview();
  });
  $('#img-padding-top-value, #img-padding-top-value-range').on('input', function () {
    $(imgWrapper).css('padding-top', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-top:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "img-padding-top-value") {
      $('#img-padding-top-value-range').val($(this).val());
    } else {
      $('#img-padding-top-value').val($(this).val());
    }
    makePreview();
  });
  $('#img-padding-right-value, #img-padding-right-value-range').on('input', function () {
    $(imgWrapper).css('padding-right', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-right:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "img-padding-right-value") {
      $('#img-padding-right-value-range').val($(this).val());
    } else {
      $('#img-padding-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#img-padding-bottom-value, #img-padding-bottom-value-range').on('input', function () {
    $(imgWrapper).css('padding-bottom', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-bottom:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "img-padding-bottom-value") {
      $('#img-padding-bottom-value-range').val($(this).val());
    } else {
      $('#img-padding-bottom-value').val($(this).val());
    }
    makePreview();
  });
  $('#img-padding-left-value, #img-padding-left-value-range').on('input', function () {
    $(imgWrapper).css('padding-left', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-left:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "img-padding-left-value") {
      $('#img-padding-left-value-range').val($(this).val());
    } else {
      $('#img-padding-left-value').val($(this).val());
    }
    makePreview();
  });

  //Настройки всех границ изображения
  $('#img-border-value').val(parseInt($(imgWrapper).css('border-width')));
  $('#img-border-value-range').val(parseInt($(imgWrapper).css('border-width')));
  $('#img-border-radius').val(parseInt($(imgWrapper).css('border-radius')));
  $('#img-border-radius-range').val(parseInt($(imgWrapper).css('border-radius')));

  $('#img-border-value, #img-border-value-range').on('input', function () {
    $(imgWrapper).css('border-width', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-value") {
      $('#img-border-value-range').val($(this).val());
    } else {
      $('#img-border-value').val($(this).val());
    }
    makePreview();
  });

  $('#img-border-radius, #img-border-radius-range').on('input', function () {
    $(imgWrapper).css('border-radius', $(this).val() + 'px');
    $(imgElem).css('border-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-radius") {
      $('#img-border-radius-range').val($(this).val());
    } else {
      $('#img-border-radius').val($(this).val());
    }
    makePreview();
  });

  $('#img-border-style').on('change', function () {
    $(imgWrapper).css('border-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#border-color-value').on('change', function () {
    $(imgWrapper).css('border-color', $(this).val());
    makePreview();
  });

  /*Настройки для верхней границы блока*/

  $('#img-border-top-value').val(parseInt($(ths).css('border-top-width')));
  $('#img-border-top-value-range').val(parseInt($(ths).css('border-top-width')));
  $('#img-border-left-top-radius').val(parseInt($(ths).css('border-top-left-radius')));
  $('#img-border-left-top-radius-range').val(parseInt($(ths).css('border-top-left-radius')));

  $('#img-border-top-value, #img-border-top-value-range').on('input', function () {
    $(imgWrapper).css('border-top-width', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-top-value") {
      $('#img-border-top-value-range').val($(this).val());
    } else {
      $('#img-border-top-value').val($(this).val());
    }
    makePreview();
  });

  $('#img-border-left-top-radius, #img-border-left-top-radius-range').on('input', function () {
    $(imgElem).css('border-top-left-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-top-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-left-top-radius") {
      $('#img-border-left-top-radius-range').val($(this).val());
    } else {
      $('#img-border-left-top-radius').val($(this).val());
    }
    makePreview();
  });
  $('#img-border-top-style-value').on('change', function () {
    $(imgWrapper).css('border-top-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#img-border-top-color').on('change', function () {
    $(imgWrapper).css('border-top-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для правой границы блока*/
  $('#img-border-right-value').val(parseInt($(ths).css('border-right-width')));
  $('#img-border-right-value-range').val(parseInt($(ths).css('border-right-width')));
  $('#img-border-right-radius').val(parseInt($(ths).css('border-top-right-radius')));
  $('#img-border-right-radius-range').val(parseInt($(ths).css('border-top-right-radius')));

  $('#img-border-right-value, #img-border-right-value-range').on('input', function () {
    $(imgWrapper).css('border-right-width', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-right-value") {
      $('#img-border-right-value-range').val($(this).val());
    } else {
      $('#img-border-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#img-border-right-radius, #img-border-right-radius-range').on('input', function () {
    $(imgElem).css('border-top-right-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-top-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-right-radius") {
      $('#img-border-right-radius-range').val($(this).val());
    } else {
      $('#img-border-right-radiuse').val($(this).val());
    }
    makePreview();
  });
  $('#img-border-right-style').on('change', function () {
    $(imgWrapper).css('border-right-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#img-border-right-color').on('change', function () {
    $(imgWrapper).css('border-right-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для нижней границы блока*/
  $('#img-border-bottom-value').val(parseInt($(ths).css('border-bottom-width')));
  $('#img-border-bottom-value-range').val(parseInt($(ths).css('border-bottom-width')));
  $('#img-border-bottom-right-radius').val(parseInt($(ths).css('border-bottom-right-radius')));
  $('#img-border-bottom-right-radius-range').val(parseInt($(ths).css('border-bottom-right-radius')));

  $('#img-border-bottom-value, #img-border-bottom-value-range').on('input', function () {
    $(imgWrapper).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-bottom-value") {
      $('#img-border-bottom-value-range').val($(this).val());
    } else {
      $('#img-border-bottom-value').val($(this).val());
    }
    makePreview();
  });

  $('#img-border-bottom-right-radius, #img-border-bottom-right-radius-range').on('input', function () {
    $(imgElem).css('border-bottom-right-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-bottom-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-bottom-right-radius") {
      $('#img-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#img-border-bottom-right-radius').val($(this).val());
    }
    makePreview();
  });

  $('#img-border-bottom-style').on('change', function () {
    $(imgWrapper).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#img-border-bottom-color').on('change', function () {
    $(imgWrapper).css('border-bottom-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для левой границы блока*/
  $('#img-border-left-value').val(parseInt($(ths).css('border-left-width')));
  $('#img-border-left-value-range').val(parseInt($(ths).css('border-left-width')));
  $('#img-border-bottom-left-radius').val(parseInt($(ths).css('border-bottom-left-radius')));
  $('#img-border-bottom-left-radius-range').val(parseInt($(ths).css('border-bottom-left-radius')));

  $('#img-border-left-value, #img-border-left-value-range').on('input', function () {
    $(imgWrapper).css('border-left-width', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-left-value") {
      $('#img-border-left-value-range').val($(this).val());
    } else {
      $('#img-border-left-value').val($(this).val());
    }
    makePreview();
  });
  $('#img-border-bottom-left-radius, #img-border-bottom-left-radius-range').on('input', function () {
    $(imgElem).css('border-bottom-left-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-bottom-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-bottom-left-radius") {
      $('#img-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#img-border-bottom-left-radius').val($(this).val());
    }
    makePreview();
  });

  $('#img-border-left-style').on('change', function () {
    $(imgWrapper).css('border-left-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#img-border-left-color').on('change', function () {
    $(imgWrapper).css('border-left-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки теней*/
  document.getElementById('imgShadowRadioOn').onclick = function () {
    document.getElementById('img-shadow').style.display = 'block';
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    makePreview();
  }
  document.getElementById('imgShadowRadioOff').onclick = function () {
    document.getElementById('img-shadow').style.display = 'none';
    $(imgWrapper).css('box-shadow', 'none');
    $(imgElem).css('box-shadow', 'none');
    makePreview();
  }

  $('#img-shadow-horizontal-value, #img-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "img-shadow-horizontal-value") {
      $('#img-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#img-shadow-horizontal-value').val($(this).val());
    }
    makePreview();
  });

  $('#img-shadow-vertical-value, #img-shadow-vertical-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "img-shadow-vertical-value") {
      $('#img-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#img-shadow-vertical-value').val($(this).val());
    }
    makePreview();
  });

  $('#img-shadow-blur-value, #img-shadow-blur-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "img-shadow-blur-value") {
      $('#img-shadow-blur-value-range').val($(this).val());
    } else {
      $('#img-shadow-blur-value').val($(this).val());
    }
    makePreview();
  });

  $('#img-shadow-spread-value, #img-shadow-spread-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "img-shadow-spread-value") {
      $('#img-shadow-spread-value-range').val($(this).val());
    } else {
      $('#img-shadow-spread-value').val($(this).val());
    }
    makePreview();
  });

  $('#img-shadow-opacity-value, #img-shadow-opacity-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "img-shadow-opacity-value") {
      $('#img-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#img-shadow-opacity-value').val($(this).val());
    }
    makePreview();
  });

  $('#img-shadow-color-value').on('change', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    makePreview();
  });

  $('#img-shadow-inset-value').on('change', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    makePreview();
  });

  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#img-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(imgElem).css('animation-name', $(this).val());
      $(imgElem).css('animation-delay', $('#img-animation-delay-value').val() + 's');
      $(imgElem).css('animation-duration', $('#img-animation-duration-value').val() + 's');
    }
    makePreview();
  });

  $('#img-animation-delay-value, #img-animation-delay-value-range').on('input', function () {
    $(imgElem).css('animation-delay', $(this).val() + 's');
    if ($(this).attr('id') == "img-animation-delay-value") {
      $('#img-animation-delay-value-range').val($(this).val());
    } else {
      $('#img-animation-delay-value').val($(this).val());
    }
    makePreview();
  });

  $('#img-animation-duration-value, #img-animation-duration-value-range').on('input', function () {
    $(imgElem).css('animation-duration', $(this).val() + 's');
    if ($(this).attr('id') == "img-animation-duration-value") {
      $('#img-animation-duration-value-range').val($(this).val());
    } else {
      $('#img-animation-duration-value').val($(this).val());
    }
    makePreview();
  });

  /*Конец настроек анимации*/

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/


  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('img-display-none-value').checked = true;
  } else {
    document.getElementById('img-display-none-value').checked = false;
  }

  $('#img-display-none-value, #img-timeout-hour-value, #img-timeout-hour-value-range, #img-timeout-minute-value, #img-timeout-minute-value-range, #img-timeout-second-value, #img-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');

    var hours = $('#img-timeout-hour-value').val() * 3600;
    var minute = $('#img-timeout-minute-value').val() * 60;
    var second = parseInt($('#img-timeout-second-value').val());

    var time = hours + minute + second;

    time = time * 1000;


    if (document.getElementById('img-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }



    if ($(this).attr('id') == "img-timeout-hour-value") {
      $('#img-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-hour-value-range") {
      $('#img-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-minute-value") {
      $('#img-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-minute-value-range") {
      $('#img-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-second-value") {
      $('#img-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-second-value-range") {
      $('#img-timeout-second-value').val($(this).val());
    }
    makePreview();

  });

  /*Конец блока таймаута*/
});









function changeSrc(id) {
  'use strict';

  const chosenElement = document.getElementById(id);
  const chosenImgWrapper = chosenElement.getElementsByClassName('imageWrapper')[0];
  const chosenImg = chosenElement.getElementsByClassName('img')[0];
  const pictures = pictureSrc.getElementsByClassName('pictures');
  const proportion = chosenElement.getElementsByClassName('imgProportion')[0];

  pictureSrc.onchange = function () {
    chosenImg.src = pictureSrc.value;
    makePreview();
  }
}

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
