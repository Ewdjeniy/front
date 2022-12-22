import './main_selector.css';
import { makePreview, getRandom } from '../global/global.js';
import { Sortable } from '../global/Sortable.js';


(function () {
  'use strict';
  let content, style;

  Sortable.create(mainSelector, {
    group: {
      name: 'main-selector',
      pull: 'clone',
    },
    filter: '.resizer, .handle, .block-resizer, .textBlock',
    sort: true,
    animation: 150,
    ghostClass: 'green-background-class',
    onStart: function (e) {
      $('#left-sidebar').hide();
      $('.block-settings').css('display', 'none');
    },
    onEnd: function (e) {
      $('#left-sidebar').show();
      if (e.target != e.to) {
        switch (e.item.id) {
          case 'main-selector-1': {
            var selector1 = '<div id="main_selector' + getRandom() + '" class="row main-selector">' +
              '<div class="block-settings">' +
              '<div class="copy">' +
              '<span class="glyphicon glyphicon-duplicate"></span>' +
              '</div> <div class="remove">' +
              '<span class="glyphicon glyphicon-remove"></span>' +
              '</div><div class="add-block">' +
              '<span class="glyphicon glyphicon-plus"></span>' +
              '</div>' +
              '<div class="remove-block">' +
              '<span class="glyphicon glyphicon-minus"></span>' +
              '</div><div class="main-block-settings">' +
              '<span class="glyphicon glyphicon-cog"></span>' +
              '</div>' +
              '</div>' +
              '<div class="col-xs-12 col-sm-12 col-md-12 content" id="content' + getRandom() + '" style="min-height:80px;"></div>' +
              '<div class="block-resizer"></div>' +
              '<div class="resizer"></div>' +
              '</div>';
            $(e.item).replaceWith(selector1);

            //драг н дроп из основного
            var id = $(selector1).find('.content').attr('id');

            Sortable.create($("#" + id + "").get(0), {
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
                  textEditorPanel.style.width = (textBlockElem.getBoundingClientRect().width - 2) + 'px';
                  init(iframe, content, style);
                  iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
                  addFunctionalityToIframe($(evt.item).attr('id'));
                }
                makePreview();
              }
            });
            break;
          }
          case 'main-selector-2': {
            var selector2 = '<div id="main_selector' + getRandom() + '" class="row main-selector">' +
              '<div class="block-settings">' +
              '<div class="copy">' +
              '<span class="glyphicon glyphicon-duplicate"></span>' +
              '</div> <div class="remove">' +
              '<span class="glyphicon glyphicon-remove"></span>' +
              '</div><div class="add-block">' +
              '<span class="glyphicon glyphicon-plus"></span>' +
              '</div>' +
              '<div class="remove-block">' +
              '<span class="glyphicon glyphicon-minus"></span>' +
              '</div><div class="main-block-settings">' +
              '<span class="glyphicon glyphicon-cog"></span>' +
              '</div>' +
              '</div>' +
              '<div class="col-xs-12 col-sm-6 col-md-6 content" id="content' + getRandom() + '">' +
              '<div class="handle"></div> ' +
              '</div>' +
              '<div class="col-xs-12 col-sm-6 col-md-6 content" id="content' + getRandom() + '"></div>' +
              '<div class="block-resizer"></div>' +
              '<div class="resizer"></div> ' +
              '</div>';
            $(e.item).replaceWith(selector2);

            $(selector2).find('.content').each(function () {
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
                  makePreview();
                }
              });
            });

            break;
          }
          case 'main-selector-3': {
            var selector3 = '<div id="main_selector' + getRandom() + '" class="row main-selector">' +
              '<div class="block-settings">' +
              '<div class="copy">' +
              '<span class="glyphicon glyphicon-duplicate"></span>' +
              '</div> <div class="remove">' +
              '<span class="glyphicon glyphicon-remove"></span>' +
              '</div><div class="add-block">' +
              '<span class="glyphicon glyphicon-plus"></span>' +
              '</div>' +
              '<div class="remove-block">' +
              '<span class="glyphicon glyphicon-minus"></span>' +
              '</div><div class="main-block-settings">' +
              '<span class="glyphicon glyphicon-cog"></span>' +
              '</div>' +
              '</div>' +
              '<div class="col-xs-12 col-sm-4 col-md-4 content" id="content' + getRandom() + '" style="min-height:80px;">' +
              '<div class="handle"></div></div>' +
              '<div class="col-xs-12 col-sm-4 col-md-4 content" id="content' + getRandom() + '" style="min-height:80px;">' +
              '<div class="handle"></div></div>' +
              '<div class="col-xs-12 col-sm-4 col-md-4 content" id="content' + getRandom() + '" style="min-height:80px;">' +
              '</div>' +
              '<div class="block-resizer"></div>' +
              '<div class="resizer"></div> ' +
              '</div>';
            $(e.item).replaceWith(selector3);
            $(selector3).find('.content').each(function () {
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
                  makePreview();
                }
              });
            });
            break;
          }
          case 'main-selector-4': {
            var selector4 = '<div id="main_selector' + getRandom() + '" class="row main-selector">' +
              '<div class="block-settings">' +
              '<div class="copy">' +
              '<span class="glyphicon glyphicon-duplicate"></span>' +
              '</div> <div class="remove">' +
              '<span class="glyphicon glyphicon-remove"></span>' +
              '</div><div class="add-block">' +
              '<span class="glyphicon glyphicon-plus"></span>' +
              '</div>' +
              '<div class="remove-block">' +
              '<span class="glyphicon glyphicon-minus"></span>' +
              '</div><div class="main-block-settings">' +
              '<span class="glyphicon glyphicon-cog"></span>' +
              '</div>' +
              '</div>' +
              '<div class="col-xs-12 col-sm-3 col-md-3 content" id="content' + getRandom() + '" style="min-height:80px;">' +
              '<div class="handle"></div></div>' +
              '<div class="col-xs-12 col-sm-3 col-md-3 content" id="content' + getRandom() + '" style="min-height:80px;">' +
              '<div class="handle"></div></div>' +
              '<div class="col-xs-12 col-sm-3 col-md-3 content" id="content' + getRandom() + '" style="min-height:80px;">' +
              '<div class="handle"></div></div>' +
              '<div class="col-xs-12 col-sm-3 col-md-3 content" id="content' + getRandom() + '" style="min-height:80px;">' +
              '</div>' +
              '<div class="block-resizer"></div>' +
              '<div class="resizer"></div> ' +
              '</div>';
            $(e.item).replaceWith(selector4);
            $(selector4).find('.content').each(function () {
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
      $('.block-settings').css('display', 'flex');
    },
  });

  $.fn.block_resizer = function () {

    var offset;
    var relativeX;
    var currHandle;
    var text_editor_id;

    $(this).on('mousedown', function (e) {

      currHandle = $(this);

      text_editor_id = $(e.target).parents('.text-editor-module').children('.text-editor').find('iframe').attr('id');

      var text_editor_height = $(e.target).parents('.text-editor-module').height();

      $(e.target).parents('.text-editor-module').css('height', text_editor_height + 8);

      $('#' + text_editor_id + '').hide();

      $('html').on('mousemove', function (e) {

        offset = currHandle.parent().offset();
        relativeX = (e.pageX - offset.left);

        var teta = parseInt(currHandle.parent().css('padding-left')) + parseInt(currHandle.parent().css('padding-right')) +
          parseInt(currHandle.parent().css('border-right-width')) + parseInt(currHandle.parent().css('border-left-width'));

        var delta = (currHandle.parent().width() + teta) - relativeX;
        var deltaPercentage = delta / currHandle.parent().width() * 100;

        if ((deltaPercentage > 3) && (currHandle.parent().width() > 100)) {
          currHandle.parent().css('width', currHandle.parent().width() - 50 + teta + 'px');
        } else if ((deltaPercentage < -3) && (currHandle.parent().width() > 100)) {
          currHandle.parent().css('width', currHandle.parent().width() + 50 + teta + 'px');
        }

      });

    });
    $('html').on('mouseup', function () {
      $('.container').off('mousemove');
      $('#' + text_editor_id + '').show();
      if ($(currHandle).parent().hasClass('main-selector')) {
        $('#main-block-width-value').val($(currHandle).parent().width());
        $('#main-block-width-value-range').val($(currHandle).parent().width());
        makePreview();
      }
    });
  };

  $('.block-resizer').block_resizer();

  $.fn.resizer_s = function () {

    var offset;
    var relativeX;
    var currHandle2;

    $(this).on('mousedown', function () {

      currHandle2 = $(this);
      const parentEl = document.getElementById(currHandle2.parent()[0].id);
      const parentContents = parentEl.getElementsByClassName('content');

      $('html').on('mousemove', function (e) {
        var total = parseFloat(currHandle2.parent().children('.content').css('padding-bottom'));
        var paddings = parseFloat($(parentEl).css('padding-top')) + parseFloat($(parentEl).css('padding-bottom')) +
          parseFloat($(parentEl).css('border-top-width')) + parseFloat($(parentEl).css('border-bottom-width'));
        var height = parseInt(getComputedStyle(parentContents[0]).height);
        var topPosition = currHandle2.parent().children('.content').offset();
        var innerHeight = currHandle2.parent().children('.content').height();
        var delta = e.pageY - total - topPosition.top - innerHeight;

        
        if (delta > 40) {
          //currHandle2.parent().css('min-height', currHandle2.parent().height() + paddings + 40 + 'px');
          for (let i = 0; i < parentContents.length; i++) {
            parentContents[i].style.minHeight = height + paddings + 20 + 'px';
          }
        } else if (delta < -40 && parseInt(getComputedStyle(parentContents[0]).minHeight) > 88) {
          //currHandle2.parent().css('min-height', currHandle2.parent().height() + paddings - 40 + 'px');
          for (let i = 0; i < parentContents.length; i++) {
            parentContents[i].style.minHeight = height + paddings - 20 + 'px';
          }
        }
      });

    });

    $('html').on('mouseup', function () {
      $('html').off('mousemove');
      makePreview();
    });

  };

  $.fn.resizer = function () {

    var offset;
    var relativeX;
    var currHandle;

    $(this).on('mousedown', function (e) {
      currHandle = $(this);

      $('#mainArea').on('mousemove', function (e) {

        offset = currHandle.parent().offset();
        relativeX = (e.pageX - offset.left);

        var dim_curr = currHandle.parent().attr('class');
        var dim_curr = dim_curr.split(' ');
        var dim_next = currHandle.parent().next().attr('class');
        var dim_next = dim_next.split(' ');

        var dimCurrNum, dimNextNum;

        for (var i = 0; i < dim_curr.length; i++) {
          if (dim_curr[i].includes('col-md-')) {
            dimCurrNum = dim_curr[i].split('-')[2];
          }

        }

        for (var i = 0; i < dim_next.length; i++) {
          if (dim_next[i].includes('col-md-')) {
            dimNextNum = dim_next[i].split('-')[2];
          }

        }


        var teta = parseInt(currHandle.parent().css('padding-left')) + parseInt(currHandle.parent().css('padding-right'));

        var delta = (currHandle.parent().width() + teta) - relativeX - $('.handle').width() / 2;
        var deltaPercentage = delta / currHandle.parent().parent().width() * 100;

        if ((deltaPercentage > 7) && (currHandle.parent().width() > 100)) {

          currHandle.parent().removeClass('col-md-' + dimCurrNum + '');
          currHandle.parent().addClass('col-md-' + (dimCurrNum - 1) + '');
          currHandle.parent().next().removeClass('col-md-' + dimNextNum + '');
          currHandle.parent().next().addClass('col-md-' + ((parseInt)(dimNextNum) + 1) + '');
        } else if ((deltaPercentage < -7) && (currHandle.parent().next().width() > 100)) {
          currHandle.parent().removeClass('col-md-' + dimCurrNum + '');
          currHandle.parent().addClass('col-md-' + ((parseInt)(dimCurrNum) + 1) + '');
          currHandle.parent().next().removeClass('col-md-' + dimNextNum + '');
          currHandle.parent().next().addClass('col-md-' + ((parseInt)(dimNextNum) - 1) + '');
        }
      });

    });
    $('html').on('mouseup', function () {
      $('#mainArea').off('mousemove');
      makePreview();
    });
  };

  $('.handle').resizer();

})();
