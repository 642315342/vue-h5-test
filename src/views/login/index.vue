<template>
  <div class="login">
    <el-input class="el-input" placeholder="请输入内容" v-model="userName" clearable></el-input>
    <el-input class="el-input" placeholder="请输入内容" v-model="password" show-password clearable></el-input>
    <el-button @click="handleEvent">登录</el-button>
    <child aaa="asdasd"/>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      id: 111,
      userName: 'lal',
      password: 'lpz',
      arr1: [0, 1, 2],
    };
  },
  components: {
    child: () => import('./component'),
  },
  created() {
    this.$on('myEvent', this.eventTest);
  },
  beforeDestroy() {
    // console.log('login destory');
  },
  methods: {
    ...mapActions(['login']),
    methNow() {
      return new Date().getTime();
    },
    eventTest(...arg) {
      console.log('myEvent触发；', arg);
    },
    handleEvent() {
      this.$emit('myEvent', 'a', 'b');
    },
  },
};
</script>
<style scoped lang='scss'>
.login {
  width: 70%;
  margin: 0.3rem auto;
  text-align: center;
}
.el-input {
  &:nth-child(2) {
    margin: 0.3rem 0;
  }
}
</style>
