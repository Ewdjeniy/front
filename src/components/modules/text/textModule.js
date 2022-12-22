import './text.css';
import { makePreview, getRandom } from '../../global/global.js';

function dragText(e) {
  const textBlockId = 'text' + getRandom();
  const module = '<div id="' + textBlockId + '" class="textBlock">'+
                      '<div class="textWrapper" style="width: 100%;">'+
                        '<div class="image_settings text_settings">'+
                          '<span class="glyphicon glyphicon-cog textSet"></span>'+
                          '<span class="glyphicon glyphicon-arrow-left"></span>'+
                          '<span class="glyphicon glyphicon-align-center"></span>'+
                          '<span class="glyphicon glyphicon-arrow-right"></span>'+
                          '<span class="glyphicon glyphicon-duplicate copyText"></span>'+
                          '<span class="glyphicon glyphicon-remove"></span>'+
                        '</div>'+
                        '<div class="text-editor">'+
                          '<div class="text-editor-panel">'+
                            '<span class="glyphicon glyphicon-bold bold" title="Полужирный"></span>'+
                            '<span class="glyphicon glyphicon-italic ital" title="Курсив"></span>'+
                            '<span class="under" title="Подчеркнутый">U</span>'+
                            '<span class="through" title="Зачёркнутый">S</span>'+
                            '<span class="glyphicon glyphicon-link textLink" title="Вставить ссылку"></span>'+
                            '<span class="glyphicon glyphicon-align-left left" title="Выровнять по левому краю"></span>'+
                            '<span class="glyphicon glyphicon-align-center center" title="Выровнять по центру"></span>'+
                            '<span class="glyphicon glyphicon-align-justify justify" title="Выровнять текст по ширине"></span>'+
                            '<span class="glyphicon glyphicon-align-right right" title="Выровнять по правому краю"></span>'+
                          '</div>'+
                        '</div>'+
                        '<div class="text">Text example<br>Пример текста</div>'+
                        '<div class="resizerTextXY"></div>'+
                        '<div class="resizerX"></div>'+
                      '</div>'+
                   '</div>'
  $(e.item).replaceWith(module);
  addFunctionalityToTextElement(textBlockId);
}

function init(iframe, content, style) {
  var isGecko = navigator.userAgent.toLowerCase().indexOf("gecko") != -1;
  var iWin = (isGecko) ? iframe.contentWindow : iframe.window;
  var iDoc = (isGecko) ? iframe.contentDocument : iframe.document;
  var iHTML;

  iHTML = "<html><head>";
  iHTML = '<link href="https://fonts.googleapis.com/css?family=Montserrat:900|Roboto:900|Tangerine&amp;display=swap" rel="stylesheet">';
  iHTML += "<style>";
  iHTML += 'html{font-size: 10px;} h1{font-size: 3.2rem; font-weight: normal;} h2{font-size: 2.4rem; font-weight: normal;} h3{font-size: 2rem; font-weight: normal;} h4{font-size: 1.6rem; font-weight: normal;} h5{font-size: 1.3rem; font-weight: normal;} h6{font-size: 1.1rem; font-weight: normal;}';
  iHTML += style;
  iHTML += "</style></head>";
  iHTML += "<body>";
  iHTML += content;
  iHTML += "</body>";
  iHTML += "</html>";

  iDoc.open();
  iDoc.write(iHTML);
  iDoc.close();

  if (!iDoc.designMode) alert("Визуальный режим редактирования не поддерживается Вашим браузером");
  else iDoc.designMode = (isGecko) ? "on" : "On";
}

