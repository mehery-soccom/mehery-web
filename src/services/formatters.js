import Vue from 'vue';
import moment from 'moment';
import numeral from 'numeral';

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
  Vue.filter('number', function (value,format) {
      var _format = format || "0,0a"
      return numeral(value).format(_format).toUpperCase();//.replace(/(?:\r\n|\r|\n)/g, '<br/>').trim();
  });
  var HOUR = 3600;
  var DAY = HOUR*24;
  var WEEK = DAY*7;
  Vue.filter('timespan', function (value) {
      if(value<60){
        return numeral(value).format("0.0") + ' sec';
      } else if(value<HOUR){
        return numeral(value/60).format("0.0") + ' min';
      } else if(value<DAY){
        return numeral(value/3600).format("0.0") + ' hrs';
      } else if(value<WEEK){
        return numeral(value/DAY).format("0.0") + ' days';
      } else if(value>=WEEK){
        return numeral(value/WEEK).format("0.0a") + ' wks';
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

export default {
	init : function () {
	},
	instance : function (argument) {
	},

}