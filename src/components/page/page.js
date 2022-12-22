import './page.css';
import { makePreview, setYoutubeBackgroundVideo, setAnotherBackgroundVideo, hexToRGB } from '../global/global.js';
import { Sortable } from '../global/Sortable.js';



previewDigital.onclick = function () {
  makePreview();
}

Sortable.create(mainArea, {
  group: {
    name: 'main',
    put: 'main-selector'
  },
  draggable: '.main-selector',
  filter: '.resizer, .handle, .block-resizer',
  ghostClass: 'main-selector-ghostClass',
  onStart: function (evt) {
    jQuery('.content').css('display', 'none');
    $('.block-settings').css('display', 'none');
    $(evt.item).css('opacity', '0.3');
  },
  onEnd: function (evt) {
    jQuery('.content').css('display', 'flex');
    $('.block-settings').css('display', 'flex');;
    $(evt.item).css('opacity', '1');
    makePreview();
  }
});

//<!--Пункты меню с выбором селекторов-->
$('#leftSidebar .main-selectors').on('click', function () {
  $('#elements').slideUp();
  $('#mainSelector').slideDown();
});

$('#leftSidebar .content-selectors').on('click', function () {
  $('#elements').slideUp();
  $('#contentSelector').slideDown();
});

$('#leftSidebar .modules').on('click', function () {
  $('#elements').slideUp();
  $('#Modules').slideDown();
});

$('#leftSidebar .ls-back-btn').on('click', function () {
  $(this).parent().slideUp();
  $('#elements').slideDown();
});

/*Появление и скрытие левой панели*/
$('#leftSidebar .hide-panel span').on('click', function () {
  if ($('#leftSidebar .hide-panel span').hasClass('glyphicon-arrow-left')) {
    $('#leftSidebar .ls-center-area').hide();
    $('#leftSidebar').css({
      width: '45px',
      transition: '1s all ease'
    });
    $('#leftSidebar .hide-panel span').removeClass('glyphicon-arrow-left').addClass('glyphicon-arrow-right');
  } else if ($('#leftSidebar .hide-panel span').hasClass('glyphicon-arrow-right')) {
    $('#leftSidebar').css('width', '300px');
    $('#leftSidebar .ls-center-area').show();
    $('#leftSidebar .hide-panel span').removeClass('glyphicon-arrow-right').addClass('glyphicon-arrow-left');
  }
});

$('#leftSidebar .main-settings span').on('click', function () {
  $('#rightSidebar > div').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#settings-mn').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

});


//Ширина страницы

(function makeFullScreen() {
  const mainAreaEl = document.getElementById('mainArea');

  document.getElementById('page-width-input').value = parseInt(getComputedStyle(mainAreaEl).width);
  mediaStyle.innerHTML = '#mainArea {width: ' + getComputedStyle(mainAreaEl).width + ';}';
  mediaStyle.innerHTML += '@media screen and (max-width: ' + getComputedStyle(mainAreaEl).width + ') {#mainArea {width: auto;}}';

  if (getComputedStyle(mainAreaEl).width == 'auto') {
    pageFullScreen.checked = true;
  } else {
    pageFullScreen.checked = false;
  }

  pageFullScreen.onclick = function () {
    if (pageFullScreen.checked == true) {
      mediaStyle.innerHTML = '#mainArea {width: auto;}';
      document.getElementById('page-width-input').value = '';
      makePreview();
    } else {
      mediaStyle.innerHTML = '#mainArea {width: ' + getComputedStyle(mainAreaEl).width + ';}';
      mediaStyle.innerHTML += '@media screen and (max-width: ' + getComputedStyle(mainAreaEl).width + ') {#mainArea {width: auto;}}';
      document.getElementById('page-width-input').value = parseInt(getComputedStyle(mainAreaEl).width);
      makePreview();
    }
  }
})();

$('#page-width-input').on('input', function () {
  if (pageFullScreen.checked == false) {
    mediaStyle.innerHTML = '#mainArea {width: ' + $(this).val() + 'px' + ';}';
    mediaStyle.innerHTML += '@media screen and (max-width: ' + $(this).val() + 'px' + ') {#mainArea {width: auto;}}';
    makePreview();
  }
});

$('#rightSidebar .close-rs').on('click', function () {
  $('#rightSidebar').css({
    right: '-400px',
    transition: '0.4s all ease-in'
  }).removeClass('activated');
  $('#rightSidebar > div').hide();
});

