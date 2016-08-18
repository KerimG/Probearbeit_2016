function setFirstAndLast() {
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
        $("article.article-category." + value).toggle("display", function () {
            removeFirsAndLast();
            if ($(window).width() >= 960) {
                setFirstAndLast();
            }
        });
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
