<template>
  <div class="field">
    <label :for="id" class="label">{{ label }}</label>
    <input
      :type="type"
      class="input"
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
