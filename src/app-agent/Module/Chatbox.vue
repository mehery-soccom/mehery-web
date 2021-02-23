<template>
          <div class="card card-shadow">
                <div class="card-header msg_head chat-head">
                    <div class="d-flex bd-highlight">
                        <div class="img_cont" 
                            v-if="activeChat"
                            @click="MyFlags.showContactProfile = !MyFlags.showContactProfile">
                            <img :src="activeChat.profilePic || MyDict.profilePic" class="rounded-circle user_img">
                            <span class="online_icon" hidden></span>
                        </div>
                        <div class="user_info"
                            v-if="activeChat"
                            @click="MyFlags.showContactProfile = !MyFlags.showContactProfile">
                            <span class="user_name">{{activeChat.name}}</span>
                            <p class="user_text">{{activeChat.lastInComingStamp*1000 | formatDate}} </p>
                        </div>
                        <div class="video_cam">
                            <span><i class="fas fa-video" hidden></i></span>
                            <span><i class="fas fa-phone" hidden></i></span>
                        </div>
                        <div class="chat_actions">
                            <span  @click="closSession" title="Close Chat"><i class="fa fa-check-circle"></i></span>
                        </div>
                    </div>
                    <span id="action_menu_btn" hidden><i class="fas fa-ellipsis-v"></i></span>
                    <div class="action_menu">
                        <ul>
                            <li><i class="fas fa-user-circle"></i> View profile</li>
                            <li><i class="fas fa-users"></i> Add to close friends</li>
                            <li><i class="fas fa-plus"></i> Add to group</li>
                            <li><i class="fas fa-ban"></i> Block</li>
                        </ul>
                    </div>
                </div>
                <div class="card-body msg_card_body" v-show="!showMediaOptions">
                    <div class="msg_card_body-bubbles">

<div v-if="!activeChat" class="msg_card_body-logo">
    
</div>
<div v-else-if="activeChat" v-for="m in activeChat.messages">
    
    <div v-if="!m.type" class="d-flex justify-content-start mb-4 chat-bubble">
        <div class="img_cont_msg">
            <img src="assets/images/profile.png" class="rounded-circle user_img_msg">
        </div>
        <div class="msg_cotainer">
            <span>{{m.text | striphtml | newlines}}</span>
        </div>
        <span class="msg_time"><span class="msg_user">{{m.name ||'---'}}</span>&nbsp;&nbsp;{{m.timestamp|formatDate}}</span>
    </div>


    <div v-else="m.type" class="d-flex justify-content-end mb-4 chat-bubble" data-local-id="m.localId" :data-message-id="m.messageId">
       <i v-if="!m.messageId" class="sending fa fa-spinner fa-spin" >&nbsp;</i>
        <div class="msg_cotainer_send">
            <span>{{m.text | striphtml | newlines}}</span>
            <div v-if="m.attachments"> <span class="fa fa-paperclip"></span>&nbsp;{{m.template}} 
                <div class="input-group my-attachments">
                    <img v-for="atch in m.attachments" :src="atch.mediaURL | thumburl" class="">
                </div>
            </div>
            <div v-else-if="m.template">
                <span class="fa fa-tag"></span>&nbsp;{{m.template}}
            </div>
            <span class="msg_time_send">{{m.timestamp|formatDate}}&nbsp;&nbsp;<span class="msg_user">{{m.name ||'---'}}</span></span>
        </div>
        <div class="img_cont_msg">
            <img src="assets/images/profile.png" class="rounded-circle user_img_msg">
        </div>
    </div>

</div>
                    </div>
                    <div class="msg_card_body-panel">
                        <hr/>
                        <div class="msg_card_body-panel-tags">
                        </div>
                    </div>
                </div>
                <div v-show="showMediaOptions" class="card-body media_card_body" >
                    <div class="media_card_body-bubbles">


<div class="media_card_body-bubbles-wrapper">
    <div v-for="media in mediaOptions" class="media_thumb">
            <input :id="'mdeia-'+media.name" type="radio" name="media" :value="media.name" v-model="selectedMedia" />
            <label class="media_thumb_label" :for="'mdeia-'+media.name">
                <img :src="media.url | thumburl">
            </label>
    </div>
