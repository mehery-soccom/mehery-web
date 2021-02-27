<template>
  <div id="app">
 
      <link rel="stylesheet" type="text/css" 
        href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css">

    <component :is="layout">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </component>
  </div>
</template>

<script>
  import Vue from 'vue';
  import router from "./app-agent/router";
  import DataStore from "./app-agent/Service/DataStore";
  import moment from 'moment';
  import { MyFlags,MyDict,MyConst } from './app-agent/global';
  import tunnel from './services/tunnel';
  

  import numeral from 'numeral';

  const default_layout = "default";

  Vue.component('default-layout', () => import('./app-agent/Layout/DefaultLayout.vue'));

  const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
  }

  function formatTime(timestamp,gap){
    if(!timestamp){
      return "";
    }
    const NOW = new Date();
    const DATE = new Date(timestamp);
    const DIFF = moment(NOW).diff(DATE, 'day');
    
    if(DIFF < 1 && isToday(DATE)){
      return moment(DATE).format('h:mm a');
    } else if(DIFF < 3 ){
      return moment(DATE).format('hh:mm a ddd');
    } else if(DIFF < 7 ){
      return moment(DATE).format('h:mm a ddd');
    } else {
      return moment(DATE).format('h:mm a DD MMM YY');
    }
  }
  Vue.filter('formatDate', formatTime);
  Vue.filter('newlines', function (html_str) {
      return html_str.trim() ;//.replace(/(?:\r\n|\r|\n)/g, '<br/>').trim();
  });
  Vue.filter('number', function (value) {
      return numeral(value).format("0,0a").toUpperCase();//.replace(/(?:\r\n|\r|\n)/g, '<br/>').trim();
  });
  Vue.filter('timespan', function (value) {
      if(value<60){
        return value + ' sec';
      } else if(value<3600){
        return value/60 + ' min';
      } else {
        return value/3600 + ' hrs';
      }
      return moment(value).format("0.0").toLowerCase();//.replace(/(?:\r\n|\r|\n)/g, '<br/>').trim();
  });
  Vue.filter('striphtml', function (value) {
    var div = document.createElement("div");
    div.innerHTML = value;
    var text = div.textContent || div.innerText || "";
    return text;
  });
  Vue.filter('thumburl', function (mediaUrl) {
    var m = mediaUrl.match(/(.+)\/(res.cloudinary.com)\/([a-zA-Z0-9-_]+)\/([a-zA-Z0-9]+)\/(upload)\/([a-zA-Z0-9,_-]+)\/(.*)/);
    if(m && m.length){
      m[6] = "w_100,h_100";
      return m.slice(1).join("/");
    }
  });

  var LOADED_JS = {};

  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    },
    data: () => ({
    }),
    methods : {

    },
    created (){
      this.$store.registerModule("DataStore",DataStore);
    },
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/1153462312.js')
      document.head.appendChild(recaptchaScript);
      
   

      let css = document.createElement('link');
      css.setAttribute('rel', 'stylesheet');
      css.setAttribute('type', 'text/css');
      css.setAttribute('href', '//www.w3schools.com/w3css/4/w3.css')
      document.head.appendChild(css);

      var THAT =  this;

      tunnel.init().instance()
        .on("/agent/onmessage", function(msg){
            console.log("/agent/onmessage", msg, msg.messageIdExt);
            msg.version = 3;
            THAT.$store.dispatch('ReadChat', msg);
        }).on("/dept/onassign-"+window.CONST.APP_DEPT, function(testresponse){
          console.log("/dept/onassign-"+window.CONST.APP_DEPT, testresponse);
          THAT.$store.dispatch('AddChat', testresponse);
        }).on("/dept/onassign-__DEPT__", function(testresponse){
           console.log("/dept/onassign-__DEPT__", testresponse);
           THAT.$store.dispatch('AddChat', testresponse);
        });
    },
    beforeUnmount (){
        console.log("====beforeUnmount")
        this.tunnel.off();
    },
  }
</script>
