const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8087,
    open: true,//启动项目打开浏览器
    hot: true,//热更新
    proxy: null,  //设置代理
    proxy: { //目的是解决跨域，若测试环境不需要跨域，则不需要进行该配置
      '/api': { // 拦截以 /api 开头的url接口
        target: 'http://localhost:9091', //目标接口域名
        changeOrigin: true, //是否跨域
        ws: true, //如果要代理 websockets，配置这个参数
        secure: false, // 如果是https接口，需要配置这个参数
        // 标识替换
        // 原请求地址为 /api/getData 将'/api'替换''时，
        // 代理后的请求地址为： http://xxx.xxx.xxx/getData
        // 若替换为'/other',则代理后的请求地址为 http://xxx.xxx.xxx/other/getData 
        pathRewrite: { // 标识替换
          '^/api': ''   //重写接口 后台接口指向不统一  所以指向所有/
        }
      }
    }
  }
})
