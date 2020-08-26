<template>
  <label :for="$props.for" class="c-form__label">{{ text }}</label>
</template>

<script>
export default {
  props: {
    for: String,
    text: String
  }
};
</script>

<style lang="scss">
@import "~@/styles/components/form/label";
</style>
