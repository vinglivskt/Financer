import Vue from 'vue'
import Vuelidate from 'vuelidate';
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import Loader from "./components/app/Loader";
import dateFilter from "./filters/date.filter";
import tooltipDirective from './directivers/tooltip.directive'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import currencyFilter from "./filters/currencyFilter";

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date',dateFilter)
Vue.filter('currency',currencyFilter)
Vue.directive('tooltip',tooltipDirective)
Vue.component('Loader',Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyCxLJxS4W_gaT1oEBz3wbj8BNE6Ur6ulWg",
  authDomain: "financer-52402.firebaseapp.com",
  projectId: "financer-52402",
  storageBucket: "financer-52402.appspot.com",
  messagingSenderId: "149105615578",
  appId: "1:149105615578:web:c6a99574d29e4b642c3be3",
  measurementId: "G-9YV6WZ73Q4"
})
let app
firebase.auth().onAuthStateChanged(() =>{
  if(!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

