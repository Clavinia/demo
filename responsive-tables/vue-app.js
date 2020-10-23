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
 
    }
    });