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
    <div class="input-group">
      <Input v-model="from.name" label="姓名" placeholder="请输入姓名"/>
      <Input v-model="from.cardNum" label="身份证" placeholder="请输入身份证"/>
      <Input v-model="from.age" label="年龄" placeholder="请输入年龄"/>
    </div>
    <div class="footer">
      <div class="service"><img src="@/assets/logo.png" alt=""> </div>
      <div class="price"><span>￥{{price}}</span> 起/年</div>
      <div class="button" @click="finallyClick">我要投保</div>
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
import Input from './input.vue'

// 计划list Fn
function listFn() {
  const state = reactive({
    listData: [],
    curIndex: 0,
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
  const price = computed(() => state.listData[state.curIndex]?.price)

  onMounted(() => {
    init()
  })
  return {
    ...toRefs(state),
    filterList,
    listTitleClick,
    price,
  }
}
function inputFn() {
  const state = reactive({
    from: {
      name: '',
      cardNum: '',
      age: '',
    },
    rules: {
      name: { required: true, message: '请输入活动名称', trigger: 'blur' },
      cardNum: { required: true, message: '请输入活动名称', trigger: 'blur' },
      age: { required: true, message: '请输入活动名称', trigger: 'blur' },
    },
  })
  function checkInput() {
    const keys = Object.keys(state.rules)
    for (let i = 0; i < keys.length; i++) {
      if (state.rules[keys[i]].required) {
        if (!state.from[keys[i]]) {
          console.log(keys[i], 'is required')
          break
        }
      }
    }
  }
  return {
    ...toRefs(state),
    checkInput,
  }
}
// finallyClick 我要投保 点击要调用 inputFn 中的校验fn
function footerFn(inputFnData) {
  function finallyClick() {
    inputFnData.checkInput()
  }
  return {
    finallyClick,
  }
}
export default {
  setup() {
    const listFnData = listFn()
    const inputFnData = inputFn()
    const footerFnData = footerFn(inputFnData)
    return {
      ...listFnData,
      ...inputFnData,
      ...footerFnData,
    }
  },
  components: {
    Input,
  },
}
</script>
<style scoped lang='scss'>
@import '@/assets/scss/minix.scss';
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
  .input-group {
    padding: 0 0.3rem;
  }
  .footer {
    width: 100%;
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
      flex: 1;
      text-align: center;
      span {
        color: red;
        font-size: 0.3rem;
      }
    }
    .button {
      width: 2rem;
      height: 100%;
      @include flex-center;
      background-color: red;
      color: #fff;
    }
  }
}
</style>
