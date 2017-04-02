/**
 * Created by zhy on 2017/4/1.
 */
'use strict';

/**
 * vue-divarea
 * @author hinesboy
 */

const autoTextarea = require('./autoTextarea.vue');

const VueAutoTextarea = {
    autoTextarea: autoTextarea,
    install: function(Vue) {
        Vue.component('autoTextarea', autoTextarea);
    },
};

module.exports = VueAutoTextarea;