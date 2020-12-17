<template>
  <button :type="type" class="button" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    color: String,
  },

  computed: {
    classes() {
      return {
        [`is-${this.color}`]: this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/elements/button";
</style>
