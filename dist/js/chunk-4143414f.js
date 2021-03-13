(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4143414f"],{"0ce3":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,daterange:t.input.daterange},on:{dateRangeOnUpdate:t.dateRangeOnUpdate}}),s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"no-gutters row"},[s("div",{staticClass:"col-md-12 col-lg-4"},[s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"bg-transparent list-group-item"},[s("div",{staticClass:"widget-content p-0"},[s("div",{staticClass:"widget-content-outer"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Total Session",expression:"'Total Session'"}],staticClass:"widget-content-wrapper"},[s("div",{staticClass:"widget-content-left"},[s("div",{staticClass:"widget-heading"},[t._v("Unique Conversations")]),s("div",{staticClass:"widget-subheading"},[t._v(t._s(t._f("number")(t.summary.uniqueConversation,"0,0")))])]),s("div",{staticClass:"widget-content-right"},[s("div",{staticClass:"widget-numbers text-success"},[t._v(t._s(t._f("number")(t.summary.uniqueConversation)))])])])])])]),s("li",{staticClass:"bg-transparent list-group-item"},[s("div",{staticClass:"widget-content p-0"},[s("div",{staticClass:"widget-content-outer"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Total I/O messages",expression:"'Total I/O messages'"}],staticClass:"widget-content-wrapper"},[s("div",{staticClass:"widget-content-left"},[s("div",{staticClass:"widget-heading"},[t._v("Messages Exchanged")]),s("div",{staticClass:"widget-subheading"},[t._v(t._s(t._f("number")(t.summary.totalMsgExchanged,"0,0")))])]),s("div",{staticClass:"widget-content-right"},[s("div",{staticClass:"widget-numbers text-primary"},[t._v(t._s(t._f("number")(t.summary.totalMsgExchanged)))])])])])])])])]),s("div",{staticClass:"col-md-12 col-lg-4"},[s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"bg-transparent list-group-item"},[s("div",{staticClass:"widget-content p-0"},[s("div",{staticClass:"widget-content-outer"},[s("div",{staticClass:"widget-content-wrapper"},[s("div",{staticClass:"widget-content-left"},[s("div",{staticClass:"widget-heading"},[t._v("Lead Messenger")]),t.summary.leadMessanger&&t.summary.leadMessanger.contactType?s("div",{staticClass:"widget-subheading"},[t._v(t._s(t.summary.leadMessanger.contactType.replace("MESSAGE_","")))]):t._e()]),s("div",{staticClass:"widget-content-right"},[t.summary.leadMessanger&&t.summary.leadMessanger.contactType?s("div",{staticClass:"widget-numbers text-danger"},[t._v(t._s(t.summary.leadMessanger.percentage)),s("small",{staticClass:"opacity-5"},[t._v("%")])]):t._e()])])])])]),s("li",{staticClass:"bg-transparent list-group-item"},[s("div",{staticClass:"widget-content p-0"},[s("div",{staticClass:"widget-content-outer"},[s("div",{staticClass:"widget-content-wrapper"},[s("div",{staticClass:"widget-content-left"},[s("div",{staticClass:"widget-heading"},[t._v("Peak Load")]),t.summary.peakLoad&&t.summary.peakLoad.timestamp?s("div",{staticClass:"widget-subheading"},[t._v("\n                                            "+t._s(t.summary.peakLoad.timestamp)+"\n                                        ")]):t._e()]),s("div",{staticClass:"widget-content-right"},[t.summary.peakLoad&&t.summary.peakLoad.total?s("div",{staticClass:"widget-numbers text-warning"},[t._v("\n                                            "+t._s(t.summary.peakLoad.total)+"\n                                        ")]):t._e()])])])])])])]),s("div",{staticClass:"col-md-12 col-lg-4"},[s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"bg-transparent list-group-item"},[s("div",{staticClass:"widget-content p-0"},[s("div",{staticClass:"widget-content-outer"},[s("div",{staticClass:"widget-content-wrapper"},[t._m(0),s("div",{staticClass:"widget-content-right"},[s("div",{staticClass:"widget-numbers text-success"},[t._v(t._s(t._f("timespan")(t.summary.startLag)))])])])])])]),s("li",{staticClass:"bg-transparent list-group-item"},[s("div",{staticClass:"widget-content p-0"},[s("div",{staticClass:"widget-content-outer"},[s("div",{staticClass:"widget-content-wrapper"},[t._m(1),s("div",{staticClass:"widget-content-right"},[s("div",{staticClass:"widget-numbers text-primary"},[t._v(t._s(t._f("timespan")(t.summary.converDuration)))])])])])])])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-xl-3"},[s("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-success border-success"},[s("div",{staticClass:"widget-chat-wrapper-outer"},[s("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[s("div",{staticClass:"widget-chart-flex"},[s("div",{staticClass:"widget-numbers"},[s("div",{staticClass:"widget-chart-flex"},[s("div",{staticClass:"fsize-4"},[s("small",{staticClass:"opacity-5"}),s("span",[t._v(t._s(t._f("number")(t.summary.openConversation)))])])])])]),s("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("Open Conversations")])])])])]),t._m(2),t._m(3),t._m(4)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-xl-6"},[s("b-card",{key:t.chart.updated,staticClass:"main-card mb-3",attrs:{title:"Messages - Team"}},[s("lineeg",{attrs:{cdata:t.chart.summary}})],1)],1),s("div",{staticClass:"col-md-6 col-xl-6"},[s("b-card",{key:t.chart.updated,staticClass:"main-card mb-3",attrs:{title:"Messages - Individuals"}},[s("lineeg",{attrs:{cdata:t.chart.summaries}})],1)],1)])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"widget-content-left"},[s("div",{staticClass:"widget-heading"},[t._v("Start Lag")]),s("div",{staticClass:"widget-subheading"},[t._v("Avg. time to agent response")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"widget-content-left"},[s("div",{staticClass:"widget-heading"},[t._v("Conversation Duration")]),s("div",{staticClass:"widget-subheading"},[t._v("Avg. session duration")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6 col-xl-3"},[s("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-primary border-primary"},[s("div",{staticClass:"widget-chat-wrapper-outer"},[s("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[s("div",{staticClass:"widget-chart-flex"},[s("div",{staticClass:"widget-numbers"},[s("div",{staticClass:"widget-chart-flex"},[s("div",{staticClass:"fsize-4"},[s("small",{staticClass:"opacity-5"}),s("span",[t._v("-")])])])])]),s("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("Abandoned")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6 col-xl-3"},[s("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-warning border-warning"},[s("div",{staticClass:"widget-chat-wrapper-outer"},[s("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[s("div",{staticClass:"widget-chart-flex"},[s("div",{staticClass:"widget-numbers"},[s("div",{staticClass:"widget-chart-flex"},[s("div",{staticClass:"fsize-4"},[s("small",{staticClass:"opacity-5"}),s("span",[t._v("-")])])])])]),s("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("Satisfaction Score")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6 col-xl-3"},[s("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger"},[s("div",{staticClass:"widget-chat-wrapper-outer"},[s("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[s("div",{staticClass:"widget-chart-flex"},[s("div",{staticClass:"widget-numbers"},[s("div",{staticClass:"widget-chart-flex"},[s("div",{staticClass:"fsize-4"},[s("span",[t._v("-")])]),s("small",{staticClass:"opacity-5"},[t._v("%")])])])]),s("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("BOT Closure")])])])])])}],n=(s("96cf"),s("3b8d")),r=(s("55dd"),s("28a5"),s("ac6a"),s("456d"),s("a391")),d=s("9d63"),c=s.n(d),l=s("ecee"),o=s("c074"),u=s("ad3d"),g=(s("6b54"),s("7f7f"),s("1fca"));function v(t){return{name:t,labels:[],series:{},update:function(t){console.log("update",this.name,t),this.labels=t.labels,this.series=t.series}}}function p(t){for(var a=0,s=0;s<t.length;s++)a=t.charCodeAt(s)+((a<<5)-a);return a}function m(t){var a=(16777215&t).toString(16).toUpperCase();return"00000".substring(0,6-a.length)+a}var h={extends:g["d"],props:["options","cdata"],mounted:function(){console.log("MyLine",this.cdata);var t=this.cdata||{};t.series&&this.renderChart({labels:t.labels,datasets:Object.keys(t.series).map((function(a){var s="#"+m(p(a));return{label:a,fill:!1,lineTension:.1,backgroundColor:s,borderColor:s,borderCapStyle:"round",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:s,pointBackgroundColor:"#ffffff",pointBorderWidth:2,pointHoverRadius:10,pointHoverBackgroundColor:s,pointHoverBorderColor:s,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t.series[a]}}))},{responsive:!0,maintainAspectRatio:!1})}};function C(t){var a={};for(var s in t){var e=t[s]||{};Object.keys(e.graphApiDetails||{}).map((function(t){a[t]=a[t]||{date:t,_date:t.split("-").reverse().join(""),values:{}},a[t].values[e.agentName]=e.graphApiDetails[t]}))}var i=v();return Object.keys(a).sort((function(t,s){return a[t]._date-a[s]._date})).map((function(t){var s=a[t];for(var e in i.labels.push(t),s.values)i.series[e]=i.series[e]||[],i.series[e].push(s.values[e])})),i}l["c"].add(o["O"],o["u"],o["a"],o["d"],o["M"],o["t"]);var f={components:{PageTitle:r["a"],VuePerfectScrollbar:c.a,"font-awesome-icon":u["a"],lineeg:h},data:function(){return{heading:"Analytics Dashboard",subheading:"Select date range for report",icon:"pe-7s-graph3 icon-gradient bg-tempting-azure",graphs:[{title:"Conversations - Cumulative",data:[65,59,80,81,56,55,40]},{title:"Conversations - individuals",data:[65,59,80,81,56,55,40]},{title:"Messages - Team",data:[65,59,80,81,56,55,40]},{title:"Messages - Individuals",data:[65,59,80,81,56,55,40]}],input:{daterange:{startDate:null,endDate:null}},summary:{contactType:null,filter:null,agentName:"TEAM",totalInMsgExchanged:0,totalOutMsgExchanged:0,totalMsgExchanged:0,uniqueConversation:0,openConversation:0,converDuration:0,startLag:0,peakLoad:{},graphApiDetails:{},leadMessanger:{contactType:"MESSAGE_WEBSITE",noOfMessage:0,totalContactMessage:0,percentage:0}},summaries:[],chart:{updated:(new Date).getTime(),summary:v("summary0"),summaries:v("summaries0")}}},computed:{},mounted:function(t){this.dateRangeOnUpdate()},methods:{loadAnalytics:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("LoadAnalytics",{agent:"TEAM",contactType:{},dateRange1:this.input.daterange.startDate,dateReange2:this.input.daterange.endDate});case 2:a=t.sent,this.summary=a.data||{},this.summaries=a.results||[],this.chart.updated=(new Date).getTime(),this.chart.summary.update(C([a.data||{}])),this.chart.summaries.update(C(a.results||[])),console.log("this.summariesChart",this.chart),this.$forceUpdate();case 10:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dateRangeOnUpdate:function(t){console.log("dateRangeOnUpdate",t),this.input.daterange.startDate&&(this.input.daterange.startDate=this.input.daterange.startDate.getTime()),this.input.daterange.endDate&&(this.input.daterange.endDate=this.input.daterange.endDate.getTime()),this.loadAnalytics()}}},w=f,b=s("2877"),_=Object(b["a"])(w,e,i,!1,null,null,null);a["default"]=_.exports},"28a5":function(t,a,s){"use strict";var e=s("aae3"),i=s("cb7c"),n=s("ebd6"),r=s("0390"),d=s("9def"),c=s("5f1b"),l=s("520a"),o=s("79e5"),u=Math.min,g=[].push,v="split",p="length",m="lastIndex",h=4294967295,C=!o((function(){RegExp(h,"y")}));s("214f")("split",2,(function(t,a,s,o){var f;return f="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[p]||2!="ab"[v](/(?:ab)*/)[p]||4!="."[v](/(.?)(.?)/)[p]||"."[v](/()()/)[p]>1||""[v](/.?/)[p]?function(t,a){var i=String(this);if(void 0===t&&0===a)return[];if(!e(t))return s.call(i,t,a);var n,r,d,c=[],o=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,v=void 0===a?h:a>>>0,C=new RegExp(t.source,o+"g");while(n=l.call(C,i)){if(r=C[m],r>u&&(c.push(i.slice(u,n.index)),n[p]>1&&n.index<i[p]&&g.apply(c,n.slice(1)),d=n[0][p],u=r,c[p]>=v))break;C[m]===n.index&&C[m]++}return u===i[p]?!d&&C.test("")||c.push(""):c.push(i.slice(u)),c[p]>v?c.slice(0,v):c}:"0"[v](void 0,0)[p]?function(t,a){return void 0===t&&0===a?[]:s.call(this,t,a)}:s,[function(s,e){var i=t(this),n=void 0==s?void 0:s[a];return void 0!==n?n.call(s,i,e):f.call(String(i),s,e)},function(t,a){var e=o(f,t,this,a,f!==s);if(e.done)return e.value;var l=i(t),g=String(this),v=n(l,RegExp),p=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(C?"y":"g"),w=new v(C?l:"^(?:"+l.source+")",m),b=void 0===a?h:a>>>0;if(0===b)return[];if(0===g.length)return null===c(w,g)?[g]:[];var _=0,y=0,x=[];while(y<g.length){w.lastIndex=C?y:0;var M,E=c(w,C?g:g.slice(y));if(null===E||(M=u(d(w.lastIndex+(C?0:y)),g.length))===_)y=r(g,y,p);else{if(x.push(g.slice(_,y)),x.length===b)return x;for(var k=1;k<=E.length-1;k++)if(x.push(E[k]),x.length===b)return x;y=_=M}}return x.push(g.slice(_)),x}]}))},"2f21":function(t,a,s){"use strict";var e=s("79e5");t.exports=function(t,a){return!!t&&e((function(){a?t.call(null,(function(){}),1):t.call(null)}))}},"55dd":function(t,a,s){"use strict";var e=s("5ca1"),i=s("d8e8"),n=s("4bf8"),r=s("79e5"),d=[].sort,c=[1,2,3];e(e.P+e.F*(r((function(){c.sort(void 0)}))||!r((function(){c.sort(null)}))||!s("2f21")(d)),"Array",{sort:function(t){return void 0===t?d.call(n(this)):d.call(n(this),i(t))}})}}]);