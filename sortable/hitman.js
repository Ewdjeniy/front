function getRandomColor() {
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
    var colorB = Math.floor((Math.random() * 256));
    return "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}

function getRandom()
{
    var d1 = Math.floor((Math.random() * 100000));
    var d2 = Math.floor((Math.random() * 100000));
    var d3 = Math.floor((Math.random() * 100000));
    return d1 + "" + d2 + "" + d3;
}

Sortable.create(mainArea,
    {
        group:
        {
            name: 'main',
            put: 'main-selector'
        },
        draggable: '.main-selector',
        filter: '.resizer, .handle, .block-resizer',
        onStart: function(evt)
        {
            jQuery('.content').css('display', 'none');
            $('.block-settings').css('display', 'none');
        },
        onEnd: function(evt)
        {
            jQuery('.content').css('display', 'block');
            $('.block-settings').show();
        }
    });

Sortable.create(mainSelector,
    {
        group: {
            name: 'main-selector',
            pull: 'clone',
        },
        filter: '.resizer, .handle, .block-resizer',
        sort: false,
        onStart: function(e)
        {
          $('#left-sidebar').hide();
        },
        onEnd: function (e) {
            $('#left-sidebar').show();
            if (e.target != e.to) {
                switch (e.item.id) {
                    case 'main-selector-1':
                    {
                        var selector1 = '<div class="row main-selector" style="background:' + getRandomColor() + '"><div class="block-settings"> <div class="settings">S</div> <div class="copy">C</div> <div class="remove">R</div></div><div class="col-md-12 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="block-resizer"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector1);

                            var id = $(selector1).find('.content').attr('id');

                            Sortable.create($("#"+id+"").get(0),
                                {
                                    group:'content-selector',
                                    put: 'content-selector',
									filter: '.resizer, .handle, .block-resizer',
                                    sort: false,
                                });
                        break;
                    }
                    case 'main-selector-2':
                    {
                        var selector2 = '<div class="row main-selector" style="background:' + getRandomColor() + '"><div class="block-settings"> <div class="settings">S</div> <div class="copy">C</div> <div class="remove">R</div></div><div class="col-md-6 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div> </div><div class="col-md-6 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="block-resizer"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector2);

                        $(selector2).find('.content').each(function()
                        {
                            Sortable.create($("#"+$(this).attr('id')+"").get(0),
                                {
                                    group:'content-selector',
                                    put: 'content-selector',
									filter: '.resizer, .handle, .block-resizer',
                                    sort: false,
                                });
                        });

                        break;
                    }
                    case 'main-selector-3':
                    {
                        var selector3 = '<div class="row main-selector" style="background:' + getRandomColor() + '"><div class="block-settings"> <div class="settings">S</div> <div class="copy">C</div> <div class="remove">R</div></div><div class="col-md-4 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div> </div><div class="col-md-4 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-4 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="block-resizer"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector3);
                        $(selector3).find('.content').each(function()
                        {
                            Sortable.create($("#"+$(this).attr('id')+"").get(0),
                                {
                                    group:'content-selector',
                                    put: 'content-selector',
									filter: '.resizer, .handle, .block-resizer',
                                    sort: false,
                                });
                        });
                        break;
                    }
                    case 'main-selector-4':
                    {
                        var selector4 = '<div class="row main-selector" style="background:' + getRandomColor() + '"><div class="block-settings"> <div class="settings">S</div> <div class="copy">C</div> <div class="remove">R</div></div><div class="col-md-3 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div> </div><div class="col-md-3 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-3 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-3 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="block-resizer"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector4);
                        $(selector4).find('.content').each(function()
                        {
                            Sortable.create($("#"+$(this).attr('id')+"").get(0),
                                {
                                    group:'content-selector',
                                    put: 'content-selector',
									filter: '.resizer, .handle, .block-resizer',
                                    sort: false,
                                });
                        });
                        break;
                    }
                }
            }

            /*var elem = $('.main-selector .content');
            elem.each(function () {
                console.log(elem);
                console.log($(this).get(0));
                var t = Sortable.create($(this).get(0),
                    {
                        group: 'content-selector',
                        put: 'content-selector',
                        pull: 'clone',
                        sort: false,
                        onStart: function(evt)
                        {
                            $('.handle').css('display', 'none');
                        },
                        onEnd: function(evt)
                        {
                            $('.handle').css('display', 'block');
                        }
                    });
            });*/

            /*var element = $('.main-selector .content')
            {
                element.each(function(ind,el)
                {
                    Sortable.create($(this).get(0),
                        {
                            group: 'fucking',
                            onStart: function(evt)
                            {
                                console.log("����!");
                            }
                        })
                })
            }*/


            $('.handle').resizer();
            $('.resizer').resizer_s();
            $('.block-resizer').block_resizer();
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
		filter: '.resizer, .handle, .block-resizer',
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
                        var selector1 = '<div class="col-md-12 content-selector" style="min-height:80px; background:' + getRandomColor() + '"><div class="block-settings"> <div class="settings">S</div> <div class="copy-content">C</div> <div class="remove-content">R</div></div><div class="col-md-12 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="block-resizer"></div><div class="resizer"></div> </div>';
                        $(e.item).replaceWith(selector1);
                        var id = $(selector1).find('.content').attr('id');

                        Sortable.create($("#"+id+"").get(0),
                            {
                                group:'content-selector',
                                put: 'content-selector',
                                sort: false,
								filter: '.resizer, .handle, .block-resizer',
                            });
                        break;
                    }
                    case 'content-selector-2':
                    {
                        var selector2 = '<div class="col-md-12 content-selector" style="min-height:80px; background:' + getRandomColor() + '"><div class="block-settings"> <div class="settings">S</div> <div class="copy-content">C</div> <div class="remove-content">R</div></div><div class="col-md-6 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-6 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="block-resizer"></div><div class="resizer"></div></div>';
                        $(e.item).replaceWith(selector2);

                        $(selector2).find('.content').each(function()
                        {
                            Sortable.create($("#"+$(this).attr('id')+"").get(0),
                                {
                                    group:'content-selector',
                                    put: 'content-selector',
                                    sort: false,
									filter: '.resizer, .handle, .block-resizer',
                                });
                        });
                        break;
                    }
                    case 'content-selector-3':
                    {
                        var selector3 = '<div class="col-md-12 content-selector" style="min-height:80px; background:' + getRandomColor() + '"><div class="block-settings"> <div class="settings">S</div> <div class="copy-content">C</div> <div class="remove-content">R</div></div><div class="col-md-4 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-4 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div> <div class="col-md-4 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="block-resizer"></div><div class="resizer"></div></div>';
                        $(e.item).replaceWith(selector3);
                        $(selector3).find('.content').each(function()
                        {
                            Sortable.create($("#"+$(this).attr('id')+"").get(0),
                                {
                                    group:'content-selector',
                                    put: 'content-selector',
                                    sort: false,
									filter: '.resizer, .handle, .block-resizer',
                                });
                        });
                        break;
                    }
                    case 'content-selector-4':
                    {
                        var selector4 = '<div class="col-md-12 content-selector" style="min-height:80px; background:' + getRandomColor() + '"><div class="block-settings"> <div class="settings">S</div> <div class="copy-content">C</div> <div class="remove-content">R</div></div><div class="col-md-3 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-3 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div><div class="col-md-3 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"><div class="handle"></div></div> <div class="col-md-3 content" id="'+getRandom()+'" style="min-height:80px; background:' + getRandomColor() + '"></div><div class="block-resizer"></div><div class="resizer"></div></div>';
                        $(e.item).replaceWith(selector4);
                        $(selector4).find('.content').each(function()
                        {
                            Sortable.create($("#"+$(this).attr('id')+"").get(0),
                                {
                                    group:'content-selector',
                                    put: 'content-selector',
                                    sort: false,
									filter: '.resizer, .handle, .block-resizer',
                                });
                        });
                        break;
                    }
                }
            }

           /* var elem = $('.content');
            elem.each(function () {
                var t = Sortable.create($(this).get(0),
                    {
                        group: 'content-selector',
                        put: 'content-selector',
                        pull: 'clone',
                        sort: false,
                        onStart: function(evt)
                        {
                            $('.handle').css('display', 'none');
                        },
                        onEnd: function(evt)
                        {
                            $('.handle').css('display', 'block');
                        }
                    });
            });*/
            //everyDay();
            $('.handle').resizer();
            $('.resizer').resizer_s();
            $('.block-resizer').block_resizer();
        },
    })