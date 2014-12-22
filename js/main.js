$(document).ready(function(){

    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'flippant',
        clientId: '49f5df8123e34a99985f415b635004f7',
        template: '<a href="{{link}}"><img src="http://{{image}}" /></a>',
        limit: 30
    });
    feed.run();

});
