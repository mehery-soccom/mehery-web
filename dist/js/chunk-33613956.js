(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33613956"],{"0ce3":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,daterange:t.input.daterange},on:{dateRangeOnUpdate:t.dateRangeOnUpdate}}),e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"no-gutters row"},[e("div",{staticClass:"col-md-12 col-lg-4"},[e("ul",{staticClass:"list-group list-group-flush"},[e("li",{staticClass:"bg-transparent list-group-item"},[e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-outer"},[e("div",{staticClass:"widget-content-wrapper"},[t._m(0),e("div",{staticClass:"widget-content-right"},[e("div",{staticClass:"widget-numbers text-success"},[t._v(t._s(t._f("number")(t.summary.uniqueConversation)))])])])])])]),e("li",{staticClass:"bg-transparent list-group-item"},[e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-outer"},[e("div",{staticClass:"widget-content-wrapper"},[t._m(1),e("div",{staticClass:"widget-content-right"},[e("div",{staticClass:"widget-numbers text-primary"},[t._v(t._s(t._f("number")(t.summary.totalMsgExchanged)))])])])])])])])]),e("div",{staticClass:"col-md-12 col-lg-4"},[e("ul",{staticClass:"list-group list-group-flush"},[e("li",{staticClass:"bg-transparent list-group-item"},[e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-outer"},[e("div",{staticClass:"widget-content-wrapper"},[e("div",{staticClass:"widget-content-left"},[e("div",{staticClass:"widget-heading"},[t._v("Lead Messenger")]),t.summary.leadMessanger&&t.summary.leadMessanger.contactType?e("div",{staticClass:"widget-subheading"},[t._v(t._s(t.summary.leadMessanger.contactType.replace("MESSAGE_","")))]):t._e()]),e("div",{staticClass:"widget-content-right"},[t.summary.leadMessanger&&t.summary.leadMessanger.contactType?e("div",{staticClass:"widget-numbers text-danger"},[t._v(t._s(t.summary.leadMessanger.percentage)),e("small",{staticClass:"opacity-5"},[t._v("%")])]):t._e()])])])])]),t._m(2)])]),e("div",{staticClass:"col-md-12 col-lg-4"},[e("ul",{staticClass:"list-group list-group-flush"},[e("li",{staticClass:"bg-transparent list-group-item"},[e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-outer"},[e("div",{staticClass:"widget-content-wrapper"},[t._m(3),e("div",{staticClass:"widget-content-right"},[e("div",{staticClass:"widget-numbers text-success"},[t._v(t._s(t._f("timespan")(t.summary.startLag)))])])])])])]),e("li",{staticClass:"bg-transparent list-group-item"},[e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-outer"},[e("div",{staticClass:"widget-content-wrapper"},[t._m(4),e("div",{staticClass:"widget-content-right"},[e("div",{staticClass:"widget-numbers text-primary"},[t._v(t._s(t._f("timespan")(t.summary.converDuration)))])])])])])])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-xl-3"},[e("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-success border-success"},[e("div",{staticClass:"widget-chat-wrapper-outer"},[e("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[e("div",{staticClass:"widget-chart-flex"},[e("div",{staticClass:"widget-numbers"},[e("div",{staticClass:"widget-chart-flex"},[e("div",{staticClass:"fsize-4"},[e("small",{staticClass:"opacity-5"}),e("span",[t._v(t._s(t._f("number")(t.summary.openConversation)))])])])])]),e("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("Open Conversations")])])])])]),t._m(5),t._m(6),t._m(7)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-xl-6"},[e("b-card",{key:t.chart.updated,staticClass:"main-card mb-3",attrs:{title:"Messages - Team"}},[e("lineeg",{attrs:{cdata:t.chart.summary}})],1)],1),e("div",{staticClass:"col-md-6 col-xl-6"},[e("b-card",{key:t.chart.updated,staticClass:"main-card mb-3",attrs:{title:"Messages - Individuals"}},[e("lineeg",{attrs:{cdata:t.chart.summaries}})],1)],1)])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"widget-content-left"},[e("div",{staticClass:"widget-heading"},[t._v("Unique Conversations")]),e("div",{staticClass:"widget-subheading"},[t._v("Total Session")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"widget-content-left"},[e("div",{staticClass:"widget-heading"},[t._v("Messages Exchanged")]),e("div",{staticClass:"widget-subheading"},[t._v("Total I/O messages")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"bg-transparent list-group-item"},[e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-outer"},[e("div",{staticClass:"widget-content-wrapper"},[e("div",{staticClass:"widget-content-left"},[e("div",{staticClass:"widget-heading"},[t._v("Peak Load")]),e("div",{staticClass:"widget-subheading"},[t._v("-")])]),e("div",{staticClass:"widget-content-right"},[e("div",{staticClass:"widget-numbers text-warning"},[t._v("-")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"widget-content-left"},[e("div",{staticClass:"widget-heading"},[t._v("Start Lag")]),e("div",{staticClass:"widget-subheading"},[t._v("Start Lag")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"widget-content-left"},[e("div",{staticClass:"widget-heading"},[t._v("Conversation Duration")]),e("div",{staticClass:"widget-subheading"},[t._v("Conversation Duration")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-6 col-xl-3"},[e("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-primary border-primary"},[e("div",{staticClass:"widget-chat-wrapper-outer"},[e("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[e("div",{staticClass:"widget-chart-flex"},[e("div",{staticClass:"widget-numbers"},[e("div",{staticClass:"widget-chart-flex"},[e("div",{staticClass:"fsize-4"},[e("small",{staticClass:"opacity-5"}),e("span",[t._v("-")])])])])]),e("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("Abandoned")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-6 col-xl-3"},[e("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-warning border-warning"},[e("div",{staticClass:"widget-chat-wrapper-outer"},[e("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[e("div",{staticClass:"widget-chart-flex"},[e("div",{staticClass:"widget-numbers"},[e("div",{staticClass:"widget-chart-flex"},[e("div",{staticClass:"fsize-4"},[e("small",{staticClass:"opacity-5"}),e("span",[t._v("-")])])])])]),e("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("Satisfaction Score")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-6 col-xl-3"},[e("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger"},[e("div",{staticClass:"widget-chat-wrapper-outer"},[e("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[e("div",{staticClass:"widget-chart-flex"},[e("div",{staticClass:"widget-numbers"},[e("div",{staticClass:"widget-chart-flex"},[e("div",{staticClass:"fsize-4"},[e("span",[t._v("-")])]),e("small",{staticClass:"opacity-5"},[t._v("%")])])])]),e("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("BOT Closure")])])])])])}],n=(e("96cf"),e("3b8d")),r=(e("55dd"),e("28a5"),e("ac6a"),e("456d"),e("a391")),c=e("9d63"),d=e.n(c),l=e("ecee"),o=e("c074"),u=e("ad3d"),g=(e("6b54"),e("7f7f"),e("1fca"));function v(t){return{name:t,labels:[],series:{},update:function(t){console.log("update",this.name,t),this.labels=t.labels,this.series=t.series}}}function p(t){for(var a=0,e=0;e<t.length;e++)a=t.charCodeAt(e)+((a<<5)-a);return a}function h(t){var a=(16777215&t).toString(16).toUpperCase();return"00000".substring(0,6-a.length)+a}var m={extends:g["d"],props:["options","cdata"],mounted:function(){console.log("MyLine",this.cdata);var t=this.cdata||{};t.series&&this.renderChart({labels:t.labels,datasets:Object.keys(t.series).map((function(a){var e="#"+h(p(a));return{label:a,fill:!1,lineTension:.1,backgroundColor:e,borderColor:e,borderCapStyle:"round",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:e,pointBackgroundColor:"#ffffff",pointBorderWidth:2,pointHoverRadius:10,pointHoverBackgroundColor:e,pointHoverBorderColor:e,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t.series[a]}}))},{responsive:!0,maintainAspectRatio:!1})}};function C(t){var a={};for(var e in t){var s=t[e]||{};Object.keys(s.graphApiDetails||{}).map((function(t){a[t]=a[t]||{date:t,_date:t.split("-").reverse().join(""),values:{}},a[t].values[s.agentName]=s.graphApiDetails[t]}))}var i=v();return Object.keys(a).sort((function(t,e){return a[t]._date-a[e]._date})).map((function(t){var e=a[t];for(var s in i.labels.push(t),e.values)i.series[s]=i.series[s]||[],i.series[s].push(e.values[s])})),i}l["c"].add(o["N"],o["u"],o["a"],o["d"],o["M"],o["t"]);var f={components:{PageTitle:r["a"],VuePerfectScrollbar:d.a,"font-awesome-icon":u["a"],lineeg:m},data:function(){return{heading:"Analytics Dashboard",subheading:"Select date range for report",icon:"pe-7s-graph3 icon-gradient bg-tempting-azure",graphs:[{title:"Conversations - Cumulative",data:[65,59,80,81,56,55,40]},{title:"Conversations - individuals",data:[65,59,80,81,56,55,40]},{title:"Messages - Team",data:[65,59,80,81,56,55,40]},{title:"Messages - Individuals",data:[65,59,80,81,56,55,40]}],input:{daterange:{startDate:null,endDate:null}},summary:{contactType:null,filter:null,agentName:"TEAM",totalInMsgExchanged:0,totalOutMsgExchanged:0,totalMsgExchanged:0,uniqueConversation:0,openConversation:0,converDuration:0,startLag:0,peakLoad:null,graphApiDetails:{},leadMessanger:{contactType:"MESSAGE_WEBSITE",noOfMessage:0,totalContactMessage:0,percentage:0}},summaries:[],chart:{updated:(new Date).getTime(),summary:v("summary0"),summaries:v("summaries0")}}},computed:{},mounted:function(t){this.dateRangeOnUpdate()},methods:{loadAnalytics:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("LoadAnalytics",{agent:"TEAM",contactType:{},dateRange1:this.input.daterange.startDate,dateReange2:this.input.daterange.endDate});case 2:a=t.sent,this.summary=a.data||{},this.summaries=a.results||[],this.chart.updated=(new Date).getTime(),this.chart.summary.update(C([a.data||{}])),this.chart.summaries.update(C(a.results||[])),console.log("this.summariesChart",this.chart),this.$forceUpdate();case 10:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dateRangeOnUpdate:function(t){console.log("dateRangeOnUpdate",t),this.input.daterange.startDate&&(this.input.daterange.startDate=this.input.daterange.startDate.getTime()),this.input.daterange.endDate&&(this.input.daterange.endDate=this.input.daterange.endDate.getTime()),this.loadAnalytics()}}},w=f,b=e("2877"),_=Object(b["a"])(w,s,i,!1,null,null,null);a["default"]=_.exports},"28a5":function(t,a,e){"use strict";var s=e("aae3"),i=e("cb7c"),n=e("ebd6"),r=e("0390"),c=e("9def"),d=e("5f1b"),l=e("520a"),o=e("79e5"),u=Math.min,g=[].push,v="split",p="length",h="lastIndex",m=4294967295,C=!o((function(){RegExp(m,"y")}));e("214f")("split",2,(function(t,a,e,o){var f;return f="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[p]||2!="ab"[v](/(?:ab)*/)[p]||4!="."[v](/(.?)(.?)/)[p]||"."[v](/()()/)[p]>1||""[v](/.?/)[p]?function(t,a){var i=String(this);if(void 0===t&&0===a)return[];if(!s(t))return e.call(i,t,a);var n,r,c,d=[],o=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,v=void 0===a?m:a>>>0,C=new RegExp(t.source,o+"g");while(n=l.call(C,i)){if(r=C[h],r>u&&(d.push(i.slice(u,n.index)),n[p]>1&&n.index<i[p]&&g.apply(d,n.slice(1)),c=n[0][p],u=r,d[p]>=v))break;C[h]===n.index&&C[h]++}return u===i[p]?!c&&C.test("")||d.push(""):d.push(i.slice(u)),d[p]>v?d.slice(0,v):d}:"0"[v](void 0,0)[p]?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,s){var i=t(this),n=void 0==e?void 0:e[a];return void 0!==n?n.call(e,i,s):f.call(String(i),e,s)},function(t,a){var s=o(f,t,this,a,f!==e);if(s.done)return s.value;var l=i(t),g=String(this),v=n(l,RegExp),p=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(C?"y":"g"),w=new v(C?l:"^(?:"+l.source+")",h),b=void 0===a?m:a>>>0;if(0===b)return[];if(0===g.length)return null===d(w,g)?[g]:[];var _=0,y=0,x=[];while(y<g.length){w.lastIndex=C?y:0;var M,E=d(w,C?g:g.slice(y));if(null===E||(M=u(c(w.lastIndex+(C?0:y)),g.length))===_)y=r(g,y,p);else{if(x.push(g.slice(_,y)),x.length===b)return x;for(var D=1;D<=E.length-1;D++)if(x.push(E[D]),x.length===b)return x;y=_=M}}return x.push(g.slice(_)),x}]}))},"2f21":function(t,a,e){"use strict";var s=e("79e5");t.exports=function(t,a){return!!t&&s((function(){a?t.call(null,(function(){}),1):t.call(null)}))}},"55dd":function(t,a,e){"use strict";var s=e("5ca1"),i=e("d8e8"),n=e("4bf8"),r=e("79e5"),c=[].sort,d=[1,2,3];s(s.P+s.F*(r((function(){d.sort(void 0)}))||!r((function(){d.sort(null)}))||!e("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(n(this)):c.call(n(this),i(t))}})}}]);