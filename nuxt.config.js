module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '云课堂',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'zc-ckj class-pc-nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  css: [
    {
      src: '~assets/less/index.less',
      lang: 'less'
    },
    'element-ui/lib/theme-chalk/index.css',
    '~assets/less/theme/index.css'
  ],
  // Global env
  env: {
    __ENV: process.env.__ENV
  },
  /**
   * 缓存配置
   */
  cache: true,
  render: {
    bundleRenderer: {
      cache: require('lru-cache') ({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  },
  plugins: [
    { src: '~plugins/element-ui.js', ssr: true},
    '~plugins/globle.js'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // env: {
  //   url: 'http://***.com' /*全局asyncData({env})的配置，比如请求头URL常量*/
  // },
 /*代理IP的使用*/
  // proxy: [ ['/api', {target: 'http://**.com'}] ],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios', 'element-ui'],
    babel:{
      "plugins": [["component", [
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]],
      comments: true
    },
   /*为客户端和服务端的构建配置进行手工的扩展处理 */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
} 
