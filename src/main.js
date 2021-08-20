import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Firebase from "firebase"
import axios from "axios"
import VueSocialChat from 'vue-social-chat'
import{ init } from 'emailjs-com'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(VueSocialChat)
Vue.use(axios)
Vue.use(VueMeta)

init("user_Fmab8GDJG04zyyeiq2Ika")

 var firebaseConfig = {
    apiKey: "AIzaSyCgfImYLwH9vwHUv4fTsL6Wg7iQGepxUWY",
    authDomain: "equipos-mineros-1.firebaseapp.com",
    projectId: "equipos-mineros-1",
    storageBucket: "equipos-mineros-1.appspot.com",
    messagingSenderId: "698973651803",
    appId: "1:698973651803:web:04ca148ec693b12516907e"
  };
Firebase.initializeApp(firebaseConfig);

/* eslint-disable */

new Vue({
  router,
  store,
  vuetify,
  Firebase,
  axios,
  render: h => h(App)
}).$mount('#app')
