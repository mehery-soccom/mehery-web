(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d510480"],{"1a20":function(t,e,s){},"1e57":function(t,e,s){"use strict";s("e283")},"29b6":function(t,e,s){"use strict";s("ad7e")},"2f21":function(t,e,s){"use strict";var a=s("79e5");t.exports=function(t,e){return!!t&&a((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},3287:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-content-wrapper"},[s("Sidebar"),s("div",{staticClass:"container-fluid h-100"},[s("div",{staticClass:"row h-100"},[s("div",{staticClass:"col-md-3 col-xl-3 chat"},[s("Contacts",{on:{loaded:t.closeLoading}})],1),s("div",{staticClass:"col-xl-6 chat",class:{"col-md-6":t.MyFlags.showContactProfile,"col-md-9":!t.MyFlags.showContactProfile,"col-xl-6":t.MyFlags.showContactProfile,"col-xl-9":!t.MyFlags.showContactProfile}},[s("Chatbox")],1),t.MyFlags.showContactProfile?s("div",{staticClass:"col-md-4 col-xl-3 chat"},[s("ContactProfile")],1):t._e()])])],1)},n=[],i=(s("a481"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.MyFlags.showSidebar,expression:"MyFlags.showSidebar"}],staticClass:"w3-sidebar w3-bar-block w3-white w3-card w3-animate-left mySidebar",attrs:{id:"mySidebar"}},[s("div",{staticClass:"mySidebar-container"},[s("button",{staticClass:"w3-bar-item w3-large menu_btn_close fa fa-arrow-left",on:{click:function(e){t.MyFlags.showSidebar=!t.MyFlags.showSidebar}}},[t._v(" ")]),s("span",{staticClass:"w3-bar-item w3-button"},[s("i",{staticClass:"fas fa-user"},[t._v("  ")]),t._v(t._s(t.MyConst.agent))]),s("a",{staticClass:"w3-bar-item w3-button",attrs:{href:t.MyConst.appPrefix+"/auth/logout"}},[s("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" Logout")]),s("hr"),t._m(0),t._m(1),t._m(2),s("div",{staticClass:"logo-src"})])])}),r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"w3-bar-item w3-button",attrs:{theme:"dashboard.agent.metalic",hidden:""}},[s("i",{staticClass:"fas fa-atom"}),t._v(" Metalic")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"w3-bar-item w3-button",attrs:{theme:"dashboard.agent.indigo",hidden:""}},[s("i",{staticClass:"fas fa-atom"}),t._v(" Indigo")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"w3-bar-item w3-button",attrs:{theme:"dashboard.agent.bubble",hidden:""}},[s("i",{staticClass:"fas fa-atom"}),t._v(" Bubble")])}],o=s("4776"),c=s("9d63"),l=s.n(c),u=s("2f45");var d={components:{SidebarMenu:o["SidebarMenu"],VuePerfectScrollbar:l.a},props:{sidebarbg:String},data:function(){return{MyFlags:u["c"],MyConst:u["a"]}},methods:{toggleBodyClass:function(t){var e=document.body;this.isOpen=!this.isOpen,this.isOpen?e.classList.add(t):e.classList.remove(t)},toggleSidebarHover:function(t,e){var s=document.body;this.sidebarActive=!this.sidebarActive,this.windowWidth=document.documentElement.clientWidth,this.windowWidth>"992"&&("add"===t?s.classList.add(e):s.classList.remove(e))},getWindowWidth:function(){var t=document.body;this.windowWidth=document.documentElement.clientWidth,this.windowWidth<"1350"?t.classList.add("closed-sidebar","closed-sidebar-md"):t.classList.remove("closed-sidebar","closed-sidebar-md")}},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}))},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},p=d,h=(s("1e57"),s("2877")),f=Object(h["a"])(p,i,r,!1,null,"4e66826a",null),m=f.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card mb-sm-3 mb-md-0 contacts_card card-shadow"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text menu_btn",on:{click:function(e){t.MyFlags.showSidebar=!t.MyFlags.showSidebar}}},[s("i",{staticClass:"fa fa-bars"})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control search",attrs:{type:"text",placeholder:"Search...",name:""},domProps:{value:t.search},on:{keyup:t.inputSearch,input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._m(0)])]),s("div",{staticClass:"card-body contacts_body"},[s("ul",{staticClass:"contacts contact-list"},t._l(t.activeChats,(function(e,a){return s("router-link",{key:a,class:{data_assigned:e.assigned,data_unassigned:!e.assigned},attrs:{tag:"li",id:e.contactId,to:"/app/chat/"+e.contactId+"/"+e.sessionId+"/"+e.contactId}},[s("div",{staticClass:"d-flex bd-highlight contact-preview"},[s("div",{staticClass:"img_cont"},[s("img",{staticClass:"rounded-circle user_img",attrs:{src:e.profilePic||t.MyDict.profilePic,alt:"profilpicture"}}),s("span",{staticClass:"online_icon"}),s("span",{staticClass:"contact_type fa",class:t.MyDict.social[e.contactType]})]),s("div",{staticClass:"user_info contact-text"},[s("span",{staticClass:"font-name"},[t._v(t._s(e.name||e.contactId))]),s("p",{staticClass:"font-preview"},[t._v(t._s(e.lastmsg.text))])]),s("div",{staticClass:"contact-time",attrs:{title:e.lastmsg.timestamp}},[s("p",[t._v(t._s(t._f("formatDate")(e.lastmsg.timestamp))+" ")]),e.newmsg?s("div",{staticClass:"new-message",attrs:{id:"'nm' + c.contactId"}},[s("p",[t._v(" ")])]):t._e()])])])})),1),s("ul",{staticClass:"contacts contact-list-unassigned"})]),s("div",{staticClass:"card-footer"},[t._v("\n         "),s("span",{staticClass:"contact_type fa fa-facebook"}),s("span",{staticClass:"contact_type fa fa-whatsapp"}),s("span",{staticClass:"contact_type fa fa-twitter"}),s("span",{staticClass:"contact_type fa fa-telegram"}),s("span",{staticClass:"contact_type fa fa-chrome"}),s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.isOnline?"Go Offline":"Go Online",expression:"isOnline ? 'Go Offline' : 'Go Online'"}],staticClass:"online-toggle fa fa-toggle-on",class:{"toggle-active":t.isOnline},on:{click:t.toggleOnline}})])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text search_btn"},[s("i",{staticClass:"fa fa-search"})])])}],C=(s("96cf"),s("3b8d")),_=(s("7f7f"),s("55dd"),s("386d"),s("ecee")),b=s("ad3d"),y=s("8610"),w={components:{"font-awesome-icon":b["a"]},computed:{activeChats:function(){console.log("store",this.$store.getters.StateChats);var t=this.search;return(this.$store.getters.StateChats||[]).filter((function(e){return(e.name||"").toLowerCase().indexOf(t.toLowerCase())>-1&&e.active})).sort((function(t,e){return t.assigned&&!e.assigned?-1:!t.assigned&&e.assigned?1:e.lastInComingStamp-t.lastInComingStamp}))},isOnline:function(){return!!this.$store.getters.StateMeta&&this.$store.getters.StateMeta.isOnline}},data:function(){return{MyFlags:u["c"],MyDict:u["b"],MyConst:u["a"],search:""}},mounted:function(){this.loadChats();var t=this;this.tunnel=y["a"].init().instance().on("/agent/onmessage",(function(e){var s=t.activeChats;if(s&&t.$route.params.sessionId!=e.sessionId)for(var a in s){var n=s[a];e.sessionId==n.sessionId&&(n.newmsg=!0,t.$forceUpdate())}}))},beforeUnmount:function(){this.tunnel.off()},watch:{"$route.params.sessionId":function(t){var e=this.activeChats;for(var s in e){var a=e[s];t==a.sessionId&&(a.newmsg=!1,this.$forceUpdate())}}},methods:{loadChats:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("GetChats");case 2:this.$emit("loaded",{});case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),toggleOnline:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("OnlineStatus");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),inputSearch:function(){},loadQuickReply:function(){}}},x=w,S=(s("960a"),Object(h["a"])(x,g,v,!1,null,"990ccc00",null)),k=S.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card card-shadow"},[s("div",{staticClass:"card-header msg_head chat-head"},[s("div",{staticClass:"d-flex bd-highlight chat-header-left"},[t.activeChat?s("div",{staticClass:"img_cont",on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("img",{staticClass:"rounded-circle user_img",attrs:{src:t.activeChat.profilePic||t.MyDict.profilePic}}),s("span",{staticClass:"online_icon",attrs:{hidden:""}})]):t._e(),t.activeChat?s("div",{staticClass:"user_info",on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("span",{staticClass:"user_name"},[t._v(t._s(t.activeChat.name))]),t.activeChat.ilastmsg?s("p",{staticClass:"user_text"},[t._v(t._s(t._f("formatDate")(t.activeChat.ilastmsg.timestamp))+" ")]):t._e()]):t._e(),s("div",{staticClass:"video_cam"},[t._m(0),t._m(1),s("span",{attrs:{hidden:""},on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("i",{staticClass:"fas fa-history"})])]),s("div",{staticClass:"chat_actions",attrs:{hidden:""}},[s("button",{staticClass:"btn",attrs:{title:"Close Chat"},on:{click:t.closSession}},[s("i",{staticClass:"fa fa-check-circle"})])])]),s("div",{staticClass:"chat-header-right"},[s("div",{staticClass:"video_cam"},[s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Show Chat History",expression:"'Show Chat History'"}],on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("i",{staticClass:"fa fa-history"})])])]),s("div",{staticClass:"chat-header-right",on:{mouseover:function(e){t.showChatOptions=!0},mouseleave:function(e){t.showChatOptions=!1}}},[t._m(2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showChatOptions,expression:"showChatOptions"}],staticClass:"action_menu"},[s("ul",{staticStyle:{"padding-top":"10px"}},[s("li",{on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("i",{staticClass:"fas fa-history"}),t._v(" Chat Hisotry")]),s("li",{on:{click:t.closSession}},[s("i",{staticClass:"fa fa-check-circle"}),t._v(" Resolve Ticket")])])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showMediaOptions,expression:"!showMediaOptions"}],staticClass:"card-body msg_card_body"},[s("div",{staticClass:"msg_card_body-bubbles"},[s("loading",{attrs:{active:t.isLoading,"can-cancel":!1,loader:"dots",opacity:.3,"is-full-page":!1},on:{"update:active":function(e){t.isLoading=e}}}),t.activeChat?t.activeChat?t._l(t.activeChat.messages,(function(e){return s("div",[e.type?s("div",{staticClass:"d-flex justify-content-end mb-4 chat-bubble",attrs:{"data-local-id":"m.localId","data-message-id":e.messageId}},[e.messageId?t._e():s("i",{staticClass:"sending fa fa-spinner fa-spin"},[t._v(" ")]),s("div",{staticClass:"msg_cotainer_send"},[s("span",[t._v(t._s(t._f("newlines")(t._f("striphtml")(e.text))))]),e.attachments?s("div",[s("span",{staticClass:"fa fa-paperclip"}),t._v(" "+t._s(e.template)+" \n                "),s("div",{staticClass:"input-group my-attachments"},t._l(e.attachments,(function(e){return s("img",{attrs:{src:t._f("thumburl")(e.mediaURL)}})})),0)]):e.template?s("div",[s("span",{staticClass:"fa fa-tag"}),t._v(" "+t._s(e.template)+"\n            ")]):t._e(),s("span",{staticClass:"msg_time_send"},[t._v(t._s(t._f("formatDate")(e.timestamp))+"  "),s("span",{staticClass:"msg_user"},[t._v(t._s(e.name||"---"))])])]),t._m(4,!0)]):s("div",{staticClass:"d-flex justify-content-start mb-4 chat-bubble",attrs:{title:e.tags?e.tags.categories:null}},[t._m(3,!0),s("div",{staticClass:"msg_cotainer"},[s("span",[t._v(t._s(t._f("newlines")(t._f("striphtml")(e.text))))])]),s("span",{staticClass:"msg_time"},[s("span",{staticClass:"msg_user"},[t._v(t._s(e.name||"---"))]),t._v("  "+t._s(t._f("formatDate")(e.timestamp)))])])])})):t._e():s("div",{staticClass:"msg_card_body-logo"},[s("span",{})])],2),t.activeChat&&t.activeChat.active?s("div",{staticClass:"msg_card_body-panel"},[s("hr"),s("div",{staticClass:"msg_card_body-panel-tags"},[t._l(t.quickReplies,(function(e){return t.quickReplies?s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e._message,expression:"quickReply._message"}],staticClass:"msg_cotainer_smart",on:{click:function(s){return t.sendQuickReply(e._message)}}},[t._v("  "+t._s(e.title))]):t._e()})),t.quickReplies&&t.quickReplies.length>0?s("span",{staticClass:"divider-v"}):t._e(),s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"End Chat",expression:"'End Chat'"}],staticClass:"msg_cotainer_smart",on:{click:t.closSession}},[s("i",{staticClass:"fas fa-power-off"})])],2)]):t._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMediaOptions,expression:"showMediaOptions"}],staticClass:"card-body media_card_body"},[s("div",{staticClass:"media_card_body-bubbles"},[s("div",{staticClass:"media_card_body-bubbles-wrapper"},t._l(t.mediaOptions,(function(e){return s("div",{staticClass:"media_thumb"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedMedia,expression:"selectedMedia"}],attrs:{id:"mdeia-"+e.name,type:"radio",name:"media"},domProps:{value:e.name,checked:t._q(t.selectedMedia,e.name)},on:{change:function(s){t.selectedMedia=e.name}}}),s("label",{staticClass:"media_thumb_label",attrs:{for:"mdeia-"+e.name}},[s("img",{attrs:{src:t._f("thumburl")(e.url)}})])])})),0)]),t._m(5)]),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"input-group my-input-section",class:{fade:!t.sendEnabled}},[s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text attach_btn",on:{click:function(e){t.showMediaOptions=!t.showMediaOptions}}},[s("i",{staticClass:"fa fa-paperclip"})])]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message_text,expression:"message_text"}],staticClass:"form-control type_msg input-message",attrs:{name:"",placeholder:"Type your message...",autocomplete:"off",disabled:!t.inputTextEnabled},domProps:{value:t.message_text},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:void e.preventDefault()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.shiftKey?e.ctrlKey||e.altKey||e.metaKey?null:t.newline(e):null}],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.onSendMessage(e)},input:function(e){e.target.composing||(t.message_text=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text send_btn",on:{click:t.onSendMessage}},[s("i",{staticClass:"fa fa-location-arrow"})])])])])])},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{attrs:{hidden:""}},[s("i",{staticClass:"fas fa-video"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{attrs:{hidden:""}},[s("i",{staticClass:"fas fa-phone"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{attrs:{id:"action_menu_btn"}},[s("i",{staticClass:"fas fa-user-clock",attrs:{hidden:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"img_cont_msg"},[s("img",{staticClass:"rounded-circle user_img_msg",attrs:{src:"assets/images/profile.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"img_cont_msg"},[s("img",{staticClass:"rounded-circle user_img_msg",attrs:{src:"assets/images/profile.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media_card_body-panel hidden"},[s("hr"),s("div",{staticClass:"media_card_body-panel-actions"},[s("span",{staticClass:"media_cotainer_smart"},[t._v("Cancel")]),s("span",{staticClass:"media_cotainer_smart"},[t._v("Send")])])])}],$=s("9062"),O=s.n($),T=s("9dbb"),E=s.n(T),R={components:{"font-awesome-icon":b["a"],Loading:O.a},computed:{inputTextEnabled:function(t){return!!this.$route.params.contactId&&!!this.activeChat&&this.activeChat.active},sendEnabled:function(t){return!!this.$route.params.contactId&&!!this.activeChat&&this.activeChat.active},activeChat:function(){for(var t in console.log("id",this.$route.params.contactId,this.$route.params.sessionId),this.$store.getters.StateChats){var e=this.$store.getters.StateChats[t];if(this.$route.params.sessionId==e.sessionId)return e}for(var t in this.$store.getters.StateChatHistory){e=this.$store.getters.StateChatHistory[t];if(this.$route.params.sessionId==e.sessionId)return e}return null},mediaOptions:function(){return console.log("mediaOptions=",this.$store.getters.StateMediaOptions),this.$store.getters.StateMediaOptions}},data:function(){return{message_text:"",quickReplies:null,selectedMedia:null,showMediaOptions:!1,showChatOptions:!1,lastMessageId:null,ilastMessageId:null,MyDict:u["b"],MyFlags:u["c"],MyConst:u["a"],isLoading:!1}},created:function(){console.log("loading..."),this.loadMediaOptions(),this.scrollToBottom()},updated:function(){this.scrollToBottom(),this.loadQuickReplies()},mounted:function(){this.scrollToBottom(),this.loadQuickReplies()},watch:{"$route.params.contactId":function(t){this.scrollToBottom(),this.loadQuickReplies()},"$route.params.sessionId":function(t){this.loadMessages()}},methods:{sendText:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e,s){var a,n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.activeChat,a){t.next=3;break}return t.abrupt("return");case 3:if(e||s){t.next=5;break}return t.abrupt("return");case 5:return n=a.sessionId,i={text:e,type:!0,timestamp:(new Date).getTime(),sender:u["a"].agent,name:u["a"].agent,messageId:"",sessionId:n,template:s},this.scrollToBottom(),t.prev=8,console.log("beforeSendcta"),t.next=12,this.$store.dispatch("SendChat",i);case 12:r=t.sent,console.log("resp",r),t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](8),console.error(t.t0),i.logs=["Error While Sending"];case 20:this.scrollToBottom();case 21:case"end":return t.stop()}}),t,this,[[8,16]])})));function e(e,s){return t.apply(this,arguments)}return e}(),onSendMessage:function(){this.sendText(this.message_text,this.showMediaOptions?this.selectedMedia:null),this.message_text="",this.showMediaOptions=!1},newline:function(t){this.value="".concat(this.message_text,"\n")},sendQuickReply:function(t){this.sendText(t||event.target.innerText,this.showMediaOptions?this.selectedMedia:null)},closSession:function(){this.sendText("/exit_chat"),this.$router.push("/app/chat")},scrollToBottom:function(t){var e=this.activeChat;if(e){console.log("scrollToBottom...",t);var s=e.messages;if(s&&s.length){var a=s[s.length-1].messageId;(this.lastMessageId!=a||t)&&(this.lastMessageId=a,this.$nextTick((function(){var t=document.querySelector(".msg_card_body");t&&(console.log("updating",t.scrollTop,t.scrollHeight),t.scrollTop=t.scrollHeight)})),console.log("scrolledToBottom",t))}}},loadMediaOptions:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("LoadMediaOptions");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadQuickReplies:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(){var e,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.activeChat,e){t.next=3;break}return t.abrupt("return");case 3:if(s=e.ilastmsg,s){t.next=6;break}return t.abrupt("return");case 6:if(this.ilastMessageId!=s.messageId){t.next=8;break}return t.abrupt("return");case 8:return this.ilastMessageId=s.messageId,t.next=11,this.$store.dispatch("LoadQuickReplies",s.tags);case 11:a=t.sent,this.quickReplies=a.map((function(t){return t.template?t._message=E.a.render(t.template,{contact:e.contact}):t._message=t.message||t.title,t}));case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadMessages:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("loadMessages..."),e=this.activeChat,e){t.next=4;break}return t.abrupt("return");case 4:if(e.messages||e.active){t.next=13;break}return console.log("GetSessionChats..."),this.isLoading=!0,t.next=9,this.$store.dispatch("GetSessionChats",{contactId:this.activeChat.contactId,sessionId:this.activeChat.sessionId,contactType:this.activeChat.contactType,name:this.activeChat.name});case 9:s=t.sent,console.log("resp",s),e.messages=s,this.isLoading=!1;case 13:this.scrollToBottom(!0);case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},P=R,F=(s("29b6"),Object(h["a"])(P,M,I,!1,null,"5b7f8b6b",null)),L=F.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card mb-sm-3 mb-md-0 card_contact_profile"},[s("div",{staticClass:"card-header"},[s("center",[t._v("History")])],1),s("div",{staticClass:"card-body vld-parent"},[s("loading",{attrs:{active:t.isLoading,"can-cancel":!1,loader:"dots","is-full-page":!1},on:{"update:active":function(e){t.isLoading=e}}}),s("div",{staticClass:"information",staticStyle:{display:"flex"},attrs:{hidden:""}},[s("img",{staticClass:"rounded-circle user_img",attrs:{src:t.activeChat.profilePic||t.MyDict.profilePic}})]),s("small",[s("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,responsive:!0,borderless:!0,items:t.sessions.items,fields:t.sessions.fields},scopedSlots:t._u([{key:"cell(assignedToAgent)",fn:function(e){return["BOT"==e.item.mode?s("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"robot"}}):t._e(),"AGENT"==e.item.mode?s("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"user"}}):t._e(),t._v("\n                     "+t._s(e.item.assignedToAgent)+"\n                ")]}},{key:"cell(time)",fn:function(e){return[t._v("\n                    "+t._s(t._f("formatDate")(e.item.startSessionStamp||e.item.fistResponseStamp||e.item.lastInComingStamp||e.item.assignedDeptStamp||e.item.assignedAgentStamp||e.item.lastResponseStamp||e.item.closeSessionStamp))+"\n                ")]}},{key:"cell(contactType)",fn:function(e){return[s("span",{staticClass:"contact_type fa",class:t.MyDict.social[e.item.contactType]})]}},{key:"cell(startSessionStamp)",fn:function(e){return[t._v("\n                    "+t._s(t._f("formatDate")(e.item.startSessionStamp))+"\n                ")]}},{key:"cell(fistResponseStamp)",fn:function(e){return[t._v("\n                    "+t._s(t._f("formatDate")(e.item.fistResponseStamp))+" \n                ")]}},{key:"cell(closeSessionStamp)",fn:function(e){return[t._v("\n                    "+t._s(t._f("formatDate")(e.item.closeSessionStamp))+"\n                    "),e.item.active?s("font-awesome-icon",{style:{color:"green"},attrs:{icon:"circle"}}):t._e()]}},{key:"cell(actions)",fn:function(e){return[s("router-link",{staticClass:"btn btn-outline-primary btn-xs",attrs:{tag:"button",id:e.item.sessionId,to:"/app/chat/"+e.item.contactId+"/"+e.item.sessionId+"/"+t.profileId,"active-class":"disabled"}},[t._v("\n                            View Chat\n                 ")])]}}])})],1)],1),s("div",{staticClass:"card-footer"},[s("div",[s("p",[t._v(t._s(t.activeChat.name))])]),s("div",[t.activeChat.email?s("p",[s("span",{staticClass:"fa fa-envelope"}),t._v(" "+t._s(t.activeChat.email))]):t._e()]),s("div",[t.activeChat.phone?s("p",[s("span",{staticClass:"fa fa-phone"}),t._v(" "+t._s(t.activeChat.phone))]):t._e()]),t._m(0)])])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"listGroups"}},[s("h1")])}],W={components:{Loading:O.a},computed:{activeChat:function(){for(var t in console.log("id",this.$route.params.contactId),this.$store.getters.StateChats){var e=this.$store.getters.StateChats[t];if(this.$route.params.contactId==e.contactId)return e}return{}},profileId:function(){return this.$route.params.profileId}},data:function(){return{MyDict:u["b"],MyFlags:u["c"],MyConst:u["a"],sessions:{fields:[{key:"contactType",label:""},{key:"time",label:" "},{key:"actions",label:" "}],items:[],perPage:25,currentPage:1,rows:0},isLoading:!1}},created:function(){console.log("loading...")},updated:function(){},mounted:function(){this.getSessions()},watch:{"$route.params.profileId":function(t){this.getSessions()}},methods:{getSessions:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.activeChat&&this.activeChat.contactId&&this.$route.params.profileId){t.next=4;break}return this.sessions.items=[],this.sessions.rows=0,t.abrupt("return");case 4:return this.isLoading=!0,t.next=7,this.$store.dispatch("GetSessions",{contactId:this.$route.params.profileId});case 7:e=t.sent,this.sessions.items=(e||[]).sort((function(t,e){return(e.startSessionStamp||e.fistResponseStamp||e.lastInComingStamp||e.assignedDeptStamp||e.assignedAgentStamp||e.lastResponseStamp||e.closeSessionStamp)-(t.startSessionStamp||t.fistResponseStamp||t.lastInComingStamp||t.assignedDeptStamp||t.assignedAgentStamp||t.lastResponseStamp||t.closeSessionStamp)})),this.sessions.rows=this.sessions.items.length,console.log("sessions",e,this.sessions),this.isLoading=!1;case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},A=W,N=(s("f57f"),Object(h["a"])(A,j,D,!1,null,"a8712e72",null)),U=N.exports,B=s("c074");_["c"].add(B["z"]);var K={name:"app",components:{Contacts:k,Chatbox:L,ContactProfile:U,Sidebar:m,VuePerfectScrollbar:l.a,"font-awesome-icon":b["a"]},data:function(){return{MyFlags:u["c"]}},mounted:function(){},methods:{closeLoading:function(t){var e=document.getElementsByTagName("html")[0];e.className=e.className.replace(/\loading\b/g,"")}}},q=K,G=(s("701f"),Object(h["a"])(q,a,n,!1,null,null,null));e["default"]=G.exports},"386d":function(t,e,s){"use strict";var a=s("cb7c"),n=s("83a1"),i=s("5f1b");s("214f")("search",1,(function(t,e,s,r){return[function(s){var a=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,a):new RegExp(s)[e](String(a))},function(t){var e=r(s,t,this);if(e.done)return e.value;var o=a(t),c=String(this),l=o.lastIndex;n(l,0)||(o.lastIndex=0);var u=i(o,c);return n(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]}))},"55dd":function(t,e,s){"use strict";var a=s("5ca1"),n=s("d8e8"),i=s("4bf8"),r=s("79e5"),o=[].sort,c=[1,2,3];a(a.P+a.F*(r((function(){c.sort(void 0)}))||!r((function(){c.sort(null)}))||!s("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(i(this)):o.call(i(this),n(t))}})},"701f":function(t,e,s){"use strict";s("8057")},"77bf":function(t,e,s){},8057:function(t,e,s){},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"960a":function(t,e,s){"use strict";s("77bf")},"9dbb":function(t,e,s){(function(e,s){t.exports=s()})(0,(function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var t=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===t.call(e)};function s(t){return"function"===typeof t}function a(t){return e(t)?"array":typeof t}function n(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(t,e){return null!=t&&"object"===typeof t&&e in t}function r(t,e){return null!=t&&"object"!==typeof t&&t.hasOwnProperty&&t.hasOwnProperty(e)}var o=RegExp.prototype.test;function c(t,e){return o.call(t,e)}var l=/\S/;function u(t){return!c(l,t)}var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function p(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return d[t]}))}var h=/\s*/,f=/\s+/,m=/\s*=/,g=/\s*\}/,v=/#|\^|\/|>|\{|&|=|!/;function C(t,s){if(!t)return[];var a,i,r,o=!1,c=[],l=[],d=[],p=!1,C=!1,w="",x=0;function k(){if(p&&!C)while(d.length)delete l[d.pop()];else d=[];p=!1,C=!1}function M(t){if("string"===typeof t&&(t=t.split(f,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);a=new RegExp(n(t[0])+"\\s*"),i=new RegExp("\\s*"+n(t[1])),r=new RegExp("\\s*"+n("}"+t[1]))}M(s||S.tags);var I,$,O,T,E,R,P=new y(t);while(!P.eos()){if(I=P.pos,O=P.scanUntil(a),O)for(var F=0,L=O.length;F<L;++F)T=O.charAt(F),u(T)?(d.push(l.length),w+=T):(C=!0,o=!0,w+=" "),l.push(["text",T,I,I+1]),I+=1,"\n"===T&&(k(),w="",x=0,o=!1);if(!P.scan(a))break;if(p=!0,$=P.scan(v)||"name",P.scan(h),"="===$?(O=P.scanUntil(m),P.scan(m),P.scanUntil(i)):"{"===$?(O=P.scanUntil(r),P.scan(g),P.scanUntil(i),$="&"):O=P.scanUntil(i),!P.scan(i))throw new Error("Unclosed tag at "+P.pos);if(E=">"==$?[$,O,I,P.pos,w,x,o]:[$,O,I,P.pos],x++,l.push(E),"#"===$||"^"===$)c.push(E);else if("/"===$){if(R=c.pop(),!R)throw new Error('Unopened section "'+O+'" at '+I);if(R[1]!==O)throw new Error('Unclosed section "'+R[1]+'" at '+I)}else"name"===$||"{"===$||"&"===$?C=!0:"="===$&&M(O)}if(k(),R=c.pop(),R)throw new Error('Unclosed section "'+R[1]+'" at '+P.pos);return b(_(l))}function _(t){for(var e,s,a=[],n=0,i=t.length;n<i;++n)e=t[n],e&&("text"===e[0]&&s&&"text"===s[0]?(s[1]+=e[1],s[3]=e[3]):(a.push(e),s=e));return a}function b(t){for(var e,s,a=[],n=a,i=[],r=0,o=t.length;r<o;++r)switch(e=t[r],e[0]){case"#":case"^":n.push(e),i.push(e),n=e[4]=[];break;case"/":s=i.pop(),s[5]=e[2],n=i.length>0?i[i.length-1][4]:a;break;default:n.push(e)}return a}function y(t){this.string=t,this.tail=t,this.pos=0}function w(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function x(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}y.prototype.eos=function(){return""===this.tail},y.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var s=e[0];return this.tail=this.tail.substring(s.length),this.pos+=s.length,s},y.prototype.scanUntil=function(t){var e,s=this.tail.search(t);switch(s){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,s),this.tail=this.tail.substring(s)}return this.pos+=e.length,e},w.prototype.push=function(t){return new w(t,this)},w.prototype.lookup=function(t){var e,a=this.cache;if(a.hasOwnProperty(t))e=a[t];else{var n,o,c,l=this,u=!1;while(l){if(t.indexOf(".")>0){n=l.view,o=t.split("."),c=0;while(null!=n&&c<o.length)c===o.length-1&&(u=i(n,o[c])||r(n,o[c])),n=n[o[c++]]}else n=l.view[t],u=i(l.view,t);if(u){e=n;break}l=l.parent}a[t]=e}return s(e)&&(e=e.call(this.view)),e},x.prototype.clearCache=function(){"undefined"!==typeof this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(t,e){var s=this.templateCache,a=t+":"+(e||S.tags).join(":"),n="undefined"!==typeof s,i=n?s.get(a):void 0;return void 0==i&&(i=C(t,e),n&&s.set(a,i)),i},x.prototype.render=function(t,e,s,a){var n=this.getConfigTags(a),i=this.parse(t,n),r=e instanceof w?e:new w(e,void 0);return this.renderTokens(i,r,s,t,a)},x.prototype.renderTokens=function(t,e,s,a,n){for(var i,r,o,c="",l=0,u=t.length;l<u;++l)o=void 0,i=t[l],r=i[0],"#"===r?o=this.renderSection(i,e,s,a,n):"^"===r?o=this.renderInverted(i,e,s,a,n):">"===r?o=this.renderPartial(i,e,s,n):"&"===r?o=this.unescapedValue(i,e):"name"===r?o=this.escapedValue(i,e,n):"text"===r&&(o=this.rawValue(i)),void 0!==o&&(c+=o);return c},x.prototype.renderSection=function(t,a,n,i,r){var o=this,c="",l=a.lookup(t[1]);function u(t){return o.render(t,a,n,r)}if(l){if(e(l))for(var d=0,p=l.length;d<p;++d)c+=this.renderTokens(t[4],a.push(l[d]),n,i,r);else if("object"===typeof l||"string"===typeof l||"number"===typeof l)c+=this.renderTokens(t[4],a.push(l),n,i,r);else if(s(l)){if("string"!==typeof i)throw new Error("Cannot use higher-order sections without the original template");l=l.call(a.view,i.slice(t[3],t[5]),u),null!=l&&(c+=l)}else c+=this.renderTokens(t[4],a,n,i,r);return c}},x.prototype.renderInverted=function(t,s,a,n,i){var r=s.lookup(t[1]);if(!r||e(r)&&0===r.length)return this.renderTokens(t[4],s,a,n,i)},x.prototype.indentPartial=function(t,e,s){for(var a=e.replace(/[^ \t]/g,""),n=t.split("\n"),i=0;i<n.length;i++)n[i].length&&(i>0||!s)&&(n[i]=a+n[i]);return n.join("\n")},x.prototype.renderPartial=function(t,e,a,n){if(a){var i=this.getConfigTags(n),r=s(a)?a(t[1]):a[t[1]];if(null!=r){var o=t[6],c=t[5],l=t[4],u=r;0==c&&l&&(u=this.indentPartial(r,l,o));var d=this.parse(u,i);return this.renderTokens(d,e,a,u,n)}}},x.prototype.unescapedValue=function(t,e){var s=e.lookup(t[1]);if(null!=s)return s},x.prototype.escapedValue=function(t,e,s){var a=this.getConfigEscape(s)||S.escape,n=e.lookup(t[1]);if(null!=n)return"number"===typeof n&&a===S.escape?String(n):a(n)},x.prototype.rawValue=function(t){return t[1]},x.prototype.getConfigTags=function(t){return e(t)?t:t&&"object"===typeof t?t.tags:void 0},x.prototype.getConfigEscape=function(t){return t&&"object"===typeof t&&!e(t)?t.escape:void 0};var S={name:"mustache.js",version:"4.1.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){k.templateCache=t},get templateCache(){return k.templateCache}},k=new x;return S.clearCache=function(){return k.clearCache()},S.parse=function(t,e){return k.parse(t,e)},S.render=function(t,e,s,n){if("string"!==typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+a(t)+'" was given as the first argument for mustache#render(template, view, partials)');return k.render(t,e,s,n)},S.escape=p,S.Scanner=y,S.Context=w,S.Writer=x,S}))},a481:function(t,e,s){"use strict";var a=s("cb7c"),n=s("4bf8"),i=s("9def"),r=s("4588"),o=s("0390"),c=s("5f1b"),l=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};s("214f")("replace",2,(function(t,e,s,m){return[function(a,n){var i=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,i,n):s.call(String(i),a,n)},function(t,e){var n=m(s,t,this,e);if(n.done)return n.value;var d=a(t),p=String(this),h="function"===typeof e;h||(e=String(e));var v=d.global;if(v){var C=d.unicode;d.lastIndex=0}var _=[];while(1){var b=c(d,p);if(null===b)break;if(_.push(b),!v)break;var y=String(b[0]);""===y&&(d.lastIndex=o(p,i(d.lastIndex),C))}for(var w="",x=0,S=0;S<_.length;S++){b=_[S];for(var k=String(b[0]),M=l(u(r(b.index),p.length),0),I=[],$=1;$<b.length;$++)I.push(f(b[$]));var O=b.groups;if(h){var T=[k].concat(I,M,p);void 0!==O&&T.push(O);var E=String(e.apply(void 0,T))}else E=g(k,p,M,I,O,e);M>=x&&(w+=p.slice(x,M)+E,x=M+k.length)}return w+p.slice(x)}];function g(t,e,a,i,r,o){var c=a+t.length,l=i.length,u=h;return void 0!==r&&(r=n(r),u=p),s.call(o,u,(function(s,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(c);case"<":o=r[n.slice(1,-1)];break;default:var u=+n;if(0===u)return s;if(u>l){var p=d(u/10);return 0===p?s:p<=l?void 0===i[p-1]?n.charAt(1):i[p-1]+n.charAt(1):s}o=i[u-1]}return void 0===o?"":o}))}}))},ad7e:function(t,e,s){},e283:function(t,e,s){},f57f:function(t,e,s){"use strict";s("1a20")}}]);