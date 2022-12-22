import './form.css';
import { makePreview, getRandom } from '../../global/global.js';

function dragForm(e) {
  const formBlockId = 'form' + getRandom();
  const module = '<div id="' + formBlockId + '" class="formBlock">'+
                      '<div class="formWrapper" style="width: 354px;">'+
                        '<div class="image_settings form_settings">'+
                          '<span class="glyphicon glyphicon glyphicon-move"></span>'+
                          '<span class="glyphicon glyphicon-cog formSet"></span>'+
                          '<span class="glyphicon glyphicon-arrow-left"></span>'+
                          '<span class="glyphicon glyphicon-align-center"></span>'+
                          '<span class="glyphicon glyphicon-arrow-right"></span>'+
                          '<span class="glyphicon glyphicon-duplicate copyForm"></span>'+
                          '<span class="glyphicon glyphicon-remove"></span>'+
                        '</div>'+
                        '<div class="form">'+
                          '<form method="POST" enctype="multipart/form-data">'+
                            '<input class="inputFunnelId" type="hidden" name="funnel_id" />'+
                            '<input class="inputFunnelStepId" type="hidden" name="funnel_step_id" />'+
                            '<input class="payInput name" name="name" type="text" placeholder="Ваше имя">'+
                            '<input class="payInput email" name="email" type="email" placeholder="Ваш емейл">'+
                            '<input class="paySubmit" type="submit" value="Оформить заказ">'+
                          '</form>'+
                          '<div class="resizerY"></div>'+
                          '<div class="resizerXY"></div>'+
                          '<div class="resizerX"></div>'+
                        '</div>'+
                      '</div>'+
                   '</div>'
  $(e.item).replaceWith(module);
  
  const formBlockEl = document.getElementById(formBlockId);
  const inputFunnelIdEl = formBlockEl.getElementsByClassName('inputFunnelId')[0];
  const inputFunnelStepId = formBlockEl.getElementsByClassName('inputFunnelStepId')[0];
  const serverInputFunnelIdEl = document.getElementById('serverInputFunnelId');
  const serverInputFunnelStepIdEl = document.getElementById('serverInputFunnelStepId');
  
  inputFunnelIdEl.value = serverInputFunnelIdEl.value;
  inputFunnelStepId.value = serverInputFunnelStepIdEl.value;
  
  addDragAndDropToForm(formBlockId);
  
  addFunctionalityToFormElement(formBlockId);
}

function addDragAndDropToForm(id) {
  let formBlockElem = document.getElementById(id);
  let currentForm = formBlockElem.getElementsByTagName('form')[0];
  const inputs = document.getElementById(id).getElementsByClassName('payInput');
  const formId = getRandom();
  currentForm.id = formId;

  Sortable.create($("#" + formId + "").get(0), {
    animation: 150,
    swapThreshold: 1,
    emptyInsertThreshold: 1,
    ghostClass: 'blue-background-class',
	draggable: ".payInput",
    onEnd: function (e) {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].blur();
      }
      makePreview();
    }
  });
}

function addFunctionalityToFormElement(id) {
  var formBlockElem = document.getElementById(id);
  var formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  var formElem = formBlockElem.getElementsByClassName('form')[0];
  var imgSettings = formBlockElem.getElementsByClassName('image_settings')[0];
  var resizerY_Elem = formBlockElem.getElementsByClassName('resizerY')[0];
  var resizerXY_Elem = formBlockElem.getElementsByClassName('resizerXY')[0];
  var resizerX_Elem = formBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = formBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowLeftElem = formBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowCenterElem = formBlockElem.getElementsByClassName('glyphicon')[3];
  var arrowRightElem = formBlockElem.getElementsByClassName('glyphicon')[4];
  var imgCopyElem = formBlockElem.getElementsByClassName('glyphicon')[5];
  var imgDeleteElem = formBlockElem.getElementsByClassName('glyphicon')[6];
  var formSubmitElem = formBlockElem.getElementsByClassName('paySubmit')[0];
  var formInputs = formBlockElem.getElementsByClassName('payInput');

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function () {
    formWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerY_Elem.style.visibility = 'visible';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };

  var imgChangeBorderToZero = function () {
    formWrapperElem.style.border = '2px solid transparent';
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





  export { dragForm, addDragAndDropToForm, addFunctionalityToFormElement };