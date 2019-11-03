function randomColor(t) {
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
    var colorB = Math.floor((Math.random() * 256));
    $(t).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
}


//Возможность перетягивания основного селектора с панели элементов

Sortable.create(mainSelector,
    {
        group: {
            name: 'main',
            pull: 'clone',
        },
        animation: 100,

        onEnd: function (e) {
            if (e.target != e.to) {
                //var t = Math.floor(Math.random() * (50 - 1) + 1);
                $(e.item).removeAttr('id').removeClass('main-selector-block').addClass('main-selector').html('<div class="col-md-12 content" style="background: green; min-height: 80px;"></div>');
                randomColor(e.item);
            }

            var el = $('.content');

            el.each(function () {
                Sortable.create($(this).get(0),
                    {
                        group: {
                            name: 'content',
                            put: ['content']
                        }
                    });
            });

        }
    });


//Перетягивание основных селекторов внутри контейнера
Sortable.create(Main,
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
        animation: 100,

        onStart: function(evt)
        {
            $('.handle').css('display', 'none');

        },

        onEnd: function (e) {
            $('.handle').css('display', 'block');

            if (e.target != e.to) {
                $(e.item).css({
                    'min-height': '50px',
                    width: '100%'
                }).removeAttr('id').addClass('col-md-12 content-selector');
                randomColor(e.item);
            }
            var el2 = $('.content-selector');

            el2.each(function () {
            Sortable.create($(this).get(0),
                {
                    group: {
                        name: 'content',
                    }
                });
            });


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
            filter: '.handle',
            onStart: function(evt)
            {
                $('.handle').css('display', 'none');
            },
            onEnd: function(evt)
            {
                $('.handle').css('display', 'block');
            }
        });
});