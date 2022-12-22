import { makePreview, setYoutubeBackgroundVideo, setAnotherBackgroundVideo, hexToRGB, getRandom, indexOfMax } from '../global/global.js';
import { addFunctionalityToElement } from '../modules/image/imageModule.js';
import { addFunctionalityToLineElement } from '../modules/line/lineModule.js';
import { addFunctionalityToListElement } from '../modules/list/listModule.js';
import { addFunctionalityToFormElement } from '../modules/form/formModule.js';
import { addFunctionalityToSubscribeElement } from '../modules/subscribe/subscribeModule.js';
import { addFunctionalityToTextElement } from '../modules/text/textModule.js';
import { addFunctionalityToButtonElement } from '../modules/button/buttonModule.js';



$('#mainArea').on('click', '.remove', function () {
  $(this).parents('.main-selector').first().remove();
  makePreview();
});

$('#mainArea').on('click', '.copy', function () {
  var $copyElement = $(this).parents('.main-selector').clone();

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

  $(this).parents('.main-selector').first().after($copyElement);

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
        $('.border-hover').removeClass('border-hover');
        $('.border-hover-content').removeClass('border-hover-content');
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
  makePreview();
});

$('#mainArea').on('click', '.add-block', function () {
  var $this = this;
  var maxIndex;
  var cols = $(this).parents('.main-selector').find('>[class*="col-"]');

  if (cols.length == 12)
    return;

  var $colSizes = [];

  $(cols).each(function (ind, el) {
    var classes = $(this).attr('class').split(' ');

    $(classes).each(function (ind, el) {
      if (el.match(/col-[a-z]+-[0-9]+/i)) {
        $colSizes.push(parseInt(el.split('-')[2]));
      }
    });
  });
  maxIndex = indexOfMax($colSizes);
  var maxValueSection = $($this).parents('.main-selector').find('>[class*="col-"]:nth(' + maxIndex + ')');
  $(maxValueSection.attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      if (el.split('-')[1] != 'xs') {
        $(maxValueSection).removeClass(el);
        $(maxValueSection).addClass('col-' + el.split('-')[1] + '-' + (parseInt(el.split('-')[2]) - 1));
      }
    }

  });
  addMainSelectorSection($this);
  makePreview();
});

$('#mainArea').on('click', '.remove-block', function () {
  var $this = $(this);

  var cols = $(this).parents('.main-selector').find('>[class*="col-"]');

  if (cols.length == 1)
    return;

  removeMainSelectorSection($this);
  makePreview();
});

