String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function closeRightPanel() {
	const rightSidebarEl = document.getElementById('rightSidebar')
      if (
        event.clientX < rightSidebarEl.getBoundingClientRect().left &&
        event.clientX != 0
      ) {
        $('#rightSidebar').css({
          right: '-400px',
          transition: '0.4s all ease-in'
        }).removeClass('activated');
        document.removeEventListener('mousedown', closeRightPanel);
      }
      return false;
    };

function showHideSettings(elId, indicatorId) {
  var el = document.getElementById(elId);
  var indicator = document.getElementById(indicatorId);
  var rectangle = indicator.getElementsByTagName('span')[0];

  if (getComputedStyle(el).display == 'none') {
    rectangle.className = 'glyphicon glyphicon-triangle-bottom';
  } else {
    rectangle.className = 'glyphicon glyphicon-triangle-top';
  }

  indicator.onclick = function () {
    if (getComputedStyle(el).display == 'none') {
      el.style.display = 'block';
      rectangle.className = 'glyphicon glyphicon-triangle-top';
    } else {
      el.style.display = 'none';
      rectangle.className = 'glyphicon glyphicon-triangle-bottom';
    }
  }
}

function showOptionsForAdd(id) {
  var subscribeBlockElem = document.getElementById(id);
  var currentSubscribe = subscribeBlockElem.getElementsByClassName('formCodeWrapper')[0];
  var subscribeInputerAddElem = document.getElementById('subscribeInputerAdd');
  var inputs = currentSubscribe.getElementsByTagName('input');
   
  if (!currentSubscribe.getElementsByClassName('delivery')[0]) {
    currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];

    subscribeInputerAddElem.innerHTML = '<option value=""></option>';
    if (!currentSubscribe.getElementsByClassName('name')[0]) {
      subscribeInputerAddElem.innerHTML += '<option value="name">Имя</option>';
    }
    if (!currentSubscribe.getElementsByClassName('email')[0]) {
      subscribeInputerAddElem.innerHTML += '<option value="email">Email</option>';
    }
    if (!currentSubscribe.getElementsByClassName('tel')[0]) {
      subscribeInputerAddElem.innerHTML += '<option value="tel">Телефон</option>';
    }
  } else {
    subscribeInputerAddElem.innerHTML = '';
  }
}

function showOptionsForDelete(id) {
  var subscribeBlockElem = document.getElementById(id);
  var currentSubscribe = subscribeBlockElem.getElementsByClassName('formCodeWrapper')[0];
  var subscribeInputerDeleteElem = document.getElementById('subscribeInputerDelete');
  var inputs = currentSubscribe.getElementsByTagName('input');

  subscribeInputerDeleteElem.innerHTML = '<option value=""></option>';
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type != 'hidden' && inputs[i].type != 'submit') {
      if (inputs[i].placeholder != '') {
        subscribeInputerDeleteElem.innerHTML += '<option value="' + i + '">' + inputs[i].placeholder + '</option>';
      } else {
        subscribeInputerDeleteElem.innerHTML += '<option value="' + i + '">поле№ ' + (i + 1) + '</option>';
      }
    }
  }
}

function addDragAndDropToForm(id) {
  let subscribeBlockElem = document.getElementById(id);
  let currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  const inputs = document.getElementById(id).getElementsByClassName('subscribeInput');
  const subscribeId = getRandom();
  currentSubscribe.id = subscribeId;

  Sortable.create($("#" + subscribeId + "").get(0), {
    animation: 150,
    swapThreshold: 1,
    emptyInsertThreshold: 1,
    ghostClass: 'blue-background-class',
	draggable: ".subscribeInput",
    onEnd: function (e) {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].blur();
      }
      makePreview();
    }
  });
}

