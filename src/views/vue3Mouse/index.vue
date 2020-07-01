<template>
  <div>
    {{mousePosition.x}}-{{mousePosition.y}}
  </div>
</template>
<script>
import useMousePosition from './mouse'

export default {
  setup() {
    const { mousePosition } = useMousePosition()
    // 不能进行结构， 会丢失响应式
    return {
      mousePosition,
    }
  },
}
</script>
<style scoped lang='scss'>
</style>
