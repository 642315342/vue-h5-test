<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Schema from 'async-validator'
import { inject } from '@vue/composition-api'

export default {
  props: {
    prop: {
      type: String,
    },
  },
  setup(props) {
    const inputFnData = inject('inputFnData')
    function validate() {
      // 每个item都有一个validata方法
      // 1、获取rule校验规则
      const rules = inputFnData.rules.value[props.prop]
      // 2、获取model数据模型
      const value = inputFnData.form.value[props.prop]
      const descriptor = {
        [props.prop]: rules,
      }
      const schema = new Schema(descriptor)
      return schema.validate(
        { [props.prop]: value },
        (errors) => {
          if (errors) {
            this.error = errors[0].message
          } else {
            this.error = ''
          }
        },
      )
    }
    return {
      validate,
    }
  },
}
</script>
<style scoped lang='scss'>
</style>
