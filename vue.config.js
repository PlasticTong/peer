const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:8087,
    open: true,//启动项目打开浏览器
    hot: true,//热更新
  }
})
