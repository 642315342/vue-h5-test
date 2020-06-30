<template>
  <div>
    <div style="height: 2rem"></div>
    <Input
      ref="value1"
      v-model="from.value1"
      label="投保人姓名"
      clearale
      placeholder="请输入投保人姓名"
      :error="rules.value1.error"
      :message="rules.value1.message"
    />
    <div style="height: 2rem"></div>
    <Input
      ref="value2"
      v-model="from.value2"
      label="证件号码"
      placeholder="请输入证件号码"
      clearale
      :error="rules.value2.error"
      :message="rules.value2.message"
    />
    <div style="height: 2rem"></div>
    <Input
      ref="value3"
      v-model="from.value3"
      label="手机号码"
      clearale
      placeholder="请输入手机号码"
      :error="rules.value3.error"
      :message="rules.value3.message"
    />
    <div style="height: 2rem"></div>
    <div style="height: 2rem"></div>
    <div style="height: 2rem"></div>
    <div style="height: 2rem"></div>
    <div style="height: 2rem"></div>
    <el-button @click="handleSubmit">提交</el-button>
  </div>
</template>
<script>
import Input from './input.vue'

export default {
  data() {
    return {
      _qa: '222',
      $qa: '222',
      from: {
        value1: '',
        value2: '',
        value3: '',
      },
      rules: {
        value1: {
          required: true,
          message: '',
          reqMessage: '请输入投保人姓名',
          error: false,
          reg: /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/,
          regMessage: '请输入正确的姓名',
        },
        value2: {
          required: true,
          message: '',
          reqMessage: '请输入证件号码',
          error: false,
        },
        value3: {
          required: true,
          message: '',
          reqMessage: '请输入手机号码',
          error: false,
          reg: /^\d{3}$/,
          regMessage: '请输入正确的手机号',
        },
      },
      errorInput: '',
      isError: false,
      arr: {},
    }
  },
  components: {
    Input,
  },
  methods: {
    checkRules() {
      let res = true
      Object.keys(this.rules).forEach((key) => {
        if (this.rules[key].required && !this.from[key]) {
          this.errorFn(key)
          if (res) {
            console.log('第一个错误是', key)
            this.errorInput = key
          }
          res = false
        } else {
          this.rules[key].error = false
          this.errorInput = ''
        }
        if (this.rules[key].reg && this.from[key]) {
          if (!this.rules[key].reg.test(this.from[key].trim())) {
            this.errorFn(key, 'regMessage')
            if (res) {
              console.log('第一个错误是', key)
              this.errorInput = key
            }
            res = false
          } else {
            this.rules[key].error = false
            this.errorInput = ''
          }
        }
      })
      if (res) {
        this.isError = false
      }
    },
    errorFn(key, message = 'reqMessage') {
      this.isError = true
      this.rules[key].error = true
      this.rules[key].message = this.rules[key][message]
      // this.errorInput = !this.from[key]
    },
    handleSubmit() {
      console.log('22--222', this._data.$qa, this.$data._qa)

      this.checkRules()
      if (!this.isError) {
        console.log('提交')
      } else {
        this.$nextTick(() => {
          this.$refs[this.errorInput].$el.scrollIntoView()
        })
      }
    },
  },
}
</script>
