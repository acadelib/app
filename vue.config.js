module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/base/variables";
          @import "@/styles/mixins/breakpoint";`,
      },
    },
  },
};
