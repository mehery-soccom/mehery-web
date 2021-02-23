<template>
        <div class="w3-sidebar w3-bar-block w3-white w3-card w3-animate-left"
            v-show="MyFlags.showSidebar" id="mySidebar">
            <div class="mySidebar-container">
                <button @click="MyFlags.showSidebar = !MyFlags.showSidebar"
                    class="w3-bar-item w3-large menu_btn_close fa fa-arrow-left">&nbsp;</button>
                <a :href="MyConst.appPrefix + '/auth/logout'" class="w3-bar-item w3-button"><i
                    class="fas fa-sign-out-alt"></i> Logout</a>
                <hr />
                <span theme="dashboard.agent.metalic" class="w3-bar-item w3-button"
                    hidden><i class="fas fa-atom"></i> Metalic</span> <span
                    theme="dashboard.agent.indigo" class="w3-bar-item w3-button" hidden><i
                    class="fas fa-atom"></i> Indigo</span> <span
                    theme="dashboard.agent.bubble" class="w3-bar-item w3-button" hidden><i
                    class="fas fa-atom"></i> Bubble</span>
                <div class="sidebar-logo"></div>
            </div>
        </div>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import { MyFlags,MyConst } from './../global';


    function menuFilter(menu){
        var header = null;
        return menu.filter(function(item){
            if(item.header == true){
                header = item;
                return true;
            }  
            if(item.child){
                item.child = menuFilter(item.child);
                item.enabled = (item.child.length > 0);
            }
            if(item.disabled === false || item.enabled === true){
                if(header)
                    header.enabled = true;
                return true;
            }
            return false;
        }).filter(function(item){
            return item.disabled === false || item.enabled === true;
        });
    }
    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        props: {
            sidebarbg: String,
        },
        data : () => ({
            MyFlags : MyFlags, MyConst : MyConst
        }),
        methods: {

            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < '1350') {
                    el.classList.add('closed-sidebar', 'closed-sidebar-md');
                } else {
                    el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                }
            },
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>

<style>
    .logo-src{
        height: 45px;
        width: 165px;
    }
    .closed-sidebar .app-sidebar .logo-src {
        width: 40px;
        background-position: 44px 5px;
        height: 49px;
    }
    .closed-sidebar-open.closed-sidebar .app-sidebar .logo-src { 
       width: 40px;
        background-position: 44px 5px;
        height: 49px;
    }
</style>
