<template>
  <div id="app">
    <!-- <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.isKeepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view v-if="!$route.meta.isKeepAlive"></router-view>
    </transition> -->
    <router-view></router-view>

  </div>
</template>

<script>
export default {};
</script>

<style>
  .fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
