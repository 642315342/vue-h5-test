import { reactive, onMounted, onUnmounted } from '@vue/composition-api'

export default function useMousePosition() {
  const mousePosition = reactive({
    x: 0,
    y: 0,
  })
  function update(e) {
    console.log('mousemove', e.pageX, e.pageY)
    mousePosition.x = e.pageX
    mousePosition.y = e.pageY
    console.log('mousePosition', mousePosition.x, mousePosition.y)
  }
  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.reomveEventListener('mousemove', update)
  })
  return {
    mousePosition,
  }
}
// import { ref, onMounted, onUnmounted } from '@vue/composition-api'

// export default function useMousePosition() {
//   const x = ref(0)
//   const y = ref(0)
//   function update(e) {
//     console.log('mousemove', e.pageX, e.pageY)
//     x.value = e.pageX
//     y.value = e.pageY
//     console.log('mousePosition', x, y)
//   }
//   onMounted(() => {
//     window.addEventListener('mousemove', update)
//   })
//   onUnmounted(() => {
//     window.reomveEventListener('mousemove', update)
//   })
//   return {
//     x,
//     y,
//   }
// }
