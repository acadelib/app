<template>
  <div class="column" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tablet: String,
    desktop: String,
  },

  computed: {
    classes() {
      return {
        [`is-${this.tablet}-tablet`]: this.tablet,
        [`is-${this.desktop}-desktop`]: this.desktop,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/grid/column";
</style>
