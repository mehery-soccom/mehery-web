<template>
     <div class="card mb-sm-3 mb-md-0 contacts_card card-shadow">
        <div class="card-header">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text menu_btn"
                        @click="MyFlags.showSidebar = !MyFlags.showSidebar">
                        <i class="fa fa-bars"></i>
                    </span>
                </div>
                <input type="text" 
                    v-model="search"
                    @keyup="inputSearch"
                    placeholder="Search..." name="" class="form-control search">
                <div class="input-group-prepend">
                    <span class="input-group-text search_btn"><i class="fa fa-search"></i></span>
                </div>
            </div>
        </div>
        <div class="card-body contacts_body">
            <ul class="contacts contact-list">
                <router-link tag="li" v-for="(chat,index) in activeChats"  :key="index"
                    v-bind:class="{data_assigned : chat.assigned, data_unassigned : !chat.assigned }"
                     :id="chat.contactId" :to="'/app/chat/' + chat.contactId + '/' + chat.sessionId" >
                    <div class="d-flex bd-highlight contact-preview">
                        <div class="img_cont">
                            <img :src="chat.profilePic || MyDict.profilePic" class="rounded-circle user_img" alt="profilpicture">
                                <span class="online_icon"></span>
                                <span class="contact_type fa"
                                v-bind:class="MyDict.social[chat.contactType]"
                                ></span>
                        </div>
                        <div class="user_info contact-text">
                            <span class="font-name" >{{chat.name || chat.contactId}}</span>
                            <p class="font-preview" >{{chat.lastmsg.text}}</p>
                        </div>
                        <div class="contact-time" :title="chat.lastmsg.timestamp">
                            <p>{{chat.lastmsg.timestamp | formatDate}} </p>
                            <div v-if="chat.newmsg" class="new-message" id="'nm' + c.contactId"><p>&nbsp;</p></div>  
                        </div>
                    </div>
                </router-link>

            </ul>
            <ul class="contacts contact-list-unassigned">
                
            </ul>
        </div>
        <div class="card-footer">
            &nbsp;<span class="contact_type fa fa-facebook"></span>
            <span class="contact_type fa fa-whatsapp"></span>
            <span class="contact_type fa fa-twitter"></span>
            <span class="contact_type fa fa-telegram"></span>
            <span class="contact_type fa fa-chrome"></span>
            <span
                 v-bind:class="{'toggle-active' : isOnline}" 
                 @click="toggleOnline"
                class="online-toggle fa fa-toggle-on"></span>
        </div>
    </div>
</template>

<script>


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
    import tunnel from './../../services/tunnel';

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        computed : {
            activeChats : function(){ 
                console.log("store",this.$store.getters.StateChats); 
                let search = this.search;
                return (this.$store.getters.StateChats || []).filter(function(chat){
                    return ((chat.name || "").toLowerCase().indexOf(search.toLowerCase()) > -1) && chat.active;
                }).sort(function(a, b){
                    if(a.assigned && !b.assigned){
                        return -1;
                    } else if(!a.assigned && b.assigned){
                        return 1;
                    }
                    return b.lastInComingStamp-a.lastInComingStamp;
                });
            },
            isOnline :  function (){
                if(this.$store.getters.StateMeta){
                    return this.$store.getters.StateMeta.isOnline;
                }
                return false;
            }
        },
        data:() => ({
             MyFlags : MyFlags, MyDict : MyDict,MyConst : MyConst,
             search: '',
             //chats : this.$store.getters.StateChats
        }),
        mounted () {
            // fetch the data when the view is created and the data is
            // already being observed
            this.loadChats();
            var THAT =  this;
            this.tunnel = tunnel.init().instance()
                .on("/agent/onmessage", function(msg){
                    var activeChats = THAT.activeChats;
                    if(!activeChats){
                        return;
                    }
                    if(THAT.$route.params.sessionId != msg.sessionId){
                        for (var i in activeChats) {
                            var chat = activeChats[i];
                            if(msg.sessionId == chat.sessionId){
                                 chat.newmsg = true;
                                 THAT.$forceUpdate();
                            }
                        }
                    }
                });
        },
        beforeUnmount (){
            this.tunnel.off();
        },
        watch: {
            '$route.params.sessionId': function (sessionId) {
                var activeChats = this.activeChats;
                for (var i in activeChats) {
                    var chat = activeChats[i];
                    if(sessionId == chat.sessionId){
                         chat.newmsg = false;
                         this.$forceUpdate();
                    }
                }
            }
        },
        methods: {
            async loadChats(){
                await this.$store.dispatch('GetChats');
                this.$emit('loaded', {});
            },
            async toggleOnline(){
                await this.$store.dispatch('OnlineStatus');
            },
            inputSearch : ()=> {

            },
            loadQuickReply : () => {

            }
        },
    }
</script>
<style type="text/css" scoped="">
    .contacts_body{
        background-color: #f2f3f8;
    }
    .contacts li.router-link-exact-active{
        background-color: rgb(0 0 0 / 6%)
    }
    .card.card_contact_profile .card-body {
        background-color: #f2f3f8!important;
    }
    ul.contacts .user_info *, ul.contacts .contact-time p{
       color : rgba(21, 21, 21, 0.68) !important
    }
</style>