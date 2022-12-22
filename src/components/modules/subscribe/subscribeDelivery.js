import includeSubscribeInputsSettings from './subscribeInputsSettings.js';
import includeSubscribeSubmitSettings from './subscribeSumbitSettings.js';
import { makePreview, showHideSettings, hexToRGB } from '../../global/global.js';
import { addDragAndDropToSubscribeForm, addFunctionalityToSubscribeElement } from './subscribeModule.js';

let subscribeBlockElem = null;
let subscribeWrapperElem = null;
let formCodeWrapperElem = null;
let currentSubscribe = null;
let subscribeSubmitElem = null;
let subscribeInputs = null;
let allInputs = null;
let deliveryCodeEl = null;


function includeSubscribeDelivery(id) {
  'use strict';

  subscribeBlockElem = document.getElementById(id);
  subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  formCodeWrapperElem = subscribeBlockElem.getElementsByClassName('formCodeWrapper')[0];
  currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
  allInputs = currentSubscribe.getElementsByTagName('input');
  let extraFieldCounter = 1;
  deliveryCodeEl = subscribeBlockElem.getElementsByClassName('deliveryCode')[0];
  let inputsInfoEl = document.getElementById('inputsInfo');
  let extraFields = inputsInfoEl.getElementsByClassName('extraField');
  const deliveryCodeAreaEl = document.getElementById('deliveryCodeArea');
  const selectInputsNames = document.getElementsByClassName('fieldNameSelect'),
    nameFieldEl = document.getElementById('nameField'),
    emailFieldEl = document.getElementById('emailField');

  // Вывод действующей рассылки в настройках

  function showDelivery() {
    extraFieldCounter = 1;
    deliveryCodeAreaEl.value = deliveryCodeEl.innerHTML;
    for (let i = 0; i < selectInputsNames.length; i++) {
      selectInputsNames[i].innerHTML = '';
    }
    for (let i = 0; i < extraFields.length;) {
      if (extraFields[i]) {
        extraFields[i].remove();
        inputsInfoEl = document.getElementById('inputsInfo');
        extraFields = inputsInfoEl.getElementsByClassName('extraField');
      } else {
        i++;
      }
    }
    for (let i = 0; i < allInputs.length; i++) {
      if (allInputs[i].className == 'subscribeInput extra') {
        const extraFieldEl = document.createElement('div');

        extraFieldEl.innerHTML = '<div class="extraField"><br>ДОПОЛНИТЕЛЬНОЕ ПОЛЕ ' + extraFieldCounter + '<br>' +
          '<div class="submitValue">' +
          '<input class="fieldPlaceholder" type="text" value="' + allInputs[i].placeholder + '"><span class="deleteField">X</span>' +
          '</div><br><br>' +
          '<select class="fieldNameSelect"></select><br>' +
          '<input class="extraFieldRequired" type="checkbox">&nbsp; required<br><br>' +
          '</div>';
        inputsInfoEl.append(extraFieldEl);

        const deleteFieldEl = extraFieldEl.getElementsByClassName('deleteField')[0];
        deleteFieldEl.onclick = function () {
          extraFieldEl.remove();
        }

        changeInputsInfo();
        extraFieldEl.getElementsByClassName('fieldNameSelect')[0].value = allInputs[i].name;
        if (allInputs[i].required == true) {
          extraFieldEl.getElementsByClassName('extraFieldRequired')[0].checked = true;
        }
        extraFieldCounter++;
      } else if (allInputs[i].className == 'subscribeInput name') {
        nameFieldEl.getElementsByClassName('fieldPlaceholder')[0].value = allInputs[i].placeholder;
        if (allInputs[i].required == true) {
          nameRequire.checked = true;
        }
      } else if (allInputs[i].className == 'subscribeInput email') {
        emailFieldEl.getElementsByClassName('fieldPlaceholder')[0].value = allInputs[i].placeholder;
      }
    }
    formAction.value = '';
    changeInputsInfo();
  }
  showDelivery();

  //Ввод рассылки

  deliveryCodeAreaEl.oninput = changeInputsInfo;

  nameDisabled.onclick = function () {
    if (nameDisabled.checked == true) {
      nameInfo.style.display = 'none';
    } else {
      nameInfo.style.display = 'block';
    }
  }

  // Вставка рассылки

  deliveryCodeExec.onclick = function () {
    let inputStyles = [];
    let submitStyles = [];
    const deliveryForm = document.createElement('form'),
      inputs = deliveryCodeEl.getElementsByTagName('input'),
      extraFields = document.getElementsByClassName('extraField');

    let deliveryInputName = null,
      deliveryInputEmail = null,
      deliverySubmit = null,
      hiddenInputs = null;
    if (subscribeInputs[0]) {
      if (parseFloat(getComputedStyle(subscribeInputs[0]).width) != parseFloat(getComputedStyle(subscribeWrapperElem).width) - 2) {
        inputStyles.push(parseFloat(getComputedStyle(subscribeInputs[0]).width) / parseFloat(getComputedStyle(document.documentElement).fontSize) + 'rem');
      } else {
        inputStyles.push('100%');
      }
      inputStyles.push(getComputedStyle(subscribeInputs[0]).color, subscribeInputs[0].style.background, getComputedStyle(subscribeInputs[0]).borderTopWidth, getComputedStyle(subscribeInputs[0]).borderTopLeftRadius, getComputedStyle(subscribeInputs[0]).borderTopStyle, getComputedStyle(subscribeInputs[0]).borderTopColor, getComputedStyle(subscribeInputs[0]).borderRightWidth, getComputedStyle(subscribeInputs[0]).borderTopRightRadius, getComputedStyle(subscribeInputs[0]).borderRightStyle, getComputedStyle(subscribeInputs[0]).borderRightColor, getComputedStyle(subscribeInputs[0]).borderBottomWidth, getComputedStyle(subscribeInputs[0]).borderBottomRightRadius, getComputedStyle(subscribeInputs[0]).borderBottomStyle, getComputedStyle(subscribeInputs[0]).borderBottomColor, getComputedStyle(subscribeInputs[0]).borderLeftWidth, getComputedStyle(subscribeInputs[0]).borderBottomLeftRadius, getComputedStyle(subscribeInputs[0]).borderLeftStyle, getComputedStyle(subscribeInputs[0]).borderLeftColor);
    }
    if (parseFloat(getComputedStyle(subscribeSubmitElem).width) != parseFloat(getComputedStyle(subscribeWrapperElem).width) - 2) {
      submitStyles.push(parseFloat(getComputedStyle(subscribeSubmitElem).width) / parseFloat(getComputedStyle(document.documentElement).fontSize) + 'rem');
    } else {
      submitStyles.push('100%');
    }
    submitStyles.push(getComputedStyle(subscribeSubmitElem).color, subscribeSubmitElem.style.background, getComputedStyle(subscribeSubmitElem).borderTopWidth, getComputedStyle(subscribeSubmitElem).borderTopLeftRadius, getComputedStyle(subscribeSubmitElem).borderTopStyle, getComputedStyle(subscribeSubmitElem).borderTopColor, getComputedStyle(subscribeSubmitElem).borderRightWidth, getComputedStyle(subscribeSubmitElem).borderTopRightRadius, getComputedStyle(subscribeSubmitElem).borderRightStyle, getComputedStyle(subscribeSubmitElem).borderRightColor, getComputedStyle(subscribeSubmitElem).borderBottomWidth, getComputedStyle(subscribeSubmitElem).borderBottomRightRadius, getComputedStyle(subscribeSubmitElem).borderBottomStyle, getComputedStyle(subscribeSubmitElem).borderBottomColor, getComputedStyle(subscribeSubmitElem).borderLeftWidth, getComputedStyle(subscribeSubmitElem).borderBottomLeftRadius, getComputedStyle(subscribeSubmitElem).borderLeftStyle, getComputedStyle(subscribeSubmitElem).borderLeftColor, );

    deliveryForm.className = 'subscribeForm delivery';
    deliveryForm.enctype = 'multipart/form-data';
    deliveryForm.action = formAction.value;
    deliveryForm.method = formMethod.value;
    formCodeWrapperElem.innerHTML = '';
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type == 'hidden') {
        deliveryForm.innerHTML += inputs[i].outerHTML;
      }
    }
    formCodeWrapperElem.append(deliveryForm);

    if (nameDisabled.checked == false) {
      deliveryInputName = document.createElement('input');
      deliveryInputName.className = 'subscribeInput name';
      deliveryInputName.name = deliveryFieldName.value;
      deliveryInputName.type = 'text';
      deliveryInputName.placeholder = nameFieldEl.getElementsByClassName('fieldPlaceholder')[0].value;
      if (nameRequire.checked == true) {
        deliveryInputName.required = true;
      }
      deliveryForm.append(deliveryInputName);
    }

    deliveryInputEmail = document.createElement('input');
    deliveryInputEmail.className = 'subscribeInput email';
    deliveryInputEmail.name = deliveryFieldEmail.value;
    deliveryInputEmail.type = 'email';
    deliveryInputEmail.placeholder = emailFieldEl.getElementsByClassName('fieldPlaceholder')[0].value;
    deliveryInputEmail.required = true;
    deliveryForm.append(deliveryInputEmail);

    for (let i = 0; i < extraFields.length; i++) {
      const input = document.createElement('input'),
        extraFieldRequired = extraFields[i].getElementsByClassName('extraFieldRequired')[0].checked;

      input.className = 'subscribeInput extra';
      input.type = 'text';
      input.name = extraFields[i].getElementsByClassName('fieldNameSelect')[0].value;
      input.placeholder = extraFields[i].getElementsByClassName('fieldPlaceholder')[0].value;
      if (extraFieldRequired) {
        input.required = true;
      }
      deliveryForm.append(input);
    }

    deliverySubmit = document.createElement('button');
    deliverySubmit.className = 'subscribeSubmit';
    deliverySubmit.type = 'submit';
    deliverySubmit.innerHTML = submitEditor.value;
    deliveryForm.append(deliverySubmit);
    deliverySubmit.onclick = function() {
      return false;
    }

    currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
    allInputs = currentSubscribe.getElementsByTagName('input');
    subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
    subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
    rememberStyle(allInputs, subscribeSubmitElem, submitStyles, inputStyles);
    includeSubscribeInputsSettings(id);
    includeSubscribeSubmitSettings(id);
    addDragAndDropToSubscribeForm(id);
    addFunctionalityToSubscribeElement(id);
    makePreview();
  }


  // Добавление поля

  newField.onclick = function () {
    const extraFieldEl = document.createElement('div');

    extraFields = inputsInfoEl.getElementsByClassName('extraField');
    extraFieldCounter = extraFields.length + 1;
    extraFieldEl.innerHTML = '<div class="extraField"><br>ДОПОЛНИТЕЛЬНОЕ ПОЛЕ ' + extraFieldCounter + '<br>' +
      '<div class="submitValue">' +
      '<input class="fieldPlaceholder" type="text" placeholder="Введите текст поля"><span class="deleteField">X</span>' +
      '</div><br><br>' +
      '<select class="fieldNameSelect"></select><br>' +
      '<input class="extraFieldRequired" type="checkbox">&nbsp; required<br><br>' +
      '</div>';
    inputsInfoEl.append(extraFieldEl);


    const deleteFieldEl = extraFieldEl.getElementsByClassName('deleteField')[0];
    deleteFieldEl.onclick = function () {
      extraFieldEl.remove();
    }


    changeInputsInfo();
    extraFieldCounter++;
  }


  //Очистка поля от рассылки

  deliveryCodeReset.onclick = function () {
    deliveryCodeAreaEl.value = '';
  }






  function changeInputsInfo() {
    let selectValues = [];
    deliveryCodeEl.innerHTML = deliveryCodeArea.value;

    if (deliveryCodeEl.getElementsByTagName('form')[0]) {
      const deliveryForm = deliveryCodeEl.getElementsByTagName('form')[0],
        deliveryInputs = deliveryForm.getElementsByTagName('input');

      for (let i = 0; i < selectInputsNames.length; i++) {
        selectValues.push(selectInputsNames[i].value);
        selectInputsNames[i].innerHTML = '';
      }

      for (let i = 0; i < deliveryInputs.length; i++) {
        if (deliveryInputs[i].name && deliveryInputs[i].type != 'submit') {
          for (let j = 0; j < selectInputsNames.length; j++) {
            selectInputsNames[j].innerHTML += '<option value="' + deliveryInputs[i].name + '">' + deliveryInputs[i].name + '</option>';
            if (selectValues[j] != '') {
              selectInputsNames[j].value = selectValues[j];
            }
          }
        }
      }
      for (let i = 0; i < deliveryInputs.length; i++) {
        if (deliveryInputs[i].name.indexOf('name') != -1) {
          deliveryFieldName.value = deliveryInputs[i].name;
        } else if (deliveryInputs[i].name.indexOf('email') != -1) {
          deliveryFieldEmail.value = deliveryInputs[i].name;
        }
      }

      formMethod.value = deliveryForm.method;
      formAction.value = deliveryForm.action;

    }
  }

  function rememberStyle(inputs, submit, submitStyles, inputStyles) {


    submit.style = '';

    if (subscribeSubmitBold.checked == true) {
      submit.style.fontWeight = '900';
    } else {
      submit.style.fontWeight = 'normal';
    }
    submit.style.fontFamily = subscribeSubmitFontFamilySelect.value;
    submit.style.fontSize = $('#subscribeSubmit-font-size-value').val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem';
    submit.style.color = submitStyles[1];
    submit.style.background = submitStyles[2];
    submit.style.borderTopWidth = submitStyles[3];
    submit.style.borderTopLeftRadius = submitStyles[4];
    submit.style.borderTopStyle = submitStyles[5];
    submit.style.borderTopColor = submitStyles[6];

    submit.style.borderRightWidth = submitStyles[7];
    submit.style.borderTopRightRadius = submitStyles[8];
    submit.style.borderRightStyle = submitStyles[9];
    submit.style.borderRightColor = submitStyles[10];

    submit.style.borderBottomWidth = submitStyles[11];
    submit.style.borderBottomRightRadius = submitStyles[12];
    submit.style.borderBottomStyle = submitStyles[13];
    submit.style.borderBottomColor = submitStyles[14];

    submit.style.borderLeftWidth = submitStyles[15];
    submit.style.borderBottomLeftRadius = submitStyles[16];
    submit.style.borderLeftStyle = submitStyles[17];
    submit.style.borderLeftColor = submitStyles[18];
    if (subscribeInputAutoHeight.checked == true) {
      submit.style.height = 'auto';
    } else {
      submit.style.height = $('#subscribeSubmit-height-value').val() / parseFloat(getComputedStyle(document.documentElement).fontSize) + 'rem';
    }

    if (subscribeSubmitTextShadowRadioOn.checked == true) {
      const hv = $('#subscribe-text-shadow-horizontal-value').val() + 'px';
      const vv = $('#subscribe-text-shadow-vertical-value').val() + 'px';
      const blr = $('#subscribe-text-shadow-blur-value').val() + 'px';
      const clr = hexToRGB($('#subscribe-text-shadow-color-value').val(), $('#subscribe-text-shadow-opacity-value').val() / 100);
      const prpts = hv + " " + vv + " " + blr + " " + clr;

      submit.style.textShadow = prpts;
    }




    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type != 'submit' && inputs[i].type != 'hidden') {
        inputs[i].style = '';
        if (subscribeInputBold.checked == true) {
          inputs[i].style.fontWeight = '900';
        } else {
          inputs[i].style.fontWeight = 'normal';
        }
        inputs[i].style.fontFamily = subscribeInputFontFamilySelect.value;
        inputs[i].style.fontSize = $('#subscribeInput-font-size-value').val() / parseFloat(getComputedStyle(document.documentElement).fontSize) + 'rem';
        if (inputStyles != '') {
          inputs[i].style.color = inputStyles[1];
          inputs[i].style.background = inputStyles[2];
          inputs[i].style.borderTopWidth = inputStyles[3];
          inputs[i].style.borderTopLeftRadius = inputStyles[4];
          inputs[i].style.borderTopStyle = inputStyles[5];
          inputs[i].style.borderTopColor = inputStyles[6];

          inputs[i].style.borderRightWidth = inputStyles[7];
          inputs[i].style.borderTopRightRadius = inputStyles[8];
          inputs[i].style.borderRightStyle = inputStyles[9];
          inputs[i].style.borderRightColor = inputStyles[10];

          inputs[i].style.borderBottomWidth = inputStyles[11];
          inputs[i].style.borderBottomRightRadius = inputStyles[12];
          inputs[i].style.borderBottomStyle = inputStyles[13];
          inputs[i].style.borderBottomColor = inputStyles[14];

          inputs[i].style.borderLeftWidth = inputStyles[15];
          inputs[i].style.borderBottomLeftRadius = inputStyles[16];
          inputs[i].style.borderLeftStyle = inputStyles[17];
          inputs[i].style.borderLeftColor = inputStyles[18];
        }
        if (subscribeInputAutoHeight.checked == true) {
          inputs[i].style.height = 'auto';
        } else {
          inputs[i].style.height = $('#subscribeInput-height-value').val() / parseFloat(getComputedStyle(document.documentElement).fontSize) + 'rem';
        }

        if (subscribeInputTextShadowRadioOn.checked == true) {
          const hv = $('#subscribe-text-shadow-horizontal-value').val() + 'px';
          const vv = $('#subscribe-text-shadow-vertical-value').val() + 'px';
          const blr = $('#subscribe-text-shadow-blur-value').val() + 'px';
          const clr = hexToRGB($('#subscribe-text-shadow-color-value').val(), $('#subscribe-text-shadow-opacity-value').val() / 100);
          const prpts = hv + " " + vv + " " + blr + " " + clr;

          inputs[i].style.textShadow = prpts;
        }
      }
    }
  }
}



export default includeSubscribeDelivery;
