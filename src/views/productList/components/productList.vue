<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul class="list" v-infinite-scroll="getMore" infinite-scroll-disabled="disabled">
      <div
        v-for="(product) in productLists"
        class="list-item product-item"
        :key="product.id"
        @click="handleClick(product.id)"
      >
        <img :src="product.posterUrl" alt="logo" />
        <div class="content">
          <p class="title">{{product.productName}}</p>
          <p>{{product.cmsDetail}}</p>
          <p>
            <span class="red">{{product.minPremium}}</span>
            元起
          </p>
        </div>
      </div>
    </ul>
  </div>
</template>
<script>
import { fetch } from '@/lib/http';
import * as api from '@/api';

export default {
  props: ['searchVal'],
  data() {
    return {
      productLists: [],
      pageNum: 1,
      hasNextPage: true,
    };
  },
  created() {
    console.log('productLists created');
  },
  beforeDestroy() {
    console.log('productLists destory');
  },
  computed: {
    disabled() {
      return !this.hasNextPage;
    },
  },
  watch: {
    searchVal() {
      this.pageNum = 1;
      this.fetchProduct(false);
    },
  },
  methods: {
    getMore() {
      this.fetchProduct(true);
    },
    handleClick(id) {
      console.log(id);
      this.$router.push(`/product/${id}`);
    },
    fetchProduct(isgetMore) {
      fetch(api.productList, {
        productName: this.searchVal,
        pn: this.pageNum,
      }).then((res) => {
        const newList = isgetMore
          ? [...this.productLists, ...res.list]
          : res.list;
        this.productLists = newList;
        this.pageNum += 1;
        this.hasNextPage = res.hasNextPage;
      });
    },
  },
};
</script>
<style scoped lang='scss'>
.infinite-list-wrapper {
  height: 90vh;
}
.product-item {
  height: 40vw;
  img {
    width: 25vw;
  }
}
.content {
  margin-left: 2rem;
}
</style>
