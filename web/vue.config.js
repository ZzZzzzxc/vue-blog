// const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  //关闭eslint
  lintOnSave: false,
  //静态资源url，托管于腾讯云cos
  // publicPath: "https://vue-blog-1259658719.cos.ap-chengdu.myqcloud.com/web/",
  //本地调试
  publicPath: "./",
  outputDir: __dirname + "/../server/web",
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/'
  //   : '/'
  chainWebpack: config => {
    // 删除预加载
    config.plugins.delete("prefetch");
    // 压缩代码
    config.optimization.minimize(true);
    // 分割代码
    config.optimization.splitChunks({
      chunks: "all"
    });
  },
  // configureWebpack: config => {
  //   config.plugins.push(
  //     new CompressionPlugin({
  //       // 正在匹配需要压缩的文件后缀
  //       test: /\.(js|css|svg|woff|ttf|json|html)$/,
  //       // 大于10kb的会压缩
  //       threshold: 10240
  //       // 其余配置查看compression-webpack-plugin
  //     })
  //   );
  // },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin

    extract: false,
    // 开启 CSS source maps?

    sourceMap: false,
    // css预设器配置项

    loaderOptions: {},

    // 启用 CSS modules for all css / pre-processor files.

    modules: false
    
  }
};
