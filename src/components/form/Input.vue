<template>
  <field>
    <field-label :id="id" :text="label" />
    <input
      :type="type"
      class="input"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </field>
</template>

<script>
import Field from "@/components/form/Field";
import FieldLabel from "@/components/form/Label";

export default {
  props: ["value", "id", "label", "type", "placeholder", "required"],

  components: {
    Field,
    FieldLabel,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/form/input";
</style>
