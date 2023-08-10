const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/mixins.scss";
          @import "@/assets/scss/smart-grid.scss";
          @import "@/assets/scss/vars.scss";
        `,
      },
    },
  },
  devServer: {
    // 'auto' | 'all' [string] here
    allowedHosts: 'all',
  },
});
