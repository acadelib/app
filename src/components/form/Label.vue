<template>
  <label :for="id" class="label">{{ text }}</label>
</template>

<script>
export default {
  props: {
    id: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/form/label";
</style>
