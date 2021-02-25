<template>
<div class="card mb-sm-3 mb-md-0 card_contact_profile">
    
    <div class="card-header"></div>
    <div class="card-body">
        <div class="information" style="display: flex;">
                <img :src="activeChat.profilePic || MyDict.profilePic" class="rounded-circle user_img">
        </div>
    </div>
    <div class="card-footer">
            <div>
                <p>{{activeChat.name}}</p>
            </div>
            
            <div>
                <p v-if="activeChat.email"><span class="fa fa-envelope"/> {{activeChat.email}}</p>
            </div>

            <div>
                <p v-if="activeChat.phone"><span class="fa fa-phone"/> {{activeChat.phone}}</p>
            </div>

            <div id="listGroups">
                <h1></h1>
            </div>
    </div>


</div>
</template>

<script>

    import { MyFlags,MyDict,MyConst } from './../global';

    export default {
        components: {
        },
        computed : {
            activeChat : function(){ 
                console.log("id",this.$route.params.id); 
                for(var i in this.$store.getters.StateChats){
                    var chat = this.$store.getters.StateChats[i];
                    if(this.$route.params.id == chat.contactId){
                        return chat;
                    }
                }
                return {};
            },
        },
        data: () => ({
            MyDict,MyFlags,MyConst
        }),
        created () {
            // fetch the data when the view is created and the data is
            // already being observed
            console.log("loading...")
        },
        updated (){
        },
        mounted (){
        },
        watch: {
        },
        methods: {
        },

    }


</script>
