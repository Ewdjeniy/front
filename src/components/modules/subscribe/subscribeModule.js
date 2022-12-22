import './subscribe.css';
import { makePreview, getRandom } from '../../global/global.js';

function dragSubscribe(e) {
  const subscribeBlockId = 'subscribe' + getRandom();
  const module = '<div id="' + subscribeBlockId + '" class="subscribeBlock">'+
                      '<div class="subscribeWrapper" style="width: 300px;">'+
                        '<div class="image_settings subscribe_settings">'+
                          '<span class="glyphicon glyphicon glyphicon-move"></span>'+
                          '<span class="glyphicon glyphicon-cog subscribeSet"></span>'+
                          '<span class="glyphicon glyphicon-arrow-left"></span>'+
                          '<span class="glyphicon glyphicon-align-center"></span>'+
                          '<span class="glyphicon glyphicon-arrow-right"></span>'+
                          '<span class="glyphicon glyphicon-duplicate copySubscribe"></span>'+
                          '<span class="glyphicon glyphicon-remove"></span>'+
                        '</div>'+
                        '<div class="subscribe">'+
                          '<div class="formCodeWrapper">'+
                            '<form class="subscribeForm" method="POST" enctype="multipart/form-data">'+
                              '<input autocomplete="off" class="subscribeInput name" name="name" type="text" placeholder="Ваше имя">'+
                              '<input autocomplete="off" class="subscribeInput email" name="email" type="email" placeholder="Ваш емейл">'+
                              '<div class="submitWrapper">'+
                                '<button class="subscribeSubmit" type="submit">ПОДПИСАТЬСЯ</button>'+
                              '</div>'+
                            '</form>'+
                          '</div>'+
                          '<div class="deliveryCode"></div>'+
                          '<div class="resizerTextXY"></div>'+
                          '<div class="resizerX"></div>'+
                        '</div>'+
                      '</div>'+
                   '</div>'
  $(e.item).replaceWith(module);
  
  addDragAndDropToSubscribeForm(subscribeBlockId);
  
  addFunctionalityToSubscribeElement(subscribeBlockId);
}

function addDragAndDropToSubscribeForm(id) {
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
    subscribeWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    subscribeWrapperElem.style.border = '2px solid transparent';
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


export { dragSubscribe, addDragAndDropToSubscribeForm, addFunctionalityToSubscribeElement };