<template>
     <div class="card mb-sm-3 mb-md-0 contacts_card card-shadow">
        <div class="card-header">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text menu_btn"
                        @click="MyFlags.showSidebar = !MyFlags.showSidebar">
                        <i class="fa fa-bars"></i>
                    </span>
                    <div class="action_menu menu_btn_menu">
                        <ul>
                            <li><i class="fas fa-user-circle"></i> View profile</li>
                            <li><i class="fas fa-users"></i> Add to close friends</li>
                            <li><i class="fas fa-plus"></i> Add to group</li>
                            <li><i class="fas fa-ban"></i> Block</li>
                        </ul>
                    </div>
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
                <router-link tag="li" v-for="chat in activeChats" 
                    v-bind:class="{data_assigned : chat.assigned, data_unassigned : !chat.assigned }"
                     :id="chat.contactId" :to="'/app/chat/' + chat.contactId" >
                    <div class="d-flex bd-highlight contact-preview">
                        <div class="img_cont">
                            <img :src="chat.profilePic || MyDict.profilePic" class="rounded-circle user_img" alt="profilpicture">
                                <span class="online_icon"></span>
                                <span class="contact_type fa"
                                v-bind:class="MyDict.social[chat.contactType]"
                                ></span>
                        </div>
                        <div class="user_info contact-text">
                            <span class="font-name" >{{chat.name}}</span>
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
        created () {
            // fetch the data when the view is created and the data is
            // already being observed
            console.log("loading...")
            this.loadChats();
        },
        methods: {
            async loadChats(){
                await this.$store.dispatch('GetChats')
            },
            async toggleOnline(){
                await this.$store.dispatch('OnlineStatus')
            },
            inputSearch : ()=> {

            }
        },

    }


</script>
