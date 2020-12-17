<template>
  <div class="column" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tablet: Number,
    desktop: Number,
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
