/* function setFirstAndLast() {
    var firstElements, lastElements;
    if ($(window).width() > 1260) {
        firstElements = 5;
        lastElements = 4;
    } else {
        firstElements = 4;
        lastElements = 3;
    }
    $("section article:visible").each(function (iter) {
        if (iter == 0 || (iter + 1) % firstElements == 0) {
            $(this).addClass("first-in-row");
        }
        if (iter > 0 && (iter + 1) % lastElements == 0) {
            $(this).addClass("last-in-row");
        }
    });
}

function removeFirsAndLast() {
    $("article.first-in-row").removeClass("first-in-row");
    $("article.last-in-row").removeClass("last-in-row");
}

$(document).ready(function () {

    var oldWindowSize;
    if ($(window).width() >= 960) {
        setFirstAndLast();
        oldWindowSize = $(window).width();
    }
    $("input").change(function () {
        var value = $(this).val();
        $("article.article-category." + value).toggle();
        removeFirsAndLast();
        if ($(window).width() >= 960) {
            setFirstAndLast();
        }
    });
    $(window).resize(function () {

        if ((oldWindowSize > 1259 && $(window).width() <= 1259 && $(window).width() >= 960) ||
            (oldWindowSize > 960 && oldWindowSize <= 1259 && $(window).width() >= 1260) ||
            (oldWindowSize < 959 && $(window).width() >= 960)){
            oldWindowSize = $(window).width();
            removeFirsAndLast();
            setFirstAndLast();
        }

        if ($(window).width() <= 959) {
            oldWindowSize = $(window).width();
            removeFirsAndLast();
        }
    });
});
*/

new Vue({
    el: '#content',

    data: {
        articles: [
            { image: 'resources/apfel.jpg', title: 'Apfel', category: 'obst', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', link: '#'},
            { image: 'resources/aubergine.jpg', title: 'Aubergine', category: 'gemuese', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', link: '#'},
            { image: 'resources/banane.jpg', title: 'Banane', category: 'obst', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', link: '#'},
            { image: 'resources/brokkoli.jpg', title: 'Brokkoli', category: 'gemuese', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', link: '#'},
            { image: 'resources/huhn.jpg', title: 'Huhn', category: 'fleisch', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', link: '#'},
            { image: 'resources/orange.jpg', title: 'Orange', category: 'obst', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', link: '#'},
            { image: 'resources/rind.jpg', title: 'Rind', category: 'fleisch', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', link: '#'},
            { image: 'resources/zucchini.jpg', title: 'Zucchini', category: 'gemuese', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', link: '#'}
        ]
    }
})