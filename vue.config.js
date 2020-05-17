const path = require("path");
// const utils = require("./utils");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        common: "@/common",
        views: "@/views"
      }
    }
  },

  css: {
    modules: true
  }
};