function getRandom() {
  var d1 = Math.floor((Math.random() * 100000));
  var d2 = Math.floor((Math.random() * 100000));
  var d3 = Math.floor((Math.random() * 100000));
  return d1 + "" + d2 + "" + d3;
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

function replaceDef(string) {
  while (string.indexOf('-') != -1) {
    string = string.replaceAt(string.indexOf('-') + 1, string[string.indexOf('-') + 1].toUpperCase());
    string = string.replace('-', '');
  }
  return string;
}


function deleteTeg(content, reOpen, reCloze) {
  var teg = new RegExp('<' + reOpen + '[^<]*</' + reCloze + '>', 'gi');
  content = content.replace(teg, '');
  return content;
}

function makePreview() {
  var mainAreaElem = document.getElementById('mainArea');
  var mainAreaElemCopy = document.getElementById('hiddenDiv');
  var mainSelectorElem = document.getElementsByClassName('main-selector');
  var contentSelectorElem = document.getElementsByClassName('content-selector');
  var imageElem = document.getElementsByClassName('imageBlock');
  var textElem = document.getElementsByClassName('textBlock');
  var buttonElem = document.getElementsByClassName('buttonBlock');
  var videoElem = document.getElementsByClassName('videoBlock');
  var formElem = document.getElementsByClassName('formBlock');
  var subscribeElem = document.getElementsByClassName('subscribeBlock');
  var listElem = document.getElementsByClassName('listBlock');
  var background = document.getElementById('backgroundVideo');
  var jsScripts = mainAreaElem.getElementsByClassName('code');
  var digitalHtml = '';
  var digitalCss = '';
  var digitalJs = '';
  var stringToDevare = '';
  var createStyle = function (id, elClass, styles) {
    el = (elClass == 0) ? document.getElementById(id) : document.getElementById(id).getElementsByClassName(elClass)[0];
    var result = '';
    var styleToUpperCase = '';
    for (var i = 0; i < styles.length; i++) {
      styleToUpperCase = replaceDef(styles[i]);
      result += styles[i] + ':' + getComputedStyle(el)[styleToUpperCase] + ';';
    }
    if (elClass != 0) {
      digitalCss += `#${id} .${elClass} {${result}}`;
    } else {
      digitalCss += `#${id} {${result}}`;
    }
  };
  var deleteDeliveryCode = function() {	  
	mainAreaElemCopy.innerHTML = mainAreaElem.outerHTML;
	var ElsToDelete = mainAreaElemCopy.getElementsByClassName('deliveryCode');
	
	for (var i = 0; i < ElsToDelete.length;) {
	  if (ElsToDelete[i]) {
		ElsToDelete[i].remove();
	  } else {
		i++;
	  }
	}
	
	return mainAreaElemCopy.innerHTML;
  };

  digitalHtml = background.outerHTML;  
  digitalHtml += deleteDeliveryCode();
  mainAreaElemCopy.innerHTML = '';
  digitalHtml = deleteTeg(digitalHtml, 'span class="glyphicon', 'span');
  digitalHtml = deleteTeg(digitalHtml, 'div class="copy"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="remove"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="add-block"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="remove-block"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="main-block-settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="copy-content"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="remove-content"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="add-content-block"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="remove-content-block"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="block-settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="block-resizer"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="resizer"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="resizerY"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="resizerXY', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="resizerX"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'span class="under"', 'span');
  digitalHtml = deleteTeg(digitalHtml, 'span class="through"', 'span');
  digitalHtml = deleteTeg(digitalHtml, 'div class="text-editor-panel"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'iframe class="textIframe"', 'iframe');
  digitalHtml = deleteTeg(digitalHtml, 'div class="text-editor"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings text_settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="resizerTextXY"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings button_settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'span class="code"', 'span');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings form_settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings subscribe_settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="deliveryCode"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings list_settings"', 'div');
  stringToDelete = new RegExp(' style="display: none;"', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp('<input class="imgProportion"[^>]*>', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp(' border: 1px solid transparent;', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp('<div class="imageWrapper videoWrapper"[^>]*>', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '<div class="imageWrapper videoWrapper">');
  stringToDelete = new RegExp('<img class="videoimg img"[^>]*>', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp('delay', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, 'autoplay=1');
  stringToDelete = new RegExp('border: 1px solid blue;', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp(' autocomplete="off"', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  //проверить
  digitalHtml = digitalHtml.replace('display: none; ', '');
  //
  

  for (let i = 0; i < mainSelectorElem.length; i++) {
    createStyle(mainSelectorElem[i].id, 0, ['height']);
  }
  
  for (let i = 0; i < contentSelectorElem.length; i++) {
    createStyle(contentSelectorElem[i].id, 0, ['height']);
  }

  for (let i = 0; i < imageElem.length; i++) {
    createStyle(imageElem[i].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
  }

  for (let i = 0; i < textElem.length; i++) {
    createStyle(textElem[i].id, 0, ['width', 'display', 'justify-content', 'flex-wrap']);
	createStyle(textElem[i].id, 'text', ['font-family', 'font-size', 'line-height', 'color', 'text-shadow']);
  }
  for (let i = 0; i < buttonElem.length; i++) {
    createStyle(buttonElem[i].id, 0, ['width']);
  }
  for (let i = 0; i < videoElem.length; i++) {
    createStyle(videoElem[i].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
    createStyle(videoElem[i].id, 'imageWrapper', ['width', 'height']);
  }  
  for (let i = 0; i < formElem.length; i++) {
    createStyle(formElem[i].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
  }
  
  for (let i = 0; i < subscribeElem.length; i++) {
    createStyle(subscribeElem[i].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
  }
  for (let i = 0; i < listElem.length; i++) {
    createStyle(listElem[i].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
    createStyle(listElem[i].id, 'listWrapper', ['width', 'height']);
  }

  for (let i = 0; i < jsScripts.length; i++) {
    digitalJs += jsScripts[i].innerHTML + ':';
  }

  localStorage.digitalHtml = digitalHtml;
  localStorage.digitalCss = digitalCss;
  localStorage.digitalJs = digitalJs;
}

function addFunctionalityToElement(id) {
  var imgBlockElem = document.getElementById(id);
  var imgWrapperElem = imgBlockElem.getElementsByClassName('imageWrapper')[0];
  var imgElem = imgBlockElem.getElementsByClassName('img')[0];
  var imgSettings = imgBlockElem.getElementsByClassName('image_settings')[0];
  var resizerY_Elem = imgBlockElem.getElementsByClassName('resizerY')[0];
  var resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerXY')[0];
  var resizerX_Elem = imgBlockElem.getElementsByClassName('resizerX')[0];
  var borderElem = imgBlockElem.getElementsByClassName('border')[0];
  var proportion = imgBlockElem.getElementsByClassName('imgProportion')[0];
  var blockSettingsElem = imgBlockElem.getElementsByClassName('glyphicon')[0];
  var arrowLeftElem = imgBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowCenterElem = imgBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowRightElem = imgBlockElem.getElementsByClassName('glyphicon')[3];
  var imgCopyElem = imgBlockElem.getElementsByClassName('glyphicon')[4];
  var imgDeleteElem = imgBlockElem.getElementsByClassName('glyphicon')[5];
  var proportionCoefHeight = 0;
  var proportionCoefWidth = 0;

  proportionCoefHeight = parseFloat(getComputedStyle(imgWrapperElem).height) / parseFloat(getComputedStyle(imgWrapperElem).width);
  proportionCoefWidth = parseFloat(getComputedStyle(imgWrapperElem).width) / parseFloat(getComputedStyle(imgWrapperElem).height);
  imgElem.onload = function () {
    proportionCoefHeight = parseFloat(getComputedStyle(imgWrapperElem).height) / parseFloat(getComputedStyle(imgWrapperElem).width);
    proportionCoefWidth = parseFloat(getComputedStyle(imgWrapperElem).width) / parseFloat(getComputedStyle(imgWrapperElem).height);
	makePreview();
  }

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function () {
    imgWrapperElem.style.border = '1px solid blue';
    resizerY_Elem.style.visibility = 'visible';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    imgWrapperElem.style.border = '1px solid transparent';
    resizerY_Elem.style.visibility = 'hidden';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };

  var resizeY = function () {
    var checkBox = +proportion.value;
    if (checkBox) {
      if (
        getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' ||
        getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' ||
        getComputedStyle(imgBlockElem).justifyContent == 'flex-end'
      ) {
        imgWrapperElem.style.height = (event.clientY - imgElem.getBoundingClientRect().top) + 'px';
        imgWrapperElem.style.width = (event.clientY - imgElem.getBoundingClientRect().top) * proportionCoefWidth + 'px';
        imgWrapperElem.style.maxHeight = parseFloat(getComputedStyle(imgBlockElem).width) * proportionCoefHeight + 'px';;
      } else {
        imgWrapperElem.style.height = (event.clientY - imgElem.getBoundingClientRect().top) + 'px';
        imgWrapperElem.style.width = (event.clientY - imgElem.getBoundingClientRect().top) * proportionCoefWidth + 'px';
        imgWrapperElem.style.maxHeight = parseFloat(getComputedStyle(imgBlockElem).width) * proportionCoefHeight + 'px';
      }
    } else {
      imgWrapperElem.style.height = (event.clientY - imgElem.getBoundingClientRect().top) + 'px';
      imgWrapperElem.style.width = getComputedStyle(imgWrapperElem).width;
      imgWrapperElem.style.maxHeight = '10000px';
    }
  };

  var resizeXY = function () {
    var checkBox = +proportion.value;
    if (checkBox) {
      if (
        getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' ||
        getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' ||
        getComputedStyle(imgBlockElem).justifyContent == 'flex-end'
      ) {
        imgWrapperElem.style.width = (imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX) + 'px';
        imgWrapperElem.style.height = 'auto';
      } else {
        imgWrapperElem.style.width = (event.clientX - imgElem.getBoundingClientRect().left) + 'px';
        imgWrapperElem.style.height = 'auto';
      }
    } else {
      if (
        getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' ||
        getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' ||
        getComputedStyle(imgBlockElem).justifyContent == 'flex-end'
      ) {
        imgWrapperElem.style.width = (imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX) + 'px';
        imgWrapperElem.style.height = (event.clientY - imgElem.getBoundingClientRect().top) + 'px';
        imgWrapperElem.style.maxHeight = '10000px';
      } else {
        imgWrapperElem.style.width = (event.clientX - imgElem.getBoundingClientRect().left) + 'px';
        imgWrapperElem.style.height = (event.clientY - imgElem.getBoundingClientRect().top) + 'px';
        imgWrapperElem.style.maxHeight = '10000px';
      }
    }
  };

  var resizeX = function () {
    var checkBox = +proportion.value;
    if (checkBox) {
      if (
        getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' ||
        getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' ||
        getComputedStyle(imgBlockElem).justifyContent == 'flex-end'
      ) {
        imgWrapperElem.style.width = (imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX) + 'px';
        imgWrapperElem.style.height = 'auto';
      } else {
        imgWrapperElem.style.width = (event.clientX - imgElem.getBoundingClientRect().left) + 'px';
        imgWrapperElem.style.height = 'auto';
      }
    } else {
      if (
        getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' ||
        getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' ||
        getComputedStyle(imgBlockElem).justifyContent == 'flex-end'
      ) {
        imgWrapperElem.style.width = (imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX) + 'px';
        imgWrapperElem.style.height = getComputedStyle(imgWrapperElem).height;
      } else {
        imgWrapperElem.style.width = (event.clientX - imgElem.getBoundingClientRect().left) + 'px';
        imgWrapperElem.style.height = getComputedStyle(imgWrapperElem).height;
      }
    }
  };

  //Обработчики событий
  imgWrapperElem.addEventListener('mouseover', imgHover);
  imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerY_Elem.addEventListener('mouseover', imgHover);
  resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);

  resizerX_Elem.onmousedown = function () {
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', function () {
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
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeX);
	  makePreview();
    });
    return false;
  };

  resizerXY_Elem.onmousedown = function () {
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', function () {
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
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeXY);
	  makePreview();
    });
    return false;
  };


  resizerY_Elem.onmousedown = function () {
    var checkBox = +proportion.value;

    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeY);
    document.addEventListener('mouseup', function () {
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
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeY);
      imgWrapperElem.style.width = getComputedStyle(imgWrapperElem).width;
      if (checkBox) {
        imgWrapperElem.style.height = 'auto';
      }
	  makePreview();
    });
    return false;
  };

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

function addFunctionalityToButtonElement(id) {
  var imgBlockElem = document.getElementById(id);
  var imgWrapperElem = imgBlockElem.getElementsByClassName('buttonWrapper')[0];
  var textSettings = imgBlockElem.getElementsByClassName('textSet')[0];
  var resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerTextXY')[0];
  var resizerX_Elem = imgBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = imgBlockElem.getElementsByClassName('glyphicon')[0];
  var arrowLeftElem = imgBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowCenterElem = imgBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowRightElem = imgBlockElem.getElementsByClassName('glyphicon')[3];
  var textCopy = imgBlockElem.getElementsByClassName('copyText')[0];
  var imgDeleteElem = imgBlockElem.getElementsByClassName('glyphicon')[5];
  var textElem = imgBlockElem.getElementsByClassName('button')[0];

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function () {
    imgWrapperElem.style.border = '1px solid blue';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    imgWrapperElem.style.border = '1px solid transparent';
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
    } else {
      imgWrapperElem.style.width = (event.clientX - imgWrapperElem.getBoundingClientRect().left) + 'px';
    }
  };

  var resizeX = function () {
    if (
      getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' ||
      getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' ||
      getComputedStyle(imgBlockElem).justifyContent == 'flex-end'
    ) {
      imgWrapperElem.style.width = (imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width - event.clientX) + 'px';
    } else {
      imgWrapperElem.style.width = (event.clientX - imgWrapperElem.getBoundingClientRect().left) + 'px';
    }
  };

  var finishResizeX = function () {
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
  imgWrapperElem.addEventListener('mouseover', imgHover);
  imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);

  resizerX_Elem.onmousedown = function () {
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
        event.clientX < mainArea.getBoundingClientRect().left + mainArea.getBoundingClientRect().width &&
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
    imgWrapperElem.style.border = '1px solid blue';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    imgWrapperElem.style.border = '1px solid transparent';
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
  savePage.onmousedown = function() {
    destroy();
  }
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

function addFunctionalityToFormElement(id) {
  var formBlockElem = document.getElementById(id);
  var formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  var formElem = formBlockElem.getElementsByClassName('form')[0];
  var imgSettings = formBlockElem.getElementsByClassName('image_settings')[0];
  var resizerY_Elem = formBlockElem.getElementsByClassName('resizerY')[0];
  var resizerXY_Elem = formBlockElem.getElementsByClassName('resizerXY')[0];
  var resizerX_Elem = formBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = formBlockElem.getElementsByClassName('glyphicon')[0];
  var arrowLeftElem = formBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowCenterElem = formBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowRightElem = formBlockElem.getElementsByClassName('glyphicon')[3];
  var imgCopyElem = formBlockElem.getElementsByClassName('glyphicon')[4];
  var imgDeleteElem = formBlockElem.getElementsByClassName('glyphicon')[5];
  var formSubmitElem = formBlockElem.getElementsByClassName('paySubmit')[0];
  var formInputs = formBlockElem.getElementsByClassName('payInput');

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function () {
    formWrapperElem.style.border = '1px solid blue';
    resizerY_Elem.style.visibility = 'visible';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    formWrapperElem.style.border = '1px solid transparent';
    resizerY_Elem.style.visibility = 'hidden';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };

  var resizeY = function () {
      formWrapperElem.style.height = (event.clientY - formElem.getBoundingClientRect().top) + 'px';
  };

  var resizeXY = function () {
      if (
        getComputedStyle(formBlockElem)["-webkit-box-pack"] == 'end' ||
        getComputedStyle(formBlockElem)["-ms-flex-pack"] == 'end' ||
        getComputedStyle(formBlockElem).justifyContent == 'flex-end'
      ) {
        formWrapperElem.style.width = (formElem.getBoundingClientRect().left + formElem.getBoundingClientRect().width - event.clientX) + 'px';
        formWrapperElem.style.height = (event.clientY - formElem.getBoundingClientRect().top) + 'px';
      } else {
        formWrapperElem.style.width = (event.clientX - formElem.getBoundingClientRect().left) + 'px';
        formWrapperElem.style.height = (event.clientY - formElem.getBoundingClientRect().top) + 'px';
      }
  };

  var resizeX = function () {
      if (
        getComputedStyle(formBlockElem)["-webkit-box-pack"] == 'end' ||
        getComputedStyle(formBlockElem)["-ms-flex-pack"] == 'end' ||
        getComputedStyle(formBlockElem).justifyContent == 'flex-end'
      ) {
        formWrapperElem.style.width = (formElem.getBoundingClientRect().left + formElem.getBoundingClientRect().width - event.clientX) + 'px';
      } else {
        formWrapperElem.style.width = (event.clientX - formElem.getBoundingClientRect().left) + 'px';
      }
  };

  //Обработчики событий
  formWrapperElem.addEventListener('mouseover', imgHover);
  formWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerY_Elem.addEventListener('mouseover', imgHover);
  resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);

  resizerX_Elem.onmousedown = function () {
    formWrapperElem.removeEventListener('mouseover', imgHover);
    formWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', function () {
      if (
        event.clientX < formWrapperElem.getBoundingClientRect().left ||
        event.clientX > formWrapperElem.getBoundingClientRect().left + formWrapperElem.getBoundingClientRect().width ||
        event.clientY < formWrapperElem.getBoundingClientRect().top ||
        event.clientY > formWrapperElem.getBoundingClientRect().top + formWrapperElem.getBoundingClientRect().height
      ) {
        imgChangeBorderToZero();
      }
      formWrapperElem.addEventListener('mouseover', imgHover);
      formWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeX);
	  makePreview();
    });
    return false;
  };

  resizerXY_Elem.onmousedown = function () {
    formWrapperElem.removeEventListener('mouseover', imgHover);
    formWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', function () {
      if (
        event.clientX < formWrapperElem.getBoundingClientRect().left ||
        event.clientX > formWrapperElem.getBoundingClientRect().left + formWrapperElem.getBoundingClientRect().width ||
        event.clientY < formWrapperElem.getBoundingClientRect().top ||
        event.clientY > formWrapperElem.getBoundingClientRect().top + formWrapperElem.getBoundingClientRect().height
      ) {
        imgChangeBorderToZero();
      }
      formWrapperElem.addEventListener('mouseover', imgHover);
      formWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeXY);
	  makePreview();
    });
    return false;
  };


  resizerY_Elem.onmousedown = function () {
    formWrapperElem.removeEventListener('mouseover', imgHover);
    formWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeY);
    document.addEventListener('mouseup', function () {
      if (
        event.clientX < formWrapperElem.getBoundingClientRect().left ||
        event.clientX > formWrapperElem.getBoundingClientRect().left + formWrapperElem.getBoundingClientRect().width ||
        event.clientY < formWrapperElem.getBoundingClientRect().top ||
        event.clientY > formWrapperElem.getBoundingClientRect().top + formWrapperElem.getBoundingClientRect().height
      ) {
        imgChangeBorderToZero();
      }
      formWrapperElem.addEventListener('mouseover', imgHover);
      formWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeY);
      formWrapperElem.style.width = getComputedStyle(formWrapperElem).width;
	  makePreview();
    });
    return false;
  };

  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].onblur = function () {
      formInputs[i].placeholder = formInputs[i].value;
      formInputs[i].value = '';
      makePreview();
    }
  }

  formSubmitElem.onclick = function () {
    formSubmitElem.type = 'text';
    formSubmitElem.focus();
    formSubmitElem.onblur = function () {
      formSubmitElem.type = 'submit';
      makePreview();
    }
    return false;
  }

  arrowLeftElem.onclick = function () {
    formBlockElem.style["-webkit-box-pack"] = 'start';
    formBlockElem.style["-ms-flex-pack"] = 'start';
    formBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
	makePreview();
  }

  arrowCenterElem.onclick = function () {
    formBlockElem.style["-webkit-box-pack"] = 'center';
    formBlockElem.style["-ms-flex-pack"] = 'center';
    formBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
	makePreview();
  }

  arrowRightElem.onclick = function () {
    formBlockElem.style["-webkit-box-pack"] = 'end';
    formBlockElem.style["-ms-flex-pack"] = 'end';
    formBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerXY_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.cursor = 'ne-resize';
	makePreview();
  }

  imgDeleteElem.onclick = function () {
    $(formBlockElem).remove();
	makePreview();
  }
}

