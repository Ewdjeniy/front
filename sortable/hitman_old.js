function getRandomColor() {
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
    var colorB = Math.floor((Math.random() * 256));
    return "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}

Sortable.create(mainArea,
    {
        group:
        {
            name: 'main',
            put: 'main-selector'
        },
        draggable: '.main-selector',
        filter: '.resizer, .handle',
    });


function everyDay()
{
    var el = $('.content');

    el.each(function(ind,el)
    {
       Sortable.create(el,
           {
                group:
                {
                    name: 'content',
                    put:'content-selector'
                },
               filter:'.handle, .resizer',
           });
    });
}


Sortable.create(mainSelector,
    {
        group: {
            name: 'main-selector',
            pull: 'clone',
        },
        filter: '.handle, .resizer',
        sort: false,
        onEnd: function (e) {
            if (e.target != e.to) {
                switch (e.item.id) {
                    case 'main-selector-1':
                    {
                        var selector1 = '<div class="row main-selector" style="background:' + getRandomColor() + '"><div class="col-md-12 content" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector1);
                        break;
                    }
                    case 'main-selector-2':
                    {
                        var selector2 = '<div class="row main-selector" style="background:' + getRandomColor() + '"><div class="col-md-6 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div> </div><div class="col-md-6 content" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector2);
                        break;
                    }
                    case 'main-selector-3':
                    {
                        var selector3 = '<div class="row main-selector" style="background:' + getRandomColor() + '"><div class="col-md-4 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div> </div><div class="col-md-4 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-4 content" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector3);
                        break;
                    }
                    case 'main-selector-4':
                    {
                        var selector4 = '<div class="row main-selector" style="background:' + getRandomColor() + '"><div class="col-md-3 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div> </div><div class="col-md-3 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-3 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-3 content" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector4);
                        break;
                    }
                }
            }
            everyDay();
            $('.handle').resizer();
            $('.resizer').resizer_s();
        },
    });

Sortable.create(contentSelector,
    {
        group:
        {
            name: 'content-selector',
            pull: 'clone'
        },
        sort:false,
        onStart: function(evt)
        {
            $('.handle').css('display', 'none');

        },
        onEnd: function (e) {
            $('.handle').css('display', 'block');
            if (e.target != e.to) {
                switch (e.item.id) {
                    case 'content-selector-1':
                    {
                        var selector1 = '<div class="row content-selector" style="background:' + getRandomColor() + '"><div class="col-md-12 content" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector1);
                        break;
                    }
                    case 'content-selector-2':
                    {
                        var selector2 = '<div class="row content-selector" style="background:' + getRandomColor() + '"><div class="col-md-6 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div> </div><div class="col-md-6 content" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector2);
                        break;
                    }
                    case 'content-selector-3':
                    {
                        var selector3 = '<div class="row content-selector" style="background:' + getRandomColor() + '"><div class="col-md-4 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div> </div><div class="col-md-4 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-4 content" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector3);
                        break;
                    }
                    case 'content-selector-4':
                    {
                        var selector4 = '<div class="row content-selector" style="background:' + getRandomColor() + '"><div class="col-md-3 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div> </div><div class="col-md-3 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-3 content" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-3 content" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector4);
                        break;
                    }
                }
            }
            everyDay();
            $('.handle').resizer();
            $('.resizer').resizer_s();
        },
    })