function addFunctionalityToIframe(id) {
  var textBlockElem = document.getElementById(id);
  var textElem = textBlockElem.getElementsByClassName('text')[0];
  var iframe = textBlockElem.getElementsByTagName('iframe')[0].contentWindow;
  var bold = textBlockElem.getElementsByClassName('bold')[0];
  var ital = textBlockElem.getElementsByClassName('ital')[0];
  var under = textBlockElem.getElementsByClassName('under')[0];
  var through = textBlockElem.getElementsByClassName('through')[0];
  var left = textBlockElem.getElementsByClassName('left')[0];
  var right = textBlockElem.getElementsByClassName('right')[0];
  var justify = textBlockElem.getElementsByClassName('justify')[0];
  var center = textBlockElem.getElementsByClassName('center')[0];
  var textLink = textBlockElem.getElementsByClassName('textLink')[0];

  bold.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("bold", null, "");
	textElem.innerHTML = iframe.document.body.innerHTML;
	makePreview();
  }
  ital.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("italic", null, "");
	textElem.innerHTML = iframe.document.body.innerHTML;
	makePreview();
  }
  under.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("underline", null, "");
	textElem.innerHTML = iframe.document.body.innerHTML;
	makePreview();
  }
  through.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("strikeThrough", null, "");
	textElem.innerHTML = iframe.document.body.innerHTML;
	makePreview();
  }
  textLink.onclick = function () {
    var name = prompt('Название', '');
    var url = prompt('Адрес', '');
    iframe.document.execCommand("insertHTML", false, '<a href="'+ url +'">' + name +'</a>');
	iframe.document.execCommand("insertText", false, " ");
	textElem.innerHTML = iframe.document.body.innerHTML;
	makePreview();
  }
  left.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("justifyLeft", null, "");
	textElem.innerHTML = iframe.document.body.innerHTML;
	makePreview();
  }
  right.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("justifyRight", null, "");
	textElem.innerHTML = iframe.document.body.innerHTML;
	makePreview();
  }
  justify.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("justifyFull", null, "");
	textElem.innerHTML = iframe.document.body.innerHTML;
	makePreview();
  }
  center.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("justifyCenter", null, "");
	textElem.innerHTML = iframe.document.body.innerHTML;
	makePreview();
  }
}

