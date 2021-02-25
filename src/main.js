
import './preloader'
import Vue from 'vue'

import mainrouter from './router';
import store from './store';
import axios from 'axios';

import BootstrapVue from "bootstrap-vue"

import AppAdmin from './AppAdmin'
import AppAgent from './AppAgent'
import AppDev from './AppDev'

axios.defaults.withCredentials = true
axios.defaults.baseURL = (function() {
	var origin  = window.location.origin
	if(window.CONST && window.CONST.APP_CONTEXT){
		return origin +window.CONST.APP_CONTEXT
	}
	return origin
})();
console.log("ADMIN====",axios.defaults.baseURL);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

;(function mapper(condition){ //Funtion
	var result = (typeof condition == "function") ? condition() : condition;
	return function (option,execute) {
		if(option == result){
			execute(result);
		}
		return mapper(result);
	}
})(function () { //Condition
	return window.CONST.APP
})("admin",function (admin) { //Admin App
    new Vue({
	  el: '#app',
	  store,
	  router : mainrouter.router(),
	  template: '<AppAdmin/>',
	  components: { AppAdmin }
	});

})("agent", function(agent){ //Agent App
   new Vue({
	  el: '#app',
	  store,
	  router : mainrouter.router(),
	  template: '<AppAgent/>',
	  components: { AppAgent }
	});
})("dev", function(agent){ //Agent App
   new Vue({
	  el: '#app',
	  store,
	  router : mainrouter.router(),
	  template: '<AppDev/>',
	  components: { AppDev }
	});
});









