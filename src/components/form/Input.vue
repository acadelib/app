<template>
  <field>
    <field-label :id="id" :text="label" />
    <input
      :type="type"
      class="input"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </field>
</template>

<script>
import Field from "@/components/form/Field";
import FieldLabel from "@/components/form/Label";

export default {
  props: ["modelValue", "id", "label", "type", "placeholder", "required"],
  emits: ["update:modelValue"],

  components: {
    Field,
    FieldLabel,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/form/input";
</style>
