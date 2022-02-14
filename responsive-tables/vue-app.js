import fruits from "./data/fruits.js";
import { createApp } from 'vue';

function hideButton(id) {
    document.getElementById(id).classList.toggle('hidden');
}

const app = createApp({
    data() {
        return {
            fruits: fruits,
            hidden: true,
            popupVisible: false
        }
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
        toggleHide: function (id) {
            hideButton(id);
        }
    },
    computed: {
        compClasses: function () {
            return {
                hidden: this.hidden,
            }
        }
    },
    mounted: function () {
        if ($('#slick-carousel-slides').length) {
            $('#slick-carousel-slides').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                arrows: false,
                dots: true
            });
        }
        if ($('#carousel-fixedcol').length) {
            $('#carousel-fixedcol').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                arrows: false,
                dots: true
            });
        }
        if ($('#slick-carousel-fixed').length) {
            $('#slick-carousel-fixed').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                arrows: false,
                dots: true,
                asNavFor: '.slick-carousel-fixed-header'
            });
        }
        if ($('#slick-carousel-fixed-header').length) {
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
        if ($('#data-tables-lib').length) {
            var table = $('#data-tables-lib').DataTable({
                "paging": false,
                "ordering": true,
                "scrollX": true,
                fixedColumns: {
                    leftColumns: 1
                },
                fixedHeader: {
                    header: true,
                    footer: false
                },
                "columnDefs": [
                    {
                        "targets": [ 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 ],
                        "visible": false,
                    }
                ]
            });
            $('.toggle-vis').on('click', function (e) {
                // e.preventDefault();
                // Get the column API object
                var column = table.column($(this).attr('data-column'));
                // Toggle the visibility
                column.visible(!column.visible());
            });
        }
    }
});

// window.vueApp = app;

app.mount('#vue-app');