import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import $ from 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/sass/app.scss'
import moment from 'moment'

window.axios = require('axios')
window.$ = $

Vue.config.productionTip = false

Vue.filter('formattedDate', function (date) {
  return moment(date).format('LLL');
})

$('#view_riid_full').on('click', function () {
  console.log('Ola');
  var modal = document.getElementById('riid_full');
  modal.style.display = 'block';

  $('#closeRiidFull').on('click', function () {
    modal.style.display = 'none';
  });
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


