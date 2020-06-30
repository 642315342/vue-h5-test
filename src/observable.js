import Vue from 'vue'

export const stateObs = Vue.observable({ 
  count: 0,
})

export const mutations = {
  setCount(val) {
    stateObs.count = val
  },
}
