import './list.css';
import { makePreview, getRandom } from '../../global/global.js';

function dragList(e) {
  const listBlockId = 'list' + getRandom();
  const module = '<div id="' + listBlockId + '" class="listBlock">'+
                      '<div class="listWrapper" style="width: 300px;">'+
                        '<div class="image_settings list_settings">'+
                          '<span class="glyphicon glyphicon-cog listSet"></span>'+
                          '<span class="glyphicon glyphicon-arrow-left"></span>'+
                          '<span class="glyphicon glyphicon-align-center"></span>'+
                          '<span class="glyphicon glyphicon-arrow-right"></span>'+
                          '<span class="glyphicon glyphicon-duplicate copyList"></span>'+
                          '<span class="glyphicon glyphicon-remove"></span>'+
                        '</div>'+
                          '<ul class="list">'+
                            '<li>Первое преимущество</li>'+
                            '<li>Второе преимущество</li>'+
                            '<li>Третье преимущество</li>'+
                          '</ul>'+
                          '<div class="resizerTextXY"></div>'+
                          '<div class="resizerX"></div>'+
                        '</div>'+
                      '</div>'+
                   '</div>'
  $(e.item).replaceWith(module);
  
  addFunctionalityToListElement(listBlockId);
  
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
    listWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    listWrapperElem.style.border = '2px solid transparent';
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
//  $('#mainArea').on('mousedown', '.copy', function () {
//    destroy();
//  });
//  $('#mainArea').on('mousedown', '.copy-content', function () {
//    destroy();
//  });
//  savePage.onmousedown = function() {
//    destroy();
//  }
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




export { dragList, addFunctionalityToListElement };