<template>
  <div class="input-demo">
    <label for="">{{label}}</label>
    <div class="main">
      <input
        :type="type"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      <div class="error" v-if="error">{{message}}</div>
    </div>
    <div class="close" v-show="closeShow" @click="handleClose">X</div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    clearale: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
    },
  },
  data() {
    return {
      isFocus: false,
    }
  },
  computed: {
    closeShow() {
      return this.value.length && this.clearale && this.isFocus
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    handleClose() {
      this.$emit('input', '')
    },
    handleFocus() {
      this.isFocus = true
    },
    handleBlur() {
      setTimeout(() => {
        this.isFocus = false
      }, 10)
    },
  },
}
</script>
<style scoped lang='scss'>
.input-demo {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #3333;
  font-size: 0.28rem;
  color: #333333;
  position: relative;
  label {
    flex: 3;
    text-align: left;
  }
  .main {
    flex: 10;
    height: 100%;
    display: flex;
    align-items: center;
  }
  input {
    display: block;
    border: none;
    outline: none;
    padding-right: 0.8rem;
    &::placeholder {
      font-size: 0.28rem;
      color: #BBBBBB;
    }
  }
  .error {
    position: absolute;
    bottom: 0;
    color: #fb4a41;
  }
  .close {
    width: 0.4rem;
    height: 0.4rem;
    font-size: 0.2rem;
    color: #999 ;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #999;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 0.3rem;
    transform: translateY(-50%);
  }
}
</style>
