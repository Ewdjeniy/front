import { makePreview, showHideSettings, getRandom, hexToRGB } from '../../global/global.js';
import { addFunctionalityToFormElement } from './formModule.js';

let formBlockElem = null;
let formWrapperElem = null;
let currentForm = null;
let formSubmitElem = null;
let formInputs = null;
let allInputs = null;

function includeInputsSettings(id) {
  'use strict';

  formBlockElem = document.getElementById(id);
  formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  currentForm = formBlockElem.getElementsByTagName('form')[0];
  formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
  formInputs = currentForm.getElementsByClassName('payInput');
  allInputs = currentForm.getElementsByTagName('input');
  
  showHideSettings('form-inputs-settings', 'formInputsIndicator');
  
  //Добавление поля
  
  showHideSettings('form-show-add-delete-settings', 'formAddDeleteIndicator');
  
  inputerAdd.value = '';

  function showOptionsForAdd() {
    currentForm = formBlockElem.getElementsByTagName('form')[0];

    inputerAdd.innerHTML = '<option value=""></option>';
    if (!currentForm.getElementsByClassName('name')[0]) {
      inputerAdd.innerHTML += '<option value="name">Имя</option>';
    }
    if (!currentForm.getElementsByClassName('email')[0]) {
      inputerAdd.innerHTML += '<option value="email">Email</option>';
    }
    if (!currentForm.getElementsByClassName('tel')[0]) {
      inputerAdd.innerHTML += '<option value="tel">Телефон</option>';
    }
  }
  showOptionsForAdd();

  inputerAdd.onchange = function () {
    let i = inputerAdd.selectedIndex;
    let formInput = document.createElement('input');


    if (inputerAdd.value == 'tel') {
      formInput.className = 'payInput tel';
      formInput.name = 'tel';
      formInput.type = inputerAdd.value;
      formInput.placeholder = inputerAdd.options[i].innerHTML;

      if (formInputBold.checked == true) {
        formInput.style.fontWeight = '900';
      } else {
        formInput.style.fontWeight = 'normal';
      }
      formInput.style.fontFamily = formInputFontFamilySelect.value;
      formInput.style.fontSize = $('#formInput-font-size-value').val() + 'px';
      if (formInputs[0]) {
//        if (parseFloat(getComputedStyle(formInputs[0]).width) != parseFloat(getComputedStyle(formWrapperElem).width) - 2) {
//          formInput.style.width = getComputedStyle(formInputs[0]).width;
//        }
        formInput.style.color = getComputedStyle(formInputs[0]).color;
        formInput.style.background = getComputedStyle(formInputs[0]).background;
        formInput.style.borderTopWidth = getComputedStyle(formInputs[0]).borderTopWidth;
        formInput.style.borderTopLeftRadius = getComputedStyle(formInputs[0]).borderTopLeftRadius;
        formInput.style.borderTopStyle = getComputedStyle(formInputs[0]).borderTopStyle;
        formInput.style.borderTopColor = getComputedStyle(formInputs[0]).borderTopColor;

        formInput.style.borderRightWidth = getComputedStyle(formInputs[0]).borderRightWidth;
        formInput.style.borderTopRightRadius = getComputedStyle(formInputs[0]).borderTopRightRadius;
        formInput.style.borderRightStyle = getComputedStyle(formInputs[0]).borderRightStyle;
        formInput.style.borderRightColor = getComputedStyle(formInputs[0]).borderRightColor;

        formInput.style.borderBottomWidth = getComputedStyle(formInputs[0]).borderBottomWidth;
        formInput.style.borderBottomRightRadius = getComputedStyle(formInputs[0]).borderBottomRightRadius;
        formInput.style.borderBottomStyle = getComputedStyle(formInputs[0]).borderBottomStyle;
        formInput.style.borderBottomColor = getComputedStyle(formInputs[0]).borderBottomColor;

        formInput.style.borderLeftWidth = getComputedStyle(formInputs[0]).borderLeftWidth;
        formInput.style.borderBottomLeftRadius = getComputedStyle(formInputs[0]).borderBottomLeftRadius;
        formInput.style.borderLeftStyle = getComputedStyle(formInputs[0]).borderLeftStyle;
        formInput.style.borderLeftColor = getComputedStyle(formInputs[0]).borderLeftColor;
      }
      if (formInputAutoHeight.checked == true) {
        formInput.style.height = 'auto';
      } else {
        formInput.style.height = $('#formInput-height-value').val() + 'px';
      }

      if (formTextShadowRadioOn.checked == true) {
        const hv = $('#form-text-shadow-horizontal-value').val() + 'px';
        const vv = $('#form-text-shadow-vertical-value').val() + 'px';
        const blr = $('#form-text-shadow-blur-value').val() + 'px';
        const clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
        const prpts = hv + " " + vv + " " + blr + " " + clr;

        formInput.style.textShadow = prpts;
      }

      $(formInput).insertBefore(formSubmitElem);
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      addFunctionalityToFormElement(id);
      makePreview();
    } else if (inputerAdd.value == 'name') {
      formInput.className = 'payInput name';
      formInput.name = 'name';
      formInput.type = inputerAdd.value;
      formInput.placeholder = inputerAdd.options[i].innerHTML;

      if (formInputBold.checked == true) {
        formInput.style.fontWeight = '900';
      } else {
        formInput.style.fontWeight = 'normal';
      }
      formInput.style.fontFamily = formInputFontFamilySelect.value;
      formInput.style.fontSize = $('#formInput-font-size-value').val() + 'px';
      if (formInputs[0]) {
//        if (parseFloat(getComputedStyle(formInputs[0]).width) != parseFloat(getComputedStyle(formWrapperElem).width) - 2) {
//          formInput.style.width = getComputedStyle(formInputs[0]).width;
//        }
        formInput.style.color = getComputedStyle(formInputs[0]).color;
        formInput.style.background = getComputedStyle(formInputs[0]).background;
        formInput.style.borderTopWidth = getComputedStyle(formInputs[0]).borderTopWidth;
        formInput.style.borderTopLeftRadius = getComputedStyle(formInputs[0]).borderTopLeftRadius;
        formInput.style.borderTopStyle = getComputedStyle(formInputs[0]).borderTopStyle;
        formInput.style.borderTopColor = getComputedStyle(formInputs[0]).borderTopColor;

        formInput.style.borderRightWidth = getComputedStyle(formInputs[0]).borderRightWidth;
        formInput.style.borderTopRightRadius = getComputedStyle(formInputs[0]).borderTopRightRadius;
        formInput.style.borderRightStyle = getComputedStyle(formInputs[0]).borderRightStyle;
        formInput.style.borderRightColor = getComputedStyle(formInputs[0]).borderRightColor;

        formInput.style.borderBottomWidth = getComputedStyle(formInputs[0]).borderBottomWidth;
        formInput.style.borderBottomRightRadius = getComputedStyle(formInputs[0]).borderBottomRightRadius;
        formInput.style.borderBottomStyle = getComputedStyle(formInputs[0]).borderBottomStyle;
        formInput.style.borderBottomColor = getComputedStyle(formInputs[0]).borderBottomColor;

        formInput.style.borderLeftWidth = getComputedStyle(formInputs[0]).borderLeftWidth;
        formInput.style.borderBottomLeftRadius = getComputedStyle(formInputs[0]).borderBottomLeftRadius;
        formInput.style.borderLeftStyle = getComputedStyle(formInputs[0]).borderLeftStyle;
        formInput.style.borderLeftColor = getComputedStyle(formInputs[0]).borderLeftColor;
      }
      if (formInputAutoHeight.checked == true) {
        formInput.style.height = 'auto';
      } else {
        formInput.style.height = $('#formInput-height-value').val() + 'px';
      }

      if (formTextShadowRadioOn.checked == true) {
        const hv = $('#form-text-shadow-horizontal-value').val() + 'px';
        const vv = $('#form-text-shadow-vertical-value').val() + 'px';
        const blr = $('#form-text-shadow-blur-value').val() + 'px';
        const clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
        const prpts = hv + " " + vv + " " + blr + " " + clr;

        formInput.style.textShadow = prpts;
      }

      $(formInput).insertBefore(formSubmitElem);
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      addFunctionalityToFormElement(id);
      makePreview();
    }
    if (inputerAdd.value == 'email') {
      formInput.className = 'payInput email';
      formInput.name = 'email';
      formInput.type = inputerAdd.value;
      formInput.placeholder = inputerAdd.options[i].innerHTML;

      if (formInputBold.checked == true) {
        formInput.style.fontWeight = '900';
      } else {
        formInput.style.fontWeight = 'normal';
      }
      formInput.style.fontFamily = formInputFontFamilySelect.value;
      formInput.style.fontSize = $('#formInput-font-size-value').val() + 'px';
      if (formInputs[0]) {
//        if (parseFloat(getComputedStyle(formInputs[0]).width) != parseFloat(getComputedStyle(formWrapperElem).width) - 2) {
//          formInput.style.width = getComputedStyle(formInputs[0]).width;
//        }
        formInput.style.color = getComputedStyle(formInputs[0]).color;
        formInput.style.background = getComputedStyle(formInputs[0]).background;
        formInput.style.borderTopWidth = getComputedStyle(formInputs[0]).borderTopWidth;
        formInput.style.borderTopLeftRadius = getComputedStyle(formInputs[0]).borderTopLeftRadius;
        formInput.style.borderTopStyle = getComputedStyle(formInputs[0]).borderTopStyle;
        formInput.style.borderTopColor = getComputedStyle(formInputs[0]).borderTopColor;

        formInput.style.borderRightWidth = getComputedStyle(formInputs[0]).borderRightWidth;
        formInput.style.borderTopRightRadius = getComputedStyle(formInputs[0]).borderTopRightRadius;
        formInput.style.borderRightStyle = getComputedStyle(formInputs[0]).borderRightStyle;
        formInput.style.borderRightColor = getComputedStyle(formInputs[0]).borderRightColor;

        formInput.style.borderBottomWidth = getComputedStyle(formInputs[0]).borderBottomWidth;
        formInput.style.borderBottomRightRadius = getComputedStyle(formInputs[0]).borderBottomRightRadius;
        formInput.style.borderBottomStyle = getComputedStyle(formInputs[0]).borderBottomStyle;
        formInput.style.borderBottomColor = getComputedStyle(formInputs[0]).borderBottomColor;

        formInput.style.borderLeftWidth = getComputedStyle(formInputs[0]).borderLeftWidth;
        formInput.style.borderBottomLeftRadius = getComputedStyle(formInputs[0]).borderBottomLeftRadius;
        formInput.style.borderLeftStyle = getComputedStyle(formInputs[0]).borderLeftStyle;
        formInput.style.borderLeftColor = getComputedStyle(formInputs[0]).borderLeftColor;
      }
      if (formInputAutoHeight.checked == true) {
        formInput.style.height = 'auto';
      } else {
        formInput.style.height = $('#formInput-height-value').val() + 'px';
      }

      if (formTextShadowRadioOn.checked == true) {
        const hv = $('#form-text-shadow-horizontal-value').val() + 'px';
        const vv = $('#form-text-shadow-vertical-value').val() + 'px';
        const blr = $('#form-text-shadow-blur-value').val() + 'px';
        const clr = hexToRGB($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
        const prpts = hv + " " + vv + " " + blr + " " + clr;

        formInput.style.textShadow = prpts;
      }

      $(formInput).insertBefore(formSubmitElem);
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      addFunctionalityToFormElement(id);
      makePreview();
    }
  }

  //Удаление поля

  inputerDelete.value = '';

  function showOptionsForDelete() {
    currentForm = formBlockElem.getElementsByTagName('form')[0];

    inputerDelete.innerHTML = '<option value=""></option>';
    if (currentForm.getElementsByClassName('name')[0]) {
      inputerDelete.innerHTML += '<option value="name">Имя</option>';
    }
    if (currentForm.getElementsByClassName('email')[0]) {
      inputerDelete.innerHTML += '<option value="email">Email</option>';
    }
    if (currentForm.getElementsByClassName('tel')[0]) {
      inputerDelete.innerHTML += '<option value="tel">Телефон</option>';
    }
  }
  showOptionsForDelete();

  function deleteInput(el, inputClass) {
    const stringToDelete = new RegExp('<input class="payInput ' + inputClass + '"[^>]*>', 'gi');
    el.innerHTML = el.innerHTML.replace(stringToDelete, '');
  }

  inputerDelete.onchange = function () {
    if (inputerDelete.value == 'tel') {
      deleteInput(currentForm, 'tel');
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      makePreview();
    } else if (inputerDelete.value == 'name') {
      console.log('hi');
      deleteInput(currentForm, 'name');
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      makePreview();
    } else if (inputerDelete.value == 'email') {
      deleteInput(currentForm, 'email');
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      makePreview();
    }
  }
  
  //Выбор шрифта полей
  formInputFontFamilySelect.value = getComputedStyle(formInputs[0]).fontFamily;
  formInputFontFamilySelect.onchange = function () {
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].style.fontFamily = formInputFontFamilySelect.value;
    }
    makePreview();
  }

  if (getComputedStyle(formInputs[0]).fontWeight == '900') {
    formInputBold.checked = true;
  } else {
    formInputBold.checked = false;
  }
  formInputBold.onclick = function () {
    if (formInputBold.checked) {
      for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].style.fontWeight = '900';
      }
    } else {
      for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].style.fontWeight = 'normal';
      }
    }
    makePreview();
  }

  //Размер шрифта полей
  
  showHideSettings('form-show-inputs-font-settings', 'formInputsFontIndicator');
  
  $('#formInput-font-size-value').val(parseInt(getComputedStyle(formInputs[0]).fontSize));
  $('#formInput-font-size-value-range').val(parseInt(getComputedStyle(formInputs[0]).fontSize));
  $('#formInput-font-size-value, #formInput-font-size-value-range').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('font-size', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-font-size-value") {
      $('#formInput-font-size-value-range').val($(this).val());
    } else {
      $('#formInput-font-size-value').val($(this).val());
    }
    makePreview();
  });

  //Цвет текста у полей
  $('#formInput-color-value').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('color', $(this).val());
    }
    makePreview();
  });

  //Цвет полей
  
  showHideSettings('formInput-background-types', 'formInputsBackgroundIndicator');

  formInputBackgroundRadioColor.onclick = function () {
    formInputBackgroundGradient.style.display = 'none';
    formInputBackgroundColor.style.display = 'block';
  }
  formInputBackgroundRadioGradient.onclick = function () {
    formInputBackgroundColor.style.display = 'none';
    formInputBackgroundGradient.style.display = 'block';
  }

  $('#formInput-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = hexToRGB($(this).val(), opacity);
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', color);
    }
    makePreview();
  });

  $('#formInput-gradient-color-1').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', 'linear-gradient(' + parseInt($('#formInput-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#formInput-gradient-color-2').val() + ')');
    }
    makePreview();
  });

  $('#formInput-gradient-color-2').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', 'linear-gradient(' + parseInt($('#formInput-gradient-angle').val()) + 'deg, ' + $('#formInput-gradient-color-1').val() + ', ' + $(this).val() + ')');
    }
    makePreview();
  });

  $('#formInput-gradient-angle').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#formInput-gradient-color-1').val() + ', ' + $('#formInput-gradient-color-2').val() + ')');
    }
    makePreview();
  });

  $('#formInput-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#formInput-main-color').val(), opacity / 100);
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', color);
    }
    makePreview();
  });

  //Высота полей
  
  showHideSettings('formInput-height', 'formInputsSizeIndicator');
  
  if (getComputedStyle(formInputs[0]).height == 'auto') {
    formInputAutoHeight.checked = true;
  } else {
    formInputAutoHeight.checked = false;
  }
  $('#formInput-height-value').val(parseInt($(formInputs[0]).css('height')));
  $('#formInput-height-value-range').val(parseInt($(formInputs[0]).css('height')));

  formInputAutoHeight.onclick = function () {
    if (formInputAutoHeight.checked == true) {
      for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].style.height = 'auto';
      }
      makePreview();
    }
  }

  $('#formInput-height-value, #formInput-height-value-range').on('input', function () {
    if (formInputAutoHeight.checked == false) {
      for (let i = 0; i < formInputs.length; i++) {
        $(formInputs[i]).css('height', $(this).val() + 'px');
      }
      if ($(this).attr('id') == "formInput-height-value") {
        $('#formInput-height-value-range').val($(this).val());
      } else {
        $('#formInput-height-value').val($(this).val());
      }
    }
    makePreview();
  });

  //Ширина полей
  if (getComputedStyle(formInputs[0]).width == '100%') {
    formInputAutoWidth.checked = true;
  } else {
    formInputAutoWidth.checked = false;
  }
  $('#formInput-width-value').val(parseInt($(formInputs[0]).css('width')));
  $('#formInput-width-value-range').val(parseInt($(formInputs[0]).css('width')));

  formInputAutoWidth.onclick = function () {
    if (formInputAutoWidth.checked == true) {
      for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].style.width = '100%';
      }
      makePreview();
    }
  }

  $('#formInput-width-value, #formInput-width-value-range').on('input', function () {
    if (formInputAutoWidth.checked == false) {
      for (let i = 0; i < formInputs.length; i++) {
        $(formInputs[i]).css('width', $(this).val() + 'px');
      }
      if ($(this).attr('id') == "formInput-width-value") {
        $('#formInput-width-value-range').val($(this).val());
      } else {
        $('#formInput-width-value').val($(this).val());
      }
    }
    makePreview();
  });

  //Настройки всех границ полей
  
  showHideSettings('form-show-inputs-border-settings', 'formInputsBorderIndicator');

  formInputBorderRadioEvery.onclick = function () {
    formInputBorderAll.style.display = 'none';
    formInputBorderEvery.style.display = 'block';
  }
  formInputBorderRadioAll.onclick = function () {
    formInputBorderAll.style.display = 'block';
    formInputBorderEvery.style.display = 'none';
  }

  $('#formInput-border-value').val(parseInt($(formInputs[0]).css('border-width')));
  $('#formInput-border-value-range').val(parseInt($(formInputs[0]).css('border-width')));
  $('#formInput-border-radius').val(parseInt($(formInputs[0]).css('border-radius')));
  $('#formInput-border-radius-range').val(parseInt($(formInputs[0]).css('border-radius')));

  $('#formInput-border-value, #formInput-border-value-range').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-value") {
      $('#formInput-border-value-range').val($(this).val());
    } else {
      $('#formInput-border-value').val($(this).val());
    }
    makePreview();
  });

  $('#formInput-border-radius, #formInput-border-radius-range').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-radius") {
      $('#formInput-border-radius-range').val($(this).val());
    } else {
      $('#formInput-border-radius').val($(this).val());
    }
    makePreview();
  });

  $('#formInput-border-style').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-style', $(this).find('option:selected').val());
    }
    makePreview();
  });

  $('#formInput-border-color-value').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-color', $(this).val());
    }
    makePreview();
  });

  /*Настройки для верхней границы полей*/

  $('#formInput-border-top-value').val(parseInt($(formInputs[0]).css('border-top-width')));
  $('#formInput-border-top-value-range').val(parseInt($(formInputs[0]).css('border-top-width')));
  $('#formInput-border-left-top-radius').val(parseInt($(formInputs[0]).css('border-top-left-radius')));
  $('#formInput-border-left-top-radius-range').val(parseInt($(formInputs[0]).css('border-top-left-radius')));

  $('#formInput-border-top-value, #formInput-border-top-value-range').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-top-value") {
      $('#formInput-border-top-value-range').val($(this).val());
    } else {
      $('#formInput-border-top-value').val($(this).val());
    }
    makePreview();
  });

  $('#formInput-border-left-top-radius, #formInput-border-left-top-radius-range').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-left-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-left-top-radius") {
      $('#formInput-border-left-top-radius-range').val($(this).val());
    } else {
      $('#formInput-border-left-top-radius').val($(this).val());
    }
    makePreview();
  });
  $('#formInput-border-top-style-value').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-style', $(this).find('option:selected').val());
    }
    makePreview();
  });

  $('#formInput-border-top-color').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-color', $(this).val());
    }
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для правой границы полей*/
  $('#formInput-border-right-value').val(parseInt($(formInputs[0]).css('border-right-width')));
  $('#formInput-border-right-value-range').val(parseInt($(formInputs[0]).css('border-right-width')));
  $('#formInput-border-right-radius').val(parseInt($(formInputs[0]).css('border-top-right-radius')));
  $('#formInput-border-right-radius-range').val(parseInt($(formInputs[0]).css('border-top-right-radius')));

  $('#formInput-border-right-value, #formInput-border-right-value-range').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-right-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-right-value") {
      $('#formInput-border-right-value-range').val($(this).val());
    } else {
      $('#formInput-border-right-value').val($(this).val());
    }
    makePreview();
  });
  $('#formInput-border-right-radius, #formInput-border-right-radius-range').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-right-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-right-radius") {
      $('#formInput-border-right-radius-range').val($(this).val());
    } else {
      $('#formInput-border-right-radiuse').val($(this).val());
    }
    makePreview();
  });
  $('#formInput-border-right-style').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-right-style', $(this).find('option:selected').val());
    }
    makePreview();
  });

  $('#formInput-border-right-color').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-right-color', $(this).val());
    }
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для нижней границы полей*/
  $('#formInput-border-bottom-value').val(parseInt($(formInputs[0]).css('border-bottom-width')));
  $('#formInput-border-bottom-value-range').val(parseInt($(formInputs[0]).css('border-bottom-width')));
  $('#formInput-border-bottom-right-radius').val(parseInt($(formInputs[0]).css('border-bottom-right-radius')));
  $('#formInput-border-bottom-right-radius-range').val(parseInt($(formInputs[0]).css('border-bottom-right-radius')));

  $('#formInput-border-bottom-value, #formInput-border-bottom-value-range').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-bottom-value") {
      $('#formInput-border-bottom-value-range').val($(this).val());
    } else {
      $('#formInput-border-bottom-value').val($(this).val());
    }
    makePreview();
  });

  $('#formInput-border-bottom-right-radius, #formInput-border-bottom-right-radius-range').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-right-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-bottom-right-radius") {
      $('#formInput-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#formInput-border-bottom-right-radius').val($(this).val());
    }
    makePreview();
  });

  $('#formInput-border-bottom-style').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-style', $(this).find('option:selected').val());
    }
    makePreview();
  });

  $('#formInput-border-bottom-color').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-color', $(this).val());
    }
    makePreview();
  });

  /*Конец блока*/

  /*Настройки для левой границы полей*/
  $('#formInput-border-left-value').val(parseInt($(formInputs[0]).css('border-left-width')));
  $('#formInput-border-left-value-range').val(parseInt($(formInputs[0]).css('border-left-width')));
  $('#formInput-border-bottom-left-radius').val(parseInt($(formInputs[0]).css('border-bottom-left-radius')));
  $('#formInput-border-bottom-left-radius-range').val(parseInt($(formInputs[0]).css('border-bottom-left-radius')));

  $('#formInput-border-left-value, #formInput-border-left-value-range').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-left-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-left-value") {
      $('#formInput-border-left-value-range').val($(this).val());
    } else {
      $('#formInput-border-left-value').val($(this).val());
    }
    makePreview();
  });
  $('#formInput-border-bottom-left-radius, #formInput-border-bottom-left-radius-range').on('input', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-left-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-bottom-left-radius") {
      $('#formInput-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#formInput-border-bottom-left-radius').val($(this).val());
    }
    makePreview();
  });

  $('#formInput-border-left-style').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-left-style', $(this).find('option:selected').val());
    }
    makePreview();
  });

  $('#formInput-border-left-color').on('change', function () {
    for (let i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-left-color', $(this).val());
    }
    makePreview();
  });

}




export default includeInputsSettings;