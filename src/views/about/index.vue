<template>
  <div>
    <section @click="handleClick">
      轻轻松松实现防抖{{state.test1}}
    </section>
  </div>
</template>
<script>
// import { reactive, markRaw } from '@vue/composition-api'
import { state, mutation } from '@/views/myVuex/global'

export default {
  data() {
    return {
      bbb: '222',
      state,
    }
  },
  mounted() {
    console.log(this.$options.data())
  },
  methods: {
    handleClick() {
      mutation.setTest1('new 222')
      setTimeout(() => {
        this.$router.push('/')
      }, 1000)
    },
  },
}
</script>
<style scoped lang='scss'>
</style>
