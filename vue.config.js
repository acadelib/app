const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/base/variables";
          @import "@/styles/mixins/breakpoint";`,
      },
    },
  },
});
