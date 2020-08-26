<template>
  <button :type="type" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    block: Boolean,
    color: String,
    type: String
  },

  computed: {
    classes() {
      return {
        "c-button": true,
        [`c-button__${this.color}`]: true,
        "c-button__block": this.block
      };
    }
  }
};
</script>

<style lang="scss">
@import "~@/styles/components/button";
</style>
