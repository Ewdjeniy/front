import { makePreview, showHideSettings, getRandom } from '../../global/global.js';
import { addFunctionalityToTextElement } from './textModule.js';


$('#mainArea').on('click', '.copyText', function () {
  var imgBlockId = $(this).parents('.textBlock').attr('id');
  var imgBlockElem = document.getElementById(imgBlockId);
  var clonId = 'text' + getRandom();
  $(imgBlockElem).clone(true).attr('id', clonId).css('height', 'auto').insertAfter(imgBlockElem);

  var clone = document.getElementById(clonId);
  var clonedImg = clone.getElementsByClassName('img')[0];
  var imgWrapper = clone.getElementsByClassName('imageWrapper')[0];
  var cloneResizerXY = clone.getElementsByClassName('resizerXY')[0];
  var cloneResizerX = clone.getElementsByClassName('resizerX')[0];

  addFunctionalityToTextElement(clonId);
  makePreview();
});

var ths = null;
var imgWrapperElem = null;
var textElem = null;
var textWrapperElem = null;
var iframe = null;
var ifr = null;
var redactorEditor = null;

$('#mainArea').on('click', '.textSet', function (e) {
  ths = $(this).parents('.textBlock');
  imgWrapperElem = document.getElementById(ths.attr('id'));
  textWrapperElem = imgWrapperElem.getElementsByClassName('textWrapper')[0];
  const textEditor = imgWrapperElem.getElementsByClassName('text-editor')[0];
  const ifr = imgWrapperElem.getElementsByTagName('iframe')[0];
  iframe = imgWrapperElem.getElementsByTagName('iframe')[0].contentWindow;
  const textEditorPanel = imgWrapperElem.getElementsByClassName('text-editor-panel')[0];
  if (textWrapperElem.getElementsByClassName('header')[0]) {
    textElem = textWrapperElem.getElementsByClassName('header')[0];
    redactorEditor = iframe.document.body.getElementsByClassName('header')[0];
  } else {
    textElem = textWrapperElem.getElementsByClassName('text')[0];
    redactorEditor = iframe.document.body;
  }
  $(textElem).css('line-height', getComputedStyle(redactorEditor).lineHeight);

  //Появление правой панели, инициализация инпутов.
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#text-border-style').off();
  $('#text-border-left-style').off();
  $('#text-border-right-style').off();
  $('#text-border-top-style-value').off();
  $('#text-border-bottom-style').off();
  $('#text-animation-type-value').off();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#text-timeout-hour-value').val(h);
    $('#text-timeout-minute-value').val(m);
    $('#text-timeout-second-value').val(s);
    $('#text-display-none-value').prop('checked', true);
  } else {
    $('#text-timeout-hour-value').val(0);
    $('#text-timeout-minute-value').val(0);
    $('#text-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#text-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  //Заголовки
  (function () {
    'use strict';

    const redactor = iframe.document.body.innerHTML;
    for (let i = 1; i <= 6; i++) {
      if (redactor.includes('<h' + i)) {
        headers.value = i;
        return;
      } else {
        headers.value = '0';
      }
    }
  })();
  headers.onchange = function () {
    textElem = textWrapperElem.getElementsByClassName('text')[0];
    redactorEditor = iframe.document.body;
    if (+headers.value > 0) {
      iframe.document.body.innerHTML = '<h' + headers.value + ' class="header">' + deleteHeader(iframe.document.body.innerHTML) + '</h' + headers.value + '>';
      textElem.innerHTML = '<h' + headers.value + ' class="header">' + deleteHeader(textElem.innerHTML) + '</h' + headers.value + '>';
      textElem = textWrapperElem.getElementsByClassName('header')[0];
      $('#text-font-size-value').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-font-size-value-range').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-line-height-value').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
      $('#text-line-height-value-range').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
      redactorEditor = iframe.document.body.getElementsByClassName('header')[0];
      textElem.style.lineHeight = getComputedStyle(redactorEditor).lineHeight;
    } else {
      iframe.document.body.innerHTML = deleteHeader(iframe.document.body.innerHTML);
      textElem.innerHTML = deleteHeader(textElem.innerHTML);
      $(textElem).css('line-height', getComputedStyle(redactorEditor).lineHeight);
      $('#text-font-size-value').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-font-size-value-range').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-line-height-value').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
      $('#text-line-height-value-range').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
    }
    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';
    makePreview();
  }

  //Выбор шрифта
  fontFamilySelect.value = getComputedStyle(iframe.document.body).fontFamily;
  fontFamilySelect.onchange = function () {
    redactorEditor.style.fontFamily = fontFamilySelect.value;
    textElem.style.fontFamily = fontFamilySelect.value;
    textElem = imgWrapperElem.getElementsByClassName('text')[0];
    textElem.style.fontFamily = fontFamilySelect.value;
    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';
    textElem.innerHTML = iframe.document.body.innerHTML;
    makePreview();
  }
  
    //Размер шрифта  
  $('#text-font-size-value').val(parseInt(getComputedStyle(redactorEditor).fontSize));
  $('#text-font-size-value-range').val(parseInt(getComputedStyle(redactorEditor).fontSize));
  $('#text-font-size-value, #text-font-size-value-range').on('input', function () {
    $(redactorEditor).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    $(textElem).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem').css('line-height', parseInt(getComputedStyle(redactorEditor).lineHeight) / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';
    if ($(this).attr('id') == "text-font-size-value") {
      $('#text-font-size-value-range').val($(this).val());
    } else {
      $('#text-font-size-value').val($(this).val());
    }
    makePreview();
  });

  //Межстрочный интервал

  $('#text-line-height-value').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
  $('#text-line-height-value-range').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
  $('#text-line-height-value, #text-line-height-value-range').on('input', function () {
    $(redactorEditor).css('line-height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    $(textElem).css('line-height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';
    if ($(this).attr('id') == "text-line-height-value") {
      $('#text-line-height-value-range').val($(this).val());
    } else {
      $('#text-line-height-value').val($(this).val());
    }
    makePreview();
  });

  //Цвет текста
  $('#text-color-value').on('change', function () {
    $(redactorEditor).css('color', $(this).val());
    $(textElem).css('color', $(this).val());
    makePreview();
  });


  //Заливка текста
  $('#text-backcolor-value').on('change', function () {
    redactorEditor.innerHTML = deleteSpan(redactorEditor);
    var target = redactorEditor;
    var rng = document.createRange();
    var nodes = redactorEditor.childNodes;
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType == 3) {
        rng.selectNode(nodes[i]);
        var highlightSpan = document.createElement('span');
        highlightSpan.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpan);
      } else if (nodes[i].nodeName != "BR") {
        rng.selectNodeContents(nodes[i]);
        var highlightSpan = document.createElement('span');
        highlightSpan.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpan);
      }
      makePreview();
    }
    textElem.innerHTML = deleteSpan(textElem);
    var target = textElem;
    var rng = document.createRange();
    var nodes = textElem.childNodes;
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType == 3) {
        rng.selectNode(nodes[i]);
        var highlightSpanForText = document.createElement('span');
        highlightSpanForText.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpanForText);
      } else if (nodes[i].nodeName != "BR") {
        rng.selectNodeContents(nodes[i]);
        var highlightSpanForText = document.createElement('span');
        highlightSpanForText.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpanForText);
      }
    }
    makePreview();
  });
  const resetBackcolor = document.getElementById('text-backcolor-value-reset');
  resetBackcolor.onclick = function () {
    redactorEditor.innerHTML = deleteSpan(redactorEditor);
    textElem.innerHTML = deleteSpan(textElem);
    makePreview();
  }

  //Вертикальное выравнивание
  if (getComputedStyle(imgWrapperElem).marginTop == 'auto') {
    textMarginBottom.checked = true;
    textMarginTop.checked = false;
    textMarginCenter.checked = false;
  } else if (getComputedStyle(imgWrapperElem).marginBottom == 'auto') {
    textMarginBottom.checked = false;
    textMarginTop.checked = true;
    textMarginCenter.checked = false;
  } else if (getComputedStyle(imgWrapperElem).marginTop == '0px' && getComputedStyle(imgWrapperElem).marginBottom == '0px') {
    textMarginBottom.checked = false;
    textMarginTop.checked = false;
    textMarginCenter.checked = true;
  }
  textMarginTop.onclick = function () {
    imgWrapperElem.style.marginTop = '0px';
    imgWrapperElem.style.marginBottom = 'auto';
    makePreview();

    //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  }
  textMarginCenter.onclick = function () {
    imgWrapperElem.style.marginTop = '0px';
    imgWrapperElem.style.marginBottom = '0px';
    makePreview();

    //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  }
  textMarginBottom.onclick = function () {
    imgWrapperElem.style.marginTop = 'auto';
    imgWrapperElem.style.marginBottom = '0px';
    makePreview();

    //    resizerY_Elem.style.top = '0';
    //    resizerY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.top = '0';
    //    resizerXY_Elem.style.left = '0';
    //    resizerXY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.marginLeft = '0';
  }

  //Настройки отступов

  $('#text-padding-value').val(parseInt($(textElem).css('padding')));
  $('#text-padding-value-range').val(parseInt($(textElem).css('padding')));

  $('#text-margin-top-value').val(parseInt(getComputedStyle(imgWrapperElem).marginTop));
  $('#text-margin-top-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginTop));
  $('#text-margin-right-value').val(parseInt(getComputedStyle(imgWrapperElem).marginRight));
  $('#text-margin-right-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginRight));
  $('#text-margin-bottom-value').val(parseInt(getComputedStyle(imgWrapperElem).marginBottom));
  $('#text-margin-bottom-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginBottom));
  $('#text-margin-left-value').val(parseInt(getComputedStyle(imgWrapperElem).marginLeft));
  $('#text-margin-left-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginLeft));

  $('#text-margin-value, #text-margin-value-range').on('input', function () {
    $(ths).css('margin', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "text-margin-value") {
      $('#text-margin-value-range').val($(this).val());
    } else {
      $('#text-margin-value').val($(this).val());
    }
    makePreview();
  });
  $('#text-margin-top-value, #text-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "text-margin-top-value") {
      $('#text-margin-top-value-range').val($(this).val());
    } else {
      $('#text-margin-top-value').val($(this).val());
    }
    makePreview();
  });
  $('#text-margin-right-value, #text-margin-right-value-range').on('input', function () {
    $(ths).css('margin-right', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "text-margin-right-value") {
      $('#text-margin-right-value-range').val($(this).val());
    } else {
      $('#text-margin-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#text-margin-bottom-value, #text-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "text-margin-bottom-value") {
      $('#text-margin-bottom-value-range').val($(this).val());
    } else {
      $('#text-margin-bottom-value').val($(this).val());
    }
    makePreview();
  });
  $('#text-margin-left-value, #text-margin-left-value-range').on('input', function () {
    $(ths).css('margin-left', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "text-margin-left-value") {
      $('#text-margin-left-value-range').val($(this).val());
    } else {
      $('#text-margin-left-value').val($(this).val());
    }
    makePreview();
  });

  /*Настройки теней*/
  document.getElementById('textShadowRadioOn').onclick = function () {
    document.getElementById('text-shadow').style.display = 'block';
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    makePreview();
  }
  document.getElementById('textShadowRadioOff').onclick = function () {
    document.getElementById('text-shadow').style.display = 'none';
    $(iframe.document.body).css('text-shadow', 'none');
    $(textElem).css('text-shadow', 'none');
    makePreview();
  }

  $('#text-shadow-horizontal-value, #text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "text-shadow-horizontal-value") {
      $('#text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#text-shadow-horizontal-value').val($(this).val());
    }
    makePreview();
  });

  $('#text-shadow-vertical-value, #text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "text-shadow-vertical-value") {
      $('#text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#text-shadow-vertical-value').val($(this).val());
    }
    makePreview();
  });

  $('#text-shadow-blur-value, #text-shadow-blur-value-range').on('input', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "text-shadow-blur-value") {
      $('#text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#text-shadow-blur-value').val($(this).val());
    }
    makePreview();
  });

  $('#text-shadow-opacity-value, #text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "text-shadow-opacity-value") {
      $('#text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#text-shadow-opacity-value').val($(this).val());
    }
    makePreview();
  });

  $('#text-shadow-color-value').on('change', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    makePreview();
  });

  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#text-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(textElem).css('animation-name', $(this).val());
      $(textElem).css('animation-delay', $('#text-animation-delay-value').val() + 's');
      $(textElem).css('animation-duration', $('#text-animation-duration-value').val() + 's');
    }
    makePreview();
  });

  $('#text-animation-delay-value, #text-animation-delay-value-range').on('input', function () {
    $(textElem).css('animation-delay', $(this).val() + 's');
    if ($(this).attr('id') == "text-animation-delay-value") {
      $('#text-animation-delay-value-range').val($(this).val());
    } else {
      $('#text-animation-delay-value').val($(this).val());
    }
    makePreview();
  });

  $('#text-animation-duration-value, #text-animation-duration-value-range').on('input', function () {
    $(textElem).css('animation-duration', $(this).val() + 's');
    if ($(this).attr('id') == "text-animation-duration-value") {
      $('#text-animation-duration-value-range').val($(this).val());
    } else {
      $('#text-animation-duration-value').val($(this).val());
    }
    makePreview();
  });

  /*Конец настроек анимации*/

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/


  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('text-display-none-value').checked = true;
  } else {
    document.getElementById('text-display-none-value').checked = false;
  }

  $('#text-display-none-value, #text-timeout-hour-value, #text-timeout-hour-value-range, #text-timeout-minute-value, #text-timeout-minute-value-range, #text-timeout-second-value, #text-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');

    var hours = $('#text-timeout-hour-value').val() * 3600;
    var minute = $('#text-timeout-minute-value').val() * 60;
    var second = parseInt($('#text-timeout-second-value').val());

    var time = hours + minute + second;

    time = time * 1000;


    if (document.getElementById('text-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }



    if ($(this).attr('id') == "text-timeout-hour-value") {
      $('#text-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-hour-value-range") {
      $('#text-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-minute-value") {
      $('#text-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-minute-value-range") {
      $('#text-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-second-value") {
      $('#text-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-second-value-range") {
      $('#text-timeout-second-value').val($(this).val());
    }
    makePreview();

  });

  /*Конец блока таймаута*/
});





function deleteHeader(el) {
  let content = el;
  for (let i = 1; i <= 6; i++) {
    let tagName = 'h' + i;
    const reOpen = new RegExp('<' + tagName + '[^>]*>', 'gi');
    const reClose = new RegExp('</' + tagName + '[^>]*>', 'gi');
    content = content.replace(reOpen, "");
    content = content.replace(reClose, "");
  }
  return content;
}

function deleteSpan(el) {
  let content = el.innerHTML;
  const reOpen = new RegExp('<span[^>]*>', 'gi');
  const reClose = new RegExp('</span[^>]*>', 'gi');
  content = content.replace(reOpen, "");
  content = content.replace(reClose, "");
  return content;
}

function changeFontFamily(id) {
  'use strict';

  const chosenElement = document.getElementById(id);
  const chosenText = chosenElement.getElementsByClassName('text')[0];

  fontFamilySelect.onchange = function () {
    chosenText.style.fontFamily = fontFamilySelect.value;
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
