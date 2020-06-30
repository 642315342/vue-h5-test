<template>
  <div class="login">
    <!-- <el-input class="el-input" placeholder="请输入内容" v-model="userName" clearable></el-input> -->
    <!-- <el-input class="el-input" placeholder="请输入内容" v-model="password" show-password clearable> -->
    <!-- </el-input> -->
    <el-button @click="handleEvent">登录</el-button>
    ---------------------------
    <Child :aaa="aaa" @click="changeA"/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
// import Hello from '@/components/HelloWorld.vue'
import s from '@/components/aaa'
import { login } from '@/api'

console.log(s)
export default {
  data() {
    return {
      id: 111,
      userName: 'zhangsan',
      password: '123456',
      arr1: [0, 1, 2],
      childShow: false,
      aaa: 'aaa',
    }
  },
  computed: {
    show() {
      return 111
    },
  },
  components: {
    Child: () => import(/* webpackPrefetch: true */'./components/Child.vue'),
    // Hello,
  },
  mounted() {
    console.log('this.$children.length', this.$children.length)
  },
  beforeUpdate() {
    console.log('父组件 beforeUpdate')
  },
  updated() {
    console.log('父组件 updated')
  },
  methods: {
    ...mapActions(['login']),
    methNow() {
      return new Date().getTime()
    },
    changeA(val) {
      this.aaa = val
    },
    eventTest(...arg) {
      console.log('myEvent触发；', arg)
    },
    handleEvent() {
      login({
        username: this.userName,
        password: this.password,
      }).then((res) => {
        localStorage.setItem('token', res.token)
        this.$router.push('/about')
      })
    },
  },
}
</script>
<style scoped lang='scss'>
.login {
  // width: 70%;
  // margin: 0.3rem auto;
  padding: 0.3rem;
  text-align: center;
}
.el-input {
  &:nth-child(2) {
    margin: 0.3rem 0;
  }
}
</style>
