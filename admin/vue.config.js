module.exports = {
  lintOnSave: false,
  outputDir: __dirname + "/../server/admin",
  publicPath: process.env.NODE_ENV === "production" ? "/admin/" : "/"
};
