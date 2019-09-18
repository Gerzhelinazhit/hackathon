import Vue from 'vue';
require('./bootstrap');
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import router from './router.js'
import App from './components/App.vue'

Vue.component('my-button', require('./components/MyButton.vue').default);
//Vue.component('app', require('./components/App.vue').default);

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router
});

