function randomColor(t) {
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
    var colorB = Math.floor((Math.random() * 256));
    $(t).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
}

function getRandomColor()
{
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
    var colorB = Math.floor((Math.random() * 256));
    return "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}


//Возможность перетягивания основного селектора с панели элементов


/*Sortable.create(mainSelector,
    {
        group: {
            name: 'main',
            pull: 'clone',
        },
        sort: false,
        filter: '.handle, .resizer',
        animation: 100,

        onEnd: function (e) {
            if (e.target != e.to) {
                switch (e.item.id) {
                    case 'main-selector-1':
                    {
                        $(e.item).removeAttr('id').removeClass('main-module').addClass('main-selector').html('<div class="col-md-12 content" style="background: blueviolet; min-height: 80px;"></div><div class="resizer"></div>');
                        break;
                    }
                    case 'main-selector-2':
                    {
                        $(e.item).removeAttr('id').removeClass('main-module').addClass('main-selector').html('<div class="col-md-6 content" style="background: green; min-height: 80px;"><div class="handle"></div></div><div class="col-md-6 content" style="background: fuchsia; min-height: 80px;"></div><div class="resizer"></div>');
                        break;
                    }
                    case 'main-selector-3':
                    {
                        $(e.item).removeAttr('id').removeClass('main-module').addClass('main-selector').html('<div class="col-md-4 content" style="background: green; min-height: 80px;"><div class="handle"></div></div><div class="col-md-4 content" style="background: tomato; min-height: 80px;"><div class="handle"></div></div><div class="col-md-4 content" style="background: chartreuse; min-height: 80px;"></div><div class="resizer"></div>');
                        break;
                    }
                    case 'main-selector-4':
                    {
                        $(e.item).removeAttr('id').removeClass('main-module').addClass('main-selector').html('<div class="col-md-3 content" style="background: darkcyan; min-height: 80px;"><div class="handle"></div></div><div class="col-md-3 content" style="background: navajowhite; min-height: 80px;"><div class="handle"></div></div><div class="col-md-3 content" style="background: forestgreen; min-height: 80px;"><div class="handle"></div></div><div class="col-md-3 content" style="background: greenyellow; min-height: 80px;"></div><div class="resizer"></div>');
                        break;
                    }
                }

                randomColor(e.item);
            }

            var el = $('.content');

            el.each(function () {
                Sortable.create($(this).get(0),
                    {
                        group: {
                            name: 'content',
                            put: ['content']
                        },
                        filter: '.handle, .resizer',
                    });
            });
            $('.handle').resizer();
            $('.resizer').resizer_s();

        }
    });*/


//Перетягивание основных селекторов внутри контейнера
Sortable.create(mainArea,
    {
        group: {
            name: 'main',
            put: ['main'],
            pull: false
        },
        filter: '.resizer',
        animation: 100,
    });

//Перетягивание контентового селектора с панели элементов
Sortable.create(contentSelector,
    {
        group: {
            name: 'content',
            pull: 'clone',
            put: false,
        },
        sort: false,
        animation: 100,

        onStart: function (evt) {
            $('.handle').css('display', 'none');

        },

        onEnd: function (e) {
            $('.handle').css('display', 'block');

            if (e.target != e.to) {
                switch (e.item.id) {
                    case 'content-selector-1':
                    {
                        var selector1 = '<div class="row"><div class="col-md-12 content-selector" style="min-height: 80px; background:'+getRandomColor()+'"><div class="resizer"></div></div></div>';
                        $(e.item).replaceWith(selector1);
                        console.log(getRandomColor());
                        // $(e.item).removeAttr('id').removeClass('content-module').removeClass('.row').addClass('.col-md-12').addClass('content-selector').html('<div class="col-md-12" style="background: red; min-height: 80px;"></div><div class="resizer"></div>');
                        break;
                    }
                    case 'content-selector-2':
                    {
                        var selector2 = '<div class="col-md-6 content-selector" style="background:'+getRandomColor()+' min-height: 80px;"><div class="handle"></div></div><div class="col-md-6 content-selector" style="background:'+getRandomColor()+' min-height: 80px;"></div><div class="resizer"></div>';
                        $(e.item).replaceWith(selector2);
                        break;
                    }
                    case 'content-selector-3':
                    {
                        $(e.item).removeAttr('id').removeClass('content-module').addClass('main-selector').html('<div class="col-md-4 content" style="background: lime; min-height: 80px;"><div class="handle"></div></div><div class="col-md-4 content" style="background: hotpink; min-height: 80px;"><div class="handle"></div></div><div class="col-md-4 content" style="background: paleturquoise; min-height: 80px;"></div><div class="resizer"></div>');
                        break;
                    }
                    case 'content-selector-4':
                    {
                        $(e.item).removeAttr('id').removeClass('content-module').addClass('main-selector').html('<div class="col-md-3 content" style="background: chocolate; min-height: 80px;"><div class="handle"></div></div><div class="col-md-3 content" style="background: chartreuse; min-height: 80px;"><div class="handle"></div></div><div class="col-md-3 content" style="background: navy; min-height: 80px;"><div class="handle"></div></div><div class="col-md-3 content" style="background: coral; min-height: 80px;"></div><div class="resizer"></div>');
                        break;
                    }
                }
                randomColor(e.item);
            }

            var el2 = $('.content-selector');

            el2.each(function () {
                Sortable.create($(this).get(0),
                    {
                        group: {
                            name: 'content',
                        },
                        filter: '.resizer',
                    });
            });
            $('.handle').resizer();
            $('.resizer').resizer_s();


        }

    });


//
var el = $('.content');

el.each(function () {

    Sortable.create($(this).get(0),
        {
            group: {
                name: 'content',
                put: ['content']
            },
            filter: '.handle, .resizer',
            onStart: function (evt) {
                $('.handle').css('display', 'none');
            },
            onEnd: function (evt) {
                $('.handle').css('display', 'block');
            }
        });
});