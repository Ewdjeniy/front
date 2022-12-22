import './button.css';
import { makePreview, getRandom } from '../../global/global.js';

function dragButton(e) {
  const buttonBlockId = 'button' + getRandom();
  const module = '<div id="' + buttonBlockId + '" class="buttonBlock">'+
                      '<div class="buttonWrapper" style="width: 600px;">'+
                        '<div class="image_settings button_settings">'+
                          '<span class="glyphicon glyphicon-cog buttonSet"></span>'+
                          '<span class="glyphicon glyphicon-arrow-left"></span>'+
                          '<span class="glyphicon glyphicon-align-center"></span>'+
                          '<span class="glyphicon glyphicon-arrow-right"></span>'+
                          '<span class="glyphicon glyphicon-duplicate copyButton"></span>'+
                          '<span class="glyphicon glyphicon-remove"></span>'+
                        '</div>'+
                        '<div class="button"><div>КЛИКНИТЕ, ЧТОБЫ ПРОДОЛЖИТЬ!</div></div>'+
                        '<div class="resizerTextXY"></div>'+
                        '<div class="resizerX"></div>'+
                      '</div>'+
                   '</div>'
  $(e.item).replaceWith(module);
  addFunctionalityToButtonElement(buttonBlockId);
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



export { dragButton, addFunctionalityToButtonElement };