function addFunctionalityToTextElement(id) {
  var imgBlockElem = document.getElementById(id);
  var imgWrapperElem = imgBlockElem.getElementsByClassName('textWrapper')[0];
  var imgSettings = imgBlockElem.getElementsByClassName('image_settings')[0];
  var resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerTextXY')[0];
  var resizerX_Elem = imgBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = imgBlockElem.getElementsByClassName('glyphicon')[0];
  var arrowLeftElem = imgBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowCenterElem = imgBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowRightElem = imgBlockElem.getElementsByClassName('glyphicon')[3];
  var imgCopyElem = imgBlockElem.getElementsByClassName('glyphicon')[4];
  var imgDeleteElem = imgBlockElem.getElementsByClassName('glyphicon')[5];
  var textSettings = imgBlockElem.getElementsByClassName('textSet')[0];
  var textCopy = imgBlockElem.getElementsByClassName('copyText')[0];
  var iframe = null;
  var textElem = imgBlockElem.getElementsByClassName('text')[0];
  var textEditor = imgBlockElem.getElementsByClassName('text-editor')[0];
  var textEditorPanel = imgBlockElem.getElementsByClassName('text-editor-panel')[0];
  var rightSidebarEl = document.getElementById('rightSidebar');



  var addRedactor = function () {
    var iframeElem = document.createElement('iframe');
	iframeElem.className = 'textIframe';
    var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
    styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
	styleElem += 'font-weight:' + getComputedStyle(textElem).fontWeight + ';';
    styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
    styleElem += 'color:' + getComputedStyle(textElem).color + ';';
    styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
    var style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';

    iframeElem.width = '100%';
    iframeElem.height = textElem.getBoundingClientRect().height + 'px';
    iframeElem.frameborder = '0px';
    iframeElem.scrolling = 'no';
    textElem.style.display = 'none';
    textEditor.style.display = 'block';
    $(iframeElem).insertAfter(textEditorPanel);
    init(iframeElem, textElem.innerHTML, style);
    addFunctionalityToIframe(id);
    iframe = iframeElem;
    iframe.contentWindow.document.body.onkeydown = function (e) {
      iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
	  textElem.innerHTML = iframe.contentWindow.document.body.innerHTML;
	  makePreview();
    }
	iframe.contentWindow.document.body.onkeyup = function (e) {
	  textElem.innerHTML = iframe.contentWindow.document.body.innerHTML;
	  makePreview();
    }
    document.addEventListener('mousedown', deleteRedactor);
    window.addEventListener('scroll', redactorScroll);
    textElem.removeEventListener('click', addRedactor);
  }

  var redactorScroll = function () {
    var textEditorPanel = imgBlockElem.getElementsByClassName('text-editor-panel')[0];
    var imgWrapperElem = imgBlockElem.getElementsByClassName('textWrapper')[0];
    var parent = document.getElementById($(imgBlockElem).attr('id'));

    if (
      parent.getBoundingClientRect().top <= 0 &&
      textEditorPanel.getBoundingClientRect().top + textEditorPanel.getBoundingClientRect().height <
      parent.getBoundingClientRect().top + parent.getBoundingClientRect().height
    ) {
      textEditorPanel.style.visibility = 'visible';
      textEditorPanel.style.width = (imgWrapperElem.getBoundingClientRect().width - 2) + 'px';
      textEditorPanel.style.position = 'fixed';
      textEditorPanel.style.top = '0';
      imgWrapperElem.style.paddingTop = getComputedStyle(textEditorPanel).height;
    } else if (
      parent.getBoundingClientRect().top <= 0 &&
      textEditorPanel.getBoundingClientRect().top + textEditorPanel.getBoundingClientRect().height >=
      parent.getBoundingClientRect().top + parent.getBoundingClientRect().height
    ) {
      imgWrapperElem.style.paddingTop = getComputedStyle(textEditorPanel).height;
      textEditorPanel.style.visibility = 'hidden';
    } else if (
      parent.getBoundingClientRect().top > 0
    ) {
      textEditorPanel.style.visibility = 'visible';
      textEditorPanel.style.width = '100%';
      textEditorPanel.style.position = 'relative';
      textEditorPanel.style.top = "0";
      imgWrapperElem.style.paddingTop = '0';
    }
  }

  var deleteRedactor = function () {
    if (imgWrapperElem.getElementsByTagName('iframe')[0]) {
      iframe = imgWrapperElem.getElementsByTagName('iframe')[0];
      var mainArea = document.getElementById('mainArea');
      var iframeBody = iframe.contentWindow.document.body;
      var iframes = document.getElementsByClassName('textIframe');

      if (
        (event.clientX < imgWrapperElem.getBoundingClientRect().left ||
          event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width ||
          event.clientY < imgWrapperElem.getBoundingClientRect().top - 25 ||
          event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) &&
        event.clientX < rightSidebarEl.getBoundingClientRect().left &&
        event.clientX != 0
      ) {
        textElem.innerHTML = iframeBody.innerHTML;
        for (var i = 0; i < iframes.length; i++) {
          $(iframes[i]).remove();
        }
        textEditor.style.display = 'none';
        textElem.style.display = 'block';
        iframe = null;
        $('#rightSidebar').css({
          right: '-400px',
          transition: '0.4s all ease-in'
        }).removeClass('activated');
        $('#rightSidebar > div').hide();
        textElem.addEventListener('click', addRedactor);
        document.removeEventListener('mousedown', deleteRedactor);
		window.removeEventListener('scroll', redactorScroll);
		$(textElem).css('position', 'relative').css('z-index', '0').css('top', '0');
      }
    }
	makePreview();
    return false;
  }

  textElem.addEventListener('click', addRedactor);

  var destroy = function () {
    if (imgWrapperElem.getElementsByTagName('iframe')[0]) {
      iframe = imgWrapperElem.getElementsByTagName('iframe')[0];
      var mainArea = document.getElementById('mainArea');
      var iframeBody = iframe.contentWindow.document.body;
      var iframes = document.getElementsByClassName('textIframe');

      textElem.innerHTML = iframeBody.innerHTML;
      for (var i = 0; i < iframes.length; i++) {
        $(iframes[i]).remove();
      }
      textEditor.style.display = 'none';
      textElem.style.display = 'block';
      iframe = null;
      $('#rightSidebar').css({
        right: '-400px',
        transition: '0.4s all ease-in'
      }).removeClass('activated');
      $('#rightSidebar > div').hide();
      textElem.addEventListener('click', addRedactor);
      document.removeEventListener('mousedown', deleteRedactor);
	  window.removeEventListener('scroll', redactorScroll);
    }
	makePreview();
    return false;
  }

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function () {
    imgWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    imgWrapperElem.style.border = '2px solid transparent';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };

  var resizeXY = function () {
    if (
      getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' ||
      getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' ||
      getComputedStyle(imgBlockElem).justifyContent == 'flex-end'
    ) {
      imgWrapperElem.style.width = (imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width - event.clientX) + 'px';
      textEditorPanel.style.width = (imgWrapperElem.getBoundingClientRect().width - 2) + 'px';
    } else {
      imgWrapperElem.style.width = (event.clientX - imgWrapperElem.getBoundingClientRect().left) + 'px';
      textEditorPanel.style.width = (imgWrapperElem.getBoundingClientRect().width - 2) + 'px';
    }
  };

  var resizeX = function () {
    if (
      getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' ||
      getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' ||
      getComputedStyle(imgBlockElem).justifyContent == 'flex-end'
    ) {
      imgWrapperElem.style.width = (imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width - event.clientX) + 'px';
      textEditorPanel.style.width = (imgWrapperElem.getBoundingClientRect().width - 2) + 'px';
    } else {
      imgWrapperElem.style.width = (event.clientX - imgWrapperElem.getBoundingClientRect().left) + 'px';
      textEditorPanel.style.width = (imgWrapperElem.getBoundingClientRect().width - 2) + 'px';
    }
  };

  var finishResizeX = function () {
    if (iframe) {
      iframe.style.display = 'block';
      iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
      textElem.style.display = 'none';
    }
    if (
      event.clientX < imgWrapperElem.getBoundingClientRect().left ||
      event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width ||
      event.clientY < imgWrapperElem.getBoundingClientRect().top ||
      event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height
    ) {
      imgChangeBorderToZero();
    }
    imgWrapperElem.addEventListener('mouseover', imgHover);
    imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.addEventListener('mouseover', imgHover);
    resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeX);
    document.removeEventListener('mouseup', finishResizeX);
	makePreview();
  }

  var finishResizeXY = function () {
    if (iframe) {
      iframe.style.display = 'block';
      iframe.height = textElem.getBoundingClientRect().height + 'px';
      textElem.style.display = 'none';
    }
    if (
      event.clientX < imgWrapperElem.getBoundingClientRect().left ||
      event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width ||
      event.clientY < imgWrapperElem.getBoundingClientRect().top ||
      event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height
    ) {
      imgChangeBorderToZero();
    }
    imgWrapperElem.addEventListener('mouseover', imgHover);
    imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.addEventListener('mouseover', imgHover);
    resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeXY);
    document.removeEventListener('mouseup', finishResizeXY);
	makePreview();
  }

  //Обработчики событий
  $('#mainArea').on('mousedown', '.copy', function () {
    destroy();
  });
  $('#mainArea').on('mousedown', '.copy-content', function () {
    destroy();
  });
