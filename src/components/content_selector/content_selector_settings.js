import { makePreview, setYoutubeBackgroundVideo, setAnotherBackgroundVideo, hexToRGB, getRandom, indexOfMax } from '../global/global.js';
import { addFunctionalityToElement } from '../modules/image/imageModule.js';
import { addFunctionalityToLineElement } from '../modules/line/lineModule.js';
import { addFunctionalityToListElement } from '../modules/list/listModule.js';
import { addFunctionalityToFormElement } from '../modules/form/formModule.js';
import { addFunctionalityToSubscribeElement } from '../modules/subscribe/subscribeModule.js';
import { addFunctionalityToTextElement } from '../modules/text/textModule.js';
import { addFunctionalityToButtonElement } from '../modules/button/buttonModule.js';



$('#mainArea').on('click', '.remove-content', function () {
  $(this).parents('.content-selector').first().remove();
});

$('#mainArea').on('click', '.copy-content', function () {
  var $copyElement = $(this).parents('.content-selector').first().clone();

  $($copyElement).find('.content').each(function () {
    $(this).attr('id', getRandom());
  });
  $($copyElement).find('.imageBlock').each(function () {
    $(this).attr('id', 'image' + getRandom());
  });
  $($copyElement).find('.videoBlock').each(function () {
    $(this).attr('id', 'video' + getRandom());
  });
  $($copyElement).find('.textBlock').each(function () {
    $(this).attr('id', 'text' + getRandom());
  });
  $($copyElement).find('.buttonBlock').each(function () {
    $(this).attr('id', 'button' + getRandom());
  });
  $($copyElement).find('.formBlock').each(function () {
    $(this).attr('id', 'form' + getRandom());
  });
  $($copyElement).find('.subscribeBlock').each(function () {
    $(this).attr('id', 'subscribe' + getRandom());
  });
  $($copyElement).find('.listBlock').each(function () {
    $(this).attr('id', 'list' + getRandom());
  });
  $($copyElement).find('.lineBlock').each(function () {
    $(this).attr('id', 'line' + getRandom());
  });

  $(this).parents('.content-selector').first().after($copyElement);

  $($copyElement).find('.imageBlock').each(function () {
    var cloneId = $(this).attr('id');

    addFunctionalityToElement(cloneId);
  });
  $($copyElement).find('.videoBlock').each(function () {
    var cloneId = $(this).attr('id');

    addFunctionalityToElement(cloneId);
  });
  $($copyElement).find('.textBlock').each(function () {
    var cloneId = $(this).attr('id');

    addFunctionalityToTextElement(cloneId);
  });
  $($copyElement).find('.buttonBlock').each(function () {
    var cloneId = $(this).attr('id');

    addFunctionalityToButtonElement(cloneId);
  });
  $($copyElement).find('.formBlock').each(function () {
    var cloneId = $(this).attr('id');

    const formId = getRandom();
    document.getElementById(cloneId).getElementsByTagName('form')[0].id = formId;
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

    addFunctionalityToFormElement(cloneId);
  });
  $($copyElement).find('.subscribeBlock').each(function () {
    var cloneId = $(this).attr('id');

    addDragAndDropToForm(cloneId);

    addFunctionalityToSubscribeElement(cloneId);
  });
  $($copyElement).find('.listBlock').each(function () {
    var cloneId = $(this).attr('id');

    addFunctionalityToListElement(cloneId);
  });
  $($copyElement).find('.lineBlock').each(function () {
    var cloneId = $(this).attr('id');

    addFunctionalityToLineElement(cloneId);
  });

  $($copyElement).find('.content').each(function () {
    Sortable.create($('#' + $(this).attr('id') + '').get(0), {
      group: 'content-selector',
      put: 'content-selector',
      filter: '.resizer, .handle, .block-resizer',
      sort: true,
      animation: 150,
      ghostClass: 'green-background-class',
      onChoose: function (e) {
        if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
          const textBlockElem = document.getElementById($(e.item).attr('id'));
          const iframe = textBlockElem.getElementsByTagName('iframe')[0];
          const textElem = textBlockElem.getElementsByClassName('text')[0];
          content = iframe.contentWindow.document.body.innerHTML;
          let styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
          styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
          styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
          styleElem += 'color:' + getComputedStyle(textElem).color + ';';
          styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
          style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
        }
      },
      onEnd: function (evt) {
        if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
          const textBlockElem = document.getElementById($(evt.item).attr('id'));
          const textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
          const iframe = textBlockElem.getElementsByTagName('iframe')[0];
          init(iframe, content, style);
          textEditorPanel.style.width = (textBlockElem.getBoundingClientRect().width - 2) + 'px';
          iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
          addFunctionalityToIframe($(evt.item).attr('id'));
        }
        makePreview();
      }
    });
  });
  $('.handle').resizer();
  $('.resizer').resizer_s();
  $('.block-resizer').block_resizer();
});

