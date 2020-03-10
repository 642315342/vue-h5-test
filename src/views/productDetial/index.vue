<template>
  <div class="detail">
    <div>{{msg}}</div>
    <div>{{id}}</div>
    <div class="footer">footer</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'productDetail',
      id: '',
    }
  },
  created() {
    console.log('productDetail created')
    this.id = this.$route.params.id
  },
  beforeDestroy() {
    console.log('productDetail destory')
  },
}
</script>
<style scoped lang='scss'>
.detail {
  height: 1000px;
  background-color: red;
  font-size: 50px;
  position: relative;
  color: blue;
}
.footer {
  position: absolute;
  bottom: 0;
  font-size: 50px;
}
</style>
