<template>
  <div>
    <!-- 使用 toRefs 才能解构直接使用 -->
    {{x}}-{{y}}
    <!-- {{mousePosition.x}}-{{mousePosition.y}} -->
  </div>
</template>
<script>
import { toRefs } from '@vue/composition-api'
import useMousePosition from './mouse'

export default {
  setup() {
    const { mousePosition } = useMousePosition()
    // 不能进行结构， 会丢失响应式 需要使用 toRefs
    return {
      ...toRefs(mousePosition),
    }
  },
}
</script>
<style scoped lang='scss'>
</style>