$('#mainArea').on('click', '.add-content-block', function () {
  var $this = this;
  var maxIndex;
  var cols = $(this).parents('.content-selector').find('>[class*="col-"]');

  if (cols.length == 12)
    return;

  var $colSizes = [];

  $(cols).each(function (ind, el) {
    var classes = $(this).attr('class').split(' ');

    $(classes).each(function (ind, el) {
      if (el.match(/col-[a-z]+-[0-9]+/i))
        $colSizes.push(parseInt(el.split('-')[2]));
    });
  });
  maxIndex = indexOfMax($colSizes);
  var maxValueSection = $($this).parents('.content-selector').find('>[class*="col-"]:nth(' + maxIndex + ')');
  $(maxValueSection.attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      $(maxValueSection).removeClass(el);
      $(maxValueSection).addClass('col-' + el.split('-')[1] + '-' + (parseInt(el.split('-')[2]) - 1));
    }
  });
  addContentSelectorSection($this);
  makePreview();
});

$('#mainArea').on('click', '.remove-content-block', function () {
  var $this = $(this);

  var cols = $(this).parents('.content-selector').find('>[class*="col-"]');

  if (cols.length == 1)
    return;

  removeContentSelectorSection($this);
  makePreview();
});

$('#mainArea').on('click', '.settings', function (event) {
  //Очистка от старых событий изменения значений (при первом клике на настройки, вызывается один раз, при втором уже два).
  //Поправлено!!!
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#content-block-border-style-value').off();
  $('#content-block-border-left-style-value').off();
  $('#content-block-border-right-style-value').off();
  $('#content-block-border-top-style-value').off();
  $('#content-block-border-bottom-style-value').off();
  $('#content-block-animation-type-value').off();
  var ths = null;
  ths = $(this).parents('.content-block-settings').parent();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#content-block-timeout-hour-value').val(h);
    $('#content-block-timeout-minute-value').val(m);
    $('#content-block-timeout-second-value').val(s);
    $('#content-block-display-none-value').prop('checked', true);
  } else {
    $('#content-block-timeout-hour-value').val(0);
    $('#content-block-timeout-minute-value').val(0);
    $('#content-block-timeout-second-value').val(0);
  }

  $('#rightSidebar > div').hide();

  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#test').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  /*Инициализация инпутов*/
  $('#content-block-width-value').val($(ths).width());
  $('#content-block-width-value-range').val($(ths).width());

  $('#content-block-margin-top-value').val(parseInt($(ths).css('margin-top')));
  $('#content-block-margin-top-value-range').val(parseInt($(ths).css('margin-top')));

  $('#content-block-margin-bottom-value').val(parseInt($(ths).css('margin-bottom')));
  $('#content-block-margin-bottom-value-range').val(parseInt($(ths).css('margin-bottom')));

  $('#content-block-padding-top-value').val(parseInt($(ths).css('padding-top')));
  $('#content-block-padding-top-value-range').val(parseInt($(ths).css('padding-top')));

  $('#content-block-padding-bottom-value').val(parseInt($(ths).css('padding-bottom')));
  $('#content-block-padding-bottom-value-range').val(parseInt($(ths).css('padding-bottom')));

  $('#content-block-padding-left-value').val(parseInt($(ths).css('padding-left')));
  $('#content-block-padding-left-value-range').val(parseInt($(ths).css('padding-left')));

  $('#content-block-padding-right-value').val(parseInt($(ths).css('padding-right')));
  $('#content-block-padding-right-value-range').val(parseInt($(ths).css('padding-right')));

  $('#content-block-opacity-value').val($(ths).css('opacity') * 100);
  $('#content-block-opacity-value-range').val($(ths).css('opacity') * 100);

  $('#content-block-border-thickness-value').val(parseInt($(ths).css('border-width')));
  $('#content-block-border-thickness-value-range').val(parseInt($(ths).css('border-width')));

  $('#content-block-border-left-thickness-value').val(parseInt($(ths).css('border-left-width')));
  $('#content-block-border-left-thickness-value-range').val(parseInt($(ths).css('border-left-width')));

  $('#content-block-border-top-thickness-value').val(parseInt($(ths).css('border-top-width')));
  $('#content-block-border-top-thickness-value-range').val(parseInt($(ths).css('border-top-width')));

  $('#content-block-border-right-thickness-value').val(parseInt($(ths).css('border-right-width')));
  $('#content-block-border-right-thickness-value-range').val(parseInt($(ths).css('border-right-width')));

  $('#content-block-border-bottom-thickness-value').val(parseInt($(ths).css('border-bottom-width')));
  $('#content-block-border-bottom-thickness-value-range').val(parseInt($(ths).css('border-bottom-width')));
  
  var videolnk = String($(ths).find('.background-video iframe').attr('src')).split('?')[0];

  if (videolnk != "undefined") {
    $('#content-block-videolink').val(videolnk);
  } else {
    $('#content-block-videolink').val('');
  }

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/


  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('content-block-display-none-value').checked = true;
  } else {
    document.getElementById('content-block-display-none-value').checked = false;
  }

  $('#content-block-display-none-value, #content-block-timeout-hour-value, #content-block-timeout-hour-value-range, #content-block-timeout-minute-value, #content-block-timeout-minute-value-range, #content-block-timeout-second-value, #content-block-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');

    var hours = $('#content-block-timeout-hour-value').val() * 3600;
    var minute = $('#content-block-timeout-minute-value').val() * 60;
    var second = parseInt($('#content-block-timeout-second-value').val());

    var time = hours + minute + second;

    time = time * 1000;


    if (document.getElementById('content-block-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }



    if ($(this).attr('id') == "content-block-timeout-hour-value") {
      $('#content-block-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-hour-value-range") {
      $('#content-block-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-minute-value") {
      $('#content-block-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-minute-value-range") {
      $('#content-block-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-second-value") {
      $('#content-block-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-second-value-range") {
      $('#content-block-timeout-second-value').val($(this).val());
    }
    makePreview();

  });

  /*Конец блока таймаута*/

  /*Динамические настройки для основного блока*/
  /*Изменение ширины основного селектора*/
  $('#content-block-width-value, #content-block-width-value-range').on('input', function () {

    var contentBlockId = $(ths).attr('id');
    var contentBlockElem = document.getElementById(contentBlockId);
    var cssClassContentArray = contentBlockElem.getElementsByClassName('content');
    var img = {};
    var imgWidth = 0;
    var wrapperWidth = 0;

    for (var i = 0; i < cssClassContentArray.length; i++) {
      if (cssClassContentArray[i].getElementsByClassName('img')[0]) {
        img = cssClassContentArray[i].getElementsByClassName('img')[0];
        imgWidth = parseFloat(getComputedStyle(img).width);
        wrapperWidth = parseFloat(getComputedStyle(cssClassContentArray[i]).width);
        if (wrapperWidth <= imgWidth + 40) {
          img.style.width = '100%';
        }
      }
    }

    $(ths).width($(this).val());
    if ($(this).attr('id') == "content-block-width-value") {
      $('#content-block-width-value-range').val($(this).val());
    } else {
      $('#content-block-width-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-margin-top-value, #content-block-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;'
    });
    //$(ths).css('cssText', 'margin-top:'+$(this).val()+'px !important');
    if ($(this).attr('id') == "content-block-margin-top-value") {
      $('#content-block-margin-top-value-range').val($(this).val());
    } else {
      $('#content-block-margin-top-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-margin-bottom-value, #content-block-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "content-block-margin-bottom-value") {
      $('#content-block-margin-bottom-value-range').val($(this).val());
    } else {
      $('#content-block-margin-bottom-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-padding-top-value, #content-block-padding-top-value-range').on('input', function () {
    $(ths).css('padding-top', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-padding-top-value") {
      $('#content-block-padding-top-value-range').val($(this).val());
    } else {
      $('#content-block-padding-top-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-padding-bottom-value, #content-block-padding-bottom-value-range').on('input', function () {
    $(ths).css('padding-bottom', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-padding-bottom-value") {
      $('#content-block-padding-bottom-value-range').val($(this).val());
    } else {
      $('#content-block-padding-bottom-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-padding-left-value, #content-block-padding-left-value-range').on('input', function () {
    $(ths).css('padding-left', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-padding-left-value") {
      $('#content-block-padding-left-value-range').val($(this).val());
    } else {
      $('#content-block-padding-left-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-padding-right-value, #content-block-padding-right-value-range').on('input', function () {
    $(ths).css('padding-right', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-padding-right-value") {
      $('#content-block-padding-right-value-range').val($(this).val());
    } else {
      $('#content-block-padding-right-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-opacity-value, #content-block-opacity-value-range').on('input', function () {
    $(ths).css('opacity', $(this).val() / 100);
    if ($(this).attr('id') == "content-block-opacity-value") {
      $('#content-block-opacity-value-range').val($(this).val());
    } else {
      $('#content-block-opacity-value').val($(this).val());
    }
    makePreview();
  });

  /*Настройки для всех границ блока*/
  $('#content-block-border-thickness-value, #content-block-border-thickness-value-range').on('input', function () {
    $(ths).css('border-width', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-thickness-value") {
      $('#content-block-border-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-thickness-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-border-radius-value, #content-block-border-radius-value-range').on('input', function () {
    $(ths).css('border-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-radius-value") {
      $('#content-block-border-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-radius-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-border-style-value').on('change', function () {
    $(ths).css('border-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#content-block-border-color-value').on('change', function () {
    $(ths).css('border-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для левой границы блока*/

  $('#content-block-border-left-thickness-value, #content-block-border-left-thickness-value-range').on('input', function () {
    $(ths).css('border-left-width', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-left-thickness-value") {
      $('#content-block-border-left-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-left-thickness-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-border-left-style-value').on('change', function () {
    $(ths).css('border-left-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#content-block-border-left-color-value').on('change', function () {
    $(ths).css('border-left-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для верхней границы блока*/

  $('#content-block-border-top-thickness-value, #content-block-border-top-thickness-value-range').on('input', function () {
    $(ths).css('border-top-width', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-top-thickness-value") {
      $('#content-block-border-top-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-top-thickness-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-border-top-left-radius-value, #content-block-border-top-left-radius-value-range').on('input', function () {
    $(ths).css('border-top-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-top-left-radius-value") {
      $('#content-block-border-top-left-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-top-left-radius-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-border-top-right-radius-value, #content-block-border-top-right-radius-value-range').on('input', function () {
    $(ths).css('border-top-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-top-right-radius-value") {
      $('#content-block-border-top-right-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-top-right-radius-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-border-top-style-value').on('change', function () {
    $(ths).css('border-top-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#content-block-border-top-color-value').on('change', function () {
    $(ths).css('border-top-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для правой границы блока*/

  $('#content-block-border-right-thickness-value, #content-block-border-right-thickness-value-range').on('input', function () {
    $(ths).css('border-right-width', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-right-thickness-value") {
      $('#content-block-border-right-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-right-thickness-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-border-right-style-value').on('change', function () {
    $(ths).css('border-right-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#content-block-border-right-color-value').on('change', function () {
    $(ths).css('border-right-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для нижней границы блока*/

  $('#content-block-border-bottom-thickness-value, #content-block-border-bottom-thickness-value-range').on('input', function () {
    $(ths).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-bottom-thickness-value") {
      $('#content-block-border-bottom-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-bottom-thickness-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-border-bottom-left-radius-value, #content-block-border-bottom-left-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-bottom-left-radius-value") {
      $('#content-block-border-bottom-left-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-bottom-left-radius-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-border-bottom-right-radius-value, #content-block-border-bottom-right-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-bottom-right-radius-value") {
      $('#content-block-border-bottom-right-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-bottom-right-radius-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-border-bottom-style-value').on('change', function () {
    $(ths).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#content-block-border-bottom-color-value').on('change', function () {
    $(ths).css('border-bottom-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  $('#content-block-border-settings-choice input').on('change', function () {
    switch ($(this).val()) {
      case 'allborders': {
        $('#content-block-all-border-settings').show();
        $('#content-block-each-border-settings').hide();
        break;
      }
      case 'eachborders': {
        $('#content-block-all-border-settings').hide();
        $('#content-block-each-border-settings').show();
        break;
      }
    }
    makePreview();
  });

  $('#content-block-background-types input').on('change', function () {
    switch ($(this).val()) {
      case 'color': {
        $('.content-block-background-color-settings').show();
        $('.content-block-background-gradient-settings').hide();
        $('.content-block-background-image-settings').hide();
        break;
      }
      case 'gradient': {
        $('.content-block-background-color-settings').hide();
        $('.content-block-background-gradient-settings').show();
        $('.content-block-background-image-settings').hide();
        break;
      }
      case 'bgimage': {
        $('.content-block-background-color-settings').hide();
        $('.content-block-background-gradient-settings').hide();
        $('.content-block-background-image-settings').show();
        break;
      }
    }
  });

  /*Посмотреть, хз че это вообще такое и что оно тут делает???????????*/

  $('#content-block-gradient-color-1').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#content-block-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#content-block-gradient-color-2').val() + ')');
    makePreview();
  });

  $('#content-block-gradient-color-2').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#content-block-gradient-angle').val()) + 'deg, ' + $('#content-block-gradient-color-1').val() + ', ' + $(this).val() + ')');
    makePreview();
  });

  $('#content-block-gradient-angle').on('input', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#content-block-gradient-color-1').val() + ', ' + $('#content-block-gradient-color-2').val() + ')');
    makePreview();
  });

  $('#content-block-content-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#content-block-content-color').val(), opacity / 100);
    $(ths).css('background', color);
    makePreview();
  });

  $('#content-block-content-color').on('change', function () {
    var opacity = $('#content-block-content-color-opacity').val();
    var color = hexToRGB($(this).val(), opacity / 100);
    $(ths).css('background', color);
    makePreview();
  });

  $('#content-block-background-image-file').on('change', function () {
    var file = document.querySelector('input#content-block-background-image-file').files[0];

    var token = $('input[name=_token][type=hidden]').val();

    var form_data = new FormData();
    form_data.append('image', file);
    form_data.append('_token', token);
    form_data.append('id', $('input[name=template_id]').val());

    $.ajax({
      url: '/editor/saveimage',
      method: 'post',
      data: form_data,
      contentType: false,
      processData: false,
      success: function (e) {
        $(ths).css('background-image', 'url(' + e.link + ')')
      }
    });
    makePreview();

  });

  $('#content-block-background-image-size').on('change', function () {
    $(ths).css('background-size', $(this).val());
    makePreview();
  });

  $('#content-block-background-image-attachment').on('change', function () {
    $(ths).css('background-attachment', $(this).val());
    makePreview();
  });

  $('#content-block-background-image-blend-mode').on('change', function () {
    $(ths).css('background-blend-mode', $(this).val());
    makePreview();
  });

  $('#content-block-background-image-repeat-x').on('change', function () {
    $(ths).css('background-repeat-x', $(this).val());
    makePreview();
  });

  $('#content-block-background-image-repeat-y').on('change', function () {
    $(ths).css('background-repeat-y', $(this).val());
    makePreview();
  });

  $('#content-block-background-image-color').on('change', function () {
    $(ths).css('background-color', $(this).val());
    makePreview();
  });


  /*Настройки теней*/

  $('#content-block-shadow-horizontal-value, #content-block-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "content-block-shadow-horizontal-value") {
      $('#content-block-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-horizontal-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-shadow-vertical-value, #content-block-shadow-vertical-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "content-block-shadow-vertical-value") {
      $('#content-block-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-vertical-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-shadow-blur-value, #content-block-shadow-blur-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "content-block-shadow-blur-value") {
      $('#content-block-shadow-blur-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-blur-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-shadow-spread-value, #content-block-shadow-spread-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "content-block-shadow-spread-value") {
      $('#content-block-shadow-spread-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-spread-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-shadow-opacity-value, #content-block-shadow-opacity-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "content-block-shadow-opacity-value") {
      $('#content-block-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-opacity-value').val($(this).val());
    }
    makePreview();
  });

  $('#content-block-shadow-color-value').on('change', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    makePreview();
  });

  $('#content-block-shadow-inset-value').on('change', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    makePreview();
  });

  /*Конец настроек теней*/


  /*Настройка анимации*/

  $('#content-block-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(ths).css('animation-name', $(this).val());
      $(ths).css('animation-delay', $('#content-block-animation-delay-value').val() + 's');
      $(ths).css('animation-duration', $('#content-block-animation-duration-value').val() + 's');
    }
    makePreview();
  });

  $('#content-block-animation-delay-value').on('change', function () {
    $(ths).css('animation-delay', $(this).val() + 's');
    makePreview();
  });

  $('#content-block-animation-duration-value').on('change', function () {
    $(ths).css('animation-duration', $(this).val() + 's');
    makePreview();
  });

  /*Конец настроек анимации*/


  //Конец блока

});

function addContentSelectorSection($this) {
  var lastElement = $($this).parents('.content-selector').find('>[class*="col-"]').last();
  $(lastElement).append('<div class="handle"></div>');
  $(lastElement).after('<div class="content col-md-1" id="' + getRandom() + '"></div>');
  $($(lastElement).find('.handle')).resizer();
  $($this).parents('.content-selector').find('.content').each(function () {
    Sortable.create($("#" + $(this).attr('id') + "").get(0), {
      group: {
        name: 'content-selector',
        put: 'content-selector'
      },
      sort: true,
      animation: 150,
      ghostClass: 'green-background-class',
      filter: '.resizer, .handle, .block-resizer',
      onChoose: function (e) {
        if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
          const textBlockElem = document.getElementById($(e.item).attr('id'));
          const iframe = textBlockElem.getElementsByTagName('iframe')[0];
          const textElem = textBlockElem.getElementsByClassName('text')[0];
          content = iframe.contentWindow.document.body.innerHTML;
          let styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
          styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
          styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
          styleElem += 'color:' + getComputedStyle(textElem).color + ';';
          styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
          style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
        }
      },
      onStart: function (evt) {
        $('.handle').css('display', 'none');
        $('.main-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover');
        });
        $('.content-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover-content');
        });
      },
      onEnd: function (evt) {

        $('.handle').css('display', 'block');
        $('.border-hover-content').removeClass('border-hover-content');
        $('.border-hover').removeClass('border-hover');
        if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
          const textBlockElem = document.getElementById($(evt.item).attr('id'));
          const textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
          const iframe = textBlockElem.getElementsByTagName('iframe')[0];
          init(iframe, content, style);
          textEditorPanel.style.width = (textBlockElem.getBoundingClientRect().width - 2) + 'px';
          iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
          addFunctionalityToIframe($(evt.item).attr('id'));
        }
        makePreview();
      }
    });
  });
}

function removeContentSelectorSection($this) {
  var $delta = 0;
  var lastElement = $($this).parents('.content-selector').find('>[class*="col-"]').last();
  $($(lastElement).attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      $delta = el.split('-')[2];
    }

  });
  var prevElement = lastElement.prev();
  lastElement.remove();
  $(prevElement).find('.handle').remove();
  $($(prevElement).attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      $(prevElement).removeClass(el);
      $(prevElement).addClass('col-' + el.split('-')[1] + '-' + (parseInt(el.split('-')[2]) + parseInt($delta)));
    }
  });

}
