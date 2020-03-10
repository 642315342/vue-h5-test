<template>
  <div>
    <el-input class="search" v-model="searchVal" placeholder="请输入内容"></el-input>
    <product-list :searchVal="searchVal"></product-list>
  </div>
</template>
<script>
import productList from './components/productList.vue'

export default {
  data() {
    return {
      searchVal: '',
    }
  },
  components: {
    productList,
  },
}
</script>
<style scoped lang='scss'>
.search {
  margin: 0.2rem 0;
}
</style>
