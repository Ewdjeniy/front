/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/API/modules/subscribe/subscribeSettings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API/modules/subscribe/subscribeDelivery.js":
/*!********************************************************!*\
  !*** ./src/API/modules/subscribe/subscribeDelivery.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscribeInputsSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeInputsSettings.js */ "./src/API/modules/subscribe/subscribeInputsSettings.js");
/* harmony import */ var _subscribeSumbitSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeSumbitSettings.js */ "./src/API/modules/subscribe/subscribeSumbitSettings.js");



function includeSubscribeDelivery(id) {
  'use strict';

  var subscribeBlockElem = document.getElementById(id);
  var subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  var formCodeWrapperElem = subscribeBlockElem.getElementsByClassName('formCodeWrapper')[0];
  var currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  var subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  var subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
  var allInputs = currentSubscribe.getElementsByTagName('input');
  var extraFieldCounter = 1;
  var deliveryCodeEl = subscribeBlockElem.getElementsByClassName('deliveryCode')[0],
      inputsInfoEl = document.getElementById('inputsInfo'),
      extraFields = inputsInfoEl.getElementsByClassName('extraField');
  var deliveryCodeAreaEl = document.getElementById('deliveryCodeArea');
  var selectInputsNames = document.getElementsByClassName('fieldNameSelect'),
      nameFieldEl = document.getElementById('nameField'),
      emailFieldEl = document.getElementById('emailField'); // Вывод действующей рассылки в настройках

  function showDelivery() {
    extraFieldCounter = 1;
    deliveryCodeAreaEl.value = deliveryCodeEl.innerHTML;

    for (var i = 0; i < selectInputsNames.length; i++) {
      selectInputsNames[i].innerHTML = '';
    }

    for (var _i = 0; _i < extraFields.length;) {
      if (extraFields[_i]) {
        extraFields[_i].remove();

        inputsInfoEl = document.getElementById('inputsInfo');
        extraFields = inputsInfoEl.getElementsByClassName('extraField');
      } else {
        _i++;
      }
    }

    for (var _i2 = 0; _i2 < allInputs.length; _i2++) {
      if (allInputs[_i2].className == 'subscribeInput extra') {
        (function () {
          var extraFieldEl = document.createElement('div');
          extraFieldEl.innerHTML = '<div class="extraField"><br>ДОПОЛНИТЕЛЬНОЕ ПОЛЕ ' + extraFieldCounter + '<br>' + '<div class="submitValue">' + '<input class="fieldPlaceholder" type="text" value="' + allInputs[_i2].placeholder + '"><span class="deleteField">X</span>' + '</div><br><br>' + '<select class="fieldNameSelect"></select><br>' + '<input class="extraFieldRequired" type="checkbox">&nbsp; required<br><br>' + '</div>';
          inputsInfoEl.append(extraFieldEl);
          var deleteFieldEl = extraFieldEl.getElementsByClassName('deleteField')[0];

          deleteFieldEl.onclick = function () {
            extraFieldEl.remove();
          };

          changeInputsInfo();
          extraFieldEl.getElementsByClassName('fieldNameSelect')[0].value = allInputs[_i2].name;

          if (allInputs[_i2].required == true) {
            extraFieldEl.getElementsByClassName('extraFieldRequired')[0].checked = true;
          }

          extraFieldCounter++;
        })();
      } else if (allInputs[_i2].className == 'subscribeInput name') {
        nameFieldEl.getElementsByClassName('fieldPlaceholder')[0].value = allInputs[_i2].placeholder;

        if (allInputs[_i2].required == true) {
          nameRequire.checked = true;
        }
      } else if (allInputs[_i2].className == 'subscribeInput email') {
        emailFieldEl.getElementsByClassName('fieldPlaceholder')[0].value = allInputs[_i2].placeholder;
      }
    }

    formAction.value = '';
    changeInputsInfo();
  }

  showDelivery(); //Ввод рассылки

  deliveryCodeAreaEl.oninput = changeInputsInfo;

  nameDisabled.onclick = function () {
    if (nameDisabled.checked == true) {
      nameInfo.style.display = 'none';
    } else {
      nameInfo.style.display = 'block';
    }
  }; // Вставка рассылки


  deliveryCodeExec.onclick = function () {
    var inputStyles = [];
    var submitStyles = [];
    var deliveryForm = document.createElement('form'),
        inputs = deliveryCodeEl.getElementsByTagName('input'),
        extraFields = document.getElementsByClassName('extraField');
    var deliveryInputName = null,
        deliveryInputEmail = null,
        deliverySubmit = null,
        hiddenInputs = null;

    if (subscribeInputs[0]) {
      if (parseFloat(getComputedStyle(subscribeInputs[0]).width) != parseFloat(getComputedStyle(subscribeWrapperElem).width) - 2) {
        inputStyles.push(getComputedStyle(subscribeInputs[0]).width);
      } else {
        inputStyles.push('100%');
      }

      inputStyles.push(getComputedStyle(subscribeInputs[0]).color, subscribeInputs[0].style.background, getComputedStyle(subscribeInputs[0]).borderTopWidth, getComputedStyle(subscribeInputs[0]).borderTopLeftRadius, getComputedStyle(subscribeInputs[0]).borderTopStyle, getComputedStyle(subscribeInputs[0]).borderTopColor, getComputedStyle(subscribeInputs[0]).borderRightWidth, getComputedStyle(subscribeInputs[0]).borderTopRightRadius, getComputedStyle(subscribeInputs[0]).borderRightStyle, getComputedStyle(subscribeInputs[0]).borderRightColor, getComputedStyle(subscribeInputs[0]).borderBottomWidth, getComputedStyle(subscribeInputs[0]).borderBottomRightRadius, getComputedStyle(subscribeInputs[0]).borderBottomStyle, getComputedStyle(subscribeInputs[0]).borderBottomColor, getComputedStyle(subscribeInputs[0]).borderLeftWidth, getComputedStyle(subscribeInputs[0]).borderBottomLeftRadius, getComputedStyle(subscribeInputs[0]).borderLeftStyle, getComputedStyle(subscribeInputs[0]).borderLeftColor);
    }

    if (parseFloat(getComputedStyle(subscribeSubmitElem).width) != parseFloat(getComputedStyle(subscribeWrapperElem).width) - 2) {
      submitStyles.push(getComputedStyle(subscribeSubmitElem).width);
    } else {
      submitStyles.push('100%');
    }

    submitStyles.push(getComputedStyle(subscribeSubmitElem).color, subscribeSubmitElem.style.background, getComputedStyle(subscribeSubmitElem).borderTopWidth, getComputedStyle(subscribeSubmitElem).borderTopLeftRadius, getComputedStyle(subscribeSubmitElem).borderTopStyle, getComputedStyle(subscribeSubmitElem).borderTopColor, getComputedStyle(subscribeSubmitElem).borderRightWidth, getComputedStyle(subscribeSubmitElem).borderTopRightRadius, getComputedStyle(subscribeSubmitElem).borderRightStyle, getComputedStyle(subscribeSubmitElem).borderRightColor, getComputedStyle(subscribeSubmitElem).borderBottomWidth, getComputedStyle(subscribeSubmitElem).borderBottomRightRadius, getComputedStyle(subscribeSubmitElem).borderBottomStyle, getComputedStyle(subscribeSubmitElem).borderBottomColor, getComputedStyle(subscribeSubmitElem).borderLeftWidth, getComputedStyle(subscribeSubmitElem).borderBottomLeftRadius, getComputedStyle(subscribeSubmitElem).borderLeftStyle, getComputedStyle(subscribeSubmitElem).borderLeftColor);
    deliveryForm.className = 'subscribeForm delivery';
    deliveryForm.enctype = 'multipart/form-data';
    deliveryForm.action = formAction.value;
    deliveryForm.method = formMethod.value;
    formCodeWrapperElem.innerHTML = '';

    for (var i = 0; i < inputs.length; i++) {
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

    for (var _i3 = 0; _i3 < extraFields.length; _i3++) {
      var input = document.createElement('input'),
          extraFieldRequired = extraFields[_i3].getElementsByClassName('extraFieldRequired')[0].checked;

      input.className = 'subscribeInput extra';
      input.type = 'text';
      input.name = extraFields[_i3].getElementsByClassName('fieldNameSelect')[0].value;
      input.placeholder = extraFields[_i3].getElementsByClassName('fieldPlaceholder')[0].value;

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

    deliverySubmit.onclick = function () {
      return false;
    };

    currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
    allInputs = currentSubscribe.getElementsByTagName('input');
    subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
    subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
    rememberStyle(allInputs, subscribeSubmitElem, submitStyles, inputStyles);
    addDragAndDropToForm(id);
    Object(_subscribeInputsSettings_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
    Object(_subscribeSumbitSettings_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
    makePreview();
  }; // Добавление поля


  newField.onclick = function () {
    var extraFieldEl = document.createElement('div');
    extraFields = inputsInfoEl.getElementsByClassName('extraField');
    extraFieldCounter = extraFields.length + 1;
    extraFieldEl.innerHTML = '<div class="extraField"><br>ДОПОЛНИТЕЛЬНОЕ ПОЛЕ ' + extraFieldCounter + '<br>' + '<div class="submitValue">' + '<input class="fieldPlaceholder" type="text" placeholder="Введите текст поля"><span class="deleteField">X</span>' + '</div><br><br>' + '<select class="fieldNameSelect"></select><br>' + '<input class="extraFieldRequired" type="checkbox">&nbsp; required<br><br>' + '</div>';
    inputsInfoEl.append(extraFieldEl);
    var deleteFieldEl = extraFieldEl.getElementsByClassName('deleteField')[0];

    deleteFieldEl.onclick = function () {
      extraFieldEl.remove();
    };

    changeInputsInfo();
    extraFieldCounter++;
  }; //Очистка поля от рассылки


  deliveryCodeReset.onclick = function () {
    deliveryCodeAreaEl.value = '';
  };

  function changeInputsInfo() {
    var selectValues = [];
    deliveryCodeEl.innerHTML = deliveryCodeArea.value;

    if (deliveryCodeEl.getElementsByTagName('form')[0]) {
      var deliveryForm = deliveryCodeEl.getElementsByTagName('form')[0],
          deliveryInputs = deliveryForm.getElementsByTagName('input');

      for (var i = 0; i < selectInputsNames.length; i++) {
        selectValues.push(selectInputsNames[i].value);
        selectInputsNames[i].innerHTML = '';
      }

      for (var _i4 = 0; _i4 < deliveryInputs.length; _i4++) {
        if (deliveryInputs[_i4].name && deliveryInputs[_i4].type != 'submit') {
          for (var j = 0; j < selectInputsNames.length; j++) {
            selectInputsNames[j].innerHTML += '<option value="' + deliveryInputs[_i4].name + '">' + deliveryInputs[_i4].name + '</option>';

            if (selectValues[j] != '') {
              selectInputsNames[j].value = selectValues[j];
            }
          }
        }
      }

      for (var _i5 = 0; _i5 < deliveryInputs.length; _i5++) {
        if (deliveryInputs[_i5].name.indexOf('name') != -1) {
          deliveryFieldName.value = deliveryInputs[_i5].name;
        } else if (deliveryInputs[_i5].name.indexOf('email') != -1) {
          deliveryFieldEmail.value = deliveryInputs[_i5].name;
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
    submit.style.fontSize = $('#subscribeSubmit-font-size-value').val() + 'px';
    submit.style.width = submitStyles[0];
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
      submit.style.height = $('#subscribeSubmit-height-value').val() + 'px';
    }

    if (subscribeSubmitTextShadowRadioOn.checked == true) {
      var hv = $('#subscribe-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#subscribe-text-shadow-vertical-value').val() + 'px';
      var blr = $('#subscribe-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#subscribe-text-shadow-color-value').val(), $('#subscribe-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      submit.style.textShadow = prpts;
    }

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type != 'submit' && inputs[i].type != 'hidden') {
        inputs[i].style = '';

        if (subscribeInputBold.checked == true) {
          inputs[i].style.fontWeight = '900';
        } else {
          inputs[i].style.fontWeight = 'normal';
        }

        inputs[i].style.fontFamily = subscribeInputFontFamilySelect.value;
        inputs[i].style.fontSize = $('#subscribeInput-font-size-value').val() + 'px';

        if (inputStyles != '') {
          inputs[i].style.width = inputStyles[0];
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
          inputs[i].style.height = $('#subscribeInput-height-value').val() + 'px';
        }

        if (subscribeInputTextShadowRadioOn.checked == true) {
          var _hv = $('#subscribe-text-shadow-horizontal-value').val() + 'px';

          var _vv = $('#subscribe-text-shadow-vertical-value').val() + 'px';

          var _blr = $('#subscribe-text-shadow-blur-value').val() + 'px';

          var _clr = hexToRGB($('#subscribe-text-shadow-color-value').val(), $('#subscribe-text-shadow-opacity-value').val() / 100);

          var _prpts = _hv + " " + _vv + " " + _blr + " " + _clr;

          inputs[i].style.textShadow = _prpts;
        }
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (includeSubscribeDelivery);

/***/ }),

/***/ "./src/API/modules/subscribe/subscribeInputsSettings.js":
/*!**************************************************************!*\
  !*** ./src/API/modules/subscribe/subscribeInputsSettings.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function includeSubscribeInputsSettings(id) {
  'use strict';

  var subscribeBlockElem = document.getElementById(id);
  var subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  var currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  var subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  var subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
  var allInputs = currentSubscribe.getElementsByTagName('input');
  showHideSettings('subscribe-inputs-settings', 'subscribeInputsIndicator'); // Расстояние между полями

  showHideSettings('show-subscribe-input-space-settings', 'subscribeInputSpaceIndicator');
  $('#subscribe-input-space-value').val(parseInt(getComputedStyle(subscribeInputs[0]).marginBottom));
  $('#subscribe-input-space-value-range').val(parseInt(getComputedStyle(subscribeInputs[0]).marginBottom));
  $('#subscribe-input-space-value, #subscribe-input-space-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('margin-bottom', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribe-input-space-value") {
      $('#subscribe-input-space-value-range').val($(this).val());
    } else {
      $('#subscribe-input-space-value').val($(this).val());
    }

    makePreview();
  });
  /*Настройки тени submit*/

  showHideSettings('subscribeInput-text-shadow-settings', 'subscribeInputTextShadowIndicator');

  document.getElementById('subscribeInputTextShadowRadioOn').onclick = function () {
    document.getElementById('subscribeInput-text-shadow').style.display = 'block';
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }

    makePreview();
  };

  document.getElementById('subscribeInputTextShadowRadioOff').onclick = function () {
    document.getElementById('subscribeInput-text-shadow').style.display = 'none';
    $(subscribeInputElem).css('text-shadow', 'none');
    makePreview();
  };

  $('#subscribeInput-text-shadow-horizontal-value, #subscribeInput-text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }

    if ($(this).attr('id') == "subscribeInput-text-shadow-horizontal-value") {
      $('#subscribeInput-text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-horizontal-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-text-shadow-vertical-value, #subscribeInput-text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }

    if ($(this).attr('id') == "subscribeInput-text-shadow-vertical-value") {
      $('#subscribeInput-text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-vertical-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-text-shadow-blur-value, #subscribeInput-text-shadow-blur-value-range').on('input', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = hexToRGB($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }

    if ($(this).attr('id') == "subscribeInput-text-shadow-blur-value") {
      $('#subscribeInput-text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-blur-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-text-shadow-opacity-value, #subscribeInput-text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribeInput-text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }

    if ($(this).attr('id') == "subscribeInput-text-shadow-opacity-value") {
      $('#subscribeInput-text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-opacity-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-text-shadow-color-value').on('change', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;

    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }

    makePreview();
  });
  /*Конец настроек тени submit*/
  //Выбор шрифта полей

  subscribeInputFontFamilySelect.value = getComputedStyle(subscribeInputs[0]).fontFamily;

  subscribeInputFontFamilySelect.onchange = function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      subscribeInputs[i].style.fontFamily = subscribeInputFontFamilySelect.value;
    }

    makePreview();
  };

  if (getComputedStyle(subscribeInputs[0]).fontWeight == '900') {
    subscribeInputBold.checked = true;
  } else {
    subscribeInputBold.checked = false;
  }

  subscribeInputBold.onclick = function () {
    if (subscribeInputBold.checked) {
      for (var i = 0; i < subscribeInputs.length; i++) {
        subscribeInputs[i].style.fontWeight = '900';
      }
    } else {
      for (var _i = 0; _i < subscribeInputs.length; _i++) {
        subscribeInputs[_i].style.fontWeight = 'normal';
      }
    }

    makePreview();
  }; //Размер шрифта полей


  showHideSettings('subscribe-show-inputs-font-settings', 'subscribeInputsFontIndicator');
  $('#subscribeInput-font-size-value').val(parseInt(getComputedStyle(subscribeInputs[0]).fontSize));
  $('#subscribeInput-font-size-value-range').val(parseInt(getComputedStyle(subscribeInputs[0]).fontSize));
  $('#subscribeInput-font-size-value, #subscribeInput-font-size-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('font-size', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribeInput-font-size-value") {
      $('#subscribeInput-font-size-value-range').val($(this).val());
    } else {
      $('#subscribeInput-font-size-value').val($(this).val());
    }

    makePreview();
  }); //Цвет текста у полей

  $('#subscribeInput-color-value').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('color', $(this).val());
    }

    makePreview();
  }); //Цвет полей

  showHideSettings('subscribeInput-background-types', 'subscribeInputsBackgroundIndicator');

  subscribeInputBackgroundRadioColor.onclick = function () {
    subscribeInputBackgroundGradient.style.display = 'none';
    subscribeInputBackgroundColor.style.display = 'block';
  };

  subscribeInputBackgroundRadioGradient.onclick = function () {
    subscribeInputBackgroundColor.style.display = 'none';
    subscribeInputBackgroundGradient.style.display = 'block';
  };

  $('#subscribeInput-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = hexToRGB($(this).val(), opacity);

    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', color);
    }

    makePreview();
  });
  $('#subscribeInput-gradient-color-1').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', 'linear-gradient(' + parseInt($('#subscribeInput-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#subscribeInput-gradient-color-2').val() + ')');
    }

    makePreview();
  });
  $('#subscribeInput-gradient-color-2').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', 'linear-gradient(' + parseInt($('#subscribeInput-gradient-angle').val()) + 'deg, ' + $('#subscribeInput-gradient-color-1').val() + ', ' + $(this).val() + ')');
    }

    makePreview();
  });
  $('#subscribeInput-gradient-angle').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#subscribeInput-gradient-color-1').val() + ', ' + $('#subscribeInput-gradient-color-2').val() + ')');
    }

    makePreview();
  });
  $('#subscribeInput-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#subscribeInput-main-color').val(), opacity / 100);

    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', color);
    }

    makePreview();
  }); //Высота полей

  showHideSettings('subscribeInput-height', 'subscribeInputsSizeIndicator');

  if (getComputedStyle(subscribeInputs[0]).height == 'auto') {
    subscribeInputAutoHeight.checked = true;
  } else {
    subscribeInputAutoHeight.checked = false;
  }

  $('#subscribeInput-height-value').val(parseInt($(subscribeInputs[0]).css('height')));
  $('#subscribeInput-height-value-range').val(parseInt($(subscribeInputs[0]).css('height')));

  subscribeInputAutoHeight.onclick = function () {
    if (subscribeInputAutoHeight.checked == true) {
      for (var i = 0; i < subscribeInputs.length; i++) {
        subscribeInputs[i].style.height = 'auto';
      }

      makePreview();
    }
  };

  $('#subscribeInput-height-value, #subscribeInput-height-value-range').on('input', function () {
    if (subscribeInputAutoHeight.checked == false) {
      for (var i = 0; i < subscribeInputs.length; i++) {
        $(subscribeInputs[i]).css('height', $(this).val() + 'px');
      }

      if ($(this).attr('id') == "subscribeInput-height-value") {
        $('#subscribeInput-height-value-range').val($(this).val());
      } else {
        $('#subscribeInput-height-value').val($(this).val());
      }
    }

    makePreview();
  }); //Ширина полей

  if (getComputedStyle(subscribeInputs[0]).width == '100%') {
    subscribeInputAutoWidth.checked = true;
  } else {
    subscribeInputAutoWidth.checked = false;
  }

  $('#subscribeInput-width-value').val(parseInt($(subscribeInputs[0]).css('width')));
  $('#subscribeInput-width-value-range').val(parseInt($(subscribeInputs[0]).css('width')));

  subscribeInputAutoWidth.onclick = function () {
    if (subscribeInputAutoWidth.checked == true) {
      for (var i = 0; i < subscribeInputs.length; i++) {
        subscribeInputs[i].style.width = '100%';
      }

      makePreview();
    }
  };

  $('#subscribeInput-width-value, #subscribeInput-width-value-range').on('input', function () {
    if (subscribeInputAutoWidth.checked == false) {
      for (var i = 0; i < subscribeInputs.length; i++) {
        $(subscribeInputs[i]).css('width', $(this).val() + 'px');
      }

      if ($(this).attr('id') == "subscribeInput-width-value") {
        $('#subscribeInput-width-value-range').val($(this).val());
      } else {
        $('#subscribeInput-width-value').val($(this).val());
      }
    }

    makePreview();
  }); //Настройки всех границ полей

  showHideSettings('subscribe-show-inputs-border-settings', 'subscribeInputsBorderIndicator');

  subscribeInputBorderRadioEvery.onclick = function () {
    subscribeInputBorderAll.style.display = 'none';
    subscribeInputBorderEvery.style.display = 'block';
  };

  subscribeInputBorderRadioAll.onclick = function () {
    subscribeInputBorderAll.style.display = 'block';
    subscribeInputBorderEvery.style.display = 'none';
  };

  $('#subscribeInput-border-value').val(parseInt($(subscribeInputs[0]).css('border-width')));
  $('#subscribeInput-border-value-range').val(parseInt($(subscribeInputs[0]).css('border-width')));
  $('#subscribeInput-border-radius').val(parseInt($(subscribeInputs[0]).css('border-radius')));
  $('#subscribeInput-border-radius-range').val(parseInt($(subscribeInputs[0]).css('border-radius')));
  $('#subscribeInput-border-value, #subscribeInput-border-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-width', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribeInput-border-value") {
      $('#subscribeInput-border-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-border-radius, #subscribeInput-border-radius-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-radius', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribeInput-border-radius") {
      $('#subscribeInput-border-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-radius').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-border-style').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-style', $(this).find('option:selected').val());
    }

    makePreview();
  });
  $('#subscribeInput-border-color-value').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-color', $(this).val());
    }

    makePreview();
  });
  /*Настройки для верхней границы полей*/

  $('#subscribeInput-border-top-value').val(parseInt($(subscribeInputs[0]).css('border-top-width')));
  $('#subscribeInput-border-top-value-range').val(parseInt($(subscribeInputs[0]).css('border-top-width')));
  $('#subscribeInput-border-left-top-radius').val(parseInt($(subscribeInputs[0]).css('border-top-left-radius')));
  $('#subscribeInput-border-left-top-radius-range').val(parseInt($(subscribeInputs[0]).css('border-top-left-radius')));
  $('#subscribeInput-border-top-value, #subscribeInput-border-top-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-width', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribeInput-border-top-value") {
      $('#subscribeInput-border-top-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-border-left-top-radius, #subscribeInput-border-left-top-radius-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-left-radius', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribeInput-border-left-top-radius") {
      $('#subscribeInput-border-left-top-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-left-top-radius').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-border-top-style-value').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-style', $(this).find('option:selected').val());
    }

    makePreview();
  });
  $('#subscribeInput-border-top-color').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-color', $(this).val());
    }

    makePreview();
  });
  /*Конец блока*/

  /*Настройки для правой границы полей*/

  $('#subscribeInput-border-right-value').val(parseInt($(subscribeInputs[0]).css('border-right-width')));
  $('#subscribeInput-border-right-value-range').val(parseInt($(subscribeInputs[0]).css('border-right-width')));
  $('#subscribeInput-border-right-radius').val(parseInt($(subscribeInputs[0]).css('border-top-right-radius')));
  $('#subscribeInput-border-right-radius-range').val(parseInt($(subscribeInputs[0]).css('border-top-right-radius')));
  $('#subscribeInput-border-right-value, #subscribeInput-border-right-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-right-width', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribeInput-border-right-value") {
      $('#subscribeInput-border-right-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-border-right-radius, #subscribeInput-border-right-radius-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-right-radius', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribeInput-border-right-radius") {
      $('#subscribeInput-border-right-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-right-radiuse').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-border-right-style').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-right-style', $(this).find('option:selected').val());
    }

    makePreview();
  });
  $('#subscribeInput-border-right-color').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-right-color', $(this).val());
    }

    makePreview();
  });
  /*Конец блока*/

  /*Настройки для нижней границы полей*/

  $('#subscribeInput-border-bottom-value').val(parseInt($(subscribeInputs[0]).css('border-bottom-width')));
  $('#subscribeInput-border-bottom-value-range').val(parseInt($(subscribeInputs[0]).css('border-bottom-width')));
  $('#subscribeInput-border-bottom-right-radius').val(parseInt($(subscribeInputs[0]).css('border-bottom-right-radius')));
  $('#subscribeInput-border-bottom-right-radius-range').val(parseInt($(subscribeInputs[0]).css('border-bottom-right-radius')));
  $('#subscribeInput-border-bottom-value, #subscribeInput-border-bottom-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-width', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribeInput-border-bottom-value") {
      $('#subscribeInput-border-bottom-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-border-bottom-right-radius, #subscribeInput-border-bottom-right-radius-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-right-radius', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribeInput-border-bottom-right-radius") {
      $('#subscribeInput-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-bottom-right-radius').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-border-bottom-style').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-style', $(this).find('option:selected').val());
    }

    makePreview();
  });
  $('#subscribeInput-border-bottom-color').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-color', $(this).val());
    }

    makePreview();
  });
  /*Конец блока*/

  /*Настройки для левой границы полей*/

  $('#subscribeInput-border-left-value').val(parseInt($(subscribeInputs[0]).css('border-left-width')));
  $('#subscribeInput-border-left-value-range').val(parseInt($(subscribeInputs[0]).css('border-left-width')));
  $('#subscribeInput-border-bottom-left-radius').val(parseInt($(subscribeInputs[0]).css('border-bottom-left-radius')));
  $('#subscribeInput-border-bottom-left-radius-range').val(parseInt($(subscribeInputs[0]).css('border-bottom-left-radius')));
  $('#subscribeInput-border-left-value, #subscribeInput-border-left-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-left-width', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribeInput-border-left-value") {
      $('#subscribeInput-border-left-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-left-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-border-bottom-left-radius, #subscribeInput-border-bottom-left-radius-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-left-radius', $(this).val() + 'px');
    }

    if ($(this).attr('id') == "subscribeInput-border-bottom-left-radius") {
      $('#subscribeInput-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-bottom-left-radius').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeInput-border-left-style').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-left-style', $(this).find('option:selected').val());
    }

    makePreview();
  });
  $('#subscribeInput-border-left-color').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-left-color', $(this).val());
    }

    makePreview();
  });
} //// Значения полей
//
//  showInputValues(allInputs);
//
//  changeInputValues.onclick = function () {
//    const inputValuesEl = document.getElementById('inputValues'),
//      changedValues = inputValuesEl.getElementsByTagName('input');
//    let j = 0;
//
//    for (let i = 0; i < allInputs.length; i++) {
//      if (allInputs[i].type == 'hidden') {
//        j--;
//      } else if (allInputs[i].type != 'hidden' && allInputs[i].type != 'submit') {
//        allInputs[i].placeholder = changedValues[i + j].value;
//      } else if (allInputs[i].type == 'submit') {
//        allInputs[i].value = changedValues[i + j].value;
//      }
//    }
//    showInputValues(allInputs);
//    makePreview();
//  }
//
//  //Добавление поля
//
//  showHideSettings('subscribe-show-add-delete-settings', 'subscribeAddDeleteIndicator');
//
//  subscribeInputerAdd.value = '';
//
//  showOptionsForAdd(id);
//
//  subscribeInputerAdd.onchange = function () {
//    let i = subscribeInputerAdd.selectedIndex;
//    let subscribeInput = document.createElement('input');
//
//
//    if (subscribeInputerAdd.value == 'tel') {
//      subscribeInput.className = 'subscribeInput tel';
//      subscribeInput.name = 'tel';
//      subscribeInput.type = subscribeInputerAdd.value;
//      subscribeInput.placeholder = subscribeInputerAdd.options[i].innerHTML;
//
//      if (subscribeInputBold.checked == true) {
//        subscribeInput.style.fontWeight = '900';
//      } else {
//        subscribeInput.style.fontWeight = 'normal';
//      }
//      subscribeInput.style.fontFamily = subscribeInputFontFamilySelect.value;
//      subscribeInput.style.fontSize = $('#subscribeInput-font-size-value').val() + 'px';
//      if (subscribeInputs[0]) {
//        if (parseFloat(getComputedStyle(subscribeInputs[0]).width) != parseFloat(getComputedStyle(subscribeWrapperElem).width) - 2) {
//          subscribeInput.style.width = getComputedStyle(subscribeInputs[0]).width;
//        }
//        subscribeInput.style.color = getComputedStyle(subscribeInputs[0]).color;
//        subscribeInput.style.background = getComputedStyle(subscribeInputs[0]).background;
//        subscribeInput.style.borderTopWidth = getComputedStyle(subscribeInputs[0]).borderTopWidth;
//        subscribeInput.style.borderTopLeftRadius = getComputedStyle(subscribeInputs[0]).borderTopLeftRadius;
//        subscribeInput.style.borderTopStyle = getComputedStyle(subscribeInputs[0]).borderTopStyle;
//        subscribeInput.style.borderTopColor = getComputedStyle(subscribeInputs[0]).borderTopColor;
//
//        subscribeInput.style.borderRightWidth = getComputedStyle(subscribeInputs[0]).borderRightWidth;
//        subscribeInput.style.borderTopRightRadius = getComputedStyle(subscribeInputs[0]).borderTopRightRadius;
//        subscribeInput.style.borderRightStyle = getComputedStyle(subscribeInputs[0]).borderRightStyle;
//        subscribeInput.style.borderRightColor = getComputedStyle(subscribeInputs[0]).borderRightColor;
//
//        subscribeInput.style.borderBottomWidth = getComputedStyle(subscribeInputs[0]).borderBottomWidth;
//        subscribeInput.style.borderBottomRightRadius = getComputedStyle(subscribeInputs[0]).borderBottomRightRadius;
//        subscribeInput.style.borderBottomStyle = getComputedStyle(subscribeInputs[0]).borderBottomStyle;
//        subscribeInput.style.borderBottomColor = getComputedStyle(subscribeInputs[0]).borderBottomColor;
//
//        subscribeInput.style.borderLeftWidth = getComputedStyle(subscribeInputs[0]).borderLeftWidth;
//        subscribeInput.style.borderBottomLeftRadius = getComputedStyle(subscribeInputs[0]).borderBottomLeftRadius;
//        subscribeInput.style.borderLeftStyle = getComputedStyle(subscribeInputs[0]).borderLeftStyle;
//        subscribeInput.style.borderLeftColor = getComputedStyle(subscribeInputs[0]).borderLeftColor;
//      }
//      if (subscribeInputAutoHeight.checked == true) {
//        subscribeInput.style.height = 'auto';
//      } else {
//        subscribeInput.style.height = $('#subscribeInput-height-value').val() + 'px';
//      }
//
//      if (subscribeTextShadowRadioOn.checked == true) {
//        const hv = $('#subscribe-text-shadow-horizontal-value').val() + 'px';
//        const vv = $('#subscribe-text-shadow-vertical-value').val() + 'px';
//        const blr = $('#subscribe-text-shadow-blur-value').val() + 'px';
//        const clr = hexToRGB($('#subscribe-text-shadow-color-value').val(), $('#subscribe-text-shadow-opacity-value').val() / 100);
//        const prpts = hv + " " + vv + " " + blr + " " + clr;
//
//        subscribeInput.style.textShadow = prpts;
//      }
//
//      $(subscribeInput).insertBefore(subscribeSubmitElem);
//      showOptionsForAdd(id);
//      showOptionsForDelete(subscribeBlockElem.id);
//      currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
//      allInputs = currentSubscribe.getElementsByTagName('input');
//      showInputValues(allInputs);
//      subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
//      addFunctionalityToSubscribeElement(id);
//      makePreview();
//    } else if (subscribeInputerAdd.value == 'name') {
//      subscribeInput.className = 'subscribeInput name';
//      subscribeInput.name = 'name';
//      subscribeInput.type = subscribeInputerAdd.value;
//      subscribeInput.placeholder = subscribeInputerAdd.options[i].innerHTML;
//
//      if (subscribeInputBold.checked == true) {
//        subscribeInput.style.fontWeight = '900';
//      } else {
//        subscribeInput.style.fontWeight = 'normal';
//      }
//      subscribeInput.style.fontFamily = subscribeInputFontFamilySelect.value;
//      subscribeInput.style.fontSize = $('#subscribeInput-font-size-value').val() + 'px';
//      if (subscribeInputs[0]) {
//        if (parseFloat(getComputedStyle(subscribeInputs[0]).width) != parseFloat(getComputedStyle(subscribeWrapperElem).width) - 2) {
//          subscribeInput.style.width = getComputedStyle(subscribeInputs[0]).width;
//        }
//        subscribeInput.style.color = getComputedStyle(subscribeInputs[0]).color;
//        subscribeInput.style.background = getComputedStyle(subscribeInputs[0]).background;
//        subscribeInput.style.borderTopWidth = getComputedStyle(subscribeInputs[0]).borderTopWidth;
//        subscribeInput.style.borderTopLeftRadius = getComputedStyle(subscribeInputs[0]).borderTopLeftRadius;
//        subscribeInput.style.borderTopStyle = getComputedStyle(subscribeInputs[0]).borderTopStyle;
//        subscribeInput.style.borderTopColor = getComputedStyle(subscribeInputs[0]).borderTopColor;
//
//        subscribeInput.style.borderRightWidth = getComputedStyle(subscribeInputs[0]).borderRightWidth;
//        subscribeInput.style.borderTopRightRadius = getComputedStyle(subscribeInputs[0]).borderTopRightRadius;
//        subscribeInput.style.borderRightStyle = getComputedStyle(subscribeInputs[0]).borderRightStyle;
//        subscribeInput.style.borderRightColor = getComputedStyle(subscribeInputs[0]).borderRightColor;
//
//        subscribeInput.style.borderBottomWidth = getComputedStyle(subscribeInputs[0]).borderBottomWidth;
//        subscribeInput.style.borderBottomRightRadius = getComputedStyle(subscribeInputs[0]).borderBottomRightRadius;
//        subscribeInput.style.borderBottomStyle = getComputedStyle(subscribeInputs[0]).borderBottomStyle;
//        subscribeInput.style.borderBottomColor = getComputedStyle(subscribeInputs[0]).borderBottomColor;
//
//        subscribeInput.style.borderLeftWidth = getComputedStyle(subscribeInputs[0]).borderLeftWidth;
//        subscribeInput.style.borderBottomLeftRadius = getComputedStyle(subscribeInputs[0]).borderBottomLeftRadius;
//        subscribeInput.style.borderLeftStyle = getComputedStyle(subscribeInputs[0]).borderLeftStyle;
//        subscribeInput.style.borderLeftColor = getComputedStyle(subscribeInputs[0]).borderLeftColor;
//      }
//      if (subscribeInputAutoHeight.checked == true) {
//        subscribeInput.style.height = 'auto';
//      } else {
//        subscribeInput.style.height = $('#subscribeInput-height-value').val() + 'px';
//      }
//
//      if (subscribeTextShadowRadioOn.checked == true) {
//        const hv = $('#subscribe-text-shadow-horizontal-value').val() + 'px';
//        const vv = $('#subscribe-text-shadow-vertical-value').val() + 'px';
//        const blr = $('#subscribe-text-shadow-blur-value').val() + 'px';
//        const clr = hexToRGB($('#subscribe-text-shadow-color-value').val(), $('#subscribe-text-shadow-opacity-value').val() / 100);
//        const prpts = hv + " " + vv + " " + blr + " " + clr;
//
//        subscribeInput.style.textShadow = prpts;
//      }
//
//      $(subscribeInput).insertBefore(subscribeSubmitElem);
//      showOptionsForAdd(id);
//      showOptionsForDelete(subscribeBlockElem.id);
//      currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
//      allInputs = currentSubscribe.getElementsByTagName('input');
//      showInputValues(allInputs);
//      subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
//      addFunctionalityToSubscribeElement(id);
//      makePreview();
//    }
//    if (subscribeInputerAdd.value == 'email') {
//      subscribeInput.className = 'subscribeInput email';
//      subscribeInput.name = 'email';
//      subscribeInput.type = subscribeInputerAdd.value;
//      subscribeInput.placeholder = subscribeInputerAdd.options[i].innerHTML;
//
//      if (subscribeInputBold.checked == true) {
//        subscribeInput.style.fontWeight = '900';
//      } else {
//        subscribeInput.style.fontWeight = 'normal';
//      }
//      subscribeInput.style.fontFamily = subscribeInputFontFamilySelect.value;
//      subscribeInput.style.fontSize = $('#subscribeInput-font-size-value').val() + 'px';
//      if (subscribeInputs[0]) {
//        if (parseFloat(getComputedStyle(subscribeInputs[0]).width) != parseFloat(getComputedStyle(subscribeWrapperElem).width) - 2) {
//          subscribeInput.style.width = getComputedStyle(subscribeInputs[0]).width;
//        }
//        subscribeInput.style.color = getComputedStyle(subscribeInputs[0]).color;
//        subscribeInput.style.background = getComputedStyle(subscribeInputs[0]).background;
//        subscribeInput.style.borderTopWidth = getComputedStyle(subscribeInputs[0]).borderTopWidth;
//        subscribeInput.style.borderTopLeftRadius = getComputedStyle(subscribeInputs[0]).borderTopLeftRadius;
//        subscribeInput.style.borderTopStyle = getComputedStyle(subscribeInputs[0]).borderTopStyle;
//        subscribeInput.style.borderTopColor = getComputedStyle(subscribeInputs[0]).borderTopColor;
//
//        subscribeInput.style.borderRightWidth = getComputedStyle(subscribeInputs[0]).borderRightWidth;
//        subscribeInput.style.borderTopRightRadius = getComputedStyle(subscribeInputs[0]).borderTopRightRadius;
//        subscribeInput.style.borderRightStyle = getComputedStyle(subscribeInputs[0]).borderRightStyle;
//        subscribeInput.style.borderRightColor = getComputedStyle(subscribeInputs[0]).borderRightColor;
//
//        subscribeInput.style.borderBottomWidth = getComputedStyle(subscribeInputs[0]).borderBottomWidth;
//        subscribeInput.style.borderBottomRightRadius = getComputedStyle(subscribeInputs[0]).borderBottomRightRadius;
//        subscribeInput.style.borderBottomStyle = getComputedStyle(subscribeInputs[0]).borderBottomStyle;
//        subscribeInput.style.borderBottomColor = getComputedStyle(subscribeInputs[0]).borderBottomColor;
//
//        subscribeInput.style.borderLeftWidth = getComputedStyle(subscribeInputs[0]).borderLeftWidth;
//        subscribeInput.style.borderBottomLeftRadius = getComputedStyle(subscribeInputs[0]).borderBottomLeftRadius;
//        subscribeInput.style.borderLeftStyle = getComputedStyle(subscribeInputs[0]).borderLeftStyle;
//        subscribeInput.style.borderLeftColor = getComputedStyle(subscribeInputs[0]).borderLeftColor;
//      }
//      if (subscribeInputAutoHeight.checked == true) {
//        subscribeInput.style.height = 'auto';
//      } else {
//        subscribeInput.style.height = $('#subscribeInput-height-value').val() + 'px';
//      }
//
//      if (subscribeTextShadowRadioOn.checked == true) {
//        const hv = $('#subscribe-text-shadow-horizontal-value').val() + 'px';
//        const vv = $('#subscribe-text-shadow-vertical-value').val() + 'px';
//        const blr = $('#subscribe-text-shadow-blur-value').val() + 'px';
//        const clr = hexToRGB($('#subscribe-text-shadow-color-value').val(), $('#subscribe-text-shadow-opacity-value').val() / 100);
//        const prpts = hv + " " + vv + " " + blr + " " + clr;
//
//        subscribeInput.style.textShadow = prpts;
//      }
//
//      $(subscribeInput).insertBefore(subscribeSubmitElem);
//      showOptionsForAdd(id);
//      showOptionsForDelete(subscribeBlockElem.id);
//      currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
//      allInputs = currentSubscribe.getElementsByTagName('input');
//      showInputValues(allInputs);
//      subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
//      addFunctionalityToSubscribeElement(id);
//      makePreview();
//    }
//  }
//
//  //Удаление поля
//
//  subscribeInputerDelete.value = '';
//
//  showOptionsForDelete(subscribeBlockElem.id);
//
//  function deleteInput(index) {
//    currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
//    const inputs = currentSubscribe.getElementsByTagName('input');
//
//    for (let i = 0; i < inputs.length; i++) {
//      if (i == index) {
//        inputs[i].outerHTML = '';
//        subscribeBlockElem = document.getElementById(id);
//        subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
//        currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
//        subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
//        subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
//        allInputs = currentSubscribe.getElementsByTagName('input');
//      }
//    }
//  }
//
//  subscribeInputerDelete.onchange = function () {
//    let extraFieldCounter = 1;
//    let inputsInfoEl = document.getElementById('inputsInfo');
//    let extraFields = inputsInfoEl.getElementsByClassName('extraField');
//    let deliveryCodeEl = subscribeBlockElem.getElementsByClassName('deliveryCode')[0];
//    const nameFieldEl = document.getElementById('nameField');
//    const emailFieldEl = document.getElementById('emailField');
//    const selectInputsNames = document.getElementsByClassName('fieldNameSelect');
//    const changeInputsInfo = function () {
//      let selectValues = [];
//      deliveryCodeEl.innerHTML = deliveryCodeArea.value;
//
//      if (deliveryCodeEl.getElementsByTagName('form')[0]) {
//        const deliveryForm = deliveryCodeEl.getElementsByTagName('form')[0],
//          deliveryInputs = deliveryForm.getElementsByTagName('input');
//
//        for (let i = 0; i < selectInputsNames.length; i++) {
//          selectValues.push(selectInputsNames[i].value);
//          selectInputsNames[i].innerHTML = '';
//        }
//
//        for (let i = 0; i < deliveryInputs.length; i++) {
//          if (deliveryInputs[i].name && deliveryInputs[i].type != 'submit') {
//            for (let j = 0; j < selectInputsNames.length; j++) {
//              selectInputsNames[j].innerHTML += '<option value="' + deliveryInputs[i].name + '">' + deliveryInputs[i].name + '</option>';
//              if (selectValues[j] != '') {
//                selectInputsNames[j].value = selectValues[j];
//              }
//            }
//          }
//        }
//        for (let i = 0; i < deliveryInputs.length; i++) {
//          if (deliveryInputs[i].name.indexOf('name') != -1) {
//            deliveryFieldName.value = deliveryInputs[i].name;
//          } else if (deliveryInputs[i].name.indexOf('email') != -1) {
//            deliveryFieldEmail.value = deliveryInputs[i].name;
//          }
//        }
//
//        formMethod.value = deliveryForm.method;
//        formAction.value = deliveryForm.action;
//
//      }
//    };
//
//    deleteInput(subscribeInputerDelete.value);
//    showOptionsForAdd(id);
//    showOptionsForDelete(subscribeBlockElem.id);
//    currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
//    subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
//    allInputs = currentSubscribe.getElementsByTagName('input');
//    showInputValues(allInputs);
//
//    for (let i = 0; i < extraFields.length;) {
//      if (extraFields[i]) {
//        extraFields[i].remove();
//        inputsInfoEl = document.getElementById('inputsInfo');
//        extraFields = inputsInfoEl.getElementsByClassName('extraField');
//      } else {
//        i++;
//      }
//    }
//    for (let i = 0; i < allInputs.length; i++) {
//      if (allInputs[i].className == 'subscribeInput extra') {
//        const extraFieldEl = document.createElement('div');
//
//        extraFieldEl.innerHTML = '<div class="extraField"><br>ДОПОЛНИТЕЛЬНОЕ ПОЛЕ ' + extraFieldCounter + '<br>' +
//          '<input class="fieldPlaceholder" type="text" value="' + allInputs[i].placeholder + '"><br><br>' +
//          '<select class="fieldNameSelect"></select><br>' +
//          '<input class="extraFieldRequired" type="checkbox">&nbsp; required<br><br>' +
//          '</div>';
//        inputsInfoEl.append(extraFieldEl);
//        changeInputsInfo();
//        extraFieldEl.getElementsByClassName('fieldNameSelect')[0].value = allInputs[i].name;
//        if (allInputs[i].required == true) {
//          extraFieldEl.getElementsByClassName('extraFieldRequired')[0].checked = true;
//        }
//        extraFieldCounter++;
//      } else if (allInputs[i].className == 'subscribeInput name') {
//        nameFieldEl.getElementsByClassName('fieldPlaceholder')[0].value = allInputs[i].placeholder;
//        if (allInputs[i].required == true) {
//          nameRequire.checked = true;
//        }
//      } else if (allInputs[i].className == 'subscribeInput email') {
//        emailFieldEl.getElementsByClassName('fieldPlaceholder')[0].value = allInputs[i].placeholder;
//      }
//    }
//    makePreview();
//  }


