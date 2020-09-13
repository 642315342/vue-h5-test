<template>
<div>
  <p>i am hello component</p>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // inheritAttrs: false,
  props: {
    title: String,
    value: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