function addFunctionalityToSubscribeElement(id) {
  var subscribeBlockElem = document.getElementById(id);
  var subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  var subscribeElem = subscribeBlockElem.getElementsByClassName('subscribe')[0];
  var imgSettings = subscribeBlockElem.getElementsByClassName('image_settings')[0];
  var resizerXY_Elem = subscribeBlockElem.getElementsByClassName('resizerTextXY')[0];
  var resizerX_Elem = subscribeBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = subscribeBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowLeftElem = subscribeBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowCenterElem = subscribeBlockElem.getElementsByClassName('glyphicon')[3];
  var arrowRightElem = subscribeBlockElem.getElementsByClassName('glyphicon')[4];
  var imgCopyElem = subscribeBlockElem.getElementsByClassName('glyphicon')[5];
  var imgDeleteElem = subscribeBlockElem.getElementsByClassName('glyphicon')[6];
  var subscribeSubmitElem = subscribeBlockElem.getElementsByClassName('subscribeSubmit')[0];
  var subscribeInputs = subscribeBlockElem.getElementsByClassName('subscribeInput');

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function () {
    subscribeWrapperElem.style.border = '1px solid blue';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    subscribeWrapperElem.style.border = '1px solid transparent';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };

  var resizeXY = function () {
      if (
        getComputedStyle(subscribeBlockElem)["-webkit-box-pack"] == 'end' ||
        getComputedStyle(subscribeBlockElem)["-ms-flex-pack"] == 'end' ||
        getComputedStyle(subscribeBlockElem).justifyContent == 'flex-end'
      ) {
        subscribeWrapperElem.style.width = (subscribeElem.getBoundingClientRect().left + subscribeElem.getBoundingClientRect().width - event.clientX) + 'px';
      } else {
        subscribeWrapperElem.style.width = (event.clientX - subscribeElem.getBoundingClientRect().left) + 'px';
      }
  };

  var resizeX = function () {
      if (
        getComputedStyle(subscribeBlockElem)["-webkit-box-pack"] == 'end' ||
        getComputedStyle(subscribeBlockElem)["-ms-flex-pack"] == 'end' ||
        getComputedStyle(subscribeBlockElem).justifyContent == 'flex-end'
      ) {
        subscribeWrapperElem.style.width = (subscribeElem.getBoundingClientRect().left + subscribeElem.getBoundingClientRect().width - event.clientX) + 'px';
      } else {
        subscribeWrapperElem.style.width = (event.clientX - subscribeElem.getBoundingClientRect().left) + 'px';
      }
  };

  //Обработчики событий
  subscribeWrapperElem.addEventListener('mouseover', imgHover);
  subscribeWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);

  resizerX_Elem.onmousedown = function () {
    subscribeWrapperElem.removeEventListener('mouseover', imgHover);
    subscribeWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', function () {
      if (
        event.clientX < subscribeWrapperElem.getBoundingClientRect().left ||
        event.clientX > subscribeWrapperElem.getBoundingClientRect().left + subscribeWrapperElem.getBoundingClientRect().width ||
        event.clientY < subscribeWrapperElem.getBoundingClientRect().top ||
        event.clientY > subscribeWrapperElem.getBoundingClientRect().top + subscribeWrapperElem.getBoundingClientRect().height
      ) {
        imgChangeBorderToZero();
      }
      subscribeWrapperElem.addEventListener('mouseover', imgHover);
      subscribeWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeX);
	  makePreview();
    });
    return false;
  };

  resizerXY_Elem.onmousedown = function () {
    subscribeWrapperElem.removeEventListener('mouseover', imgHover);
    subscribeWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', function () {
      if (
        event.clientX < subscribeWrapperElem.getBoundingClientRect().left ||
        event.clientX > subscribeWrapperElem.getBoundingClientRect().left + subscribeWrapperElem.getBoundingClientRect().width ||
        event.clientY < subscribeWrapperElem.getBoundingClientRect().top ||
        event.clientY > subscribeWrapperElem.getBoundingClientRect().top + subscribeWrapperElem.getBoundingClientRect().height
      ) {
        imgChangeBorderToZero();
      }
      subscribeWrapperElem.addEventListener('mouseover', imgHover);
      subscribeWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeXY);
	  makePreview();
    });
    return false;
  };

  for (let i = 0; i < subscribeInputs.length; i++) {
    subscribeInputs[i].onfocus = function (e) {
		return false;
    }
	subscribeInputs[i].onkeydown = function (e) {
		return false;
    }
  }

  subscribeSubmitElem.onclick = function () {
    return false;
  }

  arrowLeftElem.onclick = function () {
    subscribeBlockElem.style["-webkit-box-pack"] = 'start';
    subscribeBlockElem.style["-ms-flex-pack"] = 'start';
    subscribeBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
	makePreview();
  }

  arrowCenterElem.onclick = function () {
    subscribeBlockElem.style["-webkit-box-pack"] = 'center';
    subscribeBlockElem.style["-ms-flex-pack"] = 'center';
    subscribeBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
	makePreview();
  }

  arrowRightElem.onclick = function () {
    subscribeBlockElem.style["-webkit-box-pack"] = 'end';
    subscribeBlockElem.style["-ms-flex-pack"] = 'end';
    subscribeBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerXY_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.marginLeft = '0';
	makePreview();
  }

  imgDeleteElem.onclick = function () {
    $(subscribeBlockElem).remove();
	makePreview();
  }
}

