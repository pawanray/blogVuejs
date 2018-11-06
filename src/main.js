// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/'
import vueResource from 'vue-resource'
 import store from './store/store'
import FBSignInButton from 'vue-facebook-signin-button'

Vue.use(FBSignInButton)


Vue.use(vueResource);
Vue.config.productionTip = false




/* eslint-disable no-new */

new Vue({
  el: '#app',
  created: function() {
    console.log('created main');
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '329584020835595',
        xfbml      : true,
        version    : 'v2.7'
      });

      //This function should be here, inside window.fbAsyncInit
      FB.getLoginStatus(function(response) {
        console.log(response);
     });

   };

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },

    router,
    store,
    template: '<App/>',
    components: { App }
  

  
});

// new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: { App }
// })
