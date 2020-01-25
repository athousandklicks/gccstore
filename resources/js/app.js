/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */



window.Vue = require('vue');
import moment from 'moment';
//VueRouter configuration
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;

require('./bootstrap');
// require('./plugins');
// require('./active');

import App from './views/App'
import Home from './views/Home'
import Admin from './views/Admin'
// import Dashboard from './components/admin/Dashboard'
import Believe from './views/Believe'
import Contact from './views/Contact'
import Mission from './views/Mission'
import Sharon from './views/Sharon'
import Tunde from './views/Tunde'
import Vision from './views/Vision'
import Donate from './views/Donate'
import AllMusic from './views/AllMusic'
import Books from './views/Books'
import CDAlbums from './views/CDAlbums'
import CDSermons from './views/CDSermons'
import DigitalSermons from './views/DigitalSermons'
import Emmy from './views/Emmy'
import Japhy from './views/Japhy'
import Joey from './views/Joey'
import Lange from './views/Lange'
import Opera from './views/Opera'
import PV from './views/PV'
import ResourceBundles from './views/ResourceBundles'
import Steve from './views/Steve'
import UserBoard from './views/UserBoard'
import Feature from './views/Feature'
import PopularProducts from './views/PopularProducts'
import Register from './views/Register'
import Login from './views/Login'



//V-form configuration
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.component('Navbar', require('./views/Navbar.vue').default);
Vue.component('Footer', require('./views/Footer.vue').default);
Vue.component('Banner', require('./views/Banner.vue').default);
Vue.component('BooksBanner', require('./views/BooksBanner.vue').default);
Vue.component('FeaturedBanner', require('./views/FeaturedBanner.vue').default);
Vue.component('MusicBanner', require('./views/MusicBanner.vue').default);
Vue.component('PopularBanner', require('./views/PopularBanner.vue').default);
Vue.component('ResourceBundleBanner', require('./views/ResourceBundleBanner.vue').default);
Vue.component('SermonBanner', require('./views/SermonBanner.vue').default);
Vue.component('Feature', require('./views/Feature.vue').default);
Vue.component('PopularProducts', require('./views/PopularProducts.vue').default);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/believe',
            name: 'believe',
            component: Believe
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/mission',
            name: 'mission',
            component: Mission
        },
        {
            path: '/sharon',
            name: 'sharon',
            component: Sharon
        },
        {
            path: '/tunde',
            name: 'tunde',
            component: Tunde
        },
        {
            path: '/vision',
            name: 'vision',
            component: Vision
        },

        {
            path: '/feature',
            name: 'feature',
            component: Feature
        },

        {
            path: '/popular',
            name: 'popular',
            component: PopularProducts
        },

        {
            path: '/allmusic',
            name: 'allmusic',
            component: AllMusic
        },

        {
            path: '/books',
            name: 'books',
            component: Books
        },

        {
            path: '/cdalbums',
            name: 'cdalbums',
            component: CDAlbums
        },

        {
            path: '/cdsermons',
            name: 'cdsermons',
            component: CDSermons
        },

        {
            path: '/digitalsermons',
            name: 'digitalsermons',
            component: DigitalSermons
        },

        {
            path: '/emmy',
            name: 'emmy',
            component: Emmy
        },

        {
            path: '/japhy',
            name: 'japhy',
            component: Japhy
        },

        {
            path: '/joey',
            name: 'joey',
            component: Joey
        },

        {
            path: '/lange',
            name: 'lange',
            component: Lange
        },

        {
            path: '/opera',
            name: 'opera',
            component: Opera
        },

        {
            path: '/pv',
            name: 'pv',
            component: PV
        },

        {
            path: '/resourcebundles',
            name: 'resourcebundles',
            component: ResourceBundles
        },

        {
            path: '/steve',
            name: 'steve',
            component: Steve
        },

        {
            path: '/donate',
            name: 'donate',
            component: Donate
        },

        {
            path: '/dashboard',
            name: 'userboard',
            component: UserBoard,
            meta: {
                requiresAuth: true,
                is_user : true
            }
        },
        {
            path: '/admin/:page',
            name: 'admin-pages',
            component: Admin,
            meta: {
                requiresAuth: true,
                is_admin : true
            }
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta: {
                requiresAuth: true,
                is_admin : true
            }
        },
    ],
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
        next({
          path: '/',
          params: { nextUrl: to.fullPath }
        })
      } else {
        let user = JSON.parse(localStorage.getItem('user'))

        if(to.matched.some(record => record.meta.is_admin)) {
          if(user.is_admin == 1){
              next()
          }
          else{
              next({ name: 'userboard'})
          }
        }
        else if(to.matched.some(record => record.meta.is_user)) {
          if(user.is_admin == 0){
              next()
          }
          else{
              next({ name: 'admin'})
          }
        }
        next()
      }
    } else {
      next()
    }

    next()
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
