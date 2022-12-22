String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function setYoutubeBackgroundVideo(link, params) {
  $('#backgroundVideo > *').remove();

  //var teta = 'https://www.youtube.com/embed/5tvGJsen9mo?controls=0&autoplay=1&mute=1&loop=1';

  var p = "?autoplay=1&controls=0&loop=" + params['loop'] + "&mute=" + params['mute'];

  console.log(p);


  link = 'https://www.youtube.com/embed/' + link + p;


  var videoblock = '<div class="video-background">\
                             <div class="video-foreground">\
                                    <iframe width="560" height="315" src="' + link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
                             </div>\
                          </div>';

  $('#backgroundVideo').append(videoblock);
}

function setAnotherBackgroundVideo(link, params) {
  $('#backgroundVideo > *').remove();
  //var videoblock = '<video width="100%" height="100%" autoplay muted loop src="' + link + '"></video>';
  var videoblock = '<div class="video-background">\
                             <div class="video-foreground">\
                             <video width="100%" height="100%" autoplay muted loop src="' + link + '"></video>\
                             </div>\
                          </div>';
  $('#backgroundVideo').append(videoblock);
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
  var lineElem = document.getElementsByClassName('lineBlock');
  var background = document.getElementById('backgroundVideo');
  var jsScripts = mainAreaElem.getElementsByClassName('code');
  var digitalHtml = '';
  var digitalCss = '';
  var digitalJs = '';
  var stringToDevare = '';
  var createStyle = function (id, elClass, styles) {
    var el = (elClass == 0) ? document.getElementById(id) : document.getElementById(id).getElementsByClassName(elClass)[0];
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
  var deleteDeliveryCode = function () {
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
  let stringToDelete = '';

  digitalHtml = background.outerHTML;
  digitalHtml += deleteDeliveryCode();
  mainAreaElemCopy.innerHTML = '';
  digitalHtml = deleteTeg(digitalHtml, 'div class="handle', 'div');
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
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings line_settings"', 'div');
  stringToDelete = new RegExp(' style="display: none;"', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp('<input class="imgProportion"[^>]*>', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp(' border: 2px solid transparent;', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp(' border: 2px solid rgb\\(105, 133, 212\\);', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp('<div class="imageWrapper videoWrapper"[^>]*>', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '<div class="imageWrapper videoWrapper">');
  stringToDelete = new RegExp('<img class="videoimg img"[^>]*>', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp('delay', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, 'autoplay=1');
  stringToDelete = new RegExp(' autocomplete="off"', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');



  for (let i = 0; i < mainSelectorElem.length; i++) {
    createStyle(mainSelectorElem[i].id, 'content', ['min-height']);
  }

  for (let i = 0; i < contentSelectorElem.length; i++) {
    createStyle(contentSelectorElem[i].id, 0, ['height']);
  }

  for (let i = 0; i < imageElem.length; i++) {
    createStyle(imageElem[i].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
  }

  for (let i = 0; i < textElem.length; i++) {
    createStyle(textElem[i].id, 0, ['display', 'justify-content', 'flex-wrap']);
    createStyle(textElem[i].id, 'text', ['font-family', 'color', 'text-shadow']);
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
  for (let i = 0; i < lineElem.length; i++) {
    createStyle(lineElem[i].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
    createStyle(lineElem[i].id, 'lineWrapper', ['width', 'height']);
  }

  for (let i = 0; i < jsScripts.length; i++) {
    digitalJs += jsScripts[i].innerHTML + ':';
  }

  digitalCss += mediaStyle.innerHTML;

  localStorage.digitalHtml = digitalHtml;
  localStorage.digitalCss = digitalCss;
  localStorage.digitalJs = digitalJs;
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

function getRandom() {
  var d1 = Math.floor((Math.random() * 100000));
  var d2 = Math.floor((Math.random() * 100000));
  var d3 = Math.floor((Math.random() * 100000));
  return d1 + "" + d2 + "" + d3;
}

function getRandomColor() {
  var colorR = Math.floor((Math.random() * 256));
  var colorG = Math.floor((Math.random() * 256));
  var colorB = Math.floor((Math.random() * 256));
  return "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}

function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName)
    node.removeEventListener('animationend', handleAnimationEnd)

    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

function indexOfMax(mas) {
  if (mas.length === 0) {
    return -1;
  }

  var max = mas[0];
  var maxIndex = 0;

  for (var i = 1; i < mas.length; i++) {
    if (mas[i] > max) {
      maxIndex = i;
      max = mas[i];
    }
  }

  return maxIndex;
}

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

function closeRightPanel() {
  var rightSidebarEl = document.getElementById('rightSidebar');
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


export {
  makePreview,
  setYoutubeBackgroundVideo,
  setAnotherBackgroundVideo,
  hexToRGB,
  getRandom,
  indexOfMax,
  showHideSettings,
  closeRightPanel
};
