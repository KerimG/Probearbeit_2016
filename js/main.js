Vue.filter('umlaute', function (value) {
        return value.replace(/ae/g, 'ä').replace(/oe/g, 'ö').replace(/ue/g, 'ü');
    }
);

new Vue({
    el: '#content',
    data: {
        filters: [
            {filter: 'fleisch', visible: true},
            {filter: 'obst', visible: true},
            {filter: 'gemuese', visible: true}
        ],
        articles: [
            {
                image: 'resources/apfel.jpg',
                title: 'Apfel',
                category: 'obst',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                link: '#',
                visible: true
            },
            {
                image: 'resources/aubergine.jpg',
                title: 'Aubergine',
                category: 'gemuese',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                link: '#',
                visible: true
            },
            {
                image: 'resources/banane.jpg',
                title: 'Banane',
                category: 'obst',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                link: '#',
                visible: true
            },
            {
                image: 'resources/brokkoli.jpg',
                title: 'Brokkoli',
                category: 'gemuese',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                link: '#',
                visible: true
            },
            {
                image: 'resources/huhn.jpg',
                title: 'Huhn',
                category: 'fleisch',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                link: '#',
                visible: true
            },
            {
                image: 'resources/orange.jpg',
                title: 'Orange',
                category: 'obst',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                link: '#',
                visible: true
            },
            {
                image: 'resources/rind.jpg',
                title: 'Rind',
                category: 'fleisch',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                link: '#',
                visible: true
            },
            {
                image: 'resources/zucchini.jpg',
                title: 'Zucchini',
                category: 'gemuese',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lingula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                link: '#',
                visible: true
            }
        ]
    },
    methods: {
        updateVisibility: function (filter) {
            this.articles.forEach(function (article) {
                if (article.category === filter)
                    article.visible = !article.visible;
            })
        }
    }
});

$(document).ready(function () {
    $('button.menu-button').click(function () {
        $("nav > ul > li > a").toggle();
    });
    $(window).resize(function () {
        if ($(window).width() >= 960 && $("nav > ul > li > a").css("display") != "inline") {
            $("nav > ul > li > a").css("display", "inline");
        }
    });
});