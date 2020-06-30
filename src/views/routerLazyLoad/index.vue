<template>
  <div class="router-lazy-load" ref="lists" @scroll="hadnleScroll">
    <div class="b"></div>
    <div class="a" :style="{ transform: getTransform }">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      viewHeight: 0,
      transform: 0,
    }
  },
  computed: {
    testA() {
      return this.a
    },
    // 偏移量对应的style
    getTransform() {
      return 'translate3d(0,' + this.transform + 'px,0)'
    },
  },
  components: {
  },
  mounted() {
    this.viewHeight = document.documentElement.clientHeight // 获取可视区高度
    Array.from([1, 2, 3])
    console.log(Array.from([1, 2, 3]))
    this.a = 1
  },
  methods: {
    hadnleScroll() {
      this.transform = this.$refs.lists.scrollTop - (this.$refs.lists.scrollTop % 200)
    },
  },
}
</script>
<style lang="scss">
.router-lazy-load {
  height: 100vh;
  overflow: auto;
  position: relative;
}
.b {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 10000px;
}
.a {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.item {
  width: 80%;
  margin: 0 auto;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: #fff;
  border: 1px solid #333;
  box-sizing: border-box;
}
</style>
