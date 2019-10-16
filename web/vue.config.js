module.exports = {
  baseUrl: "./",
  publicPath:'../../',
  outputDir: __dirname + "/../server/web",
  productionSourceMap: false,
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/'
  //   : '/'
  chainWebpack: config => {
    // 删除预加载
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    // 压缩代码
    config.optimization.minimize(true);
    // 分割代码
    config.optimization.splitChunks({
      chunks: "all"
    });
  },

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