/* harmony default export */ __webpack_exports__["default"] = (includeSubscribeInputsSettings);

/***/ }),

/***/ "./src/API/modules/subscribe/subscribeSettings.js":
/*!********************************************************!*\
  !*** ./src/API/modules/subscribe/subscribeSettings.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscribeInputsSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeInputsSettings.js */ "./src/API/modules/subscribe/subscribeInputsSettings.js");
/* harmony import */ var _subscribeSumbitSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeSumbitSettings.js */ "./src/API/modules/subscribe/subscribeSumbitSettings.js");
/* harmony import */ var _subscribeDelivery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeDelivery.js */ "./src/API/modules/subscribe/subscribeDelivery.js");



$('#mainArea').on('click', '.copySubscribe', function () {
  var subscribeBlockId = $(this).parents('.subscribeBlock').attr('id');
  var subscribeBlockElem = document.getElementById(subscribeBlockId);
  var clonId = 'subscribe' + getRandom();
  $(subscribeBlockElem).clone(true).attr('id', clonId).insertAfter(subscribeBlockElem);
  addFunctionalityToSubscribeElement(clonId);
  addDragAndDropToForm(clonId);
  makePreview();
});
$('#mainArea').on('click', '.subscribeSet', function (e) {
  var ths = $(this).parents('.subscribeBlock');
  var subscribeBlockElem = document.getElementById($(ths).attr('id'));
  var subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  var formCodeWrapperElem = subscribeBlockElem.getElementsByClassName('formCodeWrapper')[0];
  var currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  var subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  var subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
  var allInputs = currentSubscribe.getElementsByTagName('input');
  var testSubscribeElem = document.getElementById('testSubscribe'); //Появление правой панели, инициализация инпутов.

  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#subscribe-border-style').off();
  $('#subscribe-border-left-style').off();
  $('#subscribe-border-right-style').off();
  $('#subscribe-border-top-style-value').off();
  $('#subscribe-border-bottom-style').off();
  $('#subscribe-animation-type-value').off();

  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#subscribe-timeout-hour-value').val(h);
    $('#subscribe-timeout-minute-value').val(m);
    $('#subscribe-timeout-second-value').val(s);
    $('#subscribe-display-none-value').prop('checked', true);
  } else {
    $('#subscribe-timeout-hour-value').val(0);
    $('#subscribe-timeout-minute-value').val(0);
    $('#subscribe-timeout-second-value').val(0);
  }

  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#list-settings').hide();
  $('#line-settings').hide();
  $('#subscribe-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated'); // Закрыть панель

  document.addEventListener('mousedown', closeRightPanel); //Вставка кода

  showHideSettings('show-subscribe-code-settings', 'subscribeCodeIndicator');
  Object(_subscribeDelivery_js__WEBPACK_IMPORTED_MODULE_2__["default"])(subscribeBlockElem.id); //Настройки отступов формы

  showHideSettings('subscribeMarginEvery', 'subscribeMarginGroupIndicator');
  $('#subscribe-margin-top-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginTop));
  $('#subscribe-margin-top-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginTop));
  $('#subscribe-margin-right-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginRight));
  $('#subscribe-margin-right-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginRight));
  $('#subscribe-margin-bottom-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginBottom));
  $('#subscribe-margin-bottom-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginBottom));
  $('#subscribe-margin-left-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginLeft));
  $('#subscribe-margin-left-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginLeft));
  $('#subscribe-margin-top-value, #subscribe-margin-top-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-top', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "subscribe-margin-top-value") {
      $('#subscribe-margin-top-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-margin-right-value, #subscribe-margin-right-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-right', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "subscribe-margin-right-value") {
      $('#subscribe-margin-right-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-margin-bottom-value, #subscribe-margin-bottom-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-bottom', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "subscribe-margin-bottom-value") {
      $('#subscribe-margin-bottom-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-margin-left-value, #subscribe-margin-left-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-left', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "subscribe-margin-left-value") {
      $('#subscribe-margin-left-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-left-value').val($(this).val());
    }

    makePreview();
  }); //Вертикальное выравнивание формы

  showHideSettings('subscribe-show-vertical-settings', 'subscribeVerticalIndicator');

  if (getComputedStyle(subscribeBlockElem).marginTop == 'auto') {
    subscribeMarginBottom.checked = true;
    subscribeMarginTop.checked = false;
    subscribeMarginCenter.checked = false;
  } else if (getComputedStyle(subscribeBlockElem).marginBottom == 'auto') {
    subscribeMarginBottom.checked = false;
    subscribeMarginTop.checked = true;
    subscribeMarginCenter.checked = false;
  } else if (getComputedStyle(subscribeBlockElem).marginTop == '0px' && getComputedStyle(subscribeBlockElem).marginBottom == '0px') {
    subscribeMarginBottom.checked = false;
    subscribeMarginTop.checked = false;
    subscribeMarginCenter.checked = true;
  }

  subscribeMarginTop.onclick = function () {
    subscribeBlockElem.style.marginTop = '0px';
    subscribeBlockElem.style.marginBottom = 'auto';
    makePreview();
  };

  subscribeMarginCenter.onclick = function () {
    subscribeBlockElem.style.marginTop = '0px';
    subscribeBlockElem.style.marginBottom = '0px';
    makePreview();
  };

  subscribeMarginBottom.onclick = function () {
    subscribeBlockElem.style.marginTop = 'auto';
    subscribeBlockElem.style.marginBottom = '0px';
    makePreview();
  };
  /*Настройки теней*/


  showHideSettings('subscribe-shadow-settings', 'subscribeShadowIndicator');

  document.getElementById('subscribeShadowRadioOn').onclick = function () {
    document.getElementById('subscribe-shadow').style.display = 'block';
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    makePreview();
  };

  document.getElementById('subscribeShadowRadioOff').onclick = function () {
    document.getElementById('subscribe-shadow').style.display = 'none';

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', 'none');
    }

    makePreview();
  };

  $('#subscribe-shadow-horizontal-value, #subscribe-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "subscribe-shadow-horizontal-value") {
      $('#subscribe-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-horizontal-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-shadow-vertical-value, #subscribe-shadow-vertical-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "subscribe-shadow-vertical-value") {
      $('#subscribe-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-vertical-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-shadow-blur-value, #subscribe-shadow-blur-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "subscribe-shadow-blur-value") {
      $('#subscribe-shadow-blur-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-blur-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-shadow-spread-value, #subscribe-shadow-spread-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "subscribe-shadow-spread-value") {
      $('#subscribe-shadow-spread-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-spread-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-shadow-opacity-value, #subscribe-shadow-opacity-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    if ($(this).attr('id') == "subscribe-shadow-opacity-value") {
      $('#subscribe-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-opacity-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-shadow-color-value').on('change', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    makePreview();
  });
  $('#subscribe-shadow-inset-value').on('change', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;

    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }

    makePreview();
  });
  /*Конец настроек теней*/

  Object(_subscribeInputsSettings_js__WEBPACK_IMPORTED_MODULE_0__["default"])($(ths).attr('id'));
  Object(_subscribeSumbitSettings_js__WEBPACK_IMPORTED_MODULE_1__["default"])($(ths).attr('id'));
  /*Настройка анимации*/

  showHideSettings('subscribe-animation', 'subscribeAnimationIndicator');
  $('#subscribe-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(currentSubscribe).css('animation-name', $(this).val());
      $(currentSubscribe).css('animation-delay', $('#subscribe-animation-delay-value').val() + 's');
      $(currentSubscribe).css('animation-duration', $('#subscribe-animation-duration-value').val() + 's');
    }

    makePreview();
  });
  $('#subscribe-animation-delay-value, #subscribe-animation-delay-value-range').on('input', function () {
    $(currentSubscribe).css('animation-delay', $(this).val() + 's');

    if ($(this).attr('id') == "subscribe-animation-delay-value") {
      $('#subscribe-animation-delay-value-range').val($(this).val());
    } else {
      $('#subscribe-animation-delay-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-animation-duration-value, #subscribe-animation-duration-value-range').on('input', function () {
    $(currentSubscribe).css('animation-duration', $(this).val() + 's');

    if ($(this).attr('id') == "subscribe-animation-duration-value") {
      $('#subscribe-animation-duration-value-range').val($(this).val());
    } else {
      $('#subscribe-animation-duration-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец настроек анимации*/

  /*Блок таймаута*/

  showHideSettings('subscribe-show-timeout-settings', 'subscribeTimeoutIndicator');
  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('subscribe-display-none-value').checked = true;
  } else {
    document.getElementById('subscribe-display-none-value').checked = false;
  }

  $('#subscribe-display-none-value, #subscribe-timeout-hour-value, #subscribe-timeout-hour-value-range, #subscribe-timeout-minute-value, #subscribe-timeout-minute-value-range, #subscribe-timeout-second-value, #subscribe-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#subscribe-timeout-hour-value').val() * 3600;
    var minute = $('#subscribe-timeout-minute-value').val() * 60;
    var second = parseInt($('#subscribe-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;

    if (document.getElementById('subscribe-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }

    if ($(this).attr('id') == "subscribe-timeout-hour-value") {
      $('#subscribe-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-hour-value-range") {
      $('#subscribe-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-minute-value") {
      $('#subscribe-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-minute-value-range") {
      $('#subscribe-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-second-value") {
      $('#subscribe-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-second-value-range") {
      $('#subscribe-timeout-second-value').val($(this).val());
    }

    makePreview();
  });
  /*Конец блока таймаута*/
});

/***/ }),

/***/ "./src/API/modules/subscribe/subscribeSumbitSettings.js":
/*!**************************************************************!*\
  !*** ./src/API/modules/subscribe/subscribeSumbitSettings.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function includeSubscribeSubmitSettings(id) {
  'use strict';

  var subscribeBlockElem = document.getElementById(id);
  var subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  var currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  var subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  var subscribeInputs = currentSubscribe.getElementsByClassName('subsribeInput');
  var allInputs = currentSubscribe.getElementsByTagName('input');
  var submitWrapperEl = currentSubscribe.getElementsByClassName('submitWrapper')[0];
  showHideSettings('subscribe-submit-settings', 'subscribeSubmitIndicator'); //Редактирование текста кнопки

  showHideSettings('subscribe-submit-editor-settings', 'subscribeSubmitEditorIndicator');
  submitEditor.value = subscribeSubmitElem.innerHTML;

  submitEditor.oninput = function () {
    subscribeSubmitElem.innerHTML = submitEditor.value;
    subscribeSubmitElem.style.height = 'auto';
  };
  /*Настройки тени submit*/


  showHideSettings('subscribe-submit-text-shadow-settings', 'subscribeSubmitTextShadowIndicator');

  document.getElementById('subscribeSubmitTextShadowRadioOn').onclick = function () {
    document.getElementById('subscribe-submit-text-shadow').style.display = 'block';
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    makePreview();
  };

  document.getElementById('subscribeSubmitTextShadowRadioOff').onclick = function () {
    document.getElementById('subscribe-submit-text-shadow').style.display = 'none';
    $(subscribeSubmitElem).css('text-shadow', 'none');
    makePreview();
  };

  $('#subscribe-submit-text-shadow-horizontal-value, #subscribe-submit-text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);

    if ($(this).attr('id') == "subscribe-submit-text-shadow-horizontal-value") {
      $('#subscribe-submit-text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-horizontal-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-submit-text-shadow-vertical-value, #subscribe-submit-text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);

    if ($(this).attr('id') == "subscribe-submit-text-shadow-vertical-value") {
      $('#subscribe-submit-text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-vertical-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-submit-text-shadow-blur-value, #subscribe-submit-text-shadow-blur-value-range').on('input', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = hexToRGB($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts); //    for (let i = 0; i < allInputs.length; i++) {
    //      $(subscribeSubmitElem).css('text-shadow', prpts);
    //    }

    if ($(this).attr('id') == "subscribe-submit-text-shadow-blur-value") {
      $('#subscribe-submit-text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-blur-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-submit-text-shadow-opacity-value, #subscribe-submit-text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#subscribe-submit-text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);

    if ($(this).attr('id') == "subscribe-submit-text-shadow-opacity-value") {
      $('#subscribe-submit-text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-opacity-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribe-submit-text-shadow-color-value').on('change', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    makePreview();
  });
  /*Конец настроек тени submit*/
  //Настройки отступов у submit

  showHideSettings('subscribeSubmitMarginEvery', 'subscribeSubmitMarginIndicator');
  $('#subscribeSubmit-margin-top-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginTop));
  $('#subscribeSubmit-margin-top-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginTop));
  $('#subscribeSubmit-margin-right-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginRight));
  $('#subscribeSubmit-margin-right-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginRight));
  $('#subscribeSubmit-margin-bottom-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginBottom));
  $('#subscribeSubmit-margin-bottom-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginBottom));
  $('#subscribeSubmit-margin-left-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginLeft));
  $('#subscribeSubmit-margin-left-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginLeft));
  $('#subscribeSubmit-margin-top-value, #subscribeSubmit-margin-top-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-top', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "subscribeSubmit-margin-top-value") {
      $('#subscribeSubmit-margin-top-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-margin-right-value, #subscribeSubmit-margin-right-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-right', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "subscribeSubmit-margin-right-value") {
      $('#subscribeSubmit-margin-right-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-margin-bottom-value, #subscribeSubmit-margin-bottom-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-bottom', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "subscribeSubmit-margin-bottom-value") {
      $('#subscribeSubmit-margin-bottom-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-margin-left-value, #subscribeSubmit-margin-left-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-left', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });

    if ($(this).attr('id') == "subscribeSubmit-margin-left-value") {
      $('#subscribeSubmit-margin-left-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-left-value').val($(this).val());
    }

    makePreview();
  }); //Выбор шрифта

  showHideSettings('subscribe-show-submit-font-settings', 'subscribeSubmitFontIndicator');
  subscribeSubmitFontFamilySelect.value = getComputedStyle(subscribeSubmitElem).fontFamily;

  subscribeSubmitFontFamilySelect.onchange = function () {
    subscribeSubmitElem.style.fontFamily = subscribeSubmitFontFamilySelect.value;
    makePreview();
  };

  if (getComputedStyle(subscribeSubmitElem).fontWeight == '900') {
    subscribeSubmitBold.checked = true;
  } else {
    subscribeSubmitBold.checked = false;
  }

  subscribeSubmitBold.onclick = function () {
    if (subscribeSubmitBold.checked) {
      subscribeSubmitElem.style.fontWeight = '900';
    } else {
      subscribeSubmitElem.style.fontWeight = 'normal';
    }

    makePreview();
  }; //Размер шрифта submit


  $('#subscribeSubmit-font-size-value').val(parseInt(getComputedStyle(subscribeSubmitElem).fontSize));
  $('#subscribeSubmit-font-size-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).fontSize));
  $('#subscribeSubmit-font-size-value, #subscribeSubmit-font-size-value-range').on('input', function () {
    $(subscribeSubmitElem).css('font-size', $(this).val() + 'px');

    if ($(this).attr('id') == "subscribeSubmit-font-size-value") {
      $('#subscribeSubmit-font-size-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-font-size-value').val($(this).val());
    }

    makePreview();
  }); //Цвет текста у submit

  $('#subscribeSubmit-color-value').on('change', function () {
    $(subscribeSubmitElem).css('color', $(this).val());
    makePreview();
  }); //Цвет submit

  showHideSettings('subscribeSubmit-background-types', 'subscribeSubmitBackgroundIndicator');

  subscribeSubmitBackgroundRadioColor.onclick = function () {
    subscribeSubmitBackgroundGradient.style.display = 'none';
    subscribeSubmitBackgroundColor.style.display = 'block';
  };

  subscribeSubmitBackgroundRadioGradient.onclick = function () {
    subscribeSubmitBackgroundColor.style.display = 'none';
    subscribeSubmitBackgroundGradient.style.display = 'block';
  };

  $('#subscribeSubmit-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = hexToRGB($(this).val(), opacity);
    $(subscribeSubmitElem).css('background', color);
    makePreview();
  });
  $('#subscribeSubmit-gradient-color-1').on('change', function () {
    $(subscribeSubmitElem).css('background', 'linear-gradient(' + parseInt($('#subscribeSubmit-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#subscribeSubmit-gradient-color-2').val() + ')');
    makePreview();
  });
  $('#subscribeSubmit-gradient-color-2').on('change', function () {
    $(subscribeSubmitElem).css('background', 'linear-gradient(' + parseInt($('#subscribeSubmit-gradient-angle').val()) + 'deg, ' + $('#subscribeSubmit-gradient-color-1').val() + ', ' + $(this).val() + ')');
    makePreview();
  });
  $('#subscribeSubmit-gradient-angle').on('input', function () {
    $(subscribeSubmitElem).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#subscribeSubmit-gradient-color-1').val() + ', ' + $('#subscribeSubmit-gradient-color-2').val() + ')');
    makePreview();
  });
  $('#subscribeSubmit-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = hexToRGB($('#subscribeSubmit-main-color').val(), opacity / 100);
    $(subscribeSubmitElem).css('background', color);
    makePreview();
  }); //Высота кнопки

  showHideSettings('subscribeSubmit-height', 'subscribeSubmitSizeIndicator');

  if (subscribeSubmitElem.style.height == 'auto' || subscribeSubmitElem.style.height == '') {
    subscribeSubmitAutoHeight.checked = true;
  } else {
    subscribeSubmitAutoHeight.checked = false;
  }

  $('#subscribeSubmit-height-value').val(parseInt($(subscribeSubmitElem).css('height')));
  $('#subscribeSubmit-height-value-range').val(parseInt($(subscribeSubmitElem).css('height')));

  subscribeSubmitAutoHeight.onclick = function () {
    if (subscribeSubmitAutoHeight.checked == true) {
      subscribeSubmitElem.style.height = 'auto';
      makePreview();
    }
  };

  $('#subscribeSubmit-height-value, #subscribeSubmit-height-value-range').on('input', function () {
    if (subscribeSubmitAutoHeight.checked == false) {
      $(subscribeSubmitElem).css('height', $(this).val() + 'px');

      if ($(this).attr('id') == "subscribeSubmit-height-value") {
        $('#subscribeSubmit-height-value-range').val($(this).val());
      } else {
        $('#subscribeSubmit-height-value').val($(this).val());
      }
    }

    makePreview();
  }); //Ширина кнопки

  if (getComputedStyle(subscribeSubmitElem).width == '100%') {
    subscribeSubmitAutoWidth.checked = true;
  } else {
    subscribeSubmitAutoWidth.checked = false;
  }

  $('#subscribeSubmit-width-value').val(parseInt($(subscribeSubmitElem).css('width')));
  $('#subscribeSubmit-width-value-range').val(parseInt($(subscribeSubmitElem).css('width')));

  subscribeSubmitAutoWidth.onclick = function () {
    if (subscribeSubmitAutoWidth.checked == true) {
      subscribeSubmitElem.style.width = '100%';
      makePreview();
    }
  };

  $('#subscribeSubmit-width-value, #subscribeSubmit-width-value-range').on('input', function () {
    if (subscribeSubmitAutoWidth.checked == false) {
      $(subscribeSubmitElem).css('width', $(this).val() + 'px');

      if ($(this).attr('id') == "subscribeSubmit-width-value") {
        $('#subscribeSubmit-width-value-range').val($(this).val());
      } else {
        $('#subscribeSubmit-width-value').val($(this).val());
      }
    }

    makePreview();
  }); //Настройки всех границ submit

  showHideSettings('subscribe-show-submit-border-settings', 'subscribeSubmitBorderIndicator');

  subscribeSubmitBorderRadioEvery.onclick = function () {
    subscribeSubmitBorderAll.style.display = 'none';
    subscribeSubmitBorderEvery.style.display = 'block';
  };

  subscribeSubmitBorderRadioAll.onclick = function () {
    subscribeSubmitBorderAll.style.display = 'block';
    subscribeSubmitBorderEvery.style.display = 'none';
  };

  $('#subscribeSubmit-border-value').val(parseInt($(subscribeSubmitElem).css('border-width')));
  $('#subscribeSubmit-border-value-range').val(parseInt($(subscribeSubmitElem).css('border-width')));
  $('#subscribeSubmit-border-radius').val(parseInt($(subscribeSubmitElem).css('border-radius')));
  $('#subscribeSubmit-border-radius-range').val(parseInt($(subscribeSubmitElem).css('border-radius')));
  $('#subscribeSubmit-border-value, #subscribeSubmit-border-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-width', $(this).val() + 'px');

    if ($(this).attr('id') == "subscribeSubmit-border-value") {
      $('#subscribeSubmit-border-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-border-radius, #subscribeSubmit-border-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "subscribeSubmit-border-radius") {
      $('#subscribeSubmit-border-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-radius').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-border-style').on('change', function () {
    $(subscribeSubmitElem).css('border-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#subscribeSubmit-border-color-value').on('change', function () {
    $(subscribeSubmitElem).css('border-color', $(this).val());
    makePreview();
  });
  /*Настройки для верхней границы submit*/

  $('#subscribeSubmit-border-top-value').val(parseInt($(subscribeSubmitElem).css('border-top-width')));
  $('#subscribeSubmit-border-top-value-range').val(parseInt($(subscribeSubmitElem).css('border-top-width')));
  $('#subscribeSubmit-border-left-top-radius').val(parseInt($(subscribeSubmitElem).css('border-top-left-radius')));
  $('#subscribeSubmit-border-left-top-radius-range').val(parseInt($(subscribeSubmitElem).css('border-top-left-radius')));
  $('#subscribeSubmit-border-top-value, #subscribeSubmit-border-top-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-top-width', $(this).val() + 'px');

    if ($(this).attr('id') == "subscribeSubmit-border-top-value") {
      $('#subscribeSubmit-border-top-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-top-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-border-left-top-radius, #subscribeSubmit-border-left-top-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-top-left-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "subscribeSubmit-border-left-top-radius") {
      $('#subscribeSubmit-border-left-top-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-left-top-radius').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-border-top-style-value').on('change', function () {
    $(subscribeSubmitElem).css('border-top-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#subscribeSubmit-border-top-color').on('change', function () {
    $(subscribeSubmitElem).css('border-top-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для правой границы submit*/

  $('#subscribeSubmit-border-right-value').val(parseInt($(subscribeSubmitElem).css('border-right-width')));
  $('#subscribeSubmit-border-right-value-range').val(parseInt($(subscribeSubmitElem).css('border-right-width')));
  $('#subscribeSubmit-border-right-radius').val(parseInt($(subscribeSubmitElem).css('border-top-right-radius')));
  $('#subscribeSubmit-border-right-radius-range').val(parseInt($(subscribeSubmitElem).css('border-top-right-radius')));
  $('#subscribeSubmit-border-right-value, #subscribeSubmit-border-right-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-right-width', $(this).val() + 'px');

    if ($(this).attr('id') == "subscribeSubmit-border-right-value") {
      $('#subscribeSubmit-border-right-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-right-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-border-right-radius, #subscribeSubmit-border-right-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-top-right-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "subscribeSubmit-border-right-radius") {
      $('#subscribeSubmit-border-right-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-right-radiuse').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-border-right-style').on('change', function () {
    $(subscribeSubmitElem).css('border-right-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#subscribeSubmit-border-right-color').on('change', function () {
    $(subscribeSubmitElem).css('border-right-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для нижней границы submit*/

  $('#subscribeSubmit-border-bottom-value').val(parseInt($(subscribeSubmitElem).css('border-bottom-width')));
  $('#subscribeSubmit-border-bottom-value-range').val(parseInt($(subscribeSubmitElem).css('border-bottom-width')));
  $('#subscribeSubmit-border-bottom-right-radius').val(parseInt($(subscribeSubmitElem).css('border-bottom-right-radius')));
  $('#subscribeSubmit-border-bottom-right-radius-range').val(parseInt($(subscribeSubmitElem).css('border-bottom-right-radius')));
  $('#subscribeSubmit-border-bottom-value, #subscribeSubmit-border-bottom-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-bottom-width', $(this).val() + 'px');

    if ($(this).attr('id') == "subscribeSubmit-border-bottom-value") {
      $('#subscribeSubmit-border-bottom-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-bottom-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-border-bottom-right-radius, #subscribeSubmit-border-bottom-right-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-bottom-right-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "subscribeSubmit-border-bottom-right-radius") {
      $('#subscribeSubmit-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-bottom-right-radius').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-border-bottom-style').on('change', function () {
    $(subscribeSubmitElem).css('border-bottom-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#subscribeSubmit-border-bottom-color').on('change', function () {
    $(subscribeSubmitElem).css('border-bottom-color', $(this).val());
    makePreview();
  });
  /*Конец блока*/

  /*Настройки для левой границы submit*/

  $('#subscribeSubmit-border-left-value').val(parseInt($(subscribeSubmitElem).css('border-left-width')));
  $('#subscribeSubmit-border-left-value-range').val(parseInt($(subscribeSubmitElem).css('border-left-width')));
  $('#subscribeSubmit-border-bottom-left-radius').val(parseInt($(subscribeSubmitElem).css('border-bottom-left-radius')));
  $('#subscribeSubmit-border-bottom-left-radius-range').val(parseInt($(subscribeSubmitElem).css('border-bottom-left-radius')));
  $('#subscribeSubmit-border-left-value, #subscribeSubmit-border-left-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-left-width', $(this).val() + 'px');

    if ($(this).attr('id') == "subscribeSubmit-border-left-value") {
      $('#subscribeSubmit-border-left-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-left-value').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-border-bottom-left-radius, #subscribeSubmit-border-bottom-left-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-bottom-left-radius', $(this).val() + 'px');

    if ($(this).attr('id') == "subscribeSubmit-border-bottom-left-radius") {
      $('#subscribeSubmit-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-bottom-left-radius').val($(this).val());
    }

    makePreview();
  });
  $('#subscribeSubmit-border-left-style').on('change', function () {
    $(subscribeSubmitElem).css('border-left-style', $(this).find('option:selected').val());
    makePreview();
  });
  $('#subscribeSubmit-border-left-color').on('change', function () {
    $(subscribeSubmitElem).css('border-left-color', $(this).val());
    makePreview();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (includeSubscribeSubmitSettings);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL3N1YnNjcmliZS9zdWJzY3JpYmVEZWxpdmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQVBJL21vZHVsZXMvc3Vic2NyaWJlL3N1YnNjcmliZUlucHV0c1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9BUEkvbW9kdWxlcy9zdWJzY3JpYmUvc3Vic2NyaWJlU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSS9tb2R1bGVzL3N1YnNjcmliZS9zdWJzY3JpYmVTdW1iaXRTZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyJpbmNsdWRlU3Vic2NyaWJlRGVsaXZlcnkiLCJpZCIsInN1YnNjcmliZUJsb2NrRWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJzY3JpYmVXcmFwcGVyRWxlbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JtQ29kZVdyYXBwZXJFbGVtIiwiY3VycmVudFN1YnNjcmliZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3Vic2NyaWJlU3VibWl0RWxlbSIsInN1YnNjcmliZUlucHV0cyIsImFsbElucHV0cyIsImV4dHJhRmllbGRDb3VudGVyIiwiZGVsaXZlcnlDb2RlRWwiLCJpbnB1dHNJbmZvRWwiLCJleHRyYUZpZWxkcyIsImRlbGl2ZXJ5Q29kZUFyZWFFbCIsInNlbGVjdElucHV0c05hbWVzIiwibmFtZUZpZWxkRWwiLCJlbWFpbEZpZWxkRWwiLCJzaG93RGVsaXZlcnkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImkiLCJsZW5ndGgiLCJyZW1vdmUiLCJjbGFzc05hbWUiLCJleHRyYUZpZWxkRWwiLCJjcmVhdGVFbGVtZW50IiwicGxhY2Vob2xkZXIiLCJhcHBlbmQiLCJkZWxldGVGaWVsZEVsIiwib25jbGljayIsImNoYW5nZUlucHV0c0luZm8iLCJuYW1lIiwicmVxdWlyZWQiLCJjaGVja2VkIiwibmFtZVJlcXVpcmUiLCJmb3JtQWN0aW9uIiwib25pbnB1dCIsIm5hbWVEaXNhYmxlZCIsIm5hbWVJbmZvIiwic3R5bGUiLCJkaXNwbGF5IiwiZGVsaXZlcnlDb2RlRXhlYyIsImlucHV0U3R5bGVzIiwic3VibWl0U3R5bGVzIiwiZGVsaXZlcnlGb3JtIiwiaW5wdXRzIiwiZGVsaXZlcnlJbnB1dE5hbWUiLCJkZWxpdmVyeUlucHV0RW1haWwiLCJkZWxpdmVyeVN1Ym1pdCIsImhpZGRlbklucHV0cyIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwid2lkdGgiLCJwdXNoIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wU3R5bGUiLCJib3JkZXJUb3BDb2xvciIsImJvcmRlclJpZ2h0V2lkdGgiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlclJpZ2h0U3R5bGUiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVN0eWxlIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyTGVmdFN0eWxlIiwiYm9yZGVyTGVmdENvbG9yIiwiZW5jdHlwZSIsImFjdGlvbiIsIm1ldGhvZCIsImZvcm1NZXRob2QiLCJ0eXBlIiwib3V0ZXJIVE1MIiwiZGVsaXZlcnlGaWVsZE5hbWUiLCJkZWxpdmVyeUZpZWxkRW1haWwiLCJpbnB1dCIsImV4dHJhRmllbGRSZXF1aXJlZCIsInN1Ym1pdEVkaXRvciIsInJlbWVtYmVyU3R5bGUiLCJhZGREcmFnQW5kRHJvcFRvRm9ybSIsImluY2x1ZGVTdWJzY3JpYmVJbnB1dHNTZXR0aW5ncyIsImluY2x1ZGVTdWJzY3JpYmVTdWJtaXRTZXR0aW5ncyIsIm1ha2VQcmV2aWV3IiwibmV3RmllbGQiLCJkZWxpdmVyeUNvZGVSZXNldCIsInNlbGVjdFZhbHVlcyIsImRlbGl2ZXJ5Q29kZUFyZWEiLCJkZWxpdmVyeUlucHV0cyIsImoiLCJpbmRleE9mIiwic3VibWl0Iiwic3Vic2NyaWJlU3VibWl0Qm9sZCIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5Iiwic3Vic2NyaWJlU3VibWl0Rm9udEZhbWlseVNlbGVjdCIsImZvbnRTaXplIiwiJCIsInZhbCIsInN1YnNjcmliZUlucHV0QXV0b0hlaWdodCIsImhlaWdodCIsInN1YnNjcmliZVN1Ym1pdFRleHRTaGFkb3dSYWRpb09uIiwiaHYiLCJ2diIsImJsciIsImNsciIsImhleFRvUkdCIiwicHJwdHMiLCJ0ZXh0U2hhZG93Iiwic3Vic2NyaWJlSW5wdXRCb2xkIiwic3Vic2NyaWJlSW5wdXRGb250RmFtaWx5U2VsZWN0Iiwic3Vic2NyaWJlSW5wdXRUZXh0U2hhZG93UmFkaW9PbiIsInNob3dIaWRlU2V0dGluZ3MiLCJwYXJzZUludCIsIm1hcmdpbkJvdHRvbSIsIm9uIiwiY3NzIiwiYXR0ciIsInN1YnNjcmliZUlucHV0RWxlbSIsIm9uY2hhbmdlIiwic3Vic2NyaWJlSW5wdXRCYWNrZ3JvdW5kUmFkaW9Db2xvciIsInN1YnNjcmliZUlucHV0QmFja2dyb3VuZEdyYWRpZW50Iiwic3Vic2NyaWJlSW5wdXRCYWNrZ3JvdW5kQ29sb3IiLCJzdWJzY3JpYmVJbnB1dEJhY2tncm91bmRSYWRpb0dyYWRpZW50Iiwib3BhY2l0eSIsInN1YnNjcmliZUlucHV0QXV0b1dpZHRoIiwic3Vic2NyaWJlSW5wdXRCb3JkZXJSYWRpb0V2ZXJ5Iiwic3Vic2NyaWJlSW5wdXRCb3JkZXJBbGwiLCJzdWJzY3JpYmVJbnB1dEJvcmRlckV2ZXJ5Iiwic3Vic2NyaWJlSW5wdXRCb3JkZXJSYWRpb0FsbCIsImZpbmQiLCJzdWJzY3JpYmVCbG9ja0lkIiwicGFyZW50cyIsImNsb25JZCIsImdldFJhbmRvbSIsImNsb25lIiwiaW5zZXJ0QWZ0ZXIiLCJhZGRGdW5jdGlvbmFsaXR5VG9TdWJzY3JpYmVFbGVtZW50IiwiZSIsInRocyIsInRlc3RTdWJzY3JpYmVFbGVtIiwib2ZmIiwidGltZSIsInNwbGl0IiwiaCIsIk1hdGgiLCJmbG9vciIsIm0iLCJzIiwicHJvcCIsImhpZGUiLCJzaG93IiwicmlnaHQiLCJ0cmFuc2l0aW9uIiwiYWRkQ2xhc3MiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VSaWdodFBhbmVsIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwic3Vic2NyaWJlTWFyZ2luQm90dG9tIiwic3Vic2NyaWJlTWFyZ2luVG9wIiwic3Vic2NyaWJlTWFyZ2luQ2VudGVyIiwic3ByZCIsImluc2V0IiwiaG91cnMiLCJtaW51dGUiLCJzZWNvbmQiLCJzdWJtaXRXcmFwcGVyRWwiLCJzdWJzY3JpYmVTdWJtaXRCYWNrZ3JvdW5kUmFkaW9Db2xvciIsInN1YnNjcmliZVN1Ym1pdEJhY2tncm91bmRHcmFkaWVudCIsInN1YnNjcmliZVN1Ym1pdEJhY2tncm91bmRDb2xvciIsInN1YnNjcmliZVN1Ym1pdEJhY2tncm91bmRSYWRpb0dyYWRpZW50Iiwic3Vic2NyaWJlU3VibWl0QXV0b0hlaWdodCIsInN1YnNjcmliZVN1Ym1pdEF1dG9XaWR0aCIsInN1YnNjcmliZVN1Ym1pdEJvcmRlclJhZGlvRXZlcnkiLCJzdWJzY3JpYmVTdWJtaXRCb3JkZXJBbGwiLCJzdWJzY3JpYmVTdWJtaXRCb3JkZXJFdmVyeSIsInN1YnNjcmliZVN1Ym1pdEJvcmRlclJhZGlvQWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMx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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QyxHQUFSLEVBQWhEO0FBQ0FmLGVBQVc7QUFDWixHQUhEO0FBSUQ7O0FBS2NELDZGQUFmLEUiLCJmaWxlIjoic3Vic2NyaWJlX3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvQVBJL21vZHVsZXMvc3Vic2NyaWJlL3N1YnNjcmliZVNldHRpbmdzLmpzXCIpO1xuIiwiaW1wb3J0IGluY2x1ZGVTdWJzY3JpYmVJbnB1dHNTZXR0aW5ncyBmcm9tICcuL3N1YnNjcmliZUlucHV0c1NldHRpbmdzLmpzJztcclxuaW1wb3J0IGluY2x1ZGVTdWJzY3JpYmVTdWJtaXRTZXR0aW5ncyBmcm9tICcuL3N1YnNjcmliZVN1bWJpdFNldHRpbmdzLmpzJztcclxuXHJcbmZ1bmN0aW9uIGluY2x1ZGVTdWJzY3JpYmVEZWxpdmVyeShpZCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgbGV0IHN1YnNjcmliZUJsb2NrRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICBsZXQgc3Vic2NyaWJlV3JhcHBlckVsZW0gPSBzdWJzY3JpYmVCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3Vic2NyaWJlV3JhcHBlcicpWzBdO1xyXG4gIGxldCBmb3JtQ29kZVdyYXBwZXJFbGVtID0gc3Vic2NyaWJlQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm1Db2RlV3JhcHBlcicpWzBdO1xyXG4gIGxldCBjdXJyZW50U3Vic2NyaWJlID0gc3Vic2NyaWJlQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF07XHJcbiAgbGV0IHN1YnNjcmliZVN1Ym1pdEVsZW0gPSBjdXJyZW50U3Vic2NyaWJlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1YnNjcmliZVN1Ym1pdCcpWzBdO1xyXG4gIGxldCBzdWJzY3JpYmVJbnB1dHMgPSBjdXJyZW50U3Vic2NyaWJlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1YnNjcmliZUlucHV0Jyk7XHJcbiAgbGV0IGFsbElucHV0cyA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgbGV0IGV4dHJhRmllbGRDb3VudGVyID0gMTtcclxuICBsZXQgZGVsaXZlcnlDb2RlRWwgPSBzdWJzY3JpYmVCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsaXZlcnlDb2RlJylbMF0sXHJcbiAgICBpbnB1dHNJbmZvRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRzSW5mbycpLFxyXG4gICAgZXh0cmFGaWVsZHMgPSBpbnB1dHNJbmZvRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXh0cmFGaWVsZCcpO1xyXG4gIGNvbnN0IGRlbGl2ZXJ5Q29kZUFyZWFFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxpdmVyeUNvZGVBcmVhJyk7XHJcbiAgY29uc3Qgc2VsZWN0SW5wdXRzTmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZE5hbWVTZWxlY3QnKSxcclxuICAgIG5hbWVGaWVsZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVGaWVsZCcpLFxyXG4gICAgZW1haWxGaWVsZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsRmllbGQnKTtcclxuXHJcbiAgLy8g0JLRi9Cy0L7QtCDQtNC10LnRgdGC0LLRg9GO0YnQtdC5INGA0LDRgdGB0YvQu9C60Lgg0LIg0L3QsNGB0YLRgNC+0LnQutCw0YVcclxuXHJcbiAgZnVuY3Rpb24gc2hvd0RlbGl2ZXJ5KCkge1xyXG4gICAgZXh0cmFGaWVsZENvdW50ZXIgPSAxO1xyXG4gICAgZGVsaXZlcnlDb2RlQXJlYUVsLnZhbHVlID0gZGVsaXZlcnlDb2RlRWwuaW5uZXJIVE1MO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RJbnB1dHNOYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzZWxlY3RJbnB1dHNOYW1lc1tpXS5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXh0cmFGaWVsZHMubGVuZ3RoOykge1xyXG4gICAgICBpZiAoZXh0cmFGaWVsZHNbaV0pIHtcclxuICAgICAgICBleHRyYUZpZWxkc1tpXS5yZW1vdmUoKTtcclxuICAgICAgICBpbnB1dHNJbmZvRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRzSW5mbycpO1xyXG4gICAgICAgIGV4dHJhRmllbGRzID0gaW5wdXRzSW5mb0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2V4dHJhRmllbGQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhbGxJbnB1dHNbaV0uY2xhc3NOYW1lID09ICdzdWJzY3JpYmVJbnB1dCBleHRyYScpIHtcclxuICAgICAgICBjb25zdCBleHRyYUZpZWxkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgZXh0cmFGaWVsZEVsLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXh0cmFGaWVsZFwiPjxicj7QlNCe0J/QntCb0J3QmNCi0JXQm9Cs0J3QntCVINCf0J7Qm9CVICcgKyBleHRyYUZpZWxkQ291bnRlciArICc8YnI+JyArXHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cInN1Ym1pdFZhbHVlXCI+JyArXHJcbiAgICAgICAgICAnPGlucHV0IGNsYXNzPVwiZmllbGRQbGFjZWhvbGRlclwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCInICsgYWxsSW5wdXRzW2ldLnBsYWNlaG9sZGVyICsgJ1wiPjxzcGFuIGNsYXNzPVwiZGVsZXRlRmllbGRcIj5YPC9zcGFuPicgK1xyXG4gICAgICAgICAgJzwvZGl2Pjxicj48YnI+JyArXHJcbiAgICAgICAgICAnPHNlbGVjdCBjbGFzcz1cImZpZWxkTmFtZVNlbGVjdFwiPjwvc2VsZWN0Pjxicj4nICtcclxuICAgICAgICAgICc8aW5wdXQgY2xhc3M9XCJleHRyYUZpZWxkUmVxdWlyZWRcIiB0eXBlPVwiY2hlY2tib3hcIj4mbmJzcDsgcmVxdWlyZWQ8YnI+PGJyPicgK1xyXG4gICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgaW5wdXRzSW5mb0VsLmFwcGVuZChleHRyYUZpZWxkRWwpO1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVGaWVsZEVsID0gZXh0cmFGaWVsZEVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlbGV0ZUZpZWxkJylbMF07XHJcbiAgICAgICAgZGVsZXRlRmllbGRFbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgZXh0cmFGaWVsZEVsLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhbmdlSW5wdXRzSW5mbygpO1xyXG4gICAgICAgIGV4dHJhRmllbGRFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZE5hbWVTZWxlY3QnKVswXS52YWx1ZSA9IGFsbElucHV0c1tpXS5uYW1lO1xyXG4gICAgICAgIGlmIChhbGxJbnB1dHNbaV0ucmVxdWlyZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgZXh0cmFGaWVsZEVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2V4dHJhRmllbGRSZXF1aXJlZCcpWzBdLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHRyYUZpZWxkQ291bnRlcisrO1xyXG4gICAgICB9IGVsc2UgaWYgKGFsbElucHV0c1tpXS5jbGFzc05hbWUgPT0gJ3N1YnNjcmliZUlucHV0IG5hbWUnKSB7XHJcbiAgICAgICAgbmFtZUZpZWxkRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRQbGFjZWhvbGRlcicpWzBdLnZhbHVlID0gYWxsSW5wdXRzW2ldLnBsYWNlaG9sZGVyO1xyXG4gICAgICAgIGlmIChhbGxJbnB1dHNbaV0ucmVxdWlyZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgbmFtZVJlcXVpcmUuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGFsbElucHV0c1tpXS5jbGFzc05hbWUgPT0gJ3N1YnNjcmliZUlucHV0IGVtYWlsJykge1xyXG4gICAgICAgIGVtYWlsRmllbGRFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFBsYWNlaG9sZGVyJylbMF0udmFsdWUgPSBhbGxJbnB1dHNbaV0ucGxhY2Vob2xkZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcm1BY3Rpb24udmFsdWUgPSAnJztcclxuICAgIGNoYW5nZUlucHV0c0luZm8oKTtcclxuICB9XHJcbiAgc2hvd0RlbGl2ZXJ5KCk7XHJcblxyXG4gIC8v0JLQstC+0LQg0YDQsNGB0YHRi9C70LrQuFxyXG5cclxuICBkZWxpdmVyeUNvZGVBcmVhRWwub25pbnB1dCA9IGNoYW5nZUlucHV0c0luZm87XHJcblxyXG4gIG5hbWVEaXNhYmxlZC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKG5hbWVEaXNhYmxlZC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgbmFtZUluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hbWVJbmZvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0JLRgdGC0LDQstC60LAg0YDQsNGB0YHRi9C70LrQuFxyXG5cclxuICBkZWxpdmVyeUNvZGVFeGVjLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaW5wdXRTdHlsZXMgPSBbXTtcclxuICAgIGxldCBzdWJtaXRTdHlsZXMgPSBbXTtcclxuICAgIGNvbnN0IGRlbGl2ZXJ5Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSxcclxuICAgICAgaW5wdXRzID0gZGVsaXZlcnlDb2RlRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JyksXHJcbiAgICAgIGV4dHJhRmllbGRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXh0cmFGaWVsZCcpO1xyXG5cclxuICAgIGxldCBkZWxpdmVyeUlucHV0TmFtZSA9IG51bGwsXHJcbiAgICAgIGRlbGl2ZXJ5SW5wdXRFbWFpbCA9IG51bGwsXHJcbiAgICAgIGRlbGl2ZXJ5U3VibWl0ID0gbnVsbCxcclxuICAgICAgaGlkZGVuSW5wdXRzID0gbnVsbDtcclxuICAgIGlmIChzdWJzY3JpYmVJbnB1dHNbMF0pIHtcclxuICAgICAgaWYgKHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLndpZHRoKSAhPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlV3JhcHBlckVsZW0pLndpZHRoKSAtIDIpIHtcclxuICAgICAgICBpbnB1dFN0eWxlcy5wdXNoKGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS53aWR0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXRTdHlsZXMucHVzaCgnMTAwJScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0U3R5bGVzLnB1c2goZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmNvbG9yLCBzdWJzY3JpYmVJbnB1dHNbMF0uc3R5bGUuYmFja2dyb3VuZCwgZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlclRvcFdpZHRoLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyVG9wTGVmdFJhZGl1cywgZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlclRvcFN0eWxlLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyVG9wQ29sb3IsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJSaWdodFdpZHRoLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyVG9wUmlnaHRSYWRpdXMsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJSaWdodFN0eWxlLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyUmlnaHRDb2xvciwgZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckJvdHRvbVdpZHRoLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJCb3R0b21TdHlsZSwgZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckJvdHRvbUNvbG9yLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyTGVmdFdpZHRoLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyQm90dG9tTGVmdFJhZGl1cywgZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckxlZnRTdHlsZSwgZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckxlZnRDb2xvcik7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZVN1Ym1pdEVsZW0pLndpZHRoKSAhPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlV3JhcHBlckVsZW0pLndpZHRoKSAtIDIpIHtcclxuICAgICAgc3VibWl0U3R5bGVzLnB1c2goZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVTdWJtaXRFbGVtKS53aWR0aCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdWJtaXRTdHlsZXMucHVzaCgnMTAwJScpO1xyXG4gICAgfVxyXG4gICAgc3VibWl0U3R5bGVzLnB1c2goZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVTdWJtaXRFbGVtKS5jb2xvciwgc3Vic2NyaWJlU3VibWl0RWxlbS5zdHlsZS5iYWNrZ3JvdW5kLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmJvcmRlclRvcFdpZHRoLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmJvcmRlclRvcExlZnRSYWRpdXMsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkuYm9yZGVyVG9wU3R5bGUsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkuYm9yZGVyVG9wQ29sb3IsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkuYm9yZGVyUmlnaHRXaWR0aCwgZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVTdWJtaXRFbGVtKS5ib3JkZXJUb3BSaWdodFJhZGl1cywgZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVTdWJtaXRFbGVtKS5ib3JkZXJSaWdodFN0eWxlLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmJvcmRlclJpZ2h0Q29sb3IsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkuYm9yZGVyQm90dG9tV2lkdGgsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkuYm9yZGVyQm90dG9tU3R5bGUsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkuYm9yZGVyQm90dG9tQ29sb3IsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkuYm9yZGVyTGVmdFdpZHRoLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMsIGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkuYm9yZGVyTGVmdFN0eWxlLCBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmJvcmRlckxlZnRDb2xvciwgKTtcclxuXHJcbiAgICBkZWxpdmVyeUZvcm0uY2xhc3NOYW1lID0gJ3N1YnNjcmliZUZvcm0gZGVsaXZlcnknO1xyXG4gICAgZGVsaXZlcnlGb3JtLmVuY3R5cGUgPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XHJcbiAgICBkZWxpdmVyeUZvcm0uYWN0aW9uID0gZm9ybUFjdGlvbi52YWx1ZTtcclxuICAgIGRlbGl2ZXJ5Rm9ybS5tZXRob2QgPSBmb3JtTWV0aG9kLnZhbHVlO1xyXG4gICAgZm9ybUNvZGVXcmFwcGVyRWxlbS5pbm5lckhUTUwgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChpbnB1dHNbaV0udHlwZSA9PSAnaGlkZGVuJykge1xyXG4gICAgICAgIGRlbGl2ZXJ5Rm9ybS5pbm5lckhUTUwgKz0gaW5wdXRzW2ldLm91dGVySFRNTDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybUNvZGVXcmFwcGVyRWxlbS5hcHBlbmQoZGVsaXZlcnlGb3JtKTtcclxuXHJcbiAgICBpZiAobmFtZURpc2FibGVkLmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgZGVsaXZlcnlJbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICBkZWxpdmVyeUlucHV0TmFtZS5jbGFzc05hbWUgPSAnc3Vic2NyaWJlSW5wdXQgbmFtZSc7XHJcbiAgICAgIGRlbGl2ZXJ5SW5wdXROYW1lLm5hbWUgPSBkZWxpdmVyeUZpZWxkTmFtZS52YWx1ZTtcclxuICAgICAgZGVsaXZlcnlJbnB1dE5hbWUudHlwZSA9ICd0ZXh0JztcclxuICAgICAgZGVsaXZlcnlJbnB1dE5hbWUucGxhY2Vob2xkZXIgPSBuYW1lRmllbGRFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFBsYWNlaG9sZGVyJylbMF0udmFsdWU7XHJcbiAgICAgIGlmIChuYW1lUmVxdWlyZS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBkZWxpdmVyeUlucHV0TmFtZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZGVsaXZlcnlGb3JtLmFwcGVuZChkZWxpdmVyeUlucHV0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsaXZlcnlJbnB1dEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRlbGl2ZXJ5SW5wdXRFbWFpbC5jbGFzc05hbWUgPSAnc3Vic2NyaWJlSW5wdXQgZW1haWwnO1xyXG4gICAgZGVsaXZlcnlJbnB1dEVtYWlsLm5hbWUgPSBkZWxpdmVyeUZpZWxkRW1haWwudmFsdWU7XHJcbiAgICBkZWxpdmVyeUlucHV0RW1haWwudHlwZSA9ICdlbWFpbCc7XHJcbiAgICBkZWxpdmVyeUlucHV0RW1haWwucGxhY2Vob2xkZXIgPSBlbWFpbEZpZWxkRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRQbGFjZWhvbGRlcicpWzBdLnZhbHVlO1xyXG4gICAgZGVsaXZlcnlJbnB1dEVtYWlsLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIGRlbGl2ZXJ5Rm9ybS5hcHBlbmQoZGVsaXZlcnlJbnB1dEVtYWlsKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4dHJhRmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSxcclxuICAgICAgICBleHRyYUZpZWxkUmVxdWlyZWQgPSBleHRyYUZpZWxkc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdleHRyYUZpZWxkUmVxdWlyZWQnKVswXS5jaGVja2VkO1xyXG5cclxuICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ3N1YnNjcmliZUlucHV0IGV4dHJhJztcclxuICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgICAgaW5wdXQubmFtZSA9IGV4dHJhRmllbGRzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkTmFtZVNlbGVjdCcpWzBdLnZhbHVlO1xyXG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGV4dHJhRmllbGRzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkUGxhY2Vob2xkZXInKVswXS52YWx1ZTtcclxuICAgICAgaWYgKGV4dHJhRmllbGRSZXF1aXJlZCkge1xyXG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBkZWxpdmVyeUZvcm0uYXBwZW5kKGlucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxpdmVyeVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZGVsaXZlcnlTdWJtaXQuY2xhc3NOYW1lID0gJ3N1YnNjcmliZVN1Ym1pdCc7XHJcbiAgICBkZWxpdmVyeVN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICBkZWxpdmVyeVN1Ym1pdC5pbm5lckhUTUwgPSBzdWJtaXRFZGl0b3IudmFsdWU7XHJcbiAgICBkZWxpdmVyeUZvcm0uYXBwZW5kKGRlbGl2ZXJ5U3VibWl0KTtcclxuICAgIGRlbGl2ZXJ5U3VibWl0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnRTdWJzY3JpYmUgPSBzdWJzY3JpYmVCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcclxuICAgIGFsbElucHV0cyA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgICBzdWJzY3JpYmVTdWJtaXRFbGVtID0gY3VycmVudFN1YnNjcmliZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdWJzY3JpYmVTdWJtaXQnKVswXTtcclxuICAgIHN1YnNjcmliZUlucHV0cyA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3Vic2NyaWJlSW5wdXQnKTtcclxuICAgIHJlbWVtYmVyU3R5bGUoYWxsSW5wdXRzLCBzdWJzY3JpYmVTdWJtaXRFbGVtLCBzdWJtaXRTdHlsZXMsIGlucHV0U3R5bGVzKTtcclxuICAgIGFkZERyYWdBbmREcm9wVG9Gb3JtKGlkKTtcclxuICAgIGluY2x1ZGVTdWJzY3JpYmVJbnB1dHNTZXR0aW5ncyhpZCk7XHJcbiAgICBpbmNsdWRlU3Vic2NyaWJlU3VibWl0U2V0dGluZ3MoaWQpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG5cclxuICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQv9C+0LvRj1xyXG5cclxuICBuZXdGaWVsZC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZXh0cmFGaWVsZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgZXh0cmFGaWVsZHMgPSBpbnB1dHNJbmZvRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXh0cmFGaWVsZCcpO1xyXG4gICAgZXh0cmFGaWVsZENvdW50ZXIgPSBleHRyYUZpZWxkcy5sZW5ndGggKyAxO1xyXG4gICAgZXh0cmFGaWVsZEVsLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXh0cmFGaWVsZFwiPjxicj7QlNCe0J/QntCb0J3QmNCi0JXQm9Cs0J3QntCVINCf0J7Qm9CVICcgKyBleHRyYUZpZWxkQ291bnRlciArICc8YnI+JyArXHJcbiAgICAgICc8ZGl2IGNsYXNzPVwic3VibWl0VmFsdWVcIj4nICtcclxuICAgICAgJzxpbnB1dCBjbGFzcz1cImZpZWxkUGxhY2Vob2xkZXJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0YLQtdC60YHRgiDQv9C+0LvRj1wiPjxzcGFuIGNsYXNzPVwiZGVsZXRlRmllbGRcIj5YPC9zcGFuPicgK1xyXG4gICAgICAnPC9kaXY+PGJyPjxicj4nICtcclxuICAgICAgJzxzZWxlY3QgY2xhc3M9XCJmaWVsZE5hbWVTZWxlY3RcIj48L3NlbGVjdD48YnI+JyArXHJcbiAgICAgICc8aW5wdXQgY2xhc3M9XCJleHRyYUZpZWxkUmVxdWlyZWRcIiB0eXBlPVwiY2hlY2tib3hcIj4mbmJzcDsgcmVxdWlyZWQ8YnI+PGJyPicgK1xyXG4gICAgICAnPC9kaXY+JztcclxuICAgIGlucHV0c0luZm9FbC5hcHBlbmQoZXh0cmFGaWVsZEVsKTtcclxuXHJcblxyXG4gICAgY29uc3QgZGVsZXRlRmllbGRFbCA9IGV4dHJhRmllbGRFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGVGaWVsZCcpWzBdO1xyXG4gICAgZGVsZXRlRmllbGRFbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBleHRyYUZpZWxkRWwucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNoYW5nZUlucHV0c0luZm8oKTtcclxuICAgIGV4dHJhRmllbGRDb3VudGVyKys7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy/QntGH0LjRgdGC0LrQsCDQv9C+0LvRjyDQvtGCINGA0LDRgdGB0YvQu9C60LhcclxuXHJcbiAgZGVsaXZlcnlDb2RlUmVzZXQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGRlbGl2ZXJ5Q29kZUFyZWFFbC52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VJbnB1dHNJbmZvKCkge1xyXG4gICAgbGV0IHNlbGVjdFZhbHVlcyA9IFtdO1xyXG4gICAgZGVsaXZlcnlDb2RlRWwuaW5uZXJIVE1MID0gZGVsaXZlcnlDb2RlQXJlYS52YWx1ZTtcclxuXHJcbiAgICBpZiAoZGVsaXZlcnlDb2RlRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXSkge1xyXG4gICAgICBjb25zdCBkZWxpdmVyeUZvcm0gPSBkZWxpdmVyeUNvZGVFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdLFxyXG4gICAgICAgIGRlbGl2ZXJ5SW5wdXRzID0gZGVsaXZlcnlGb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RJbnB1dHNOYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNlbGVjdFZhbHVlcy5wdXNoKHNlbGVjdElucHV0c05hbWVzW2ldLnZhbHVlKTtcclxuICAgICAgICBzZWxlY3RJbnB1dHNOYW1lc1tpXS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxpdmVyeUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChkZWxpdmVyeUlucHV0c1tpXS5uYW1lICYmIGRlbGl2ZXJ5SW5wdXRzW2ldLnR5cGUgIT0gJ3N1Ym1pdCcpIHtcclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZWN0SW5wdXRzTmFtZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgc2VsZWN0SW5wdXRzTmFtZXNbal0uaW5uZXJIVE1MICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGRlbGl2ZXJ5SW5wdXRzW2ldLm5hbWUgKyAnXCI+JyArIGRlbGl2ZXJ5SW5wdXRzW2ldLm5hbWUgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgaWYgKHNlbGVjdFZhbHVlc1tqXSAhPSAnJykge1xyXG4gICAgICAgICAgICAgIHNlbGVjdElucHV0c05hbWVzW2pdLnZhbHVlID0gc2VsZWN0VmFsdWVzW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsaXZlcnlJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZGVsaXZlcnlJbnB1dHNbaV0ubmFtZS5pbmRleE9mKCduYW1lJykgIT0gLTEpIHtcclxuICAgICAgICAgIGRlbGl2ZXJ5RmllbGROYW1lLnZhbHVlID0gZGVsaXZlcnlJbnB1dHNbaV0ubmFtZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRlbGl2ZXJ5SW5wdXRzW2ldLm5hbWUuaW5kZXhPZignZW1haWwnKSAhPSAtMSkge1xyXG4gICAgICAgICAgZGVsaXZlcnlGaWVsZEVtYWlsLnZhbHVlID0gZGVsaXZlcnlJbnB1dHNbaV0ubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcm1NZXRob2QudmFsdWUgPSBkZWxpdmVyeUZvcm0ubWV0aG9kO1xyXG4gICAgICBmb3JtQWN0aW9uLnZhbHVlID0gZGVsaXZlcnlGb3JtLmFjdGlvbjtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1lbWJlclN0eWxlKGlucHV0cywgc3VibWl0LCBzdWJtaXRTdHlsZXMsIGlucHV0U3R5bGVzKSB7XHJcblxyXG5cclxuICAgIHN1Ym1pdC5zdHlsZSA9ICcnO1xyXG5cclxuICAgIGlmIChzdWJzY3JpYmVTdWJtaXRCb2xkLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICBzdWJtaXQuc3R5bGUuZm9udFdlaWdodCA9ICc5MDAnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3VibWl0LnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJztcclxuICAgIH1cclxuICAgIHN1Ym1pdC5zdHlsZS5mb250RmFtaWx5ID0gc3Vic2NyaWJlU3VibWl0Rm9udEZhbWlseVNlbGVjdC52YWx1ZTtcclxuICAgIHN1Ym1pdC5zdHlsZS5mb250U2l6ZSA9ICQoJyNzdWJzY3JpYmVTdWJtaXQtZm9udC1zaXplLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgc3VibWl0LnN0eWxlLndpZHRoID0gc3VibWl0U3R5bGVzWzBdO1xyXG4gICAgc3VibWl0LnN0eWxlLmNvbG9yID0gc3VibWl0U3R5bGVzWzFdO1xyXG4gICAgc3VibWl0LnN0eWxlLmJhY2tncm91bmQgPSBzdWJtaXRTdHlsZXNbMl07XHJcbiAgICBzdWJtaXQuc3R5bGUuYm9yZGVyVG9wV2lkdGggPSBzdWJtaXRTdHlsZXNbM107XHJcbiAgICBzdWJtaXQuc3R5bGUuYm9yZGVyVG9wTGVmdFJhZGl1cyA9IHN1Ym1pdFN0eWxlc1s0XTtcclxuICAgIHN1Ym1pdC5zdHlsZS5ib3JkZXJUb3BTdHlsZSA9IHN1Ym1pdFN0eWxlc1s1XTtcclxuICAgIHN1Ym1pdC5zdHlsZS5ib3JkZXJUb3BDb2xvciA9IHN1Ym1pdFN0eWxlc1s2XTtcclxuXHJcbiAgICBzdWJtaXQuc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCA9IHN1Ym1pdFN0eWxlc1s3XTtcclxuICAgIHN1Ym1pdC5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IHN1Ym1pdFN0eWxlc1s4XTtcclxuICAgIHN1Ym1pdC5zdHlsZS5ib3JkZXJSaWdodFN0eWxlID0gc3VibWl0U3R5bGVzWzldO1xyXG4gICAgc3VibWl0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBzdWJtaXRTdHlsZXNbMTBdO1xyXG5cclxuICAgIHN1Ym1pdC5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IHN1Ym1pdFN0eWxlc1sxMV07XHJcbiAgICBzdWJtaXQuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBzdWJtaXRTdHlsZXNbMTJdO1xyXG4gICAgc3VibWl0LnN0eWxlLmJvcmRlckJvdHRvbVN0eWxlID0gc3VibWl0U3R5bGVzWzEzXTtcclxuICAgIHN1Ym1pdC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IHN1Ym1pdFN0eWxlc1sxNF07XHJcblxyXG4gICAgc3VibWl0LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9IHN1Ym1pdFN0eWxlc1sxNV07XHJcbiAgICBzdWJtaXQuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IHN1Ym1pdFN0eWxlc1sxNl07XHJcbiAgICBzdWJtaXQuc3R5bGUuYm9yZGVyTGVmdFN0eWxlID0gc3VibWl0U3R5bGVzWzE3XTtcclxuICAgIHN1Ym1pdC5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBzdWJtaXRTdHlsZXNbMThdO1xyXG4gICAgaWYgKHN1YnNjcmliZUlucHV0QXV0b0hlaWdodC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgc3VibWl0LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1Ym1pdC5zdHlsZS5oZWlnaHQgPSAkKCcjc3Vic2NyaWJlU3VibWl0LWhlaWdodC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3Vic2NyaWJlU3VibWl0VGV4dFNoYWRvd1JhZGlvT24uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgIGNvbnN0IGh2ID0gJCgnI3N1YnNjcmliZS10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICBjb25zdCB2diA9ICQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgIGNvbnN0IGJsciA9ICQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgY29uc3QgY2xyID0gaGV4VG9SR0IoJCgnI3N1YnNjcmliZS10ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjc3Vic2NyaWJlLXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICAgIGNvbnN0IHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuXHJcbiAgICAgIHN1Ym1pdC5zdHlsZS50ZXh0U2hhZG93ID0gcHJwdHM7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGlucHV0c1tpXS50eXBlICE9ICdzdWJtaXQnICYmIGlucHV0c1tpXS50eXBlICE9ICdoaWRkZW4nKSB7XHJcbiAgICAgICAgaW5wdXRzW2ldLnN0eWxlID0gJyc7XHJcbiAgICAgICAgaWYgKHN1YnNjcmliZUlucHV0Qm9sZC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5mb250V2VpZ2h0ID0gJzkwMCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0c1tpXS5zdHlsZS5mb250RmFtaWx5ID0gc3Vic2NyaWJlSW5wdXRGb250RmFtaWx5U2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIGlucHV0c1tpXS5zdHlsZS5mb250U2l6ZSA9ICQoJyNzdWJzY3JpYmVJbnB1dC1mb250LXNpemUtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICAgICAgaWYgKGlucHV0U3R5bGVzICE9ICcnKSB7XHJcbiAgICAgICAgICBpbnB1dHNbaV0uc3R5bGUud2lkdGggPSBpbnB1dFN0eWxlc1swXTtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5jb2xvciA9IGlucHV0U3R5bGVzWzFdO1xyXG4gICAgICAgICAgaW5wdXRzW2ldLnN0eWxlLmJhY2tncm91bmQgPSBpbnB1dFN0eWxlc1syXTtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5ib3JkZXJUb3BXaWR0aCA9IGlucHV0U3R5bGVzWzNdO1xyXG4gICAgICAgICAgaW5wdXRzW2ldLnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBpbnB1dFN0eWxlc1s0XTtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5ib3JkZXJUb3BTdHlsZSA9IGlucHV0U3R5bGVzWzVdO1xyXG4gICAgICAgICAgaW5wdXRzW2ldLnN0eWxlLmJvcmRlclRvcENvbG9yID0gaW5wdXRTdHlsZXNbNl07XHJcblxyXG4gICAgICAgICAgaW5wdXRzW2ldLnN0eWxlLmJvcmRlclJpZ2h0V2lkdGggPSBpbnB1dFN0eWxlc1s3XTtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IGlucHV0U3R5bGVzWzhdO1xyXG4gICAgICAgICAgaW5wdXRzW2ldLnN0eWxlLmJvcmRlclJpZ2h0U3R5bGUgPSBpbnB1dFN0eWxlc1s5XTtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gaW5wdXRTdHlsZXNbMTBdO1xyXG5cclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IGlucHV0U3R5bGVzWzExXTtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IGlucHV0U3R5bGVzWzEyXTtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5ib3JkZXJCb3R0b21TdHlsZSA9IGlucHV0U3R5bGVzWzEzXTtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IGlucHV0U3R5bGVzWzE0XTtcclxuXHJcbiAgICAgICAgICBpbnB1dHNbaV0uc3R5bGUuYm9yZGVyTGVmdFdpZHRoID0gaW5wdXRTdHlsZXNbMTVdO1xyXG4gICAgICAgICAgaW5wdXRzW2ldLnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBpbnB1dFN0eWxlc1sxNl07XHJcbiAgICAgICAgICBpbnB1dHNbaV0uc3R5bGUuYm9yZGVyTGVmdFN0eWxlID0gaW5wdXRTdHlsZXNbMTddO1xyXG4gICAgICAgICAgaW5wdXRzW2ldLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGlucHV0U3R5bGVzWzE4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1YnNjcmliZUlucHV0QXV0b0hlaWdodC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS5oZWlnaHQgPSAkKCcjc3Vic2NyaWJlSW5wdXQtaGVpZ2h0LXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN1YnNjcmliZUlucHV0VGV4dFNoYWRvd1JhZGlvT24uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBjb25zdCBodiA9ICQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgICAgIGNvbnN0IHZ2ID0gJCgnI3N1YnNjcmliZS10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgICAgIGNvbnN0IGJsciA9ICQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgICAgICAgIGNvbnN0IGNsciA9IGhleFRvUkdCKCQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3N1YnNjcmliZS10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgICAgICAgY29uc3QgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG5cclxuICAgICAgICAgIGlucHV0c1tpXS5zdHlsZS50ZXh0U2hhZG93ID0gcHJwdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluY2x1ZGVTdWJzY3JpYmVEZWxpdmVyeTtcclxuIiwiZnVuY3Rpb24gaW5jbHVkZVN1YnNjcmliZUlucHV0c1NldHRpbmdzKGlkKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBsZXQgc3Vic2NyaWJlQmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gIGxldCBzdWJzY3JpYmVXcmFwcGVyRWxlbSA9IHN1YnNjcmliZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdWJzY3JpYmVXcmFwcGVyJylbMF07XHJcbiAgbGV0IGN1cnJlbnRTdWJzY3JpYmUgPSBzdWJzY3JpYmVCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcclxuICBsZXQgc3Vic2NyaWJlU3VibWl0RWxlbSA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3Vic2NyaWJlU3VibWl0JylbMF07XHJcbiAgbGV0IHN1YnNjcmliZUlucHV0cyA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3Vic2NyaWJlSW5wdXQnKTtcclxuICBsZXQgYWxsSW5wdXRzID0gY3VycmVudFN1YnNjcmliZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnc3Vic2NyaWJlLWlucHV0cy1zZXR0aW5ncycsICdzdWJzY3JpYmVJbnB1dHNJbmRpY2F0b3InKTtcclxuXHJcbiAgLy8g0KDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQv9C+0LvRj9C80LhcclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnc2hvdy1zdWJzY3JpYmUtaW5wdXQtc3BhY2Utc2V0dGluZ3MnLCAnc3Vic2NyaWJlSW5wdXRTcGFjZUluZGljYXRvcicpO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlLWlucHV0LXNwYWNlLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5tYXJnaW5Cb3R0b20pKTtcclxuICAkKCcjc3Vic2NyaWJlLWlucHV0LXNwYWNlLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5tYXJnaW5Cb3R0b20pKTtcclxuICAkKCcjc3Vic2NyaWJlLWlucHV0LXNwYWNlLXZhbHVlLCAjc3Vic2NyaWJlLWlucHV0LXNwYWNlLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygnbWFyZ2luLWJvdHRvbScsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmUtaW5wdXQtc3BhY2UtdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLWlucHV0LXNwYWNlLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1pbnB1dC1zcGFjZS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INGC0LXQvdC4IHN1Ym1pdCovXHJcblxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LXNldHRpbmdzJywgJ3N1YnNjcmliZUlucHV0VGV4dFNoYWRvd0luZGljYXRvcicpO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlSW5wdXRUZXh0U2hhZG93UmFkaW9PbicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHZhciBodiA9ICQoJyNzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKHN1YnNjcmliZUlucHV0c1tpXSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJzY3JpYmVJbnB1dFRleHRTaGFkb3dSYWRpb09mZicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgJChzdWJzY3JpYmVJbnB1dEVsZW0pLmNzcygndGV4dC1zaGFkb3cnLCAnbm9uZScpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLCAjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKHN1YnNjcmliZUlucHV0c1tpXSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZSwgI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZSwgI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LWJsdXItdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZSwgI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCh0aGlzKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjc3Vic2NyaWJlSW5wdXQtdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCh0aGlzKS52YWwoKSwgJCgnI3N1YnNjcmliZUlucHV0LXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gIC8q0JrQvtC90LXRhiDQvdCw0YHRgtGA0L7QtdC6INGC0LXQvdC4IHN1Ym1pdCovXHJcblxyXG5cclxuICAvL9CS0YvQsdC+0YAg0YjRgNC40YTRgtCwINC/0L7Qu9C10LlcclxuICBzdWJzY3JpYmVJbnB1dEZvbnRGYW1pbHlTZWxlY3QudmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuZm9udEZhbWlseTtcclxuICBzdWJzY3JpYmVJbnB1dEZvbnRGYW1pbHlTZWxlY3Qub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzdWJzY3JpYmVJbnB1dHNbaV0uc3R5bGUuZm9udEZhbWlseSA9IHN1YnNjcmliZUlucHV0Rm9udEZhbWlseVNlbGVjdC52YWx1ZTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmZvbnRXZWlnaHQgPT0gJzkwMCcpIHtcclxuICAgIHN1YnNjcmliZUlucHV0Qm9sZC5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3Vic2NyaWJlSW5wdXRCb2xkLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgc3Vic2NyaWJlSW5wdXRCb2xkLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoc3Vic2NyaWJlSW5wdXRCb2xkLmNoZWNrZWQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzdWJzY3JpYmVJbnB1dHNbaV0uc3R5bGUuZm9udFdlaWdodCA9ICc5MDAnO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN1YnNjcmliZUlucHV0c1tpXS5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG5cclxuICAvL9Cg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAg0L/QvtC70LXQuVxyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdzdWJzY3JpYmUtc2hvdy1pbnB1dHMtZm9udC1zZXR0aW5ncycsICdzdWJzY3JpYmVJbnB1dHNGb250SW5kaWNhdG9yJyk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1mb250LXNpemUtdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmZvbnRTaXplKSk7XHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWZvbnQtc2l6ZS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuZm9udFNpemUpKTtcclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtZm9udC1zaXplLXZhbHVlLCAjc3Vic2NyaWJlSW5wdXQtZm9udC1zaXplLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygnZm9udC1zaXplJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZUlucHV0LWZvbnQtc2l6ZS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC1mb250LXNpemUtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlSW5wdXQtZm9udC1zaXplLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QptCy0LXRgiDRgtC10LrRgdGC0LAg0YMg0L/QvtC70LXQuVxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKHN1YnNjcmliZUlucHV0c1tpXSkuY3NzKCdjb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QptCy0LXRgiDQv9C+0LvQtdC5XHJcblxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ3N1YnNjcmliZUlucHV0LWJhY2tncm91bmQtdHlwZXMnLCAnc3Vic2NyaWJlSW5wdXRzQmFja2dyb3VuZEluZGljYXRvcicpO1xyXG5cclxuICBzdWJzY3JpYmVJbnB1dEJhY2tncm91bmRSYWRpb0NvbG9yLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzdWJzY3JpYmVJbnB1dEJhY2tncm91bmRHcmFkaWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgc3Vic2NyaWJlSW5wdXRCYWNrZ3JvdW5kQ29sb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG4gIHN1YnNjcmliZUlucHV0QmFja2dyb3VuZFJhZGlvR3JhZGllbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHN1YnNjcmliZUlucHV0QmFja2dyb3VuZENvbG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzdWJzY3JpYmVJbnB1dEJhY2tncm91bmRHcmFkaWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1tYWluLWNvbG9yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBvcGFjaXR5ID0gJCgnI3BhZ2UtbWFpbi1jb2xvci1vcGFjaXR5JykudmFsKCkgLyAxMDA7XHJcbiAgICB2YXIgY29sb3IgPSBoZXhUb1JHQigkKHRoaXMpLnZhbCgpLCBvcGFjaXR5KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcik7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtZ3JhZGllbnQtY29sb3ItMScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKHN1YnNjcmliZUlucHV0c1tpXSkuY3NzKCdiYWNrZ3JvdW5kJywgJ2xpbmVhci1ncmFkaWVudCgnICsgcGFyc2VJbnQoJCgnI3N1YnNjcmliZUlucHV0LWdyYWRpZW50LWFuZ2xlJykudmFsKCkpICsgJ2RlZywgJyArICQodGhpcykudmFsKCkgKyAnLCAnICsgJCgnI3N1YnNjcmliZUlucHV0LWdyYWRpZW50LWNvbG9yLTInKS52YWwoKSArICcpJyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtZ3JhZGllbnQtY29sb3ItMicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKHN1YnNjcmliZUlucHV0c1tpXSkuY3NzKCdiYWNrZ3JvdW5kJywgJ2xpbmVhci1ncmFkaWVudCgnICsgcGFyc2VJbnQoJCgnI3N1YnNjcmliZUlucHV0LWdyYWRpZW50LWFuZ2xlJykudmFsKCkpICsgJ2RlZywgJyArICQoJyNzdWJzY3JpYmVJbnB1dC1ncmFkaWVudC1jb2xvci0xJykudmFsKCkgKyAnLCAnICsgJCh0aGlzKS52YWwoKSArICcpJyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtZ3JhZGllbnQtYW5nbGUnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKHN1YnNjcmliZUlucHV0c1tpXSkuY3NzKCdiYWNrZ3JvdW5kJywgJ2xpbmVhci1ncmFkaWVudCgnICsgcGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgKyAnZGVnLCAnICsgJCgnI3N1YnNjcmliZUlucHV0LWdyYWRpZW50LWNvbG9yLTEnKS52YWwoKSArICcsICcgKyAkKCcjc3Vic2NyaWJlSW5wdXQtZ3JhZGllbnQtY29sb3ItMicpLnZhbCgpICsgJyknKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1tYWluLWNvbG9yLW9wYWNpdHknKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgb3BhY2l0eSA9ICQodGhpcykudmFsKCk7XHJcbiAgICB2YXIgY29sb3IgPSBoZXhUb1JHQigkKCcjc3Vic2NyaWJlSW5wdXQtbWFpbi1jb2xvcicpLnZhbCgpLCBvcGFjaXR5IC8gMTAwKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcik7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvL9CS0YvRgdC+0YLQsCDQv9C+0LvQtdC5XHJcblxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ3N1YnNjcmliZUlucHV0LWhlaWdodCcsICdzdWJzY3JpYmVJbnB1dHNTaXplSW5kaWNhdG9yJyk7XHJcblxyXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuaGVpZ2h0ID09ICdhdXRvJykge1xyXG4gICAgc3Vic2NyaWJlSW5wdXRBdXRvSGVpZ2h0LmNoZWNrZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdWJzY3JpYmVJbnB1dEF1dG9IZWlnaHQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtaGVpZ2h0LXZhbHVlJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlSW5wdXRzWzBdKS5jc3MoJ2hlaWdodCcpKSk7XHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWhlaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZUlucHV0c1swXSkuY3NzKCdoZWlnaHQnKSkpO1xyXG5cclxuICBzdWJzY3JpYmVJbnB1dEF1dG9IZWlnaHQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChzdWJzY3JpYmVJbnB1dEF1dG9IZWlnaHQuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3Vic2NyaWJlSW5wdXRzW2ldLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWhlaWdodC12YWx1ZSwgI3N1YnNjcmliZUlucHV0LWhlaWdodC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChzdWJzY3JpYmVJbnB1dEF1dG9IZWlnaHQuY2hlY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2hlaWdodCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlSW5wdXQtaGVpZ2h0LXZhbHVlXCIpIHtcclxuICAgICAgICAkKCcjc3Vic2NyaWJlSW5wdXQtaGVpZ2h0LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC1oZWlnaHQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0KjQuNGA0LjQvdCwINC/0L7Qu9C10LlcclxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLndpZHRoID09ICcxMDAlJykge1xyXG4gICAgc3Vic2NyaWJlSW5wdXRBdXRvV2lkdGguY2hlY2tlZCA9IHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN1YnNjcmliZUlucHV0QXV0b1dpZHRoLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LXdpZHRoLXZhbHVlJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlSW5wdXRzWzBdKS5jc3MoJ3dpZHRoJykpKTtcclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtd2lkdGgtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVJbnB1dHNbMF0pLmNzcygnd2lkdGgnKSkpO1xyXG5cclxuICBzdWJzY3JpYmVJbnB1dEF1dG9XaWR0aC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHN1YnNjcmliZUlucHV0QXV0b1dpZHRoLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN1YnNjcmliZUlucHV0c1tpXS5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgfVxyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LXdpZHRoLXZhbHVlLCAjc3Vic2NyaWJlSW5wdXQtd2lkdGgtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoc3Vic2NyaWJlSW5wdXRBdXRvV2lkdGguY2hlY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ3dpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVJbnB1dC13aWR0aC12YWx1ZVwiKSB7XHJcbiAgICAgICAgJCgnI3N1YnNjcmliZUlucHV0LXdpZHRoLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC13aWR0aC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QndCw0YHRgtGA0L7QudC60Lgg0LLRgdC10YUg0LPRgNCw0L3QuNGGINC/0L7Qu9C10LlcclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnc3Vic2NyaWJlLXNob3ctaW5wdXRzLWJvcmRlci1zZXR0aW5ncycsICdzdWJzY3JpYmVJbnB1dHNCb3JkZXJJbmRpY2F0b3InKTtcclxuXHJcbiAgc3Vic2NyaWJlSW5wdXRCb3JkZXJSYWRpb0V2ZXJ5Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzdWJzY3JpYmVJbnB1dEJvcmRlckFsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgc3Vic2NyaWJlSW5wdXRCb3JkZXJFdmVyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcbiAgc3Vic2NyaWJlSW5wdXRCb3JkZXJSYWRpb0FsbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc3Vic2NyaWJlSW5wdXRCb3JkZXJBbGwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBzdWJzY3JpYmVJbnB1dEJvcmRlckV2ZXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXZhbHVlJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci13aWR0aCcpKSk7XHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZUlucHV0c1swXSkuY3NzKCdib3JkZXItd2lkdGgnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItcmFkaXVzJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1yYWRpdXMnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItcmFkaXVzLXJhbmdlJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXZhbHVlLCAjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygnYm9yZGVyLXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZUlucHV0LWJvcmRlci12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1yYWRpdXMsICNzdWJzY3JpYmVJbnB1dC1ib3JkZXItcmFkaXVzLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygnYm9yZGVyLXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVJbnB1dC1ib3JkZXItcmFkaXVzXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1yYWRpdXMtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItc3R5bGUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygnYm9yZGVyLXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWNvbG9yLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1jb2xvcicsICQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINCy0LXRgNGF0L3QtdC5INCz0YDQsNC90LjRhtGLINC/0L7Qu9C10LkqL1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXRvcC12YWx1ZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZUlucHV0c1swXSkuY3NzKCdib3JkZXItdG9wLXdpZHRoJykpKTtcclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXRvcC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZUlucHV0c1swXSkuY3NzKCdib3JkZXItdG9wLXdpZHRoJykpKTtcclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWxlZnQtdG9wLXJhZGl1cycpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZUlucHV0c1swXSkuY3NzKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJykpKTtcclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWxlZnQtdG9wLXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZUlucHV0c1swXSkuY3NzKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJykpKTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci10b3AtdmFsdWUsICNzdWJzY3JpYmVJbnB1dC1ib3JkZXItdG9wLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygnYm9yZGVyLXRvcC13aWR0aCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVJbnB1dC1ib3JkZXItdG9wLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci10b3AtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXRvcC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItbGVmdC10b3AtcmFkaXVzLCAjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWxlZnQtdG9wLXJhZGl1cy1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlSW5wdXQtYm9yZGVyLWxlZnQtdG9wLXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItbGVmdC10b3AtcmFkaXVzLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1sZWZ0LXRvcC1yYWRpdXMnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItdG9wLXN0eWxlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci10b3Atc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItdG9wLWNvbG9yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci10b3AtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC/0YDQsNCy0L7QuSDQs9GA0LDQvdC40YbRiyDQv9C+0LvQtdC5Ki9cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXJpZ2h0LXZhbHVlJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcpKSk7XHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1yaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZUlucHV0c1swXSkuY3NzKCdib3JkZXItcmlnaHQtd2lkdGgnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItcmlnaHQtcmFkaXVzJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJykpKTtcclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZUlucHV0c1swXSkuY3NzKCdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycpKSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItcmlnaHQtdmFsdWUsICNzdWJzY3JpYmVJbnB1dC1ib3JkZXItcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKHN1YnNjcmliZUlucHV0c1tpXSkuY3NzKCdib3JkZXItcmlnaHQtd2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlSW5wdXQtYm9yZGVyLXJpZ2h0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1yaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItcmlnaHQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItcmlnaHQtcmFkaXVzLCAjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZUlucHV0LWJvcmRlci1yaWdodC1yYWRpdXNcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItcmlnaHQtcmFkaXVzZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1yaWdodC1zdHlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKHN1YnNjcmliZUlucHV0c1tpXSkuY3NzKCdib3JkZXItcmlnaHQtc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItcmlnaHQtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygnYm9yZGVyLXJpZ2h0LWNvbG9yJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0LHQu9C+0LrQsCovXHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INC00LvRjyDQvdC40LbQvdC10Lkg0LPRgNCw0L3QuNGG0Ysg0L/QvtC70LXQuSovXHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1ib3R0b20tdmFsdWUnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVJbnB1dHNbMF0pLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcpKSk7XHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVJbnB1dHNbMF0pLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcpKSk7XHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJykpKTtcclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVJbnB1dHNbMF0pLmNzcygnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWJvdHRvbS12YWx1ZSwgI3N1YnNjcmliZUlucHV0LWJvcmRlci1ib3R0b20tdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKHN1YnNjcmliZUlucHV0c1tpXSkuY3NzKCdib3JkZXItYm90dG9tLXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZUlucHV0LWJvcmRlci1ib3R0b20tdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItYm90dG9tLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKHN1YnNjcmliZUlucHV0c1tpXSkuY3NzKCdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVJbnB1dC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItYm90dG9tLXN0eWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1ib3R0b20tc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItYm90dG9tLWNvbG9yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1ib3R0b20tY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC70LXQstC+0Lkg0LPRgNCw0L3QuNGG0Ysg0L/QvtC70LXQuSovXHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1sZWZ0LXZhbHVlJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykpKTtcclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVJbnB1dHNbMF0pLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLXJhbmdlJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlSW5wdXRzWzBdKS5jc3MoJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWxlZnQtdmFsdWUsICNzdWJzY3JpYmVJbnB1dC1ib3JkZXItbGVmdC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZUlucHV0LWJvcmRlci1sZWZ0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1sZWZ0LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1sZWZ0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgI3N1YnNjcmliZUlucHV0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKHN1YnNjcmliZUlucHV0c1tpXSkuY3NzKCdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZUlucHV0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVJbnB1dC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZUlucHV0LWJvcmRlci1sZWZ0LXN0eWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoc3Vic2NyaWJlSW5wdXRzW2ldKS5jc3MoJ2JvcmRlci1sZWZ0LXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlSW5wdXQtYm9yZGVyLWxlZnQtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChzdWJzY3JpYmVJbnB1dHNbaV0pLmNzcygnYm9yZGVyLWxlZnQtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy8vINCX0L3QsNGH0LXQvdC40Y8g0L/QvtC70LXQuVxyXG4vL1xyXG4vLyAgc2hvd0lucHV0VmFsdWVzKGFsbElucHV0cyk7XHJcbi8vXHJcbi8vICBjaGFuZ2VJbnB1dFZhbHVlcy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4vLyAgICBjb25zdCBpbnB1dFZhbHVlc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VmFsdWVzJyksXHJcbi8vICAgICAgY2hhbmdlZFZhbHVlcyA9IGlucHV0VmFsdWVzRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbi8vICAgIGxldCBqID0gMDtcclxuLy9cclxuLy8gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICBpZiAoYWxsSW5wdXRzW2ldLnR5cGUgPT0gJ2hpZGRlbicpIHtcclxuLy8gICAgICAgIGotLTtcclxuLy8gICAgICB9IGVsc2UgaWYgKGFsbElucHV0c1tpXS50eXBlICE9ICdoaWRkZW4nICYmIGFsbElucHV0c1tpXS50eXBlICE9ICdzdWJtaXQnKSB7XHJcbi8vICAgICAgICBhbGxJbnB1dHNbaV0ucGxhY2Vob2xkZXIgPSBjaGFuZ2VkVmFsdWVzW2kgKyBqXS52YWx1ZTtcclxuLy8gICAgICB9IGVsc2UgaWYgKGFsbElucHV0c1tpXS50eXBlID09ICdzdWJtaXQnKSB7XHJcbi8vICAgICAgICBhbGxJbnB1dHNbaV0udmFsdWUgPSBjaGFuZ2VkVmFsdWVzW2kgKyBqXS52YWx1ZTtcclxuLy8gICAgICB9XHJcbi8vICAgIH1cclxuLy8gICAgc2hvd0lucHV0VmFsdWVzKGFsbElucHV0cyk7XHJcbi8vICAgIG1ha2VQcmV2aWV3KCk7XHJcbi8vICB9XHJcbi8vXHJcbi8vICAvL9CU0L7QsdCw0LLQu9C10L3QuNC1INC/0L7Qu9GPXHJcbi8vXHJcbi8vICBzaG93SGlkZVNldHRpbmdzKCdzdWJzY3JpYmUtc2hvdy1hZGQtZGVsZXRlLXNldHRpbmdzJywgJ3N1YnNjcmliZUFkZERlbGV0ZUluZGljYXRvcicpO1xyXG4vL1xyXG4vLyAgc3Vic2NyaWJlSW5wdXRlckFkZC52YWx1ZSA9ICcnO1xyXG4vL1xyXG4vLyAgc2hvd09wdGlvbnNGb3JBZGQoaWQpO1xyXG4vL1xyXG4vLyAgc3Vic2NyaWJlSW5wdXRlckFkZC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgbGV0IGkgPSBzdWJzY3JpYmVJbnB1dGVyQWRkLnNlbGVjdGVkSW5kZXg7XHJcbi8vICAgIGxldCBzdWJzY3JpYmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbi8vXHJcbi8vXHJcbi8vICAgIGlmIChzdWJzY3JpYmVJbnB1dGVyQWRkLnZhbHVlID09ICd0ZWwnKSB7XHJcbi8vICAgICAgc3Vic2NyaWJlSW5wdXQuY2xhc3NOYW1lID0gJ3N1YnNjcmliZUlucHV0IHRlbCc7XHJcbi8vICAgICAgc3Vic2NyaWJlSW5wdXQubmFtZSA9ICd0ZWwnO1xyXG4vLyAgICAgIHN1YnNjcmliZUlucHV0LnR5cGUgPSBzdWJzY3JpYmVJbnB1dGVyQWRkLnZhbHVlO1xyXG4vLyAgICAgIHN1YnNjcmliZUlucHV0LnBsYWNlaG9sZGVyID0gc3Vic2NyaWJlSW5wdXRlckFkZC5vcHRpb25zW2ldLmlubmVySFRNTDtcclxuLy9cclxuLy8gICAgICBpZiAoc3Vic2NyaWJlSW5wdXRCb2xkLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuZm9udFdlaWdodCA9ICc5MDAnO1xyXG4vLyAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XHJcbi8vICAgICAgfVxyXG4vLyAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmZvbnRGYW1pbHkgPSBzdWJzY3JpYmVJbnB1dEZvbnRGYW1pbHlTZWxlY3QudmFsdWU7XHJcbi8vICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuZm9udFNpemUgPSAkKCcjc3Vic2NyaWJlSW5wdXQtZm9udC1zaXplLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4vLyAgICAgIGlmIChzdWJzY3JpYmVJbnB1dHNbMF0pIHtcclxuLy8gICAgICAgIGlmIChwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS53aWR0aCkgIT0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZVdyYXBwZXJFbGVtKS53aWR0aCkgLSAyKSB7XHJcbi8vICAgICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLndpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLndpZHRoO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuY29sb3I7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJhY2tncm91bmQ7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJUb3BXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJUb3BXaWR0aDtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyVG9wTGVmdFJhZGl1cztcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlclRvcFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlclRvcFN0eWxlO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYm9yZGVyVG9wQ29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyVG9wQ29sb3I7XHJcbi8vXHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlclJpZ2h0V2lkdGg7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJUb3BSaWdodFJhZGl1cztcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlclJpZ2h0U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyUmlnaHRTdHlsZTtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyUmlnaHRDb2xvcjtcclxuLy9cclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbVdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckJvdHRvbVdpZHRoO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJCb3R0b21TdHlsZTtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckJvdHRvbUNvbG9yO1xyXG4vL1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYm9yZGVyTGVmdFdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckxlZnRXaWR0aDtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyQm90dG9tTGVmdFJhZGl1cztcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlckxlZnRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJMZWZ0U3R5bGU7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyTGVmdENvbG9yO1xyXG4vLyAgICAgIH1cclxuLy8gICAgICBpZiAoc3Vic2NyaWJlSW5wdXRBdXRvSGVpZ2h0LmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4vLyAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5oZWlnaHQgPSAkKCcjc3Vic2NyaWJlSW5wdXQtaGVpZ2h0LXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4vLyAgICAgIH1cclxuLy9cclxuLy8gICAgICBpZiAoc3Vic2NyaWJlVGV4dFNoYWRvd1JhZGlvT24uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbi8vICAgICAgICBjb25zdCBodiA9ICQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuLy8gICAgICAgIGNvbnN0IHZ2ID0gJCgnI3N1YnNjcmliZS10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuLy8gICAgICAgIGNvbnN0IGJsciA9ICQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuLy8gICAgICAgIGNvbnN0IGNsciA9IGhleFRvUkdCKCQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3N1YnNjcmliZS10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4vLyAgICAgICAgY29uc3QgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4vL1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUudGV4dFNoYWRvdyA9IHBycHRzO1xyXG4vLyAgICAgIH1cclxuLy9cclxuLy8gICAgICAkKHN1YnNjcmliZUlucHV0KS5pbnNlcnRCZWZvcmUoc3Vic2NyaWJlU3VibWl0RWxlbSk7XHJcbi8vICAgICAgc2hvd09wdGlvbnNGb3JBZGQoaWQpO1xyXG4vLyAgICAgIHNob3dPcHRpb25zRm9yRGVsZXRlKHN1YnNjcmliZUJsb2NrRWxlbS5pZCk7XHJcbi8vICAgICAgY3VycmVudFN1YnNjcmliZSA9IHN1YnNjcmliZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4vLyAgICAgIGFsbElucHV0cyA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbi8vICAgICAgc2hvd0lucHV0VmFsdWVzKGFsbElucHV0cyk7XHJcbi8vICAgICAgc3Vic2NyaWJlU3VibWl0RWxlbSA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3Vic2NyaWJlU3VibWl0JylbMF07XHJcbi8vICAgICAgYWRkRnVuY3Rpb25hbGl0eVRvU3Vic2NyaWJlRWxlbWVudChpZCk7XHJcbi8vICAgICAgbWFrZVByZXZpZXcoKTtcclxuLy8gICAgfSBlbHNlIGlmIChzdWJzY3JpYmVJbnB1dGVyQWRkLnZhbHVlID09ICduYW1lJykge1xyXG4vLyAgICAgIHN1YnNjcmliZUlucHV0LmNsYXNzTmFtZSA9ICdzdWJzY3JpYmVJbnB1dCBuYW1lJztcclxuLy8gICAgICBzdWJzY3JpYmVJbnB1dC5uYW1lID0gJ25hbWUnO1xyXG4vLyAgICAgIHN1YnNjcmliZUlucHV0LnR5cGUgPSBzdWJzY3JpYmVJbnB1dGVyQWRkLnZhbHVlO1xyXG4vLyAgICAgIHN1YnNjcmliZUlucHV0LnBsYWNlaG9sZGVyID0gc3Vic2NyaWJlSW5wdXRlckFkZC5vcHRpb25zW2ldLmlubmVySFRNTDtcclxuLy9cclxuLy8gICAgICBpZiAoc3Vic2NyaWJlSW5wdXRCb2xkLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuZm9udFdlaWdodCA9ICc5MDAnO1xyXG4vLyAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XHJcbi8vICAgICAgfVxyXG4vLyAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmZvbnRGYW1pbHkgPSBzdWJzY3JpYmVJbnB1dEZvbnRGYW1pbHlTZWxlY3QudmFsdWU7XHJcbi8vICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuZm9udFNpemUgPSAkKCcjc3Vic2NyaWJlSW5wdXQtZm9udC1zaXplLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4vLyAgICAgIGlmIChzdWJzY3JpYmVJbnB1dHNbMF0pIHtcclxuLy8gICAgICAgIGlmIChwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS53aWR0aCkgIT0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZVdyYXBwZXJFbGVtKS53aWR0aCkgLSAyKSB7XHJcbi8vICAgICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLndpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLndpZHRoO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuY29sb3I7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJhY2tncm91bmQ7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJUb3BXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJUb3BXaWR0aDtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyVG9wTGVmdFJhZGl1cztcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlclRvcFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlclRvcFN0eWxlO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYm9yZGVyVG9wQ29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyVG9wQ29sb3I7XHJcbi8vXHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlclJpZ2h0V2lkdGg7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJUb3BSaWdodFJhZGl1cztcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlclJpZ2h0U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyUmlnaHRTdHlsZTtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyUmlnaHRDb2xvcjtcclxuLy9cclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbVdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckJvdHRvbVdpZHRoO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJCb3R0b21TdHlsZTtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckJvdHRvbUNvbG9yO1xyXG4vL1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYm9yZGVyTGVmdFdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckxlZnRXaWR0aDtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyQm90dG9tTGVmdFJhZGl1cztcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlckxlZnRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJMZWZ0U3R5bGU7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyTGVmdENvbG9yO1xyXG4vLyAgICAgIH1cclxuLy8gICAgICBpZiAoc3Vic2NyaWJlSW5wdXRBdXRvSGVpZ2h0LmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4vLyAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5oZWlnaHQgPSAkKCcjc3Vic2NyaWJlSW5wdXQtaGVpZ2h0LXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4vLyAgICAgIH1cclxuLy9cclxuLy8gICAgICBpZiAoc3Vic2NyaWJlVGV4dFNoYWRvd1JhZGlvT24uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbi8vICAgICAgICBjb25zdCBodiA9ICQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuLy8gICAgICAgIGNvbnN0IHZ2ID0gJCgnI3N1YnNjcmliZS10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuLy8gICAgICAgIGNvbnN0IGJsciA9ICQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuLy8gICAgICAgIGNvbnN0IGNsciA9IGhleFRvUkdCKCQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3N1YnNjcmliZS10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4vLyAgICAgICAgY29uc3QgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4vL1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUudGV4dFNoYWRvdyA9IHBycHRzO1xyXG4vLyAgICAgIH1cclxuLy9cclxuLy8gICAgICAkKHN1YnNjcmliZUlucHV0KS5pbnNlcnRCZWZvcmUoc3Vic2NyaWJlU3VibWl0RWxlbSk7XHJcbi8vICAgICAgc2hvd09wdGlvbnNGb3JBZGQoaWQpO1xyXG4vLyAgICAgIHNob3dPcHRpb25zRm9yRGVsZXRlKHN1YnNjcmliZUJsb2NrRWxlbS5pZCk7XHJcbi8vICAgICAgY3VycmVudFN1YnNjcmliZSA9IHN1YnNjcmliZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4vLyAgICAgIGFsbElucHV0cyA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbi8vICAgICAgc2hvd0lucHV0VmFsdWVzKGFsbElucHV0cyk7XHJcbi8vICAgICAgc3Vic2NyaWJlU3VibWl0RWxlbSA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3Vic2NyaWJlU3VibWl0JylbMF07XHJcbi8vICAgICAgYWRkRnVuY3Rpb25hbGl0eVRvU3Vic2NyaWJlRWxlbWVudChpZCk7XHJcbi8vICAgICAgbWFrZVByZXZpZXcoKTtcclxuLy8gICAgfVxyXG4vLyAgICBpZiAoc3Vic2NyaWJlSW5wdXRlckFkZC52YWx1ZSA9PSAnZW1haWwnKSB7XHJcbi8vICAgICAgc3Vic2NyaWJlSW5wdXQuY2xhc3NOYW1lID0gJ3N1YnNjcmliZUlucHV0IGVtYWlsJztcclxuLy8gICAgICBzdWJzY3JpYmVJbnB1dC5uYW1lID0gJ2VtYWlsJztcclxuLy8gICAgICBzdWJzY3JpYmVJbnB1dC50eXBlID0gc3Vic2NyaWJlSW5wdXRlckFkZC52YWx1ZTtcclxuLy8gICAgICBzdWJzY3JpYmVJbnB1dC5wbGFjZWhvbGRlciA9IHN1YnNjcmliZUlucHV0ZXJBZGQub3B0aW9uc1tpXS5pbm5lckhUTUw7XHJcbi8vXHJcbi8vICAgICAgaWYgKHN1YnNjcmliZUlucHV0Qm9sZC5jaGVja2VkID09IHRydWUpIHtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmZvbnRXZWlnaHQgPSAnOTAwJztcclxuLy8gICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnO1xyXG4vLyAgICAgIH1cclxuLy8gICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5mb250RmFtaWx5ID0gc3Vic2NyaWJlSW5wdXRGb250RmFtaWx5U2VsZWN0LnZhbHVlO1xyXG4vLyAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmZvbnRTaXplID0gJCgnI3N1YnNjcmliZUlucHV0LWZvbnQtc2l6ZS12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuLy8gICAgICBpZiAoc3Vic2NyaWJlSW5wdXRzWzBdKSB7XHJcbi8vICAgICAgICBpZiAocGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkud2lkdGgpICE9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVXcmFwcGVyRWxlbSkud2lkdGgpIC0gMikge1xyXG4vLyAgICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS53aWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS53aWR0aDtcclxuLy8gICAgICAgIH1cclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmNvbG9yO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYmFja2dyb3VuZCA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5iYWNrZ3JvdW5kO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYm9yZGVyVG9wV2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyVG9wV2lkdGg7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlclRvcExlZnRSYWRpdXM7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJUb3BTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJUb3BTdHlsZTtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlclRvcENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlclRvcENvbG9yO1xyXG4vL1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJSaWdodFdpZHRoO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyVG9wUmlnaHRSYWRpdXM7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJSaWdodFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlclJpZ2h0U3R5bGU7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlclJpZ2h0Q29sb3I7XHJcbi8vXHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJCb3R0b21XaWR0aDtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYm9yZGVyQm90dG9tU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyQm90dG9tU3R5bGU7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJCb3R0b21Db2xvcjtcclxuLy9cclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlSW5wdXRzWzBdKS5ib3JkZXJMZWZ0V2lkdGg7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckJvdHRvbUxlZnRSYWRpdXM7XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dC5zdHlsZS5ib3JkZXJMZWZ0U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUlucHV0c1swXSkuYm9yZGVyTGVmdFN0eWxlO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVJbnB1dHNbMF0pLmJvcmRlckxlZnRDb2xvcjtcclxuLy8gICAgICB9XHJcbi8vICAgICAgaWYgKHN1YnNjcmliZUlucHV0QXV0b0hlaWdodC5jaGVja2VkID09IHRydWUpIHtcclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuLy8gICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgc3Vic2NyaWJlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gJCgnI3N1YnNjcmliZUlucHV0LWhlaWdodC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuLy8gICAgICB9XHJcbi8vXHJcbi8vICAgICAgaWYgKHN1YnNjcmliZVRleHRTaGFkb3dSYWRpb09uLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4vLyAgICAgICAgY29uc3QgaHYgPSAkKCcjc3Vic2NyaWJlLXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbi8vICAgICAgICBjb25zdCB2diA9ICQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbi8vICAgICAgICBjb25zdCBibHIgPSAkKCcjc3Vic2NyaWJlLXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbi8vICAgICAgICBjb25zdCBjbHIgPSBoZXhUb1JHQigkKCcjc3Vic2NyaWJlLXRleHQtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNzdWJzY3JpYmUtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuLy8gICAgICAgIGNvbnN0IHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuLy9cclxuLy8gICAgICAgIHN1YnNjcmliZUlucHV0LnN0eWxlLnRleHRTaGFkb3cgPSBwcnB0cztcclxuLy8gICAgICB9XHJcbi8vXHJcbi8vICAgICAgJChzdWJzY3JpYmVJbnB1dCkuaW5zZXJ0QmVmb3JlKHN1YnNjcmliZVN1Ym1pdEVsZW0pO1xyXG4vLyAgICAgIHNob3dPcHRpb25zRm9yQWRkKGlkKTtcclxuLy8gICAgICBzaG93T3B0aW9uc0ZvckRlbGV0ZShzdWJzY3JpYmVCbG9ja0VsZW0uaWQpO1xyXG4vLyAgICAgIGN1cnJlbnRTdWJzY3JpYmUgPSBzdWJzY3JpYmVCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcclxuLy8gICAgICBhbGxJbnB1dHMgPSBjdXJyZW50U3Vic2NyaWJlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4vLyAgICAgIHNob3dJbnB1dFZhbHVlcyhhbGxJbnB1dHMpO1xyXG4vLyAgICAgIHN1YnNjcmliZVN1Ym1pdEVsZW0gPSBjdXJyZW50U3Vic2NyaWJlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1YnNjcmliZVN1Ym1pdCcpWzBdO1xyXG4vLyAgICAgIGFkZEZ1bmN0aW9uYWxpdHlUb1N1YnNjcmliZUVsZW1lbnQoaWQpO1xyXG4vLyAgICAgIG1ha2VQcmV2aWV3KCk7XHJcbi8vICAgIH1cclxuLy8gIH1cclxuLy9cclxuLy8gIC8v0KPQtNCw0LvQtdC90LjQtSDQv9C+0LvRj1xyXG4vL1xyXG4vLyAgc3Vic2NyaWJlSW5wdXRlckRlbGV0ZS52YWx1ZSA9ICcnO1xyXG4vL1xyXG4vLyAgc2hvd09wdGlvbnNGb3JEZWxldGUoc3Vic2NyaWJlQmxvY2tFbGVtLmlkKTtcclxuLy9cclxuLy8gIGZ1bmN0aW9uIGRlbGV0ZUlucHV0KGluZGV4KSB7XHJcbi8vICAgIGN1cnJlbnRTdWJzY3JpYmUgPSBzdWJzY3JpYmVCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcclxuLy8gICAgY29uc3QgaW5wdXRzID0gY3VycmVudFN1YnNjcmliZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuLy9cclxuLy8gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICBpZiAoaSA9PSBpbmRleCkge1xyXG4vLyAgICAgICAgaW5wdXRzW2ldLm91dGVySFRNTCA9ICcnO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlQmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlV3JhcHBlckVsZW0gPSBzdWJzY3JpYmVCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3Vic2NyaWJlV3JhcHBlcicpWzBdO1xyXG4vLyAgICAgICAgY3VycmVudFN1YnNjcmliZSA9IHN1YnNjcmliZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4vLyAgICAgICAgc3Vic2NyaWJlU3VibWl0RWxlbSA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3Vic2NyaWJlU3VibWl0JylbMF07XHJcbi8vICAgICAgICBzdWJzY3JpYmVJbnB1dHMgPSBjdXJyZW50U3Vic2NyaWJlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1YnNjcmliZUlucHV0Jyk7XHJcbi8vICAgICAgICBhbGxJbnB1dHMgPSBjdXJyZW50U3Vic2NyaWJlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4vLyAgICAgIH1cclxuLy8gICAgfVxyXG4vLyAgfVxyXG4vL1xyXG4vLyAgc3Vic2NyaWJlSW5wdXRlckRlbGV0ZS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgbGV0IGV4dHJhRmllbGRDb3VudGVyID0gMTtcclxuLy8gICAgbGV0IGlucHV0c0luZm9FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dHNJbmZvJyk7XHJcbi8vICAgIGxldCBleHRyYUZpZWxkcyA9IGlucHV0c0luZm9FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdleHRyYUZpZWxkJyk7XHJcbi8vICAgIGxldCBkZWxpdmVyeUNvZGVFbCA9IHN1YnNjcmliZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxpdmVyeUNvZGUnKVswXTtcclxuLy8gICAgY29uc3QgbmFtZUZpZWxkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUZpZWxkJyk7XHJcbi8vICAgIGNvbnN0IGVtYWlsRmllbGRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbEZpZWxkJyk7XHJcbi8vICAgIGNvbnN0IHNlbGVjdElucHV0c05hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGROYW1lU2VsZWN0Jyk7XHJcbi8vICAgIGNvbnN0IGNoYW5nZUlucHV0c0luZm8gPSBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgbGV0IHNlbGVjdFZhbHVlcyA9IFtdO1xyXG4vLyAgICAgIGRlbGl2ZXJ5Q29kZUVsLmlubmVySFRNTCA9IGRlbGl2ZXJ5Q29kZUFyZWEudmFsdWU7XHJcbi8vXHJcbi8vICAgICAgaWYgKGRlbGl2ZXJ5Q29kZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF0pIHtcclxuLy8gICAgICAgIGNvbnN0IGRlbGl2ZXJ5Rm9ybSA9IGRlbGl2ZXJ5Q29kZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF0sXHJcbi8vICAgICAgICAgIGRlbGl2ZXJ5SW5wdXRzID0gZGVsaXZlcnlGb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4vL1xyXG4vLyAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RJbnB1dHNOYW1lcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICBzZWxlY3RWYWx1ZXMucHVzaChzZWxlY3RJbnB1dHNOYW1lc1tpXS52YWx1ZSk7XHJcbi8vICAgICAgICAgIHNlbGVjdElucHV0c05hbWVzW2ldLmlubmVySFRNTCA9ICcnO1xyXG4vLyAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxpdmVyeUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICBpZiAoZGVsaXZlcnlJbnB1dHNbaV0ubmFtZSAmJiBkZWxpdmVyeUlucHV0c1tpXS50eXBlICE9ICdzdWJtaXQnKSB7XHJcbi8vICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWxlY3RJbnB1dHNOYW1lcy5sZW5ndGg7IGorKykge1xyXG4vLyAgICAgICAgICAgICAgc2VsZWN0SW5wdXRzTmFtZXNbal0uaW5uZXJIVE1MICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGRlbGl2ZXJ5SW5wdXRzW2ldLm5hbWUgKyAnXCI+JyArIGRlbGl2ZXJ5SW5wdXRzW2ldLm5hbWUgKyAnPC9vcHRpb24+JztcclxuLy8gICAgICAgICAgICAgIGlmIChzZWxlY3RWYWx1ZXNbal0gIT0gJycpIHtcclxuLy8gICAgICAgICAgICAgICAgc2VsZWN0SW5wdXRzTmFtZXNbal0udmFsdWUgPSBzZWxlY3RWYWx1ZXNbal07XHJcbi8vICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICB9XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbGl2ZXJ5SW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgIGlmIChkZWxpdmVyeUlucHV0c1tpXS5uYW1lLmluZGV4T2YoJ25hbWUnKSAhPSAtMSkge1xyXG4vLyAgICAgICAgICAgIGRlbGl2ZXJ5RmllbGROYW1lLnZhbHVlID0gZGVsaXZlcnlJbnB1dHNbaV0ubmFtZTtcclxuLy8gICAgICAgICAgfSBlbHNlIGlmIChkZWxpdmVyeUlucHV0c1tpXS5uYW1lLmluZGV4T2YoJ2VtYWlsJykgIT0gLTEpIHtcclxuLy8gICAgICAgICAgICBkZWxpdmVyeUZpZWxkRW1haWwudmFsdWUgPSBkZWxpdmVyeUlucHV0c1tpXS5uYW1lO1xyXG4vLyAgICAgICAgICB9XHJcbi8vICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICBmb3JtTWV0aG9kLnZhbHVlID0gZGVsaXZlcnlGb3JtLm1ldGhvZDtcclxuLy8gICAgICAgIGZvcm1BY3Rpb24udmFsdWUgPSBkZWxpdmVyeUZvcm0uYWN0aW9uO1xyXG4vL1xyXG4vLyAgICAgIH1cclxuLy8gICAgfTtcclxuLy9cclxuLy8gICAgZGVsZXRlSW5wdXQoc3Vic2NyaWJlSW5wdXRlckRlbGV0ZS52YWx1ZSk7XHJcbi8vICAgIHNob3dPcHRpb25zRm9yQWRkKGlkKTtcclxuLy8gICAgc2hvd09wdGlvbnNGb3JEZWxldGUoc3Vic2NyaWJlQmxvY2tFbGVtLmlkKTtcclxuLy8gICAgY3VycmVudFN1YnNjcmliZSA9IHN1YnNjcmliZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4vLyAgICBzdWJzY3JpYmVTdWJtaXRFbGVtID0gY3VycmVudFN1YnNjcmliZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdWJzY3JpYmVTdWJtaXQnKVswXTtcclxuLy8gICAgYWxsSW5wdXRzID0gY3VycmVudFN1YnNjcmliZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuLy8gICAgc2hvd0lucHV0VmFsdWVzKGFsbElucHV0cyk7XHJcbi8vXHJcbi8vICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXh0cmFGaWVsZHMubGVuZ3RoOykge1xyXG4vLyAgICAgIGlmIChleHRyYUZpZWxkc1tpXSkge1xyXG4vLyAgICAgICAgZXh0cmFGaWVsZHNbaV0ucmVtb3ZlKCk7XHJcbi8vICAgICAgICBpbnB1dHNJbmZvRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRzSW5mbycpO1xyXG4vLyAgICAgICAgZXh0cmFGaWVsZHMgPSBpbnB1dHNJbmZvRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXh0cmFGaWVsZCcpO1xyXG4vLyAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICBpKys7XHJcbi8vICAgICAgfVxyXG4vLyAgICB9XHJcbi8vICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgaWYgKGFsbElucHV0c1tpXS5jbGFzc05hbWUgPT0gJ3N1YnNjcmliZUlucHV0IGV4dHJhJykge1xyXG4vLyAgICAgICAgY29uc3QgZXh0cmFGaWVsZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vXHJcbi8vICAgICAgICBleHRyYUZpZWxkRWwuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJleHRyYUZpZWxkXCI+PGJyPtCU0J7Qn9Ce0JvQndCY0KLQldCb0KzQndCe0JUg0J/QntCb0JUgJyArIGV4dHJhRmllbGRDb3VudGVyICsgJzxicj4nICtcclxuLy8gICAgICAgICAgJzxpbnB1dCBjbGFzcz1cImZpZWxkUGxhY2Vob2xkZXJcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArIGFsbElucHV0c1tpXS5wbGFjZWhvbGRlciArICdcIj48YnI+PGJyPicgK1xyXG4vLyAgICAgICAgICAnPHNlbGVjdCBjbGFzcz1cImZpZWxkTmFtZVNlbGVjdFwiPjwvc2VsZWN0Pjxicj4nICtcclxuLy8gICAgICAgICAgJzxpbnB1dCBjbGFzcz1cImV4dHJhRmllbGRSZXF1aXJlZFwiIHR5cGU9XCJjaGVja2JveFwiPiZuYnNwOyByZXF1aXJlZDxicj48YnI+JyArXHJcbi8vICAgICAgICAgICc8L2Rpdj4nO1xyXG4vLyAgICAgICAgaW5wdXRzSW5mb0VsLmFwcGVuZChleHRyYUZpZWxkRWwpO1xyXG4vLyAgICAgICAgY2hhbmdlSW5wdXRzSW5mbygpO1xyXG4vLyAgICAgICAgZXh0cmFGaWVsZEVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkTmFtZVNlbGVjdCcpWzBdLnZhbHVlID0gYWxsSW5wdXRzW2ldLm5hbWU7XHJcbi8vICAgICAgICBpZiAoYWxsSW5wdXRzW2ldLnJlcXVpcmVkID09IHRydWUpIHtcclxuLy8gICAgICAgICAgZXh0cmFGaWVsZEVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2V4dHJhRmllbGRSZXF1aXJlZCcpWzBdLmNoZWNrZWQgPSB0cnVlO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgZXh0cmFGaWVsZENvdW50ZXIrKztcclxuLy8gICAgICB9IGVsc2UgaWYgKGFsbElucHV0c1tpXS5jbGFzc05hbWUgPT0gJ3N1YnNjcmliZUlucHV0IG5hbWUnKSB7XHJcbi8vICAgICAgICBuYW1lRmllbGRFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFBsYWNlaG9sZGVyJylbMF0udmFsdWUgPSBhbGxJbnB1dHNbaV0ucGxhY2Vob2xkZXI7XHJcbi8vICAgICAgICBpZiAoYWxsSW5wdXRzW2ldLnJlcXVpcmVkID09IHRydWUpIHtcclxuLy8gICAgICAgICAgbmFtZVJlcXVpcmUuY2hlY2tlZCA9IHRydWU7XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgfSBlbHNlIGlmIChhbGxJbnB1dHNbaV0uY2xhc3NOYW1lID09ICdzdWJzY3JpYmVJbnB1dCBlbWFpbCcpIHtcclxuLy8gICAgICAgIGVtYWlsRmllbGRFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFBsYWNlaG9sZGVyJylbMF0udmFsdWUgPSBhbGxJbnB1dHNbaV0ucGxhY2Vob2xkZXI7XHJcbi8vICAgICAgfVxyXG4vLyAgICB9XHJcbi8vICAgIG1ha2VQcmV2aWV3KCk7XHJcbi8vICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluY2x1ZGVTdWJzY3JpYmVJbnB1dHNTZXR0aW5ncztcclxuIiwiaW1wb3J0IGluY2x1ZGVTdWJzY3JpYmVJbnB1dHNTZXR0aW5ncyBmcm9tICcuL3N1YnNjcmliZUlucHV0c1NldHRpbmdzLmpzJztcclxuaW1wb3J0IGluY2x1ZGVTdWJzY3JpYmVTdWJtaXRTZXR0aW5ncyBmcm9tICcuL3N1YnNjcmliZVN1bWJpdFNldHRpbmdzLmpzJztcclxuaW1wb3J0IGluY2x1ZGVTdWJzY3JpYmVEZWxpdmVyeSBmcm9tICcuL3N1YnNjcmliZURlbGl2ZXJ5LmpzJztcclxuXHJcbiQoJyNtYWluQXJlYScpLm9uKCdjbGljaycsICcuY29weVN1YnNjcmliZScsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBzdWJzY3JpYmVCbG9ja0lkID0gJCh0aGlzKS5wYXJlbnRzKCcuc3Vic2NyaWJlQmxvY2snKS5hdHRyKCdpZCcpO1xyXG4gIGNvbnN0IHN1YnNjcmliZUJsb2NrRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN1YnNjcmliZUJsb2NrSWQpO1xyXG4gIGNvbnN0IGNsb25JZCA9ICdzdWJzY3JpYmUnICsgZ2V0UmFuZG9tKCk7XHJcbiAgJChzdWJzY3JpYmVCbG9ja0VsZW0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgY2xvbklkKS5pbnNlcnRBZnRlcihzdWJzY3JpYmVCbG9ja0VsZW0pO1xyXG5cclxuICBhZGRGdW5jdGlvbmFsaXR5VG9TdWJzY3JpYmVFbGVtZW50KGNsb25JZCk7XHJcbiAgYWRkRHJhZ0FuZERyb3BUb0Zvcm0oY2xvbklkKTtcclxuICBtYWtlUHJldmlldygpO1xyXG59KTtcclxuXHJcbiQoJyNtYWluQXJlYScpLm9uKCdjbGljaycsICcuc3Vic2NyaWJlU2V0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgY29uc3QgdGhzID0gJCh0aGlzKS5wYXJlbnRzKCcuc3Vic2NyaWJlQmxvY2snKTtcclxuICBjb25zdCBzdWJzY3JpYmVCbG9ja0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKHRocykuYXR0cignaWQnKSk7XHJcbiAgY29uc3Qgc3Vic2NyaWJlV3JhcHBlckVsZW0gPSBzdWJzY3JpYmVCbG9ja0VsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3Vic2NyaWJlV3JhcHBlcicpWzBdO1xyXG4gIGxldCBmb3JtQ29kZVdyYXBwZXJFbGVtID0gc3Vic2NyaWJlQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm1Db2RlV3JhcHBlcicpWzBdO1xyXG4gIGxldCBjdXJyZW50U3Vic2NyaWJlID0gc3Vic2NyaWJlQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF07XHJcbiAgbGV0IHN1YnNjcmliZVN1Ym1pdEVsZW0gPSBjdXJyZW50U3Vic2NyaWJlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1YnNjcmliZVN1Ym1pdCcpWzBdO1xyXG4gIGxldCBzdWJzY3JpYmVJbnB1dHMgPSBjdXJyZW50U3Vic2NyaWJlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1YnNjcmliZUlucHV0Jyk7XHJcbiAgbGV0IGFsbElucHV0cyA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgY29uc3QgdGVzdFN1YnNjcmliZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdFN1YnNjcmliZScpO1xyXG5cclxuICAvL9Cf0L7Rj9Cy0LvQtdC90LjQtSDQv9GA0LDQstC+0Lkg0L/QsNC90LXQu9C4LCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQuNC90L/Rg9GC0L7Qsi5cclxuICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2Om5vdCgjc2V0dGluZ3MtbW4pIGlucHV0Jykub2ZmKCdpbnB1dCcpO1xyXG4gICQoJyNyaWdodFNpZGViYXIgPiBkaXY6bm90KCNzZXR0aW5ncy1tbikgaW5wdXQnKS5vZmYoKTtcclxuICAkKCcjc3Vic2NyaWJlLWJvcmRlci1zdHlsZScpLm9mZigpO1xyXG4gICQoJyNzdWJzY3JpYmUtYm9yZGVyLWxlZnQtc3R5bGUnKS5vZmYoKTtcclxuICAkKCcjc3Vic2NyaWJlLWJvcmRlci1yaWdodC1zdHlsZScpLm9mZigpO1xyXG4gICQoJyNzdWJzY3JpYmUtYm9yZGVyLXRvcC1zdHlsZS12YWx1ZScpLm9mZigpO1xyXG4gICQoJyNzdWJzY3JpYmUtYm9yZGVyLWJvdHRvbS1zdHlsZScpLm9mZigpO1xyXG4gICQoJyNzdWJzY3JpYmUtYW5pbWF0aW9uLXR5cGUtdmFsdWUnKS5vZmYoKTtcclxuXHJcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JpcHQtJyArIHRocy5hdHRyKCdpZCcpKSkge1xyXG4gICAgdmFyIHRpbWUgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyaXB0LScgKyB0aHMuYXR0cignaWQnKSkuaW5uZXJIVE1MLnNwbGl0KCcsJylbMV0pIC8gMTAwMDtcclxuICAgIHZhciBoID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCk7XHJcbiAgICB2YXIgbSA9IE1hdGguZmxvb3IoKHRpbWUgLSAzNjAwICogaCkgLyA2MCk7XHJcbiAgICB2YXIgcyA9IHRpbWUgLSAoMzYwMCAqIGggKyA2MCAqIG0pO1xyXG4gICAgJCgnI3N1YnNjcmliZS10aW1lb3V0LWhvdXItdmFsdWUnKS52YWwoaCk7XHJcbiAgICAkKCcjc3Vic2NyaWJlLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKG0pO1xyXG4gICAgJCgnI3N1YnNjcmliZS10aW1lb3V0LXNlY29uZC12YWx1ZScpLnZhbChzKTtcclxuICAgICQoJyNzdWJzY3JpYmUtZGlzcGxheS1ub25lLXZhbHVlJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCcjc3Vic2NyaWJlLXRpbWVvdXQtaG91ci12YWx1ZScpLnZhbCgwKTtcclxuICAgICQoJyNzdWJzY3JpYmUtdGltZW91dC1taW51dGUtdmFsdWUnKS52YWwoMCk7XHJcbiAgICAkKCcjc3Vic2NyaWJlLXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKDApO1xyXG4gIH1cclxuICAkKCcjcmlnaHRTaWRlYmFyID4gZGl2JykuaGlkZSgpO1xyXG4gICQoJyNzZXR0aW5ncy1tbicpLmhpZGUoKTtcclxuICAkKCcjbWFpbi1ibG9jay1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjY29udGVudC1ibG9jay1zZXR0aW5ncycpLmhpZGUoKTtcclxuICAkKCcjaW1hZ2Utc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3ZpZGVvLXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyN0ZXh0LXNldHRpbmdzJykuaGlkZSgpO1xyXG4gICQoJyNidXR0b24tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2Zvcm0tc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2xpc3Qtc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI2xpbmUtc2V0dGluZ3MnKS5oaWRlKCk7XHJcbiAgJCgnI3N1YnNjcmliZS1zZXR0aW5ncycpLnNob3coKTtcclxuICAkKCcjcmlnaHRTaWRlYmFyJykuY3NzKHtcclxuICAgIHJpZ2h0OiAnMHB4JyxcclxuICAgIHRyYW5zaXRpb246ICcwLjRzIGFsbCBlYXNlLWluJ1xyXG4gIH0pLmFkZENsYXNzKCdhY3RpdmF0ZWQnKTtcclxuXHJcbiAgLy8g0JfQsNC60YDRi9GC0Ywg0L/QsNC90LXQu9GMXHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlUmlnaHRQYW5lbCk7XHJcblxyXG5cclxuICAvL9CS0YHRgtCw0LLQutCwINC60L7QtNCwXHJcblxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ3Nob3ctc3Vic2NyaWJlLWNvZGUtc2V0dGluZ3MnLCAnc3Vic2NyaWJlQ29kZUluZGljYXRvcicpO1xyXG5cclxuICBpbmNsdWRlU3Vic2NyaWJlRGVsaXZlcnkoc3Vic2NyaWJlQmxvY2tFbGVtLmlkKTtcclxuXHJcbiAgLy/QndCw0YHRgtGA0L7QudC60Lgg0L7RgtGB0YLRg9C/0L7QsiDRhNC+0YDQvNGLXHJcblxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ3N1YnNjcmliZU1hcmdpbkV2ZXJ5JywgJ3N1YnNjcmliZU1hcmdpbkdyb3VwSW5kaWNhdG9yJyk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmUtbWFyZ2luLXRvcC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUJsb2NrRWxlbSkubWFyZ2luVG9wKSk7XHJcbiAgJCgnI3N1YnNjcmliZS1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlQmxvY2tFbGVtKS5tYXJnaW5Ub3ApKTtcclxuICAkKCcjc3Vic2NyaWJlLW1hcmdpbi1yaWdodC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUJsb2NrRWxlbSkubWFyZ2luUmlnaHQpKTtcclxuICAkKCcjc3Vic2NyaWJlLW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUJsb2NrRWxlbSkubWFyZ2luUmlnaHQpKTtcclxuICAkKCcjc3Vic2NyaWJlLW1hcmdpbi1ib3R0b20tdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVCbG9ja0VsZW0pLm1hcmdpbkJvdHRvbSkpO1xyXG4gICQoJyNzdWJzY3JpYmUtbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUJsb2NrRWxlbSkubWFyZ2luQm90dG9tKSk7XHJcbiAgJCgnI3N1YnNjcmliZS1tYXJnaW4tbGVmdC12YWx1ZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZUJsb2NrRWxlbSkubWFyZ2luTGVmdCkpO1xyXG4gICQoJyNzdWJzY3JpYmUtbWFyZ2luLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVCbG9ja0VsZW0pLm1hcmdpbkxlZnQpKTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZS1tYXJnaW4tdG9wLXZhbHVlLCAjc3Vic2NyaWJlLW1hcmdpbi10b3AtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZUJsb2NrRWxlbSkuY3NzKCdtYXJnaW4tdG9wJywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHN1YnNjcmliZUJsb2NrRWxlbSkuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi10b3A6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZS1tYXJnaW4tdG9wLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1tYXJnaW4tdG9wLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjc3Vic2NyaWJlLW1hcmdpbi1yaWdodC12YWx1ZSwgI3N1YnNjcmliZS1tYXJnaW4tcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZUJsb2NrRWxlbSkuY3NzKCdtYXJnaW4tcmlnaHQnLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQoc3Vic2NyaWJlQmxvY2tFbGVtKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLXJpZ2h0OicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmUtbWFyZ2luLXJpZ2h0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1tYXJnaW4tcmlnaHQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLW1hcmdpbi1yaWdodC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI3N1YnNjcmliZS1tYXJnaW4tYm90dG9tLXZhbHVlLCAjc3Vic2NyaWJlLW1hcmdpbi1ib3R0b20tdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZUJsb2NrRWxlbSkuY3NzKCdtYXJnaW4tYm90dG9tJywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHN1YnNjcmliZUJsb2NrRWxlbSkuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi1ib3R0b206JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZS1tYXJnaW4tYm90dG9tLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1tYXJnaW4tYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1tYXJnaW4tYm90dG9tLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjc3Vic2NyaWJlLW1hcmdpbi1sZWZ0LXZhbHVlLCAjc3Vic2NyaWJlLW1hcmdpbi1sZWZ0LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChzdWJzY3JpYmVCbG9ja0VsZW0pLmNzcygnbWFyZ2luLWxlZnQnLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQoc3Vic2NyaWJlQmxvY2tFbGVtKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLWxlZnQ6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZS1tYXJnaW4tbGVmdC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmUtbWFyZ2luLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLW1hcmdpbi1sZWZ0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QktC10YDRgtC40LrQsNC70YzQvdC+0LUg0LLRi9GA0LDQstC90LjQstCw0L3QuNC1INGE0L7RgNC80YtcclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnc3Vic2NyaWJlLXNob3ctdmVydGljYWwtc2V0dGluZ3MnLCAnc3Vic2NyaWJlVmVydGljYWxJbmRpY2F0b3InKTtcclxuXHJcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlQmxvY2tFbGVtKS5tYXJnaW5Ub3AgPT0gJ2F1dG8nKSB7XHJcbiAgICBzdWJzY3JpYmVNYXJnaW5Cb3R0b20uY2hlY2tlZCA9IHRydWU7XHJcbiAgICBzdWJzY3JpYmVNYXJnaW5Ub3AuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgc3Vic2NyaWJlTWFyZ2luQ2VudGVyLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9IGVsc2UgaWYgKGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlQmxvY2tFbGVtKS5tYXJnaW5Cb3R0b20gPT0gJ2F1dG8nKSB7XHJcbiAgICBzdWJzY3JpYmVNYXJnaW5Cb3R0b20uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgc3Vic2NyaWJlTWFyZ2luVG9wLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgc3Vic2NyaWJlTWFyZ2luQ2VudGVyLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9IGVsc2UgaWYgKGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlQmxvY2tFbGVtKS5tYXJnaW5Ub3AgPT0gJzBweCcgJiYgZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVCbG9ja0VsZW0pLm1hcmdpbkJvdHRvbSA9PSAnMHB4Jykge1xyXG4gICAgc3Vic2NyaWJlTWFyZ2luQm90dG9tLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIHN1YnNjcmliZU1hcmdpblRvcC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBzdWJzY3JpYmVNYXJnaW5DZW50ZXIuY2hlY2tlZCA9IHRydWU7XHJcbiAgfVxyXG4gIHN1YnNjcmliZU1hcmdpblRvcC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc3Vic2NyaWJlQmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xyXG4gICAgc3Vic2NyaWJlQmxvY2tFbGVtLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICdhdXRvJztcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfVxyXG4gIHN1YnNjcmliZU1hcmdpbkNlbnRlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc3Vic2NyaWJlQmxvY2tFbGVtLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xyXG4gICAgc3Vic2NyaWJlQmxvY2tFbGVtLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcwcHgnO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcbiAgc3Vic2NyaWJlTWFyZ2luQm90dG9tLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzdWJzY3JpYmVCbG9ja0VsZW0uc3R5bGUubWFyZ2luVG9wID0gJ2F1dG8nO1xyXG4gICAgc3Vic2NyaWJlQmxvY2tFbGVtLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcwcHgnO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INGC0LXQvdC10LkqL1xyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdzdWJzY3JpYmUtc2hhZG93LXNldHRpbmdzJywgJ3N1YnNjcmliZVNoYWRvd0luZGljYXRvcicpO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlU2hhZG93UmFkaW9PbicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlLXNoYWRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdmFyIGh2ID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNzdWJzY3JpYmUtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNzdWJzY3JpYmUtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQoJyNzdWJzY3JpYmUtc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjc3Vic2NyaWJlLXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjc3Vic2NyaWJlLXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoYWxsSW5wdXRzW2ldKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlU2hhZG93UmFkaW9PZmYnKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YnNjcmliZS1zaGFkb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygnYm94LXNoYWRvdycsICdub25lJyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuXHJcbiAgJCgnI3N1YnNjcmliZS1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZSwgI3N1YnNjcmliZS1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNzdWJzY3JpYmUtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNzdWJzY3JpYmUtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmUtc2hhZG93LWhvcml6b250YWwtdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmUtc2hhZG93LXZlcnRpY2FsLXZhbHVlLCAjc3Vic2NyaWJlLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNzdWJzY3JpYmUtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHNwcmQgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI3N1YnNjcmliZS1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3N1YnNjcmliZS1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBpbnNldCA9ICQoJyNzdWJzY3JpYmUtc2hhZG93LWluc2V0LXZhbHVlJykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIHNwcmQgKyBcIiBcIiArIGNsciArIFwiIFwiICsgaW5zZXQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbElucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGFsbElucHV0c1tpXSkuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZS1zaGFkb3ctdmVydGljYWwtdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmUtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZS1zaGFkb3ctYmx1ci12YWx1ZSwgI3N1YnNjcmliZS1zaGFkb3ctYmx1ci12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNzdWJzY3JpYmUtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNzdWJzY3JpYmUtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNzdWJzY3JpYmUtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmUtc2hhZG93LWJsdXItdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLXNoYWRvdy1ibHVyLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmUtc2hhZG93LXNwcmVhZC12YWx1ZSwgI3N1YnNjcmliZS1zaGFkb3ctc3ByZWFkLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNzdWJzY3JpYmUtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNzdWJzY3JpYmUtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgc3ByZCA9ICQodGhpcykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNzdWJzY3JpYmUtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNzdWJzY3JpYmUtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmUtc2hhZG93LXNwcmVhZC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmUtc2hhZG93LXNwcmVhZC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmUtc2hhZG93LXNwcmVhZC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmUtc2hhZG93LW9wYWNpdHktdmFsdWUsICNzdWJzY3JpYmUtc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNzdWJzY3JpYmUtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQodGhpcykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIGluc2V0ID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctaW5zZXQtdmFsdWUnKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCI7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgc3ByZCArIFwiIFwiICsgY2xyICsgXCIgXCIgKyBpbnNldDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICQoYWxsSW5wdXRzW2ldKS5jc3MoJ2JveC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlLXNoYWRvdy1vcGFjaXR5LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1zaGFkb3ctb3BhY2l0eS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmUtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlLXNoYWRvdy1jb2xvci12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBzcHJkID0gJCgnI3N1YnNjcmliZS1zaGFkb3ctc3ByZWFkLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQodGhpcykudmFsKCksICQoJyNzdWJzY3JpYmUtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgaW5zZXQgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy1pbnNldC12YWx1ZScpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlID8gXCJpbnNldFwiIDogXCJcIjtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBzcHJkICsgXCIgXCIgKyBjbHIgKyBcIiBcIiArIGluc2V0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgJChhbGxJbnB1dHNbaV0pLmNzcygnYm94LXNoYWRvdycsIHBycHRzKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmUtc2hhZG93LWluc2V0LXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBodiA9ICQoJyNzdWJzY3JpYmUtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHNwcmQgPSAkKCcjc3Vic2NyaWJlLXNoYWRvdy1zcHJlYWQtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI3N1YnNjcmliZS1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3N1YnNjcmliZS1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBpbnNldCA9ICQodGhpcykucHJvcCgnY2hlY2tlZCcpID09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIHNwcmQgKyBcIiBcIiArIGNsciArIFwiIFwiICsgaW5zZXQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbElucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAkKGFsbElucHV0c1tpXSkuY3NzKCdib3gtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAvKtCa0L7QvdC10YYg0L3QsNGB0YLRgNC+0LXQuiDRgtC10L3QtdC5Ki9cclxuXHJcbiAgaW5jbHVkZVN1YnNjcmliZUlucHV0c1NldHRpbmdzKCQodGhzKS5hdHRyKCdpZCcpKTtcclxuICBpbmNsdWRlU3Vic2NyaWJlU3VibWl0U2V0dGluZ3MoJCh0aHMpLmF0dHIoJ2lkJykpO1xyXG5cclxuICAvKtCd0LDRgdGC0YDQvtC50LrQsCDQsNC90LjQvNCw0YbQuNC4Ki9cclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnc3Vic2NyaWJlLWFuaW1hdGlvbicsICdzdWJzY3JpYmVBbmltYXRpb25JbmRpY2F0b3InKTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZS1hbmltYXRpb24tdHlwZS12YWx1ZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKSAhPSBcIm5vbmVcIikge1xyXG4gICAgICAkKGN1cnJlbnRTdWJzY3JpYmUpLmNzcygnYW5pbWF0aW9uLW5hbWUnLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgJChjdXJyZW50U3Vic2NyaWJlKS5jc3MoJ2FuaW1hdGlvbi1kZWxheScsICQoJyNzdWJzY3JpYmUtYW5pbWF0aW9uLWRlbGF5LXZhbHVlJykudmFsKCkgKyAncycpO1xyXG4gICAgICAkKGN1cnJlbnRTdWJzY3JpYmUpLmNzcygnYW5pbWF0aW9uLWR1cmF0aW9uJywgJCgnI3N1YnNjcmliZS1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUnKS52YWwoKSArICdzJyk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlLWFuaW1hdGlvbi1kZWxheS12YWx1ZSwgI3N1YnNjcmliZS1hbmltYXRpb24tZGVsYXktdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGN1cnJlbnRTdWJzY3JpYmUpLmNzcygnYW5pbWF0aW9uLWRlbGF5JywgJCh0aGlzKS52YWwoKSArICdzJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlLWFuaW1hdGlvbi1kZWxheS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmUtYW5pbWF0aW9uLWRlbGF5LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1hbmltYXRpb24tZGVsYXktdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZSwgI3N1YnNjcmliZS1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGN1cnJlbnRTdWJzY3JpYmUpLmNzcygnYW5pbWF0aW9uLWR1cmF0aW9uJywgJCh0aGlzKS52YWwoKSArICdzJyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlLWFuaW1hdGlvbi1kdXJhdGlvbi12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmUtYW5pbWF0aW9uLWR1cmF0aW9uLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1hbmltYXRpb24tZHVyYXRpb24tdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0L3QsNGB0YLRgNC+0LXQuiDQsNC90LjQvNCw0YbQuNC4Ki9cclxuICAvKtCR0LvQvtC6INGC0LDQudC80LDRg9GC0LAqL1xyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdzdWJzY3JpYmUtc2hvdy10aW1lb3V0LXNldHRpbmdzJywgJ3N1YnNjcmliZVRpbWVvdXRJbmRpY2F0b3InKTtcclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tISEh0KHQlNCV0JvQkNCi0KwhISEtLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmlwdC0nICsgdGhzLmF0dHIoJ2lkJykpKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlLWRpc3BsYXktbm9uZS12YWx1ZScpLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlLWRpc3BsYXktbm9uZS12YWx1ZScpLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gICQoJyNzdWJzY3JpYmUtZGlzcGxheS1ub25lLXZhbHVlLCAjc3Vic2NyaWJlLXRpbWVvdXQtaG91ci12YWx1ZSwgI3N1YnNjcmliZS10aW1lb3V0LWhvdXItdmFsdWUtcmFuZ2UsICNzdWJzY3JpYmUtdGltZW91dC1taW51dGUtdmFsdWUsICNzdWJzY3JpYmUtdGltZW91dC1taW51dGUtdmFsdWUtcmFuZ2UsICNzdWJzY3JpYmUtdGltZW91dC1zZWNvbmQtdmFsdWUsICNzdWJzY3JpYmUtdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaWQgPSB0aHMuYXR0cignaWQnKTtcclxuXHJcbiAgICB2YXIgaG91cnMgPSAkKCcjc3Vic2NyaWJlLXRpbWVvdXQtaG91ci12YWx1ZScpLnZhbCgpICogMzYwMDtcclxuICAgIHZhciBtaW51dGUgPSAkKCcjc3Vic2NyaWJlLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKCkgKiA2MDtcclxuICAgIHZhciBzZWNvbmQgPSBwYXJzZUludCgkKCcjc3Vic2NyaWJlLXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKCkpO1xyXG5cclxuICAgIHZhciB0aW1lID0gaG91cnMgKyBtaW51dGUgKyBzZWNvbmQ7XHJcblxyXG4gICAgdGltZSA9IHRpbWUgKiAxMDAwO1xyXG5cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YnNjcmliZS1kaXNwbGF5LW5vbmUtdmFsdWUnKS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgJCgnI3NjcmlwdC0nICsgaWQpLnJlbW92ZSgpO1xyXG4gICAgICAkKCcjbWFpbkFyZWEnKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiY29kZVwiIGlkPVwic2NyaXB0LScgKyBpZCArICdcIiBjbGFzcz1cImNvZGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+JyArIFtpZCwgdGltZV0gKyAnPC9zcGFuPicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3NjcmlwdC0nICsgaWQpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZS10aW1lb3V0LWhvdXItdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlLXRpbWVvdXQtaG91ci12YWx1ZS1yYW5nZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmUtdGltZW91dC1ob3VyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmUtdGltZW91dC1taW51dGUtdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLXRpbWVvdXQtbWludXRlLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmUtdGltZW91dC1taW51dGUtdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLXRpbWVvdXQtbWludXRlLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmUtdGltZW91dC1zZWNvbmQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLXRpbWVvdXQtc2Vjb25kLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmUtdGltZW91dC1zZWNvbmQtdmFsdWUtcmFuZ2VcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLXRpbWVvdXQtc2Vjb25kLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwINGC0LDQudC80LDRg9GC0LAqL1xyXG5cclxufSk7XHJcbiIsImZ1bmN0aW9uIGluY2x1ZGVTdWJzY3JpYmVTdWJtaXRTZXR0aW5ncyhpZCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgY29uc3Qgc3Vic2NyaWJlQmxvY2tFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gIGNvbnN0IHN1YnNjcmliZVdyYXBwZXJFbGVtID0gc3Vic2NyaWJlQmxvY2tFbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1YnNjcmliZVdyYXBwZXInKVswXTtcclxuICBsZXQgY3VycmVudFN1YnNjcmliZSA9IHN1YnNjcmliZUJsb2NrRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4gIGxldCBzdWJzY3JpYmVTdWJtaXRFbGVtID0gY3VycmVudFN1YnNjcmliZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdWJzY3JpYmVTdWJtaXQnKVswXTtcclxuICBsZXQgc3Vic2NyaWJlSW5wdXRzID0gY3VycmVudFN1YnNjcmliZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdWJzcmliZUlucHV0Jyk7XHJcbiAgbGV0IGFsbElucHV0cyA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgbGV0IHN1Ym1pdFdyYXBwZXJFbCA9IGN1cnJlbnRTdWJzY3JpYmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3VibWl0V3JhcHBlcicpWzBdO1xyXG5cclxuICBzaG93SGlkZVNldHRpbmdzKCdzdWJzY3JpYmUtc3VibWl0LXNldHRpbmdzJywgJ3N1YnNjcmliZVN1Ym1pdEluZGljYXRvcicpO1xyXG4gIFxyXG4gIC8v0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDRgtC10LrRgdGC0LAg0LrQvdC+0L/QutC4XHJcbiAgXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnc3Vic2NyaWJlLXN1Ym1pdC1lZGl0b3Itc2V0dGluZ3MnLCAnc3Vic2NyaWJlU3VibWl0RWRpdG9ySW5kaWNhdG9yJyk7XHJcbiAgXHJcbiAgc3VibWl0RWRpdG9yLnZhbHVlID0gc3Vic2NyaWJlU3VibWl0RWxlbS5pbm5lckhUTUw7XHJcbiAgc3VibWl0RWRpdG9yLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHN1YnNjcmliZVN1Ym1pdEVsZW0uaW5uZXJIVE1MID0gc3VibWl0RWRpdG9yLnZhbHVlO1xyXG4gICAgc3Vic2NyaWJlU3VibWl0RWxlbS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgfVxyXG4gIFxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INGC0LXQvdC4IHN1Ym1pdCovXHJcblxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctc2V0dGluZ3MnLCAnc3Vic2NyaWJlU3VibWl0VGV4dFNoYWRvd0luZGljYXRvcicpO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlU3VibWl0VGV4dFNoYWRvd1JhZGlvT24nKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHZhciBodiA9ICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgdnYgPSAkKCcjc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBibHIgPSAkKCcjc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGNsciA9IGhleFRvUkdCKCQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LWNvbG9yLXZhbHVlJykudmFsKCksICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUnKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4gICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YnNjcmliZVN1Ym1pdFRleHRTaGFkb3dSYWRpb09mZicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygndGV4dC1zaGFkb3cnLCAnbm9uZScpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG4gICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUsICNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKHRoaXMpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LWhvcml6b250YWwtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZSwgI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciBjbHIgPSBoZXhUb1JHQigkKCcjc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy1jb2xvci12YWx1ZScpLnZhbCgpLCAkKCcjc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCkgLyAxMDApO1xyXG4gICAgdmFyIHBycHRzID0gaHYgKyBcIiBcIiArIHZ2ICsgXCIgXCIgKyBibHIgKyBcIiBcIiArIGNscjtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCd0ZXh0LXNoYWRvdycsIHBycHRzKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy12ZXJ0aWNhbC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LWJsdXItdmFsdWUsICNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LWJsdXItdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaHYgPSAkKCcjc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy1ob3Jpem9udGFsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIHZ2ID0gJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctdmVydGljYWwtdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgYmxyID0gJCh0aGlzKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbi8vICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4vLyAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy1ibHVyLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctYmx1ci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlLCAjc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS52YWwoKSwgJCh0aGlzKS52YWwoKSAvIDEwMCk7XHJcbiAgICB2YXIgcHJwdHMgPSBodiArIFwiIFwiICsgdnYgKyBcIiBcIiArIGJsciArIFwiIFwiICsgY2xyO1xyXG4gICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ3RleHQtc2hhZG93JywgcHJwdHMpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LW9wYWNpdHktdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlLXN1Ym1pdC10ZXh0LXNoYWRvdy1vcGFjaXR5LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGh2ID0gJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctaG9yaXpvbnRhbC12YWx1ZScpLnZhbCgpICsgJ3B4JztcclxuICAgIHZhciB2diA9ICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LXZlcnRpY2FsLXZhbHVlJykudmFsKCkgKyAncHgnO1xyXG4gICAgdmFyIGJsciA9ICQoJyNzdWJzY3JpYmUtc3VibWl0LXRleHQtc2hhZG93LWJsdXItdmFsdWUnKS52YWwoKSArICdweCc7XHJcbiAgICB2YXIgY2xyID0gaGV4VG9SR0IoJCh0aGlzKS52YWwoKSwgJCgnI3N1YnNjcmliZS1zdWJtaXQtdGV4dC1zaGFkb3ctb3BhY2l0eS12YWx1ZScpLnZhbCgpIC8gMTAwKTtcclxuICAgIHZhciBwcnB0cyA9IGh2ICsgXCIgXCIgKyB2diArIFwiIFwiICsgYmxyICsgXCIgXCIgKyBjbHI7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygndGV4dC1zaGFkb3cnLCBwcnB0cyk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gIC8q0JrQvtC90LXRhiDQvdCw0YHRgtGA0L7QtdC6INGC0LXQvdC4IHN1Ym1pdCovXHJcbiAgXHJcbiAgXHJcbiAgLy/QndCw0YHRgtGA0L7QudC60Lgg0L7RgtGB0YLRg9C/0L7QsiDRgyBzdWJtaXRcclxuXHJcbiAgc2hvd0hpZGVTZXR0aW5ncygnc3Vic2NyaWJlU3VibWl0TWFyZ2luRXZlcnknLCAnc3Vic2NyaWJlU3VibWl0TWFyZ2luSW5kaWNhdG9yJyk7XHJcbiAgXHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1tYXJnaW4tdG9wLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkubWFyZ2luVG9wKSk7XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkubWFyZ2luVG9wKSk7XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1tYXJnaW4tcmlnaHQtdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVTdWJtaXRFbGVtKS5tYXJnaW5SaWdodCkpO1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtbWFyZ2luLXJpZ2h0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkubWFyZ2luUmlnaHQpKTtcclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LW1hcmdpbi1ib3R0b20tdmFsdWUnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVTdWJtaXRFbGVtKS5tYXJnaW5Cb3R0b20pKTtcclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LW1hcmdpbi1ib3R0b20tdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVTdWJtaXRFbGVtKS5tYXJnaW5Cb3R0b20pKTtcclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LW1hcmdpbi1sZWZ0LXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkubWFyZ2luTGVmdCkpO1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtbWFyZ2luLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVTdWJtaXRFbGVtKS5tYXJnaW5MZWZ0KSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtbWFyZ2luLXRvcC12YWx1ZSwgI3N1YnNjcmliZVN1Ym1pdC1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ21hcmdpbi10b3AnLCAnJyk7XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuYXR0cignc3R5bGUnLCBmdW5jdGlvbiAoaSwgcykge1xyXG4gICAgICByZXR1cm4gKHMgfHwgJycpICsgJ21hcmdpbi10b3A6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZVN1Ym1pdC1tYXJnaW4tdG9wLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZVN1Ym1pdC1tYXJnaW4tdG9wLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZVN1Ym1pdC1tYXJnaW4tdG9wLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LW1hcmdpbi1yaWdodC12YWx1ZSwgI3N1YnNjcmliZVN1Ym1pdC1tYXJnaW4tcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnbWFyZ2luLXJpZ2h0JywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tcmlnaHQ6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZVN1Ym1pdC1tYXJnaW4tcmlnaHQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlU3VibWl0LW1hcmdpbi1yaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtbWFyZ2luLXJpZ2h0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LW1hcmdpbi1ib3R0b20tdmFsdWUsICNzdWJzY3JpYmVTdWJtaXQtbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdtYXJnaW4tYm90dG9tJywgJycpO1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmF0dHIoJ3N0eWxlJywgZnVuY3Rpb24gKGksIHMpIHtcclxuICAgICAgcmV0dXJuIChzIHx8ICcnKSArICdtYXJnaW4tYm90dG9tOicgKyB2YWwgKyAncHggIWltcG9ydGFudDsnXHJcbiAgICB9KTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVTdWJtaXQtbWFyZ2luLWJvdHRvbS12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtbWFyZ2luLWJvdHRvbS12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtbWFyZ2luLWJvdHRvbS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1tYXJnaW4tbGVmdC12YWx1ZSwgI3N1YnNjcmliZVN1Ym1pdC1tYXJnaW4tbGVmdC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdtYXJnaW4tbGVmdCcsICcnKTtcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5hdHRyKCdzdHlsZScsIGZ1bmN0aW9uIChpLCBzKSB7XHJcbiAgICAgIHJldHVybiAocyB8fCAnJykgKyAnbWFyZ2luLWxlZnQ6JyArIHZhbCArICdweCAhaW1wb3J0YW50OydcclxuICAgIH0pO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZVN1Ym1pdC1tYXJnaW4tbGVmdC12YWx1ZVwiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtbWFyZ2luLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlU3VibWl0LW1hcmdpbi1sZWZ0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QktGL0LHQvtGAINGI0YDQuNGE0YLQsFxyXG4gIFxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ3N1YnNjcmliZS1zaG93LXN1Ym1pdC1mb250LXNldHRpbmdzJywgJ3N1YnNjcmliZVN1Ym1pdEZvbnRJbmRpY2F0b3InKTtcclxuICBcclxuICBzdWJzY3JpYmVTdWJtaXRGb250RmFtaWx5U2VsZWN0LnZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVTdWJtaXRFbGVtKS5mb250RmFtaWx5O1xyXG4gIHN1YnNjcmliZVN1Ym1pdEZvbnRGYW1pbHlTZWxlY3Qub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzdWJzY3JpYmVTdWJtaXRFbGVtLnN0eWxlLmZvbnRGYW1pbHkgPSBzdWJzY3JpYmVTdWJtaXRGb250RmFtaWx5U2VsZWN0LnZhbHVlO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9XHJcblxyXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmZvbnRXZWlnaHQgPT0gJzkwMCcpIHtcclxuICAgIHN1YnNjcmliZVN1Ym1pdEJvbGQuY2hlY2tlZCA9IHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN1YnNjcmliZVN1Ym1pdEJvbGQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuICBzdWJzY3JpYmVTdWJtaXRCb2xkLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoc3Vic2NyaWJlU3VibWl0Qm9sZC5jaGVja2VkKSB7XHJcbiAgICAgIHN1YnNjcmliZVN1Ym1pdEVsZW0uc3R5bGUuZm9udFdlaWdodCA9ICc5MDAnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3Vic2NyaWJlU3VibWl0RWxlbS5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH1cclxuXHJcbiAgLy/QoNCw0LfQvNC10YAg0YjRgNC40YTRgtCwIHN1Ym1pdFxyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtZm9udC1zaXplLXZhbHVlJykudmFsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc3Vic2NyaWJlU3VibWl0RWxlbSkuZm9udFNpemUpKTtcclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWZvbnQtc2l6ZS12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmZvbnRTaXplKSk7XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1mb250LXNpemUtdmFsdWUsICNzdWJzY3JpYmVTdWJtaXQtZm9udC1zaXplLXZhbHVlLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2ZvbnQtc2l6ZScsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVTdWJtaXQtZm9udC1zaXplLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZVN1Ym1pdC1mb250LXNpemUtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlU3VibWl0LWZvbnQtc2l6ZS12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v0KbQstC10YIg0YLQtdC60YHRgtCwINGDIHN1Ym1pdFxyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtY29sb3ItdmFsdWUnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2NvbG9yJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvL9Cm0LLQtdGCIHN1Ym1pdFxyXG4gIFxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ3N1YnNjcmliZVN1Ym1pdC1iYWNrZ3JvdW5kLXR5cGVzJywgJ3N1YnNjcmliZVN1Ym1pdEJhY2tncm91bmRJbmRpY2F0b3InKTtcclxuXHJcbiAgc3Vic2NyaWJlU3VibWl0QmFja2dyb3VuZFJhZGlvQ29sb3Iub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHN1YnNjcmliZVN1Ym1pdEJhY2tncm91bmRHcmFkaWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgc3Vic2NyaWJlU3VibWl0QmFja2dyb3VuZENvbG9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuICBzdWJzY3JpYmVTdWJtaXRCYWNrZ3JvdW5kUmFkaW9HcmFkaWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc3Vic2NyaWJlU3VibWl0QmFja2dyb3VuZENvbG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzdWJzY3JpYmVTdWJtaXRCYWNrZ3JvdW5kR3JhZGllbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LW1haW4tY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9wYWNpdHkgPSAkKCcjcGFnZS1tYWluLWNvbG9yLW9wYWNpdHknKS52YWwoKSAvIDEwMDtcclxuICAgIHZhciBjb2xvciA9IGhleFRvUkdCKCQodGhpcykudmFsKCksIG9wYWNpdHkpO1xyXG4gICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcik7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWdyYWRpZW50LWNvbG9yLTEnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JhY2tncm91bmQnLCAnbGluZWFyLWdyYWRpZW50KCcgKyBwYXJzZUludCgkKCcjc3Vic2NyaWJlU3VibWl0LWdyYWRpZW50LWFuZ2xlJykudmFsKCkpICsgJ2RlZywgJyArICQodGhpcykudmFsKCkgKyAnLCAnICsgJCgnI3N1YnNjcmliZVN1Ym1pdC1ncmFkaWVudC1jb2xvci0yJykudmFsKCkgKyAnKScpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ncmFkaWVudC1jb2xvci0yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdiYWNrZ3JvdW5kJywgJ2xpbmVhci1ncmFkaWVudCgnICsgcGFyc2VJbnQoJCgnI3N1YnNjcmliZVN1Ym1pdC1ncmFkaWVudC1hbmdsZScpLnZhbCgpKSArICdkZWcsICcgKyAkKCcjc3Vic2NyaWJlU3VibWl0LWdyYWRpZW50LWNvbG9yLTEnKS52YWwoKSArICcsICcgKyAkKHRoaXMpLnZhbCgpICsgJyknKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtZ3JhZGllbnQtYW5nbGUnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYmFja2dyb3VuZCcsICdsaW5lYXItZ3JhZGllbnQoJyArIHBhcnNlSW50KCQodGhpcykudmFsKCkpICsgJ2RlZywgJyArICQoJyNzdWJzY3JpYmVTdWJtaXQtZ3JhZGllbnQtY29sb3ItMScpLnZhbCgpICsgJywgJyArICQoJyNzdWJzY3JpYmVTdWJtaXQtZ3JhZGllbnQtY29sb3ItMicpLnZhbCgpICsgJyknKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtbWFpbi1jb2xvci1vcGFjaXR5Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9wYWNpdHkgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdmFyIGNvbG9yID0gaGV4VG9SR0IoJCgnI3N1YnNjcmliZVN1Ym1pdC1tYWluLWNvbG9yJykudmFsKCksIG9wYWNpdHkgLyAxMDApO1xyXG4gICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JhY2tncm91bmQnLCBjb2xvcik7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvL9CS0YvRgdC+0YLQsCDQutC90L7Qv9C60LhcclxuICBcclxuICBzaG93SGlkZVNldHRpbmdzKCdzdWJzY3JpYmVTdWJtaXQtaGVpZ2h0JywgJ3N1YnNjcmliZVN1Ym1pdFNpemVJbmRpY2F0b3InKTtcclxuICBcclxuICBpZiAoc3Vic2NyaWJlU3VibWl0RWxlbS5zdHlsZS5oZWlnaHQgPT0gJ2F1dG8nIHx8IHN1YnNjcmliZVN1Ym1pdEVsZW0uc3R5bGUuaGVpZ2h0ID09ICcnKSB7XHJcbiAgICBzdWJzY3JpYmVTdWJtaXRBdXRvSGVpZ2h0LmNoZWNrZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdWJzY3JpYmVTdWJtaXRBdXRvSGVpZ2h0LmNoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1oZWlnaHQtdmFsdWUnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2hlaWdodCcpKSk7XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1oZWlnaHQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2hlaWdodCcpKSk7XHJcblxyXG4gIHN1YnNjcmliZVN1Ym1pdEF1dG9IZWlnaHQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChzdWJzY3JpYmVTdWJtaXRBdXRvSGVpZ2h0LmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICBzdWJzY3JpYmVTdWJtaXRFbGVtLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgbWFrZVByZXZpZXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtaGVpZ2h0LXZhbHVlLCAjc3Vic2NyaWJlU3VibWl0LWhlaWdodC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChzdWJzY3JpYmVTdWJtaXRBdXRvSGVpZ2h0LmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2hlaWdodCcsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZVN1Ym1pdC1oZWlnaHQtdmFsdWVcIikge1xyXG4gICAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtaGVpZ2h0LXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtaGVpZ2h0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvL9Co0LjRgNC40L3QsCDQutC90L7Qv9C60LhcclxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShzdWJzY3JpYmVTdWJtaXRFbGVtKS53aWR0aCA9PSAnMTAwJScpIHtcclxuICAgIHN1YnNjcmliZVN1Ym1pdEF1dG9XaWR0aC5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3Vic2NyaWJlU3VibWl0QXV0b1dpZHRoLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC13aWR0aC12YWx1ZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnd2lkdGgnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtd2lkdGgtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ3dpZHRoJykpKTtcclxuXHJcbiAgc3Vic2NyaWJlU3VibWl0QXV0b1dpZHRoLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoc3Vic2NyaWJlU3VibWl0QXV0b1dpZHRoLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICBzdWJzY3JpYmVTdWJtaXRFbGVtLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICBtYWtlUHJldmlldygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC13aWR0aC12YWx1ZSwgI3N1YnNjcmliZVN1Ym1pdC13aWR0aC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChzdWJzY3JpYmVTdWJtaXRBdXRvV2lkdGguY2hlY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnd2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVTdWJtaXQtd2lkdGgtdmFsdWVcIikge1xyXG4gICAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtd2lkdGgtdmFsdWUtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI3N1YnNjcmliZVN1Ym1pdC13aWR0aC12YWx1ZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/QndCw0YHRgtGA0L7QudC60Lgg0LLRgdC10YUg0LPRgNCw0L3QuNGGIHN1Ym1pdFxyXG4gIFxyXG4gIHNob3dIaWRlU2V0dGluZ3MoJ3N1YnNjcmliZS1zaG93LXN1Ym1pdC1ib3JkZXItc2V0dGluZ3MnLCAnc3Vic2NyaWJlU3VibWl0Qm9yZGVySW5kaWNhdG9yJyk7XHJcblxyXG4gIHN1YnNjcmliZVN1Ym1pdEJvcmRlclJhZGlvRXZlcnkub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHN1YnNjcmliZVN1Ym1pdEJvcmRlckFsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgc3Vic2NyaWJlU3VibWl0Qm9yZGVyRXZlcnkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG4gIHN1YnNjcmliZVN1Ym1pdEJvcmRlclJhZGlvQWxsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzdWJzY3JpYmVTdWJtaXRCb3JkZXJBbGwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBzdWJzY3JpYmVTdWJtaXRCb3JkZXJFdmVyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItdmFsdWUnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci13aWR0aCcpKSk7XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci13aWR0aCcpKSk7XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItcmFkaXVzJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItcmFkaXVzJykpKTtcclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci12YWx1ZSwgI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZVN1Ym1pdC1ib3JkZXItdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItcmFkaXVzLCAjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1yYWRpdXMtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXN0eWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWNvbG9yLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INC00LvRjyDQstC10YDRhdC90LXQuSDQs9GA0LDQvdC40YbRiyBzdWJtaXQqL1xyXG5cclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci10b3AtdmFsdWUnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci10b3Atd2lkdGgnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXRvcC12YWx1ZS1yYW5nZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXRvcC13aWR0aCcpKSk7XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItbGVmdC10b3AtcmFkaXVzJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJykpKTtcclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1sZWZ0LXRvcC1yYWRpdXMtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci10b3AtdmFsdWUsICNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXRvcC12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItdG9wLXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZVN1Ym1pdC1ib3JkZXItdG9wLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItdG9wLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItdG9wLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItbGVmdC10b3AtcmFkaXVzLCAjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1sZWZ0LXRvcC1yYWRpdXMtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWxlZnQtdG9wLXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWxlZnQtdG9wLXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWxlZnQtdG9wLXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItdG9wLXN0eWxlLXZhbHVlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItdG9wLXN0eWxlJywgJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci10b3AtY29sb3InKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci10b3AtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC/0YDQsNCy0L7QuSDQs9GA0LDQvdC40YbRiyBzdWJtaXQqL1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJpZ2h0LXZhbHVlJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItcmlnaHQtd2lkdGgnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJpZ2h0LXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItcmlnaHQtd2lkdGgnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJpZ2h0LXJhZGl1cycpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1yaWdodC12YWx1ZSwgI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItcmlnaHQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZVN1Ym1pdC1ib3JkZXItcmlnaHQtdmFsdWVcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1yaWdodC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJpZ2h0LXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1yaWdodC1yYWRpdXMsICNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJpZ2h0LXJhZGl1c1wiKSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJpZ2h0LXJhZGl1c2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJpZ2h0LXN0eWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItcmlnaHQtc3R5bGUnLCAkKHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLXJpZ2h0LWNvbG9yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItcmlnaHQtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8q0JrQvtC90LXRhiDQsdC70L7QutCwKi9cclxuXHJcbiAgLyrQndCw0YHRgtGA0L7QudC60Lgg0LTQu9GPINC90LjQttC90LXQuSDQs9GA0LDQvdC40YbRiyBzdWJtaXQqL1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWJvdHRvbS12YWx1ZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS13aWR0aCcpKSk7XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItYm90dG9tLXdpZHRoJykpKTtcclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJykudmFsKHBhcnNlSW50KCQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycpKSk7XHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnKSkpO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1ib3R0b20tdmFsdWUsICNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWJvdHRvbS12YWx1ZS1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItYm90dG9tLXdpZHRoJywgJCh0aGlzKS52YWwoKSArICdweCcpO1xyXG4gICAgaWYgKCQodGhpcykuYXR0cignaWQnKSA9PSBcInN1YnNjcmliZVN1Ym1pdC1ib3JkZXItYm90dG9tLXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItYm90dG9tLXZhbHVlLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItYm90dG9tLXZhbHVlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cywgI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cy1yYW5nZScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsICQodGhpcykudmFsKCkgKyAncHgnKTtcclxuICAgIGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gXCJzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLXJhbmdlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWJvdHRvbS1zdHlsZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItYm90dG9tLWNvbG9yJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItYm90dG9tLWNvbG9yJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAvKtCa0L7QvdC10YYg0LHQu9C+0LrQsCovXHJcblxyXG4gIC8q0J3QsNGB0YLRgNC+0LnQutC4INC00LvRjyDQu9C10LLQvtC5INCz0YDQsNC90LjRhtGLIHN1Ym1pdCovXHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItbGVmdC12YWx1ZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykpKTtcclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnKS52YWwocGFyc2VJbnQoJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnKSkpO1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cy1yYW5nZScpLnZhbChwYXJzZUludCgkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycpKSk7XHJcblxyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWxlZnQtdmFsdWUsICNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWxlZnQtdmFsdWUtcmFuZ2UnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlU3VibWl0LWJvcmRlci1sZWZ0LXZhbHVlXCIpIHtcclxuICAgICAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItbGVmdC12YWx1ZS1yYW5nZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWxlZnQtdmFsdWUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG4gICQoJyNzdWJzY3JpYmVTdWJtaXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cywgI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLXJhbmdlJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChzdWJzY3JpYmVTdWJtaXRFbGVtKS5jc3MoJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLCAkKHRoaXMpLnZhbCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09IFwic3Vic2NyaWJlU3VibWl0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIikge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMtcmFuZ2UnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBtYWtlUHJldmlldygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc3Vic2NyaWJlU3VibWl0LWJvcmRlci1sZWZ0LXN0eWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoc3Vic2NyaWJlU3VibWl0RWxlbSkuY3NzKCdib3JkZXItbGVmdC1zdHlsZScsICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG4gICAgbWFrZVByZXZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3N1YnNjcmliZVN1Ym1pdC1ib3JkZXItbGVmdC1jb2xvcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHN1YnNjcmliZVN1Ym1pdEVsZW0pLmNzcygnYm9yZGVyLWxlZnQtY29sb3InLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIG1ha2VQcmV2aWV3KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluY2x1ZGVTdWJzY3JpYmVTdWJtaXRTZXR0aW5nczsiXSwic291cmNlUm9vdCI6IiJ9