$('#videolink, #video_loop, #video_unmute').on('change', function () {
  if ($('#videolink').val().indexOf(".mp4") != -1 || $('#videolink').val().indexOf(".avi") != -1) {
    setAnotherBackgroundVideo($(this).val());
  } else if ($('#videolink').val().indexOf("youtube.com") != -1 || $('#videolink').val().indexOf("youtu.be") != -1) {

    var link;

    if ($('#videolink').val().indexOf("watch?v=") != -1) {
      link = $('#videolink').val().split("watch?v=")[1];
    } else if ($('#videolink').val().indexOf("embed") != -1) {
      link = $('#videolink').val().split("embed/")[1];
    } else {
      link = $('#videolink').val().split("youtu.be/")[1];
    }

    var params = [];
    params['loop'] = $('#video_loop:checked').val() == '1' ? 1 : 0;
    params['mute'] = $('#video_unmute:checked').val() == '1' ? 0 : 1;

    setYoutubeBackgroundVideo(link, params);
  } else {
    $('#backgroundVideo > *').remove();
  }
  makePreview();
});

$('#page-background-color input').on('change', function () {
  var opacity = $('#page-main-color-opacity').val() / 100;
  var color = hexToRGB($(this).val(), opacity);
  $('#mainArea').css('background', color);
  makePreview();
});

$('#page-meta-description input').on('input', function () {
  $('meta[name=description]').attr('content', $(this).val());
});

$('#page-meta-keywords input').on('input', function () {
  $('meta[name=keywords]').attr('content', $(this).val());
});

$('#page-title input').on('input', function () {
  $('title').text($(this).val());
});

$('#gradient-color-1').on('change', function () {
  $('#mainArea').css('background', 'linear-gradient(' + parseInt($('#gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#gradient-color-2').val() + ')');
  makePreview();
});

$('#gradient-color-2').on('change', function () {
  $('#mainArea').css('background', 'linear-gradient(' + parseInt($('#gradient-angle').val()) + 'deg, ' + $('#gradient-color-1').val() + ', ' + $(this).val() + ')');
  makePreview();
});

$('#gradient-angle').on('input', function () {
  $('#mainArea').css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#gradient-color-1').val() + ', ' + $('#gradient-color-2').val() + ')');
  makePreview();
});

$('#page-main-color-opacity').on('input', function () {
  var opacity = $(this).val();
  var color = hexToRGB($('#page-main-color').val(), opacity / 100);
  $('#mainArea').css('background', color);
  makePreview();
});

$('#page-background-image-file').on('change', function () {
  var file = document.querySelector('input#page-background-image-file').files[0];

  var token = $('input[name=_token][type=hidden]').val();

  var form_data = new FormData();
  form_data.append('image', file);
  form_data.append('_token', token);
  form_data.append('id', $('input[name=template_id]').val());

  $.ajax({
    url: "/client/funnel/saveimage",
    method: 'post',
    data: form_data,
    contentType: false,
    processData: false,
    success: function (e) {
      $('#mainArea').css('background-image', 'url(' + e.link + ')')
    }
  });
  makePreview();
});

$('#page-background-image-size').on('change', function () {
  $('#mainArea').css('background-size', $(this).val());
  makePreview();
});

$('#page-background-image-attachment').on('change', function () {
  $('#mainArea').css('background-attachment', $(this).val());
  makePreview();
});

$('#page-background-image-blend-mode').on('change', function () {
  $('#mainArea').css('background-blend-mode', $(this).val());
  makePreview();
});

$('#page-background-image-repeat-x').on('change', function () {
  $('#mainArea').css('background-repeat-x', $(this).val());
  makePreview();
});

$('#page-background-image-repeat-y').on('change', function () {
  $('#mainArea').css('background-repeat-y', $(this).val());
  makePreview();
});

$('#page-background-image-color').on('change', function () {
  $('#mainArea').css('background-color', $(this).val());
  makePreview();
});

$('#page-background-types input').on('change', function () {
  switch ($(this).val()) {
    case 'color': {
      $('.page-background-color-settings').show();
      $('.page-background-gradient-settings').hide();
      $('.page-background-image-settings').hide();
      $('.page-background-vide-settings').hide();
      break;
    }
    case 'gradient': {
      $('.page-background-color-settings').hide();
      $('.page-background-gradient-settings').show();
      $('.page-background-image-settings').hide();
      $('.page-background-vide-settings').hide();

      break;
    }
    case 'bgimage': {
      $('.page-background-color-settings').hide();
      $('.page-background-gradient-settings').hide();
      $('.page-background-image-settings').show();
      $('.page-background-vide-settings').hide();

      break;
    }
    case 'video': {
      $('.page-background-color-settings').hide();
      $('.page-background-gradient-settings').hide();
      $('.page-background-image-settings').hide();
      $('.page-background-video-settings').show();
    }
  }
});
