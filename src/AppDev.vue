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
  import router from "./app-dev/router";


  Vue.component('dev-default-layout', () => import('./app-dev/Layout/baseLayout.vue'));
  Vue.component('dev-userpages-layout', () => import('./app-dev/Layout/pagesLayout.vue'));


  const default_layout = "default";

  export default {
    computed: {
      layout() {
        return 'dev-' + (this.$route.meta.layout || default_layout) + '-layout';
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/base.scss";
</style>