function addFunctionalityToListElement(id) {
  var listBlockElem = document.getElementById(id);
  var listWrapperElem = listBlockElem.getElementsByClassName('listWrapper')[0];
  var listSettings = listBlockElem.getElementsByClassName('image_settings')[0];
  var resizerXY_Elem = listBlockElem.getElementsByClassName('resizerTextXY')[0];
  var resizerX_Elem = listBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = listBlockElem.getElementsByClassName('glyphicon')[0];
  var arrowLeftElem = listBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowCenterElem = listBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowRightElem = listBlockElem.getElementsByClassName('glyphicon')[3];
  var listCopyElem = listBlockElem.getElementsByClassName('glyphicon')[4];
  var listDeleteElem = listBlockElem.getElementsByClassName('glyphicon')[5];
  var listSettings = listBlockElem.getElementsByClassName('textSet')[0];
  var listCopy = listBlockElem.getElementsByClassName('listText')[0];
  var listElem = listBlockElem.getElementsByClassName('list')[0];


  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function () {
    listWrapperElem.style.border = '1px solid blue';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    listWrapperElem.style.border = '1px solid transparent';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };

  var resizeXY = function () {
    if (
      getComputedStyle(listBlockElem)["-webkit-box-pack"] == 'end' ||
      getComputedStyle(listBlockElem)["-ms-flex-pack"] == 'end' ||
      getComputedStyle(listBlockElem).justifyContent == 'flex-end'
    ) {
      listWrapperElem.style.width = (listWrapperElem.getBoundingClientRect().left + listWrapperElem.getBoundingClientRect().width - event.clientX) + 'px';
    } else {
      listWrapperElem.style.width = (event.clientX - listWrapperElem.getBoundingClientRect().left) + 'px';
    }
  };

  var resizeX = function () {
    if (
      getComputedStyle(listBlockElem)["-webkit-box-pack"] == 'end' ||
      getComputedStyle(listBlockElem)["-ms-flex-pack"] == 'end' ||
      getComputedStyle(listBlockElem).justifyContent == 'flex-end'
    ) {
      listWrapperElem.style.width = (listWrapperElem.getBoundingClientRect().left + listWrapperElem.getBoundingClientRect().width - event.clientX) + 'px';
    } else {
      listWrapperElem.style.width = (event.clientX - listWrapperElem.getBoundingClientRect().left) + 'px';
    }
  };

  var finishResizeX = function () {
    if (
      event.clientX < listWrapperElem.getBoundingClientRect().left ||
      event.clientX > listWrapperElem.getBoundingClientRect().left + listWrapperElem.getBoundingClientRect().width ||
      event.clientY < listWrapperElem.getBoundingClientRect().top ||
      event.clientY > listWrapperElem.getBoundingClientRect().top + listWrapperElem.getBoundingClientRect().height
    ) {
      imgChangeBorderToZero();
    }
    listWrapperElem.addEventListener('mouseover', imgHover);
    listWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.addEventListener('mouseover', imgHover);
    resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeX);
    document.removeEventListener('mouseup', finishResizeX);
	makePreview();
  }

  var finishResizeXY = function () {
    if (
      event.clientX < listWrapperElem.getBoundingClientRect().left ||
      event.clientX > listWrapperElem.getBoundingClientRect().left + listWrapperElem.getBoundingClientRect().width ||
      event.clientY < listWrapperElem.getBoundingClientRect().top ||
      event.clientY > listWrapperElem.getBoundingClientRect().top + listWrapperElem.getBoundingClientRect().height
    ) {
      imgChangeBorderToZero();
    }
    listWrapperElem.addEventListener('mouseover', imgHover);
    listWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
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
  savePage.onmousedown = function() {
    destroy();
  }
  listWrapperElem.addEventListener('mouseover', imgHover);
  listWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);

  resizerX_Elem.onmousedown = function () {
    listWrapperElem.removeEventListener('mouseover', imgHover);
    listWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
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
    listWrapperElem.removeEventListener('mouseover', imgHover);
    listWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', finishResizeXY);
    return false;
  };
  
  arrowLeftElem.onclick = function () {
    listBlockElem.style["-webkit-box-pack"] = 'start';
    listBlockElem.style["-ms-flex-pack"] = 'start';
    listBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
	makePreview();
  }

  arrowCenterElem.onclick = function () {
    listBlockElem.style["-webkit-box-pack"] = 'center';
    listBlockElem.style["-ms-flex-pack"] = 'center';
    listBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
	makePreview();
  }

  arrowRightElem.onclick = function () {
    listBlockElem.style["-webkit-box-pack"] = 'end';
    listBlockElem.style["-ms-flex-pack"] = 'end';
    listBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerXY_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.cursor = 'ne-resize';
	makePreview();
  }

  listDeleteElem.onclick = function () {
    listBlockElem.remove();
	makePreview();
  }
}

