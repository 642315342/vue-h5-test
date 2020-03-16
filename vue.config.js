const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  // 选项...
  // 当使用基于 HTML5 history.pushState 的路由时；
  // 当使用 pages 选项构建多页面应用时。
  publicPath: '',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'assets',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用
  // Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: true,
  // 多页面
  pages: undefined,
  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  lintOnSave: true,
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: true,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项
  // 仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
  crossorigin: undefined,
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你
  // 构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。需要注意的是该选项仅影响由 html-webpack-plugin
  // 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。另外，当启用 SRI 时，preload resource hints
  // 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。
  integrity: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },

}
/**
 *
    //允许我们更细粒度的控制 webpack 的内部配置,例如：以下操作我们可以成功修改 webpack 中 module 项里配置 rules 规则为图片下的 url-loader 值，将其 limit 限制改为 5M
    chainWebpack: config => {
        config.module.rule("images")
        .use("url-loader")
        .tap(options =>
        merge(options, {
        limit: 5120
    }));
    },
    //可以在正式环境下关闭错误报告 console.log...
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // webpack-dev-server 相关配置
    devServer: { // 设置代理
        hot: true, //热加载
        host: '0.0.0.0', //ip地址
        port: 8085, //端口
        https: false, //false关闭https，true为开启
        open: true, //自动打开浏览器
        proxy: {
            '/api': { //本地
            target: 'http://192.168.102.13:8080/',
            // 如果要代理 websockets
            ws: true,
            changeOrigin: true
      },
      '/test': { //测试
        target: 'http://172.22.0.58:8082/'
      },
      '/pre-release': {  //预发布
        target: 'http://XXX.com/'
      },
      '/production': { //正式
        target: 'http://XXX.com/'
      }
        }
    },
    pluginOptions: { // 第三方插件配置
        // ...
    }
 *
 */
