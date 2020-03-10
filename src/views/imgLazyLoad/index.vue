<template>
  <div class="scroll-test"  @scroll="myThrottle(handleScroll)()">
    <div class="content">
      <p>一些内容</p>
      <p>一些内容</p>
      <p>一些内容</p>
      <p>一些内容</p>
    </div>
    <div>
      <img src=""  class="image-item" lazyload="true" data-original="https://img01.az.jd.com/ins-jdme/image/list_401.png" />
      <img src=""  class="image-item" lazyload="true" data-original="https://img01.az.jd.com/ins-jdme/image/list_402.png" />
      <img src=""  class="image-item" lazyload="true" data-original="https://img01.az.jd.com/ins-jdme/image/list_403.png" />
      <img src=""  class="image-item" lazyload="true" data-original="https://img01.az.jd.com/ins-jdme/image/list_404.png" />
      <img src=""  class="image-item" lazyload="true" data-original="https://img01.az.jd.com/ins-jdme/image/list_405.png" />
      <img src=""  class="image-item" lazyload="true" data-original="https://img01.az.jd.com/ins-jdme/image/list_406.png" />
      <img src=""  class="image-item" lazyload="true" data-original="https://img01.az.jd.com/ins-lbl/image/2.png" />
      <img src=""  class="image-item" lazyload="true" data-original="https://img01.az.jd.com/ins-lbl/image/3.png" />
      <img src=""  class="image-item" lazyload="true" data-original="https://img01.az.jd.com/ins-lbl/image/4.png" />
      <img src="" class="image-item"  lazyload="true" data-original="https://img01.az.jd.com/ins-lbl/image/5.png"/>
      <img src="" class="image-item"  lazyload="true" data-original="https://img01.az.jd.com/ins-lbl/image/6.png"/>
      <img src="" class="image-item"  lazyload="true" data-original="https://img01.az.jd.com/ins-lbl/image/7.png"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      viewHeight: 0,
    }
  },
  mounted() {
    this.viewHeight = document.documentElement.clientHeight // 获取可视区高度
    this.myThrottle(this.handleScroll)()
  },
  methods: {
    handleScroll() {
      const eles = document.querySelectorAll('.image-item[data-original][lazyload]')
      Array.from(eles).forEach((item) => {
        if (item.dataset.original === '') {
          return
        }
        // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
        const rect = item.getBoundingClientRect()
        if (rect.top >= 0 && rect.top < this.viewHeight) {
          const img = new Image()
          img.onload = function onload() {
            // eslint-disable-next-line no-param-reassign
            item.src = img.src
          }
          img.src = item.dataset.original
          item.removeAttribute('data-original') // 移除属性，下次不再遍历
          item.removeAttribute('lazyload')
        }
      })
    },
    myThrottle(fn, wait = 200) {
      let cur = 0
      let pre = 0
      return function throttle(...args) {
        cur = +new Date()
        if (cur - pre >= wait) {
          fn.apply(this, args)
          pre = cur
        }
      }
    },
  },
}
</script>
<style scoped lang='scss'>
.scroll-test {
  height: 100vh;
  overflow: scroll;
  .content {
    line-height: 1rem;
    text-align: center;
  }
  .image-item {
      height: 5rem;
      display: block;
      margin: 0 auto;
  }
}
</style>