function initMain() {
  $('.main-selector > .content').each(function () {
    Sortable.create($("#" + $(this).attr('id') + "").get(0), {
      group: {
        name: 'content-selector',
        put: 'content-selector'
      },
      filter: '.resizer, .handle, .block-resizer',
      sort: true,
      animation: 150,
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
      }
    });
  });
}
initMain();

function initContent() {
  $('.content-selector > .content').each(function () {
    Sortable.create($("#" + $(this).attr('id') + "").get(0), {
      group: {
        name: 'content-selector',
        put: 'content-selector'
      },
      filter: '.resizer, .handle, .block-resizer',
      sort: true,
      animation: 150,
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
      }
    });
  });
}
initContent();

function initImage() {
  $('.imageBlock').each(function () {
    addFunctionalityToElement($(this).attr('id'));
  });
}
initImage();

function initVideo() {
  $('.videoBlock').each(function () {
    addFunctionalityToElement($(this).attr('id'));
  });
}
initVideo();

function initText() {
  $('.textBlock').each(function () {
    addFunctionalityToTextElement($(this).attr('id'));
  });
}
initText();

function initButton() {
  $('.buttonBlock').each(function () {
    addFunctionalityToButtonElement($(this).attr('id'));
  });
}
initButton();

function initForm() {
  $('.formBlock').each(function () {
	var inputs = document.getElementById($(this).attr('id')).getElementsByClassName('payInput');
	var formId = document.getElementById($(this).attr('id')).getElementsByTagName('form')[0].id;
	
    addFunctionalityToFormElement($(this).attr('id'));
  
  Sortable.create($("#" + formId + "").get(0), {
    animation: 150,
    swapThreshold: 1,
    emptyInsertThreshold: 1,
    ghostClass: 'blue-background-class',
    onStart: function(e) {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].onblur = function() {return false;}
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
  });
}
initForm();

function initSubscribe() {
  $('.formBlock').each(function () {
	var inputs = document.getElementById($(this).attr('id')).getElementsByClassName('payInput');
	var subscribeId = document.getElementById($(this).attr('id')).getElementsByTagName('form')[0].id;
	
    addFunctionalityToSubscribeElement($(this).attr('id'));
  
  Sortable.create($("#" + subscribeId + "").get(0), {
    animation: 150,
    swapThreshold: 1,
    emptyInsertThreshold: 1,
    ghostClass: 'blue-background-class',
    onStart: function(e) {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].onblur = function() {return false;}
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
  });
}
initSubscribe();

function initList() {
  $('.listBlock').each(function () {
    addFunctionalityToListElement($(this).attr('id'));
  });
}
initList();