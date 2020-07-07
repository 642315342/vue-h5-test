export const state = {
  test1: '111',
  test2: '222',
  test3: '333',
}

export const mutation = {
  setTest1(val) {
    state.test1 = val
    console.log('state.test1', state.test1)
  },
  setTest2() {
    state.test2 = 'new 222'
  },
}
