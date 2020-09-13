<template>
  <div>
    <div style="height: 1rem">{{routerId}}</div>
    <div style="height: 1rem"><router-link :to="{router: 'router', params: {id: 111, b: 2}}">111</router-link></div>
    <div style="height: 1rem"><router-link to="222">222</router-link></div>
    <div style="height: 1rem"><router-link to="/">333</router-link></div>
  </div>
</template>
<script>
export default {
  computed: {
    routerId() {
      return `${this.$route.params.id}--111`
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('router beforeRouteEnter', to, from)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('router beforeRouteUpdate', to, from)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('router beforeRouteLeave', to, from)
    next()
  },
}
</script>
<style scoped lang='scss'>
</style>