$('#mainArea').on('click', '.main-block-settings', function (event) {
  //Очистка от старых событий изменения значений (при первом клике на настройки, вызывается один раз, при втором уже два).
  //Поправлено!!!
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#main-block-border-style-value').off();
  $('#main-block-border-left-style-value').off();
  $('#main-block-border-right-style-value').off();
  $('#main-block-border-top-style-value').off();
  $('#main-block-border-bottom-style-value').off();
  $('#main-block-animation-type-value').off();
  var ths = null;
  ths = $(this).parents('.block-settings').parent();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#main-block-timeout-hour-value').val(h);
    $('#main-block-timeout-minute-value').val(m);
    $('#main-block-timeout-second-value').val(s);
    $('#main-block-display-none-value').prop('checked', true);
  } else {
    $('#main-block-timeout-hour-value').val(0);
    $('#main-block-timeout-minute-value').val(0);
    $('#main-block-timeout-second-value').val(0);
  }

  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#main-block-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  /*Инициализация инпутов*/
  $('#main-block-width-value').val($(ths).width());
  $('#main-block-width-value-range').val($(ths).width());
  $('#main-block-margin-top-value').val(parseInt($(ths).css('margin-top')));
  $('#main-block-margin-top-value-range').val(parseInt($(ths).css('margin-top')));

  $('#main-block-margin-bottom-value').val(parseInt($(ths).css('margin-bottom')));
  $('#main-block-margin-bottom-value-range').val(parseInt($(ths).css('margin-bottom')));

  $('#main-block-padding-top-value').val(parseInt($(ths).css('padding-top')));
  $('#main-block-padding-top-value-range').val(parseInt($(ths).css('padding-top')));

  $('#main-block-padding-bottom-value').val(parseInt($(ths).css('padding-bottom')));
  $('#main-block-padding-bottom-value-range').val(parseInt($(ths).css('padding-bottom')));

  $('#main-block-padding-left-value').val(parseInt($(ths).css('padding-left')));
  $('#main-block-padding-left-value-range').val(parseInt($(ths).css('padding-left')));

  $('#main-block-padding-right-value').val(parseInt($(ths).css('padding-right')));
  $('#main-block-padding-right-value-range').val(parseInt($(ths).css('padding-right')));

  $('#main-block-opacity-value').val($(ths).css('opacity') * 100);
  $('#main-block-opacity-value-range').val($(ths).css('opacity') * 100);

  $('#main-block-border-thickness-value').val(parseInt($(ths).css('border-width')));
  $('#main-block-border-thickness-value-range').val(parseInt($(ths).css('border-width')));

  $('#main-block-border-left-thickness-value').val(parseInt($(ths).css('border-left-width')));
  $('#main-block-border-left-thickness-value-range').val(parseInt($(ths).css('border-left-width')));

  $('#main-block-border-top-thickness-value').val(parseInt($(ths).css('border-top-width')));
  $('#main-block-border-top-thickness-value-range').val(parseInt($(ths).css('border-top-width')));

  $('#main-block-border-right-thickness-value').val(parseInt($(ths).css('border-right-width')));
  $('#main-block-border-right-thickness-value-range').val(parseInt($(ths).css('border-right-width')));

  $('#main-block-border-bottom-thickness-value').val(parseInt($(ths).css('border-bottom-width')));
  $('#main-block-border-bottom-thickness-value-range').val(parseInt($(ths).css('border-bottom-width')));

  var videolnk = String($(ths).find('.background-video iframe').attr('src')).split('?')[0];

  if (videolnk != "undefined") {
    $('#main-block-videolink').val(videolnk);
  } else {
    $('#main-block-videolink').val('');
  }

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/


  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('main-block-display-none-value').checked = true;
  } else {
    document.getElementById('main-block-display-none-value').checked = false;
  }

  $('#main-block-display-none-value, #main-block-timeout-hour-value, #main-block-timeout-hour-value-range, #main-block-timeout-minute-value, #main-block-timeout-minute-value-range, #main-block-timeout-second-value, #main-block-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');

    var hours = $('#main-block-timeout-hour-value').val() * 3600;
    var minute = $('#main-block-timeout-minute-value').val() * 60;
    var second = parseInt($('#main-block-timeout-second-value').val());

    var time = hours + minute + second;

    time = time * 1000;


    if (document.getElementById('main-block-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }



    if ($(this).attr('id') == "main-block-timeout-hour-value") {
      $('#main-block-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-hour-value-range") {
      $('#main-block-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-minute-value") {
      $('#main-block-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-minute-value-range") {
      $('#main-block-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-second-value") {
      $('#main-block-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-second-value-range") {
      $('#main-block-timeout-second-value').val($(this).val());
    }
    makePreview();
  });

  /*Конец блока таймаута*/

  /*Динамические настройки для основного блока*/
  /*Изменение ширины основного селектора*/
  $('#main-block-width-value, #main-block-width-value-range').on('input', function () {

    $(ths).width($(this).val());
    if ($(this).attr('id') == "main-block-width-value") {
      $('#main-block-width-value-range').val($(this).val());
    } else {
      $('#main-block-width-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-margin-top-value, #main-block-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;'
    });
    //$(ths).css('cssText', 'margin-top:'+$(this).val()+'px !important');
    if ($(this).attr('id') == "main-block-margin-top-value") {
      $('#main-block-margin-top-value-range').val($(this).val());
    } else {
      $('#main-block-margin-top-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-margin-bottom-value, #main-block-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;'
    });
    if ($(this).attr('id') == "main-block-margin-bottom-value") {
      $('#main-block-margin-bottom-value-range').val($(this).val());
    } else {
      $('#main-block-margin-bottom-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-padding-top-value, #main-block-padding-top-value-range').on('input', function () {
    $(ths).css('padding-top', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-padding-top-value") {
      $('#main-block-padding-top-value-range').val($(this).val());
    } else {
      $('#main-block-padding-top-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-padding-bottom-value, #main-block-padding-bottom-value-range').on('input', function () {
    $(ths).css('padding-bottom', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-padding-bottom-value") {
      $('#main-block-padding-bottom-value-range').val($(this).val());
    } else {
      $('#main-block-padding-bottom-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-padding-left-value, #main-block-padding-left-value-range').on('input', function () {
    $(ths).css('padding-left', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-padding-left-value") {
      $('#main-block-padding-left-value-range').val($(this).val());
    } else {
      $('#main-block-padding-left-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-padding-right-value, #main-block-padding-right-value-range').on('input', function () {
    $(ths).css('padding-right', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-padding-right-value") {
      $('#main-block-padding-right-value-range').val($(this).val());
    } else {
      $('#main-block-padding-right-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-opacity-value, #main-block-opacity-value-range').on('input', function () {
    $(ths).css('opacity', $(this).val() / 100);
    if ($(this).attr('id') == "main-block-opacity-value") {
      $('#main-block-opacity-value-range').val($(this).val());
    } else {
      $('#main-block-opacity-value').val($(this).val());
    }
    makePreview();
  });

  /*Настройки для всех границ блока*/
  $('#main-block-border-thickness-value, #main-block-border-thickness-value-range').on('input', function () {
    $(ths).css('border-width', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-thickness-value") {
      $('#main-block-border-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-thickness-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-border-radius-value, #main-block-border-radius-value-range').on('input', function () {
    $(ths).css('border-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-radius-value") {
      $('#main-block-border-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-radius-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-border-style-value').on('change', function () {
    $(ths).css('border-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#main-block-border-color-value').on('change', function () {
    $(ths).css('border-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для левой границы блока*/

  $('#main-block-border-left-thickness-value, #main-block-border-left-thickness-value-range').on('input', function () {
    $(ths).css('border-left-width', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-left-thickness-value") {
      $('#main-block-border-left-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-left-thickness-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-border-left-style-value').on('change', function () {
    $(ths).css('border-left-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#main-block-border-left-color-value').on('change', function () {
    $(ths).css('border-left-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для верхней границы блока*/

  $('#main-block-border-top-thickness-value, #main-block-border-top-thickness-value-range').on('input', function () {
    $(ths).css('border-top-width', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-top-thickness-value") {
      $('#main-block-border-top-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-top-thickness-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-border-top-left-radius-value, #main-block-border-top-left-radius-value-range').on('input', function () {
    $(ths).css('border-top-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-top-left-radius-value") {
      $('#main-block-border-top-left-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-top-left-radius-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-border-top-right-radius-value, #main-block-border-top-right-radius-value-range').on('input', function () {
    $(ths).css('border-top-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-top-right-radius-value") {
      $('#main-block-border-top-right-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-top-right-radius-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-border-top-style-value').on('change', function () {
    $(ths).css('border-top-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#main-block-border-top-color-value').on('change', function () {
    $(ths).css('border-top-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для правой границы блока*/

  $('#main-block-border-right-thickness-value, #main-block-border-right-thickness-value-range').on('input', function () {
    $(ths).css('border-right-width', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-right-thickness-value") {
      $('#main-block-border-right-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-right-thickness-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-border-right-style-value').on('change', function () {
    $(ths).css('border-right-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#main-block-border-right-color-value').on('change', function () {
    $(ths).css('border-right-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для нижней границы блока*/

  $('#main-block-border-bottom-thickness-value, #main-block-border-bottom-thickness-value-range').on('input', function () {
    $(ths).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-bottom-thickness-value") {
      $('#main-block-border-bottom-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-bottom-thickness-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-border-bottom-left-radius-value, #main-block-border-bottom-left-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-bottom-left-radius-value") {
      $('#main-block-border-bottom-left-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-bottom-left-radius-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-border-bottom-right-radius-value, #main-block-border-bottom-right-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-bottom-right-radius-value") {
      $('#main-block-border-bottom-right-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-bottom-right-radius-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-border-bottom-style-value').on('change', function () {
    $(ths).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });

  $('#main-block-border-bottom-color-value').on('change', function () {
    $(ths).css('border-bottom-color', $(this).val());
    makePreview();
  });

  /*Конец блока*/

  $('#main-block-border-settings-choice input').on('change', function () {
    switch ($(this).val()) {
      case 'allborders': {
        $('#main-block-all-border-settings').show();
        $('#main-block-each-border-settings').hide();
        break;
      }
      case 'eachborders': {
        $('#main-block-all-border-settings').hide();
        $('#main-block-each-border-settings').show();
        break;
      }
    }
  });

  $('#main-block-background-types input').on('change', function () {
    switch ($(this).val()) {
      case 'color': {
        $('.main-block-background-color-settings').show();
        $('.main-block-background-gradient-settings').hide();
        $('.main-block-background-image-settings').hide();
        $('.main-block-background-vide-settings').hide();
        $(ths).find('.background-video').remove();
        break;
      }
      case 'gradient': {
        $('.main-block-background-color-settings').hide();
        $('.main-block-background-gradient-settings').show();
        $('.main-block-background-image-settings').hide();
        $('.main-block-background-vide-settings').hide();
        $(ths).find('.background-video').remove();
        break;
      }
      case 'bgimage': {
        $('.main-block-background-color-settings').hide();
        $('.main-block-background-gradient-settings').hide();
        $('.main-block-background-image-settings').show();
        $('.main-block-background-vide-settings').hide();
        $(ths).find('.background-video').remove();
        break;
      }
      case 'video': {
        $('.main-block-background-color-settings').hide();
        $('.main-block-background-gradient-settings').hide();
        $('.main-block-background-image-settings').hide();
        $('.main-block-background-video-settings').show();
      }
    }
  });

  $('#main-block-background-color input#main-block-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = hexToRGB($(this).val(), opacity);
    $(ths).css('background', color);
    makePreview();
  });

  $('#main-block-gradient-color-1').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#main-block-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#main-block-gradient-color-2').val() + ')');
    makePreview();
  });

  $('#main-block-gradient-color-2').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#main-block-gradient-angle').val()) + 'deg, ' + $('#main-block-gradient-color-1').val() + ', ' + $(this).val() + ')');
    makePreview();
  });

  $('#main-block-gradient-angle').on('input', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#main-block-gradient-color-1').val() + ', ' + $('#main-block-gradient-color-2').val() + ')');
    makePreview();
  });

  $('#main-block-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#main-block-main-color').val(), opacity / 100);
    $(ths).css('background', color);
    makePreview();
  });

  $('#main-block-background-image-file').on('change', function () {
    var file = document.querySelector('input#main-block-background-image-file').files[0];
    var token = $('input[name=_token][type=hidden]').val();

    var form_data = new FormData();
    form_data.append('image', file);
    form_data.append('_token', token);
    form_data.append('id', $('input[name=template_id]').val());

    $.ajax({
      url: "/client/funnel/saveimage",
      method: 'post',
      data: form_data,
      contentType: false,
      processData: false,
      success: function (e) {
        $(ths).css('background-image', 'url(' + e.link + ')');
      }
    });
    makePreview();
  });

  $('#main-block-background-image-size').on('change', function () {
    $(ths).css('background-size', $(this).val());
    makePreview();
  });

  $('#main-block-background-image-attachment').on('change', function () {
    $(ths).css('background-attachment', $(this).val());
    makePreview();
  });

  $('#main-block-background-image-blend-mode').on('change', function () {
    $(ths).css('background-blend-mode', $(this).val());
    makePreview();
  });

  $('#main-block-background-image-repeat-x').on('change', function () {
    $(ths).css('background-repeat-x', $(this).val());
    makePreview();
  });

  $('#main-block-background-image-repeat-y').on('change', function () {
    $(ths).css('background-repeat-y', $(this).val());
    makePreview();
  });

  $('#main-block-background-image-color').on('change', function () {
    $(ths).css('background-color', $(this).val());
    makePreview();
  });


  function setYoutubeMainBlockBackgroundVideo(link, params, bgVideoBlock) {
    console.log(bgVideoBlock);
    $(bgVideoBlock).find(' > *').remove();

    var p = "?autoplay=1&controls=0&loop=" + params['loop'] + "&mute=" + params['mute'];

    link = 'https://www.youtube.com/embed/' + link + p;


    var videoblock = '<div class="video-background-main-block">\
                             <div class="video-foreground-main-block">\
                                    <iframe width="560" height="315" src="' + link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
                             </div>\
                          </div>';

    $(bgVideoBlock).append(videoblock);
  }

  $('#main-block-videolink, #main-block-video_loop, #main-block-video_unmute').on('change', function () {
    var bgVideoBlock = null;
    if ($(ths).find('> *').is('.background-video') == false) {
      $(ths).append('<div class="background-video"></div>');
      bgVideoBlock = $(ths).find('> .background-video').first();
    } else {
      bgVideoBlock = $(ths).find('> .background-video').first();
    }

    if ($('#main-block-videolink').val().indexOf(".mp4") != -1 || $('#main-block-videolink').val().indexOf(".avi") != -1) {
      setAnotherMainBlockBackgroundVideo($(this).val());
    } else if ($('#main-block-videolink').val().indexOf("youtube.com") != -1 || $('#main-block-videolink').val().indexOf("youtu.be") != -1) {

      var link;

      if ($('#main-block-videolink').val().indexOf("watch?v=") != -1) {
        link = $('#main-block-videolink').val().split("watch?v=")[1];
      } else if ($('#main-block-videolink').val().indexOf("embed") != -1) {
        link = $('#main-block-videolink').val().split("embed/")[1];
      } else {
        link = $('#main-block-videolink').val().split("youtu.be/")[1];
      }

      var params = [];
      params['loop'] = $('#main-block-video_loop:checked').val() == '1' ? 1 : 0;
      params['mute'] = $('#main-block-video_unmute:checked').val() == '1' ? 0 : 1;

      setYoutubeMainBlockBackgroundVideo(link, params, bgVideoBlock);
    } else {
      $('#backgroundVideo > *').remove();
    }
    makePreview();
  });


  /*Настройки теней*/

  $('#main-block-shadow-horizontal-value, #main-block-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "main-block-shadow-horizontal-value") {
      $('#main-block-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-horizontal-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-shadow-vertical-value, #main-block-shadow-vertical-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "main-block-shadow-vertical-value") {
      $('#main-block-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-vertical-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-shadow-blur-value, #main-block-shadow-blur-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "main-block-shadow-blur-value") {
      $('#main-block-shadow-blur-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-blur-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-shadow-spread-value, #main-block-shadow-spread-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "main-block-shadow-spread-value") {
      $('#main-block-shadow-spread-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-spread-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-shadow-opacity-value, #main-block-shadow-opacity-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "main-block-shadow-opacity-value") {
      $('#main-block-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-opacity-value').val($(this).val());
    }
    makePreview();
  });

  $('#main-block-shadow-color-value').on('change', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    makePreview();
  });

  $('#main-block-shadow-inset-value').on('change', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    makePreview();
  });

  /*Конец настроек теней*/


  /*Настройка анимации*/

  $('#main-block-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(ths).css('animation-name', $(this).val());
      $(ths).css('animation-delay', $('#main-block-animation-delay-value').val() + 's');
      $(ths).css('animation-duration', $('#main-block-animation-duration-value').val() + 's');
    }
    makePreview();
  });

  $('#main-block-animation-delay-value').on('change', function () {
    $(ths).css('animation-delay', $(this).val() + 's');
    makePreview();
  });

  $('#main-block-animation-duration-value').on('change', function () {
    $(ths).css('animation-duration', $(this).val() + 's');
    makePreview();
  });

  /*Конец настроек анимации*/


  //Конец блока
});

function addMainSelectorSection($this) {
  var lastElement = $($this).parents('.main-selector').find('>[class*="col-"]').last();
  var contentsLength = $($this).parents('.main-selector')[0].getElementsByClassName('content').length;

  $(lastElement).append('<div class="handle"></div>');
  $(lastElement).after('<div class="content col-xs-12 col-sm-1 col-md-1" id="content' + getRandom() + '"></div>');
  $($(lastElement).find('.handle')).resizer();
  $($this).parents('.main-selector').find('.content').each(function () {
    Sortable.create($("#" + $(this).attr('id') + "").get(0), {
      group: {
        name: 'content-selector',
        put: 'content-selector'
      },
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
        $('.border-hover').removeClass('border-hover');
        $('.border-hover-content').removeClass('border-hover-content');
        if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
          const textBlockElem = document.getElementById($(evt.item).attr('id'));
          const textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
          const iframe = textBlockElem.getElementsByTagName('iframe')[0];
          init(iframe, content, style);
          textEditorPanel.style.width = (textBlockElem.getBoundingClientRect().width - 2) + 'px';
          iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
          addFunctionalityToIframe($(evt.item).attr('id'));
        }
      }
    });
  });
}

function removeMainSelectorSection($this) {
  var $delta = 0;
  var lastElement = $($this).parents('.main-selector').find('>[class*="col-"]').last();
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
      if (el.split('-')[1] != 'xs') {
        $(prevElement).removeClass(el);
        $(prevElement).addClass('col-' + el.split('-')[1] + '-' + (parseInt(el.split('-')[2]) + parseInt($delta)));
      }
    }
  });
}
