
import './preloader'
import Vue from 'vue'
import router from './router'
import store from './store';
import axios from 'axios';

import BootstrapVue from "bootstrap-vue"

import App from './App'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';

axios.defaults.withCredentials = true
axios.defaults.baseURL = (function() {
	var origin  = window.location.origin
	if(window.CONST && window.CONST.APP_CONTEXT){
		return origin + "/" +window.CONST.APP_CONTEXT
	}
	return origin
})();
console.log("====",axios.defaults.baseURL);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
