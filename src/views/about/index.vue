<template>
  <div>
    <section>
      轻轻松松实现防抖
    </section>
  </div>
</template>
<script>
// import { reactive, markRaw } from '@vue/composition-api'

export default {
  // setup() {

  //   // const foo = markRaw({
  //   //   nested: true,
  //   // })
  //   const bar = reactive({
  //     nested: 11,
  //   })
  //   // console.log(markRawhhhhhhhhhh)
  //   // console.log(foo)
  //   return {
  //     // foo,
  //     bar,
  //   }
  // },
  data() {
    return {
      bbb: '222',
    }
  },
  mounted() {
    console.log(this.$options.data())
  },
}
</script>
<style scoped lang='scss'>
</style>
