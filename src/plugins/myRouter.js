class History {
  constructor() {
    this.current = ''
  }
}
class MyRouter {
  constructor(options) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []
    this.routesMap = this.createMap()
    this.route = ''
    this.init()
  }

  init() {
    if (this.mode === 'hash') {
      window.location.hash = window.location.hash ? window.location.hash : '/'
      window.addEventListener('load', () => {
        this.route = window.location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.route = window.location.hash.slice(1)
      })
    } else {
      window.addEventListener('load', () => {
        this.route = window.location.pathname
      })
      window.addEventListener('popstate', () => {
        this.route = window.location.pathname
      })
    }
  }

  createMap() {
    return this.routes.reduce((res, cur) => {
      res[cur.path] = cur.component;
      return res
    }, {})
  }
}

MyRouter.install = function install(Vue) {
  if (MyRouter.install.installed) {
    return
  }
  MyRouter.install.installed = true
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) {
        this._root = this
        this._router = this.$options.router // 把我们的 插件 注册成为Vue组件的一个属性
        Vue.util.defineReactive(this._router, 'route')
      } else {
        this._root = this.$parent && this.$parent._root
      }
    }
  })
  Vue.component('router-view', {
    render(h) {
      const current = this._self._root._router.route
      return h(this._self._root._router.routesMap[current])
    },
  })
}
export default MyRouter
