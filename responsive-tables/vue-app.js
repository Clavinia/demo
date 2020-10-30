import fruits from "./data/fruits.js";

var vm = new Vue({
    el: '#vue-app',
    data: {
        fruits: fruits,
        visible: true
    },
    methods: {
        capitalizeFirstLetter: function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        unCamelCase: function (string) {
            return string
                // insert a space between lower & upper
                .replace(/([a-z])([A-Z])/g, '$1 $2')
                // space before last upper in a sequence followed by lower
                .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
                // uppercase the first character
                .replace(/^./, function (string) {
                    return string.toUpperCase();
                })
        },
        toggleVisibility: function() {
            console.log('algún día seré');
        }
    },
    computed: { 
    },
    mounted: function() {
                if ( $( '#slick-carousel-slides' ).length ) {
                    $('#slick-carousel-slides').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        arrows: false,
                        dots: true
                    });
                }
                if ( $( '#carousel-fixedcol' ).length ) {
                    $('#carousel-fixedcol').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        arrows: false,
                        dots: true
                    });
                }
                if ( $( '#slick-carousel-fixed' ).length ) {
                    $('#slick-carousel-fixed').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        arrows: false,
                        dots: true,
                        asNavFor: '.slick-carousel-fixed-header'
                    });
                }
                if ( $( '#slick-carousel-fixed-header' ).length ) {
                    $('#slick-carousel-fixed-header').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        arrows: false,
                        dots: false,
                        draggable: false,
                        cssEase: 'ease',
                        waitForAnimate: 'false',
                        asNavFor: '.slick-carousel-fixed'
                    });
                }
            }
    });