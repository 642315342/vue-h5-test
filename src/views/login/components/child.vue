<template functional>
  <div>
    我是子组件
    {{props.aaa}}
  </div>
</template>
<script>
export default {
  props: ['aaa'],
}
</script>
<style scoped lang='scss'>
</style>
