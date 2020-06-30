<template>
  <div class="input-test">
    <div class="img-header">
      <img src="@/assets/timg5.jpg" alt="">
    </div>
    <div class="list">
      <div class="list-title">
        <div
          class="title-item"
          :class="curIndex === index ? 'active' : ''"
          v-for="(item, index) in listData"
          :key="index"
          @click="listTitleClick(index)"
        >
          {{item.title}}
        </div>
      </div>
      <div class="filter-list-item" v-for="(item, index) in filterList" :key="index">
        <div>{{item.l}}</div>
        <div>{{item.r}}</div>
      </div>
    </div>
    <div class="footer">
      <div class="service"><img src="@/assets/logo.png" alt=""> </div>
      <div class="price"><span>￥{{price}}</span>起/年</div>
      <div class="button">我要投保</div>
    </div>
  </div>
</template>
<script>
import {
  reactive,
  onMounted,
  toRefs,
  computed,
} from '@vue/composition-api'
import { fetchListData } from '@/api'

export default {
  setup() {
    const state = reactive({
      listData: [],
      curIndex: 0,
      price: 0,
    })
    // methods
    async function init() {
      const listData = await fetchListData()
      state.listData = listData
    }
    function listTitleClick(index) {
      state.curIndex = index
    }
    // computed
    const filterList = computed(() => state.listData[state.curIndex]?.children)
    onMounted(() => {
      init()
    })
    return {
      ...toRefs(state),
      filterList,
      listTitleClick,
    }
  },
}
</script>
@import '@/assets/scss/minix.scss'
<style scoped lang='scss'>

.input-test {
  .list {
    margin-top: 0.2rem;
    .list-title {
      height: 0.8rem;
      display: flex;
      align-items: center;
    }
    .title-item {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #333;
      &:nth-child(n+2) {
        border-left: none;
      }
      &.active {
        color: red;
        border-bottom: none;
      }
    }
    .filter-list-item {
      padding: 0 0.3rem;
      height: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .footer {
    height: 1rem;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    .service {
      width: 1rem;
      height: 1rem;
    }
    .price {

    }
    .button {
      width: 2rem;
      height: 100%;
      background-color: red;
      color: #fff;
    }
  }
}
</style>
