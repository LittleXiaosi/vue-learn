import Vue from 'vue'
import App2 from './App2';

Vue.config.productionTip = false

new Vue({
    render(h) {
        return h(App2)
    },
    el: '#app'
})
