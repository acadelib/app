<template>
  <div class="c-form__field">
    <label :for="id" class="c-form__label">{{ label }}</label>
    <input
      :type="type"
      class="c-form__input"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["value", "id", "label", "type", "placeholder", "required"],
};
</script>
