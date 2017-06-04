
require('./bootstrap');

import Vue from 'vue'
import App from './App'

import Router from './router'

const app = new Vue({
    el: '#app',
    router: Router,
    render: h => h(App)
});
