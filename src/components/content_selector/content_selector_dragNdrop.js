import './content_selector.css';
import { makePreview, getRandom } from '../global/global.js';
import { Sortable } from '../global/Sortable.js';

(function () {
  'use strict';
  let content, style;

  Sortable.create(contentSelector, {
    group: {
      name: 'content-selector',
      pull: 'clone'
    },
    sort: true,
    animation: 150,
    ghostClass: 'green-background-class',
    filter: '.resizer, .handle, .block-resizer',
    onStart: function (evt) {
      $('.handle').css('display', 'none');
      $('.main-selector').each(function (ind, el) {
        $(el).find('> .content:not(:last)').addClass('border-hover');
      });
      $('.content-selector').each(function (ind, el) {
        $(el).find('> .content:not(:last)').addClass('border-hover-content');
      });
      $('.content-block-settings').css('display', 'none');
    },
    onEnd: function (e) {
      /*Разместить*/
      $('.border-hover').removeClass('border-hover');
      $('.border-hover-content').removeClass('border-hover-content');
      $('.handle').css('display', 'block');
      if (e.target != e.to) {
        switch (e.item.id) {
          case 'content-selector-1': {
            var selector1 = '<div id="content_selector' + getRandom() + '" class="col-md-12 content-selector">' +
              '<div class="content-block-settings"> ' +
              '<div class="copy-content">' +
              '<span class="glyphicon glyphicon-duplicate"></span>' +
              '</div> ' +
              '<div class="remove-content">' +
              '<span class="glyphicon glyphicon-remove"></span>' +
              '</div>' +
              '<div class="add-content-block">' +
              '<span class="glyphicon glyphicon-plus"></span>' +
              '</div>' +
              '<div class="remove-content-block">' +
              '<span class="glyphicon glyphicon-minus"></span>' +
              '</div>' +
              '<div class="settings">' +
              '<span class="glyphicon glyphicon-cog"></span>' +
              '</div>' +
              '</div>' +
              '<div class="col-md-12 content" id="content' + getRandom() + '"></div>' +
              '<div class="block-resizer"></div>' +
              '<div class="resizer"></div> ' +
              '</div>';
            $(e.item).replaceWith(selector1);
            var id = $(selector1).find('.content').attr('id');

            //Драг н дроп из контентового блока
            Sortable.create($("#" + id + "").get(0), {
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
            break;
          }
          case 'content-selector-2': {
            var selector2 = '<div id="content_selector' + getRandom() + '" class="col-md-12 content-selector">' +
              '<div class="content-block-settings"> ' +
              '<div class="copy-content">' +
              '<span class="glyphicon glyphicon-duplicate"></span>' +
              '</div> ' +
              '<div class="remove-content">' +
              '<span class="glyphicon glyphicon-remove"></span>' +
              '</div>' +
              '<div class="add-content-block">' +
              '<span class="glyphicon glyphicon-plus"></span>' +
              '</div>' +
              '<div class="remove-content-block">' +
              '<span class="glyphicon glyphicon-minus"></span>' +
              '</div>' +
              '<div class="settings">' +
              '<span class="glyphicon glyphicon-cog"></span>' +
              '</div>' +
              '</div>' +
              '<div class="col-md-6 content" id="content' + getRandom() + '">' +
              '<div class="handle"></div>' +
              '</div>' +
              '<div class="col-md-6 content" id="content' + getRandom() + '"></div>' +
              '<div class="block-resizer"></div>' +
              '<div class="resizer"></div>' +
              '</div>';
            $(e.item).replaceWith(selector2);

            $(selector2).find('.content').each(function () {
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
            break;
          }
          case 'content-selector-3': {
            var selector3 = '<div id="content_selector' + getRandom() + '" class="col-md-12 content-selector">' +
              '<div class="content-block-settings"> ' +
              '<div class="copy-content">' +
              '<span class="glyphicon glyphicon-duplicate"></span>' +
              '</div> ' +
              '<div class="remove-content">' +
              '<span class="glyphicon glyphicon-remove"></span>' +
              '</div>' +
              '<div class="add-content-block">' +
              '<span class="glyphicon glyphicon-plus"></span>' +
              '</div>' +
              '<div class="remove-content-block">' +
              '<span class="glyphicon glyphicon-minus"></span>' +
              '</div>' +
              '<div class="settings">' +
              '<span class="glyphicon glyphicon-cog"></span>' +
              '</div>' +
              '</div>' +
              '<div class="col-md-4 content" id="content' + getRandom() + '">' +
              '<div class="handle"></div>' +
              '</div>' +
              '<div class="col-md-4 content" id="content' + getRandom() + '">' +
              '<div class="handle"></div>' +
              '</div> ' +
              '<div class="col-md-4 content" id="content' + getRandom() + '"></div>' +
              '<div class="block-resizer"></div>' +
              '<div class="resizer"></div>' +
              '</div>';
            $(e.item).replaceWith(selector3);
            $(selector3).find('.content').each(function () {
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
            break;
          }
          case 'content-selector-4': {
            var selector4 = '<div id="content_selector' + getRandom() + '" class="col-md-12 content-selector">' +
              '<div class="content-block-settings"> ' +
              '<div class="copy-content">' +
              '<span class="glyphicon glyphicon-duplicate"></span>' +
              '</div> ' +
              '<div class="remove-content">' +
              '<span class="glyphicon glyphicon-remove"></span>' +
              '</div>' +
              '<div class="add-content-block">' +
              '<span class="glyphicon glyphicon-plus"></span>' +
              '</div>' +
              '<div class="remove-content-block">' +
              '<span class="glyphicon glyphicon-minus"></span>' +
              '</div>' +
              '<div class="settings">' +
              '<span class="glyphicon glyphicon-cog"></span>' +
              '</div>' +
              '</div>' +
              '<div class="col-md-3 content" id="content' + getRandom() + '">' +
              '<div class="handle"></div>' +
              '</div>' +
              '<div class="col-md-3 content" id="content' + getRandom() + '">' +
              '<div class="handle"></div>' +
              '</div>' +
              '<div class="col-md-3 content" id="content' + getRandom() + '">' +
              '<div class="handle"></div>' +
              '</div> ' +
              '<div class="col-md-3 content" id="content' + getRandom() + '"></div>' +
              '<div class="block-resizer"></div>' +
              '<div class="resizer"></div>' +
              '</div>';
            $(e.item).replaceWith(selector4);
            $(selector4).find('.content').each(function () {
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
            break;
          }
        }
        makePreview();
      }
      $('.handle').resizer();
      $('.resizer').resizer_s();
      $('.block-resizer').block_resizer();
      $('.content-block-settings').css('display', 'flex');
    },
  });
})();
