import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './assets/scss/base.scss'
// require.context
// const requireComponent = require.context('./views', true, /\.vue$/);
// console.log(requireComponent(requireComponent.keys()[0]));

Vue.config.productionTip = false

// require styles
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