</div>

                    </div>
                    <div class="media_card_body-panel hidden">
                        <hr/>
                        <div class="media_card_body-panel-actions">
                            <span class="media_cotainer_smart">Cancel</span>
                            <span class="media_cotainer_smart">Send</span>
                        </div>
                    </div>
                </div>
                
                <div class="card-footer">
                    <div class="input-group my-input-section" v-bind:class="{ fade : !sendEnabled}" >
                        <div class="input-group-append">
                            <span 
                            @click="showMediaOptions=!showMediaOptions"
                            class="input-group-text attach_btn"><i class="fa fa-paperclip"></i></span>
                        </div>
                        <textarea name="" class="form-control type_msg input-message" 
                            placeholder="Type your message..." 
                            autocomplete="off" :disabled="!inputTextEnabled"
                            v-model="message_text"
                            @keydown.enter.exact.prevent
                            @keyup.enter.exact="onSendMessage"
                            @keydown.enter.shift.exact="newline"></textarea>
                        <div class="input-group-append">
                            <span
                                @click="onSendMessage"
                             class="input-group-text send_btn"><i class="fa fa-location-arrow"></i></span>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>

    import Vue from 'vue';
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faTrashAlt,
        faCheck,
        faCalendarAlt,
        faAngleDown,
        faAngleUp,
        faTh,
        faWhatsapp
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import { MyFlags,MyDict,MyConst } from './../global';

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        computed : {
            inputTextEnabled : function (argument) {
               return !!this.$route.params.id;
            },
            sendEnabled : function (argument) {
               return !!this.$route.params.id;
            },
            activeChat : function(){ 
                console.log("id",this.$route.params.id); 
                for(var i in this.$store.getters.StateChats){
                    var chat = this.$store.getters.StateChats[i];
                    if(this.$route.params.id == chat.contactId){
                        return chat;
                    }
                }
                return null;
            },
            mediaOptions : function(){ 
                console.log("mediaOptions=",this.$store.getters.StateMediaOptions)
                return this.$store.getters.StateMediaOptions;
            },
        },
        data: () => ({
            message_text : "",
            selectedMedia : null,
            showMediaOptions : false,
            MyDict,MyFlags,MyConst
        }),
        created () {
            // fetch the data when the view is created and the data is
            // already being observed
            console.log("loading...")
            this.loadMediaOptions();
            this.scrollToBottom();
        },
        updated (){
            this.scrollToBottom();
        },
        mounted (){
            this.scrollToBottom();
        },
        watch: {
            '$route.params.id': function (id) {
               this.scrollToBottom();
            }
        },
        methods: {
            async sendText(text,template){
                var activeChat = this.activeChat;
                if(!activeChat){
                    return;
                }
                if(!text && !template){
                    return;
                }
                var sessionId = activeChat.sessionId;
                //this.scrollToBottom();
                var msg = {
                    text : text, type :  true, timestamp : new Date().getTime(),
                    sender : MyConst.agent,name : MyConst.agent,
                    messageId : "",sessionId : sessionId,
                    template : template
                };
                //activeChat.messages.push(msg);
                this.scrollToBottom();
                try {
                    console.log("beforeSendcta")
                    var resp = await this.$store.dispatch('SendChat', msg);
                    console.log("resp",resp)
                    // msg.messageId = resp.results[0].messageId;
                } catch(e){
                    console.error(e)
                    msg.logs = ["Error While Sending"];
                }
                this.scrollToBottom();
            },
            onSendMessage :  function () {
                this.sendText(this.message_text,this.showMediaOptions ?   this.selectedMedia : null);
                this.message_text = "";
                this.showMediaOptions = false;
            }, newline : function (argument) {
                this.value = `${this.message_text}\n`;
            },
            closSession :  function () {
                this.sendText("/exit_chat");
            },
            scrollToBottom : function (argument) {
                //this.$nextTick(() => {
                    var mcb =document.querySelector('.msg_card_body');
                    if(mcb){
                        console.log("updating",mcb.scrollTop, mcb.scrollHeight);
                        mcb.scrollTop =  mcb.scrollHeight;
                    }
                //});
            },
            async loadMediaOptions(){
                await this.$store.dispatch('LoadMediaOptions')
            },
        },

    }


</script>
