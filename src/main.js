import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './assets/scss/base.scss'
import 'swiper/dist/css/swiper.css'
// require.context
// const requireComponent = require.context('./views', true, /\.vue$/);
// console.log(requireComponent(requireComponent.keys()[0]));

Vue.config.productionTip = false

// require styles
Vue.use(VueAwesomeSwiper /* { default global options } */)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
