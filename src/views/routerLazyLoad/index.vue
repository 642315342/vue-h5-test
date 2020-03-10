<template>
  <div class="detail">
      <div class="b" @click="goBack2">list 0</div>
      <div class="a">detail 1</div>
      <div class="a">detail 2</div>
      <div class="a">detail 3</div>
      <div class="a">detail 4</div>
      <div class="a">detail 5</div>
  </div>
</template>
<script>
export default {
  methods: {
    goBack2() {
      this.$router.push('/2')
    },
  },
}
</script>
<style scoped lang='scss'>
.a, .b {
  height: 300px;
  background-color: rgb(153, 130, 130);
  font-size: 50px;
  line-height: 300px;
  text-align: center;
  color: #000;
  border-bottom: #000 5px solid;
}
.b {
  height: 100px;
  line-height: 100px;
}
</style>
