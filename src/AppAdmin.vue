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
  import router from "./app-admin/router";
  const default_layout = "default";

  export default {
    name:"AppAdmin",
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/base.scss";
</style>
