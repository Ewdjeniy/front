import './video.css';
import { makePreview, getRandom } from '../../global/global.js';

function dragVideo(e) {
  const videoBlockId = 'video' + getRandom();
  var videoModule = '<div id="' + videoBlockId + '" class="videoBlock">'+
                            '<div class="imageWrapper videoWrapper" style="width: 600px;">'+
                              '<div class="image_settings">'+
						          '<span class="glyphicon glyphicon-cog videoSet"></span>'+
                                  '<span class="glyphicon glyphicon-arrow-left"></span>'+
                                  '<span class="glyphicon glyphicon-align-center"></span>'+
                                  '<span class="glyphicon glyphicon-arrow-right"></span>'+
								  '<span class="glyphicon glyphicon-duplicate copyVideo"></span>'+
								  '<span class="glyphicon glyphicon-remove"></span>'+
                              '</div>'+
                              '<div class="border" id="' + getRandom() + '">'+
                                '<img class="videoimg img" src="' + require("./images/video.png") +'" alt="image">'+
                                '<input class="imgProportion" type="hidden" value="1">'+
                                '<div class="iframeWrapper">'+
                                  '<iframe class="video" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
                                  '<img class="noVideo" src="' + require("./images/video.png") +'" alt="video">'+
                                '</div>'+
                              '<div class="resizerY"></div>'+
                              '<div class="resizerXY"></div>'+
                              '<div class="resizerX"></div>'+
                            '</div>'+
                          '</div>';
  $(e.item).replaceWith(videoModule);

  addFunctionalityToElement(videoBlockId);
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
    imgWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerY_Elem.style.visibility = 'visible';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    imgWrapperElem.style.border = '2px solid transparent';
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


export { dragVideo, addFunctionalityToElement };