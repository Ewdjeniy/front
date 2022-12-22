import './preview.css';
import './animate.css';
import 'bootstrap';


(function () {
  'use strict';

  var currentHtml = localStorage.digitalHtml;
  var currentCss = localStorage.digitalCss;
  var currentJs = localStorage.digitalJs;
  var timersId = [];

  changePage();
  changeTimeout();
  loadPlayer();
  var changePageIntervalId = setInterval(checkChanges, 500);

  function checkChanges() {
    if (
      currentHtml != localStorage.digitalHtml ||
      currentCss != localStorage.digitalCss
    ) {
      currentHtml = localStorage.digitalHtml;
      currentCss = localStorage.digitalCss;
      changePage();
      loadPlayer();
    } else if (currentJs != localStorage.digitalJs) {
      currentJs = localStorage.digitalJs;
      changeTimeout();
    }
  }

  function changePage() {
    document.body.innerHTML = localStorage.digitalHtml;
    document.getElementById('mainArea').style = '';
    document.getElementById('previewStyle').innerHTML = localStorage.digitalCss;
    var contents = document.getElementsByClassName('content');
  }

  function turnOffTimeout(elClass, displayStyle) {
    var elements = document.getElementsByClassName(elClass);

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = displayStyle;
    }
  }

  function changeTimeout() {
    if (localStorage.digitalJs != '') {
      var scripts = localStorage.digitalJs.split(':');
      if (scripts[scripts.length - 1] == '') {
        scripts.pop();
      }

      var disapear = function (i) {
        document.getElementById(scripts[i].split(',')[0]).style.display = 'none';
        var timerId = setTimeout(function () {
          document.getElementById(scripts[i].split(',')[0]).style.display = 'flex';
        }, scripts[i].split(',')[1]);
        timersId = [];
        timersId.push(timerId);
      }
      for (var i = 0; i < scripts.length; i++) {
        disapear(i);
      }
    } else {
      turnOffTimeout('main-selector', 'flex');
      turnOffTimeout('content-selector', 'flex');
      turnOffTimeout('textBlock', 'flex');
      turnOffTimeout('buttonBlock', 'flex');
      turnOffTimeout('imageBlock', 'flex');
      turnOffTimeout('videoBlock', 'flex');
      turnOffTimeout('formBlock', 'flex');
      turnOffTimeout('subscribeBlock', 'flex');
      turnOffTimeout('listBlock', 'flex');
      turnOffTimeout('lineBlock', 'flex');

      for (var i = 0; i < timersId.length; i++) {
        clearTimeout(timersId[i]);
      }
    }
  }

  function loadPlayer() {
    var videoPlayers = document.getElementsByClassName('iframeWrapper');

    for (var i = 0; i < videoPlayers.length; i++) {
      var evalScripts = videoPlayers[i].getElementsByTagName('script');
      for (var j = 0; j < evalScripts.length; j++) {
        if (evalScripts[j].src != '') {
          var currentScript = document.createElement('script');
          var scriptId = 'player' + getRandom();
          currentScript.id = scriptId;
          document.body.append(currentScript);
          document.getElementById(scriptId).src = evalScripts[j].src;
          eval(evalScripts[j].innerHTML);
        } else {
          eval(evalScripts[j].innerHTML);
        }
      }
    }
  }

  function getRandom() {
    var d1 = Math.floor((Math.random() * 100000));
    var d2 = Math.floor((Math.random() * 100000));
    var d3 = Math.floor((Math.random() * 100000));
    return d1 + "" + d2 + "" + d3;
  }

})();
