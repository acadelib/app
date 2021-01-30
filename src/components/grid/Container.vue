<template>
  <div class="container" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    fluid: Boolean,
  },

  computed: {
    classes() {
      return {
        [`is-fluid`]: this.fluid,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/grid/container";
</style>
