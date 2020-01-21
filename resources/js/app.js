/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
//VueRouter configuration
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './views/App'
import Home from './views/Home'
import Admin from './components/admin/Admin'
import Dashboard from './components/admin/Dashboard'
//import Home from './views/Home'


//V-form configuration
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.component('Navbar', require('./views/Navbar.vue').default);
Vue.component('Footer', require('./views/Footer.vue').default);
Vue.component('Banner', require('./views/Banner.vue').default);
Vue.component('Feature', require('./views/Feature.vue').default);
Vue.component('Prod', require('./views/Prod.vue').default);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/admin/:page',
            name: 'admin-pages',
            component: Admin,

        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
        },
    ],
})



Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){
    return moment(created).format('MMMM Do YYYY');
});

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '5px'
  })


import swal from 'sweetalert2';
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
  })
  window.toast = toast;

  window.FireEvent =  new Vue();


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
