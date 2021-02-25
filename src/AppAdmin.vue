<template>
  <div id="app">
    <component :is="layout">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </component>
  </div>
</template>

<script>
  import Vue from 'vue';
  import router from "./app-admin/router";
  import DataStore from "./app-admin/Service/DataStore";

  Vue.component('admin-default-layout', () => import('./app-admin/Layout/baseLayout.vue'));
  Vue.component('admin-userpages-layout', () => import('./app-admin/Layout/pagesLayout.vue'));
  
  const default_layout = "default";


  export default {
    name:"AppAdmin",
    computed: {
      layout() {
        return 'admin-' +(this.$route.meta.layout || default_layout) + '-layout';
      }
    },
    created (){
      this.$store.registerModule("DataStore",DataStore);
    },
  }
</script>

<style lang="scss">
  @import "./assets/base.scss";
</style>