//  savePage.onmousedown = function() {
//    destroy();
//  }
  imgWrapperElem.addEventListener('mouseover', imgHover);
  imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);

  resizerX_Elem.onmousedown = function () {
    if (iframe) {
      textElem.innerHTML = iframe.contentWindow.document.body.innerHTML;
      iframe.style.display = 'none';
      textElem.style.display = 'block';
    }
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', finishResizeX);
    return false;
  };

  resizerXY_Elem.onmousedown = function () {
    if (iframe) {
      textElem.innerHTML = iframe.contentWindow.document.body.innerHTML;
      iframe.style.display = 'none';
      textElem.style.display = 'block';
    }
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', finishResizeXY);
    return false;
  };

  textSettings.onmousedown = function () {
    if (!imgWrapperElem.getElementsByTagName('iframe')[0]) {
      addRedactor();
    }
    return false;
  }

  textCopy.onmousedown = function() {
    destroy();
  }
  
  arrowLeftElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'start';
    imgBlockElem.style["-ms-flex-pack"] = 'start';
    imgBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
	makePreview();
  }

  arrowCenterElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'center';
    imgBlockElem.style["-ms-flex-pack"] = 'center';
    imgBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
	makePreview();
  }

  arrowRightElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'end';
    imgBlockElem.style["-ms-flex-pack"] = 'end';
    imgBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerXY_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.cursor = 'ne-resize';
	makePreview();
  }

  imgDeleteElem.onclick = function () {
    $(imgBlockElem).remove();
	makePreview();
  }
}


export { dragText, addFunctionalityToTextElement };