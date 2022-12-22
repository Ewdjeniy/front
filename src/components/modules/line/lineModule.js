import './line.css';
import { makePreview, getRandom } from '../../global/global.js';

function dragLine(e) {
  const lineBlockId = 'line' + getRandom();
  const module = '<div id="' + lineBlockId + '" class="lineBlock">'+
                      '<div class="lineWrapper" style="width: 300px;">'+
                        '<div class="image_settings line_settings">'+
                          '<span class="glyphicon glyphicon glyphicon-move"></span>'+
                          '<span class="glyphicon glyphicon-cog lineSet"></span>'+
                          '<span class="glyphicon glyphicon-arrow-left"></span>'+
                          '<span class="glyphicon glyphicon-align-center"></span>'+
                          '<span class="glyphicon glyphicon-arrow-right"></span>'+
                          '<span class="glyphicon glyphicon-duplicate copyLine"></span>'+
                          '<span class="glyphicon glyphicon-remove"></span>'+
                        '</div>'+
                        '<div class="resizerX"></div>'+
                        '<hr class="line">'+
                      '</div>'+
                   '</div>'
  $(e.item).replaceWith(module);
  
  addFunctionalityToLineElement(lineBlockId);
}

function addFunctionalityToLineElement(id) {
  var lineBlockElem = document.getElementById(id);
  var lineWrapperElem = lineBlockElem.getElementsByClassName('lineWrapper')[0];
  var lineSettings = lineBlockElem.getElementsByClassName('image_settings')[0];
  var resizerX_Elem = lineBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = lineBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowLeftElem = lineBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowCenterElem = lineBlockElem.getElementsByClassName('glyphicon')[3];
  var arrowRightElem = lineBlockElem.getElementsByClassName('glyphicon')[4];
  var lineCopyElem = lineBlockElem.getElementsByClassName('glyphicon')[5];
  var lineDeleteElem = lineBlockElem.getElementsByClassName('glyphicon')[6];
  var lineElem = lineBlockElem.getElementsByClassName('line')[0];


  //Сохранение анонимных функций в переменных (для removeEventlinener)
  var imgHover = function () {
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    resizerX_Elem.style.visibility = 'hidden';
  };

  var resizeX = function () {
    if (
      getComputedStyle(lineBlockElem)["-webkit-box-pack"] == 'end' ||
      getComputedStyle(lineBlockElem)["-ms-flex-pack"] == 'end' ||
      getComputedStyle(lineBlockElem).justifyContent == 'flex-end'
    ) {
      lineWrapperElem.style.width = (lineWrapperElem.getBoundingClientRect().left + lineWrapperElem.getBoundingClientRect().width - event.clientX) + 'px';
    } else {
      lineWrapperElem.style.width = (event.clientX - lineWrapperElem.getBoundingClientRect().left) + 'px';
    }
  };

  var finishResizeX = function () {
    if (
      event.clientX < lineWrapperElem.getBoundingClientRect().left ||
      event.clientX > lineWrapperElem.getBoundingClientRect().left + lineWrapperElem.getBoundingClientRect().width ||
      event.clientY < lineWrapperElem.getBoundingClientRect().top ||
      event.clientY > lineWrapperElem.getBoundingClientRect().top + lineWrapperElem.getBoundingClientRect().height
    ) {
      imgChangeBorderToZero();
    }
    lineWrapperElem.addEventListener('mouseover', imgHover);
    lineWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeX);
    document.removeEventListener('mouseup', finishResizeX);
	makePreview();
  }

  //Обработчики событий
  lineWrapperElem.addEventListener('mouseover', imgHover);
  lineWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);

  resizerX_Elem.onmousedown = function () {
    lineWrapperElem.removeEventListener('mouseover', imgHover);
    lineWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', finishResizeX);
    return false;
  };
  
  arrowLeftElem.onclick = function () {
    lineBlockElem.style["-webkit-box-pack"] = 'start';
    lineBlockElem.style["-ms-flex-pack"] = 'start';
    lineBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
	makePreview();
  }

  arrowCenterElem.onclick = function () {
    lineBlockElem.style["-webkit-box-pack"] = 'center';
    lineBlockElem.style["-ms-flex-pack"] = 'center';
    lineBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
	makePreview();
  }

  arrowRightElem.onclick = function () {
    lineBlockElem.style["-webkit-box-pack"] = 'end';
    lineBlockElem.style["-ms-flex-pack"] = 'end';
    lineBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
	makePreview();
  }

  lineDeleteElem.onclick = function () {
    lineBlockElem.remove();
	makePreview();
  }
}



export { dragLine,  addFunctionalityToLineElement};