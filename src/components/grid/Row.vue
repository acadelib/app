<template>
  <div class="row" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isCentered: Boolean,
  },

  computed: {
    classes() {
      return {
        "is-centered": this.isCentered,
      };
    },
  },
};
</script>
