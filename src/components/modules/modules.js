import { dragImage } from './image/imageModule.js';
import { dragVideo } from './video/videoModule.js';
import { dragText } from './text/textModule.js';
import { dragButton } from './button/buttonModule.js';
import { dragForm } from './form/formModule.js';
import { dragSubscribe } from './subscribe/subscribeModule.js';
import { dragList } from './list/listModule.js';
import { dragLine } from './line/lineModule.js';
import { makePreview } from '../global/global.js';

//Драг н дроп модулей
Sortable.create(Modules, {
  group: {
    name: 'content-selector',
    pull: 'clone',
    put: false
  },
  sort: false,
  animation: 150,
  emptyInsertThreshold: 1,
  ghostClass: 'green-background-class',
  onStart: function (e) {
    var el = Modules;
    $('.handle').css('display', 'none');
    $('.main-selector').each(function (ind, el) {
      $(el).find('> .content:not(:last)').addClass('border-hover');
    });
    $('.content-selector').each(function (ind, el) {
      $(el).find('> .content:not(:last)').addClass('border-hover-content');
    });
    $('.block-settings').css('display', 'none');
  },
  onEnd: function (e) {
    /*Разместить*/
    $('.border-hover').removeClass('border-hover');
    $('.border-hover-content').removeClass('border-hover-content');
    $('.handle').css('display', 'block');
    if (e.target != e.to) {
      switch (e.item.id) {
        case 'image':
          dragImage(e);
          break;

        case 'video':
          dragVideo(e);
          break;

        case 'text':
          dragText(e);
          break;

        case 'button':
          dragButton(e);
          break;
          
        case 'payForm':
          dragForm(e);
          break;
          
        case 'subscribeForm':
          dragSubscribe(e);
          break;
          
        case 'list':
          dragList(e);
          break;
          
        case 'line':
          dragLine(e);
          break;
      }
      makePreview();
    }
    $('.handle').resizer();
    $('.resizer').resizer_s();
    $('.block-resizer').block_resizer();
    $('.block-settings').css('display', 'flex');
    $('.content-block-settings').css('display', 'flex');
  }
});
