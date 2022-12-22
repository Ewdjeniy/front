import { makePreview, showHideSettings, getRandom, closeRightPanel } from '../../global/global.js';
import { addFunctionalityToButtonElement } from './buttonModule.js';

(function () {
  'use strict';

  $('#mainArea').on('click', '.copyButton', function () {
    const buttonBlockId = $(this).parents('.buttonBlock').attr('id');
    const buttonBlockElem = document.getElementById(buttonBlockId);
    const clonId = 'button' + getRandom();
    $(buttonBlockElem).clone(true).attr('id', clonId).insertAfter(buttonBlockElem);
    addFunctionalityToButtonElement(clonId);
    makePreview();
  });

  let ths = null;
  let buttonBlockElem = null;
  let buttonWrapperElem = null;
  let buttonElem = null;
  let editor = null;

  $('#mainArea').on('click', '.buttonSet', function (e) {
    ths = $(this).parents('.buttonBlock');
    buttonBlockElem = document.getElementById(ths.attr('id'));
    buttonWrapperElem = buttonBlockElem.getElementsByClassName('buttonWrapper')[0];
    buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
    editor = buttonElem.getElementsByTagName('div')[0];

    //Появление правой панели, инициализация инпутов.
    $('#rightSidebar > div:not(#settings-mn) input').off('input');
    $('#rightSidebar > div:not(#settings-mn) input').off();
    $('#button-border-style').off();
    $('#button-border-left-style').off();
    $('#button-border-right-style').off();
    $('#button-border-top-style-value').off();
    $('#button-border-bottom-style').off();
    $('#button-animation-type-value').off();

    if (document.getElementById('script-' + ths.attr('id'))) {
      var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
      var h = Math.floor(time / 3600);
      var m = Math.floor((time - 3600 * h) / 60);
      var s = time - (3600 * h + 60 * m);
      $('#button-timeout-hour-value').val(h);
      $('#button-timeout-minute-value').val(m);
      $('#button-timeout-second-value').val(s);
      $('#button-display-none-value').prop('checked', true);
    } else {
      $('#button-timeout-hour-value').val(0);
      $('#button-timeout-minute-value').val(0);
      $('#button-timeout-second-value').val(0);
    }
    $('#rightSidebar > div').hide();
    $('#settings-mn').hide();
    $('#main-block-settings').hide();
    $('#content-block-settings').hide();
    $('#image-settings').hide();
    $('#video-settings').hide();
    $('#text-settings').hide();
    $('#form-settings').hide();
    $('#subscribe-settings').hide();
    $('#line-settings').hide();
    $('#list-settings').hide();
    $('#button-settings').show();
    $('#rightSidebar').css({
      right: '0px',
      transition: '0.4s all ease-in'
    }).addClass('activated');
    
      // Закрыть панель

      document.addEventListener('mousedown', closeRightPanel);

    //Настройки отступов

    $('#button-margin-top-value').val(parseInt(getComputedStyle(buttonBlockElem).marginTop));
    $('#button-margin-top-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginTop));
    $('#button-margin-right-value').val(parseInt(getComputedStyle(buttonBlockElem).marginRight));
    $('#button-margin-right-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginRight));
    $('#button-margin-bottom-value').val(parseInt(getComputedStyle(buttonBlockElem).marginBottom));
    $('#button-margin-bottom-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginBottom));
    $('#button-margin-left-value').val(parseInt(getComputedStyle(buttonBlockElem).marginLeft));
    $('#button-margin-left-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginLeft));

    $('#button-margin-top-value, #button-margin-top-value-range').on('input', function () {
      $(ths).css('margin-top', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-top:' + val + 'px !important;'
      });
      if ($(this).attr('id') == "button-margin-top-value") {
        $('#button-margin-top-value-range').val($(this).val());
      } else {
        $('#button-margin-top-value').val($(this).val());
      }
      makePreview();
    });
    $('#button-margin-right-value, #button-margin-right-value-range').on('input', function () {
      $(ths).css('margin-right', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-right:' + val + 'px !important;'
      });
      if ($(this).attr('id') == "button-margin-right-value") {
        $('#button-margin-right-value-range').val($(this).val());
      } else {
        $('#button-margin-right-value').val($(this).val());
      }
      makePreview();
    });
    $('#button-margin-bottom-value, #button-margin-bottom-value-range').on('input', function () {
      $(ths).css('margin-bottom', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-bottom:' + val + 'px !important;'
      });
      if ($(this).attr('id') == "button-margin-bottom-value") {
        $('#button-margin-bottom-value-range').val($(this).val());
      } else {
        $('#button-margin-bottom-value').val($(this).val());
      }
      makePreview();
    });
    $('#button-margin-left-value, #button-margin-left-value-range').on('input', function () {
      $(ths).css('margin-left', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-left:' + val + 'px !important;'
      });
      if ($(this).attr('id') == "button-margin-left-value") {
        $('#button-margin-left-value-range').val($(this).val());
      } else {
        $('#button-margin-left-value').val($(this).val());
      }
      makePreview();
    });

    //Вертикальное выравнивание
    if (getComputedStyle(buttonBlockElem).marginTop == 'auto') {
      buttonMarginBottom.checked = true;
      buttonMarginTop.checked = false;
      buttonMarginCenter.checked = false;
    } else if (getComputedStyle(buttonBlockElem).marginBottom == 'auto') {
      buttonMarginBottom.checked = false;
      buttonMarginTop.checked = true;
      buttonMarginCenter.checked = false;
    } else if (getComputedStyle(buttonBlockElem).marginTop == '0px' && getComputedStyle(buttonBlockElem).marginBottom == '0px') {
      buttonMarginBottom.checked = false;
      buttonMarginTop.checked = false;
      buttonMarginCenter.checked = true;
    }
    buttonMarginTop.onclick = function () {
      buttonBlockElem.style.marginTop = '0px';
      buttonBlockElem.style.marginBottom = 'auto';
      makePreview();
    }
    buttonMarginCenter.onclick = function () {
      buttonBlockElem.style.marginTop = '0px';
      buttonBlockElem.style.marginBottom = '0px';
      makePreview();
    }
    buttonMarginBottom.onclick = function () {
      buttonBlockElem.style.marginTop = 'auto';
      buttonBlockElem.style.marginBottom = '0px';
      makePreview();
    }

    //Выбор шрифта
    buttonFontFamilySelect.value = getComputedStyle(buttonElem).fontFamily;
    buttonFontFamilySelect.onchange = function () {
      buttonElem.style.fontFamily = buttonFontFamilySelect.value;
      makePreview();
    }

    if (getComputedStyle(buttonElem).fontWeight == '900') {
      buttonBold.checked = true;
    } else {
      buttonBold.checked = false;
    }
    buttonBold.onclick = function () {
      if (buttonBold.checked) {
        buttonElem.style.fontWeight = '900';
      } else {
        buttonElem.style.fontWeight = 'normal';
      }
      makePreview();
    }

    //Размер шрифта  
    $('#button-font-size-value').val(parseInt(getComputedStyle(buttonElem).fontSize));
    $('#button-font-size-value-range').val(parseInt(getComputedStyle(buttonElem).fontSize));
    $('#button-font-size-value, #button-font-size-value-range').on('input', function () {
      $(buttonElem).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      if ($(this).attr('id') == "button-font-size-value") {
        $('#button-font-size-value-range').val($(this).val());
      } else {
        $('#button-font-size-value').val($(this).val());
      }
      makePreview();
    });

    //Межстрочный интервал
    $('#button-line-height-value').val(parseInt(getComputedStyle(buttonElem).lineHeight));
    $('#button-line-height-value-range').val(parseInt(getComputedStyle(buttonElem).lineHeight));
    $('#button-line-height-value, #button-line-height-value-range').on('input', function () {
      $(buttonElem).css('line-height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      if ($(this).attr('id') == "button-line-height-value") {
        $('#button-line-height-value-range').val($(this).val());
      } else {
        $('#button-line-height-value').val($(this).val());
      }
      makePreview();
    });

    //Редактирование

    buttonEditor.onclick = function () {
      buttonWrapperElem.innerHTML = deleteLink(buttonWrapperElem);
      addFunctionalityToButtonElement($(ths).attr('id'));
      buttonElem = buttonWrapperElem.getElementsByClassName('button')[0];
      editor = buttonElem.getElementsByTagName('div')[0];
      editor.contentEditable = true;
      editor.focus();
      editor.onblur = function () {
        if (linkIndicator.innerHTML != 'отсутствует') {
          if (buttonTarget.checked == true) {
            buttonElem.outerHTML = '<a href="' + linkIndicator.innerHTML + '" target="_blank">' + buttonElem.outerHTML + '</a>';
            buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
            editor = buttonElem.getElementsByTagName('div')[0];
          } else {
            buttonElem.outerHTML = '<a href="' + linkIndicator.innerHTML + '" target="_self">' + buttonElem.outerHTML + '</a>';
            buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
            editor = buttonElem.getElementsByTagName('div')[0];
          }
        }
        editor.contentEditable = false;
        makePreview();
      }
    }

    //Превращение в ссылку
    if (buttonWrapperElem.getElementsByTagName('a')[0]) {
      linkIndicator.innerHTML = buttonWrapperElem.getElementsByTagName('a')[0].href;
    }

    if (
      buttonWrapperElem.getElementsByTagName('a')[0] &&
      buttonWrapperElem.getElementsByTagName('a')[0].target == '_blank'
    ) {
      buttonTarget.checked = true;
    } else {
      buttonTarget.checked = false;
    }

    buttonTarget.onclick = function () {
      if (buttonWrapperElem.getElementsByTagName('a')[0] && buttonTarget.checked == true) {
        buttonWrapperElem.getElementsByTagName('a')[0].target = '_blank';
      } else if (buttonWrapperElem.getElementsByTagName('a')[0] && buttonTarget.checked == false) {
        buttonWrapperElem.getElementsByTagName('a')[0].target = '_self';
      }
      makePreview();
    }

    buttonUrlExec.onclick = function () {
      if (buttonUrl.value != '') {
        if (buttonTarget.checked == true) {
          let button = deleteLink(buttonWrapperElem);
          buttonElem.outerHTML = '<a href="' + buttonUrl.value + '" target="_blank">' + button + '</a>';
          linkIndicator.innerHTML = buttonUrl.value;
          buttonUrl.value = '';
          buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
          editor = buttonElem.getElementsByTagName('div')[0];
        } else {
          let button = deleteLink(buttonWrapperElem);
          buttonElem.outerHTML = '<a href="' + buttonUrl.value + '" target="_self">' + button + '</a>';
          linkIndicator.innerHTML = buttonUrl.value;
          buttonUrl.value = '';
          buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
          editor = buttonElem.getElementsByTagName('div')[0];
        }
      } else {
        alert('Вы не ввели адрес ссылки');
      }
      makePreview();
    }

    //Цвет текста
    $('#button-color-value').on('change', function () {
      $(buttonElem).css('color', $(this).val());
      makePreview();
    });

    //Цвет кнопки

    buttonBackgroundRadioColor.onclick = function () {
      buttonBackgroundGradient.style.display = 'none';
      buttonBackgroundColor.style.display = 'block';
    }
    buttonBackgroundRadioGradient.onclick = function () {
      buttonBackgroundColor.style.display = 'none';
      buttonBackgroundGradient.style.display = 'block';
    }

    $('#button-main-color').on('change', function () {
      var opacity = $('#page-main-color-opacity').val() / 100;
      var color = hexToRGB($(this).val(), opacity);
      $(buttonElem).css('background', color);
      makePreview();
    });

    $('#button-gradient-color-1').on('change', function () {
      $(buttonElem).css('background', 'linear-gradient(' + parseInt($('#button-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#button-gradient-color-2').val() + ')');
      makePreview();
    });

    $('#button-gradient-color-2').on('change', function () {
      $(buttonElem).css('background', 'linear-gradient(' + parseInt($('#button-gradient-angle').val()) + 'deg, ' + $('#button-gradient-color-1').val() + ', ' + $(this).val() + ')');
      makePreview();
    });

    $('#button-gradient-angle').on('input', function () {
      $(buttonElem).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#button-gradient-color-1').val() + ', ' + $('#button-gradient-color-2').val() + ')');
      makePreview();
    });

    $('#button-main-color-opacity').on('input', function () {
      var opacity = $(this).val();
      var color = hexToRGB($('#button-main-color').val(), opacity / 100);
      $(buttonElem).css('background', color);
      makePreview();
    });

    /*Настройки тени текста*/
    document.getElementById('buttonTextShadowRadioOn').onclick = function () {
      document.getElementById('button-text-shadow').style.display = 'block';
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      makePreview();
    }
    document.getElementById('buttonTextShadowRadioOff').onclick = function () {
      document.getElementById('button-text-shadow').style.display = 'none';
      $(buttonElem).css('text-shadow', 'none');
      makePreview();
    }

    $('#button-text-shadow-horizontal-value, #button-text-shadow-horizontal-value-range').on('input', function () {
      var hv = $(this).val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      if ($(this).attr('id') == "button-text-shadow-horizontal-value") {
        $('#button-text-shadow-horizontal-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-horizontal-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-text-shadow-vertical-value, #button-text-shadow-vertical-value-range').on('input', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $(this).val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      if ($(this).attr('id') == "button-text-shadow-vertical-value") {
        $('#button-text-shadow-vertical-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-vertical-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-text-shadow-blur-value, #button-text-shadow-blur-value-range').on('input', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $(this).val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      if ($(this).attr('id') == "button-text-shadow-blur-value") {
        $('#button-text-shadow-blur-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-blur-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-text-shadow-opacity-value, #button-text-shadow-opacity-value-range').on('input', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $(this).val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      if ($(this).attr('id') == "button-text-shadow-opacity-value") {
        $('#button-text-shadow-opacity-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-opacity-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-text-shadow-color-value').on('change', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($(this).val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      makePreview();
    });
    /*Конец настроек тени текста*/

    //Настройки всех границ изображения

    buttonBorderRadioEvery.onclick = function () {
      buttonBorderAll.style.display = 'none';
      buttonBorderEvery.style.display = 'block';
    }
    buttonBorderRadioAll.onclick = function () {
      buttonBorderAll.style.display = 'block';
      buttonBorderEvery.style.display = 'none';
    }

    $('#button-border-value').val(parseInt($(buttonElem).css('border-width')));
    $('#button-border-value-range').val(parseInt($(buttonElem).css('border-width')));
    $('#button-border-radius').val(parseInt($(buttonElem).css('border-radius')));
    $('#button-border-radius-range').val(parseInt($(buttonElem).css('border-radius')));

    $('#button-border-value, #button-border-value-range').on('input', function () {
      $(buttonElem).css('border-width', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-value") {
        $('#button-border-value-range').val($(this).val());
      } else {
        $('#button-border-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-border-radius, #button-border-radius-range').on('input', function () {
      $(buttonElem).css('border-radius', $(this).val() + 'px');
      $(buttonElem).css('border-radius', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-radius") {
        $('#button-border-radius-range').val($(this).val());
      } else {
        $('#button-border-radius').val($(this).val());
      }
      makePreview();
    });

    $('#button-border-style').on('change', function () {
      $(buttonElem).css('border-style', $(this).find('option:selected').val());
      makePreview();
    });

    $('#button-border-color-value').on('change', function () {
      $(buttonElem).css('border-color', $(this).val());
      makePreview();
    });

    /*Настройки для верхней границы блока*/

    $('#button-border-top-value').val(parseInt($(buttonElem).css('border-top-width')));
    $('#button-border-top-value-range').val(parseInt($(buttonElem).css('border-top-width')));
    $('#button-border-left-top-radius').val(parseInt($(buttonElem).css('border-top-left-radius')));
    $('#button-border-left-top-radius-range').val(parseInt($(buttonElem).css('border-top-left-radius')));

    $('#button-border-top-value, #button-border-top-value-range').on('input', function () {
      $(buttonElem).css('border-top-width', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-top-value") {
        $('#button-border-top-value-range').val($(this).val());
      } else {
        $('#button-border-top-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-border-left-top-radius, #button-border-left-top-radius-range').on('input', function () {
      $(buttonElem).css('border-top-left-radius', $(this).val() + 'px');
      $(buttonElem).css('border-top-left-radius', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-left-top-radius") {
        $('#button-border-left-top-radius-range').val($(this).val());
      } else {
        $('#button-border-left-top-radius').val($(this).val());
      }
      makePreview();
    });
    $('#button-border-top-style-value').on('change', function () {
      $(buttonElem).css('border-top-style', $(this).find('option:selected').val());
      makePreview();
    });

    $('#button-border-top-color').on('change', function () {
      $(buttonElem).css('border-top-color', $(this).val());
      makePreview();
    });

    /*Конец блока*/

    /*Настройки для правой границы блока*/
    $('#button-border-right-value').val(parseInt($(buttonElem).css('border-right-width')));
    $('#button-border-right-value-range').val(parseInt($(buttonElem).css('border-right-width')));
    $('#button-border-right-radius').val(parseInt($(buttonElem).css('border-top-right-radius')));
    $('#button-border-right-radius-range').val(parseInt($(buttonElem).css('border-top-right-radius')));

    $('#button-border-right-value, #button-border-right-value-range').on('input', function () {
      $(buttonElem).css('border-right-width', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-right-value") {
        $('#button-border-right-value-range').val($(this).val());
      } else {
        $('#button-border-right-value').val($(this).val());
      }
      makePreview();
    });
    $('#button-border-right-radius, #button-border-right-radius-range').on('input', function () {
      $(buttonElem).css('border-top-right-radius', $(this).val() + 'px');
      $(buttonElem).css('border-top-right-radius', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-right-radius") {
        $('#button-border-right-radius-range').val($(this).val());
      } else {
        $('#button-border-right-radiuse').val($(this).val());
      }
      makePreview();
    });
    $('#button-border-right-style').on('change', function () {
      $(buttonElem).css('border-right-style', $(this).find('option:selected').val());
      makePreview();
    });

    $('#button-border-right-color').on('change', function () {
      $(buttonElem).css('border-right-color', $(this).val());
      makePreview();
    });

    /*Конец блока*/

    /*Настройки для нижней границы блока*/
    $('#button-border-bottom-value').val(parseInt($(buttonElem).css('border-bottom-width')));
    $('#button-border-bottom-value-range').val(parseInt($(buttonElem).css('border-bottom-width')));
    $('#button-border-bottom-right-radius').val(parseInt($(buttonElem).css('border-bottom-right-radius')));
    $('#button-border-bottom-right-radius-range').val(parseInt($(buttonElem).css('border-bottom-right-radius')));

    $('#button-border-bottom-value, #button-border-bottom-value-range').on('input', function () {
      $(buttonElem).css('border-bottom-width', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-bottom-value") {
        $('#button-border-bottom-value-range').val($(this).val());
      } else {
        $('#button-border-bottom-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-border-bottom-right-radius, #button-border-bottom-right-radius-range').on('input', function () {
      $(buttonElem).css('border-bottom-right-radius', $(this).val() + 'px');
      $(buttonElem).css('border-bottom-right-radius', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-bottom-right-radius") {
        $('#button-border-bottom-right-radius-range').val($(this).val());
      } else {
        $('#button-border-bottom-right-radius').val($(this).val());
      }
      makePreview();
    });

    $('#button-border-bottom-style').on('change', function () {
      $(buttonElem).css('border-bottom-style', $(this).find('option:selected').val());
      makePreview();
    });

    $('#button-border-bottom-color').on('change', function () {
      $(buttonElem).css('border-bottom-color', $(this).val());
      makePreview();
    });

    /*Конец блока*/

    /*Настройки для левой границы блока*/
    $('#button-border-left-value').val(parseInt($(buttonElem).css('border-left-width')));
    $('#button-border-left-value-range').val(parseInt($(buttonElem).css('border-left-width')));
    $('#button-border-bottom-left-radius').val(parseInt($(buttonElem).css('border-bottom-left-radius')));
    $('#button-border-bottom-left-radius-range').val(parseInt($(buttonElem).css('border-bottom-left-radius')));

    $('#button-border-left-value, #button-border-left-value-range').on('input', function () {
      $(buttonElem).css('border-left-width', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-left-value") {
        $('#button-border-left-value-range').val($(this).val());
      } else {
        $('#button-border-left-value').val($(this).val());
      }
      makePreview();
    });
    $('#button-border-bottom-left-radius, #button-border-bottom-left-radius-range').on('input', function () {
      $(buttonElem).css('border-bottom-left-radius', $(this).val() + 'px');
      $(buttonElem).css('border-bottom-left-radius', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-bottom-left-radius") {
        $('#button-border-bottom-left-radius-range').val($(this).val());
      } else {
        $('#button-border-bottom-left-radius').val($(this).val());
      }
      makePreview();
    });

    $('#button-border-left-style').on('change', function () {
      $(buttonElem).css('border-left-style', $(this).find('option:selected').val());
      makePreview();
    });

    $('#button-border-left-color').on('change', function () {
      $(buttonElem).css('border-left-color', $(this).val());
      makePreview();
    });

    /*Конец блока*/

    /*Настройки теней*/
    document.getElementById('buttonShadowRadioOn').onclick = function () {
      document.getElementById('button-shadow').style.display = 'block';
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      makePreview();
    }
    document.getElementById('buttonShadowRadioOff').onclick = function () {
      document.getElementById('button-shadow').style.display = 'none';
      $(buttonElem).css('box-shadow', 'none');
      makePreview();
    }

    $('#button-shadow-horizontal-value, #button-shadow-horizontal-value-range').on('input', function () {
      var hv = $(this).val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      if ($(this).attr('id') == "button-shadow-horizontal-value") {
        $('#button-shadow-horizontal-value-range').val($(this).val());
      } else {
        $('#button-shadow-horizontal-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-shadow-vertical-value, #button-shadow-vertical-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $(this).val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      if ($(this).attr('id') == "button-shadow-vertical-value") {
        $('#button-shadow-vertical-value-range').val($(this).val());
      } else {
        $('#button-shadow-vertical-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-shadow-blur-value, #button-shadow-blur-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $(this).val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      if ($(this).attr('id') == "button-shadow-blur-value") {
        $('#button-shadow-blur-value-range').val($(this).val());
      } else {
        $('#button-shadow-blur-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-shadow-spread-value, #button-shadow-spread-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $(this).val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      if ($(this).attr('id') == "button-shadow-spread-value") {
        $('#button-shadow-spread-value-range').val($(this).val());
      } else {
        $('#button-shadow-spread-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-shadow-opacity-value, #button-shadow-opacity-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $(this).val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      if ($(this).attr('id') == "button-shadow-opacity-value") {
        $('#button-shadow-opacity-value-range').val($(this).val());
      } else {
        $('#button-shadow-opacity-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-shadow-color-value').on('change', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($(this).val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      makePreview();
    });

    $('#button-shadow-inset-value').on('change', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $(this).prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      makePreview();
    });
    /*Конец настроек теней*/

    //Высота кнопки
    if (getComputedStyle(buttonWrapperElem).height == 'auto') {
      autoHeight.checked = true;
    } else {
      autoHeight.checked = false;
    }
    $('#button-height-value').val(parseInt($(buttonWrapperElem).css('height')));
    $('#button-height-value-range').val(parseInt($(buttonWrapperElem).css('height')));

    autoHeight.onclick = function () {
      if (autoHeight.checked == true) {
        buttonWrapperElem.style.height = 'auto';
        makePreview();
      }
    }

    $('#button-height-value, #button-height-value-range').on('input', function () {
      if (autoHeight.checked == false) {
        $(buttonWrapperElem).css('height', $(this).val() + 'px');
        if ($(this).attr('id') == "button-height-value") {
          $('#button-height-value-range').val($(this).val());
        } else {
          $('#button-height-value').val($(this).val());
        }
      }
      makePreview();
    });

    //Ширина кнопки
    if (getComputedStyle(buttonWrapperElem).width == '100%') {
      autoWidth.checked = true;
    } else {
      autoWidth.checked = false;
    }
    $('#button-width-value').val(parseInt($(buttonWrapperElem).css('width')));
    $('#button-width-value-range').val(parseInt($(buttonWrapperElem).css('width')));

    autoWidth.onclick = function () {
      if (autoWidth.checked == true) {
        buttonWrapperElem.style.width = '100%';
        makePreview();
      }
    }

    $('#button-width-value, #button-width-value-range').on('input', function () {
      if (autoWidth.checked == false) {
        $(buttonWrapperElem).css('width', $(this).val() + 'px');
        if ($(this).attr('id') == "button-width-value") {
          $('#button-width-value-range').val($(this).val());
        } else {
          $('#button-width-value').val($(this).val());
        }
      }
      makePreview();
    });


    /*Настройка анимации*/

    $('#button-animation-type-value').on('change', function () {
      if ($(this) != "none") {
        $(buttonElem).css('animation-name', $(this).val());
        $(buttonElem).css('animation-delay', $('#button-animation-delay-value').val() + 's');
        $(buttonElem).css('animation-duration', $('#button-animation-duration-value').val() + 's');
      }
      makePreview();
    });

    $('#button-animation-delay-value, #button-animation-delay-value-range').on('input', function () {
      $(buttonElem).css('animation-delay', $(this).val() + 's');
      if ($(this).attr('id') == "button-animation-delay-value") {
        $('#button-animation-delay-value-range').val($(this).val());
      } else {
        $('#button-animation-delay-value').val($(this).val());
      }
      makePreview();
    });

    $('#button-animation-duration-value, #button-animation-duration-value-range').on('input', function () {
      $(buttonElem).css('animation-duration', $(this).val() + 's');
      if ($(this).attr('id') == "button-animation-duration-value") {
        $('#button-animation-duration-value-range').val($(this).val());
      } else {
        $('#button-animation-duration-value').val($(this).val());
      }
      makePreview();
    });

    /*Конец настроек анимации*/
    /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/


  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('button-display-none-value').checked = true;
  } else {
    document.getElementById('button-display-none-value').checked = false;
  }

  $('#button-display-none-value, #button-timeout-hour-value, #button-timeout-hour-value-range, #button-timeout-minute-value, #button-timeout-minute-value-range, #button-timeout-second-value, #button-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');

    var hours = $('#button-timeout-hour-value').val() * 3600;
    var minute = $('#button-timeout-minute-value').val() * 60;
    var second = parseInt($('#button-timeout-second-value').val());

    var time = hours + minute + second;

    time = time * 1000;


    if (document.getElementById('button-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }



    if ($(this).attr('id') == "button-timeout-hour-value") {
      $('#button-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "button-timeout-hour-value-range") {
      $('#button-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "button-timeout-minute-value") {
      $('#button-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "button-timeout-minute-value-range") {
      $('#button-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "button-timeout-second-value") {
      $('#button-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "button-timeout-second-value-range") {
      $('#button-timeout-second-value').val($(this).val());
    }
    makePreview();

  });

  /*Конец блока таймаута*/
  });
})();



function deleteLink(el) {
  let content = el.innerHTML;
  const reOpen = new RegExp('<a[^>]*>', 'gi');
  const reClose = new RegExp('</a[^>]*>', 'gi');
  content = content.replace(reOpen, "");
  content = content.replace(reClose, "");
  return content;
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
