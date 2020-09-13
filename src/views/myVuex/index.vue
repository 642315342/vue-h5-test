<template>
  <div>
    {{count}}
    <div @click="handleClick">点击</div>
  </div>
</template>
<script>
import { stateObs, mutations } from '@/observable'

export default {
  data() {
    return {
      aaa: '1',
    }
  },
  computed: {
    count() {
      return stateObs.count
    },
  },
  mounted() {
    console.log(this.$options.data())
  },
  methods: {
    handleClick() {
      mutations.setCount(3)
      this.$router.push('./about')
    },
  },
}
</script>
<style scoped lang='scss'>
</style>
