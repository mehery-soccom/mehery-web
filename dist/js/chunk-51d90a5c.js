(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51d90a5c"],{"889d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,actions:t.actions}}),n("b-card",{staticClass:"main-card mb-4",attrs:{title:""}},[n("b-table",{attrs:{striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,items:t.agents,fields:t.fields},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return t.activateAgent(e.item,e.index,n.target)}}},[t._v("\n                  "+t._s("Y"==e.item.isactive?"DeActivate":"Activate")+" Agent\n                ")])]}}])})],1)],1)},i=[],s=(n("96cf"),n("3b8d")),r=n("d51b"),c={components:{PageTitle:r["a"]},data:function(){return{heading:"Agents",subheading:"View all Agents.",icon:"pe-7s-users icon-gradient bg-happy-itmeo",actions:[{label:"Add Agent",icon:"plus",link:"/app/admins/agents/add"}],fields:[{key:"dept.dept_name",label:"Dept"},{key:"agent_name",label:"Name"},{key:"agent_code",label:"Code"},{key:"agent_email",label:"Email"},{key:"agent_channels",label:"Channels"},{key:"actions",label:"Action"}]}},computed:{agents:function(t){return this.$store.getters.StateAgents}},created:function(t){this.loadAgents()},methods:{loadAgents:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("GetAgents");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),activateAgent:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("DeActivateAgent",e);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},o=c,l=n("2877"),d=Object(l["a"])(o,a,i,!1,null,null,null);e["default"]=d.exports},d51b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:t.icon})]),n("div",[t._v("\n                "+t._s(t.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[t._v("\n                    "+t._s(t.subheading)+"\n                ")])])]),n("div",{staticClass:"page-title-actions"},t._l(t.actions,(function(e){return n("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{tag:"button",to:e.link,type:"button"}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:e.icon}}),t._v("\n                "+t._s(e.label)+" \n            ")],1)})),1)])])},i=[],s=n("ecee"),r=n("c074"),c=n("ad3d");s["c"].add(r["L"],r["G"]);var o={components:{"font-awesome-icon":c["a"]},props:{icon:String,heading:String,subheading:String,actions:Array}},l=o,d=n("2877"),u=Object(d["a"])(l,a,i,!1,null,null,null);e["a"]=u.exports}}]);