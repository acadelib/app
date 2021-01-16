<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle">{{ subtitle }}</h6>
    </div>

    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/elements/card";
</style>
